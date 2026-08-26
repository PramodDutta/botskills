import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Rakazo vs Grok Bot: Which Runtime Should Run Your Bots',
  description:
    'Rakazo vs Grok Bot is control versus convenience. A sourced criteria table, the cases where each one genuinely wins, and how to tell which side you sit on.',
  date: '2026-08-25',
  category: 'Comparison',
  content: `
# Rakazo vs Grok Bot: Which Runtime Should Run Your Bots

Both of these run persistent bots that drive a browser, a shell, and your
apps, and come back with work. The difference between them is not a feature
list. It is who holds the credentials, who picks the model, and who gets paged
at 2am when the thing stops.

Pricing and features here were checked on 2026-08-25. Both products move
weekly, so verify against [x.ai pricing](https://x.ai/pricing),
[Cursor pricing](https://cursor.com/pricing), and the
[Rakazo repository](https://github.com/elie222/rakazo) before you commit money
or data to either.

One disclosure so you can weigh the rest: botskills.sh is a directory of bot
setups, not a runtime. We do not sell either of these products, which is why
this can be the version where both of them win something.

## Decide who holds the credentials, and the rest follows

Pick Grok Bot if you want working bots this week and nobody on your team wants
to operate a service. It is a managed product on a managed Linux VM, and the
setup cost is a subscription you may already pay for.

Pick Rakazo if data residency is a hard requirement, if you need to choose the
model, or if you want the bot's browser sessions living on infrastructure you
already secure. Rakazo is Apache-2.0 licensed and self-hosted
([package.json](https://github.com/elie222/rakazo/blob/main/package.json)),
which means the cost moves from a subscription line to an infrastructure line
plus your own token spend.

Find the row that describes you. One hard requirement outranks every soft
preference.

| If this is true of you | Pick | Because |
| --- | --- | --- |
| Nobody wants to be paged about a Postgres box | Grok Bot | The operating work below is real and recurring |
| A contract says customer data stays on your infrastructure | Rakazo | A cloud computer you cannot inspect fails that review |
| Cost control means routing cheap jobs to a cheap model | Rakazo | Grok Bot rules out a picker for members and admins |
| Your team works on Linux desktops or Android phones | Rakazo | Grok Bot answers both with a flat no |
| Something has to run before Friday | Grok Bot | Sign in on a supported device and you are live |
| A reviewer will ask who approved what | Rakazo, with caveats | Grok Bot has no audit view yet; Rakazo gives tables, not a finished UI |

The wrong reason to self-host is that it feels safer in the abstract. A Rakazo
box nobody patches, backs up, or watches is worse than a managed product. If
no one wants to own a Postgres database and a Docker host today, that will not
change after you deploy it.

## One is a product you subscribe to, the other is a service you operate

Grok Bot is a hosted product with a specific and unusual shape: every bot on
your account shares **one** persistent cloud computer, and each bot gets its
own screen on that machine. The docs are blunt about it. The computer is
assigned to your user account rather than to an individual bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)), and
browser cookies, signed-in sessions, files, and command-line credentials are
shared across every bot you create. It runs as a non-root user on a managed
Linux VM with static egress IPs
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

Rakazo is an application you deploy. Its self-hosting guide opens by telling
you exactly what you are signing up for: a long-running API, a Graphile
Worker, Postgres, and a computer provider, and that
"it is not a static site"
([self-hosting guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)).
The bot computers are Debian containers running Xvfb, x11vnc, fluxbox,
Chromium, xdotool, and noVNC
([computer image](https://github.com/elie222/rakazo/blob/main/infra/sandboxes/computer/Dockerfile)),
or remote sandboxes from E2B, Daytona, or Box.

The surfaces differ too. Rakazo ships a web app, an Electron desktop app, and
an Expo mobile app that are all clients of the same API
([README](https://github.com/elie222/rakazo/blob/main/README.md)), and the iOS
and Android apps can point at a self-hosted origin from the sign-in screen.
Grok Bot supports macOS, Windows, and iPhone on iOS 18+, and its docs answer
"is there a Linux desktop app?" with a flat no
([FAQ](https://docs.x.ai/grok-bot/faq)).

## Score them on ten criteria that survive a version bump

| Criterion | Grok Bot | Rakazo |
| --- | --- | --- |
| Hosting | Managed cloud VM, nothing to run | You deploy API, worker, Postgres, and a computer provider |
| Who holds credentials | The shared account computer, out of reach | Your host or sandbox provider; connector secrets encrypted server-side |
| Model choice | None, no picker for members or admins | Pi catalog, OpenRouter, or your own OpenAI-compatible endpoint |
| Cost shape | Subscription, then metered overflow | Infrastructure plus token spend, no licence fee |
| Setup burden | Sign in on a supported device | Node 22+, pnpm 9, Docker, Postgres 16, TLS, backups |
| Approval default | Approvals ship with the product | Bots act without asking until you add rules |
| Audit trail | No audit view of bot actions yet | Event and usage tables in your own database |
| Platforms | macOS, Windows, iPhone on iOS 18+ | Web, desktop, iOS and Android, server on Linux |
| Isolation option | One computer per account, period | Team Computer default, Private Computer optional |
| Source | Closed | Apache-2.0, beta |

Where a row says "no", the vendor's own docs say no. Every cell traces to a
source cited below.

## Expect the same shared-credential shape on both sides

The credential story is why most people go looking at self-hosting, and it is
where the honest comparison flatters Rakazo least.

On Grok Bot the position is documented and unambiguous. The security page says
"Do not use separate Bots as a security boundary"
([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)),
and deleting a bot does not remove shared-computer files or browser sessions.
If your inbox bot signs into Gmail, every other bot on the account is signed
into Gmail too. We walked through the consequences in
[what Grok Bot actually isolates](/blog/grok-bot-shared-computer-security).

Rakazo's default has the same shape. Each workspace gets one Team Computer,
bots share its browser sessions and installed tools, and the per-bot folders
are explicitly not a boundary: "every Team bot can access the full Team
workspace"
([computer runtime](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)).
Each Team bot starts in its own \`bots/<bot-id>/\` directory, and browser
profiles sit under \`.browser-profiles\` in the shared workspace, so a login one
bot performs is a login every Team bot inherits.

The difference is that Rakazo gives you an exit. A bot can use a Private
Computer where the whole workspace is its home, and Private computers are
described as optional rather than absent
([self-hosting guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)).
Connector credentials are encrypted on the server and never returned by the
API ([README](https://github.com/elie222/rakazo/blob/main/README.md)). On the
hosted product, one account means one computer, and the only lever left is a
second account.

## Treat model choice as the one axis with no ambiguity

The Grok Bot documentation states that "Grok Bot has no model picker, for
members or admins" and that admin or user choice is not planned
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
The surface picks the model, with automatic failover, and billing follows
whichever model actually served the request.

Rakazo inherits its model catalog from the Pi harness rather than hardcoding a
vendor list
([pi-models.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/pi-models.ts)).
The shipped default points at OpenRouter with a configurable
\`PI_DEFAULT_PROVIDER\` and \`PI_DEFAULT_MODEL\`
([.env.example](https://github.com/elie222/rakazo/blob/main/.env.example)).
In-app subscription sign-in is limited to a named set: the code raises an
error saying it "is only available for ChatGPT Plus/Pro, Claude Pro/Max,
GitHub Copilot, and SuperGrok"
([pi-oauth.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/pi-oauth.ts)).
You can also point it at an OpenAI-compatible server you run yourself. We work
through how to choose in
[choosing a model for Rakazo](/blog/rakazo-model-choice).

Do not over-read this axis. A picker is worth money on a roster with a wide
spread of job difficulty, and close to nothing on five similar jobs.

## Compare a subscription line against an infrastructure line

Grok Bot access rides on an eligible subscription. As of 2026-08-25 the
cheapest paid path is Cursor Pro+ at $60 a month
([Cursor pricing](https://cursor.com/pricing)), with SuperGrok Plus at $100 a
month also eligible ([x.ai pricing](https://x.ai/pricing)). Cursor Hobby and
the $20 Cursor Pro tier do not include it. Subscriptions carry a weekly usage
allowance and overflow is billed on demand from model and token cost, and the
docs state plainly that "there is no Grok Bot-specific spend cap yet"
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
That combination is worth understanding before you schedule anything hourly,
which is the subject of
[the spend cap that is not there](/blog/grok-bot-spend-cap-and-token-burn).

Rakazo has no licence cost and no pricing page: the site says so, and the repo
is the product ([rakazo.com](https://rakazo.com)). What you pay is a VM and
your own tokens. The
[self-hosting guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)
gives a concrete sizing reference: a 2 vCPU, 4 GB host is enough for the API,
worker, and Postgres when a remote provider owns the desktops, and 8 GB is only
needed if you also run Docker computers on that same machine. Token spend is
recorded in your own database, with provider, model, input tokens, and output
tokens per run
([schema.prisma](https://github.com/elie222/rakazo/blob/main/packages/db/prisma/schema.prisma)).
One detail changes the arithmetic more than host size does: computers pause
after \`SANDBOX_IDLE_MS\`, ten minutes by default, and resume on the next
message, so a roster of scheduled bots does not hold a desktop open all day.

## Price the operating work, not just the server

The infrastructure line is easy to estimate and almost always understated,
because the server is the cheap part. The expensive part is what has to stay
true after you stop paying attention. Every row comes from Rakazo's own
self-hosting guide, not from general advice.

| The job | How often | What the guide requires |
| --- | --- | --- |
| Keep the services up | Continuous | API, Graphile Worker, Postgres, and a computer provider; it "is not a static site" |
| Back up two things, not one | Daily | A Postgres dump plus \`DATA_DIR\`: bot homes, browser profiles, artifacts |
| Keep the blast radius small | At install | Postgres on loopback at \`127.0.0.1:5433\`, Docker supervisor unpublished because access "is equivalent to control of the Docker host" |
| Harden the host | At install | \`harden-host.sh\`: key-only deploy user, UFW, fail2ban, unattended updates, AppArmor, audit rules |
| Upgrade with migrations attached | Every release | The API runs \`prisma migrate deploy\` before it serves, so a bad migration keeps health red |
| Own the rollback | When one fails | "A failed CLI recreate does not auto-roll back", and migrations are not reversed |
| Store backups off the box | Weekly | The bundled timer keeps seven days locally and says that is no substitute for an encrypted off-host backup |

The \`DATA_DIR\` row is the one people miss: a Postgres-only backup restores
your bots and loses every browser session they were signed into. One more trap
sits beside it, since the desktop provider executes on the API and worker host
and the guide says not to enable it on a public or shared service. The wider
trade-offs between Docker, E2B, Daytona, and Box are in
[the Rakazo sandbox options](/blog/rakazo-sandbox-options), and the deploy
itself is in
[the Rakazo self-hosting guide](/blog/rakazo-self-hosting-guide).

## Write the boundary yourself, because the looser default is the self-hosted one

Here is the part that flips the intuition. The managed product has the
stricter default.

Rakazo's action-confirmation settings say it outright: "Bots act without
asking by default. Add an exception only when you want to review a type of
action first"
([ApprovalRulesSettings.tsx](https://github.com/elie222/rakazo/blob/main/apps/web/src/components/ApprovalRulesSettings.tsx)).
In the approval logic, only \`destination.write\`, \`delete_bot\`, and
\`archive_bot\` always require approval; \`shell\`, \`computer_act\`, and
\`write_file\` are on the exempt list, and connector tools are gated by name
patterns that treat verbs like \`send\`, \`pay\`, and \`delete\` as
consequential
([action-approval.ts](https://github.com/elie222/rakazo/blob/main/packages/core/src/action-approval.ts)).
The UI ships two presets, "Ask before sending external email" and "Ask before
purchases", and until you click one the rules list reads "No exceptions."

Grok Bot has approvals in the product, with a limit worth memorising: "an
approval controls the proposed action. It does not reverse work already
completed"
([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).

So on both runtimes the boundary is your job, not the product's. Every listing
on botskills.sh has to declare one line: the action the bot never takes
without a human. [Inbox Triage](/bots/inbox-triage) never sends an email.
[PR Review Sentinel](/bots/pr-review-sentinel) never merges, approves, or
pushes. Write it into the charter, then enforce it in whichever runtime you
picked:

\`\`\`text
Bot: Inbox Triage
Runtime: either

What you do
- Read the last 24 hours of mail.
- Archive newsletters and receipts.
- Draft replies to routine threads in my voice.
- Leave every draft in Drafts.

Boundary
- You never send, forward, or reply. Sending is mine.
- You never delete. Archive only.
- If a thread mentions contracts, payments, or legal, stop and flag it.

Enforcement
- Rakazo: Settings -> Action confirmations -> Ask before sending external
  email. This adds a category rule that gates mutating mail tools.
- Grok Bot: connect Gmail read and draft scopes only, and require approval on
  send. Remember an approval stops the next step, not the last one.
\`\`\`

## Read Rakazo's exempt tool list before you trust an approval rule

If you are choosing Rakazo for control, read the approval resolver before
assuming a rule will hold, because the exemptions beat the rules.
\`APPROVAL_EXEMPT_TOOLS\` short-circuits the resolver and returns an allow
before any rule is consulted, and it includes \`shell\`, \`computer_act\`,
\`write_file\`, \`spawn_bot\`, and \`schedule_create\`. A rule naming one of
those does not force an ask
([action-approval.ts](https://github.com/elie222/rakazo/blob/main/packages/core/src/action-approval.ts)).
Read that with the browser in mind: \`computer_act\` is how a bot clicks, so
sending mail from a signed-in webmail tab is not the same object as
\`gmail_send\`.

| Rakazo action | Approval by default | What it means for your boundary |
| --- | --- | --- |
| \`destination.write\`, \`delete_bot\`, \`archive_bot\` | Always required | The only three needing no configuration |
| \`shell\`, \`computer_act\`, \`write_file\`, \`spawn_bot\` | Exempt, and the exemption wins | A tool rule naming one cannot make it ask |
| Connector tools starting \`send\`, \`pay\`, \`delete\`, \`post\` | Required | Matched as mutating verbs at a name boundary |
| Connector tools starting \`get\`, \`list\`, \`search\`, \`read\` | Not required | Matched as read-only verbs |
| Connector tools with an unrecognised verb | Required | The default is fail-closed, which is the right call |
| Names containing \`_and_\`, \`_or_\`, \`_then_\` | Required | Chained actions count as consequential |

Two mechanics matter before you write rules. Specificity wins: a tool rule
outranks a connector rule, which outranks a category rule, so a narrow allow
quietly beats the broad require-approval you set first. And the presets are
narrower than their names suggest. "Email" is anchored to the Gmail and Outlook
connector kinds, "purchase" to Stripe, Shopify, PayPal, and Square. A billing
tool outside those lists is not covered. There is a fuller pass in
[auditing Rakazo permissions](/blog/rakazo-permissions-audit).

None of this makes Rakazo less safe. It makes safety configuration rather than
default, which is what you buy when you buy control.

## Choose Grok Bot when nobody wants to own a running service

If your team has no appetite for operations, Grok Bot wins and it is not
close. There is no Postgres to back up, no TLS certificate to renew, no
computer image to rebuild. Supported surfaces are macOS, Windows, and iPhone
on iOS 18+ ([FAQ](https://docs.x.ai/grok-bot/faq)), which covers most laptops.

It also wins on whether a roster survives a busy quarter. A managed runtime
keeps working when the person who set it up goes on holiday. A self-hosted one
has a bus factor of one, and on Rakazo the first registered user becomes the
deployment owner, so whoever runs the install holds the keys by accident.

## Choose Rakazo when residency, model economics, or the trail decide it

Data residency is the clean case. If a compliance requirement says customer
data does not leave your infrastructure, a shared cloud computer you cannot
inspect is not a negotiation you will win. Rakazo puts the browser profile, the
workspace, and the Postgres row on hardware you already have a policy for.

Model economics is the second. If your roster is mostly cheap triage with
occasional expensive writing, routing those differently is real money over a
quarter, and a runtime with no picker cannot do it.

The third is auditability. Grok Bot's docs state that an audit view of bot
actions does not exist yet
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
Rakazo's schema defines ordered per-thread event rows and usage records holding
provider, model, and token counts per run
([schema.prisma](https://github.com/elie222/rakazo/blob/main/packages/db/prisma/schema.prisma)),
a lower bar than a polished audit UI but a much higher one than nothing. Its
site also lists an audit log among today's self-hosted features
([rakazo.com](https://rakazo.com)); we found no dedicated audit-log document in
the repo, so check what your build exposes rather than assuming a finished
surface.

A fourth case rarely appears in comparisons: more than one user. The guide names
E2B as the recommended provider for multi-user production, a different build
from the Docker default most people try first.

Be clear-eyed about the price: Rakazo is in beta, its security policy supports
only the current main branch and the latest beta release, and there is no bug
bounty
([SECURITY.md](https://github.com/elie222/rakazo/blob/main/SECURITY.md)).

## Walk a six-bot roster through the choice, one bot at a time

The either-or framing is an artifact of comparison articles. Run the decision
per bot and it resolves fast, because the question is always the same: what
does this bot hold, and what happens when every other bot can reach it.

| Bot | What it holds | Where to run it | The reason |
| --- | --- | --- | --- |
| [Competitor Pricing Watch](/bots/competitor-pricing-watch) | Nothing, public pages only | Grok Bot | No credential means no shared-session exposure, though the docs warn datacenter IPs get flagged |
| [Inbox Triage](/bots/inbox-triage) | A mail session that can draft | Grok Bot, send scope withheld | The blast radius is your own inbox and draft-only is enforceable through scopes |
| [PR Review Sentinel](/bots/pr-review-sentinel) | A git host token | Either | Comment-only lives on the token, so the token matters more than the runtime |
| [Chief Of Staff](/bots/chief-of-staff) | Calendar and documents | Grok Bot | Routing and flagging, no external writes, and it gains most from a machine somebody else keeps up |
| [Bookkeeping Auditor](/bots/bookkeeping-auditor) | An accounting login | Rakazo, Private Computer | Money plus a shared browser profile is the pairing worth paying operating cost to avoid |
| [Codebase Hardening Auditor](/bots/codebase-hardening-auditor) | Repository access | Rakazo | Source stays on infrastructure you already have a policy for |

Four of the six land on the managed product, the outcome most rosters reach and
the one comparison articles rarely admit. The two that move are the two holding
a credential whose misuse you could not undo, and moving exactly those two is a
far smaller project than migrating everything.

On day one the split feels like overhead: two consoles, two places to look. By
day thirty it is invisible, because the bots you check daily are managed and
the two on your own box run a schedule you rarely touch. If you later move
more across,
[migrating from Grok Bot to Rakazo](/blog/migrate-grok-bot-to-rakazo) covers
the order to do it in.

## The strongest case against self-hosting is the box nobody looks at

The best argument against everything above is that a managed runtime is more
secure in practice than a self-hosted one. It deserves a straight answer.

A hosted product is patched by people whose job that is. A self-hosted install
is patched by whoever remembers. Running \`harden-host.sh\`, keeping Postgres
on loopback, leaving the Docker supervisor unpublished, rotating real secrets,
holding off-host encrypted backups: every one is a step somebody skips on a
Friday. A compromised host holds the browser profiles, which is every session
your bots ever signed into. That is worse than anything the shared-computer
model exposes you to.

The argument wins more often than self-hosting advocates admit, and it loses in
two situations. It loses when residency is contractual, since "our vendor
patches faster" is no defence against a clause saying the data does not leave.
And it loses when you already run production infrastructure, because Rakazo is
then one more service on a host that already has patching and backups. The
honest test is not whether you can deploy it, but whether you already have
somewhere for it to live.

## Run four week-two checks that are allowed to fail

Verify the thing you bought behaves the way this article says. Each check can
come back negative, which is the point.

| Check | How to run it | What a failure tells you |
| --- | --- | --- |
| Shared session | Sign bot A into a low-value account, then open bot B's screen and load the same site | If B is already signed in, the fix is a Private Computer or a second account |
| Boundary | Ask the bot to do the one thing its charter forbids, on a harmless instance | It should refuse or ask. If it proceeds, the boundary lived in prose, not permissions |
| Restore, Rakazo only | Restore last night's backup into a scratch instance and sign a bot in | Missing browser sessions mean you backed up Postgres and not \`DATA_DIR\` |
| Bill, Grok Bot only | Compare a week of scheduled runs against your usage view | There is no bot-specific spend cap yet, so the first surprise should be a number you predicted |

Run the first two on both runtimes, and all four before any bot with real
credentials goes on a schedule. More checks that are allowed to fail are in
[testing your bot](/blog/testing-your-bot).

## Know the three questions this comparison cannot answer

It cannot tell you what Grok Bot's included allowance is worth, because no
figure is published. Anyone quoting one is guessing. Model your spend from your
own first two weeks.

It cannot tell you how Rakazo behaves beyond a small team. The repository
documents a single-host shape, and the security policy covers only the current
main branch and the latest beta release. Reading the repo is no substitute for
running it for a month.

And it cannot tell you what either looks like next quarter. Grok Bot launched
in beta in August 2026 and widened its eligibility list in the same month. Two
of the sharpest facts here, the missing audit view and the missing spend cap,
carry the word "yet" in the vendor's own docs. Re-read the sources before you
quote this article at anyone.

## Keep the charter portable so the runtime stays a reversible choice

The portable part is the charter. A definition that states the job, the tools,
and the boundary in plain text moves between runtimes without a rewrite, which
is the whole reason
[botskills.sh publishes setups rather than a runtime](/blog/introducing-botskills).

Keep that text in a repository you control, not only inside whichever product
you chose. That one habit turns the runtime decision from a lock-in into a
preference. Pick for where the credentials should live, not for the feature
grid.

**Keep reading:** [Grok Bot Examples](/blog/grok-bot-examples), [Rakazo Routines](/blog/rakazo-routines), [The Best AI Bots for Developers in 2026](/blog/best-ai-bots-for-developers).

This sits inside a wider guide: [Self-Hosting AI Agents](/blog/self-hosting-ai-agents-guide) covers the whole territory.

## Frequently Asked Questions

### Is Rakazo a drop-in replacement for Grok Bot?

No, and treating it as one will disappoint you. Rakazo describes itself as an
open-source alternative and covers similar ground, with persistent bots, a
sandboxed browser and shell, routines, and memory. But it is a beta product
you deploy and operate yourself, requiring Node 22 or newer, pnpm 9, Docker,
and Postgres 16. Grok Bot requires an eligible subscription and a supported
device. The bot charters transfer between them almost unchanged. The
operational commitment does not transfer at all, and that is the part people
underestimate.

### Which one keeps my credentials more private?

Rakazo, if you actually use its private options, because the browser profiles
and encrypted connector secrets live on infrastructure you control. But the
default is not automatically safer. Rakazo's documentation says every bot on a
Team Computer can reach the full Team workspace, which is the same shared
shape Grok Bot has on its per-account computer. The real answer is a Private
Computer per sensitive bot on Rakazo, or, on Grok Bot, a separate account for
anything you genuinely need to isolate.

### Can I choose which model runs my bots?

Only on Rakazo. The Grok Bot documentation states that there is no model
picker for members or administrators and that admin or user choice is not
planned, with a fixed model set per surface and automatic failover. Rakazo
takes its catalog from the Pi harness, ships an OpenRouter default you can
change through environment variables, supports subscription sign-in for a
named set of providers, and accepts any OpenAI-compatible endpoint you point
it at. If model choice matters to your cost or latency budget, that axis
decides the comparison on its own.

### What does self-hosting Rakazo actually commit me to?

A long-running service, not a static deploy. You run an API process, a
Graphile Worker, Postgres 16, and a computer provider, all of which have to
stay up for scheduled bots to fire. You own TLS termination, secret rotation,
database backups, and version upgrades that run Prisma migrations before the
API serves traffic. The repository ships backup and restore scripts and a
hardening script for Ubuntu hosts, so the path is documented, but the work is
yours. Budget an afternoon for the first deploy and a recurring hour a month
after that.
`,
};
