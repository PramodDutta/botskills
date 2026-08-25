import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot vs Lindy: Agents, Cost, and Where Each Wins',
  description:
    'Grok Bot vs Lindy compared on triggers, tool reach, guardrails and real prices, checked against both vendors own docs, so you can tell which one fits your week.',
  date: '2026-08-25',
  category: 'Comparison',
  content: `
# Grok Bot vs Lindy: Agents, Cost, and Where Each Wins

You have a job that repeats every week, it touches four tools, and the last
step is something you would rather a human signed off on. Grok Bot and Lindy
both say they will take that job. They take it in very different ways, and the
difference shows up in week two rather than week one.

Prices and features below were checked on 2026-08-25 against each vendor's own
documentation. Both products ship fast. Before you commit a budget, re-read
[Lindy's pricing page](https://www.lindy.ai/pricing) and the
[Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) yourself.

One disclosure up front: botskills.sh is a directory of bot setups, not a
runtime. We do not sell either product, which is why we can write the version
where the other tool sometimes wins.

## Read each product's opening assumption about where work lives

Lindy's own docs describe it as an AI teammate that
[lives in Slack](https://docs.lindy.ai/). Everyone gets a private Lindy in their
DMs and the team shares one in channels. The unit of work is a thread: you
mention it, it does something across your connected tools, and it reports back
where your colleagues can see the whole exchange.

Grok Bot starts from the other end. Each bot is a named worker with its own
screen on a persistent cloud computer, and that computer is assigned to your
user account rather than to any individual bot, per
[the Grok Bot computer docs](https://docs.x.ai/grok-bot/computer-and-apps). The
unit of work is a machine that keeps running between sessions, holding browser
sessions, files, and command line credentials.

Nearly every difference below falls out of that one choice.

## Choose between a Slack thread and a cloud desktop

A thread is a great place for work that other people need to see. Lindy's
answer lands next to the question, a colleague can correct it in a reply, and
the record of what happened is the conversation itself.

A persistent desktop is a great place for work that stalls. Real cross-tool
jobs pause: an export takes four minutes to generate, a page needs a code from
your phone, a supplier portal logs you out every Friday. A machine that is
still there tomorrow can hold a half-filled form and pick it up again.

The cost of the desktop is that it is shared. Grok Bot's docs are blunt about
this: the screens are separate work surfaces, not separate security boundaries,
and the docs tell you directly not to use separate bots as a security boundary
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Cookies and signed-in sessions are shared across every bot on the account, and
deleting a bot does not remove them. If you were planning to isolate a client's
credentials by giving them their own bot, that plan does not work.

Lindy's equivalent question is connection scope rather than machine scope. A
connection is either personal, usable by "just you" and changed by you, or
team, usable by "everyone in the workspace" and changed only by owners and
admins. An admin who pushes a personal connection out to the workspace makes
everyone's Lindy read that tool through that account and inherit its
permissions
([integrations](https://docs.lindy.ai/integrations/overview)).

## Compare the two objects both products call a routine

Both products call the saved, self-running unit a routine, and they are not the
same object.

A Lindy routine is a trigger, a prompt, and a destination, and it comes in
three flavours: Personal, Workspace, and a Discover library of one-click
templates. Workspace routines run for the whole team, and only workspace admins
can create or manage them
([routines](https://docs.lindy.ai/coming-soon/routines)). Lindy also ships a set
of built-in routines you toggle per connected account, covering daily briefs,
email drafting and labelling, urgent email alerts, follow-up bumps, and the
meeting assistant.

A Grok Bot routine assigns a workflow to exactly one bot. There is a ceiling of
50 routines per bot, the app keeps the 20 most recent run records per routine,
deleting the bot deletes its routines, and nothing sits at team level
([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).
If you want a routine that survives a person leaving, Lindy's workspace scope is
the more honest fit today.

Worth noting on the Lindy side: several of those pages, routines included, sit
under a path Lindy's own docs label as coming soon, so confirm availability on
your plan before you build a rollout around them.

## Count MCP before you assume the browser wins on reach

This is where people assume Grok Bot wins by default, and the assumption is
half wrong.

Lindy is not connector-only. Point it at a hosted MCP server with a public
HTTPS endpoint and it reads that server's tool catalogue and creates an action
for every tool whose schema it supports, with no action-picking or field-mapping
step ([MCP servers](https://docs.lindy.ai/integrations/mcp)). The docs put the
range plainly: a small server might add three tools, a large one well over a
hundred. That covers far more ground than a fixed integration list.

Two details matter operationally. Every supported tool arrives enabled, and the
docs warn that "every enabled tool is a tool Lindy has to consider on every
task", so pruning a large server is real work rather than tidiness. And Lindy
shows two counts, what the server reports and what is usable in Lindy, which
differ when a server publishes schemas Lindy does not support. A zero means the
endpoint is wrong or the catalogue is empty.

The gap that remains is real but narrow. MCP requires the vendor to publish a
server. A browser on a persistent machine requires only that you can log in. If
your bottleneck is a council planning portal, an ageing invoicing tool, or an
internal admin panel behind SSO, nobody is publishing an MCP server for it, and
that is the case Grok Bot's computer exists for. A setup like
[Competitor Pricing Watch](/bots/competitor-pricing-watch) is built on exactly
that assumption: read public pages a connector never reaches, and never fill a
form.

## Settle it on eight axes rather than a feature checklist

| What decides it | Grok Bot | Lindy |
| --- | --- | --- |
| Where work runs | Persistent cloud Linux VM, one screen per bot, one computer per account | Slack threads, DMs, iMessage and SMS, plus a Chrome extension |
| Trigger model | Routines attached to one bot, 50 per bot maximum | Personal and workspace routines, plus toggled built-ins |
| Tool reach | Connectors plus anything a logged-in browser can reach | Built-in integrations plus any hosted MCP server |
| Model choice | No model picker, for members or admins, with automatic failover | Model selection across all models, listed on every paid tier |
| Approval model | Approvals on proposed actions, which do not reverse completed work | Per-integration guardrails: always allow, require approval, or never |
| Team scope | Routines are per-bot and die with the bot | Workspace routines managed by admins |
| Audit trail | An audit view of bot actions does not exist yet | Audit logs listed at the Enterprise tier |
| Cost shape | Subscription allowance plus on-demand overflow, no bot-specific spend cap yet | Per-seat subscription with a shared credit pool that pauses when empty |

## Answer six questions and the choice makes itself

Most people do not need the whole grid. They need the one row that is a hard
requirement, because a hard requirement beats every preference below it.

| Ask yourself | If the answer is yes | The reason |
| --- | --- | --- |
| Does a colleague need to see and correct the output? | Lindy | The thread is the record, and a reply is the correction |
| Does one important tool exist only as a website you log into? | Grok Bot | MCP needs a vendor to publish a server; a browser needs only a login |
| Will someone ask for an audit trail this quarter? | Lindy, Enterprise tier | Grok Bot's docs say an audit view does not exist yet |
| Does the job stall for hours and then resume? | Grok Bot | A persistent machine can hold a half-finished form |
| Do you need a bill you can predict? | Lindy | Credits pause when they run out rather than overflowing |
| Does anyone work on Linux or Android? | Lindy | Grok Bot has no Linux desktop, Android, or iPad app |

If two rows point in different directions, the tie-break is the surface split
further down, not a compromise product.

## Put the guardrail where the work actually happens

Every listing on botskills.sh has to declare a boundary: the one action the bot
never takes without a human. Both products can hold a boundary, and they hold
it in different places.

Lindy attaches the rule to the integration, with three settings whose wording is
worth quoting: always allow, which "writes without asking"; require approval,
which "asks in Slack before writing"; and don't offer, which "never writes with
this tool"
([integrations](https://docs.lindy.ai/integrations/overview)). An approval
arrives as Approve and Deny buttons in the Slack thread.

Grok Bot attaches the rule to the action, and its docs are similarly honest
about the limit: an approval controls the proposed action, it does not reverse
work already completed. A gate is not an undo.

Both are strong enough for a real boundary as long as you write it down. Here
is a charter that survives either runtime, because it names the stop line
rather than trusting the phrasing of a prompt.

\`\`\`text
Name:      Competitor Pricing Watch
Runs:      weekdays 08:00 local
Reads:     the five public pricing pages listed below
Writes:    one message to me, nothing else, anywhere
Boundary:  never fills a form, never creates an account, never
           contacts a competitor, never signs in to anything
Escalate:  if a page shows a login wall or a bot check, stop and
           send me the URL instead of trying to get past it
Report:    only rows where a published number changed since the
           last run, with the old value, the new value, and a link
Silence:   if nothing changed, say "no changes" and stop
\`\`\`

That last line matters more than it looks. A bot that reports nothing when
nothing happened is a bot you keep. See
[approval gates for bots](/blog/approval-gates-for-bots) for the longer version
of this argument.

## Map guardrail coverage surface by surface before you rely on it

Lindy documents the limits of its own guardrails clearly, and the limits are the
part that decides whether a boundary is load-bearing or decorative. Read this
table before you set anything to require approval.

| Surface or case | Guarded | What the docs say |
| --- | --- | --- |
| A shared Slack thread | Yes | "Guardrails apply in shared Slack threads only" |
| A Slack DM with Lindy | No | Named as outside that scope |
| The web app chat | No | Named as outside that scope |
| iMessage and SMS | No | Named as outside that scope |
| Any read, on any surface | No | "Reads are never guarded" |
| A second account on the same integration | Not separately | A guardrail covers every account under an integration |
| Tools from an MCP server | Individually | The MCP setting is personal and overrides the workspace default |

Three consequences follow, and none of them are dealbreakers as long as you
plan for them. The private surface is the one people actually use, so a rule
that only binds in channels binds less than it looks. Approvals can be granted
by the person who requested them, so approval is a speed bump against mistakes
rather than a separation of duties. And because a guardrail covers every
account under an integration, connecting a personal Gmail beside a work Gmail
means one rule governs both.

The safe pattern is the same one we recommend on any runtime: if a boundary
genuinely must hold, set the integration to never rather than to require
approval, so no surface can route around it. That is the Lindy version of
[least privilege for bots](/blog/least-privilege-bots).

## Buy Lindy when the work is shared, audited, or model-sensitive

Five cases, and they are not consolation prizes.

Your work already lives in Slack and other people need to see it. A shared
thread beats a private machine for anything a colleague might need to correct.

You care which model runs the job. Lindy lists model selection across all
models on every paid tier
([pricing](https://www.lindy.ai/pricing)). Grok Bot has no picker at all, for
members or admins, and its docs say there is no plan to add one
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

You need an audit trail now. Lindy's Enterprise tier adds SSO, audit logs, and
HIPAA with a signed BAA. Grok Bot's own docs say an audit view of bot actions
does not exist yet. If a compliance reviewer is going to ask who approved what,
that is close to decisive.

You need automation that outlives one person. Workspace routines belong to the
workspace. Grok Bot routines belong to a bot and die with it.

You run Linux or Android. Grok Bot supports macOS, Windows, and iPhone on iOS
18 or later, and its docs state plainly that there is no Linux desktop app, no
Android app, and no iPad app. Lindy reaches you through Slack, which runs
everywhere.

## Buy Grok Bot when the door is a login and the job pauses

Three cases, each a hard capability rather than a preference.

A tool with no connector and no MCP server. A logged-in browser is the only
door, and Grok Bot has one that stays open between runs.

Work that pauses and resumes. Multi-day approval chains, slow exports, and
portals that time out need state that survives the end of a conversation.

Separation by work surface. Giving each job its own screen keeps
[Inbox Triage](/bots/inbox-triage) out of the same visual context as
[Bookkeeping Auditor](/bots/bookkeeping-auditor). Just remember the docs' own
warning that this is organisation, not isolation.

## Model the bill for a team of five, then look at the tail

Lindy publishes per-user pricing: Plus at 29.99 dollars per user per month with
3,000 credits, Pro at 99.99 with 15,000, and Max at 199.99 with 35,000, plus a
quoted Enterprise tier. Credits pool across the workspace, refresh each billing
cycle, and do not roll over. Anyone who uses Lindy takes a seat, including
someone who only mentions it in Slack, though a teammate who joins through
Slack gets a seven-day free trial before the seat is billed.

Grok Bot has no price of its own. It rides on a subscription, and the cheapest
path as of 21 August 2026 is [Cursor Pro+](https://cursor.com/pricing) at 60
dollars a month, with Cursor Ultra at 200, Cursor Teams Standard at 40 per user
and Premium at 120, and [SuperGrok Plus](https://x.ai/pricing) at 100. Cursor
Hobby and the 20 dollar Cursor Pro plan do not include it. A one-time trial is
an eligibility path for individuals.

| Situation | Lindy | Grok Bot |
| --- | --- | --- |
| One person, light use | Plus at 29.99 a month, 3,000 credits | Cursor Pro+ at 60 a month, or the one-time trial |
| Five people, all of them mention it | Five Plus seats, 149.95 a month, 15,000 pooled credits | Cursor Teams Standard at 40 each, 200 a month |
| Two heavy users, three occasional | Still five seats, but admins can set credit allocations per seat | Still five subscriptions, since eligibility is per account |
| The month a job runs away with itself | Credit-using actions pause until the reset, no overage | No bot-specific spend cap yet, so overflow is billed on demand |

The shapes differ in the way that matters. Lindy's worst case is that work
stops. Grok Bot's worst case is an on-demand bill you did not model, because the
included weekly allowance is not published as a figure. If predictable is what
you are buying, that is the deciding sentence. The same trade-off shows up in
[Grok Bot vs ChatGPT Tasks](/blog/grok-bot-vs-chatgpt-tasks), and the general
habit of watching a bot's spend is in
[keeping bot costs under control](/blog/bot-cost-control).

## Run one job through both and watch what changes by day thirty

Take the pricing watcher above and imagine it running on each product, because
the difference is invisible on day one and obvious by the end of the month.

On Lindy it becomes a workspace routine: a weekday trigger, a prompt, and a
Slack channel as the destination. Day one is quick, since there is no machine
to configure. By day thirty the value is that three people have read every run,
two of them corrected a misread number in the thread, and the correction is
sitting in the record where the next person will see it. The failure you hit is
a competitor moving pricing behind a signup wall, at which point the routine has
nowhere to go.

On Grok Bot it becomes a routine attached to one bot with its own screen. Day
one is slower: you sign in, you check the pages render, and you find that one of
the five flags the datacenter IP address the docs warn about. By day thirty the
value is that the bot still reads the two pages that require a session, and it
picked up mid-form on the Friday the portal logged it out. The failure you hit
is that the run history is 20 records deep and there is no audit view, so
"what did it read on the 14th" is a question with no answer.

The honest summary is that Lindy wins the month on visibility and Grok Bot wins
it on reach, and neither of those is a tie-breaker you can decide in advance
without knowing which five pages you are watching.

## Diagnose the five ways this pairing goes wrong

| Symptom | What actually happened | The fix |
| --- | --- | --- |
| An action ran that nobody approved | It happened in a DM, the web chat, or over SMS, where Lindy's guardrails do not apply | Set that integration to never, so no surface can route around it |
| The approval was signed off by the requester | Lindy lets the requester approve their own request | Reserve genuinely consequential tools for never, not require approval |
| The wrong account got written to | One guardrail covers every account under an integration | Connect only the account the bot is allowed to touch |
| A routine vanished when someone left | Grok Bot routines belong to a bot and die with it | Keep the charter text in your own repository and recreate it |
| The credit pool emptied in week three | Credits pool across the workspace and anyone can draw on it | Set per-seat allocations, which admins can do from the pricing controls |

Four of those five are configuration problems rather than product defects, which
is the general shape of agent incidents. The one that is not, the vanished
routine, is the argument for keeping your bot definitions somewhere neither
vendor controls.

## Answer the objection that a browser makes connectors irrelevant

The strongest argument against buying Lindy is that a logged-in browser is a
superset of every integration, so paying for connectors is paying for a subset
of what a computer already does. It is a real argument and it is right about
capability.

It is wrong about cost and reliability, in three specific ways. A connector
call returns structured data, while a browser run returns whatever the page
looked like that morning, so the failure modes are layout changes and bot checks
rather than schema errors. A browser run costs tokens proportional to the pages
it reads, and Grok Bot has no bot-specific spend cap yet, while a connector call
costs a credit from a pool that stops when it is empty. And the browser route
concentrates credentials: one account, one computer, every session shared, with
the docs telling you not to treat separate bots as a boundary.

Where the objection wins outright is the tool nobody will ever build a server
for. That is not a small category, and it is exactly why the split below beats
picking a winner.

## Name the four claims we could not verify

Being straight about the gaps is how you should read the rest.

We did not find a published total for Lindy's integration count. The
integrations page lists examples and says "and more", with no number, so any
figure you see quoted elsewhere came from somewhere other than the docs.

We could not confirm the general-availability status of several Lindy surfaces.
Routines, among others, sit under a documentation path labelled coming soon.
Check what your plan actually exposes before you design around them.

We cannot tell you what Grok Bot's included weekly allowance is worth, because
no figure is published anywhere in its docs. Model it from your own first two
weeks rather than from anyone's estimate.

And we cannot tell you which model Grok Bot runs. The docs describe a fixed
model set per surface with automatic failover and no picker, but do not name the
models, so any article that names one is guessing.

## Split by surface, not by preference

These are not mutually exclusive, and pretending otherwise makes for a worse
article. The split that works is by surface, not by preference.

Put the work your team reads in Lindy: digests, answers, meeting follow-ups,
anything where the value is that a colleague sees it and can correct it in the
thread. Put the work that needs a logged-in browser or has to survive a pause
in Grok Bot, and let it deliver its output into the same Slack channel.

A [Chief of Staff](/bots/chief-of-staff) style setup often ends up straddling
both: the routing and reminders live where the team is, and the two jobs that
need a portal login live on the machine. If you are building the first version
of that, the walkthrough in
[the one-person company setup](/blog/one-person-company-grok-bot) is a
reasonable starting shape regardless of which runtime you land on, and
[running more than one bot at once](/blog/multi-bot-teams) covers what happens
when the roster grows past three.

**Keep reading:** [Where to Find Grok Bot Setups](/blog/botdirectory-alternatives), [Grok Bot Cost](/blog/grok-bot-cost), [Every Grok Bot Integration and What Each One Unlocks](/blog/grok-bot-integrations-list).

## Frequently Asked Questions

### Is Lindy a direct replacement for Grok Bot?

Not quite, because they hold different assets. Lindy holds connections and
threads, so it reaches whatever your integrations and MCP servers expose and
reports back where your team can see it. Grok Bot holds a persistent cloud
computer with logged-in browser sessions, so it reaches things no connector
covers and can resume work that stalled. If everything you automate has an
integration or a published MCP server, Lindy replaces Grok Bot cleanly. If one
important tool only exists as a website you log into, it does not.

### Which one is cheaper for a team of five?

Lindy is per seat, so five people on Plus is 149.95 dollars a month at the
pricing published on 2026-08-25, with credits pooled across the workspace. Grok
Bot rides on an existing subscription, so five people on Cursor Teams Standard
at 40 dollars per user is 200 a month and includes it. The number on the invoice
is close. The difference is the tail: Lindy pauses when credits run out, while
Grok Bot's docs say there is no bot-specific spend cap yet, so overflow usage is
billed on demand.

### Can Lindy reach a tool that has no integration?

Often yes, through MCP. You give Lindy a hosted MCP server URL over public
HTTPS and it reads that server's tool catalogue, creating an action for every
tool whose schema it supports. That is a much wider net than a fixed integration
list. The limit is that somebody has to publish the server. For an internal
admin panel, a legacy invoicing system, or a supplier portal that will never
have an MCP endpoint, a logged-in browser on a persistent machine remains the
only route, and that is Grok Bot's territory.

### Do Lindy's approval guardrails cover everything the agent does?

No, and Lindy documents the limits clearly. Guardrails cover writes only, since
reads are never guarded, and they apply in shared Slack threads only. The web
app chat, Slack DMs with Lindy, and iMessage and SMS are not covered as of the
2026-08-25 docs. That is worth planning around, because private surfaces are
where most delegation actually happens. If a boundary genuinely must hold, set
the integration to never offer rather than require approval, so no surface can
route around it.
`,
};
