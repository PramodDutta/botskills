import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Schedule a Grok Bot Routine (Max 50 per Bot)',
  description:
    'Schedule grok bot routine work on one bot, not the team. Max 50 routines per bot. The app keeps 20 run records. Delete the bot and the routine dies.',
  date: '2026-08-27',
  category: 'Tutorial',
  content: `
# How to Schedule a Grok Bot Routine (Max 50 per Bot)

The save confirmation on a Grok Bot routine is not proof the job will still
exist next Monday. The product stores the workflow on one bot, keeps twenty
run records, and will not keep a team calendar you can audit later. Create
from a phone and you cannot create at all. Skip a written heartbeat and a
quiet Monday looks the same as a dead job.

This is the create-and-verify how-to: pick the owning bot, refuse a five
minute email loop, write a pack that may say it could not compute, then
read history at a desk. Cadence choice lives in
[Grok Bot scheduling](/blog/grok-bot-scheduling). A missed fire lives in
[Grok Bot routine did not run](/blog/grok-bot-routine-did-not-run). Stay
here until the owner, the file, and one history row all exist.

From [skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations):
a routine assigns a workflow to one Bot, max 50 per Bot, the app keeps the
20 most recent run records per routine, deleting a Bot deletes its routines,
nothing is team-level. From [mobile](https://docs.x.ai/grok-bot/mobile):
iPhone can pause and resume only. Editing, history, testing, and deleting
need desktop.

## Pick the named bot that will own this job before you open the schedule

A routine is glued to one Bot card, not to the workspace. Create it on a
name you would still want in November, or you have already scheduled the
deletion.

Say the owner sentence before you click. "The Monday standup pack lives on
Standup Scribe." If you cannot finish it, stop.

[Standup Scribe](/bots/standup-scribe) is the right kind of owner: one job,
DM only, never a shared channel. [Chief of Staff Briefing](/bots/chief-of-staff-briefing)
is a different owner for a different job: internal, never sends.
[Inbox Triage](/bots/inbox-triage) is a third. Do not hitch the Monday pack
onto inbox triage because that bot already has a screen. Screens are not
security boundaries. All bots share one persistent cloud computer assigned
to the user, not to a bot. Cookies, sessions, files, and CLI credentials
are shared. Splitting owners is about which card you can delete without
killing the standup. It is not isolation.

Temp, test, demo, and scratch are legal names and illegal owners for a
standing routine. The product will attach the job there, then delete it
with the card. Nothing is stored at team level.

| Owner candidate | Use it for this Monday pack | Why |
|---|---|---|
| A bot named Standup Scribe that you intend to keep | Yes | Durable name, one job, deletion would be an obvious mistake |
| [Chief of Staff Briefing](/bots/chief-of-staff-briefing) | No | That bot already owns a different standing job. Mixing jobs is how you delete the wrong one |
| A card named temp from last Thursday's Gmail experiment | No | You will delete temp on a Friday tidy-up. The routine dies with it |
| The team, a folder, or a shared calendar | Never | Nothing is team-level. There is no such store |
| A second bot you created for security | No extra safety | Separate bots are not a security boundary. You only added a second owner you can delete |

If the named bot does not exist yet, create it, paste the charter, then
attach the routine.

## Open a Mac or Windows client because the phone cannot create the routine

On iPhone you can pause and resume only. You cannot create a routine, edit
one, open history, test, or delete. A phone in your hand is the stop-button
flow, not the create flow.

Supported clients: macOS (Apple silicon and Intel), Windows (x64 and Arm64),
iPhone on iOS 18 or later. Not Linux desktop, Android, or iPad. The bot runs
on a managed Linux VM, which is not a Linux desktop app. See
[what actually works on Windows, Linux and iPad](/blog/grok-bot-supported-platforms).

Sit at a desk. Open the named bot. Confirm you can see the routine editor
and the history view before you type a schedule. Pause still works on the
phone after the job exists. Pause cannot create it.

Teach-by-demonstration is a different tool (up to ten minutes, no microphone
audio, draft skill, browser workflows only, unavailable on iPhone). Do not
record a labelling pass and promote it into this Monday routine.

| Action | iPhone | Mac or Windows desk |
|---|---|---|
| Pause or resume a looping job that already exists | Yes | Yes |
| Create the Monday 07:00 routine | No | Yes |
| Edit the charter, the time, or the owner | No | Yes |
| Open the 20 run records | No | Yes |
| Trigger a test run | No | Yes |
| Delete the routine or the bot | No | Yes |

If you are travelling, create before you leave.

## Count existing routines on that bot so you never try a fifty-first

The published ceiling is 50 routines on one Bot. A fifty-first does not
spill onto the team. It does not attach. Monday arrives empty, the owner is
still in the sidebar, and history cannot show a job that was never saved.

Open the named bot. Count. If you are at 50, stop creating on this card.
Put the Monday pack on a second durable bot, or copy out a spare routine
and remove it. Do not delete the owner to make room if that owner still
holds production jobs.

The standup is one slot, not a protected slot. Cleaning experiments by
deleting the bot takes the standup with them. Removing spare routines, after
you copied their text, leaves the owner alive.

| Count you see | What create will do | What you do instead |
|---|---|---|
| 0 to 49 on Standup Scribe | The new routine can attach | Create on this bot, then verify |
| 50 on Standup Scribe | The fifty-first does not become a team job | Second named bot, or copy-and-remove a spare |
| Unknown, because you are on iPhone | You cannot see the list you need | Wait for a desk. Do not guess |
| 12 on temp, including the standup | Create might work, ownership is already wrong | Move the standup to a durable name before you add more |

If Monday is already empty and you think you hit fifty last week, that is a
postmortem:
[Grok Bot routine did not run](/blog/grok-bot-routine-did-not-run). This
page assumes you have not created yet.

## Block any cadence faster than a useful finding, including five minute mail loops

A five minute email loop is the create-time refusal for this page. Do not
attach it. Not to Standup Scribe, not to Inbox Triage, not to a scratch bot
you will slow down later.

Every five minutes is 12 fires an hour, 288 in a day. The app keeps 20 most
recent run records per routine. Twenty records of a five minute job cover
less than two hours. You cannot inspect yesterday. Every bot also shares
one weekly usage allowance, with overflow billed on demand from model and
token cost, and no Grok Bot-specific spend cap. A mail loop can empty the
week for the briefing you actually open. Pause order for that banner is
[Grok Bot quota exceeded](/blog/grok-bot-quota-exceeded).

This how-to uses a weekly Monday 07:00 pack: one fire a week, twenty records
covering about twenty Mondays, history you can still read next month. If
you later want weekdays, or an event when a calendar row appears, that is
the catalogue in [Grok Bot scheduling](/blog/grok-bot-scheduling). Make it
after this job exists and has a heartbeat file. Do not start at five minutes
and hope you will notice.

| Cadence you are tempted to attach | 20 records cover about | Create-time rule on this page |
|---|---|---|
| Every five minutes, especially mail | Under two hours | Refuse. Pause if it already exists. Do not create it here |
| Hourly | Under a day | Refuse for a standup pack. You will not inspect it |
| Weekday morning | About four weeks | Allowed later, after this Monday pack is proven. Not the worked example |
| Weekly Monday 07:00 | About twenty weeks | This how-to. One pack, one file, one history check |
| Monthly | About twenty months | Too coarse for a standup pack |

If the work only exists when mail arrives, you wanted an event, not a poll.
Confirm the current trigger list in the app.

## Require a written heartbeat even when the pack says it could not compute

Silence is not a status. A missing DM can mean the job ran and found
nothing, ran and could not read a source, never ran, or died with a deleted
owner. The create-time fix is a file the bot writes on every run, including
runs that produced no brief.

Could not compute is an allowed heartbeat. Use it when calendar is
disconnected, the commit log is empty, or a source times out. Write the
line. Name the source. Do not skip the file because the pack would look
ugly. An ugly pack you can open is a working routine. A pretty chat from
two weeks ago is not.

This how-to does not add a second bot as a watcher. You are creating one
routine. It writes two artefacts every Monday: the pack, and a one-line
status. You open both. You also open the twenty-record history. Three
places, because any one of them can lie.

Chat lies first. You skim, remember last week, decide the job is alive.
Require the file and the history row in the charter before the first fire.

A run that says COULD NOT COMPUTE: calendar is a pass for the scheduler and
a fail for the brief. Leave it that way. Do not invent meetings so the pack
looks complete.

## Drop the Monday pack into /workspace so the chat is not the only copy

The shared computer is assigned to your user account, not to a bot. Files
you write there outlive a bot delete. That is useful for a pack you re-read
on Tuesday. It is dangerous as proof the routine still exists. A leftover
markdown file is a fossil if you later delete Standup Scribe.

Name the path in the charter. This how-to uses
\`/workspace/standup-pack-YYYY-MM-DD.md\` and
\`/workspace/standup-heartbeat.txt\`. ISO dates. Overwrite the heartbeat
each run, or append with a timestamp. Do not bury the pack in a chat you
will not search.

Check the file on a desk without asking the bot to recap. A DM you archived
is gone from your head. Deleting the bot still deletes the routine and the
twenty records. The file remains, so the human check is file plus history
plus owner name. All three. Other bots on the same computer can read the
disk. Write shipped, stuck, and needs-a-person, not passwords.

## Attach one weekly fire at 07:00 in the timezone you actually live in

Open the routine editor on the named bot, at the desk. Attach one weekly
schedule: Monday 07:00, timezone named in the setting and in the charter.
If you live in Europe/London, write Europe/London in both places. Do not
rely on a default you have not read.

07:00 is the deadline for a pack you will open before standup. A pack that
lands at 09:05 for a 09:00 meeting is a failed job even if history shows a
run. Confirm the current schedule shapes in the app. Do not copy a cron
string from an old post.

Name the date range the pack must cover. Yesterday is how two tools
disagree. Write calendar events from last Monday 00:00 Europe/London through
Sunday 23:59, commits with authored dates in that window, sent mail in that
window. State the range at the top of the pack. If a source cannot be read,
write COULD NOT COMPUTE for that source and still finish the file.

Do not attach a second routine on this bot in case this one misses. One
routine. If it misses, you diagnose.

## Fire a desktop test run before the first real Monday

Saving the schedule is not the test. Trigger a run from the desk, today,
while you are watching.

Watch the bot write \`/workspace/standup-heartbeat.txt\` with today's date
and a status line. Watch it write
\`/workspace/standup-pack-YYYY-MM-DD.md\`. Open both files yourself. If
calendar is not connected yet, the pack must say COULD NOT COMPUTE:
calendar. If it invents three meetings instead, the charter is already
wrong. Fix it before Monday.

Then open history on that same routine. You should see one new run record:
1 of the 20 the app will keep. Zero rows means you did not save what you
thought, or you are looking at a different bot. A run and no files means
the charter did not write. Fix the charter. Do not wait for Monday.

A test run spends usage from the weekly allowance, then on-demand from
model and token cost. There is no published dollar figure for that
allowance. One test is the verification. A five minute loop of tests is the
cadence you already refused. If you are on iPhone, you have a note, not a
verified routine.

## Inspect the twenty run records as a human, not as an archive

The app keeps the 20 most recent run records per routine. An audit view of
Bot actions does not exist yet. Twenty rows are the product. They slide.
They die with the routine when you delete the bot.

After the test run, look at the row. Nothing in that row is the brief. The
brief is the file. The row is proof a fire happened. Compare: row says this
morning, file date is this morning, owner is still Standup Scribe. A fresh
row and a last-month file means a fossil path or a leftover from an older
bot.

For a weekly Monday job, twenty records are about twenty weeks. Enough to
notice a gap last month. Not a year of forensics. Copy packs into a store
you own if you need that. The product will not.

| Question you want to answer | Twenty records can answer | The file can answer | Chat memory can answer |
|---|---|---|---|
| Did a fire happen this Monday? | Yes, if you open history on a desk this week | Only if the file date is today. A stale file can fake a yes | No |
| Was the pack any good? | No | Yes, if you read it | Unreliable |
| Did calendar fail? | No, unless you wrote COULD NOT COMPUTE in the file and then read that file | Yes | No |
| What happened 25 Mondays ago? | No. The window has slid | Only if you copied the pack out | No |
| Does the routine still exist? | Only while the owner bot still exists | No. Files survive a bot delete | No |

Put a reminder on your real calendar: every Monday after standup, open
history, open the file. You are the watcher. A second bot that restarts
jobs is how people build unattended retry loops.

## Hide the owner bot rather than delete it when the sidebar feels messy

Deleting a Bot deletes its routines. There is no recycle bin and no team
copy. Hide when you still need the work. Delete only after you have copied
the charter and the last pack into a document you own, and only when you
intend the Monday job to die.

Deleting a bot does not remove shared-computer files or browser sessions.
The pack in \`/workspace\` will still be there. The mail cookie will still
be there. The history will not. Write "hide, do not delete this bot" into
the charter at create time so a future you sees the cost.

iPhone cannot delete. Teardown still needs a desk. If the goal is to revoke
access, deleting the bot is the wrong tool. Revoke the session, then decide
on hide versus delete.

| Urge | Action that keeps the Monday pack | Action that kills it |
|---|---|---|
| Sidebar looks crowded | Hide Standup Scribe | Delete Standup Scribe |
| Temp is messy | Remove spare routines on temp, or delete temp only if it owns no standing job | Delete temp while it still owns the standup |
| You want a clean security story | Revoke sessions. Separate bots do not isolate credentials | Delete the bot and assume logins are gone |
| You are on a train | Pause if it is looping. Do nothing else | You cannot delete from iPhone |

Copy the charter out at create time. Keep a roster: job, owner bot,
heartbeat path. The product will not keep this list. If quota exceeded
appears while you are creating, pause looping jobs rather than retrying,
and follow [Grok Bot quota exceeded](/blog/grok-bot-quota-exceeded). Do not
delete bots to save quota. There is no Grok Bot-specific spend cap.

## Walk one Monday 07:00 standup pack from create to the first history check

Friday 16:00, Mac or Windows desk, Europe/London. You need a standup pack
every Monday at 07:00: shipped, stuck, needs a person, plus the coming week
on the calendar. You do not need a daily DM yet. You do not need mail
labelled every five minutes.

Confirm [Standup Scribe](/bots/standup-scribe) exists as a bot in the app,
not only as a listing. If it does not, create it. Paste the charter below.
Count routines on that bot: 3. Attach one weekly Monday 07:00 routine,
timezone Europe/London in the setting and in the file. Do not attach it to
[Lead Scout](/bots/lead-scout), which contacts nobody and is a different
job, and do not attach it to Inbox Triage.

Trigger a test run. Calendar and commits are connected. Mail is not: this
pack does not send. The pack writes COULD NOT COMPUTE: sent mail and still
writes shipped and stuck from commits and calendar. You open
\`/workspace/standup-pack-2026-08-27.md\` and
\`/workspace/standup-heartbeat.txt\`. Today's date is in the heartbeat.
You open history. One row. You put a Monday 07:05 reminder on your own
calendar: open the file, open history, confirm Standup Scribe is still in
the sidebar.

Monday 07:00 fires. At 07:05 you open the new pack and history (2 of 20).
If the heartbeat date is still Friday, you do not start a five minute retry
loop. You sit down. If the owner is gone, read
[Grok Bot routine did not run](/blog/grok-bot-routine-did-not-run). If the
owner is there and the row is missing, you have a create or pause problem,
not a cadence opinion.

Week four: four Monday rows in history, four packs on disk, owner still
named Standup Scribe. Chat is optional.

\`\`\`text
BOT: Standup Scribe
JOB: Weekly Monday 07:00 standup pack. One routine on this bot.
OWNER: If this bot is missing, the pack is missing. Hide this bot.
Copy this charter out before any teardown. Never park this job on
temp, test, demo, scratch, Inbox Triage, or Lead Scout.

SCHEDULE: weekly Monday 07:00, timezone Europe/London. Name that
timezone in the routine setting AND in this file. No second routine
"in case this misses." No five minute loop. No weekday copy yet.

WRITE EVERY RUN:
1. /workspace/standup-heartbeat.txt
   DATE: <ISO date>
   STATUS: ok | could-not-compute
   SOURCES: calendar=<ok|could-not-compute> commits=<ok|could-not-compute>
   mail=<ok|could-not-compute>
2. /workspace/standup-pack-YYYY-MM-DD.md
   Range covered, in Europe/London, stated in full.
   Shipped (from commits, or COULD NOT COMPUTE: commits).
   Stuck (from calendar plus commits, or COULD NOT COMPUTE).
   Needs a person (one question).
   Coming week (calendar, or COULD NOT COMPUTE: calendar).

COULD NOT COMPUTE is allowed. Inventing meetings, PRs, or mail is not.
If a source is missing, write that, finish the files, stop.

DELIVERABLE: the two files. Optional: a DM to me only with a pointer
to the pack path. Never a shared channel. Never email anyone.

BOUNDARY: never send. Never post to a team channel. Never create,
edit, pause, or delete another bot or routine. Never delete this bot.
Two attempts at any step, then write COULD NOT COMPUTE and stop.

HUMAN CHECK (not a bot): after each Monday fire, open history on a
desk, confirm a new row, confirm the heartbeat date is today.
iPhone cannot do this check.
\`\`\`

Day one is the Friday test: files exist, one history row exists. Day thirty
is four or five Monday rows still inside the twenty, and Standup Scribe still
in the sidebar. If you deleted the bot on week three, the files may still
be in \`/workspace\` and the routine is gone.

## Answer the objection that a missing Monday DM is proof enough

The strongest argument against this page is that the extra file, the
history click, and the named owner are ceremony. You will notice when
Monday is quiet. A missing DM is the heartbeat. Writing COULD NOT COMPUTE
into \`/workspace\` is a developer habit pasted onto a chat product.

The honest part: if you read every DM the morning it arrives, a missing
message is a signal. For the first two weeks that can work, even though
the product only keeps twenty run records and deletes them with the bot.

The part that fails: you will stop reading. Week three you archive the DM.
Week five you travel with only iPhone, which cannot open history. Week six
you delete a bot named brief. The DM is missing. You call it a quiet week.
No file was required. The twenty records died with the bot. Quiet and dead
are now the same.

Where the objection wins: a manual job you watch on screen. No standing
routine. Where it loses: any fire you will not watch, including Monday
07:00. Ceremony is three opens. The alternative is a miss you blame on
timezone while the owner is already gone.

## Stop once the file, the history row, and the owner name all agree

Create is done when three facts are true at the same desk, on the same day
as the test run.

Standup Scribe is in the sidebar. The Monday 07:00 routine is attached to
that bot, not to the team, not to temp. History shows the test row. The
heartbeat file has today's date. The pack exists at the named
\`/workspace\` path. If any one of those is false, you are not finished.
If you are on iPhone, you cannot finish.

Do not add a five minute mail loop as a warmup. Do not skip COULD NOT
COMPUTE because the test pack looked thin. Thin and true is the passing
output.

Cadence catalogue waits until this exists:
[Grok Bot scheduling](/blog/grok-bot-scheduling). A later empty Monday is
[Grok Bot routine did not run](/blog/grok-bot-routine-did-not-run). A banner
about the weekly pool is
[Grok Bot quota exceeded](/blog/grok-bot-quota-exceeded). This how-to ends
when the owner, the file, and the first of twenty records are real.

**Keep reading:** [Grok Bot Scheduling: Daily, Weekly, and Triggered Runs](/blog/grok-bot-scheduling), [Grok Bot Routine Did Not Run: The 20-Record Cap and the Deleted Bot](/blog/grok-bot-routine-did-not-run), [Grok Bot Quota Exceeded: What That Message Actually Means](/blog/grok-bot-quota-exceeded).

## Frequently Asked Questions

### Can I schedule a grok bot routine from iPhone?

No. On iPhone you can pause and resume only. Creating, editing, history,
testing, and deleting need a Mac or Windows desk. The iPhone app exists on
iOS 18 or later as a companion stop button, not as a workshop. If you tried
to create a Monday 07:00 job on a train, assume it did not attach until you
open the named bot on a desktop and see the routine plus a test row in the
twenty-record history. Pause is still the right pocket move for a looping
job that already exists.

### What happens if this bot already has fifty routines?

Fifty is the published maximum per Bot. A fifty-first routine does not save
at team level and does not attach. Monday will look like a miss even though
the owner card is still in the sidebar. Put the new standing job on another
named bot, or copy out a spare routine and remove it from the full bot
before you create. Do not delete the owner to free a slot if that owner
still holds production jobs. Hide unused bots when you still need their
work.

### Why write a pack into /workspace if chat already shows the output?

Chat is what you skim and forget. The app keeps only twenty run records per
routine, and those rows are not the brief. A file at a named path is what
you open on Tuesday without asking the bot to recap, and a heartbeat that
may say it could not compute is what makes a thin pack distinguishable from
a dead job. Files on the shared computer also survive a bot delete, so the
file is not proof the routine still exists. You still need the history row
and the owner name. You use all three.

### How do I prove the Monday 07:00 routine actually ran?

Sit at a Mac or Windows desk. Confirm the owner bot still exists. Open that
routine's history and look for a row from this Monday. Open
\`/workspace/standup-heartbeat.txt\` and confirm today's date. Open the pack
file for today's date and read it, including any COULD NOT COMPUTE lines.
If the file is fresh and the owner is gone, you are looking at a leftover
on the shared computer, not a live routine. If you only have iPhone, you
cannot complete this proof. Pause is not proof.
`,
};
