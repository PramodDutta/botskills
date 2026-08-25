import Link from 'next/link';
import { railSponsors, railTaken, RAIL_CAP } from '@/lib/sponsors';

// botdirectory-pattern rail: sticky beside the leaderboard on desktop. Demo
// entries are fictional brands showing how sold inventory looks; the corner
// tag says so. Taken counts come from real (non-demo) bookings only.
export function SponsorRail() {
  return (
    <aside className="rail" aria-label="Sponsors">
      <div className="rail-head mono">SPONSORS</div>
      {railSponsors.map((s) => (
        <Link key={s.id} href={s.url} rel={s.kind === 'demo' ? 'nofollow' : undefined} className={`rail-card${s.slot ? ' is-slot' : ''}`}>
          <span className="sq" />
          <span className="rail-txt">
            <span className="rail-name">
              {s.name}
              {s.kind === 'demo' && <span className="demo-tag mono">demo</span>}
              {s.kind === 'featured' && <span className="demo-tag mono">free pick</span>}
            </span>
            <span className="rail-line">{s.line}</span>
            <span className="rail-cta">{s.cta} →</span>
          </span>
        </Link>
      ))}
      <Link href="/sponsor" className="rail-book">
        {railTaken()} of {RAIL_CAP} taken · <b>$360/mo</b>
      </Link>
    </aside>
  );
}
