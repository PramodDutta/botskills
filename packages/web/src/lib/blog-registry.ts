export interface BlogPost {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: string;
  content: string;
}

export type ListedPost = { slug: string } & BlogPost;

/** Derive both public views from one list, rejecting accidental slug overwrites. */
export function createBlogRegistry(entries: ListedPost[]): {
  posts: Record<string, BlogPost>;
  postList: ListedPost[];
} {
  // A URL such as /blog/constructor must not resolve to Object.prototype.
  const posts: Record<string, BlogPost> = Object.create(null);
  for (const { slug, ...post } of entries) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      throw new Error(`Invalid article slug: ${slug}`);
    }
    if (Object.hasOwn(posts, slug)) {
      throw new Error(`Duplicate article slug: ${slug}`);
    }
    posts[slug] = post;
  }
  return { posts, postList: entries };
}
