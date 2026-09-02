import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Sourcing That Stops Before the First Message',
  description:
    'A sourcing bot that researches people and never contacts them. Where the line sits, what claims you can record, and why regional rules make this narrow.',
  date: '2026-09-02',
  category: 'Safety',
  content: `
# Sourcing That Stops Before the First Message

There is a version of candidate sourcing that a bot does well, and it ends before anything reaches a human being.

Assemble a list from sources you are allowed to read. Record what each source says, with a link. Note whether the stated experience matches what the role needs. Hand the list to a recruiter. Stop.

Everything after that point, the first message, the follow up, the judgement about whether somebody is worth approaching, belongs to a person. Not as a courtesy, and not because the drafting would be poor, but because that is where responsibility for contacting a stranger has to sit. This article is about why that line sits exactly there, and what a charter looks like that holds it.

## The line is not about capability

A bot could draft outreach. It could personalise it, send it, and follow up on a schedule. The reason not to is not that the drafting would be bad.

It is that contacting people about employment is a regulated act in most of the world, the rules differ by where the person is rather than where you are, and the consequences of getting it wrong land on your employer rather than on your tooling. Automated outreach at volume also produces a predictable second effect: it degrades the channel for everybody, including you, six months later.

So the boundary is drawn at the point where a stranger becomes aware of you. Research is one side. Contact is the other.

| Activity | Bot | Person |
|---|---|---|
| Read public professional profiles | Yes | |
| Record stated experience with a link | Yes | |
| Match stated skills against a role | Yes | |
| Rank or shortlist | Yes, with reasons stated | |
| Infer anything not stated | | Neither, see below |
| Write the first message | | Yes |
| Send anything | | Yes |
| Follow up | | Yes |

The third row from the bottom is the one people miss. There are things neither the bot nor the person should be doing, and inference about individuals is most of them.

## Sourced claims only, and what that actually means

The single most important charter rule for anything that researches people: every statement about a person must carry the source it came from.

Not "eight years in payments infrastructure" but "profile states eight years in payments infrastructure, link". The difference reads like pedantry and it is the whole safety mechanism, because it makes the bot structurally incapable of producing the thing you most need it not to produce: a confident claim about a person that nobody can check.

| Acceptable output | Why |
|---|---|
| "Profile lists Senior Engineer at X, 2021 to present" | Stated, attributable |
| "Conference bio describes work on payments systems" | Stated, attributable |
| "Public repo shows commits in Go and Rust" | Observable, attributable |
| "Likely open to a move" | Inference about a person, no source |
| "Probably based in Berlin" | Inference, and location is sensitive |
| "Seems junior for the title" | Judgement about a person, unsourced |

The bottom three are not merely unhelpful. A written inference about an individual, stored in a document, is a record you now hold about a person who never gave it to you, and it will be read by somebody as if it were fact.

The charter line that produces this:

> Every claim about a person must be quoted or paraphrased from a named source with a link. If a source does not state it, do not write it. Never infer employment status, willingness to move, age, location, or personal circumstances.

## What the bot must never touch

Beyond inference, some categories are off the list entirely regardless of whether a source states them.

Anything that maps to a protected characteristic in the jurisdictions you hire in: age or anything that proxies for it, such as graduation years used as a birth year estimate. Health, disability, pregnancy. Ethnicity, religion, national origin. Sexual orientation. Union membership. Political affiliation. Criminal record. Family or caring responsibilities.

Some of these are visible on public profiles. Visible is not the same as usable, and a graduation year sitting on a page you are allowed to read does not become a legitimate input to a hiring decision because it was easy to find. The distinction people get wrong here is between what a source published and what you are entitled to act on: those are separate questions with separate answers, and a bot that treats every readable field as a usable one collapses them.

> Do not record, infer, or use: age or graduation year, health or disability, ethnicity, religion, national origin, sexual orientation, political or union affiliation, criminal record, family or caring status. If a source volunteers any of these, omit it rather than quoting it.

Note the last clause. Omitting is not the same as quoting with a caveat. If the summary contains the information at all, it is available to whoever reads the summary, and the caveat does not help.

## Regional rules make this narrower than you expect

The rules follow the candidate. A recruiter in one country sourcing someone in another is subject to the second country's regime, and several of them treat what you are doing here as processing personal data with obligations attached.

This article is not legal advice and it should not be your only input. What it can tell you is the shape of the exposure, so you know what to ask about.

| Where the person is | What tends to bite |
|---|---|
| European Economic Area and UK | Lawful basis, notice, retention limits, subject access |
| Several US states | Notice, deletion rights, sale and sharing definitions |
| Canada | Consent expectations, purpose limitation |
| Elsewhere | Varies widely, check rather than assume |

Two practical consequences fall out of this regardless of jurisdiction, and they are worth building in even before you take advice.

Retention. A list of researched people is a store of personal data and it should have a stated life. Write the deletion date into the charter and into whatever holds the output. "Delete candidate research older than ninety days unless the person entered a process" is a defensible default and it is dramatically better than the usual answer, which is that a spreadsheet from March is still in a shared drive.

Purpose. The list was assembled for one role. Reusing it for a different role next quarter is a new purpose applied to data gathered under an old one, and it is the most common quiet violation in recruiting workflows. If you want a reusable pool, that is a different thing that needs its own basis and its own notice.

## Where the bot stops and the recruiter starts

The handover is the design decision that makes the whole thing safe, so make it explicit rather than implied.

The bot produces a list. Each row has a name as published, a link to the source, the stated facts relevant to the role, and nothing else. There is no draft message in the output. There is no contact detail lookup. There is no scoring that reads as a verdict on a person rather than a match against stated requirements.

The recruiter reads the list, decides who to approach, and writes to them as a person writing to a person, having formed their own view of whether this is somebody worth approaching at all. That is not an inefficiency to be optimised away later. It is the step where a human being takes responsibility for contacting a stranger, and it is the reason this workflow is defensible.

[talent-scout](/bots/talent-scout) in the catalogue is built to this shape, and [lead-scout](/bots/lead-scout) applies the same research-then-stop pattern to companies rather than people, which is a materially easier problem because companies are not data subjects. The talent version, and the boundary line in it is the load bearing part rather than the search instructions. If you adapt it, keep the boundary and change the criteria. The reverse, keeping the criteria and loosening the boundary, is how these turn into something you would not want described back to you.

## Do not go looking for contact details

Worth its own section because it is the most common drift.

Once you have a list of names, the obvious next automation is finding email addresses. Resist it. Assembling contact details for people who did not publish them, at volume, is the step that converts research into a database, and it is separately regulated in several places.

If the person published a way to contact them for professional purposes, a recruiter can use it, having decided to. That is different from a bot compiling addresses for two hundred people in advance of anyone deciding anything.

> Do not search for, guess, or compile contact details. If a source publishes a professional contact method, note that one exists and where. Do not extract it into the output.

## Two more rules that keep this honest

Two smaller things that are easy to add and prevent specific failures.

First, no ranking without reasons. A list sorted by a score with no explanation invites the reader to treat the score as truth. Every position should carry the stated facts that put it there, so a recruiter can disagree with the ordering by reading it.

Second, name what the search missed. A bot that searched four sources and could read three should say so, by name, at the top rather than in a footnote nobody reaches. Otherwise the list looks like the complete set of relevant people, and it is the complete set of people findable in three of four places on one afternoon. That distinction matters when somebody asks why an obvious candidate is not on it.

| Rule | Failure it prevents |
|---|---|
| Sourced claims only | Confident fiction about a real person |
| No protected characteristics | Discriminatory input, recorded |
| No contact detail compilation | Research becomes a marketing list |
| No inference about individuals | Unfalsifiable judgements in a document |
| Stated retention window | A permanent store nobody owns |
| Reasons alongside ranking | A score treated as a verdict |
| Report what could not be read | A partial list read as complete |

## Write the role requirements before you write the search

The quality problem in sourcing bots is almost never the search. It is that nobody wrote down what they were looking for with enough precision to check an answer against.

"Senior backend engineer, payments experience" is not a specification. It produces a list that looks plausible and cannot be argued with, because there is nothing concrete to disagree about. The recruiter reads forty rows, forms an impression, and the bot's contribution was to make the impression faster rather than better.

Write the requirements as things a source can state. Not "strong systems thinking" but "profile or public writing describes work on distributed systems at scale". Not "startup fit" but "has worked at a company under one hundred people". Each requirement should be answerable yes, no, or not stated from a page.

| Vague requirement | Stateable version |
|---|---|
| Senior | Title includes Senior, Staff, Principal, or Lead |
| Payments experience | Profile names a payments employer or product |
| Strong communicator | Has published talks or writing, with links |
| Good culture fit | Not stateable, remove it |

The last row is the useful one. Requirements that cannot be turned into something a source states are requirements a bot should not be evaluating, and often ones a person should be careful about too. Dropping them from the bot's brief is not a limitation, it is the exercise revealing that the criterion was doing no work except licensing a gut call.

## Keep a record of what the bot searched

Separate from the candidate list, keep the search itself: which sources, which terms, which date, and what the requirements were on that date.

Two reasons. The mundane one is repeatability. Six weeks later somebody asks why a particular person was not surfaced, and without the record the honest answer is that nobody knows. With it, you can see that the source they are on was not searched, or that a requirement excluded them, and either is a real answer.

The second reason is that a sourcing process which cannot describe its own method is difficult to defend if anybody ever asks whether it was applied evenly. A dated record of identical criteria applied across a set of sources is a much better position than a spreadsheet of names with no provenance.

Keep the record with the list, and delete both on the same schedule. A method log that outlives the data it describes is just clutter.

## Assume the candidate will read the file

A useful test for anything a sourcing bot writes: would you be comfortable if the person it describes read the row about themselves, verbatim, tomorrow.

This is not hypothetical in every jurisdiction. Where subject access rights apply, a person can ask what you hold about them, and "an internal research note" is not a category that exempts anything. But the test is worth applying even where no such right exists, because it catches the same problems that the legal exposure catches, faster and without a lawyer.

Sourced facts pass the test easily. "Profile states five years at a payments company" is something the person wrote about themselves. Inferences fail it immediately, and the way they fail is instructive: the discomfort you feel reading "seems unlikely to move for less than a large increase" back to the person it describes is the same discomfort a regulator would articulate more formally.

Run the test on a sample of ten rows before you trust a new charter. If any row makes you wince, the rule that produced it needs changing, not the row.

## Answer the objection that this makes the bot barely useful

The honest version of the objection: strip out outreach, contact details, and inference, and what is left is a bot that reads some pages and makes a list, which a person could do in an afternoon.

Partly true, and the afternoon is the point. The tedious part of sourcing is the reading, and the reading is what compresses well. Twenty roles a quarter, each needing three hours of profile reading, is sixty hours of work that turns into structured lists with sources attached, and the recruiter's time moves to the part that needs a person.

The other half of the answer is that the constrained version is the one that survives scrutiny. A sourcing workflow that produces sourced, checkable, non-inferential lists is one you can describe to a candidate, to your legal team, and to a regulator without editing. That property is worth more than the outreach automation, because the outreach automation is the part that would get switched off in the first uncomfortable conversation anyway.

## Common questions

### Can the bot read LinkedIn profiles?

Whether a specific site permits automated reading is a question about that site's terms and its technical controls, and it changes. Check the terms of any source you intend to read, respect what the site technically allows, and treat a source that requires a signed in session as a decision rather than an obstacle. The shared computer is shared across your account, so signed in sessions, files and command line credentials are shared with every Bot on that account, and leaving a personal account signed in to serve a sourcing bot has consequences beyond that bot.

### Is it safe if the bot only drafts messages and a person sends them?

Safer, and still not where I would draw it. A drafted message that a person skims and sends is a person taking responsibility for text they did not write, and at volume they stop reading. If you do it anyway, keep the volume low enough that reading each one is real, and keep the draft free of anything the sources did not state.

### What retention period should we use?

Ask whoever handles data protection where you work, because the defensible answer depends on your basis and your jurisdiction. In the absence of that, ninety days for research on people who never entered a process is a reasonable starting position, and any number written down and enforced beats no number.

### How do I stop the list being reused for a different role later?

Put the role and the date at the top of every output, and make the deletion rule automatic rather than discretionary. Reuse happens because the file is still there and somebody is in a hurry. If it is not there, the question does not arise, and rebuilding it for the new role costs a bot run.

## When this page stops applying

Grok Bot is in beta and the mechanics will move. What will not move is the underlying position: researching people who published information about themselves is defensible, contacting them at machine volume is not, and the interesting engineering is in making the first one produce output somebody can check.

The rules that matter here would apply to a script, a virtual assistant, or an intern with the same list of instructions. If you take one line from the page, take the sourced claims rule. Almost every bad outcome in this area starts as a sentence about a person that no source ever said, and that rule makes the sentence impossible to write.

For the broader recruiting picture, [bots for recruiters](/blog/bots-for-recruiters) covers the workflows around this one, and [a boundary is not a permission](/blog/a-boundary-is-not-a-permission) explains why the lines above belong in a charter and also belong in your access controls.
`,
};
