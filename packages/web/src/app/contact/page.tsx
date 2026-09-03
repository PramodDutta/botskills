import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/site';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Reach the people who run botskills.sh. Sponsorship, a correction to an article, a bot submission, or anything else. We reply from ${CONTACT_EMAIL}.`,
  alternates: { canonical: 'https://botskills.sh/contact' },
};

export default function ContactPage() {
  return (
    <main className="wrap detail">
      <h1>Contact</h1>
      <p className="sub">
        One mailbox, read by a person. Sponsorship, a correction to something we
        published, a bot you want listed, or a question about how any of this works.
      </p>

      <div className="callout">
        <b>Found something wrong in an article?</b> Say so here and it gets fixed. Product
        facts move, and a page that was right in August can be wrong by October. We would
        rather hear it from you than leave it up.
      </div>

      <h2>Things that are faster elsewhere</h2>
      <ul>
        <li>
          Submitting a bot: open a pull request against{' '}
          <a href="https://github.com/PramodDutta/botskills">the repository</a>, since a
          bot is one file and a PR is quicker than a thread.
        </li>
        <li>
          Sponsorship details and prices: <Link href="/sponsor">the sponsor page</Link>{' '}
          has the placements, the maths, and what each one costs.
        </li>
        <li>
          What the site actually holds: <Link href="/bots">the catalogue</Link> and{' '}
          <Link href="/blog">the articles</Link>.
        </li>
      </ul>

      <h2>Send a message</h2>
      <ContactForm />
    </main>
  );
}
