import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Rakazo Permissions and Audit Logging, Explained',
  description:
    'How Rakazo permissions really work: which tools pause for approval, which never do, and the tables that give you an audit trail you own and can query.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Rakazo Permissions and Audit Logging, Explained

Grok Bot's own documentation says an audit view of Bot actions
[does not exist yet](https://docs.x.ai/grok-bot/teams-and-enterprises). That one
line is the strongest argument for self-hosting that exists, because a service
running on your own Postgres writes rows you can query today, with no roadmap
involved.

So I went and checked whether [Rakazo](https://github.com/elie222/rakazo)
actually writes them, rather than assuming that self-hosted implies logged. It
does, in more detail than I expected, and the approval model has a default that
you need to know about before you leave anything running. Everything here comes
from the repository at commit \`337a6c4\`, read on 2026-08-25.

## Separate the two systems that both answer to the word permissions

Rakazo has two separate mechanisms, and conflating them is how people end up
surprised.

The first is a static classification: is this tool consequential? That lives in
\`toolRequiresApproval\` in
[action-approval.ts](https://github.com/elie222/rakazo/blob/main/packages/core/src/action-approval.ts).

The second is your stored rules: given this tool, should we pause? That is
\`resolveActionApproval\`, reading \`ActionApprovalRule\` rows from the database.

Reading
[executor.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/executor.ts),
the gate that actually pauses a run is the second one. The classification feeds
the idempotency key and some bookkeeping, but the pause happens when
\`resolveActionApproval\` returns "ask". And that function returns "allow" when no
rule matches the tool at all.

Read plainly: on a fresh workspace with no approval rules configured, nothing
stops to ask you. Approvals are opt-in. The settings screen ships two one-click
presets, both \`require_approval\` on a category, one for \`email\` and one for
\`purchase\`, and until somebody clicks one of those or writes a rule by hand,
the rule set is empty.

I am describing code at one commit, not a support statement, and this is exactly
the kind of thing that changes. Check it on your own install before you trust
it: create a bot, connect one connector, and see whether a send action stops.

## Expect the computer tools to run without ever asking you

The classification list is explicit, which is a good sign in itself. Three
builtin tools always count as consequential: \`destination.write\`, \`delete_bot\`
and \`archive_bot\`.

The exempt list is longer and more interesting: \`computer_observe\`,
\`computer_act\`, \`list_files\`, \`read_file\`, \`write_file\`, \`shell\`, \`open_path\`,
\`launch_app\`, \`remember\`, \`request_takeover\`, \`run_subagent\`, \`spawn_bot\`,
\`schedule_create\`, \`schedule_list\` and \`schedule_cancel\`.

\`shell\` and \`write_file\` are on that list. So is \`spawn_bot\`. The approval
system governs connectors and a short list of builtins. It does not govern the
computer. A bot with a sandbox can run commands and write files without an
approval card ever appearing, which is a defensible design when the sandbox is
the boundary, and a dangerous surprise if you assumed approvals covered
everything.

The design intent is visible in the runtime docs: the sandbox is the containment
layer, and
[docs/computer-runtime.md](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)
is direct that per-bot folders on a shared Team Computer "are not security
boundaries". If you want a bot's shell isolated from another bot's browser
sessions, give it its own computer. Do not rely on the approval list to do it.

## A rule that names shell does not create a shell approval

The exempt list does more than skip the classifier, and the order of operations
is the part worth reading twice. In \`resolveActionApproval\`, the exempt check
runs first and returns "allow" immediately, before a single stored rule is
loaded or compared.

So a rule of kind \`tool\`, value \`shell\`, effect \`require_approval\` does
nothing at all. The resolver returns before it reaches your rules, and the same
holds for \`computer_act\`, \`write_file\`, \`open_path\` and everything else on that
list. That is a stronger statement than "allowed by default": there is no
configuration that makes them pause.

\`spawn_bot\` is the one to sit with. A bot that can spawn bots can stand up a
worker whose charter you did not write, and the creation is not an approvable
event. The new bot resolves against the same rule set, so it is neither more nor
less constrained than its parent. Nothing announces it either way.

Read the exempt list as the definition of what the sandbox is for. Everything on
it is contained by the computer boundary or not contained at all, which is why
the runtime doc's line about per-bot folders not being security boundaries is a
sentence to act on rather than note.

## Classify connector tools by verb, and treat the unknown as mutating

Connector tools are not enumerated, because nobody can enumerate the tool
catalogue of every integration provider. Rakazo classifies them by name instead.

| Pattern in the tool name | Treated as |
|---|---|
| \`get\`, \`list\`, \`search\`, \`find\`, \`read\` | Read only |
| \`send\`, \`create\`, \`delete\`, \`pay\`, \`charge\`, \`publish\`, \`merge\`, \`post\` and fifty-seven verbs in total | Mutating |
| Compound names joined by \`_and_\`, \`_or_\`, \`_then_\` | Mutating |
| Anything not matching the read-only set | Mutating |

That last row is the good one. The default is fail-closed: an unrecognised tool
name is treated as consequential rather than waved through. Category rules add a
layer on top, with \`email\` matching Gmail and Outlook connectors and \`purchase\`
matching Stripe, Shopify, PayPal and Square, so a category rule keeps working
when a connector adds a tool you have never seen.

Two details in that matching change how you write rules. The mutating test runs
first, so a name carrying both kinds of verb, something like
\`search_and_replace\`, lands on the mutating side. And both tests match whole
underscore-delimited segments, so a camelCase name like \`gmail_getMessages\`
never registers as read-only and is treated as consequential, which is the safe
direction to be wrong in.

The category layer has a real edge, and it is why the preset is a floor rather
than a ceiling. For a connector outside those two slug sets, category matching
falls back to a name test: mail has to look like sending mail. A consequential
tool named \`postmark_message_send\` clears the mutating test and still fails the
email category test, because nothing in that name reads as mail. If your sending
runs through anything other than Gmail or Outlook, add a connector rule instead
of trusting the preset.

## Resolve rule conflicts by specificity, and watch which button writes a rule

An \`ActionApprovalRule\` row is an \`effect\` of \`always_allow\` or
\`require_approval\`, plus a \`matchKind\` of \`tool\`, \`connector\` or \`category\`,
plus a value. Rules are unique per workspace and creating user.

Conflicts resolve by specificity, not by order: tool beats connector beats
category. Within the winning tier, any \`require_approval\` rule wins over
\`always_allow\`. So a category rule of "ask before email" plus a tool rule of
"always allow \`gmail_send_draft\`" gives you the narrow exception without
unpicking the broad rule, which is the right shape for this.

When a run does pause, the card is built by
[approval-ask.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/approval-ask.ts).
It offers three answers: allow once, always allow this tool, deny. It shows a
one-line summary and a detail block drawn from the recipient, subject, title,
collection, amount and body arguments, truncated at 500 and 4,000 characters,
and run through a secret redactor first so a token in a tool argument does not
land in your chat history.

Note what "always allow this tool" does: it writes an \`always_allow\` rule of
kind \`tool\` for that workspace and user, permanently. It is a settings change
dressed as a button, and it is worth knowing that before a colleague clicks it
at 6pm to unblock themselves.

## Approval rules belong to whoever created them

This is the finding most likely to bite a team, and it is not in the interface
copy. The executor loads rules filtered on both the workspace and the run's
user, and the table's uniqueness constraint runs over workspace, creating user,
effect, match kind and match value. Rules are per person.

Your presets do not cover a colleague's bots. Two people in one workspace, both
connected to the same Gmail account, can have entirely different pause
behaviour, and neither sees the other's rules in their own settings panel. The
panel's copy says these preferences "apply across all your bots", which is
exactly true and very easy to read as all bots.

There is no admin tier above this, because there is no workspace-wide rule at
all. The hosted alternative does not have one yet either: a team ceiling where
"members can choose a stricter option, but not a looser one" is described in the
Grok Bot documentation as
[coming soon rather than shipped](https://docs.x.ai/grok-bot/teams-and-enterprises).
Neither product enforces your policy for you today.

So this is an onboarding step, not a setting. When somebody joins the workspace,
they click the presets themselves, on their own account, before they connect
anything.

## Decide your rules before you connect the first account

Five situations cover almost everything, and each has a rule shape that fits it.
The last row is the one people expect to be a rule and cannot be.

| What you want to stop | The rule to create | What that rule still does not cover |
|---|---|---|
| Mail leaving the building | The shipped email category preset | Sending through providers other than Gmail and Outlook, unless the tool name itself reads as sending mail |
| Money moving | The shipped purchase category preset | Billing tools on providers outside Stripe, Shopify, PayPal and Square |
| One connector you do not trust yet | A \`connector\` rule on that provider, require approval | Nothing on other connectors, and it deliberately leaves that connector's read calls running |
| One specific action, everything else fine | A \`tool\` rule, require approval, matching the exact tool name | Every other tool on the same connector, including near neighbours |
| Shell, file writes, spawning bots | No rule exists that does this | Containment here comes from giving the bot its own computer, not from approvals |

Order matters more than coverage. Create the rules before the connector, not
after, because the gap between connecting an account and configuring the rule
is a window in which a scheduled run can fire.

## Treat the effect ledger as the record that outlives the thread

The ledger is not conditional on approvals, which is what saves a workspace with
no rules in it. When the resolver returns allow but the tool is classified
consequential, the executor records the effect and skips only the card. The
honest summary of a default install is that it watches everything and stops
nothing.

The reverse limit matters when you go looking. Read-only tools get no effect row
at all, because the executor skips the write for builtin read tools and for
connector tools flagged read-only. This is a record of what changed the world,
not of what the bot looked at. "What did this bot read" is an events table
question.

Before a consequential tool runs, Rakazo writes an \`ExternalEffect\` row with
status \`intended\` and a unique idempotency key derived from the run, the tool
name and the arguments. The status then moves through \`approved\`, \`executing\`,
and finally \`completed\`, \`denied\` or \`uncertain\`. The request payload and the
result are both stored as JSON on the row.

\`uncertain\` is the status that shows someone thought about this properly. If a
worker dies mid-execution, the effect is not replayed, because replaying it
might send the same message twice. It is marked uncertain and the model is told
the outcome is unknown and that it should verify the destination before
proposing anything else. That is the correct answer to a genuinely hard problem,
and it is the same problem behind the Grok Bot warning that
[an approval does not reverse work already completed](https://docs.x.ai/grok-bot/approvals-security-and-privacy).

The effect ledger is also the thing that survives housekeeping. Clearing a
thread deletes that thread's messages and its event rows, per
[events.ts](https://github.com/elie222/rakazo/blob/main/packages/db/src/events.ts).
Effects hang off runs rather than off messages, so they are still there
afterwards. Deleting the bot is different: runs cascade from the bot, and
effects cascade from runs, so the ledger for that bot goes with it. What remains
is a \`bot_deletions\` tombstone recording the bot's name, who deleted it, when,
and whether memories were preserved.

## Match the question you will ask to the table that answers it

Six tables carry the trail, and they answer different questions:

| Table | Answers |
|---|---|
| \`events\` | What happened, in order. Per thread, sequenced, typed, with a JSON payload and a run id. |
| \`runs\` | Who or what started this, and how did it end. Includes \`trigger\`, model provider and id, status, error, start and finish times. |
| \`external_effects\` | What touched the outside world, with the request, the result, and the approval outcome. |
| \`usage_records\` | What it cost, by provider, model, input and output tokens. |
| \`memory_revisions\` | What the bot learned, and which run taught it. |
| \`bot_deletions\` | What was removed, by whom, and whether memory survived. |

The event types are named in
[events.ts](https://github.com/elie222/rakazo/blob/main/packages/contracts/src/events.ts)
and include \`agent.tool.called\`, \`effect.recorded\`, \`effect.reconciled\`,
\`usage.recorded\`, \`routine.fired\`, \`memory.revised\`, \`bot.spawned\`,
\`bot.deleted\`, and the computer takeover trio of requested, granted and
released.

A record is useful when it answers a question you will actually ask under
pressure. The four that matter: what did this bot do on Tuesday, what did it
send outside the building, what did that cost, and who approved it. The schema
above answers all four. What it does not do is answer them for you.

## Follow one email send from intent to stored row

Abstractions hide the interesting parts, so here is a single send, with the
email preset already turned on by the user who owns the run.

The bot calls a Gmail send tool with a recipient, a subject and a body. The
classifier sees a tool that is not exempt, is not one of the three required
builtins, arrives through a connector, and carries \`send\` as a whole segment,
so it is consequential. The resolver derives \`gmail\` as the connector kind,
matches the email category rule because Gmail is in the email slug set, and
returns "ask".

An \`external_effects\` row appears at status \`intended\`, carrying the arguments
as its request JSON and an idempotency key built from the run, the tool name and
those arguments. The run moves to \`waiting_input\`, the card renders, and a
notification fires titled with your bot's name and the words "needs approval".

Then one of three things happens. Deny writes \`denied\` and nothing executes.
Allow once writes \`approved\`, the run returns to \`queued\`, the worker claims the
effect into \`executing\`, the send runs, and the row lands on \`completed\` with
the provider's response stored as result JSON. Always allow this tool does all
of that and additionally upserts an \`always_allow\` rule of kind \`tool\` for that
exact tool name.

That third option is where a careful setup quietly ends. Tool beats category, so
from the next run onwards this send does not pause, while the preset stays in
the settings list looking exactly as active as before. If you take one habit
from this article, make it the monthly read of that list, deleting every
\`always_allow\` entry nobody can justify.

## Verify the gate with a test that is allowed to fail

Configuration you have not tested is a belief. The test is small: connect the
account, turn on the rule, then ask the bot in a scratch thread to send one
message to your own address and watch for the card. Do it as each person who
runs bots, because rules are per user, and do it with the tool you actually use
rather than a similar one, because category matching depends on the connector
slug and the tool name.

A test that cannot fail is not a test, so here is what failure looks like and
what each version means.

| Symptom | Cause | What to do |
|---|---|---|
| It sent, and no card ever appeared | No rule matched, and an unmatched tool resolves to allow | Create the rule under the account that owns the runs, then repeat the send |
| It asked the first time and never again | Somebody chose "always allow this tool", which wrote a permanent tool rule | Remove that entry in the Action confirmations list, then repeat the send |
| The card shows a tool name and nothing else | The detail block is assembled from six argument keys only: collection, title, to, subject, amount and body | Never approve on the summary alone. Open the effect row and read the request JSON |
| A shell command ran with no prompt | Shell is on the exempt list, which is checked before any rule | Nothing to configure. Move that bot to its own computer |
| The email preset is on, but a send went through | The connector is outside the Gmail and Outlook slugs and the tool name does not read as sending mail | Add a connector rule for that provider |
| An effect is stuck at \`uncertain\` | A worker died between claiming the effect and completing it, and replay could duplicate the action | Check the destination system by hand before you let the bot retry anything |

The third row is the one worth rehearsing. An approval card whose detail block is
empty is asking you to authorise an action you cannot see, and the correct answer
to that prompt is deny, followed by a look at the row.

## Set retention yourself, because nothing prunes it for you

Grok Bot decides retention for you and publishes the number: the app keeps
[the 20 most recent run records per routine](https://docs.x.ai/grok-bot/skills-routines-and-automations).
You cannot extend that. You also cannot forget to.

On your own Postgres, nothing is deleted unless you delete it. I found no
scheduled pruning of events, runs or effects in the code I read, beyond removing
transient progress events after a run and the thread-clear path above. That is
freedom and it is also a growing table. Decide three things on day one: how long
you keep effect rows, whether the backup job in
[docs/self-host.md](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)
covers them, and who is allowed to run a delete against them.

The security posture around the data is worth checking at the same time. Rakazo
requires \`BETTER_AUTH_SECRET\` and \`ENCRYPTION_KEY\` to be real values and refuses
placeholders outside development, and its README states that connector
credentials are encrypted on the server and never returned by the API. Your
backups now contain that database, so they inherit its sensitivity.

## Run one query a week, or read the ledger for the first time during an incident

This is where most self-hosted audit stories quietly fail. The rows accumulate,
nobody queries them, and the first read happens during an incident, which is the
worst possible time to discover what is not in the payload.

Rakazo's RPC contract has \`usage.list\` and \`usage.summary\`. I did not find a
packaged audit view for effects or events in it, so reading the trail means SQL
or your own dashboard. There is an \`OTEL_EXPORTER_OTLP_ENDPOINT\` and a
\`LOG_LEVEL\` in the example environment file if you already run a collector.

Start with one weekly query and actually run it:

\`\`\`sql
SELECT b.name          AS bot,
       e.kind          AS tool,
       e.status,
       e."createdAt",
       r.trigger,
       e.request ->> 'to'      AS recipient,
       e.request ->> 'subject' AS subject
FROM external_effects e
JOIN runs r ON r.id = e."runId"
JOIN bots b ON b.id = r."botId"
WHERE e."createdAt" > now() - interval '7 days'
  AND e.status IN ('completed', 'denied', 'uncertain')
ORDER BY e."createdAt" DESC;
\`\`\`

Three columns tell you almost everything: what left the building, whether it was
approved, and whether any run ended \`uncertain\`. A single \`uncertain\` row is
worth a manual check in the destination system, because by definition nobody
knows whether that action landed. The same habit applies whatever runtime you
are on, which is the argument in
[bot observability](/blog/bot-observability).

## A log nobody reads loses to a prompt nobody can skip

The strongest argument against this whole article is not that the tables are
missing. It is that they are the less useful half of the problem.

A prompt changes what happens. It arrives at the moment of the action and costs
the bot its next move, whether or not anybody is watching the system generally.
A ledger changes only what you can find out afterwards, and only if somebody
looks. The realistic rate at which people run an unprompted weekly query against
their own infrastructure is not high, and a record nobody opens has done nothing.

Held against the code, that objection lands. A default install writes an
excellent account of every consequential action and interrupts none of them. If
you are one person running two bots, the interruption is worth more than the
ledger, and the right reading of this article is that the two preset buttons
matter more than everything after them.

The ledger earns its place in three situations, all of which people arrive in
rather than plan for. When something has gone wrong and the question is blast
radius, a chat thread will not answer it and a table will. When more than one
person runs bots against shared connectors, per-user rules make the record the
only account of what the workspace as a whole did. And when somebody outside the
room needs an answer, a query result is a form they accept.

State it plainly, because self-hosting is usually sold as the safer choice. On
this axis, out of the box, it is the less safe one: it hands you the record and
removes the interruption. Both halves are available. One is a click and the other
is a habit, and the click is the one missing on day one.

## The boundary the tool list cannot express

Approval rules match on tool names. Real boundaries are about consequences, and
consequences do not map cleanly onto tool names. "Never edit the live books" is
not a tool. Nor is "report internally, never contact the customer". A bot can
cross either line using tools that every classifier on earth calls read-only,
followed by one write that looks routine.

That is why every listing in our catalog declares one boundary in plain words
and puts it in the charter itself, where the model reads it on every turn. For
[the Bookkeeping Auditor](/bots/bookkeeping-auditor) it is that the live books
are never edited. For [the Email Purger](/bots/email-purger) it is that nothing
is deleted or unsubscribed until you approve the whole list. Write it like this:

\`\`\`text
Boundary: you never edit, post, or reconcile anything in the accounting system.
You read, you compare, you produce a list of proposed corrections with the
account, the amount, and the reason for each one. I apply them.

If a correction looks urgent, that changes nothing about this rule. Flag it as
urgent in the list and stop.
\`\`\`

Two properties make that line work. It names an action rather than an attitude,
so the model can tell whether it is about to break it. And it pre-answers the
excuse, because "it was urgent" is the reason a bot talks itself across a line.
Pair it with a \`require_approval\` rule so the runtime backs up the prose, and
read the effect ledger weekly so you find out when neither of them held.

The permissions layer and the written line do different jobs, in the same way
that a schedule and its prompt do, which is the subject of
[Rakazo routines](/blog/rakazo-routines).

**Keep reading:** [Grok Bot Permissions Explained](/blog/grok-bot-permissions-explained), [Why Grok Bot Needs a Cursor Account and Every Way To Get Access](/blog/grok-bot-cursor-account-explained), [Grok Bot Scheduling](/blog/grok-bot-scheduling).

## Frequently Asked Questions

### Does Rakazo ask for approval before a bot sends an email?

Only if a matching approval rule exists. In the code I read, the pause is driven
by stored \`ActionApprovalRule\` rows, and when no rule matches a tool the
resolver returns allow, so a workspace with no rules configured does not stop.
The settings screen offers two one-click presets that create a require-approval
rule for the email category and the purchase category. Turn one on before you
connect a mail account, then verify with a test send rather than assuming the
default protects you.

### Which Rakazo tools never trigger an approval prompt?

The exempt list in Rakazo's action approval module covers the computer and
scheduling tools: observing and acting on the screen, listing, reading and
writing files, running shell commands, opening paths, launching apps, storing
memory, requesting takeover, spawning subagents and bots, and creating, listing
or cancelling schedules. In other words, approvals govern connectors and three
builtins, not the sandbox. Containment for shell and file access comes from
giving the bot its own computer rather than from the approval system.

### Does Rakazo keep an audit log I can actually query?

Yes. It writes to six tables in the Postgres database you run: events, runs,
external effects, usage records, memory revisions, and bot deletions. Effects
carry the request, the result, an approval status and a unique idempotency key,
so you can reconstruct what touched the outside world and whether it was
approved. There is no packaged audit view in the RPC contract that I could find,
so reading the trail means writing SQL or pointing your own dashboard at the
database.

### How long does Rakazo keep audit records?

For as long as you do. I found no scheduled pruning of events, runs or effects
in the code, beyond clearing transient progress rows after a run, so retention
is a decision you make rather than one the product makes for you. Clearing a
thread deletes that thread's messages and events but leaves the effect ledger,
because effects hang off runs. Deleting a bot cascades its runs and effects
away, leaving only a tombstone row recording the name, who deleted it and when.
`,
};
