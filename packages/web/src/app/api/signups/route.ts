import { NextResponse } from 'next/server';

// Accounts waitlist. Upvotes work anonymously today; an account will let
// people keep votes across devices. Upsert-by-(email, source), no drama.
export async function POST(request: Request) {
  let email = '', website = '';
  try {
    const body = (await request.json()) as { email?: string; website?: string };
    email = String(body.email ?? '').trim().toLowerCase();
    website = String(body.website ?? ''); // honeypot
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (website) return NextResponse.json({ ok: true }); // bot filled the trap
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'valid email required' }, { status: 400 });
  }
  if (!process.env.DATABASE_URL) return NextResponse.json({ ok: true, stored: false });
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      INSERT INTO signups (email, source) VALUES (${email}, 'accounts-waitlist')
      ON CONFLICT (email, source) DO NOTHING`;
    return NextResponse.json({ ok: true, stored: true });
  } catch {
    return NextResponse.json({ ok: true, stored: false });
  }
}
