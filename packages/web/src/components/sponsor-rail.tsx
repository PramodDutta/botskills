import Link from 'next/link';
import { railSponsors, sponsorRel, FOUNDING_SLOTS } from '@/lib/sponsors';
import { SponsorTag } from '@/components/sponsor-tag';

// Sponsor rail: sticky beside the leaderboard on desktop. Demo
// entries are fictional brands showing how sold inventory looks; the corner
// tag says so. Taken counts come from real (non-demo) bookings only.
export function SponsorRail() {
  return (
    <aside className="rail" aria-label="Sponsors">
      <div className="rail-head mono">SPONSORS</div>
      {railSponsors.map((s) => (
        <Link key={s.id} href={s.url} rel={sponsorRel(s.kind)} className={`rail-card${s.slot ? ' is-slot' : ''}`}>
          <span className="sq" />
          <span className="rail-txt">
            <span className="rail-name">
              {s.name}
              <SponsorTag kind={s.kind} />
            </span>
            <span className="rail-line">{s.line}</span>
            <span className="rail-cta">{s.cta} →</span>
          </span>
        </Link>
      ))}
      <Link href="/sponsor" className="rail-book">
        {FOUNDING_SLOTS} founding slots · <b>$99/mo</b>
      </Link>
    </aside>
  );
}
