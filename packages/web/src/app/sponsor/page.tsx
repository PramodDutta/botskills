import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsor',
  description:
    'Reach people setting up bots for Grok Bot and Rakazo. Flat monthly slots, no auction, category-exclusive.',
  alternates: { canonical: 'https://botskills.sh/sponsor' },
  openGraph: { url: 'https://botskills.sh/sponsor' },
};

// P0 static page. P1 wires live slot counts from the sponsors table and a
// Polar checkout per tier (docs/SYSTEMS.md section 2). Until then this page
// makes no scarcity claims: never fake a counter.
export default function SponsorPage() {
  return (
    <main className="wrap detail">
      <h1>Sponsor botskills.sh</h1>
      <p className="sub">
        Flat monthly slots in front of people actively setting up bots. No CPM, no auction.
        One sponsor per category, and rotation gives every sponsor an equal share.
      </p>
      <div className="callout">
        <b>Founding rate.</b> Rail card $99/mo. Marquee logo $29/mo. Promoted row and
        takeover by conversation. Four founding slots, and the rate is locked for twelve
        months from the day you take one. It goes up as the audience does. Self-serve
        checkout arrives with the sponsor system; until then, email hello@botskills.sh
        and the slot goes live within a day.
      </div>
      <p className="sub">
        House rules: no competing directories, no crypto, nothing we would not put beside our
        own name. Sponsor copy is edited to the site voice and returned for approval.
      </p>
      <p className="sub">
        We publish no traffic claim, because the site is new and we would rather you judge
        the position than a number we cannot yet evidence. Ask and we will show you what we
        have.
      </p>
    </main>
  );
}
