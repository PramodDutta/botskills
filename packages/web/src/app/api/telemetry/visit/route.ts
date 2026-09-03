import { NextResponse } from 'next/server';
import { getSql } from '@/lib/sql';
import { requestFingerprint } from '@/lib/request';

// Visit heartbeat for the live-visitors proof. Hash of IP + UA, never stored
// raw; one row per page load, session-throttled client-side. Reachable-or-
// dropped like all telemetry: the page never depends on this landing.
export async function POST(request: Request) {
  const sql = getSql();
  if (!sql) return NextResponse.json({ ok: true });
  try {
    const visitorHash = requestFingerprint(request);
    let path = '/';
    try { path = String(((await request.json()) as { path?: string }).path ?? '/').slice(0, 120); } catch {}
    await sql`INSERT INTO visit_events (visitor_hash, path) VALUES (${visitorHash}, ${path})`;
  } catch {}
  return NextResponse.json({ ok: true });
}
