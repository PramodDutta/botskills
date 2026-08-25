'use client';

import Link from 'next/link';
import { useState } from 'react';

export interface BoardRow {
  rank: number;
  slug: string;
  name: string;
  description: string;
  category: string;
  contributor: string;
  runtimes: string[];
  runtimeBadges: string[];
  copies: number;
  delta7d: number;
  votes: number;
  isNew: boolean;
}

const MEDALS = ['\u{1F947}', '\u{1F948}', '\u{1F949}'];
const PAGE = 25;

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

  const needle = q.trim().toLowerCase();
  const filtered = needle
    ? rows.filter((r) =>
        [r.name, r.description, r.category, r.contributor, ...r.runtimes]
          .join(' ')
          .toLowerCase()
          .includes(needle),
      )
    : rows;
  const visible = filtered.slice(0, shown);
  const remaining = filtered.length - shown;

  return (
    <div className="board">
      <div className="board-search">
        <input
          type="search"
          placeholder={`Search ${rows.length} bots: name, integration, category...`}
          value={q}
          onChange={(e) => { setQ(e.target.value); setShown(PAGE); }}
          aria-label="Search bots"
        />
      </div>
      <div className="board-scroll">
        <table>
          <thead>
            <tr>
              <th>#</th><th>Bot</th><th>Category</th><th>Contributor</th>
              <th style={{ textAlign: 'right' }}>Copies</th>
              <th style={{ textAlign: 'right' }}>7d</th>
              <th style={{ textAlign: 'right' }}>Votes</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => (
              <tr key={r.slug}>
                <td className="rank">{r.rank <= 3 ? MEDALS[r.rank - 1] : r.rank}</td>
                <td>
                  <Link href={`/bots/${r.slug}`} className="bot-cell">
                    <span className="av">{r.name.slice(0, 2).toUpperCase()}</span>
                    <span className="bot-txt">
                      <span className="nm">
                        {r.name}
                        {r.isNew && <span className="badge-new">NEW</span>}
                      </span>
                      <span className="ds">{r.description}</span>
                      <span className="rts">
                        {r.runtimes.map((rt, i) => (
                          <span key={rt} className={`rt rt-${rt}`}>{r.runtimeBadges[i]}</span>
                        ))}
                      </span>
                    </span>
                  </Link>
                </td>
                <td><span className={`tag tag-${r.category}`}>{r.category}</span></td>
                <td className="who mono">@{r.contributor}</td>
                <td className="num mono">{r.copies.toLocaleString('en-US')}</td>
                <td className={`num mono ${r.delta7d > 0 ? 'up' : ''}`}>
                  {r.delta7d > 0 ? `▲ ${r.delta7d}` : '·'}
                </td>
                <td className="num"><VoteButton slug={r.slug} votes={r.votes} /></td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr><td colSpan={7} className="ds" style={{ textAlign: 'center', padding: '1.4rem' }}>
                No bots match &quot;{q}&quot;.
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
    </div>
  );
}
