import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllBots, getBot } from '@/lib/bots';
import { CATEGORIES, RUNTIMES } from '@botskills/shared';
import { CopyButton } from '@/components/copy-button';

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
      <CopyButton slug={bot.slug} prompt={bot.prompt} />
      <pre>{bot.prompt}</pre>
      <p className="ds">
        Raw file: <code className="mono">/api/bots/{bot.slug}/content</code> · JSON:{' '}
        <code className="mono">/api/bots</code>
      </p>
      {bot.attribution && (
        // Kept out of the copy but not out of the page: the upstream MIT licence
        // requires the notice travel with the work, and the contributor deserves
        // the credit. Collapsed because it is reference material, not the product.
        <details className="attrib">
          <summary>Licence and attribution</summary>
          <pre>{bot.attribution}</pre>
        </details>
      )}
    </main>
  );
}
