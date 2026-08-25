'use client';

import { useState } from 'react';

export function CopyButton({ slug, prompt }: { slug: string; prompt: string }) {
  const [state, setState] = useState<'idle' | 'done'>('idle');

  async function copy() {
    await navigator.clipboard.writeText(prompt);
    setState('done');
    setTimeout(() => setState('idle'), 1600);
    // Best-effort telemetry; the copy already happened, so never block on this.
    fetch('/api/telemetry/copy', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ slug, source: 'web' }),
    }).catch(() => {});
  }

  return (
    <button className="copy-btn" onClick={copy}>
      {state === 'done' ? 'Copied ✓' : 'Copy setup prompt'}
    </button>
  );
}
