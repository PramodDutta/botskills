import { NextResponse } from 'next/server';
import { getSql } from '@/lib/sql';
import { isEmail } from '@/lib/request';

// Accounts waitlist. Upvotes work anonymously today; an account will let
// people keep votes across devices. Upsert-by-(email, source), no drama.
export async function POST(request: Request) {
  let email = '', website = '', source = 'accounts-waitlist';
  try {
    const body = (await request.json()) as { email?: string; website?: string; source?: string };
    email = String(body.email ?? '').trim().toLowerCase();
    website = String(body.website ?? ''); // honeypot
    // Allowlisted, never free text: this value is written to the database.
    const s = String(body.source ?? '');
    if (['accounts-waitlist', 'facts-pack'].includes(s)) source = s;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (website) return NextResponse.json({ ok: true }); // bot filled the trap
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: 'valid email required' }, { status: 400 });
  }
  const sql = getSql();
  if (!sql) return NextResponse.json({ ok: true, stored: false });
  try {
    await sql`
      INSERT INTO signups (email, source) VALUES (${email}, ${source})
      ON CONFLICT (email, source) DO NOTHING`;
    return NextResponse.json({ ok: true, stored: true });
  } catch {
    return NextResponse.json({ ok: true, stored: false });
  }
}
