import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Alternatives Compared: OpenClaw, Hermes, and Buzz',
  description:
    'The Grok Bot alternatives everyone names, checked against their own repos and docs: OpenClaw, Hermes and Buzz on licence, hosting, model choice and approvals.',
  date: '2026-08-25',
  category: 'Comparison',
  content: `
# Grok Bot Alternatives Compared: OpenClaw, Hermes, and Buzz

A widely shared post put these four names in one frame and sent a lot of people
searching for all four at once. The frame is useful, and it is also slightly
wrong: these are not four versions of the same product. One is a managed
service, two are runtimes you install, and one is not a runtime at all.

Every claim below was checked on 2026-08-25 against the product's own
repository, its actual LICENSE file, or its own documentation. Nothing here
comes from a listicle. Three of the four projects landed commits the same
morning this was written, so re-verify anything you are about to spend money or
data on: [openclaw/openclaw](https://github.com/openclaw/openclaw),
[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent),
[block/buzz](https://github.com/block/buzz), and
[docs.x.ai/grok-bot](https://docs.x.ai/grok-bot/faq).

One disclosure so you can weigh the rest. botskills.sh is a directory of bot
setups, not a runtime. We do not sell any of these four, which is why this can
be the version where each of them wins something real.

## Start with one line on each of the four

Grok Bot is the managed option. You get working bots on a hosted Linux VM this
week, and you give up model choice, harness ownership, and data residency to
get there.

OpenClaw is a personal gateway you run on your own machine, explicitly built
for one operator, with a skill and plugin ecosystem around it.

Hermes is a self-hosted agent runtime whose distinguishing feature is a
learning loop: it writes skills from its own runs and revises them during use.

Buzz is not a bot runtime. It is a self-hosted workspace where humans and
agents share channels and every action becomes a signed event. You still need
a runtime to plug into it.

## Check each name against its own repository before comparing it

The verification standard was simple. A product counts as real if it has an
official repository or site, a licence you can read in the repo rather than
infer, and evidence of active maintenance. Name collisions are common in this
space, so a matching name attached to an unrelated product would have counted
as not found.

All three cleared it. OpenClaw resolves to
[openclaw/openclaw](https://github.com/openclaw/openclaw), a TypeScript project
whose [LICENSE file](https://github.com/openclaw/openclaw/blob/main/LICENSE)
reads MIT, copyright OpenClaw Foundation. Hermes resolves to
[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent), a
Python project under
[MIT](https://github.com/NousResearch/hermes-agent/blob/main/LICENSE), copyright
Nous Research. Buzz resolves to [block/buzz](https://github.com/block/buzz), a
Rust project under
[Apache-2.0](https://github.com/block/buzz/blob/main/LICENSE), built by Block.

Worth noting for anyone reading licence badges instead of files: GitHub's own
API reports OpenClaw's licence as unrecognised, because the repository ships a
third-party notices file alongside it. The LICENSE file itself is a plain MIT
grant. This is exactly the kind of thing that turns into a wrong sentence in a
comparison article, so read the file.

## Read the LICENSE file instead of the licence badge

| Product | Maker | Licence, read from LICENSE | Language | Latest tagged release seen | Last commit seen |
|---|---|---|---|---|---|
| OpenClaw | OpenClaw Foundation | MIT | TypeScript | v2026.8.1-beta.3, 2026-08-24 | 2026-08-25 |
| Hermes Agent | Nous Research | MIT | Python | v2026.8.19, 2026-08-21 | 2026-08-25 |
| Buzz | Block, Inc. | Apache-2.0 | Rust | desktop-v0.5.18, 2026-08-21 | 2026-08-25 |
| Grok Bot | xAI, under SpaceXAI | Closed, hosted service | Not published | Beta since 2026-08-11 | Not applicable |

None of the three open projects is abandoned. All three shipped code the day
this was checked. Buzz is the youngest by repository age and the most candid
about it: its README ends a list of what it is not with the line "Not finished.
We will tell you what works and what doesn't."

The licence column decides more than which lawyer signs off. It decides what
you are still holding if the project or the vendor changes direction.

| Product | Licence, as read from LICENSE | Who may run and modify it | What you still hold if upstream stops | What the licence never gives you |
|---|---|---|---|---|
| OpenClaw | MIT, OpenClaw Foundation | Anyone, commercial use included | The version you already have, and anyone's freedom to fork it | An operator. You still run the gateway yourself |
| Hermes Agent | MIT, Nous Research | Anyone, commercial use included | The same, plus skills written to an open standard the runtime does not own | Hosting. Every backend on its list is one you arrange |
| Buzz | Apache-2.0, Block | Anyone, commercial use included | The relay and the hash-chain audit crate under it, forkable | A finished product. Its own README puts parts in a not-yet column |
| Grok Bot | No LICENSE to read. A hosted service reached through a subscription | Nobody. You hold access, not a copy | Nothing you can run yourself. Access is an entitlement, not an artefact | A copy, a fork, or a choice of model |

The last column is the one worth sitting with. Three of the four leave you
holding something that keeps working after the relationship ends. The fourth
leaves you holding a habit.

## Separate the two runtimes from the workspace before comparing them

If you take one thing from this article, take this. Buzz is a workspace, not a
runtime. Its README describes a Nostr relay where "every message, reaction,
workflow step, review approval, and git event is a signed event in one log". The
relay is the thing you self-host. The agents run somewhere else and connect in.

The [Buzz README](https://github.com/block/buzz) lists its agent surface
explicitly: a \`buzz-cli\` that speaks JSON in and JSON out for tool calls, and
\`buzz-acp\`, an Agent Client Protocol harness for Goose, Codex, and Claude
Code. That is the tell. Buzz does not bring its own agent loop, it brings an
identity and audit model and lets you point existing harnesses at it.

So the honest framing is that Buzz competes with the place your bots report to,
not with the thing that runs them. If you are replacing Grok Bot outright, your
candidates are OpenClaw and Hermes. If your actual complaint is that you cannot
see what your bots did, Buzz is a better answer than either, and it composes
with both.

## Compare them on the axes you will actually feel

| Axis | Grok Bot | OpenClaw | Hermes | Buzz |
|---|---|---|---|---|
| Who owns the harness | xAI | You | You | You own the relay, harness is external |
| Where data lives | Hosted managed Linux VM | Your machine or your server | Your machine, VPS, or serverless backend | Your relay, Postgres, Redis, object store |
| Model choice | None. No picker for members or admins | Hosted, gateway, or local providers | Any provider, switchable with one command | Set by whichever harness you attach |
| Hosting | Vendor only | Self-host, Docker and Nix paths in repo | Self-host, seven terminal backends | Self-host, or one-click Railway relay |
| Audit trail | No audit view yet | Not documented as a first-class feature | Not documented as a first-class feature | Hash-chain log, core to the design |
| Approval model | Per-action approvals, no rollback | Config-driven, permissive by default | Risk-classified, on by default | Approval gates still being wired up |
| Isolation unit | One shared computer per account | One gateway per operator | Per-session containers available | Per-identity keypair |
| Published price | Yes, via subscription tiers | None published | None published | None published |
| Setup burden | A subscription and an app | An install and a config file | An install and a config file | A relay, a database, and key management |

Read that table as four different answers to one question: what are you willing
to operate? Every row where a self-hosted option looks better is a row where
you have taken on a job.

## OpenClaw runs one operator's gateway on hardware you own

The [OpenClaw README](https://github.com/openclaw/openclaw) is unusually
straight about scope. It describes "a personal AI assistant that runs on your
devices and meets you in the channels you already use" and then adds the line
most comparisons skip: "It is designed for a single operator."

Architecturally the Gateway is the whole product. The docs call it "the single
source of truth for sessions, routing, and channel connections", with the CLI,
web control UI, and companion apps all connecting to it. Skills and plugins
extend it, distributed through ClawHub, and the site claims it can write its own
skills. Model providers are open: hosted, gateway, or local.

The security posture deserves a careful read before you deploy it, and to the
project's credit the [security
guide](https://docs.openclaw.ai/gateway/security) states its own limits plainly.
Host execution ships with approvals effectively off, which the docs defend as
intentional for single-operator use. Sandboxing exists but is opt-in, via
Gateway-in-Docker or per-tool Docker and Podman backends. The line to internalise
is this one: OpenClaw "is not a hostile multi-tenant security boundary for
multiple adversarial users sharing one agent or gateway". The README repeats the
practical version: "Tools run on the host for the main session unless you
configure sandboxing."

That is not a knock. It is the correct design for one person on one machine, and
it is honestly labelled. It does mean that if you were hoping to hand OpenClaw
to five colleagues, you are outside the design.

## Hermes writes its own skills and revises them during use

Hermes is positioned by Nous Research as "the self-improving AI agent". The
[docs](https://hermes-agent.nousresearch.com/docs/) describe a closed learning
loop with "autonomous skill creation" after complex tasks and "skill
self-improvement during use", plus cross-session recall over a full-text search
index and agent-curated memory.

The skills are not a proprietary format. The README states compatibility with
the [agentskills.io](https://agentskills.io) open standard, which means the
procedural memory it builds is portable rather than trapped in the runtime.

Two more things separate it in practice. First, portability of the runtime
itself: the README lists seven terminal backends including local, Docker, SSH,
Modal, Daytona, and Vercel Sandbox, with the serverless ones able to hibernate
between sessions. Second, its approval model is the most developed of the four,
which we come back to below.

If you are picking a Grok Bot replacement on capability parity alone, Hermes is
the closest single-product match: persistent agent, scheduled runs, messaging
platforms as the front end, its own tool set.

## Buzz gives every agent an identity instead of a permission flag

Buzz's core claim, in its own words, is "Agents are members, not bots". You add
an agent to a channel the way you add a person. Each participant, human or
agent, holds a keypair, and every event is signed into one append-only log with
a hash-chain audit crate underneath.

The design consequence is the interesting part. Buzz scopes agents "by identity,
not by permission flags", which is a genuinely different answer to the problem
that Grok Bot's docs describe from the other side. Grok Bot puts every bot on
one shared computer and warns in its own documentation: "Do not use separate
Bots as a security boundary." Buzz makes the separation the primitive.

Be equally clear about what is not finished. The README's own maturity table
puts mobile clients and "workflow approval gates (infra exists, glue still
drying)" in the being-wired-up column, and pushes git hosting and cross-relay
reputation into a column it labels strong opinions, pending code, with the
warning not to plan a compliance programme around it yet. An audit trail that
proves what happened is not the same as a gate that stops it happening. If you
need the gate today, it is not shipped.

## Grok Bot trades three specific things for a managed path

Grok Bot's appeal is real and should not be argued away: you subscribe, you
install an app, and bots run. No relay, no Postgres, no key rotation, nobody
paged when a daemon dies.

The trades are specific, and all three are documented by xAI rather than
inferred. Model choice is gone by design: the docs state that Grok Bot "has no
model picker, for members or admins" and that user or admin choice is not
planned. Isolation is not what most people assume: all bots on an account share
one persistent cloud computer, with browser cookies, signed-in sessions, files,
and command-line credentials shared across them, and deleting a bot does not
remove those. We wrote that up in detail in [what the shared computer really
means for Grok Bot security](/blog/grok-bot-shared-computer-security). And there
is no audit view of bot actions yet.

Platform reach is narrower than people expect too: macOS, Windows, and iPhone on
iOS 18 or later, with no Linux desktop, Android, or iPad client, which we cover
in [Grok Bot supported platforms](/blog/grok-bot-supported-platforms). For a
solo operator that is often irrelevant. For a Linux-first team it ends the
conversation before pricing does.

## Ask who stops the bot, then read all four approval models

This is the axis we care most about, because botskills.sh requires every listing
to declare a boundary: the one action the bot never takes without a human. A
boundary is only worth writing down if the runtime can enforce it.

Hermes has the most complete model of the four. Its [security
docs](https://hermes-agent.nousresearch.com/docs/user-guide/security) document
an approval mode that defaults to \`smart\`, where an auxiliary model
auto-approves low-risk commands, auto-denies genuinely dangerous ones, and
escalates the uncertain middle to a human prompt. Timeouts fail closed. There is
a hardline blocklist that no yolo flag overrides. Container backends skip the
per-command checks on the grounds that the container is the boundary, which is a
coherent position rather than a shortcut.

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

Note \`cron_mode: deny\`. Scheduled runs, the ones nobody is watching, refuse
dangerous commands outright rather than waiting for an approval nobody will
answer. That is the right default and it is worth copying whatever runtime you
end up on.

OpenClaw's approvals exist but start permissive for host execution, and its docs
call them guardrails for operator intent rather than isolation. Buzz's approval
gates are, by its own admission, not finished. Grok Bot has per-action approvals
but with a limit stated in its own docs: "An approval controls the proposed
action. It does not reverse work already completed." Approval is a gate, never
an undo, and that is true on all four.

## Price only what is published, and name what is not

Grok Bot is the only one of the four with a price you can read. Access comes
through a subscription rather than a separate SKU, and the cheapest paid path is
Cursor Pro+ at 60 dollars a month per [Cursor's pricing
page](https://cursor.com/pricing), with Cursor Ultra at 200, Cursor Teams
Standard at 40 per user and Premium at 120 per user, and SuperGrok Plus at 100 a
month on [x.ai/pricing](https://x.ai/pricing). Cursor Hobby and the 20 dollar
Pro tier do not include it. If you already pay for one of the qualifying plans,
your marginal cost is zero, which is the single strongest argument for it. See
[how the Cursor account fits in](/blog/grok-bot-cursor-account-explained) for
the eligibility detail.

For the other three, there is no price to print. OpenClaw's site publishes no
tiers at all. Buzz publishes no paid tiers, and buzz.xyz is currently an
early-access invitation with no pricing on it. Hermes documents an optional Nous
Portal subscription that bundles a model plus web search, image generation, TTS,
and a cloud browser under one login, but the portal pricing page returned a
rate-limit response when checked on 2026-08-25, so no figure is repeated here.
Check [portal.nousresearch.com](https://portal.nousresearch.com) yourself.

What all three self-hosted options share is a cost shape, not a price: an
infrastructure line plus your own token spend, plus the hours you spend
operating it. Grok Bot's shape is a subscription line with an uncapped tail,
since its own docs state "There is no Grok Bot-specific spend cap yet". Neither
shape is cheaper in the abstract. We worked through the arithmetic for solo
operators in [running a one-person company on
bots](/blog/one-person-company-grok-bot).

## The charter outlives whichever runtime you pick

Here is the practical reason not to agonise over this choice. The valuable
artefact is not the runtime, it is the charter: the job, the trigger, the
allowed surface, and the boundary. That text moves between all four with light
edits.

\`\`\`text
bot: pr-review-sentinel
job: review every new pull request in org/repo and post one comment

trigger: pull request opened or updated

may:
  - read the diff, the linked issue, and prior review comments on those files
  - run the existing test command in a container
  - post one comment, findings ranked by blast radius
  - answer follow-up questions in that same thread

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
running. On Hermes it becomes an \`approvals.deny\` pattern plus a scoped tool
set. On OpenClaw it becomes a sandbox config and a channel allowlist. On Buzz it
becomes an identity with a narrow channel membership. On Grok Bot it becomes an
approval setting plus a line in the bot's instructions, with the caveat that the
shared computer means the boundary is only as strong as the credentials already
sitting on that machine. Every listing in our directory carries one, including
[PR Review Sentinel](/bots/pr-review-sentinel) and
[Inbox Triage](/bots/inbox-triage), whose boundary is that it never sends an
email.

## Match your situation to one of the four

Pick Grok Bot if you already pay for a qualifying Cursor or SuperGrok plan, work
on macOS or Windows, and want bots doing real work by Friday. Nobody has to
operate a service. That is worth more than most self-hosting arguments admit.

Pick OpenClaw if you are one person, you want your assistant reachable from the
chat apps you already use, and you want state on your own machine. It is the
best fit of the four for a personal assistant that is genuinely yours, and its
skills and plugins arrive through its own ClawHub marketplace rather than a
general registry.

Pick Hermes if you want the closest self-hosted equivalent to Grok Bot's job
profile, you care about model choice, or you want a runtime that gets better at
your recurring tasks by writing its own skills. Its approval model is the most
mature of the four, which matters if bots run unattended. Something like
[Persistent Bot Memory](/bots/persistent-bot-memory) is a natural fit here.

Pick Buzz if your real problem is visibility and attribution across a team.
Nothing else in this comparison gives an agent its own identity and its own
audit trail as a first-class primitive. Just size the operational work honestly:
a relay, Postgres, Redis, object storage, and a private key per agent that is an
identity rather than a config value.

Read from the other direction, by situation rather than by product, the same
facts point somewhere more specific. Several rows rule an option out, which is
usually the faster decision.

| If this describes you | Pick | The fact that decides it | What you take on |
|---|---|---|---|
| You already pay for a qualifying Cursor or SuperGrok plan and work on macOS or Windows | Grok Bot | Access is included in the plan, so the marginal cost is zero | No model choice, no audit view, and one shared computer behind every bot |
| Your desktops run Linux | Anything but Grok Bot | There is no Linux desktop client, and the docs answer that question with one word | Whichever operating burden the self-hosted choice brings |
| One person, one machine, reachable from the chat apps you already use | OpenClaw | Its README states it is designed for a single operator | A gateway you run, with sandboxing you opt into rather than inherit |
| Five colleagues will share the assistant | Not OpenClaw | Its security guide says it is not a hostile multi-tenant boundary for several adversarial users on one gateway | Separate installs, or Hermes with per-session containers |
| Bots run unattended, on a schedule, while you sleep | Hermes | Its documented default denies dangerous commands in cron mode and fails closed on timeout | Running the backend, and keeping the approval config honest |
| Data has to stay in a jurisdiction you choose | Hermes or OpenClaw | Both are self-hosted. Grok Bot's computer is a hosted managed VM | Infrastructure, updates, and key rotation |
| The open question is who did what, across a team | Buzz | Signed events in one hash-chained log, with identity as the primitive rather than a permission flag | A relay, Postgres, Redis, object storage, and a key per agent |
| You need something that stops an action, not a record that it happened | Hermes now, Buzz later | Buzz's README puts workflow approval gates in the still-being-wired-up column | Living with the gap: an audit trail is not a gate |
| You are building a compliance programme on top of it | None of the four, yet | Buzz's README warns against exactly that, and Grok Bot has no audit view | Manual record keeping until one of them ships it |

## Combine a runtime with a workspace, which is already supported

These are not mutually exclusive, and the projects themselves have stopped
pretending they are. Hermes ships a migration command that reads an existing
OpenClaw install and imports the persona file, memories, user-created skills,
the command allowlist, messaging settings, and allowlisted API keys, with a
dry-run preview. That is a documented \`hermes claw migrate\` path, not a
community script, which tells you how common the move is.

The combination most teams land on is a runtime plus a workspace: run the agents
on Hermes or OpenClaw where you control the model and the sandbox, and report
into Buzz where every action is signed and searchable next to the human
conversation. Buzz's ACP harness already covers Goose, Codex, and Claude Code,
so plugging a runtime in is the intended use rather than a hack. If you are
weighing a fourth self-hosted option, we compared one more in [Rakazo vs Grok
Bot](/blog/rakazo-vs-grok-bot).

The decision that actually matters is not which logo you pick. It is whether the
boundary you wrote down is enforced by the runtime or only by your intentions.
Three of these four can enforce it today. Write the charter first, then let that
answer choose.

**Keep reading:** [Where to Find Grok Bot Setups](/blog/botdirectory-alternatives), [Grok Bot vs n8n](/blog/grok-bot-vs-n8n), [Open Source Bot Runtimes Compared in 2026](/blog/open-source-bot-runtimes).

## Frequently Asked Questions

### Are OpenClaw, Hermes, and Buzz real products?

Yes, all three were verified against primary sources on 2026-08-25. OpenClaw is
at github.com/openclaw/openclaw, MIT licensed to the OpenClaw Foundation and
written in TypeScript. Hermes Agent is at github.com/NousResearch/hermes-agent,
MIT licensed to Nous Research and written in Python. Buzz is at
github.com/block/buzz, Apache-2.0 licensed and built by Block in Rust. Each
licence was read from the LICENSE file in the repository rather than inferred
from a badge, and all three had commits landing on the day of checking, so none
of them is abandoned.

### Which Grok Bot alternative is the closest replacement?

Hermes Agent is the closest single-product match. It covers the same job
profile: a persistent agent with its own tools, scheduled runs, and messaging
platforms as the front end, but self-hosted with full model choice. OpenClaw is
close behind and is the better pick if you want a personal assistant reachable
from your existing chat apps, though its documentation states it is designed for
a single operator. Buzz is not a direct replacement at all, because it is a
workspace and relay rather than a runtime, and it expects you to attach an
external agent harness.

### Can I run these alongside Grok Bot instead of switching?

Yes, and most rosters end up mixed. Grok Bot handles the jobs that need a
managed desktop and where the marginal cost is already covered by a subscription
you pay for. A self-hosted runtime handles anything with a data residency
requirement or a model preference. Buzz can sit underneath as the shared record
if you want signed, searchable attribution across both. Hermes even ships a
documented migration command that imports an existing OpenClaw configuration,
including memories, skills, and the command allowlist, which shows how routine
moving between them has become.

### What should I check before trusting any of these with credentials?

Check who enforces your boundary and whether the enforcement is shipped. Grok
Bot's own docs warn that separate bots are not a security boundary because they
share one computer, and that an approval controls a proposed action without
reversing completed work. OpenClaw defaults host execution to permissive and
documents that it is not a multi-tenant security boundary. Hermes defaults to
risk-classified approvals that fail closed on timeout. Buzz lists workflow
approval gates as still being wired up. Read the security page, not the landing
page, and assume the default is the setting you will actually run.
`,
};
