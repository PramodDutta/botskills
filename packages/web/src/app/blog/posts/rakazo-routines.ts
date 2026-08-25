import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Rakazo Routines: Automations You Can Read and Edit',
  description:
    'Rakazo routines are rows in a Postgres database you run, not files. Every field explained, how a run really fires, and the one query you should keep handy.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Rakazo Routines: Automations You Can Read and Edit

I went into [the Rakazo repository](https://github.com/elie222/rakazo) expecting
to find automations stored as files you could commit and review. They are not.
A routine is a row in a Postgres table, and saying otherwise would be the kind
of tidy claim that falls apart the first time a reader opens the schema.

What is true is narrower and still useful: the row lives in a database you run,
with seven fields you can read, and the prompt the bot executes is stored in
plain text in a column you can query. Everything below comes from reading the
repo at commit \`337a6c4\` on 2026-08-25.

## A routine is seven columns, not a file

The \`Routine\` model in
[schema.prisma](https://github.com/elie222/rakazo/blob/main/packages/db/prisma/schema.prisma)
maps to a table called \`routines\`. It carries \`name\`, \`prompt\`, \`cron\`,
\`timezone\`, \`active\`, \`notify\`, plus \`lastRunAt\` and \`nextRunAt\` bookkeeping,
and foreign keys to a workspace, a bot, and a user.

That distinction matters more than it sounds. A file-based automation gets code
review, a diff, and a blame history for free. A database row gets none of those
by default. What it does get, once you self-host, is that the row is on your
disk rather than inside somebody else's product. You can \`SELECT\` it. You can
capture it in the \`pg_dump\` that
[docs/self-host.md](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)
wires into \`./scripts/backup.sh\`. You can pull it out through the \`export.bot\`
endpoint, which reduces each routine to \`name\`, \`prompt\`, \`cron\` and \`timezone\`
in an export manifest.

So the honest version of the pitch is: not readable as a file, readable as data
you own. If you want diffs and review, you build that yourself by exporting on a
schedule and committing the result. Nobody is doing it for you.

## Read the seven fields as seven decisions

| Field | Type | Default | What it decides |
|---|---|---|---|
| \`name\` | string, 1 to 80 chars | none | The label you will see in a list of schedules. Nothing else reads it. |
| \`prompt\` | string, min 1 char | none | The exact text handed to the bot when the routine fires. This is the automation. |
| \`cron\` | string | none | A cron expression, or the literal \`@once\` for a one-shot. |
| \`timezone\` | string | \`UTC\` | The zone the cron expression is evaluated in. |
| \`active\` | boolean | \`false\` | Whether it fires at all. Off by default. |
| \`notify\` | boolean | \`true\` | Whether you get told when it finishes. |
| \`lastRunAt\` / \`nextRunAt\` | timestamps | null | Bookkeeping the scheduler owns. Do not hand-edit these. |

Two of those defaults are worth pausing on. \`active\` defaults to false, from
\`CreateRoutineInput\` in
[domain.ts](https://github.com/elie222/rakazo/blob/main/packages/contracts/src/domain.ts),
which means a routine you create is inert until you switch it on. That is the
right default and it catches people out constantly. If your schedule has never
fired, check this column before you debug anything else.

\`timezone\` defaults to UTC. If you are in London in August, a routine you meant
for 09:00 fires at 10:00 local. There is a \`routines.testRun\` endpoint that
returns a \`runId\`, so you can trigger one on demand rather than waiting an hour
to find out.

The timezone field has a sharper edge than the default. Rakazo validates a zone
by trying to format a date with it and falling back to UTC when that throws, so
\`Europe/Londn\` does not error, it becomes UTC. A typo in that column is a
one-hour bug in summer and a silent one all year.

## Know what each preset compiles to before you pick one

[cron.ts](https://github.com/elie222/rakazo/blob/main/packages/core/src/cron.ts)
uses the \`croner\` library and offers a fixed set of presets. Knowing what each
one compiles to saves you reverse engineering the UI:

| Preset | Cron produced |
|---|---|
| Every hour | \`0 * * * *\` |
| Every day at 9:00 AM | \`0 9 * * *\` |
| Weekdays at 9:00 AM | \`0 9 * * 1-5\` |
| Every week | \`0 9 * * 1\` (Mondays) |
| Every month | \`0 9 1 * *\` (the 1st) |
| Interval, n minutes | \`*/n * * * *\` |
| Interval, n hours | \`0 */n * * *\` |
| Interval, n days | \`0 0 */n * *\` |
| Advanced, left blank | \`*/3 * * * *\` |
| One shot | \`@once\` |

The Advanced fallback is the one to watch. Choose Advanced, leave the box empty,
and you get a routine that fires every three minutes. On a bot with a cloud
computer and a paid model, that is an expensive typo, which is the same argument
made in [the case against every-five-minutes scheduling](/blog/grok-bot-scheduling).

Two more rules live in that file rather than in any UI. A cron expression must
have exactly five fields, and \`nextCronDate\` throws a range error saying so if
you hand it six, which is what happens when you copy a schedule from a system
that includes seconds. And an interval given in seconds is rejected outright
with "minimum interval is 1 minute", so the smallest schedule you can build is
one fire per minute.

## Two creation paths disagree about whether a schedule starts on

There are two ways a routine gets created, and they choose opposite defaults.
This is the single most surprising thing in the whole area.

| Behaviour | \`routines.create\`, the human path | \`schedule_create\`, the bot's own tool |
|---|---|---|
| \`active\` at creation | False unless you pass true | Always true |
| \`notify\` at creation | True by default | Always true |
| \`nextRunAt\` | Computed only when active | Computed and live immediately |
| One-shot schedules | Rejected while active, with "One-shot schedules must be created from chat." | Supported, via \`runAt\`, \`delayMinutes\` or \`delaySeconds\` |
| Approval card shown | Not applicable, a person did it | None. The tool is approval-exempt |

Read the last two rows together. A schedule you create through the interface
starts switched off and cannot be a one-shot; a schedule the bot creates for
itself starts switched on and can be. That is a defensible design, because a
person clicking Create is mid-thought and a bot calling the tool has been asked
for a reminder, but it means the inert-by-default safety you are relying on
applies to exactly half of the routines in your table.

## Pick the cadence from what the work needs, not what feels safe

Every schedule decision people get wrong is a mismatch between the shape of the
work and the shape of the clock. Cost is linear in fires, so this table is also
your bill.

| If the work is | Choose | Because | Watch for |
|---|---|---|---|
| Tied to a working day | Weekdays at a fixed hour | Nobody reads a Saturday report, and you still pay for it | Monday's run carries three days of backlog. Say so in the prompt |
| A digest you read once | Every day at a fixed hour | One artifact, one reading slot, one cost | The UTC default silently moves it |
| Watching for a change you cannot predict | An interval in hours | Hours cost a twenty-fourth of what minutes cost and catch almost the same changes | Anything under an hour needs a reason you can say out loud |
| A single dated reminder | One shot, created from chat | It retires itself and stops costing anything | It cannot be reactivated once it has fired |
| Reconciliation against a closed period | Every month on the 1st | The data is only complete after the period ends | The 1st lands on a weekend in roughly two months out of seven |
| Genuinely event-driven | None of these | A routine is a clock, not a listener | You are building a poll and paying per poll |

The last row is the one worth arguing with yourself about. Most "every five
minutes" schedules are really an event listener written in the wrong shape, and
the honest fix is either a longer interval with a wider lookback in the prompt,
or an integration that pushes.

## Follow one wake-up from scheduled job to queued run

The interesting code is \`wakeRoutine\` in
[executor.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/executor.ts),
and it is more careful than most schedulers I have read.

It loads the routine and bails immediately unless the routine is still active
and its \`nextRunAt\` matches the timestamp the job was scheduled for. Then it
computes the next occurrence, honouring the routine's timezone, and claims the
run inside a transaction with a conditional update on the same three conditions.
If that update touches zero rows, another worker already took it and this one
stops. That is how a duplicated wake-up job fails to produce a duplicated run.

Once claimed, it creates a \`Task\` and a \`Run\` with \`trigger\` set to
\`"routine"\`, both queued. A one-shot sets \`nextRunAt\` to null and flips
\`active\` to false, so it retires itself. There is one deliberately odd branch:
if the stored cron cannot be parsed, which the comment attributes to rows
created before validation was added, the already-due run fires once and then the
invalid schedule is paused rather than retried forever.

The claim is also reversible. The continuation job is enqueued before the thread
is signalled, and if that enqueue throws, the code deletes the queued run and
task and restores the routine's previous \`nextRunAt\`, \`active\` and \`lastRunAt\`
so a retry can fire the same slot again. That is the difference between a
scheduler that drops a run on an infrastructure hiccup and one that does not.

The run is a first-class record with a \`trigger\` column, which means "what did
my schedules do this week" is a query rather than a scroll. Compare Grok Bot,
where [the app keeps the 20 most recent run records per routine](https://docs.x.ai/grok-bot/skills-routines-and-automations).
Twenty runs is four days of a six-hourly routine.

## List every schedule you own in one query

This is the practical payoff of routines being rows. One query, every bot, every
schedule, sorted by what fires next:

\`\`\`sql
SELECT b.name        AS bot,
       r.name        AS routine,
       r.cron,
       r.timezone,
       r.active,
       r."nextRunAt",
       r."lastRunAt",
       left(r.prompt, 80) AS prompt_head
FROM routines r
JOIN bots b ON b.id = r."botId"
ORDER BY r.active DESC, r."nextRunAt" NULLS LAST;
\`\`\`

Run that on a Monday and you will find the routine you disabled in June and
forgot, the two that fire within a minute of each other against the same
connector, and the one whose prompt still says "last week" when the schedule
moved to daily. Rakazo also indexes routine prompts in its search endpoint, so
\`search.query\` will find a routine by a phrase in its prompt, which is the fast
way to answer "which schedule is emailing this person".

Two columns deserve a second look while you are in there. A row where \`active\`
is true and \`nextRunAt\` is null is a schedule that believes it is on and has
nowhere to go next. A row where \`lastRunAt\` is weeks behind \`nextRunAt\` is a
schedule whose worker has not been running, which is a self-hosting problem
rather than a routine problem.

## Own the run history, and own the problem of capping it

Grok Bot's model is documented and tight. A routine assigns a workflow to one
bot, there is a ceiling of 50 routines per bot, only the 20 most recent run
records are kept per routine, deleting a bot deletes its routines, and nothing
is stored at team level. On iPhone you can
[pause and resume only](https://docs.x.ai/grok-bot/mobile).

Rakazo's routines also hang off a single bot, and the Prisma relation cascades
on bot delete, so that part is the same. What differs is everything downstream.
Run history is a \`runs\` table with no documented cap. Routine creation, update
and firing each append an event to the \`events\` table, per
[events.ts](https://github.com/elie222/rakazo/blob/main/packages/contracts/src/events.ts).
And I found no per-bot routine ceiling in either the schema or the create
contract, though the absence of a limit in code I read is weaker evidence than a
documented number.

The trade is real in both directions. A hosted product enforcing a 50-routine
cap has thought about what happens at 500. A database you own has not, and the
first person to find out is you.

There is a permissions asymmetry in the same area that is easy to trip over on a
shared workspace. Updating a routine resolves against the workspace and the
creating user, so a colleague editing your schedule gets an isolation error.
Deleting one and test-running one resolve against the workspace alone, so the
same colleague can delete it outright. Edit is narrower than delete, which is
the opposite of what most people assume.

## The bot can schedule itself, and nobody gets asked

This is the finding worth the price of admission. Rakazo exposes
\`schedule_create\`, \`schedule_list\` and \`schedule_cancel\` as builtin tools the
model can call, supporting repeating cron, an \`every\` plus \`unit\` interval, or a
one-shot via \`runAt\`, \`delayMinutes\` or \`delaySeconds\`. And in
[action-approval.ts](https://github.com/elie222/rakazo/blob/main/packages/core/src/action-approval.ts),
all three sit in the approval-exempt list.

So a bot can give itself a recurring wake-up without an approval card. That is
defensible, because a schedule is not itself a side effect, and the work it
eventually does still passes through the normal approval path. It is also a
thing you should know before you leave a bot running, and it is the reason the
schedule query above belongs in your weekly routine rather than your incident
response.

The detail that sharpens it: a routine created by that tool is written with
\`active\` true and \`notify\` true, with its \`nextRunAt\` already computed, and its
wake-up job enqueued in the same call. There is no draft state and no
confirmation step. If the enqueue fails, the code deletes the row, or failing
that flips it inactive, specifically so it will not leave a live schedule
behind. Every one of those rows lands in the same \`routines\` table as yours, so
the query above is the whole audit surface.

One useful guard already exists: schedule tools are filtered out of group
threads, so a bot working inside a multi-bot group cannot create schedules
there.

## Routines fail in eight ways, and the silent three cost the most

| Symptom | Cause | Fix |
|---|---|---|
| Never fired, no error anywhere | \`active\` defaults to false on the human create path | Set it explicitly, then confirm with \`routines.testRun\` |
| Fires an hour out, all summer | Timezone typo falls back to UTC instead of erroring | Use an exact IANA name, then read back \`nextRunAt\` |
| Fires every three minutes | Advanced preset chosen with the expression box left empty | Set a real five-field expression, or pick a named preset |
| Create rejected, five-field error | A six-field cron copied from a system that includes seconds | Drop the seconds field |
| "One-shot schedules must be created from chat." | An active \`@once\` sent through \`routines.create\` | Ask the bot for the reminder in chat instead |
| A fired one-shot will not switch back on | One-shots cannot be reactivated after they run | Create a new routine. The old row is a record, not a template |
| A colleague gets an isolation error editing a schedule | Update resolves against the creating user | Recreate it under the account that should own it |
| Runs pile up on top of each other | Nothing in the wake path checks whether the previous run finished | Widen the interval past the worst-case run time |

The first three are the expensive ones because none of them produces an error.
Two of them look like nothing happening, which people debug slowly, and the
third looks like everything working, which people debug only when the bill
arrives.

## Verify a routine fired on its own, not because you poked it

Here is a check that can genuinely fail, and it catches the most common false
confidence in this whole area.

\`routines.testRun\` creates a run with \`trigger\` set to \`"routine"\`, which is
exactly what a scheduled wake-up writes. So the trigger column cannot tell you
whether your schedule works. A test run proves the prompt and the connectors
work; it proves nothing about the clock.

The thing that separates them is the event stream. A scheduled wake appends a
\`routine.fired\` event with the routine id and the timestamp it was scheduled
for. A test run does not. So the morning after you activate a schedule:

\`\`\`sql
SELECT e."createdAt", e.payload
FROM events e
WHERE e.type = 'routine.fired'
  AND e."createdAt" > now() - interval '24 hours'
ORDER BY e."createdAt" DESC;
\`\`\`

Zero rows means your schedule has not started, whatever the run list suggests.
Creation and update also leave \`routine.created\` and \`routine.updated\` events
behind, so the same table answers when a schedule was switched on and by which
run. Do this once, on the first schedule you build, and you will trust the rest
for the right reason.

## Answer the objection that a row is worse than a file in git

The strongest argument against Rakazo's design here: a folder of YAML files
under version control beats a database row every time. You get diffs, review,
blame, rollback, and a pull request before a schedule changes. A row gets you
none of that, and this article has already conceded it.

I think that is right, and the concession has limits. Files give you history of
the definition. Rows give you a query across every bot at once, which a folder
of files does not, and the run and event history sits in the same database as
the definition rather than in a separate log product. Ask "which schedules fired
against the Gmail connector last week and what did each one cost" and the file
version has to join against something else to answer.

The pragmatic answer is that you can have both, cheaply: run \`export.bot\` on a
schedule, commit the manifest, and you get diffs on the definitions without
giving up the queries. What you cannot get is enforcement. Nothing stops a
change landing before review, and if your team needs that gate, this is the
wrong tool and you should say so before you adopt it rather than after.

## Where a routine is the wrong tool for the job

Four cases, where the answer is not a better cron expression.

Event-driven work. The routine contract offers a cron string or a one-shot time
and nothing else, so anything that should react to a webhook becomes a poll with
a lookback window. That works, and it costs you a fire every interval whether or
not anything happened.

Anything faster than a minute. Intervals in seconds are rejected outright. If
your work needs sub-minute reaction, a routine is not a slow version of what you
want, it is a different thing.

Work that outlives its bot. Routines cascade-delete with the bot they belong to,
so deleting a bot silently takes its schedules with it. If the schedule matters
more than the bot, that is a strong argument for keeping the bot archived rather
than deleted.

Long jobs on short intervals. The wake path claims the next occurrence and
queues a run without checking whether the previous run has finished, so a
fifteen-minute job on a ten-minute interval stacks. Measure the worst run, not
the median, and set the interval from that.

## Write the prompt so a quiet day is not a failure

The prompt column is the whole automation, and the common failure is a prompt
that only makes sense on a day with news. Write the empty case in:

\`\`\`text
Read every page on the watch list and compare it against yesterday's snapshot.

Report only material changes: price, plan names, plan limits, or a new or
removed product. Ignore blog posts, banners, copy edits, and cookie notices.

If nothing material changed, reply with exactly: "No changes." Do not pad the
report, do not summarise what stayed the same, and do not raise the sensitivity
on your own to find something to say.

Boundary: read public pages only. Never fill in a form, never create an account,
never sign in, and never contact the company. If a page needs a login, skip it
and note that it was skipped.

If a page fails to load twice, skip it and list it under "Could not check".
\`\`\`

That is close to the setup we publish for
[Competitor Pricing Watch](/bots/competitor-pricing-watch), and the boundary
sentence is doing the load-bearing work. A scheduled bot runs when you are not
watching, so the line it must not cross has to be in the prompt rather than in
your head. The same holds for a standup bot posting to
[your own DM instead of a shared channel](/bots/standup-scribe): the schedule is
harmless, the destination is not.

Two habits make prompts survive the calendar. Write the lookback window into the
text, so "since your last run" beats "yesterday" the week you change the
cadence. And name the empty result explicitly, because a bot with nothing to
report and no permission to say so will find something, and what it finds will
be noise you then have to read every morning.

If you are moving schedules across from another runtime, the intent transfers
and the cron string does not, which is covered in
[migrating a Grok Bot setup to Rakazo](/blog/migrate-grok-bot-to-rakazo).

**Keep reading:** [Schedules vs Event Triggers](/blog/grok-bot-routines-vs-triggers), [Choosing a Model for Rakazo](/blog/rakazo-model-choice), [Rakazo Permissions and Audit Logging, Explained](/blog/rakazo-permissions-audit).

## Frequently Asked Questions

### Are Rakazo routines stored as files you can version control?

No. A Rakazo routine is a row in a Postgres table called \`routines\`, with
columns for name, prompt, cron, timezone, active and notify. There is no file on
disk to commit, and no built-in diff or review flow. What you can do is export a
bot through the \`export.bot\` endpoint, which returns each routine's name,
prompt, cron and timezone, and commit that manifest yourself. Versioning is
available to you, but it is something you build rather than something the
product hands you.

### Why has my Rakazo routine never fired?

Check the \`active\` column first. New routines default to inactive, so a routine
created through the API without explicitly setting \`active\` to true will sit
there indefinitely without firing or erroring. The second thing to check is
\`timezone\`, which defaults to UTC and will shift a morning schedule by an hour
or more depending on where you are. Use the \`routines.testRun\` endpoint to fire
one on demand instead of waiting for the next scheduled slot.

### Can a Rakazo bot create its own schedule without asking me?

Yes. The builtin tools \`schedule_create\`, \`schedule_list\` and \`schedule_cancel\`
are on the approval-exempt list in Rakazo's action approval module, so a bot can
add a recurring or one-shot schedule for itself with no approval card shown. The
work that schedule later performs still passes through the normal approval
checks. Schedule tools are filtered out of multi-bot group threads. Review your
routines table regularly rather than assuming every schedule was created by a
person.

### How many routines can one Rakazo bot have?

I found no cap in the Prisma schema or in the routine creation contract as of
the commit I read, which is weaker evidence than a documented limit and could
change. Grok Bot, by contrast, publishes a ceiling of 50 routines per bot and
keeps only the 20 most recent run records for each. If you are self-hosting,
treat the absence of a limit as your problem rather than a feature, and keep a
query that lists active schedules so the count stays something you know.
`,
};
