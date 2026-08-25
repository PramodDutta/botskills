import Link from 'next/link';
import { getBoardRows } from '@/lib/board';

export const revalidate = 300;
import { Leaderboard } from '@/components/leaderboard';

export const metadata = { title: 'All bots' };

export default async function BotsPage() {
  const rows = await getBoardRows();
  return (
    <main className="wrap">
      <div className="hero">
        <h1>All bots</h1>
        <p className="sub">{rows.length} bot skills, ranked by copies.{' '}</p>
      </div>
      <Leaderboard rows={rows} />
      <p className="trustnote">
        Want yours here? <Link href="/agents" className="nm">Add a bot</Link>: one markdown file,
        one pull request.
      </p>
    </main>
  );
}
