import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Reading Call Notes a Bot Did Not Take',
  description:
    'Use bots and Granola without turning polished call notes into false evidence: preserve transcript quotes, label fallbacks, and route uncertainty for review.',
  date: '2026-08-31',
  category: 'Guide',
  content: `
# Reading Call Notes a Bot Did Not Take

The dangerous call brief is not the one with an obvious mistake. It is the one
that reads cleanly, names a customer concern, and gives nobody a way to replay
the words behind that concern. A bot did not attend the call. It read an
artifact another system produced, then wrote a second artifact that looked more
certain than the first.

That distinction matters when you use bots and Granola together. An official
Grok Bot practitioner guide names Granola among the integrations used in real
work, but that fact does not make every note a transcript or every sentence in
a note quotable evidence. Your setup has to inspect what it received. When a
speaker-attributed transcript is present, the bot can cite exact language. When
only show notes or a summary are present, it can report themes and proposed
follow-ups, but it cannot verify that anyone said the summarized claim.

This guide builds that fallback on purpose. The output stays useful when the
transcript is missing, but the evidence grade cannot rise just because the prose
sounds plausible.

## Treat every imported call artifact as a source with a declared type

Start by refusing the label "call notes" as if it described one stable thing.
The input might contain a speaker-separated transcript, timestamped excerpts,
edited notes, a short recap, action items, or a mixture of those forms. Each
supports a different claim.

A transcript can support "the buyer said these words" when it preserves the
speaker and location. A note can support "the note says this was discussed."
Those sentences are not interchangeable. The first is a claim about the call.
The second is a claim about an artifact created after or during the call.

Make the bot classify the source before it extracts anything. Classification
should use visible properties, not the file name. A document called
"Transcript" with no speakers and no continuous turns is not promoted by its
title. A document called "Notes" that includes speaker names, sequential turns,
and timestamps may contain transcript excerpts, but only those excerpts earn
the stronger evidence grade.

| Source type | Visible properties | Claim it can support | Claim it cannot support |
|---|---|---|---|
| Full transcript | Sequential turns, speakers, searchable location | A named speaker used exact words | That the transcript captured perfect audio |
| Transcript excerpt | Exact passage, speaker, timestamp or stable location | The quoted passage occurred in the available record | What happened outside the excerpt |
| Show notes | Edited topics, headings, action items, no continuous turns | The notes record a topic or task | A speaker said the note verbatim |
| Summary | Compressed narrative, usually no source locations | The summary characterizes the call this way | The characterization is verified by the call |
| Unknown artifact | Origin or structure cannot be established | The file exists and contains text | Any call-level factual conclusion |

This first label controls every later sentence. Do not let the bot downgrade the
label quietly when the preferred source is unavailable.

## Separate what the call proves from what the notes merely report

Build two lanes into the output. Put transcript-backed observations in an
Evidence lane. Put note-backed interpretations in a Reported lane. Never blend
them into one bullet list, because readers will assume every bullet has the
strongest provenance shown anywhere on the page.

The wording should expose the lane even when a bullet gets copied into Slack or
a ticket. "At 18:42, Imani said, 'Legal needs the data map before review'" is
evidence. "The show notes report legal review as a concern" is a report. "Legal
blocked the deal" is an inference unless the source actually establishes both
the block and its effect on the deal.

This is not pedantry. Call notes often compress three conversational steps into
one useful sentence. A buyer asks for a document, a seller says they will check,
and the notes say "Send data map before legal review." That action item may be
exactly what the team needs. It still does not prove the buyer used those words,
that legal imposed the condition, or that a firm promise was made.

Keep usefulness and verifiability as separate columns. A summary can be useful
enough to prompt a human check while remaining unverified.

## Inspect the artifact before accepting its strongest-looking sentence

The bot should run a short intake test every time, even if yesterday's calls all
arrived in the expected format. Exports change. Permissions expire. A link can
open to a recap view for one call and a transcript view for another. The title
and integration name do not settle what the bot actually saw.

Have it answer five questions before analysis: Is there continuous dialogue?
Are speakers identified? Are timestamps or stable passage locations present?
Can the quoted wording be found again? Does the artifact disclose that it is a
summary or edited note? The answers produce a source grade, not an impression.

| Intake result | Evidence grade | Allowed output | Required warning |
|---|---:|---|---|
| Speaker text plus reproducible location | A | Exact quote and narrow interpretation | Note any missing audio or partial coverage |
| Exact excerpt with speaker but no stable timestamp | B | Quote labeled as an excerpt | Say the location is not reproducible |
| Edited notes with topics and tasks | C | Reported themes and candidate actions | Say no call quote was verified |
| Narrative summary only | D | Summary of what the artifact reports | Say claims are summary-sourced |
| Empty, inaccessible, or ambiguous file | F | Coverage failure only | Say no analysis was completed |

Grades are local policy, not product facts. Choose other letters if your team
prefers. The important part is that a lower-quality input cannot produce an
unqualified high-confidence claim.

## Fall back from transcript to show notes without pretending nothing changed

A practical bot needs a fallback. Stopping every time a transcript is missing
creates an inbox full of failures and teaches operators to ignore the system.
The answer is not to stop less often. It is to keep working in a visibly narrower
mode.

In transcript mode, extract exact quotes, speakers, timestamps, explicit dates,
and direct commitments. In show-notes mode, extract topics, candidate action
items, named owners written in the notes, and questions a human should verify.
Prefix each substantive item with "Reported in show notes" and set the source
grade on the item itself. Do not put quotation marks around paraphrases.

If the notes say "Procurement wants revised terms by Friday," the bot may write:
"Reported in show notes: procurement requested revised terms, with Friday shown
as the target. Verify the requester, wording, date, and owner in the recording
or transcript." It may not write: "Procurement said, 'Send revised terms by
Friday.'" The invented quotation turns a useful fallback into fabricated
evidence.

| Requested task | Transcript mode | Show-notes mode | Missing-artifact mode |
|---|---|---|---|
| Find objections | Quote the objection with speaker and location | List reported objections as unverified | Report no source available |
| Find promises | Quote the company speaker and exact commitment | List candidate follow-ups, never confirmed promises | Report no source available |
| Draft coaching | Tie advice to a quoted moment | Offer questions for human review, not a score | Do not coach the call |
| Update account brief | Add evidence-backed facts for review | Add a clearly labeled notes-only appendix | Make no account claim |
| Prepare follow-up | Draft from verified facts and open questions | Draft questions that confirm the notes | Stop and request source access |

The fallback preserves momentum while protecting the reader from a category
error.

## Mark every summary-sourced claim as unverified at the point of use

A disclaimer at the top of a long brief is not enough. People skim, copy, crop,
and forward. By the time the third bullet reaches a CRM comment, the warning is
gone. Put provenance beside every claim that depends on a summary.

Use a compact pattern such as "Source: show notes, unverified against
transcript." Repeat it. Repetition is a feature here. The label should travel
with the sentence when pasted elsewhere, and it should survive a screenshot.

Do not use softer labels such as "medium confidence." Confidence describes the
bot's internal feeling, not the source. A bot can feel confident about a
beautifully phrased summary that is wrong. "Unverified" names the missing act:
nobody has checked the claim against a record capable of proving it.

Reserve "verified" for a reproducible passage, not for agreement between two
summaries. If the show notes and a seller's CRM recap tell the same story, you
have two derivative artifacts. They may share one mistaken interpretation.
Corroboration helps only when the sources are independently capable of
supporting the claim.

## Preserve the source chain so a reviewer can walk backward

Every output item should point backward through its transformations. The brief
links to the imported artifact. The artifact record names its type and original
location. A transcript-backed item includes the timestamp or stable passage. A
notes-backed item states that no underlying passage was available.

Think of this as a chain of custody for meaning. You are not proving that a file
was untouched in a forensic sense. You are making it possible for an ordinary
operator to answer: Where did this sentence come from, and what did the source
actually say?

Use a small record with fields that stay intact across exports:

| Field | Transcript-backed value | Notes-only value |
|---|---|---|
| Artifact type | Full transcript | Show notes |
| Original location | Call URL or approved file path | Notes URL or approved file path |
| Passage location | Timestamp or stable line reference | Not available |
| Speaker | Named or explicitly unknown | As written in notes, or not stated |
| Exact quote | Verbatim passage | None |
| Derived claim | Narrow paraphrase | Reported theme or candidate action |
| Verification state | Verified against available transcript | Unverified against transcript |
| Reviewer decision | Accepted, corrected, or rejected | Verify, keep as reported, or reject |

If a later brief has only the derived claim and none of these fields, treat it
as a new summary. Do not inherit the old verification badge by proximity.

## Walk Nila through a Wednesday renewal failure from import to correction

Nila runs revenue operations for an invented software team. On Wednesday
morning, her bot prepares a renewal brief from a Granola call artifact. The
artifact page contains polished show notes but no continuous speaker transcript
that the bot can locate. One note reads: "Security approved the pilot; legal
just needs the addendum."

The first version of Nila's bot silently treats the note as a transcript. It
writes "Security approved the pilot" under Confirmed Decisions, then drafts a
manager briefing that says legal paperwork is the only remaining step. The
account owner reads the concise brief, repeats the claim in the renewal meeting,
and the security contact corrects them. Security had asked for a pilot plan.
Nobody approved it.

Nila traces the failure backward. The manager briefing links to the bot's brief.
The brief links to the show notes. There is no timestamp, no named speaker, and
no exact passage. The bot converted an edited characterization into a decision,
then the heading "Confirmed Decisions" made that conversion invisible.

She does not fix this by banning Granola notes or by asking for more cautious
language everywhere. She changes the source contract. The bot classifies that
artifact as show notes, moves the sentence to Reported Items, writes "Unverified
against transcript," and asks two review questions: Who recorded the approval,
and where is the exact passage? Because neither can be answered, the renewal
brief says security approval is not established.

Nila then checks the recording manually and finds the relevant exchange. The
security contact asked to review a written pilot plan before deciding. Nila
adds that exact finding with its location, rejects the original summary claim,
and records the correction. The end-to-end lesson is specific: the bot did not
mishear the call. It never read the call. The failure was an unlabeled source
substitution.

## Refuse to promote action items into promises without exact language

Action items are especially tempting because they look operational. "Send
security packet Friday" has an owner-shaped verb and a date-shaped deadline.
But show notes often normalize conversational ambiguity into a useful task. The
note does not reveal whether someone promised Friday, suggested Friday, or added
Friday after the call.

For commitment tracking, require a company speaker, a future action, the exact
words, and a reproducible source. Without those elements, place the item in a
candidate queue. The [What Did We Promise bot](/bots/what-did-we-promise) uses
that evidence-first shape: if it cannot reproduce the sentence from a source,
the promise does not enter the confirmed list.

This restriction does not block work. A candidate action can still be assigned
for internal verification. Nila can ask the account owner whether Friday was
agreed. What the bot cannot do is label the action overdue, calculate lateness,
or represent the item as a customer commitment before a human finds the words
or confirms the obligation through an approved process.

For the broader register design, use the [customer promise tracking
guide](/blog/how-to-track-customer-promises). Keep this page's narrower rule in
front: a polished show-note action item is not self-authenticating evidence.

## Draft follow-up questions that expose uncertainty instead of hiding it

When only notes exist, make the bot turn uncertain claims into questions. That
produces something the account owner can use without laundering the claim into
fact.

If notes say "Budget confirmed," draft "What budget range, owner, and approval
step did the buyer state?" If notes say "Migration in October," draft "Was
October requested, proposed, or agreed, and by whom?" If notes say "Needs SSO,"
draft "Which workflow fails without SSO, and did the buyer describe it as a
purchase condition?"

Questions should target the exact gap in provenance. Avoid asking a vague
"Please confirm." A reviewer faced with a broad confirmation request will often
approve the whole summary from memory. Ask for the speaker, the wording, the
location, or the missing distinction.

| Notes-only phrase | Hidden ambiguity | Review question |
|---|---|---|
| "Champion loves the demo" | Who is the champion, and what did they endorse? | Which speaker expressed support, using what words? |
| "Pricing works" | Price level, terms, or general direction? | What amount or term was discussed, and who accepted it? |
| "Launch in October" | Goal, proposal, commitment, or deadline? | Who proposed October, and was it accepted on the call? |
| "Legal is the blocker" | Actual block or seller interpretation? | What did legal request, and where is that request recorded? |
| "Send deck Friday" | Task drafted after call or spoken promise? | Who committed to Friday, and what exact artifact was promised? |

The result is a verification queue, not a weaker imitation of a transcript.

## Paste a charter that enforces the transcript-to-notes fallback

The charter needs explicit modes, item-level labels, and a boundary that stops
external action. Paste this into the bot, then replace the bracketed locations
with the approved sources your team uses.

\`\`\`text
You are Call Artifact Reader. You prepare internal call briefs from approved
Granola artifacts and related call records.

SOURCE INTAKE
1. Open only the artifact supplied for the named call in [approved location].
2. Classify it from visible contents as FULL TRANSCRIPT, TRANSCRIPT EXCERPT,
   SHOW NOTES, SUMMARY, or UNKNOWN. Do not classify it from its title alone.
3. Record whether continuous turns, speaker labels, timestamps, and a
   reproducible passage location are present.
4. Never claim that you attended, heard, recorded, or took notes on the call.

TRANSCRIPT MODE
Use only when speaker-attributed text and a reproducible location are present.
For each observation, include the exact quote, speaker, timestamp or stable
location, and a narrow interpretation. Preserve conditions, uncertainty, and
dates exactly. If audio quality or transcript coverage is unknown, say so.

SHOW-NOTES MODE
Use when continuous speaker text or reproducible locations are absent. Extract
reported topics, candidate action items, and verification questions. Prefix
every substantive item with "Reported in show notes." Add "Unverified against
transcript." Do not use quotation marks around a paraphrase. Do not identify a
speaker unless the notes do. Do not call an item a decision, promise, objection,
approval, deadline, or customer requirement as a verified fact.

UNKNOWN OR MISSING MODE
Name the access or classification failure. Produce no call analysis. Ask for an
approved transcript, recording review, or human clarification.

OUTPUT
Write: call identity, artifact type, coverage, Evidence, Reported Items,
Candidate Actions, Verification Questions, and Sources. Keep transcript-backed
and notes-backed items in separate sections. Carry the source type and
verification state on every item.

BOUNDARY
Never send email, message a participant, edit the CRM, change an opportunity,
create an external task, or represent a summary-sourced claim as verified. Draft
only for internal human review. A human must approve any external use or system
write after checking the source.
\`\`\`

Test the charter with one full transcript, one notes-only artifact, one partial
excerpt, and one denied link. The expected result is four visibly different
outputs, not four equally confident briefs.

## Keep the review boundary before CRM writes and external messages

The safest boundary is simple: the bot may read approved artifacts and draft an
internal brief, but it must not write claims into the CRM or contact anyone. A
human reviews the source type, quote, interpretation, and proposed destination
first.

This boundary matters more in fallback mode. A bad sentence in a temporary
brief can be corrected. The same sentence copied into an opportunity record may
shape forecasting, executive review, and later automation. The same sentence
sent to a buyer can turn an internal misunderstanding into a relationship
problem.

The [Call Coach bot](/bots/call-coach) takes a similarly narrow path by tying
critique to call evidence and keeping the scorecard private. If your goal is
behavior coaching rather than provenance control, the [sales call coaching
guide](/blog/how-to-coach-sales-calls-with-ai) covers that workflow. This setup
handles a prior question: what can the artifact prove before anyone coaches,
forecasts, or follows up from it?

Remember the account architecture while granting access. All bots on one
account share one persistent cloud computer. Their screens are separate work
surfaces, not security boundaries, and separate bots do not isolate browser
sessions, files, or command-line credentials. Give the account only the access
needed for these call artifacts. A separate bot name does not create a separate
credential vault.

## Answer the speed argument that labels make the brief too cumbersome

The strongest objection is practical: sales teams need a brief before the next
call, and item-level provenance labels make a clean summary harder to scan. If a
human must replay every sentence, the bot has saved no time. A crisp best-effort
summary seems more useful than a cautious document full of warnings.

That objection correctly identifies the cost, but draws the wrong boundary.
You do not need to verify every theme before the brief exists. You need to stop
unverified themes from masquerading as quotes, decisions, or commitments. A
notes-only brief can still surface likely topics, draft verification questions,
and organize candidate follow-ups in minutes. The labels add a few words while
preventing the operator from spending the next meeting defending a sentence no
one can source.

Make the document scan-friendly through layout, not false certainty. Put grade
A evidence first, grade C or D reports second, and the three highest-impact
questions last. Speed is preserved because the operator sees where review pays
off. The alternative is not speed versus caution. It is visible uncertainty
now versus surprise correction later.

## Test the fallback with planted contradictions before trusting it

Do not test only with well-formed transcripts. A source-routing system proves
itself at the downgrade. Prepare four synthetic or approved internal fixtures
that contain no real customer secrets.

Fixture one is a full transcript where a speaker says a precise sentence and
the notes paraphrase it accurately. Fixture two keeps the same transcript but
changes the notes so they overstate the sentence. Fixture three exposes only
the overstated notes. Fixture four denies access to both. You are checking
whether the bot follows source authority, not whether it can write a persuasive
recap.

Score each output with observable checks. Did it classify the input correctly?
Did every quote exist verbatim? Did notes-only claims carry the unverified label
on the same item? Did it avoid invented speakers and dates? Did denied access
produce a coverage failure rather than a generic call analysis? Did it refrain
from external action?

Run the fixtures again whenever the source view, prompt, access path, or output
template changes. A passing transcript case says nothing about the fallback if
the fallback was never exercised.

## Record corrections so the same summary error does not survive downstream

When a reviewer rejects or narrows a claim, store the correction beside the
claim ID and source chain. Do not edit the original brief until the mistake
disappears. The team needs to see that "Security approved" became "Security
requested a plan before deciding," why it changed, and which downstream drafts
contained the old version.

A minimal correction record contains the original claim, its artifact type,
the corrected claim, the stronger source location, reviewer, decision time, and
destinations checked. The destinations might include an internal brief, draft
email, opportunity note, or task. The bot may assemble that checklist, but a
human decides and performs any sensitive correction.

This history also improves the source policy. If many corrections arise from
action-item headings, require explicit review for that heading. If speaker
identity repeatedly disappears in exports, stop emitting named claims from
that path. Learn from the shape of the evidence failure, not from the bot's
writing style.

Do not treat an approval control as undo. Approval governs the proposed action;
it does not reverse work already completed. Catching an unsupported claim before
a CRM write or message is cheaper than cleaning it from every place it reached.

## Stop using this page when your task requires recording or coaching mechanics

This page stops applying once the main problem is how to record calls, obtain
consent, configure Granola, score a seller, or measure conversation behavior. It
does not document Granola product settings, claim which transcript features are
available, or tell you how recording law applies in a jurisdiction. Use the
product's current documentation and your legal process for those questions.

It also stops at internal source handling. If you need a broader commitment
register across email, support, CRM notes, shared channels, and drive files, use
the customer promise tracking guide linked above. If you need a private coaching
program with a named rubric, use the sales call coaching guide. Both depend on
evidence, but they solve different operating problems.

Keep this fallback only where a bot reads a call artifact it did not create and
where readers might confuse edited notes with a transcript. The moment a human
has checked the exact passage, replace the notes-only claim with the verified
record rather than carrying both forever.

## Frequently Asked Questions

### Can a bot treat Granola show notes as a transcript?

No. A bot should classify the artifact from the text it can inspect, not from
the integration name or page title. Show notes can support statements about what
the notes report, including topics and candidate actions. They cannot by
themselves verify that a named speaker used exact words on the call. If
continuous dialogue, speaker attribution, and a reproducible passage are
missing, the bot should enter show-notes mode, avoid quotation marks, and label
every substantive claim as unverified against the transcript.

### What should the bot do when the transcript is unavailable?

It should continue in a narrower fallback mode rather than silently substituting
the notes. The output can list reported themes, candidate action items, and
specific questions for a human reviewer. Each item should name show notes as its
source and state that it is unverified against the transcript. The bot should
not confirm decisions, promises, objections, deadlines, or speaker intent from
the summary alone. If no usable artifact is available, it should report the
coverage failure and produce no call analysis.

### Why is a claim sourced to a summary unverifiable?

A summary is a derived interpretation, not a reproducible passage from the
conversation. It may compress several turns, remove conditions, assign an
unstated owner, or turn a proposal into a decision. Even an accurate summary
does not show the exact wording needed to verify who said what and in what
context. A second summary that agrees does not fix that gap if both derive from
the same call. Verification requires a source that can reproduce the relevant
words, speaker, and location for review.

### Can the bot send a follow-up based on notes-only action items?

No. Notes-only action items may be useful candidates, but they can hide whether
a date was proposed, agreed, or added after the call. The bot should draft
internal verification questions and place the item in a review queue. A human
must confirm the obligation and approve any external message or system write.
The boundary also limits the damage from a wrong summary: the bot never emails a
participant, edits the CRM, or creates an external task from an unverified
claim.
`,
};
