import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Catch Grok Bots That Quietly Quit Without a Status Page',
  description:
    'A grok bot stuck mid-run leaves no status page behind it. Build a foreman that nags a stalled sibling once and pages you only when a person is required.',
  date: '2026-08-26',
  category: 'Guide',
  content: `
# Catch Grok Bots That Quietly Quit Without a Status Page

A bot that fails loudly is a good day. The bad day is the bot that stops without
telling anyone: the run that sits at "in progress" with a frozen screen, the
routine that fired into a signed-out session, the chat where the last message is
four days old and looks exactly like the last message from four minutes ago. You
find out on Thursday, when someone asks why nobody chased the invoices.

There is no dashboard that catches this for you. An audit view of bot actions
does not exist yet, so there is no fleet health page, no run history you can
scan across bots, and no alert when a job silently stops producing output. What
exists is a chat per bot and your memory of what each one was supposed to be
doing.

So the watchdog has to be one of the bots. The
[Stuck Bot Foreman](/bots/stuck-bot-foreman) in the catalog is built for that
job, and its boundary is the reason it is safe to run: it never restarts, never
deletes, and never rewrites another bot, and it never pages you while the fleet
is moving. Below is how to run it without inventing a monitoring system that
lies to you.

## Watch last output time against the SLA you wrote down

Stuck is not a feeling about a bot. It is a comparison between the last time
something appeared and a number you wrote down in advance.

That number is per bot. A morning briefing that produced nothing by 10am is late.
A weekly competitor scan silent since Tuesday is fine. Without the per-bot
number, the foreman guesses, and a guessing watchdog either shouts constantly or
never.

Three signals are worth checking on every pass, and all three are visible from
the outside.

| Signal | How the foreman reads it | Calls it stuck when |
|---|---|---|
| Last output time | Newest message or file from that bot | Past the SLA you named for that bot |
| Repeated error | Same error line on consecutive attempts | The identical error appears three times |
| Frozen run | A run still marked in progress with an unchanged screen | No screen change across two scans |
| Waiting approval | An approval request sitting untouched | Untouched past the SLA for that bot |

The last two rows are different from the first three, and the difference matters
for who gets woken up. A missed routine is a machine problem. A waiting approval
is a you problem, and no amount of nagging another bot will clear it.

Write the SLAs down once, in the same document as the roster. A rule that lives
only in a chat resets the next time you start a conversation.

## Nag a stuck sibling once, then stay quiet until a new stall

The nag is one message. Job name, how long it has been quiet, the last error
line. Then nothing until a new stall begins.

Once is the whole design. A watchdog that repeats itself every fifteen minutes
trains you to filter its channel, and a filtered channel is worse than no
channel because you now believe you have monitoring. The second nag has almost
no chance of unsticking a bot that ignored the first, since whatever blocked it
is usually a session, a credential, or a permission rather than attention.

"Until a new stall" needs a definition, or the foreman will treat a continuing
stall as fresh news every hour. A new stall means the bot produced output after
the nag and then stopped again. Same stall, still stuck, no second nag. That
distinction is one line in the charter and it is the difference between a useful
watchdog and a noise generator.

The nag contains the bot name, the job name, the gap, and the last error
verbatim. No diagnosis, no suggested fix, no offer to help. A nag with a
paragraph of theory attached is a nag nobody finishes.

## Page a human only for approvals, credentials, or a double nag

Paging you is a separate act from nagging a bot, with a much higher bar. Three
conditions justify it, and everything else does not.

An approval sitting untouched past its SLA. Only you can click it, and an
approval controls the proposed action rather than reversing completed work, so
its value collapses if it goes stale while a deadline passes.

Credentials that failed. A signed-out session or an expired token cannot be
fixed by any bot on the account. Sign-in challenges are also more common from
this machine than from your laptop, because the VM uses static egress IPs and
some services flag datacenter addresses.

Two nags with no movement. The sibling has been told twice across two separate
stalls and has produced nothing. That pattern is a broken job rather than a slow
one.

| Situation | Nag the sibling | Page you | Why |
|---|---|---|---|
| Same error three times | Yes, once | No, not yet | The bot may recover on the next run |
| Sign-in challenge or expired token | No point | Yes | Only a person can complete it |
| Approval untouched past SLA | No | Yes | Only your click clears it |
| Two nags, still no output | Already done | Yes | The job is broken, not slow |
| Everything on time | No | No | Silence is the report |

One page, one short message, not a thread. And know what you can actually do
when it arrives: on iPhone you can pause and resume a bot, but editing,
history, testing, and deleting all need the desktop app. A 2am page that requires
desktop work is a page that should have waited until morning, so put that in the
SLA rather than discovering it in bed.

## Stay silent when the fleet is moving, even if you want to look busy

A watchdog with news every hour is a watchdog you stop reading. Silence has to
be the normal output, which means the charter needs to forbid the daily
all-clear.

That is harder than it sounds. A bot on a fifteen-minute cadence with no
permission to say nothing will find something to say: everything is fine, then
fine with a small note, then a bot was slightly slower than usual, and within a
week the channel reads like weather.

The argument is not aesthetic. Your attention for automated messages is a fixed
budget spent in arrival order. Every all-clear spends a little of it, and the
page that matters arrives after it is gone.

Allow exactly one scheduled summary if you want reassurance the foreman is
running: one line, once a day, at a time you chose, saying how many bots it
checked and how many were late. Anything beyond that line is noise wearing a
uniform. If you want to know whether the foreman itself is alive, that daily line
is the check, and its absence is the alert.

## Report a shared-session stall as one computer, not as a dead hire

Here is the fact that changes what a stall usually means. Every bot on a Grok
Bot account shares one persistent cloud computer. The computer is assigned to
your user account rather than to an individual bot, each bot gets its own screen
on that machine, and the documentation is blunt that screens are separate work
surfaces rather than separate security boundaries. Cookies, signed-in sessions,
files, and command-line credentials are shared across all of them.

So three bots stalling at once is usually one cause, not three. A signed-out
session that two bots need. A file another bot is holding. A disk that filled.
A sign-in challenge on a shared account that whoever hit it first left half
finished.

| What you observe | Single-machine explanation | What the foreman should say |
|---|---|---|
| Three bots stalled within minutes | One shared session expired or was challenged | Name the shared dependency, not three failures |
| One bot stuck, others fine | A job-specific block | Report it as one bot |
| A bot stuck on a page needing sign-in | Another bot may have signed that account out | Name the account, ask you to check state |
| Writes failing across bots | Disk filling on the shared VM | Hand to housekeeping, do not delete anything |

The wording matters when you read this at speed. "The invoice bot is dead" sends
you to the invoice bot. "Three bots stopped writing within four minutes, all of
them use the accounting session" sends you to the session, which is where the
problem is.

## Refuse to restart, edit, or delete another bot to "unstick" it

The tempting next step is to let the foreman fix things. It can see the stall, it
is right there, and restarting a job is one click. Do not grant it.

A watchdog with write access to other bots is the most dangerous thing on the
account, for a reason that has nothing to do with malice. It is the one bot whose
whole job is acting on incomplete information about work it did not do. It sees
that output stopped. It cannot see whether the run half-finished something that
should not be repeated.

Repeating matters more than it looks. A stalled invoice chaser may have sent
three of five emails. A stalled deploy may have pushed half a migration. A
restart is not a clean slate, it is a second attempt layered on an unknown
partial first one.

Editing another bot's instructions is worse, because the change is silent and
permanent. Deleting is worst, and it is not even good cleanup: deleting a bot
removes its routines but leaves shared-computer files and browser sessions in
place, so it keeps the logins and loses the history.

The foreman's only outputs are a nag, a page, and silence. Everything else is
your keyboard.

## Paste a foreman charter that pages only when a person is required

Here is a charter to adapt. The SLA block is the part that needs your numbers.

\`\`\`text
You are my Stuck Bot Foreman. You watch the other bots on this shared
computer for work that quietly stopped. You never touch them.

// CADENCE
Scan every [15] minutes between [07:00] and [23:00].

// WHAT YOU READ
The registry at [file or doc path]. It lists each bot, its job, its SLA,
and its channel. If you cannot read it, say the registry is missing and
stop. Do not infer a fleet from memory. Do not invent a green board.

// STUCK MEANS (any one of these)
No new output past that bot's SLA.
The same error line three times.
A run marked in progress with an unchanged screen across two scans.
A routine that was due and produced nothing.

// NAG (once, in [#bot-ops])
One message: bot name, job name, how long it has been quiet, and the last
error line verbatim. No diagnosis, no suggested fix.
Do not nag again for the same stall. A new stall means output resumed and
then stopped again.

// PAGE ME (only these three)
1. An approval untouched past the SLA.
2. Credentials failed, a session signed out, or a sign-in challenge.
3. Two nags across two stalls with no output in between.
One short message to [me], not a thread. Say what I have to do.

// SHARED COMPUTER
All bots here share one computer, one set of cookies, one set of sessions.
If two or more bots stall close together, report the shared dependency
(session, file, login, disk) as one cause. Do not report it as several
dead bots.

// NEVER
Never restart, pause, resume, edit, rewire, or delete another bot.
Never sign in to anything, clear a session, or complete a challenge.
Never delete or move another bot's files.
Never page me when the fleet is moving.
Never report a status you did not read.

// SILENCE
When everything is inside SLA, say nothing. One line at [18:00]: how many
bots checked, how many were late. That line is the only all-clear.
\`\`\`

Two lines to keep even if you cut everything else: the registry stop rule and the
list of nevers. The first prevents invented monitoring, the second prevents a
watchdog that breaks things while helping.

## Walk a frozen invoice bot from 15-minute scan to one Slack line

Tuesday, 14:15. The foreman reads the registry: six bots, each with an SLA. Five
have produced output in the last hour.

The invoice chaser has not. Its SLA is ninety minutes on weekdays, and its last
message is from 11:48, which is two and a half hours ago. Its run shows as in
progress. The screen is the same as it was at 14:00.

That is one stall, past SLA, with a frozen screen. The foreman posts one line in
the ops channel: invoice chaser, chasing overdue invoices, quiet for 2h27m, run
still in progress, last error "session expired for accounting portal". Then it
stops.

At 14:30 it scans again. Same stall, no new output, no second nag. At 14:45,
same. The foreman says nothing three times in a row, which is correct.

At 15:00 the page rule triggers, because the last error names failed
credentials. One message: the accounting session is signed out, the chaser needs
you to sign in, and two other bots use that session so they will stall next. That
last clause is the shared-computer note doing real work.

You sign in on desktop at 15:20 and the chaser resumes at 15:31. The foreman does
not announce the recovery, because recovery is not news. At 18:00 you get one
line: six bots checked, one late, one page sent.

## Diagnose missing registries, green boards you invented, and nag storms

Watchdog failures are self-concealing. A monitoring bot that is wrong looks
exactly like a fleet that is healthy.

| Symptom | Cause | Fix |
|---|---|---|
| Reports all clear on a bot that died Monday | It cannot see status and is inferring | Registry stop rule: no data means say so and stop |
| A nag every fifteen minutes for the same stall | No definition of a new stall | New stall means output resumed, then stopped |
| Paged at 2am for a slow run | Page conditions written loosely | Only approvals, credentials, or a double nag |
| Three separate "bot dead" reports at once | Shared session or disk treated as three failures | Report the shared dependency as one cause |
| Nothing reported for a week | Every SLA is too generous, or the scan is not running | Check the daily one-line summary exists |
| A bot got restarted and nobody did it | The foreman has write access it should not have | Remove it. Nag, page, or silence only |

The first row costs you a week. A watchdog with no data produces a reassuring
report, because reassurance is the shape status output usually takes, which is
why the registry rule is a stop rather than a fallback. Nag storms are the
easiest to fix: forty messages in the ops channel means the stall definition is
fine and the repeat rule is missing.

## Answer the case for auto-restart so you can sleep

The honest counter-argument: most stalls are transient. A session blipped, a page
timed out, a scan hit a rate limit. Restarting fixes maybe half of them, it costs
nothing, and a watchdog that can only complain is a pager that wakes you for
things a script could have handled. Give it restart authority and you get your
nights back.

The first half is true. Plenty of stalls do clear on a retry, and there is real
value in not being paged for those.

What breaks is the assumption that a restart is free. From outside, a stalled run
and a half-finished run are identical, because output stopped in both. A restart
risks repeating the part that already happened, and outbound messages, payments,
merges, and posts are exactly where a duplicate is the expensive failure.

The second break is capability creep. A bot that can restart a sibling can
restart it wrongly at 3am in a loop, and nothing on the platform stops that.
There is no per-bot spend cap, and the weekly allowance runs into on-demand
billing, so a restart loop is a bill as well as a mess.

Where the objection wins: an idempotent read-only job. A scraper, a scan, a
report generator with no side effects, one retry, then a nag. If you want that,
build it as the sibling's own retry rule inside its own charter, where the bot
that knows what it did decides whether to do it again. Our
[troubleshooting guide](/blog/grok-bot-troubleshooting) covers the retry patterns
that are safe to write into a bot's own instructions.

## Verify with a planted stall that must produce exactly one nag

An untested watchdog is a belief. Plant a stall and count the messages.

The test: pick a bot with no side effects, sign out the account it needs or point
its input at a path that does not exist, and let it fail. Then watch the ops
channel for the next hour with a specific expectation, which is exactly one nag
and no page.

| Check | How you plant it | Pass looks like |
|---|---|---|
| One nag per stall | Break a harmless bot's input path | Exactly one message, then silence for an hour |
| No page for a plain stall | Same test, no credential involved | Nothing in your DMs |
| Page for credentials | Sign out an account a bot needs | One page naming the account and the action |
| New stall detection | Fix it, let it run, break it again | A second nag only after output resumed |
| Registry stop rule | Rename the registry file | It says the registry is missing and stops |
| No write access | Ask it directly to restart a stalled sibling | A refusal, not a restart |

Run the last two rows every time you change the charter. The registry test
catches invented monitoring and the restart test catches a foreman whose nevers
got edited out during a busy week. Plant the stall on a bot that sends nothing,
touches no money, and merges no code.

## Leave disk cleanup to Overwatch, not to this watchdog

The foreman will find things it wants to clean. A folder is enormous, a temp
directory is stale, two bots are writing the same path. Reporting all of that is
correct. Fixing any of it is a different job with a different risk profile.

That job belongs to [VM Overwatch](/bots/vm-overwatch), which is built for
housekeeping on the shared machine and has its own boundary: it never deletes
another bot's working files without a named archive step you approved, never
commits secrets, and never treats screens as isolation. It moves obvious temp
into a dated archive, holds a retention window before listing delete candidates,
and skips any directory that belongs to a bot mid-run.

| Job | Bot | Never does |
|---|---|---|
| Notice work that quietly stopped | Stuck Bot Foreman | Touch another bot, or page you when all is well |
| Keep the shared disk usable and backed up | VM Overwatch | Delete a working tree, or commit a secret |
| Fix the stall | You | Nothing. This one is yours |

Splitting them keeps both reports readable. A watchdog that covers stalls, disk
usage, and stale folders produces a digest, and a digest gets skimmed. One-line
nags get read.

## Keep routines in mind: they die with the bot, they are not team-level

A routine assigns a workflow to one bot. It is not shared, not team-level, and
not portable, and deleting the bot deletes its routines with it. There is a cap
of fifty routines per bot, and the app keeps the twenty most recent run records
per routine.

All four of those facts shape what a watchdog can even see. Twenty run records
means the history behind a stall is shallow, so a bot that has failed the same
way for a month shows you the last twenty attempts and nothing before that. Write
the nag with the last error verbatim, because that line may be the only durable
record once the window rolls.

The per-bot ownership matters more. There is no fleet schedule to inspect, so
"was a routine due?" is a question the foreman answers per bot, from that bot's
own routine list, one at a time. Nothing aggregates it for you.

And the deletion rule is the reason a retired bot vanishes from monitoring
without a trace. Delete a bot on Friday, and on Monday there is no routine, no
run record, and no gap in any dashboard, because there is no dashboard. Only your
registry remembers that a job existed, which is one more reason the registry is a
file rather than a memory. Our notes on
[scheduling](/blog/grok-bot-scheduling) go deeper on where routines fit and what
they cannot carry.

## Stop if you cannot see sibling status, and say the registry is missing

The last rule is the one that makes the rest trustworthy. No data means stop and
say so.

A watchdog that cannot read the fleet has two options. It can report what it
knows, which is nothing, or it can produce something plausible. Models are good
at plausible, and the plausible output here is a calm all-clear, because that is
what most status reports look like. So the charter has to make the refusal
explicit: if the registry is unreadable, say the registry is missing, name the
path you tried, and stop scanning.

This is not hypothetical. The registry is a file on a shared machine that another
bot may archive, a housekeeping pass may move, or you may rename during a
cleanup. Any of those turns your monitoring into fiction on the same afternoon,
and nothing announces it.

Two habits make the stop rule real. Have the foreman name the exact path it read
in its daily line, so a silent move shows up as a changed path rather than as
continued silence. And treat a missing registry as a page condition rather than a
nag, because a fleet with no visible status has no monitoring and only you can
fix that.

Then hold the line on the other side. A foreman reporting "I cannot see three of
six bots" is doing better work than one reporting six green, and the second
version is the one that feels better to read.

**Keep reading:** [How To Catch Deals That Are Quietly Slipping](/blog/how-to-automate-forecast-hygiene), [Bots and Monday.com](/blog/bots-and-monday), [Bots and Zendesk](/blog/bots-and-zendesk).

## Frequently Asked Questions

### How does a bot know another bot is stuck if there is no status page?

It reads what is visible from the outside and compares it to numbers you wrote
down. Newest output time against that bot's SLA, the last error line, whether a
run is still marked in progress with an unchanged screen, and whether a routine
that was due produced nothing. No audit view of bot actions exists yet, so there
is no fleet dashboard to query. That is why the registry file matters: it holds
the roster and the SLAs, and without it the watchdog has nothing to compare
against and should stop rather than guess.

### Should the watchdog be allowed to restart a stalled bot?

No, and the reason is what a restart repeats rather than what it fixes. From the
outside, a stalled run and a half-finished run look the same, so the watchdog
cannot tell whether an invoice chaser already sent three of five emails before it
froze. Restarting risks doing the irreversible part twice, and an approval
controls a proposed action rather than reversing completed work. If you want
retries, put them in the sibling's own charter, where the bot that knows what it
did decides whether to try again.

### Why do several bots go quiet at the same time?

Because they are one computer. Every bot on a Grok Bot account shares a single
persistent cloud machine, and cookies, signed-in sessions, files, and
command-line credentials are shared across all of them. So a signed-out account,
a sign-in challenge, a held file, or a filling disk stalls everything that
depends on it. The screens are separate work surfaces, not separate machines. A
good watchdog reports the shared dependency as one cause instead of filing three
independent death notices.

### How often should the foreman actually message me?

Almost never, and that is the design. One nag per stall in the ops channel, and a
page to you only for an untouched approval, failed credentials, or two nags
across two stalls with no output between them. Everything else is silence, plus
one optional line a day naming how many bots were checked and how many were late.
If the channel fills up, the stall definition is usually fine and the repeat rule
is missing. Also check what you can do from your phone: iPhone allows pause and
resume only.
`,
};
