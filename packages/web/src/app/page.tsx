import Link from 'next/link';
import { getAllBots } from '@/lib/bots';
import { CATEGORIES, RUNTIMES } from '@botskills/shared';

export default function HomePage() {
  const bots = getAllBots();
  const categoryName = (id: string) => CATEGORIES.find((c) => c.id === id)?.name ?? id;
  const runtimeBadge = (id: string) => RUNTIMES.find((r) => r.id === id)?.badge ?? id;

  return (
    <main className="wrap">
      <div className="hero">
        <span className="kicker">Skills for Grok Bot &amp; Rakazo</span>
        <h1>The leaderboard of bots that get real work done</h1>
        <p className="sub">
          Paste-ready bot setups. Every bot declares what it does, what it connects to, and the
          one thing it will never do without you. {bots.length} in the catalog.
        </p>
      </div>

      <div className="board">
        <div className="board-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th><th>Bot</th><th>Category</th><th>Integrations</th>
                <th>Runtime</th><th>Boundary</th>
              </tr>
            </thead>
            <tbody>
              {bots.map((bot, i) => (
                <tr key={bot.slug}>
                  <td className="rank">{i + 1}</td>
                  <td>
                    <Link href={`/bots/${bot.slug}`}>
                      <span className="nm">{bot.name}</span>
                      <br />
                      <span className="ds">{bot.description}</span>
                    </Link>
                  </td>
                  <td className="ds">{categoryName(bot.category)}</td>
                  <td className="ds">{bot.integrations.join(' · ')}</td>
                  <td>
                    {bot.runtimes.map((r) => (
                      <span key={r} className={`rt rt-${r}`}>{runtimeBadge(r)}</span>
                    ))}
                  </td>
                  <td className="boundary">{bot.boundary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
