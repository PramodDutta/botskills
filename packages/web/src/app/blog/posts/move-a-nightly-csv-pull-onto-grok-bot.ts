import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Move a Nightly CSV Pull onto a Grok Bot',
  description:
    'Move a nightly CSV pull onto a grok bot as a routine on one named bot. Max 50 routines. The app keeps 20 run records. Nothing is team-level. Laptop closed still runs.',
  date: '2026-08-28',
  category: 'Guide',
  content: `
# Move a Nightly CSV Pull onto a Grok Bot

The 02:00 CRM export still lived in crontab on a MacBook that spent 19 August 2026 in a bag, so the 09:00 forecast opened yesterday's contacts file. Joss had a closed-won on Redlane Storage at 23:40 on the 18th. The night job never wrote a row for it. The laptop had done this pull for eleven months. It only worked on nights the lid stayed open.

This page is the move of that one export onto a Grok Bot routine, not the clock catalogue. Cadence math lives in [Grok Bot scheduling](/blog/grok-bot-scheduling). Create-and-verify lives in [how to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine). What keeps running after you shut the lid lives in [Grok Bot with the laptop closed](/blog/grok-bot-runs-with-laptop-closed). Stay here until one named contacts dump lands under \`/workspace\` at 02:00, with a heartbeat that may say it could not compute, and with no five-minute loop attached.

A routine lives on one bot. Fifty is the ceiling on that card. The app keeps twenty run records per routine. Delete the bot and the night job dies. Nothing is stored as a team calendar. After the move, closing the laptop does not pause the worker. The worker is the persistent cloud computer assigned to your user account, not to one bot.

## Kill the laptop cron that only fires if the lid stayed open

Crontab on a Mac is a local clock. Sleep, a closed lid, a dead battery, and a bag all stop it. Joss's line was \`0 2 * * *\` in Europe/London, writing \`~/Downloads/contacts-YYYY-MM-DD.csv\`. On 19 August the machine was in a rucksack from 22:10. Breakfast still had an 18 August file at 02:11 with 841 rows. A typical good night is 847. That six-row gap was Redlane Storage.

Do not patch this with caffeinate or a cracked lid. Stop using this laptop as the computer that fetches the export.

Grok Bot background work runs on a managed Linux VM. The Bot runs as a non-root user. That is not a Linux desktop app. Attach the routine from macOS (Apple silicon or Intel) or Windows (x64 or Arm64). iPhone on iOS 18 or later can pause later. There is no Linux desktop client, no Android app, and no iPad app.

Once the routine exists, shutting the lid does not cancel 02:00. Pause if you want that night to skip. Sleep is not pause. Put the output on the cloud disk. The missing-file page is [Grok Bot cannot see the file](/blog/grok-bot-cannot-see-files).

| Pull location | After the lid goes in a bag | Source of truth? |
|---|---|---|
| Mac crontab writing Downloads | Misses | No. This is 19 August |
| caffeinate, cracked lid, or a Mini | Survives only if that box stays up | Stopgap. No product heartbeat |
| Grok Bot routine, file under \`/workspace\` | Continues | Yes. This is the move |
| Five-minute poll of the same report | Continues, 288 fires a day | Never for this export |

## Move one named export, never a bundle of five reports

The unit on this page is one file. Joss's title is Nightly Contacts Snapshot: one CSV at 02:00 Europe/London, one path. Not contacts plus deals plus activities plus users in the same run.

Five reports in one night job is how a miss becomes undiagnosable. You cannot tell which source died. You cannot write one honest heartbeat. Subscriptions include a weekly usage allowance, then overflow billed on demand from model and token cost. There is no Grok Bot-specific spend cap, and no published dollar figure for the allowance.

Copy the saved-report name into the charter. When the name changes, the bot must say it could not compute, not pick a neighbouring report.

Arbitrary example, declared here so you can replace the numbers: Joss measured three known-good nights in the week of 11 August 2026. Row counts were 844, 847, and 851. Header row was 12 columns. The floor in the charter is 50 rows only as a tripwire against an empty file. Put your own measured floor in.

Do not migrate hygiene in the same breath. Flagging duplicates is [CRM hygiene that never rewrites ownership](/blog/grok-bot-crm-hygiene). A pipeline question on demand is [Salesforce Report Builder](/bots/salesforce-report-builder). Mixing fetch with merge advice is how a night file becomes a night of writes.

| Job | Attach to this 02:00 routine | Where it belongs |
|---|---|---|
| Nightly Contacts Snapshot | Yes. This page | This named bot, this one routine |
| Deals, activities, users exports | No | Later, as separate routines |
| Duplicate and blank flags | No | Hygiene desk, reading last night's file |
| Morning exec pack | No | [Chief of Staff Briefing](/bots/chief-of-staff-briefing), after the file exists |

## Park the night pull on a durable bot card, never on temp or the team

Say the owner sentence before you open the schedule. "The 02:00 contacts dump lives on Night CRM CSV." If you cannot finish that sentence, you are about to glue a standing job to a scratch name.

A routine is glued to one Bot. Fifty routines is the cap. Twenty run records is the history. Deleting the Bot deletes the routines. There is no team-level store. Temp, test, demo, and scratch are illegal owners. Hide a bot if the sidebar feels messy and you still need the work. Delete only when you intend the pull to stop.

Do not hitch this fetch onto a bot that already owns a different standing job. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) already has a weekday morning pack. [Salesforce Report Builder](/bots/salesforce-report-builder) answers pipeline questions on demand. [Churn Watch](/bots/churn-watch) flags at-risk accounts on a weekday morning. Those are not the owner of 02:00.

Splitting onto a second bot is not a security move. Every bot on the seat uses the same persistent cloud computer, which belongs to the user, not to a bot. Screens are work surfaces, not vaults. Cookies, sessions, files, and CLI credentials are shared. Do not use separate Bots as a security boundary. Parking the pull on Night CRM CSV is about which card you can delete without killing 02:00.

Create the bot, paste the pull-only charter, then attach the routine. Count routines on a Mac or Windows desk first. If you are at 50, stop. A fifty-first does not spill onto the team. The phone can pause or resume a job that already exists. It cannot create, edit, open history, test, or delete. Teach-by-demonstration (ten minutes, no mic, draft skill, browser only, not on iPhone) is not this nightly job. Deleting the owner leaves last week's CSV on disk as a fossil. The postmortem is [Grok Bot routine did not run](/blog/grok-bot-routine-did-not-run).

## Refuse a five-minute poll of a file that changes once a day

A contacts dump has a natural period of one night. Polling it every five minutes empties the weekly allowance and shreds the only history the app will keep.

Every five minutes is 12 fires an hour, 288 in a day. Twenty run records of that loop cover 100 minutes. You cannot inspect last night. Nightly 02:00 is one fire a night. Twenty records then cover about twenty nights. Copy the CSV out to a store you own if you need a year. The product will not.

Do not attach a five-minute loop just until you trust it. You will not inspect 288 files. If the work only exists when a CRM row changes, you wanted an event trigger. Confirm the current trigger list in the app. The catalogue is [Grok Bot scheduling](/blog/grok-bot-scheduling). Start with one nightly fire.

There is no Grok Bot-specific spend cap. A five-minute loop can take the week from the briefing you actually open. Do not create the loop.

| Cadence | 20 records cover | Rule on this page |
|---|---|---|
| Every five minutes | 100 minutes | Refuse. Pause if it already exists |
| Hourly | Under a day | Refuse for this export |
| Nightly 02:00 Europe/London | About 20 nights | This migration. One routine, one file |
| Weekly | About 20 weeks | Too coarse for a 09:00 forecast |

## Allow a written miss when the CRM session is dead, never a guessed spreadsheet

Silence is not a status. A missing CSV can mean the job ran empty, could not sign in, never ran, or died with a deleted owner. Write a heartbeat on each fire, even when that fire produced no contacts.

Could not compute is allowed. Use it when the CRM session is gone, the saved report name cannot be found, the download has no header row, a bot-check stops the login, or the row count is under the floor you measured. Joss's 19 August miss looked successful because Downloads still held a file. After the move, copying last night's CSV into tonight's path is the same lie. If the export cannot run, write \`COULD NOT COMPUTE\` and stop. Do not invent 847 plausible contacts.

Some services flag datacenter IP addresses. Grok Bot uses static egress IPs. A CRM login page that blocks the worker is a written miss. Confirm on the vendor page. See [why some sites flag the login](/blog/grok-bot-static-egress-ip).

Privacy Mode (Legacy) blocks Grok Bot entirely. If that mode is on, this pull cannot run. An audit view of Bot actions does not exist yet. Twenty run records, the heartbeat, and the CSV are what you can inspect. A run that says \`COULD NOT COMPUTE: crm session\` is a pass for the scheduler and a fail for the forecast. Leave it that way.

## Write the night CSV on the shared cloud disk, not into Downloads on this Mac

The computer is assigned to your user account, not to a bot. Files you write there outlive a bot delete. Useful at 09:05. Dangerous as proof the routine still exists, and dangerous as privacy.

This migration uses \`/workspace/crm-nightly/contacts-YYYY-MM-DD.csv\` and \`/workspace/crm-nightly/heartbeat.txt\`. ISO dates in Europe/London. Overwrite the heartbeat each run. Do not write it to \`~/Downloads\` on this Mac. The cloud worker cannot see that folder.

Check the file on a desk. Deleting the bot still deletes the routine and the twenty records. The CSV remains. File plus history plus owner name. A leftover contacts file is a fossil.

Other bots on the same computer can read the disk. Treat this contacts list as something you handed to every bot on the account. Isolation is a second account, never a second screen. Stop treating Downloads as tonight's file the day the cloud path exists.

Hosted MCP sign-in tokens stay with Cursor's backend, never on the computer. Browser cookies for the CRM stay on the shared desktop. Deleting Night CRM CSV does not sign you out. That split is in [what Grok Bot actually isolates](/blog/grok-bot-shared-computer-security).

## Pin 02:00 to the timezone the morning forecast actually uses

This page is not the clock how-to. You still have to pick one time.

Joss's forecast is 09:00 Europe/London. 02:00 Europe/London is the worked example here, an arbitrary choice that leaves seven hours of slack for a slow run and for a human to see a COULD NOT COMPUTE line before the meeting. If your forecast is 08:00 America/New_York, do not copy 02:00 London. Write the timezone in the schedule setting and in the charter.

Confirm the current schedule shapes in the app. The catalogue is [Grok Bot scheduling](/blog/grok-bot-scheduling). The desk steps are [how to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine). Come back here for the file contract. Do not attach a second 02:15 routine in case the first misses. One routine.

Filename date equals the Europe/London date of the fire. A UTC default that flips the name to yesterday is how breakfast opens the wrong path even when the run succeeded.

## Walk Joss from the 19 August miss to a cloud file that exists at breakfast

Joss is pipeline ops. Old job: Mac crontab at 02:00 Europe/London, saved report Nightly Contacts Snapshot, file in Downloads. On 18 August 2026 Redlane Storage closed at 23:40. On 19 August at 09:00 the forecast still showed it as Commit. The 18 August file at 02:11 had 841 rows. The MacBook had been in a bag since 22:10.

Create Night CRM CSV. Paste the pull-only charter below, not onto temp. Joss had 4 routines on the new card. Attach one nightly fire at 02:00 Europe/London. Not five minutes. Not a second fire at 02:15.

Trigger one daylight test. It spends weekly allowance, then on-demand from model and token cost. Watch it write \`/workspace/crm-nightly/heartbeat.txt\` and \`/workspace/crm-nightly/contacts-YYYY-MM-DD.csv\`. Open both. If the CRM is not connected, heartbeat must say \`COULD NOT COMPUTE: crm session\` with no invented CSV. Open history. You should see 1 of 20 records.

Then the lid test: close the laptop, leave the app, let one real 02:00 fire happen. Breakfast: open the cloud path. Filename date is this morning in Europe/London. Heartbeat near 02:00. Row count clears the floor, or the heartbeat says it could not compute. If Downloads is newer, crontab is still alive. Kill it.

On 20 August the cloud file had 848 rows, including Redlane Storage as Closed Won. Heartbeat said OK. The bag was irrelevant. You still open the file.

| Clock | What actually happened | Wrong story |
|---|---|---|
| 18 Aug 23:40 | Redlane Storage closes in the CRM | "Tomorrow's file will have it" |
| 19 Aug 02:00 | Mac in a bag. Crontab does not fire | "The export always runs" |
| 19 Aug 09:00 | Downloads still has 18 Aug, 841 rows | "Cron is fine" |
| 20 Aug 09:00 | Cloud file dated 20 Aug, 848 rows, lid still closed | "I can stop opening the file" |

## Paste a pull-only charter that never writes a row back into the CRM

An approval controls the proposed action. It does not reverse work already completed. If this bot merges two contacts at 02:07, denying a later card will not unmerge them. The charter has to refuse the write, not hope you are awake.

There is no model picker for Grok Bot. Do not put a model name in this charter. Do not say it reads SKILL.md or CLAUDE.md. That family of files is Grok Build, a different product.

\`\`\`text
Name: Night CRM CSV
Owner: Joss. This 02:00 pull belongs to Night CRM CSV. If that bot is missing, the pull is missing.

Schedule: nightly 02:00 Europe/London. One fire. No 02:15 retry. No five-minute loop. No hourly poll.

Job: open the CRM saved report exactly named Nightly Contacts Snapshot. Export CSV. Write it to /workspace/crm-nightly/contacts-YYYY-MM-DD.csv using the Europe/London calendar date of this fire.

Heartbeat: overwrite /workspace/crm-nightly/heartbeat.txt every run with ISO timestamp in Europe/London, status OK or COULD NOT COMPUTE, row count or reason, and the output path. Write the heartbeat even when the export fails.

COULD NOT COMPUTE is allowed. Use it when the CRM session is missing, the saved report name cannot be found, the file has no header row, a login check blocks the worker, or row count is under 50 (arbitrary floor for Joss; replace with a number you measured on a known-good night). Do not invent rows. Do not copy yesterday's CSV forward and call it tonight.

Never create, edit, delete, merge, or reassign a CRM record. Never change owner, stage, amount, close date, or forecast category. Never email the CSV. Never post it to a channel. Never upload it to a shared drive unless Joss listed that path in this charter (Joss did not). Never run more often than nightly.

Stop when the CSV and the heartbeat exist, or when the heartbeat says COULD NOT COMPUTE. Do not keep clicking until the night looks busy.
\`\`\`

Change three things before you paste: the owner name, the saved-report string, and the row-count floor. Leave the never-write block intact. If you need a bot that drafts hygiene patches from this file, that is a second bot reading the CSV, still not writing the CRM, described on the hygiene page. It is not a new paragraph in this charter.

## Prove the move with a desk test that can fail on row count

Saving the schedule is not the test. The test is a file you open, with a number that can be wrong.

Arbitrary checks for this example, so you can replace them. After a desk test: heartbeat exists; date is today in Europe/London; status is OK or COULD NOT COMPUTE; if OK, the CSV exists, the header has 12 columns, and row count is 50 or more. After the first closed-lid night: filename date is the breakfast date; history shows a fire near 02:00; crontab is gone.

If status is OK and row count is 12 on a roster that was 847 last week, that is a fail. Open the last row. If it is half-written, add that as another COULD NOT COMPUTE case. If status is COULD NOT COMPUTE and a CSV still appeared, the heartbeat is the verdict. If history is empty and files exist, you are looking at a fossil. On iPhone you cannot open history.

| Symptom at breakfast | Likely cause | Fix |
|---|---|---|
| Downloads has last night, \`/workspace\` has nothing | Crontab still owns the job | Kill crontab. Create on Night CRM CSV at a desk |
| Heartbeat says COULD NOT COMPUTE: crm session | Cookie died, or a datacenter IP was flagged | Sign in on the shared desktop, or accept the miss |
| CSV exists, last night's 23:40 close is missing | Fire ran before the close, or the report filters it | Check the saved-report filter. Do not poll all night |
| History looks frantic, last night is gone | Five-minute loop. 20 records cover 100 minutes | Pause. Attach nightly. That history is not forensics |
| Cloud CSV exists, Night CRM CSV is gone | You deleted the owner. File is a fossil | Recreate the bot and the routine |

## Answer the claim that a closed laptop already ran this job

The strongest objection is Joss on 19 August at 10:12: the laptop already ran this pull for eleven months. The miss was a travel night. The fix is leave it plugged in, buy a Mini, or use caffeinate. Moving the same curl onto a Grok Bot is theatre, and now the contacts file sits on a shared computer every other bot can read.

Leave the Mini argument at its strongest. An always-on box does fetch a CSV while a bag sits in an overhead locker. It does not write a heartbeat the Grok Bot app will show you, keep twenty run records on a named card, or make could-not-compute a first-class output. If that is the product you want, keep it, and stop telling the forecast that Grok Bot owns the night. This page is for people who just learned the lid was the clock.

The shared-computer half is true and does not restore crontab. After the move, [Lead Scout](/bots/lead-scout) on the same seat can open the CSV. Screens will not hide it. If you would not hand this dump to every bot on the account, do not put those bots on this account.

Cost is not a reason to stay on crontab. Cursor Hobby and Cursor Pro at $20 do not include Grok Bot. Cursor Pro+ at $60 a month is the cheapest paid path as of the 21 August 2026 widening. SuperGrok at $30 does not include it. SuperGrok Plus at $100 does. A one-time trial is an eligibility path for individuals. Confirm the live cart. No weekly allowance in dollars is published.

If you do not want a night worker at all, that wins. Export by hand at 08:40. What does not win is attaching the routine and believing the lid will stop it. After the move, pause will.

## Stop at one export and hand clock edits to the twin pages

This page stops when one named CSV lands under \`/workspace\` at a chosen night hour, with a heartbeat that may say it could not compute, on one durable bot, with crontab no longer the source of truth. It stops before weekdays versus daily, before a 09:20 brief, and before a missed-fire postmortem.

Clock catalogue: [Grok Bot scheduling](/blog/grok-bot-scheduling). Desk clicks: [how to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine). Cloud versus local versus a send card that waits: [Grok Bot with the laptop closed](/blog/grok-bot-runs-with-laptop-closed). Empty breakfast after you think you created the job: [Grok Bot routine did not run](/blog/grok-bot-routine-did-not-run).

Do not use this page to migrate five reports, grant CRM write, or build a watcher that restarts 02:00. You are the watcher. For seven breakfasts, open history, open the file, compare the filename date to today.

Coming soon, and not shipped: a team-level ceiling on local execution, and an admin Kill that deletes the VM while durable storage is kept. Nothing is team-level today. Do not put this fetch on local execution.

If you are still choosing between 02:00 and 07:00, or arguing whether the lid kills the worker, you are on the wrong twin. If you are holding a contacts export that only exists when this Mac is awake, you are in the right place.

## Keep CRM writes, merges, and mail on the human side of this pull

The boundary that makes it sane to leave 02:00 running is a verb the bot never takes: it never writes the CRM, never merges, never emails the list, never posts the file. A write cannot be taken back by an approval you see at breakfast.

Draw that line the way [approval rules belong on reversibility](/blog/grok-bot-approval-rules-reversibility). A CSV on disk is ignorable. A merged contact is not. This fetch stays a fetch.

Require Approval on send, publish, purchase, and delete if those actions can appear. If Require Approval and Always Allow both match, Require Approval wins. Do not write "allow everything in the browser" so the export click is smoother.

On iPhone you can pause if the heartbeat looks cursed. You cannot edit the charter from the phone. Do not approve a CRM write from a lock screen.

[Forecast Notes Updater](/bots/forecast-notes-updater) still refuses to write stage, amount, close date, or a note into the record. Steal that refusal if you later add a reader bot. Do not add those reads into Night CRM CSV.

**Keep reading:** [Grok Bot Scheduling: Daily, Weekly, and Triggered Runs](/blog/grok-bot-scheduling), [How to Schedule a Grok Bot Routine That Does Not Fail Silently](/blog/how-to-schedule-a-grok-bot-routine), [Grok Bot With the Laptop Closed: What Keeps Running and What Does Not](/blog/grok-bot-runs-with-laptop-closed).

## Frequently Asked Questions

### Does closing the laptop stop the nightly CSV pull once it lives on a Grok Bot?

No. After you move the fetch onto a Grok Bot routine, the worker is the persistent cloud computer assigned to your user account, not this Mac. Closing the app, the laptop, or the iPhone does not stop a scheduled fire. Pause the routine if you want 02:00 to skip a night. Sleep is not pause. Local files on this laptop still need this laptop awake, which is why the CSV has to land under \`/workspace\` rather than Downloads. The lid test is a closed machine plus a breakfast file whose date is today.

### What should the bot write if the CRM export cannot run tonight?

It should overwrite the heartbeat with COULD NOT COMPUTE, a timestamp, and the reason, then stop. Allowed reasons include a missing CRM session, a saved-report name it cannot find, a login check, a missing header, or a row count under the floor you measured. It must not invent contacts, and it must not copy yesterday's CSV into tonight's path. A written miss is a working routine. A plausible spreadsheet is the 19 August failure with extra confidence. Open that heartbeat at breakfast before you trust any file sitting next to it.

### Can I poll the CRM every five minutes so the contacts file stays fresh?

No. This export changes on a night cycle the 09:00 forecast can use, not on a five-minute cycle. Every five minutes is 288 fires a day. The app keeps 20 run records per routine, which covers 100 minutes of that loop, so you cannot inspect last night. The weekly usage allowance, then on-demand billing from model and token cost, still applies, and there is no Grok Bot-specific spend cap. Attach one nightly fire. If you truly need a change event, that is a different trigger, confirmed in the app, not a poll you hope to slow down later.

### If I delete the Night CRM CSV bot, does last night's file on the shared computer disappear?

No. Deleting a bot deletes its routines and the twenty run records. Shared-computer files and browser sessions stay. The contacts CSV can still sit under \`/workspace\` as a fossil that looks like a live job. Other bots on the account can still open it. Sign out of the CRM if you meant to revoke access. Recreate the named bot and the routine if you still want 02:00. Hide the bot instead of deleting it when you only wanted a quieter sidebar.
`,
};
