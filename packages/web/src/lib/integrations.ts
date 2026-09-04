import type { ParsedBot } from '@botskills/shared';
import { postList } from '@/app/blog/posts';
import { getAllBots } from '@/lib/bots';

// Integration hubs: one page per tool, built from the `integrations` field every
// bot already declares plus the articles whose slug or title names the tool.
// Nothing here is typed in by hand, so a new bot or article joins its hub on the
// next build. The query shape that already draws search traffic is
// "grok bot <tool>", and these pages are that shape.

export interface HubPost {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export interface IntegrationHub {
  id: string;
  name: string;
  bots: ParsedBot[];
  posts: HubPost[];
}

const NAMES: Record<string, string> = {
  gmail: 'Gmail', slack: 'Slack', github: 'GitHub', x: 'X', notion: 'Notion',
  'google-calendar': 'Google Calendar', 'google-drive': 'Google Drive', sheets: 'Google Sheets',
  'google-sheets': 'Google Sheets', 'google-docs': 'Google Docs', 'google-slides': 'Google Slides',
  'google-search': 'Google Search', 'google-trends': 'Google Trends', stripe: 'Stripe',
  intercom: 'Intercom', airtable: 'Airtable', sentry: 'Sentry', linear: 'Linear',
  salesforce: 'Salesforce', youtube: 'YouTube', quickbooks: 'QuickBooks', hubspot: 'HubSpot',
  linkedin: 'LinkedIn', 'sales-navigator': 'LinkedIn Sales Navigator', gong: 'Gong',
  granola: 'Granola', zendesk: 'Zendesk', zoom: 'Zoom', figma: 'Figma', jira: 'Jira',
  discord: 'Discord', posthog: 'PostHog', screenshotone: 'ScreenshotOne', webflow: 'Webflow',
  outlook: 'Outlook', plaid: 'Plaid', 'yahoo-finance': 'Yahoo Finance',
  'podcast-rss-feeds': 'Podcast RSS feeds', glean: 'Glean', snowflake: 'Snowflake',
  'help-scout': 'Help Scout', telegram: 'Telegram', 'hacker-news': 'Hacker News',
  reddit: 'Reddit', amazon: 'Amazon', agentmail: 'AgentMail', feedhive: 'FeedHive',
  costco: 'Costco', whatsapp: 'WhatsApp', shopify: 'Shopify',
};

export function integrationName(id: string): string {
  return NAMES[id] ?? id.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}

const tokens = (s: string) => s.toLowerCase().split(/[^a-z0-9+]+/).filter(Boolean);

// Token sequences that count as naming the tool. Whole tokens only, so "x"
// never matches "linux" and "search" alone never matches everything.
function matchers(id: string): string[][] {
  const seqs = [id.split('-')];
  if (id.startsWith('google-') && id !== 'google-search') seqs.push(id.slice(7).split('-'));
  if (id === 'sheets') seqs.push(['google', 'sheets']);
  if (id === 'podcast-rss-feeds') seqs.push(['podcast', 'rss']);
  return seqs;
}

function hasSeq(hay: string[], seq: string[]): boolean {
  outer: for (let i = 0; i + seq.length <= hay.length; i += 1) {
    for (let j = 0; j < seq.length; j += 1) if (hay[i + j] !== seq[j]) continue outer;
    return true;
  }
  return false;
}

let cache: IntegrationHub[] | null = null;

export function getIntegrations(): IntegrationHub[] {
  if (cache) return cache;
  const byId = new Map<string, ParsedBot[]>();
  for (const b of getAllBots()) {
    for (const id of b.integrations) byId.set(id, [...(byId.get(id) ?? []), b]);
  }
  const hubs: IntegrationHub[] = [];
  for (const [id, bots] of byId) {
    if (id === 'grok-bot') continue; // a runtime, not a tool a bot connects to
    const seqs = matchers(id);
    const posts = postList
      .filter((p) => {
        const hay = [...tokens(p.slug), ...tokens(p.title)];
        return seqs.some((s) => hasSeq(hay, s));
      })
      .map((p) => ({ slug: p.slug, title: p.title, description: p.description, category: p.category }));
    // A hub with one bot and no article is a thin page; leave it out until it
    // has something to say.
    if (bots.length < 2 && posts.length < 1) continue;
    hubs.push({
      id,
      name: integrationName(id),
      bots: [...bots].sort((a, b) => a.name.localeCompare(b.name)),
      posts,
    });
  }
  hubs.sort((a, b) => b.bots.length - a.bots.length || a.name.localeCompare(b.name));
  cache = hubs;
  return hubs;
}

export function getIntegration(id: string): IntegrationHub | undefined {
  return getIntegrations().find((h) => h.id === id);
}
