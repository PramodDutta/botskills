import Link from 'next/link';
import type { Metadata } from 'next';
import { CATEGORIES } from '@botskills/shared';
import { getAllBots } from '@/lib/bots';
import { getBoardRows, startHereRows } from '@/lib/board';
import { marqueeSponsors } from '@/lib/sponsors';
import { Leaderboard } from '@/components/leaderboard';
import { LiveNow } from '@/components/live-now';
import { SponsorRail } from '@/components/sponsor-rail';
import { SponsorTag } from '@/components/sponsor-tag';

export const revalidate = 300;

export const metadata: Metadata = {
  alternates: { canonical: 'https://botskills.sh' },
  openGraph: { url: 'https://botskills.sh' },
};

export default async function HomePage() {
  const rows = await getBoardRows();
  const bots = getAllBots();
  const startHere = startHereRows(rows);
  // Real movement only. With nothing copied this week the section stays hidden
  // rather than inventing activity.
  const moving = [...rows].filter((r) => r.delta7d > 0).sort((a, b) => b.delta7d - a.delta7d).slice(0, 4);
  const catCount = (id: string) => bots.filter((b) => b.category === id).length;

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Grok Bot skills leaderboard',
    numberOfItems: rows.length,
    itemListElement: rows.slice(0, 10).map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.name,
      url: `https://botskills.sh/bots/${r.slug}`,
    })),
  };

  return (
    <main className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      {/* Compact hero, TrustMRR-style: the board is the hero */}
      <div className="hero">
        <span className="kicker">Works with <Link href="/grok-bot">Grok Bot</Link> and <Link href="/rakazo">Rakazo</Link></span>
        <h1>The Grok Bot skills directory</h1>
        <LiveNow />
        <p className="sub">
          Bots that get real work done, ranked by copies. Set one up with a single prompt,
          and every bot declares the one thing it never does without you.
        </p>
        <div className="explore-row">
          <span className="explore-label">Explore:</span>
          {CATEGORIES.map((c) => (
            <Link key={c.id} href={`/bots?category=${c.id}`}>{c.name}</Link>
          ))}
        </div>
        <div className="explore-row tools">
          <span className="explore-label">Popular tools:</span>
          {['Gmail', 'Slack', 'GitHub', 'Notion', 'X', 'Salesforce'].map((t) => (
            <Link key={t} href={`/integrations/${t.toLowerCase()}`}>{t}</Link>
          ))}
        </div>
      </div>

      {/* Sponsor marquee. Demo brands are fictional; free picks are real. */}
      <div className="marquee" aria-label="Sponsors">
        <div className="marquee-in">
          {[1, 2].map((k) => (
            <span key={k} className="marquee-seg">
              {marqueeSponsors.map((m) => (
                <span key={m.id} className="spon">
                  <span className="sq" />
                  {m.name}
                  <SponsorTag kind={m.kind} />
                </span>
              ))}
              <span className="spon slot">
                <Link href="/sponsor">Advertise · founding rate · $29/mo</Link>
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Start here: six curated bots a first visit can succeed with */}
      <section>
        <div className="shead">
          <h2>Start here</h2>
          <Link href="/bots" className="hint">View all →</Link>
        </div>
        <div className="cardrow">
          {startHere.map((r) => (
            <Link key={r.slug} href={`/bots/${r.slug}`} className="rcard">
              <span className="rcard-top">
                <span className="av">{r.name.slice(0, 2).toUpperCase()}</span>
                <span className="nm">{r.name}</span>
              </span>
              <span className={`tag tag-${r.category}`}>{r.category}</span>
              <span className="ds">{r.description}</span>
              <span className="rstats mono">
                {r.copies > 0 ? <span><b>{r.copies.toLocaleString('en-US')}</b> copies</span> : <span>new</span>}
                <span><b>{r.runtimes.length}</b> runtime{r.runtimes.length > 1 ? 's' : ''}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* The centerpiece */}
      <section>
        <div className="shead">
          <h2>Leaderboard</h2>
          <span className="hint">most copied, all time</span>
        </div>
        <div className="avstrip">
          {rows.slice(0, 10).map((r) => (
            <Link key={r.slug} href={`/bots/${r.slug}`} className="av" aria-label={`${r.name}: Grok bot skill`} title={r.name}>
              {r.name.slice(0, 2).toUpperCase()}
            </Link>
          ))}
        </div>
        <div className="board-grid">
          <Leaderboard rows={rows} />
          <SponsorRail />
        </div>
        <p className="trustnote">
          <span className="tick">✓</span> Copies are counted by install telemetry, not
          self-reported. Every count starts at zero and is earned.
        </p>
      </section>

      {/* Activity feed: only rendered when something actually moved this week */}
      {moving.length > 0 && (
        <section>
          <div className="shead"><h2>Copied this week</h2></div>
          <div className="feed">
            {moving.map((r) => (
              <div key={r.slug} className="fi">
                <span className="when mono">+{r.delta7d}</span>
                <span>
                  <Link href={`/bots/${r.slug}`} className="nm">{r.name}</Link> by{' '}
                  <b className="mono">@{r.contributor}</b>
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Category pills */}
      <section>
        <div className="shead"><h2>Categories</h2></div>
        <div className="pills">
          {CATEGORIES.map((c) => (
            <Link key={c.id} href={`/bots?category=${c.id}`} className="pill">
              {c.name} <b>{catCount(c.id)}</b>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
