import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Run One Sales Play Across Many Accounts Without Losing the Step',
  description:
    'Run one sales play across many accounts with a versioned state ledger that blocks stale checkpoints, duplicate drafts, and missed human replies.',
  date: '2026-08-31',
  category: 'Playbook',
  content: `# Run One Sales Play Across Many Accounts Without Losing the Step

The dangerous sales automation failure is not a bad email. It is a good email prepared for the wrong step because the account changed while the bot was working. A prospect replies at 10:04. The bot had read the CRM at 10:02, still sees the account as waiting, and writes its older decision at 10:06. The tracker now says to send a follow-up even though a human conversation has started.

Call this failure **checkpoint inversion**. A newer account event exists, but an older bot decision becomes the visible checkpoint. The timestamps run forward while the account state runs backward. At ten accounts, a rep may notice it. At three hundred, the tracker looks orderly enough to trust.

This playbook shows how to run one sales play across many accounts without confusing a scheduled step with the account's current truth. The central move is simple: store events separately, derive the current state, and reject any decision based on a checkpoint that is no longer current. The bot drafts. A human reviews and performs every outward action.

## Name checkpoint inversion before it reaches a prospect

Checkpoint inversion needs four conditions. The bot reads an account, a newer event arrives, the bot does not see that event, and its stale result is accepted as current. None of the individual systems has to be broken. The CRM can record the reply correctly. The mailbox can show it. The bot can follow its instructions. The tracker can save exactly what it receives. The failure lives between them.

That makes it more treacherous than an obvious outage. A failed API produces an error. Checkpoint inversion produces a plausible next-step draft, often personalized with accurate facts. The only wrong fact is the most important one: where the account sits in the play.

Use the name in reviews and incident notes. “The bot sent the wrong thing” is too broad to correct. “A stale read overwrote a newer reply checkpoint” identifies the control you need. You need a compare-before-write check, not a more eloquent prompt.

| Observed symptom | Hidden sequence | Why it passes a quick review | Required control |
|---|---|---|---|
| Follow-up drafted after a reply | Bot read, reply arrived, bot wrote | Draft content still looks relevant | Recheck reply and state versions before accepting |
| Call step appears twice | Retry repeated a completed transition | Both records cite the same account | Use a transition key and reject duplicates |
| Account skips a wait | Old due date survived a play edit | Row still has a valid date | Bind every checkpoint to a play version |
| Rep and bot claim different steps | Human action never became an event | Both used honest but separate records | Require one event ledger for human and bot actions |

## Fix account identity before assigning any step

A state machine attached to the wrong account is precise nonsense. Choose one immutable account key from the system that owns account identity. Keep display name, domain, CRM URL, and owner as attributes, never as the primary key. Names change. Domains redirect. Subsidiaries share words. Two records can carry the same trading name.

Before an account enters the play, resolve its CRM account ID and record the system where that ID came from. If the warehouse and CRM disagree, mark the account BLOCKED_IDENTITY and stop. Do not let the bot pick the closest spelling. Do not merge rows because two domains look related. A human who owns CRM hygiene resolves the identity conflict.

Contacts need stable keys too, but the play should remain account-centered. A contact changing jobs may pause or disqualify a step without creating a new account journey. Record the contact ID used for a draft as evidence on that event. Do not make the contact's email address the account checkpoint.

The [ICP Scored Outbound List](/bots/icp-scored-outbound-list) is useful before entry because it returns a review list and checks active sequences. The [Sales Play Autopilot](/bots/sales-play-autopilot) is useful after entry because it tracks the ordered play. Keep those jobs separate so a new research match cannot silently reset an account already in motion.

## Freeze the play version before enrolling accounts

Write the play as a numbered contract before the first account enters it. Include entry criteria, ordered steps, waits, completion evidence, pause rules, exit rules, and disqualifiers. Give that contract a version such as PLAY-EXPANSION-07. The number is your label, not a product feature or allowance.

An edit creates a new version. It does not rewrite history. If version 07 waits five working days after a call and version 08 waits three, an account enrolled under 07 does not suddenly become overdue because someone changed a cell. Decide explicitly whether each active account stays on 07, migrates to 08, or exits. Record that choice as an event.

This discipline separates two questions people often collapse. “What should the play do now?” concerns the play definition. “What did this account consent to next?” concerns its current checkpoint. Changing the first answer cannot silently change the second.

| Play field | Example value | Missing-field response | May change an active checkpoint? |
|---|---|---|---|
| Entry rule | Approved expansion candidate | Refuse enrollment | No |
| Step order | Research, call review, draft, wait | Refuse run | No |
| Wait rule | Five working days after reviewed draft | Hold until clarified | No |
| Pause rule | Any inbound human reply | Pause immediately | Yes, through a new event |
| Exit rule | Meeting booked or owner withdraws | Keep account blocked | Yes, through a new event |
| Boundary | Draft only, human sends | Refuse unsafe play | Never |

## Store one ledger row for every observed event

Do not store only “current step.” That value cannot explain how it became current, and an unexplained checkpoint is hard to repair. Keep an append-only ledger where each observed event gets its own row. Then derive the current state from accepted events.

Each row needs an account key, event ID, event type, observed time, effective time, source, source record ID, play version, prior checkpoint version, payload summary, and ingestion time. Observed time says when your process saw it. Effective time says when the source says it happened. Keeping both exposes late-arriving events.

An email reply may have an effective time of 10:04 but reach the ledger at 10:07. If a draft decision was calculated at 10:05 and proposed at 10:06, the reply is late to your ledger but earlier in account reality. The ledger can replay that order. A single mutable “last action” cell cannot.

| Event type | Source of truth | State effect | Evidence required |
|---|---|---|---|
| ACCOUNT_ENROLLED | Approved intake record | Creates step 1 checkpoint | Account ID, play version, approver |
| HUMAN_REPLY_RECEIVED | Mail or CRM activity | Pauses all automated advancement | Message ID, received time, thread ID |
| DRAFT_REVIEWED | Human review queue | Completes draft review only | Reviewer, decision, draft ID |
| OUTWARD_ACTION_CONFIRMED | Human action record | Starts the next wait | Human confirmation and source record |
| WAIT_EXPIRED | Derived clock event | Makes account eligible for evaluation | Prior action time and wait rule |
| ACCOUNT_EXITED | Owner decision or exit evidence | Closes the journey | Reason, owner, supporting record |

## Derive the checkpoint instead of trusting the last edited cell

Fold the accepted ledger events in effective order, with a deterministic tie breaker such as event ID. The result is a materialized checkpoint: account, play version, current step, status, next eligible time, checkpoint version, and the last event that changed it. You can rebuild that result whenever a source is corrected.

The checkpoint is a cache, not the history. If it disagrees with the ledger, rebuild it. Never delete the event that made a bad decision visible. Mark it REJECTED_STALE or SUPERSEDED and append the correction. This keeps the incident explainable without pretending the first record never existed.

Give each accepted state change a monotonically increasing checkpoint version per account. The numbers do not represent global time. They represent the accepted order for that account. A proposed decision says, “I read checkpoint 14 and want to create checkpoint 15.” The writer accepts it only if 14 is still current.

## Reconcile mailbox, CRM, calendar, and tracker clocks

Sales work rarely has one authoritative clock. The mailbox knows when a reply arrived. The CRM knows when an activity was logged. The calendar knows whether a meeting exists. Your tracker knows what the play expected. Reconciliation means asking each source the narrow question it owns.

Before choosing a transition, refresh the sources that can veto advancement. Check for a reply in the existing thread, an active sequence, a booked meeting, an owner change, a closed opportunity, and a disqualifying account state. Treat an unreachable veto source as a block, not as “nothing found.” Absence of evidence from a failed login is not evidence of absence.

Capture a read watermark for each source. The watermark can be the latest event ID, source update time, or another stable cursor the source actually exposes. Do not invent a feature the tool lacks. If a source offers no reliable cursor, record the query time and run a second direct check immediately before commit.

| Source | Question it owns | Result that blocks advancement | Failure behavior |
|---|---|---|---|
| Mail thread | Did a person reply? | Any unhandled inbound reply | BLOCKED_SOURCE |
| CRM | Is ownership, stage, or exclusion different? | Owner conflict, active sequence, closed state | BLOCKED_SOURCE |
| Calendar | Has the goal meeting been booked? | Matching meeting exists | EXIT_GOAL_MET |
| Play ledger | What checkpoint was accepted? | Version differs from bot read | REJECTED_STALE |
| Human review queue | Was this exact draft approved? | Missing, rejected, or replaced review | HOLD_REVIEW |

## Reject every write based on a stale checkpoint

The commit rule prevents checkpoint inversion: accept a transition only when the account checkpoint version still equals the version the bot read. This is optimistic concurrency in plain clothes. It assumes work may happen in parallel and makes a collision visible.

Suppose the bot reads account ACCT-184 at checkpoint 14. A reply event is then accepted and advances the checkpoint to 15 with status PAUSED_REPLY. The bot proposes ADVANCE_TO_STEP_4 using expected version 14. The writer compares 14 with current 15 and rejects the proposal. The bot does not retry the same decision against version 15. It rereads the account from all veto sources and evaluates again.

A stale rejection is a successful safety outcome, not an operational error to hide. Put it in the daily report. Repeated stale rejections may reveal a run that is too long, a source that ingests late, or too much work being bundled between read and commit.

Use a second guard for late-arriving events. After the first version check, query whether any veto event has an effective time earlier than the proposed transition and an ingestion time later than the bot's source read. If yes, reject and replay. This closes the gap where the ledger version looked current only because the reply had not arrived yet.

## Walk Nia through the 10:04 reply collision

Nia is an invented revenue operations manager running the renewal-risk play for account ACCT-184. On Tuesday at 10:02, her bot reads checkpoint 14. The account is on STEP_3_WAIT_AFTER_CALL, and the wait has expired. Mail shows no reply at the recorded watermark. The bot starts preparing the next review draft.

At 10:04, the buyer replies to Nia's colleague in the existing thread: “We are reviewing internally. Please hold outreach until Friday.” The mail source records the message at 10:04. CRM ingestion is slower, so the CRM activity is not visible yet.

At 10:05, the bot finishes a personalized follow-up. Without a commit check, it would overwrite the tracker with STEP_4_DRAFT_READY. That is checkpoint inversion. The content is polished, the wait rule was served, and the account ID is correct. The step is still wrong because a human conversation now controls the account.

Nia's writer performs the version check at 10:06. The ledger has not received the mail event yet, so checkpoint 14 still matches. The writer then performs the mandatory veto refresh against the thread. It sees message MSG-771 with effective time 10:04, appends HUMAN_REPLY_RECEIVED, and creates checkpoint 15 as PAUSED_REPLY. It rejects the draft proposal as REJECTED_NEW_VETO.

At 10:07, normal CRM ingestion adds its copy of the reply. Deduplication connects that source record to MSG-771 rather than pausing the account twice. The daily report shows one paused account, one discarded draft, and the message evidence. Nia assigns the human owner to respond. The bot neither sends the follow-up nor changes the CRM deal stage.

On Friday, Nia does not simply resume STEP_4. She records a human decision after reading the thread. If the buyer invited a response, she appends RESUME_APPROVED with a new due time. If the buyer is still reviewing, she extends the pause. The state follows the conversation, not the original schedule.

## Separate draft readiness from completed outward action

A draft is not a sent message. A call opener is not a completed call. A suggested CRM note is not a changed record. Give these objects different event types and never let DRAFT_READY start the next wait.

The wait begins only after a human confirms the outward action using evidence from the system where it occurred. For email, that may be a sent-message ID recorded by the human-controlled process. For a call, it may be the completed activity the rep reviews. If the evidence is missing, status remains HOLD_ACTION_CONFIRMATION.

This separation prevents a quiet second failure. A bot prepares a draft on Monday, assumes it was sent, and advances again on Thursday. The rep never reviewed Monday's draft. Now the bot appears to have followed the play while the prospect received nothing. Counting artifacts as actions makes both over-contact and under-contact possible.

The catalog boundary is explicit: [Sales Play Autopilot](/bots/sales-play-autopilot) never sends a message, books a meeting, or moves a deal stage. If you want help writing in an established voice, [Outbound in Your Voice](/bots/outbound-in-your-voice) still leaves sending to a person. Draft quality and execution authority are separate controls.

## Gate each transition with evidence and precedence

Write a transition table that both operators and the bot can read. Every row names the current state, required evidence, resulting state, and stronger event that wins. Precedence resolves simultaneous truths without asking the bot to improvise.

A human reply beats a served wait. A booked goal meeting beats a pending draft. A disqualifier beats a personalization opportunity. A manual owner pause beats every scheduled advance. When two events share the same effective time, choose a documented safety order and retain both events.

| Current state | Candidate event | Required evidence | Next state | Event that wins instead |
|---|---|---|---|---|
| WAITING | Wait expired | Prior action and applicable wait rule | ELIGIBLE_REVIEW | Human reply |
| ELIGIBLE_REVIEW | Draft prepared | Draft ID and checkpoint version | DRAFT_READY | Meeting booked |
| DRAFT_READY | Human approved | Reviewer and exact draft ID | APPROVED_NOT_SENT | New reply |
| APPROVED_NOT_SENT | Human confirms action | Source action ID and time | WAITING | Owner pause |
| Any open state | Human reply | Message and thread IDs | PAUSED_REPLY | Account exit |
| Any open state | Exit rule met | Evidence named by rule | EXITED | None |

Do not encode precedence only in prose buried at the end of the charter. Put it beside the transitions and test every collision pair that can occur in production.

## Keep one never-send boundary across the whole play

The bot must never send a message, enroll a contact, book a meeting, or move a deal stage. It can return drafts and proposed changes. A human reviews the current account evidence and performs the outward action from the appropriate system.

This boundary does more than reduce reputational risk. It leaves time for the final veto refresh. It lets the account owner notice a reply that landed through an unconnected channel. It stops a bad identity merge from immediately contacting the wrong person. It also matches the documented sales outbound posture: skip anyone already in an active sequence, return a review list, and do not send or enroll anyone.

An approval controls a proposed action. It does not reverse work already completed. For that reason, do not make “send, then ask for approval if the reply looks wrong” part of the design. Use the reasoning in [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) to keep the charter's refusal separate from whatever permissions happen to exist in the browser.

## Make retries repeatable without repeating the work

Every proposed transition needs an idempotency key built from stable parts: account ID, play version, prior checkpoint version, transition type, and source event ID. If the same proposal arrives twice, return the first result. Do not append a second event, create a second draft, or change the due date.

Retries happen after timeouts, browser stalls, operator refreshes, and uncertain saves. “Try again” is normal operational behavior. Without a stable key, a harmless retry becomes a second call task or a second review draft. Deduplication by email subject or company name is too weak because legitimate later steps may use similar wording.

Keep the generated draft tied to the checkpoint that produced it. If the checkpoint changes, label the draft SUPERSEDED and prevent approval. Do not edit the old object until it looks current. Create a new draft from the new checkpoint so the review trail shows which evidence informed which words.

For broader testing patterns, [Bot Output Verification](/blog/bot-output-verification) explains why a plausible artifact is not proof that the intended state change occurred. Here, proof means the transition key appears once and the current checkpoint can be replayed from accepted events.

## Report holds and rejections as useful daily output

A fleet report that celebrates only advances trains operators to dislike safety controls. Show holds, stale rejections, vetoes, and source failures beside completed reviews. If nothing advanced, say so and show why.

The daily table should include account ID, display name, prior step, decision, controlling evidence, checkpoint version, next eligible time, human owner, and required action. Sort PAUSED_REPLY and BLOCKED_SOURCE above routine waits. They demand attention. Keep exited accounts in a separate same-day section with reasons.

Add reconciliation totals. Count accounts at start, enrolled, exited, advanced, held, paused, rejected stale, and present at end. The equation must balance. A missing account is more urgent than a slightly inaccurate summary sentence.

| Daily measure | Meaning | Operator response |
|---|---|---|
| REJECTED_STALE | Checkpoint changed after read | Inspect collision, then allow fresh evaluation |
| PAUSED_REPLY | Human conversation now controls account | Route to owner and suppress scheduled advancement |
| BLOCKED_SOURCE | A veto source could not be checked | Restore access or keep account held |
| HOLD_REVIEW | Draft awaits a named human | Review exact draft against current evidence |
| NO_ACCOUNT_ADVANCED | No transition committed today | Read wait and block counts, do not force motion |

## Share the play configuration without pretending to share state

A public share link can copy a bot's configuration to another account. It does not copy the computer, logins, or conversation history. Strip secrets and confidential material because the link exposes the configuration. Treat the copied bot as a fresh installation, not a replica of the running ledger.

The receiving operator needs an independently prepared ledger, source connections, account identity mapping, play version, and test fixtures. Never paste customer rows or internal hostnames into a charter intended for sharing. Store environment-specific paths and account data outside the public configuration.

All bots on one account share one persistent cloud computer. Their screens are work surfaces, not security boundaries, and separate bots do not isolate credentials. A sales bot and a research bot may encounter the same signed-in sessions and files. Use account-level access controls, sign out where appropriate, and never assign sensitive separation to bot names.

If you are moving the setup to another seat, follow [Copy a botskills Listing onto a Second Seat](/blog/copy-a-botskills-listing-onto-a-second-seat). That process copies behavior and reconnects inputs; it does not claim to migrate live checkpoints.

## Answer the claim that the CRM already owns the state

The strongest counter-argument is sensible: the CRM already has stages, tasks, activity timestamps, and owners, so a separate play ledger creates another source of truth. If your CRM can represent the full play, preserve every event, enforce compare-before-write, retain source identifiers, and express pause precedence, use it as the ledger. The pattern matters more than the storage label.

Most teams discover that deal stage is too coarse. One opportunity stage may contain research, first draft, human review, send confirmation, wait, reply pause, and resume decision. Packing those into notes loses machine-checkable transitions. Adding custom fields helps only if writes are conditional and history remains reconstructable.

Do not mirror every CRM field. Keep the minimum operational ledger and link each accepted event back to its source record. Let the CRM remain authoritative for ownership, opportunity state, and recorded activities. Let the play ledger answer the narrower question: which play checkpoint was accepted from which evidence under which version?

## Stop using this page when the motion is not a shared ordered play

This page stops applying when each account follows a bespoke strategy, when the next move cannot be represented as a finite transition, or when one operator handles so few accounts that a reviewed checklist is clearer than a state system. It also stops at the human action boundary. This guide does not design consent policy, sales messaging, territory rules, CRM permissions, or legal retention.

If the work is account research without an ordered motion, use [Account Expert](/bots/account-expert) and read [the internal account brief guide](/blog/account-expert-internal-brief). If the need is to define approvals across several bot jobs, use [the bot delegation playbook](/blog/bot-delegation-playbook). If the play requires the bot to send autonomously, this article does not authorize that expansion. Redesign the boundary with the accountable owners before proceeding.

Stop the run when a required source has no trustworthy cursor and no safe final recheck, when account identity is unresolved, or when a human action cannot be distinguished from a draft. Those are design blockers, not prompt-writing challenges.

## Paste a charter that makes checkpoint inversion impossible to hide

Replace the bracketed values with paths and source names that exist in your environment. Keep customer data and secrets outside the charter, especially if you may publish a share link.

\`\`\`text
ROLE
You are Sales Play State Keeper. Run one approved, versioned sales play across
the accounts in [APPROVED ACCOUNT INPUT]. Prepare internal review work only.

PLAY CONTRACT
Use only play [PLAY ID] version [VERSION]. Required fields are entry rule,
ordered steps, waits, completion evidence, pause rules, exit rules,
disqualifiers, and precedence. If any field is missing, write BLOCKED_PLAY and
stop. Never reinterpret an older checkpoint under a newer play version.

IDENTITY
Key every journey by [CRM ACCOUNT ID]. Never merge or choose an account by
display name, domain similarity, or contact email. Write BLOCKED_IDENTITY when
sources disagree.

READ
For each account, read the accepted checkpoint version and refresh the sources
that own replies, active sequences, meetings, ownership, opportunity state,
and exclusions. Record a source watermark or query time. An unreachable veto
source means BLOCKED_SOURCE, never no event found.

DECIDE
Choose exactly one result: ADVANCE_PROPOSED, HOLD_WAIT, HOLD_REVIEW,
PAUSED_REPLY, BLOCKED_SOURCE, BLOCKED_IDENTITY, EXIT_GOAL_MET,
EXIT_DISQUALIFIED, or NO_CHANGE. Cite the rule and source record IDs.

COMMIT
Every proposal must include account ID, play version, expected checkpoint
version, transition type, controlling source event, and idempotency key. Before
commit, refresh all veto sources. Accept only if the expected checkpoint is
still current and no earlier-effective veto event arrived. Otherwise write
REJECTED_STALE or REJECTED_NEW_VETO, reread, and do not reuse the draft.

ACTION PROOF
DRAFT_READY never means SENT, CALLED, BOOKED, or CRM_UPDATED. Start a wait only
after a human supplies evidence for the exact outward action. Bind every draft
to the checkpoint version that produced it. Supersede it if state changes.

BOUNDARY
Never send or schedule a message, enroll a contact, place a call, book or change
a meeting, edit a CRM record, move a deal stage, clear an exclusion, or create
a new bot. Return drafts and proposed changes for a named human to review.

REPORT
Return account, prior step, one decision, evidence, checkpoint version, next
eligible time, human owner, and required action. Put replies, source failures,
and stale rejections first. Reconcile start plus enrolled minus exited against
the ending account count. If none advanced, state NO ACCOUNT ADVANCED TODAY.
\`\`\`

## Test collisions before connecting production accounts

Use fixtures with invented accounts and inert destinations. Test a normal advance, an unserved wait, a reply arriving before the read, a reply arriving between read and commit, a reply ingested late with an earlier effective time, a duplicate retry, a play-version change, an unreachable CRM, an unresolved account ID, and a draft approved after its checkpoint changed.

For every fixture, predict the exact status, checkpoint version, ledger event, and absence of outward action. The between-read-and-commit fixture must produce REJECTED_NEW_VETO. The late-ingestion fixture must trigger replay. The duplicate retry must create one transition. The superseded draft must become unapprovable.

Then run one invented account through the complete play with a human confirming each outward action. Rebuild the final checkpoint from the event ledger and compare it with the materialized row. Only after those values match should you introduce a small reviewed set of real accounts.

Do not call a test successful because the prose sounds right. Inspect the ledger, transition key, checkpoint version, veto-source reads, and review queue. The point is to prove that an older decision cannot become newer state.

## Frequently Asked Questions

### How do I run one sales play across many accounts safely?

Define a versioned play, identify each account with a stable CRM key, and record every reply, review, human action, wait, pause, and exit as a separate event. Derive the current checkpoint from those events. Before accepting any next-step proposal, refresh sources that can veto advancement and compare the checkpoint version with the one the bot originally read. Reject stale work, even when its draft looks correct. Keep sending, enrollment, meeting booking, and deal-stage changes with a named human reviewer.

### What is checkpoint inversion in a sales play?

Checkpoint inversion occurs when a newer account event exists but an older bot decision becomes the visible current state. A common case starts when the bot reads an expired wait, a prospect replies moments later, and the bot then saves a follow-up step based on its earlier read. The timestamps move forward while the account state moves backward. Prevent it with event history, source watermarks, a final veto refresh, conditional writes against checkpoint versions, and replay for late-arriving events.

### Can the CRM be the only state store for the play?

Yes, if it can represent every play checkpoint, preserve event history, attach source identifiers, enforce conditional writes, distinguish drafts from completed human actions, and apply reply or exit precedence. A normal opportunity stage is often too broad because several play steps happen inside one stage. The goal is not to add another database automatically. The goal is to make each transition reconstructable and reject stale writes. Use the CRM when it satisfies those requirements; add a narrow ledger when it does not.

### Does sharing a bot copy its live account progress?

No. A public share link copies the bot configuration for someone to preview and add to their own account. It does not transfer the computer, logins, conversation history, source connections, or the play ledger described here. Remove secrets and confidential details before sharing because the configuration becomes visible through the link. The receiving operator must connect approved sources, establish account identities, load or rebuild checkpoints, and rerun collision tests. Treat the copied bot as a fresh installation, not a synchronized worker.
`,
};
