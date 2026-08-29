import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Draft the Call Follow-Up From the Transcript You Saved',
  description:
    'Use a saved transcript for a grok bot call follow up draft that cites promises, exposes missing dates, updates nothing, and waits for a human to send.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Draft the Call Follow-Up From the Transcript You Saved

Omar ends a forty-minute buyer call with six promises, two possible dates, and one vague next step. Ten minutes later, the details are already blending with the previous meeting. He saves the transcript, selects the matching calendar facts, and gives [Call Follow-Up Drafter](/bots/call-follow-up-drafter) one job: prepare an email and a CRM note for review. It must never send the email or write the record.

That boundary is the center of a reliable **grok bot call follow up draft**. The transcript supplies evidence, the drafter compresses it, and Omar remains accountable for recipient, tone, promises, dates, and Send. This tutorial builds the workflow around those separate responsibilities.

## Match the transcript to one meeting before drafting

A transcript filename is not an account match. Omar confirms the meeting start time, date, external attendees, and organizer before the bot reads the body. If two calendar events could match, the run stops as unmatched.

| Match field | Required check | Failure example | Safe response |
|---|---|---|---|
| Start time | Within declared export tolerance | Two calls began at 14:00 | Stop and list candidates |
| Attendees | At least one external name matches | Forwarded transcript has no roster | Ask Omar to identify it |
| Organizer | Omar hosted or was named | Colleague's call in shared folder | Exclude it |
| Duration | Transcript and event align | Transcript is 12 minutes shorter | Mark incomplete |

Do not guess from a company name mentioned in conversation. Consultants, competitors, and former employers appear in calls. The match header becomes part of both drafts so Omar can see exactly which artifact produced them.

## Save only the evidence this follow-up needs

The working folder needs the saved transcript, the confirmed meeting header, and any promised artifact Omar is actually allowed to reference. It does not need the whole inbox, CRM, or account drive. Smaller context reduces the chance that an old note becomes a new promise.

Use a compact intake file:

\`\`\`yaml
call_id: buyer-ops-2026-08-29-1400
owner: Omar
external_attendees: [Nia, Theo]
transcript: buyer-ops-2026-08-29.txt
transcript_complete: true
timezone: Europe/London
email_destination: local-drafts
crm_destination: local-drafts
\`\`\`

The destination values describe files, not connected systems. [What a Pasted Prompt Inherits](/blog/what-a-pasted-prompt-inherits) covers the general risk of giving a task more surrounding context than its job requires. Here the rule is simple: if a fact is not in the saved call package, it cannot appear as something agreed on the call.

## Separate spoken commitments from possible ideas

Calls contain many future-tense sentences that are not commitments. “We could share a sample” is an idea. “I will send the sample Friday” is a commitment. “Friday might work” is not an agreed meeting date.

| Transcript language | Classification | Draft treatment | Review needed |
|---|---|---|---|
| “I will send it by Friday” | Seller commitment | Include with owner and date | Confirm timezone if relevant |
| “We could test next week” | Possibility | Put under open questions | Yes |
| “Tuesday at 10 works for me” | One-sided availability | Offer pending confirmation | Yes |
| “Let's meet Tuesday at 10” and assent | Agreed next step | Include owner and date | Confirm calendar facts |

The bot should quote the supporting line and timestamp in its evidence block, even when the customer-facing email uses a shorter paraphrase. Omar can then distinguish a real promise from a sentence that merely sounded decisive.

## Write a charter that stops at two local drafts

“Help with follow-up” is too broad. Name the two outputs and forbid every external mutation.

\`\`\`markdown
Role: Call follow-up drafter for Omar

Input:
- Read only the matched saved transcript and meeting header.
- Treat the transcript as evidence of what was spoken, not proof that every claim is true.

Output:
- Draft one email under 180 words.
- Draft one structured CRM note.
- Attach timestamped evidence to both in an internal review block.
- Save both as new local draft files.

Rules:
- Use only spoken names, dates, constraints, objections, promises, and next steps.
- Turn fuzzy points into questions.
- Never send, schedule, message, upload, or write to the CRM.
- Stop if meeting identity, recipient, or transcript completeness is ambiguous.
\`\`\`

[How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) shows why “never send” is stronger when nearby verbs are named too. [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) explains why the runtime should also lack write access to mail and CRM during this drafting job.

## Extract evidence before composing prose

The bot first builds an internal ledger. It records the problem in the buyer's wording, decision participants, constraints, objections, seller promises, buyer promises, and next step. Each row needs a timestamp and speaker.

| Field | Omar's call evidence | Status | Draft destination |
|---|---|---|---|
| Current problem | “Reconciliation takes most of Monday” at 08:12 | Confirmed spoken | Email and CRM |
| Constraint | Security review must finish first at 17:44 | Confirmed spoken | Email and CRM |
| Seller promise | Omar sends sample export Friday at 32:08 | Confirmed spoken | Email |
| Buyer promise | Nia introduces security owner, no date at 34:16 | Date missing | Email question and CRM risk |
| Next meeting | Tuesday discussed, not agreed | Unconfirmed | Open question only |

This ledger prevents the prose generator from deciding what “must have happened.” Composition begins only after extraction. If the ledger has no agreed next step, the email says that plainly and asks for one.

## Draft the email around reciprocal obligations

Omar's email begins with one specific detail from the call, then gives three “what I heard” bullets in buyer language. It lists what Omar owes with a date, what the buyer owes with any spoken date, and two time options only if offering times was appropriate and the calendar facts were included in the package.

The subject should use the buyer's problem or agreed next step, not a generic product phrase. Keep the body under 180 words as required by the [Call Follow-Up Drafter](/bots/call-follow-up-drafter) listing. That is a bot-specific output rule, not a claim that every sales email must be that length.

The customer-facing draft contains no timestamps. The internal evidence block directly below it does. Omar reviews both together, then copies only the email body after checking it.

## Build the CRM note as a separate artifact

An email and a CRM note serve different readers. The email confirms a shared conversation. The note gives an internal teammate enough structure to understand the account later. Reusing the email as the CRM note drops decision process, risk, and evidence.

The note uses fixed fields: attendees and titles, use case, metric owned, named alternative, decision process, constraint, timeline, risk, next step with owner and date, and one direct quote. A missing field stays “not stated.”

[Account Expert](/bots/account-expert) may later assemble a broader internal brief, but it should receive the reviewed record, not every speculative extraction. [Meeting Double](/bots/meeting-double) may produce meeting artifacts for another purpose. Keep the follow-up workflow tied to its two promised drafts.

## Reconcile the email and note before review

The drafter compares the artifacts after composing them. Every seller promise in the email must appear in the note. Every date in either artifact must trace to the ledger. A contradiction becomes a review warning, not a silent choice.

| Reconciliation check | Pass | Fail | Repair |
|---|---|---|---|
| Promise parity | Sample due Friday in both | CRM omits sample | Add structured commitment |
| Date provenance | Friday traces to 32:08 | “Next Tuesday” inferred | Remove or question |
| Recipient identity | Nia from match header | Similar contact pulled elsewhere | Stop and correct header |
| Risk wording | Security review stated | “Legal blocker” substituted | Restore buyer wording |

This is where a compact workflow earns trust. Omar should not have to notice that the email promises a document the internal record forgot. The reconciliation block surfaces the mismatch before either destination changes.

## Walk Omar's transcript into two drafts

At 08:12, Nia says reconciliation takes most of Monday. At 17:44, Theo says security review must finish before a pilot. At 32:08, Omar promises a sample export by Friday. At 34:16, Nia offers to introduce the security owner but gives no date. At 36:02, Omar asks whether Tuesday works for a follow-up; Nia says she must check.

The extraction ledger records all five moments. The email thanks them for explaining the Monday reconciliation, summarizes the current process, confirms Omar's Friday sample, and asks when Nia expects to make the introduction. It offers no Tuesday meeting as agreed.

The CRM note marks security review as a constraint, Nia's introduction as a next step with no date, and the follow-up meeting as unconfirmed. The evidence block cites each timestamp. Omar checks the sample contents and recipient address, then manually creates the actual email. The bot never touches the mailbox or CRM.

## Catch the failure where a proposed date becomes agreed

The first draft says, “Looking forward to speaking Tuesday.” The transcript supports only Omar's suggestion and Nia's need to check. The bot turned a proposal into mutual agreement because the words “Tuesday” and “follow-up” appeared close together.

| Failure symptom | Cause | Immediate fix | Prevention test |
|---|---|---|---|
| Proposed date stated as fixed | Assent not required | Rewrite as a question | Plant one-sided availability |
| Recipient guessed | Transcript name matched address | Require match header | Use two contacts named Nia |
| Promise gets stronger | Modal verb dropped | Restore “could” or omit | Compare source verb |
| CRM updated before review | Draft destination connected | Remove write access | Inspect record timestamp |
| Old account fact appears | Context too broad | Restrict folder | Plant stale CRM note |

Omar corrects the sentence and adds an assent rule: a meeting is agreed only when the transcript shows a proposed time plus clear acceptance, or an explicit joint statement. The regression test includes “Tuesday could work” and expects an open question, not a calendar claim.

## Make human Send a substantive review

Human review is not a ritual click. Omar checks recipient identity, customer wording, every owner and date, promised attachments, tone, confidentiality, and whether circumstances changed after the call. He also asks whether sending now is appropriate.

[What an Approval Actually Governs](/blog/what-an-approval-actually-governs) matters here. Approving the text does not automatically approve a CRM write, attachment upload, or scheduled reminder. Each is a distinct action. Omar creates the email after he accepts the draft, chooses the recipients, inspects attachments, and presses Send himself.

If the team later adds connected email drafts, preserve a separate approval at the exact external action. This tutorial deliberately uses local files so the boundary can be verified without trusting interface labels.

## Verify the workflow with a contradiction and an omission

Create a synthetic transcript in which Omar first promises Wednesday, then corrects himself to Friday. Include a proposed Tuesday meeting with no acceptance. Leave the buyer's title unstated. Run the drafter twice.

A correct result uses Friday, retains the correction evidence, treats Tuesday as unresolved, and writes “title not stated.” It creates two new local files and changes no CRM record or mailbox. Search every date in both drafts and trace it to a timestamp. Compare file and record modification times before and after.

The second run should be deterministic about facts even if wording changes slightly. If Wednesday returns, the correction rule failed. If a title appears, the bot filled a schema gap. If an email draft appears in a connected mailbox, the destination boundary failed.

## Answer the rep who says drafting inside Gmail is faster

It is faster to finish inside the final interface. It is also easier to confuse “draft created” with “message ready,” especially when the address field, old thread, and attachments carry their own risks. A local first draft gives Omar a clean evidence review before recipient authority enters the workflow.

For a low-risk team with mature controls, creating an unsent mailbox draft may be a reasonable later step. It still requires explicit authorization and a test that no Send, schedule, reply, or CRM write occurs. The important principle is not the file extension. It is keeping composition separate from external action and making the final human decision visible.

## Pass only reviewed facts into the next workflow

After Omar sends, he may manually save the accepted CRM note. [Call Follow-Up Nudge](/bots/call-follow-up-nudge) can later work from the reviewed commitment and its due date, but it should not inherit rejected dates or the full transcript. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) can surface an owed reply without becoming the sender.

This page stops at a transcript-derived email and CRM draft. It does not cover live call attendance, recording consent, mailbox automation, or autonomous CRM updates. For private performance feedback, use [the uploaded call coaching guide](/blog/call-coach-never-joins-the-call). For mid-call playback, use [the discovery slide guide](/blog/build-the-discovery-slide-mid-call).

The bot screens on one account do not create credential isolation; [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) is the canonical treatment. [Where a Bot Cookie Actually Lives](/blog/where-a-bot-cookie-actually-lives) covers browser session placement. Those shared facts do not need repeating inside a transcript drafting procedure.

## Review names, pronouns, and ownership as data fields

Follow-up mistakes often look grammatical but originate in entity resolution. A transcript may label speakers as “Speaker 1,” shorten a company name, or capture two people with the same first name. Omar should not let the drafter convert uncertain identity into a polished salutation.

The meeting header is authoritative for recipient candidates, but it does not prove who owns every spoken commitment. The transcript must connect a speaker label with a participant. If that link is missing, the ledger says “speaker identity unresolved” and the commitment stays out of customer-facing copy.

Pronouns need the same care. “She will send the document” is usable only when the nearby exchange makes “she” unambiguous. “We will review it” may refer to the buyer's team, both companies, or Omar's team. Preserve the quote and ask Omar to assign the owner. Do not choose the most likely party.

Test identity handling with two external attendees named Nia, one seller named Theo, and a transcript segment where a speaker label changes after reconnection. A correct run surfaces the collision and pauses affected lines. It can still draft unrelated supported facts, but it cannot address or assign the ambiguous commitment.

This review may feel fussy for a short email. It prevents the highest-cost class of follow-up error: telling the wrong person they promised something. The CRM note should carry stable identities or explicit unknowns, never confident titles and owners reconstructed from weak cues.

## Preserve corrections and negations through compression

Transcripts often contain self-correction: “We need this in September, sorry, October.” They also contain negation: “Security is not the blocker; procurement timing is.” A summary model may retain the more familiar noun and drop the correction word.

The extraction pass should search for correction markers and negative constructions near every date, owner, competitor, constraint, and commitment. Store both the rejected and accepted forms in the internal ledger. Only the accepted form appears in the email, while the CRM evidence notes that a correction occurred.

Omar plants three sentences in a dry run: a corrected date, a denied competitor claim, and a promise that is immediately withdrawn. The draft must use the final date, avoid naming the denied competitor as active, and omit the withdrawn promise. If any earlier fragment survives, the compression step failed even though every word came from the transcript.

Do not solve this with a blanket “last mention wins” rule. A later speaker might challenge rather than correct the claim. The bot should use explicit correction or clear assent and otherwise mark conflict. Omar resolves the ambiguity during review.

## Keep attachments outside the automatic draft package

A transcript may contain “I will send the pricing sheet,” but that promise does not identify which file is current, approved, or appropriate for the recipients. The local email draft can list the promised attachment in an internal checklist. It should not select, copy, upload, or attach a file.

Omar verifies the artifact owner, version, audience, and contents separately. If no approved file matches the promise, he edits the email to explain when he will provide it. Sending an old file quickly is not better follow-up.

The same rule applies to meeting links and calendar invitations. A spoken intention to meet does not provide a correct conferencing link or prove the time is free. The drafter can preserve the agreed time and owner, while Omar creates the actual event under the calendar process.

Separating attachments keeps the evidence chain narrow. The transcript proves a promise. A content owner proves which artifact fulfills it. The human Send step joins those decisions only after both are checked.

## Timebox the draft without rushing the review

Omar sets a target for when the local drafts should be ready, but the clock never changes evidence rules. If transcript processing finishes late or identity remains ambiguous, the workflow reports the blocker instead of sending a worse recap quickly. A delayed honest follow-up is repairable. A fast message with the wrong promise is already external.

Measure extraction time, composition time, reconciliation time, and human review time separately across five calls. These are local workflow measurements. If extraction dominates, improve transcript structure. If reconciliation repeatedly finds mismatched promises, strengthen the shared ledger. If human review takes longest because every sentence needs replay, make the evidence block easier to scan rather than removing citations.

Omar also records why he rejected or edited a draft line: wrong owner, missing assent, stale context, tone, attachment uncertainty, or changed circumstances. After five calls, the distribution tells him which rule needs a better example. It does not justify automatic Send when rejection falls to zero. A low rejection rate shows that drafting improved, while the external action still belongs to Omar.

The empty output needs a timebox too. If the transcript does not contain an external meeting, confirmed identity, or any commitments, the bot should return a short unmatched or no-action report quickly. It should not spend extra time producing a generic thank-you note. Speed is valuable when it makes the correct stop visible.

Keep reading: [Why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files) explains why draft cleanup targets shared storage rather than the bot name.

## Frequently Asked Questions

### Can the bot send the follow-up after I approve the wording?

Not in this workflow. It creates two local artifacts, an email draft and a CRM-note draft, then stops. You verify the recipient, claims, owners, dates, promised attachments, and current circumstances before creating and sending the real message. Approval of wording does not authorize every downstream action. Sending, scheduling, attaching a file, and writing a CRM record are separate decisions that should remain visible to the human operator.

### What if the transcript contains no agreed next step?

The draft should say that no next step was confirmed and turn the gap into a concise question. It must not promote a suggested date, a one-sided availability statement, or a seller hope into mutual agreement. Keep the relevant timestamp in the internal evidence block so the reviewer can replay the close. An honest open question is more useful than a confident calendar claim the buyer never accepted.

### How much context should a call follow-up drafter receive?

Give it the matched saved transcript, a confirmed meeting header, and only the promised artifacts needed for review. Do not provide an entire inbox, CRM export, or account drive merely because those sources might contain useful detail. The follow-up should represent what was spoken on this call. Older context can silently add stale dates or commitments. If an outside fact is necessary, label it separately and require the human reviewer to decide whether it belongs.

### How do I test a Grok Bot call follow up draft safely?

Use a synthetic transcript containing a corrected promise date, an unaccepted meeting proposal, an unstated job title, and two similar contact names. A passing run chooses the corrected date, leaves the proposal unresolved, writes “not stated” for the title, and stops on recipient ambiguity. It creates only two local files. Verify that the mailbox and CRM modification times remain unchanged and trace every date and commitment back to a timestamp.
`,
};
