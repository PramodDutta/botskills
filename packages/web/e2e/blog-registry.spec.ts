import { test, expect } from '@playwright/test';
import { postList } from '../src/app/blog/posts';

test('every registered article is linked from the blog index and sitemap', async ({ request }) => {
  const [blog, sitemap] = await Promise.all([request.get('/blog'), request.get('/sitemap.xml')]);
  expect(blog.status()).toBe(200);
  expect(sitemap.status()).toBe(200);
  const html = await blog.text();
  const xml = await sitemap.text();
  for (const { slug } of postList) {
    expect(html, slug).toContain(`href="/blog/${slug}"`);
    expect(xml, slug).toContain(`<loc>https://botskills.sh/blog/${slug}</loc>`);
  }
});

for (const slug of ['not-a-published-article', 'constructor', 'toString', '__proto__']) {
  test(`unknown article ${slug} returns 404`, async ({ request }) => {
    const response = await request.get(`/blog/${slug}`);
    expect(response.status()).toBe(404);
  });
}
