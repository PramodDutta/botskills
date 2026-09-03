'use client';

import { useRef, useState } from 'react';
import { postJson } from '@/lib/post-json';
import { Honeypot } from '@/components/honeypot';

interface Props {
  /** Stored on the row so we can tell a waitlist signup from a pack download. */
  source?: string;
  cta?: string;
  busyLabel?: string;
  doneMessage?: string;
  /** Rendered once the email is accepted. Used by the lead magnet to reveal it. */
  children?: React.ReactNode;
}

export function SignupForm({
  source = 'accounts-waitlist',
  cta = 'Join the waitlist',
  busyLabel = 'Joining...',
  doneMessage = 'You are on the list. See you at launch.',
  children,
}: Props) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'busy' | 'done' | 'error'>('idle');
  // Read at submit time. The previous version rendered the trap but never sent
  // it, so the check on the server could never fire.
  const honeypot = useRef<HTMLInputElement>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState('busy');
    try {
      const res = await postJson('/api/signups', {
        email,
        source,
        website: honeypot.current?.value ?? '',
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <>
        <p className="callout">{doneMessage}</p>
        {children}
      </>
    );
  }

  return (
    <form onSubmit={submit} className="signup-form">
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email address"
      />
      <Honeypot ref={honeypot} />
      <button type="submit" disabled={state === 'busy'} className="copy-btn" style={{ margin: 0 }}>
        {state === 'busy' ? busyLabel : cta}
      </button>
      {state === 'error' && (
        <p className="ds" role="alert">
          That did not work; try again.
        </p>
      )}
    </form>
  );
}
