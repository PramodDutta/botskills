import { NextResponse } from 'next/server';
import { getAllBots } from '@/lib/bots';

// Open JSON catalog. Deliberately crawl-friendly: allowed in robots.txt so
// Grok Bot / Rakazo / any agent can list the catalog without scraping HTML.
export function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const runtime = url.searchParams.get('runtime');

  let bots = getAllBots();
  if (category) bots = bots.filter((b) => b.category === category);
  if (runtime) bots = bots.filter((b) => (b.runtimes as string[]).includes(runtime));

  return NextResponse.json({
    total: bots.length,
    bots: bots.map(({ prompt: _prompt, ...meta }) => ({
      ...meta,
      content_url: `https://botskills.sh/api/bots/${meta.slug}/content`,
      html_url: `https://botskills.sh/bots/${meta.slug}`,
    })),
  });
}
