import Link from 'next/link';
import { getAllBots } from '@/lib/bots';
import { getBoardRows } from '@/lib/board';

export const revalidate = 300;
import { CATEGORIES } from '@botskills/shared';
import { Leaderboard } from '@/components/leaderboard';
import { LiveNow } from '@/components/live-now';
import { SponsorRail } from '@/components/sponsor-rail';
import { marqueeSponsors, marqueeTaken, MARQUEE_CAP } from '@/lib/sponsors';

export default async function HomePage() {
  const rows = await getBoardRows();
  const bots = getAllBots();
  const recent = rows.slice(-4).reverse(); // stand-in for created_at until DB
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
            <Link key={t} href={`/bots?q=${t.toLowerCase()}`}>{t}</Link>
          ))}
        </div>
      </div>

      {/* Sponsor marquee (botdirectory pattern); demo brands are fictional */}
      <div className="marquee" aria-label="Sponsors">
        <div className="marquee-in">
          {[1, 2].map((k) => (
            <span key={k} className="marquee-seg">
              {marqueeSponsors.map((m) => (
                <span key={m.id} className="spon">
                  <span className="sq" />
                  {m.name}
                  <span className="demo-tag mono">demo</span>
                </span>
              ))}
              <span className="spon slot">
                <Link href="/sponsor">Advertise · {marqueeTaken()} of {MARQUEE_CAP} taken · $120/mo</Link>
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Recently added: horizontal card row */}
      <section>
        <div className="shead">
          <h2>Recently added</h2>
          <Link href="/bots" className="hint">View all →</Link>
        </div>
        <div className="cardrow">
          {recent.map((r) => (
            <Link key={r.slug} href={`/bots/${r.slug}`} className="rcard">
              <span className="rcard-top">
                <span className="av">{r.name.slice(0, 2).toUpperCase()}</span>
                <span className="nm">{r.name}</span>
              </span>
              <span className={`tag tag-${r.category}`}>{r.category}</span>
              <span className="rstats mono">
                <span><b>{r.copies.toLocaleString('en-US')}</b> copies</span>
                <span><b>{r.delta7d >= 0 ? '+' : ''}{r.delta7d}</b> 7d</span>
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
            <Link key={r.slug} href={`/bots/${r.slug}`} className="av" title={r.name}>
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

      {/* Activity feed */}
      <section>
        <div className="shead"><h2>What&apos;s happening</h2></div>
        <div className="feed">
          {recent.map((r) => (
            <div key={r.slug} className="fi">
              <span className="when mono">new</span>
              <span>
                <b className="mono">@{r.contributor}</b> published{' '}
                <Link href={`/bots/${r.slug}`} className="nm">{r.name}</Link>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Category pills */}
      <section>
        <div className="shead"><h2>Categories</h2></div>
        <div className="pills">
          {CATEGORIES.map((c) => (
            <Link key={c.id} href={`/api/bots?category=${c.id}`} className="pill">
              {c.name} <b>{catCount(c.id)}</b>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
