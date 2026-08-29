import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Local Computer Approvals Do Not Reverse Completed Work',
  description:
    'Use grok bot local computer approval as a gate before an action, then design separate recovery steps for files, messages, purchases, and writes.',
  date: '2026-08-29',
  category: 'Safety',
  content: `
# Local Computer Approvals Do Not Reverse Completed Work

Tomas approved a local computer action because the preview looked like a draft export. The bot created the file, moved it into a watched folder, and a separate sync imported it. When Tomas rejected the next prompt, he expected the earlier approval to unwind. It did not.

The verified Grok Bot security documentation states the rule plainly: an approval controls the proposed action and does not reverse work already completed. That means approval design has two jobs. It must place the question before the first meaningful effect, and it must pair every allowed effect with a recovery procedure that exists outside the approval dialog.

This article focuses on local computer approvals around files, browser interaction, and commands on the shared Grok Bot computer. It does not claim a rejection can recall a message, refund a purchase, restore deleted data, or remove an imported record. The operating boundary is: the bot may prepare and preview, but a person must authorize the exact externally visible or destructive step before it begins.

## Draw the approval point before the first observer can see the result

Do not equate "final click" with "first effect." A file can trigger a watcher as soon as it enters a directory. A draft can notify collaborators when created. A command can truncate a target before printing its summary. Find the earliest moment the outside world, another process, or a durable store can observe the change.

Tomas's workflow had four steps: create CSV, move CSV, importer reads folder, CRM changes. The visible approval sat before the CRM screen, but the causal action was the folder move. By the time the CRM prompt appeared, the importer already possessed the file.

| Step | Local action | First observer | Approval belongs |
|---|---|---|---|
| Draft report | Write in isolated workspace | Tomas only | Usually after preview |
| Move to watched folder | File-system rename | Import service | Before the move |
| Open compose form | Browser navigation | Nobody external | Before send, not before open |
| Submit message | Browser click | Recipient system | Before submit |
| Run cleanup command | File deletion begins | Shared storage | Before command starts |

Approvals are gates in a sequence. Put the gate where causality crosses the boundary, not where the interface happens to look serious.

## Classify completion by effect instead of by task label

"Update report" can mean editing a local draft or publishing a customer dashboard. Task names conceal completion. Describe the effect using a verb, object, destination, and observer: "write renewal status to CRM account 184" is reviewable; "finish renewal task" is not.

Use four effect classes. Private preparation produces an artifact only the operator reviews. Shared creation makes something visible without replacing existing state. Mutation changes an existing record. Destruction removes or invalidates state. The approval threshold rises as recovery becomes less reliable, but any class can cross a boundary early through a watched folder or shared document.

[Approval Gates for Bots](/blog/approval-gates-for-bots) offers the general boundary pattern. [The reversibility guide](/blog/grok-bot-approval-rules-reversibility) explains why task size is a poor proxy. Here, keep the question mechanical: what exact effect has completed when the operator first sees the prompt?

If the answer includes a recipient, vendor, production database, payment network, or shared directory, the gate is already late.

## Separate approve, reject, cancel, and recover into four different verbs

An approval accepts a proposed future action. A rejection withholds that permission. Cancel asks an in-progress operation to stop. Recover performs new work intended to reduce or reverse an earlier effect. These verbs can happen in sequence, but none guarantees another.

| Control | Time direction | What it can promise | What it cannot promise |
|---|---|---|---|
| Approve | Before action | Proposed action may proceed | Result will be reversible |
| Reject | Before action | Proposed action should not proceed | Earlier work disappears |
| Cancel | During action | Stop may be attempted | Remote system rolls back |
| Recover | After action | A compensating procedure runs | Original event never happened |

Tomas rejected a later step. That protected him from the later proposed action only. It did not cancel the importer, delete the transferred CSV, or restore prior CRM values. A recovery plan needed separate credentials, evidence, and human decisions.

Make the state visible in every run record you control. Use "proposed," "approved," "started," "completed," "recovery started," and "recovery closed" as separate values. Do not overwrite completed with rejected when a later proposal is declined. That false simplification is how a team loses the distinction between a prevented action and a contained incident. Include the target and an artifact identifier beside each state so the operator can tell whether two prompts concern the same object. For Tomas, the CSV hash connected the preview, the watcher event, and the 40 changed records. Without that identifier, the rejected summary prompt could easily have been mistaken for rejection of the import itself.

The state model also clarifies partial completion. If a command changes seven of twelve files and then fails, mark the attempted operation failed and the seven individual changes completed. Recovery should inspect all twelve candidates, restore the seven confirmed changes, and leave the five untouched. A single red status for the parent command cannot describe that outcome.

Use these terms in runbooks. "Reject to undo" should never appear. Say "reject the pending submit, then run the documented recovery for any completed file move." Precision prevents an operator from leaving the incident because the prompt disappeared.

## Trace file work through watchers, sync clients, and shared storage

Local file operations look reversible because files can often be moved back. That intuition fails when another process observes the path. A watcher may import, publish, encrypt, index, or notify before the operator notices. Copying the file back does not retract those downstream effects.

Inventory every directory used by a routine. Mark scratch, quarantine, reviewed, watched, synced, and published locations. Draft only in scratch or quarantine. Require approval before the transition into any watched or synced location. If a tool cannot distinguish those directories reliably, remove the automated move and let a person perform it.

Grok Bot's computer is shared across all bots on the account, including files. A sibling bot can encounter artifacts created by another job. [VM Overwatch](/bots/vm-overwatch) can inventory paths and stale artifacts, but give it a read-only charter during discovery. [Bookkeeping Auditor](/bots/bookkeeping-auditor) can compare expected and observed records after a financial-file incident without receiving payment authority.

The boundary is the directory transition. File creation is not automatically harmless, and file deletion is not automatically the only dangerous operation.

## Place browser approval on submit, publish, purchase, and tenant switches

Browser work often includes a long preparation path followed by one consequential request. Let the bot navigate, read, and fill a form if those actions are safe in the specific service. Stop before submit, publish, purchase, delete, invite, change role, or switch organization where the switch itself exposes a different tenant.

The approval preview should show destination identity, account identity, exact payload, effect verb, and recovery owner. A generic "Allow browser action?" is too thin for a human to judge. Tomas needs to know whether a click sends one draft to a test alias or changes 400 production records.

Browser sessions are shared across bots on the account's persistent computer. Confirm the signed-in vendor identity before presenting the action. The [wrong-account incident guide](/blog/grok-bot-wrong-account-signed-in) explains the two-field identity check. A perfect payload sent from the wrong tenant is still a bad action.

Do not assume closing the browser reverses a submitted request. Once the vendor acknowledges it, recovery follows the vendor's process and may be impossible.

## Treat command approval as permission for the whole command's effects

A command can perform several effects before it exits. Its final output is not a preview. A script may delete a temporary directory, upload a file, update a repository, and then fail while printing the last step. Approval belongs before execution, with the scope made visible.

Avoid commands that discover broad targets at runtime when the operator cannot review them. Resolve explicit paths and record counts first. Split inspection from mutation. First list the 12 candidate files. Then ask approval for a command that targets those exact 12 paths. If the candidate set changes, invalidate the approval and inspect again.

Use [Codebase Hardening Auditor](/bots/codebase-hardening-auditor) for a read-only report pattern and [PR Review Sentinel](/bots/pr-review-sentinel) for proposed code feedback. Neither pattern needs permission to delete files or push changes. The bot can prepare a patch while the operator owns application.

Command-line credentials are also shared across bots on the computer. A narrow command string does not fix an overpowered credential. Review both what the command requests and what the active identity could do.

## Write an approval charter that names the preview and the recovery owner

The charter should state which actions may proceed alone, which require an exact preview, and who handles completed effects. Avoid "ask before anything risky." Risk is not a parsable verb.

\`\`\`yaml
job: renewal-csv-preparation
allowed_without_approval:
  - read approved input export
  - draft output in /work/quarantine
  - validate row count and schema
approval_required_before:
  - move any file outside /work/quarantine
  - submit any browser form
  - run any command that writes or deletes
approval_preview:
  - active_vendor_identity
  - exact_action
  - exact_target
  - item_count
  - payload_hash
boundary:
  never_without_human:
    - import to CRM
    - send, publish, purchase, or delete
on_rejection: leave_quarantine_unchanged
recovery_owner: Tomas
\`\`\`

The charter does not promise undo. It tells the bot what remains untouched after rejection and tells the team who investigates completed work.

## Choose a recovery procedure for each class of completed effect

Recovery must be written before the first production approval. A local draft may need deletion from quarantine. A moved file may require stopping a watcher and checking imports. A message may need correction or recipient contact. A payment may require vendor cancellation or finance escalation. A deleted record may require restoration from a source of truth.

| Completed effect | First recovery step | Evidence to preserve | Recovery limit |
|---|---|---|---|
| File moved to watched folder | Pause watcher | File hash and import time | Watcher may have consumed it |
| CRM rows changed | Stop later writes | Record IDs and prior values | Other users may act on changes |
| Message sent | Preserve exact message | Recipient and timestamp | Recall may not exist |
| Purchase submitted | Contact finance and vendor | Order ID and account | Cancellation may fail |
| File deleted | Stop further writes | Path and deletion time | Backup may be absent |
| Public page published | Unpublish if authorized | URL and captured copy | Caches and readers remain |

Write "reduce impact" rather than "erase history." A recovery can restore state while the original observation remains real.

## Diagnose late approvals from the symptom they leave behind

When an operator says "I rejected it but it still happened," determine which effect completed before the rejection. Do not start by debating whether the button worked.

| Symptom | Likely sequence error | Check | Fix |
|---|---|---|---|
| Rows changed after rejection | Import began before prompt | Import logs and file time | Gate folder move |
| Draft reached recipient | Send occurred in earlier step | Vendor sent folder | Gate submit request |
| File missing after command failed | Deletion preceded error | Command plan and backup | Split inspect from mutate |
| Wrong tenant read before stop | Identity check followed navigation | Account label and URLs | Gate tenant access earlier |
| Sibling bot finds sensitive file | Shared storage was treated as private | File path from sibling screen | Use quarantine and least data |

The fix moves the approval earlier or removes the automated effect. Adding another prompt after the same irreversible step only creates more interface, not more control.

## Answer the operator who wants one universal approval prompt

One prompt for every local action sounds safer and is easy to explain. In practice it teaches the operator to approve low-information questions. Reading a fixture and publishing a page become visually equal. Fatigue grows while the dangerous transition remains hard to spot.

Use automation for private preparation and reserve approvals for boundary crossings with specific previews. A prompt that says "Move 12 rows from quarantine into the Harbor Retail import folder" is useful. A prompt that says "Allow computer use" is not a decision packet.

The counterexample matters: if you cannot classify the environment or trust the charter, asking every time is a reasonable temporary containment mode. Keep the work paused where even a read exposes sensitive data. But treat universal prompting as a diagnostic posture, not proof that effects are reversible.

Verified documentation describes a team-level ceiling for local execution as coming soon, not shipped. Do not build today's control story around an unavailable setting.

## Walk Tomas through the watched-folder failure and recovery

At 09:05, the bot drafted 40 renewal rows in quarantine. At 09:08, Tomas approved "prepare import." The workflow moved the CSV into a watched directory, and the importer changed 40 CRM records. At 09:09, a browser prompt asked whether to continue to a summary page. Tomas rejected it. The CRM changes remained.

He paused the routine and importer, preserved the CSV hash, recorded 40 record IDs, and compared prior values from the approved export. [Claim Provenance Tracker](/bots/claim-provenance-tracker) attached the source row to each recovery decision. A person restored 38 records. Two had been edited by account managers after import, so Tomas escalated rather than overwriting their newer work.

The revised workflow drafts in quarantine, prints the exact row count and hash, and asks approval before the move. A rejected move leaves the file in quarantine. A completed move starts a recovery clock; it does not create an undo button. Thirty days later, the team sampled five imports and confirmed each approval preceded the watcher timestamp.

## Verify the gate with a watcher that records without importing

Build a harmless test watcher that records the time it sees a filename but does not consume the file. Use invented data. Run the workflow and reject the move approval. Passing means the watcher records nothing and the file stays in quarantine. Failing means the watcher sees the file before or despite rejection.

Then approve one test move. The approval time must precede the watcher time, and the preview hash must match the observed file. Change the file after preview and confirm the approval becomes invalid or the workflow stops. This protects against approving one payload and moving another.

Repeat the pattern for browser submits with an invented recipient and for commands against a disposable fixture directory. The test must be able to fail visibly. [The local approval setup guide](/blog/how-to-set-grok-bot-approvals) provides adjacent configuration context, while this test focuses on causal ordering.

Record the evidence in a small table that the next operator can reproduce. A green label without timestamps is not enough.

## Stop automating when recovery depends on authority the operator lacks

This procedure breaks down when the team cannot pause the downstream system, identify changed objects, or restore state. If a purchase cannot be cancelled, a message cannot be recalled, or a destructive command has no backup, the approval must sit before the action and the automation must not bypass it. Where the preview cannot describe the target, return the action to a person.

It also stops before mobile management details. On iPhone, Grok Bot supports pause and resume, while editing, history, testing, and deleting require desktop. Use [the iPhone companion guide](/blog/grok-bot-iphone-app) for that split. A phone pause can limit later work, but it does not reverse the work that already completed.

For shared credential risk, continue with [the shared computer guide](/blog/grok-bot-shared-computer-security). For inherited workflows whose sequence is unknown, use [the inherited-bot audit](/blog/how-to-audit-a-bot-you-inherited) before changing grants.

Keep reading: [draw the line on reversibility](/blog/grok-bot-approval-rules-reversibility), [set concrete approval gates](/blog/approval-gates-for-bots), and [verify vendor identity before submit](/blog/grok-bot-wrong-account-signed-in).

## Frequently Asked Questions

### Does rejecting a Grok Bot local computer approval undo earlier steps?

No. Verified Grok Bot security documentation says an approval controls the proposed action and does not reverse work already completed. Rejection should stop the pending proposal, but a prior file move, browser submission, command effect, or downstream import remains a separate fact. Preserve evidence and run the recovery procedure for that effect. Design the workflow so private preparation happens first and approval appears before the earliest externally visible, destructive, or durable transition, not before a later screen that merely looks final.

### Where should I place approval in a watched-folder workflow?

Place it before the file enters the watched directory. The move or copy is the causal boundary because another process can observe and consume the file immediately. Show the operator the exact source, destination, item count, file hash, active identity, and intended downstream effect. A rejection should leave the artifact unchanged in quarantine. Test this ordering with a harmless watcher that records timestamps without importing. If the watcher sees the file before approval, the gate is late even when a later application prompt still appears.

### Can a recovery procedure make an approved action fully reversible?

Sometimes recovery restores the prior data state, but it cannot guarantee that the original action was never observed. A sent message may be read, a published page may be cached, a CRM change may trigger another workflow, and a purchase cancellation may fail. Define recovery as a compensating process with an owner, evidence, and limits. Before approval, state the first recovery step and what authority it requires. If reliable recovery is impossible, narrow the automation and keep the consequential action manual.

### Should every local computer action require approval?

Use universal prompting as temporary containment when the environment or inherited charter is unknown. For a stable workflow, classify actions and reserve high-information approval for the exact boundary crossing. Reading approved fixtures and drafting in quarantine can often proceed without interruption, while file moves into watched folders, browser submits, writes, deletes, purchases, publishes, and credential changes should stop with a specific preview. Too many vague prompts create approval fatigue. The goal is not prompt volume; it is correct causal placement before the first meaningful effect.
`,
};
