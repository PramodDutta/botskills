import { NextResponse } from 'next/server';
import { getBot } from '@/lib/bots';
import { getSql } from '@/lib/sql';
import { requestFingerprint } from '@/lib/request';

// One upvote per bot per voter. The voter hash is derived from IP + UA and
// never stored raw, and the unique index makes repeats a no-op. Accounts will
// replace the hash with a user id when auth ships; the API shape stays.
export async function POST(request: Request) {
  let slug = '';
  try {
    const body = (await request.json()) as { slug?: string };
    slug = String(body.slug ?? '');
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!slug || !getBot(slug)) return NextResponse.json({ ok: false }, { status: 404 });

  const sql = getSql();
  if (!sql) return NextResponse.json({ ok: true, counted: false });
  try {
    const voterHash = requestFingerprint(request);
    const rows = await sql`
      INSERT INTO vote_events (bot_slug, voter_hash) VALUES (${slug}, ${voterHash})
      ON CONFLICT (bot_slug, voter_hash) DO NOTHING
      RETURNING id`;
    return NextResponse.json({ ok: true, counted: rows.length > 0 });
  } catch {
    return NextResponse.json({ ok: true, counted: false });
  }
}
