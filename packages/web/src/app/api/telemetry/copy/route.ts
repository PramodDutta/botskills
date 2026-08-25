import { NextResponse } from 'next/server';
import { getBot } from '@/lib/bots';

// Copy telemetry: the number the whole leaderboard rests on. Best-effort DB
// write behind the lazy proxy; without DATABASE_URL it accepts and drops so
// the UX never depends on infrastructure being up.
export async function POST(request: Request) {
  let slug = '';
  try {
    const body = (await request.json()) as { slug?: string };
    slug = String(body.slug ?? '');
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!slug || !getBot(slug)) return NextResponse.json({ ok: false }, { status: 404 });

  if (process.env.DATABASE_URL) {
    try {
      const { db, schema } = await import('@/db');
      await db.insert(schema.copyEvents).values({ botSlug: slug, source: 'web' });
    } catch {
      // Swallow: losing one telemetry event beats failing the user's copy.
    }
  }
  return NextResponse.json({ ok: true });
}
