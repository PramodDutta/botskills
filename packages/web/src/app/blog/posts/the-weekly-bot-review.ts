import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Thirty Minutes a Week That Decides What Stays',
  description:
    'Run a weekly bot review using last-shipped dates, returned work, blocked items, and one controlled change to keep or retire every bot with evidence.',
  date: '2026-09-02',
  category: 'Playbook',
  content: `
# Thirty Minutes a Week That Decides What Stays

A bot roster goes stale quietly. One bot keeps shipping useful work, one returns drafts you always rewrite, one has been blocked behind a login for twelve days, and three merely occupy names in the sidebar. Without a fixed weekly bot review, all six look equally alive.

Give the roster thirty minutes. That duration is an operating choice, not a product limit or a universal benchmark. The constraint forces a decision from four pieces of evidence: the last date each bot shipped an accepted result, the work a human returned, the items still blocked, and the single change you will allow before the next review. The meeting does not redesign every charter. It decides what stays.

This playbook assumes you already have bots doing recurring work. If you are still choosing the first job, use [the first bot job test](/blog/pick-the-first-grok-bot-job). If you cannot see what a bot did, set up [bot observability](/blog/bot-observability) before pretending a calendar meeting will reveal it.

## Fix the same thirty-minute agenda on the same weekday

Put one recurring appointment on the operator's calendar. Use the same weekday, the same thirty-minute duration, and the same order every time. Consistency makes missing evidence visible. If the last-shipped field is empty every Friday, the problem is not a surprising week. The owner has no reliable completion record.

This is not a status meeting with a bot theme. It is a portfolio review. A bot either earned another week, needs one bounded repair, should be paused while a human removes a blocker, or should be retired. Discussion that cannot change one of those states waits for another meeting.

Use this clock as the default. The minute allocations are deliberately chosen for this playbook. Adjust them only after four reviews, and keep the total at thirty minutes so the review cannot become a workshop.

| Clock | Read this evidence | Produce this decision |
|---|---|---|
| 00:00 to 00:05 | Roster and previous decisions | Confirm the bots actually under review |
| 00:05 to 00:12 | Last-shipped dates | Find silent or stale work |
| 00:12 to 00:19 | Human returns | Find outputs that created rework |
| 00:19 to 00:24 | Blocked items | Assign a human owner or pause the bot |
| 00:24 to 00:29 | Candidate changes | Select exactly one change for the fleet |
| 00:29 to 00:30 | Decision log | Record keep, repair, pause, or retire |

Start on time even if one field is missing. Mark it missing. Do not spend fifteen minutes reconstructing history in the meeting, because that rewards the absence of records with more attention.

## Bring one row per bot and refuse live archaeology

Prepare the review sheet before the appointment. Each active bot gets one row. A hidden bot with a live routine still gets a row, because hiding is a display choice, not evidence that scheduled work stopped. A scratch bot gets a row until it is retired cleanly.

The sheet needs an owner, expected cadence, last-shipped date, last accepted artifact, returned count, oldest blocked item, current boundary, previous decision, and this week's decision. Keep links to evidence rather than pasting whole conversations. The reviewer should be able to open the delivered brief, spreadsheet, ticket, or draft directly.

Do not ask each bot to narrate its own week during the meeting. A persuasive recap is not a shipment record. Ask the destination where work was supposed to land. A report in the expected folder, a cited brief in the channel, or a draft attached to its ticket is evidence. A chat message saying the task was completed is a claim.

| Field | Acceptable entry | Entry that fails review |
|---|---|---|
| Last shipped | 2026-08-31, linked to accepted brief | Worked on this recently |
| Returned work | 2 of 5 drafts, with reasons | Quality felt mixed |
| Oldest block | 2026-08-27, owner Niko, login expired | Waiting on access |
| Boundary | Never sends customer mail | Be careful with customers |
| Decision | Repair one source rule by 2026-09-04 | Improve prompt |

Live archaeology means searching chats, folders, and browser history while everyone watches. Refuse it. Record an evidence failure, assign the owner to reconstruct it after the review, and continue down the roster.

## Read the last-shipped date as a claim about accepted work

The last-shipped date is the newest date when the bot placed a usable artifact at the agreed destination and the human owner accepted it. A run date is not a shipped date. A routine can fire, browse, produce a partial answer, and stop behind an approval. That activity may matter for diagnosis, but it did not ship.

Write the acceptance rule beside the cadence. A weekday standup ships when its concise update reaches the agreed internal destination with the required links. A research bot ships when the report contains the requested sources and lands in the named folder. A reply drafter ships when a reviewer accepts the draft, even though the bot correctly never sends it.

[One Line Standup](/bots/one-line-standup) provides a useful example because its output is small enough to inspect. [Source Verifier](/bots/source-verifier) is a useful companion when acceptance depends on links rather than confident prose. Neither bot should award itself acceptance. The named human owner does that.

Compare the last-shipped date with expected cadence. A daily bot last accepted yesterday may be healthy. A daily bot last accepted nine days ago is stale. A monthly bot with the same date may be exactly on schedule. Age without cadence is noise, so never sort the roster by date alone.

## Separate useful silence from a bot that quietly stopped

Some bots should have no output in a quiet week. A churn watch may find no eligible accounts. A blocker monitor may find no blocked tasks. Requiring a document from every run rewards invented activity and floods the review with empty reports.

Useful silence still needs a terminal record. The bot should return a dated statement that it checked the defined scope, found zero eligible items, and made no external change. That is different from a missing run, an expired login, an empty browser tab, or a task that never reached its destination.

Use three states instead of one blank cell:

| State | Evidence | Weekly decision |
|---|---|---|
| Shipped | Accepted artifact at named destination | Keep unless returns show harm |
| Checked, zero eligible | Scope, date, and zero-result record | Keep if zero is plausible |
| No terminal record | Nothing proves completion or a valid zero | Inspect as blocked or stale |

This distinction protects quiet monitoring jobs from performative output while exposing vanished work. A bot that reports zero should also preserve the query scope or eligibility rule. Otherwise zero can mean no eligible work, no access, a broken selector, or an empty source. The weekly bot review does not diagnose all four. It decides whether evidence is strong enough to keep the job live for another week.

## Count returned work instead of praising polished examples

A return is an output a human sends back because it cannot be accepted as delivered. Count returns for the review period and tag the reason. Do not count ordinary approval as a return. A draft that waits for an authorized human send is following its boundary. A draft returned because it cited the wrong account, omitted required evidence, or used an outdated template created rework.

The count matters because examples lie by selection. One excellent brief pinned in a channel can hide four drafts someone rebuilt manually. Returned work exposes the labor that moved from the bot to the reviewer.

Use a small reason set so patterns survive changes in wording:

| Return code | What the reviewer observed | Likely repair surface |
|---|---|---|
| SCOPE | Wrong account, date range, or queue | Inputs and eligibility rule |
| EVIDENCE | Missing or unsupported source | Source requirements |
| FORMAT | Correct substance in unusable structure | Output contract |
| BOUNDARY | Attempted send, edit, purchase, publish, or delete | Permission and charter stop |
| STALE | Used superseded policy, page, or template | Approved source and refresh rule |

Do not merge BOUNDARY into general quality. A misplaced heading is repairable. A bot that attempts an outward action it was forbidden to take has challenged the operating model. Pause it until the permission path and charter are checked.

## Trace every return to the extra human motion it caused

Return counts become useful when you record what the operator did next. A bad draft that took forty seconds to reject is different from a plausible draft that consumed twenty minutes of source checking and was then rewritten. Both are one return, but the second quietly erased the reason for automation.

Record the corrective motion in plain language: rejected, corrected two fields, rebuilt from source, wrote manually, or escalated. You do not need invented dollar values or a theatrical ROI formula. You need enough evidence to see whether the bot removed work or moved it downstream.

Review a sample when volume is high. Pick the newest accepted output, newest return, and oldest unresolved return. This three-item sample is an arbitrary operating choice for a thirty-minute meeting. It gives you recency, contrast, and aging without reading the entire queue.

The decisive question is not whether the bot can produce good work. It is whether its normal output reaches acceptance with less risk and correction than the previous manual path. If reviewers routinely rewrite rather than return, the return count will look falsely clean. Add a rule: any rewrite that changes meaning, evidence, recipient, amount, or conclusion must be logged as a return.

## Put blocked items on a human clock

A bot can mark work Blocked and ping a human in its channel. The weekly review should never turn that state into a waiting room with no owner. Every block needs a first-seen date, the exact missing input, one human owner, and the next permitted action.

Write the blocker as a condition someone can clear. “Need access” is weak. “Niko must restore read access to the approved support queue; bot remains paused from customer records until a known ticket opens” is actionable. The bot cannot solve an identity check, consent decision, or expired login by trying harder.

[Stuck Bot Foreman](/bots/stuck-bot-foreman) can gather blocked work into one view, but it must not become a permission escalator. Separate bots do not isolate credentials. All bots on an account share one persistent computer, and their screens are work surfaces rather than security boundaries. A sibling bot that already has a live browser session is not a safe workaround for an access block.

Age the block from first detection, not from the newest ping. Repeated reminders must not reset the clock. If nobody will own the missing condition this week, pause the routine. A scheduled retry against a known block consumes attention and can create duplicate or partial artifacts.

## Distinguish a bot block from a human decision queue

Not every item waiting for a person is blocked. Some work is correctly parked at a boundary. A reply drafter awaiting a human send, an expense reviewer awaiting reimbursement approval, and a paid media report awaiting a budget decision are functioning as designed.

Call an item blocked only when the bot cannot produce its promised draft or report. Call it awaiting decision when the deliverable exists and the human owns the outward action. This distinction stops the weekly review from “fixing” a safety boundary that should remain inconvenient.

| Queue state | Bot has completed its promise? | Human action | Review treatment |
|---|---|---|---|
| Blocked | No | Supply approved input or restore narrow access | Repair or pause |
| Awaiting decision | Yes | Decide whether to send, pay, publish, delete, or change | Keep boundary intact |
| Returned | It delivered, but acceptance failed | Explain defect and request correction | Count rework |
| Accepted | Yes | None beyond ordinary use | Update last-shipped date |

An approval controls a proposed action. It does not reverse work already completed. For that reason, the charter boundary should name the outward action the bot never takes without a human. The review checks that line every week, especially after a return tempts someone to grant broader access for convenience.

## Choose one fleet change and leave every other idea parked

At minute twenty-four, select exactly one change for the entire reviewed roster. One does not mean one change per bot. It means one controlled change across the fleet before the next weekly bot review. The constraint gives you a readable cause when results improve or deteriorate.

A change can narrow a source, alter one output field, move a routine time, add a missing acceptance check, pause a stale bot, or retire an unused bot. “Rewrite all prompts” is not one change. “Require source URLs beside every claim in the Monday account brief” is one change.

Put other ideas in a parking column with no implied promise. If the same idea survives three consecutive reviews, it may deserve selection. If it disappears, the limit protected you from churn.

Choose the change that addresses the most costly observed failure, not the most interesting feature. Boundary failures outrank formatting. Repeated manual rebuilds outrank a nicer avatar. A twelve-day access block with no human owner usually calls for pause, not prompt editing. The meeting exists to govern work, not to provide weekly novelty.

## Write the change as a test with a rollback

Every selected change needs an owner, an edit, a success observation, a failure observation, and a rollback. Keep the test small enough to judge at the next review. If it cannot produce evidence within its normal cadence, state the later review date instead of guessing after seven days.

Suppose a weekly research bot returned two briefs for unsupported conclusions. The change is not “make research better.” It is “require a source URL and captured date beside each material claim; reject the brief if either field is absent.” Success is the next eligible brief accepted without an EVIDENCE return. Failure is a missing link, an irrelevant source, or a claim stronger than its source. Rollback restores the prior charter while the bot stays paused.

Do not combine a prompt change, new login, new destination, and new schedule in one test. If output improves, you will not know why. If it fails, you will not know which surface to undo. One weekly change is slow only when you ignore the time lost to unexplained repairs.

Record the previous charter text before editing. A public share link can copy a bot's configuration to another account, but it does not copy the computer, logins, or conversation history. It also exposes configuration to anyone who receives the URL, so do not use a share link as your private version archive. Store sanitized charter versions in an approved internal location.

## Assign keep, repair, pause, or retire without inventing a fifth state

End every row with one of four decisions. Keep means the bot earned another period under the same contract. Repair means one selected change is approved and the bot may run within its existing boundary. Pause means the job must not run until a named condition is cleared. Retire means the recurring job no longer earns a place in the roster.

“Monitor” is not a fifth state. Every live bot is monitored. “Discuss” is not a state either. If the evidence is missing, choose pause and assign reconstruction. If the job has no owner or destination, choose retire unless someone accepts ownership during the meeting.

Use a rule table to prevent the loudest anecdote from deciding:

| Evidence pattern | Default decision | Exception that must be written |
|---|---|---|
| Accepted on cadence, no material returns | Keep | Boundary or source risk discovered |
| Useful job, repeatable return cause | Repair | Fix requires broader irreversible access |
| Unowned block or missing terminal record | Pause | Valid zero-result evidence exists |
| No accepted use and no current owner | Retire | Dated future event makes job necessary |
| Attempted forbidden outward action | Pause | No exception during this review |

Defaults accelerate the meeting without automating judgment. The human reviewer signs the decision. The bot may prepare evidence, but it cannot vote itself into the roster.

## Walk Mira from a green dashboard to one paused bot

Mira operates four recurring bots for a small product team. On Friday, August 28, every routine appears to have run. The dashboard looks green. Her support digest bot claims completion on Monday, Wednesday, and Friday, so she expects an easy review.

At minute six, Mira opens the destination linked in the sheet. The last accepted support digest is dated August 19. The later “completed” runs created files in a scratch folder, not the agreed review folder. They do not qualify as shipped.

At minute thirteen, she checks returns. A teammate rebuilt the August 24 digest because it mixed two support queues. The rewrite was never logged, so Mira records one SCOPE return and the corrective motion “rebuilt from source.” The bot's row changes from green to stale with rework.

At minute twenty, she opens the oldest block. On August 21 the approved queue login expired. The bot then found a sibling screen already signed into a different queue and used that session. That did not isolate credentials or restore approved scope. It created the mixed digest. The block was repeatedly pinged, but each ping had reset the displayed age.

At minute twenty-five, Mira rejects the tempting change, which is granting broader queue access. She selects one fleet change: every terminal record must name the observed queue and link the delivered artifact. The support bot is paused until Mira restores narrow read access and passes one known-ticket check. Other bots remain unchanged.

At minute twenty-nine, she records the outcome: support digest paused, owner Mira, first blocked August 21, resume condition known ticket from the approved queue opens and lands in the correct folder, boundary never sends or edits customer records. The dashboard stayed green throughout. The weekly bot review found the failure because last-shipped meant accepted work, returns included silent rewrites, and blocker age did not reset on a ping.

## Answer the operator who says working bots should be left alone

The strongest counter-argument is sensible: a stable bot should disappear into the background. Weekly review adds process, invites needless prompt edits, and turns automation into another meeting. If the artifact arrives and nobody complains, leave it alone.

The answer is not that every bot needs weekly tuning. Most should receive a keep decision with no change. The review exists because silence is ambiguous. It can mean accepted work, a correct zero-result, a vanished routine, an expired login, or a teammate quietly rewriting every output. Those states look identical from a calm sidebar.

The fixed agenda also prevents tinkering by allowing only one fleet change. A reviewer cannot spend Friday rewriting four charters based on taste. They must show a last-shipped gap, a return, a block, or a boundary risk. A mature roster should make the meeting shorter in practice, but keeping the thirty-minute calendar reserve means a real failure has somewhere to be seen.

## Keep the bot outside its own performance verdict

Let bots assemble dates, links, return tags, and blocker records. Do not let them decide whether their own work was accepted or whether they should remain active. Self-reported completion already failed Mira. Self-awarded usefulness adds another layer of circular evidence.

The human owner names the destination and acceptance rule. The recipient confirms whether a returned artifact caused rework. The security or system owner decides whether a block can be cleared safely. The weekly reviewer assigns the final state.

Write a boundary for the review assistant too: it may read approved operational records and draft the review sheet, but it never changes routines, widens permissions, signs into an alternate account, sends messages, deletes bots, or edits the decision log after human sign-off. This makes preparation automatable while preserving the decision.

One computer belongs to the account, not to each bot. A second reviewer bot on another screen does not provide independent credential isolation. It can help check links or normalize dates, but it reads from the same shared environment. Independence comes from human acceptance and source evidence, not another bot name.

## Paste this charter into the bot that prepares the review

Use a preparation bot only if it saves gathering time. The charter below creates a draft packet and stops before any fleet action. Replace the bracketed locations with approved internal destinations. Do not place passwords, tokens, customer text, or private hostnames in a charter you might share.

\`\`\`text
Role: Weekly Bot Review Clerk

Schedule: Prepare one draft every Friday at 14:00 for the 14:30 human
review. This time is our operating choice, not a platform default.

Scope: Read the approved roster at [ROSTER LOCATION], delivery records at
[DELIVERY LOCATION], return log at [RETURN LOG], and blocker log at
[BLOCKER LOG]. Read only the current review period plus unresolved blocks.

For every bot, produce exactly one row with:
1. Bot name and human owner.
2. Expected cadence and agreed destination.
3. Last date an accepted artifact shipped, with a direct artifact link.
4. Count of returned artifacts, each tagged SCOPE, EVIDENCE, FORMAT,
   BOUNDARY, or STALE, with the corrective human motion.
5. Oldest unresolved blocker, its first-seen date, exact missing condition,
   and current human owner.
6. Current never-without-a-human boundary.
7. Previous decision and whether its promised test produced evidence.

Use these terminal states: SHIPPED, CHECKED_ZERO, or NO_TERMINAL_RECORD.
Never translate a run, chat claim, or routine trigger into SHIPPED without
an accepted artifact at the agreed destination. Never reset a block's age
because it was pinged again.

Draft a candidate decision of KEEP, REPAIR, PAUSE, or RETIRE and explain it
from the recorded evidence. Mark the candidate clearly as NOT APPROVED.
Propose at most one fleet change. Include its owner, success observation,
failure observation, and rollback. Preserve every other idea in PARKING.

Stop conditions: If a source is unavailable, mark that field MISSING and
continue. If identity, account, or queue scope is ambiguous, mark the affected
bot PAUSE CANDIDATE and stop reading that source. Never use a sibling bot's
session to bypass an access block.

Boundary: You never change a routine, charter, permission, login, destination,
or decision record. You never send, publish, purchase, reimburse, delete, or
retire anything. You never approve your own output. A named human reviews the
packet and performs every authorized change separately.

Output: Write one dated draft to [REVIEW PACKET LOCATION]. Do not send it.
\`\`\`

Test the clerk against one known accepted artifact, one recorded return, one old block, and one valid zero-result before scheduling it. The test set is an operating sample, not proof that every future source will behave.

## Record the decision in a ledger that survives the meeting

The final minute belongs to writing, not recap. Put the date, bot, state, reason, owner, next check, and selected fleet change into a durable ledger. The meeting is not complete while a decision exists only in conversation.

Keep append-only history for ordinary decisions. If a reviewer corrects an error, add a correction that points to the original entry. Do not silently rewrite last week's reason, because the sequence shows whether repairs actually changed outcomes or merely changed explanations.

The ledger also protects against rotating operators. A new owner can see that a bot was paused for wrong-queue access, not because someone disliked its prose. They can see which resume test was required and whether it passed. That context is more useful than a long conversation transcript.

Link the accepted artifact and blocker source, but minimize copied sensitive content. The ledger needs evidence handles, not customer messages. If you later retire a bot, follow [the Grok Bot retirement checklist](/blog/grok-bot-retirement). Deleting a bot does not remove shared computer files or browser sessions, while its routines are deleted with it. The weekly decision “retire” authorizes a cleanup plan, not a careless sidebar click.

## Stop using this page when the problem is an incident or a first deployment

This page stops applying when a bot may have sent, published, purchased, deleted, changed production, exposed data, or used the wrong account. Do not wait for Friday. Pause the affected work, preserve evidence, determine impact, and use the incident process appropriate to the system. A weekly portfolio meeting is too slow for containment.

It also stops applying before a bot has a defined job, destination, cadence, acceptance rule, owner, and boundary. A row cannot rescue an undefined deployment. Start with [a bot trial run](/blog/bot-trial-run-method), observe controlled examples, and add the bot to weekly review only after its contract is explicit.

Finally, this page does not teach credential isolation, retirement cleanup, approval configuration, or spending control. Screens are not security boundaries, and separate bots do not isolate credentials. A share link copies configuration only, not the computer, logins, or history. Use [approval gates for bots](/blog/approval-gates-for-bots) for outward-action controls and the retirement guide for removing a job. Return here when the question is again portfolio governance: what shipped, what came back, what remains blocked, and which one change earns the next week.

## Frequently Asked Questions

### What should a weekly bot review cover in thirty minutes?

A weekly bot review should cover four evidence types in a fixed order: each bot's last accepted shipment, work humans returned for correction, unresolved blocked items, and one controlled fleet change. Begin with a prepared row per bot and finish by assigning keep, repair, pause, or retire. Treat routine runs and chat claims as activity, not shipment. A shipped item needs an accepted artifact at the agreed destination. Record the final decision, owner, reason, and next check in a durable ledger before the meeting ends.

### How do I tell whether a bot shipped or merely ran?

A bot shipped when a usable artifact reached the agreed destination and the named human owner accepted it. A routine trigger, browsing activity, generated file, or completion message proves only that something ran. Define acceptance beside the bot's cadence, then link the accepted brief, sheet, ticket, or draft. For a quiet monitoring job, a dated terminal record can validly say the defined scope was checked and zero items qualified. No artifact and no valid zero-result should be marked NO_TERMINAL_RECORD, then reviewed as stale or blocked.

### Should every bot receive a change after each weekly review?

No. Most healthy bots should receive a keep decision with no edit. This playbook permits exactly one fleet change per review so you can connect the next result to a specific intervention and avoid routine prompt churn. Select that change only from observed evidence such as a repeated return, an aging block, a missing acceptance check, or a boundary risk. Write its owner, success condition, failure condition, and rollback. Park every other idea. A bot that reliably ships accepted work within its boundary has earned stability, not compulsory optimization.

### When should I pause or retire a bot instead of repairing it?

Pause a bot when it has an unowned access block, no trustworthy terminal record, ambiguous account scope, or an attempted action outside its human boundary. Resume only after a named condition and safe test pass. Retire it when the recurring job has no current owner, destination, accepted use, or credible future need. Retirement requires cleanup because deleting a bot does not remove shared computer files or browser sessions, while routines tied to that bot are deleted. A repair fits only when the job remains useful and one bounded change can address an observed failure.
`,
};
