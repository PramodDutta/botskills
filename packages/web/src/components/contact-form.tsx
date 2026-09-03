'use client';

import { useRef, useState } from 'react';
import { postJson } from '@/lib/post-json';
import { CONTACT_EMAIL } from '@/lib/site';
import { Honeypot } from '@/components/honeypot';

const PLACEMENTS = [
  { id: 'rail', label: 'Rail card, $99/mo' },
  { id: 'marquee', label: 'Marquee logo, $29/mo' },
  { id: 'edge', label: 'Edge card, ask' },
  { id: 'other', label: 'Something else' },
];

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [placement, setPlacement] = useState('rail');
  const [message, setMessage] = useState('');
  const [state, setState] = useState<'idle' | 'busy' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');
  // False when the server stored the message but could not mail it. The sender
  // then gets a one click handoff to their own mail client, so the message
  // still reaches the inbox rather than sitting in a table nobody watches.
  const [serverEmailed, setServerEmailed] = useState(true);
  const honeypot = useRef<HTMLInputElement>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState('busy');
    setError('');
    try {
      const res = await postJson('/api/contact', {
        name,
        email,
        placement,
        message,
        website: honeypot.current?.value ?? '',
      });
      if (res.ok) {
        const body = (await res.json().catch(() => ({}))) as { emailed?: boolean };
        setServerEmailed(body.emailed !== false);
        setState('done');
      } else {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setError(body.error ?? 'That did not send.');
        setState('error');
      }
    } catch {
      setError('That did not send.');
      setState('error');
    }
  }

  if (state === 'done') {
    if (serverEmailed) {
      return (
        <div className="callout" role="status">
          <b>Got it.</b> We reply from {CONTACT_EMAIL}, usually within a day.
          Nothing goes live until you have approved the wording.
        </div>
      );
    }
    // Kept short on purpose: mail clients and browsers truncate long mailto
    // bodies, and the full message is already stored server side either way.
    const trimmed = message.length > 1200 ? `${message.slice(0, 1200)}...` : message;
    const href =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(`botskills.sh enquiry (${placement}) from ${name}`)}` +
      `&body=${encodeURIComponent(
        [`Name: ${name}`, `Email: ${email}`, `Placement: ${placement}`, '', trimmed].join('\n'),
      )}`;
    return (
      <div className="callout" role="status">
        <b>Saved.</b> One more tap and it reaches us straight away: this opens your mail
        app with the whole message already written, addressed to us.
        <p style={{ margin: '0.8rem 0 0' }}>
          <a className="copy-btn" style={{ textDecoration: 'none' }} href={href}>
            Open in my mail app
          </a>
        </p>
        <p className="ds" style={{ marginTop: '0.6rem' }}>
          Nothing is lost if you skip this. We read the saved messages either way, it is
          just slower.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="contact-form">
      <label>
        <span>Your name</span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Alex Rivera"
        />
      </label>
      <label>
        <span>Email we reply to</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
        />
      </label>
      <label>
        <span>What are you asking about</span>
        <select value={placement} onChange={(e) => setPlacement(e.target.value)}>
          {PLACEMENTS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Your message, and the link you want to send people to</span>
        <textarea
          required
          minLength={10}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="One line of copy, and where it should link."
        />
      </label>
      <Honeypot ref={honeypot} />
      <button type="submit" disabled={state === 'busy'} className="copy-btn">
        {state === 'busy' ? 'Sending...' : 'Send message'}
      </button>
      {state === 'error' && (
        <p className="ds" role="alert">
          {error} You can also email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> directly.
        </p>
      )}
      <p className="ds">
        We never ask for card details here or by email. An invoice arrives from a payment
        provider you can verify before you pay it.
      </p>
    </form>
  );
}
