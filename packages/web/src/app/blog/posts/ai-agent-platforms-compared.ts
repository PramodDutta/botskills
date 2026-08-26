import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Every AI Agent Platform Compared',
  description:
    'Twelve AI agent platforms compared on harness ownership, hosting, model choice, approvals, audit and cost, with every claim traced back to a checked source.',
  date: '2026-08-25',
  category: 'Comparison',
  content: `
# Every AI Agent Platform Compared

Feature lists do not separate these products. Every one runs agents, connects to
your tools, and handles approvals, which is true enough to be useless when you
are choosing.

What separates them is a smaller set of questions with hard answers: who owns the
loop around the model, where the data sits, whether you can name the model, what
an approval actually stops, what you can show a reviewer in six months, and what
shape the bill takes when a job runs away.

This page is the hub over the comparisons on this site. Every claim below was
established in one of the linked articles, against that vendor's own docs,
repository, or licence file, on 2026-08-25. Nothing here is a new third-party
fact, and where an article could not verify something, that gap is preserved.

## What this comparison covers

- [Compare on eight axes, not feature lists](#compare-on-eight-axes-not-feature-lists)
- [Ask who owns the harness](#ask-who-owns-the-harness)
- [Let hosting close half the list](#let-hosting-close-half-the-list)
- [Treat model choice as pass or fail](#treat-model-choice-as-pass-or-fail)
- [Read what each approval cannot undo](#read-what-each-approval-cannot-undo)
- [Ask what survives six months](#ask-what-survives-six-months)
- [Compare cost shapes, not headline prices](#compare-cost-shapes-not-headline-prices)
- [Grok Bot runs a managed desktop you cannot relocate](#grok-bot-runs-a-managed-desktop-you-cannot-relocate)
- [Rakazo self-hosts the same shared sessions](#rakazo-self-hosts-the-same-shared-sessions)
- [OpenClaw is built for exactly one operator](#openclaw-is-built-for-exactly-one-operator)
- [Hermes ships approval defaults worth copying](#hermes-ships-approval-defaults-worth-copying)
- [Buzz is a workspace with identities, not a runtime](#buzz-is-a-workspace-with-identities-not-a-runtime)
- [OpenMausBot drives CLIs you already pay for](#openmausbot-drives-clis-you-already-pay-for)
- [Lindy puts the work in a Slack thread](#lindy-puts-the-work-in-a-slack-thread)
- [Zapier sells a maintained connector catalogue](#zapier-sells-a-maintained-connector-catalogue)
- [Make names five ways a step can fail](#make-names-five-ways-a-step-can-fail)
- [n8n is fair-code, not open source](#n8n-is-fair-code-not-open-source)
- [Claude agents hand you parts and on-call](#claude-agents-hand-you-parts-and-on-call)
- [OpenAI retired Operator and split what remains in two](#openai-retired-operator-and-split-what-remains-in-two)
- [Read all twelve down one grid](#read-all-twelve-down-one-grid)
- [Rule options out by hard constraint](#rule-options-out-by-hard-constraint)
- [Name what nobody has verified, including us](#name-what-nobody-has-verified-including-us)
- [Compose two platforms instead of crowning one](#compose-two-platforms-instead-of-crowning-one)
- [Carry the charter, the only portable asset](#carry-the-charter-the-only-portable-asset)
- [Frequently Asked Questions](#frequently-asked-questions)

## Compare on eight axes, not feature lists

Eight questions decide almost every one of these comparisons, and a hard
requirement on any one outranks every preference below it.

| Axis | The question it really asks | What it eliminates |
|---|---|---|
| Harness ownership | Who writes the loop, tools, logging and failures | Managed products |
| Hosting | Whose machine the work physically runs on | Every hosted product |
| Model choice | Can you name the model per job or call | Grok Bot, which documents no picker |
| Approval model | Does it stop the action or ask nicely | Approvals that are a line in a prompt |
| Audit trail | What you can show somebody in six months | Grok Bot, with no audit view yet |
| Cost shape | Does the bill stop, queue, or climb | Anything with no ceiling |
| Setup burden | How long until it works, and who runs it | Self-hosting, with nobody to run it |
| Reach | Connectors and MCP, or a browser that clicks | Connector-only tools, when there is no API |

The last row is underestimated. A connector returns structured data; a browser
reaches anything you can log into and returns whatever the page looked like that
morning. Different risk profiles, not different quality, as argued in
[Grok Bot vs Zapier](/blog/grok-bot-vs-zapier).

## Ask who owns the harness

The harness is the loop around the model: which tools exist, what runs
automatically, what stops and asks, and what gets written down.

Buy it and a missing capability is a fact about your options, unpatchable. Build
it and the same gap is a task in somebody's backlog. Those look identical in a
table and are nothing alike in a quarter, the central observation in
[Grok Bot vs Claude agents](/blog/grok-bot-vs-claude-agent). The blunt version:
if you cannot name the person paged when a loop wedges at three in the morning,
you want the product. Buzz is a third position, owning the record while the loop
attaches from outside.

## Let hosting close half the list

If a contract says customer data does not leave infrastructure you control, this
comparison ends before features enter it. Grok Bot, Lindy, Zapier, Make and
ChatGPT cloud browser cannot meet it. Rakazo, OpenClaw, Hermes, Buzz, OpenMausBot
and self-hosted n8n can, along with Claude and the OpenAI computer tool whenever
you supply the environment.

Two documented facts do the work. Grok Bot's placement is not configurable: the
computer is a managed Linux VM with static egress IPs, and the docs answer the
Linux desktop question with a flat no. Anthropic's docs for the computer use tool
state that your application runs every call in an environment you control and
Claude never connects to it directly. Both are in
[Grok Bot vs n8n](/blog/grok-bot-vs-n8n) and
[Grok Bot vs OpenAI computer use](/blog/grok-bot-vs-openai-operator).

Self-hosting bills you an operator rather than an invoice. Rakazo's guide is
blunt that it is not a static site, listing a long-running API, a Graphile
Worker, Postgres, and a computer provider, plus backups of both the database and
\`DATA_DIR\`, since a Postgres-only backup loses every browser session.

## Treat model choice as pass or fail

This is the cleanest axis on the page, because one vendor closed it in writing.

Grok Bot's documentation states it has no model picker, for members or admins,
and that admin or user choice is not planned, with a fixed model set per surface,
automatic failover, and billing following whichever model served the request.
That is a real operational feature, since nobody quietly downgrades a bot. It is
also a hard stop if you need to pin a version while re-testing.

Everything else lets you choose. Rakazo accepts any OpenAI-compatible endpoint,
though its in-app subscription sign-in is narrower, with the code raising an
error saying it is only available for ChatGPT Plus and Pro, Claude Pro and Max,
GitHub Copilot, and SuperGrok. Hermes switches provider with one command,
OpenClaw supports hosted, gateway or local providers, Lindy lists model selection
on every paid tier, and Claude names a model per call. Guidance is in
[choosing a model for Rakazo](/blog/rakazo-model-choice).

One wrinkle is worth carrying: the Grok Bot settings page mentions a default
model "when model selection is available", which sits awkwardly against the
no-picker language elsewhere in the same docs. Treat no-picker as operative. Do
not over-read the axis, though: a picker is worth real money on a roster with
wide difficulty spread and little on five similar jobs.

## Read what each approval cannot undo

Every platform has something it calls an approval, and they are not the same
object. Three shapes exist: the platform stops the action, the platform asks the
model to stop it, or the platform records that it happened.

| Platform | What an approval is | The documented limit |
|---|---|---|
| Grok Bot | A gate on a proposed action | "It does not reverse work already completed" |
| Rakazo | Rules you add, since bots act without asking | \`shell\`, \`computer_act\`, \`write_file\` and \`spawn_bot\` are exempt, and exemption wins |
| OpenClaw | Guardrails for operator intent | Host execution ships with approvals off, sandboxing opt-in |
| Hermes | Risk-classified \`smart\` mode, failing closed | Container backends skip per-command checks |
| Buzz | Workflow approval gates | Its README calls them still being wired up |
| OpenMausBot | A permission broker issuing approval cards | Host control is off on Wayland, pending a safety issue |
| Lindy | Always allow, require approval, or don't offer | "Guardrails apply in shared Slack threads only" |
| Zapier | A Human in the Loop action inside a Zap | Agent-level approvals are instructions, not a gate |
| Make | Skip, Retry, Resume, Commit or Rollback | Retry parks an incomplete execution, off by default |
| n8n | Whatever you build into the workflow | Not a product primitive |
| Claude cloud routines | Nothing during the run | No permission-mode picker, no prompts. Scope first |
| OpenAI computer tool | Yours, with a documented ladder | As good as you made it |

Two rows are the most useful things either vendor published. Zapier's help centre
tells you to write "ask for my confirmation" into an agent's instructions, then
points you at the Human in the Loop action inside a Zap when you need an approval
the platform enforces: a vendor arguing against its own marketing. And Hermes
documents \`cron_mode: deny\`, so unattended runs refuse dangerous commands
rather than waiting for an answer that never comes.

The top row changes designs. An approval is a gate, never an undo, which is why
this site argues for
[drawing the approval line on reversibility rather than task size](/blog/grok-bot-approval-rules-reversibility)
and for settling the split in
[the delegation playbook](/blog/bot-delegation-playbook).

## Ask what survives six months

Nobody asks this during evaluation and everybody asks it during an incident. The
twelve fall into three groups.

The graph engines keep a per-step record, because a graph has named steps. Zapier
stores input and output per node in Zap history, capped at 60 days and displaying
up to 10,000 runs. n8n keeps full execution history, retained 7 days on Starter
and 30 on Pro, or on your own disk when self-hosted. Make keeps a full log per
scenario run.

The second group designed for it: Buzz signs every message, workflow step and git
event into one hash-chained append-only log, and Rakazo keeps per-thread event
rows and token counts per run in your own Postgres.

Everything else keeps a transcript, and Grok Bot is the sharpest constraint here:
an audit view of bot actions does not exist yet, and a routine keeps only its 20
most recent run records, which go when the bot goes. A transcript written by the
thing you are checking is evidence of intent, not outcome, the argument in
[watching what your bot did](/blog/bot-observability).

## Compare cost shapes, not headline prices

Prices are not comparable here. Shapes are, and the shape decides whether a bad
month is an inconvenience or an incident.

| Platform | What you are billed for | What a runaway month does |
|---|---|---|
| Grok Bot | A weekly allowance, then overflow | "There is no Grok Bot-specific spend cap yet" |
| Rakazo | Infrastructure plus your own tokens | Your provider bill, usage recorded per run |
| OpenClaw, Hermes, Buzz | No published tiers for any of the three | Your own provider and hosting spend |
| OpenMausBot | Nothing extra, it drives CLIs you pay for | Your existing CLI subscriptions |
| Lindy | Per seat, plus a shared credit pool | Actions pause until reset, no overage |
| Zapier | Tasks for Zaps, activities for Agents | Your tier is a number you chose |
| Make | One credit per module action, mostly | Your credit tier; error routes are free |
| n8n | Whole executions, regardless of steps | Your plan, or your own hardware |
| Claude agents | Included on paid plans, then usage | Turn credits off and runs stop |
| OpenAI computer use | Tokens, screenshots included | Whatever you metered yourself |

The asymmetry is not cheap against expensive. It is a number you compute in
advance against a number you discover. Lindy's worst case is that work stops.
Grok Bot's worst case is a bill you did not model.

Setup burden belongs here too: Grok Bot and Lindy are minutes, Zapier and Make an
afternoon of drawing, Claude's SDK hours to days in code, and the self-hosted
runtimes an install and a config file, except Rakazo and Buzz, which are a
service you operate. The arithmetic is in
[keeping bot costs predictable](/blog/bot-cost-control) and
[what a missing spend cap means](/blog/grok-bot-spend-cap-and-token-burn).

## Grok Bot runs a managed desktop you cannot relocate

Grok Bot is the managed option, and its appeal is real: you subscribe, install an
app, and bots run, with nobody paged at 3am.

The shape underneath is unusual and almost every viral post gets it wrong. Every
bot on the account shares **one** persistent cloud computer, a managed Linux VM
where the bot runs as a non-root user, and each bot gets its own screen on it.
Cookies, signed-in sessions, files, and command-line credentials are shared
across every bot, and the docs are direct: the screens are separate work
surfaces, not separate security boundaries, and you should not use separate bots
as a security boundary. Deleting a bot does not remove those files or sessions.
Because sessions persist, it is logged in on Monday because you logged it in last
Tuesday. Detail in
[what the shared computer actually isolates](/blog/grok-bot-shared-computer-security),
and reach, macOS, Windows and iPhone on iOS 18 or later with no Linux, Android or
iPad client, in
[Grok Bot on Windows, Linux and iPad](/blog/grok-bot-supported-platforms).

Access rides on an eligible subscription. As of 21 August 2026 the cheapest paid
path is [Cursor Pro+](https://cursor.com/pricing) at 60 dollars a month, with
Cursor Ultra at 200, Cursor Teams Standard at 40 per user and Premium at 120, and
[SuperGrok Plus](https://x.ai/pricing) at 100. Cursor Hobby and the 20 dollar Pro
tier do not include it. Already holding a qualifying plan makes your marginal
cost zero, which is the strongest argument for it, and the rules are in
[why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained).

## Rakazo self-hosts the same shared sessions

Rakazo is the closest self-hosted match to Grok Bot's job profile: persistent
bots driving a browser and a shell, with memory and routines, reachable from web,
desktop and mobile clients. It is Apache-2.0 and in beta.

Its default is a Team Computer whose browser sessions and installed tools are
shared, with per-bot folders explicitly not a boundary: every Team bot can reach
the full Team workspace, the same shape Grok Bot has. The difference is the exit,
since a bot can use a Private Computer where the workspace is its own, and
connector credentials are encrypted server-side and never returned by the API.

The approval defaults invert the intuition, the most useful finding in
[Rakazo vs Grok Bot](/blog/rakazo-vs-grok-bot): the managed product has the
stricter default. Bots act without asking by default, only
\`destination.write\`, \`delete_bot\` and \`archive_bot\` always require
approval, and \`shell\`, \`computer_act\` and \`write_file\` sit on an exempt
list that short-circuits the resolver before any rule is read. Note that
\`computer_act\` is how a bot clicks. Fuller passes are in
[auditing Rakazo permissions](/blog/rakazo-permissions-audit) and
[the self-hosting guide](/blog/rakazo-self-hosting-guide).

## OpenClaw is built for exactly one operator

OpenClaw is a TypeScript project whose LICENSE file reads MIT, copyright OpenClaw
Foundation, with commits landing the day it was checked. Read the file, not the
badge: GitHub's API reports the licence as unrecognised, because the repository
ships a third-party notices file alongside it.

The Gateway is the product: the docs call it the single source of truth for
sessions, routing, and channel connections, with the CLI, web control UI and
companion apps connecting to it, and skills arriving through its own ClawHub.

The scope line is what most comparisons skip, and it is in the README: OpenClaw
is designed for a single operator. Its security guide is equally straight, saying
host execution ships with approvals effectively off, defending that as
intentional, and adding that it is not a hostile multi-tenant security boundary
for adversarial users sharing one gateway. Sandboxing is opt-in, via
Gateway-in-Docker or per-tool Docker and Podman backends. That is right for one
person on one machine, and handing it to five colleagues puts you outside it, per
[Grok Bot alternatives compared](/blog/grok-bot-vs-openclaw-vs-hermes-vs-buzz).

## Hermes ships approval defaults worth copying

Hermes Agent is a Python project under MIT, copyright Nous Research, positioned
as the self-improving AI agent. Its docs describe a closed learning loop with
autonomous skill creation after complex tasks and skill self-improvement during
use. The skills are not proprietary: the README states compatibility with the
agentskills.io open standard, so the procedural memory it builds is portable.

Two things separate it. The runtime is portable, with seven terminal backends
including local, Docker, SSH, Modal and Vercel Sandbox. And its approval model is
the most developed here: a documented \`smart\` mode where an auxiliary model
auto-approves low-risk commands, auto-denies dangerous ones, and escalates the
uncertain middle, with timeouts failing closed and a hardline blocklist no yolo
flag overrides.

\`\`\`yaml
# ~/.hermes/config.yaml, the documented defaults
approvals:
  mode: smart
  timeout: 300
  cron_mode: deny
  single_query_mode: deny
  mcp_reload_confirm: true
  destructive_slash_confirm: true
\`\`\`

On capability parity alone Hermes is the closest single-product match to Grok
Bot. It also ships a documented \`hermes claw migrate\` command importing an
existing OpenClaw install, memories, skills and command allowlist included. A
setup like [Persistent Bot Memory](/bots/persistent-bot-memory) fits it well.

## Buzz is a workspace with identities, not a runtime

Take one thing from this page and take this. Buzz is a Rust project under
Apache-2.0, built by Block, and its README describes a Nostr relay where every
message, workflow step, review approval and git event is a signed event in one
log. The relay is what you self-host. Agents run elsewhere and connect in through
a \`buzz-cli\` speaking JSON, or \`buzz-acp\`, an Agent Client Protocol harness
for Goose, Codex and Claude Code.

Its core claim is that agents are members rather than bots, with each participant
holding a keypair and agents scoped by identity rather than permission flags, a
different answer to the problem Grok Bot's docs describe from the other side.

Be equally clear about what is unfinished, because the project is. Its README
puts mobile clients and workflow approval gates in a being-wired-up column and
warns against planning a compliance programme around it yet. An audit trail is
not a gate, and the gate is not shipped.

## OpenMausBot drives CLIs you already pay for

OpenMausBot is Apache-2.0, with signed desktop builds for macOS, Windows and
Ubuntu, or a build from source on Node 24 or newer. It is the local-first answer,
with a harness server on \`127.0.0.1\` owning every agent process and
transcripts in your home folder.

The distinguishing move is that bots run on the \`claude\`, \`codex\` or
\`grok\` CLIs you already have installed and logged in, so there is no second
subscription and no proxy in the middle. A permission broker turns shell commands
and file edits into approval cards, and webhook triggers bind locally.

The limits are the project's own: it is a desktop app rather than a shared
always-on service, Ubuntu support is beta, and host control is disabled on
Wayland pending a safety issue linked from the README. It sits alongside seven
other projects in
[open source bot runtimes compared](/blog/open-source-bot-runtimes).

## Lindy puts the work in a Slack thread

Lindy's docs describe it as an AI teammate that lives in Slack: everyone gets a
private Lindy in their DMs and the team shares one in channels. The unit of work
is a thread, a different bet from a machine, because a colleague can correct a
misread number where the next person sees it.

It is not connector-only. Point it at a hosted MCP server with a public HTTPS
endpoint and it reads that server's tool catalogue and creates an action for
every tool whose schema it supports, and the docs put the range plainly: a small
server might add three tools, a large one well over a hundred. Every tool arrives
enabled, and the docs warn each one is considered on every task.

Guardrails are per integration: always allow, require approval, or don't offer.
Read the scope first, because they apply in shared Slack threads only, reads are
never guarded, one guardrail covers every account under an integration, and the
requester can approve their own request. Pricing is per user, with Plus at 29.99
a month and 3,000 credits, Pro at 99.99 with 15,000, Max at 199.99 with 35,000,
and a quoted Enterprise tier adding SSO, audit logs and HIPAA. Credits pool and
do not roll over, as covered in [Grok Bot vs Lindy](/blog/grok-bot-vs-lindy).

## Zapier sells a maintained connector catalogue

It is fashionable to wave the connector catalogue away as a feature list, and
that is a mistake. Zapier's app directory stated it connects 10,003 or more apps
the day it was checked, while the Zapier Agents page quotes 9,000 or more. The
figure matters less than what a maintained connector gives you: token refresh,
pagination, rate-limit handling, and a contract that the data shape will not
change next Tuesday.

Zapier is not purely deterministic in 2026. Zapier Agents are metered in
activities, a unit separate from tasks: 400 a month on Free, 1,500 on
Professional, with a per-run cap of 10 on Free and 40 on paid plans.

The task arithmetic decides which designs are cheap. Triggers never use tasks, a
successful action step uses one, and steps that error or halt use none, as do
Filters, Paths, Formatter, Delay, Looping, Digest and Storage steps. A Zapier MCP
tool call uses two. So branching is free, filtering early is free, and routing
through MCP doubles the cost of reaching an external tool. Autoreplay retries a
failed step five times on a 5 minute to 6 hour backoff, and Zapier pauses a Zap
that errors 95 percent or more of its runs over 7 days.

## Make names five ways a step can fail

Make is a visual scenario engine: modules connected by routes, data passing as
bundles, and a canvas showing the whole shape. Nothing runs that you did not
draw.

Its real advantage is the part almost nobody writes about. What happens when a
module fails is a first-class design decision, attached as an error handler route
with a named directive: Skip drops the failing bundle, Retry saves it as an
incomplete execution, Resume substitutes a predefined output, Commit halts and
commits, and Rollback reverts changes in transaction-supporting modules. Rollback
is the default when you set nothing.

That is a vocabulary for intent about failure, and no agent charter matches its
precision. Two caveats, both from Make's own docs: incomplete executions are
disabled by default, and an error route with no handler behaves like Skip.
Billing is credits, one per module action, with the Free plan at up to 1,000
credits a month, 2 active scenarios and a 15-minute minimum interval, and paid
plans from 9 dollars a month for 5,000 credits. Make AI Agents exist in beta, so
this is not agent against no agent, per
[Grok Bot vs Make](/blog/grok-bot-vs-make).

## n8n is fair-code, not open source

This is the most commonly misstated fact in the category, and it can cost you a
contract. n8n's README describes the project as fair-code distributed under the
Sustainable Use License and the n8n Enterprise License, and lists Source
Available as an attribute. The phrase open source does not appear in it.

The licence text is short and worth reading yourself. It limits use to your own
internal business purposes or non-commercial and personal use, permits
distribution only free of charge for non-commercial purposes, and forbids
removing licensing notices. Files with ".ee." in the filename or ".ee" in the
directory require an Enterprise licence, and branches other than master are
stated as not licensed. Running n8n internally to automate your own company's
work is squarely permitted. Reselling access is not.

The Community edition trade is real. Per n8n's own documentation the free
self-hosted build omits Environments, External secrets, Log streaming, Projects,
SSO via SAML or LDAP, and Git version control, and states that only the instance
owner and the user who creates them can access workflows and credentials. That
line ends honeymoons in month four. Cloud pricing meters whole executions
regardless of complexity, at Starter 20 euros a month for 2.5K, Pro 50 for 10K,
and Business 667 for 40K, and paid self-hosted keys must ping n8n's licence
server daily.

## Claude agents hand you parts and on-call

Claude's agent story is a stack of options rather than one product, and the Agent
SDK overview lays out four doors: the Claude Code CLI, the Agent SDK as a Python
or TypeScript library in your own process, the Client SDK where you implement the
tool loop yourself, and Managed Agents as a hosted REST API where Anthropic runs
the agent and the sandbox. Only the last is comparable to a finished product.

What you gain is everything the harness owns: lifecycle hooks, permissions over
which tools run automatically, subagents, forkable sessions, and any log shape
your auditor asks for.

Routines are a research preview taking three trigger types on one routine: a
schedule, an authenticated HTTP POST to a per-routine endpoint, and GitHub
repository events. That API trigger has no Grok Bot equivalent today. Read the
approval line carefully, because it inverts expectations: Anthropic's docs state
routines run autonomously as full Claude Code cloud sessions with no
permission-mode picker and no approval prompts, and Claude can use every tool
from an included connector, including writes, without asking. Set the boundary by
scoping first, backed by rules such as branch protection.

One error to avoid entirely: Grok Build, the open-sourced command line coding
tool, is what reads Claude Code marketplaces, plugins, skills, MCP servers,
agents, hooks and CLAUDE.md with zero configuration. The Grok Bot documentation
never mentions Claude Code, SKILL.md, or CLAUDE.md at all. There is a
second-order trap inside the part that does work: Grok Build accepts \`model\`,
\`effort\`, \`license\`, \`compatibility\` and \`allowed-tools\` in SKILL.md
frontmatter without applying any of them, so a skill whose safety rested on
\`allowed-tools\` silently loses it. Both are in
[reusing your CLAUDE.md and skills in Grok](/blog/grok-bot-claude-code-skills-compatibility).

## OpenAI retired Operator and split what remains in two

If you came here searching for Operator, start with the awkward fact: it does not
exist any more. Its help centre article returns a 404, its capabilities were
folded into ChatGPT agent mode, and that surface is retired too. OpenAI's own
ChatGPT agent help page opens by saying the agent is no longer available.

Two things remain. Cloud browser inside ChatGPT works on supported public
websites and is available on paid plans other than Free and Go. The limitation is
the headline: at launch it works only on public pages, and it does not accept
credentials, use autofill or password managers, sign in to websites, or complete
payments, with the task stopping if a site requires one. So a workflow starting
behind a login is an exclusion rather than a difficulty rating.

The computer tool in the API is a developer primitive. The model returns
interface actions such as click, type, scroll and keypress, and your code
executes them and returns the new screen, through a built-in loop, a custom tool
wrapping an existing Playwright, Selenium, VNC or MCP harness, or a
code-execution harness. It can sign in, because you built it. The escalation
ladder and the reason a site may block one agent and not another are in
[Grok Bot vs OpenAI computer use](/blog/grok-bot-vs-openai-operator), and the
scheduler comparison people often want is
[Grok Bot vs ChatGPT Tasks](/blog/grok-bot-vs-chatgpt-tasks).

## Read all twelve down one grid

| Platform | Harness | Hosting | Approval | Audit |
|---|---|---|---|---|
| Grok Bot | Vendor's | Managed VM, one per account | Gate, no undo | None yet |
| Rakazo | Yours | Self-hosted, beta | Off by default | Your Postgres |
| OpenClaw | Yours | Your machine, one operator | Permissive on host | Not documented |
| Hermes | Yours | Seven backends | Fails closed | Not documented |
| Buzz | External | Your relay | Not finished | Hash-chained log |
| OpenMausBot | Yours | Local desktop app | Permission cards | Local transcripts |
| Lindy | Vendor's | Lindy cloud | Channels only | Threads, Enterprise |
| Zapier | Vendor's | Zapier cloud | Human in the Loop | 60 days of history |
| Make | Vendor's | Make cloud | Five directives | Execution log per run |
| n8n | Yours or theirs | Self-host or cloud | What you build | Full history |
| Claude agents | Yours | Your process or their cloud | None in routines | What you wrote |
| OpenAI computer use | Yours | Your infrastructure | Yours | Yours |

Two patterns fall out. Every row where a self-hosted option looks better is a row
where you took on a job. And hosting and audit, the two columns most likely to
close a decision, are the two no configuration moves afterwards.

## Rule options out by hard constraint

Scoring twelve products on eight axes produces a spreadsheet nobody acts on.
Elimination produces a shortlist in five minutes. Apply your hardest constraint
first.

| The constraint you cannot move | What it removes | What survives |
|---|---|---|
| Data must not leave your infrastructure | Grok Bot, Lindy, Zapier, Make, cloud browser | The self-hosted six, plus Claude and the API tool |
| Your desktops run Linux | Grok Bot, answered with one word | Everything else here |
| The job begins behind a sign-in | ChatGPT cloud browser | Grok Bot, Rakazo, or your own harness |
| A reviewer will ask about a date | Grok Bot, no audit view yet | Zapier, Make, n8n, Buzz, Rakazo |
| Nobody will run a server and a database | Rakazo, Buzz, self-hosted n8n | Grok Bot, Lindy, Zapier, Make |
| Bots run unattended overnight | Anything permissive by default | Hermes, whose cron mode denies by default |
| The bill must be a budget line | Grok Bot, per its documented missing cap | Zapier, Make, n8n, Lindy |
| Every run must produce identical output | All twelve | A deterministic workflow tool |

The last row is worth reading twice. An agent runtime is the wrong tool for a
fixed sequence, and the demo looks brilliant right up to the run where it
improvises. Where these setups get published is in
[where to find Grok Bot setups](/blog/botdirectory-alternatives).

## Name what nobody has verified, including us

A comparison is only as good as its gaps are honest. These were unverifiable
during the research and remain unverified here.

| The thing people quote | Why it is not established |
|---|---|
| Grok Bot's included weekly allowance | No figure is published. Model it from your own first two weeks |
| Which model Grok Bot runs | A fixed set per surface, models unnamed. Any article naming one is guessing |
| Lindy's total integration count | The integrations page says "and more", with no number |
| Whether several Lindy surfaces are GA | Routines and others sit under a docs path labelled coming soon |
| Hermes pricing | A Nous Portal subscription exists; its pricing page rate-limited when checked |
| OpenClaw and Buzz pricing | Neither publishes tiers, and buzz.xyz was an invitation with no pricing |
| Which OpenAI computer-use model id is GA | The docs name three versions across prose, samples and tables |
| A finished Rakazo audit-log surface | Its site lists one; no such document is in the repo |

Two absences carry the word "yet" in the vendor's own documentation, a different
kind of gap from a permanent one: the missing Grok Bot audit view and the missing
spend cap. A team-level ceiling on local execution with Never, Ask every time and
Always options is described as coming, with members able to choose stricter but
not looser. It has not shipped.

## Compose two platforms instead of crowning one

Most real rosters end up mixed. Three compositions come up repeatedly, each
documented rather than invented here.

The first is a graph around a decision. The deterministic tool owns the trigger,
deduplication, enrichment and anything irreversible, and the agent receives a
bundle, makes one judgement, and returns a fixed structure so the workflow is
deterministic again immediately. Keep every send, payment or delete inside the
graph behind an enforced approval rather than inside the charter, which is what
Zapier's own help centre points you at.

The second is a runtime plus a workspace: run agents where you control the model
and the sandbox, and report into Buzz where every action is signed next to the
human conversation. Its ACP harness covers Goose, Codex and Claude Code.

The third is a split by surface. Put the work colleagues read where they already
are, and the work needing a logged-in browser on a machine, delivering into the
same channel. A [Chief of Staff](/bots/chief-of-staff) setup often straddles
both, and [running a team of bots without chaos](/blog/multi-bot-teams) covers
the rest. The hosted-to-self-hosted move is walked in
[migrating a Grok Bot setup to Rakazo](/blog/migrate-grok-bot-to-rakazo).

## Carry the charter, the only portable asset

Here is the practical reason not to agonise over this page. The valuable artefact
is not the runtime, it is the charter: the job, the trigger, the allowed surface,
the output shape, and the boundary. It moves between all twelve with light
edits.

\`\`\`text
bot: pr-review-sentinel
job: review every new pull request in org/repo and post one comment

trigger: pull request opened or updated

may:
  - read the diff, the linked issue, and prior review comments
  - run the existing test command in a container
  - post one comment, findings ranked by blast radius

never:
  - approve, merge, push, or request changes
  - act on any repository outside org/repo
  - use a browser session signed in as a human

stop and ask a human when:
  - the diff touches migrations, auth, or billing
  - a check needs a credential the runtime does not already hold
  - the change exceeds 800 changed lines
\`\`\`

That never block is the boundary, and it is what makes the bot safe to leave
running. On Hermes it becomes a deny pattern plus a scoped tool set, on OpenClaw
a sandbox config and a channel allowlist, on Buzz an identity with narrow channel
membership, on a Claude cloud routine connector scoping plus branch protection,
and on Grok Bot an approval setting plus a charter line, with the caveat that the
shared computer means the boundary is only as strong as the credentials already
on that machine.

Every listing here carries one, including
[PR Review Sentinel](/bots/pr-review-sentinel), which never merges,
[Inbox Triage](/bots/inbox-triage), which never sends, and
[Competitor Pricing Watch](/bots/competitor-pricing-watch), which never fills a
form. Keeping that text in a repository you control turns the platform decision
from a lock-in into a preference, the argument in
[the introduction to botskills](/blog/introducing-botskills) and the reason
[the delegation playbook](/blog/bot-delegation-playbook) is written runtime-first
rather than vendor-first.

**Keep reading:** [Rakazo vs Grok Bot](/blog/rakazo-vs-grok-bot), [Grok Bot Alternatives Compared](/blog/grok-bot-vs-openclaw-vs-hermes-vs-buzz), [Open Source Bot Runtimes Compared in 2026](/blog/open-source-bot-runtimes).

## Frequently Asked Questions

### What is the best AI agent platform in 2026?

There is no single winner, because these products are shaped for different jobs
and the choice is usually closed by one hard requirement rather than a score. If
data must stay on infrastructure you control, a hosted product is not eligible
whatever its features. If the work begins behind a login, connector-only tools
are out. If a reviewer will ask about a date, pick something that keeps a
per-step record.

### Which AI agent platforms let me choose the model?

Most of them. Rakazo accepts any OpenAI-compatible endpoint, Hermes switches
provider with one command, OpenClaw supports hosted, gateway or local providers,
Lindy lists model selection on every paid tier, and Claude names a model per call
or routine. The exception is Grok Bot, whose documentation states there is no
model picker for members or admins and that user or admin choice is not planned,
with a fixed set per surface.

### Do AI agent platforms actually stop an action, or just ask nicely?

It varies, and the difference matters more than any feature. Make attaches five
named directives per module, including a Rollback that applies by default. Zapier
enforces approval through a Human in the Loop action inside a Zap, while its help
centre describes agent-level approvals as instructions in a prompt. Hermes
classifies by risk and fails closed. Grok Bot gates a proposed action but its
docs say the approval does not reverse completed work.

### Can I move a bot setup from one platform to another?

The charter moves, and very little else does. The job description, the allowed
surface, the output shape and the boundary line are plain prose, and every
platform here accepts plain prose, so that text transfers with light edits. What
does not transfer is connector authentication, approval configuration, and
anything on the machine, since files, browser profiles and run history are local
to one deployment. Expect to redo the setup work.
`,
};
