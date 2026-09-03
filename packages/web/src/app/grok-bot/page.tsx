import Link from 'next/link';
import type { Metadata } from 'next';
import { getBoardRows } from '@/lib/board';
import { Leaderboard } from '@/components/leaderboard';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Grok Bot Skills: Install Guide and Full List',
  description:
    'Every Grok bot skill in one place: paste-ready setups ranked by copies, each with its integrations and a hard boundary. Copy a skill, paste it into Grok Bot, done.',
  alternates: { canonical: 'https://botskills.sh/grok-bot' },
  openGraph: { url: 'https://botskills.sh/grok-bot' },
};

export default async function GrokBotPage() {
  const rows = (await getBoardRows()).filter((r) => r.runtimes.includes('grok-bot'));

  return (
    <main className="wrap">
      <div className="hero">
        <span className="kicker">Runtime hub</span>
        <h1>Grok Bot skills: install guide and full list</h1>
        <p className="sub">
          {rows.length} paste-ready skills for Grok Bot, ranked by copies. A skill is one file:
          what the bot does, what it connects to, and the one thing it never does without you.
        </p>
      </div>

      <section>
        <div className="shead"><h2>Install a skill in three steps</h2></div>
        <div className="feed">
          <div className="fi"><span className="when mono">1</span>
            <span>Pick a skill below and open it. Read the boundary line first; that is the contract.</span></div>
          <div className="fi"><span className="when mono">2</span>
            <span>Press Copy setup prompt, then paste it into a new Grok Bot.</span></div>
          <div className="fi"><span className="when mono">3</span>
            <span>Connect the integrations the skill lists. The bot starts on its schedule.</span></div>
        </div>
      </section>

      <section>
        <div className="shead">
          <h2>Most copied Grok bot skills</h2>
          <Link href="/bots" className="hint">All bots →</Link>
        </div>
        <Leaderboard rows={rows} />
      </section>

      <section>
        <div className="shead"><h2>For agents</h2></div>
        <p className="sub">
          Grok Bot can read this directory itself: <code className="mono">/api/bots?runtime=grok-bot</code>{' '}
          returns the catalog, and each skill has a raw markdown endpoint. The{' '}
          <Link href="/agents" className="nm">/agents</Link> page shows how a bot authors and
          submits a new skill.
        </p>
      </section>
      <p className="trustnote">Independent directory. Not affiliated with xAI.</p>
    </main>
  );
}
