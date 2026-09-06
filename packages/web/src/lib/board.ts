import { getAllBots } from '@/lib/bots';
import { getSql } from '@/lib/sql';
import { getTelemetryCounts } from '@/lib/telemetry-counts';
import { RUNTIMES } from '@botskills/shared';
import type { BoardRow } from '@/components/leaderboard';

// Real telemetry-backed board. Copies come from copy_events; with no reachable
// database this returns zeros, which is the truth (zero recorded copies), so
// local and secret-free builds stay green and honest. Pages using this set
// revalidate so counts refresh on a schedule in production.

export async function getBoardRows(): Promise<BoardRow[]> {
  const counts = await getTelemetryCounts(getSql());
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

// Six bots a first-time visitor can succeed with in ten minutes. Curated on
// purpose: with a young directory the copy counts are too thin to rank by, and a
// row of zeros reads as a dead site. Replace with a data-driven pick once counts
// are real. Order is the order they render.
export const START_HERE = [
  'email-purger',
  'bot-advisor',
  'chief-of-staff',
  'inbox-triage',
  'meeting-prep-brief',
  'competitor-pricing-watch',
];

export function startHereRows(rows: BoardRow[]): BoardRow[] {
  return START_HERE.map((slug) => rows.find((r) => r.slug === slug)).filter(
    (r): r is BoardRow => !!r,
  );
}
