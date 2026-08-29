import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Change Management for a Charter Edit That Can Send',
  description:
    'Use this grok bot change management process to review, test, release, observe, and roll back charter edits before they alter who receives a message.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# Change Management for a Charter Edit That Can Send

Priya changes one sentence from "draft a renewal reminder" to "send a renewal reminder when the record is complete." The edit is 41 characters longer, but its consequence is not small. A preparation tool has become an external actor.

Good **grok bot change management** classifies edits by changed authority and audience, not line count. A spelling correction can use a light path. A new source needs access review. A verb that changes draft to send needs a production change with owner approval, adversarial testing, a limited release, observation, and a rehearsed rollback.

This guide follows Priya's renewal bot from proposed edit to rejected release. The sample sizes and review times are declared operating choices, not product guarantees.

## Classify the consequence before reviewing the wording

Read the diff for changed nouns, verbs, recipients, sources, destinations, stop conditions, and schedules. "Send" changes the externally visible consequence. "All customers" changes the population. "Use the browser session" changes authority assumptions. These edits deserve more scrutiny even if the prose is clear.

| Change class | Example | Minimum path | Release posture |
|---|---|---|---|
| Editorial | Fix typo without meaning change | Peer check | Normal release |
| Output shape | Add source field | Fixture and consumer check | Small sample |
| Source scope | Add private account notes | Access and data review | Controlled sample |
| Decision rule | Change eligibility | Owner approval and replay | Shadow first |
| Authority | Draft becomes send | Explicit authorization and full gate | Default reject |

Priya labels the proposal Authority before anyone debates whether the sentence sounds reasonable. Classification sets the burden of proof.

## Keep the old charter retrievable and runnable

Store every production charter in version control or an approved versioned register. A screenshot is not enough because reviewers need an exact diff and operators need a restorable file. Tag the version used by each release and fixture result.

Use [Style Guide Enforcer](/bots/style-guide-enforcer) to catch language drift, [Source Verifier](/bots/source-verifier) to demand evidence, [Stuck Bot Foreman](/bots/stuck-bot-foreman) for operational stalls, and [Fleet Chief of Staff](/bots/fleet-chief-of-staff) to maintain the release register. These patterns support the process. A person still approves consequential scope.

[The Grok Bot Runbook](/blog/grok-bot-runbook) provides the operational companion. A rollback instruction that says "restore the old prompt" fails if nobody can locate it.

## Write the change request as an authority delta

Priya's request must state current behavior, proposed behavior, business reason, new sources, new recipients, new writes, expected benefit, worst credible failure, owner, approver, fixture, release cohort, and rollback trigger.

\`\`\`text
CHANGE: CR-018
CURRENT: Prepare an unsent renewal reminder for owner review.
PROPOSED: Send the reminder when required fields are present.
AUTHORITY DELTA: Adds external send to customer email addresses.
WORST FAILURE: Wrong customer receives an unsupported renewal statement.
OWNER: Priya
APPROVER: Revenue operations lead
FIXTURE: renewal-send-v4, 12 synthetic accounts
ROLLBACK: Pause routine and restore charter v17 before any retry.
BOUNDARY UNDER REVIEW: No pricing promises, date changes, or CRM writes.
\`\`\`

The request makes clear that preserving three old prohibitions does not neutralize the new send authority.

## Separate boundary wording from actual permission

A charter can say never send while the connected environment still has send capability. It can also say send while an approval gate blocks execution. Those layers must be reviewed separately.

[A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) explains the distinction. For every authority change, inspect the account, tool, approval, destination, and operating process. Do not approve wording as though it configures all five.

The shared-computer fact belongs in one sentence: bots on one account share persistent computer state, so use [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) when a change introduces a new login or credential.

## Require a reviewer who owns the consequence

The charter author cannot be the only approver for a send change. Priya understands the automation, but the revenue operations lead owns customer communication policy. Security or legal review may also be required when data or regulated claims change.

The approver should review the exact diff, fixture results, sample message, recipient selection, stop rules, and rollback. Approval is not a vague thumbs-up in chat. Record what version and cohort the person accepted.

[What an Approval Actually Governs](/blog/what-an-approval-actually-governs) matters here: approval controls the proposed action and does not reverse earlier work. Put the gate before any message leaves.

## Build a fixture that attacks the changed verb

Priya creates 12 synthetic accounts: four ordinary, two missing owner, two missing renewal date, one duplicate email, one conflicting status, one do-not-contact flag, and one source outage. The distribution is a test choice.

The old charter should produce drafts or exceptions. The proposed charter must not send during fixture execution. Instead, it runs in shadow mode and records which cases it would select. Expected selections are written before the run.

| Case | Expected selection | Expected action |
|---|---|---|
| Complete ordinary account | Eligible | Shadow draft only |
| Missing owner | Ineligible | Needs owner |
| Duplicate email | Ineligible | Stop and deduplicate |
| Do-not-contact flag | Ineligible | Stop |
| Source outage | Unknown | Pause cohort |

A fixture that contains only clean accounts cannot validate a send rule.

## Test recipients and claims independently

A correct message to the wrong address is a failure. A correct address with an unsupported renewal date is also a failure. Test selection, recipient resolution, evidence, template content, and final action as separate assertions.

Priya requires every date and account fact to point to an approved source. She compares recipient identity with the assigned account record and rejects aliases shared across customers. Synthetic traps use similar names and duplicate domains.

[What a Pasted Prompt Inherits](/blog/what-a-pasted-prompt-inherits) explains why a fresh charter version does not create fresh state. Identity and destination checks must observe the live environment.

## Release to shadow, then one controlled recipient class

Shadow mode executes selection and draft creation without sending. Priya compares every proposed recipient and claim against expected results. Only after a clean fixture and shadow period could the organization consider a controlled cohort.

| Stage | External sends | Review scope | Promotion condition |
|---|---|---|---|
| Fixture | Zero | Every synthetic case | Exact expected outcomes |
| Shadow | Zero | Every proposed action | No unsupported recipient or claim |
| Controlled cohort | Limited by policy | Every action before send | Declared observation window passes |
| Wider release | Policy dependent | Risk-based plus incidents | Owner accepts measured result |

This guide does not authorize the cohort. It defines evidence for the decision. Priya's organization rejects automatic sending and keeps human send, which is a valid outcome.

## Put a human confirmation at the last responsible moment

If sending is permitted, show the reviewer the final recipient, subject, body, sources, and relevant flags immediately before action. Do not ask for blanket approval before the system has selected recipients.

The confirmation must describe the proposed action, not merely the charter. A reviewer should be able to reject one message without approving the batch. Review fatigue is itself a capacity constraint, so track how long and how accurately people review.

[Approval Gates for Bots](/blog/approval-gates-for-bots) covers gate design. A confirmation after the message leaves is a notification, not approval.

## Define rollback as a tested sequence, not a promise

Priya's rollback has five steps: pause the routine, confirm the next run is absent, restore charter v17, revoke any new send connection if added, and reconcile proposed or completed actions. Each step has an owner and evidence.

Deleting the bot is not rollback. Deleting a bot removes its routines, but shared-computer files and browser sessions remain. Use [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files) for teardown.

Test rollback with the synthetic fixture before release. Time how long it takes the backup to identify and restore the known-good version. The measured time is an operating result, not a product promise.

## Observe leading signals before waiting for complaints

Track proposed recipient mismatches, missing evidence, duplicate selections, reviewer corrections, rejected messages, boundary incidents, and rollback time. Customer complaints are late signals because the external consequence has already occurred.

| Signal | What it reveals | Stop condition example |
|---|---|---|
| Recipient mismatch | Identity resolution defect | Any occurrence |
| Unsupported claim | Evidence defect | Any occurrence |
| Duplicate selection | Idempotency defect | Any occurrence |
| Reviewer correction rate | Draft or rule drift | Team-declared threshold |
| Source outage | Input integrity loss | Pause affected cohort |

Write stop conditions before observing results. Otherwise pressure to continue will redefine success after a failure.

## Answer the operator who says prompt edits should stay lightweight

For editorial changes, the operator is right. Requiring a change board for punctuation would slow useful maintenance and encourage workarounds. Use proportional paths.

The answer changes when a sentence alters authority, audience, source scope, or policy. Natural language is executable behavior in this system. "Draft" to "send" deserves the same seriousness as exposing a new write endpoint. The review can still be fast when fixtures and rollback are already prepared.

Classify first, then apply the lightest path that fits the consequence. Do not classify by character count.

## Trace Priya's rejected release to a duplicate recipient

Fixture case 9 contains two account rows with the same shared finance alias. The proposed rule treats both as complete and prepares two sends. The messages contain different renewal dates. Recipient resolution passes a syntax check but fails identity uniqueness.

Priya rejects the release. She adds a stop when one address maps to more than one active account and reruns all 12 cases. The new rule routes the duplicate to human review.

This failure proves the change process worked. A rejected release is not wasted effort. It is a prevented customer incident with a reusable regression case.

## Diagnose change failures by release layer

| Symptom | Failed layer | Immediate response | Durable fix |
|---|---|---|---|
| Wrong cases selected | Decision rule | Stop release | Add fixture and revise rule |
| Correct draft, wrong recipient | Identity mapping | Remove send path | Require unique mapping |
| Old behavior persists | Version deployment | Restore known state | Record live version |
| Rollback cannot be run | Operational readiness | Keep paused | Rehearse with backup |
| Message already sent | Gate or authority | Start incident response | Reconcile and redesign |

Do not call the last row a rollback. Earlier work cannot be reversed merely by restoring the charter. Reconciliation may require customer contact and other organizational action.

## Verify the live version and the absence of unintended action

After release, confirm the active charter hash or version, next routine schedule, connected account identity, approval mode, and cohort. Run one harmless canary through the live path. Inspect the external mailbox and destination records directly.

The verification can fail if the wrong version is live, a schedule duplicated, an unexpected identity appears, or a message leaves outside the gate. Record the observation and operator. Do not accept the bot's own success summary as the only evidence.

Use [Bot Capacity Planning](/blog/bot-capacity-planning) to ensure reviewers can handle the arrival rate created by the change.

## Stop this guide before legal communication policy

This guide does not decide which customer messages are lawful, compliant, or contractually appropriate. It does not authorize marketing, collections, employment, medical, or regulated communication. The responsible organizational owners must define those policies.

It also does not claim every send-capable change should ship. Keeping human send can be the correct permanent design. The change process exists to make that decision with evidence rather than momentum.

## Audit the first thirty days as a sequence of release decisions

Day-one success is weak evidence because the controlled cohort is small and everyone is paying attention. Priya schedules reviews after the first run, first week, and first thirty days. Those intervals are internal choices. Each review compares the live version, cohort, proposed actions, corrections, incidents, and operator time with the release record.

The review asks whether behavior changed without a charter diff. A source field may have changed meaning, a connected account may have switched identity, or a workflow may have remapped recipients. Change management covers dependencies, not only prompt text.

Priya keeps a release ledger with change ID, charter version, dependency versions where available, approver, cohort, fixture result, start time, stop conditions, observations, and disposition. The ledger points to evidence rather than copying private messages broadly.

If the team makes an emergency edit, it still receives an ID and owner. The immediate goal may justify a shorter pre-release review, but the team must run the full fixture and retrospective review within its declared emergency window. "Emergency" cannot become an unversioned side door.

Measure reviewer corrections by cause. A tone edit does not carry the same signal as a wrong recipient or unsupported date. Priya uses recipient, evidence, policy, style, duplicate, and other. Any recipient or evidence defect stops promotion regardless of the overall correction rate.

Review non-events as well. If the change expected ten weekly eligible cases but selected none, do not celebrate the absence of incidents. Verify triggers, source availability, cohort filters, and schedule. A control that never exercised the new behavior has not validated it.

Ask the backup to explain the release without Priya present. They should locate the diff, state the new authority, show the pause path, retrieve fixture results, and identify who owns reconciliation. Failure means operational capacity is not ready for a wider cohort.

At day thirty, choose one disposition: keep scope, narrow scope, return to human send, expand under a new change request, or retire the routine. Expansion is never an automatic reward for quiet operation. It is a new authority decision with a new fixture and cohort.

This sequence keeps attention from decaying after launch. The release remains a controlled claim: version 18 behaved within defined limits for an observed cohort under stated evidence. It does not become a permanent claim that future sources, recipients, and policies will behave the same way.

Priya also runs a dependency diff before every release. She compares the connected identity, recipient resolver, source schema, routine schedule, approval setting, and downstream write path with the last accepted release. A charter that did not change can still behave differently when one dependency moves.

The dependency check has a stop rule for unknowns. If nobody can confirm which account will send, or which field now supplies the recipient, the release remains paused. Urgency does not convert missing evidence into approval.

She separates rollback triggers from investigation thresholds. One wrong recipient triggers immediate pause and reconciliation. A rise in style corrections triggers investigation but may not stop internal drafts. Defining both prevents teams from either ignoring drift or stopping production for harmless variation.

For an approved emergency fix, Priya uses the smallest possible cohort and no authority expansion. The fix can narrow selection, disable a branch, or return to human send. Adding a new recipient class during an incident would combine recovery with experimentation.

After a rollback, the old version must pass a live canary again. Restoration does not prove connected state, schedules, or source mappings also returned. The operator confirms the known-good behavior and records any residual work that requires reconciliation.

Change records should remain readable by someone outside the bot team. Replace shorthand such as "prompt tweak" with the exact behavior delta. A support or operations owner needs to understand who might receive what, under which evidence, and where the stop control lives.

Priya's final release meeting can end with no change. Rejecting authority expansion after a failed duplicate-recipient fixture is a complete decision, not a delay. The existing human-send process stays documented, and any future proposal starts from the preserved evidence.

She applies the same discipline to seemingly safer reductions. Removing a stop condition, shortening evidence, widening a cohort, or changing an exception into a default can expand effective authority without adding the word send. Review behavior, not vocabulary.

The release package contains a human-readable example of before and after. Reviewers see one synthetic account under version 17 and version 18, including recipient selection, evidence, draft, and final gate. Concrete comparison exposes interpretation hidden by an abstract diff.

Priya also records who can edit the charter and who can activate the routine. If the same person can author, approve, and release a send change, the written review path may be bypassed. The organization decides appropriate separation, but the access map must match the chosen process.

When an approver leaves the team, pause pending authority changes until a successor accepts the role. Do not let an old name in a template function as continuing approval. Existing releases continue only under the organization's stated coverage rule and tested backup.

Finally, archive rejected proposals with their reason. A later author should see that automatic send failed on duplicate recipient identity, not rediscover the same defect through another experiment. Rejection evidence is part of change history because it defines unsafe territory as clearly as a shipped version defines accepted scope.

Keep reading: [the bot runbook](/blog/grok-bot-runbook), [review fatigue](/blog/grok-bot-review-fatigue), and [least privilege for bots](/blog/least-privilege-bots).

## Frequently Asked Questions

### Which charter edits need formal change management?

Use the formal path when an edit changes authority, audience, source scope, destination, decision policy, schedule, or stop behavior. Editorial corrections can use peer review. Classify by consequence, not line count. A one-word change from draft to send is an authority change and deserves an exact diff, accountable approver, adversarial fixture, limited release decision, observation plan, and tested rollback.

### Who should approve a send-capable change?

The approver must own the external communication consequence and understand the relevant policy. The charter author should not be the only approver. Depending on data and content, security, legal, or another control owner may also be required. Record the exact version, cohort, fixture result, and action accepted. A general approval of the project is not approval of every later message.

### How do I test a draft-to-send edit safely?

Run synthetic cases and shadow mode with zero external sends. Include missing fields, duplicate recipients, conflicting status, do-not-contact flags, and source outages. Predetermine eligible cases. Check recipient identity and factual evidence independently. Only consider a controlled cohort after exact expected results, and keep a human confirmation immediately before any permitted send.

### What is a real rollback for a charter change?

A real rollback pauses future execution, confirms the schedule stopped, restores a known-good version, removes newly added authority where necessary, and reconciles work already completed. It has named owners and has been rehearsed by the backup. Restoring text alone does not recall a sent message or undo a write. Preserve evidence and follow the organization's incident process for completed consequences.
`,
};
