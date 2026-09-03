import { getAllBots } from '@/lib/bots';
import { getSql } from '@/lib/sql';
import { RUNTIMES } from '@botskills/shared';
import type { BoardRow } from '@/components/leaderboard';

// Real telemetry-backed board. Copies come from copy_events; with no reachable
// database this returns zeros, which is the truth (zero recorded copies), so
// local and secret-free builds stay green and honest. Pages using this set
// revalidate so counts refresh on a schedule in production.

interface Counts {
  total: Map<string, number>;
  last7d: Map<string, number>;
  votes: Map<string, number>;
}

async function getCopyCounts(): Promise<Counts> {
  const empty: Counts = { total: new Map(), last7d: new Map(), votes: new Map() };
  const sql = getSql();
  if (!sql) return empty;
  try {
    const rows = (await sql`
      SELECT bot_slug,
             count(*)::int AS total,
             count(*) FILTER (WHERE created_at > now() - interval '7 days')::int AS last7d
      FROM copy_events
      GROUP BY bot_slug
    `) as Array<{ bot_slug: string; total: number; last7d: number }>;
    const total = new Map(rows.map((r) => [r.bot_slug, r.total]));
    const last7d = new Map(rows.map((r) => [r.bot_slug, r.last7d]));
    const voteRows = (await sql`
      SELECT bot_slug, count(*)::int AS votes FROM vote_events GROUP BY bot_slug
    `) as Array<{ bot_slug: string; votes: number }>;
    const votes = new Map(voteRows.map((r) => [r.bot_slug, r.votes]));
    return { total, last7d, votes };
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
    integrations: b.integrations as string[],
    runtimes: b.runtimes as string[],
    runtimeBadges: (b.runtimes as string[]).map(badge),
    copies: counts.total.get(b.slug) ?? 0,
    delta7d: counts.last7d.get(b.slug) ?? 0,
    votes: counts.votes.get(b.slug) ?? 0,
    isNew: false,
    rank: 0,
  }));
  rows.sort((a, b) => b.copies - a.copies || b.votes - a.votes || a.name.localeCompare(b.name));
  rows.forEach((r, i) => (r.rank = i + 1));
  rows.slice(-2).forEach((r) => (r.isNew = true));
  return rows;
}
