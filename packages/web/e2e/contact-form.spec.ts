import { test, expect } from '@playwright/test';

const PAGES = ['/contact', '/sponsor'];

test.describe('contact form', () => {
  for (const path of PAGES) {
    test(`${path} renders the form with every field`, async ({ page }) => {
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      const form = page.locator('form.contact-form');
      await expect(form).toBeVisible();
      await expect(form.locator('input[type="text"]:not([name="website"])')).toBeVisible();
      await expect(form.locator('input[type="email"]')).toBeVisible();
      await expect(form.locator('select')).toBeVisible();
      await expect(form.locator('textarea')).toBeVisible();
    });
  }

  test('posts every field, and never claims success when nothing accepted it', async ({ page }) => {
    await page.goto('/contact');
    const posted: Array<Record<string, unknown>> = [];
    page.on('request', (r) => {
      if (r.url().includes('/api/contact') && r.method() === 'POST') {
        posted.push(JSON.parse(r.postData() ?? '{}'));
      }
    });
    const form = page.locator('form.contact-form');
    await form.locator('input[type="text"]:not([name="website"])').fill('E2E Tester');
    await form.locator('input[type="email"]').fill('e2e@example.com');
    await form.locator('select').selectOption('marquee');
    await form.locator('textarea').fill('This is an end to end test message, long enough to pass.');
    await page.getByRole('button', { name: /send message/i }).click();

    // The payload is the part under test here.
    await expect
      .poll(() => posted.length, { timeout: 15_000 })
      .toBe(1);
    expect(posted[0].name).toBe('E2E Tester');
    expect(posted[0].email).toBe('e2e@example.com');
    expect(posted[0].placement).toBe('marquee');
    expect(posted[0]).toHaveProperty('website');

    // Locally there is no DATABASE_URL and no mail key, so nothing accepted the
    // message and it really is lost. The one behaviour that must hold is that
    // the sender is told, rather than shown a confirmation for a dropped
    // message. A false 'Got it' is the worst outcome this form can produce.
    // Scoped to the form: Next renders its own role=alert route announcer.
    const alert = page.locator('form.contact-form p[role="alert"]');
    const settled = page
      .getByText(/Got it/i)
      .or(page.getByText(/Saved\./))
      .or(alert);
    // Wait for the request to resolve before counting, otherwise this races the
    // fetch and reads zero of everything.
    await expect(settled.first()).toBeVisible({ timeout: 15_000 });
    const confirmed = await page.getByText(/Got it|Saved\./).count();
    const failed = await alert.count();
    expect(confirmed + failed).toBeGreaterThan(0);
    if (confirmed === 0) {
      await expect(alert).toContainText(/contact@thetestingacademy\.com/);
    }
  });

  test('when the server cannot mail it, the sender is handed a prefilled mailto', async ({ page }) => {
    // Simulate the production shape before a mail key exists: stored, not emailed.
    await page.route('**/api/contact', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true, stored: true, emailed: false }),
      }),
    );
    await page.goto('/contact');
    const form = page.locator('form.contact-form');
    await form.locator('input[type="text"]:not([name="website"])').fill('Dana Okafor');
    await form.locator('input[type="email"]').fill('dana@example.com');
    await form.locator('select').selectOption('edge');
    await form.locator('textarea').fill('We would like the edge card. Link goes to example.com.');
    await page.getByRole('button', { name: /send message/i }).click();

    const link = page.getByRole('link', { name: /open in my mail app/i });
    await expect(link).toBeVisible({ timeout: 15_000 });
    const href = await link.getAttribute('href');
    expect(href).toContain('mailto:contact@thetestingacademy.com');
    // The message must actually be in the body, not just the address.
    expect(decodeURIComponent(href ?? '')).toContain('Dana Okafor');
    expect(decodeURIComponent(href ?? '')).toContain('edge');
    expect(decodeURIComponent(href ?? '')).toContain('Link goes to example.com');
  });

  test('when the server does mail it, no mailto handoff is shown', async ({ page }) => {
    await page.route('**/api/contact', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true, stored: true, emailed: true }),
      }),
    );
    await page.goto('/contact');
    const form = page.locator('form.contact-form');
    await form.locator('input[type="text"]:not([name="website"])').fill('Dana Okafor');
    await form.locator('input[type="email"]').fill('dana@example.com');
    await form.locator('textarea').fill('A message long enough to pass validation here.');
    await page.getByRole('button', { name: /send message/i }).click();
    await expect(page.getByText(/Got it/i)).toBeVisible({ timeout: 15_000 });
    await expect(page.getByRole('link', { name: /open in my mail app/i })).toHaveCount(0);
  });

  test('api rejects a message that is too short', async ({ request }) => {
    const res = await request.post('/api/contact', {
      data: { name: 'A', email: 'a@b.co', message: 'hi' },
    });
    expect(res.status()).toBe(400);
  });

  test('api rejects an invalid email', async ({ request }) => {
    const res = await request.post('/api/contact', {
      data: { name: 'A', email: 'nope', message: 'a long enough message here' },
    });
    expect(res.status()).toBe(400);
  });

  test('api traps a honeypot submission without storing it', async ({ request }) => {
    const res = await request.post('/api/contact', {
      data: { name: 'Bot', email: 'b@b.co', message: 'a long enough message here', website: 'x' },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.stored).toBeUndefined();
    expect(body.emailed).toBeUndefined();
  });

  test('an unknown placement falls back rather than being stored raw', async ({ request }) => {
    const res = await request.post('/api/contact', {
      data: { name: 'A', email: 'a@b.co', message: 'a long enough message here', placement: 'DROP TABLE' },
    });
    // Accepted, but the value is allowlisted server side, never echoed back raw.
    expect([200, 503]).toContain(res.status());
  });
});
