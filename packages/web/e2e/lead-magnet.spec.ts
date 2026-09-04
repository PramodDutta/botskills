import { test, expect } from '@playwright/test';
import { REMOTE, SKIP_WRITES } from './env';

test.describe('fact check lead magnet', () => {
  test('page loads and gates the pack behind the form', async ({ page }) => {
    const res = await page.goto('/grok-bot-facts');
    expect(res?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Fact Check');
    // The payoff must not be readable before an email is left, or there is no
    // reason for anyone to leave one.
    await expect(page.locator('.facts-pack')).toHaveCount(0);
    await expect(page.locator('form.signup-form input[type="email"]')).toBeVisible();
  });

  test('honeypot is off screen, untabbable and hidden from assistive tech', async ({ page }) => {
    await page.goto('/grok-bot-facts');
    const trap = page.locator('form.signup-form input[name="website"]');
    await expect(trap).toHaveCount(1);
    // Deliberately NOT display:none. A naive bot skips hidden inputs and fills
    // rendered ones, so the trap has to be painted and simply pushed out of the
    // viewport. Assert that, rather than Playwright's notion of hidden.
    const box = await trap.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeLessThan(-1000);
    await expect(trap).toHaveAttribute('tabindex', '-1');
    await expect(trap).toHaveAttribute('aria-hidden', 'true');
  });

  test('submitting an email reveals the pack and posts the right source', async ({ page }) => {
    test.skip(REMOTE, SKIP_WRITES);
    await page.goto('/grok-bot-facts');
    const posted: Array<Record<string, unknown>> = [];
    page.on('request', (r) => {
      if (r.url().includes('/api/signups') && r.method() === 'POST') {
        posted.push(JSON.parse(r.postData() ?? '{}'));
      }
    });
    await page.locator('form.signup-form input[type="email"]').fill('e2e@example.com');
    await page.getByRole('button', { name: /fact check/i }).click();
    await expect(page.locator('.facts-pack')).toBeVisible({ timeout: 15_000 });
    expect(posted).toHaveLength(1);
    expect(posted[0].source).toBe('facts-pack');
    expect(posted[0].email).toBe('e2e@example.com');
    // The trap must be sent, not merely rendered. It was rendered and never
    // sent before, which made the server side check unreachable.
    expect(posted[0]).toHaveProperty('website');
  });

  test('the revealed pack carries sourced corrections', async ({ page }) => {
    test.skip(REMOTE, SKIP_WRITES);
    await page.goto('/grok-bot-facts');
    await page.locator('form.signup-form input[type="email"]').fill('e2e2@example.com');
    await page.getByRole('button', { name: /fact check/i }).click();
    await expect(page.locator('.facts-pack')).toBeVisible({ timeout: 15_000 });
    const items = page.locator('.facts-list > li');
    await expect(items).toHaveCount(15);
    await expect(page.locator('.facts-pack')).toContainText('docs.x.ai');
  });

  test('api rejects a submission that fills the honeypot', async ({ request }) => {
    const res = await request.post('/api/signups', {
      data: { email: 'trap@example.com', source: 'facts-pack', website: 'i-am-a-bot' },
    });
    expect(res.status()).toBe(200);
    // Accepted-looking, but never stored. That is the point of a trap.
    expect((await res.json()).stored).toBeUndefined();
  });

  test('api rejects an invalid email', async ({ request }) => {
    const res = await request.post('/api/signups', { data: { email: 'nope', source: 'facts-pack' } });
    expect(res.status()).toBe(400);
  });
});
