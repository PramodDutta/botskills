import Link from 'next/link';
import { railSponsors, railOpenCount, RAIL_CAP } from '@/lib/sponsors';

// botdirectory-pattern rail: sticky beside the leaderboard on desktop, a strip
// on mobile. Real sponsors render logo+line+custom CTA; placeholders sell the
// slot with the live open count (never hardcoded).
export function SponsorRail() {
  const open = railOpenCount();
  return (
    <aside className="rail" aria-label="Sponsors">
      <div className="rail-head mono">SPONSORS</div>
      {railSponsors.map((s) => (
        <Link key={s.id} href={s.url} className={`rail-card${s.placeholder ? ' is-slot' : ''}`}>
          <span className="sq" />
          <span className="rail-txt">
            <span className="rail-name">{s.name}</span>
            <span className="rail-line">{s.line}</span>
            <span className="rail-cta">{s.cta} →</span>
          </span>
        </Link>
      ))}
      <Link href="/sponsor" className="rail-book">
        {RAIL_CAP - open} of {RAIL_CAP} taken · <b>$360/mo</b>
      </Link>
    </aside>
  );
}
