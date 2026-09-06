import type { BlogPost } from './index';

export const post: BlogPost = {
  title: "Give Each Proposed Action an Identity Before You Retry a Job",
  description: "Use bot idempotency key design to recognize repeated requests, catch payload conflicts, and prepare one reviewable action before any external execution.",
  date: '2026-09-05',
  category: 'Tutorial',
  content: `
# Give Each Proposed Action an Identity Before You Retry a Job

A second delivery of the same request should not create a second piece of work that someone mistakes for a new instruction. The difficult part is deciding what counts as the same request. A timestamp identifies an attempt. A filename identifies an artifact. Neither necessarily identifies the business action you meant to perform.

In the worked example, an invented operator named Ishan runs a bot that prepares internal maintenance tickets from approved findings. On September 5, his source sends the same finding twice after a connection interruption. Both runs produce a ticket proposal, each with a different run identifier. A reviewer sees two plausible tickets and accepts both. These dates, identifiers, and sample counts are illustrative choices, not measurements from a deployed system.

This article designs a proposal ledger that catches that mistake before external execution. It does not assume your bot runtime has an idempotency store. You must implement and verify the storage behavior separately. The bot's boundary is explicit: it may inspect findings and prepare proposals, but it never creates the external ticket or changes a recorded execution result without its human owner.

## Identify the intended effect before naming its attempts

Write the effect in one sentence before choosing a key. Ishan's effect is to prepare one maintenance-ticket proposal for one approved finding revision in one project. That sentence includes four decisions: the artifact is a proposal, the input is an approved finding, a changed revision can represent changed intent, and the project limits where the work belongs.

Now compare that with a vague effect such as process the latest findings. The vague version gives you no principled answer when a finding reappears, moves between projects, or receives an editorial correction. A developer may solve each case differently, creating gaps that only show up after a restart.

Keep the action identifier separate from attempt identifiers. An attempt records when a worker tried to carry out the intent. Several attempts can belong to one action. Each attempt needs its own timing and diagnostic information, while the action has one stable identity and a state you can inspect.

A useful first review is to ask a colleague to classify a handful of invented requests as same intent or new intent. If you disagree about the classification, a hash function will merely encode the disagreement. Resolve the meaning first, write examples into the contract, and preserve them as fixtures when the charter changes.

## Choose a business key that survives redelivery

Ishan receives a stable finding identifier from his reviewed input export. He combines that identifier with the project, the approved revision, and the action type. A repeated delivery of the same export therefore points to the same proposal intent even if the message envelope changes.

A run timestamp is unsuitable here because every retry gets a new timestamp. A random identifier generated at the start of each worker has the same problem. Both remain useful for tracing attempts; neither tells the ledger that two attempts represent one action.

| Candidate field | What it identifies | Redelivery behavior | Decision for this example |
|---|---|---|---|
| Run timestamp | One execution attempt | Changes on retry | Keep as attempt metadata |
| Delivery identifier | One transport envelope | May change on resend | Keep for diagnostics |
| Stable finding ID | The source finding | Remains stable | Include in intent identity |
| Approved revision | The reviewed meaning | Changes after review | Include when revision changes intent |
| Project ID | Destination scope | Stable within project | Include to prevent cross-project collision |

Do not assume an upstream identifier is stable simply because its field is named ID. Test it across a deliberate re-export and a redelivery fixture. If the source supplies no reliable identity, create an intake mapping under human review. Record how the mapping was established. Guessing from a title trades an obvious missing identifier for an invisible collision.

## Separate payload similarity from permission to repeat work

Two identical payloads can represent different legitimate intentions. An operator may intentionally request the same report twice for different review cycles. Conversely, two payloads can differ in harmless metadata while representing the same requested action.

This distinction is why Ishan does not hash the entire incoming envelope and call the result the business key. His envelope includes delivery time and a diagnostic trace field. Those values change during redelivery, even though the approved finding and proposed destination do not.

The [AWS Builders' Library discussion of idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/) describes the ambiguity of inferring intent from otherwise identical requests. For this workflow, the practical response is an explicit intent identifier plus a separate payload fingerprint. That is a design choice you must implement, not a property conferred by writing the identifier into a prompt.

The fingerprint answers whether the meaningful payload associated with an existing intent has changed. It does not decide whether a human authorized a new action. When the same key arrives with a different approved payload, the proposed policy is to hold it as a conflict. The bot shows both versions and asks the owner to resolve the relationship. Silently choosing the later payload would erase the evidence that two meanings were attached to one identity.

## Store a decision record before generating the proposal

Place the ledger decision before expensive drafting. Otherwise two workers may independently write polished proposals and only discover the duplicate after a reviewer has already opened both. The early record should state which action was claimed, by which attempt, and against which input fingerprint.

For a single-process prototype, you can demonstrate this behavior with a local fixture ledger. That prototype does not prove concurrent safety. A deployed implementation needs an atomic operation that either establishes the action record or returns the already established record. Reading a file and later appending a line is insufficient evidence that only one writer can win.

| Existing ledger observation | Incoming payload | Proposed decision | Reviewer-visible explanation |
|---|---|---|---|
| No matching action | Valid approved payload | Claim and prepare | First accepted intent |
| Proposal already prepared | Matching fingerprint | Reuse existing proposal | Repeated delivery |
| Action in progress | Matching fingerprint | Wait or report ownership | Another attempt owns preparation |
| Matching key | Different fingerprint | Hold conflict | Identity reused for different content |
| Execution outcome unknown | Any payload | Hold for reconciliation | Completion cannot be established |

Keep the difference between a policy and its enforcement visible in your documentation. The [Codebase Hardening Auditor](/bots/codebase-hardening-auditor) is a starting point for requesting evidence about the implementation. Its presence in a roster does not make the ledger atomic. Ask for the actual storage operation, its failure behavior, and a concurrent fixture that can fail.

## Keep proposal preparation separate from external completion

Ishan initially used one status called done. It covered both a prepared ticket draft and a ticket a human had created in the external tracker. That compressed two materially different facts into one word. After a timeout, the bot could not tell which fact the ledger meant.

Use states that describe observable events. In this example, proposed means a validated local artifact exists. Submitted-for-review means the reviewer can see that artifact. Externally-confirmed means the owner has recorded a verifiable external receipt. None of those states should be inferred from how convincing the draft looks.

The owner may reject a proposal without making the intent disappear. Record rejected with a reason and preserve the artifact identity. A later attempt should surface that decision instead of producing the same unwanted proposal under a fresh filename. If circumstances materially change, the owner can approve a new intent revision and explain the relationship.

Avoid a state called probably sent. Unknown outcome deserves its own hold state because neither repeating nor skipping the action is justified by the evidence available. The next step is reconciliation against a receipt or destination record. The broader containment procedure belongs in [bot incident response](/blog/bot-incident-response); the ledger's job is to preserve the uncertainty accurately enough for that procedure to work.

## Paste an intent contract that produces reviewable evidence

The following JSON is a valid, pasteable policy specification for a prototype. It describes desired behavior rather than a configuration format promised by any runtime. Adapt the storage adapter and field names to your implementation, then test the adapter independently.

\`\`\`json
{
  "job": "maintenance-ticket-proposal",
  "policy_version": "1",
  "identity_fields": [
    "project_id",
    "finding_id",
    "approved_revision",
    "action_type"
  ],
  "fingerprint_fields": [
    "approved_title",
    "approved_description",
    "proposed_owner"
  ],
  "duplicate_policy": "return_existing_proposal",
  "different_payload_same_identity": "hold_for_owner",
  "unknown_execution_outcome": "reconcile_before_retry",
  "output_fields": [
    "action_id",
    "attempt_id",
    "decision",
    "artifact_reference",
    "evidence_reference"
  ],
  "boundary": "Never create an external ticket or infer an execution receipt."
}
\`\`\`

Add an example input and expected output to the same review packet. Without that example, two implementers can interpret approved_revision differently. One may mean the source document revision; another may mean the review decision revision. Name the owner who controls the value and explain exactly when it changes.

The [Engineering Agent Manager](/bots/engineering-agent-manager) can inspire a reporting charter for the resulting work items. Keep the manager's role observational: identify unresolved preparation, cite the action record, and report what the owner must decide. A reporting bot should not manufacture a new intent to make a stalled row disappear.

## Reject identity conflicts instead of overwriting their history

On the next illustrative test, Ishan changes the proposed owner but accidentally retains the old approved revision. The key remains the same, while the meaningful payload fingerprint changes. His earlier implementation overwrote the ledger payload and returned success. The improved contract produces a conflict artifact.

The artifact contains the action identity, both payload references, the fields that differ, and the approval evidence attached to each version. It does not need to repeat the full customer note in a broad operational log. Restricted source references can preserve reviewability without distributing sensitive content into every diagnostic surface.

A human can then choose among explicit resolutions. The changed owner may require a new approved revision. The incoming payload may be an erroneous delivery that should be rejected. The original mapping might be wrong, requiring a documented correction before further work. Those are different decisions with different consequences; last-write-wins cannot substitute for them.

Retain the conflict outcome when a later attempt arrives. Otherwise a repeated conflicting delivery can generate an endless stream of identical review items. Link subsequent attempts to the same unresolved conflict, update its observed frequency, and keep the first-seen evidence. Escalation frequency should be an operator choice, independent of whether the identity remains blocked.

## Decide how long an action identity must remain recognizable

Deduplication has a time horizon. If the ledger forgets an identity while old deliveries can still return, the next old delivery may look new. The retention decision therefore belongs to the workflow's replay and audit requirements, not merely to a convenient cleanup interval.

For the example, Ishan chooses an illustrative thirty-day redelivery horizon and a longer owner-reviewed retention policy for execution receipts. Those are planning assumptions. Before deployment, he must check the actual source replay behavior, destination retention, and his team's requirements. This article supplies no universal number that makes forgetting safe.

You may retain a compact identity record longer than the full draft. Keep enough information to recognize an old intent and explain why its artifact is no longer available. Do not store raw customer text inside the key itself. Keys tend to spread into logs, metrics, filenames, and support screenshots.

Plan the missing-ledger case explicitly. A failed restore that brings back artifacts but loses action identities must not resume as though every input were new. Pause preparation, inventory what survived, and reconcile the restored evidence. [Bot data retention](/blog/bot-data-retention) covers the larger ownership question; here, the precise requirement is that replay eligibility remains explainable after the data lifecycle operation.

## Test simultaneous attempts before claiming duplicate protection

A sequential test can establish that the second request sees the first record. It cannot establish what happens when both requests inspect the ledger before either has created that record. Ishan's acceptance test deliberately releases two fixture workers toward the same action at the same moment.

The pass condition is one accepted preparation owner and one duplicate or waiting result. The test also inspects the ledger and output folder: there must be one canonical proposal reference, and each attempt must have an accountable result. Merely printing one final row can conceal an overwritten duplicate draft.

| Fixture | Fault or variation | Expected result | Evidence to inspect |
|---|---|---|---|
| Sequential duplicate | Same intent delivered again | Existing proposal returned | Stable action and artifact references |
| Concurrent duplicate | Two claim attempts released together | One preparation owner | Atomic claim outcome for both attempts |
| Payload conflict | Same identity, changed approved body | Hold with field diff | Both preserved payload references |
| Crash after claim | Worker stops before draft completion | Owned incomplete record | Recovery decision and no new identity |
| Lost response | Completion recorded, reply unavailable | Existing result retrieved | Durable completion evidence |

Run these against the actual storage adapter you intend to use. An in-memory mock that simply returns the desired answer tests your expectation, not the system property. Keep the test artifacts and implementation version together so later changes can be compared against the same failure conditions.

## Trace one duplicate from arrival to the reviewer's screen

Return to the original failure. Delivery A contains project P17, finding F204, approved revision R3, and the action type prepare-maintenance-ticket. Attempt A records those fields and successfully claims the corresponding action. It creates a local draft, validates the required fields, and records artifact D81 as proposed.

Delivery B contains the same approved payload with a later transport timestamp. Attempt B computes the same action identity and matching meaningful fingerprint. The ledger returns D81. The bot reports a repeated delivery with a link to that existing draft. It does not create D82 merely to show that it performed work.

The reviewer now sees one proposal with two delivery observations attached. If the reviewer rejects it as already covered by existing maintenance, the rejection remains attached to the action. Delivery C returns the rejection and its reason instead of reopening the proposal. A materially revised finding requires a new approved revision before another draft is eligible.

On day one, Ishan checks the fixture ledger by hand because the number of examples is deliberately small. After an illustrative month, his review focuses on conflict rates, unknown outcomes, and actions older than their expected preparation window. Success is not a high duplicate count. Success is that every repeated delivery produces the intended visible outcome and no unexplained second action reaches the reviewer.

## Answer the objection that deduplication can suppress legitimate work

That objection is correct when identity is too broad. A key containing only account ID would collapse unrelated findings for the same account. A key containing only a normalized title would confuse recurring maintenance with duplicate delivery. Bad deduplication can silently omit necessary work, which is why this design starts with intent classification fixtures.

| Observed symptom | Likely design mistake | What to inspect | Corrective proposal |
|---|---|---|---|
| Unrelated findings share a draft | Identity omits source finding | Key components | Include the stable finding identity |
| Retry creates a new proposal | Identity includes attempt metadata | Timestamp and delivery fields | Separate attempt and action identities |
| Edited content disappears | Same key overwrites changed payload | Fingerprint conflict path | Hold and show the differing versions |
| Old request returns as new | Ledger horizon shorter than replay | Retention and restore evidence | Extend recognition or block uncertain replay |
| Draft exists but state says absent | Artifact and ledger updates diverged | Crash position and receipts | Reconcile before preparing again |

Allow intentional repetition through an explicit new intent, not a secret bypass flag. The owner should state why the repeated work is new, which prior intent it relates to, and what outcome is expected. Preserve that relationship in the review record. A clear business distinction should explain every exception better than the phrase force retry.

For a very small one-off task with no replay path and one human preparing everything, a manual ledger may be sufficient. Keep the same identity questions, but do not build a distributed service merely to avoid a duplicate local note.

## Stop at systems whose effect cannot be reconciled

This proposal design does not prove that an external service will suppress repeated writes. [RFC 9110's discussion of idempotent HTTP methods](https://www.rfc-editor.org/rfc/rfc9110.html#name-idempotent-methods) concerns the intended effect of repeated requests at the protocol level. Your business workflow still needs documented destination behavior, appropriately scoped identities, and evidence about what happened after an interruption.

If the destination exposes neither a useful receipt nor a trustworthy way to inspect whether the action occurred, keep ambiguous writes under human review. The local proposal ledger can prevent duplicate drafts. It cannot manufacture certainty about an external action that happened outside its observation.

Likewise, a charter cannot enforce atomic storage, prevent an unscoped credential from being used elsewhere, or preserve records that an administrator deletes. Those are implementation and operational responsibilities. Review them directly, and record the limits beside the proposed workflow so future maintainers do not inherit an exaggerated promise.

When the identity policy changes, replay the old fixtures before accepting the new version. A rollback must include compatible ledger interpretation, not merely old prompt text. [Versioning and rolling back a bot charter](/blog/bot-versioning-and-rollback) provides the surrounding change procedure. Preserve the unresolved actions through that change; renaming a policy does not make its unfinished effects disappear.

## Frequently Asked Questions

### Should a bot use a random UUID as its idempotency key?

A random UUID can identify one intent if it is created once and preserved across all retries of that intent. A fresh UUID generated for every attempt does not recognize duplicates. In a source-driven workflow, stable business fields may help locate the original intent record, but you still need a documented rule for legitimate repeated work. Keep action identity separate from attempt identity, and test both redelivery and intentionally new requests before using the scheme.

### Is hashing the request body enough to prevent duplicate actions?

Hashing can help detect whether meaningful content changed, but identical content does not always mean identical intent. Two deliberate requests may have matching bodies, while a redelivery may include a different timestamp around unchanged business fields. Define the intended effect and its scope first. Store a separate payload fingerprint to detect conflicts under the same intent identity. The destination and ledger must also implement the required duplicate-handling behavior; a hash alone performs no enforcement.

### What should the bot do when the same key arrives with different content?

It should hold the request and return a conflict record containing the existing intent, the incoming payload reference, and the meaningful differences. The human owner decides whether the changed content deserves a new approved revision or whether one delivery is incorrect. Do not overwrite the old record or assume the latest payload is authoritative. Repeated copies of the same unresolved conflict should link to the existing review item instead of flooding the reviewer with duplicates.

### Does an idempotency ledger make an external retry safe after a timeout?

Only when the relevant ledger and destination behavior actually establish what a retry will do. A local proposal record can show that a draft was prepared; it cannot by itself prove whether an external ticket was created. After an ambiguous timeout, inspect the destination receipt or other authoritative completion evidence. If the outcome remains unknown, preserve that uncertainty and require human reconciliation. Retrying under a new key would defeat duplicate recognition and may repeat the action.
`,
};
