import { createHash } from 'node:crypto';
import { NextResponse } from 'next/server';
import { getBot } from '@/lib/bots';

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

  if (!process.env.DATABASE_URL) return NextResponse.json({ ok: true, counted: false });
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    const ua = request.headers.get('user-agent') ?? '';
    const voterHash = createHash('sha256').update(`${ip}|${ua}`).digest('hex').slice(0, 24);
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`
      INSERT INTO vote_events (bot_slug, voter_hash) VALUES (${slug}, ${voterHash})
      ON CONFLICT (bot_slug, voter_hash) DO NOTHING
      RETURNING id`;
    return NextResponse.json({ ok: true, counted: rows.length > 0 });
  } catch {
    return NextResponse.json({ ok: true, counted: false });
  }
}
