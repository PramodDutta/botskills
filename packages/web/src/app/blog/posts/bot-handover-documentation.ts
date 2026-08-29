import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Handover Notes When the Owner Goes on PTO',
  description:
    'Use this grok bot handover template to transfer routine ownership, checkpoints, evidence rules, and pause authority without sharing a personal login.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# Handover Notes When the Owner Goes on PTO

At 17:20 on Friday, Ishan writes "Rhea knows the bot" in the team channel and leaves for twelve days. Monday's routine fails, Rhea finds three similarly named folders, and two managers ask her to retry. The handover transferred a name, not an operating state.

A grok bot handover must let the backup decide whether to pause, inspect, resume, deliver, or escalate without borrowing the owner's personal login or reconstructing policy from chat. It should fit in one reviewed document, point to current artifacts, and expire when the owner returns.

This guide covers temporary ownership during PTO. It does not redesign account isolation or explain the shared computer. Link to [where a bot cookie lives](/blog/where-a-bot-cookie-actually-lives) when that architecture matters, and spend the handover on the job itself.

## Name the exact coverage window before listing any work

Write the start and end time with timezone. "Next week" is ambiguous across travel and regional holidays. Add the moment authority returns to the primary owner. If Ishan returns on 14 September but will not review until 11:00, Rhea's coverage ends at 11:00, not midnight.

State whether the backup is active for all runs or only failures. A shadow backup may watch heartbeats while the primary still delivers output. A PTO backup owns routine decisions during the window. Do not leave both people active without a tie-break rule.

Record one emergency contact only if the person has agreed to interruptions. PTO is not a hidden on-call shift. The safe default should allow the backup to pause and wait without contacting the owner.

## Inventory bots and routines by identifiers, not nicknames

List each bot name, routine name, schedule, expected output, and heartbeat path. Include only jobs covered by this handover. A roster export with forty unrelated bots makes the backup hunt during a deadline.

Use exact labels visible in the product. A routine assigns a workflow to one bot, so write both. If a bot has several routines, a pause instruction must say whether to pause one or all of them. Deleting a bot also deletes its routines, which makes deletion an unsuitable temporary handover action.

| Bot | Routine | Expected fire | Heartbeat | Backup authority |
|---|---|---|---|---|
| Revenue Brief | monday-revenue-0730 | Mon 07:30 Asia/Kolkata | /workspace/revenue/HEARTBEAT.md | Pause, inspect, file-only replay |
| Deal Notes | deal-notes-1800 | Weekdays 18:00 | /workspace/deals/HEARTBEAT.md | Pause and escalate only |
| Win Loss Memo | friday-winloss-1600 | Fri 16:00 | /workspace/winloss/HEARTBEAT.md | Pause, verify, approve draft file |

## Transfer charter versions instead of remembered prompts

Name the current charter file and version for every covered job. Attach or link to the reviewed source. Do not paste a fragment from chat and call it current. The backup must be able to compare what ran with what was approved.

Summarize the job in four lines: allowed inputs, expected output, evidence rule, and boundary. The summary helps triage, but the versioned charter remains authoritative. If the two conflict, pause and escalate rather than choosing whichever wording seems newer.

For temporary changes, create a new version and name the reviewer. Do not let the backup edit the only copy in place. [Version a bot charter](/blog/bot-versioning-and-rollback) covers the rollback procedure.

## Give the backup pause authority before recovery authority

The first right in a PTO handover is permission to pause covered routines. Pausing prevents a late run from overlapping a manual recovery. The second right is inspection of named artifacts. Recovery authority comes third and should be bounded by checkpoints.

On iPhone, Grok Bot allows pause and resume, but editing, history, testing, and deleting require desktop. If Rhea will travel with only a phone, name a desktop operator for inspection. Do not turn phone access into permission to guess that a folder is empty.

The backup may deny or leave an unclear approval pending. They must not accept a payload they cannot verify merely to keep the schedule moving.

## Draw the boundary around delivery in one sentence

Write the forbidden verbs in the handover, even though they already appear in the charter. PTO creates pressure to abbreviate. "Never send, post, merge, refund, purchase, delete, or change source records" makes the backup's limit visible at decision time.

If the job prepares a brief, the backup may verify and deliver it only through the named human process. If delivery is not delegated, the output waits. Do not convert a file-only job into direct posting because the usual owner is away.

[Chief of Staff Briefing](/bots/chief-of-staff-briefing) and [Win Loss Memo](/bots/win-loss-memo) are useful draft-oriented patterns. The listing boundary still needs a local owner and destination rule.

## Record credentials as locations and owners, never secret values

The handover should say which account or connection the job expects and who owns it. Never paste passwords, tokens, recovery codes, or session cookies into the note. If access is unavailable, the backup escalates to the issuer-side owner.

Write "CRM saved view: Pipeline Review, owned by Leena" instead of a credential. Write "hosted connection: support workspace, revoke through settings" instead of copying a token. Hosted MCP sign-in tokens remain with the backend rather than the computer, while local credentials need issuer-side handling.

Do not ask the departing owner to share a personal login. [Hand a contractor the charter, not the login](/blog/hand-a-contractor-the-charter-not-the-login) applies equally to PTO coverage.

## Mark every checkpoint the backup may resume from

A checkpoint names completed work and the next permitted step. "Continue" is not a checkpoint. Use files and identifiers: INPUTS.json saved, DRAFT.md absent, no destination item found. Then authorize only the next write.

| Checkpoint | Evidence | Backup may do | Backup must not do |
|---|---|---|---|
| 0: no current files | Folder listing and clean destination | Run approved read and write heartbeat | Publish or change source |
| 1: heartbeat current | HEARTBEAT.md | Read status and follow named next step | Start from original prompt |
| 2: inputs captured | INPUTS.json plus source links | Create draft file | Re-read and duplicate source actions |
| 3: draft complete | DRAFT.md plus verification sheet | Human review | Ask bot to deliver |
| 4: human delivered | Destination ID in NOTES.md | Close run | Re-send to be sure |

If evidence does not match a checkpoint, pause and escalate. The backup is not authorized to invent checkpoint 2.5 under deadline pressure.

## Put source verification into the temporary duty

List the evidence standard and a small review sample. For a ten-claim brief, Ishan's team chooses to verify all high-consequence claims and three ordinary claims. That number is their operating choice. The handover names it so Rhea does not interpret "spot check" differently.

Require source links, timestamps where freshness matters, and a NOT VERIFIED label when evidence is absent. The backup should know which sources are authoritative and which are discovery-only. A search result snippet is not the same as the underlying record.

[Source Verifier](/bots/source-verifier) and [Citation Checker](/bots/citation-checker) offer patterns for evidence work. They do not transfer accountability away from Rhea.

## Write one escalation ladder with response deadlines

Map operational failure to the routine operator, access questions to the system owner, output disputes to the business owner, and credential exposure to security. Add acknowledge-by and decision-by intervals chosen for the business process.

Rhea's Monday brief has a fifteen-minute acknowledge window and a thirty-minute decision window. If nobody responds, the routine remains paused and the meeting uses the last verified brief labeled with its date. A safe default turns silence into a known result.

Use [missing-heartbeat escalation](/blog/bot-escalation-paths) for the full packet. The handover should contain names and times, not a duplicate explanation.

| Failure | First owner | Escalate after | Safe default |
|---|---|---|---|
| Heartbeat missing | Rhea, temporary routine owner | 15 minutes without classification | Remain paused |
| Source login unavailable | Leena, CRM owner | 20 minutes | Skip source and mark brief incomplete |
| Unsupported claim | Dev, revenue owner | Before delivery | Remove claim |
| Unexpected send or edit | Security incident owner | Immediately | Contain affected service |
| Meeting deadline missed | Meeting chair | At 08:30 | Use dated prior brief |

## Walk Rhea through the Monday failure before Friday ends

Ishan runs a tabletop exercise while still available. He moves the fixture heartbeat to the wrong folder and asks Rhea to respond using only the handover. She pauses the fixture routine, lists the expected path, checks the destination, and classifies the state as no trace.

Rhea then sends the escalation packet to the named routine operator. The packet identifies charter v9, the clean destination, and checkpoint 0. She does not ask the bot to retry. The operator authorizes a file-only replay against fixture inputs. The run writes HEARTBEAT.md and BRIEF.md, then stops.

The first exercise fails because the handover says "CRM owner" without Leena's name. Rhea cannot obtain a source decision. Ishan repairs the document, repeats the drill, and gets a clean decision in eleven minutes. That failure is valuable because it happened before PTO.

\`\`\`text
PTO HANDOVER: REVENUE BRIEF
Coverage: 2026-09-01 09:00 to 2026-09-14 11:00 Asia/Kolkata
Primary away: Ishan. Temporary owner: Rhea. Desktop backup: Omar.
Bot: Revenue Brief
Routine: monday-revenue-0730
Charter: /ops/charters/revenue-brief-v9.md, approved 2026-08-28 by Dev
Heartbeat: /workspace/revenue/HEARTBEAT.md
Output: /workspace/revenue/BRIEF.md
Source owner: Leena, saved CRM view "Pipeline Review"
Destination owner: Dev, #revenue-monday
Boundary: Never send, post, edit CRM, change stages, approve discounts, or delete files.
Checkpoint authority: Rhea may pause, inspect, and authorize file-only replay from checkpoints 0 or 1.
Delivery: Rhea verifies and pastes BRIEF.md. The bot never posts.
Missing heartbeat: pause, inspect, check destination, then use /ops/runbooks/missing-heartbeat.md
Default: remain paused and use last verified brief labeled stale.
Return: Rhea hands state back at 11:00 on 14 Sep after joint review.
\`\`\`

## Fail the handover if the backup needs private context

Ask Rhea to perform five tasks without messaging Ishan: locate the charter, pause the right routine, identify the heartbeat path, name the source owner, and state the delivery boundary. One miss fails the handover.

Also fail if the document includes a secret, relies on an owner's personal session, lacks a return time, or authorizes "anything needed." A useful handover reduces authority to explicit verbs. It does not appoint a temporary superuser.

| Test | Pass condition | Typical failure | Repair |
|---|---|---|---|
| Locate | Current charter and files open in two minutes | Link points to draft | Link immutable reviewed version |
| Pause | Exact routine identified | Backup pauses wrong schedule | Add bot and routine identifiers |
| Decide | Owner and deadline named | "Ask RevOps" | Name on-call person |
| Verify | Evidence rule has a measurable sample | "Check quality" | Name claims and source standard |
| Return | Authority expiry is explicit | Backup and primary both operate | Schedule joint handback |

## Hand authority back with a state diff, not a welcome message

On return, Rhea and Ishan compare the handover baseline with current state. List routines paused or resumed, charter versions created, approvals denied, files produced, incidents opened, access changed, and deadlines missed. Include unresolved questions.

Ishan acknowledges the state and names the time he resumes authority. Rhea stops issuing recovery prompts after that time. If a routine will remain paused, record its owner and review date rather than leaving it in limbo.

Archive the handover with secrets excluded. It becomes evidence for improving the next coverage window. Do not silently turn a temporary exception into the new charter.

## Stop this handover at permanent transfer or active incident

Permanent role change needs a full ownership migration: accounts, issuer-side permissions, charters, routines, destinations, and retention. This PTO note is intentionally temporary. An externally visible harmful action needs [bot incident response](/blog/bot-incident-response), not a longer handover comment.

For permission review, use [a permission review you can fail](/blog/bot-permission-review-checklist). For output quality, use [verify bot output](/blog/bot-output-verification). [Claim Provenance Tracker](/bots/claim-provenance-tracker) can support evidence, and [Standup Scribe](/bots/standup-scribe) can support a local handoff brief, but neither supplies authority by itself.

## Include a first-hour checklist for every scheduled run

The backup should not improvise how closely to watch the first covered routine. Write the expected fire, earliest normal heartbeat time, latest acceptable heartbeat time, output review deadline, and delivery deadline. These windows are local operating choices derived from prior runs.

Rhea's Monday job normally writes a heartbeat between 07:31 and 07:38. The handover tells her to inspect at 07:40, not at 07:31, and to begin missing-heartbeat escalation at 07:45. That prevents premature retries while still protecting the 08:45 delivery deadline.

List the exact five checks: routine state, heartbeat version, source window, output path, and boundary flags. If all pass, Rhea starts verification. If the heartbeat says EMPTY, she checks the empty reason and closes. If any field is missing, she pauses and escalates.

Do not require the backup to watch the bot's screen continuously. The handover should make artifacts sufficient for normal supervision. Continuous observation defeats the purpose of a routine and still may miss a later effect.

## Document normal empty results so PTO does not create false alarms

An empty run can be correct. A prospect watch may find no new signals, a support queue may contain no unread fixtures, or a meeting pack may have no decisions. The charter should still require a heartbeat with EMPTY, source coverage, and reason.

Give the backup two examples of legal empty results and two examples that are failures. "EMPTY, saved view returned zero rows, query timestamp 07:34" is legal if the view is reachable. "EMPTY, source login failed" is not empty work; it is SOURCE_MISSING. "No files" is not an empty result because the heartbeat itself is missing.

This distinction saves PTO backups from rerunning healthy quiet jobs. It also stops source failures from being mislabeled as uneventful days. Include the expected status vocabulary in the handover rather than expecting the backup to infer it from prose.

## Limit temporary exceptions with an expiry and a compensating check

PTO often exposes a dependency on the primary owner. The team may approve a temporary manual export, alternate meeting time, or smaller source set. Record each exception with approver, start, expiry, affected runs, and verification.

Do not change the permanent charter merely to accommodate one coverage window unless the normal change process completes. Put temporary differences in a signed appendix and ensure they cannot broaden the core boundary. "Rhea may use a manually generated CRM export" is narrow. "Rhea may do whatever is needed to finish" is not.

For a smaller source set, require the output to name omitted sources. For a later deadline, record who accepted business impact. For manual delivery, preserve the message or file identifier. Every exception should disappear automatically at handback unless explicitly promoted through review.

| Temporary exception | Approver | Compensating check | Expiry action |
|---|---|---|---|
| Manual CRM export | Leena | File header shows saved view and generation time | Delete local extra copy under retention rule |
| Brief delivered at 09:15 | Meeting chair | Title labels late reporting window | Restore 08:45 deadline |
| Support source omitted | Dev | Section says SOURCE OMITTED | Restore full source list or keep paused |
| Omar performs desktop inspection | Rhea | Omar writes timestamped NOTES.md entry | Remove temporary operator role |

## Keep a daily coverage journal that records decisions, not narration

The journal should contain run ID, charter version, result status, files, verification outcome, delivery record, exceptions, and open decisions. Avoid a diary of every click. The returning owner needs state changes and evidence.

One row per run is enough for normal work. Link to the heartbeat and review sheet. If a failure produces a separate incident or escalation record, link it rather than copying its timeline. This keeps the handback readable while preserving depth elsewhere.

At the end of each coverage day, Rhea confirms which routines remain paused. A paused routine can otherwise disappear from attention until Ishan returns. Add the next review time and owner to every open row.

The journal also reveals load. If PTO coverage requires six manual interventions in five days, the system is not ready for unattended ownership. That count is local evidence for redesign, not a product benchmark.

## Rehearse the handback while the primary owner is still present

Before PTO begins, simulate one day of state changes and ask Rhea to hand them back. Ishan should be able to identify the active charter, routine state, last verified output, delivery record, and one open exception using only the journal.

The rehearsal catches a common asymmetry: teams test whether the backup can take over but never test whether the primary can reclaim authority. A backup may create a new charter draft, pause a noisy routine, or obtain a temporary export. Without a structured return, the primary resumes from an obsolete picture.

Make the rehearsal fail deliberately by leaving one temporary exception without expiry. The handback should reject closure until an owner resolves it. Then repair the template. A handover is ready only when both directions work.

On the final PTO day, repeat the same sequence with real artifacts. Rhea freezes changes thirty minutes before handback unless an incident requires action. Ishan reviews, asks questions, acknowledges state, and declares the return timestamp. The temporary authority ends cleanly instead of fading through overlapping chat messages.

## Prepare for the backup becoming unavailable too

A two-week absence can overlap illness, travel disruption, or another incident. Name a second-level safe owner whose authority is limited to pause and notify. They do not inherit recovery, verification, or delivery merely because Rhea is unreachable.

Write the activation test: Rhea misses the acknowledge deadline twice or explicitly reports unavailable. The second-level owner then pauses covered routines, records the time, and contacts the business owner. The safe default remains no automated delivery.

Do not build a chain of shared personal logins. Each fallback uses approved organizational access appropriate to their verbs. If no third person can access the product, the business owner accepts that routines may remain in their current state until an authorized operator returns. Consider pausing before PTO if that risk is unacceptable.

Add this scenario to the rehearsal. Ishan stays silent, Rhea is declared unreachable, and Omar must identify which routines to pause without opening source data. The drill passes when Omar contains schedule risk, preserves the note, and refuses a request to publish the waiting draft.

Record who tells stakeholders that the output will be late or absent. That communication belongs to the business owner, not automatically to the temporary bot operator. Give the messenger a factual template: affected job, expected delay, current containment state, next decision time, and whether the last verified artifact is available. Do not ask the bot to send its own failure notice through an unreviewed destination. A quiet routine and a clearly communicated delay are safer than an improvised recovery followed by a surprised audience.

Archive the stakeholder notice ID beside the affected run so the returning owner can verify what the audience was told.

## Frequently Asked Questions

### What must a grok bot handover include?

Include the coverage window, primary and backup owners, bot and routine identifiers, current charter version, heartbeat and output paths, source and destination owners, boundary, checkpoints the backup may resume from, verification rule, escalation deadlines, safe default, and handback time. Link to reviewed artifacts rather than copying fragments from chat. Record account locations and owners without including secret values. The backup should be able to pause, inspect, decide, and escalate using the document alone.

### Should the PTO backup use the owner's login?

No. A handover should use approved organizational access or a separately authorized identity, never a personal password, recovery code, token, or copied browser cookie. Name the system owner who can grant or restore access through the issuer. If the approved identity cannot reach a required source, the safe response is to skip that source, mark the output incomplete, or pause the job. PTO coverage is not a reason to bypass access policy or conceal credential sharing in a private message.

### Can the backup edit routines from an iPhone?

No. Verified Grok Bot documentation says iPhone users can pause and resume, while editing, history, testing, and deleting require desktop. A traveling backup can perform the urgent safe action by pausing, then hand inspection and editing to the named desktop operator. The handover should make this split explicit. The phone user must not infer file state they cannot inspect or issue a fresh run merely because the expected destination is empty.

### How should ownership return after PTO?

Use a scheduled handback with a state diff. Compare current routines, charter versions, files, approvals, incidents, access changes, missed deadlines, and unresolved questions against the handover baseline. The returning owner acknowledges the state and names the exact time they resume authority. After that time, the temporary owner stops issuing recovery or delivery instructions. Preserve the secret-free handover for review, and convert any lasting change into the normal charter, permission, or routine change process.
`,
};
