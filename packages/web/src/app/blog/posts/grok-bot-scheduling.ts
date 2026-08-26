import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Scheduling: Daily, Weekly, and Triggered Runs',
  description:
    'Set a Grok Bot schedule that survives timezones, overlapping runs and silent failures: trigger types, cron style thinking, and the intervals to never use.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Grok Bot Scheduling: Daily, Weekly, and Triggered Runs

A bot that only runs when you open the app is a chat window with extra steps.
The scheduling layer is what turns a good charter into a standing job, and it
is also where most people quietly lose a week: the brief arrives at 3am, the
same report gets written twice, or the routine stops firing and nobody notices
for eleven days.

This is how to think about triggers, what each type is genuinely good for, and
the four failure modes that account for almost every "my bot stopped working"
complaint.

## Every run has a cause, and there are only four

Every run has a cause. There are only four, and picking the wrong one is the
root of most scheduling pain.

A schedule trigger fires on the clock. Daily at 07:30, every weekday, the
first Monday of the month. The bot does not know or care whether there is
anything to do; it wakes up, looks, and reports. As of writing, xAI's
automation options cover the usual shapes (once, daily, weekdays, weekly,
monthly, yearly) evaluated in a timezone you choose, but check the current
list in the app rather than trusting any article, including this one.

An event trigger fires when something happens somewhere else. An email arrives
matching a filter, a pull request opens, a row lands in a table, a message
posts to a channel. The bot runs because reality changed, which means it never
runs for nothing.

A manual run fires because you told it to, right now. Not a lesser category:
manual is correct for anything you do irregularly but repeatedly, and it is
always right for the first two weeks of a new bot's life, while you are still
reading every output.

A chained run fires because another run finished, and it is different from the
other three because it is usually not a setting you switch on. A routine
assigns a workflow to one bot, so you build chaining from the two things you do
control: a shared file and a gap on the clock. The upstream job writes
\`/state/reconciliation-2026-08.json\` at 09:00 and stops. The downstream job
starts at 09:20, reads that file, and exits if it is missing or its timestamp
is not from today. That twenty minute gap does the work a dependency graph
would do elsewhere, and the exit rule is what stops the second job reporting on
last month's data forever.

## Match each trigger type to the work it is actually good at

| Trigger type | Good fit | Failure mode to expect |
|---|---|---|
| Daily schedule | Morning briefs, digests, overnight change reports | Fires in the wrong timezone, or reports nothing new for weeks and you stop reading it |
| Weekday schedule | Standups, pipeline reviews, anything tied to a working week | Silently useless on public holidays, and fires on days you are away |
| Weekly schedule | Reconciliation, content planning, metric reviews | Too coarse to catch a problem early, so it becomes a post-mortem rather than a warning |
| Monthly schedule | Invoicing checks, subscription audits, access reviews | Month-end collides with the same day every tool runs its own batch jobs |
| Event trigger | Inbound email, new PR, new form submission, channel message | The matching rule silently stops matching after someone renames the label or channel |
| Manual run | New bots, irregular work, anything with real consequences | Never gets run, so the bot decays into a bookmark |
| Chained run | A second job that only makes sense once the first produced a file | The upstream job fails, the downstream one runs anyway and reports stale data as fresh |
| High frequency polling | Almost nothing | Overlapping runs, duplicated work, rate limits, and a bill you did not plan for |

## Borrow cron's discipline without typing a cron expression

You will probably never type a cron expression into a bot runtime, but the
discipline behind cron is still the right discipline. Three questions, in
order, before you set any schedule.

What is the natural period of the underlying work? Not how often you would
like an update, the actual rhythm of the thing. Invoices settle weekly.
Support volume swings daily. A competitor's pricing page changes maybe twice a
year. Matching the schedule to the work's period is most of the job.

What is the latest acceptable time for the output to be useful? A standup
summary at 09:05 for a 09:00 standup is worthless. Work backwards from the
deadline, add slack for a slow run, and set the trigger there. Fifteen minutes
of buffer costs nothing and saves the whole output.

What does the bot do when there is nothing to report? Decide explicitly. "Say
nothing" produces clean inboxes and silent failures that hide for weeks.
"Always report, even if the report is one line saying nothing changed" costs
two seconds a day and turns absence into a signal you notice. For anything you
rely on, pick the second.

## Price each cadence by what it costs per useful finding

Those three questions narrow the field. This table picks the winner, because
the honest unit is not runs per month, it is what you spend to learn one thing
you did not already know. Your subscription includes an allowance that resets
weekly, anything past it is charged on demand against model and token cost, and
no Grok Bot specific spend cap exists as of writing. A cadence mistake draws
that allowance down daily until you notice.

| Cadence | Runs per month | Findings per hundred runs | Deadline it can hit | Recommendation |
|---|---|---|---|---|
| Event trigger | As often as reality changes | Close to 100, since it only fires on a change | Minutes after the change | Default whenever the source emits events |
| Hourly | About 720 | Low single digits for business data | Within the hour | Only for a source with no events and a same-day deadline |
| Daily | 22 on weekdays, 30 otherwise | Moderate and predictable | Next morning | Right for briefs, digests, inbox passes |
| Weekly | 4 or 5 | High, since a week of change is a report | Start of next week | Best for reviews, metrics, settled reconciliation |
| Monthly | 1 | Highest per run, highest stakes if it fails | The following month | Billing, access reviews, subscription audits |
| Chained | Follows the upstream job | Upstream's rate, minus its failures | Upstream finish plus your gap | Only with an exit-if-the-file-is-missing rule |
| Manual | Whatever you remember | Very high while you still read every output | Whenever you sit down | Weeks one and two of every new bot |

The third column is why hourly polling feels productive and is not. Ninety-plus
runs in every hundred find nothing, and each still costs tokens, touches the
connected tool, and pushes an older run record out of history.

## Name the timezone in three places or the brief arrives at 3am

This is the single most common scheduling bug, and it has three variants.

The first is the obvious one: you set 07:00 while travelling, or your account
timezone is not the timezone you live in, and the brief lands at 3am forever.
Always name the timezone explicitly in the charter text as well as in the
schedule setting, so that when you read the charter six weeks later the
intended behaviour is written down.

The second is subtler. Daylight saving moves your local clock but not
necessarily the underlying schedule, and the two regions you care about do not
switch on the same date, so for a few weeks each spring and autumn a bot
coordinating with another country is an hour off. The next section works that
one through in full.

The third is the one that bites reporting. Your bot fires at 07:00 local and
asks a tool for "yesterday". Which yesterday? The tool's account timezone may
be UTC, or the company default, or whatever the person who set it up picked in
2019. Numbers that do not reconcile between two dashboards are very often two
different definitions of a day. Write explicit date ranges in the charter
instead of relative words:

\`\`\`text
// GOOD
Pull all orders with created_at between 2026-08-24T00:00:00+01:00
and 2026-08-24T23:59:59+01:00. State the range you used in the report.

// BAD
Summarise yesterday's orders.
\`\`\`

Asking the bot to state the range it used turns an invisible mismatch into a
line you can read.

## Follow one weekly report through a full year of clock changes

Abstract advice about daylight saving never survives contact with a real
routine, so here is one worked through.

You are in London, your contractor is in Kolkata, and your largest customer
reads the same report in New York. The routine is Monday 08:00 Europe/London,
which felt obvious because it is your Monday morning. Three regions, one
setting, four different behaviours across the year, because the United States
moves its clocks on 8 March 2026 and 1 November 2026 while the United Kingdom
moves on 29 March 2026 and 25 October 2026, and India never moves at all.

| Period in 2026 | London 08:00 equals | New York sees | Kolkata sees | What you notice |
|---|---|---|---|---|
| 1 Jan to 7 Mar | 08:00 UTC | 03:00 EST | 13:30 IST | The baseline everyone agreed to |
| 9 Mar to 27 Mar | 08:00 UTC | 04:00 EDT | 13:30 IST | The report drifts an hour later for New York only, for three weeks |
| 30 Mar to 23 Oct | 07:00 UTC | 03:00 EDT | 12:30 IST | New York returns to normal, Kolkata moves an hour earlier for seven months |
| 26 Oct to 30 Oct | 08:00 UTC | 04:00 EDT | 13:30 IST | The March gap repeats for one week in the other direction |
| 2 Nov onwards | 08:00 UTC | 03:00 EST | 13:30 IST | Back to the baseline, having moved four times |

Nobody did anything wrong here and the schedule was never edited. It is the
relationship between three zones that moves, four times a year, on different
dates for different people.

Two cheap fixes come out of it. Anchor the schedule to the timezone of whoever
the deadline belongs to: if the report exists so New York can read it before
their 09:00, set the routine in America/New_York and let your Monday morning
float. Then make the bot print the conversion. A line reading
\`Generated 2026-03-30 07:00 UTC for the week 2026-03-23 to 2026-03-29\` at the
foot of every report turns all four transitions into something you can see
rather than something you deduce from a complaint.

## Stop reaching for every five minutes, you wanted an event trigger

The instinct is understandable. You want to know quickly, so you set a short
interval. Four things then go wrong at once.

Runs overlap. If the job takes seven minutes and fires every five, run two
starts while run one is still driving a browser. That contention is real: all
bots on an account share one persistent cloud computer, with browser cookies
and signed-in sessions shared across them, and each bot gets its own screen
rather than its own machine.

Work gets duplicated. Run one drafts a reply to the new email. Run two started
before run one finished writing its notes, sees the same email as new, and
drafts it again. Two drafts. Had that action been a send, two sends.

You hit rate limits. Every connected tool has a ceiling, and a bot polling
several tools aggressively finds several ceilings. The symptom is not a clean
error, it is a run that returns partial data and reports confidently on it.

The bill moves. High frequency polling burns compute on the overwhelming
majority of runs where the answer is "nothing changed".

The fix is almost always the same: you did not want a short interval, you
wanted an event trigger. "Tell me within a minute when a customer emails about
cancelling" is an event, not a schedule. Wire it to the arrival of the email
and it fires exactly as often as reality demands, which is the whole point.

If you truly need polling because the source has no events, poll at the
coarsest interval that still meets your deadline, and add a guard to the
charter:

\`\`\`text
// WHERE YOU STOP
Before starting, check /state/last-run.json for the last processed id.
Process only items newer than that id, then write the new id back.
If a previous run is still in progress, do nothing and exit.
Never process the same item twice.
\`\`\`

That state file is doing the job a queue would do in a real system, and it is
worth the four lines.

## Learn the shape of a routine that fails without telling you

A routine that crashes is a good day: you get an error, fix a connector, move
on. The expensive version keeps producing something, so nothing looks broken,
while the thing it was watching stopped being watched weeks ago. Six shapes
account for nearly all of it.

| What you see | What actually happened | Fix |
|---|---|---|
| The report arrives, nearly identical week after week | The source stopped updating, or the bot re-reads an export nobody refreshed | Make it state the source's own timestamp, and stop if that is not from this period |
| One section has quietly been empty for a month | One connector lost authorisation while the others held, and empty reads like calm | Require it to name every source it read and every source it could not read |
| Runs complete cleanly and act on zero items | The label, channel, or saved view the filter keys on was renamed upstream | Report candidates considered as well as items acted on. Zero considered is a broken filter |
| Nothing arrives, and you assume a quiet week | The routine is paused, or the bot that owned it was deleted, taking its routines with it | Require a message on every run, so silence becomes evidence rather than ambiguity |
| Something is wrong and the run history tells you nothing | Run history holds twenty records per routine as of writing, so a daily job's evidence lasts under three weeks | Make the output itself the archive. No audit view of bot actions exists yet |
| It looks fine on your phone and produces nothing | On iPhone you can pause and resume only, while editing, history, and testing need desktop | Check from desktop before concluding anything about a routine you touched on mobile |

The fourth row has a structural cause rather than a bug. Routines belong to a
single bot and nothing about them is team-level, so deleting a bot you thought
was redundant takes its schedule with it. Nobody is notified. The only thing
that changes in your week is that a message stops arriving.

## Diagnose a quiet routine by asking whether it ran at all

Failures are not exceptional; they are Tuesday. A connector's authorisation
expires, a page redesigns, a login gets challenged, an export times out. The
question is not how to prevent that but how you find out.

Check three things when a routine has gone quiet, in this order. Is the routine
still enabled, and does the bot that owns it still exist? Are its connectors
still authorised, or did a password change upstream revoke them silently? Does
the run history show a failed run, or no run at all, which are two very
different diagnoses.

A failed run means the trigger fired and the work broke. No run at all means
the trigger never fired, which points at the schedule, the timezone, the
enabled flag, or account access being paused. There is a longer list of
symptoms and fixes in
[the Grok Bot troubleshooting reference](/blog/grok-bot-troubleshooting).

One habit makes the rest survivable, and it is not the heartbeat, which you
already have. It is treating a test run as a real run. If the routine can send,
post, or purchase, testing it will send, post, or purchase, so the boundary
goes in before you press test rather than after.

## Break one run on purpose before you trust the schedule

A schedule that has never failed in front of you is a schedule you have not
tested. You tested the happy path, which was never the risk.

Do this once on a read-only routine, in the week before you start relying on
it. Rename the file, folder, or saved view the routine depends on so the source
it expects is genuinely gone, then run it manually and read what arrives.

Three outcomes, one pass. A message naming the missing source and stopping is
a pass. Silence is a fail, because every future failure will now look identical
to a quiet week. A normal-looking report with one section quietly empty is the
worst result, because the routine is now capable of being confidently wrong on
a schedule, and no successful run would ever have shown you that.

Rename the source back and run again. It should recover without you touching
the charter; if it does not, the routine has hidden state and you want to know
in August rather than November. Then trigger it twice within a few minutes and
confirm the second run does not repeat the first, which is the state file
earning its keep, and open the run history on desktop to confirm both runs were
recorded.

## Write the schedule into the charter, not just the settings panel

Do not leave the timing only in a settings panel. Put it in the charter too, so
the bot's own brief describes when and why it wakes up:

\`\`\`text
You are my Morning Brief.

// WHEN YOU RUN
Every weekday at 06:45 Europe/London. Not on weekends.
If a run is missed, do not backfill. Run the next scheduled slot
and note in the brief that yesterday's run did not complete.

// WHAT YOU OWN
Read my calendar for today, my inbox since 17:00 yesterday, and the
#launches channel since 17:00 yesterday.
Write one brief, under 200 words, in three parts:
  TODAY: meetings, with any that have no agenda flagged.
  NEEDS ME: emails or messages that will get worse if ignored today.
  CHANGED: anything that moved overnight that I did not already know.
State the exact time range you covered at the bottom.

// WHAT GOOD LOOKS LIKE
Specific. Names, amounts, and deadlines, not "several items need
attention". If a section is empty, write "nothing" rather than
padding it. Always send the brief, even if all three sections
are empty.

// WHERE YOU STOP
Never reply to an email, message a channel, accept or decline an
invite, or move a meeting. Read and report only.
If a connector is not authorised, say which one and stop.
Never guess at content you could not actually read.
\`\`\`

The last block is why this is safe to leave running unattended. A brief bot
that can also reply is a brief bot that can embarrass you at 06:45 while you
are asleep. Catalog listings carry the same line as a required field: the
[Chief of Staff Briefing bot](/bots/chief-of-staff-briefing) never sends,
schedules, or acts externally without approval, and the
[Standup Scribe bot](/bots/standup-scribe) posts only to your own DM. Why that
line is structure rather than politeness is argued in
[the one-person company playbook](/blog/one-person-company-grok-bot).

## Stagger the week so five bots do not arrive as one blur

Schedules compete. Five bots all firing at 07:00 produce five notifications
you skim as one blur, and they compete for the same connectors at the same
moment. Stagger them, and give each slot a purpose.

| Slot | What runs | Why there |
|---|---|---|
| Weekdays 06:45 | One morning brief | Before you open anything, so it frames the day |
| Weekdays 09:30 | Standup or team summary | After people have started, before the first block of work |
| Weekdays 17:30 | End of day capture | Catches what changed while you were heads down |
| Weekly, Monday 08:00 | Reconciliation and metrics | Whole previous week is closed and settled |
| Weekly, Friday 15:00 | Content and pipeline planning | Enough of the week has happened to plan the next one |
| Monthly, 3rd working day | Subscriptions, access, invoices | Avoids the 1st, when every other system runs its own batch |
| Event driven | Inbound that needs a fast human decision | Fires only when reality changed |

Notice the monthly slot avoids the first of the month. Every billing system,
payroll run, and reporting job in your stack fires on the 1st, which is
precisely when APIs are slowest and data is least settled. The third working
day costs nothing and removes a whole class of flaky run.

Start with one scheduled bot, not seven. Watch a read-only job like the
[Competitor Pricing Watch bot](/bots/competitor-pricing-watch) for a week
before you schedule anything that writes.

## Answer the objection that schedules only produce unread reports

The strongest argument against any of this is usually correct, so state it
properly. Scheduled output gets skimmed. A report that arrives whether or not
it has anything to say trains you to ignore it, and within a month you have
automated the production of noise. On-demand is better, because asking a
question means you wanted the answer.

That is right about most scheduled reports, for a specific reason. A report you
skim is one where the interesting content and the empty content look identical
on arrival. If the subject reads "Weekly summary" whether there are three
problems or none, the only way to find out is to open it, and opening it is the
cost you stop paying around week five.

The fix is not discipline, it is making the shape of the message carry the
finding. A brief whose first line is either "nothing to flag" or "3 items need
you today" is readable in the notification preview, and you open it only when
it earned that. Put the count in the subject too. The heartbeat that makes
silence detectable now costs a glance rather than a click.

Where the objection wins outright: anything you would only act on if you were
already thinking about it. Competitor research, idea generation, market
summaries. No deadline, no threshold, so a schedule adds volume and nothing
else, and they belong on a manual trigger you fire when the question is live.

## Recognise where clock scheduling stops being the right tool

Every recommendation in this article assumes the work has a rhythm. Three
common cases do not, and forcing them onto a clock is how good bots become
annoying ones.

Work that depends on someone else finishing first is not a schedule. If the
report needs a colleague's numbers and they file them somewhere between Monday
and Thursday, a Monday routine reports on stale data three weeks in four. Use
the chained pattern with the exit-if-missing rule, or accept the lag and run it
Friday.

Work with a legal or contractual deadline should never run on the deadline.
Put the routine several days ahead so a failed run still leaves time to do it
by hand. A compliance check scheduled on the due date has turned a soft failure
into a hard one.

Work that is genuinely irregular stays manual, and that is not a failure of
nerve. A routine that fires unattended needs a line it will not cross, so
anything you cannot write that line for is not ready for a schedule. Which
actions deserve that treatment is argued in
[the guide to bot boundaries](/blog/grok-bot-boundaries), the mechanical
difference between a routine and a trigger is covered in
[routines versus triggers](/blog/grok-bot-routines-vs-triggers), and the
[first week plan](/blog/grok-bot-first-week) sequences what goes on a clock
first.

**Keep reading:** [Why Grok Bot Needs a Cursor Account and Every Way To Get Access](/blog/grok-bot-cursor-account-explained), [Grok Bot Examples](/blog/grok-bot-examples), [Grok Bot Permissions Explained](/blog/grok-bot-permissions-explained).

This sits inside a wider guide: [When Bots Go Wrong](/blog/when-bots-go-wrong) covers the whole territory.

## Frequently Asked Questions

### What is the shortest sensible interval for a Grok Bot schedule?

For almost all real work, hourly is the floor worth considering and daily is
the honest answer. Anything faster is usually a misidentified event trigger:
you did not want a bot checking every five minutes, you wanted it to react
when something specific happened. Short intervals cause overlapping runs,
duplicated actions, rate limiting on connected tools, and compute spend on
runs that find nothing. If the source you care about can emit an event, use
the event. If it cannot, poll coarsely and track the last processed item in a
state file so repeat runs cannot duplicate work.

### Why did my bot run at the wrong time?

Three causes, in order of likelihood. Your account timezone differs from the
one you assumed when setting the schedule, so name the timezone explicitly in
both the setting and the charter text. Daylight saving shifted your local
clock without shifting the underlying schedule, or shifted it on a different
date than the region you coordinate with. Or the run fired correctly but the
data it pulled used a different definition of "yesterday", because the
connected tool has its own account timezone. Ask the bot to state the exact
date range it used in every report.

### What happens if a scheduled run fails partway through?

That depends on the runtime, but plan for the least forgiving version: the run
stops, nothing is retried, and no notification arrives. This is why silent
success is dangerous as a default. Require a message on every run, including
runs where nothing happened, so a missing message becomes a detectable event
rather than an unnoticed gap. For any routine that writes or sends, add
explicit resumability to the charter by recording what was already processed,
so a partial run followed by a manual retry cannot repeat the same action
twice.

### Should a new bot go straight onto a schedule?

No. Run it manually for at least a week first, ideally on the same rhythm you
intend to schedule, and read every single output. You are not testing whether
the model is capable, you are testing whether your charter is specific enough
that the output is usable without editing. Scheduling too early hides that
question, because a mediocre output that arrives automatically gets skimmed
and tolerated rather than fixed. Once a week of manual runs produces output
you would have used unchanged, put it on the clock.
`,
};
