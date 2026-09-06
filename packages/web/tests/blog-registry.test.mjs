import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createBlogRegistry } from '../src/lib/blog-registry.ts';

const article = (slug) => ({
  slug,
  title: `Article ${slug}`,
  description: 'A useful article',
  date: '2026-09-05',
  category: 'Guide',
  content: '# Example',
});

test('all listed articles resolve to the same content in the page lookup', () => {
  const entries = [article('first'), article('second')];
  const { posts, postList } = createBlogRegistry(entries);
  assert.equal(postList.length, 2);
  assert.deepEqual(Object.keys(posts), ['first', 'second']);
  for (const { slug, ...post } of postList) assert.deepEqual(posts[slug], post);
});

test('missing articles cannot resolve to prototype properties', () => {
  const { posts } = createBlogRegistry([article('first')]);
  for (const slug of ['missing', 'constructor', 'toString', '__proto__']) {
    assert.equal(posts[slug], undefined);
  }
});

test('duplicate and malformed slugs stop publication', () => {
  assert.throws(() => createBlogRegistry([article('same'), article('same')]), /Duplicate/);
  for (const slug of ['', '../outside', 'two--hyphens', 'Uppercase']) {
    assert.throws(() => createBlogRegistry([article(slug)]), /Invalid/);
  }
});
