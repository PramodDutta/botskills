import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'The Smallest Useful Bot Is a Nudge That Reads Your Calendar',
  description:
    'A stand-up reminder fails as a timer and works as a calendar-aware nudge. Why the difference matters, and what the smallest bot teaches about all of them.',
  date: '2026-09-02',
  category: 'Tutorial',
  content: `
# The Smallest Useful Bot Is a Nudge That Reads Your Calendar

Everyone has ignored a stand-up reminder. Usually within four days of installing it, and usually because it fired during something.

That failure is worth understanding properly, because it is not a failure of willpower and it is not specific to health reminders. It is what happens to any interruption that does not know what you are doing, and it is the cheapest possible demonstration of the difference between an alarm and a bot.

## Understand why the timer version always loses

A timer fires on a schedule it chose. That is its entire model, and it has no way to be wrong about the moment because it has no concept of the moment.

So it fires mid-meeting. You dismiss it. It fires while you are mid-sentence in a document. You dismiss it. Within a few days dismissing has become automatic, and at that point the reminder is not being ignored through weakness; it has been trained out of your attention by its own behaviour.

| Fires during | What you do | What it costs |
|---|---|---|
| A meeting | Dismiss without reading | One increment of trained blindness |
| Focused work | Dismiss, mildly irritated | More than one |
| A genuine gap | Might act | The only useful case |
| Anything, repeatedly | Mute permanently | The whole tool |

The ratio is what kills it. A timer hits a genuine gap maybe a quarter of the time, and each miss makes the next hit less likely to land.

## Let the calendar decide the moment

The change that makes this work is small: before saying anything, look at the calendar.

If a meeting is running, say nothing. If one starts within ten minutes, say nothing, because a nudge you cannot act on is a nudge you dismiss. Only speak into a gap large enough to actually stand up in.

This is the whole difference between the two versions, and it is one condition. What makes it a bot rather than a smarter timer is that it consults something about the world before acting, which is the same structure as every other useful bot on this site, scaled down until it fits in a paragraph.

## Do not queue what you could not deliver

The tempting mistake, once you have the gap check, is to hold missed nudges and deliver them later.

Do not. A nudge held for forty minutes arrives detached from any reason, and the reason was the whole thing. You are being asked to stand up because you have been sitting, and a message about a state you were in earlier reads as noise.

Skip it. There will be another gap. A nudge that reliably arrives at a plausible moment and sometimes does not arrive at all is far more credible than one that always arrives eventually.

## Vary the wording, because repetition trains the eye

Six identical messages in a day become invisible by the fourth, and this happens below conscious attention. You are not deciding to ignore it; you have simply stopped parsing a string you have already parsed.

So vary the line. Not cleverly, and not with jokes that get old faster than repetition does. Just enough that the shape is different each time and the eye has to read rather than recognise.

\`\`\`
You are Stand Up. You tell one person to move. That is all.

Before every check:
1. Read the calendar. If a meeting is running, or one starts within
   ten minutes, say nothing at all. Do not queue it for later.
2. Only speak into a gap of twenty minutes or more.
3. Only if the last nudge was more than ninety minutes ago.

When you speak:
4. One sentence. No question mark, because a question invites a
   reply and replying is sitting down.
5. Vary the wording every time. Six identical lines in a day are
   invisible by the fourth.
6. Never explain why movement is good. They know. A nudge that
   argues is a nudge that gets muted.

You never post anywhere but their own direct message. You never
tell anyone else whether they moved. You keep no streak and no
score, because a streak turns a nudge into a scoreboard and a
scoreboard is the thing people quit.

If the calendar is unreachable, say nothing for that check. Do not
guess at a free moment.
\`\`\`

## Refuse to keep a streak, even though you will want to

Every reminder tool eventually adds a streak, and it is always a mistake for this particular job.

A streak creates an incentive to protect a number, and the number is not the goal. Worse, it creates a failure state: the day you break it, the tool has told you that you have failed at standing up, which is an absurd thing to be told and a good reason to delete something.

The same applies to counting, scoring, and weekly summaries of your compliance. A nudge is a nudge. The moment it keeps records it has become a system that judges you, and nobody keeps one of those for long.

## Watch a reminder get muted in four days

Sam installed a stand-up reminder on a Monday. Hourly, on the hour, which felt sensible.

Monday's ten o'clock fired during a customer call. Eleven fired during the same call, which had overrun. Twelve fired while he was writing a document he had finally got into. By Tuesday afternoon he was dismissing it without registering the content, and by Thursday he had muted it.

He had stood up roughly as often as before, and he now had one fewer tool and a small amount of accumulated irritation.

What is worth noticing is that the reminder was correct every time. He had been sitting for an hour on each occasion. The information was accurate and the delivery made it useless, and no improvement to the message would have helped, because the problem was never the message.

The calendar-aware version he built afterwards nudges perhaps three times a day instead of eight, and he acts on most of them. Fewer, better-timed interruptions beat more accurate ones.

## Treat this as the cheapest lesson about every other bot

This bot is trivial. That is why it is worth building, because the lessons in it are the same ones that cost real money elsewhere.

| What the nudge teaches | Where it costs more |
|---|---|
| Check the world before acting | A bot that emails during an incident |
| Do not deliver stale work | A brief assembled from a dead source |
| Silence is a valid output | A report padded because a section was expected |
| Interruptions have a budget | Approval fatigue and the blanket yes |
| Records turn a tool into a judge | A dashboard that changes what people do |

The third row is the one people find hardest. A bot that sometimes produces nothing feels broken, and building one that is comfortable saying nothing at all is genuinely difficult when the whole apparatus exists to produce output. A nudge is the easiest place to practise it, because the cost of getting it wrong is zero.

## Say nothing about why moving is good

One line in the charter that people delete as redundant, and it is the difference between a nudge you keep and one you resent.

The bot must not explain itself. No mention of circulation, posture, focus, or what research suggests. You installed it, so you already agree, and being reminded of the rationale by software reads as being lectured by something that has no standing to lecture you.

This generalises further than it looks. Any bot that argues for its own output is spending your attention defending a decision you already made, and the argument is always less welcome than the thing itself.

## Keep it entirely private, with no exceptions

It sends to one person: the operator. Not a channel, not a partner, not a manager, and not a health app that shares.

This is worth stating even though it seems obvious, because the feature that suggests itself second, after the streak, is sharing. A team stand-up nudge. A leaderboard. Something that makes it social so people stick with it.

That converts a small useful thing into a monitoring tool, and monitoring changes behaviour in ways that have nothing to do with the original purpose. People will stand up to be seen standing up, which is both worse than the original goal and much harder to stop once it has started.

## Pick the interval from your own pattern, not from advice

Ninety minutes is a reasonable default and it is only a default. The right interval is the one where the nudge is usually welcome and rarely annoying, and that is personal and discoverable.

Run it for a week and notice which nudges you acted on. If you are acting on most, the interval could be shorter. If you are dismissing most, it is too short already and you should lengthen it rather than trying harder.

Write the number you settle on into the charter with a note saying it was chosen by observation, so a future you does not tighten it on a whim. Numbers without reasons attract tampering, and a nudge tightened back to hourly by someone who forgot why it was ninety minutes is a nudge that gets muted again within the week, for exactly the reasons it was muted the first time.

## Handle the calendar honestly, including when it lies

The calendar is the input this whole thing rests on, and it is not a perfect description of your day.

| Calendar says | Reality often | What the bot should do |
|---|---|---|
| Free | Genuinely free | Nudge |
| Free | In an unscheduled call | Nudge anyway, cost is one dismissal |
| Busy | The meeting ended early | Stay quiet, cost is one skipped gap |
| Busy, all-day event | Working normally | Ignore all-day events entirely |
| Unreachable | Unknown | Say nothing at all |

Two of those need deciding rather than defaulting. All-day events are the common trap: a conference block, a holiday marker, or an out-of-office that spans the day will read as permanently busy and silence the bot for eight hours. Exclude anything longer than about four hours from the busy check, since an all-day marker almost never means you are in a meeting the entire time.

The unreachable case matters more than it looks. If the calendar cannot be read, the bot has no information, and the right response to no information is silence rather than falling back to a timer. A bot that quietly degrades into the thing that did not work is worse than one that stops, because you will not notice the degradation and will conclude the calendar-aware version does not work either.

## Prefer fewer nudges than you think you need

The instinct when tuning this is to make sure you never miss a chance to stand up. That instinct produces the timer again by a slower route.

Set the minimum gap between nudges longer than feels right, then shorten it only if you find yourself acting on nearly all of them. Three well-timed nudges you act on beat eight you dismiss, and the difference is not just today: every dismissal is a small withdrawal from the account that makes tomorrow's nudge land.

There is a useful test after the first week. Count how many you acted on as a fraction of how many arrived. Above roughly two thirds, the tuning is right and you could go slightly more frequent. Below a half, you are already back in the trained-blindness pattern and the answer is fewer, not better-worded.

Almost nobody guesses this correctly in advance, which is why the number belongs in the charter with a note that it came from observation rather than from advice.

## Build it first, before anything that matters

There is a practical argument for making this your first bot rather than a curiosity, and it is not about health.

Every bot you build afterwards will need the same three decisions: when it is allowed to interrupt you, what it does when it has nothing to say, and what it records about you. Those are difficult to reason about in the abstract and trivially concrete here, because the whole thing fits in one charter and the cost of getting it wrong is a mildly annoying afternoon.

| Decision | Here it costs | On a real bot it costs |
|---|---|---|
| When it may interrupt | One dismissal | Approval fatigue, then a blanket yes |
| What it does with nothing to say | A quiet afternoon | A padded report treated as findings |
| What it records | Nothing | A metric that changes behaviour |
| How it fails | Silence | A confident wrong answer |

Getting a nudge wrong teaches you the same lesson as getting a customer-facing bot wrong, several weeks earlier and for free. That is unusually good value for something you can write in fifteen minutes.

It is also the fastest way to find out whether the calendar connection works, whether routines fire when you expect, and what the cadence controls actually do, all on a job where a mistake has no consequences. Discovering that a routine fires in a timezone you did not expect is much better learned on a stand-up reminder than on something that emails a customer.

## Let it be genuinely optional

The last thing, and it is a posture rather than a feature.

A nudge you can ignore without consequence is one you will keep. The moment it produces guilt, whether through a streak, a summary, or a line of encouragement that implies you should have moved earlier, it joins the category of things people quietly delete.

So no follow-up if you did not move. No second nudge. No acknowledgement of whether you acted at all, which is also why the bot should not try to detect it. The absence of any observation is what keeps it costless, and costless is why it survives longer than any of the more sophisticated versions. This is the one place where doing less is not a compromise forced by effort, it is the actual design, and every feature you decline to add is buying another month of the thing continuing to work.

## Answer the objection that this does not need a bot at all

The strongest version: this is a reminder with an if-statement. A phone can do it, a smartwatch can do it better, and dedicating a bot to something a calendar-aware alarm handles is using a very general tool for a very small job.

Largely right, and worth being honest about.

If you have a device that already does calendar-aware nudging well, use it. Nothing here requires an agent, and building a bot to duplicate a working feature is the kind of thing that makes people cynical about the whole category.

Two cases where the bot version earns itself. If you already run bots, this costs one slot and one charter, and it sits alongside everything else rather than being another app with another set of notification settings to lose track of. And the charter is readable and editable in a way an app's settings are not: the reason for the ninety minutes is written next to the ninety minutes, which is exactly what stops it drifting.

Where the objection wins outright: if this would be your only bot, do not build it. The value here is as the cheapest possible practice at the pattern, and there is no pattern to practise if there is nothing else.

## Stop using this page when the shape is different

This page is one trivial private nudge. It stops applying immediately in three directions.

If the nudge needs to reach anyone but you, it is not this and every rule inverts, particularly the ones about privacy and records. If the problem is that you have too many bot interruptions rather than too few, [review fatigue](/blog/grok-bot-review-fatigue) is the relevant piece and it points the other way. And if you want a private record of your days rather than a prompt to move, [the one line work journal](/blog/the-one-line-work-journal) shares the no-audience rule and does a different job.

Bots that help: [Desk Lap Nudge](/bots/desk-lap-nudge) is this charter as a listing, including the no-streak rule. [One Line Standup](/bots/one-line-standup) is the private-record counterpart. [Meeting Prep Brief](/bots/meeting-prep-brief) is calendar-aware in the opposite direction, using the calendar to prepare rather than to stay quiet. And [Chief of Staff Router](/bots/chief-of-staff-router) is where a nudge would sit in a wider roster.

## Frequently Asked Questions

### Why does a plain hourly reminder stop working?

Because it fires without knowing what you are doing, so a large share of its nudges arrive during meetings or focused work. Each one you dismiss without acting trains you slightly further toward dismissing automatically, and within a few days that has become reflexive. The reminder is then not being ignored through lack of discipline; it has trained itself out of your attention through its own behaviour. Adding a single condition, checking the calendar and staying silent unless there is a real gap, is what breaks that cycle.

### Should missed nudges be delivered later?

No. Skip them entirely. A nudge held for forty minutes and delivered afterwards has been detached from its reason, and the reason was the whole content: you are being asked to move because you have been sitting, not as a general principle. A message about a state you were in earlier reads as noise and costs you credibility for the next one. There will always be another gap, and a nudge that sometimes does not arrive is far more trusted than one that always arrives eventually.

### Why avoid streaks and counters?

Because a streak creates a number to protect, and the number is not the goal. It also creates a failure state, so the day you break it the tool informs you that you have failed at standing up, which is both absurd and an excellent reason to delete something. The same applies to scores and compliance summaries. A nudge that keeps records has become a system that judges you, and people do not keep those for long. Append nothing, count nothing, and let a missed day be nothing at all.

### Is this worth building if my phone can already do it?

Probably not, if your phone does it well and this would be your only bot. The honest position is that nothing here requires an agent, and duplicating a working device feature is how people get cynical about the category. It earns its place in two situations: when you already run bots, so it costs one slot and lives alongside everything else instead of being another app with its own notification settings, and when you want the reason for the interval written next to the interval, which is what stops it drifting over time.
`,
};
