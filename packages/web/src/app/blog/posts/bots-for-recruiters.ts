import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots for Recruiters: Screening and Scheduling, Safely',
  description:
    'AI bots for recruiting can organise applications and hold the interview calendar together. They never reject, rank, or contact a candidate. Here is that scope.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Bots for Recruiters: Screening and Scheduling, Safely

A requisition opens on a Monday. Two weeks later there are 214 applications in
the folder, six interviewers whose calendars have no overlap before Thursday,
four candidates mid-loop waiting on an answer you owe them, two interviewers who
have not written up last week, and a hiring manager asking for a shortlist by
Friday.

Almost all of that is logistics: opening documents, looking for four specific
things, finding an hour six people share, chasing people who owe you something.
On top sits a thin layer of judgment that takes very little time and carries
nearly all of the consequence.

The logistics half can be handed over almost completely. The judgment half
cannot, not partially, not with a human clicking approve at the end. This is
where that line sits and how to write it down so a bot cannot drift across it.

## Sort the recruiter week into logistics and judgment before automating anything

Five jobs, and they are not equal.

Reading applications against stated requirements. Mechanical, enormous, and the
thing that eats a Saturday. You are not forming a rounded view of a person in
forty seconds, you are running a lookup for four things you published.

Scheduling and rescheduling. Larger than anyone admits and where candidates are
genuinely lost. A strong candidate who waits nine days for a slot takes the
other offer, and nothing flags that as a loss you caused.

Chasing. Interviewers who owe feedback, managers who have not opened the pack,
candidates who have heard nothing since Tuesday.

Deciding who advances. Minutes per candidate, and the entire legal surface of
the job.

Writing to candidates. Also minutes, also consequential, because a rejection or
an offer is the part of your company a person remembers for years.

Jobs one, two, and three are handed over. Jobs four and five are not, ever.

## Score each recruiting task by what a wrong output actually costs

That sort is the summary. Here is the version you can argue with, because the
question is never "could a bot do this" but "what happens when it does it wrong
at two in the morning". Three columns decide it: can a wrong output be undone,
does the task put the bot near a protected characteristic, and would a candidate
or a regulator read the output as part of a selection decision.

| Recruiting task | Undo path | Protected characteristic nearby | Reads as selection | Verdict |
|---|---|---|---|---|
| Quoting the sentence that evidences a requirement | Delete the row, re-run | No | No | Automate |
| Listing files it could not open | Re-run | No | No | Automate, and require |
| Computing slots that fit the panel | Pick another slot | No | No | Automate |
| Drafting an invite on your calendar | Delete the draft | No | No | Automate |
| Sending that invite | None, it arrived | No | Sets an expectation | You send |
| Ordering candidates by document content | None, it shaped what got read | Yes, invisible proxies | Yes | Never |
| Adding a total, score, or match percentage | None, it gets quoted onward | Yes | Yes | Never |
| Moving a candidate between stages, or writing to one | None in practice | Yes | Yes | Never |

The full never-list is further down. The middle column surprises people. A bot does not need to be told someone's age
to act on it. Graduation year, service dates, a career gap, a school name, a
photo in a CV header, the phrasing of a second-language writer: all proxies, all
in plain text in the documents you just handed over. The mitigation is not a
warning in the prompt. It is leaving those fields out of the extraction list.

## Assemble a requisition from five bots that each hold a different line

There is no recruiting bot in the catalog, which is deliberate. A listing called
"candidate screener" invites the build where the bot produces the shortlist, and
the shortlist is the part you keep. What the catalog has instead is five
boundaries that already match the scope that holds up.

| The job | What the bot owns | Where it stops | Start from |
|---|---|---|---|
| Application intake | Opens every file, marks each published requirement evidenced, not found, or unclear, with the sentence and where it sits | Never sends an email, every draft waits for explicit approval | [Inbox Triage](/bots/inbox-triage) |
| Interview logistics | Reads panel free/busy, proposes slots that fit everyone, drafts the invite | Touches only your local calendar, never edits the shared source | [Marketing Calendar Sync](/bots/marketing-calendar-sync) |
| Loop chasing | Tracks who owes feedback, who has waited how long, what is stalled | Never decides for you, it routes, tracks, and flags what needs a human | [Chief Of Staff](/bots/chief-of-staff) |
| Debrief pack | Assembles evidence and open questions before a hiring manager talk | Never sends, schedules, or acts externally without your approval | [Chief of Staff Briefing](/bots/chief-of-staff-briefing) |
| Requisition memory | Carries what this req learned, such as the requirement that keeps coming back unclear | Never stores secrets, tokens, passwords, or customer data in memory | [Persistent Bot Memory](/bots/persistent-bot-memory) |

Read the last boundary as covering candidate data too. A memory file that
accumulates names and personal details across three requisitions is the highest
risk object in your setup and the one nobody inventories. Store the lessons,
never the applicant: the file may say "requirement 2 is ambiguous, 90 of 214
came back unclear" and need never carry a candidate identifier.

One listing deserves a warning rather than a recommendation.
[Meeting Double](/bots/meeting-double) only joins meetings you explicitly send
it to and always identifies itself as your bot, a fine boundary for an internal
status call. Do not send it to a candidate interview. Consent rules for
recording vary by jurisdiction, and a machine transcript of a conversation about
a person is the last thing you want in a shared folder.

The intake build, with the extraction format and the tests that prove it honest,
is in [the applicant screening setup](/blog/grok-bot-to-hiring-screening). This
article is the map. That one is the build.

## Read the legal ground once, then check every place you hire

This is not legal advice, and you need to check what applies in every place you
actually hire, which means where your company sits and also where the candidate
sits, because several of these regimes follow the person.

Automating employment decisions is its own regulated category in the frameworks
most likely to reach you. The EU AI Act places systems used in employment
contexts, including recruitment and the filtering of applications, in its
high-risk tier, and the obligations attach to the organisation deploying the
system, not only to whoever built it. In the United States, EEOC guidance
approaches an automated tool used to make selection decisions as a selection
procedure in its own right, which pulls adverse impact analysis into scope
whether or not anyone intended a disparate outcome. New York City's Local Law
144 is the most concrete example in circulation: an automated employment
decision tool requires an independent bias audit and notice to candidates before
it is used.

The consequence is a large difference in obligation for a small difference in
charter text. A bot that reads documents and hands a person the relevant
passages is not what those rules aim at. A bot that filters is. You choose which
one you built, in about nine words.

A second reason has nothing to do with regulators. An extraction bot leaves a
trail of quotes tied to requirements you published. A filtering bot leaves "the
model preferred these", which is not an answer you can give a candidate, a
colleague, or a tribunal. Two years from now somebody will ask why a specific
person did not advance, and with extraction the answer is a document: what you
published, what was found for each item, the sentence it sat in, the named
person who read it. With filtering, the reconstruction never existed.

## Treat a total as a score and an ordering as a ranking

Two features look like formatting and are the regulated behaviour walking back
in through a side door. Both get suggested to you, by a colleague or by the
model itself, within a week.

The total. Your bot outputs a matrix: one row per application, one column per
requirement, evidenced or not found or unclear. Adding a "meets 3 of 4" column
is a one-line change that feels like a convenience. It is a score, and a score
is only useful because it implies a cut made by arithmetic nobody wrote down.
Nobody types "reject below 3". They sort by the column and read the top, same
outcome, none of the record. Weighting is worse: "R1 counts double" is a model
with parameters, and a model with parameters that selects people is what the
guidance above describes.

The ordering. "We are not ranking, we just sorted by relevance" is the sentence
to watch for. Sorting by anything derived from document content is ranking with
the label filed off. Position is the strongest signal any interface has,
stronger than any caveat printed above the list, and the reader reads position
seventeen as a verdict whatever the header says. Output in application ID order,
always, and accept a list that is less pleasant to read. That friction is the
feature.

The same test catches the softer versions. A colour on a row is a score with
three values. Bold on the rows that "look strong" is a score with two. A section
headed "worth a look first" is a shortlist renamed. Each arrives as a usability
improvement rather than a policy change, which is why each gets waved through.

Behind all of them is the point people miss. A decision does not become human
because a human clicks it. If the ordering determined which twenty applications
got opened, the ordering decided and the person ratified, which is precisely the
situation the deployer obligations and the selection procedure framing are built
around. The human is meaningfully in the loop only when the human sees the same
evidence in an order the machine did not choose.

What replaces the total is not more machinery. It is your eyes on an unsummed
matrix, in arrival order, a quote in every cell. If that matrix is too big to
read, you have too many requirements or a posting that was too vague, and no
scoring column fixes either.

## Watch for the five ways a screening setup drifts back into deciding

Drift is never dramatic. Nobody rewrites the charter to allow ranking. The
capability returns one convenience at a time, usually answering a reasonable
request from somebody who never read the charter.

| What you see in the output | What actually happened | The fix |
|---|---|---|
| A "meets 3 of 4" or percentage column | A convenience request became a score | Delete it. Cells carry evidence and status, never a count |
| The list arrives sorted "by relevance" | Ranking with the label filed off | Force ID order, forbid re-sorting in the charter |
| Requirement 2 "unclear" on 90 of 214 rows | The posting was vague, not the applicants | Rewrite the requirement, re-run. Never let the bot resolve it |
| A row mentions a school, a year, or a gap | A proxy entered the record | Strike the field from the extraction list |
| 214 files in, 209 rows out | Five people dropped before a human saw them | Reconcile counts every run, unopened list at the top |

The last row matters most and gets the least attention: it is the only failure
here where a person is affected and nothing on screen looks wrong. A quiet drop
is indistinguishable from a candidate who never applied.

## Hand scheduling over completely, because nothing protected sits near it

Screening gets the attention. Scheduling is where the hours go.

Intersecting six calendars across three time zones is a constraint problem, and
the rare recruiting task with no protected characteristic anywhere near it,
provided one line holds: the bot never contacts the candidate. Everything else
is fair game. It computes the overlap, proposes three options, drafts the invite
with the right panel, notices a candidate who has waited nine days, and names
the interviewer who has owed feedback since Tuesday.

Two details decide whether it is useful or embarrassing.

Time zones resolve to IANA names, never abbreviations, and every slot prints in
both the candidate's zone and yours. The classic failure is "Tuesday 3pm",
correct today and wrong after a daylight saving change in one zone, and the
person who finds out is the candidate sitting alone on a call. Request free and
busy access rather than full event detail while you are there, and
[the calendar integration guide](/blog/grok-bot-google-calendar) covers the
recurring-event traps that follow.

One scheduling behaviour looks like logistics and is not. If the bot decides who
gets the scarce Thursday slots with the hiring manager and who is pushed a week
to a stand-in panel, it has made a selection decision with a calendar as the
instrument. It reports the scarcity. You choose who gets Thursday.

The invite stays a draft until you send it. A calendar invite is a message to
the candidate with your company's name on it, which is why your intake bot also
does not reply to the "did you get my application" email. An approval governs a
proposed action and does not reverse completed work, so no wrong send gets
cleaned up quietly.

## Paste this interview logistics charter and replace the bracketed values

The screening charter lives in the build article linked above. This is the other
half, the one nobody writes down, and the higher value bot for most recruiters
because it runs every day of the requisition rather than once at the top.

\`\`\`text
You are my Interview Logistics Coordinator. You handle time and
paperwork. You never handle people.

// TRIGGER
Weekdays 08:00 <IANA zone, for example Europe/London>, and on demand
when I say "run the loop".

// WHAT YOU READ
- The interviewer calendars I have connected, free and busy only.
- My own calendar, full detail.
- The <tracker> board for candidates in the loop, read only.
Nothing else. Do not open a candidate CV, portfolio, video, or social
profile. Reading them is not your job.

// WHAT YOU OUTPUT
1. WAITING ON US: every candidate whose last activity is older than
   <3> working days, with the day count and the name of whoever owes
   the next action.
2. FEEDBACK OUTSTANDING: interviews held more than <24> hours ago with
   no written scorecard, named by interviewer.
3. SLOT OPTIONS: for each candidate needing a session, three options
   that fit every required panel member. Give the date, the start time
   in the candidate's stated zone AND in <my zone>, both as full IANA
   zone names, and the panel. If nothing fits in the next <5> working
   days, say so and name the specific conflict instead of proposing a
   worse slot.
4. DRAFT INVITES: for the option I pick, a draft on MY calendar only,
   titled <Req ID> - <Stage> - <Candidate ID>, panel in the body,
   candidate not on the invite.
5. RESCHEDULE REQUESTS: anything that arrived, quoted, unactioned.

// WHERE YOU STOP
You never email, message, call, or contact a candidate, a referee, or
anyone outside <company>, in any channel, for any reason.
You never send a calendar invite. You draft, I send.
You never move a candidate between stages and never mark anyone
rejected, declined, advanced, on hold, or withdrawn.
You never score, rate, rank, sort, total, or shortlist candidates, and
you never say who should proceed or who looks strong.
You never decide who gets a scarce slot. Report the conflict, I choose.
You never state, estimate, or infer age, gender, race, ethnicity,
nationality, immigration status, disability, health, pregnancy,
religion, caste, sexual orientation, political view, or family
situation, and you never guess any of them from a name, a photo, a
school, a graduation year, a career gap, or a writing style.

Refer to candidates by candidate ID plus first name. Never write a
candidate's email address, phone number, home address, or document
contents into a note, a memory file, or any shared location.

Time zones resolve to IANA names, never abbreviations like EST or CET.
Recheck any slot that falls within two weeks of a daylight saving
change in either zone.

If a task cannot be finished without crossing one of those lines, stop,
tell me what you would have done, and wait. Failing the task is the
correct outcome. Do not find another route to the same effect.
\`\`\`

## Run one requisition through it: day one, day seven, day thirty

The requisition from the opening paragraph: 214 applications, six interviewers,
four published requirements, a shortlist wanted Friday.

| When | What the bot hands you | What only you do |
|---|---|---|
| Day 1, intake | 214 rows in ID order, four requirement columns, each cell a quote with its location or "not found" or "unclear". Plus 6 unopenable files, named | Read it. Open every row once. Decide who advances |
| Day 2 | The same requirement, rewritten by you and re-run. Unclear now on 11 | See that requirement 2 was ambiguous, rewrite it, read the 11 that remain |
| Day 3, logistics | Three slots each for 9 candidates in both zones, plus a named conflict for the 2 that do not fit | Pick slots, send invites, resolve the 2 conflicts |
| Day 7 | 3 candidates past three working days, 2 interviewers owing feedback | Chase the interviewers. Write to the candidates yourself |
| Day 14 | A debrief pack each: evidence, your team's notes, open questions | Run the hiring manager conversation. Decide the shortlist |
| Day 30, closed | The memory note: the ambiguous requirement, the scheduling bottleneck, the real loop length | Fix the posting template before the next req opens |

Day two is the interesting row. The bot did not resolve the ambiguity, it made
the ambiguity countable, and countable ambiguity is fixable at the source: a
vague feeling became a number attached to one sentence in a job posting. Day
thirty compounds, because nothing in that note is about a person.

## Prove the bot is extracting and not judging, with tests that can fail

An assurance that the bot "does not rank" is worth nothing without a check that
can come back red. Run these before the first real requisition and after any
charter edit.

| Test | How to run it | Passes when | A failure means |
|---|---|---|---|
| Identity swap | One application twice. Change name, email, school, year, keep every other word identical | Outputs identical apart from the ID | It reads identity, not evidence. Remove those fields from the input |
| Order shuffle | Reverse the input order, re-run | Same statuses and quotes per row | Position shapes content, so it is comparing rather than extracting |
| Quote audit | Pick ten cells, search the source for the quote | All ten found verbatim | It paraphrases or invents, and every unchecked cell is suspect |
| Unreadable file | Corrupt one PDF, re-run | It appears by name in the unopened list | Silent failure. Your coverage number is fiction |
| Count reconciliation | Files in folder against rows in output | Equal, every run | Candidates vanish before a human sees them |
| Total sweep | Search the output for any count of requirements met | Nothing found | The score came back as a helpful addition |

Run the identity swap first. People skip it because it feels like a test of the
model rather than of your setup. It is a test of your setup: if the outputs
differ, the fields responsible are in your input and you can remove them this
afternoon. [How to test a bot before you trust it](/blog/testing-your-bot)
covers the wider habit of writing checks whose failure stops you shipping.

## Answer the strongest objection: a human reads every row anyway

The best argument against everything above deserves a straight answer rather
than a restatement of the rules.

"We are not automating any decision. A recruiter reads every row before anything
happens. The ban on totals and ordering costs real time and buys nothing,
because the human is already the decision maker."

That wins in exactly one case: a requisition small enough that a person really
does open every application. At thirty rows it is true, and at thirty rows the
restrictions cost nothing either, because nobody needs a sort to read thirty
rows. The objection is correct and irrelevant at once.

It fails at the volume where anyone wants the automation. At 214 rows, "reads
every row" becomes "reads the top carefully and the bottom quickly", and if the
bot chose the order then the bot chose which applications got the careful read.
That is how attention works, and it is why the ordering rule is the only thing
standing between "a person decided" and "a person confirmed".

One version of the objection lands. An unsorted 214 row matrix is worse to read.
The fix is not the sort, it is a smaller matrix. Four requirements asked as
direct questions on the form produce mostly quotes and a few unclears. Twelve
implied requirements produce a wall, and a sort hides that rather than solving
it.

## Where this breaks down: volume, agency work, referrals, and internal moves

Every recommendation has an edge. Here is this one's.

Very high volume. At five thousand applications for six seats no honest process
opens all of them, and the fixes are process design rather than software: a
shorter window, an earlier close, or a form that asks the four requirements
directly so the evidence is the applicant's own words rather than a model's
reading of a CV.

Agency and search work. The client decides. A bot that pre-filters before the
client sees anything moves the selection step to a party the candidate never
dealt with and the client cannot audit. Present everything that met the brief,
in arrival order, evidence attached.

Referrals. A referral is not evidence against a published requirement, and the
moment it enters the matrix it becomes a fifth column outranking the other four.
Keep it out of the extraction.

Internal mobility. The candidate is an employee, so performance records, manager
notes, and pay history sit one folder away, and they are genuinely relevant.
Relevance is not the test. Reachability by a machine nobody can audit is.

Work samples. The bot may collect them, strip identifying details, and hand a
reviewer an anonymised set. It never evaluates one. A graded work sample is a
selection decision in costume.

The next problem is what happens when the bot correctly stops and hands work
back, and nobody watches the queue it lands in.
[How a bot should hand work back to a human](/blog/bot-handoff-to-human) covers
the shape that survives a busy week.

## Refuse these jobs even when the tooling makes them easy

The opinionated list, longer than in most roles because these failures land on
people with no visibility into what happened.

Rejection, in every form, including the quiet one where nobody reopens a row
marked not found. If your process cannot commit to a human opening every
application once, your capacity is the filter, and the honest fix is an earlier
close, not software absorbing the shortfall invisibly.

Any message to a candidate. Scheduling confirmations, status nudges, rejection
templates, offer paperwork. A company that can send a rejection at two hundred
per second will send two hundred rejections, each a statement in your company's
voice that cannot be recalled.

Sourcing outreach. A bot messaging strangers on a professional network is
candidate contact, and usually a terms violation on top.

Interview feedback and scorecards. Generate an interviewer's write-up from a
transcript and you have replaced five independent opinions with one model's
summary of five conversations.

Any inference about a protected characteristic, including the harmless-looking
ones. Estimating seniority from a graduation year is age inference with an extra
step. Reading "culture fit" from a university is class and often race inference
with an extra step. Judging communication skill from writing style penalises
anyone working in a second language, and neither you nor the model can show that
it did not.

Automated analysis of video or voice: facial expression, tone, eye contact,
enthusiasm, any "engagement" score. No version of this is merely a summary.

Background and reference checks. Separately regulated in many places, and they
involve contacting third parties about a person. Buy that from someone whose
business it is.

Offer amounts and negotiation. Money and judgment, in the conversation the
candidate replays in their head for a year.

And one that sounds like analytics rather than hiring: never let a bot decide
which sourcing channel to cut based on outcome data. That is where indirect
discrimination hides, in a spreadsheet, dressed as efficiency. The habit of
writing limits as actions rather than intentions is in
[the guide to bot boundaries](/blog/grok-bot-boundaries), and it matters more
here than anywhere else in the catalog.

**Keep reading:** [How to Build a Grok Bot That Can Prep For Meetings](/blog/grok-bot-to-meeting-prep), [How to Build a Grok Bot That Can Digest Your Newsletters](/blog/grok-bot-to-newsletter-digest), [How to Build a Grok Bot That Can Write Your Standup](/blog/grok-bot-to-standup).

## Frequently Asked Questions

### Can AI bots be used for recruiting?

Yes, for the logistics, and that is most of the hours. A bot can open every
application and record whether each published requirement is evidenced, with the
exact sentence and its location. It can compute panel availability, propose
interview slots, draft invites on your own calendar, and track who owes feedback
or who has been waiting too long. What it should never do is decide, order, or
contact. The reliable test is whether the output is evidence a person reads or a
verdict a person merely approves.

### Is it legal to let a bot reject job candidates?

Treat that as a question for a lawyer in every jurisdiction where you hire,
including where the candidate is located, rather than something settled by an
article. What is clear is that automated employment decisions attract specific
obligations. The EU AI Act puts recruitment and application filtering in its
high-risk tier with duties on the deploying organisation, US EEOC guidance
treats an automated selection tool as a selection procedure subject to adverse
impact analysis, and New York City's Local Law 144 requires an independent bias
audit plus candidate notice. Extraction for a human reader avoids that category.

### What can a recruiting bot safely do?

Reading and time. On reading, it extracts evidence for requirements you actually
published, quotes the supporting sentence, marks anything ambiguous as ambiguous,
lists every file it failed to open, and outputs in arrival order with no total
and no sort. On time, it finds slots that fit a whole panel, prints them in both
time zones with full zone names, drafts invites you send yourself, and reports
who is stalled. Both halves produce artifacts for a person, and neither one
touches a candidate or a stage.

### Should a bot email candidates about interviews?

No, and the scheduling case is the tempting one because the message seems purely
factual. It is not. Anything arriving from your company sets a tone, makes an
implicit commitment about timing, and cannot be withdrawn once read, and an
approval step governs the proposed action rather than reversing a completed one.
Let the bot compute options, draft the invite on your own calendar, and hand it
to you. Sending takes you four seconds and keeps every word that reaches a
candidate attributable to a named person.
`,
};
