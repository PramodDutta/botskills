import { test, expect } from '@playwright/test';

const PAGES = [
  '/', '/bots', '/blog', '/grok-bot', '/rakazo', '/agents', '/sponsor', '/contact',
  '/signup', '/grok-bot-facts', '/llms.txt', '/robots.txt', '/sitemap.xml', '/opengraph-image',
];

test.describe('every top level page renders', () => {
  for (const path of PAGES) {
    test(`${path} is a 200`, async ({ request }) => {
      const res = await request.get(path);
      expect(res.status()).toBe(200);
    });
  }

  test('the sponsor page quotes the live catalogue count, not a typed number', async ({ page, request }) => {
    const total = (await (await request.get('/api/bots')).json()).total as number;
    await page.goto('/sponsor');
    await expect(page.getByText(`There are ${total} bot listings`)).toBeVisible();
  });

  test('the sitemap carries bots and posts', async ({ request }) => {
    const xml = await (await request.get('/sitemap.xml')).text();
    expect(xml).toContain('https://botskills.sh/bots/agent-inbox');
    expect((xml.match(/<loc>/g) ?? []).length).toBeGreaterThan(500);
  });

  // One post under each FAQ heading spelling, so a regression in the extractor
  // shows up as a missing FAQPage rather than passing on the common case.
  for (const slug of ['grok-bot-shared-computer-security', 'bots-and-glean']) {
    test(`/blog/${slug} renders with BlogPosting and FAQPage structured data`, async ({ page }) => {
      const res = await page.goto(`/blog/${slug}`);
      expect(res?.status()).toBe(200);
      await expect(page.locator('article h1')).toBeVisible();
      const ld = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(ld.some((s) => s.includes('"BlogPosting"'))).toBe(true);
      expect(ld.some((s) => s.includes('"FAQPage"'))).toBe(true);
    });
  }
});
