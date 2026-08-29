import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Build the Discovery Slide From What They Actually Said, Mid Call',
  description:
    'Learn how to build the discovery slide mid call from confirmed buyer language, preserve uncertainty, and hand a clean draft to the presenter for review.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Build the Discovery Slide From What They Actually Said, Mid Call

Mira has twelve minutes before the discovery call turns into a product walkthrough. Her blank slide asks for three things: the buyer's current process, the cost of leaving it alone, and the result they want. The buyer has supplied pieces of all three, but nobody has supplied a neat sentence.

The useful move is not to ask a bot to make the slide sound persuasive. It is to have [Live Discovery Slide](/bots/live-discovery-slide) turn the notes already captured into a reviewable draft while Mira keeps listening. The bot must preserve the buyer's words, mark every gap, and never present or share the slide. That boundary turns a risky live-writing trick into a controlled note-compression job.

This tutorial shows how to **build the discovery slide mid call** without inventing certainty, interrupting the buyer, or letting draft text become a claim the buyer never made.

## Start with the three claims the slide must earn

A discovery slide usually fails before anyone opens the deck. The team treats it as a place to summarize the account rather than a set of claims that require evidence. Mira uses three rows because each row answers a different question.

| Slide row | Question it answers | Acceptable evidence | Unsafe shortcut |
|---|---|---|---|
| Current process | What happens now? | A direct statement or confirmed sequence | A CRM field with no call confirmation |
| Business impact | What breaks or costs time? | A stated consequence with an owner | A generic industry pain |
| Desired state | What would better look like? | Buyer language or an explicit correction | The seller's product benefit |

The rows are not interchangeable. “Reporting takes two days” belongs under current process only if it describes the process. It belongs under impact if two days is the consequence that matters. The bot should not decide based on what makes the pitch stronger. It should classify based on the sentence around the phrase and flag ambiguity for Mira.

Write the slide contract before the call: three claims, each backed by a timestamped note, each short enough to read aloud, and each editable by the presenter. That is a much narrower job than “listen and make a discovery slide.”

## Capture notes in a form the drafter can cite

The bot cannot recover evidence that the note taker never recorded. Mira uses a simple line format in a local working file. Each line carries the time, speaker, statement, and confidence marker. She does not paste an entire customer system or connect a live meeting feed.

\`\`\`text
09:04 | Buyer | Monthly forecast is assembled in three spreadsheets | exact
09:07 | Buyer | Regional leads send updates by Friday, usually | exact
09:09 | Mira  | Asked whether late updates delay Monday review | question
09:10 | Buyer | Finance waits until Tuesday in two regions | exact
09:13 | Buyer | Wants one view before Monday leadership meeting | exact
\`\`\`

“Exact” means the note closely preserves what was said. It does not mean the claim is independently proven. “Question” means Mira spoke, so the line cannot be presented as buyer language. If a sentence is paraphrased, label it “paraphrase.” If the audio was unclear, label it “unclear” and keep it out of the slide until confirmed.

This format makes provenance visible. [Meeting Prep Brief](/bots/meeting-prep-brief) can prepare context before the call, but that earlier context should remain in a separate block labeled pre-call. Mid-call claims come from the live notes, not from what the team hoped to hear.

## Give the bot a boundary that survives time pressure

Mira's boundary is a verb-level prohibition: **Draft slide text from saved notes only. Never share, present, overwrite the live deck, or turn an unconfirmed inference into buyer language.** The line names both the source and the forbidden actions.

Use a charter that can be tested after one call:

\`\`\`markdown
Role: Discovery slide drafter

Input:
- Read only the local note file selected for this call.
- Treat pre-call context, seller questions, and buyer statements as different sources.

Output:
- Produce exactly three rows: Current process, Business impact, Desired state.
- Add one timestamp citation to every bullet.
- Use [NEEDS CONFIRMATION] when evidence is incomplete.
- Save a new draft file. Never edit the live presentation.

Boundary:
- Never join live audio, share a screen, present, message participants, or publish a deck.
- Never convert a seller hypothesis into a buyer quote.
- Stop if the source file or call identity is ambiguous.
\`\`\`

[How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) explains why a prohibition needs a specific action. [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) covers the separate job of limiting what the runtime can reach. Mira needs both: a clear instruction and an environment that contains only the saved note file plus a draft destination.

## Separate verbatim language from safe compression

A slide cannot hold a transcript. Compression is necessary, but compression can quietly change meaning. The drafter should label the transformation it applies.

| Source note | Draft slide text | Transformation | Review question |
|---|---|---|---|
| “Monthly forecast is assembled in three spreadsheets” | Forecast assembled across 3 spreadsheets | Shortened, meaning retained | Did “three” refer to files or teams? |
| “Finance waits until Tuesday in two regions” | Two regions delay finance review until Tuesday | Subject clarified | Did finance wait, or did the review move? |
| “Wants one view before Monday leadership meeting” | One view ready before Monday leadership review | Light paraphrase | Is “review” the buyer's term? |
| “Regional leads send updates by Friday, usually” | Updates arrive Friday | Meaning changed | Reject because “usually” disappeared |

The last row shows the common failure. Removing “usually” turns a pattern into a guarantee. Small qualifiers carry business meaning. Preserve “usually,” “about,” “in two regions,” and “for this team” until the buyer narrows or confirms them.

Mira can choose readable wording after the bot exposes the change. The bot's job is not to freeze every filler word. Its job is to keep the claim's scope, certainty, owner, and timing intact.

## Build a draft slide beside the live deck

Do not let the first generated text land in the file being presented. Use a sidecar draft such as \`discovery-draft.md\` or a duplicate slide named “DRAFT, NOT PRESENTED.” Mira keeps the live deck in presentation mode and reviews the sidecar during a natural pause.

The draft should use a stable shape:

\`\`\`markdown
# Discovery draft, 2026-08-29 09:16

## Current process
- Monthly forecast assembled across 3 spreadsheets. [09:04]

## Business impact
- Finance review waits until Tuesday in 2 regions. [09:10]

## Desired state
- One view ready before the Monday leadership meeting. [09:13]

## Open checks
- Confirm whether all regions use the same workflow.
- Confirm whether Tuesday creates a downstream decision delay.
\`\`\`

This is intentionally plain. [Brand Deck Keeper](/bots/brand-deck-keeper) may help maintain approved visual patterns in a separate workflow, but the discovery drafter should not spend a live call choosing icons or rewriting the master. Evidence comes first. Formatting can wait until the words survive review.

## Ask one confirmation question at a natural seam

The slide becomes useful when the buyer recognizes it. Mira does not read every bullet after every answer. She waits for the transition into the walkthrough, then asks one compact confirmation question: “Let me play back what I heard before we move on. Is this accurate, and what did I miss?”

That question does three jobs. It reveals errors, gives the buyer control over phrasing, and distinguishes a remembered statement from an accepted summary. Mira records each correction as a new note rather than silently replacing the old line. The correction trail matters if the team later asks why a phrase changed.

If the buyer says, “Tuesday is not the delay, the issue is that finance has only an hour to review,” the impact row must change. Do not preserve the earlier version because it sounded cleaner. The latest explicit correction wins, and the old sentence moves to a rejected-evidence log.

## Walk Mira's draft from minute four to minute sixteen

At 09:04, the first exact note supplies a process claim. The drafter creates one current-process bullet and leaves the other two rows blank. It does not infer impact from the existence of spreadsheets.

At 09:10, the buyer says finance waits until Tuesday in two regions. The bot drafts an impact bullet but adds an open check because “waits” may describe scheduling rather than harm. At 09:13, the buyer states the desired view and deadline. The desired-state row is now supported.

At 09:16, Mira reviews the draft. She rejects “delay” because the buyer did not use that word. She changes it to “Finance review happens Tuesday in two regions” and asks what that timing affects. The buyer answers that leadership has less than one hour to review exceptions. Mira records the answer at 09:18, and the bot updates the impact row only in the sidecar.

| Minute | Evidence available | Bot action | Mira's action |
|---|---|---|---|
| 04 | Process statement | Draft row 1 | Keep listening |
| 10 | Timing consequence | Draft cautious row 2 | Mark causal gap |
| 13 | Desired state | Draft row 3 | Scan all three rows |
| 16 | Playback begins | Freeze draft | Read and invite correction |
| 18 | Buyer clarifies impact | Create revision 2 | Accept corrected language |

The method protects the conversation. Mira does not delegate judgment at the moment judgment matters. She delegates assembly, then uses the saved time to ask a better follow-up.

## Reject the plausible sentence that nobody said

The walked-through failure happens at 09:10. A persuasive but unsupported draft reads: “Manual forecasting delays executive decisions by two days.” It sounds like discovery. It is also wrong in four ways.

The buyer said “three spreadsheets,” not “manual.” Finance waits until Tuesday, but the meeting may not have moved by two days. Nobody said “executive decisions.” The causal verb “delays” was Mira's hypothesis, not the buyer's claim.

| Failure symptom | Hidden cause | Immediate fix | Prevention rule |
|---|---|---|---|
| Stronger language than the notes | Bot optimized for persuasion | Restore scoped wording | Preserve qualifiers and actors |
| Causal verb appears without evidence | Sequence mistaken for causation | Ask what the timing affects | Require a causal statement |
| Buyer quote has no timestamp | Source tracking omitted | Remove bullet until cited | Citation required per bullet |
| Live slide changed during talk | Draft destination was ambiguous | Restore prior version | Sidecar output only |
| Old error disappears | Revision overwrote history | Save numbered revision | Append correction log |

This failure is worth rehearsing. Give the bot the five source notes and plant the bad sentence in a sample draft. A passing setup rejects it or marks it for confirmation. A setup that accepts it is not ready for a customer call.

## Keep pre-call research outside the buyer-language column

Account research is useful, but it has different provenance. A public job posting might suggest that the company is consolidating finance systems. A CRM note might say reporting is a priority. Neither becomes “what they told us today.”

Use separate labels: “known before call,” “said by buyer,” “seller interpretation,” and “confirmed playback.” The slide shown during discovery should favor the final two only when their origin is explicit. If Mira wants to surface research, she can ask, “We saw that the team is consolidating systems. Is that connected to this workflow?” The answer, not the research, becomes live-call evidence.

[What a Pasted Prompt Inherits](/blog/what-a-pasted-prompt-inherits) covers why copied context can carry more authority and data than the operator notices. For this workflow, the practical rule is smaller: do not paste the whole account folder. Select the few notes the drafter actually needs.

## Score the draft before anyone sees it

Mira uses a six-point review. Each point is binary so a rushed reviewer cannot award partial credit to a charming sentence.

| Check | Pass condition | Fail example |
|---|---|---|
| Source | Every bullet has a note time | “Team needs visibility” with no source |
| Speaker | Buyer and seller statements are distinct | Mira's question appears as buyer need |
| Scope | Counts and qualifiers remain | “Two regions” becomes “company-wide” |
| Causality | Impact is directly stated | Timing becomes invented lost revenue |
| Destination | Output exists only in draft file | Live deck changed |
| Review | Mira explicitly accepts each row | Draft is shown automatically |

The slide may be incomplete and still pass. A blank impact row with “[NEEDS CONFIRMATION]” is safer and more useful than a polished invention. Passing means the draft represents the available evidence and stayed inside its boundary. It does not mean discovery is finished.

Record the score beside the draft. After five calls, review which check fails most. If source repeatedly fails, fix note capture. If scope fails, strengthen the compression examples. If destination fails once, remove write access to the live deck before the next call.

## Answer the seller who wants a polished slide instantly

The strongest objection is commercial: a visibly polished playback can create confidence, while brackets and gaps can make the seller look unprepared. That is true when the underlying claims are correct. Polish helps presentation quality.

It does not rescue a false claim. A buyer will forgive “I want to confirm the impact” more readily than “You said this costs two days” when they did not. The right compromise is a clean three-row layout with restrained language and a small “to confirm” label. Mira can hide internal timestamps from the presented version after she has checked them, but she should keep them in the working draft.

If the organization values animation and brand fidelity more than live playback, prepare the shell before the call. Do not ask the drafter to solve both evidence and design in twelve minutes.

## Verify the setup with a planted contradiction

Before using the workflow with a buyer, create a ten-line synthetic note set. Put “three spreadsheets” at minute four and “actually, four including the archive” at minute eleven. Add a seller question that says, “So the delay costs two days?” without a buyer answer.

Run the drafter. A correct result uses four spreadsheets, records the correction, and refuses to claim a two-day cost. It creates a new file and leaves the sample live deck unchanged. Then remove the timestamp from one bullet and rerun. A correct result marks the bullet unsupported rather than inventing a citation.

This test can fail in observable ways. Inspect file modification times, compare the source notes with every noun and number, and check the open-questions block. “The output looked good” is not verification. The planted contradiction tells you whether later evidence wins. The unanswered seller question tells you whether speaker attribution works.

## Hand the accepted wording into the follow-up workflow

Once the buyer confirms the playback, save the accepted rows separately from draft versions. That small artifact can support a recap without giving the next bot access to the full call folder. [Call Follow-Up Drafter](/bots/call-follow-up-drafter) can work from the approved transcript excerpt and the final discovery rows. [Call Follow-Up Nudge](/bots/call-follow-up-nudge) belongs later, after a human has chosen whether any message should exist.

Keep the boundary intact during handoff. A draft slide is not consent to send an email, update a CRM, or share a file. [What an Approval Actually Governs](/blog/what-an-approval-actually-governs) explains why approval applies to the proposed action, not every later action that happens to reuse the output.

The handoff package needs only four items: accepted wording, buyer corrections, unresolved questions, and the date. Exclude rejected claims so they cannot return through a later summary.

## Stop this method when the evidence source changes

This page applies when a human captures or saves notes and a bot drafts from that bounded artifact. It does not cover joining live audio, recording consent, speaker identification, or autonomous presentation. If your desired workflow begins with a bot inside the meeting, this charter is the wrong one.

It also stops applying when you need technical isolation between customers or accounts. Separate bot screens are work surfaces on the shared account computer, as the canonical explanation in [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) makes clear in one sentence. Design the environment before placing sensitive files there.

## Rehearse the presenter handoff under a sixty-second clock

The live constraint changes what good output looks like. Mira has no use for a six-paragraph analysis that arrives after she has started the walkthrough. She needs a stable three-row shape, visible gaps, and a one-line change summary when the draft is revised. Speed comes from narrowing the artifact before the call, not from weakening evidence during it.

Run a rehearsal with another teammate reading a synthetic buyer script. At minute four, the teammate gives a clear current-process statement. At minute seven, they mention a consequence with no number. At minute ten, they correct the process detail and state a desired outcome. Mira triggers the draft twice. The first result should leave the unsupported field visibly open. The second should preserve revision one, apply the correction, and state exactly what changed.

Measure four times: note saved, draft requested, draft file created, and Mira's review completed. These are local operating measurements, not product performance claims. If review takes longer than drafting, shorten the slide shape or improve citation placement. If the draft itself arrives late, remove formatting work and reduce the source window. Do not solve latency by letting the bot fill missing boxes.

The handoff line should be equally compact: “Three supported rows, one open causal question, revision two uses the 09:18 correction.” Mira can decide whether to read the slide back, ask the open question, or leave it for the follow-up. The bot does not decide when to interrupt the conversation.

After the rehearsal, inspect the live deck's modification history and the shared destinations available to the workflow. No change should exist outside the sidecar folder. Ask the teammate whether any sentence felt stronger than the script. That human comparison often catches a shifted qualifier that mechanical timestamp checks miss.

Finally, rehearse the empty case. The synthetic buyer describes features they have tried but never states a problem, impact, or desired state. The correct draft says the evidence is not there and proposes questions in the internal review block. It does not create a complete-looking slide. A workflow that can return an honest empty state is much safer to use mid call than one tuned to make every run look successful.

Keep a short rehearsal log for five practice calls. Record which box lacked evidence, which qualifier was almost lost, how long review took, and whether Mira accepted, edited, or rejected each row. These counts are not a score for the buyer or the bot. They reveal whether the setup repeatedly struggles with one transformation. If desired-state wording is consistently safe while impact wording is not, narrow the impact rule and give Mira a better confirmation question. Do not compensate by adding more transcript context. Fix the specific failure surface.

For a transcript-only coaching workflow, use [the call coaching guide](/blog/call-coach-never-joins-the-call). For a human-sent recap, continue with [the transcript follow-up guide](/blog/call-follow-up-drafter-human-sends). Those workflows reuse a saved artifact but make different claims and need different review checks.

Keep reading: [Why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files) explains why cleanup must target the shared storage, not just the bot entry.

## Frequently Asked Questions

### Can the bot update the discovery slide while I am presenting?

Keep the first output in a sidecar draft, not the live presentation. Mid-call evidence changes quickly, and a plausible rewrite can remove a qualifier or add a causal claim nobody made. Let the bot assemble three timestamped rows from saved notes, then have the presenter accept each row before copying it into view. This keeps the conversation moving without allowing an unreviewed sentence to appear as the buyer's confirmed position.

### What should I do when the buyer gives conflicting numbers?

Preserve both statements with their timestamps and treat the later one as a correction only when the buyer clearly corrects it. If the relationship is unclear, write “[NEEDS CONFIRMATION]” and ask during playback. Do not average the numbers, choose the more persuasive value, or silently overwrite the earlier note. The correction trail lets the presenter explain the revision and prevents a later follow-up from resurrecting the rejected figure.

### How much of the transcript should the discovery drafter receive?

Give it the smallest saved excerpt that contains the relevant buyer statements, nearby questions needed for context, and explicit corrections. A full account folder adds unrelated claims and credentials without improving a three-row slide. Keep pre-call research in a separately labeled block so it cannot masquerade as live buyer language. The drafter should cite a timestamp for every bullet and stop when the call identity or source file is ambiguous.

### What proves that the mid-call discovery workflow worked?

A passing run produces a new draft file, leaves the live deck unchanged, cites every bullet, preserves scope and qualifiers, separates seller questions from buyer answers, and surfaces missing evidence. Test it with synthetic notes that contain a later correction and an unanswered leading question. The output should use the correction and reject the implied answer. A polished slide alone proves nothing because fluent wording can still misstate what the buyer said.
`,
};
