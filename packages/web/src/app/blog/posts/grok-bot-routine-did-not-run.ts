import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Routine Did Not Run: The 20-Record Cap and the Deleted Bot',
  description:
    'Find why a grok bot routine not running is a deleted owner bot, iPhone-only history, or the 50-cap. The app keeps 20 recent run records per routine.',
  date: '2026-08-27',
  category: 'Reference',
  content: `
# Grok Bot Routine Did Not Run: The 20-Record Cap and the Deleted Bot

The 09:00 standup DM did not arrive, and the bot named temp is gone from the sidebar. That pairing is the case. A Grok Bot routine lives on one bot. Delete the bot and the routine is gone. The app keeps twenty recent run records per routine, then the window slides. On iPhone you can pause and resume. You cannot open history, edit, test, or delete. None of that is a timezone theory. It is the published object model, and it is the postmortem for a grok bot routine not running.

Clock choice belongs in [Grok Bot scheduling](/blog/grok-bot-scheduling). Here you expected a run, it did not happen, and you need the documented reasons in the order they bite. From [skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations): a routine assigns a workflow to one Bot, max 50 per Bot, 20 most recent run records per routine, delete the Bot and the routines go, nothing is team-level. From [mobile](https://docs.x.ai/grok-bot/mobile): iPhone pauses and resumes only. Editing, history, testing, and deleting need a desktop.

## Blame the owner bot before you blame the clock

Open the missed run as ownership. Ask which bot held the routine before you ask which timezone the schedule used.

An empty 09:00 DM looks like an 08:00 UTC mistake. Those faults exist. They are not the first cut. The first cut is: does the owner still exist, and is the routine still attached to it. A routine is not a team calendar entry. It is a workflow glued to a single Bot card. If that card is gone, the glue is gone. If the card is still there but you are looking from a phone, you cannot read the history that would tell you whether it fired.

Name the owner out loud. "The Monday standup lives on temp." If you cannot finish that sentence, you already have the miss. You built a standing job on a disposable name, or you never wrote the owner down, and the product has no team store to save you. Do this before you rewrite the charter. Charter work is wasted if the bot that owned the job is already deleted.

## Keep every routine on one named bot, never on the team

A routine assigns a workflow to one Bot. Not to the workspace, not to a pool. One Bot.

Five standing jobs means five attachments. There is no third place. You will not find a team schedule view. If you want that list, you keep it yourself.

Durable jobs live on durable names. [Standup Scribe](/bots/standup-scribe) posts only to your own DM, never to a shared channel, and it is supposed to still exist in November. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) stays internal, never sends, and is supposed to still exist in November. A card called temp is a scratch pad. Park a standing job there and you have already scheduled the deletion.

Stacking is allowed, up to fifty. Stacking is not isolation. All bots on the account share one persistent cloud computer assigned to the user, not to a bot. Each bot gets a screen. Screens are not security boundaries. Cookies, sessions, files, and CLI credentials are shared. Splitting a standup onto its own bot does not hide its Slack session from the next bot. It only creates a second owner you can delete by accident.

Write the owner into the job. "This standup routine belongs to Standup Scribe. If that bot is missing, the standup is missing." That sentence is how a future you, cleaning up experiments, stops before the delete.

## Treat fifty as a stop, not as a target

The published ceiling is 50 routines on one Bot. That is a hard stop, not a productivity score.

Two misses hide behind that number. First: a create that never happened. You tried to add the Monday standup as routine fifty-one. Monday arrives empty. The owner is still in the sidebar. History cannot show a ghost. Second: a cleanup that went too far. Temp held experiments plus the standup. You deleted temp to free space. Monday is empty because you removed the job while making room for a different one. Neither miss is a clock bug. Count before you create, and count before you delete.

| Situation | What fifty means | Do this instead of deleting the owner |
|---|---|---|
| Bot already has 50, you need a Monday standup | You cannot add the 51st on that bot | Put the standup on a second named bot, or copy out and remove a spare routine |
| Bot has 47 experiments plus the standup | The standup is one slot, not a survivor | Copy the standup text first, then delete experiments, never the owner card |
| You want a clean sidebar | Fifty is per bot, not per account | Hide unused bots if you still need their jobs. Deleting a bot deletes its routines |

Hide when you still need the work. Delete takes the routines with it. If your goal was a tidy list, hide wins. If your goal was to revoke access, neither is enough: deleting a bot does not remove shared-computer files or browser sessions. That split is in [what Grok Bot actually isolates](/blog/grok-bot-shared-computer-security). Do not delete a bot as if that were a complete cleanup.

## Convert twenty records into the days you can still inspect

The app keeps the 20 most recent run records per routine. That is a sliding window, not a ledger. An audit view of Bot actions does not exist yet. Twenty rows are what you get. A weekday standup holds about four weeks. After twenty-one working days, day one is gone. A daily job holds about three weeks. An hourly job holds less than a day. You are asking what you can still prove about a miss, not which cadence to pick.

| What you need to prove today | Twenty records can show | After the window slides | After you delete the owner |
|---|---|---|---|
| Whether this week's Monday fire happened | Yes, if you open history on a desk this week | No | No. Records die with the routine |
| Whether the brief was any good | No. A run record is not the brief | No | No |
| The routine text you tuned after the second failure | Only while the bot still exists | Routine can still exist | Gone, unless you copied it out |

Cite the twenty for this afternoon. Never cite them as a month of forensics. If you will compare briefs across weeks, the bot has to write the brief into a file you own at the time. A leftover markdown file is not proof the routine still exists. On iPhone you cannot open this window. History needs a desktop.

## Expect a deleted bot to take the standup with it

Deleting a Bot deletes its routines. There is no orphaned-routine state, no recycle bin, no team copy.

The sharp edge is the other half of the same action. Deleting a bot does not remove shared-computer files or browser sessions. Separate bots are not a security boundary. The delete removes the part you built (the standup routine, its twenty records, the card named temp) and leaves the part you were probably worried about (the Slack session, last week's brief file, the Gmail cookie).

That is why the Monday miss feels haunted. Last Friday's standup brief is still in a folder. You think the job is alive. The file is a fossil. The routine that would have written this Monday's brief died with temp.

| Artefact | Survives deleting the owner | Where it lives |
|---|---|---|
| The routine itself | No | On that one Bot. Nothing is team-level |
| The 20 run records | No | On that routine, inside the sliding window |
| Last week's brief file | Yes, until you delete the file | The shared computer assigned to your user account |
| Slack or Gmail session | Yes, until you sign out or revoke | Shared browser on that same computer |
| A team calendar of every routine | Never existed | Your roster file, if you kept one |

Copy the routine text out before you delete, into a file you own. Hide the bot if you still need the work later. Pause looping routines first. Delete last, and only after the copy exists. iPhone cannot run this sequence. Deleting needs a desktop.

## Sit at a Mac or Windows desk before you call the run missing

On iPhone you can pause and resume only. Editing, history, testing, and deleting need a desktop. Supported clients: macOS (Apple silicon and Intel), Windows (x64 and Arm64), iPhone on iOS 18 or later. Not Linux desktop, Android, or iPad. The bots run on a managed Linux VM, which is not a Linux desktop client. Diagnose from a Mac or Windows machine.

A grok bot routine not running is often a false report from a commute. You cannot open history on the phone, so you cannot tell a pause from a delete from a fire that produced nothing. Pause only works if the routine still exists. If you already deleted temp, the phone will not show a tombstone. It will show a list that no longer contains the job.

| Pocket action | On iPhone | Useful for a missed Monday |
|---|---|---|
| Pause | Yes | Yes, if a looping job is still firing |
| Resume | Yes | Yes, if you paused on purpose last night |
| Open run history | No | This is the actual diagnosis, and a phone cannot do it |
| Edit, test, or move the routine | No | Desk only. A train cannot prove the owner still exists |
| Delete the bot or the routine | No | Wait for a desk, which is also what prevents a worse cleanup |

If you are on a train and the 09:00 DM is empty, note the time. Do not create a replacement from memory on a device that cannot edit routines. Wait for a desk. Platform limits: [what actually works on Windows, Linux and iPad](/blog/grok-bot-supported-platforms). The phone cannot close the case.

## Reconstruct the Monday standup that died with the temp bot

Wednesday two weeks ago you needed a throwaway to try a Gmail draft flow. You created a bot named temp. You also needed a Monday standup that week, and temp already had a screen, so you parked the standup routine on it. "Just for now." It fired the next two Mondays. You stopped thinking about the owner.

Friday you cleaned up. Temp had three experimental routines and the standup. You deleted temp. You did not copy the standup text, hide the bot, or pause first. You were on a desk, so the delete ran. The routines died with it. Last Friday's brief file stayed on the shared computer. The mail session stayed too.

Monday 09:00. No DM. On the 08:40 the phone offers pause and resume. Temp is not in the list. You cannot open history. You decide it is a timezone bug.

At the desk, temp is gone. There is no routine and no twenty records. [Standup Scribe](/bots/standup-scribe) exists as a listing you meant to use, but you never created that bot in the app. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) fired, which is how you know the computer is alive. The standup did not fire because its owner is gone.

Rebuild on a durable name. Create Standup Scribe. Paste the charter below. Attach one weekday 08:40 routine in the timezone you live in, DM only. Write a heartbeat file on every run. [Inbox Triage](/bots/inbox-triage) and [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) are separate jobs (never send, never permanently delete). They get their own named bots when they graduate. They do not hitchhike on the standup owner.

\`\`\`text
BOT: Standup Scribe
OWNER RULE: This bot owns the weekday standup routine. Do not
park that routine on any bot named temp, test, demo, or scratch.
If this bot is missing, the standup is missing. Hide this bot
rather than delete it. Copy this charter out before any teardown.

SCHEDULE: weekdays 08:40, timezone Europe/London (name it in the
routine setting AND in this file). Write /state/standup-heartbeat.txt
with today's date at the start of every run, even if the brief is empty.

SOURCES: yesterday's calendar, sent mail, and commits. Do not invent
meetings or PRs. If a source is missing, say it is missing.

DELIVERABLE: a short DM to me only. Three bullets: shipped, stuck,
needs a person. One question I have to answer. No shared channel.

BOUNDARY: never post to a team channel. Never mail anyone. Never
create, edit, pause, or delete another bot. Never delete this bot.

SUNDAY CHECK: if /state/standup-heartbeat.txt is not Friday's date
by Sunday 21:00, the weekday job has already failed. I rebuild before
Monday. I do not wait for the empty 09:00 DM.
\`\`\`

Day one after the rebuild: you trigger a test from the desk. The heartbeat file gets today's date. The DM arrives. Day thirty: you still have a bot named Standup Scribe, a roster file that says so, and temp is still allowed for experiments that own no standing job.

## Split a missed fire from a fire you cannot inspect

An empty DM has four shapes. Mixing them is how a delete gets "fixed" with a timezone change.

Shape one: the owner is gone. This is a rebuild. Clock settings will not help.

Shape two: the owner is there and you cannot see history because you are on a phone. This is not yet a miss. It is an inspection failure. Sit down. Then look.

Shape three: history is visible and there is no record for this morning. The routine may be paused, may have exited, or may never have been saved after you hit fifty. Desk history separates those.

Shape four: history shows a run this morning and you still got no DM. The routine ran. The output went somewhere else, or it was empty, or the boundary stopped a shared-channel post (correctly, for Standup Scribe). Fix the charter. Do not delete the bot.

The leftover file is the trap that makes shape one look like shape four. You see Friday's brief and argue the job must still be on. Files survive. Routines do not. Look at the bot list.

## Match each empty inbox to the documented cause first

Work the causes in published order. Owner bot still exists. Routine still attached. You are on a desktop, so history is visible. A run record exists for the window you care about. Only then: pause, fifty-cap, timezone, trigger choice. Jump to the clock and you will retune a job that is not there.

| Symptom | Documented cause to test first | Fix that matches |
|---|---|---|
| Monday DM missing, bot named temp is gone | Deleting a Bot deletes its routines | Rebuild on a named bot from a copy. Do not recreate temp |
| Monday DM missing, you are on iPhone | History, edit, test, and delete need desktop | Wait for a Mac or Windows desk. Pause only if the job is looping |
| Create failed, owner already shows a long routine list | Max 50 routines per Bot | Put the new job on another named bot, or copy and remove a spare |
| History looks fine for two weeks, then blank further back | App keeps 20 most recent run records per routine | Stop treating the window as a ledger. Write briefs to a file you own |
| Last week's brief file still on disk, no Monday DM | Deleting a bot does not remove shared-computer files | The file is leftover. The routine is gone |

[Least privilege for bots](/blog/least-privilege-bots) covers the session you did not actually kill. [What is a Grok Bot](/blog/what-is-a-grok-bot) is the object model if someone still thinks a bot is a private machine. Stay here until the owner and the twenty records have been checked.

## Answer the claim that a disposable bot is a cheap experiment

The strongest argument against this page is simple: temp exists so you can try things. Promoting a good routine later is how you work. Standing up a named bot for every scratch idea is ceremony. The Monday miss is user error, not a product constraint.

The honest part: temp is a good scratch pad for a job with no standing schedule. A one-hour Gmail tone test belongs there. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) can start life as an experiment. You watch it, copy the charter out, create a durable bot, attach the routine there, then delete temp. Hide is cheaper if you might need the chat next month.

The part that fails: "later" is not a store. Nothing is team-level. There is no holding pen where a routine waits while you decide its owner. The routine is on temp or it is on Standup Scribe or it is gone. The cheap experiment becomes an unpaid production owner the moment you attach a weekday fire and walk away.

Where the objection wins: the experiment never got a schedule. You deleted temp the same afternoon. That delete is cleanup. Revoke the mail session if you signed in. Where it loses: any routine you would notice missing at 09:00. Standup, the chief-of-staff brief, a weekday inbox pass. Those get production names on the day they first fire, not after a month on a scratch card.

## Keep a roster file the product will not keep for you

Because nothing is team-level, the only list of owners is the one you write. Put it in a document you own, not only on the shared computer. A file on that computer survives a bot delete, and it is readable by the next bot you create, which is a reason to keep client names out of it.

Three columns are enough: job, owner bot, last copy date. Add the heartbeat path if the job has one. Add the boundary in a short verb: never post to a shared channel, never send, never delete this bot.

Update the file when you create, move, hide, or delete. If the file and the sidebar disagree, believe the sidebar for what exists now. Before you delete temp, paste the standup text under the Standup Scribe row. Rebuild from the file. Memory drops the timezone name and the DM-only boundary.

Do not wait for a team calendar. Coming-soon items elsewhere are labelled as not shipped. A team-level routine store is not something this article will invent. Keep the file.

## Prove the next Monday with a Sunday night check that can fail

A check that cannot fail is a ritual. You need one that can come back dirty. Sunday 21:00, at a Mac or Windows desk, not on iPhone.

Open the bot list. Standup Scribe is present. If it is missing, rebuild tonight. Open the routine. If it is gone, the check has failed. Open history. The newest record is Friday (or Thursday, if Friday was a holiday you already knew about). If it is older, the weekday job has already been dead for more than a weekend. Rebuild or unpause tonight.

Open \`/state/standup-heartbeat.txt\`. The date inside is Friday. If the file is missing, or the date is last month, the routine has not been writing, or you are looking at a fossil from the deleted temp bot. Treat a stale file as a fail. Trigger a test run from the desk. The heartbeat date becomes Sunday. The DM arrives. If either does not happen, you still have twelve hours.

Write the result in the roster file. If you are travelling with only iPhone, you cannot run this check. You can pause a looping job. You cannot prove a weekday job is still attached. Run the Sunday check before you leave, or accept that a miss during the trip will wait for a desk.

## Leave clock choice and cadence math to the scheduling page

Once ownership is clean, the remaining failures are clock failures: the wrong timezone, a weekday flag that does not match how you live, a chained job that ran on a stale file. Those are real. They live in [Grok Bot scheduling](/blog/grok-bot-scheduling).

This page stops before that work on purpose. If a grok bot routine not running looked like a cron problem, and the owner bot is gone, no cadence table will help you. Rebuild the owner, attach the routine, pass the Sunday check, then go tune the clock. Whether a standup should be a weekday schedule or an event is a design choice. Whether the standup exists is an ownership fact. Do not debate the first until the second is true.

## Write the owner name into the standup charter so deletion is visible

The boundary that makes a standup safe to leave running is not only "never post to a shared channel." That line is required, and [Standup Scribe](/bots/standup-scribe) already holds it: DM only. The extra line this postmortem adds is about deletion.

The bot must not be treated as disposable. The charter says the owner name, says hide-not-delete, and says copy-before-teardown. A human still has to obey that. The product will not stop you deleting temp. The charter is how you see the cost before the click.

Put the same line on every standing job. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) never sends, and it also should never live on a scratch card. [Inbox Triage](/bots/inbox-triage) never sends an email, and it also should never hitchhike on temp next to a Gmail experiment. Least privilege is about connectors. Owner privilege is about which card is allowed to die.

Approval rules do not reverse a delete. An approval controls a proposed action. It does not reverse work already completed. There is no prompt that reconstructs a routine after the bot is gone. Copy first, or accept that Monday is a rebuild. No standing routine on a bot whose name you would delete on a Friday tidy-up.

**Keep reading:** [Grok Bot Scheduling: Daily, Weekly, and Triggered Runs](/blog/grok-bot-scheduling), [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security), [Grok Bot on Windows, Linux and iPad: What Actually Works](/blog/grok-bot-supported-platforms).

## Frequently Asked Questions

### Why did my Grok Bot routine not run this morning?

Start with the owner, not the clock. A routine assigns a workflow to one Bot, so a grok bot routine not running is often the bot missing, not the timezone. If you deleted a scratch card that held the job, the routine went with it and nothing is stored at team level. If you are on iPhone, you cannot open history, so you cannot yet tell a miss from a pause. Sit at a Mac or Windows desk, confirm the owner still exists, then read the twenty run records. Only after that should you inspect schedule settings.

### Can I recover a routine after I delete the bot that owned it?

No. Deleting a Bot deletes its routines. There is no orphaned copy and no team store to restore from. Last week's output file may still sit on the shared computer, because deleting a bot does not remove those files or browser sessions, but that file is not the routine. Recovery means rebuild: create a durable named bot, paste the charter from a copy you kept, attach the schedule again, and prove it with a desktop test run. If you never copied the text out, you are rewriting from memory.

### Why will iPhone not show me whether the routine ran?

On iPhone you can pause and resume only. Editing, history, testing, and deleting need a desktop. Run records live in that history view, so a phone cannot show the twenty-record window at all. Pause is still useful if a looping job exists and you need it to stop. It cannot confirm a Monday miss, and it cannot resurrect a routine whose owner you already deleted. Supported pocket client is iPhone on iOS 18 or later. Diagnosis waits for macOS or Windows.

### What happens when one bot already has fifty routines?

Fifty is the published ceiling per Bot. A fifty-first routine does not become a team-level job; it does not attach. The Monday standup you thought you added may never have been created, which looks like a grok bot routine not running. Put the new standing job on another named bot, or copy out a routine you do not need and remove it from the full bot. Do not delete the owner card to make room if that card still holds production jobs. Hide unused bots when you still need their work later.
`,
};
