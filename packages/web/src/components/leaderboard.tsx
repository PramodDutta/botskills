'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IntegrationIcon } from '@/components/integration-icon';

export interface BoardRow {
  rank: number;
  slug: string;
  name: string;
  description: string;
  category: string;
  contributor: string;
  integrations: string[];
  runtimes: string[];
  runtimeBadges: string[];
  copies: number;
  delta7d: number;
  votes: number;
  isNew: boolean;
}

const MEDALS = ['\u{1F947}', '\u{1F948}', '\u{1F949}'];
const PAGE = 25;
const CATEGORIES = ['productivity', 'sales', 'marketing', 'ops', 'success', 'personal'];

function VoteButton({ slug, votes }: { slug: string; votes: number }) {
  const key = `voted:${slug}`;
  const [count, setCount] = useState(votes);
  const [voted, setVoted] = useState(
    typeof window !== 'undefined' && localStorage.getItem(key) === '1',
  );
  const [nudge, setNudge] = useState(false);

  async function vote(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (voted) { setNudge(true); setTimeout(() => setNudge(false), 2600); return; }
    setVoted(true);
    setCount((c) => c + 1);
    try { localStorage.setItem(key, '1'); } catch {}
    fetch('/api/telemetry/vote', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ slug }),
    }).catch(() => {});
    setNudge(true);
    setTimeout(() => setNudge(false), 2600);
  }

  return (
    <span className="votewrap">
      <button className={`votebtn${voted ? ' voted' : ''}`} onClick={vote} aria-label={`Upvote ${slug}`}>
        ▲ <span className="mono">{count}</span>
      </button>
      {nudge && (
        <span className="vote-nudge">
          Counted. <Link href="/signup">Create an account</Link> to keep votes across devices.
        </span>
      )}
    </span>
  );
}

export function Leaderboard({ rows }: { rows: BoardRow[] }) {
  const [shown, setShown] = useState(PAGE);
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('');
  const [sort, setSort] = useState<'copies' | 'votes' | 'az'>('copies');
  const [view, setView] = useState<'table' | 'cards'>('table');

  const needle = q.trim().toLowerCase();
  let filtered = rows;
  if (cat) filtered = filtered.filter((r) => r.category === cat);
  if (needle)
    filtered = filtered.filter((r) =>
      [r.name, r.description, r.category, r.contributor, ...r.integrations, ...r.runtimes]
        .join(' ').toLowerCase().includes(needle),
    );
  filtered = [...filtered].sort((a, b) =>
    sort === 'copies' ? b.copies - a.copies :
    sort === 'votes' ? b.votes - a.votes :
    a.name.localeCompare(b.name),
  );
  const visible = filtered.slice(0, shown);
  const remaining = filtered.length - shown;

  return (
    <div className="board">
      <div className="board-controls">
        <input
          type="search"
          placeholder="Search"
          value={q}
          onChange={(e) => { setQ(e.target.value); setShown(PAGE); }}
          aria-label="Search bots"
        />
        <select value={cat} onChange={(e) => { setCat(e.target.value); setShown(PAGE); }} aria-label="Category">
          <option value="">Any category</option>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c[0].toUpperCase() + c.slice(1)}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} aria-label="Sort">
          <option value="copies">Most copied</option>
          <option value="votes">Most voted</option>
          <option value="az">A to Z</option>
        </select>
        <span className="view-toggle">
          <button className={view === 'table' ? 'on' : ''} onClick={() => setView('table')}>Table</button>
          <button className={view === 'cards' ? 'on' : ''} onClick={() => setView('cards')}>Cards</button>
        </span>
      </div>

      {view === 'table' ? (
        <>
          <div className="board-scroll">
            <table>
              <thead>
                <tr>
                  <th>#</th><th>Bot</th><th>Category</th><th>Integrations</th>
                  <th style={{ textAlign: 'right' }}>Copies</th>
                  <th>Source</th>
                  <th style={{ textAlign: 'right' }}>Votes</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((r) => (
                  <tr key={r.slug}>
                    <td className="rank">{r.rank <= 3 ? MEDALS[r.rank - 1] : r.rank}</td>
                    <td>
                      <Link href={`/bots/${r.slug}`} className="bot-cell">
                        <span className="bot-txt">
                          <span className="nm">
                            {r.name}
                            {r.isNew && <span className="badge-new">NEW</span>}
                          </span>
                          <span className="rts">
                            {r.runtimes.map((rt, i) => (
                              <span key={rt} className={`rt rt-${rt}`}>{r.runtimeBadges[i]}</span>
                            ))}
                          </span>
                        </span>
                      </Link>
                    </td>
                    <td><span className={`tag tag-${r.category}`}>{r.category}</span></td>
                    <td className="ints">
                      {r.integrations.slice(0, 3).map((i) => <IntegrationIcon key={i} id={i} />)}
                    </td>
                    <td className="num mono">{r.copies.toLocaleString('en-US')} <span className="unit">copies</span></td>
                    <td className="who mono">@{r.contributor}</td>
                    <td className="num"><VoteButton slug={r.slug} votes={r.votes} /></td>
                  </tr>
                ))}
                {visible.length === 0 && (
                  <tr><td colSpan={7} className="ds" style={{ textAlign: 'center', padding: '1.4rem' }}>
                    No bots match.
                  </td></tr>
                )}
              </tbody>
            </table>
          </div>
          {remaining > 0 && (
            <button className="show-more" onClick={() => setShown(shown + PAGE)}>
              Show more ({remaining} more bots)
            </button>
          )}
        </>
      ) : (
        <div className="cards-grid">
          {visible.map((r) => (
            <Link key={r.slug} href={`/bots/${r.slug}`} className="rcard">
              <span className="rcard-top">
                <span className="av">{r.name.slice(0, 2).toUpperCase()}</span>
                <span className="nm">{r.name}</span>
              </span>
              <span className={`tag tag-${r.category}`}>{r.category}</span>
              <span className="ds">{r.description}</span>
              <span className="rstats mono">
                <span><b>{r.copies.toLocaleString('en-US')}</b> copies</span>
                <span><b>{r.votes}</b> votes</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
