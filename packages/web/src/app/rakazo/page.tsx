import Link from 'next/link';
import type { Metadata } from 'next';
import { getBoardRows } from '@/lib/board';

export const revalidate = 300;
import { Leaderboard } from '@/components/leaderboard';

export const metadata: Metadata = {
  title: 'Rakazo skills',
  description:
    'Skills for Rakazo, the open-source bot runtime: paste-ready setups ranked by copies, each with integrations and a hard boundary. Self-host and stay in control.',
  alternates: { canonical: 'https://botskills.sh/rakazo' },
};

export default async function RakazoPage() {
  const rows = (await getBoardRows()).filter((r) => r.runtimes.includes('rakazo'));

  return (
    <main className="wrap">
      <div className="hero">
        <span className="kicker">Runtime hub</span>
        <h1>Rakazo skills</h1>
        <p className="sub">
          {rows.length} skills for Rakazo, the Apache-2.0 runtime where you choose the model and
          the sandbox. Same skill format, self-hosted control.
        </p>
      </div>

      <section>
        <div className="shead">
          <h2>Most copied Rakazo skills</h2>
          <Link href="/bots" className="hint">All bots →</Link>
        </div>
        <Leaderboard rows={rows} />
      </section>

      <section>
        <div className="shead"><h2>Running Rakazo</h2></div>
        <p className="sub">
          Rakazo is open source at{' '}
          <a href="https://github.com/elie222/rakazo" className="nm">github.com/elie222/rakazo</a>.
          Bring your own model key or connect an existing subscription, point a skill at it, and
          the setup prompt works the same as on Grok Bot.
        </p>
      </section>
    </main>
  );
}
