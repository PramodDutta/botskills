import { getAllBots } from '@/lib/bots';
import { RUNTIMES } from '@botskills/shared';
import type { BoardRow } from '@/components/leaderboard';

// DEMO metrics until telemetry lands (P1). Deterministic per slug so the UI is
// stable between builds, and clearly not shipped as real numbers: the trust
// note on the page states copies come from telemetry, so this module must be
// replaced by the copy_events rollup BEFORE the site deploys publicly.
// Rendered as a visible chip beside every leaderboard heading while true.
export const DEMO_METRICS = true;

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function demoCopies(slug: string): { copies: number; delta7d: number } {
  const h = hash(slug);
  return { copies: 180 + (h % 1100), delta7d: (h % 97) - 12 };
}

export function getBoardRows(): BoardRow[] {
  const badge = (id: string) => RUNTIMES.find((r) => r.id === id)?.badge ?? id;
  const rows = getAllBots().map((b) => {
    const { copies, delta7d } = demoCopies(b.slug);
    return {
      slug: b.slug,
      name: b.name,
      description: b.description,
      category: b.category,
      contributor: b.author,
      runtimes: b.runtimes as string[],
      runtimeBadges: (b.runtimes as string[]).map(badge),
      copies,
      delta7d,
      isNew: false,
      rank: 0,
    };
  });
  rows.sort((a, b) => b.copies - a.copies);
  rows.forEach((r, i) => (r.rank = i + 1));
  // Newest two by name order stand in for created_at until the DB carries it.
  rows.slice(-2).forEach((r) => (r.isNew = true));
  return rows;
}
