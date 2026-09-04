import { test, expect } from '@playwright/test';

const PAGES = [
  '/', '/bots', '/blog', '/grok-bot', '/rakazo', '/agents', '/sponsor', '/contact',
  '/signup', '/grok-bot-facts', '/llms.txt', '/robots.txt', '/sitemap.xml', '/opengraph-image',
  '/integrations', '/integrations/gmail', '/integrations/stripe',
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

test.describe('internal linking', () => {
  test('an article carries a related-links block with real targets', async ({ page }) => {
    await page.goto('/blog/grok-bot-stripe');
    const links = page.locator('nav.related a[href^="/blog/"]');
    expect(await links.count()).toBeGreaterThan(0);
    const href = await links.first().getAttribute('href');
    const res = await page.request.get(href!);
    expect(res.status()).toBe(200);
  });

  test('a bot page links to related bots and guides', async ({ page }) => {
    await page.goto('/bots/agent-inbox');
    expect(await page.locator('nav.related a[href^="/bots/"]').count()).toBeGreaterThan(0);
    expect(await page.locator('nav.related a[href^="/blog/"]').count()).toBeGreaterThan(0);
  });

  test('an integration hub lists its bots and links back to each', async ({ page }) => {
    const res = await page.goto('/integrations/gmail');
    expect(res?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Gmail');
    expect(await page.locator('main a[href^="/bots/"]').count()).toBeGreaterThan(5);
  });

  test('the homepage shows curated picks and never a zero copy count', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Start here' })).toBeVisible();
    expect(await page.getByText(/\b0 copies\b/).count()).toBe(0);
  });

  test('article titles carry no site suffix', async ({ page }) => {
    await page.goto('/blog/grok-bot-stripe');
    expect(await page.title()).not.toContain('| botskills.sh');
  });
});
