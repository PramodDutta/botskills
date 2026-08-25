'use client';

import { useState } from 'react';

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'busy' | 'done' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState('busy');
    try {
      const res = await fetch('/api/signups', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') return <p className="callout">You are on the list. See you at launch.</p>;
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
      {/* honeypot, hidden from humans */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />
      <button type="submit" disabled={state === 'busy'} className="copy-btn" style={{ margin: 0 }}>
        {state === 'busy' ? 'Joining...' : 'Join the waitlist'}
      </button>
      {state === 'error' && <p className="ds" role="alert">That did not work; try again.</p>}
    </form>
  );
}
