import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { posts } from '../posts';

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://botskills.sh/blog/${slug}` },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();
  // P0 renders markdown as preformatted text; react-markdown + sanitize lands in P1.
  return (
    <main className="wrap detail">
      <article className="post">
        <span className="ds">{post.date} · {post.category}</span>
        <pre>{post.content.trim()}</pre>
      </article>
    </main>
  );
}
