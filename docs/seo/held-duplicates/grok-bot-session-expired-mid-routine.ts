import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Session Expired Mid-Routine: Do Not Re-Send',
  description: 'Use this grok bot session expired recovery plan to stop duplicate sends, separate completed steps from unknown steps, and resume only after human reconciliation.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# Session Expired Mid-Routine: Do Not Re-Send

Leena does not need a bot that looks busy. Leena needs a customer follow-up routine that lost its session after preparing six messages to arrive with enough evidence to review and no hidden external action. The useful setup is narrow: collect named inputs, preserve uncertainty, produce a private artifact, and stop at the boundary.

The boundary for this workflow is exact: **Never re-send, re-submit, re-publish, or repeat any externally visible step whose completion state is unknown.** That sentence is the control surface. A friendly bot name, a routine label, and a successful sign-in do not replace it. The longer explanations live in the [inheritance guide](/blog/grok-bot-browser-broke), [boundary guide](/blog/where-a-bot-cookie-actually-lives), [approval guide](/blog/what-an-approval-actually-governs), [permission guide](/blog/a-boundary-is-not-a-permission), [architecture guide](/blog/how-to-write-a-boundary-line), [operator guide](/blog/learn-grok-bot). This page spends its time on the failure you searched for.

The session expired after the fourth recipient page loaded. Three messages were confirmed sent, one showed no receipt, and two were untouched. A full retry would duplicate at least three messages and might duplicate a fourth.

Start from one of these real catalog patterns when it matches the work: [starting workflow](/bots/inbox-triage), [evidence helper](/bots/agent-work-logger), [review helper](/bots/support-reply-drafter), [briefing helper](/bots/chief-of-staff-briefing). Each is a starting charter, not an authorization grant. Replace its sample sources, owner, review window, and output path before the first live run.

The procedure below has one aim: make a repeated run boring enough to inspect. It uses an explicit source register, a four-state decision table, a private output, and a human checkpoint. If the evidence cannot support a row, the correct value is unknown. If the completion state cannot be proved, the correct action is stop.

## Read a silent sit as a wait until the screen says otherwise after the session break

A silent sit is not evidence that the job died. It is evidence that you cannot see the next step from the chat transcript. Chat is a commentary track. The work lives on the cloud computer: files, browser tabs, an approval prompt, an OTP field.

Grok Bot background work continues if you close the app, the laptop, or the iPhone. Closing your view does not pause the machine. Treat "no new message" as "go look", not as "it failed".

The [plain definition of a Grok Bot](/blog/what-is-a-grok-bot) already separates the window you type into from the job that keeps a desktop. If the preview is an approval, a login, or a page that no longer matches the last click, the bot is waiting. If the preview is a spinner with no prompt and \`/workspace\` has new files, a tool call likely ended without a result.

Do not grade the stall from your phone if you need to inspect files. On iPhone you can pause and resume only. Editing, history, testing, and deleting need desktop. Pause so the job does not keep retrying while you get to a machine that can list the folder. Resume is a desktop verb.

## Sort the freeze into wait, selector, 2FA, or tool timeout after the session break

Four causes produce the same chat: nothing new. They need four different first moves. Mixing them is how people clear a 2FA prompt by retyping the original job, or how they "fix" a selector by placing a second test order.

| Cause | What the silent sit actually is | What you see if you open the screen | First move |
|---|---|---|---|
| Approval you did not see | A gate, not a crash | Send-on-ask, local-computer ask, or a proposed click sitting untouched | Approve, deny, or capture. Do not retype the job |
| Page changed (selector) | The last click target is gone | New layout, cookie banner, 404, interstitial, renamed button | Screenshot the new page. Write the mismatch into NOTES.md. Resume from the last good file |
| 2FA wall | A human-only challenge | OTP field, passkey, authenticator push, SMS, or a CAPTCHA | You type it on the cloud desktop. Never paste a code into chat |
| Tool timeout | A call ended without a result | Spinner gone, last tool error, blank panel, or a file that stops mid-sentence | Read the last written file. Resume the next checkpoint. Do not invent how long it waited |

The approval row is the one people miss because the prompt is not in the chat. An approval controls the proposed action. It does not reverse work already completed. If ten files are written and the eleventh is sitting on ask, denying the eleventh leaves the ten. [Draw the Approval Line on Reversibility](/blog/grok-bot-approval-rules-reversibility) is the design for what should have been parked. This page is what you do when that park is why Grok Bot stalled.

The 2FA row is a safety rule. The [safety checklist](/blog/grok-bot-safety-checklist) is the pre-flight for connecting mail. Mid-run the same discipline applies: a code in chat is a code in the transcript, on a shared computer, visible to every other bot on the account. The timeout row has no published duration. Inspect the artifact. Resume from what is on disk.

## Open the bot's screen before you type any restart after the session break

The restart people type into chat is a second copy of the first prompt. The screen is the only place that can tell you the first copy is still in flight.

Open the Agent Computer preview. Is there a modal. Is there a field asking for a code. Is the URL a login. Is the last visible page the one from checkpoint 3 in NOTES.md. Those answers decide whether you click, type a resume, or stop.

If you cannot open the computer, do not guess. "The computer cannot be reached" is a recovery problem, not a restart problem. Recovery first. Inventory second. Resume third.

Write nothing in chat until you can say one sentence: "It is waiting on X" or "The last finished checkpoint is N" or "The folder is empty." If you cannot say one of those, you are still looking. Everything else is a second job wearing the first job's name.

## Inventory every file already sitting under /workspace after the session break

List \`/workspace\` before you instruct anything. Sort by name, then by time. You are looking for a NOTES.md or equivalent, a numbered screenshot sequence, a draft that was supposed to wait, and any identifier that exists in a destination system: an order ID, a message ID, a comment URL, a label already applied.

| Artifact | How you know it is complete | Resume action | What doubles if you ignore it |
|---|---|---|---|
| NOTES.md with a last checkpoint line | The line names a finished step and a next step | Start at the next numbered step | You redo work that already wrote files |
| Screenshot sequence 01, 02, 03 | Numbers are consecutive and the last image matches the last note | Capture the next state only, as 04 | A second 03 overwrites the evidence |
| Draft mail or Slack text on disk | File exists and no sent-ID is recorded | Leave it. Do not send from chat | A second copy leaves the building |
| Order ID, comment URL, label, or posted DM | The identifier exists in the destination | Skip that verb | A second order, a second comment, a second label |
| Empty folder, or only a copy of the charter | No run artifacts | Then, and only then, start at checkpoint 1 | Starting over is the correct move here |

[Inbox Triage](/bots/inbox-triage) is the everyday version: if it stalled after writing three drafts, those drafts are the job, and restarting the morning pass can relabel mail you already sorted. [Lead Scout](/bots/lead-scout) is the research version: a scored sheet already in the folder is not an invitation to scrape the same leads again.

All bots on the account share one persistent cloud computer assigned to the user, not to a bot. Screens are not security boundaries. Files stay when you delete a bot. That is useful when Grok Bot stalled, because the leftover files are still there to read. [What Grok Bot actually isolates](/blog/grok-bot-shared-computer-security) is the architecture. This inventory is how you use it as a resume kit.

## Resume from the last written checkpoint, never from step one after the session break

A resume is a new instruction that names what is already done and what is allowed next. It is not "continue" and it is not a paste of the original charter. "Continue" invites the model to replay the whole job with more confidence. The original charter invites the same replay.

Name the artifacts. Name the checkpoint. Name the verb that is forbidden because it might already have happened.

"NOTES.md says checkpoint 3 is complete: staging order STG-4419 exists, confirmation screenshot is missing. Do not place an order. Do not click Pay. Open the confirmation page for STG-4419, save it as 05-confirmation.png, append checkpoint 4, then stop."

That paragraph is the whole restart. If STG-4419 is a hallucination in the note, the destination check will catch it. If you instead paste the original "reproduce checkout and place a test order" prompt, you get STG-4420.

Write the resume into NOTES.md after you send it, with the time. Chat history is a poor index. The file is the index.

| What the inventory showed | Resume | Start over | Stop for a human |
|---|---|---|---|
| Last checkpoint complete, next step reversible | Yes | No | No |
| Irreversible verb, destination status unknown | No | No | Yes. Check the destination first |
| Approval or 2FA still on screen | After you clear it | No | If you cannot clear it |
| Folder empty, destination clean | No | Yes | No |
| Selector broken, screenshots already good | Yes, next capture only | No | If the site now demands a login you cannot pass |

## Refuse to re-run any send that might already have left after the session break

Send is the verb that cannot be inventoried from good intentions. Mail, a ticket comment, a customer DM, a payment, a Buy click, a calendar invite with attendees: if it might have left, you do not retry it from chat.

Grok Bot will not give you an action ledger. Check the destination. Open the sent folder in [Gmail](/blog/grok-bot-gmail) if mail was in scope. Open the staging orders list if Pay was in scope. Open the issue thread if a comment was in scope. [Standup Scribe](/bots/standup-scribe) posts only to your own DM: open that DM before you tell it to draft again.

If the destination has the artifact, the send happened. Write the ID into NOTES.md if the bot failed to. Resume after that verb. If the destination does not have it, and the screen still shows an approval, the send has not left. Deny is still available. Never re-run a send to be sure. Being sure is a search in the destination, not a second click.

## Reconstruct a half-finished bug hunt from the screenshots already saved after the session break

Mira asked a bot to reproduce a checkout spinner on staging. The charter said: record the environment, walk the path, capture each state as a numbered PNG under \`/workspace/repro\`, write NOTES.md, never click Pay on production, never comment on the GitHub issue. She left for a meeting. She came back to a silent sit.

The screen was an authenticator prompt on the staging admin, opened because the bot wanted the order record after Pay. Chat had nothing new. The folder had 01-home.png, 02-pdp.png, 03-cart.png, 04-checkout-spinner.png, and NOTES.md. Checkpoint 3 said: spinner reproduced, Pay clicked on staging, order STG-4419 created, confirmation screenshot pending, admin record pending. Checkpoint 4 was empty.

The restart that would have doubled the work was "do the reproduction again from the homepage." That path clicks Pay. Staging would have issued STG-4420: two orders, and a NOTES.md that matches neither.

The restart that did not: Mira typed the code on the cloud desktop, never into chat. She confirmed STG-4419 in the admin. She wrote a resume that named STG-4419 and forbade Pay. The bot saved 05-confirmation.png and 06-admin-order.png, filled checkpoint 4, and stopped with a draft issue comment in \`/workspace/repro/draft-comment.md\`. The GitHub issue stayed untouched because commenting is a send.

Copy that shape. The screenshots are the proof the first run already spent. The identifier in NOTES.md is the lock on the irreversible verb. The 2FA wall was a wait. Treating it as a crash is how people replay Pay.

## Put numbered checkpoints in the charter so a stall has a landing after the session break

A stall is expensive when the charter is a blob. "Reproduce the checkout bug and write it up" has no landing. After a sit you cannot point at a finished step, so you point at the beginning.

Write checkpoints as named, ordered, disk-visible states. Each one produces a file or a line in NOTES.md. Each one names the verb that must not repeat if that file exists.

\`\`\`text
You reproduce one staging checkout bug per run. Work only under /workspace/repro.

CHECKPOINT 1 - environment
Write env.md: URL, account role, browser as shown, time. Stop if you cannot load the site.

CHECKPOINT 2 - path to the failure
Capture 01-home.png through the last healthy state. Do not skip numbers. If a file 03-*.png exists, the next capture is 04.

CHECKPOINT 3 - failure and irreversible step
Capture the spinner or error. If the charter for this bug requires a staging Pay click, click Pay once. Write the order ID into NOTES.md before you do anything else. If NOTES.md already contains an order ID, never click Pay.

CHECKPOINT 4 - confirmation
Save confirmation and admin record screenshots. Append checkpoint 4. Write draft-comment.md. Stop.

RESUME RULE
If a run is interrupted, list /workspace/repro, read NOTES.md, and continue at the first incomplete checkpoint. Never restart from checkpoint 1 when a later checkpoint file exists.

BOUNDARY
Never click Pay on production. Never comment on GitHub, Slack, or email. Never paste a 2FA code. Never send. I file the ticket, or nobody files it.
\`\`\`

The resume rule is the line that makes Grok Bot stalled recoverable. Without it, thorough means start over. With it, thorough means read the folder. Inbox drafts get a checkpoint per labelled batch and a never-send line. Lead sheets get a checkpoint per source and a never-contact line. The names change. The rule does not.

## Keep this page off the fifteen-failure troubleshooting hub after the session break

Searchers mix two jobs: name the failure, and restart this run without copying it. The hub that lists fifteen failures is the first job. It will tell you a frozen run is usually a login, a captcha, an approval, or a page that never loaded. Useful, and a different page.

This page assumes you already know the sit is a freeze. It will not walk trigger misses, bland output, memory drift, or a spend argument. It will not invent a stall clock. It will not tell you to delete the bot as a restart. If your symptom is "nothing ran," you are not on this page. If your symptom is the silent sit with files on disk, stay here.

## Answer the objection that wiping and starting over is cleaner after the session break

The objection is honest. A dirty folder plus a confused bot feels riskier than an empty folder plus a fresh prompt. Cleanliness is a real value when the first run wrote garbage, when NOTES.md contradicts the destination, or when you cannot tell which files belong to this job.

Wiping is the right restart when the inventory is empty, when every file is from a different task, or when the destination confirms the irreversible verb did not happen and the local files are junk. Delete the junk on purpose, write "checkpoint 0, folder cleared by me" into a new NOTES.md, then start at checkpoint 1.

Wiping is the wrong restart when 04-checkout-spinner.png exists and STG-4419 exists. Those are the expensive half of the job. If you do not trust the bot to resume, write the resume yourself, with the forbidden verb in the same paragraph. The cleanliness you want is a NOTES.md that a stranger could resume from, not an empty directory.

## Prove the resume with a check that fails if you doubled the work after the session break

A resume that looks fine is how duplicates hide. After the bot stops, count the PNGs. If you had four and asked for two more, you should have six, numbered, no overwritten 04. Read NOTES.md from the bottom. The last checkpoint must be the one you named, with no second order ID. Search the destination for the identifier you already had. One hit is success. Two hits is a doubled send.

| Check | Pass | Fail |
|---|---|---|
| File count under \`/workspace/repro\` | Equals previous count plus only the new captures you asked for | New files with old numbers, or a second NOTES.md that restarts at checkpoint 1 |
| Identifiers in NOTES.md | The same order ID, message ID, or comment URL as before the stall | A second ID you did not have at inventory time |
| Destination search | One record for that ID | Two records, two mails, two comments |
| Screen after stop | Idle, or waiting on an approval you expected | A 2FA prompt you did not clear, or Pay in progress again |

Run the fail case on purpose once, on a staging job you can afford. Inventory four screenshots, write a resume that says "start from the homepage," and confirm that a charter with the resume rule refuses Pay. If it does not refuse, you do not run this bot against anything that can charge, mail, or comment.

## Hand the remaining step to a human when the wall is a login after the session break

Some stalls are not resumable by the bot. A 2FA prompt, a passkey, a CAPTCHA, a payment challenge, or an approval sitting on ask: those are human steps. You complete the human step on the cloud desktop, then you give a resume that starts after it.

Never paste a one-time code into the chat. The computer is shared. Cookies, sessions, files, and CLI credentials are shared. A code in the transcript is a code every other bot can read. Type it on the desktop, or deny the step and do the login yourself later.

If you cannot pass the wall, pause the routine from desktop, or from iPhone if pause is all you have. Do not keep sending resumes into a login screen. Do not create a second bot to go around the login. Separate bots are not a security boundary, and the second bot sits on the same computer with the same cookies.

If the wall is an approval for a send, you are being asked. Approve only after the inventory. Deny if the inventory shows the send already happened. Write the outcome into NOTES.md.

## Park irreversible verbs behind approval so a stall cannot send twice after the session break

The cheapest way to survive Grok Bot stalled is to make the dangerous verb wait. Files, screenshots, drafts, and NOTES.md can finish unattended. Mail, comments, payments, and production clicks should sit on ask.

An approval is a gate in front of the next step. It is not an undo for the last one. If Pay is unattended and the sit happens after Pay, you are in destination-check territory. If Pay is on ask and the sit is the ask, you still have a choice.

Write the park as a missing verb. "You never send. You never comment. You never click Pay on production. You never click Pay on staging if NOTES.md already has an order ID." [Inbox Triage](/bots/inbox-triage) already ships that shape: drafts wait. A bug hunt that can comment on GitHub is a mail bot in a lab coat.

Routines do not change the rule. A routine assigns a workflow to one bot. Max 50 routines per bot. The app keeps 20 most recent run records per routine. Those records will not tell you whether Pay ran. The approval prompt and NOTES.md will. Deleting the bot deletes the routines and does not retract the mail.

## Trust leftover files on the shared computer as the source of truth after the session break

People treat leftover files as a leak. After a stall they are the only honest history you have.

The cloud computer is assigned to your user account. Every bot shares it. Deleting the stalled bot does not remove \`/workspace/repro\`. It does not sign out the staging admin. It does not retract STG-4419. If you delete first and inspect second, you still have the files, and you still have not undone the send.

Copy anything you need off the machine if you are going to tear the bot down. Then resume or retire. Do not use a second bot as a broom unless that broom only reads and writes a report, because it can see every session the first bot left behind.

The source of truth order is destination system, then the files on the shared computer, then the chat. Chat is last because it went silent. When Grok Bot stalled, the job is not to make the chat look busy again. The job is to leave the world with one copy of the work.

**Keep reading:** [Draw the Approval Line on Reversibility, Not Task Size](/blog/grok-bot-approval-rules-reversibility), [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security), [The Grok Bot Safety Checklist Before You Connect Your Inbox](/blog/grok-bot-safety-checklist).

## Reconcile Leena's case with a four-state ledger before the next run after the session break after the session break

A retry is not a recovery plan. Recovery starts by writing down what is known for each unit of work. Give every candidate, deal, message, routine, or account one row. Do not let a clean final total erase a dirty intermediate state. The ledger should survive after the browser tab, plugin response, or recent-history row disappears.

| Observed state | Required action | Control result |
|---|---|---|
| Completion receipt exists | Mark complete and do not repeat | Proceed and retain evidence |
| Draft exists but no send began | Resume from the private draft | Stop automatic progress |
| Send began but receipt is absent | Quarantine for human reconciliation | Escalate with the gap named |
| Page was never opened | Continue only after the session is restored | Require explicit human handling |

For Leena, the first pass is intentionally manual. Number the units from 1 through 8, an arbitrary rehearsal size, and attach the source URL or record identifier to each row. Add observed-at time, output path, completion evidence, and reviewer. Eight is not a product limit. It is small enough to compare every row without sampling.

The walked failure matters because the tempting repair is the wrong repair. The session expired after the fourth recipient page loaded. Three messages were confirmed sent, one showed no receipt, and two were untouched. A full retry would duplicate at least three messages and might duplicate a fourth. The bot should not smooth that gap into a confident sentence. It should state which step completed, which step did not, and which step has an unknown state. That output gives the reviewer something actionable without pretending the missing evidence exists.

Use this charter fragment as the fixed rule for the next rehearsal:

\`\`\`text
OBJECTIVE
Prepare a customer follow-up routine that lost its session after preparing six messages.

SOURCES
Use only the identifiers and pages listed in the run manifest.
Record the source and observed-at time for every extracted fact.

OUTPUT
Write one private ledger row per unit.
Allowed states: complete, not-started, blocked, unknown.
Never convert unknown into complete or not-started.

BOUNDARY
Never re-send, re-submit, re-publish, or repeat any externally visible step whose completion state is unknown.

STOP CONDITIONS
Stop when a required source is absent, a completion receipt is missing,
or the requested action would cross the boundary.
Return the affected identifier, last proved step, missing evidence, and owner.
\`\`\`

Run the rehearsal twice. In run one, provide complete evidence for all eight units and confirm the output shape. In run two, remove one required field from unit 3, introduce a contradictory source for unit 5, and remove completion evidence from unit 7. A passing bot returns three different exceptions. A failing bot forces all three into the same successful state.

The review is also specific. Compare the eight input identifiers with the eight output rows. Open two cited sources at random, then inspect all three planted exceptions. Confirm that the bot did not create an extra row, hide a missing value, or cross the boundary. Record pass or fail beside each check. A sentence saying the run looked good is not evidence.

After the rehearsal, choose one of three outcomes. Promote the routine only if every planted exception stayed visible. Revise the charter if the wrong source won or the stop condition was vague. Retire the workflow if the human must reconstruct most rows anyway. That last answer is legitimate. Automation that moves the review burden into detective work has not removed work.

## Frequently Asked Questions

### What should I do first when Grok Bot stalled mid-job?

Open the bot's screen before you type anything. A silent sit is usually a wait, a selector that no longer matches, a 2FA wall, or a tool call that ended without a result. If an approval prompt or an OTP field is on screen, the bot is not dead. Then list the files under \`/workspace\`. NOTES.md and numbered screenshots tell you which checkpoint finished. Only after that inventory do you write a resume that names the next step. Starting over from the first prompt is how half-finished writes become duplicates.

### Can I tell the bot to start the job from the beginning?

### How do I know a send already went out?

Look at the destination, not the chat. The last chat line can say sending while the mail already left, or say sent while the approval is still sitting. Open the sent folder, the ticket thread, the staging orders list, or the Slack DM the bot was allowed to post to. If you find the artifact, the send happened. Write that ID into NOTES.md if the bot did not, then resume after it. Never paste a 2FA code into chat to finish the send. If the screen still shows an approval, the send has not left yet.

### Does a stalled run mean I should delete the bot?

No. Deleting the bot removes its profile, conversation, and routines. It does not remove the files or sessions on the shared computer, and it does not undo a send that already left. The leftover screenshots and NOTES.md are the resume kit. Delete after you have copied anything you need off the machine, and only if you are retiring the job. A stall is usually a wait, a selector, a 2FA wall, or a tool timeout. Fix that, then resume from the checkpoint.
`,
};
