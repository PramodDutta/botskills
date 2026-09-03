'use client';

import type { Ref } from 'react';

// Spam trap shared by every form. Rendered and painted, then pushed off
// screen: a naive bot skips display:none inputs and fills visible ones.
// Untabbable and hidden from assistive tech so no person ever meets it. The
// server drops any submission where this field carries a value.
export function Honeypot({ ref }: { ref: Ref<HTMLInputElement> }) {
  return (
    <input
      ref={ref}
      type="text"
      name="website"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      style={{ position: 'absolute', left: '-9999px' }}
    />
  );
}
