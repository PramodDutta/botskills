import { NextResponse } from 'next/server';
import { getAllBots } from '@/lib/bots';

async function copyCounts(): Promise<Map<string, number>> {
  if (!process.env.DATABASE_URL) return new Map();
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const rows = (await sql`
      SELECT bot_slug, count(*)::int AS total FROM copy_events GROUP BY bot_slug
    `) as Array<{ bot_slug: string; total: number }>;
    return new Map(rows.map((r) => [r.bot_slug, r.total]));
  } catch {
    return new Map();
  }
}

// Open JSON catalog. Deliberately crawl-friendly: allowed in robots.txt so
// Grok Bot / Rakazo / any agent can list the catalog without scraping HTML.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const runtime = url.searchParams.get('runtime');

  const counts = await copyCounts();
  let bots = getAllBots();
  if (category) bots = bots.filter((b) => b.category === category);
  if (runtime) bots = bots.filter((b) => (b.runtimes as string[]).includes(runtime));

  return NextResponse.json({
    total: bots.length,
    bots: bots.map(({ prompt: _prompt, ...meta }) => ({
      ...meta,
      copies: counts.get(meta.slug) ?? 0,
      content_url: `https://botskills.sh/api/bots/${meta.slug}/content`,
      html_url: `https://botskills.sh/bots/${meta.slug}`,
    })),
  });
}
