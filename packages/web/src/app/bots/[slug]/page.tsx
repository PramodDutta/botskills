import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllBots, getBot } from '@/lib/bots';
import { CATEGORIES, RUNTIMES } from '@botskills/shared';
import { CopyButton } from '@/components/copy-button';
import { RelatedLinks } from '@/components/related-links';
import { relatedBots, relatedPostsForBot } from '@/lib/related';

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllBots().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bot = getBot(slug);
  if (!bot) return { title: 'Bot not found' };
  return {
    title: `${bot.name}: Grok Bot Skill`,
    description: bot.description,
    alternates: { canonical: `https://botskills.sh/bots/${slug}` },
  };
}

export default async function BotPage({ params }: Props) {
  const { slug } = await params;
  const bot = getBot(slug);
  if (!bot) notFound();

  const categoryName = CATEGORIES.find((c) => c.id === bot.category)?.name ?? bot.category;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://botskills.sh' },
      { '@type': 'ListItem', position: 2, name: 'Bots', item: 'https://botskills.sh/bots' },
      { '@type': 'ListItem', position: 3, name: bot.name, item: `https://botskills.sh/bots/${bot.slug}` },
    ],
  };

  return (
    <main className="wrap detail">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Link href="/" className="ds">&larr; Leaderboard</Link>
      <h1>{bot.name}</h1>
      <p className="sub">{bot.description}</p>
      <div className="meta-row">
        <span>{categoryName}</span>
        <span>{bot.integrations.join(' · ')}</span>
        <span>
          {bot.runtimes.map((r) => (
            <span key={r} className={`rt rt-${r}`}>
              {RUNTIMES.find((x) => x.id === r)?.badge ?? r}
            </span>
          ))}
        </span>
        <span className="mono">v{bot.version}</span>
        <span className="mono">by {bot.author}</span>
      </div>
      <div className="callout">
        <b>Boundary:</b> {bot.boundary}
      </div>
      <h2>Setup prompt</h2>
      <div className="prompt-actions">
        <CopyButton slug={bot.slug} prompt={bot.prompt} />
        {bot.shareUrl && (
          // Only rendered when a real share link exists. The id is minted by
          // Grok Bot when someone shares a Bot they built; it cannot be derived
          // from this file, so most bots will never have one.
          <a
            className="add-btn"
            href={bot.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Add to Grok Bot
          </a>
        )}
      </div>
      <pre>{bot.prompt}</pre>
      <p className="ds">
        Raw file: <code className="mono">/api/bots/{bot.slug}/content</code> · JSON:{' '}
        <code className="mono">/api/bots</code>
      </p>
      <RelatedLinks
        heading="Related bots and guides"
        bots={relatedBots(bot.slug)}
        posts={relatedPostsForBot(bot)}
      />
      {bot.attribution && (
        // The MIT licence asks that the notice be included, not that it be loud.
        // So: one quiet line, the full text one click away, and nothing in the
        // copy. Its own heading is stripped, since the summary already says it.
        <details className="attrib">
          <summary>{bot.license} licence and source</summary>
          <pre>{bot.attribution.replace(/^#{2,3}\s*Licen[sc]e and attribution\s*\n+/i, '')}</pre>
        </details>
      )}
    </main>
  );
}
