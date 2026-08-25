import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots for Consultants: Research and Deliverable Drafts',
  description:
    'AI bots for consultants can run the research and draft the pack. What they cannot do is carry a claim without a source or move between two client engagements.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Bots for Consultants: Research and Deliverable Drafts

It is Tuesday. Two engagements are live, a proposal is due Friday, and there is
a steering deck on Thursday that needs a market sizing you half remember, three
competitor profiles, and a benchmark from a report you cannot find again. You
will spend six hours retrieving things you already knew and ninety minutes
writing the four pages that carry the actual thinking. Then someone in the
steering meeting asks where a number came from, and you spend Friday morning
reconstructing your own research.

That is the shape worth automating: the retrieval, not the thinking, and the
reconstruction, which should never have been necessary. A consultant is an
agency of one with a stricter confidentiality regime, a personal name on every
page, and nobody in the middle to catch a mistake before it reaches the client.

## Separate the retrieval hours from the thinking hours

Five kinds of work, and the ratio between them is the whole problem.

Retrieval. Finding sources, checking whether a number is current, rebuilding the
context of an engagement you were last in a fortnight ago. Enormous, feels
unbillable, and it is what fills your evenings.

Synthesis. Turning twelve findings into the one sentence a client acts on. This
is the product, it is fast, and it is the only part that is genuinely yours.

Production. Charts, formatting, consistency passes, making the appendix match
the body. Mechanical and endless.

Client contact. Interviews, steerings, the awkward mid-engagement conversation.
Relationship work, and the reason you get called back.

Selling the next piece, which loses to Thursday's deck every single week.

Bots take retrieval, a good deal of production, and none of the other three. The
line is sharper than in most roles because your deliverable carries your name
rather than a firm's, and because the failure modes below land on you
personally.

## Staff six seats per engagement and give each one a stop line

| The job | What the bot owns | Where it stops | Start from |
|---|---|---|---|
| Market and company research | Builds an evidence pack per question, with a source on every claim | Never contacts anyone, research and ranking only | [Lead Scout](/bots/lead-scout) |
| Pre-steering rundown | Assembles what has moved around the client's business since the last session | Never contacts anyone at the account, rundowns go to you alone | [Account Media Rundown](/bots/account-media-rundown) |
| Long-form input | Digests the hour-long interview recording, the analyst call, the sector podcast | Summaries go to you alone, it never posts or shares anything | [Podcast Summarizer](/bots/podcast-summarizer) |
| Engagement memory | Carries decisions, open questions, and the client's own vocabulary week to week | Never stores secrets, tokens, passwords, or customer data in memory | [Persistent Bot Memory](/bots/persistent-bot-memory) |
| Engagement inbox | Sorts what arrived, drafts the replies that need one, tracks who owes you what | Never sends an email, every draft waits for explicit approval | [Inbox Triage](/bots/inbox-triage) |
| Call attendance | Joins a session you sent it to and captures what was said | Only joins meetings you explicitly send it to, always identifying itself as your bot | [Meeting Double](/bots/meeting-double) |

That last boundary is the whole provenance argument in one line, and it is worth
holding onto: a bot in a client conversation that does not announce itself is a
recording of people who did not agree to be recorded. In several jurisdictions
that is a legal problem rather than an etiquette one.

The research build underneath the first row, including how a brief earns the
right to be read, is worked through in
[the overnight research setup](/blog/grok-bot-to-lead-research). What memory
should and should not retain is in
[the guide to bot memory](/blog/grok-bot-memory).

## Build the seat that matches where your practice actually loses hours

Six seats is the full roster and nobody should start with six. Which one comes
first depends on the shape of your practice, and those shapes differ more than
the job title suggests.

| If your practice looks like | Build this first | Hours it returns in a normal week | The risk it introduces |
|---|---|---|---|
| Research-heavy diligence and market work | Research pack | Four to six, and they are evening hours | Fabricated sources, which is why the source line is mandatory |
| Interview-led change and transformation work | Long-form input | Two to three, plus you stop re-listening to recordings | Attribution errors inside a client's politics |
| Retainer advisory across several accounts | Engagement memory | One to two, spread across every context switch | A memory file that starts naming two clients |
| Delivery-heavy, decks and models | Nothing yet | Zero honestly | Production is where provenance gets muddled fastest |
| Sales-constrained, plenty of delivery capacity | Pre-steering rundown | One to two, and it makes the meeting better | Reading a public page as though it were briefed insight |

The fourth row is the one people dislike and it is the honest answer. Formatting
and chart production are exactly the work you want to hand over, and they sit
closest to the finished artefact, where a bot reaching for the nearest similar
slide is most likely to reach into another engagement. Build the research and
input seats first, then revisit production after a clean quarter.

## Assume both engagements are running on one machine, because they are

Sequential engagements in one sector are the consulting business model. They are
also the confidentiality risk, because the thing that makes you valuable to
client B is exactly the thing you promised client A you would not carry over.

The runtime does not help you here, and it is better to know that now. All bots
on your account share one persistent cloud computer, assigned to your user
account rather than to any individual bot. Browser cookies, signed-in sessions,
files, and command line credentials are shared across all of them. Each bot gets
its own screen, and the documentation says plainly that the screens are separate
work surfaces rather than separate security boundaries, and that separate bots
should not be used as a security boundary. Deleting a bot leaves the shared
files and browser sessions in place, and there is no audit view of bot actions
yet, so nothing reconstructs what was touched except a log you keep yourself.

Four habits carry the weight.

One folder per engagement, named in the charter as an exhaustive allowlist, and
a bot that stops rather than searching elsewhere when a file is missing.

No cross-engagement memory. The memory file names one client and never mentions
another. This is the same discipline
[the agency roster](/blog/bots-for-agencies) needs across a live client list,
one engagement at a time instead of seven at once.

An end-of-engagement wipe on a written checklist, run on the day the work
closes: clear the folder, sign out the sessions, delete the exports, remove the
client's materials. Nothing about closing an engagement or deleting a bot does
any of that.

And the rule consultants specifically need, because the temptation is real: the
bot may read your framework and template library, never a delivered
deliverable. Reusing a structure is your intellectual property. Reusing the
slide because it was the best version of that chart is how client A's numbers
end up in client B's appendix. Keep the two locations apart and put the
prohibition in the charter, not in your memory of good intentions.

Before any of this, read your engagement terms. NDAs increasingly say something
specific about where client material may be processed and which subprocessors
are permitted, and some public sector terms prohibit hosted AI systems outright.
That is a contract question rather than legal advice from an article, and it is
much cheaper to ask at proposal stage.

## Open an engagement in one folder and close it on a written checklist

The four habits above only hold if they are attached to two moments that already
exist in your calendar: the day the engagement starts and the day it ends. Left
floating, they become intentions.

Day one is five minutes. Create \`/engagements/<CODE>/\` with \`questions/\`,
\`materials/\`, and \`packs/\` inside it. Write the engagement code into the charter
as the only path the bot may write to. Create the memory file with the client
named at the top and a line saying no other client may appear in this file.
Decide, before anything is running, which of your framework templates the bot may
read, and confirm none of them contain a client's numbers, because a template
that was cloned from a delivered deck usually does.

The last day is the one that gets skipped, so it needs to be a list rather than a
resolution.

| Close-out step | Why the runtime will not do it for you |
|---|---|
| Move the engagement folder off the machine and delete the working copy | Files live on a computer assigned to your account, not to a bot |
| Sign out every client system the bot used, in the browser it used | Cookies and signed-in sessions are shared across every bot on the account |
| Delete exports, downloads, and scratch files outside the engagement folder | Nothing sweeps them, and they are the copies you will forget |
| Clear or archive the engagement memory file | Memory persists independently of any single piece of work |
| Retire the bot only after the four steps above | Deleting a Bot does not remove shared-computer files or browser sessions |
| Save your own run log of what the bot touched | As of writing there is no audit view of Bot actions |

That last row changes what you can promise. If a client asks in March what your
automation touched in November, the only answer available is a log you decided to
keep. Have every bot append one line per run inside the engagement folder: date,
what it read, what it wrote, what it refused. The refusals are the interesting
column, because that is where you find out the boundary is doing work.

## A claim with no source is a liability with your name on it

The research failure is not a wrong answer you notice. It is a fluent,
plausible, precise-sounding number sitting in a document with your name on the
cover, and it survives because it reads exactly like the true ones.

Models produce these because the shape of the sentence is more predictable than
the fact inside it. "The European market was valued at 4.2 billion in 2024,
growing at 11 percent annually" is a sentence pattern before it is a claim. The
defence is structural: no claim travels without a source line, and the source
line has to contain enough to be checked in ten seconds.

Publisher, title, publication date, URL, and the verbatim sentence the claim
came from. Add two fields most people leave out and then regret. The type of
source, because vendor marketing and a national statistics office are not the
same evidence wearing different fonts. And the as-of date of the underlying
data, which is frequently years earlier than the publication date, and is the
difference between a current figure and a historical one presented as current.

Seven fields, and each one exists because something specific goes wrong without
it.

| Field on every claim | What its absence lets through |
|---|---|
| Publisher and title | A citation nobody can find again, including you |
| Publication date | A figure from 2019 presented in a 2026 deck as current |
| URL | A source that technically exists and cannot be reached in a meeting |
| The verbatim sentence | A paraphrase that quietly moved the number or dropped a qualifier |
| Source type | Vendor marketing standing in for evidence because it was formatted like a report |
| As-of date of the underlying data | A historical measurement read as this year's, the most common error in market sizing |
| Access status | A confident paraphrase of a page the bot could not open |

The last row looks like bureaucracy and is not. Making "could not open" a
first-class output value converts a silent failure into a visible one, which is
the difference between a gap you fill and a gap you discover in a steering
meeting.

Two specific traps. Secondary source laundering, where a bot cites a blog post
that cites a consultancy summary that cites a survey nobody can reach: require
the primary, and where it is unreachable, force the claim to open with "as
reported by" so the hedge is visible in the sentence rather than in a footnote.
And paraphrasing a statistic from a source that would not load, which produces
a claim with a real URL attached to a number nobody verified. Make "could not
open" a first-class output.

Then check, because none of the above works unattended. Pick three claims per
pack, open the sources, and confirm the sentence exists as quoted. Watch one
number over time: how many claims you delete at review. If that number is zero
for several weeks, you are not reviewing, you are approving.

## Know the provenance of every section before a client asks for it

Nobody owes a client a disclosure that a spreadsheet added a column. The
question is where between that and a ghostwritten recommendation the line
actually falls, and it is worth having an answer before a client asks for one in
a room.

The defensible position has three parts. You know, for every section, which
parts were machine-assembled. You have personally verified every claim you
present as your own work. And when asked, you answer immediately and plainly,
because hesitation is what turns a reasonable practice into a discovered one.

That first part costs almost nothing to maintain. Keep a provenance line in your
working file per section: assembled by bot, verified by me, written by me. It
takes seconds while you work and it is the difference between answering the
question in four seconds and going quiet in a steering meeting.

Check the contract too. A growing number of master services agreements and
procurement terms now require disclosure of AI assistance, restrict it to named
categories of work, or ban it for the deliverable itself. Finding that out at
proposal time is a scheduling problem. Finding out at delivery is a different
kind of conversation.

The asymmetry underneath all of this is what makes it worth the discipline. If a
client discovers machine-assembled content you presented as original research,
the damage is not the content. It is that they now recalculate everything else
you have ever told them, including the parts you did yourself at midnight.

## Never hand over the recommendation, the attribution, or the client-facing page

The recommendation. That is the product, and the entire fee.

Anything that reaches the client, including the pre-read, the "quick summary
before Thursday", and the follow-up note after a steering.

Interview attribution. A summariser that renders "one senior leader felt the
programme was mismanaged" can attach a view to the wrong person inside a
client's politics, which is the most damaging error available to you in a change
engagement.

Anonymity you promised. If interviewees were promised confidentiality, their
transcripts do not go anywhere you have not checked, and a synthesis that says
"a member of the leadership team" in a company of forty is not anonymous at all.

Any number you will be asked to defend that came out of a process you cannot
reproduce. If you cannot show the working, do not show the number.

Proposals and pricing. The scope you commit to and the rate you charge are the
two sentences with the longest tail.

Anything written into the client's own systems using the access they granted
you. Their trust in your judgment does not extend to your automation.

Regulated advice. If you advise in a licensed domain, a bot draft is still your
advice with your name on it, and the licence is yours to lose.

Cross-engagement benchmarking, including anonymised comparisons, for the same
reason it fails at an agency: inside a niche, anonymised is a puzzle with one
answer.

And the quiet one: reviewing your own bot's output at 11pm the night before
delivery. That is not a review, and everyone who has done it knows the feeling
of finding out in the meeting.

## Paste the research pack charter and test it on a question you already answered

\`\`\`text
You are my Research Pack bot for ONE engagement: <ENGAGEMENT CODE>.
You assemble evidence. You never draw conclusions and you never speak
to anyone.

// TRIGGER
On demand, when I add a question file to
/engagements/<ENGAGEMENT CODE>/questions/.

// WHAT YOU MAY READ, EXHAUSTIVE
- The question file.
- Public web sources.
- /engagements/<ENGAGEMENT CODE>/materials/   (what the client gave me)
- /library/frameworks/                         (my templates, which
                                                contain no client data)
You may not open another engagement folder, any delivered
deliverable, or any file naming another client. If you think a useful
source sits outside these paths, name it and stop.

// OUTPUT -> /engagements/<ENGAGEMENT CODE>/packs/<YYYY-MM-DD>.md
For each question, up to <5> findings. Every finding has:
  CLAIM:    one sentence, no adjectives, no implication.
  QUOTE:    the sentence from the source, verbatim.
  SOURCE:   publisher, title, publication date, URL.
  TYPE:     primary / secondary / vendor marketing / opinion.
  AS OF:    the date the underlying data describes, not the
            publication date. If they differ, print both.
  ACCESS:   opened in full / paywalled / could not load.

Never paraphrase a statistic from a source you could not open. If only
a secondary source is reachable, set TYPE to secondary and begin the
CLAIM with "As reported by <publisher>,".

Then two closing sections, both mandatory:
NOT FOUND: every question you could not evidence, and where you
looked. This may not be left empty for convenience.
CONTRADICTIONS: sources that disagree, both quoted, unresolved.
Resolving them is my job, not yours.

// WHERE YOU STOP
You never contact a person, company, or source, and never fill in a
form, request a demo, or create an account.
You never write recommendations, conclusions, an executive summary, or
"so what" commentary.
You never produce client-facing pages, slides, or emails.
You never copy text from a past deliverable.
You never write to a path outside /engagements/<ENGAGEMENT CODE>/.

If a task cannot be completed without crossing one of those lines,
stop, say what you would have done, and wait. Failing is the correct
outcome. Do not find another route to the same effect.
\`\`\`

Run it first on a question you already answered last month, and compare its pack
against what you actually used. You are checking two things: whether the sources
are real, and whether the findings it selected are the ones that mattered.

## Match the symptom to the habit that would have prevented it

Research bots fail in a small number of recognisable ways, and each one has a
habit attached rather than a longer instruction.

| Symptom | The actual cause | The fix |
|---|---|---|
| A source the bot cannot load that opens fine in your browser | Bot traffic leaves on static egress IPs, and some services flag datacenter addresses | Record ACCESS as could not load, never paraphrase it, and fetch that one yourself |
| Findings that read like recommendations | The output template leaves room for commentary | Cap every finding at claim, quote, source, and forbid so-what lines outright |
| A pack citing a blog citing a summary citing a survey | Secondary source laundering | Require the primary, or make the claim itself open with "As reported by" |
| A NOT FOUND section that is always empty | The bot is optimising to look complete | State that it may not be empty for convenience, then read it first |
| A file from another engagement appearing in a pack | The read allowlist was a description rather than a list of paths | Exhaustive paths only, and a stop rather than a search when something is missing |
| Three weeks with zero claims deleted at review | You are approving rather than reviewing | Open three sources at random before you read the pack itself |

The last row is the one to watch, because it is the only symptom on the list that
looks like success while it is happening.

## The strongest objection is that separation destroys the reuse you sell

The honest argument against the confidentiality section: consultants are paid for
pattern recognition across clients. The third engagement in a sector is faster,
sharper, and worth more than the first, and that is legitimate value rather than
leakage. A rule stopping your bots crossing engagements appears to attack the
exact asset you sell.

The objection would be right if the line ran between learning and not learning.
It does not. It runs between the abstraction and the artefact.

Your framework library is the abstraction. You wrote it, you stripped the client
out deliberately, and it is the accumulated form of what twelve engagements
taught you. A delivered deliverable is that same framework fused with one
client's facts, and the fusion is not reversible by a reader who was not there.
You can look at a slide and know which figures were the client's and which were
illustrative. A bot cannot, and it will take the whole slide because it is the
closest match to what you asked for.

So the rule stands and it is narrow: the bot may read your framework library,
never a delivered client deliverable. The maintenance burden it creates is real
and worth naming, because most people's template library was built by cloning
finished decks. Go and check yours for live numbers before you point anything at
it, and strip what you find.

Two places the objection wins outright. Inside a single engagement, reuse
everything, previous versions of the deck included, since no boundary is being
crossed. And public benchmarks are public: a figure your client could have read
on a regulator's website does not become confidential because you learned it
while working for them.

## Test the boundary by asking for something it should refuse

A boundary you have never seen fire is a boundary you are assuming. Four checks,
none of which takes more than a few minutes.

Ask the research bot, while it is pointed at engagement B, a question that can
only be answered from engagement A's materials. The correct outcome is that it
names the path it would have needed and stops. If it answers, your allowlist was
written as a description rather than as a list of paths, and it has been a
suggestion all along.

Ask any bot to list every file it opened during its last run and compare that
list to the allowlist. Anything outside it is a finding, not a curiosity.

Search the engagement folder and the memory file for the other client's name,
their product names, and the names of their people. Do it before delivery, since
afterwards it is a disclosure rather than a fix.

And keep watching the deletion count. A month in which you deleted no claims is a
month in which the review stopped happening, whatever your notes say. The general
form of that argument, that an approval you never exercise is not a control, is
in [approval gates that actually hold](/blog/approval-gates-for-bots).

## This breaks down on subcontracts and inside a client's own systems

Every rule above assumes one shape: your engagement, your machine, your terms.
Four common situations break it, and in all four the answer is to slow down
rather than adapt the charter.

Subcontracting through a prime consultancy. Your NDA is with the prime, the data
usually belongs to the end client, and permission to process it in a hosted
system may not be the prime's to grant either. Ask in writing, and ask before the
work starts.

Working inside a client's own tenancy on access they issued to you personally.
Their systems, their logs, their rules, and their security team's assumptions
about who is at the keyboard. Access granted to you was not granted to your
automation, and that distinction is the whole of
[least privilege translated for bots](/blog/least-privilege-bots).

Regulated advice. If your work sits in a licensed domain, the draft is still your
advice, the licence is still yours, and no charter language changes either.

The clean-room requirement. Some clients require that materials never leave a
named environment, and a hosted runtime on a shared computer cannot satisfy that.
Say so at proposal stage. It is a much better conversation than the one where you
discover it at delivery.

**Keep reading:** [Bots for Sales Reps](/blog/bots-for-sales-reps), [Bots for Writers](/blog/bots-for-writers), [Bots for Solo Founders](/blog/bots-for-founders).

## Frequently Asked Questions

### Can consultants use AI bots for client work?

For retrieval and production, yes, and that is where the hours go. A bot can
assemble an evidence pack per research question, digest a long recording, carry
engagement context between weeks, and draft the mechanical parts of a
deliverable. It should not write the recommendation, produce anything that goes
to the client unread, or handle interview attribution. Check the engagement
terms first, because NDAs and procurement rules increasingly specify where
client material may be processed and whether AI assistance is permitted at all.

### How do you keep two client engagements separate when using bots?

Not by using two bots. Every bot on an account shares one persistent cloud
computer with shared files, cookies, and signed-in sessions, and the
documentation says directly that separate bots are not a security boundary.
Separation comes from one folder per engagement named as an exhaustive allowlist
in the charter, memory files that never mention a second client, a rule that the
bot may read your template library but never a delivered deliverable, and a
written wipe checklist run on the day an engagement closes.

### Should you tell a client that a bot helped produce a deliverable?

Know it yourself, verify everything you present as your own, and answer plainly
the moment you are asked. Keeping a provenance note per section, marking what
was assembled, what you verified, and what you wrote, costs seconds and prevents
the pause that turns a reasonable practice into a discovered one. Check the
contract too, since many agreements now require disclosure or restrict AI use
for deliverables. The real risk is not the assistance, it is a client
recalculating everything else you told them.

### How do you stop a research bot from inventing sources?

Make every claim carry a checkable source line: publisher, title, publication
date, URL, and the verbatim sentence. Add the source type, so vendor marketing
is not mistaken for a statistics office, and the as-of date of the underlying
data, which is often years before publication. Forbid paraphrasing a statistic
from a source that would not open, and require unreachable primaries to be
labelled as reported by whoever is quoting them. Then verify three claims per
pack yourself, and watch how many you delete.
`,
};
