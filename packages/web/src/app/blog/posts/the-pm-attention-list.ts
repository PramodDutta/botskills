import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'The Attention List: One Surface Instead of Four, Rebuilt Every Hour',
  description:
    'A PM attention list merges Slack, email, calendar and call notes into one ranked surface. How to build it, how each source lies, and why it must never act.',
  date: '2026-08-28',
  category: 'Playbook',
  content: `
# The Attention List: One Surface Instead of Four, Rebuilt Every Hour

A product manager's day is spread across four surfaces that each hold part of the truth and none of which agree: Slack, email, the calendar, and whatever recorded your calls. The cost is not reading them. The cost is that the thing which actually needed you was in the one you checked last.

An attention list is a single ranked surface, assembled from all four and rebuilt continuously. It is the highest-leverage bot job in product work, and it is also the one most likely to be built wrong, because the obvious version quietly becomes a machine for confirming what you already thought was urgent.

## Build one surface instead of checking four

The list is not a summary of each source. It is one ordered set of things that want a decision from you, with the source attached to each so you can go and look.

| Source | What it holds that the others do not | What it over-reports |
|---|---|---|
| Slack | The live disagreement, the blocked engineer | Volume. Loud threads look urgent |
| Email | External commitments and dates | Anything a vendor sends |
| Calendar | What is about to become unavoidable | Recurring meetings nobody needs |
| Call notes | What a customer actually said, in their words | Whatever the last call was about |

Merging them is the easy half. The hard half is that each one distorts differently, so a naive merge inherits every distortion at once and presents it with a confidence none of the sources earned.

## Know how each source lies before you merge them

Slack over-weights recency and volume. A thread with 40 messages looks more important than a two-message thread where someone quietly said they are blocked, and the two-message thread is usually the one that costs you a week.

Email over-weights external senders. A vendor chasing a renewal produces the same signal shape as a customer describing a broken workflow.

The calendar over-weights the scheduled. Something on Thursday at 2pm will surface; something that should have been scheduled and was not never will.

Call notes over-weight the most recent conversation, because that is the transcript sitting at the top.

A useful list corrects for all four rather than averaging them.

\`\`\`
You are Attention List. You rebuild one ranked list. You never act,
never reply, never schedule, never close anything.

Sources: Slack, email, calendar, call notes.

Ranking rules, in order:
1. Someone is blocked and named you. Rank first regardless of how
   few messages the thread has.
2. A commitment with a date inside seven days that has no owner
   recorded anywhere else.
3. A customer described a problem in their own words, first time
   it has appeared.
4. Everything else, by date.

Explicit corrections:
- Thread length is not importance. Never rank by message count.
- An external sender is not importance. A vendor chasing renewal
  ranks below an internal person who is stuck.
- If the same item is in three sources, that is one item, not three.
  Say which sources, once.

Every row carries a link to the source. You never summarise so
well that the operator stops opening the original.
\`\`\`

## Let it rebuild hourly, and never let it act

Hourly is the right cadence because it is often enough to be current and rare enough that you are not being interrupted. The list is something you look at, not something that pages you.

The rule that keeps it useful is that it never acts. It does not reply, does not schedule, does not close, does not mark read. The moment it acts it needs to be right rather than useful, and those are very different bars. A list that is 80 percent well ordered is excellent. A bot that replies correctly 80 percent of the time is a liability.

## Write the promotion rule down, because important is not a field

Every attention list dies the same way: someone asks it to surface "important" things, and importance is not stored anywhere, so the bot infers it from whatever proxy is available, which is volume and recency, which is exactly the distortion you built the list to fix.

Write the promotion rules explicitly, as conditions on things that are actually recorded. "Someone said they are blocked and named me." "A date inside seven days with no owner recorded." Those are checkable. "High priority" is not.

## Watch Ana miss a churn signal that was on the list all week

Ana's list ran for a month and she trusted it. In week five a customer wrote one line in a shared Slack channel saying the export had been slow since the last release, then said nothing further.

It appeared on the list. Rank 19. It stayed at rank 19 for six days while a noisy internal thread about naming sat at rank 2, and it dropped off entirely when the week rolled.

The account churned the following month, citing the export.

Nothing malfunctioned. The item was captured, ranked by the stated rules, and displayed. The rule set had no clause for "a paying customer described a problem in their own words for the first time", so that signal competed on date order against internal chatter and lost. Ana had written rules for what was loud and what was scheduled, and none for what was rare.

Rare and quiet is the category that costs the most, and it is invisible to every default ranking.

## Keep scoped memory scoped, and say what each bot may remember

Bots retain memory and learn preferences over time, and each keeps memory relevant to its own kind of work. That is useful and it needs a boundary written down, because an attention list that learns from you will learn your blind spots along with your priorities.

If you consistently skip a category, the list learns to rank it lower. That is the mechanism working as designed, and it is also how a whole class of signal disappears without an event you could notice.

So: state what it may learn from (what you opened, what you acted on) and what it may not (that you ignored something is not evidence it was unimportant). And re-read the ranking rules monthly against the things that surprised you, because the surprises are the audit.

## Keep one row per thing, not one row per mention

The first version of every attention list has the same defect: the same item appears four times because it was discussed in Slack, referenced in an email, has a meeting attached, and came up on a call.

That is not four things wanting your attention. It is one thing that is well evidenced, and the naive merge turns strong evidence into apparent volume, which then ranks it above a quieter item that may matter more.

| Naive behaviour | What it implies | What is actually true |
|---|---|---|
| Four rows for one topic | Four things need you | One thing, four sources |
| Ranks it highest by count | It is the most urgent | It is the most discussed |
| A one-source item ranks last | It matters least | Nobody has discussed it yet |

Collapse to one row and list the sources on it. The number of sources is useful context, printed beside the item, and it is not a ranking input. Something discussed in four places is often already being handled by the four people discussing it. The single-source item that nobody has picked up is frequently the one with no owner.

## Set a decay rule, because nothing should sit on the list forever

An attention list without decay becomes a graveyard within a month, and a graveyard stops being read. But naive decay is what killed Ana's churn signal, which dropped off on schedule while nothing about it had been resolved.

The fix is to decay on resolution rather than on age, and to make unresolved-but-old louder rather than quieter.

| Row age | Naive list | Better behaviour |
|---|---|---|
| Under 2 days | Shows | Shows |
| 3 to 7 days, untouched | Sinks | Promotes with an age flag |
| Over 7 days, untouched | Drops off | Escalates: this has been ignored a week |
| Any age, marked resolved | Sinks slowly | Disappears immediately |

An item you have looked at and decided about should vanish the moment you say so. An item nobody has touched in eight days should be shouting. Most lists get this exactly backwards, because sorting by recency is the default and it means the longer something is ignored the harder it is to see.

## Separate the list from the morning digest

These are two different products and running them as one is why so many PM bot setups get abandoned in week three.

| | Attention list | Morning digest |
|---|---|---|
| Cadence | Continuous, rebuilt hourly | Once, early |
| Purpose | What wants a decision now | What happened since yesterday |
| Read pattern | Glanced at repeatedly | Read once, properly |
| Contains resolved items | No | Yes, as context |
| Ranked | Yes, strictly | No, grouped by area |

A digest that tries to also be a live list gets rebuilt while you are reading it. A list that tries to also be a digest fills with things that happened and are finished, which is exactly the noise that makes people stop opening it. Run both if you want both, and let them have different jobs.

## Watch the list learn Ana's blind spot

Six weeks after the churn incident Ana rebuilt the ranking rules, added a rarity clause, and the list got noticeably better. Then it got quietly worse in a way that took a quarter to see.

Ana consistently skipped rows sourced from one particular Slack channel, the one where the support team discussed individual tickets, because most of it genuinely was not her decision. The list learned. Rows from that channel sank, then stopped surfacing at all.

The mechanism worked exactly as designed. Ana's behaviour was the training signal, and her behaviour was correct roughly ninety percent of the time. The problem is what lived in the other ten percent: that channel was also where a support engineer first noticed a pattern across three tickets, which is the earliest possible signal of a systemic bug and precisely the thing a PM needs to see.

The list had optimised away its own highest-value input, and it did so without a single error, without an alert, and without any moment where anyone could have noticed a decision being made.

What Ana changed was not the learning. It was adding an audit she runs monthly: read the things that surprised you this month, and ask which of them the list surfaced and which you found another way. Anything you found another way is a ranking failure, and the pattern across a few months tells you what the list has been trained to hide.

That audit takes ten minutes and it is the only mechanism that catches this class of failure, because the failure has no symptom other than an absence.

## Build this before you build any other product bot

If you are going to run exactly one bot as a product manager, run this one, and the reason is not that intake is the most valuable work. It is that the attention list is the only job where being roughly right is sufficient, and every other candidate needs to be reliably right before it earns its place.

Consider the alternatives people usually reach for first. A feedback synthesis bot compresses a pile of customer input into themes, and compression deletes outliers, which means a synthesis that is ninety percent good has quietly removed the one signal that would have changed your roadmap. A spec drafter produces something that reads as finished and therefore gets reviewed less carefully than the blank page would have been. A competitive tracker builds a picture of a market that is accurate right up until a source changes shape, after which it is confidently stale.

Each of those is a real job and each fails in a way you cannot see. The attention list fails visibly: a badly ranked list is obviously badly ranked the moment you read it, because you are looking at the rows and applying your own judgment as you go. You cannot be silently misled by a list you are actively scanning, which is a property almost nothing else in this space has.

There is a second reason, which is that the list makes every subsequent bot easier to specify. After a month of watching what actually lands on it, you know which categories recur, which sources carry the signal for your product, and where your own attention genuinely runs out. Those are the inputs to a good charter for the next bot, and without them you are guessing. Most people build the synthesis bot first, discover it does not fit how they work, and conclude that the tooling is not ready, when what actually happened is that they specified it before they had any evidence about their own week.

Start with intake. Let it run for a month. Read the audit. Then decide what the second bot is, using a month of real data about where your attention was going rather than an impression of where you think it goes. The impression is reliably wrong, in a specific direction: everyone believes they spend more time on strategic work and less on triage than they actually do, and the list is the cheapest possible instrument for finding that out.

One practical note before the objection. Give the list a fixed home and open it on a schedule rather than waiting for it to pull you. A surface you visit at known moments, say at the start of a work block and after lunch, gets read properly, because you arrive with the intention of deciding things rather than being interrupted into it. The difference in how carefully you read the same rows is larger than most people expect. A surface that notifies you competes with everything else that notifies you and loses, and then you have built a second inbox rather than a filter on the four you already had.

## Answer the objection that this is a to-do list with extra latency

The strongest version: PMs already have a task system, the list duplicates it, and adding an hourly rebuild introduces staleness that a task list does not have. Just triage properly.

Two answers. The attention list is not a task list, it is a pre-task surface: everything on it is a thing that has not yet been decided about, and most rows should leave without becoming tasks. A task list holds work you have accepted. This holds work you have not yet looked at, which is a different and much larger set.

The latency point is real and mostly does not bind, because anything that genuinely cannot wait an hour arrives through a channel that interrupts you anyway. A person who is blocked messages you directly.

Where the objection wins: if you are on a small team with one channel and forty emails a week, the four surfaces have not diverged yet and merging them solves a problem you do not have.

## Stop using this page when the shape is different

This page is about the intake surface, not about what you do afterwards. It stops applying in three places.

If your question is synthesis rather than intake, meaning turning a pile of feedback into something a roadmap can use, [the product manager article](/blog/bots-for-product-managers) covers that and its failure modes. If the problem is specifically commitments made to customers going untracked, [promise tracking](/blog/how-to-track-customer-promises) is a narrower and better fit. And if you already have several bots and the problem is that reviewing their output has become the job, read [review fatigue](/blog/grok-bot-review-fatigue) before adding another.

Nearby bots: [Chief of Staff Briefing](/bots/chief-of-staff-briefing) produces the morning read rather than a continuous list. [Meeting Prep Brief](/bots/meeting-prep-brief) handles the hour before a specific call. [Churn Early Warning](/bots/churn-early-warning) is built for exactly the rare-and-quiet signal that ranking rules miss. And [Product Expert](/bots/product-expert) answers the technical questions that otherwise interrupt you.

## Frequently Asked Questions

### What sources should a PM attention list pull from?

Slack, email, the calendar, and whatever holds your call notes. Those four cover the practical surface area of product work, and each holds something the others do not: Slack has the live disagreement and the blocked engineer, email has external commitments and dates, the calendar shows what is about to become unavoidable, and call notes have what a customer said in their own words. The value comes from merging them into one ranked surface with the source attached to every row, so you can always open the original rather than trusting a summary.

### Why should the attention list never take actions?

Because a list and an actor are held to different standards. A ranked list that is roughly 80 percent well ordered is genuinely useful, since you are scanning it and applying judgment as you go. A bot that replies, schedules, or closes things correctly 80 percent of the time is a liability, because the 20 percent reaches other people and is not visible to you until it has landed. Keeping it read-only means ranking mistakes cost you a few seconds of scanning rather than a wrong message sent in your name.

### How do I stop the list ranking by whatever is loudest?

Write the promotion rules as conditions on things that are actually recorded, and add explicit corrections against the defaults. Thread length is not importance, so never rank by message count. An external sender is not importance, so a vendor chasing a renewal ranks below an internal person who is stuck. Most importantly, add a clause for rare signals: a customer describing a problem in their own words for the first time should promote on rarity, because a quiet one-line message will otherwise lose to internal chatter on date order and disappear.

### Should the list learn from what I ignore?

Be careful here. Bots retain memory relevant to their kind of work, and a list that learns from your behaviour will learn your blind spots alongside your priorities. If you consistently skip a category, it will rank that category lower, which is the mechanism working as designed and also how a whole class of signal vanishes without any event you could notice. Let it learn from what you opened and acted on. Do not let it treat your having ignored something as evidence that it was unimportant, and re-read the ranking rules monthly against whatever surprised you.
`,
};
