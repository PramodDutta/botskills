import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Every Roster Grows a Bot With No Named Human',
  description:
    'Unowned bots keep running and nobody reads their output. How they appear, why nobody notices, and the one column that makes ownership impossible to fake.',
  date: '2026-09-02',
  category: 'Playbook',
  content: `
# Every Roster Grows a Bot With No Named Human

The bot that causes trouble is rarely the one that breaks. It is the one still running, still producing, still consuming the weekly pool, that no living person has read the output of in six weeks.

Nobody decided to abandon it. Ownership was never assigned in the first place, or the person who assigned it left, or the job it did stopped mattering and the bot did not notice because bots do not notice.

## Recognise the three ways a bot loses its human

They are different problems and only one of them looks like neglect.

| How it happens | What it looks like | Why nobody catches it |
|---|---|---|
| Never assigned | Set up in an afternoon, worked, moved on | It was working, so there was no moment to ask |
| Owner left or changed role | Handover covered projects, not bots | Bots are not on any handover checklist |
| The job stopped mattering | Still runs, output ignored | Output still arrives, so nothing looks broken |

The third is the most common and the least visible, because everything continues to function. Files appear. Reports generate. The only symptom is an absence: nobody opens them.

## Distinguish an unowned bot from an idle one

An idle bot is obvious and mostly harmless. It has not run in weeks, it shows up in any audit, and deleting it costs nothing.

An unowned bot is the opposite. It runs constantly, produces on schedule, and looks healthier than half your roster. It is expensive precisely because it is busy, and it is risky precisely because it is trusted by default: output that arrives regularly acquires an assumption of correctness that nobody has tested in months.

If you audit by activity, you will find the idle ones and miss all the unowned ones. That is backwards, and it is what most roster reviews actually do.

## Add the one column that cannot be faked

Ownership is easy to claim and hard to verify. A name in a spreadsheet proves nothing; people put their name against things they have not thought about in a quarter.

The column that works is: the date a human last used this bot's output for something. Not the date it ran. Not the date it produced. The date a person took what it made and did something with it.

| Bot | Last ran | Last produced | Last output a human used | Owner claimed | Real state |
|---|---|---|---|---|---|
| Inbox triage | Today | Today | This morning | Priya | Owned |
| Competitor watch | Today | Today | Six weeks ago | Priya | Unowned |
| Weekly report | Monday | Monday | Monday | Dev | Owned |
| Docs checker | Today | Today | Never | (blank) | Unowned |
| Old launch tracker | 3 weeks | 3 weeks | 3 weeks | Marek | Idle, retire |

Two of those five have a claimed owner and are unowned in every way that matters. Priya's name is against the competitor watch and she has not read it since July. That is not dishonesty; she genuinely believes she owns it, and she would be surprised by the date.

## Watch a briefing outlive the meeting it fed

Dev built a Monday briefing bot to feed a weekly leadership sync. It pulled from four sources, assembled a summary, and posted it to a doc every Monday at 07:00. It was good, and for two months it was read by five people.

The sync moved to fortnightly in April, then was folded into another meeting in May, then quietly stopped. The bot did not stop. It kept assembling a briefing every Monday at 07:00 for four months, into a document that nobody opened after May.

What made it invisible was that it never failed. There was no error, no empty output, no alert. Every Monday it did exactly what it was told, correctly, for an audience that no longer existed.

Dev found it during an audit and the first thing he said was that he had assumed someone was still reading it. That assumption is the actual mechanism here: everyone assumes an output that arrives reliably has a reader, and nobody checks, because checking feels like accusing a colleague of not doing their job.

## Ask the question that finds them in ten minutes

Skip the audit spreadsheet the first time. Go through the roster and ask one question per bot: **who read the last thing this produced, and when?**

If the answer takes more than a few seconds, that is your answer. Genuine owners know immediately, because they read it recently. An unowned bot produces a pause, then a hedge, then a name that turns out to be a guess.

Do this out loud with whoever else uses the roster. It works better as a conversation than a form, because the hedges are audible in a way they are not on paper.

## Give every bot a named human or retire it, with no third option

The rule that prevents recurrence is that a bot has exactly one named human, and no bot is allowed to exist without one.

Not a team. A person. A team owning a bot is the same as nobody owning it, because responsibility that is shared without being assigned is responsibility that is deferred. When something looks off in a bot's output, the difference between "the growth team owns that" and "Marek owns that" is whether anyone investigates.

\`\`\`
Every bot on this roster carries an owner line in its charter:

Owner: <one person's name>
Owner since: <date>
Last reviewed: <date>

Rules:
1. One name. Never a team, never two people, never a rota.
2. The owner reads at least one full output every fortnight and
   updates Last reviewed. Not skims. Reads.
3. A bot whose Last reviewed is over six weeks old is reported as
   unowned at the next review, regardless of what the Owner line
   says.
4. When an owner leaves or changes role, their bots are listed in
   the handover explicitly. A bot without a new named owner within
   two weeks is paused, not inherited by default.
5. No bot runs without an owner. If nobody will take it, that is
   the decision: retire it.
\`\`\`

Rule three is the load-bearing one. It makes the claim self-expiring, so ownership has to be renewed by an act rather than asserted once and left.

## Pause before you delete, and set a date

When you find an unowned bot, the instinct is to delete it and the better move is to pause it and write down a date.

Pausing tests the assumption cheaply. If nobody notices in three weeks, nothing was depending on it and you can delete with confidence. If somebody surfaces on day four asking where the report went, you have found the owner, and they can have it with their name attached.

Deletion is also less reversible here than people expect. Routines belong to a Bot and die with it, run records go, and the charter text is gone unless you kept it somewhere. So copy the charter out first, then pause, then decide in three weeks.

| Action | Reversible? | When to use it |
|---|---|---|
| Pause | Yes, immediately | Default for anything unowned |
| Pause and copy the charter out | Yes | Anything you might rebuild |
| Delete | No, routines and history go with it | Only after a pause with no complaints |
| Reassign without asking | No, creates a fake owner | Never |

That last row is worth naming. Assigning an unowned bot to whoever seems most likely to want it produces an owner who does not know they own it, which is exactly the state you were trying to leave.

## Fold the check into a review you already run

This does not need its own ceremony. It needs one question added to whatever weekly or monthly review already exists, and the discipline to ask it about every bot rather than the ones that came to mind.

The version that works: read the roster in full, aloud, one line each, with the last-used date. The full read is the point. Reviewing only the bots someone raises is how unowned bots survive, since by definition nobody raises them.

If you have no such review, [the weekly bot review](/blog/the-weekly-bot-review) is a thirty minute agenda with a slot for this.

## Expect the count to be higher than you think

Everyone underestimates this before they count. A roster of eight typically has one or two, and the owner is usually surprised rather than defensive, because they had genuinely stopped thinking about it.

The reason the estimate is always low is that you remember the bots you interact with, which are by definition the owned ones. The unowned ones are absent from your mental picture for exactly the reason they are unowned. You cannot recall the bot you have not thought about; that is what not thinking about it means.

So count rather than estimate. The list is short and the exercise takes ten minutes, and the number it returns is almost always one or two higher than whatever you guessed before you started counting.

## Sort what an unowned bot actually costs you

Three separate costs, and people usually think of only the first.

| Cost | How it shows up | Severity |
|---|---|---|
| Weekly pool consumed | The allowance empties earlier than it should | Visible, annoying |
| Unreviewed output treated as true | A stale number reaches a decision | Invisible until expensive |
| Credentials kept alive for nothing | Logins on the shared computer no job needs | Invisible, compounding |

The second is the one that hurts. Output arriving on schedule acquires credibility purely from regularity, and an unowned bot produces output nobody has sanity checked in months. When someone eventually pulls a figure from it for a deck, they are quoting an unaudited source that looks institutional.

The third is quieter and worth stating because it connects to how the product actually works. Every bot on an account shares one computer, and the browser sessions and command line credentials on it are shared across all of them. A bot nobody owns may still hold a signed-in session to a tool nobody uses any more. Nothing isolates that session from every other bot on the account, so an abandoned job keeps a live login alive for the benefit of nothing.

## Write the retirement down, not just the deletion

When you do retire an unowned bot, spend two minutes recording why. Not for ceremony, for the next person who has the same idea.

Unowned bots are frequently good ideas that outlived their moment, which means the same idea will occur to someone again, probably in a quarter, probably to someone who was not there the first time. A one line note saying what it did, who owned it, and why it stopped being read prevents a rebuild of something that was already tried.

Keep the charter text with the note. If the job comes back, the difference between a ten minute rebuild and a rediscovery is whether the charter survived, and charters do not survive deletion.

## Expect ownership to decay rather than break

The last thing worth understanding is that this is not a one time cleanup. Ownership decays continuously, because the conditions that create it keep recurring: people change roles, meetings get cancelled, projects finish, priorities move. None of those events touch the bots, and none of them generate a prompt to review anything.

So treat the check as maintenance rather than a project. A roster cleaned today will have grown one or two unowned bots within a quarter, and that is normal rather than a sign the process failed. The failure mode is not that bots become unowned; it is that nobody looks, and so the count grows without limit until an audit finds eight of them at once and the cleanup is a day rather than ten minutes.

## Answer the objection that this is bureaucracy for a small team

The strongest version: a solo operator or a team of three does not need an ownership register. Everyone knows what everything does, the roster fits in one head, and adding owner lines and review dates is process for its own sake.

Half right, and the half that is wrong is the expensive half.

It is true that a small team does not need the register as a coordination tool. Nobody is confused about who owns what when there is one person. But the register is not solving coordination, it is solving memory, and memory fails at every team size. The solo operator who set up a listings watcher during a launch and forgot is the canonical case in this whole area, and there was nobody else to be confused.

What a small team can drop is the formality. You do not need a spreadsheet or a process document. You need the owner line in the charter, which costs one line, and a date that expires, which costs nothing until it catches something.

Where the objection genuinely wins: if your entire roster is three bots you personally use every day, you will notice an unowned one immediately and the register adds nothing. The moment the roster exceeds what you touch daily, it stops winning.

## Handle the awkwardness, because it is why nobody checks

There is a social reason unowned bots persist, and pretending otherwise makes the process fail.

Asking who read the last output of a bot sounds like asking whether a colleague has been doing their job. Nobody wants to be the person who raises it, so the question goes unasked, and the bot keeps running. The discomfort is small but it is real, and it is enough to prevent a ten minute check indefinitely.

Two things defuse it. First, run the check across every bot rather than the ones you suspect. A full read of the roster is a routine exercise; picking out three bots is an accusation. Second, expect the answer to be nobody for a couple of them and say so before you start. If the group knows in advance that finding unowned bots is the normal outcome rather than evidence of failure, the pause before someone admits it gets much shorter.

The framing that works is that the bot lost its owner rather than the person neglected it. Ownership lapsed because the world moved, which is a description of events rather than a judgement about anybody, and it is the framing most likely to get you an honest answer on the first pass instead of a defensive one that costs you another quarter. That is usually literally true: the meeting was cancelled, the project shipped, the role changed. Nobody neglected anything, and the bot simply had no way to know.

It also helps to have the owner line already in every charter before you run the first check, so the exercise is confirming something recorded rather than assigning blame retroactively. Setting the convention up front costs one line per bot and removes most of the awkwardness from every check that follows.

## Stop using this page when the shape is different

This page is about bots that run without a human reading them. It stops applying in three places.

If the question is which bots to keep on cost or overlap grounds rather than ownership, that is [a fleet audit](/blog/grok-bot-fleet-audit) and it is a different exercise with a different output. If the problem is that a bot can act overnight and you need a human reachable when it does, [on-call](/blog/grok-bot-on-call) covers that, and note it is a stronger requirement than ownership. And if the roster is large enough that scopes are colliding, [running a team of bots](/blog/multi-bot-teams) addresses the org-chart problem underneath.

Bots that help: [Bot Advisor](/bots/bot-advisor) reviews the roster weekly and names what went silent, which is the closest thing to an automatic unowned-bot detector. [Org Chart Keeper](/bots/org-chart-keeper) tracks who owns what among people. [Chief of Staff Router](/bots/chief-of-staff-router) is where the roster and its owner lines should live. And [Stuck Bot Foreman](/bots/stuck-bot-foreman) separates a frozen bot from a working one, which matters because a frozen bot looks unowned and is a different fix.

## Frequently Asked Questions

### How do I tell an unowned bot from one that is simply idle?

By activity, and the distinction matters because they need opposite treatment. An idle bot has not run in weeks, appears in any audit, and costs nothing to delete. An unowned bot runs constantly and produces on schedule, so it looks healthier than half the roster while consuming the shared weekly pool and carrying an unearned assumption of correctness. If you audit by activity you will find every idle bot and miss every unowned one, which is backwards, and it is what most roster reviews actually do.

### What single column reveals ownership honestly?

The date a human last used the bot's output for something. Not the date it ran, not the date it produced, but the date a person took what it made and acted on it. A name in a spreadsheet proves nothing, because people put their name against things they have not considered in a quarter and believe it in good faith. The gap between last produced and last used is the entire diagnostic, and it is usually the owner who is most surprised by what it shows.

### Should a team own a bot, or one person?

One person, always. A team owning a bot is functionally identical to nobody owning it, because responsibility shared without being assigned is responsibility deferred. The practical difference appears the moment output looks wrong: "the growth team owns that" produces no investigation, while "Marek owns that" produces one. Use a single name, a date the ownership started, and a last-reviewed date that expires after six weeks, so the claim has to be renewed by an act rather than asserted once and forgotten.

### Is it safe to just delete a bot nobody owns?

Pause first and set a date three weeks out. Pausing tests the assumption cheaply: if nobody notices, nothing depended on it and you can delete confidently, and if somebody surfaces asking where the report went, you have found the owner. Deletion is also less reversible than people expect, since routines belong to a Bot and die with it, run records go, and the charter text is lost unless you kept a copy. So copy the charter out, pause, then decide once the three weeks have passed.
`,
};
