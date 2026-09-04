import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getIntegration, getIntegrations } from '@/lib/integrations';
import { IntegrationIcon } from '@/components/integration-icon';

interface Props { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return getIntegrations().map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const hub = getIntegration(id);
  if (!hub) return { title: 'Integration not found' };
  const n = hub.bots.length;
  const g = hub.posts.length;
  const counts = `${n} ${n === 1 ? 'Bot' : 'Bots'}${g ? ` and ${g} ${g === 1 ? 'Guide' : 'Guides'}` : ''}`;
  return {
    title: { absolute: `Grok Bot ${hub.name} Integration: ${counts}` },
    description: `${hub.name} bots for Grok Bot and Rakazo, each declaring the one action it never takes without you, plus the setup and permission guides that cover ${hub.name}.`,
    alternates: { canonical: `https://botskills.sh/integrations/${id}` },
  };
}

export default async function IntegrationPage({ params }: Props) {
  const { id } = await params;
  const hub = getIntegration(id);
  if (!hub) notFound();

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://botskills.sh' },
      { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://botskills.sh/integrations' },
      { '@type': 'ListItem', position: 3, name: hub.name, item: `https://botskills.sh/integrations/${hub.id}` },
    ],
  };

  return (
    <main className="wrap detail">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Link href="/integrations" className="ds">&larr; All integrations</Link>
      <h1>Grok Bot and {hub.name}</h1>
      <p className="sub">
        <IntegrationIcon id={hub.id} /> {hub.bots.length} {hub.bots.length === 1 ? 'bot' : 'bots'} in
        the directory connect to {hub.name}
        {hub.posts.length > 0
          ? `, and ${hub.posts.length} ${hub.posts.length === 1 ? 'guide covers' : 'guides cover'} setting it up`
          : ''}
        . Each bot declares the one action it never takes without you, which for a connected
        tool is usually the write, the send or the payment.
      </p>

      <h2>Bots that connect to {hub.name}</h2>
      {hub.bots.map((b) => (
        <p key={b.slug}>
          <Link href={`/bots/${b.slug}`} className="nm">{b.name}</Link>
          <br />
          <span className="ds">{b.description}</span>
          <br />
          <span className="ds"><b>Boundary:</b> {b.boundary}</span>
        </p>
      ))}

      {hub.posts.length > 0 && (
        <>
          <h2>Guides that cover {hub.name}</h2>
          {hub.posts.map((p) => (
            <p key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="nm">{p.title}</Link>
              <br />
              <span className="ds">{p.category} · {p.description}</span>
            </p>
          ))}
        </>
      )}

      <p className="trustnote">
        Missing a {hub.name} bot you would use? <Link href="/agents" className="nm">Add one</Link>:
        one markdown file, one pull request. Or search the whole catalogue for{' '}
        <Link href={`/bots?q=${hub.id}`} className="nm">{hub.name}</Link>.
      </p>
    </main>
  );
}
