import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'You Cannot See Which Bot Drank the Pool',
  description:
    'Grok Bot has no per-bot spend attribution. What you can actually measure, how to attribute usage yourself, and the four burners that empty a weekly pool.',
  date: '2026-09-02',
  category: 'Reference',
  content: `
# You Cannot See Which Bot Drank the Pool

The week's allowance is gone by Thursday. You have six bots. The obvious question is which one did it, and the product will not tell you.

There is no per-bot spend attribution. The pool belongs to the account, every bot drinks from the same one, and nothing in the interface breaks the total down by which named bot consumed what. This page is about what you can measure instead, and how to build attribution yourself before you need it.

## Accept that the meter is account level, not bot level

Start here, because every workaround below follows from it.

Subscriptions carry a weekly usage allowance. After it empties, work bills on demand from model and token cost. There is no bot-specific spend cap, and there is no report that says Research Scout used forty percent of this week.

| What you want to know | Available? | What you get instead |
|---|---|---|
| Which bot spent the most this week | No | One account total |
| Spend per routine | No | Nothing |
| Cost of one specific run | No | Nothing |
| Whether the pool is nearly empty | Partly | The product tells you when it is gone |
| Which bots ran, and how often | Yes, indirectly | Run records, 20 most recent per routine |
| What each run did | Yes, per bot | The bot's own screen and history |

The right column is the whole toolkit. Attribution is a thing you construct from run counts and cadence, not a number you look up.

## Count wake-ups, because that is the closest proxy you have

If you cannot measure spend directly, measure the thing that causes it. Work happens when a bot wakes. A bot that wakes twelve times a day cannot cost the same as one that wakes twice, regardless of what each run does.

So build a wake ledger: one row per routine, its schedule, and therefore its wake count per week. That table is arithmetic you can do on paper, and it will usually identify the culprit within one look.

| Bot | Routine | Cadence | Wakes per week |
|---|---|---|---|
| Inbox triage | Every 10 min, 9 to 6, weekdays | 54 per day | 270 |
| Competitor watch | Daily at 07:00 | 1 per day | 7 |
| Weekly report | Mondays 09:00 | 1 per week | 1 |
| Support queue pass | Hourly, always on | 24 per day | 168 |
| Account brief | On demand only | Varies | Under 10 |

Two of those five account for well over ninety percent of the wake-ups. You have your answer without any per-bot meter, and you had it before the pool emptied.

## Rank the four burners, because they are not equal

Not every wake costs the same. Four things dominate, and they compound.

1. **Retries.** A stalled job retried twelve times is twelve runs, not one. This is the single largest avoidable cost and the easiest to miss, because a retry looks like the same job rather than a new one.
2. **Tight cadences.** A five minute loop is 288 wakes a day. It feels cheap because each run is small. It is not cheap.
3. **Screenshot and page dumps.** Reading a heavy page repeatedly costs more per run than reading a file, and a browser workflow reads the whole page.
4. **Open browser sessions doing work.** A run that navigates six pages is six page loads, not one.

The pattern: cost tracks how often and how much a bot looks at the world, not how clever the task is. A daily summarisation of files you already hold is cheap. A five minute poll of a busy web page is not.

## Watch Marek find the burner in eleven minutes

Marek's pool emptied on a Wednesday for the third week running. He had eight bots and no idea which one to blame, and the product gave him one number.

He wrote the wake ledger. Five minutes. Seven of the eight bots came out under twenty wakes a week. The eighth, a listing watcher he had set to every five minutes during a launch and never turned down, came out at 2,016.

He had built that bot two months earlier, changed the cadence for one busy week, and forgotten. Nothing had gone wrong. No error, no alert, no runaway loop. A number he chose deliberately for one week stayed chosen for eight.

The fix took six minutes: cadence to hourly, which is 168 wakes, and a note in the charter saying why it is hourly so the next person does not helpfully tighten it again.

The lesson is not that he was careless. It is that a setting with no ongoing cost signal attached will drift and never announce itself.

## Write the cadence into the charter, with its reason

A cadence with no recorded reason is a cadence somebody will change. Put both in the charter text, where the next reader sees them.

\`\`\`
You are Listing Watch. You check the saved searches hourly during
working hours and report new matches.

Cadence: hourly, 08:00 to 18:00, weekdays. That is deliberate.
Five minute polling was tried during the March launch and burned
roughly ten times the weekly allowance for no additional catches,
because listings do not appear that fast.

Do not tighten this cadence without checking the pool first. If a
launch genuinely needs faster checks, raise it for that week and
write the date you will put it back.

On every run:
1. Report new matches only. Never re-report a match you have
   already reported, checked by listing id and not by title.
2. If a source returned nothing, print could-not-read rather than
   zero, and stop retrying after two attempts.
\`\`\`

That last line matters more than the cadence. Uncapped retries turn one broken source into a continuous drain that produces nothing.

## Cap retries in the charter, because nothing else caps them

There is no product setting that limits retries. If a run fails and the bot tries again, that is another run against the same pool, and a source that is down all afternoon can absorb a large share of a week without producing a single useful output.

Write the cap in words: attempt twice, then stop and report. A bot that gives up and tells you is cheaper and more useful than a bot that keeps trying and tells you nothing.

## Separate work that needs the world from work that does not

The cheapest restructuring available is moving work off live sources.

| Job shape | Cost pressure | Better shape |
|---|---|---|
| Poll a page for changes | High, every check is a page load | Subscribe or check less often |
| Summarise files already on disk | Low | Keep as is |
| Re-read the same document each run | Medium, avoidable | Read once, cache the summary |
| Check six sources every run | High | Check the one that changes, then the rest weekly |

A bot that reads the world constantly is expensive by construction. A bot that reads it once and then works on what it captured is not. Most rosters have at least one job that could move from the first shape to the second without losing anything.

## Attribute after the fact with your own record

Since the product will not attribute, keep a small record yourself. One line per bot per week: wakes, outputs produced, and outputs a human actually used. That third column is what makes the ledger a decision tool rather than a log.

| Bot | Wakes | Outputs | Used by a human | Verdict |
|---|---|---|---|---|
| Inbox triage | 270 | 270 | Daily | Keep, expensive and earning it |
| Listing watch | 2016 | 12 | Twice | Cut cadence |
| Weekly report | 1 | 1 | Weekly | Keep |
| Competitor watch | 7 | 7 | Never in 6 weeks | Retire |

The last row is the one people miss. A bot can be cheap and still worth removing, and an expensive bot can be the best thing in the roster. Cost alone is not the verdict; cost against use is.

## Do the arithmetic before the pool empties, not after

The failure mode is diagnosing this in the week it breaks, when you are also trying to get work done. The ledger takes about five minutes and is worth doing on a calm week, because that is when you can act on it.

Fold it into whatever weekly review you already run. If you do not have one, [the weekly bot review](/blog/the-weekly-bot-review) is a thirty minute agenda that has a place for exactly this.

## Understand why a five minute loop feels cheap and is not

The cadence trap deserves its own section because almost everyone walks into it, and the reason is a genuine cognitive mismatch rather than carelessness.

When you set a routine to run every five minutes, you are thinking about the individual run. Each one is small: check a page, compare against last time, usually find nothing, stop. It costs almost nothing, and that intuition is correct about the unit. What the intuition does not do is multiply. Five minutes is twelve times an hour, which is 288 times a day, which is roughly two thousand times a week if it runs continuously. Two thousand of almost nothing is not almost nothing.

The comparison that makes it concrete: a daily routine runs seven times a week. A five minute routine runs two thousand times. That is not a difference of degree, it is a different category of thing, and yet both are one line in the same interface, chosen from the same dropdown, looking equally reasonable at the moment you pick them.

There is a second half to the trap. Tight cadences are almost always set during an unusual week. A launch, an incident, a migration, a period when you genuinely did want to know within minutes. The cadence is correct for that week and wrong for the fifty after it, and nothing in the product will ever tell you the week has ended. The setting has no expiry and no cost signal, so it persists exactly as long as nobody happens to look.

The practical defence is to treat any cadence under an hour as temporary by default. Write the date you will revisit it into the charter at the moment you set it, not later. If the answer to "when should this go back to hourly" is "I do not know", the honest cadence is hourly now, and you can tighten it the day you actually need to.

## Ask what latency the job genuinely requires

Underneath the cadence question is one people skip: how fast does the answer actually need to arrive?

Most bot work has a much looser requirement than the cadence implies. A competitor pricing check that runs every five minutes is answering a question you will act on, at the earliest, in the afternoon. A listings watcher polling constantly is feeding a decision you make when you next sit down. In both cases the run frequency was chosen from a feeling about attentiveness rather than from the decision it feeds.

Work backwards from the decision instead. Ask when you will next act on this information, and set the cadence so the answer is fresh at that moment rather than continuously. A brief you read at nine in the morning needs one run at eight, not a hundred and forty overnight.

Three shapes cover most real requirements. Work you act on when you sit down needs a daily run before you sit down. Work you act on within the working day needs hourly at most. Work that genuinely cannot wait, which is rarer than it feels, usually should not be a polling loop at all: it should be something that notifies you, with a bot handling it once it has arrived.

That last distinction is worth dwelling on, because polling is often used as a substitute for a notification that already exists. If a source can tell you when something changed, having a bot repeatedly ask whether anything changed is paying continuously for something available free.

## Keep the ledger for a month before you change anything

One more discipline, and it is the one most likely to be skipped because it delays gratification.

The first time you write the wake ledger you will find something obviously wrong and want to fix it immediately. Usually you should, if it is as clear as Marek's two thousand wakes. But for everything below the obvious outlier, resist the urge to tune on one week of data.

A single week is a poor sample. Bots have uneven weeks: a support queue is busy after a release and quiet before one, a research bot fires more during a planning cycle. Tuning a cadence down based on one quiet week produces a bot that misses things during the next busy one, and that failure is much harder to notice than an overspend, because a bot that misses something produces no signal at all.

Run the ledger for four weeks. Then look at the range rather than the average, and set cadence for the busy end. The cost of a slightly over-frequent bot is money you can see. The cost of an under-frequent one is a missed thing you never learn about, and only one of those two errors announces itself.

## Refuse to quote a dollar figure for the allowance

Somebody will ask what the pool is worth. No figure is published, and any number you have seen for it was invented by whoever wrote the post you read.

That matters practically, not just pedantically. If you plan against an invented number you will build a budget on fiction and be wrong in an unpredictable direction. Plan against behaviour instead: wake counts, retry caps, and how much of the world each run touches. Those you can observe.

## Answer the objection that this is all guesswork without real numbers

The fair version: a wake ledger is a proxy, runs are not equal, and a bot that wakes twice but reads forty pages could genuinely cost more than one that wakes two hundred times and reads a file. Ranking by wakes could point at the wrong bot.

True, and it is still the right first move, for two reasons.

The distribution is usually extreme. In most rosters one or two bots account for the overwhelming majority of wake-ups, and the gap between 2,016 and 20 is far larger than any per run variation could close. You are not looking for a precise ranking. You are looking for the outlier, and the outlier is obvious.

Second, the refinement is cheap when you need it. Add a column for how much of the world each run touches, scored roughly as reads a file, reads a page, reads several pages. Multiply. That gets you close enough to act, and it is still arithmetic you can do in a notebook.

Where the objection wins outright: if your bots are genuinely similar in cadence and differ mainly in what each run does, wakes will not separate them and you need the weighting from the start.

## Stop using this page when the shape is different

This page is about attributing usage across several bots on one account. It stops applying in three places.

If the question is what the two phase meter actually is, meaning the weekly pool and then on demand billing, [the allowance page](/blog/grok-bot-weekly-allowance) covers the mechanism rather than the attribution. If you have already emptied the pool and need to stop the bleeding this hour, [no spend cap ops](/blog/grok-bot-no-spend-cap-ops) is the triage order. And if the real question is which bots to keep at all rather than which is expensive, that is [a fleet audit](/blog/grok-bot-fleet-audit).

Bots that help here: [Bot Advisor](/bots/bot-advisor) reviews the roster weekly and names what overlaps and what went silent. [Stuck Bot Foreman](/bots/stuck-bot-foreman) tells you whether a long run is working or frozen, which is what stops a retry loop early. [VM Overwatch](/bots/vm-overwatch) watches the shared computer itself. And [Chief of Staff Router](/bots/chief-of-staff-router) is where a cadence decision should be recorded rather than left in one person's memory.

## Frequently Asked Questions

### Can I see how much each bot spent this week?

No. There is no per-bot spend attribution and no per-routine breakdown. The weekly allowance belongs to the account, every bot on it draws from the same pool, and the product reports one total rather than a split. What you can see is which routines exist, their cadence, and the most recent run records per routine. Attribution is something you construct from wake counts and how much of the world each run touches, and in practice that is enough because the distribution is usually extreme rather than close.

### What actually consumes the allowance fastest?

Four things, and they compound. Retries first, because a stalled job retried twelve times is twelve runs and it looks like one job in your head. Then tight cadences, since a five minute loop is 288 wakes a day and feels cheap per run. Then heavy page reads, because a browser workflow loads whole pages while a file read does not. Then runs that navigate several pages, which multiply the page count. Cost tracks how often and how much a bot looks at the world, not how sophisticated the task is.

### How do I stop a broken source draining the pool?

Cap retries in the charter, because nothing in the product caps them for you. Write it as words the bot follows: attempt twice, then stop and report could-not-read. Without that, a source that is down all afternoon absorbs a meaningful share of a week and produces nothing, and it never surfaces as an error because from the bot's point of view it is simply working. A bot that gives up and tells you is both cheaper and more useful than one that keeps trying silently.

### What is the weekly allowance worth in money?

No figure is published anywhere, so any number you have seen was invented by whoever wrote it. That is worth taking seriously rather than treating as a technicality, because a budget built on an invented figure will be wrong in a direction you cannot predict. Plan against things you can observe instead: how many times each bot wakes per week, whether retries are capped, and how much of the world each run reads. Those you can count, and they are what actually drives consumption.
`,
};
