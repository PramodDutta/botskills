import type { BlogPost } from './index';

export const post: BlogPost = {
  title: "Check for a Receipt Before Retrying an Action That Timed Out",
  description: "Use bot ambiguous timeout receipts to investigate uncertain writes, match destination evidence, and give an owner a clear decision before another attempt.",
  date: '2026-09-05',
  category: 'Tutorial',
  content: `
# Check for a Receipt Before Retrying an Action That Timed Out

A timeout tells you that the caller stopped waiting. It does not, by itself, tell you whether the requested action happened. Treating those two facts as equivalent is how one approved operation turns into two completed operations.

Consider an invented operator named Mira. On September 5, she approves the creation of an internal repair ticket. The request leaves her integration, the waiting period ends, and the interface displays a timeout. A recovery bot sees the error and suggests trying again. Before she agrees, Mira opens the destination and finds a ticket with the expected content. The first request had succeeded even though her caller never received its response.

All ticket identifiers, time windows, and test counts below are illustrative fixtures. This article builds a read-only investigation procedure for that narrow interval between request dispatch and confirmed receipt. It does not claim that a particular bot runtime exposes the records you need. If the records are unavailable, that absence must remain visible in the result.

The investigating bot never repeats the write, deletes a suspected duplicate, or closes the incident on a guess. It assembles evidence about the original action and returns a decision packet to the operator.

## Separate the waiting deadline from the action's outcome

Start the incident note with two independent statements. The caller stopped waiting at a recorded time. The destination outcome is confirmed, disproved, or unresolved according to evidence you have actually inspected. Writing the statements separately prevents a transport error from becoming a business conclusion.

The exact point of failure matters. A local validation error before dispatch can support a different decision from a lost response after dispatch. But a vague client message such as request failed does not establish either point. Preserve the original error and obtain the component's documented meaning instead of assigning a stronger interpretation to familiar wording.

HTTP also distinguishes method semantics from incidental network behavior. [RFC 9110 discusses when automatic retries are appropriate](https://www.rfc-editor.org/rfc/rfc9110.html#name-idempotent-methods), including the need for additional knowledge before retrying a non-idempotent request. This runbook applies that caution to Mira's business action: the relevant question is whether another attempt can create another ticket.

Do not wait for a perfect infrastructure diagnosis before preventing an accidental repeat. You can mark the action outcome unresolved immediately and place a hold on the operator's retry decision. The network team may investigate why a response disappeared later. The current priority is to avoid turning missing information into another consequential request.

## Preserve the original attempt before reopening the interface

Mira first saves the request context that remains available: the operation name, destination project, request correlation identifier, approval reference, submitted payload fingerprint, dispatch observation, and the timeout text. She records what she could not obtain as missing evidence. She does not fill the gaps from memory and label the result a system log.

Reopening or refreshing an interface can replace the visible error with a new state. In some products, clicking the primary button again initiates another action. The investigator should therefore describe the navigation steps it intends to take and distinguish read-only inspection from controls that may resubmit work.

A screenshot is useful for preserving what the operator saw, but it is not automatically a destination receipt. Its evidentiary value depends on the visible fields. A success banner without an object identifier is weaker than a recorded object whose project, content, and creation context can be checked.

Keep sensitive payload values in the restricted incident artifact. Broad logs can usually carry field names, hashes, and references. The investigation requires enough information to match the intended action, not a second distribution channel for every customer detail involved in it.

In Mira's fixture, the captured attempt becomes A42. That label identifies the investigation subject. If a later attempt is authorized, it receives a separate attempt identifier and remains linked to the original unresolved history.

## Write an evidence hierarchy for this destination

Not all matching observations settle the same question. A local log showing that a request was queued proves intent to send. It does not prove remote acceptance. A destination object can prove existence while still leaving uncertainty about which attempt created it. A receipt correlated to the original action is stronger for attribution.

Define the hierarchy with the owner of the destination integration before an incident. The relevant receipt might be a returned operation ID, a destination audit entry, or a read-only query for an application-level reference. The correct choice depends on documented behavior and available access; do not assume a generic search box has complete coverage.

| Evidence available | What it can establish | What it cannot establish alone | Investigator response |
|---|---|---|---|
| Local queued record | Request entered local processing | Remote execution | Keep outcome unresolved |
| Dispatch observation | Caller attempted transmission | Destination committed the action | Seek destination evidence |
| Destination receipt tied to request | Recorded result for that action | Unrelated downstream effects | Verify receipt fields and scope |
| Matching destination object | An object with those attributes exists | Which attempt created it | Compare stronger identity fields |
| Empty text search | No matches in that search view | No object exists anywhere | Record search limits |

Mira chooses the destination's stable object identifier plus its recorded client reference as the strongest available match in her prototype. That is an example acceptance rule, not a universal guarantee. Her written runbook also describes what to do if that client reference is absent.

## Match the intended action using more than its title

A ticket named Repair the nightly import might already exist from last week. Finding that title after today's timeout does not show that today's approved request succeeded. Match the destination scope, the request reference where available, the meaningful payload, and the relevant timing evidence.

Timing supports the match but should not carry the whole conclusion. Clock differences, delayed processing, and coarse timestamp precision can make a narrow time filter misleading. Record the clocks you are comparing and whether their relationship is known. An object outside the first search window may still belong to the action.

Build a match report with explicit agreements and disagreements. In Mira's case, project P9 agrees, the submitted client reference agrees, and the normalized title agrees. A description field differs only because the destination renders line breaks differently. She records that transformation rather than claiming byte-for-byte equality.

If the destination changes fields in a way you cannot explain, retain the mismatch. The bot should not normalize away all differences until any convenient object looks correct. Normalization rules deserve small fixtures of their own: whitespace treatment, generated fields, and known destination formatting can be tested; a missing account identifier cannot be treated as cosmetic.

A matched result can remain provisional when evidence is incomplete. Return that status plainly. The operator needs to know whether you found the action or merely found an object that resembles it.

## Bound the search without declaring absence too early

A recovery search needs limits so it does not consume the rest of the day. It also needs an honest conclusion when those limits are reached. Mira chooses an illustrative three-pass search: inspect the direct request reference, inspect the scoped destination listing, then ask the integration owner for the authoritative lookup route.

The three passes are an operating choice for her example. They do not define how long every destination takes to expose completed work. Before using a waiting interval, verify whether the destination documents delayed visibility or asynchronous processing. A recently accepted action may exist outside the interface currently being searched.

| Search pass | Scope and identifier | Useful positive finding | Meaning of no result |
|---|---|---|---|
| Direct lookup | Original operation or client reference | Correlated result or explicit pending state | Depends on lookup contract |
| Scoped object listing | Correct project and allowed period | Candidate object for comparison | Listing may be filtered or incomplete |
| Owner-assisted query | Destination's authoritative records | Confirmed action history | Unresolved if access or retention blocks it |
| Follow-up observation | Same recorded query after agreed delay | State transition or newly visible receipt | Still bounded by source completeness |

Keep the exact query, scope, and access limitations in the packet. A statement such as no matching receipt found in project P9 under reviewer access is useful. A statement such as nothing happened is much stronger and usually unsupported by the same observation.

## Distinguish pending work from an action with no known result

Some destinations return a job identifier before work finishes. If you can verify that the original request maps to a pending job, the investigation should track that job rather than submit another one. A pending state means there is something concrete to observe, even if completion is not yet established.

Unknown outcome is different. There may be no trustworthy record connecting the original request to a destination job. The caller may have lost the response that contained the reference. Treating unknown as pending can make a dashboard look organized while hiding the very evidence gap the operator needs to resolve.

For a pending job, record the destination state, observation time, and documented route to a final result. For unknown outcome, record the missing link and the person or system that could provide it. Both statuses may lead to waiting, but the reason and next evidence requirement differ.

Be careful with a destination state called failed. Some multi-step operations can perform work before reporting a later failure. Establish what the destination's failure status promises about side effects. If the promise is undocumented, the investigator should show the partial observations and stop short of recommending an automatic retry.

The [Stuck Bot Foreman](/bots/stuck-bot-foreman) is a useful charter reference for reporting a stalled investigation without restarting the underlying job. Its role should remain to identify the evidence needed, not to convert every aged pending state into a new execution attempt.

## Give the investigator a read-only receipt charter

A receipt investigator works best when its output is constrained around decisions. The following charter can be pasted into an operator-controlled workflow as instructions. It requires corresponding access restrictions and implementation checks; the text itself cannot stop a broadly authorized tool from issuing a write.

\`\`\`text
Role: Receipt investigator for one named timed-out action.

Inputs:
- Original approval reference and submitted payload reference.
- Original attempt identifier and captured error.
- Read-only destination inspection instructions.
- Owner-defined evidence requirements and investigation deadline.

Procedure:
1. Preserve the available attempt evidence.
2. Inspect the destination using the approved read-only lookup route.
3. Compare scope, request identity, and meaningful submitted fields.
4. Record each observation with its time and source reference.
5. Classify the result as confirmed, pending, conflicting, or unresolved.
6. State what further evidence would change an unresolved result.

Output:
A receipt packet with observed facts, missing facts, candidate matches,
search limitations, and the exact decision the owner must make.

Boundary:
Never repeat the original write, remove a suspected duplicate, edit the
source request, or state that no action occurred from an empty search alone.
\`\`\`

Pair the charter with a destination-specific inspection note. It should identify which controls are read-only, which data the investigator may inspect, and where it must stop. If the bot cannot use that route with its available tools, the output is an access limitation, not a fabricated green result.

The [Engineering Agent Manager](/bots/engineering-agent-manager) can help structure ownership reporting across multiple investigations. Give each action one named operator and a distinct next step so the queue does not dissolve into repeated notices that somebody should check.

## Return a decision packet with facts and proposed next steps

Mira's receipt packet has a short result at the top, followed by enough detail to challenge it. For confirmed completion, it names the destination object, the evidence that binds it to attempt A42, and any remaining uncertainty about downstream work. It explicitly says another creation request is unnecessary.

For an unresolved outcome, the packet does not offer a misleading binary pass or fail. It lists what was inspected, what could not be inspected, and the next person who can resolve the gap. If a retry decision is unavoidable, that decision belongs to the owner with the uncertainty in view.

| Packet field | Example content | Purpose |
|---|---|---|
| Original action | Approved creation request A42 | Prevents subject drift |
| Result classification | Confirmed destination object | States the observed outcome |
| Evidence reference | Object T88 plus client reference | Lets the owner verify attribution |
| Search limits | Project P9, reviewer visibility | Exposes scope restrictions |
| Residual uncertainty | Downstream notification uninspected | Avoids overclaiming completion |
| Requested decision | Accept receipt; do not recreate | Connects evidence to action |

Keep proposed cleanup out of the completion conclusion. Discovering two tickets does not authorize deleting one. The operator may need to preserve both for audit, merge their discussions, or ask the destination owner to perform a correction. Those choices require a separate reviewable proposal with the affected object identifiers.

## Rehearse failures at different points around the write

A useful test harness controls where the interruption occurs. Replaying only a generic timeout message leaves the central distinction untested. Mira creates local fixtures representing failure before dispatch, acceptance without a response, delayed completion, an unrelated title match, and a genuinely unresolved result.

Each fixture specifies the evidence available to the investigator. The bot must make its classification from that evidence, not from a hidden expected-answer label. A test that passes the destination truth directly into the prompt merely checks whether the bot can repeat it.

| Fixture condition | Evidence supplied | Required investigation result | Unacceptable behavior |
|---|---|---|---|
| Validation fails before dispatch | Explicit local pre-dispatch record | Report no dispatched action under that record's contract | Invent a destination receipt |
| Destination accepts; reply disappears | Correlated destination object | Confirm completion | Suggest another creation |
| Destination still processing | Original job reference and pending state | Track pending work | Create a replacement job |
| Similar older object exists | Same title, different client reference | Reject as proof of this action | Match by title alone |
| Destination evidence unavailable | Timeout and denied lookup | Preserve unresolved outcome | Declare success or non-execution |

The acceptance check examines both the written report and the tool activity. A perfectly worded report is not a pass if the investigator clicked a resubmit control while gathering evidence. Verify the read-only boundary with the mechanism that actually mediates tool access in your implementation.

## Walk Mira from the timeout to one confirmed ticket

Mira's first lookup uses the original client reference captured in A42. The destination returns object T88. She checks that it belongs to P9, carries the approved request identity, and contains the expected maintenance description. The investigator records those observations with source references instead of copying only the visible title.

The packet classifies the creation as confirmed. It also states that notification delivery was not inspected, because that was not part of the current lookup. Mira accepts the receipt and links T88 to the original approval record. She does not approve a second creation request.

Next, the fixture introduces an older ticket T12 with the same title. The investigator lists T12 as a non-matching candidate because its client reference differs. This is the test that would catch Mira's former title-only recovery habit. The presence of T88 and T12 no longer creates ambiguity once the action identity is compared correctly.

On the first day, she rehearses every fixture and manually checks the packet fields. At an illustrative thirty-day review, she examines how many cases remained unresolved, which evidence was repeatedly unavailable, and whether any operator retried before receiving the packet. These are local review measures, not expected industry rates. Their purpose is to reveal where the integration needs better receipts or a clearer ownership path.

## Answer the objection that searching is slower than pressing retry

Searching can be slower, especially when the destination has poor observability. The objection is strongest for cheap, reversible, read-only work whose repetition has no meaningful external effect. In that case, an owner may reasonably choose a bounded retry policy after verifying the operation's semantics.

The arithmetic changes when the action creates an externally visible object or starts work for another team. A second ticket can acquire comments, notifications, and ownership before anyone notices the duplicate. The recovery burden is not simply the time required to delete an extra row. It includes deciding which record contains the authoritative history.

Rather than forcing every timeout through the same ceremony, classify operations in advance. Identify read-only lookups, replace-style writes with documented repeat behavior, and create-style actions whose repetition needs special care. The classification must come from the actual destination contract. A button label or HTTP method name alone may not describe the complete business workflow.

The [AWS guidance on safe retries](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/) explains why caller intent and destination handling matter to duplicate effects. Use that principle to improve the integration: preserve action references, return durable receipts, and make the original result retrievable. Better evidence can make the recovery path faster without requiring the operator to gamble on whether the first action happened.

## Escalate missing receipts as an integration defect with a concrete example

If Mira repeatedly cannot determine whether an approved action occurred, the problem is larger than her runbook. The integration is failing to give operators a dependable answer to a basic recovery question. Report that defect with one reproducible interruption point and the exact information the recovery process lacks.

A useful engineering issue states that a request may commit before its response is lost, that the caller then has no retrievable action reference, and that the destination search cannot unambiguously identify the original effect. Attach the fixture and expected recovery behavior. Avoid a vague request to improve logging, which leaves the missing business fact unnamed.

Candidate improvements might include preserving a client action reference before dispatch, exposing a read-only result lookup, or returning an existing result when a repeated intent is recognized. The appropriate solution depends on the architecture. Review the smallest change that would resolve the demonstrated ambiguity, then rerun the exact fixture against it.

Record the defect separately from the open incident. A future fix does not establish what happened during A42. The current outcome remains unresolved until evidence settles it or the owner makes a documented decision despite uncertainty. [Bot observability](/blog/bot-observability) discusses the wider evidence design, while [incident response for completed bot actions](/blog/bot-incident-response) covers containment when the search reveals an unwanted effect.

## End this runbook where independent completion cannot be observed

This procedure stops being sufficient when the action spans systems with no coherent receipt trail, when the available account cannot inspect relevant records, or when an external side effect cannot be associated with a request. In those cases, the investigator can still preserve evidence and identify the missing authority. It cannot honestly certify completion.

Do not widen access casually during the incident just to make the report green. Ask the appropriate owner to perform the missing read or approve a scoped inspection route. Keep the result linked to that owner's evidence so the next investigator can understand why the conclusion changed.

An action that timed out yesterday may also become stale as an intention. Even if you prove it did not execute, yesterday's approval may no longer justify executing it today. Availability, ownership, or the underlying request may have changed. The owner must review current intent separately from resolving historical outcome.

When you change the recovery charter or receipt interpretation, retain the old fixtures and compare the new decisions. [Bot versioning and rollback](/blog/bot-versioning-and-rollback) gives the surrounding change process. A rollback should preserve incident evidence and unresolved states. Returning to an older prompt must not silently reopen old writes or erase the questions that prevented their retry.

## Frequently Asked Questions

### Does a timeout mean the bot action failed?

A timeout means the caller did not receive the expected result within its waiting period. The destination might not have received the request, might still be processing it, or might have completed it before the response was lost. Determine the outcome from available dispatch evidence and authoritative destination records. Keep unresolved cases explicitly unresolved, and do not repeat a consequential write solely because the caller displayed a timeout message during the original attempt.

### What counts as a useful receipt for a timed-out request?

A useful receipt identifies the original action and records a result you can verify in the correct destination scope. Depending on the integration, that may be an operation identifier, a destination object tied to a client reference, or an authoritative action-history entry. A matching title or a local queued log is weaker evidence. Document what each record actually proves, compare meaningful request fields, and expose missing attribution instead of treating resemblance as confirmed completion.

### Can the bot retry when the destination search returns no matches?

An empty search only establishes that the particular query returned nothing within its visible scope. Filters, delayed indexing, restricted access, retention, and unsuitable identifiers can hide an existing result. Record those limits and use the destination's documented authoritative lookup when available. If non-execution remains unproven, the bot should return an unresolved decision packet to the owner. Any further write requires a separate decision that considers both duplicate risk and whether the original intention remains current.

### What should happen if the investigation finds two destination objects?

Preserve both identifiers and compare their action references, content, timing, and downstream activity. Report the suspected duplicate relationship with evidence, but do not delete or merge either object automatically. The operator may need to preserve comments, notifications, or ownership history before deciding how to correct the situation. Treat cleanup as a new proposed action with its own scope and approval, while retaining the original timeout evidence so the integration defect can be reproduced and repaired.
`,
};
