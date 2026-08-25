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
  isNew: boolean;
}

const MEDALS = ['\u{1F947}', '\u{1F948}', '\u{1F949}'];
const PAGE = 25;

export function Leaderboard({ rows }: { rows: BoardRow[] }) {
  const [shown, setShown] = useState(PAGE);
  const visible = rows.slice(0, shown);
  const remaining = rows.length - shown;

  return (
    <div className="board">
      <div className="board-scroll">
        <table>
          <thead>
            <tr>
              <th>#</th><th>Bot</th><th>Contributor</th>
              <th style={{ textAlign: 'right' }}>Copies</th>
              <th style={{ textAlign: 'right' }}>7d</th>
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
                <td className="who mono">@{r.contributor}</td>
                <td className="num mono">{r.copies.toLocaleString('en-US')}</td>
                <td className={`num mono ${r.delta7d >= 0 ? 'up' : 'dn'}`}>
                  {r.delta7d >= 0 ? '▲' : '▼'} {Math.abs(r.delta7d)}
                </td>
              </tr>
            ))}
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
