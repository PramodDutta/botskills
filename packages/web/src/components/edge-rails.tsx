'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { edgeSponsors } from '@/lib/sponsors';

// botdirectory-style edge placement: pastel sponsor cards down both sides of
// wide viewports, flipping through the inventory so every sponsor gets equal
// share. Hidden below 1420px; flipping pauses for prefers-reduced-motion.
const TINTS = ['tint-a', 'tint-b', 'tint-c', 'tint-d', 'tint-e'];

function EdgeCard({ offset }: { offset: number }) {
  const [i, setI] = useState(offset % edgeSponsors.length);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => {
      setFlip(true);
      setTimeout(() => {
        setI((x) => (x + 1) % edgeSponsors.length);
        setFlip(false);
      }, 240);
    }, 6000 + offset * 800);
    return () => clearInterval(t);
  }, [offset]);

  const s = edgeSponsors[i];
  return (
    <Link
      href={s.url}
      rel={s.kind === 'demo' ? 'nofollow' : s.kind === 'sponsor' ? 'sponsored' : undefined}
      className={`edge-card ${TINTS[i % TINTS.length]}${flip ? ' flipping' : ''}${s.slot ? ' is-slot' : ''}`}
    >
      <span className="edge-logo">{s.name.slice(0, 1)}</span>
      <span className="edge-name">
        {s.name}
        {s.kind === 'demo' && <span className="demo-tag mono">demo</span>}
              {s.kind === 'featured' && <span className="demo-tag mono">free pick</span>}
      </span>
      <span className="edge-line">{s.line}</span>
    </Link>
  );
}

export function EdgeRails() {
  return (
    <>
      <div className="edge edge-left" aria-hidden="true">
        <EdgeCard offset={0} /><EdgeCard offset={2} /><EdgeCard offset={4} />
      </div>
      <div className="edge edge-right" aria-hidden="true">
        <EdgeCard offset={1} /><EdgeCard offset={3} /><EdgeCard offset={5} />
      </div>
    </>
  );
}
