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

## Identify which of four mechanisms a connection actually uses

There is no single integration mechanism, and knowing which one you are using
changes what you should worry about.

Built-in connectors are maintained by the vendor and authenticate through
OAuth. You sign in once and the bot can use that service on demand. The set has
generally covered the large productivity suites: mail and calendar, drive
storage, team chat, and at least one CRM. Printing today's exact list in an
article is a guarantee of being wrong within a month, so read it off the
connector page in your own account rather than from here. On managed business
and enterprise accounts an administrator may have to provision a connector
before anyone in the organisation can use it, which is worth knowing before you
spend an afternoon wondering why the list is short.

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

## Compare the four mechanisms on the things that actually differ

Choosing a mechanism is usually forced by what exists, but where you have a
choice, these are the axes that matter. Read the last column first.

| Mechanism | Where the credential ends up | What breaks it | Who can turn it on | Reach once granted | Choose it when |
|---|---|---|---|---|---|
| Built-in connector | With the provider, granted at account level | A vendor scope or API change | You, or an administrator on a managed account | Everything inside the granted scope, for every bot on the account | The service is one of the big suites and a connector exists |
| Catalogue connector | Same as built-in | Catalogue churn, since entries come and go | You, or an administrator | Same as built-in | A popular third-party tool already has an entry |
| Custom connector over MCP | Your infrastructure, with hosted sign-in tokens held by the backend rather than stored on the computer ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Your server, your schema, your uptime | You, if you can host something reachable from outside | Exactly the tools you defined, which is the point | Internal APIs, databases, or anything proprietary |
| Browser session on the bot's computer | The shared cookie jar on the account computer | A site redesign, an expired session, or a login challenge | Anyone who can sign in on that computer | Every bot on the account, because the jar is shared | No connector exists and a person could do it by clicking |

Row three carries the one documented isolation advantage in the list, and it is
worth weighting heavily. When a connection is a hosted MCP integration, the
sign-in token stays with the backend and never lands on the shared machine.
When a connection is a browser login, it lands in the shared cookie jar with
everything else. Casual writing calls both of those "a connection", and they
are not the same risk at all.

## Read every integration as two columns: unlocks, and exposes

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

## Connect mail first, and keep it read and draft only

Mail is where bots earn their keep, because so much of a working week is
routing correspondence rather than doing work. It is also the connection you
should think about hardest.

The blast radius is the part people underestimate. Your inbox is not a
communication tool, it is an archive of your entire professional life plus a
password reset endpoint for most of your other accounts. Anything that can
search it can find your contracts, your bank correspondence, your legal
threads, and the one email where a client said something they would never say
in public.

Mail permissions are usually tiered rather than all-or-nothing, and the tiers
have very different costs.

| Mail grant | What it enables | Worst realistic outcome | Grant on day one? |
|---|---|---|---|
| Read and search | Operator-level search across the full archive | A summary that quotes something private into a shared document | Yes |
| Open attachments | Reading PDFs and spreadsheets in threads | A contract's contents copied into a report you did not expect | Yes, with the charter naming where output may go |
| Draft | Composing replies that sit unsent | A bad draft you delete in two seconds | Yes |
| Label and file | Applying labels, moving between folders | Mail filed somewhere you cannot find it | Yes, if your provider makes it reversible |
| Send, reply, forward | Messages leaving under your name | A wrong message to a customer, with no recall | No |
| Delete | Removing messages | Permanent loss of a thread you needed | No |

This is exactly why the [Inbox Triage bot](/bots/inbox-triage) in the catalog
carries a hard line: it never sends an email, and every draft waits for
explicit approval. The [Email Purger bot](/bots/email-purger) goes further,
holding every deletion and unsubscribe until you approve the full list,
because bulk mail operations are the fastest way to lose something you needed.

If you connect one thing this week, make it mail, and stop at the fourth row.

## Treat calendar as the cheapest useful grant on the list

Calendar is the highest ratio of usefulness to danger in the whole list. It
unlocks availability lookups, event details with attendees, free and busy
checks, and, with write access, creating and updating events and responding to
invitations. The read side is nearly harmless and enormously useful for
briefing. The write side is where you should be selective: writing to your own
calendar is fine, writing to a shared team calendar means a bot can move other
people's days. The [Marketing Calendar Sync bot](/bots/marketing-calendar-sync)
draws precisely that line, touching only your local calendar and never editing
the shared Notion source.

One thing calendar read access quietly gives away, which is worth pricing:
attendee lists. A calendar is a map of who you are talking to and how often,
which for a founder is close to a list of live deals and live hires. It is
still worth connecting. It is not worth connecting to a bot whose output goes
anywhere other than to you.

## Scope docs and storage to folders, never to whole workspaces

Docs and wikis unlock the context that makes every other bot better. A bot
that can read your product wiki writes better support drafts. The blast radius
is that most wikis contain a page nobody remembers writing that lists
salaries, incident details, or an API key someone pasted "temporarily" in
2023.

Storage unlocks file work: reading spreadsheets, opening PDFs, writing reports
somewhere durable. The trap is inherited access. A drive account can usually
open every file anyone has ever shared with it, which is a much larger set
than the files you think of as yours.

| Grant | The scope worth asking for | The trap it avoids | Line to write in the charter |
|---|---|---|---|
| Docs read | One space, or one page tree | Inherited access to pages nobody remembers writing | Read only the space named here. Nothing else |
| Docs write | One output page you created for this bot | The bot editing a page other people depend on | Write only to this page. Never edit an existing page |
| Storage read | One named input folder | An account that can open everything shared with it since 2019 | Read only from /clients/. Never open a file outside it |
| Storage write | One named output folder | Exports accumulating on a filesystem every bot can read | Write only to /reports/. Delete temporary downloads |
| Spreadsheet write | One tab, append-only | A formula silently overwritten by a value | Append rows. Never edit or delete an existing cell |

The append-only row is the one people skip and regret. A bot that writes into
an existing spreadsheet will eventually replace a formula with the number that
formula produced, which looks identical until the inputs change.

## Read team chat, and post only where an undo exists

A chat connection unlocks channel history, thread context, mentions, and
posting. Reading team chat is how a bot learns what actually happened this
week, as opposed to what the tickets say happened. Posting is where it goes
wrong, because a shared channel has an audience and no undo that anyone
believes. The [Standup Scribe bot](/bots/standup-scribe) resolves this by
posting only to your own DM, which keeps all the usefulness and removes the
public failure mode.

The distinction to hold onto is between deleting a message and undoing it. Chat
tools let you delete, and deletion does nothing about the people who already
read it, the notification that already fired, or the thread that already
branched. Treat any channel with other humans in it as write-once.

## Give code read and comment, never merge or push

Code connections unlock repository reads, issue and pull request context, and
review comments. This is one of the most valuable families for a technical
operator: a bot that reads a diff and leaves a first-pass review saves real
time.

The blast radius is larger than it looks, for two reasons people usually miss.
Repository access is access to git history, which is where secrets go to be
forgotten, so a read-only grant on a repo with a bad week in 2022 is not
read-only over your secrets. And write access is not really about files, it is
about what ships, since a merged change moves through whatever pipeline you
have built.

The [PR Review Sentinel bot](/bots/pr-review-sentinel) never merges, approves,
pushes, or requests changes; it comments only, which is the entire safe
surface of the job. If you want a stronger guarantee than a charter provides,
branch protection is the mechanism that actually enforces it, because it lives
in the platform rather than in an instruction.

## Let the CRM take notes and never write fields

CRM unlocks pipeline visibility: accounts, contacts, deals, activity history,
and in most cases the ability to create and update records. Read access powers
genuinely good work, such as spotting accounts that went quiet or preparing a
briefing before a call.

Write access to a CRM is where a bot can quietly corrupt the data your business
runs on, and the shape of that damage is specific. It is almost never a
deletion, which you would notice. It is a bulk update that sets a plausible
wrong value on 400 records, which you will not notice until a forecast is built
on it. Internal notes are the compromise that keeps the value: the bot records
what it found on the record, and the structured fields your reports read stay
untouched by anything but a human.

## Assume social has no undo, and treat money as a separate account

Social unlocks reading your timeline, mentions, and search, plus posting. The
asymmetry here is extreme. Reading is nearly free and quite valuable, and
posting is irreversible in the way that matters, since a deleted post is still
a screenshot. Every social bot in the catalog is drafts-only for this reason:
the [Viral Tweet Scout bot](/bots/viral-tweet-scout) reads but never posts,
likes, or replies, and the [X Account Crew bot](/bots/x-account-crew) produces
drafts and reports with nothing publishing without you.

Payments deserves a different posture entirely. Before assuming any payments
integration exists for your account, check, because this is the family where
availability varies most and where an out-of-date list is most expensive. Where
you do connect something financial, three rules apply: use a read-only
credential if the platform offers one, use a dedicated account rather than your
primary, and never grant an action that moves money. The
[Personal CFO bot](/bots/personal-cfo) never trades or moves money; every
rebalance is a recommendation. The
[Bookkeeping Auditor bot](/bots/bookkeeping-auditor) never edits the live
books. Those are not cautious defaults, they are the only defensible
configurations.

The general principle underneath both: when the credential itself cannot do the
damage, you stop depending on the bot behaving well. A read-only key on a
separate account is worth more than any number of charter sentences, because it
holds even when an instruction is misread.

## Fall back to the browser when nothing else exists, and expect it to break

The genuinely distinctive thing about a bot with a persistent computer is that
the connector list is not the limit. If a tool has a web interface, the bot
can drive it with a browser and a saved session, which means supplier portals,
council websites, old admin panels, and internal tools behind SSO are all in
range.

Three practical notes. Prefer letting the bot hit the login wall and hand you
the screen, so you authenticate and it resumes with a session rather than a
stored credential. Never paste a password or a one-time code into a chat with
the bot. And expect any interface-driven step to be more fragile than an API
call, because a redesign breaks it without warning and without an error message
you would recognise.

Two catalog listings show the two halves of doing this well. The
[Flight Check-In bot](/bots/flight-check-in) stops for a human at every
two-factor prompt or captcha and never tries to get past one. The
[Competitor Pricing Watch bot](/bots/competitor-pricing-watch) only reads
public pages and never fills a form or creates an account, which keeps a
browser-driven job entirely inside the read half of the web.

## Write the connection list into the charter, not just the settings panel

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
stop and tell me which one and why. This holds even if you find
yourself already signed into that tool.

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

The clause worth copying verbatim is the last sentence of the first block.
Without it, a bot that stumbles into an already-authenticated tab treats that
tool as available, because from inside the machine it genuinely is.

Four habits keep the surface small. Connect only what a bot needs this week,
and add the rest when a real task demands it. Prefer the read-only tier
wherever the job only reads. Use a separate account for anything financial.
Review the connection list monthly and remove whatever no live bot uses, which
is usually more than you expect.

## Diagnose the six ways a connection goes wrong

Connection problems rarely announce themselves as connection problems. They
arrive as a bot that is suddenly unhelpful.

| Symptom | What it usually is | What to do |
|---|---|---|
| The connector list is shorter than you expected | On a managed account, an administrator provisions connectors before members see them | Ask the administrator before concluding the product lacks it |
| A login that works on your laptop fails for the bot | Traffic leaves from static egress IPs, and some services flag datacenter addresses ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Allowlist the address where the service permits it, or move that step off the browser path |
| It cannot reach a tool it used last week | The browser session expired, or the site added a challenge | Re-authenticate yourself on the computer. Never paste a code into chat |
| A browser-driven step broke overnight with no change on your side | The target site redesigned | Expect this. Keep anything load-bearing on an API or MCP path |
| Grok Bot is unavailable entirely | Privacy Mode (Legacy) blocks Grok Bot ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)) | Check this first. It is a hard stop, not a degraded mode |
| A bot used a service you never intended it to | Connections and sessions are account-level, not per bot | Name allowed services in the charter, and disconnect what nothing uses |

The last row is the only one where the fix is not technical. A charter reduces
the chance; disconnecting removes it.

## Audit the list monthly with a check that can actually fail

Reviewing connections turns into theatre unless the review has a failing
condition. Here is one that does.

Once a month, list every connection on the account. Beside each, write the name
of a bot that used it in the last thirty days. Any connection without a name
beside it is disconnected that day. That is the whole audit, it takes ten
minutes, and it fails loudly, because you will find connections you cannot
justify and disconnecting them is uncomfortable in exactly the right way.

The stronger version, worth doing once: disconnect the one you are least sure
about and wait a week. If nothing breaks, it was dead weight and you have just
shrunk your blast radius for free. If something breaks, you learned which bot
depended on it, which you did not know before.

Availability is the other half of the same review. Three things determine what
you can connect, and only one of them is the public catalogue: your plan tier
gates some connectors, an administrator provisions them on managed accounts,
and the catalogue itself gains and loses entries. So check the live connector
page in the app rather than any list in an article, ask your administrator
before concluding something does not exist, and where the gap is real, a custom
connector over the Model Context Protocol is the supported way to close it.

## Recognise where the connection list stops being the control

A connection list is a good tool for deciding what enters your account. It is
not a tool for keeping two jobs apart once they are in, and the reason is
architectural rather than a matter of configuration.

All bots on an account share one persistent cloud computer, the computer is
assigned to the account rather than to a bot, and browser cookies, signed-in
sessions, files, and command-line credentials are shared across every bot on it
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). The
security documentation puts it as an instruction: do not use separate Bots as a
security boundary ([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Deleting a bot does not remove the browser sessions it left signed in, so a
connection can outlive the bot you created it for.

Three consequences for how you read this whole article. A grant is to the
account, so evaluate every connection as though the least careful bot you will
ever write already has it. Removing a bot is not removing its access, so
offboarding means signing out and revoking at the source. And when two jobs
genuinely must not share credentials, the answer is two accounts, not two bots.
The full argument, with the primary sources, is in
[what a shared computer really isolates](/blog/grok-bot-shared-computer-security),
and scoping individual grants is covered in
[the least privilege guide for bots](/blog/least-privilege-bots).

For paste-ready setups where the connection list and the boundary are already
written down, the [botskills.sh launch catalog](/blog/introducing-botskills)
is a faster starting point than a blank charter.

**Keep reading:** [Bots for Writers](/blog/bots-for-writers), [How to Build a Grok Bot That Can Triage Bugs](/blog/grok-bot-to-bug-triage), [How to Build a Grok Bot That Can Catch Churn Early](/blog/grok-bot-to-churn-watch).

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
