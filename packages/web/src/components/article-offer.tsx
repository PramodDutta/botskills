import Link from 'next/link';
import { SignupForm } from '@/components/signup-form';

/**
 * The capture block at the foot of every article.
 *
 * The lead magnet and its API existed for weeks and converted nothing, because
 * the only route to it was the nav and a noindex /signup page. Search traffic
 * lands on articles, so the offer has to live there.
 *
 * Deliberately not a popup or an exit-intent overlay: this audience arrived
 * from a search for a factual answer, and interrupting that is how you lose
 * the reader and the ranking together.
 */
export function ArticleOffer() {
  return (
    <aside className="article-offer">
      <p className="ao-kicker">Before you build from this</p>
      <p className="ao-lead">
        Most Grok Bot writing was published in the fortnight after launch and never
        touched again. Prices moved on 21 August. Two of the most repeated security
        claims were never true. We keep a fact check of{' '}
        <b>fifteen claims that circulate widely and are wrong</b>, each with the
        documentation line that corrects it. Every article here is checked against it
        before it publishes.
      </p>
      <SignupForm
        source="facts-pack"
        cta="Send me the fact check"
        busyLabel="Sending..."
        doneMessage="Done. The fact check is below, and it is a single page."
      >
        <p className="ao-reveal">
          <Link href="/grok-bot-facts">Open the Grok Bot fact check</Link>
        </p>
      </SignupForm>
      <p className="ao-fine">
        One email, no sequence. We use it to tell you when a fact changes, which so far
        has been twice.
      </p>
    </aside>
  );
}
