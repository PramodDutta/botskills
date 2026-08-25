import Link from 'next/link';
import { getAllBots } from '@/lib/bots';
import { getBoardRows, DEMO_METRICS } from '@/lib/board';
import { CATEGORIES } from '@botskills/shared';
import { Leaderboard } from '@/components/leaderboard';
import { SponsorRail } from '@/components/sponsor-rail';
import { marqueeOpenCount, MARQUEE_CAP } from '@/lib/sponsors';

export default function HomePage() {
  const rows = getBoardRows();
  const bots = getAllBots();
  const recent = rows.slice(-4).reverse(); // stand-in for created_at until DB
  const catCount = (id: string) => bots.filter((b) => b.category === id).length;

  return (
    <main className="wrap">
      {/* Compact hero, TrustMRR-style: the board is the hero */}
      <div className="hero">
        <span className="kicker">The Grok Bot skills directory</span>
        <h1>The leaderboard of bots that get real work done</h1>
        <p className="sub">
          Paste-ready Grok bot skills ranked by copies, with full Rakazo support. Every bot
          declares its integrations and the one thing it never does without you.
        </p>
      </div>

      {/* Sponsor marquee (botdirectory pattern), placeholder inventory */}
      <div className="marquee" aria-label="Sponsors">
        <div className="marquee-in">
          {[1, 2].map((k) => (
            <span key={k} className="marquee-seg">
              <span className="spon"><span className="sq" />Your tool here</span>
              <span className="spon"><span className="sq" />Sponsor slot</span>
              <span className="spon slot"><Link href="/sponsor">Advertise · {MARQUEE_CAP - marqueeOpenCount()} of {MARQUEE_CAP} taken · $120/mo</Link></span>
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
              <span className="tag">{r.category}</span>
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
          {DEMO_METRICS && <span className="chip-sample">sample data</span>}
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
          <span className="tick">✓</span> Copies are counted by install telemetry and refreshed
          hourly, not self-reported. Telemetry ships before launch; numbers shown in development
          are placeholders.
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
