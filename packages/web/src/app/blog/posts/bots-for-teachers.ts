import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots for Educators: Planning and Feedback Support',
  description:
    'AI bots for teachers that plan lessons, watch spec changes, and draft feedback you edit, plus the student data line and why grading stays with a human.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Bots for Educators: Planning and Feedback Support

## The teaching week is contact hours plus everything around them

A secondary teacher with a full timetable stands in front of classes for
something like twenty hours a week. Those hours are fixed and they are not the
problem. The problem is the ring of work around them.

Planning five lessons across two year groups, most of which is not invention
but retrieval: finding the diagram you used last year, rebuilding the starter
activity you cannot locate, making the version of the worksheet for the three
students who need it. Marking, which arrives in lumps and eats a weekend.
Parent and admin email. The trip forms. Cover work written at 22:40 for a
colleague you are covering for tomorrow. The department meeting. The data drop.
The spec change nobody circulated.

Look at that list honestly and it splits in two. One half is retrieval,
formatting, scheduling, and watching for changes, all of which have outputs you
can verify in a minute. The other half is judgment about specific young people,
and it is regulated, consequential, and the actual job.

Almost everything that goes wrong when a teacher adopts bots comes from mixing
the two halves. So this guide keeps them apart from the first paragraph: the
roster below sits entirely outside the gradebook, and the section on feedback
explains exactly where the line runs and why.

## Six bots that sit outside the gradebook

Not one of these needs a student's name, a piece of student work, or a mark.
That is a design choice, not an accident.

| Job | What the bot owns | Where it stops | Start from |
|---|---|---|---|
| Tomorrow brief | Rooms, cover, deadlines, meetings, and what you need printed | Never sends, schedules, or acts externally without approval | [Chief of Staff Briefing](/bots/chief-of-staff-briefing) |
| Scheme of work tracker | Which topics are planned, taught, resourced, and behind | Never publishes, every change waits for your review | [Content Planner Manager](/bots/content-planner-manager) |
| Activity bank | Starters, hooks, misconception probes, and exit tickets per topic | Ideas and outlines only, nothing is uploaded anywhere | [Content Idea Generator](/bots/content-idea-generator) |
| Spec watch | Changes to exam board pages, sample assessments, and subject guidance | Reads public pages only, never interacts with them | [Competitor Website Watch](/bots/competitor-website-watch) |
| Subject reading digest | Lectures, subject podcasts, and long CPD talks turned into notes | Notes go to you alone, nothing is shared or posted | [Podcast Summarizer](/bots/podcast-summarizer) |
| Logistics mail | Trip forms, cover requests, orders, and timetable mail, sorted with drafts | Never sends, and never touches mail about a named student | [Inbox Triage](/bots/inbox-triage) |

That last boundary is narrower than the catalog default on purpose. A general
inbox bot reads the whole mailbox. A teacher's mailbox contains safeguarding
threads, pastoral notes, and messages about individual children, so the scope
becomes logistics mail only and the exclusion goes in the charter as a rule
rather than a preference.

## Sort every classroom task by what a wrong answer costs a student

That roster is six jobs. You will think of a seventh by Friday, and the useful
question is not whether a bot can do it but what happens when it does it wrong.
Sort by that and most cases answer themselves.

| Task | What a wrong output costs | Who justifies it later | Bot's role |
|---|---|---|---|
| Finding the diagram you used last year | Two minutes and a search | Nobody | All of it |
| Drafting a starter activity | A lesson that opens flat, fixed on the spot | Nobody | Draft, you read it before the bell |
| Watching a spec page for changes | A missed change, which is the status quo anyway | Nobody | All of it, weekly |
| Turning a CPD talk into notes | A wrong line in your own file | You, to yourself | All of it |
| Drafting a comment on a piece of work | A student acts on advice nobody gave them | You, to a parent or a moderator | Draft only, and only where policy allows |
| Putting a mark on a record | A grade the student did not earn, in a system of record | You, to a student, a parent, a moderator, an exam board | None |
| Choosing a set, a tier, or an intervention | A year of a child's timetable | You, to a parent and a head of year | None |
| Writing a reference | A university place or a job | You, with your name on it | None |

Read the third column before the first. Every task where a bot is
straightforwardly useful is one where nobody will ever ask you to explain the
output. The moment the answer to "who justifies this" is a person, in a
meeting, about a named child, you have left the range where a bot helps.

## Student data is not yours to paste

State this once and get back to work. Student information is legally protected
in most places. In the United States that is FERPA. In the EU and the UK it is
the GDPR, where a school is typically the data controller and any processor it
uses has to be under a contract it approved. Other jurisdictions have their own
equivalents.

None of this is legal advice, and the practical instruction is simpler than the
law: check your institution's policy before you paste anything, because almost
every school, college, and district already has one. There is usually an
approved-tools list, a data protection officer, and a process, and the process
exists precisely so that individual teachers do not have to make this call
alone at 22:40.

The reason a bot runtime lands squarely inside that policy is worth
understanding rather than taking on faith. A bot does its work on a cloud
computer, which is a third-party system by any definition your institution
uses. In Grok Bot's case the documentation is specific about what that computer
is: it is assigned to your user account and not to an individual bot, every bot
you create gets its own screen on that same machine, and browser cookies,
signed-in sessions, files, and command-line credentials are shared across all
of them. The docs put it flatly: do not use separate bots as a security
boundary.

Two consequences follow directly. First, the tidy-sounding plan of making one
bot for student work and keeping it apart from everything else does not
describe anything real. Second, deleting that bot does not remove the files or
the browser sessions it left behind on the shared computer. Work uploaded there
is work that stays there until you remove it deliberately. As of writing there
is also no audit view of bot actions, which means you cannot later demonstrate
what was accessed, and a data question you cannot answer is its own problem.
The [shared computer security guide](/blog/grok-bot-shared-computer-security)
covers exactly what is shared and how to clean up.

## Sort your inputs before you paste, not after

The section above is about permission. This one is about what you are holding,
because most of us underestimate how much of the material on a teacher's desk
carries a person inside it.

| What you were about to paste | Why it is not neutral | The version that usually is |
|---|---|---|
| A piece of student work | It identifies someone by its content as much as by its header | The rubric plus a description of the misconception, with no work attached |
| A class list or seating plan | Names, and often grouping or support information by implication | Class codes and counts |
| A markbook extract | Attainment attached to identifiable people | The distribution described in words, with no names |
| A parent email thread | Personal information about at least two people | The logistical question, restated in your own words |
| A behaviour or pastoral note | The most sensitive thing on your desk | Nothing. This one has no safe version |
| A photo of the board | The names in the corner are easy to forget | A retyped version, or a photo without them |
| Your own lesson plan | Usually fine, unless you annotated it with names | The plan with the annotations stripped |

The right-hand column is the actual skill, learnable in an afternoon. Nearly
every classroom task can be described without the person in it. "Year 10, mixed
attainment, third lesson on moles, most of them stopping at the conversion
step" carries everything a planner needs and identifies nobody.

Where a task genuinely cannot be described without a named student in it, treat
that as the signal that the task is yours rather than that you need a better
prompt.

## Curriculum and spec changes are a watcher's job

A cheerful one, and the highest-value thing on the roster that has nothing to
do with students.

Awarding bodies, ministries, and districts update specifications, sample
assessment materials, subject guidance, and grade boundaries on public web
pages, usually without telling anyone in a way that reaches a classroom
teacher. Departments find out in September that something moved in April.

That is a watcher's exact shape: a public page, a schedule, and a diff. The
useful report is not "the page changed", because a cookie banner or a footer
year will trigger that. It is the changed clause, quoted, with the date it
appeared and a one-line note on which of your units it touches. Point it at
your subject's spec page, the sample assessment page, and any guidance page you
have ever had to reread, run it weekly, and read it in two minutes on a Friday.

Nothing about it needs a student, a login, or a write permission. It reads
public pages and never interacts with them, which is also the boundary the
catalog listing already declares.

## Draft the feedback, and never decide the outcome

Here is the line, stated once and plainly.

A bot must not grade, rank, or determine an outcome for a student on its own.
Not a mark, not a grade boundary decision, not a set placement, not a
predicted grade, not a pass or fail. Drafting feedback that a teacher reads and
edits before it reaches the student is the defensible scope. Everything past
that point is an outcome, and outcomes belong to a person who can be asked to
justify them.

That framing is not squeamishness. It is the same standard every school already
applies to a teaching assistant, a trainee, or a supply teacher: they can
prepare, they can suggest, and the assessor of record signs. A bot gets the
same status as any other unqualified helper, which is a perfectly useful
status.

If you do work within that scope, the mechanics matter. Any drafting against
real student work is a data question first, so it happens only if your
institution's policy allows it and in the way that policy specifies, which for
many schools means an approved platform rather than a general-purpose bot
runtime. Where it is allowed, the bot works against a rubric you wrote, it
never sees or invents a mark, and it never sees the student's name or previous
grades. Feedback drafted without knowing whose work it is stays feedback about
the work.

## Treat the edit as the reading, because that is what it is

The obvious reading of "the teacher edits it" is that the edit is a safety
check, a rubber stamp on a draft that is basically fine. That reading is wrong,
and it is worth being precise about why, because a stamp is exactly what the
arrangement decays into if nobody names the failure.

The edit is where you read the work. That is the whole thing. Marking is not
primarily the production of comments, it is the occasion on which a teacher
finds out what a class actually understood. If a draft comment lets you skip
that, you have not automated the writing, you have automated the reading, and
the reading was the assessment. The comments were always a byproduct.

The edit is also where the specificity comes from. A model working from a
rubric produces the median observation: the conclusion needs more evidence, the
method could be clearer. Those sentences are true about almost any piece of
work, which is why they change nothing. What changes behaviour is the sentence
only you can write, because you know this is the third time this student has
stopped at the same point, or that this paragraph is a genuine leap for them,
or that the class misconception you taught against on Tuesday is sitting right
there in paragraph two.

And the edit is where you can defend it. You may have to explain a piece of
feedback to the student, to a parent, to a moderator, or to a head of
department. A comment you have not actually made is a comment nobody made.
That is uncomfortable in a meeting and it is worse for the student, who is
entitled to the judgment of a qualified person.

There is a fairness dimension too. A bot applies a rubric with consistent tone
and inconsistent substance, and its errors do not distribute evenly. It can be
confidently wrong about an unusual answer, an unconventional structure, or a
student writing in an additional language, and those errors are invisible in
aggregate while being significant for the individual. The teacher edit is the
only place that gets caught.

The practical test: if reading the work and rewriting the draft takes you as
long as writing the comment from scratch, use the bot for planning instead. It
has plenty to do there.

## The strongest case for AI marking, and what it actually wins

The objection to all of that is not technical, and it deserves a straight
answer rather than a restatement of the rule.

It goes like this. Marking is the largest single driver of teacher workload and
one of the main reasons people leave. Saying that the job eating your weekends
is the one job which must stay manual is a comfortable argument from someone
without 120 books to get through by Monday. If a bot produces a usable comment
in four seconds, refusing on principle chooses the teacher's exhaustion over
the student's feedback, and a student gets better feedback from a tired teacher
with a tool than from one writing nine words at 23:00.

The part which is right is the part about volume, so here is what it wins.

It wins on whole-class patterns. Twenty responses to one question, described
without names attached, produce a decent account of where a class went wrong.
That is analysis of a set rather than assessment of a person, and it is the
most useful thing here, because it changes what you teach on Tuesday instead of
what you write in a book.

It wins on your own comment bank. Marking is slow partly because you retype the
same six paragraphs in slightly different words all term. A bot that helps you
write those six once, properly, and then helps you choose between them, has
automated the typing and left the judgment alone.

It wins on low-stakes formative work, where a wrong comment costs a student one
wasted attempt and a correction on Thursday.

It stops winning where the reading disappears, and volume does not answer that.
With 120 books and no time, the honest response is fewer and better-designed
assessment points rather than the same number processed faster, because faster
processing tells you nothing about the class. The exhaustion argument also cuts
the other way: a rubber stamp is the fastest available way to spend a Sunday
and learn nothing.

## Start with the planner, the one bot that never sees a name

This is the highest-value bot on the roster and it never sees a child's name.

\`\`\`text
ROLE
You are my lesson planning assistant. You prepare materials I teach from.
You are not involved in assessment of any kind.

TRIGGER
Every Thursday at 16:00, prepare next week's plans from my scheme of work
file. Also run on demand when I name a topic.

INPUTS
- My scheme of work file (topics, sequence, dates, class codes only)
- My existing resource folder, to reuse before inventing
- Public subject resources, exam board specs, and sample assessments
- The misconception list I maintain per topic

OUTPUT, per lesson
1. OBJECTIVE: one sentence, in student-facing language.
2. PRIOR KNOWLEDGE ASSUMED: three bullets, and one check question for each.
3. STARTER: 5 minutes, low floor, no printing required.
4. SEQUENCE: 4 to 6 steps with rough timings. Mark where I talk and where
   they work.
5. MISCONCEPTION PROBE: one question whose wrong answers are diagnostic,
   with what each wrong answer tells me.
6. EXIT TICKET: two questions, one recall, one application.
7. REUSE NOTE: which of my existing resources this replaces or needs, by
   filename. Say NONE FOUND rather than describing a file that is missing.
8. DIFFERENTIATION: a simpler entry point and an extension, described by
   task, never by naming or describing a student.

RULES
- Never write an assessment mark, grade, band, or predicted outcome.
- Never rank, sort, or compare students in any way.
- If my scheme of work is ambiguous about sequence, ask. Do not guess.
- Cite the spec point each objective maps to, or say UNMAPPED.

BOUNDARY, absolute
You never read, store, receive, or process any student name, student work,
mark, grade, attendance record, behaviour record, pastoral note, or
safeguarding information. If any input contains one, stop, tell me which
input, and process nothing from it. This holds even when I ask.
\`\`\`

The last sentence is the one that does the work. A boundary that you can lift
in a hurry on a Sunday night is not a boundary, and Sunday night is exactly
when the temptation arrives. If you want the phrasing that makes a rule like
that hold, [writing a boundary that actually constrains a bot](/blog/grok-bot-boundaries)
covers how to word it so it cannot be argued around.

## Keep these six jobs away from every bot you run

The opinionated list. These are lines that should still hold in a year, and
several of them are lines your employer has probably already drawn for you.

Grades, marks, bands, and predicted grades. Any number or letter that lands on
a record. This includes the version where the bot suggests and you agree
without recalculating, because that is the same act with an extra click.

Anything that determines a student's path: set placement, intervention
selection, entry tier, and reference or recommendation letters. A reference is
a professional judgment with your name on it and a real effect on a young
person's next year.

Safeguarding and pastoral concerns. These go to a designated person, by the
named route, immediately, with no intermediate system involved. There is no
version of this that is a triage problem.

Messages to parents about a specific child. Draft the trip logistics email all
you like. The message about how a child is doing is a relationship, and often a
difficult one, and it is read very carefully at the other end.

Detecting cheating or AI use. Accusation tools are unreliable in a way that
falls hardest on students who write unusually, and an accusation is an outcome.

Anything that requires the student to believe a person read their work. If they
suspect a machine is reading it, the reason to write for a reader disappears,
and so does most of the point of the exercise.

## Test the planner in the week you are ill, not in October

The test for a planning bot is not whether the plans are good in October, when
you are fresh and checking everything. It is whether they hold up in the week
you are ill, covering two colleagues, and running a trip.

So check it in two cheap ways. Once a fortnight, take one lesson the bot
planned and one you planned, and compare how much you changed on the morning.
If the bot's plans need heavy surgery every time, the input is wrong rather
than the bot: usually the scheme of work file is vaguer than you think, and
fixing the file fixes the output.

Second, keep the reuse note honest. The single most valuable line in the whole
output is the one that points at a resource you already made, because most
planning time is spent rebuilding things that exist. Once a month, spot-check
three of those filenames actually resolve. A bot that starts confidently
describing worksheets that do not exist has quietly become a cost.

Keep the roster small while you do this. Routines are per bot, capped at fifty
per bot, and the app keeps the twenty most recent run records per routine, so a
sprawl of half-used bots is not a filing system you can tidy later. Two bots you
read every week beat six you skim in September and abandon by half term.

## When the planner starts costing you time, check these six things

A planning bot fails quietly. It keeps producing plans, they keep looking
reasonable, and the saving disappears into the editing. Each fix below is in
the inputs rather than the prompt.

| Symptom | What is actually wrong | The fix |
|---|---|---|
| Every plan needs heavy surgery on the morning | Your scheme of work file is vaguer than you think it is | Fix the file. Add the sequence and the prior knowledge each lesson assumes |
| The reuse note names files that do not exist | It is describing a plausible resource folder instead of reading yours | Require the filename plus one quoted line from inside it, or NONE FOUND |
| Misconception probes are generic | There is no misconception list for it to work from | Maintain that list per topic. It is the highest-value input you own |
| Objectives do not map to the spec | The spec page moved, or it was never given the page | Require the spec point or UNMAPPED, and let the watcher tell you when the page changes |
| Differentiation reads like it is describing a child | The boundary is being applied to inputs and not to outputs | Add the line: differentiation is described by task, never by learner |
| You stopped reading the Friday spec report | It reports that pages changed rather than what changed | Require the changed clause quoted, with the unit of yours it touches |

Check the second row first. A bot that confidently describes worksheets you do
not have costs more than it saves, and takes a term to notice.

## Where this guide assumes an institution you may not have

Everything above assumes a school: a written policy, an approved-tools list,
and somebody whose job includes answering data questions. Three sets of readers
lack that, and the advice moves.

A private tutor has no policy to check and nobody to ask. That does not remove
the question, it moves it onto you, and the honest version of this article for
a tutor is stricter rather than looser, because no second pair of eyes catches
a mistake. Work from descriptions, and leave the gradebook line where it is.

A university lecturer working with teaching assistants is in a different shape,
because marking is already distributed and a moderation step already exists.
That makes the drafting case marginally stronger, since somebody other than the
drafter reads the outcome. It leaves the reading argument untouched, because
moderation samples and a teacher's own reading does not.

A trainer in adult or corporate education has no exam board and different
record systems. Establish which regime you are under before importing caution
from a school setting, and equally before importing permission from one. The
planning half of this article transfers cleanly. The assessment half is written
about children and records that follow them.

One thing transfers everywhere, tutor and trainer included: the edit is the
occasion on which somebody reads the work. Remove the reader and you have not
saved time, you have changed what the exercise was for.

**Keep reading:** [Self-Describing CLIs](/blog/grok-bot-whop-cli-commerce), [Grok Bot and X](/blog/grok-bot-x-twitter), [Grok Bot and Zoom](/blog/grok-bot-zoom).

## Frequently Asked Questions

### What can AI bots do for teachers safely?

The safe surface is everything outside the gradebook. A bot can assemble a
next-day brief of rooms, cover, deadlines, and what needs printing, track which
topics in your scheme of work are planned versus taught versus behind, generate
starters, misconception probes, and exit tickets for a topic, watch exam board
and guidance pages for changes and quote the changed clause, turn long subject
talks into notes, and sort logistics email with drafts attached. None of those
require a student name, a piece of student work, or a mark.

### Can a bot grade student work?

It should not, and in many institutions it may not. A bot must not grade, rank,
or determine an outcome for a student on its own, which covers marks, set
placement, entry tier, predicted grades, and pass or fail decisions. Drafting
feedback that a teacher reads and edits before it reaches the student is the
defensible scope, and even that is a data question first, so it depends on what
your institution's policy allows. The reason is accountability: an outcome
belongs to a person who can be asked to justify it to a student, a parent, or a
moderator.

### Is it legal to put student work into an AI bot?

Treat it as a decision with rules attached rather than a technical choice.
Student data is legally protected in most places, including FERPA in the United
States and the GDPR in the EU and the UK, and a bot's cloud computer is a
third-party system under any definition your school uses. This is not legal
advice. The practical step is to check your institution's policy first, because
almost every school and district has one, along with an approved-tools list and
a data protection contact whose job is exactly this question.

### Why does the teacher have to edit the feedback?

Because the edit is where you read the work, and reading the work was the
assessment. Marking produces comments as a byproduct, but its real function is
finding out what a class understood, and a draft that lets you skip that has
automated the reading rather than the writing. The edit is also where
specificity comes from, since a model working from a rubric produces the median
observation that is true of any piece of work. And it is where you can defend
the comment later, which matters when a parent asks.
`,
};
