import { NextResponse } from 'next/server';

// Sponsor and general enquiries. Two independent paths on purpose: the message
// is stored first, then emailed. Storage is what makes this safe to ship before
// a mail provider exists, and it means a provider outage loses nothing.
const TO = 'contact@thetestingacademy.com';
const PLACEMENTS = ['rail', 'marquee', 'edge', 'other'];

// Created once per cold start, not per request.
let tableReady = false;

export async function POST(request: Request) {
  let name = '', email = '', message = '', placement = 'other', website = '';
  try {
    const b = (await request.json()) as Record<string, unknown>;
    name = String(b.name ?? '').trim().slice(0, 120);
    email = String(b.email ?? '').trim().toLowerCase().slice(0, 200);
    message = String(b.message ?? '').trim().slice(0, 4000);
    website = String(b.website ?? ''); // honeypot
    const p = String(b.placement ?? '');
    if (PLACEMENTS.includes(p)) placement = p;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (website) return NextResponse.json({ ok: true }); // trapped, looks accepted
  if (!name || !message || message.length < 10) {
    return NextResponse.json({ ok: false, error: 'name and a real message required' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'valid email required' }, { status: 400 });
  }

  let stored = false;
  if (process.env.DATABASE_URL) {
    try {
      const { neon } = await import('@neondatabase/serverless');
      const sql = neon(process.env.DATABASE_URL);
      if (!tableReady) {
        await sql`
          CREATE TABLE IF NOT EXISTS contact_messages (
            id         bigserial PRIMARY KEY,
            name       text NOT NULL,
            email      text NOT NULL,
            placement  text NOT NULL DEFAULT 'other',
            message    text NOT NULL,
            created_at timestamptz NOT NULL DEFAULT now()
          )`;
        tableReady = true;
      }
      await sql`
        INSERT INTO contact_messages (name, email, placement, message)
        VALUES (${name}, ${email}, ${placement}, ${message})`;
      stored = true;
    } catch {
      stored = false;
    }
  }

  let emailed = false;
  let mailError = '';
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      // FROM must be on a domain verified in Resend. Until botskills.sh is
      // verified, onboarding@resend.dev is the address that works.
      const from = process.env.CONTACT_FROM ?? 'botskills.sh <onboarding@resend.dev>';
      const r = await resend.emails.send({
        from,
        to: [TO],
        replyTo: email, // so a reply goes straight to the sender
        subject: `botskills.sh enquiry (${placement}) from ${name}`,
        text: [
          `Name:      ${name}`,
          `Email:     ${email}`,
          `Placement: ${placement}`,
          '',
          message,
          '',
          '--',
          'Sent from the form on https://botskills.sh/sponsor',
        ].join('\n'),
      });
      emailed = !r.error;
      if (r.error) mailError = `${r.error.name}: ${r.error.message}`;
    } catch (e) {
      emailed = false;
      mailError = e instanceof Error ? `threw: ${e.message}` : 'threw';
    }
  }

  // Only a message that reached neither the database nor the mailbox is a
  // failure the sender needs to know about, because only then is it lost.
  if (!stored && !emailed) {
    return NextResponse.json({ ok: false, error: 'could not accept the message' }, { status: 503 });
  }
  return NextResponse.json({ ok: true, stored, emailed, mailError });
}
