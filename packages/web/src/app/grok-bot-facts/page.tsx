import type { Metadata } from 'next';
import Link from 'next/link';
import { SignupForm } from '@/components/signup-form';
import { FactsPack } from '@/components/facts-pack';

export const metadata: Metadata = {
  title: 'The Grok Bot Fact Check: 15 things the roundups get wrong',
  description:
    'Fifteen Grok Bot claims that circulate widely and are wrong, each with the documentation line that corrects it. Free, one email, no follow-up sequence.',
  alternates: { canonical: 'https://botskills.sh/grok-bot-facts' },
};

export default function FactsPage() {
  return (
    <main className="wrap detail">
      <h1>The Grok Bot Fact Check</h1>
      <p className="sub">
        Fifteen claims about Grok Bot that circulate in roundups, threads and vendor
        comparisons, each one wrong, and each with the documentation line that corrects
        it. We built this because we needed it ourselves: every article on this site is
        checked against it before it publishes.
      </p>

      <div className="callout">
        <b>Why this exists.</b> Most Grok Bot writing was published in the first fortnight
        after launch and has not been touched since. Prices moved on 21 August. A share
        path shipped that did not exist before. Two of the most repeated security claims
        were never true. If you are making a buying or security decision from a post you
        found in search, several of the numbers in it are probably stale.
      </div>

      <h2>What you get</h2>
      <ul>
        <li>Fifteen corrections, each with the exact source page on docs.x.ai</li>
        <li>The three claims that are unverifiable, so you can stop repeating them</li>
        <li>The four hard limits that are documented and rarely mentioned</li>
        <li>A short note on what changed recently, and what to re-check before you quote it</li>
      </ul>

      <h2>Get it</h2>
      <p>
        One email, and it appears immediately on this page. We do not run a follow-up
        sequence, and we do not pass your address to anyone. You can also just read{' '}
        <Link href="/blog">the articles</Link>, which carry the same facts in context.
      </p>

      <SignupForm
        source="facts-pack"
        cta="Show me the fact check"
        busyLabel="Checking..."
        doneMessage="Here it is. Nothing else will arrive in your inbox unless you ask."
      >
        <FactsPack />
      </SignupForm>
    </main>
  );
}
