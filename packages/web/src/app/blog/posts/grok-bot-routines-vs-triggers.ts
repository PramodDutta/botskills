import type { BlogPost } from './index';

export const post: BlogPost = {
  title:
    'Schedules vs Event Triggers: Routines That Never Fail Silently',
  description:
    'Grok Bot routines bind one workflow to one bot and keep only 20 run records. Pick the right trigger, survive silent failure, and design around the ten minute cap.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Schedules vs Event Triggers: Routines That Never Fail Silently

A routine that stopped firing looks exactly like a routine with nothing to
report. Both produce silence. You will notice the difference somewhere between
four days and never, and which one it is depends entirely on choices you make
before you switch the thing on.

This is about the object model first, because the constraints on a Grok Bot
routine are specific and published, and they change what a sensible design
looks like.

## A routine binds one workflow to one bot, and dies with it

The documented shape, from
[skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations):

A routine assigns a workflow to one bot. Not to a team, not to a pool, to one
bot. There is a ceiling of 50 routines per bot, and the app keeps the 20 most
recent run records per routine. Deleting a bot also deletes its routines, and
nothing is stored at team level.

Four consequences fall straight out of that, and each one changes a design
decision.

**There is no single place to see your schedule.** Because routines belong to
bots and nothing is team-level, a five bot setup means configuring and
checking scheduling five times, in five places. If you want one view of when
everything runs, you have to keep it yourself, and you should, because you
will otherwise discover the overlap by reading five identical notifications at
09:00.

**The bot is the unit of deletion.** Delete a bot to tidy up and you have
deleted its routines with it. There is no orphaned-routine state to recover
from, which is clean, and no warning that you are about to lose a schedule you
spent an afternoon on, which is not.

**Deleting a bot is the wrong kind of cleanup.** This is the sharp edge. The
routines go, but the shared computer keeps its files and browser sessions:
deleting a bot does not remove them
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
So the delete removes the part you built and leaves the part you were worried
about. If your goal was to revoke access, deleting the bot is not the action
that does it.

**Your phone is a kill switch, not a console.** On iPhone you can pause and
resume routines only. Editing, history, testing and deleting all need a
desktop ([mobile](https://docs.x.ai/grok-bot/mobile)). That is a reasonable
division of labour, but plan around it: if you are away from a laptop, your
only available response to a misbehaving routine is to stop it. Which is an
argument for making every routine safe to stop at any point, and for never
scheduling something whose half-completed state is worse than not running.

## Choose between a clock and a cause, not between good and better

The choice is not really "which is better". It is whether the work has a clock
or a cause.

A schedule fires whether or not anything happened. That is a feature for
anything that must exist by a certain time regardless of activity, and a waste
everywhere else. An event fires when reality changed, so it never runs for
nothing and never runs at a predictable time.

| Trigger | Good fit | How it fails, and what you will see | The check that catches it |
|---|---|---|---|
| Daily schedule | Morning briefs, overnight change reports | Fires in a timezone you did not intend, lands at 3am, and you stop reading it | The range line at the foot of the report |
| Weekday schedule | Standups, pipeline reviews, working-week work | Runs on public holidays and while you are away, producing output nobody reads | A monthly look at unread outputs |
| Weekly schedule | Reconciliation, planning, metric reviews | Too coarse to warn you, so it becomes a post-mortem of a Tuesday problem | Nothing catches this. Change the cadence |
| Monthly schedule | Invoicing, access reviews, subscription audits | Collides with every other month-end batch, so data is slow and unsettled | Requested against received counts |
| Event trigger | Inbound mail, new PR, form submission | The matching rule stops matching after a label, channel, or form is renamed. No error, just nothing | A watcher on the heartbeat file |
| Chained trigger | Second stage of a split workflow | Stage one fails quietly, so stage two runs on yesterday's artifact | A freshness check on the artifact |
| Manual run | New routines, irregular but repeated work | Never gets run, and the bot decays into a bookmark you feel guilty about | A calendar reminder, not a routine |
| Tight polling interval | Almost nothing | Overlapping runs, duplicated actions, rate limits, burn on runs that find nothing | A per-run counter line |

The event trigger row is the one worth staring at. Its failure mode produces
no error and no output, which is indistinguishable from a quiet week. Every
event trigger you rely on needs a companion check, and there is a pattern for
that further down.

For the mechanics of picking between trigger types, and cron-style thinking
without cron syntax, there is a fuller treatment in
[the Grok Bot scheduling guide](/blog/grok-bot-scheduling). This article picks
up where trigger choice ends.

## Decide the trigger from the cost of being late

Trigger arguments go in circles because people compare frequencies. Ask instead
what it costs to find out an hour late, and a day late. The gap between those
two numbers picks the trigger for you.

| What it watches | An hour late | A day late | Trigger that fits |
|---|---|---|---|
| Overnight changes you read each morning | Nothing | Nothing | Daily schedule |
| Your own inbox | Nothing | A slow reply | Twice on weekdays |
| A pull request awaiting review | Nothing | A blocked colleague | Event on new commits |
| A customer's first message | A little | A churn risk | Event, with a daily cap |
| A failed payment | A little | A chase in your name | Event, drafting only |
| Competitor pricing | Nothing | Nothing | Weekly |
| A monthly report number | Nothing | Nothing | Monthly, plus a mid-month check |

Most rows are flat across both columns, which is the finding: for most standing
work an hour of latency is worth nothing, and a schedule with a knowable worst
case beats an event trigger with a better average. Reserve events for the rows
where the two columns differ, and cap each per day.

## Three timezone traps survive a perfectly correct schedule

Three of these, briefly, because they are the most common cause of a routine
that fired perfectly and still produced the wrong thing.

The routine's timezone and your timezone are different settings. Name the
intended timezone in the charter text as well as in the schedule, so that when
you read the charter in November you can tell what the intent was rather than
inferring it from a dropdown.

Daylight saving moves your local clock, and the region you coordinate with
does not switch on the same date. For a few weeks each spring and autumn, a
routine anchored to your clock is an hour away from the person it serves.
Anchor time-critical runs to the timezone of whoever consumes the output.

The third one silently corrupts data rather than timing. A routine that asks a
connected tool for "yesterday" gets that tool's definition of yesterday, which
may be UTC, or a company default, or a choice someone made years ago. Write
explicit date ranges into the charter and require the bot to state the range
it used in every report. An invisible mismatch becomes a line you can read.

Concretely: a 07:00 London routine asking a UTC analytics tool for yesterday
gets a correct window. After the clocks change it is asking at 06:00 UTC for a
day that closed six hours ago in one system and is still open in another, and
the report will not mention it.

A fourth trap appears only with more than one bot. Two routines anchored to
different timezones drift into and out of overlap twice a year, so a stagger
that worked all winter produces contention for three weeks in spring. Anchor
every routine on one bot to the same timezone and shift the content instead.

## Stagger routines on one bot, and never split them for isolation

Because routines attach to a single bot, all of a bot's routines share that
bot. The documentation describes each bot as having its own screen on a shared
computer, which is a work surface rather than a second machine. Our advice is
to plan as though a bot does one thing at a time and treat simultaneous
routines as contention rather than parallelism. That is the assumption that
fails safely; the opposite assumption fails at 09:00 on a Monday.

Three rules follow.

**Never schedule two routines on the same bot at the same minute.** Stagger by
at least the length of the longer job, plus margin for a slow run. Fifteen
minutes of buffer costs nothing.

**If two workflows genuinely must run at once, that is a second bot.** But
remember what a second bot is and is not: it is a second screen and a second
set of routines, sharing the same computer, the same browser sessions, and the
same credentials. The documentation is direct that separate bots are not a
security boundary, so use the split for throughput, never for isolation.

**Treat 50 routines per bot as a ceiling you never approach.** Past roughly
eight per bot you cannot hold the schedule in your head, and there is no
team-level view to hold it for you. A bot with thirty routines is not an
automation setup, it is an outage waiting for a reason.

Contention does not announce itself as an error. Two routines started in the
same minute usually show up as one output that arrived late and one that
arrived incomplete, or as the same item processed twice with slightly different
wording. Neither reads as a scheduling problem from the inbox, and both read as
the model being flaky, which is how people rewrite a charter that was fine.

Record how long each routine takes on a normal day, then set the next start at
that number doubled. Unmeasured, assume a browser-driven routine takes three
times as long as you expect.

The stagger is easier when each bot has one clear job.
[Chief of Staff Briefing](/bots/chief-of-staff-briefing) runs early and reads,
never sending, scheduling, or acting externally without approval.
[Standup Scribe](/bots/standup-scribe) runs later and writes only to your own
direct message, never a shared channel. Two bots, two slots, two boundaries,
and no contention.

## Catch silent failure with a heartbeat and a watcher

Start with the diagnosis, because two very different problems present
identically.

A failed run means the trigger fired and the work broke: an expired
authorisation, a redesigned page, a login challenge, an export that timed out.
The run record exists and it says so.

No run at all means the trigger never fired: the routine is disabled, the
schedule is wrong, the bot was deleted, or access is paused. There is no run
record, and nothing generated a notification about the absence of an event.

Plan for the least forgiving version of both: the run stops, nothing retries,
and no message arrives. That turns "silent success" into a genuinely dangerous
default, and it produces the first rule.

**The heartbeat.** Require a report on every single run, including runs where
nothing happened. One line saying nothing changed costs you two seconds a day
and converts silence from ambiguous into meaningful. Without it, you cannot
distinguish a healthy quiet week from a routine that died on the 4th.

The heartbeat handles failed runs. It cannot handle no run at all, because a
routine that does not execute cannot report that it did not execute. There is
no clever charter clause that fixes this. Something outside the routine has to
notice the absence.

**The watcher.** A second routine, on a different bot, whose only job is to
read the record the first routine should have written and complain when it is
stale. Put it on a bot you are not going to delete, since deleting a bot takes
its routines with it, and the watcher is the last thing you want to lose
quietly.

\`\`\`text
// HEARTBEAT: add to every scheduled routine
At the end of every run, append one line to /state/heartbeat.md:
  <routine name> | <ISO timestamp with offset> | ok | <items processed>
If the run found nothing to do, still append the line with 0 items.
If a step failed, append the line with "failed" and the step name.
Always send me the report, even when every section of it is empty.
State the exact date range you covered at the bottom of the report.

// WATCHER: one routine on a different bot, daily at 09:15 Europe/London
Read /state/expected.md, which lists each routine and its cadence.
Read /state/heartbeat.md.
For each expected routine, compare its newest timestamp against its
cadence. If a routine has not written a line within its cadence plus two
hours, report it: the routine name, its cadence, and how long it has been
silent. If everything is current, reply with one line saying so.

// RETRY CEILING
Two attempts at any single step, then stop and report. Never a third.
Never look for another route to the same result.

// WHERE YOU STOP
Never restart, re-run, edit, enable, pause, or delete a routine or a bot.
Never modify /state/heartbeat.md. You read it, you do not write it.
Report the gap and wait for me.
\`\`\`

The boundary on the watcher is not decoration. A watcher that can restart
things is a watcher that can restart a broken thing repeatedly, at which point
you have built an automated retry loop with no ceiling and given it a
schedule. Detection and remediation are different jobs, and only one of them
is safe to leave running.

## Verify the watcher by breaking something on purpose

A watcher you have never seen fire is one you are trusting on faith, and faith
is what this design was supposed to replace.

Test it directly. Pause the routine it watches, leave it paused past its
cadence plus the grace period, and wait for the watcher's next run. The correct
outcome names that routine, its cadence, and how long it has been silent.
Anything else is a finding: a grace period so generous the gap is invisible, a
routine missing from the expected list, or a watcher reading a heartbeat file
the other routine never writes to.

Repeat it whenever you add a routine. The failure this catches is not the
watcher breaking, it is a new routine never added to the expected list, watched
by nothing while looking as monitored as the rest.

## Answer the objection that a watcher is one more thing to break

The fair criticism is that the answer to a routine failing silently should not
be a second routine that can also fail silently.

It would be, if the watcher were the same kind of component. It is smaller: it
reads one file, compares timestamps, and writes a message, so it has almost no
surface to fail on next to a routine driving a browser through a login. And it
is louder: it reports every run, including the ones where everything is
current, so a silent watcher is itself a visible signal.

One case stays uncovered, and it is worth stating rather than papering over. If
the watcher stops and you stop noticing its daily line, nothing tells you. The
only cure is that its output is the one message you actually read, which argues
for one line.

## Twenty run records is a short evidence window

The app keeps the 20 most recent run records per routine. Convert that into
time and it stops sounding generous.

| Cadence | 20 records reaches back about | What that means when something breaks |
|---|---|---|
| Every 15 minutes | 5 hours | An overnight failure is gone before you wake up |
| Hourly | Under a day | You get one working day to notice and investigate |
| Every 4 hours | 3 days | A Friday problem is unreadable by Monday afternoon |
| Twice a day | 10 days | Enough to spot a pattern, not enough to date its start |
| Daily | 3 weeks | Workable, and the shortest cadence that really is |
| Weekdays only | 4 weeks | Comfortable for most reporting work |
| Weekly | 5 months | The only cadence with genuine history |

Read the first row again next to the earlier point about tight intervals. The
fastest routines have the least forensic history, which is precisely backwards
from what you need, because fast routines are also the ones that can do the
most damage before anyone looks.

Now combine that with a second documented gap: an audit view of bot actions
does not exist yet
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
Your evidence window is short and there is no system of record behind it.

Two design consequences, and they are the reason this section exists.

**The charter must make the bot report, not rely on history.** Anything you
will want to compare across weeks has to be written by the bot into somewhere
durable at the time, because it will not be reconstructable later. That is the
heartbeat file above, and it is also why the run report should always state
its date range and its counts.

**The ceiling matters more than usual.** When you cannot reconstruct what
happened, the useful question shifts from "what did it do" to "what was it
ever able to do". That is exactly the question a boundary answers, and it is
why [the boundaries guide](/blog/grok-bot-boundaries) argues for writing the
line before you write the workflow. A bot that can only draft has a knowable
worst case even with zero surviving history. A bot that can send does not.

If a routine has already gone quiet and you are trying to work out why, the
symptom-by-symptom list is in
[the troubleshooting reference](/blog/grok-bot-troubleshooting).

## Design around the ten minute demonstration cap

Teach by demonstration is the fastest way to get a workflow into a bot, and it
comes with a specific set of limits: it records visible computer interaction
for up to ten minutes, captures no microphone audio, covers browser workflows
only, is unavailable on iPhone, and produces a draft skill rather than a
finished one.

Ten minutes is not a recording quota to spend. It is a design constraint on
what a single teachable unit can be, and the right response is to decompose
rather than to rush.

**Do the setup before you press record.** Log in, close the notification
banner, get to the page where the actual work starts. Every second of
navigation you record is a second of workflow you are not recording, and login
flows are the least reusable thing you could capture.

**Start each segment from a URL, not from a click path.** A segment that
begins with "go to this address" can be replayed from a known state. A segment
that begins with "click where the last one stopped" is only valid if the
previous segment ended exactly as expected, which is the assumption that
breaks first.

**End each segment at a durable artifact.** A saved record, an applied filter,
a downloaded export, a submitted form. If a segment ends mid-form, its output
is a screen state, and screen states do not survive the gap between runs.

**Budget for narration you cannot give.** No microphone audio is captured, so
every "and this is why we skip the archived ones" you would have said out loud
has to be typed into the draft afterwards. Reserve real time for that. The
draft is the raw material, and editing it into something specific is the
actual work.

**Record on a desktop.** The feature is not available on iPhone, and neither
is editing the result.

A weekly reconciliation that takes forty minutes by hand becomes four
segments. Each is under ten minutes because each ends where a real document was
saved, and the artifact column is what makes a failure legible.

| Segment | Starts from | Ends at | If it fails you see |
|---|---|---|---|
| 1 Pull the export | The report URL | A file in the downloads folder | No file, and nothing downstream runs |
| 2 Reconcile flagged rows | That file | A marked-up copy saved beside it | The original, with no marked-up twin |
| 3 Update the tracker | The marked-up copy | Saved rows in the tracker | A marked-up copy nobody consumed |
| 4 Write the summary | The tracker | A summary message to you | Silence, with the tracker current |

Those become separate routines chained by artifact, or one workflow assembled
from four drafts, and either way a failure in segment three tells you which
artifact is missing. Give each later segment one extra instruction: check that
its input artifact is from today, and stop if it is not. Without that, a failed
segment two produces a segment three running happily on last week's file.

That decomposition has a second benefit worth naming: shorter units are easier
to bound. A four minute segment that only reads has an obvious boundary. A
forty minute recording that touches six systems has no clean line anywhere in
it, which is usually a sign it should never have been one routine.
[Marketing Calendar Sync](/bots/marketing-calendar-sync) is a good shape to
copy here, touching only your local calendar and never editing the shared
source, and [Inbox Triage](/bots/inbox-triage) never sends, so every draft
waits for approval.

## Where a routine is the wrong shape for the job

Three cases where the honest move is not to schedule it at all.

Work that needs a decision partway through. If the middle of the job is a
judgment call, the routine either waits, holding its bot until you notice, or
it guesses. Split it so the routine ends at the decision and hands you a list.

Work whose half-completed state is worse than not running. On iPhone your only
control is pause and resume, so if stopping mid-flight leaves a partly updated
tracker, you have built something you cannot safely stop from the device you
will actually have with you.

Work you do not yet understand. A routine encodes a process, and encoding one
you are still inventing means debugging two things at once. Run it by hand
until the steps stop changing, then automate what settled.

## Run five checks before you switch anything on

Five checks, in order, and none of them take long.

Run it manually for a week first and read every output, because scheduling too
early converts "is this any good" into "this arrives automatically and I skim
it". A test run is a real run, so if the routine can send or post, it will
send or post during your test. Write the boundary before the first test, not
after. Add the heartbeat line to the charter on day one, since retrofitting it
means your evidence starts from the retrofit. And put the watcher on a bot you
will not delete.

Then, once it is live, the only ongoing habit that matters: if a routine has
gone quiet, check whether the run history shows a failed run or no run at all
before you change anything. Those two diagnoses point at completely different
fixes, and with 20 records to work from, you may only get one chance to read
the evidence.

**Keep reading:** [Rakazo Routines](/blog/rakazo-routines), [The Best AI Bots for Developers in 2026](/blog/best-ai-bots-for-developers), [The Best AI Bots for Founders in 2026](/blog/best-ai-bots-for-founders).

This sits inside a wider guide: [What AI Bots Actually Cost](/blog/what-ai-bots-cost) covers the whole territory.

## Frequently Asked Questions

### How many routines can one Grok Bot have?

The documented ceiling is 50 routines per bot, and the app retains the 20 most
recent run records for each routine. In practice the useful limit is far
lower. Because routines belong to individual bots and nothing is stored at
team level, there is no single view of everything scheduled across your
setup, so you have to hold the picture yourself. Past roughly eight routines
on one bot that becomes unrealistic, and overlapping start times start
producing duplicated work and contention you will only notice from the output.

### What happens to routines when you delete a Grok Bot?

They are deleted with it. Routines are owned by a single bot and nothing
survives at team level, so removing the bot removes its schedule permanently.
Importantly, this is not the cleanup people expect it to be: the documentation
states that deleting a bot does not remove files or browser sessions on the
shared computer. You lose the automation you built and keep the signed-in
sessions you may have been trying to revoke. If revoking access is the goal,
sign out of the services and rotate the credentials instead.

### How do you tell a failed routine from a routine with nothing to report?

Make every run report, including runs where nothing happened, so silence stops
being ambiguous. That distinguishes a healthy quiet week from a broken
routine, but it cannot catch a routine that never fired, since a run that does
not happen cannot send anything. For that you need a second routine on a
different bot that reads a heartbeat file the first routine writes to and
raises a flag when the newest entry is older than the expected cadence. Give
that watcher a strict boundary: it reports gaps and never restarts anything.

### How do you teach a workflow that takes longer than ten minutes?

Split it into segments that each finish inside the cap, and choose the split
points carefully. Do all the logging in and navigation before you start
recording, begin each segment from a specific address rather than from
wherever the previous one left off, and end each segment at something durable
like a saved record or a downloaded export. That way a later segment can start
from a known state instead of an assumed one. Since no microphone audio is
captured, budget time to type the explanation into the resulting draft.
`,
};
