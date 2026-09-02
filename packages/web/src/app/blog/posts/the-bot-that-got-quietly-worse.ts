import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'When a Bot Still Runs and Its Output Has Been Sliding',
  description:
    'Degradation is not a stall. The bot keeps producing on schedule, the quality declines, and nothing errors. How to notice, and the four causes.',
  date: '2026-09-02',
  category: 'Guide',
  content: `
# When a Bot Still Runs and Its Output Has Been Sliding

A bot that stops is easy. Output stops arriving, somebody notices within a day, and you fix it.

The expensive failure is the one where everything keeps working. The routine fires, the document updates, the format is unchanged, and the content has been getting slowly worse for six weeks. Nothing errors, because from the bot's point of view nothing has gone wrong.

## Separate degradation from the failures that announce themselves

Three different things get called a broken bot and only one of them is hard.

| Failure | How you find out | Time to notice |
|---|---|---|
| Stopped running | Output stops arriving | A day, usually less |
| Errored | An error appears in the output | Immediately |
| Frozen mid-run | It never finishes | Hours |
| Degraded | Nothing. It looks the same | Weeks, if ever |

The first three have a signal. Degradation has an absence, and absences are invisible until somebody deliberately looks for one. That is the entire difficulty.

## Know the four causes, because they need different fixes

Almost all quiet degradation traces to one of four things.

**A source became unreadable.** A page moved behind a login, a feed consolidated, an export dropped a column. The bot reports what it can still see, which is less than before, and says nothing about the gap.

**The world changed shape.** The bot's instructions still make sense but the thing they were written against does not. A selector-based extraction after a redesign, a rule about a field that got renamed.

**A threshold outlived its situation.** A number chosen when conditions were different, still applied faithfully. This is the one that produces a bot which is technically correct and practically useless.

**The bot learned your blind spot.** Where a bot adapts to what you engage with, it will stop surfacing what you consistently skip, including the things you were skipping wrongly.

| Cause | Symptom in the output | Fix |
|---|---|---|
| Source unreadable | Thinner, same confidence | Source line in every output |
| World changed shape | Odd or empty sections | Re-read the instructions against reality |
| Stale threshold | Nothing ever triggers | Re-derive the number |
| Learned your blind spot | A category quietly absent | Monthly surprise audit |

## Instrument the output so an absence becomes visible

The single highest-value change, and it costs one line in the charter.

Require the bot to list, in every output, which sources it read successfully and which it could not. Not a status page. A line in the artefact somebody is already reading.

That converts the most common cause from invisible to obvious. A brief that has been quietly thinner for a fortnight now says, at the bottom, that two of its five sources have been unreadable since the 14th.

\`\`\`
Append to every charter that reads external sources:

At the end of every output, list:
  READ:        the sources you successfully read this run
  UNREAD:      the sources you could not read, and why
  UNCHANGED:   sources that returned identical content to last run

Rules:
1. Never print a zero for a source you could not read. Print
   could-not-read. A zero is a finding; an unread source is not.
2. If a source has been unreadable for three consecutive runs,
   say so explicitly rather than listing it again quietly.
3. If your total output is materially shorter than last run, say
   so in one line at the top with both word counts.
\`\`\`

Rule three is unusually effective for how crude it is. Degradation is nearly always accompanied by shrinkage, and a bot that reports its own length trend gives you a monitor for free.

## Watch a brief thin out over six weeks

Marcus ran a weekly competitor brief across five sources. It had run for four months and was read every Monday by three people.

In week nine one source, a pricing page, moved behind a login. The bot could still load the URL. What loaded was a login screen, which it summarised competently as containing no pricing changes.

Weeks nine through fourteen produced briefs that were about fifteen percent shorter and reported no pricing movement at all from that competitor. Nobody noticed, because a brief saying nothing changed is a perfectly normal brief and there were four other sources filling the space.

It surfaced in week fifteen when someone mentioned a price change in a call and the brief had never carried it. Six weeks of a confidently incomplete artefact that three people had been reading as complete.

The two lines that would have caught it: a source list at the bottom, and a length comparison at the top. Neither is clever, and together they cost about a minute to add.

## Compare against an old output, not against last week

The natural check is to compare this week to last week, and it is nearly useless for degradation, because degradation is gradual. Each week looks like the last one.

Compare against something three months old. The difference will be obvious in seconds if there is one, and invisible in a week-to-week comparison however carefully you look.

Make this a habit rather than an investigation: once a month, open the oldest output you still have alongside the newest, and read both. Four minutes, and it is the only reliable way to see a slope. Put it in whatever recurring review you already run rather than trusting yourself to remember, because a check that depends on remembering is a check that lapses in exactly the busy months when a bot is most likely to have drifted unattended.

## Distrust a metric that has stopped moving

A specific and counterintuitive signal: a number that used to vary and now does not.

When a bot reports a figure that moved around for months and has been steady for six weeks, the intuitive read is stability. The more common explanation is that whatever produced the variation stopped reaching the bot. A flat line is much more often a broken input than a stable world.

The same applies to a threshold that used to fire occasionally and has fired nothing this quarter. That is not necessarily good news, and it should be checked with the same suspicion as a spike. A monitor that has gone quiet is either reporting that the world improved or reporting nothing at all, and those two states look identical from the outside. Verify which one you have before treating the silence as reassurance, because only one of them is.

## Ask what has changed on the other side

Bots read other people's systems, and those systems change on their own schedule with no notification to you.

| What changes | How often | What it breaks |
|---|---|---|
| Page structure and markup | Constantly | Anything reading a page |
| Login requirements | Occasionally, without warning | Everything behind the new wall |
| Export formats and columns | At release boundaries | Rules referencing a column |
| Feed consolidation | Rarely, permanently | The source, entirely |
| Product behaviour | On the vendor's schedule | Assumptions in the charter |

None of these produce an error on your side. They produce a bot doing exactly what it was told against something that is no longer the thing it was told about.

The practical habit is to re-read the charter against reality quarterly. Not the output, the instructions: open each source yourself and check that the thing the charter describes is still what is there. Reading the output tells you what the bot produced; reading the sources tells you what it had to work with, and only the second one reveals a gap the bot never mentioned because it never knew about it.

## Keep a sample of good output as a reference

The comparison only works if you kept something to compare against. Save one output a quarter, labelled, somewhere that is not the working document the bot overwrites.

This costs nothing and it is the difference between "this feels thinner" and "this is thirty percent shorter and missing two sections". The first gets argued about; the second gets fixed.

It also matters at handover. Somebody inheriting a bot has no idea what good looked like, so they cannot detect a slope at all, and a labelled reference output is the single most useful thing you can leave them. Without one they will assume whatever they receive on their first Monday is normal, and calibrate every subsequent judgement against an artefact that may already have been sliding for a month before they arrived.

## Expect the bot to be confident either way

Worth stating plainly because it is the mechanism that makes this hard: the output does not sound less certain when the inputs get worse.

A brief built on five sources and a brief built on the three that still load are written in the same voice, with the same structure, at the same apparent level of confidence. There is no linguistic tell, because the bot is not aware of the difference either.

That is why the defence has to be structural rather than editorial. You cannot read your way to noticing this, however carefully. You need the source list, the length line, and the old-output comparison, because all three surface facts the prose cannot.

## Watch for the reader who stopped reading

There is a human half to this that the instrumentation does not cover, and it usually arrives first.

Before anybody notices an output has got worse, they stop reading it carefully. That happens gradually and for ordinary reasons: the artefact has been reliable for months, so it earns a skim rather than a read, and a skim cannot detect a slope. By the time the content is meaningfully degraded, the readership has already degraded to a level that would not catch it.

| Reader behaviour | What it detects |
|---|---|
| Reads it fully, week one | Almost anything |
| Skims the summary, week six | Only dramatic changes |
| Checks it exists, week twelve | Nothing at all |
| Quotes it in a meeting | Discovers the problem publicly |

The last row is how these usually surface, and it is the most expensive way to find out.

There is no fix for attention decay, because it is rational: an artefact that has been right forty times does not deserve the same scrutiny as a new one. What you can do is stop relying on it. That is the whole argument for the source line and the length line, which report facts a skim still picks up, precisely because a careful read is not going to happen indefinitely.

## Give it a canary the bot cannot satisfy by accident

For anything important enough, plant something you know the answer to.

Add one source, or one query, whose correct output you can verify in a glance. A page you control that always contains a specific string. A search whose top result you know. A record with a value you set deliberately.

Then the check is trivial: if the canary result is right, the pipeline is reading; if it is missing or wrong, something upstream broke regardless of how healthy everything else looks. It converts a subjective judgment about quality into a binary you can check in two seconds.

The important property is that the bot must not be able to produce the right canary answer from memory or inference. It has to require actually reading the thing, which is why a value you change occasionally works better than a static one. A canary the bot can guess is worse than none, because it will pass while everything behind it fails.

## Decide what to do once you find it

Finding the slope is most of the work, and the response still has a decision in it that people skip.

The instinct is to fix the source and carry on. Often correct. But a bot that has been degraded for six weeks has produced six weeks of output that other people may have acted on, and the repair does not address that.

| Question | Why it matters |
|---|---|
| How long has it been degraded? | Bounds what needs revisiting |
| Who read it during that window? | They may have acted on it |
| Was anything quoted onward? | The error may have travelled |
| Is the artefact still available? | Corrections need something to point at |

Tell the readers. Not elaborately, one message saying the brief was missing a source between these dates and here is what it missed. That is a small, slightly awkward message that prevents a much worse conversation later, when somebody discovers independently that a thing they repeated was wrong.

The awkwardness is the reason people skip it, and it is worth naming: nobody enjoys saying that something they produced was incomplete for six weeks. But the alternative is that the incompleteness stays in circulation, attached to your name, with nobody knowing to discount it.

## Fix the class, not the instance

Last thing, and it is what turns one incident into a durable improvement.

When a source moves behind a login and you repair that one source, you have fixed an instance. Every other source in every other bot can do the same thing tomorrow and you will find out the same way.

Fixing the class means adding the source line and the length line to every charter that reads anything external, not just the one that broke. That is a twenty minute pass over the roster and it retires the entire failure mode rather than one occurrence of it.

The same logic applies to the canary and the archived reference output. Each is cheap per bot, and the value is in coverage rather than depth: a roster where every bot reports what it could not read is a roster where this class of failure has a signal, and a roster where one bot does is a roster where you got lucky once.

## Answer the objection that this is a lot of monitoring for a small bot

The fair version: source lists, length comparisons, quarterly re-reads and archived references is a substantial apparatus around something that produces a weekly summary. Most bots are not worth this, and adding it everywhere is how a light tool becomes a maintained system.

Largely right, and the split is about consequence rather than size.

If the output is read by one person who would notice it going odd, skip most of this. A single reader with context is a genuinely good degradation detector, and the apparatus is redundant.

It earns its place when the output is read by people who cannot check it, feeds a decision, or is quoted onward. There the failure is not that the artefact got worse, it is that somebody acted on a confidently incomplete one and nothing in it warned them. Marcus's brief had three readers and was quoted in a customer call, which is exactly that shape.

The cheap subset for everything else: the source line and the length line. Two instructions, no ongoing effort, and they catch the most common cause. Skip the quarterly re-read and the archive unless the bot matters.

## Stop using this page when the shape is different

This page is about a bot that still runs while its output slides. It stops applying in three places.

If the bot has stopped or frozen rather than degraded, that is a different diagnosis with an actual signal, and [stuck bot foreman](/bots/stuck-bot-foreman) separates waiting from broken. If nobody reads the output at all, degradation is not the problem and [the bot nobody owns](/blog/the-bot-nobody-owns) is the right page. And if you have just inherited the bot and cannot tell whether it was ever good, start with [taking over someone else's bot](/blog/taking-over-someone-elses-bot), because you need a baseline before you can detect a slope.

Bots that help: [Bot Advisor](/bots/bot-advisor) reviews the roster and names what went silent, which catches the extreme cases. [Stuck Bot Foreman](/bots/stuck-bot-foreman) distinguishes frozen from working. [Source Verifier](/bots/source-verifier) checks claims against primary sources, which is the manual version of what a degraded bot stopped doing. And [Citation Checker](/bots/citation-checker) opens every link and confirms the source still supports the claim.

## Frequently Asked Questions

### How is degradation different from a bot breaking?

A broken bot produces a signal: output stops arriving, or an error appears, and somebody notices within a day. A degraded bot produces nothing unusual at all. It runs on schedule, keeps the same format, and the content quietly gets worse, so the only symptom is an absence and absences are invisible unless you deliberately look for one. That is why it typically runs for weeks before anybody catches it, and why it usually surfaces through an external event like somebody quoting the output and being corrected.

### What causes a bot's output to quietly get worse?

Four things, mostly. A source became unreadable, usually a page moving behind a login, and the bot reports what it can still see without mentioning the gap. The world changed shape, so instructions that still make sense no longer match what is there. A threshold outlived the situation it was chosen for, leaving a bot that is technically correct and practically useless. Or, where a bot adapts to your behaviour, it learned your blind spot and stopped surfacing a category you were skipping wrongly.

### What is the cheapest way to detect it?

Two lines in the charter. Require the bot to list, in every output, which sources it read and which it could not, and to print could-not-read rather than zero for anything unreadable. Then have it report its own output length against the previous run. Degradation is nearly always accompanied by shrinkage, so a length trend is a free monitor, and the source list turns the most common cause from invisible into obvious. Neither needs ongoing effort once written.

### Why compare against a three-month-old output rather than last week?

Because degradation is gradual, so each week looks like the one before it and a week-to-week comparison shows nothing however carefully you read. Against something three months old the difference is obvious in seconds. Make it a habit rather than an investigation: once a month, open the oldest output you kept beside the newest and read both. This requires having deliberately archived a good output at some point, which costs nothing and is also the most useful thing to leave anyone who inherits the bot.
`,
};
