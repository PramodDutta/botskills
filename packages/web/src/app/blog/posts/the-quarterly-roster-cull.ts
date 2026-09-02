import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Retire Before You Hire, Every Quarter',
  description:
    'A bot roster only grows unless something forces it to shrink. The quarterly cull: what to measure, how to rank, and why the ceiling helps you.',
  date: '2026-09-02',
  category: 'Playbook',
  content: `
# Retire Before You Hire, Every Quarter

Rosters only grow. Every new job is a reason to add a bot, and no job is ever a reason to remove one, because removing something requires a decision and adding something feels like progress.

Left alone, that asymmetry produces a roster where a third of the bots have not produced anything a human used in two months, all of them drink from the same weekly pool, and nobody can say which ones matter. The cull is the counterweight, and it works because it is scheduled rather than triggered.

## Schedule it, because it will never happen on merit

The reason to fix a date is that no individual bot ever becomes obviously worth removing. Each one is defensible on its own: it was useful once, it might be useful again, it costs little. The case for removal only appears when you compare bots against each other, and comparison only happens if something makes you sit down and compare.

Quarterly is the right interval for most rosters. Monthly is too often to show a trend, and six months is long enough that a stale bot has been feeding decisions for half a year.

## Measure three things and ignore everything else

Every cull drowns in metrics if you let it. Three columns decide almost every case.

| Column | What it is | Why it decides |
|---|---|---|
| Last output a human used | A date | Separates busy from useful |
| Wakes per week | A count from the cadence | The cost proxy |
| Named owner | A person, or blank | Blank is its own verdict |

Note what is absent. Not how many times it ran, not how much it produced, not how clever the job is. A bot can run two thousand times a week, produce two thousand outputs, and have no date in column one, and that combination is the single worst thing on any roster.

## Rank by the gap, not by the absolute

The instinct is to sort by cost and cut the expensive ones. That is wrong often enough to matter, because an expensive bot that is read every morning is the best thing you own and a cheap bot nobody reads is still pure loss.

Sort by the gap between what it costs and what it returns.

| Bot | Wakes/wk | Last used | Verdict |
|---|---|---|---|
| Inbox triage | 270 | Today | Keep, expensive and earning it |
| Listing watch | 2016 | 6 weeks ago | Cut first, worst gap on the roster |
| Weekly report | 1 | Monday | Keep, free and useful |
| Competitor watch | 7 | Never | Retire, cheap but pointless |
| Docs checker | 168 | 3 weeks ago | Cut cadence or retire |

Two rows are obvious cuts and they sit at opposite ends of the cost range. That is the point: cost alone would have found one of them.

## Give the rare-signal bots a separate test

One category resists this framework and deserves a carve-out, or you will cut something valuable every quarter.

Some bots exist to catch something rare. A churn signal, a compliance breach, a competitor doing something unexpected. They produce nothing most weeks, and by the three columns above they look like the clearest cut on the roster.

The test for these is not how often they produced. It is: has it ever caught anything, and would you have caught that thing otherwise? A watcher that fired twice in six months on things you would have missed is worth more than a daily summariser you skim. Ask the question explicitly and mark the bot as rare-signal in the roster, so next quarter's cull does not rediscover it as dead weight.

If it has never caught anything in two full quarters, that is different, and it goes.

## Let the ceiling do the arguing for you

There is a maximum of six bots per channel, a Projects Manager plus five. That constraint is genuinely useful here, because it converts a soft question into a hard one.

Without a ceiling, "should we keep this bot" is a question with no cost attached, and the answer is always yes. With one, the question becomes "which of these five is worth a permanent seat", and that has to have an answer.

So run the cull per channel rather than across the whole account. Five slots, ranked, and the bottom one has to justify itself against the best job currently not being done. That framing surfaces the real trade, which is not bot versus nothing but bot versus the thing you would staff instead.

## Watch a roster grow to eleven and shrink to six

Leena's agency ran eleven bots across two channels by the end of a busy quarter. None of them was a mistake at the time.

The cull took forty minutes. Three had no date in the last-used column at all, including a competitor tracker built for a pitch that had been won in March. Two were doing overlapping research and neither owner had noticed, because each had built theirs independently a fortnight apart. One was a rare-signal churn watcher that had fired once, correctly, on an account worth more than the rest of the roster combined.

She retired four, merged two into one, and kept the churn watcher with a note explaining why it looks dead and is not.

What surprised her was not the count. It was that two of the four retired bots had named owners who both said, independently, that they had assumed someone else was reading it. Ownership had been recorded and had still decayed, because recording a name is not the same as reading an output.

## Copy the charter before you delete anything

Retiring is not just clicking delete, and this is where people lose work they later want.

Routines belong to a Bot and die with it. Run records go. The charter text is gone unless you kept it somewhere outside the product. So the retirement step is: copy the charter into a document, note the date and why it was retired, then delete.

That note costs two minutes and repays itself the first time somebody proposes the same bot again next quarter, which happens more often than you would expect, usually to someone who was not there.

\`\`\`
Retirement record, one per retired bot:

Bot:            Competitor Tracker
Retired:        2026-09-02
Owner was:      Marek
Why retired:    Built for the Northline pitch, won in March.
                No output used by anyone since 12 May.
Charter:        <full charter text pasted below>
Rebuild if:     We enter another competitive pitch of that size
                and want daily tracking for its duration only.
\`\`\`

The last line is the one that makes this a record rather than a graveyard. It says what would justify bringing it back, which is the question the next person will actually have.

## Pause first when you are unsure, delete when you are not

Two speeds, and picking the wrong one wastes either time or work.

| Situation | Action | Why |
|---|---|---|
| No last-used date, no owner | Delete, after copying the charter | Nothing is depending on it |
| Last used months ago, has an owner | Pause three weeks, then delete | The owner may object, and that is information |
| Rare-signal, has caught something | Keep, mark it | It looks dead by design |
| Overlaps another bot | Merge charters, retire one | Two bots, one job, is a roster bug |
| Cheap and mildly useful | Keep unless you need the slot | Cost is not the reason to cut |

Pausing is underrated. It converts an argument into an experiment, and three weeks of silence is a much stronger case for deletion than anybody's opinion in the meeting.

## Do the merge case properly, because it is the most common finding

Overlapping bots are the single most frequent thing a cull turns up, and the reason is structural rather than careless: two people staff a similar job a fortnight apart, each unaware of the other, and neither ever sees the other's output.

The merge is usually easy. Two research bots reading similar sources for different reasons are one bot with two output sections. The work is not technical, it is deciding whose charter survives, and that decision is easier if you do it on the evidence rather than by seniority: whichever charter has the clearer boundary and the more specific instructions wins, and the other's distinctive requirements get added as a section.

What makes this go badly is doing it without both owners present. A merged bot with one confused former owner is a bot that gets quietly rebuilt next month.

## Expect the roster to regrow, and let it

The cull is not a fix. The roster will grow again next quarter and that is correct, because growth is what a useful roster does when the work changes.

The failure is not regrowth, it is unbounded regrowth. A roster that goes eleven, six, ten, six across a year is healthy. One that goes eleven, fourteen, nineteen is not, and the difference is entirely whether the cull happens on schedule.

Judge the process by whether the count comes down each quarter, not by whether it stays down between them.

## Run the cull in a fixed order, because judgment degrades

The order matters more than it looks, and the reason is fatigue. Discussing bot one for twenty minutes leaves nothing for bots nine through eleven, and the ones at the end get waved through purely because the room is tired.

| Step | What you do | Time |
|---|---|---|
| 1 | Read the whole roster aloud, one line each, no discussion | 5 min |
| 2 | Mark every bot with no last-used date. No debate yet | 3 min |
| 3 | Delete or pause those, decided by whether they have an owner | 10 min |
| 4 | Look for overlapping pairs among what remains | 10 min |
| 5 | Rank the survivors by the cost-to-use gap | 5 min |
| 6 | Decide the bottom one only, then stop | 5 min |

The full read first is what stops the exercise becoming a discussion of whichever bot someone happens to raise. Unowned bots survive culls precisely because nobody raises them, and reading every line aloud removes that escape route.

Step six is a deliberate limit. Cutting one marginal bot per quarter, on top of the obvious dead ones, is sustainable. Trying to optimise the whole roster in one sitting produces decisions nobody believes and half of them get quietly reversed.

## Write down what you decided not to cut

The half of the cull people skip is recording the keeps, and it costs you the same conversation next quarter.

When a bot survives on a judgment call, note the reason in one line. Kept because it caught the Northline churn signal in July. Kept because the cadence is already down to weekly and it costs almost nothing. Kept because the alternative job is not staffed anyway.

Three months later that note is the difference between a thirty second confirmation and re-litigating the same question with worse recall. It also protects the rare-signal bots, which otherwise get reconsidered every single quarter by whoever forgot last time.

The reverse is true too. A bot you kept twice with the same weak justification is telling you something. If the note reads keeping it for now three quarters running, the honest reading is that nobody can articulate its value and it should go.

## Treat the cull as the moment to fix cadences, not just membership

Most rosters have more waste in cadence than in headcount, and the cull is the natural moment to look, because you already have the wake counts in front of you.

A bot set to five minute polling during a launch and left there is far more expensive than a whole extra bot running daily. Cutting a cheap bot while leaving that cadence untouched is optimising the wrong variable, and it happens constantly because membership feels like the decision and cadence feels like a setting.

So add one question per surviving bot: is this cadence still the one you would choose today, knowing what the last quarter looked like? For anything under an hour, the answer should require an actual reason. If the reason is that it was set during a busy week that ended, the cadence goes back up, and that single change often saves more than the retirements did.

## Answer the objection that this cuts things you will want back

The strongest version: retiring a bot destroys a working setup that somebody spent real time on, and in three months you will rebuild it from scratch, badly, having lost the refinements. The cull optimises for a tidy roster over accumulated value.

That is a genuine risk and it is exactly why the retirement record exists. A retired bot with its charter copied out and a rebuild-if line is not destroyed, it is shelved. Bringing it back is a paste and a cadence decision, ten minutes rather than a rediscovery.

Without the record, the objection lands completely. Delete a bot with no copy of its charter and you have thrown away every refinement it accumulated, and the rebuild genuinely will be worse. So the answer is not that the risk is imaginary; it is that two minutes of writing converts an irreversible loss into a reversible one.

Where the objection still wins: a bot that is cheap, owned, and occasionally useful should not be cut merely to reduce the count. The cull is for the gap between cost and use, not for tidiness.

## Do it with someone else in the room

The last practical note, and it is the one that most affects whether the cull produces honest answers.

A cull run alone becomes a review of the bots you remember, which are the ones you use, which are the ones that were never the problem. You cannot recall the bot you stopped thinking about two months ago, because not thinking about it is precisely its condition. A second person with a different mental picture catches those, and the roster read-aloud catches the rest.

It also changes the answers. Asked privately whether you still read a bot's output, the honest answer arrives slowly and with qualifications. Asked in front of the person who built it, with the last-used date visible on the same line, it arrives immediately, because the date has already answered and there is nothing to defend. That is the value of putting the evidence in the room rather than relying on recollection.

If you genuinely work alone, the substitute is the date column and a rule that you do not skip a line. The discipline is harder without a second person, and the column is what makes it possible at all.

## Stop using this page when the shape is different

This page is a scheduled reduction of a roster that has grown. It stops applying in three places.

If you are looking at cost specifically and want to know which bot is draining the allowance, that is a different measurement and [the attribution page](/blog/which-bot-spent-the-week) covers it, since the product gives you no per-bot split. If the problem is that bots have no named human at all rather than too many bots, start at [the bot nobody owns](/blog/the-bot-nobody-owns), because ownership has to exist before a cull means anything. And if you are designing a roster inside one project rather than trimming an existing one, [six bots to a channel](/blog/six-bots-to-a-channel) has the constraint and how to spend it.

Bots that help: [Bot Advisor](/bots/bot-advisor) reviews the roster weekly and names what overlaps and what went silent, which front-loads most of the cull. [Chief of Staff Router](/bots/chief-of-staff-router) is where the roster and its owner lines belong. [Org Chart Keeper](/bots/org-chart-keeper) does the equivalent for people. And [Stuck Bot Foreman](/bots/stuck-bot-foreman) distinguishes a frozen bot from a working one, which matters because a frozen bot reads as dead and needs a fix rather than a retirement.

## Frequently Asked Questions

### How often should a bot roster be culled?

Quarterly suits most rosters. Monthly is too frequent to show a trend, since a bot can have a quiet month for ordinary reasons, and six months is long enough that a stale bot has been feeding decisions for half a year. The interval matters less than the fact that it is scheduled, because no individual bot ever becomes obviously worth removing on its own merits. Each is defensible in isolation, and the case for removal only appears when you compare bots against each other, which only happens if a date forces it.

### What should I actually measure when deciding?

Three columns and no more. The date a human last used the bot's output for something, the wakes per week derived from its cadence, and whether it has a single named owner. Deliberately absent: how many times it ran, how much it produced, and how sophisticated the job is. A bot can wake two thousand times a week, produce two thousand outputs, and have no date in the first column, and that combination is the worst thing on any roster while looking like the busiest.

### How do I avoid cutting a bot that catches rare things?

Give it a separate test and mark it in the roster. Bots that exist to catch something rare, a churn signal or a compliance breach, produce nothing most weeks and look like obvious cuts by activity. The right question is not how often it produced but whether it has ever caught something you would otherwise have missed. A watcher that fired twice in six months on things you would have missed outranks a daily summariser you skim. If it has caught nothing across two full quarters, that is genuinely different and it goes.

### What is the safe way to retire a bot?

Copy the charter text out first, then record the date, who owned it, why it was retired, and what would justify rebuilding it. Only then delete. This matters because routines belong to a Bot and die with it, run records go, and the charter is unrecoverable once the bot is gone. With the record, a retirement is a shelving and a rebuild is ten minutes of pasting. Without it, you have destroyed every refinement the bot accumulated and the eventual rebuild will genuinely be worse.
`,
};
