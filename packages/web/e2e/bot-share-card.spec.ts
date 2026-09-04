import { test, expect } from '@playwright/test';

// Real slugs only, spanning an original category and two added in the taxonomy
// widening, so a broken category also shows up here.
const SLUGS = ['agent-inbox', 'source-verifier', 'citation-checker'];

async function ogUrl(page: import('@playwright/test').Page, slug: string) {
  await page.goto(`/bots/${slug}`);
  return page.locator('meta[property="og:image"]').first().getAttribute('content');
}

test.describe('bot pages', () => {
  for (const slug of SLUGS) {
    test(`${slug} renders with its name as the h1`, async ({ page }) => {
      const res = await page.goto(`/bots/${slug}`);
      expect(res?.status()).toBe(200);
      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();
      expect((await h1.textContent())?.trim().length).toBeGreaterThan(0);
    });

    test(`${slug} serves a real PNG from its own opengraph-image route`, async ({ request }) => {
      const res = await request.get(`/bots/${slug}/opengraph-image`);
      expect(res.status()).toBe(200);
      expect(res.headers()['content-type']).toContain('image/png');
      // A zero byte 200 would pass a status check and still be a broken card.
      expect((await res.body()).byteLength).toBeGreaterThan(1000);
    });
  }

  test('og:image meta tag is present on a bot page', async ({ page }) => {
    const url = await ogUrl(page, SLUGS[0]);
    expect(url).toBeTruthy();
    expect(url).toContain('opengraph-image');
  });

  // The actual regression this suite exists to prevent: every bot sharing one
  // generic card. Status checks all pass in that world, so assert inequality.
  test('two different bots produce two different og:image URLs', async ({ page }) => {
    const a = await ogUrl(page, SLUGS[0]);
    const b = await ogUrl(page, SLUGS[1]);
    expect(a).toBeTruthy();
    expect(b).toBeTruthy();
    expect(a).not.toBe(b);
  });

  test('copy button is present and clicking it does not throw', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-write']);
    // The click fires copy telemetry. Answer it here so a run against the live
    // site never adds a test click to a real bot's copy count.
    await page.route('**/api/telemetry/copy', (route) =>
      route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
    );
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`/bots/${SLUGS[0]}`);
    const btn = page.locator('.copy-btn');
    await expect(btn).toBeVisible();
    await btn.click();
    expect(errors).toEqual([]);
  });

  test('a bot with no shareUrl renders no Add to Grok Bot control', async ({ page }) => {
    await page.goto(`/bots/${SLUGS[0]}`);
    await expect(page.locator('.add-btn')).toHaveCount(0);
    await expect(page.getByText('Add to Grok Bot')).toHaveCount(0);
  });
});
