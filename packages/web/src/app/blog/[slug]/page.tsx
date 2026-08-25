import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://botskills.sh/blog/${slug}`,
    publisher: { '@type': 'Organization', name: 'botskills.sh', url: 'https://botskills.sh' },
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://botskills.sh' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://botskills.sh/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://botskills.sh/blog/${slug}` },
    ],
  };

  return (
    <main className="wrap detail">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <article className="post prose">
        <p className="ds">{post.date} · {post.category}</p>
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
          {post.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
