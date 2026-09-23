import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/site';

interface Row {
  claim: string;
  truth: string;
  source: string;
}

// Every row traces to docs/seo/VERIFIED-FACTS-2026-08-25.md or the guides file
// beside it. Nothing here is inferred, and nothing carries a figure xAI has not
// published. If a row cannot cite a page, it does not belong in this table.
const WRONG: Row[] = [
  {
    claim: 'Each Bot gets its own computer or its own VM',
    truth:
      'Every bot on an account shares one persistent cloud computer. The computer is assigned to your user account, not to a Bot. Each bot gets its own screen on that machine.',
    source: 'grok-bot/computer-and-apps',
  },
  {
    claim: 'Separate bots isolate credentials, so use one per client',
    truth:
      'Browser cookies, signed-in sessions, files and command-line credentials are shared across bots. The docs say plainly: do not use separate Bots as a security boundary.',
    source: 'grok-bot/approvals-security-and-privacy',
  },
  {
    claim: 'Deleting a bot cleans up its logins and files',
    truth:
      'It does not. Shared-computer files and browser sessions survive the deletion. Revoke the site logins yourself, before you delete.',
    source: 'grok-bot/approvals-security-and-privacy',
  },
  {
    claim: 'Grok Bot runs only on Mac, Windows and iPhone, with no Linux or Android app',
    truth:
      'Out of date since September 2026. The FAQ lists a Linux desktop app (x64 and Arm64, as a .deb, an .rpm or an AppImage) and an Android companion app for Android 9 or later, and the iOS app also runs on iPad with iPadOS 18 or later. The phone app can create bots, message them, approve steps, take over the computer, show run history and delete a routine; only editing and testing a routine need the desktop app.',
    source: 'grok-bot/faq and grok-bot/mobile, checked 23 September 2026',
  },
  {
    claim: 'The cheapest way in is $120, or $200, or $300 a month',
    truth:
      'Stale twice over. Every paid Cursor plan now includes Grok Bot, so Cursor Pro at $20 a month is the cheapest paid path; Pro+ and Ultra only raise the weekly usage. An individual SuperGrok, SuperGrok Plus, SuperGrok Heavy or X Premium+ subscription can be linked instead. A one-time trial exists as well.',
    source: 'cursor.com/help/grok-bot/plans and cursor.com/pricing, checked 23 September 2026',
  },
  {
    claim: 'SuperGrok Heavy costs $300 a month',
    truth:
      'That figure is not published anywhere. It circulates in roundups and should not be quoted, including by us. What is documented is that an individual SuperGrok Heavy subscription, like SuperGrok and SuperGrok Plus, can be linked to grant Grok Bot usage.',
    source: 'cursor.com/help/grok-bot/plans',
  },
  {
    claim: 'You can pick the model, or an admin can restrict it',
    truth:
      'Cursor manages model selection, so there is no model picker for members. Enterprise admins can set a team model allowlist, but the docs say enforcement is not guaranteed, and the serving mix can change over time.',
    source: 'grok-bot/settings-and-notifications and grok-bot/security',
  },
  {
    claim: 'You can set a spending cap per bot, or there is no cap at all',
    truth:
      'Both are wrong. There is no Grok Bot-specific or per-bot cap, but the account-level On-demand monthly limit exists: set it in Grok Bot Settings or at cursor.com/dashboard under Spending. Weekly usage drains first, then on-demand up to that limit.',
    source: 'cursor.com/help/grok-bot/plans and grok-bot/teams-and-enterprises',
  },
  {
    claim: 'The included allowance is worth roughly X dollars',
    truth:
      'No figure is published. Any number you have seen for this was invented. Plan against behaviour, meaning cadence and retries, not against a dollar estimate.',
    source: 'grok-bot/faq',
  },
  {
    claim: 'Every account has an audit log of what each bot did',
    truth:
      'Only Enterprise does: audit logs plus Action Recording, which is off by default and keeps 90 days. Individual accounts and self-serve Teams have no audit view of Bot actions, so if you need to prove what a bot did, keep your own receipts as you go.',
    source: 'grok-bot/security and grok-bot/teams-and-enterprises',
  },
  {
    claim: 'Grok Bot reads your SKILL.md, CLAUDE.md and MCP config',
    truth:
      'That is Grok Build, the coding CLI, not Grok Bot. No Grok Bot page mentions Claude Code, SKILL.md, CLAUDE.md or MCP config files.',
    source: 'docs.x.ai/build vs docs.x.ai/grok-bot',
  },
  {
    claim: 'Routines are a team-level thing you can hand over',
    truth:
      'A routine belongs to one Bot and dies with it. Nothing is team-level. Copy the charter text out before you delete anything.',
    source: 'grok-bot/skills-routines-and-automations',
  },
  {
    claim: 'There is no limit on routines or bots',
    truth:
      'Two documented ceilings: a maximum of 50 routines per Bot, with the 20 most recent run records kept per routine, and a maximum of six bots per channel, meaning a Projects Manager plus five.',
    source: 'grok-bot/skills-routines-and-automations and x.ai/bot/guides',
  },
  {
    claim: 'You cannot share a bot with anyone',
    truth:
      'This one changed. The Share menu creates a template link, either public or team-only (Enterprise defaults to team-only). Anyone who can open it can preview the Bot and add a copy of its configuration. They do not get your computer, your logins, or your conversation history.',
    source: 'grok-bot/faq, checked 23 September 2026',
  },
  {
    claim: 'Sharing a bot is harmless',
    truth:
      'The link exposes the Bot configuration. Strip secrets first. A charter naming an internal hostname, quoting a customer, or carrying a token in an example is published to anyone who receives the URL.',
    source: 'grok-bot/faq',
  },
];

export function FactsPack() {
  return (
    <section className="facts-pack">
      <h2>The fact check</h2>
      <p className="ds">
        Sources are pages on <code className="mono">docs.x.ai</code> unless noted. Last checked 23
        September 2026. Product facts move, so re-check anything you are about to put in front of a
        buyer.
      </p>
      <ol className="facts-list">
        {WRONG.map((r) => (
          <li key={r.claim}>
            <b>Wrong: {r.claim}</b>
            <p>{r.truth}</p>
            <p className="ds mono">Source: {r.source}</p>
          </li>
        ))}
      </ol>
      <div className="callout">
        <b>Three that are unverifiable rather than wrong.</b> The Heavy price, the allowance value,
        and the model set behind Grok Bot. Nobody outside xAI can source any of the three, so treat
        any post that states them confidently as unreliable on everything else too.
      </div>
      <p>
        Every article on this site is checked against this list before it publishes. If you find
        something here that is out of date, that is a bug and we want to know:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <p>
        Next:{' '}
        <Link href="/blog/grok-bot-one-computer-many-screens">
          what one shared computer actually means
        </Link>
        , <Link href="/blog/cheapest-way-into-grok-bot">the cheapest way in</Link>, or{' '}
        <Link href="/">the bot catalogue</Link>.
      </p>
    </section>
  );
}
