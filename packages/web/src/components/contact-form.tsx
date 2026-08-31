'use client';

import { useRef, useState } from 'react';

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
  const honeypot = useRef<HTMLInputElement>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState('busy');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          placement,
          message,
          website: honeypot.current?.value ?? '',
        }),
      });
      if (res.ok) {
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
    return (
      <div className="callout" role="status">
        <b>Got it.</b> We reply from contact@thetestingacademy.com, usually within a day.
        Nothing goes live until you have approved the wording.
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
      {/* honeypot, hidden from humans */}
      <input
        ref={honeypot}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px' }}
      />
      <button type="submit" disabled={state === 'busy'} className="copy-btn">
        {state === 'busy' ? 'Sending...' : 'Send message'}
      </button>
      {state === 'error' && (
        <p className="ds" role="alert">
          {error} You can also email{' '}
          <a href="mailto:contact@thetestingacademy.com">contact@thetestingacademy.com</a> directly.
        </p>
      )}
      <p className="ds">
        We never ask for card details here or by email. An invoice arrives from a payment
        provider you can verify before you pay it.
      </p>
    </form>
  );
}
