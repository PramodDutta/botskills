import Link from 'next/link';
import type { Metadata } from 'next';
import { FOUNDING_SLOTS } from '@/lib/sponsors';

export const metadata: Metadata = {
  title: 'Sponsor',
  description:
    'Reach people setting up bots for Grok Bot and Rakazo. Flat monthly slots, no auction, category-exclusive, with the impression maths shown in full.',
  alternates: { canonical: 'https://botskills.sh/sponsor' },
};

// Booking is by email on purpose. At four founding slots a checkout flow costs
// more to build and maintain than it saves, and a reply lets us edit copy to the
// site voice before anything renders. No scarcity claims, no invented counters,
// and no traffic figure we cannot evidence.
export default function SponsorPage() {
  return (
    <main className="wrap detail">
      <h1>Sponsor botskills.sh</h1>
      <p className="sub">
        Flat monthly slots in front of people actively setting up bots. No CPM, no auction,
        no minimum spend. One sponsor per category. Every booked slot renders on every
        matching page load, so you are not sharing a rotation with anyone.
      </p>

      <div className="callout">
        <b>Founding rate.</b> Rail card $99/mo. Marquee logo $29/mo. Promoted row and
        takeover by conversation. {FOUNDING_SLOTS} founding slots, and the rate is locked
        for twelve months from the day you take one. It goes up as the audience does. Email{' '}
        <a href="mailto:contact@thetestingacademy.com">contact@thetestingacademy.com</a>{' '}
        and the slot goes live within a day.
      </div>

      <h2>What you get, and where it renders</h2>
      <p>
        This matters more than the price, because the three placements behave differently
        and one of them only appears on wide screens.
      </p>
      <table>
        <thead>
          <tr>
            <th>Placement</th>
            <th>What it is</th>
            <th>Where it renders</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Rail card</b></td>
            <td>
              Logo square, name, one line of your copy, your own call to action. The largest
              unit on the site.
            </td>
            <td>Homepage sponsor column, visible without scrolling on desktop.</td>
            <td className="mono">$99/mo</td>
          </tr>
          <tr>
            <td><b>Marquee logo</b></td>
            <td>Name in the scrolling strip under the hero. No copy, no CTA.</td>
            <td>Homepage, below the fold on most screens.</td>
            <td className="mono">$29/mo</td>
          </tr>
          <tr>
            <td><b>Edge card</b></td>
            <td>Flipping card pinned to the left and right margins.</td>
            <td>
              <b>Every page</b>, including all 119 articles. Desktop only, at 1420px and
              wider.
            </td>
            <td className="mono">ask</td>
          </tr>
        </tbody>
      </table>

      <h2>Work out the impressions yourself</h2>
      <p>
        We are not going to hand you a number and ask you to trust it. Here is how each
        placement counts, taken from how the site is actually built.
      </p>
      <pre>{`rail card      impressions = homepage pageviews
marquee logo   impressions = homepage pageviews
edge card      impressions = sitewide pageviews x share of visitors at 1420px+

No rotation. Every booked slot renders on every matching page load, so your
share is 100 percent, not a fraction split with the other sponsors.`}</pre>
      <p>
        The edge card is the interesting one. It is the only placement that appears on
        article pages, and the articles are where search traffic lands. It is also the only
        one gated by screen width, so a mobile-heavy month shows it less. Ask for the
        current desktop share before buying that one.
      </p>

      <h2>What $99 costs per thousand, at each stage</h2>
      <p>
        A rail card at $99/mo against homepage traffic. Published developer display rates
        sit around $3 to $7.50 per thousand impressions, so that is the band worth
        comparing against.
      </p>
      <table>
        <thead>
          <tr>
            <th>Homepage views/mo</th>
            <th>Cost per thousand</th>
            <th>Reads as</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="mono">1,000</td>
            <td className="mono">$99.00</td>
            <td>Far above market. You are buying position, not reach.</td>
          </tr>
          <tr>
            <td className="mono">5,000</td>
            <td className="mono">$19.80</td>
            <td>Above market for display, comparable to a niche newsletter.</td>
          </tr>
          <tr>
            <td className="mono">10,000</td>
            <td className="mono">$9.90</td>
            <td>Roughly the top of the published developer band.</td>
          </tr>
          <tr>
            <td className="mono">25,000</td>
            <td className="mono">$3.96</td>
            <td>Inside the market band. The rate would be rising by now.</td>
          </tr>
          <tr>
            <td className="mono">50,000</td>
            <td className="mono">$1.98</td>
            <td>Below market. Founding holders keep it for the full twelve months.</td>
          </tr>
        </tbody>
      </table>

      <h2>Where the traffic stands today</h2>
      <p>
        Plainly, because you can check most of it yourself. The site launched on 25 August
        2026. There are 37 bot listings and 119 articles. The sitemap is submitted and
        Google has read it, and <b>nothing is indexed yet</b>, which is normal at this age
        and also means the honest impression figure right now is close to zero.
      </p>
      <p>
        So the founding rate is not a discount on a big number. It is the price of being
        early on a site that has published <Link href="/blog">119 articles</Link> aimed at
        people searching for exactly one thing: how to set a bot up. If that audience
        arrives, you hold $99 while it does. If it does not, you spent $99 a month and found
        out cheaply.
      </p>

      <h2>What is worth buying at zero traffic</h2>
      <ul>
        <li>
          <b>Category exclusivity.</b> One sponsor per category, so no competitor sits
          beside you.
        </li>
        <li>
          <b>The rate lock.</b> Twelve months at $99 regardless of what the audience does.
        </li>
        <li>
          <b>Referral traffic, not SEO.</b> Paid placements carry{' '}
          <code className="mono">rel=&quot;sponsored&quot;</code> because that is the honest
          markup, so value the click and not the link.
        </li>
        <li>
          <b>Your copy, edited to the site voice</b> and returned for approval before
          anything goes live.
        </li>
      </ul>

      <h2>How booking works</h2>
      <p>
        By email, deliberately. There is no checkout to click and no card form on this
        site. At four founding slots, a payment flow costs more to build and maintain
        than it saves, and a reply lets us edit your copy to the site voice before
        anything renders.
      </p>
      <ol>
        <li>
          Email <a href="mailto:contact@thetestingacademy.com">contact@thetestingacademy.com</a>{' '}
          with the placement you want, your link, and one line of copy.
        </li>
        <li>
          We reply with the edited copy for your approval, and an invoice. Nothing goes
          live before you approve the wording.
        </li>
        <li>
          Slot renders within a day of payment clearing. The rate is locked for twelve
          months from that day.
        </li>
      </ol>
      <p className="ds">
        We never ask for card details over email, and we never ask for them on this site.
        An invoice arrives from a payment provider you can verify before you pay it.
      </p>

      <h2>House rules</h2>
      <p className="sub">
        No competing directories. No crypto. Nothing we would not put beside our own name.
        We do not place our own products in paid slots. Slots currently showing projects we
        like are marked <b>free pick</b> so nobody mistakes them for customers, and if we
        ever publish a slots-taken counter it will count paid bookings and nothing else.
      </p>
    </main>
  );
}
