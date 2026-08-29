import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Escalation Paths When the Heartbeat File Is Missing',
  description:
    'Use this grok bot escalation method to classify a missing heartbeat, pause safely, collect evidence, and hand the next decision to the right owner.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# Escalation Paths When the Heartbeat File Is Missing

Mira opens the Monday research folder at 08:10. The expected HEARTBEAT.md is absent, the scheduled brief is absent, and a sales meeting starts in fifty minutes. Three people can help, but nobody knows who should decide whether to retry. That gap is the incident.

A missing heartbeat does not prove the job failed. It proves the operator lacks the artifact that distinguishes an empty result, a partial run, a late run, and a run that wrote somewhere else. A useful grok bot escalation path assigns each uncertainty to a named person with a deadline and a permitted decision. It does not turn the team chat into a queue of guesses.

This guide begins after you have noticed the missing file. For the six-step overnight recovery protocol, use the [overnight runbook](/blog/grok-bot-runbook). For broader diagnosis, use [the bot failure catalog](/blog/bot-failure-modes). Here, the job is narrower: decide who gets the problem next, what evidence travels with it, and what that person may authorize.

## Freeze the retry before you choose an escalation owner

Pause the routine before anyone sends a fresh prompt. A late run and a manual retry can overlap, producing two drafts, two writes, or two proposed external actions. The missing heartbeat gives you no safe basis for assuming the original run is dead.

Write one line in the incident note: "08:12, Mira paused Monday Market Brief before inspection." Include the local timezone. If the job has no routine, write that no scheduled trigger remains active and stop new manual requests in the team channel. This is a coordination freeze, not proof of cause.

The freeze has one exception: an active harmful action needs containment at the affected service. If the bot already sent, changed, shared, or deleted something, switch to [bot incident response](/blog/bot-incident-response). An escalation tree for a missing report is too slow for an action already in flight.

| Observation | First move | Owner for that move | Retry allowed? |
|---|---|---|---|
| Heartbeat absent, destination quiet | Pause and inspect | Routine operator | No |
| Heartbeat absent, action may be active | Contain service access | System owner | No |
| Heartbeat current, output absent | Read checkpoint and files | Routine operator | Only from named checkpoint |
| Output exists, destination quiet | Verify destination, then human handoff | Output owner | No full retry |
| Duplicate output appears | Preserve both and stop writes | Incident owner | No |

## Classify absence with four checks, not a story

Mira checks the expected path, the adjacent folder, the routine record visible on desktop, and the external destination. Those four checks create a small evidence packet. She does not ask the bot to narrate what happened and treat the reply as fact.

First, record the exact expected path and list its directory. Second, search only the named job folder for a similarly named heartbeat or output. Third, note the latest routine record and timestamp available. Fourth, inspect the destination for a message, issue, file, or event that could prove a later step occurred.

The result belongs in one of four buckets: no trace, partial trace, completed local output, or externally visible effect. "No trace" still does not mean no execution. It means your evidence set contains no artifact. The distinction matters because escalation owners make decisions from facts, not from confidence.

## Route operational ambiguity to the routine operator first

The routine operator owns schedule state, expected paths, checkpoints, and the first supervised replay. This is usually the person named in the charter, not whoever noticed the empty folder. If nobody is named, the team lead must assign one before recovery continues.

Send the operator five fields: job name, expected fire time, expected heartbeat path, pause time, and current artifact state. Add one direct question: "May we inspect only, resume from checkpoint N, or close as empty?" Do not send a vague "Bot broken, please help" message. It forces the operator to repeat your collection work.

The operator may confirm a path typo, an intentionally empty run, a stale schedule, or a safe checkpoint. They may not approve access to a business system they do not own. That decision climbs a different branch.

## Send access questions to the system owner, never the loudest teammate

If recovery requires opening a mailbox, CRM, repository, payment system, or vendor console, the owner of that system decides. The routine operator explains the requested access and intended read. The system owner accepts, narrows, or refuses it.

This division prevents an urgent missing brief from becoming permission expansion. A sales manager can own the report and still lack authority to expose an executive mailbox. A developer can own the routine and still lack authority to modify a production repository. [A boundary is not a permission](/blog/a-boundary-is-not-a-permission) explains the distinction; use one sentence here and route the decision.

| Needed decision | Correct owner | Evidence required | Wrong substitute |
|---|---|---|---|
| Change schedule or checkpoint | Routine operator | Current routine state and files | Person waiting for output |
| Read a protected source | Source system owner | Exact account, fields, and purpose | Bot owner alone |
| Publish or send recovered output | Destination owner | Final payload and destination | Whoever performed recovery |
| Rotate a credential | Credential issuer or security owner | Credential identifier and exposure | Delete a local file |
| Accept missed business deadline | Business process owner | Impact and recovery estimate | Technical operator |

## Escalate a boundary conflict to the destination owner

Suppose the missing heartbeat belongs to [Chief of Staff Briefing](/bots/chief-of-staff-briefing), and the quickest recovery seems to be posting directly into the executive channel. That changes the job from preparing a file to publishing a message. The destination owner must decide, and the safest answer is usually to keep the human send.

State the proposed payload, exact destination, and irreversible effect. "Post the brief" is insufficient. "Send the attached 612-word draft to #exec-huddle as the bot identity" is reviewable. The owner may choose a human paste, a delayed meeting, or no publication.

An approval governs the proposed action, not earlier work. Link the operator to [what an approval governs](/blog/what-an-approval-actually-governs) when they confuse a late approval with recovery. The escalation packet should never imply that accepting a prompt repairs missing evidence.

## Put a clock on each handoff without inventing urgency

Every handoff needs an acknowledge-by time and a decision-by time. The interval is an operating choice, not a product fact. Mira's team chooses ten minutes to acknowledge and twenty minutes to decide because the meeting begins at 09:00. A weekly research archive could use four business hours instead.

If the owner misses the decision deadline, the default must be written in advance. Safe defaults are pause, deliver nothing, use the last verified artifact with a stale label, or shift the meeting. "Retry anyway" is not a default because it creates work under uncertainty.

Keep the clock visible in the note. Escalation is not forwarding the same message to more people. It is transferring a defined decision before a known deadline, with a safe result if nobody responds.

## Package six artifacts so the next person can decide once

The packet should contain the charter version, routine name, expected heartbeat path, directory listing, destination check, and a concise timeline. Screenshots help with transient UI state, but copyable paths and identifiers make verification faster.

Do not attach credentials, full mailbox exports, or unrelated files. Redact personal data that the decision maker does not need. If the system owner needs to inspect sensitive material, point them to the source under their normal access rather than duplicating it into chat.

Use this pasteable block as the handoff record:

\`\`\`text
MISSING HEARTBEAT ESCALATION
Job: Monday Market Brief
Owner: Mira
Routine: market-brief-monday-0800
Expected fire: 2026-08-31 08:00 Asia/Kolkata
Paused: 08:12 by Mira
Expected heartbeat: /workspace/market-brief/HEARTBEAT.md
Directory state: folder exists; INPUTS.md present; HEARTBEAT.md absent; BRIEF.md absent
Destination check: #sales-monday contains no brief after 07:55
Charter version: market-brief-v7
Boundary: Never post, send, edit CRM records, or approve spend.
Decision requested: inspect routine history and authorize either checkpoint-0 replay or close-as-missed.
Acknowledge by: 08:25
Decide by: 08:35
Default if unanswered: remain paused; meeting uses last week's brief labeled stale.
\`\`\`

## Walk Mira from missing file to a bounded replay

At 08:10 Mira sees no HEARTBEAT.md. At 08:12 she pauses the routine. Her folder listing shows INPUTS.md from Friday but no current heartbeat or brief. The sales channel has no new post. She writes the packet and sends it to Arun, the routine operator.

Arun replies at 08:19. The schedule record shows no current run, and the charter version is v7. He asks the CRM owner, Leena, to confirm read access for the same saved view used in the test. Leena confirms read-only access at 08:27 but refuses any record update. The boundary already forbids CRM edits and posting.

At 08:29 Arun authorizes a checkpoint-0 supervised replay that may read the saved view and write HEARTBEAT.md plus BRIEF.md. It must stop after the file write. At 08:34 both files appear. Mira checks six claims against CRM links, removes one unsupported sentence, and pastes the brief herself at 08:43.

| Time | Evidence | Decision owner | Decision |
|---|---|---|---|
| 08:10 | Expected files absent | Mira | Begin missing-heartbeat procedure |
| 08:12 | Routine shown paused | Mira | Freeze retry |
| 08:19 | No current routine run visible | Arun | Consider checkpoint-0 replay |
| 08:27 | Saved CRM view approved for read | Leena | Permit exact source access |
| 08:29 | Charter v7 and clean destination | Arun | Authorize supervised file-only replay |
| 08:34 | Heartbeat and brief created | Mira | Verify claims, then human paste |

The worked failure is the absent heartbeat, not a fictional model outage. The escalation succeeds because each person decides only within their ownership.

## Fail the escalation when evidence or ownership is missing

A procedure you cannot fail is a slogan. Mark this escalation failed if the routine remains active during investigation, the expected path is unknown, the destination was not checked, no owner accepts the decision, or the replay request changes the job boundary.

Also fail it when the packet contains only a screenshot of chat. Chat may show intention, but it does not establish file state or destination state. A green response from the bot does not replace the missing heartbeat.

| Failure signal | Why it fails | Repair before continuing |
|---|---|---|
| "Probably never ran" | Converts absence into a claim | Record no trace and keep uncertainty explicit |
| Owner field says "team" | Nobody holds the decision | Name one person and one backup |
| Retry requested before pause | Original and retry may overlap | Pause, record time, inspect again |
| System access broadens silently | Recovery changes permission scope | Ask the system owner for exact access |
| Publish added to file-only job | Recovery crosses the boundary | Keep human delivery or obtain destination review |
| No fallback at deadline | Silence becomes improvised action | Write a safe default before sending |

## Verify the path with a tabletop miss before trusting it

Create a fixture job whose heartbeat path is deliberately wrong. Do not break the production routine. Use a copy with harmless inputs and a destination that cannot send. Plant one INPUTS.md file, set the expected fire time, and let the fixture produce no heartbeat at the expected location.

Give the on-call operator only the runbook and measure four outcomes: pause before retry, correct classification, complete packet, and correct owner. The exercise passes only if no second run starts before the owner decides. Record elapsed time as a local baseline, not a universal benchmark.

Repeat after changing the charter, owner roster, routine name, or destination. If the backup cannot find the file path without messaging the primary owner, the handover is incomplete. [Testing your bot](/blog/testing-your-bot) covers broader functional cases; this drill tests the escalation route itself.

## Answer the manager who wants one universal escalation channel

A single channel is useful for intake, but it cannot own every decision. The routine operator controls checkpoints. The source owner controls data access. The destination owner controls publication. Security owns credential response. Combining those authorities into one chat room hides rather than removes the handoffs.

Use one channel as the incident record and tag the named decision owner for each branch. Keep decisions in the same thread with timestamps. The manager gets one place to observe, while authority stays with the person accountable for the system.

The counter-argument wins for a tiny team where one person genuinely owns the routine, sources, and destination. Even then, write the roles separately. PTO or role changes will split them later.

## Stop this procedure when the problem becomes an incident or a product diagnosis

This page stops applying when you confirm an external action, credential exposure, duplicate send, or destructive change. Use [incident response](/blog/bot-incident-response) and contain the affected service. It also stops when the heartbeat exists and names a mid-run checkpoint. Then follow the [stalled bot recovery guide](/blog/grok-bot-stalled) rather than escalating a missing artifact.

For shared-computer risk, link once to [screens are not boundaries](/blog/screens-are-not-boundaries). For prompt inheritance, use [what a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits). Do not re-explain either architecture during a time-boxed handoff.

Suitable directory patterns include [Source Verifier](/bots/source-verifier), [Claim Provenance Tracker](/bots/claim-provenance-tracker), and [Stuck Bot Foreman](/bots/stuck-bot-foreman). Their listings can shape evidence or recovery roles, but a listing never names your local owners or deadlines.

## Distinguish no response from a refused decision

An owner who has not answered and an owner who refuses authorization produce the same operational result, remain paused, but they create different records. "No response by 08:35" means the escalation clock expired. "Leena refused CRM access because the saved view contains compensation fields" is a decision with a reason and an owner.

Preserve refusals without arguing them into a softer label. A refusal can reveal that the job design depends on access it should never have had. The next step may be a narrower export, a human-created input file, or cancellation of the run. Do not send the same request to another administrator hoping for a more convenient answer.

If an owner offers a condition, turn it into a testable requirement. "Okay if read-only" becomes "use account research-reader; fixture record R-999 must remain inaccessible; no write controls available." The routine operator verifies the condition before replay. Conditional access does not become approval for publication.

Track decision state with four values: PENDING, APPROVED AS WRITTEN, APPROVED WITH CONDITIONS, and REFUSED. Avoid APPROVED when the owner narrowed the payload or source, because the replay request must reflect those conditions exactly.

## Escalate missing source and missing output on different branches

A missing heartbeat can hide two different ownership problems. If the expected source file never arrived, the source owner decides whether to regenerate, substitute, or declare the period incomplete. If the source exists but the bot output does not, the routine operator decides whether a checkpoint replay is safe.

Merging those branches tempts the routine operator to create source data. In Mira's case, a missing CRM export cannot be repaired by asking the brief bot to reconstruct pipeline values from browser memory. The export owner either produces the approved file or records the source as unavailable.

The packet should therefore include source state separately from output state. Write "CRM export absent at 08:14; source owner Leena notified" and "BRIEF.md absent; routine paused." When the export arrives, preserve its generation time and reporting window. A late source may still miss the business deadline even though recovery is technically possible.

For multi-source reports, decide whether one missing source blocks the whole output. A charter might permit a partial brief only when it names the missing section and makes no derived total across incomplete sources. That rule belongs in the charter before failure, not in an urgent escalation message.

## Prevent escalation loops with one decision ledger

An escalation loop occurs when Maya asks Arun, Arun asks Leena, Leena asks Maya what the job needs, and each thread omits a different artifact. Use one ledger row per requested decision. Every row names requester, owner, payload, deadline, state, condition, and evidence link.

Do not create a new row merely because someone changes channels. Update the existing decision with the response timestamp. If the payload changes, close the old row as SUPERSEDED and create a new one. This preserves why an earlier approval does not cover a broader replay.

| Decision ID | Requested decision | Owner | State | Next move |
|---|---|---|---|---|
| D01 | Inspect routine history | Arun | Approved as written | Attach visible record |
| D02 | Read saved CRM view | Leena | Approved with conditions | Use research-reader fixture first |
| D03 | Post draft to channel | Maya | Refused | Human paste after verification |
| D04 | Accept brief after 08:45 | Meeting chair | Approved as written | Keep meeting agenda open |

Close the ledger when each row is decided or expired. "Resolved" should point to the artifact or safe default, not merely to a message saying thanks.

## Measure whether escalation reduces uncertainty before it consumes time

At the end of the event, compare the initial unknowns with the final record. Mira began without run state, source state, output state, destination state, or decision owner. The procedure produced evidence for all five. That is a better success measure than how many people joined the thread.

Record elapsed time at four milestones: pause, complete packet, first owner response, and final decision. These are local operating metrics. Use them to find slow handoffs, not to set a universal product benchmark. If packet completion takes twenty minutes because paths are scattered, repair documentation. If owner response dominates, adjust coverage or the safe default.

Also count unauthorized retries, unexplained scope changes, and decisions without evidence. The target for each is zero. A fast recovery with one duplicate send is not a successful escalation.

Review the ledger with the backup owner. Ask them to locate every artifact and explain why the replay began at its checkpoint. If they cannot, the event closed operationally but the path still needs repair. Feed those changes into the runbook and repeat the tabletop miss.

Keep escalation records free of secret values and unrelated customer data. A decision owner needs the identity of a connection, the requested operation, and the observed result, not a pasted token or full export. When sensitive evidence must be reviewed, point the authorized owner to its existing system and record only the decision. This keeps the escalation packet portable enough for a handover without creating a second exposure that must later be cleaned up.

## Frequently Asked Questions

### What does a missing heartbeat prove?

A missing heartbeat proves only that the expected artifact is absent at the checked path and time. It does not prove the routine never started, the bot crashed, or the job completed elsewhere. Pause the routine, list the expected directory, inspect the visible routine record, and check the destination. Record the result as no trace, partial trace, completed local output, or external effect. Keep uncertainty explicit until an artifact or system record supports a stronger conclusion.

### Who should receive the first grok bot escalation?

Send the first operational handoff to the named routine operator because that person owns schedule state, expected paths, charter version, and checkpoints. Include the job, expected fire time, pause time, heartbeat path, directory state, destination check, and one decision request. If recovery requires protected data, publication, credential changes, or acceptance of a missed deadline, route that specific decision to the relevant system, destination, security, or business owner instead of letting the routine operator exceed their authority.

### When is a manual retry safe after the heartbeat is missing?

A manual retry is safe only after the routine is paused, the expected path and destination are checked, the charter version is identified, and a named owner authorizes a bounded replay from a known checkpoint. The replay should use harmless or approved inputs, write a heartbeat before later artifacts, and stop before any send, publish, deletion, purchase, or record change. If the destination might already contain the result, do not retry the full job. Verify and resume after the completed step.

### How do you know the escalation path actually works?

Run a tabletop exercise with a harmless fixture job and a deliberately missing heartbeat. The path passes when the operator pauses before retrying, records the absence without inventing a cause, assembles the six-artifact packet, reaches the correct owner, and follows a written safe default if the deadline expires. It fails if the operator restarts from the original prompt, broadens access, changes the boundary, or cannot identify who decides. Repeat the drill after changes to owners, routines, paths, or destinations.
`,
};
