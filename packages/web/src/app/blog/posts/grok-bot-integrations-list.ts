import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Every Grok Bot Integration and What Each One Unlocks',
  description:
    'A working reference to Grok Bot integrations by family: mail, chat, code, docs, calendar, CRM, social, storage, payments, and the blast radius of each grant.',
  date: '2026-08-25',
  category: 'Reference',
  content: `
# Every Grok Bot Integration and What Each One Unlocks

An integration list is usually presented as a menu of things you can now do.
That is half the picture, and it is the less useful half. The question that
matters when you connect a tool to a bot is not what it unlocks but what it
exposes, because the connection outlives the task you connected it for.

This is a reference organised by family rather than by logo, because the
logos change. What each family unlocks stays stable, and so does its blast
radius.

One warning before the tables. Connector catalogues move faster than articles
do. Treat everything below as the shape of the landscape as of writing, and
confirm what is actually available for your account in the app itself before
you plan a workflow around it.

## Three ways a bot reaches a tool

There is no single integration mechanism, and knowing which one you are using
changes what you should worry about.

Built-in connectors are maintained by the vendor and authenticate through
OAuth. You sign in once and the bot can use that service on demand. As of
writing, xAI's built-in set covers Google mail and calendar, Google Drive,
OneDrive, Outlook mail and calendar, Microsoft Teams, SharePoint, and
Salesforce. On Business and Enterprise accounts an administrator has to
provision a connector before anyone in the organisation can use it, which is
worth knowing before you spend an afternoon wondering why the list is short.

The connector catalogue is a wider set of pre-configured OAuth integrations
for popular third-party services, added over time. This is the part that
changes most, so browse the live catalogue rather than any list you read
somewhere.

Custom connectors use the Model Context Protocol, which lets you expose an
internal API, a database, or a tool nobody has built a connector for. You
define the tools and their schemas, you handle authentication on your own
infrastructure, and the server has to be reachable from outside your network.
This is the escape hatch for anything proprietary.

Underneath all three there is a fourth path that is easy to forget: the bot's
own computer. It has a browser and a saved session, so a tool with no
connector of any kind is still reachable if a person could reach it by
clicking. That is a genuine capability and a genuine risk, and it is covered
further down.

## The integration families, at a glance

| Family | What it unlocks | Blast radius once granted | Sensible default |
|---|---|---|---|
| Mail | Search, read, thread context, draft, label, send | Your entire correspondence history, including every password reset and contract ever sent to you | Read and draft only, never send |
| Calendar | Availability, event details, attendees, scheduling | Who you meet, how often, and what your commercial calendar implies | Read, plus write only to your own calendar |
| Chat | Channel history, threads, mentions, posting | Everything your team said in every channel the account can see | Read scoped channels, post only to your own DM |
| Code | Repositories, issues, pull requests, review comments | Source, secrets in history, and the ability to change what ships | Read and comment, never merge or push |
| Docs | Documents, wikis, spreadsheets, page trees | Strategy, salaries, incident notes, and anything else the wiki holds | Read specific spaces, not the whole workspace |
| Storage | Files, folders, sharing links, uploads | Every file the account can open, including things shared with you years ago | Read one folder, write to one output folder |
| CRM | Contacts, accounts, deals, notes, activity | Your customer list and pipeline, which is often the crown jewels | Read and internal notes, never mass update |
| Social | Timeline, mentions, search, posting | Your public voice, with no undo that matters | Read only, drafts held for approval |
| Payments | Balances, transactions, invoices, refunds, payouts | Money, and mistakes that are expensive rather than embarrassing | Read-only key, separate account, never write |

## Mail: highest value, highest risk

Mail is where bots earn their keep, because so much of a working week is
routing correspondence rather than doing work. It is also the connection you
should think about hardest.

What a mail connection unlocks is genuinely broad: searching with real
operators, reading full message bodies and headers, opening attachments,
composing drafts for review, applying labels, and, where write access is
enabled, sending, replying, and forwarding. The permission model is typically
tiered, so a base connection reads and a separate grant writes.

The blast radius is the part people underestimate. Your inbox is not a
communication tool, it is an archive of your entire professional life plus a
password reset endpoint for most of your other accounts. Anything that can
search it can find your contracts, your bank correspondence, your legal
threads, and the one email where a client said something they would never say
in public.

This is exactly why the [Inbox Triage bot](/bots/inbox-triage) in the catalog
carries a hard line: it never sends an email, and every draft waits for
explicit approval. The [Email Purger bot](/bots/email-purger) goes further,
holding every deletion and unsubscribe until you approve the full list,
because bulk mail operations are the fastest way to lose something you needed.

If you connect one thing this week, make it mail, and make it read and draft
only.

## Calendar, docs, and storage

Calendar is the highest ratio of usefulness to danger in the whole list. It
unlocks availability lookups, event details with attendees, free and busy
checks, and, with write access, creating and updating events and responding to
invitations. The read side is nearly harmless and enormously useful for
briefing. The write side is where you should be selective: writing to your own
calendar is fine, writing to a shared team calendar means a bot can move other
people's days. The [Marketing Calendar Sync bot](/bots/marketing-calendar-sync)
draws precisely that line, touching only your local calendar and never editing
the shared source of truth.

Docs and wikis unlock the context that makes every other bot better. A bot
that can read your product wiki writes better support drafts. The blast radius
is that most wikis contain a page nobody remembers writing that lists
salaries, incident details, or an API key someone pasted "temporarily" in
2023. Connect a specific space rather than an entire workspace where the
product allows it.

Storage unlocks file work: reading spreadsheets, opening PDFs, writing reports
somewhere durable. The trap is inherited access. A drive account can usually
open every file anyone has ever shared with it, which is a much larger set
than the files you think of as yours. Give the bot one input folder and one
output folder, and say so in the charter.

## Chat and code

A chat connection unlocks channel history, thread context, mentions, and
posting. Reading team chat is how a bot learns what actually happened this
week, as opposed to what the tickets say happened. Posting is where it goes
wrong, because a shared channel has an audience and no undo that anyone
believes. The [Standup Scribe bot](/bots/standup-scribe) resolves this by
posting only to your own DM, which keeps all the usefulness and removes the
public failure mode.

Code connections unlock repository reads, issue and pull request context, and
review comments. This is one of the most valuable families for a technical
operator: a bot that reads a diff and leaves a first-pass review saves real
time. The blast radius is larger than it looks, because repository access is
also access to git history, which is where secrets go to be forgotten, and
because write access means the ability to change what ships. The
[PR Review Sentinel bot](/bots/pr-review-sentinel) never merges, approves,
pushes, or requests changes; it comments only, which is the entire safe
surface of the job.

## CRM, social, and payments

CRM unlocks pipeline visibility: accounts, contacts, deals, activity history,
and in most cases the ability to create and update records. Read access powers
genuinely good work, such as spotting accounts that went quiet or preparing a
briefing before a call. Write access to a CRM is where a bot can quietly
corrupt the data your business runs on, usually not by deleting anything but
by mass updating a field with a plausible wrong value. Internal notes are a
good compromise: the bot records what it found without touching structured
fields.

Social unlocks reading your timeline, mentions, and search, plus posting. The
asymmetry here is extreme. Reading is nearly free and quite valuable, and
posting is irreversible in the way that matters, since a deleted post is still
a screenshot. Every social bot in the catalog is drafts-only for this reason:
the [Viral Tweet Scout bot](/bots/viral-tweet-scout) reads but never posts,
likes, or replies, and the [X Account Crew bot](/bots/x-account-crew) produces
drafts and reports with nothing publishing without you.

Payments deserves its own paragraph and a different posture. Before assuming
any payments integration exists for your account, check, because this is the
family where availability varies most and where an out-of-date list is most
expensive. Where you do connect something financial, three rules apply: use a
read-only credential if the platform offers one, use a dedicated account
rather than your primary, and never grant an action that moves money. The
[Personal CFO bot](/bots/personal-cfo) never trades or moves money; every
rebalance is a recommendation. The
[Bookkeeping Auditor bot](/bots/bookkeeping-auditor) never edits the live
books. Those are not cautious defaults, they are the only defensible
configurations.

## When there is no connector at all

The genuinely distinctive thing about a bot with a persistent computer is that
the connector list is not the limit. If a tool has a web interface, the bot
can drive it with a browser and a saved session, which means supplier portals,
council websites, old admin panels, and internal tools behind SSO are all in
range.

Two practical notes. Prefer letting the bot hit the login wall and hand you
the screen, so you authenticate and it resumes with a session rather than a
stored credential. Never paste a password or a one-time code into a chat with
the bot. And expect any interface-driven step to be more fragile than an API
call, because a redesign breaks it. The
[Flight Check-In bot](/bots/flight-check-in) encodes the right instinct here:
it stops for a human at every two-factor prompt or captcha and never tries to
get past one.

## A minimum-connection policy

Connections are usually account-level, which means connecting a tool once
makes it reachable by every bot on that account, including bots you have not
written yet. That is the fact that should shape your policy. There is a fuller
treatment of what each grant really means in
[the Grok Bot permissions guide](/blog/grok-bot-permissions-explained).

Declare connections in the charter itself, not just in a settings panel, so
the intended scope is written where you will read it again:

\`\`\`text
You are my Weekly Account Review.

// CONNECTIONS YOU USE
Mail: read and search only. Never send.
Calendar: read only.
CRM: read, plus writing internal notes on the account record.
Storage: read /clients/, write only to /reports/weekly/.
You use nothing else. If a task seems to need another tool,
stop and tell me which one and why.

// WHAT YOU OWN
Every Friday at 15:00 Europe/London, for each account with activity
in the last 30 days: summarise what changed, list open threads with
no reply for 5 or more days, and flag any account with zero contact
in 21 days. Write one file per account to /reports/weekly/.

// WHAT GOOD LOOKS LIKE
Every claim links to the message, event, or record it came from.
Where you are unsure, say "unclear" rather than inferring.

// WHERE YOU STOP
Never email or message a customer.
Never change a CRM field, only add a note.
Never open a file outside /clients/.
\`\`\`

Four habits keep the surface small. Connect only what a bot needs this week,
and add the rest when a real task demands it. Prefer the read-only tier
wherever the job only reads. Use a separate account for anything financial.
Review the connection list monthly and remove whatever no live bot uses, which
is usually more than you expect.

## Confirming what is available for your account

Three things determine what you can actually connect, and only one of them is
the public catalogue. Your plan tier gates some connectors. On business and
enterprise accounts, an administrator has to provision a connector before
members can see it, so an empty list is often a policy question rather than a
product limitation. And the catalogue itself gains and loses entries.

So the workflow is: check the live connector page in the app, not a list in an
article, and if something you expect is missing on a managed account, ask your
administrator before concluding it does not exist. When you find a gap that is
real, a custom connector over the Model Context Protocol is the supported way
to close it.

For paste-ready setups where the connection list and the boundary are already
written down, the [botskills.sh launch catalog](/blog/introducing-botskills)
is a faster starting point than a blank charter.

## Frequently Asked Questions

### Are Grok Bot integrations per bot or shared across my account?

Connections are generally established at the account level, which means once
you authorise a tool, any bot on that account can potentially use it,
including bots you create months later. This is the single most important fact
about the permission model, and it is why a minimum-connection policy matters
more than per-bot instructions. Treat every new connection as a permanent
widening of what your whole bot roster can reach, and remove connections that
no active bot uses. Per-bot restrictions written in a charter are useful
guardrails, but they are not the same as not having the connection at all.

### What if the tool I need has no connector?

You have two supported routes. The first is a custom connector built on the
Model Context Protocol, which lets you expose an internal API, database, or
unusual SaaS tool with schemas you define and authentication you control; the
server needs to be reachable from outside your network. The second is the
bot's own browser, which can operate any interface a person could operate
using a session you established by signing in yourself. The browser route is
quicker to set up and more fragile, since a redesign of the target site breaks
it without warning.

### Should I grant write access on the first day?

No. Read access answers the question you actually have on day one, which is
whether the bot understands your work well enough to produce something useful.
Write access answers a question you cannot yet ask honestly, which is whether
you trust its judgement unattended. Run read-only for a week, review every
output, and widen access only for the specific action that a week of evidence
says is safe. This costs you almost nothing, because reviewing a good draft
takes seconds while unwinding a wrong send or a mass CRM update takes a day
and some credibility.

### How do I stop a bot from using a connection I granted for something else?

Write it into the charter as an explicit exclusion, and pair that with an
approval rule in the runtime where one is available. The charter should name
the tools the bot may use, name the ones it must not, and instruct it to stop
and ask rather than improvise if a task appears to need something outside that
list. A rule enforced by the runtime outranks instructions the bot might
reinterpret, so use both. The strongest control remains the simplest one: if
nothing needs a connection right now, disconnect it.
`,
};
