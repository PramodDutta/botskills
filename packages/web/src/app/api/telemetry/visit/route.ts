import { createHash } from 'node:crypto';
import { NextResponse } from 'next/server';

// Visit heartbeat for the live-visitors proof. Hash of IP + UA, never stored
// raw; one row per page load, session-throttled client-side. Reachable-or-
// dropped like all telemetry: the page never depends on this landing.
export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) return NextResponse.json({ ok: true });
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    const ua = request.headers.get('user-agent') ?? '';
    const visitorHash = createHash('sha256').update(`${ip}|${ua}`).digest('hex').slice(0, 24);
    let path = '/';
    try { path = String(((await request.json()) as { path?: string }).path ?? '/').slice(0, 120); } catch {}
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    await sql`INSERT INTO visit_events (visitor_hash, path) VALUES (${visitorHash}, ${path})`;
  } catch {}
  return NextResponse.json({ ok: true });
}
