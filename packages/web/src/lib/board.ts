import { getAllBots } from '@/lib/bots';
import { RUNTIMES } from '@botskills/shared';
import type { BoardRow } from '@/components/leaderboard';

// Real telemetry-backed board. Copies come from copy_events; with no reachable
// database this returns zeros, which is the truth (zero recorded copies), so
// local and secret-free builds stay green and honest. Pages using this set
// revalidate so counts refresh on a schedule in production.

interface Counts {
  total: Map<string, number>;
  last7d: Map<string, number>;
}

async function getCopyCounts(): Promise<Counts> {
  const empty: Counts = { total: new Map(), last7d: new Map() };
  if (!process.env.DATABASE_URL) return empty;
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const rows = (await sql`
      SELECT bot_slug,
             count(*)::int AS total,
             count(*) FILTER (WHERE created_at > now() - interval '7 days')::int AS last7d
      FROM copy_events
      GROUP BY bot_slug
    `) as Array<{ bot_slug: string; total: number; last7d: number }>;
    const total = new Map(rows.map((r) => [r.bot_slug, r.total]));
    const last7d = new Map(rows.map((r) => [r.bot_slug, r.last7d]));
    return { total, last7d };
  } catch {
    // Unreachable or misconfigured database: zeros, never fabricated numbers.
    return empty;
  }
}

export async function getBoardRows(): Promise<BoardRow[]> {
  const counts = await getCopyCounts();
  const badge = (id: string) => RUNTIMES.find((r) => r.id === id)?.badge ?? id;
  const rows = getAllBots().map((b) => ({
    slug: b.slug,
    name: b.name,
    description: b.description,
    category: b.category,
    contributor: b.author,
    runtimes: b.runtimes as string[],
    runtimeBadges: (b.runtimes as string[]).map(badge),
    copies: counts.total.get(b.slug) ?? 0,
    delta7d: counts.last7d.get(b.slug) ?? 0,
    isNew: false,
    rank: 0,
  }));
  rows.sort((a, b) => b.copies - a.copies || a.name.localeCompare(b.name));
  rows.forEach((r, i) => (r.rank = i + 1));
  rows.slice(-2).forEach((r) => (r.isNew = true));
  return rows;
}
