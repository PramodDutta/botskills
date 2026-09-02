import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'One Sentence a Day, Written From Evidence',
  description:
    'A work journal a bot writes from what actually changed, not what you remember. Why one line, why it must have no audience, and what it is good for.',
  date: '2026-09-02',
  category: 'Tutorial',
  content: `
# One Sentence a Day, Written From Evidence

Every work journal fails the same way. It starts detailed, becomes a chore by day nine, gets skipped on the busy days that were worth recording, and is abandoned inside a month with a gap exactly where the interesting part was.

The version that survives is one sentence, written by a bot, from evidence rather than memory, into a file with no audience. Each of those four constraints is doing work, and dropping any one of them is how you get back to the thing that fails.

## Keep it to one line, because length is what kills it

The instinct is that more detail is more valuable. For a journal it is the opposite, because the binding constraint is not how much you can write, it is whether you will write anything on the day you least want to.

A one-line entry costs nothing on a bad day. A paragraph costs enough that you skip it, and the days you skip are systematically the busy, difficult, unusual ones, which are precisely the days worth having a record of. A journal with the hard days missing is worse than no journal, because it reads as though nothing hard happened.

| Format | Survives a bad day? | What you end up with |
|---|---|---|
| Free-form paragraph | No | Three good weeks, then nothing |
| Structured template | No | Compliance for a fortnight |
| One sentence | Yes | A continuous year |
| One sentence, written for you | Yes, reliably | A continuous year you did not maintain |

## Write it from what changed, not from what you remember

This is the part a bot is genuinely better at, and the reason to automate it rather than just shorten it.

A journal written from memory at the end of the day records how the day felt. A journal written from evidence records what occurred. Those diverge most sharply on exactly the days you would want an accurate record: a day that felt unproductive but shipped something, or a day that felt busy and moved nothing.

So the bot reads what actually changed. Commits, documents edited, pages moved, tickets closed, whatever sources you have connected. Then it writes one sentence naming the single thing that moved most.

Facts first, and no interpretation. The interpretation is yours to do later, when you read the year back, and it will be better for not having been baked in daily by something that could not see the context.

## Give it no audience, ever

The single rule that determines whether this stays useful: nobody else reads it.

The moment an entry has a reader it becomes performance. Not deliberately, and not because anyone is dishonest. It is automatic. A line written knowing a manager might see it gets shaped, and a shaped record is a record of how you wanted the day to look, which is the thing you already had and did not need a bot for.

So it is not a standup post. It does not go in a channel. It is not a status update, and it is not the input to one. It is a file you own, that only you open, and the value is entirely downstream of that.

If somebody wants a status update, write one. Separately, deliberately, and knowing it is for them. Do not let the two become the same artefact, because the honest one always loses.

## Record the quiet days honestly

The temptation, on a day where genuinely nothing moved, is to write something anyway. Resist it in the charter rather than relying on willpower.

A quiet day recorded as quiet is useful information three months later. Five of them in a row is very useful information, and it is invisible if each was papered over with the most defensible-sounding thing available.

\`\`\`
You are Work Journal. Each evening you write one sentence about
what actually changed today, into one file. Nobody else reads it.

Sources: the ones the operator connected. Read what changed today.

Rules:
1. One sentence. Not two. If you cannot say it in one, name the
   single biggest thing and drop the rest.
2. Write from what the sources show, never from what the operator
   said during the day. Their account and the record disagree most
   on the days worth recording.
3. If nothing moved, write that nothing moved. Do not find
   something defensible to say. A quiet day is data.
4. Facts only. No assessment of whether the day was good, no
   encouragement, no framing. The operator does that later.
5. Append with the date. Never overwrite, never reorder, never
   tidy an earlier entry.

You never post this anywhere, never share it, never summarise it
into a status update, and never mention its contents in any other
output. It has one reader.
\`\`\`

Rule five matters more than it looks. An append-only file is a record; a file the bot may revise is a story, and it will drift toward coherence.

## Read it back monthly, and only monthly

Daily entries are close to worthless individually. That is fine and expected. The value is in the series, and the series needs enough length to show anything.

Once a month, read the last month as a list. Do not ask the bot to summarise it or find patterns, and do not let it editorialise. Read the raw lines yourself. The patterns that matter will be obvious and they will be yours, and a bot's summary would flatten precisely the outliers you are looking for.

What people typically find in the first month is unremarkable: they were busier on some weeks. What they find in the third is not, because by then there is enough series to see that a whole category of work never appears, or that the thing they think of as their main job shows up in four entries out of sixty.

## Watch a quarter of one-liners contradict a performance review

Nadia kept the journal for a quarter and read it before writing her self-review.

Her impression of the quarter was that she had spent it on a migration. That was the thing she thought about, the thing she talked about, and the thing she was going to write up.

The journal had sixty-one entries. The migration appeared in nine. What appeared in thirty-one, in various forms, was unblocking other people: reviews, questions answered, decisions made for teams that were not hers.

Neither picture was false. The migration was the thing she had been thinking about, and thinking about something is genuinely effortful. But the record of what moved said her quarter was mostly spent on something she had not counted as work at all, and would not have mentioned.

She wrote a different review. What made that possible was not insight, it was sixty-one lines nobody had shaped, including the twelve that said nothing moved today.

## Use it for the questions memory answers badly

The journal is not for general reflection. It is for a specific class of question where recall is known to be unreliable.

| Question | Memory answers | Journal answers |
|---|---|---|
| What did I do this quarter? | The most recent and most memorable | What actually recurred |
| When did this problem start? | Roughly, wrongly | The date |
| How long did that take? | Underestimates, always | Start and end entries |
| Was last month unusual? | No baseline to compare | Eleven other months |
| What do I actually spend time on? | What I identify with | What recurs in the lines |

The last row is the one that surprises people, and it is the one Nadia hit. There is usually a gap between the work someone identifies with and the work that fills their entries, and the gap is only visible with a record nobody curated.

## Keep the file boring and portable

Plain text, one line per day, dated, in a file you control. Not a database, not a tool, not something with a schema.

Two reasons. It has to survive changing jobs, tools, and bot products, and the only formats that reliably do are the dull ones. And it has to be readable in thirty seconds by scrolling, because a monthly read that requires opening an application is a monthly read that stops happening in March.

The bot appends. You read. That is the whole system, and its longevity is a function of how little there is to break.

## Expect the first month to feel pointless

It will, and this is worth saying because most people stop in week three.

For the first month the entries look trivial. Each one is a single unremarkable line, and reading them back tells you things you already knew because they happened recently. There is no visible payoff, and the natural conclusion is that the whole thing is not worth it.

The payoff arrives at the point where the series exceeds your recall, which is somewhere around eight to ten weeks. Before that the journal is competing with memory and losing. After that it is the only source, and it becomes the thing you check rather than a duplicate of what you already know.

So judge it at three months, not at three weeks. And do not add detail in the meantime to make it feel more valuable, because that is the change that kills it before it gets there.

## Choose the sources deliberately, because they decide the bias

The journal records what its sources can see, so the choice of sources is the choice of what your quarter will appear to have contained.

| Source connected | What it surfaces | What it hides |
|---|---|---|
| Code repository only | Shipping, refactors, reviews | Everything not in code |
| Documents and notes | Decisions, drafts, thinking made visible | Work that stayed verbal |
| Calendar | Who you spent time with | What came of it |
| Ticket tracker | Assigned, delivered work | Unassigned work you absorbed |
| Messages | Unblocking others, questions answered | Nothing much, but noisy |

The pattern worth noticing: the last row is where most of the invisible work lives, and it is also the noisiest source and therefore the one most likely to be left out. Nadia's finding, that a third of her entries were unblocking other people, only existed because messages were connected.

Connect at least one source that captures interaction, not just artefacts. Otherwise the journal produces a confident, well-evidenced, systematically incomplete picture, which is more misleading than a thin one because it looks thorough.

## Do not let it score, streak or encourage

Three features will suggest themselves within a fortnight and all three ruin it.

A streak counter turns the journal into a game, and the moment there is a streak to protect the incentive is to make sure something gets written rather than to record what happened. A quiet day becomes a threat to the number.

A score, of any kind, converts a record into an assessment. Then the entries start being written for the score, which is the audience problem in a different costume, and this time the audience is you.

Encouragement is the subtlest. A bot that adds a line of framing to a quiet entry is interpreting, and interpretation compounds: read back over a quarter, sixty small reassurances have quietly edited the record into a nicer quarter than the one you had.

The instruction is plain: append the fact, add nothing, and never count anything.

## Let it stay boring, and resist improving it

The last failure mode is enthusiasm, and it usually arrives around month two when the thing starts working.

The improvements suggest themselves easily. Categorise the entries. Add tags. Track time. Produce a weekly rollup. Every one is reasonable, and every one moves the artefact away from a line you glance at toward a system you maintain.

The journal's entire advantage is that it costs nothing. A maintained system costs something, and the cost is paid on the busy days, which is where the record breaks. If you find yourself wanting more structure, the honest read is that you want a different tool for a different question, and you should build that separately and leave the journal alone.

The version that is still running in three years is the one you never improved, and the reason is not discipline. It is that nothing about it ever required any.

## Decide what to do with the entries you disagree with

Some evenings the line will be wrong, or at least not what you would have written, and how you handle that decides whether the record stays honest.

| Disagreement | What to do | Why |
|---|---|---|
| The bot picked the wrong biggest thing | Append your own line beneath it | Both readings are now on the record |
| A source was misread | Append a correction, dated | The error is informative later |
| The day felt bigger than the record | Leave it, add nothing | This gap is the point of the exercise |
| Something genuinely invisible happened | Append one line yourself | Ten seconds, and it fills a known blind spot |

The third row is the one to hold to. The urge to add "but I also spent four hours on X" is strongest exactly when the record disagrees with your sense of the day, and that disagreement is the most valuable thing the journal produces. Editing it away restores the impression you already had and discards the only evidence that contradicted it.

Appending is always fine. Editing an existing line is not, and the difference is that an append leaves both versions visible while an edit replaces the record with the memory. If you find yourself wanting to rewrite an entry from last week, that impulse is worth noticing rather than acting on: you are reconciling the record to recollection, which is the direction the whole thing exists to resist.

## Answer the objection that a bot cannot see the work that matters

The strongest version: the important parts of a job leave no trace in commits or documents. A hard conversation, a decision not to build something, an hour spent thinking. A journal built from artefacts will systematically record the visible work and miss the valuable work, and its picture will be biased toward whatever happens to be legible.

That is true and it is a real limitation, not one to argue away.

Two things reduce it without pretending it is solved. The bot can read more than commits: notes, calendar entries and messages all leave traces of conversations and decisions, and connecting those narrows the gap considerably. And you can append your own line on any day the record misses something, which takes ten seconds and is much more likely to happen than maintaining a full journal, because you are correcting rather than composing.

But the honest position is that the journal records what moved, and some of what matters does not move anything visible. Read it as evidence of one kind rather than as a complete account. It is still far better than recall, which is biased in ways you cannot inspect at all, and at least this bias is known and points in a consistent direction.

Where the objection wins outright: if your work is almost entirely conversational, with few artefacts, the journal will be thin and misleading and you should not build it.

## Stop using this page when the shape is different

This page is a private record written from evidence. It stops applying in three places.

If the output has an audience, it is a status update rather than a journal, and every rule here inverts. If you want to know what your bots did rather than what you did, that is a different instrument and [bot observability](/blog/bot-observability) covers it. And if the question is which of your bots is worth keeping rather than what you spent your time on, that is [the quarterly cull](/blog/the-quarterly-roster-cull).

Bots that help: [One Line Standup](/bots/one-line-standup) is this pattern as a listing, including the no-audience rule and the no-streak rule. [Chief of Staff Router](/bots/chief-of-staff-router) is where you would route a request to it. [Persistent Bot Memory](/bots/persistent-bot-memory) covers keeping context across sessions, which is a related but different problem. And [Standup Scribe](/bots/standup-scribe) is the audience-facing counterpart, deliberately kept separate.

## Frequently Asked Questions

### Why only one sentence a day?

Because the constraint that decides whether a journal survives is not how much you can write, it is whether you write anything on the day you least want to. A paragraph costs enough to skip, and the days people skip are systematically the busy or difficult ones, which are exactly the days worth recording. A journal missing its hard days is worse than none, since it reads as though nothing hard happened. One sentence costs nothing on a bad day, and a continuous year of thin entries beats three excellent weeks followed by silence.

### Why should nobody else read it?

Because the moment an entry has a reader it becomes performance, automatically and without anyone being dishonest. A line written knowing a manager might see it gets shaped, and a shaped record is a record of how you wanted the day to look, which is the thing you already had. Keep it in a file only you open. If somebody needs a status update, write one separately and deliberately, knowing it is for them. Do not let the two become the same artefact, because the honest one always loses that merge.

### What should the bot do on a day when nothing happened?

Write that nothing moved, and write it plainly. This needs to be an explicit rule rather than left to judgment, because a bot asked to describe the day will find something defensible to say, and a papered-over quiet day is indistinguishable from a productive one in the record. Five quiet days in a row is genuinely useful information three months later, and it is completely invisible if each was filled with the most plausible available line. A quiet day recorded as quiet is data.

### When does this start being worth anything?

Around eight to ten weeks, which is roughly when the series exceeds your own recall. Before that the journal is competing with memory and losing, so the entries feel trivial and reading them back tells you things you already knew. That is why most people abandon it in week three. After that point it becomes the only source rather than a duplicate, and it starts answering questions memory answers badly: when a problem started, how long something took, and what you actually spend your time on as opposed to what you identify with.
`,
};
