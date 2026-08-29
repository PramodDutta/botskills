import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Score a Call Recording You Uploaded, Never Join Live Audio',
  description:
    'Use grok bot call coaching on an uploaded recording with a named rubric, timestamped evidence, private delivery, and no access to live meeting audio.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Score a Call Recording You Uploaded, Never Join Live Audio

Leena wants feedback on yesterday's sales call, not a silent attendee on tomorrow's meeting. She exports the recording, saves the transcript beside it, and gives [Call Coach](/bots/call-coach) a narrow review job after the meeting is over. The bot never joins live audio, never contacts the buyer, and never shares the scorecard beyond the rep who owns the call.

That design makes **grok bot call coaching** an evidence review workflow. It avoids a live-meeting integration, keeps the rubric visible, and gives Leena a result she can challenge line by line. The hard part is not calculating a score. The hard part is preventing a fluent critique from treating missing transcript evidence as poor performance.

## Choose an uploaded artifact instead of a live seat

Live attendance adds problems that coaching does not require: consent, meeting admission, audio routing, participant identity, and the possibility of an external attendee seeing a bot name. An uploaded recording and completed transcript let Leena control the source, timing, and audience.

| Input path | Useful for | New authority required | Recommendation |
|---|---|---|---|
| Bot joins live call | Real-time intervention | Meeting and audio access | Do not use for this workflow |
| Calendar connector finds recordings | Batch convenience | Calendar plus recording store | Add only after manual tests |
| Leena uploads one recording | Deliberate private review | Selected file only | Start here |
| Leena pastes transcript excerpt | Testing a rubric item | Selected text only | Use for dry runs |

The upload path also creates a natural checkpoint. Leena confirms that she owns the call, the external meeting is eligible for coaching, and the file is the final recording. The bot does not need to watch for calls or infer which meeting deserves review.

## Define who may be scored before defining the rubric

The call belongs in scope only when Leena was the host or a named participant and the score concerns her own behavior. A shared recording folder may contain a colleague's calls, internal meetings, interviews, or private discussions. File access does not turn those into eligible coaching material.

Write an eligibility header beside each upload:

\`\`\`yaml
review_subject: Leena
meeting_date: 2026-08-28
external_attendee_present: true
subject_was_host_or_named_participant: true
private_or_internal_only: false
rubric_version: discovery-v3
delivery: leena-private-review
\`\`\`

If any field is missing, the bot stops before reading the recording. This is an instruction boundary, not a technical permission. [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) explains the distinction. Limit the working folder as well, so an ambiguous filename cannot lead the reviewer into an unrelated recording.

## Freeze one rubric version for the entire call

A score has no meaning without the scoring rules that produced it. Leena stores \`discovery-v3\` with thresholds, evidence requirements, and treatment of missing data. The bot records that version at the top of the scorecard.

| Rubric item | Evidence needed | Scoring rule | Missing evidence result |
|---|---|---|---|
| Open questions | Rep questions plus buyer response | Count questions that invite explanation | Not observed if speakers unclear |
| Business consequence | Buyer quote naming an effect | 1 point when consequence is explicit | Not observed |
| Longest rep stretch | Speaker-timed transcript | Compare seconds with rubric target | Not measurable |
| Agreed next step | Spoken owner and date | 1 point only when both appear | Missing, not invented |

Do not let the bot replace the rubric because a different standard would produce a nicer score. If the file changed since the last review, it should report the change and stop. Leena can accept the new version, then rerun from the beginning. Mixing versions halfway through makes trend data useless.

## Prepare the recording and transcript as a matched pair

The audio answers disputes about tone, pauses, and transcription. The transcript makes quotes and timestamps searchable. Give both a shared call ID, date, and duration. If their durations differ materially, stop and resolve the mismatch.

Leena's folder contains \`call-2026-08-28-audio.m4a\`, \`call-2026-08-28-transcript.txt\`, \`eligibility.yaml\`, and \`discovery-v3.md\`. No CRM export, inbox archive, or colleague recording belongs there. [What a Pasted Prompt Inherits](/blog/what-a-pasted-prompt-inherits) covers the broader reason to select context instead of dropping an entire workspace into one request.

The transcript needs speaker labels and timestamps. If it has only paragraph text, the coach can discuss wording but cannot honestly compute talk ratios, pauses, or who made a commitment. The correct response is a limited review that names the unavailable measures.

## Give the coach a charter that forbids live and external action

The boundary should survive a tempting prompt such as “join the next call and remind me.” Use a charter with explicit input, output, and stop conditions.

\`\`\`markdown
Role: Private call coach for Leena

Read only the uploaded recording, matched transcript, eligibility header, and named rubric.
Score only Leena. Do not score colleagues or the buyer.
Every judgment requires a timestamped quote.
Use "not observed" when the transcript cannot prove an item.

Return one private scorecard to Leena:
- raw measures
- rubric score
- one strength
- exactly two corrections
- evidence for every statement

Never join a meeting, open live audio, contact a participant, publish a score,
or place the scorecard in a shared channel. Stop if identity, ownership, or
rubric version is ambiguous.
\`\`\`

[How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) helps turn “be private” into testable prohibited verbs. The bot is allowed to read selected artifacts and write one local scorecard. It is not allowed to act on the next call.

## Measure transcript facts before judging technique

Begin with numbers the artifact can support: rep and buyer speaking time, longest uninterrupted rep segment, count of rep questions, count of open questions, longest pause after a question, and minutes until the buyer described a problem.

The calculation rules belong in the rubric. For example, a pause begins when Leena finishes a question and ends when the buyer begins. Interruptions and transcription gaps should be marked, not silently counted. An open question is classified by the expected answer form, not merely by starting with “what” or “how.”

| Measure | Source | Common distortion | Required note |
|---|---|---|---|
| Talk share | Speaker intervals | Overlapping speech double-counted | State overlap rule |
| Longest stretch | Timed transcript | Demo playback assigned to rep | Exclude media segments |
| Open questions | Rep utterances | Rhetorical question counted | Require buyer response opportunity |
| Pause length | Audio timing | Transcript removes silence | Prefer audio timestamp |

Raw measures come before the overall score so Leena can inspect the inputs. A score without the underlying counts invites argument about taste. Counts with visible rules make disagreement productive.

## Tie every judgment to a quote and timestamp

“You did not uncover urgency” is a characterization. “At 18:42 you moved from ‘What happens if this stays the same?’ to the demo before the buyer answered” is reviewable. The second statement gives Leena a moment she can replay.

The coach uses a four-part correction: timestamp, actual words, why the rubric flags them, and a replacement sentence. The replacement is practice language, not a claim that the buyer would have answered differently. That distinction matters. Coaching can improve Leena's choice; it cannot rewrite the historical call.

[Podcast Summarizer](/bots/podcast-summarizer) may be useful for content summaries, while [Meeting Double](/bots/meeting-double) may support meeting artifacts. Neither should be substituted blindly for a rubric-driven private coach. A summary asks what was discussed. Coaching asks what the rep did, under a named standard, with evidence.

## Walk Leena through one complete review

Leena uploads a 31-minute call. The matched transcript shows her as speaker A and the buyer as speaker B. At 06:20 she asks, “How are regional forecasts combined today?” The buyer explains the spreadsheet handoff. At 12:08 Leena speaks for 176 seconds through a product explanation. At 19:14 she asks about the effect of a late forecast, waits two seconds, then answers her own question. At 27:40 both sides agree that Leena will send a sample by Friday, but no follow-up meeting is dated.

The bot first checks eligibility and rubric version. It calculates the raw measures, then assigns only supported judgment points. The scorecard praises the process question at 06:20. Fix one targets the 176-second stretch. Fix two targets the two-second pause. The next-step item records the promised sample and says a meeting date was not observed.

| Output block | Leena sees | Evidence |
|---|---|---|
| Score | 3.4 of 5 under discovery-v3 | Item-level arithmetic |
| Strength | Clear current-process question | Quote at 06:20 |
| Fix one | Shorten uninterrupted explanation | Segment at 12:08 |
| Fix two | Hold silence after impact question | Exchange at 19:14 |
| Missing | No dated next meeting | Closing segment at 27:40 |

The bot saves the scorecard in Leena's private review folder. It does not notify her manager or the buyer. Leena chooses whether any lesson enters a team coaching conversation.

## Catch the failure where silence becomes a zero

On the first dry run, the transcript drops four minutes of audio after 17:00. The coach sees no business consequence in the remaining text and scores that rubric item zero. Leena replays the recording and finds the buyer's consequence inside the missing interval.

The failure was not harsh scoring. It was treating unavailable evidence as negative evidence. The fix is to mark the interval as missing, label affected items “not measurable,” and keep them out of the denominator or handle them exactly as the rubric specifies.

| Symptom | Cause | Fix | Regression test |
|---|---|---|---|
| Missing item gets zero | Absence treated as failure | Use not observed | Delete transcript interval |
| Buyer behavior is scored | Subject scope drift | Score Leena only | Plant buyer interruption |
| Quote lacks timestamp | Summary path bypasses evidence | Reject uncited judgment | Remove one timestamp |
| Score appears in team folder | Destination too broad | Private output path | Inspect created files |
| Different rubric used | Name resolution guessed | Stop on missing version | Rename rubric file |

This walked failure is the most important test. A coach should be conservative about what the artifact proves, not confident about what likely happened.

## Keep the scorecard private by construction

“Never share” belongs in the charter, but destination design should make the safe path easy. Give the bot one output folder owned by Leena's review workflow. Do not configure a team channel, shared CRM, or email draft destination for this bot.

The scorecard can contain candid criticism and buyer quotations. Leena should decide whether to excerpt a lesson for her manager. The bot should not infer that a coaching program authorizes distribution. [What an Approval Actually Governs](/blog/what-an-approval-actually-governs) is the canonical explanation of why approval for one proposed action does not authorize later sharing.

If a company requires manager visibility, create a separate policy and delivery workflow with explicit notice to reps. That is not a small toggle on this personal coach. It changes the audience, purpose, retention expectations, and consequences of the score.

## Compare ten calls only after the measures are stable

A trend block is useful when every call uses the same rubric version and calculation rules. Track three measures, not every available number. Leena chooses longest stretch, open-question count, and pause after impact questions because they connect to her two current practice goals.

Store call ID, date, rubric version, source completeness, and the three numbers. Exclude incomplete transcripts from a metric they cannot support. Do not quietly compare discovery-v2 scores with discovery-v3 scores after thresholds changed.

Ten calls is a window chosen by the [Call Coach](/bots/call-coach) listing, not a universal statistical guarantee. It is enough to make repeated behavior visible without turning the report into a permanent ranking. The useful question is “Did Leena repeat the previous fix?” not “Is Leena better than every colleague?”

## Answer the manager who wants automatic team scoring

The strongest argument for automation is consistency. A manager cannot review every call, and a shared scorecard can surface coaching needs. That benefit is real, but it changes the workflow from private self-coaching to employee evaluation.

Do not smuggle that change through a broader output path. Team scoring needs a declared policy, consistent eligibility rules, access controls, dispute handling, and agreement on how incomplete transcripts affect scores. It also needs a separate bot charter because this one explicitly scores only the owner and delivers only to that person.

Start with self-review until the rubric produces corrections reps find accurate. If the organization later builds team evaluation, treat it as a new system with new stakeholders, not the next checkbox in Leena's setup.

## Verify the coach with three planted defects

Use a synthetic transcript with three deliberate traps. First, insert a seller question whose implied answer never arrives. Second, remove timestamps from a two-minute block. Third, label a colleague as the host while Leena appears only as a guest.

A correct run refuses the third file under the eligibility rule. On a valid Leena-owned file, it marks the timestamp-free measure unavailable and does not turn the unanswered question into a buyer statement. It creates one private scorecard and no messages, calendar events, or shared documents.

Count the files before and after the run. Search the scorecard for every numerical claim and trace it to the transcript or rubric arithmetic. Replay the two quoted corrections. Verification succeeds only when the result can be disproved by a bad artifact and the bot reacts correctly.

## Hand practice notes forward without handing the recording forward

Leena can extract one practice card from the accepted scorecard: “After an impact question, count to five before speaking.” That card can sit beside her next meeting notes without exposing the buyer's recording or full transcript.

[Win Loss Memo](/bots/win-loss-memo) serves a different analytical job and should receive only the sources that job needs. A private coaching recording should not become general account context by default. If Leena later needs a factual recap, the [call follow-up drafting guide](/blog/call-follow-up-drafter-human-sends) shows how to build from a selected transcript and stop at a human-sent draft.

This page stops at uploaded, after-call coaching. It does not cover consent law, live transcription, manager surveillance, or joining meetings. For the shared-computer architecture behind bot work surfaces, use [Screens Are Not Boundaries](/blog/screens-are-not-boundaries). For access eligibility, use [Who Can Actually Run Grok Bot](/blog/who-can-actually-run-grok-bot) rather than repeating plan details here.

## Calibrate the rubric with two human reviews

Before Leena trusts a five-point score, she and one coach independently score the same synthetic call using discovery-v3. They do not discuss it first. They compare classifications, timestamp choices, and treatment of missing evidence afterward. The goal is not perfect agreement. It is finding rubric language that permits two reasonable readers to make incompatible decisions.

Suppose Leena counts “Tell me about your current process” as open, while the coach excludes it because the buyer answers only yes or no. The disagreement may come from transcript punctuation or from the rubric's definition. They rewrite the rule to focus on the answer opportunity and preserve the disputed example beside it. The bot then receives both passing and failing examples.

Repeat the exercise for consequence, objection handling, and next step. Judgment categories need counterexamples. A buyer describing inconvenience is not automatically a business consequence. A rep saying “I understand” before rebutting is not necessarily acknowledgment. A promised document with a date is a commitment, but it is not a dated next meeting. These distinctions make the resulting critique more useful than a generic coaching score.

Calibration also sets the denominator rule. If two of ten items are not measurable because the recording is incomplete, discovery-v3 must say whether the overall score uses eight items, reports no total, or applies another declared treatment. The bot may execute that rule, but it must not invent it per call.

Store the calibrated examples with the versioned rubric. When the team changes a definition, create discovery-v4 and do not rewrite historical scorecards. Leena can compare raw measures across versions when their calculation stayed constant, but judgment totals need a visible version break.

## Turn two corrections into deliberate practice

The one-page scorecard contains exactly two fixes so Leena can act on it. Each fix becomes a practice card with a trigger, replacement behavior, and observation on the next call. “Talk less” is too broad. “After asking an impact question, wait five counted seconds unless the buyer begins” is observable.

Leena selects one primary card for the next three eligible calls. The coach may report whether the triggering moment appeared and quote what happened, but it should not penalize a call where the situation never arose. “Not observed” remains different from failure during practice.

After three calls, Leena reviews the raw evidence rather than only the trend arrow. Did her longest stretch shrink because she asked better questions, or because the calls were shorter? Did longer pauses produce fuller answers, or did transcription timing change? Context belongs in the human interpretation.

This practice loop keeps coaching personal and bounded. It does not create a leaderboard, notify a manager, or use buyer behavior as a rep score. The uploaded recording is evidence for Leena's chosen skill, not a general-purpose employee dataset.

Delete or archive practice artifacts according to a declared retention rule. The coach needs the current recording, transcript, rubric, and the small set of trend measures Leena chose. It does not need an indefinite pile of buyer quotations. If raw recordings are retained elsewhere under an approved policy, the coaching folder can still remove its extra copy after the scorecard is accepted.

Test cleanup with a synthetic call ID. After Leena accepts the scorecard and extracts the practice card, remove the working audio and transcript from the coaching folder while preserving the permitted trend row. Rerun the coach against the old ID. It should report that evidence is unavailable, not search neighboring folders or reconstruct a score from memory. Cleanup is part of the workflow's boundary because stale sensitive artifacts create reach that the next review does not need.

Keep reading: [Where a bot cookie actually lives](/blog/where-a-bot-cookie-actually-lives) explains why browser state belongs to the account computer, not to a named coaching bot.

## Frequently Asked Questions

### Does Grok Bot call coaching require the bot to join my meeting?

No. This workflow begins after the call, when you deliberately upload a recording and its matched transcript into a narrow working folder. The coach reads those saved artifacts, checks that you own the call, applies a named rubric, and returns one private scorecard. It never joins live audio, appears on a participant list, contacts the buyer, or listens for future meetings. Live attendance would add permissions and consent questions that an after-call review does not need.

### What should the coach do when the transcript is incomplete?

It should mark every affected measure as unavailable or “not observed,” following the named rubric, rather than assigning a zero. The recording can resolve some gaps, but the coach must say which source supported the result. A missing interval cannot prove that you skipped a question or failed to reach business impact. Test this behavior by deleting a timed block from a synthetic transcript and confirming that the scorecard exposes the gap instead of lowering the score.

### Can I use the same coach to score my whole sales team?

Not under this charter. It scores only the rep who owns the uploaded call and sends the scorecard only to that rep. Team evaluation changes the audience and stakes, so it needs a separate policy, eligibility rules, dispute process, retention decision, and bot boundary. A shared folder full of recordings does not grant permission to evaluate colleagues. Build confidence in the rubric through private self-review before considering a team system.

### How do I verify that a call coaching score is trustworthy?

Trace every judgment to a timestamped quote, every measure to an explicit calculation rule, and the final score to the frozen rubric version. Replay the quoted moments and confirm the subject identity, call ownership, and transcript completeness. Then plant an unanswered leading question, a timestamp gap, and an ineligible colleague call. A trustworthy setup refuses or limits those cases and writes only one private scorecard. Fluent criticism without this evidence trail is not a verified coaching result.
`,
};
