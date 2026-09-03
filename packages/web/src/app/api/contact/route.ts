import { NextResponse } from 'next/server';
import { getSql, type Sql } from '@/lib/sql';
import { isEmail } from '@/lib/request';
import { CONTACT_EMAIL } from '@/lib/site';

// Sponsor and general enquiries. Two independent paths on purpose: the message
// is stored first, then emailed. Storage is what makes this safe to ship before
// a mail provider exists, and it means a provider outage loses nothing.
const PLACEMENTS = ['rail', 'marquee', 'edge', 'other'];
const BACKLOG_LIMIT = 20;

// Created once per cold start, not per request.
let tableReady = false;

async function ensureTable(sql: Sql) {
  if (tableReady) return;
  await sql`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id         bigserial PRIMARY KEY,
      name       text NOT NULL,
      email      text NOT NULL,
      placement  text NOT NULL DEFAULT 'other',
      message    text NOT NULL,
      emailed    boolean NOT NULL DEFAULT false,
      created_at timestamptz NOT NULL DEFAULT now()
    )`;
  // Older deployments created this table without the column.
  await sql`ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS emailed boolean NOT NULL DEFAULT false`;
  tableReady = true;
}

type Enquiry = {
  name: string;
  email: string;
  placement: string;
  message: string;
  receivedAt?: string;
};

// The single place that knows how to turn an enquiry into an email, so the live
// submission and the backlog flush cannot drift apart.
async function sendEnquiry(e: Enquiry): Promise<{ ok: boolean; error: string }> {
  if (!process.env.RESEND_API_KEY) return { ok: false, error: 'no provider configured' };
  try {
    const { Resend } = await import('resend');
    // Trimmed: a key pasted with a trailing newline reports as invalid,
    // which looks identical to a wrong key and wastes an hour.
    const resend = new Resend(process.env.RESEND_API_KEY.trim());
    // FROM must be on a domain verified in Resend. Until botskills.sh is
    // verified, onboarding@resend.dev is the address that works.
    const from = (process.env.CONTACT_FROM ?? 'botskills.sh <onboarding@resend.dev>').trim();
    const delayed = e.receivedAt ? ` [received ${e.receivedAt}]` : '';
    const r = await resend.emails.send({
      from,
      to: [CONTACT_EMAIL],
      replyTo: e.email, // so a reply goes straight to the sender
      subject: `botskills.sh enquiry (${e.placement}) from ${e.name}${delayed}`,
      text: [
        `Name:      ${e.name}`,
        `Email:     ${e.email}`,
        `Placement: ${e.placement}`,
        ...(e.receivedAt ? [`Received:  ${e.receivedAt} (delivery was delayed)`] : []),
        '',
        e.message,
        '',
        '--',
        'Sent from the form on https://botskills.sh/sponsor',
      ].join('\n'),
    });
    return { ok: !r.error, error: r.error ? `${r.error.name}: ${r.error.message}` : '' };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? `threw: ${err.message}` : 'threw' };
  }
}

type BacklogRow = {
  id: number;
  name: string;
  email: string;
  placement: string;
  message: string;
  created_at: string;
};

// Anything that arrived while the mail provider was misconfigured is still in
// the table with emailed = false. One successful send proves the provider works
// again, so drain what is behind it rather than leaving those stranded forever.
async function flushBacklog(sql: Sql, excludeId: number | null): Promise<number> {
  let sent = 0;
  try {
    const rows = (await sql`
      SELECT id, name, email, placement, message, created_at
      FROM contact_messages
      WHERE emailed = false AND id IS DISTINCT FROM ${excludeId}
      ORDER BY created_at ASC
      LIMIT ${BACKLOG_LIMIT}`) as BacklogRow[];
    for (const row of rows) {
      const r = await sendEnquiry({
        name: row.name,
        email: row.email,
        placement: row.placement,
        message: row.message,
        receivedAt: String(row.created_at),
      });
      // The provider went bad again mid-drain. Stop rather than burning the
      // rest of the backlog against a broken key; the next send retries them.
      if (!r.ok) break;
      await sql`UPDATE contact_messages SET emailed = true WHERE id = ${row.id}`;
      sent += 1;
    }
  } catch {
    // Backlog delivery is best effort. The live message already succeeded and
    // the rows stay flagged unsent, so nothing is lost by giving up here.
  }
  return sent;
}

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
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: 'valid email required' }, { status: 400 });
  }

  const sql = getSql();
  let stored = false;
  let rowId: number | null = null;
  if (sql) {
    try {
      await ensureTable(sql);
      const rows = await sql`
        INSERT INTO contact_messages (name, email, placement, message)
        VALUES (${name}, ${email}, ${placement}, ${message})
        RETURNING id`;
      rowId = (rows[0] as { id: number } | undefined)?.id ?? null;
      stored = true;
    } catch {
      stored = false;
    }
  }

  const sendResult = await sendEnquiry({ name, email, placement, message });
  const emailed = sendResult.ok;
  const mailError = sendResult.error;

  let flushed = 0;
  if (emailed && sql) {
    if (rowId !== null) {
      try {
        await sql`UPDATE contact_messages SET emailed = true WHERE id = ${rowId}`;
      } catch {
        // The message is stored and sent; a stale flag is not worth failing over.
      }
    }
    flushed = await flushBacklog(sql, rowId);
  }

  // Only a message that reached neither the database nor the mailbox is a
  // failure the sender needs to know about, because only then is it lost.
  if (!stored && !emailed) {
    return NextResponse.json({ ok: false, error: 'could not accept the message' }, { status: 503 });
  }
  return NextResponse.json({ ok: true, stored, emailed, flushed, mailError });
}
