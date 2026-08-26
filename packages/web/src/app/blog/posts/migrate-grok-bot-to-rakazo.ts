import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Migrating a Grok Bot Setup to Rakazo Without Rewriting It',
  description:
    'To migrate Grok Bot to Rakazo, move the charter first. A field by field map from the Rakazo repo, plus an honest list of what you have to rebuild by hand.',
  date: '2026-08-25',
  category: 'Migration',
  content: `
# Migrating a Grok Bot Setup to Rakazo Without Rewriting It

The thing you spent three weeks tuning is not the runtime. It is the paragraph
that says what the bot does, what a good result looks like, and the one action
it never takes on its own. That paragraph is portable. Almost nothing else is.

This walks the move from Grok Bot to
[Rakazo](https://github.com/elie222/rakazo), an Apache-2.0 licensed,
self-hosted platform that describes itself as an open-source Grok Bot
alternative. Everything below about Rakazo comes from reading the repository at
commit \`337a6c4\` on 2026-08-25: the Prisma schema, the oRPC contracts, and the
docs in \`docs/\`. Everything about Grok Bot comes from
[docs.x.ai](https://docs.x.ai/grok-bot/faq). Both products ship fast, so check
before you rely on any of it.

## The portable part is the charter, not the runtime

Four things survive a runtime change intact, and it is worth naming them
precisely because they are the only things you should try to carry:

The job description. What this bot is for, in plain sentences.

The definition of good output. What the artifact looks like when it worked, and
where it lands.

The boundary. The one action the bot never takes without you.

The schedule intent. "Every weekday morning before I open the laptop" is intent.
\`0 8 * * 1-5\` is an expression of it, and expressions are cheap to rewrite.

Everything else is runtime-shaped. Connectors carry OAuth grants that live in
one vendor's backend and cannot be exported. The execution environment is a
different machine with different installed tools. Approval configuration is
expressed in a schema that does not exist on the other side. None of it moves.

Rakazo agrees with this framing more than it probably realises. Its
teach-by-demonstration output, the \`SkillPlaybook\` type in
[domain.ts](https://github.com/elie222/rakazo/blob/main/packages/contracts/src/domain.ts),
has seven fields: \`whenToUse\`, \`inputs\`, \`steps\`, \`howToCheck\`,
\`whatToReturn\`, \`approvalBoundaries\`, and \`failureHandling\`. That is a charter
with a boundary field in it, stored as structured data. If you already write
setups that way, the migration is mostly copy and paste.

## Decide whether to move before you plan how to move

Most people asking how to do this migration should not do it yet, and a table
is a more honest way to say that than a paragraph. The three real options are
staying put, moving everything, and splitting the roster by job.

| Option | What it costs you | What it buys | Recommend it when |
|---|---|---|---|
| Stay on Grok Bot | A model chosen for you, no spend cap yet, and no audit view yet, all per [teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises) | Nothing to operate. Clients on macOS, Windows, and iPhone | Your bots are personal, your worst case is a wasted morning, and you have no appetite for running Postgres |
| Move the roster to Rakazo | A database, a worker, a sandbox provider, a model bill, and backups that are now your job | Apache-2.0 source, your own run history, your own model choice, per-run token records | You need the records to be yours, or you work on Linux, where the Grok Bot docs say plainly there is no desktop app |
| Split the roster by job | Two setups, two places to look, two failure modes | The hosted product for personal work, the self-hosted one for anything you need a record of | Most rosters, for at least the first quarter |

The third row is the one people skip and the one that usually wins. Migration
risk is not spread evenly across a roster: the bot that drafts your replies has
a worst case of a bad draft, and the bot that touches your books has a worst
case you will remember. Move the second kind first and leave the first kind
where it already works. For the full side by side rather than the mechanics,
[Rakazo versus Grok Bot](/blog/rakazo-vs-grok-bot) is the comparison.

## Map every Grok Bot concept to its Rakazo equivalent

| Grok Bot concept | Rakazo equivalent | What you rebuild |
|---|---|---|
| Bot with instructions and a personality | \`Bot.instructions\`, capped at 20,000 characters in \`CreateBotInput\` | Nothing. Paste it. |
| Routine bound to one bot, 50 per bot | \`Routine\` row: \`name\`, \`prompt\`, \`cron\`, \`timezone\`, \`active\`, \`notify\` | Retype the schedule as cron. No importer exists. |
| Teach-by-demonstration draft skill | \`TaughtSkill\` with a \`SkillPlaybook\` | Re-record, or write the seven playbook fields by hand. |
| One shared cloud computer per account | Team Computer per workspace, or a per-bot computer (\`computerMode\` is \`team\` or \`dedicated\`) | Reinstall tools. Sign in to every browser session again. |
| Connectors and hosted MCP | Composio or Pipedream Connect, remote MCP, OpenAPI, via \`capabilities.install\` | Every OAuth grant, from scratch, one at a time. |
| Inline approvals | An ask block plus \`ActionApprovalRule\` rows | Re-declare each standing rule. |
| No model picker at all | Bring your own credentials through Pi (\`PI_DEFAULT_PROVIDER\`, \`PI_DEFAULT_MODEL\`) | Choose a model, which is now your job. |
| Bot memory | \`MemoryDocument\` plus \`MemoryRevision\` history | Paste the document. \`memory.exportMarkdown\` exists for the reverse trip. |
| Deleting a bot, which leaves shared files and sessions behind | \`bots.remove\`, which takes \`deleteMemories\` and defaults it to false | Decide explicitly what gets purged, because the default keeps the memory documents. |
| Weekly allowance with on-demand overflow | \`usage_records\` rows carrying \`provider\`, \`model\`, \`inputTokens\`, \`outputTokens\` per run | Nothing technical. The bill moves from one subscription line to a provider invoice you assemble. |
| Audit view (not shipped) | \`events\`, \`runs\`, \`external_effects\`, \`usage_records\` tables you own | Write the query yourself. |

The schema rows come from
[schema.prisma](https://github.com/elie222/rakazo/blob/main/packages/db/prisma/schema.prisma)
and the endpoint names from
[rpc.ts](https://github.com/elie222/rakazo/blob/main/packages/contracts/src/rpc.ts).
The Grok Bot column is from
[skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)
and [computer and apps](https://docs.x.ai/grok-bot/computer-and-apps).

## Rebuild the connectors, the computer, and the model choice by hand

Connectors are the real cost, and they are unavoidable. An OAuth grant is a
relationship between a provider and a specific client application. Rakazo is a
different client. Gmail has never heard of it. You will sit through the consent
screen for every tool you connected, and if your organisation gates OAuth
approvals through IT, budget days rather than minutes.

The computer is the second cost. Grok Bot gives every bot on the account a
screen on one shared managed Linux VM, and
[deleting a bot does not remove the shared files or browser sessions](https://docs.x.ai/grok-bot/approvals-security-and-privacy).
Rakazo splits this differently: one Team Computer per workspace by default,
where, per
[docs/computer-runtime.md](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md),
per-bot folders "organize work but are not security boundaries", or a private
computer where the whole workspace belongs to one bot. Same warning on both
sides. Separate bots are not a security boundary. Plan the move as a fresh
machine, because it is one.

The third cost is quieter. Grok Bot has
[no model picker, for members or admins](https://docs.x.ai/grok-bot/teams-and-enterprises).
Rakazo hands you that decision along with the bill. The default in
[.env.example](https://github.com/elie222/rakazo/blob/main/.env.example) points
at OpenRouter, and a bot that was tuned against an unknown fixed model will
behave differently against one you picked. Re-read your outputs for a week.

Here is the inventory, with the question that actually governs your calendar,
which is what you can start before the bot exists:

| What you rebuild | Where it lived on Grok Bot | Where it lands in Rakazo | Can you start it early |
|---|---|---|---|
| OAuth grants | Connectors and hosted MCP | \`connections.begin\`, which defaults its \`connectorId\` to Composio | Yes, and it is the longest queue |
| Signed-in browser sessions | The shared cloud computer | Browser profiles under the portable workspace, rooted at \`.browser-profiles\` on E2B | No. It needs a running computer and a human at the login screen |
| Installed CLI tools | The managed Linux VM | The sandbox image, because packages installed outside the workspace are lost when you change provider | Yes, as a Dockerfile or a setup recipe |
| A model and an API key | Nothing. There was no picker | \`PI_DEFAULT_PROVIDER\` and \`PI_DEFAULT_MODEL\`, or connected credentials | Yes, and do it before you judge any output |
| Standing approvals | Inline approvals | \`ActionApprovalRule\` rows, stored per workspace and per creating user | No. It needs the workspace to exist first |
| The infrastructure itself | Nothing | Postgres, a worker, a sandbox provider, and a backed-up \`DATA_DIR\` | Yes, and it is the long pole for most people |

Two rows there decide the shape of your week. The sandbox provider is a real
fork, covered in
[the sandbox options walkthrough](/blog/rakazo-sandbox-options), and the model
is a capability filter rather than a preference, covered in
[choosing a model for a self-hosted runtime](/blog/rakazo-model-choice). The
repo's runtime doc is blunt that screen operation "still requires a model that
can accept image tool results and reason about screenshots", so a text-only
model quietly removes every browser bot you planned to move.

## Port the charter into a Rakazo bot record

A Rakazo bot takes \`name\`, \`title\`, \`description\`, \`instructions\`,
\`notifyOnFinish\`, \`color\`, and \`computerMode\`. The charter goes in
\`instructions\`. Here is one that survives the trip because it never mentions a
runtime:

\`\`\`text
PR Review Sentinel

Job: every weekday at 08:00 Europe/London, read every pull request opened
against main in the last 24 hours. For each one, post a review comment covering
missing tests, unhandled error paths, and any change to auth or billing code.

Good output: one comment per PR, under 200 words, in the PR thread. Each
finding names a file and a line. If there is nothing to say, say nothing and
post no comment at all.

Boundary: never approve, never merge, never push, never request changes.
Comment only. If a PR touches billing, stop and message me instead of
commenting.

Failure handling: if the GitHub connector errors twice, stop the run and tell
me. Do not retry a third time and do not fall back to the web UI.
\`\`\`

That maps onto our catalog listing for
[the PR Review Sentinel bot](/bots/pr-review-sentinel), and the boundary line is
the same sentence in both places. Contrast it with
[the Inbox Triage setup](/bots/inbox-triage), where the boundary is "never sends
an email". Two different runtimes, one unchanged sentence.

One detail will bite you if you paste that charter into the wrong box. The
new-bot form in both the web and mobile apps collects a name, a title, a
description and a computer mode, then runs \`normalizeCreateBotProfile\`, which
copies the trimmed description into \`instructions\`. Description is capped at
4,000 characters and instructions at 20,000. So a charter longer than four
thousand characters typed into that form arrives truncated, silently, and the
bot behaves like a bot with the last third of its rules missing. Create the bot,
then set the full text through \`bots.update\`, and check the field afterwards.

## Move one bot across five sittings, not one afternoon

Take the sentinel above and follow it all the way through. Five sittings, none
longer than about forty minutes, spread over a week.

Sitting one is the charter, written cold in a text file with the runtime closed.
If you cannot write the boundary sentence without looking at the old bot's
configuration screen, the boundary was never in your charter, it was in the
runtime, and it is about to stop existing.

Sitting two is the bot record. Create it with \`computerMode\` left at its
default of \`team\`, because a private computer is a decision you should make on
evidence rather than nerves. Paste the charter into \`instructions\`, then read it
back inside the product.

Sitting three is exactly one connector. Not the four the old bot had. One,
through \`connections.begin\`, then a manual run from chat with the prompt the
schedule will eventually carry. Read the output in full. It will be wrong in a
way that is about the model rather than the migration, and telling those two
apart is why the connector count is one.

Sitting four is the schedule, created inactive:

\`\`\`json
{
  "botId": "<bot id>",
  "name": "Weekday PR sweep",
  "prompt": "Read every pull request opened against main in the last 24 hours and comment per the charter. If there is nothing to say on a PR, post nothing.",
  "cron": "0 8 * * 1-5",
  "timezone": "Europe/London",
  "active": false,
  "notify": true
}
\`\`\`

\`active\` defaults to false in \`CreateRoutineInput\`, and here you are setting it
deliberately rather than relying on the default. Fire it once with
\`routines.testRun\`, read the run, then flip \`active\` to true.

Sitting five is the following Monday, reading what the schedule produced without
you. Day one of a migrated bot looks like a slightly worse version of the bot
you had, because the model changed and your charter was tuned against one you
never got to see. Day thirty looks different in a way the old runtime could not
show you: \`usage_records\` has thirty days of provider, model and token counts
attached to run ids, so "is this bot worth its cost" stops being a feeling.

## Routines carry over as data, connectors do not

Rakazo's export endpoint, \`export.bot\`, returns an \`ExportManifest\`: a version
number, an \`exportedAt\` timestamp, the bot's name, title, description and
instructions, its memory documents as path and content pairs, its files, its
message history, and its routines reduced to \`name\`, \`prompt\`, \`cron\` and
\`timezone\`. No credentials. No connections. That shape is the migration thesis
written into a type: the parts a vendor cannot hold hostage travel as text, and
the parts tied to an account do not travel at all.

Three details in the handler matter before you rely on it. The export throws
unless the bot has both a thread and a computer, so a bot you never attached to
a machine cannot be exported at all. File contents are decoded as text, which
makes this a text export rather than a disk image. And thread history is paged
in blocks of 500 messages rather than truncated, so a long-running bot travels
whole and the document is large.

Note the direction. I found \`export.bot\` in the RPC contract and no matching
import endpoint anywhere in it, across twenty-one top-level namespaces. As of
the commit I read, export is a one-way door out, not a migration tool in.
Creating the bots on the far side is manual, through \`bots.create\` and
\`routines.create\`.

## The approval line is the single most portable artefact you own

Every runtime models permissions differently. Grok Bot surfaces approvals inline
and warns that
[an approval controls the proposed action and does not reverse work already completed](https://docs.x.ai/grok-bot/approvals-security-and-privacy).
Rakazo stores standing rules as \`ActionApprovalRule\` rows with an \`effect\` of
\`always_allow\` or \`require_approval\`, matched by tool, connector, or category.
Neither configuration is portable. Both are downstream of a sentence.

"Never sends anything to a customer" survives every migration you will ever do,
because it is a statement about the job rather than about the tool list. It also
survives the case that actually catches people out: a tool the runtime does not
classify as dangerous. Rakazo's
[action-approval.ts](https://github.com/elie222/rakazo/blob/main/packages/core/src/action-approval.ts)
exempts \`shell\` and \`write_file\` from approval entirely, so a bot with computer
access can do plenty without ever showing you a card. The written boundary is
the control that still holds there, which is why every listing in our catalog
declares one, and why it is the first field to copy across.

The migration-specific trap is the day you arrive with zero rules configured.
The resolver returns allow when no rule matches, so a brand new workspace is the
most permissive state your bots will ever run in, and it is exactly the state
you are in on the afternoon you finish reconnecting everything. Set your two or
three standing rules before the first schedule goes active, not after.

## Migrations fail in six ways, and four of them are silent

| Symptom | Cause | Fix |
|---|---|---|
| The bot ignores a rule that was in your charter | Charter pasted into the new-bot form's description, truncated at 4,000 characters | Re-set \`instructions\` through \`bots.update\` and read the stored field back |
| The schedule never fires | \`active\` defaults to false on \`routines.create\` | Set it explicitly, then confirm with \`routines.testRun\` before you wait a day |
| The schedule fires an hour off | \`timezone\` defaults to UTC, and an unrecognised zone string falls back to UTC rather than erroring | Set a real IANA zone, then check the stored \`nextRunAt\` against your own clock |
| Browser steps fail while shell and file steps work | The connected model cannot accept image tool results, which screen work requires | Move that bot to a vision-capable model before blaming the migration |
| A tool the old runtime installed is missing | Packages installed outside the portable workspace do not survive a provider change | Represent machine setup as an image or a setup recipe, not as commands you once ran |
| An action ran that you expected to be asked about | No approval rule matched, and the resolver allows when nothing matches | Create the standing rules first, and keep the boundary sentence in the charter regardless |

Four of those six produce no error message anywhere. That is the real hazard of
this migration: nothing crashes, the bot simply becomes a slightly different bot
than the one you thought you moved, and you find out from its output three weeks
later.

## Prove the move landed with three checks that can fail

Feeling migrated is not the same as being migrated. Three checks, each of which
can come back wrong.

Check the deployment you are actually looking at. Rakazo's \`.env.example\`
carries a \`GIT_SHA\` variable and notes that \`GET /health\` returns it as
\`revision\`, so you can confirm the commit running behind the tab you have open.
If that value does not match what you deployed, stop, because everything else
you are about to verify is about a different build.

Check that the schedule fired by itself rather than because you poked it. Both
paths write a run with \`trigger\` set to \`"routine"\`, so the trigger column
cannot tell them apart. What can is the event stream: a scheduled wake appends a
\`routine.fired\` event carrying the routine id and the timestamp it was scheduled
for, and a test run does not. Query \`events\` for that type on the morning after
you activate the schedule. Zero rows means your bot has not actually started.

Check the cost before you have thirty bots. Sum \`inputTokens\` and
\`outputTokens\` from \`usage_records\` grouped by \`botId\` for the last seven days,
against a number you wrote down in advance. It is the check people skip, and the
only one whose failure arrives as an invoice.

## Answer the objection that this is retyping with extra steps

The strongest argument against everything above: you are describing a manual
rebuild, dressed up with the word migration. There is no importer, no format,
and no tooling. You retype the charter, reconnect the accounts, and rewrite the
cron. Where is the migration?

That is fair, and the honest answer is that the retyping is not the cost. Four
sittings out of five in the plan above are work you would do anyway on any
platform, and the fifth is reading output. What actually costs you is the part
no importer would fix: OAuth consent screens, browser logins, installed tools,
and a model swap that changes behaviour in ways nothing reports. An importer
would move the rows and leave every one of those untouched.

Where the objection wins outright is at scale. If you run twenty bots with four
connectors each, the reconnection queue is eighty consent screens, and there is
no version of this that is a good afternoon. In that case the split-the-roster
row in the decision table is not a compromise, it is the answer: move the bots
whose records you need and leave the rest alone until there is a reason.

## Where a charter-first migration stops working

The charter-first framing has a domain, and here is its edge.

It fails for bots whose value is in a recorded demonstration rather than
written instruction. A \`TaughtSkill\` carries a recording of pointer and key
events plus snapshots alongside its playbook, and none of that crosses. You
re-record on the new machine, against the new machine's browser sessions.

It fails for anything that depended on the old computer's state. A bot that
worked because someone once logged into a portal, installed a CLI, and left a
credential in a shell history is not carrying a charter, it is carrying a
machine, and machines do not migrate.

It gets complicated in a shared workspace. Approval rules are stored per
workspace and per creating user, and routine updates resolve against the
creating user while deletes and test runs resolve against the workspace. A
migration done by one person produces rules and routines with one person's name
on them, which is fine for a solo operator and awkward for a team of four.

And it fails, in the way most worth saying out loud, for anyone treating the
move as a fix for a bot that was not working. A charter that produced mediocre
output on a hosted runtime produces mediocre output on a self-hosted one, now
with a database to back up. Fix the bot first, on whatever it currently runs on,
and move a bot that works.

## Verify my claims yourself, because I could not run the migration

I read the repository. I did not run a migration end to end, and I have no
access to a Grok Bot account, so nothing here is a report of a completed move.

I found no documented cap on routines per bot in Rakazo's schema or its create
contract, but absence in the code I read is not proof of absence in the product.
I did not find an import endpoint, a Grok Bot export format, or any tooling that
converts between them, and I would not expect one to exist. Rakazo describes
itself as being in beta, which is the correct reason to test on a throwaway
workspace first.

To verify the current state: clone the repo, run \`git log -1\` to see what you
have, then read \`packages/db/prisma/schema.prisma\` and
\`packages/contracts/src/rpc.ts\`. Those two files answer most questions about
what the product can actually store and do, faster than any article.

## Move in an order that fails safely

Move one bot, not the roster. Pick the one whose worst failure is embarrassment
rather than money, which is the same advice as
[running a one person company on bots](/blog/one-person-company-grok-bot).

Write the charter first, before touching connectors, and read it back cold. If
the boundary sentence is missing, you have found the thing your old setup was
relying on the runtime to enforce, and it will not be enforced the same way on
the far side.

Then connect exactly one tool, run the bot manually, and read the output
yourself. Then add the schedule, with \`active\` left false until the manual run
looks right. Then, and only then, do the second bot. The failure you are
avoiding is a fleet of half-migrated bots firing on schedules nobody has
reviewed, against credentials granted in a hurry.

The adjacent job you will hit within a week of the first bot landing is the
schedule itself, because a self-hosted routine has defaults and edge cases the
hosted one hid from you, and those are worked through in
[the guide to Rakazo routines](/blog/rakazo-routines).

For what to check once the logs start accumulating, see
[Rakazo permissions and audit logging](/blog/rakazo-permissions-audit).

**Keep reading:** [Self-Hosting Rakazo](/blog/rakazo-self-hosting-guide), [Bot Boundaries](/blog/grok-bot-boundaries), [The Chief of Staff Bot](/blog/grok-bot-chief-of-staff-setup).

Related: [Bots and Product Analytics](/blog/bots-and-mixpanel).

## Frequently Asked Questions

### Can I export a Grok Bot and import it into Rakazo?

No automated path exists as of 2026-08-25. Rakazo's RPC contract has an
\`export.bot\` endpoint returning a manifest with instructions, memory, files,
history and routines, but no matching import endpoint, and I found no Grok Bot
export format to feed it. Migration means recreating each bot through
\`bots.create\` and each schedule through \`routines.create\`, then reconnecting
every integration by hand. Treat the charter text as the thing you carry and
the rest as setup work you redo on the new side.

### What actually transfers when you migrate Grok Bot to Rakazo?

Four things: the job description, the definition of a good result, the boundary
line, and the schedule intent. All four are prose you wrote, so they paste
cleanly into a Rakazo bot's \`instructions\` field, which accepts up to 20,000
characters. What does not transfer is every OAuth connection, the state of the
cloud computer including installed tools and signed-in browser sessions, and any
approval configuration, because the two products model permissions with
completely different schemas.

### Does Rakazo give each bot its own isolated computer?

Only if you choose that mode. Rakazo's bot record carries a \`computerMode\` of
\`team\` or \`dedicated\`. In team mode, bots share one workspace computer, and the
project's own runtime documentation says the per-bot folders organize work but
are not security boundaries. That mirrors the Grok Bot warning that separate
bots are not a security boundary. If a bot handles credentials you do not want
other bots reaching, put it on its own computer deliberately.

### Do I have to pick a model when I move to Rakazo?

Yes, and it is a real change. Grok Bot documents that there is no model picker
for members or admins, so the model is decided for you. Rakazo brings your own
credentials through Pi, and its example environment file ships an OpenRouter
default. That hands you both the choice and the token bill. A charter tuned
against one model will behave differently against another, so read a week of
output closely after the switch rather than assuming parity.
`,
};
