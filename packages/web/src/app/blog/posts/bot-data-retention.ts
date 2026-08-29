import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'What a Bot Keeps, What It Drops, and What You Must Keep Yourself',
  description:
    'Use this bot data retention map to separate recent run history, shared computer state, business records, and cleanup duties before evidence disappears.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# What a Bot Keeps, What It Drops, and What You Must Keep Yourself

Elena opens a routine after an incident and finds only recent runs. The original customer evidence is not there. A downloaded file still exists on the shared computer, but nobody knows whether it is the approved version. The business system has the final action but not the charter that produced the proposal.

This is a **bot data retention** design failure. Runtime history, persistent computer state, and durable business records have different lifetimes and purposes. Some data disappears from the convenient view. Some state persists after you expected cleanup. Your organization must decide what to preserve, where to preserve it, how long to keep it, and how to remove it.

This reference maps documented product behavior to an operating record plan. It does not set legal retention periods.

## Separate four stores before writing a retention policy

Elena draws four boxes: recent routine records, shared-computer state, backend-held connection material, and organization-owned records. Each box has a different owner and cleanup method. A rule such as "keep bot history for a year" is incomplete until it names the store and export path.

| Store | Example | Documented behavior | Operating question |
|---|---|---|---|
| Routine record view | Recent run result | 20 most recent records per routine | What must be exported? |
| Shared computer | Files, cookies, sessions | Persists across bots | What must be cleaned directly? |
| Hosted MCP token store | Hosted sign-in token | Kept with Cursor backend, not computer | How is connection access governed? |
| Business system | Approved ticket or decision | Organization controlled | What is the authoritative record? |

Do not infer one store's behavior from another. A token absent from the computer does not mean a downloaded report is absent.

## Treat the recent 20 runs as an operating window

Verified facts say the app keeps the 20 most recent run records per routine. That is a rolling convenience window, not a promise of permanent history. A frequent routine can move an important event out of view quickly.

Calculate how much time 20 runs represent at each cadence. For a weekday daily routine, the window covers roughly four workweeks if every run records once. For an hourly weekday routine, it can cover less than three workdays. Those are arithmetic examples, not retention guarantees about timestamps or failed runs.

[How to Schedule a Grok Bot Routine](/blog/how-to-schedule-a-grok-bot-routine) covers routine mechanics. Your record plan should not depend on remembering to export the nineteenth item.

## Preserve business evidence at the moment of handoff

When a bot produces a review packet, save the required evidence to the approved business system during the handoff. Do not wait for a later cleanup job to scrape runtime history. The handoff knows the case ID, charter version, source references, proposed action, reviewer, and disposition.

Use [Claim Provenance Tracker](/bots/claim-provenance-tracker) for source mapping, [Tickets to Changelog](/bots/tickets-to-changelog) for a durable handoff pattern, [Source Verifier](/bots/source-verifier) for evidence discipline, and [Persistent Bot Memory](/bots/persistent-bot-memory) as a reminder that persistence needs explicit boundaries. A catalog pattern is not a retention policy.

The business record should be minimal and sufficient. More copied data increases exposure without necessarily improving proof.

## Define an authoritative record for every consequential action

For a customer message, the authoritative record may be the approved communication system. For a bookkeeping exception, it may be the review ticket plus ledger reference. For a booking comparison, it may be the request row and reviewer decision. The bot conversation should not be the only place where the decision exists.

| Consequence | Authoritative record | Supporting evidence | Do not rely on |
|---|---|---|---|
| Customer send | Approved communication system | Final body, recipient, approver | Bot summary alone |
| Ledger decision | Accounting workflow | Exception packet and source | Download folder alone |
| Booking choice | Travel request system | Option packet and decision | Stale browser tab |
| Charter release | Version control | Diff, fixture, approver | Screenshot of prompt |
| Incident response | Incident system | Timeline and preserved artifacts | Recent-run window alone |

Authority and retention meet here. The system that owns the consequence should usually own the final record.

## Inventory files and sessions as persistent state

Verified facts say bots on one account share one persistent computer, including browser cookies, signed-in sessions, files, and command-line credentials. Use [Where a Bot Cookie Actually Lives](/blog/where-a-bot-cookie-actually-lives) for session detail and [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) for isolation.

This state may outlive a particular conversation or bot roster entry. It can be operationally useful, but it is not a curated archive. A file can remain without owner, classification, or version. A session can remain authenticated after the task ends.

Elena keeps a state inventory with location, purpose, sensitivity, owner, created date, cleanup condition, and verification. She never labels the shared download directory "retained evidence" merely because a file happens to remain.

## Keep hosted connection facts at their documented size

Verified facts say hosted MCP sign-in tokens stay with Cursor's backend and are never stored on the computer. That is a precise storage fact. It does not tell you the business record retention period, connection scope, or every revocation behavior.

Record which hosted connection supports each routine and who owns its review. Follow current product and organizational procedures for access changes. Do not copy tokens into a retention register.

The correct record is connection metadata needed for governance, not the secret itself: connector purpose, owner, approved scope, review date, and removal status.

## Write a record contract beside every charter

A charter says what work happens. A record contract says what evidence the process writes, where it writes it, who can read it, and when cleanup occurs.

\`\`\`text
PROCESS: renewal-packet-weekday
BUSINESS KEY: account_id plus renewal_cycle
PRESERVE: charter_version, source references, proposed draft, reviewer,
disposition, external action reference, incident flag
DESTINATION: Approved renewal operations record
EXCLUDE: session cookies, credentials, unrelated downloads, full inbox copies
CLEANUP: Remove temporary packet files after verified handoff
VERIFY: Retrieve one record by business key and confirm temporary file absence
BOUNDARY: Never treat runtime history or shared files as the sole business record.
\`\`\`

[How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) helps phrase the final prohibition. The contract should be reviewed with data owners.

## Minimize before deciding how long to keep

Retention discussions often start with duration. Start with necessity. Does the durable record need the full email, or a source reference and approved excerpt? Does it need every generated draft, or the reviewed final and disposition? Does it need a copied spreadsheet, or a stable record ID?

Elena uses three tests: the field proves a required decision, supports recovery, or meets an approved obligation. If it does none, she excludes it. This is an operating heuristic, not legal advice.

Minimization makes access review, deletion, and incident response more manageable. It also prevents a helpful debug bundle from quietly becoming a second customer database.

## Align duration with an approved policy owner

The bot team should not invent a universal number of days. Different records may have contractual, tax, employment, security, or privacy obligations. Ask the organization's qualified policy owner to assign the schedule.

| Record class | Policy owner to consult | Trigger to define | Disposal evidence |
|---|---|---|---|
| Customer communication | Customer operations and legal | Final action or contract event | System deletion record |
| Financial evidence | Finance and qualified advisers | Period close or obligation | Approved disposal process |
| Security incident | Security and legal | Incident closure | Incident-system record |
| Temporary research file | Process and data owner | Verified handoff | File absence check |
| Charter fixture | Automation owner | Superseded version policy | Versioned archive or deletion |

This reference supplies the questions, not the answers. Local obligations can change and require current expert guidance.

## Delete the state itself instead of deleting the bot label

Verified facts say deleting a bot does not remove shared-computer files or browser sessions. Deleting a bot does delete its routines. Those two effects make roster deletion a poor retention workflow.

Use [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files) for the full teardown sequence. Elena first pauses and inventories routines, preserves required records, ends sessions, removes temporary files, revokes relevant credentials through their issuer, verifies absence, and only then decides whether to delete the bot.

Do not claim that a visual disappearance proves data deletion. Verify the target store directly.

## Answer the operator who wants to keep everything for debugging

The strongest argument is that rare failures are hard to reproduce. More logs, screenshots, source payloads, and intermediate files can shorten investigation. Premature deletion can erase the one clue that explains an incident.

The answer is scoped diagnostic preservation, not indefinite copying. Define which fields support replay, protect them in an approved location, limit access, attach a case ID and charter version, and apply the approved duration. Use synthetic fixtures for recurring failure shapes whenever possible.

Keeping everything on a shared computer without classification makes later debugging less reliable because operators cannot distinguish approved evidence from stale residue.

## Trace Elena's missing incident record across the four stores

On July 8, routine R-14 creates a customer draft from source S-88. A reviewer edits and sends it. The routine keeps running, and the July record eventually leaves the recent 20-item window. The draft file remains in Downloads, but it has no charter version. The communication system retains the final send but not the rejected first claim.

After an August complaint, Elena cannot reconstruct the review. The runtime window dropped the run, the shared file is ambiguous, and the business handoff preserved too little.

She repairs the contract: every reviewed draft stores source references, charter version, reviewer disposition, and final communication ID at acceptance time. Temporary files are removed after a retrieval check.

## Diagnose retention failures by store and owner

| Symptom | Failed assumption | Immediate response | Durable fix |
|---|---|---|---|
| Needed run no longer visible | Recent window treated as archive | Preserve remaining evidence | Export at handoff |
| Old file remains after bot deletion | Roster treated as storage control | Inventory and remove safely | Direct cleanup procedure |
| Record cannot identify charter | Version omitted | Correlate available evidence | Require version field |
| Too much private data copied | Debugging had no minimum | Restrict access and assess | Field allowlist |
| Connection owner unknown | Metadata not governed | Pause dependent work | Add owner and review date |

The fix should act on the failed store. Creating another bot or renaming a routine does not repair missing evidence.

## Verify retention with retrieval and absence tests

Create eight synthetic cases. Mark four for durable preservation and four as temporary. Run the handoff. A second operator must retrieve each durable record by business key, identify the charter version, source, reviewer, and disposition. Then inspect the temporary workspace and confirm the four temporary artifacts are absent after cleanup.

Test the rolling-window assumption separately by creating practice run records without sensitive data until an early record is no longer in the recent view. Confirm the durable copy remains retrievable. Do not perform this volume test on a production routine if it would disrupt useful history.

A retention test needs both presence and absence. Presence proves required evidence survived. Absence proves temporary residue did not become an accidental archive.

## Add retention work to capacity and change reviews

Every new routine adds record volume, review duties, cleanup steps, and retrieval obligations. Include them in [Bot Capacity Planning](/blog/bot-capacity-planning). A fleet can exceed human control even when execution remains below product ceilings.

Every charter change asks whether sources, outputs, recipients, or consequences changed. Update the record contract in the same release. [Bot Change Management](/blog/bot-change-management) provides the diff, fixture, approval, and rollback path.

Do not let the data contract lag behind the charter. If a new field drives a decision but is not preserved, future reviewers may see the consequence without its evidence.

## Stop this reference before assigning legal retention periods

This page does not tell you how many days or years to keep financial, employment, customer, security, health, or personal data. It does not decide deletion rights, litigation holds, tax requirements, or contractual obligations. Consult qualified owners using current rules for your jurisdiction and organization.

It also does not promise a special audit view. Build your operating evidence in approved systems and verify retrieval. [What an Approval Actually Governs](/blog/what-an-approval-actually-governs) covers action approval, while [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) covers authority layers.

## Run a store-by-store teardown rehearsal before you need one

Elena creates a disposable practice routine with synthetic files, a practice browser session, a recent run record, and a durable handoff record. She labels every artifact with the same case key. The exercise tests whether operators can remove temporary state without destroying required evidence.

First, the operator pauses the routine and confirms that no later run appears. Second, they retrieve the durable business record by key and verify its charter version and source references. Third, they sign out of the practice site, remove the temporary file, and inspect the locations again. Finally, they delete the practice bot only after recording that its routines will be deleted.

The rehearsal has an important asymmetry. Successful cleanup requires the temporary file and session to be absent, while successful retention requires the approved handoff record to remain present. A single "done" checkbox cannot prove both.

Elena gives the exercise to a backup who did not create the artifacts. If the backup cannot locate a store or distinguish the durable copy from the temporary one, the inventory is incomplete. Add paths, owners, and verification steps, then rerun.

Do not use secrets as cleanup canaries. A synthetic filename and disposable account are enough to prove the procedure. Never copy a credential into another location merely so deletion can be checked later.

Test failed cleanup too. Leave one synthetic file intentionally and confirm the absence check catches it. End the browser session at the site but leave a local tab open, then verify the service identity rather than trusting tab appearance. The exact checks depend on the approved service and policy.

When a durable record contains a source link that later expires, decide whether the record contract needs an approved excerpt, checksum, or archived artifact. That choice belongs to the data owner. A link alone may prove where evidence came from without guaranteeing future availability.

Record disposal evidence proportionally. Temporary practice files may need a simple verified checklist. Regulated or contractual records may require a controlled process defined elsewhere. This reference does not elevate every cleanup to the same burden.

After the rehearsal, update three documents together: fleet register, record contract, and teardown runbook. A location change in one document but not the others creates the exact ambiguity the exercise is meant to expose.

Run the rehearsal after adding a new connector, changing the durable destination, or moving work to a different account computer. Retention is not a one-time policy paragraph. It is a set of store-specific actions that operators must be able to execute and prove.

Elena adds one more check for references between stores. A durable record may point to a temporary file path that disappears correctly, leaving the record technically present but useless. The contract marks which references must remain resolvable and which temporary locations must be replaced by an approved artifact or sufficient excerpt.

She also tests ownership transfer. When the routine owner changes, the successor must retrieve three sample records, explain the cleanup triggers, and locate every active connection. A name changed in the fleet register is not a completed handoff until the new owner can operate the record plan.

For paused routines, retention duties continue. Temporary files do not become permanent because execution stopped, and required business records do not become optional because no new runs arrive. The pause checklist includes evidence preservation and state cleanup dates.

For retired routines, Elena records the final run key, last charter version, durable destination, cleanup verification, and remaining policy-controlled records. This retirement card lets a later investigator distinguish intentional disposal from unexplained absence.

The final measure is retrieval time under realistic conditions. A record that exists but takes one specialist hours to locate may not meet the recovery need that justified keeping it. Elena measures the backup's lookup time and repairs naming, indexes, or access when retrieval fails.

She records failed retrieval drills as incidents in the retention process, not as operator mistakes to hide.

Keep reading: [persistent memory is not a vault](/blog/persistent-memory-file-is-not-a-vault), [least privilege for bots](/blog/least-privilege-bots), and [bot failure modes](/blog/bot-failure-modes).

## Frequently Asked Questions

### How many routine records does Grok Bot keep?

Verified product facts say the app keeps the 20 most recent run records per routine. Treat that as a rolling operating window, not a durable archive. How much time it represents depends on cadence. Preserve required business evidence at handoff in an approved system, using a stable business key, charter version, source references, reviewer disposition, and final action reference where applicable.

### Does deleting a bot delete its files and sessions?

No. Verified facts say deleting a bot does not remove shared-computer files or browser sessions, although deleting the bot also deletes its routines. Pause and inventory work first, preserve required records, clean each state store directly, revoke relevant access through its issuer, and verify absence. Delete the roster entry only after the retention and cleanup plan has been completed.

### What data should I keep outside the bot?

Keep the minimal evidence required to prove a business decision, support recovery, or meet an approved obligation. Typical fields include a stable case key, charter version, source references, proposed artifact, reviewer and disposition, final action reference, and incident flag. Exclude credentials, cookies, unrelated downloads, and broad source copies. A qualified policy owner must set access and duration.

### How do I test a bot data retention policy?

Use synthetic cases divided into records that must persist and temporary artifacts that must disappear. After handoff, have a second operator retrieve each durable record by business key and identify its version, source, reviewer, and disposition. Then inspect the temporary workspace and confirm cleanup. Test the recent-record rollover separately without disrupting production. A complete test proves both required presence and required absence.
`,
};
