import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots for Writers: Research, Outlines, and Repurposing',
  description:
    'The AI bots for writers worth running: source sweeps, outlines, and repurposing queues, plus the one part of the job you should never hand to a machine.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Bots for Writers: Research, Outlines, and Repurposing

## Only six hours of a writing week are actually writing

You publish two pieces a week. The part where sentences get made is maybe six
hours of that week. The rest goes somewhere less flattering: opening forty tabs
to find the four that matter, chasing a source who has not replied, checking
whether you already made this argument in March, turning one essay into a
newsletter and a thread and a post, and invoicing for the piece you filed nine
days ago.

That distribution is the opportunity and the trap at the same time. The thirty
hours are recoverable because most of them are retrieval, comparison, and
format conversion, all of which have checkable outputs. The six hours are not
recoverable, because they are the only part of the week a reader is actually
paying for.

So the rule for a writer's roster is narrower than the rule for most roles.
A bot is welcome anywhere its output is an input to you. It is unwelcome
anywhere its output is the thing the reader sees. Every recommendation below
sits on one side of that line, deliberately.

## Staff six jobs, and keep four of them away from the reader

Six jobs worth handing over, with the catalog listing to adapt rather than
start from a blank charter. Note that four of the six never produce a
reader-facing word at all.

| Job | What the bot owns | Where it stops | Start from |
|---|---|---|---|
| Source sweep | Long interviews, talks, and podcast episodes turned into timestamped notes | Summaries go to you alone, nothing is posted or shared | [Podcast Summarizer](/bots/podcast-summarizer) |
| Beat watch | What was published on your subject this week, and what changed on the pages you cite | Reads public pages only, never interacts with them | [Competitor Website Watch](/bots/competitor-website-watch) |
| Angle bank | Ten framings for a topic, with the two that are already crowded marked | Ideas and outlines only, never publishes | [Content Idea Generator](/bots/content-idea-generator) |
| Signal read | Which arguments on your beat are landing, and with whom | Reads only, never posts, likes, or replies from your account | [Viral Tweet Scout](/bots/viral-tweet-scout) |
| Pipeline status | What is drafted, filed, awaiting edit, and overdue | Never publishes, every change waits for your review | [Content Planner Manager](/bots/content-planner-manager) |
| Repurposing queue | Derivatives proposed from work you already published | Nothing goes out automatically, each one needs approval | [Evergreen Content Flywheel](/bots/evergreen-content-flywheel) |

Two of these are enough to start, and the pair to start with is the source
sweep and the beat watch, because they attack the biggest single block of
non-writing time and their output is trivially checkable.

## Delegate by who reads the output, not by how hard the task is

Most delegation advice sorts work by difficulty, which is the wrong axis here. A
bot writing a headline is doing something easy and unforgivable. A bot reading
four hours of transcript is doing something tedious and completely safe. The
question that sorts correctly is simpler: when this output exists, who reads it?

| The task | Who reads what comes out | The call |
|---|---|---|
| Finding and screening sources | You | Delegate fully. A bad result is visible in one click |
| Deciding which sources matter | You | Delegate the shortlist, keep the choice. Ask for reasons, not rankings |
| Proposing angles | You | Delegate. Ten framings is a thinking aid and you will reject eight |
| Choosing the angle | You, but it decides what the reader gets | Keep. This is the piece |
| The outline | You | Delegate. Even a wrong one earns its ninety seconds |
| The sentences | The reader | Keep. This is the only part that is not now in infinite supply |
| The headline | The reader | Keep. It is the shortest, most concentrated sample of your voice you will publish |
| A pitch to an editor | An editor, reading it as a writing sample | Keep. The most expensive possible place to sound like everyone |
| Derivative proposals | You first, a reader only after your rewrite | Delegate the proposal, keep the publishing |

Two rows get handled wrong in opposite directions. The headline gets delegated
because it is short, and short reads like low stakes, when it is the line most
readers judge you on. Source screening gets kept because it feels like craft,
when it is mostly reading things to learn they were irrelevant.

The awkward case is the last row, because the answer changes halfway through.
Repurposing starts as a job whose output you read and ends as a job whose output
a reader sees, which is exactly where the boundary has to sit.

## Research is the surface where a bot earns its keep

Research is retrieval plus triage. Both are verifiable in seconds, which is
exactly the property that makes a job safe to delegate: you can tell a good
output from a bad one at a glance, so you will keep checking in week six.

The format that makes it verifiable is a claim line that carries its own
receipt. For every assertion, the bot returns the source name, the URL, the
publication date, and the sentence it is standing on, quoted. Nothing else
counts as research. A paragraph of fluent summary with no links attached is not
a research artifact, it is a guess with good posture, and the failure is
invisible precisely because fluent wrongness reads better than a hedge.

There is a practical wrinkle worth designing around. The runtime uses static
egress IP addresses, and some services flag datacenter addresses, which means a
research bot will occasionally be blocked from a page it can see the headline
of. The right behaviour is a line in the report saying which sources it could
not open. The wrong behaviour, and the default behaviour of any model asked for
a summary, is to fill that gap from memory. Write the instruction explicitly:
report what you could not read, never reconstruct it.

## Structure is safe, sentences are not

An outline is a claim about the shape of an argument. You can read one in
ninety seconds and know whether it is right, and even a wrong outline is
useful, because disagreeing with a proposed structure is one of the fastest
ways to discover what you actually think.

A draft paragraph does not have that property. A paragraph you half agree with
costs more to fix than to write, because you have to unpick someone else's
sentence rhythm before you can put your own back. This is the practical reason
to keep bots at the outline layer, before any argument about voice.

Ask for the outline in a shape that exposes gaps rather than hiding them. For
each section: the claim, the evidence in hand, the evidence still missing, and
the strongest objection. The missing-evidence column is the part that changes
your week, because it turns "I should research this" into three specific
lookups you can finish before lunch.

## Voice is the only part of this job that has not been commoditised

Every role has one risk that is specific to it. For a writer it is not
accuracy, which is checkable, and it is not speed. It is that a bot drafting in
your name produces prose that sounds like nobody.

Work through what a reader is actually buying and the stakes get clearer.
Information is not it: the facts in your piece are in ten other pieces, usually
free, usually faster. Structure is not it either, because a competent outline of
any subject is now available to anyone who asks for one. What is left, and the
only thing left, is the specific person doing the noticing. The judgement about
which detail matters. The willingness to say the unhedged version. The rhythm
that makes one paragraph land and the next one turn. That is what somebody
subscribes to, and it is the one input that cannot be produced from a prompt
because it is not a technique, it is an accumulation.

The economics point the same way. Competent, voiceless prose is now in effectively
infinite supply, and the price of anything in infinite supply falls toward its
marginal cost, which here is roughly nothing. Competing on that axis means
competing where you have the least possible advantage. Meanwhile the supply of
work that could only have come from one person has not increased at all, which
is the only market position worth defending.

There is a second-order cost too. Voice is what makes you findable by the people
who pay you: the editor who remembers a line, the reader who forwards a
paragraph. Nobody forwards median prose. It is not bad, it simply never creates
the occasion.

## Voice goes gradually, which is why the guard has to be structural

The way it goes wrong is not dramatic, which is why people miss it. Generic
prose is easy to approve. You do not reject the draft, you tweak it: swap a
word, cut a clause, ship it. Do that twice a week for three months and the
archive reads like a content mill, and there is no single piece you can point
at where it happened. The gradualness is the mechanism.

Look closely at that moment of approval, because it is where the whole thing
turns. Editing a competent draft is genuinely easier than writing a paragraph
from nothing, and the result is genuinely publishable. There is no point at
which you make a bad decision. You make the same reasonable decision eighty
times, on eighty deadlines, each of them defensible on its own, and the sum of
them is a body of work that could have been produced by anyone. The failure has
no event in it, which means there is nothing for your judgement to catch.

That is precisely the argument for a structural rule rather than a careful
habit. A habit is a decision you make when you are tired, and tired is when the
draft looks good enough. A structural rule is a decision you already made when
you were not tired, and it only has to hold once.

So the line is not "the bot must write well". It is: the bot may produce
anything you will read, and nothing a reader will read, until you have written
it yourself. Every listing in the botskills.sh catalog declares that kind of
line as a boundary, and for writing bots the boundary is close to the whole
design. If you want the phrasing that makes a boundary hold up under pressure,
[writing a boundary that actually constrains a bot](/blog/grok-bot-boundaries)
covers it.

The rule has a useful side effect. Denied sentences, the bot has to hand you
something else, and what it hands you is better: gaps, objections, the argument
you already made in March and forgot. You end up with a research assistant
rather than a co-writer, which is the role that was actually vacant.

## Audit the drift with a test that can fail

Nobody catches gradual drift by intending to. Two checks catch it, and both are
cheap enough to run quarterly.

The first is the byline test. Take five paragraphs from a piece you wrote before
any of this, five from something you published last month, strip the titles and
the dates, and hand them to somebody who reads you. Ask which set is which. If
they shrug, you have your answer, and you got it from the only judge that
matters, which is a reader rather than your own sense of the work.

The second is a checklist, because the tells are consistent. Prose that has
drifted has a texture, and the texture has parts.

| The tell | What it looks like on the page | The fix that costs least |
|---|---|---|
| Uniform sentence length | Everything between fifteen and twenty-five words. No fragments. No very long one | Read it aloud. Break one sentence in five, deliberately |
| Symmetry everywhere | Triads, and the "not just X, but Y" construction, several times a page | Delete the third item in every list of three. Most were there for rhythm |
| Hedging as default | "can be", "often", "many would argue", "it is worth noting" | Say the thing or cut the sentence. A hedge you cannot justify is filler |
| Transitional scaffolding | Paragraphs opening with "Moreover", "That said", "Ultimately" | Cut the first sentence of each paragraph and check whether anything was lost |
| Categories instead of instances | "various platforms", "certain industries", "a major provider" | One named noun per paragraph. Name it or drop the claim |
| Nothing quotable | No line anyone would send to a colleague | This is the summary symptom, not a separate one. If nothing is quotable, the rest of the table already told you why |

Run it against your own last three pieces before anything a bot touched. Half
the time the drift predates the bot, which is worth knowing, because then
removing the tool fixes nothing.

## Repurposing without republishing yourself

Repurposing looks like the exception, because the source material is your own
published work and the judgment involved seems mechanical. It is the safest
generative task on the list, but it is not free, and it fails in a specific
way: a thread version of an essay is not a compression of the essay, it is a
different piece with a different argument shape, and a bot that treats it as
compression produces something that is technically accurate and completely
inert.

Three rules keep the queue honest. One derivative carries one idea, not a
summary of five. Nothing goes out the same day as the original, because the
derivative should be written against how the original actually landed. And
every derivative links back, which keeps the incentive pointed at the work
rather than at the platform.

The bot's job in all three is proposal. It finds the candidate, extracts the
passage, and drafts a version you rewrite. Nothing about that requires
publishing rights, so it should never hold them.

## The research and outline charter, pasteable

This is the highest-value single bot for most writers. It runs overnight
against the topic you queued, and you read it with coffee.

\`\`\`text
ROLE
You are my research and outline assistant for a working writer.
You produce material I read. You never produce material a reader reads.

TRIGGER
Every weekday at 06:00, process the top item in my "queued topics" note.
If the queue is empty, do nothing and say so in one line.

INPUTS
- The queued topic and my one-line angle for it
- Public web sources published in the last 24 months, plus primary
  documents of any age (filings, specs, transcripts, papers)
- My own published archive, to flag where I have covered this before

OUTPUT, in this order
1. PRIOR ART: any piece of mine within one topic of this, with the date
   and the argument I made then. If I have contradicted myself, say so.
2. CLAIM TABLE: 8 to 15 rows. Each row is one factual claim, the source
   name, the URL, the publication date, and the exact sentence it rests
   on, quoted.
3. COULD NOT READ: every source I asked for or you found that would not
   open, blocked, paywalled, or timed out. Name it. Do not fill the gap.
4. OUTLINE: 5 to 7 sections. For each: the claim, the evidence from the
   claim table by row number, the evidence still missing, and the
   strongest objection a knowledgeable reader would raise.
5. OPEN QUESTIONS: the three things I would need to ask a human to know.

RULES
- No claim without a row in the claim table. No row without a URL.
- Never paraphrase a source you could not open.
- Never write body prose, an intro, a conclusion, or a headline.
- Quote at most one sentence per source, in quotation marks, attributed.

BOUNDARY
You never publish, post, send, or schedule anything, anywhere, ever.
You never contact a source, an editor, or a reader on my behalf.
\`\`\`

The third output block is the one people delete because it looks like an
admission of failure. Keep it. A named gap costs you one lookup, and a silently
filled gap costs you a correction with your name on it.

## Expect the first month to be mostly charter edits

The first week is not the bot working, it is you finding out what you actually
meant. Here is the shape of it.

Day one, the 06:00 output is too long and slightly wrong. The claim table has
fourteen rows, four of which are the same fact from four aggregators repeating
one press release, which is the characteristic failure of a first run. The
outline is competent and generic, because the angle line you queued was "write
about X" rather than an argument. You spend twenty minutes reading it and get
one usable thing: a paper from 2023 you had not seen.

Week one is charter work. You add a rule that primary sources outrank coverage
of them, and that four rows citing the same original count as one row. You start
writing the angle line as a sentence with a verb in it, which changes the
outline more than any other single edit you will make. You notice the "could not
read" block is empty every day and get suspicious, so you queue a topic you know
has a paywalled source, and check.

By week three the pattern is stable and the value has moved. You stop reading
the outline first and start reading the prior art block, because being told what
you argued fourteen months ago is the output nothing else produces. The claim
table becomes a lookup rather than a read: you scan the URLs, open two, and get
on with it.

By week four you will know which of two states you are in. Either the outline is
something you write from, in which case the setup has paid for itself several
times over, or it is something you skim and abandon, in which case the fault is
almost certainly the angle line and not the charter. Fix the input twice. If it
still fails, retire the bot and keep the source sweep, which almost never
disappoints because retrieval is the part machines are genuinely better at.

## Recognise the five ways a research bot fails

None of these look like failure while they are happening, which is the point of
listing them.

| What you notice | What is actually happening | What to do |
|---|---|---|
| A cited URL does not say what the row says it says | The claim drifted from the source during summarising, which is the failure that ends careers | Open ten rows at random every week. Below nine out of ten, retire the bot |
| The "could not read" block is always empty | Gaps are being filled silently instead of reported | Test it deliberately with a source you know is paywalled. A perfect record here is a warning, not a result |
| Every outline has the same five sections | The angle you queued was a topic, not an argument | Fix the input. Rewriting the charter will not fix a vague brief |
| The prior art block never fires | The archive is not reachable, or matching is too strict | Test with a subject you know you covered. If it misses that, it will miss everything |
| Derivatives read like summaries of the original | One derivative is carrying five ideas instead of one | One idea per derivative, written against how the original landed |

There is a sixth that has no row because it has no symptom you would notice: you
stop reading the output. Nothing breaks, the file still arrives at 06:00, and
the cost carries on. Retire it the week you notice, not the month after.

## What not to automate if you write for a living

This is the opinionated part, and the list is shorter and harsher than the
roster above.

The sentences. Not the first draft, not the "just get something on the page"
draft, not the newsletter because it is only the newsletter. The blank page is
the job.

The thesis. A bot proposing angles is a research tool. A bot deciding which
angle is right has taken the one decision that makes the piece yours.

Contacting a source. Never let a bot email an expert, a PR contact, or an
interviewee. A source's willingness to talk to you is a relationship, and it is
also the thing you burn first if a machine sends them a slightly wrong message
signed with your name.

Pitches. An editor reads your pitch as a sample of your writing, because it is
one. This is the single most expensive place to sound like everyone else.

Reading the primary thing. The book, the transcript, the filing, the report.
A summary of a summary is where wrongness enters and it never announces
itself.

Corrections. When you get something wrong, the correction is a piece of
character. It is not a formatting task.

If you are running a whole business alone and want the surrounding setups
rather than just the writing ones,
[the one-person company guide](/blog/one-person-company-grok-bot) has the
non-writing half.

## Answer the volume argument, because it is the real one

The strongest case against everything above is not that machines write well. It
is that they write enough. Somebody on your subject publishes five times a week
to your two, and if attention follows volume, keeping the sentences is a
principle you pay for in reach. That deserves better than dismissal.

It wins in specific places, and they are identifiable. Where the value of a
piece is that it exists rather than that it is good: reference material,
release notes, roundups, coverage where being first matters more than being
read. Where the reader wants an answer and does not care who is speaking. Where
consistency across hundreds of pages is the actual product, which is what good
documentation is. In those settings a distinctive voice is not an asset, it is
noise, and the machine is the correct tool.

It loses where the reader chose you specifically. Essays, criticism, reporting,
newsletters people opted into, anything somebody reads because of the byline
rather than despite it. In that market, doubling output with prose that sounds
like everyone does not double reach, it dilutes the reason anyone subscribed.
The competition is not the other writer publishing five a week. It is the
enormous and growing supply of adequate pieces on your subject, and adding to
that supply is not a way to stand out from it.

There is also a timing asymmetry worth being clear-eyed about. The volume play
gets weaker as more people run it, because it depends on being unusual. The
voice play gets stronger as more people run the volume play, for exactly the
same reason. If you are choosing a strategy for the next three years rather than
the next quarter, those two curves are pointing in opposite directions.

And one honest exemption. If you ghostwrite, the voice you are protecting is
someone else's and the calculus changes: your job is fidelity to a person who is
not you, which is a different skill and a different set of checks. The byline
test still applies, you just run it against their archive rather than yours.

## Measure two things, and retire the bot if they fail

Two numbers, both cheap to keep, both worth more than any impression you have
about whether the bot is helping.

First, the link check. Take ten claim rows at random from a week of output and
open every URL. You want ten for ten on links that exist and say what the row
says they say. At nine you have a tuning problem. At eight or below the bot is
a liability, because you are now the fact checker for a machine that is
supposed to be saving you time.

Second, the outline-use rate. Across ten pieces, how many outlines did you work
from mostly unchanged, versus discard? Below half is fine at the start and not
fine by piece thirty, and the fix is almost always the angle line you feed in
rather than the charter.

Watch the cost side too. A subscription includes a weekly usage allowance and
overflow is billed on demand from model and token cost, so a research bot
producing output you stopped reading in week three is worse than no bot: it
costs money and it makes you feel covered. If nobody reads it, retire it.

**Keep reading:** [What Is a Grok Bot? The Plain Explanation for Non-Engineers](/blog/what-is-a-grok-bot), [Bots for Consultants](/blog/bots-for-consultants), [Bots for Sales Reps](/blog/bots-for-sales-reps).

## Frequently Asked Questions

### What can AI bots actually do for writers?

The reliable wins are retrieval and triage, not composition. A bot can sweep
long interviews and talks into timestamped notes, watch the pages and
publications on your beat for changes, propose angles with the crowded ones
flagged, track what is drafted versus filed versus overdue, and propose
derivatives of work you already published. Each of those produces something you
read and act on, and each is checkable in under a minute. The composition
itself, meaning the actual sentences a reader sees, is where the value of a
writer now sits and where delegation costs the most.

### Should a bot write the first draft?

No, and the reason is practical before it is romantic. A paragraph you half
agree with is more expensive to repair than an empty page, because you have to
unpick someone else's sentence rhythm before your own will fit. The blank page
is where you find out what you think. Have the bot deliver an outline with
claims, evidence, gaps, and the strongest objection to each section, then write
from that. You keep the speed benefit of not starting cold and you keep the
part of the job that is actually yours.

### How do I keep an AI bot from flattening my voice?

Draw the line structurally rather than relying on judgment in the moment. The
bot may produce anything you will read and nothing a reader will read, and that
rule goes in the charter as an explicit boundary on publishing, posting, and
sending. Voice loss is gradual and comfortable: generic prose is easy to
approve, so you tweak rather than reject, and three months later the archive
has drifted with no single piece to blame. A structural line survives a tired
Thursday. An intention to edit carefully does not.

### Can a research bot be trusted with citations?

Only if the format forces the receipt. Require every claim to arrive as a row
carrying the source name, the URL, the publication date, and the exact quoted
sentence it rests on, and require a separate block listing every source that
would not open. The runtime uses static egress addresses and some sites refuse
them, so blocked pages are normal and a bot asked for a summary will otherwise
fill the gap from memory. Then verify: pull ten rows a week at random and open
every link. Ten out of ten is the bar.
`,
};
