'use client';

import { useEffect, useState } from 'react';
import { postJson } from '@/lib/post-json';

// Fires one visit beacon per session, then shows the measured live count.
// Renders nothing until a real number (> 0) exists: proof, never decoration.
export function LiveNow() {
  const [online, setOnline] = useState(0);

  useEffect(() => {
    const beat = async () => {
      try {
        if (!sessionStorage.getItem('visited')) {
          sessionStorage.setItem('visited', '1');
          await postJson('/api/telemetry/visit', { path: location.pathname });
        }
        const r = await fetch('/api/live');
        const d = (await r.json()) as { online: number };
        setOnline(d.online ?? 0);
      } catch {}
    };
    beat();
  }, []);

  if (online < 1) return null;
  return (
    <span className="live-now">
      <span className="live-dot" /> {online} browsing now
    </span>
  );
}
