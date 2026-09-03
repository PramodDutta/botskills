import { NextResponse } from 'next/server';
import { getSql } from '@/lib/sql';

// Distinct visitors in the last 5 minutes. Real measurement or zero.
export async function GET() {
  const sql = getSql();
  if (!sql) return NextResponse.json({ online: 0 });
  try {
    const r = (await sql`
      SELECT count(DISTINCT visitor_hash)::int AS online
      FROM visit_events WHERE created_at > now() - interval '5 minutes'
    `) as Array<{ online: number }>;
    return NextResponse.json({ online: r[0]?.online ?? 0 });
  } catch {
    return NextResponse.json({ online: 0 });
  }
}
