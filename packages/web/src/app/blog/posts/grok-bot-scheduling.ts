import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Scheduling: Daily, Weekly, and Triggered Runs Explained',
  description:
    'Set a Grok Bot schedule that survives timezones, overlapping runs and silent failures: trigger types, cron style thinking, and the intervals to never use.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Grok Bot Scheduling: Daily, Weekly, and Triggered Runs Explained

A bot that only runs when you open the app is a chat window with extra steps.
The scheduling layer is what turns a good charter into a standing job, and it
is also where most people quietly lose a week: the brief arrives at 3am, the
same report gets written twice, or the routine stops firing and nobody notices
for eleven days.

This is how to think about triggers, what each type is genuinely good for, and
the four failure modes that account for almost every "my bot stopped working"
complaint.

## Three ways a bot starts working

Every run has a cause. There are only three, and picking the wrong one is the
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

A manual run fires because you told it to, right now. This is not a lesser
category. Manual is the correct trigger for anything you do irregularly but
repeatedly, and it is always the right trigger for the first two weeks of a
new bot's life while you are still reading every output.

## The trigger table

| Trigger type | Good fit | Failure mode to expect |
|---|---|---|
| Daily schedule | Morning briefs, digests, overnight change reports | Fires in the wrong timezone, or reports nothing new for weeks and you stop reading it |
| Weekday schedule | Standups, pipeline reviews, anything tied to a working week | Silently useless on public holidays, and fires on days you are away |
| Weekly schedule | Reconciliation, content planning, metric reviews | Too coarse to catch a problem early, so it becomes a post-mortem rather than a warning |
| Monthly schedule | Invoicing checks, subscription audits, access reviews | Month-end collides with the same day every tool runs its own batch jobs |
| Event trigger | Inbound email, new PR, new form submission, channel message | The matching rule silently stops matching after someone renames the label or channel |
| Manual run | New bots, irregular work, anything with real consequences | Never gets run, so the bot decays into a bookmark |
| High frequency polling | Almost nothing | Overlapping runs, duplicated work, rate limits, and a bill you did not plan for |

## Cron thinking without cron syntax

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

What does the bot do when there is nothing to report? Decide this explicitly.
"Say nothing" produces clean inboxes and silent failures that hide for weeks.
"Always report, even if the report is one line saying nothing changed" costs
you two seconds a day and turns absence into a signal you will actually
notice. For anything you rely on, pick the second one.

## The timezone trap

This is the single most common scheduling bug, and it has three variants.

The first is the obvious one: you set 07:00 while travelling, or your account
timezone is not the timezone you live in, and the brief lands at 3am forever.
Always name the timezone explicitly in the charter text as well as in the
schedule setting, so that when you read the charter six weeks later the
intended behaviour is written down.

The second is subtler. Daylight saving moves your local clock but not
necessarily the underlying schedule, and the two regions you care about do not
switch on the same date. For a few weeks each spring and autumn, a bot
coordinating with a team in another country will be an hour off. If a run is
genuinely time-critical relative to a person in another region, anchor it to
that person's timezone rather than yours.

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

## Overlapping runs, and why "every 5 minutes" is almost always wrong

The instinct is understandable. You want to know quickly, so you set a short
interval. Four things then go wrong at once.

Runs overlap. If the job takes seven minutes and fires every five, run two
starts while run one is still driving a browser. Depending on the runtime you
either get a queue that grows all day, a refused start, or two runs competing
for the same machine and the same login session. None of those are what you
wanted.

Work gets duplicated. Run one drafts a reply to the new email. Run two, which
started before run one finished writing its notes, sees the same email as new
and drafts it again. Now you have two drafts, and if that action had been a
send rather than a draft, you would have two sends.

You hit rate limits. Every connected tool has a ceiling, and a bot polling
aggressively across several tools finds several ceilings. The symptom is not a
clean error, it is a run that returns partial data and reports confidently on
it.

The bill moves. High frequency polling burns compute for the overwhelming
majority of runs where the answer is "nothing changed". You are paying to
learn nothing, hundreds of times a day.

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

## What happens when a run fails

Failures are not exceptional; they are Tuesday. A connector's authorisation
expires, a page redesigns, a login gets challenged, an export times out. The
question is not how to prevent that but how you find out.

Check three things when a routine has gone quiet, in this order. Is the
routine still enabled, and does the bot that owns it still exist? Are the
connectors it depends on still authorised, or did a password change upstream
revoke them silently? Does the run history show a failed run, or no run at
all, which are two very different diagnoses.

A failed run means the trigger fired and the work broke. No run at all means
the trigger never fired, which points at the schedule, the timezone, the
enabled flag, or account access being paused. There is a longer list of
symptoms and fixes in
[the Grok Bot troubleshooting reference](/blog/grok-bot-troubleshooting).

Two habits make failure survivable. First, the heartbeat: require a message on
every run even when there is nothing to say, so silence becomes evidence.
Second, be careful with test runs. A test run is a real run. If the routine
can send, post, or purchase, testing it will send, post, or purchase, so give
the routine a boundary before you ever press test.

## Writing the schedule into the charter itself

Do not leave the timing entirely in a settings panel. Put it in the charter
too, in words, so the bot's own brief describes when and why it wakes up. Here
is a full example you can adapt:

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

The last block is the reason this is safe to leave running unattended. A brief
bot that can also reply is a brief bot that can embarrass you at 06:45 while
you are asleep. Catalog listings encode that same line as a required field:
the [Chief of Staff Briefing bot](/bots/chief-of-staff-briefing) never sends,
schedules, or acts externally without approval, and the
[Standup Scribe bot](/bots/standup-scribe) posts only to your own DM, never to
a shared channel. The reasoning behind treating that line as structure rather
than politeness is laid out in
[the one-person company playbook](/blog/one-person-company-grok-bot).

## A weekly layout that holds up

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
payroll run, and reporting job in your stack fires on the 1st, so that is
precisely when APIs are slowest and data is least settled. The third working
day costs you nothing and removes a whole class of flaky run.

Start with one scheduled bot, not seven. Watch the
[Competitor Pricing Watch bot](/bots/competitor-pricing-watch) style of
read-only job for a week before you schedule anything that writes. Scheduling
is easy to add and hard to audit, and a calendar full of routines nobody reads
is worse than no automation at all.

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
