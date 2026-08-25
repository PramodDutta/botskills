import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PostBody } from '@/components/post-body';
import { posts } from '../posts';

/**
 * Every article ends with four questions under a Frequently Asked Questions
 * heading, so the FAQ schema can be derived from the markdown instead of being
 * maintained by hand. Answers are the surface AI search engines quote, and they
 * are only quotable if they are marked up.
 */
function extractFaq(markdown: string): Array<{ q: string; a: string }> {
  const section = markdown.split(/\n## Frequently Asked Questions\n/)[1];
  if (!section) return [];
  const out: Array<{ q: string; a: string }> = [];
  const re = /^### (.+?)\n([\s\S]*?)(?=\n### |\n## |$)/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(section)) !== null) {
    const a = m[2].replace(/\s+/g, ' ').trim();
    if (a) out.push({ q: m[1].trim(), a });
  }
  return out;
}

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
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'botskills.sh', url: 'https://botskills.sh' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://botskills.sh/blog/${slug}` },
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

  const faq = extractFaq(post.content);
  const faqLd = faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <main className="wrap detail">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <article className="post prose">
        <p className="ds">{post.date} · {post.category}</p>
        <PostBody content={post.content} />
      </article>
    </main>
  );
}
