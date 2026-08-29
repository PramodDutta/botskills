import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'What an Approval Actually Governs, and What It Cannot Undo',
  description:
    'Learn how an approval governs one proposed action, why it cannot reverse earlier work, and how to review the exact transition before you answer.',
  date: '2026-08-29',
  category: 'Safety',
  content: `
# What an Approval Actually Governs, and What It Cannot Undo

Tara asks a bot to prepare a customer update. The bot gathers notes, rewrites a local draft, and then presents an approval before sending. Tara denies the send and assumes the whole job rolled back. The draft and earlier local work remain.

Her denial may have stopped the proposed send. It was never a time machine.

An **approval** is a decision that permits or refuses a proposed action. “Proposed” matters: the action is presented before it occurs. The Approvals section of VERIFIED-FACTS states the product rule exactly: “An approval controls the proposed action. It does not reverse work already completed.”

This lesson explains **what an approval actually governs**. By the end, you will be able to draw a transition card that identifies the pending action, prior state, expected next state, and denial result before you click yes or no.

## Put the approval at one transition in a longer timeline

A task is usually a chain, not a single event. Tara’s chain contains collecting notes, reading source material, creating a draft, revising it, and proposing a send. The approval sits at one transition between “draft exists locally” and “message leaves the workspace.”

| Step | State before | Action | State after | Governed by the send approval? |
|---|---|---|---|---|
| 1 | Notes scattered | Gather notes | Notes collected | No, already completed |
| 2 | Notes collected | Write draft | Draft exists | No, already completed |
| 3 | Draft exists | Revise wording | Revised draft exists | No, already completed |
| 4 | Revised draft exists | Send to customer | External message exists | Yes, this is proposed |

The Approvals section supports the final column’s principle: the approval controls the proposed action, not earlier work. The exact actions in Tara’s example are invented to make the timeline visible.

## Define the governed unit with a verb and an object

“Approve the task” is too vague for careful review. Name a verb and an object: send this message, delete this file, publish this page, or submit this form. The governed unit is the particular state transition now being proposed.

Add destination and scope when they matter. “Send draft” is weaker than “send the displayed message to the named practice recipient.” The extra detail does not change product behavior. It gives Tara enough information to decide whether the proposal matches her intent.

| Vague label | Governed verb | Governed object | Missing detail to request |
|---|---|---|---|
| Continue | Submit | Which form | Destination and fields |
| Apply changes | Delete | Which records | Count and recovery plan |
| Finish update | Publish | Which page | URL and exact revision |
| Contact them | Send | Which message | Recipient and body |

If the proposal cannot be stated as a clear transition, deny it and ask for a more inspectable proposal.

## Follow Tara’s denial without inventing a rollback

At 14:00, Tara starts the task. By 14:10, three source files have been read. By 14:20, update.txt exists. At 14:25, the bot proposes the customer send. Tara denies it.

The Approvals section of VERIFIED-FACTS says denial of that proposal does not reverse completed work. Therefore, the correct after-state is: no customer message from the denied transition, plus whatever earlier work already exists. Tara should inspect update.txt rather than assume it vanished.

| Time | Event | Completed before approval? | Expected after denial |
|---|---|---|---|
| 14:10 | Sources read | Yes | Reading is not undone |
| 14:20 | Draft written | Yes | Draft may remain |
| 14:25 | Send proposed | No | Send does not proceed if denied |
| 14:26 | Tara inspects | New review step | Earlier state is measured |

The lesson is not that every prior action is harmful. It is that prior actions must be evaluated separately.

## Distinguish stopping the next step from restoring the old state

Stopping and restoring are different operations. A stop prevents a transition that has not happened. A restore performs new work intended to return some state toward an earlier condition.

If Tara denies the send, no restore is necessary for the external message because the proposed transition did not occur. If she wants update.txt removed, that removal is another action. If she wants a modified source file restored, restoration may require a saved prior version and a deliberate change.

The Approvals fact is narrow and useful: control of a proposal does not imply reversal of completed work. It says nothing about a universal undo feature, so this article does not invent one.

[Approval Gates for Bots](/blog/approval-gates-for-bots) discusses where gates are useful. [Approval Rules and Reversibility](/blog/grok-bot-approval-rules-reversibility) develops the difference between recoverable and irreversible actions.

## Inventory pre-approval work before deciding on the proposal

An approval prompt can focus attention on the next action so strongly that Tara forgets to ask what already changed. Before deciding, request or inspect a pre-approval inventory: files created, files changed, external reads completed, drafts prepared, and unresolved errors.

Do not ask for secret values in the inventory. Ask for paths, counts, and short descriptions. The inventory is an observation aid, not a second copy of sensitive material.

| Inventory row | Example entry | Why it matters now | Separate follow-up if denied |
|---|---|---|---|
| Files created | update.txt | Persists independently of send | Keep, revise, or remove |
| Files changed | notes.md | Prior state may differ | Compare with saved version |
| External reads | Three public pages | Informed the draft | Check citations |
| Pending action | One customer send | This is the governed proposal | Approve or deny |

[Source Verifier](/bots/source-verifier) and [Citation Checker](/bots/citation-checker) are useful examples for checking the evidence behind a draft. Their work can occur before a send proposal and therefore needs its own review.

## Read yes as authorization for this proposal, not a permanent rule

An approval decision should be interpreted at the size of the described action. A yes to one named send is not automatically a policy that every future send is acceptable. A no to one malformed proposal is not necessarily a ban on all future drafts.

The Approvals section says an approval controls “the proposed action,” singular in the quoted rule. Keep your review anchored to the exact proposal presented. Do not stretch that sentence into unverified product claims about interface persistence or account-wide settings.

Tara’s decision note can say: “Approved the displayed practice message to recipient A after verifying body B.” That note is much safer than “Approved customer outreach.” It preserves the decision’s actual scope.

## Read no as refusal plus a new state assessment

After denying, perform two checks. First, verify that the proposed transition did not occur. Second, inspect completed work that the denial could not reverse.

For a denied send, check the intended destination if a harmless verification path exists, then inspect local drafts. For a denied deletion, check that the named object remains, then inspect any earlier edits. Keep the test proportional and avoid creating a new external effect merely to prove an old one did not happen.

[Inbox Triage](/bots/inbox-triage) teaches a useful conceptual split between drafting and sending. [Lead Scout](/bots/lead-scout) separates research from outreach. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) emphasizes a local briefing artifact. These are charter examples, not product guarantees, but they help beginners see actions as separate transitions.

## Answer the operator who expects transactional rollback

The strongest objection comes from databases: some systems group steps into a transaction so that failure can roll them back together. Why should an approval not behave the same way?

Because the verified product rule explicitly says it does not reverse work already completed. A workflow could theoretically be designed around temporary artifacts and explicit cleanup, but that would be workflow design, not a property supplied by the approval itself. External reads, created drafts, and side effects may not share one transactional system.

The objection wins as a design aspiration. Build recoverability where the tools support it. Do not attribute that recoverability to the approval gate without evidence.

## Place gates before consequential transitions instead of after preparation

An approval is most meaningful immediately before the action whose consequence requires human judgment. Preparation can often be reviewed as an artifact. The gate should not be described as undo protection for preparation that already ran.

| Transition | Useful review evidence | Approval question | After denial, inspect |
|---|---|---|---|
| Draft to send | Exact recipient and body | Send this message? | Draft and delivery state |
| Private to publish | Exact public output | Publish this revision? | Local revision and live page |
| Existing to deleted | Exact target and recovery | Delete this object? | Object and earlier edits |
| Cart to purchase | Exact item and total | Submit this purchase? | Cart changes and order state |

These are teaching examples of transition design. The only product behavior asserted is the verified Approvals rule about the proposal and completed work.

## Diagnose approval mistakes from the observed after-state

| Symptom | Mistaken mental model | Correct interpretation | Next action |
|---|---|---|---|
| Denied send, draft remains | No means erase task | Draft completed earlier | Review or remove separately |
| Approved one item, later item appears | Yes means permanent policy | New proposal needs new evaluation | Scope the next decision |
| Denied deletion, earlier edit remains | Gate rolls back workflow | Edit preceded proposal | Restore deliberately if needed |
| Unclear whether action happened | Prompt equals evidence | State must be checked | Inspect destination safely |

Diagnosis starts with time order. Determine what occurred before the proposal, what was proposed, and what state exists after the decision.

[How to Set Grok Bot Approvals](/blog/how-to-set-grok-bot-approvals) covers practical placement. This article supplies the conceptual lens you use while reading any prompt.

## Write a transition card before approving consequential work

A transition card has four lines:

1. Current state: what exists now.
2. Proposed action: one verb, object, destination, and scope.
3. Expected next state: what will exist if approved.
4. Denial state: what completed work remains if refused.

Tara’s card reads: current state, revised local draft exists; proposed action, send displayed draft to the named practice recipient; expected next state, one delivered message plus retained draft; denial state, no proposed send and retained draft still present.

Writing the denial state before deciding prevents the rollback fantasy. [Claim Provenance Tracker](/bots/claim-provenance-tracker) offers a related discipline of making origins visible.

## Verify both sides of the decision with observable evidence

If Tara approves, she checks the destination and confirms only the proposed effect occurred. If she denies, she confirms the destination did not receive the proposed effect and inventories the earlier local work. Either path includes an after-state review.

Verification must be capable of contradicting expectation. “The button said approved” is a record of intent, not complete evidence of destination state. “The customer system shows exactly one matching practice event” is observable, though the exact check depends on the system.

Do not create duplicate actions while checking. Use read-only status where possible. If safe verification is unavailable, mark the result unresolved rather than guessing.

## Limit approvals to forward control and plan cleanup separately

This lesson stops at forward control of a proposed action. It does not claim approvals erase files, revoke sessions, restore earlier versions, or provide a universal transaction. Those would be separate mechanisms requiring separate evidence.

For deletion residue, read [Why Bot Deletion Needs State Cleanup](/blog/delete-a-grok-bot-safely). For permission scope, read [Grok Bot Permissions Explained](/blog/grok-bot-permissions-explained). For prompt scope, read [Bot Prompt Engineering](/blog/bot-prompt-engineering). For untrusted text, read [Prompt Injection in Email](/blog/grok-bot-prompt-injection-email).

The Approvals rule is small enough to remember: govern next, inspect before.

## Practice with a reversible local exercise

Create two harmless local files, source.txt and draft.txt, containing invented text. Ask a bot to read source.txt, replace the contents of draft.txt, and then propose copying the draft to final.txt. At the proposal, deny.

Inspect the three paths. The earlier draft change may remain because it completed before the proposed copy. final.txt should not appear from the denied transition. If your environment behaves differently, record the actual state and investigate rather than forcing the lesson’s expected result.

You can now do one concrete thing: write and use a transition card that distinguishes the governed proposal from completed work.

Add an evidence field to the card when the decision depends on current content. For a send, name the displayed recipient and the version of the body reviewed. For a deletion, name the exact target and observed recovery path. Do not copy private material into the card. The card should identify evidence, not duplicate it.

Practice detecting a stale proposal. Let a local draft change after its transition card was written, then compare the current artifact with the reviewed one. Treat the old approval context as stale and request a new inspectable proposal. This is a workflow principle, not a claim about automatic product behavior.

Tara should separate decision evidence from execution evidence. The preview supports the choice before yes. A destination check supports the result after yes. The first cannot prove the action occurred, and the second cannot prove the exact content was thoughtfully reviewed. Both belong in a complete record.

When several proposals depend on one another, number the transitions. Publishing version two may assume version one was saved. Deleting a temporary draft may assume the public copy was verified. If an earlier assumption fails, stop the later proposal and update the timeline. Do not use one approval to conceal a chain whose intermediate states are unknown.

The transition card also makes disagreements productive. One reviewer may accept the recipient but reject the wording. Another may accept the wording but lack authority to decide the destination. Because object, destination, and expected state are separate fields, the workflow can resolve the exact dispute instead of asking for a vague second yes.

After denial, preserve the proposal long enough to diagnose it safely. Was the recipient wrong, the body incomplete, or the whole action unnecessary? Correcting the draft creates new completed work. A later send is a new proposed transition and should receive a fresh card. The earlier no does not become yes simply because the text changed.

Add a scope checksum in plain language. A checksum here is not a technical hash. It is a short count and identity statement such as “one practice recipient, one displayed message, no attachment.” Read it aloud before deciding. If the proposal contains two recipients or an attachment, the mismatch becomes obvious.

Use paired counterfactuals. Ask, “What new fact becomes true if I say yes?” and “What remains true if I say no?” For Tara, yes makes one external delivery true; no leaves the revised local draft true. These questions force forward effect and prior state into the same review.

If the action is described with several verbs, split the card. “Save, publish, notify, and clean up” contains four transitions. Some may already be complete, one may be proposed, and another may belong after verification. A single yes conceals their order and denial states.

Avoid treating a clean proposal as proof that preparation was clean. A correct recipient does not validate the sources used to create the message. Review citations, private-data handling, and local edits under their own checks. The approval gate governs the proposal, while quality review governs the artifact.

After execution, compare observed state with both the expected and forbidden states. Expected: one practice delivery. Forbidden: duplicate delivery, wrong recipient, or altered body. Naming forbidden states makes verification more sensitive than merely asking whether something happened.

Store the card with a non-secret task record long enough for review under your own retention policy. The article does not prescribe a duration. The value is traceability: another person can reconstruct which proposed transition was considered and which earlier state remained outside its control.

Destroy practice artifacts after the exercise through deliberate cleanup, not by assuming the denied copy removed them. That final step reinforces the difference between forward control and separate state management.

Record that cleanup as another completed action.

Keep reading: [approval fatigue and queue design](/blog/approval-gates-for-bots), [least privilege for bots](/blog/least-privilege-bots), and [how prompts earn authority](/blog/bot-prompt-engineering).

## Frequently Asked Questions

### Does denying an approval undo the task?

No. The Approvals section of VERIFIED-FACTS says an approval controls the proposed action and does not reverse work already completed. Denial should stop the governed proposal, while earlier reads, drafts, or edits need separate inspection. Write a denial state before deciding, then verify both the destination and any local artifacts after the refusal.

### What exactly should an approval describe?

Describe one transition with a verb, object, destination, and scope. Include the current state and expected next state when they affect the decision. “Continue” is too vague; “send the displayed practice message to the named recipient” is inspectable. If the proposal lacks enough detail to predict its effect, deny it and request a clearer proposal.

### Is an approval the same as a permanent permission?

Treat an approval as a decision about the presented proposal, not as a broad standing rule. The verified wording says it controls the proposed action. Keep records at that size and avoid assuming unverified persistence behavior. A future action with a different object, destination, or consequence deserves a new review under the policy governing that workflow.

### What should I check after denying?

First, verify that the proposed transition did not occur using a safe, preferably read-only observation. Second, inventory work completed before the proposal, such as created drafts or modified local files. Third, decide whether that earlier state should remain, be restored, or be removed through separate actions. Mark anything you cannot verify as unresolved rather than treating denial as proof of rollback.
`,
};
