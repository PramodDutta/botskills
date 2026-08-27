import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Write a Runbook for a Grok Bot That Fails Overnight',
  description:
    'A grok bot runbook names the owner, the pause step, the /workspace heartbeat, and the restart checkpoint. Overnight silence is not a mystery if the file is missing.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# Write a Runbook for a Grok Bot That Fails Overnight

The Monday pack channel is empty at 07:12, HEARTBEAT.md is not on disk, and the only instruction anyone remembers is try it again. That is not a model crash. That is a missing grok bot runbook: no named owner, no pause step, no heartbeat under \`/workspace\`, no checkpoint you are allowed to resume.

Overnight silence looks mysterious only when those four lines were never written. A grok bot runbook is a pasteable protocol: symptom -> look at heartbeat -> pause -> inspect \`/workspace\` -> resume from checkpoint -> never re-send. You write it before the first unattended Sunday. You execute it at breakfast.

If you still need to name which of fifteen failures you have, use [Grok Bot troubleshooting](/blog/grok-bot-troubleshooting). If chat is frozen with files already on disk, use [Grok Bot stalled](/blog/grok-bot-stalled). Stay here until the owner, the pause verb, the heartbeat path, and the never-send line exist in a file the routine can load. A [Grok Bot](/blog/what-is-a-grok-bot) is a written job on a persistent cloud computer. None of that writes a runbook for you.

## Treat overnight silence as a missing grok bot runbook, not a crash

An empty channel at breakfast is a symptom, not a diagnosis. The product will not explain the night. There is no audit view of Bot actions yet. Run history keeps the twenty most recent records per routine, then older rows fall off. If you did not force a file onto disk, breakfast has nothing to read.

People fill the gap with a story. The bot died. The laptop lid killed it. Closing the app, the laptop, or the iPhone does not stop a background job. Sleep is not a pause. A missing pack is a fire that never wrote a heartbeat, a fire that wrote EMPTY on purpose, a late fire still in flight, or a write that never posted because posting was never allowed. Those four cases need four different next moves. A grok bot runbook exists so you pick the file, not the story.

If HEARTBEAT.md is missing, you have no proof. Until you open the path under \`/workspace\`, every breakfast prompt is a guess that can overlap a late run. Write the grok bot runbook before you schedule. After 07:12 you are executing it, not designing it.

## Write the grok bot runbook as six pasteable steps

Paste the template into the charter. Fill the names. Symptom is a missing artifact. Look at heartbeat is a file open. Pause is a control you click before you type. Inspect \`/workspace\` is a listing you write down. Resume names the last finished file and the next allowed step. Never re-send is a destination check.

| Step | You do | You do not |
|---|---|---|
| Symptom | Name the missing artifact in one sentence | Call it a model failure |
| Look at heartbeat | Open HEARTBEAT.md, or record that it is absent | Trust chat silence or an empty Slack channel |
| Pause | Pause the routine from desktop or iPhone | Leave the schedule enabled while you inspect |
| Inspect \`/workspace\` | List the folder, read NOTES.md, write what you saw | Type a new job into chat |
| Resume from checkpoint | Name the last finished file and the next allowed step | Paste the original Sunday prompt |
| Never re-send | Check the destination before any post, mail, or invite | Fire Slack, mail, or calendar again to be sure |

Change the job name, the owner, the paths. Do not change the order of the six steps.

\`\`\`text
GROK BOT RUNBOOK
Job: Monday pack
Owner: Priya Chen. Backup: Sam Okonkwo.
Bot: Chief of Staff Briefing. Routine: Sunday 21:00 local, this bot only.
Heartbeat: /workspace/monday-pack/HEARTBEAT.md after EVERY run, including empty.
Pack: /workspace/monday-pack/PACK.md
Notes: /workspace/monday-pack/NOTES.md
Never send. Never post to Slack. Never mail. Never create calendar invites.

SYMPTOM -> LOOK AT HEARTBEAT
Missing HEARTBEAT.md: no proof the job ran. Do not call it success. Do not call it a crash.
HEARTBEAT.md says EMPTY with a timestamp after the scheduled fire: the job ran and found nothing. Stop.
HEARTBEAT.md timestamp is older than the scheduled fire: the fire missed or wrote to the wrong path.
HEARTBEAT.md is current and PACK.md is missing: partial run. Resume from the checkpoint in NOTES.md.
PACK.md exists and Slack is empty: the write happened. A human posts, or nobody posts.

PAUSE
Pause the routine from desktop, or from iPhone if that is what you have, BEFORE you inspect.
Do not type a new prompt while the routine is still enabled.

INSPECT /workspace
List /workspace/monday-pack.
Read HEARTBEAT.md, NOTES.md, PACK.md.
Write what you saw into NOTES.md, with the time, before you type anything in chat.

RESUME FROM CHECKPOINT
Checkpoint 0: folder empty, destination clean -> start at checkpoint 1.
Checkpoint 1 done (HEARTBEAT exists) and checkpoint 2 incomplete (PACK missing) -> write PACK.md only.
Later checkpoint file exists -> never start at checkpoint 1.
If NOTES.md already records a Slack timestamp or a message ID -> never post.

NEVER RE-SEND
Check #exec-huddle and the sent folder before you even consider a post.
The bot never posts. Priya pastes PACK.md, or Sam does, or the huddle runs without it.
\`\`\`

If the routine cannot load those lines, the overnight fire will not write the heartbeat, will not stop at a checkpoint, and will not obey never-send.

## Name the owner before you name any overnight job

Owner is a person who pauses. Backup is a person who pauses only if the owner is out. Two unofficial owners are two breakfast prompts.

Say the sentence before you save the routine. Priya pauses the Monday pack. Sam pauses only if Priya is out. If you cannot finish it, you have a bot that waits for whoever notices the empty channel first.

A routine assigns a workflow to one bot, not to a team. Max fifty routines per bot. Deleting the bot deletes the routines. Nothing is team-level. Put the names in the charter the job loads, and in the HEARTBEAT.md header so a stranger opening the folder can see who to ping.

All bots on the account share one persistent cloud computer assigned to the user, not to a bot. Screens are not security boundaries. Cookies, sessions, files, and CLI credentials are shared. A second bot is not a second owner. Do not create Monday Pack Emergency to go around a pause. It sits on the same machine and can re-send the same draft.

[Chief of Staff Briefing](/bots/chief-of-staff-briefing) is the Monday pack shape: a written huddle file, not a post. [Standup Scribe](/bots/standup-scribe) is the daily cousin: a DM you open before you tell it to draft again. Both jobs still need a named human who will pause.

## Point the heartbeat at /workspace so empty and broken diverge

Silent success is the failure a grok bot runbook exists to kill. The job ran, found nothing, wrote nothing, and breakfast looks identical to a job that never ran. Force a file. Every run writes HEARTBEAT.md, including the run that found nothing. The file names the job, the time, the owner, and one of two endings: PACK written, or EMPTY with a reason. Empty is a legal result. Missing is not.

| HEARTBEAT.md state | Meaning | Next grok bot runbook step | Forbidden |
|---|---|---|---|
| Missing | No proof the job ran | Pause, inspect the folder, write what you saw | Re-send or re-prompt to make sure |
| Present, EMPTY, timestamp after the scheduled fire | Ran and found nothing | Stop. Empty pack is a legal result | Re-fire the original prompt |
| Present, timestamp older than the scheduled fire | Fire missed, or wrote to the wrong path | Pause, read routine history on desktop | Assume the bot is broken and start over from your phone |
| Present, current, PACK.md missing | Partial run | Resume from the checkpoint NOTES.md names | Start at checkpoint 1 |
| Present, current, PACK.md present, Slack empty | Write happened, post did not | Never re-send. A human pastes, or nobody pastes | Tell the bot to post |

Put the path under \`/workspace/monday-pack/\`, not in a chat message and not on your laptop disk. Overnight work runs on the cloud computer. Closing that laptop does not write HEARTBEAT.md, and opening it does not prove the night ran.

[How to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine) is the create-and-verify how-to. Cadence lives in [Grok Bot scheduling](/blog/grok-bot-scheduling). This grok bot runbook is what you execute when the file is missing at breakfast. A fluent Monday paragraph with no source is still a failed pack: [Grok Bot evidence rules](/blog/grok-bot-evidence-rules).

## Pause the routine before you open the folder

Pause is a control. If the routine is still enabled while you inspect, a late Sunday fire and a breakfast prompt can overlap. Overlap is how two packs land, or how a send leaves twice.

On desktop you can pause, inspect, edit, and read history. On iPhone (iOS 18+) you can pause and resume only. Editing, history, testing, and deleting need desktop. Pause from the train. Inspect from a desk.

Do not use quit as a pause. Closing the Grok Bot app does not stop a background turn. Closing the laptop does not stop a background turn. If an approval is sitting, deny or capture it. An approval controls the proposed next action. It does not reverse work already completed, and it does not write HEARTBEAT.md for you.

If you cannot pause because you are on Android, iPad, or a Linux desktop, you do not have a Grok Bot client there. There is no Linux desktop app, no Android app, no iPad app. The agent runs on a managed Linux VM as a non-root user, which is not a Linux desktop client. Get to macOS, Windows, or iPhone for pause. Get to macOS or Windows for inspect. Write who paused, and when, into NOTES.md.

## Inspect /workspace on the shared computer and write what you saw

Chat is a commentary track. The work lives on disk. After you pause, open the Agent Computer preview and list \`/workspace/monday-pack\`. You are looking for HEARTBEAT.md, NOTES.md, PACK.md, and any identifier in a destination: a Slack timestamp, a message ID, a calendar event.

Write what you saw before you type a resume. 07:41 desktop. Folder empty. No HEARTBEAT.md. Last routine history row is 14 Aug. Destination #exec-huddle has no Monday pack. Checkpoint 0. That sentence is the inspect. Without it, the resume is a second copy of Sunday.

The cloud computer is assigned to your user account. Every bot shares it. Deleting a bot does not remove the files. Do not invent isolation by spinning up a second bot to just get the pack out. [What Grok Bot actually isolates](/blog/grok-bot-shared-computer-security) is the architecture. If you cannot open the computer, stop. Recovery first, resume second. [Inbox Triage](/bots/inbox-triage) is the everyday version: if drafts already sit on disk, those drafts are the job.

## Resume from the named checkpoint and never re-send

A resume names what is already done and what is allowed next. It is not continue, and it is not a paste of the original charter. Both invite a replay of the whole job, plus a send if Sunday wording got sloppy.

Name the artifacts, the checkpoint, and the forbidden verb. NOTES.md says checkpoint 0: folder empty, destination clean, routine paused at 07:13 by Priya. Write HEARTBEAT.md, then PACK.md, under \`/workspace/monday-pack/\`. Do not post to Slack. Do not mail. Do not create invites. Stop when PACK.md exists. If HEARTBEAT.md already exists and PACK.md does not, start at checkpoint 2. If PACK.md exists, the resume is stop. You paste the file. The bot does not post.

Never re-send is a destination check. Grok Bot will not give you an action ledger. Open the Slack channel, or the sent folder if mail was in scope. If the artifact is there, the send happened. Write the ID into NOTES.md. Resume after that verb. If the artifact is not there and an approval is still on screen, deny is still available. Never re-run a send to be sure. Send-on-ask still waits while you sleep. That wait is not a license to tell the bot to post from the train.

## Walk Monday pack empty through the grok bot runbook once

Priya owns [Chief of Staff Briefing](/bots/chief-of-staff-briefing). The charter says: every Sunday at 21:00, write a Monday huddle pack under \`/workspace/monday-pack/\`. Calendar, open deals, support heat, decisions needed. Every claim needs a source, a quote, or a could-not-compute line. Write HEARTBEAT.md even when the week is quiet. Never post. Priya pastes PACK.md into #exec-huddle at 07:45, or Sam does.

Sunday 21:00 comes. Nobody watches. Monday 07:12, Priya opens Slack on her phone. #exec-huddle has Friday notes and nothing from last night. The huddle is in forty-eight minutes. The remembered instruction is try it again.

| Clock | What Priya sees | Grok bot runbook move | Wrong move |
|---|---|---|---|
| Sun 21:00 | Routine should fire | Unattended, by design | Treat the laptop lid as a kill switch |
| Mon 07:12 | Slack empty | Symptom: Monday pack empty | The bot is down |
| Mon 07:13 | She cannot list \`/workspace\` from iPhone | Pause the routine from iPhone | Type run the Monday pack now from the train |
| Mon 07:40 | At a desk: folder empty, no HEARTBEAT.md, last history row 14 Aug | Inspect, write NOTES.md checkpoint 0 | Create a second bot to get the pack out |
| Mon 07:45 | Resume at checkpoint 1, never-send | Bot writes HEARTBEAT.md and PACK.md, stops | Also post it to #exec-huddle |
| Mon 07:52 | Priya pastes PACK.md | Human send | Leave the routine enabled so a late fire posts later |

The 07:13 phone prompt is the expensive wrong move. If the Sunday routine is late, it is a second job. If HEARTBEAT.md would have said EMPTY, it is a second scrape. If PACK.md already existed, plus a just-post-it line, it is a send you cannot retract.

Priya pauses at 07:13. At 07:40 the folder is empty and history is stale: checkpoint 0. She writes the inspect sentence, types the resume that forbids Slack, pastes the pack herself, and leaves the routine paused until she confirms the schedule on desktop. The huddle gets a late pack, not two packs. If HEARTBEAT.md had said EMPTY at 21:07 Sunday, the grok bot runbook would have ended at look-at-heartbeat.

## Keep this grok bot runbook off the troubleshooting catalog and off stalled

Searchers mix three jobs. Name the failure class. Restart a silent sit without doubling writes. Execute a pasteable overnight protocol. Those are three pages.

| Page | Job | Use it when | Do not use it when |
|---|---|---|---|
| [Grok Bot troubleshooting](/blog/grok-bot-troubleshooting) | Name which of fifteen failures you have | You do not know the class: trigger miss, duplicate, freeze, allowance, bland output | You already know breakfast is empty and you need the six steps |
| [Grok Bot stalled](/blog/grok-bot-stalled) | Restart a silent sit without doubling writes | Chat is frozen, files are on disk, a mid-job wait or selector or 2FA wall | The folder is empty and the miss is the missing pack |
| This grok bot runbook | Paste the overnight protocol, then execute it | You are writing the file before Sunday, or walking symptom -> heartbeat -> pause -> inspect -> resume -> never re-send at breakfast | You want a catalog of causes, or a freeze restart for a job that already wrote screenshots |

Troubleshooting names the class. Stalled restarts a freeze when the folder is full. This page assumes overnight silence, usually an empty Monday pack, and that you need a file you can paste before the night happens. A fifteen-row table is not a runbook. A freeze restart is not a runbook. A grok bot runbook is the six steps plus the names, the paths, and the never-send line.

## Store the grok bot runbook in the charter the routine actually loads

A Slack pin is a reminder for humans. The routine does not read Slack pins. Teach-by-demonstration will not save you. That feature records up to ten minutes of a browser workflow, no microphone audio, desktop only, produces a draft skill, and is unavailable on iPhone. A click path is not a pause step.

Put the grok bot runbook in the standing instructions the job loads. If the block is not in the charter, it is not a rule. Edit on desktop. iPhone can pause and resume. It cannot edit. If you cannot paste the runbook today, do not turn the routine on today. Twenty run records per routine is not a year of heartbeats. HEARTBEAT.md is the log you still have after the product drops the twenty-first row. Deleting the bot deletes the routines and does not retract a Slack post that already left.

## Pause from iPhone and inspect from desktop

The grok bot runbook splits across two devices on purpose. The dangerous verb at 07:12 is the breakfast prompt typed with one thumb. Pause is safe from a phone. Inspect is not. Resume is a desktop verb because you need to see the folder.

On iPhone you confirm the routine is paused, then you stop typing. You do not assume the folder is empty because you cannot list it. You get to a Mac or a Windows machine (Apple silicon, Intel, x64, or Arm64), list \`/workspace\`, write NOTES.md, then resume. If the owner is traveling with only a phone, the backup at a desk owns inspect and resume. A traveling owner who types run it now is how a late fire and a phone prompt overlap.

Do not wait for an audit view. There is not one yet. There is no Grok Bot-specific spend cap. Subscriptions include a weekly usage allowance, then on-demand from model and token cost. No published dollar figure for that allowance. A second fire still draws it. Pause is cheaper than a second scrape.

## Answer the objection that re-prompting at breakfast is faster than a grok bot runbook

The objection is honest. The huddle is in forty minutes. Writing six steps last week feels like paperwork. Typing the original Sunday prompt into chat takes ten seconds.

Re-prompting is faster only when the folder is empty, the destination is clean, the routine is paused, and you already knew those three facts. You do not know them from Slack. You know them after pause and inspect. The ten-second prompt skips both, which is how it stops being fast.

Re-prompting is a second job when the Sunday routine is late. Re-prompting is a second scrape when HEARTBEAT.md already said EMPTY. Re-prompting is a send when PACK.md exists and someone adds just post it. Re-prompting from two unofficial owners is two of those, in parallel, on one shared computer.

The grok bot runbook is four names and a path. You write it once. You execute it in three minutes at a desk. The huddle still happens. What you do not get is two packs and a routine still enabled that fires again at 09:00. Overnight work is the shift where the person who remembers is on a train. Memory is not a runbook. For Monday pack empty, wiping is already the state you found. Checkpoint 0 is an empty folder. You still pause, write the inspect sentence, and forbid send. Emptiness does not license a thumb prompt from iPhone.

## Rehearse the grok bot runbook on a watched run before the first unattended night

Do not learn the six steps on a live Monday. Rehearse on a Tuesday you are watching.

Run the job by hand with the grok bot runbook already in the charter. Watch HEARTBEAT.md appear. Confirm it names the job, the time, the owner, and PACK written or EMPTY. Pause, list the folder, type a resume that should no-op because checkpoint 2 is already done. Confirm the bot stops and does not post.

Then break it on purpose once. Delete HEARTBEAT.md after a good run and walk the breakfast path. The inspect should say heartbeat missing, PACK.md present, destination empty. The resume should be stop, human pastes, never re-send. If the bot rewrites PACK.md and posts, the grok bot runbook is not loaded. Fix the charter before any Sunday. Rehearse pause from iPhone on that same Tuesday. [Lead Scout](/bots/lead-scout) gets the same rehearsal with a sheet: heartbeat row, never-contact. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) gets it with drafts that must not send. The filenames change. The six steps do not.

## File each overnight miss as one row the next owner can read

After you execute the grok bot runbook, append one row to NOTES.md. Date, symptom, heartbeat state, pause time, inspect sentence, resume, destination check, who posted. Twenty product run records will not keep this. The file will.

The next owner should be able to open \`/workspace/monday-pack/\` and see last Monday without asking Priya. When Priya is out, Sam reads the last row, then executes the same six steps. He does not invent a seventh step called I will just re-run it.

If the miss was a schedule problem, fix the schedule on desktop after the huddle. If the miss was a deleted bot, recreate the routine on the named bot, paste the grok bot runbook again, rehearse once. If the miss was EMPTY, leave it. Do not improve a quiet week into a fluent paragraph with no source. Copy NOTES.md off the shared computer if you need a trail longer than the disk you trust. Deleting a bot does not wipe the files. Another bot on the same account can read them. Treat the grok bot runbook like the pack: a path, an owner, a never-send line.

**Keep reading:** [Grok Bot Stalled Mid-Job: How to Restart Without Doubling the Work](/blog/grok-bot-stalled), [How to Schedule a Grok Bot Routine That Does Not Fail Silently](/blog/how-to-schedule-a-grok-bot-routine), [Make a Grok Bot Show Its Work on Every Claim](/blog/grok-bot-evidence-rules).

## Frequently Asked Questions

### What does a grok bot runbook have to name before the first overnight run?

A grok bot runbook has to name a human owner, a pause step, a heartbeat path under \`/workspace\`, and a restart checkpoint. Overnight silence is not a product mystery if those four lines were never written. The owner pauses the routine at breakfast. The pause step is the control you click before you type in chat. The heartbeat is a file the job writes even when the pack is empty, so empty and broken do not look the same. The checkpoint is the last finished file plus the next allowed step, including the never-send line. Chat pins do not survive a deleted thread. The charter the routine loads does.

### The Monday pack is empty. Should I re-run the original Sunday prompt?

No. Pause the routine first, then look at HEARTBEAT.md. If the heartbeat is missing, you have no proof the job ran, and a second prompt can overlap a late fire. If the heartbeat says EMPTY with a current timestamp, the job ran and found nothing, and a re-run is a second scrape, not a repair. If PACK.md exists and Slack is empty, the write happened and the post did not, so never re-send. Resume from the checkpoint the notes file names. The original Sunday prompt is how a late routine and a breakfast prompt write two packs.

### Can I keep the grok bot runbook in a Slack pin instead of the bot charter?

A Slack pin is a reminder for humans. The routine does not read Slack pins. A routine assigns a workflow to one bot, keeps twenty run records, and dies when you delete that bot. If the grok bot runbook is not in the standing instructions the job loads, the overnight fire will not write HEARTBEAT.md, will not stop at a checkpoint, and will not obey never-send. Paste the runbook into the charter on desktop. iPhone can pause and resume only. Editing the charter needs macOS or Windows. Do not turn the routine on until the paste exists.

### Who pauses the overnight bot if two people share the account?

Name one owner and one backup in the grok bot runbook. Two people who both keep an eye on it produce two breakfast prompts, which is a double fire. All bots on the account share one persistent cloud computer, so a second bot is not a second machine and is not a security boundary. The owner pauses, inspects \`/workspace\`, and writes the resume. The backup does that only if the owner is out. Put both names in the file. Do not put the duty person as a role with no calendar. Overnight silence with two unofficial owners is how a send leaves twice.
`,
};
