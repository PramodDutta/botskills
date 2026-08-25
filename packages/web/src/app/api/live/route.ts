import { NextResponse } from 'next/server';

// Distinct visitors in the last 5 minutes. Real measurement or zero.
export async function GET() {
  if (!process.env.DATABASE_URL) return NextResponse.json({ online: 0 });
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const r = (await sql`
      SELECT count(DISTINCT visitor_hash)::int AS online
      FROM visit_events WHERE created_at > now() - interval '5 minutes'
    `) as Array<{ online: number }>;
    return NextResponse.json({ online: r[0]?.online ?? 0 });
  } catch {
    return NextResponse.json({ online: 0 });
  }
}
