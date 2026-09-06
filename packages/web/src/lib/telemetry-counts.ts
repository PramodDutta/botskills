import type { Sql } from './sql';

interface CopyCount {
  bot_slug: string;
  total: number;
  last7d: number;
}

interface VoteCount {
  bot_slug: string;
  votes: number;
}

async function readCopies(sql: Sql): Promise<CopyCount[]> {
  try {
    return (await sql`
      SELECT bot_slug,
             count(*)::int AS total,
             count(*) FILTER (WHERE created_at > now() - interval '7 days')::int AS last7d
      FROM copy_events
      GROUP BY bot_slug
    `) as CopyCount[];
  } catch {
    return [];
  }
}

async function readVotes(sql: Sql): Promise<VoteCount[]> {
  try {
    return (await sql`
      SELECT bot_slug, count(*)::int AS votes FROM vote_events GROUP BY bot_slug
    `) as VoteCount[];
  } catch {
    return [];
  }
}

// A missing or unavailable table must not erase the other table's measurements.
// Independent queries also avoid making the second read wait for the first.
export async function getTelemetryCounts(sql: Sql | null) {
  const [copies, votes] = sql ? await Promise.all([readCopies(sql), readVotes(sql)]) : [[], []];
  return {
    total: new Map(copies.map((row) => [row.bot_slug, row.total])),
    last7d: new Map(copies.map((row) => [row.bot_slug, row.last7d])),
    votes: new Map(votes.map((row) => [row.bot_slug, row.votes])),
  };
}
