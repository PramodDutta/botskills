import Link from 'next/link';
import { getBoardRows, DEMO_METRICS } from '@/lib/board';
import { Leaderboard } from '@/components/leaderboard';

export const metadata = { title: 'All bots' };

export default function BotsPage() {
  const rows = getBoardRows();
  return (
    <main className="wrap">
      <div className="hero">
        <h1>All bots</h1>
        <p className="sub">{rows.length} bot skills, ranked by copies.{' '}
          {DEMO_METRICS && <span className="chip-sample">sample data</span>}</p>
      </div>
      <Leaderboard rows={rows} />
      <p className="trustnote">
        Want yours here? <Link href="/agents" className="nm">Add a bot</Link>: one markdown file,
        one pull request.
      </p>
    </main>
  );
}
