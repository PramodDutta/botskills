import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot vs Claude Agents: Two Models of Delegation',
  description:
    'Grok Bot vs Claude agents is a product against a construction set. Model choice, MCP, who owns the harness, and the Grok Build confusion almost everyone repeats.',
  date: '2026-08-25',
  category: 'Comparison',
  content: `
# Grok Bot vs Claude Agents: Two Models of Delegation

Most comparisons in this space line up features in two columns and declare a
winner. That framing fails here, because Grok Bot and Claude's agent tooling
are not the same kind of object. One is a product you operate. The other is a
set of parts you assemble into something you then have to operate yourself.
The right pick depends almost entirely on whether you want to be the operator.

Everything below was checked on 2026-08-25 against
[the Grok Bot docs](https://docs.x.ai/grok-bot/faq) and
[Anthropic's Claude Code and Agent SDK docs](https://code.claude.com/docs/en/overview).
Both move weekly, so verify before you build a budget or a rollout on any line
of it.

## A finished product and a box of parts

Grok Bot arrives finished. You name a bot, brief it, connect some tools, and it
runs on a persistent cloud computer that xAI operates for you. You do not
choose the runtime, patch the VM, or write the agent loop. The product decides
almost everything, and what you supply is the instruction and the judgement.

Claude's agent story is a stack of options rather than one thing, and
[the Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview)
lays out the four doors plainly. The Claude Code CLI is the interactive
terminal tool. The Agent SDK is a Python or TypeScript library that gives you
the same tools, agent loop, and context management that power Claude Code,
running in your own process. The Client SDK is direct API access where you
implement the tool loop yourself. Managed Agents is a hosted REST API where
Anthropic runs the agent and the sandbox.

Notice that only the last of those is comparable to Grok Bot as a product. The
other three are construction sets, and the reason people reach for them is that
they want the parts.

## Ask whether you want to operate something, then stop asking

Feature comparisons here go wrong because they treat "included" and "buildable"
as one column. A capability the product ships is one you inherit, complete and
unchangeable. A capability the SDK lets you write does not exist until somebody
writes it, and then becomes something somebody maintains. That turns most of the
decision into a staffing question rather than a technical one.

| Capability | Grok Bot | Claude's Agent SDK |
|---|---|---|
| A machine that survives between sessions | Included, a managed Linux VM that xAI operates and patches | You provision, patch and monitor the host or container |
| An approvals surface a non-engineer can use | Included, and it stops a proposed action before it runs | You write the permission callback and whatever interface wraps it |
| An immutable action log | Not available, the docs state an audit view does not exist yet | Absent until you write it, and then exactly the shape your auditor asked for |
| A hard spend ceiling | Not available, the docs state there is no bot-specific spend cap yet | You meter it, because you are the one calling the API |
| Choosing the model | Not available, and explicitly not planned | Per call, per session, per routine |

Read the "not available" rows twice. On the Grok Bot side a missing capability is
a fact about your options; on the SDK side it is a task in somebody's backlog.
Those look similar in a table and are nothing alike in a quarter.

The blunt version: if you cannot name the person who gets paged when an agent
loop wedges at three in the morning, you want the product, and every argument
about control is theoretical until that name exists.

## The model question, and the one that closed it

This is the cleanest single difference, and it is documented on both sides.

Grok Bot has no model picker, for members or for admins, and
[the teams and enterprises page](https://docs.x.ai/grok-bot/teams-and-enterprises)
states there is no plan to allow admin or user choice. There is a fixed model
set per surface with automatic failover, and billing follows whichever model
actually served the request. There is a small documented inconsistency worth
knowing about: the settings page mentions a default model "when model selection
is available", which sits awkwardly against the no-picker language, so treat
the no-picker statement as the operative one until that resolves.

Claude does the opposite at every layer. A routine's prompt input includes a
model selector and Claude uses the selected model on every run. The SDK and the
API let you name the model per call.

Neither is obviously right. A fixed model set with automatic failover is a real
operational feature: nobody on your team can quietly downgrade a bot to save
money, and nobody has to think about a migration when a model is retired. The
cost is that when the serving model changes underneath you, your prompts were
tuned against something you can no longer name. If reproducibility matters, if
you need to pin a version while you re-test, or if part of your work genuinely
needs a cheaper model, the picker is not a luxury.

## Who owns the harness, and why that is the whole argument

The harness is the loop around the model: what tools exist, what runs
automatically, what stops and asks, what happens when a step fails, and what
gets logged.

With Grok Bot the harness is the product. That is the point of buying it. You
get approvals, routines, teach-by-demonstration, and a machine that stays alive
between sessions, none of which you had to build. You also inherit the gaps.
The docs note that an audit view of bot actions does not exist yet, and that
there is no bot-specific spend cap yet. You cannot patch either, because you do
not own the harness.

With the Agent SDK you own all of it. Hooks run your code at points in the
agent lifecycle. Permissions control which tools run automatically and which
need approval. Subagents fan work out. Sessions persist and fork. If your
compliance story requires an immutable action log, you write it, and it exists.
The price is that you now run an agent platform, including the on-call for it.

There is one practical constraint people hit late: the Agent SDK ships as a
library for Python and TypeScript only, and other languages drive the same loop
by running the CLI as a subprocess with the headless flags. If your stack is Go
or Rust, plan for the subprocess.

## Where the agent's hands actually are

Grok Bot's hands are on one machine. Every bot on the account shares a single
persistent cloud computer, a managed Linux VM where the bot runs as a non-root
user, and each bot gets its own screen on it
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). Cookies,
signed-in sessions, files, and command line credentials are shared across bots,
and the docs say directly that separate bots are not a security boundary.
Hosted MCP sign-in tokens are the exception: those stay with Cursor's backend
and are never stored on the computer.

Claude's hands are wherever you put them, and the docs are explicit that
Anthropic is not holding the environment. For the computer use tool, your
application runs every call in an environment you control, and Claude never
connects to that environment directly
([computer use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool)).
For the browser use tool, your application runs every call against its own
browser automation and nothing runs on Anthropic's side. Cloud routines are the
exception, running on Anthropic-managed infrastructure or on your organisation's
self-hosted environment when routed there.

That difference decides data residency arguments before anyone opens a
spreadsheet. If your requirement is that the browser session never leaves
hardware you control, Grok Bot is not eligible and no amount of configuration
changes that.

## Grok Build reads Claude Code config; Grok Bot does not

This is the single most-repeated error in the whole topic, and it is worth
getting exactly right.

Grok Build, the open-sourced command line coding tool, is compatible with
Claude Code with zero configuration needed, according to
[the Grok Build skills and plugins docs](https://docs.x.ai/build/features/skills-plugins-marketplaces).
It auto-reads Claude Code marketplaces, plugins, skills, MCP servers, agents,
hooks, and the CLAUDE.md family, plus the AGENTS.md family and the shared
agents directories. Point it at a repo that was set up for Claude Code and it
picks the configuration up without you doing anything.

Grok Bot does not do this. The Grok Bot documentation never mentions Claude
Code, SKILL.md, or CLAUDE.md at all. They are different products that share a
brand. If you read a post claiming your Claude Code skills will run in Grok Bot,
that post has conflated the CLI with the hosted bot product.

There is a second-order gotcha inside the part that does work, and almost
nobody has written it up. Grok Build accepts several SKILL.md frontmatter keys
without applying them.

\`\`\`text
# Read by Grok Build from a Claude Code repo, zero config:
.claude/skills/deploy-check/SKILL.md    body applied as instructions
.claude/agents/reviewer.md              read
.claude/settings.json                   hooks read
CLAUDE.md / .claude/rules/              read as project instructions
.mcp.json                               MCP servers connected
AGENTS.md                               read

# Accepted in SKILL.md frontmatter but NOT applied by Grok:
model:          ignored
effort:         ignored
license:        ignored
compatibility:  ignored
allowed-tools:  ignored, grants nothing and restricts nothing

# Read by Grok Bot from that same repo:
nothing. Grok Bot is briefed in its own charter, in the app.
\`\`\`

That \`allowed-tools\` line is the dangerous one. A skill written for Claude Code
may lean on \`allowed-tools\` as a restriction. Carried into Grok Build, the
restriction silently evaporates while the skill still appears to work. Re-read
any skill whose safety depended on that field before you reuse it. There is a
longer treatment in
[the Claude Code skills compatibility guide](/blog/grok-bot-claude-code-skills-compatibility).

## Sort every claim you read into the right product first

Because the two products share a brand, most bad advice here is not false, it is
filed under the wrong heading. A statement that is accurate about Grok Build
becomes dangerously wrong the moment somebody applies it to Grok Bot.

The check takes a minute. Find the source the claim came from and look at the
path in its URL. Documentation under the \`/build/\` path describes the command
line coding tool; documentation under the \`/grok-bot/\` path describes the hosted
bot product. A claim with no source at all is unfiled, not true.

| The claim you just read | Which product it belongs to | The tell |
|---|---|---|
| Reads Claude Code marketplaces, plugins, skills and CLAUDE.md with zero configuration | Grok Build | Documented on the \`/build/\` path |
| Accepts \`allowed-tools\` in frontmatter and applies nothing from it | Grok Build | Same page, same path |
| Every bot on the account shares one persistent cloud computer | Grok Bot | Documented on the \`/grok-bot/\` path |
| An approval gates a proposed action and does not reverse completed work | Grok Bot | Same path, security page |
| There is no model picker for members or admins | Grok Bot | Same path, teams page |
| There is no Linux desktop app | Grok Bot | Same path, and stated as a flat no |
| Reads your repository's configuration files and picks up your skills | Grok Build only | The Grok Bot docs never mention Claude Code, SKILL.md or CLAUDE.md at all |

The last row costs people a day. A team reads that "Grok reads your Claude Code
setup", stands up a Grok Bot expecting it to inherit a repository's rules, and
finds a bot that knows nothing but the charter typed into the app. Nothing
failed. The claim was filed under the wrong product.

## Both have routines now, and they fire differently

Grok Bot routines assign a workflow to exactly one bot, cap at 50 per bot, keep
the 20 most recent run records, and are deleted along with the bot. Nothing is
team-level
([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Claude Code routines, currently a research preview, take three trigger types on
the same routine: a schedule, an HTTP POST to a per-routine endpoint with a
bearer token, and GitHub repository events such as pull requests or releases
([routines](https://code.claude.com/docs/en/routines)). One routine can carry
all three, so a review job can run nightly, fire from a deploy script, and react
to every new pull request.

The API trigger is the capability Grok Bot has no equivalent for today. It is
what turns an alerting system into an agent trigger, and it is why an
[Engineering Agent Manager](/bots/engineering-agent-manager) style setup ends up
on the Claude side more often than not.

## Delegation compared across seven axes

| Axis | Grok Bot | Claude agents |
| --- | --- | --- |
| What you buy | A finished product you operate | A toolkit you assemble, or a hosted API |
| Model choice | No picker for members or admins, fixed set with automatic failover | Selected per routine, per session, or per API call |
| Where it executes | One shared cloud Linux VM per account | Your process, your container, Anthropic cloud, or self-hosted |
| Tool access | Connectors, hosted MCP, and a logged-in browser on the machine | MCP servers, built-in tools, and any tool you define |
| Triggers | Routines, one bot each, 50 per bot | Schedule, authenticated HTTP POST, and GitHub events on one routine |
| Approvals during a run | Approvals on proposed actions, which do not undo completed work | None during a cloud routine run; SDK and CLI expose a permission layer |
| Setup burden | Minutes, in an app | Hours to days, in code |

## Where the boundary gets enforced in each design

Every listing on botskills.sh has to declare a boundary: the one action the bot
never takes without a human. The architectural point is that these two designs
enforce a boundary in different places, and confusing them is how people get
burned.

Grok Bot enforces at the moment of action. A proposed action stops and waits.
Its docs are honest that this is a gate rather than an undo: an approval
controls the proposed action, it does not reverse work already completed.

Claude cloud routines do not enforce at the moment of action at all. The docs
state it outright: routines run autonomously as full Claude Code sessions, with
no permission-mode picker and no approval prompts during a run, and Claude can
use every tool from an included connector, including writes, without asking.
The boundary therefore has to be enforced before the run starts, by scoping.
You remove the connectors the routine does not need, you pick a cloud
environment whose network access excludes what it must not reach, and you rely
on platform rules such as branch protection, where Claude's pushes to branches
outside its own \`claude/\` prefix are rejected if the branch is protected, has
someone else's open pull request, or carries commits by another author.

Capability scoping is arguably the stronger model, because a gate you can click
through at 7am is a gate you will click through. But it demands that you think
before the first run rather than during it. Write the boundary down either way.

\`\`\`text
Name:      PR Review Sentinel
Trigger:   pull_request.opened on acme/webapp, drafts excluded
Reads:     the diff, the linked issue, the repo's review checklist
Writes:    review comments on the pull request, and nothing else
Boundary:  never merges, never approves, never pushes, never
           requests changes, never comments outside this repo
Scope:     connectors limited to GitHub; no Slack, no email, no
           calendar attached to this job at all
Escalate:  if the diff touches auth, payments, or migrations, say
           so in the first line of the summary comment
\`\`\`

That Scope line is the part people skip. On a runtime with no in-run approvals,
it is the boundary. Compare with the roster thinking in
[multi-bot teams](/blog/multi-bot-teams), where the same logic drives how many
bots you actually need.

## Take one job through both builds and watch where they diverge

Take a real job: a Monday morning pricing digest across six competitor pages. It
is the shape of our
[Competitor Pricing Watch](/bots/competitor-pricing-watch) listing, whose
boundary is that it only reads public pages and never fills a form or creates an
account.

On the Grok Bot side you write the charter in the app, sign in once in the
browser on the shared computer, and attach a routine that fires every Monday.
First working run takes about a coffee, you provisioned nothing, and the machine
is still there next week with the sessions intact.

On the Claude side you write a script against the SDK, or a cloud routine, and
supply the browser yourself, because the browser use tool runs every call against
your application's own automation with nothing executing on Anthropic's side. You
pick the model and you write the log. First working run is a day.

Both work. They diverge on day thirty, which is why a demo never tells you which
to pick.

| Thirty days in | The Grok Bot build | The Claude build |
|---|---|---|
| Runs you can still inspect | The 20 most recent records the app keeps per routine | Every run, in whatever store you wrote it to |
| What you can prove about a specific click | Nothing beyond the transcript, since the docs state an audit view does not exist yet | Whatever your log captured, because you defined the fields |
| Where the site logins live | In the shared browser profile on the account's one computer, reachable by every other bot on it | Wherever your secret store puts them, scoped to this job |
| Which model produced last week's digest | Whichever the fixed set served, with billing following it | The one you named, unchanged unless you changed it |
| What happens if you delete the bot | Its routines go with it, and the shared files and sessions stay behind | Nothing, the code is in your repository |

Neither column wins. Take the Grok Bot column if the digest is a convenience
nobody will audit. Take the Claude column the first time somebody asks which page
the number on row four came from, because that question has an answer in only one
of these builds.

## The strongest objection: owning the harness wins on a long enough timeline

The best argument against the product is that a hosted agent is a dependency with
someone else's roadmap attached, and the gaps above are not gaps you can close. A
missing audit view stays missing until a vendor decides otherwise, the missing
spend ceiling stays missing, and the fixed model set is documented as a choice
with no plan to reverse it. On the SDK, none of those are anybody's decision but
yours.

That argument wins if you are in a regulated industry, if a contract already
obliges you to produce an action log, or if what you are building will outlive
the current pricing page. There the extra weeks are the requirement, not a cost.

It loses in the far more common case, for an unglamorous reason: the harness you
were going to own is usually not finished. An operator who picks the SDK to gain
model choice and audit logging typically ends up with model choice, a partial
log, and a scheduler that works until the machine reboots, while the product's
version of all three has been running since the first afternoon. Owning the
harness is an advantage only once you have built the parts you bought it for, and
the honest question is whether that work is scheduled or merely intended.

## What does not survive a switch between them

The charter survives. Almost nothing else does, and the parts that do not are
the parts that took longest to get right.

Connector authentication is bound to one deployment, so a move means signing in
to everything again with the right accounts. Machine state does not move at all:
files, the browser profile, anything a teach-by-demonstration capture produced,
and the run history are local to where they were made.

Approval configuration does not transfer either, because the two designs enforce
in different places. A setup that leaned on an in-run gate has to be rebuilt as
capability scoping before its first run on the other side, and one that leaned on
scoping has to be re-read to confirm the gate sits before anything irreversible
rather than after it.

Carry the written record of what the bot did instead, which is the argument in
[bot observability](/blog/bot-observability). When the runtime keeps no durable
audit of its own, the log you wrote is the only thing that moves with you.

## Which one to build on this afternoon

Start from the requirement you cannot drop rather than the feature list. Most of
these rows have one defensible answer, and about half close the decision alone.

| The requirement you actually have | Grok Bot | Claude agents | Pick |
|---|---|---|---|
| Something running today, set up by a non-engineer | Minutes, in an app | Hours to days, in code | Grok Bot |
| A named model that does not change underneath you | No picker, and none planned | Named per call, session or routine | Claude |
| An immutable log of every action | Audit view does not exist yet | Absent until you write it | Claude |
| A hard ceiling on spend | No bot-specific spend cap yet | You meter it, because you call the API | Claude |
| A logged-in browser that survives a pause | Persistent cloud computer with the sessions intact | Your environment, and therefore your uptime | Grok Bot |
| Execution on hardware you control, for data residency | Not eligible, the computer is not yours | Your process, container, or self-hosted | Claude |
| A trigger from an HTTP call or a repository event | No equivalent today | Authenticated POST, or GitHub events, on one routine | Claude |
| A workflow you would rather demonstrate than write | Ten minutes of browser work becomes a draft skill | Not a concept; write the instructions | Grok Bot |

The rows that end an argument fastest are data residency and the repository
trigger. Neither is a preference, and no configuration moves either one.

Pick Grok Bot if you want to operate a bot rather than build one, if the work
needs a logged-in browser on a machine that survives a pause, and if you are
already paying for an eligible plan so the marginal cost is zero. It is a
faster route from idea to something running, by a wide margin. A
[Bot Advisor](/bots/bot-advisor) style setup is a twenty-minute job there and a
weekend in the SDK.

Pick Claude's tooling if you need to name the model, if an immutable audit log
or a hard spend ceiling is a requirement rather than a wish, if the execution
environment has to be yours for data residency reasons, or if the trigger is an
HTTP call from a system you already run. Also pick it if the work is code, since
that is what Claude Code is built around and the branch-level guarantees are
real.

Pick both, honestly, if you are a small team: the hosted bot for the browser
work nobody wants to build a harness for, and a routine or SDK agent for the
code path where you need the control. They do not overlap as much as the
marketing on either side implies. If you are working out where the first one
goes, [the one-person company setup](/blog/one-person-company-grok-bot) is a
reasonable map.

**Keep reading:** [Grok Bot vs Claude Cowork](/blog/grok-bot-vs-claude-cowork), [Give Every Bot One Source of Truth](/blog/grok-bot-obsidian-knowledge-base), [Grok Bot vs Lindy](/blog/grok-bot-vs-lindy).

This sits inside a wider guide: [Every AI Agent Platform Compared](/blog/ai-agent-platforms-compared) covers the whole territory.

## Frequently Asked Questions

### Can Grok Bot use my Claude Code skills and CLAUDE.md file?

No. That capability belongs to Grok Build, the command line coding tool, which
reads Claude Code marketplaces, plugins, skills, MCP servers, agents, hooks and
CLAUDE.md with zero configuration. The Grok Bot documentation does not mention
Claude Code, SKILL.md, or CLAUDE.md anywhere. They are separate products under
one brand, and conflating them is the most common error written about this
topic. Brief a Grok Bot in its own charter inside the app instead, and do not
expect repository configuration to carry across.

### Which one can I choose the model for?

Claude. A routine's prompt includes a model selector and Claude uses that model
on every run, and the SDK and API let you name a model per call. Grok Bot has no
model picker for members or for admins, and its docs say there is no plan to
add one. It runs a fixed model set per surface with automatic failover, and
billing follows whichever model actually served the request. That is a real
operational benefit for consistency across a team, and a real problem if you
need to pin a version while you re-test prompts.

### Do Claude routines ask for approval before doing something risky?

Not during the run. Anthropic's routines documentation states that routines run
autonomously as full Claude Code cloud sessions with no permission-mode picker
and no approval prompts, and that Claude can use every tool from an included
connector, including writes, without asking. The boundary has to be set before
the run by scoping: remove connectors the routine does not need, choose a cloud
environment whose network access excludes anything it must not reach, and lean
on platform rules such as GitHub branch protection to backstop the rest.

### Is one of these cheaper to run at small scale?

Grok Bot usually is, if you already hold a qualifying subscription, because the
marginal cost of a bot is zero until you exceed the included weekly allowance.
Claude Code is included on the Pro, Max, Team and Enterprise plans, so a
routine costs nothing extra until you hit the daily run cap or your subscription
usage limit. The difference is the tail. Claude lets you turn usage credits off
so runs simply stop, while Grok Bot's docs state there is no bot-specific spend
cap yet, so overflow is billed on demand.
`,
};
