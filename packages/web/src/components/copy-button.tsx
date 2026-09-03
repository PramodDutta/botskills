'use client';

import { useState } from 'react';
import { postJson } from '@/lib/post-json';

/**
 * Copies are the ranking signal for the whole directory, so a copy that fails
 * silently is worse than a visible error: the button looks dead AND the count is
 * wrong. navigator.clipboard rejects in more cases than people expect (denied
 * permission, an unfocused document, a non-secure context, an iframe without
 * clipboard-write), so fall back to a selection copy and always tell the user
 * which of the three outcomes happened.
 */
async function writeToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to the legacy path
  }

  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export function CopyButton({ slug, prompt }: { slug: string; prompt: string }) {
  const [state, setState] = useState<'idle' | 'done' | 'failed'>('idle');

  async function copy() {
    const ok = await writeToClipboard(prompt);
    setState(ok ? 'done' : 'failed');
    setTimeout(() => setState('idle'), ok ? 1600 : 4000);
    if (!ok) return;

    // Best-effort telemetry; the copy already happened, so never block on this.
    postJson('/api/telemetry/copy', { slug, source: 'web' }).catch(() => {});
  }

  return (
    <button className="copy-btn" onClick={copy} aria-live="polite">
      {state === 'done'
        ? 'Copied ✓'
        : state === 'failed'
          ? 'Copy blocked, select the prompt above'
          : 'Copy setup prompt'}
    </button>
  );
}
