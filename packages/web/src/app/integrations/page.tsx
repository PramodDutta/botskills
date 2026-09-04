import Link from 'next/link';
import type { Metadata } from 'next';
import { getIntegrations } from '@/lib/integrations';
import { IntegrationIcon } from '@/components/integration-icon';

export const metadata: Metadata = {
  title: 'Grok Bot Integrations: Bots and Setup Guides by Tool',
  description:
    'Every tool the bots in this directory connect to, from Gmail and Slack to Stripe and Salesforce, with the bots that use it and the guides that cover permissions and boundaries.',
  alternates: { canonical: 'https://botskills.sh/integrations' },
};

export default function IntegrationsPage() {
  const hubs = getIntegrations();
  return (
    <main className="wrap detail">
      <h1>Grok Bot integrations</h1>
      <p className="sub">
        {hubs.length} tools, each with the bots that connect to it and the guides that cover
        setting it up safely. Every bot declares the one action it never takes without you.
      </p>
      <div className="pills">
        {hubs.map((h) => (
          <Link key={h.id} href={`/integrations/${h.id}`} className="pill">
            <IntegrationIcon id={h.id} /> <b>{h.bots.length}</b>
          </Link>
        ))}
      </div>
      <h2>By tool</h2>
      {hubs.map((h) => (
        <p key={h.id}>
          <Link href={`/integrations/${h.id}`} className="nm">
            Grok Bot and {h.name}
          </Link>
          <br />
          <span className="ds">
            {h.bots.length} {h.bots.length === 1 ? 'bot' : 'bots'}
            {h.posts.length > 0 ? `, ${h.posts.length} ${h.posts.length === 1 ? 'guide' : 'guides'}` : ''}
          </span>
        </p>
      ))}
    </main>
  );
}
