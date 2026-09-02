import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Taking Over a Bot Somebody Else Designed',
  description:
    'Inheriting a bot means inheriting decisions you cannot see. What to read first, what to distrust, and what to rewrite before you let it run for you.',
  date: '2026-09-02',
  category: 'Playbook',
  content: `
# Taking Over a Bot Somebody Else Designed

Somebody leaves, changes role, or hands you a project, and now a bot is yours. It works. It has been working for months. You did not write a line of it.

The temptation is to let it keep running, because it is working and you have other things to do. That is usually fine and occasionally very expensive, and the difference is decided by a few things you can check in half an hour.

## Read the boundary before you read anything else

Open the charter and find the line that says what the bot will not do. Read that first, before the job description, before the steps.

The boundary tells you what the previous owner was worried about, which is the most compressed information available about how this bot can go wrong. A charter that says never sends externally was written by somebody who could see a path to it sending externally. That path still exists; only the instruction stands between it and happening.

If there is no boundary line at all, that is the finding. It does not mean the bot is dangerous, it means nobody has yet asked what it must not do, and you are now the person who has to.

## Establish what it can actually reach, not what it was for

A charter describes intent. What matters more is capability, and the two drift apart.

Every bot on an account shares one persistent cloud computer, and browser sessions, cookies and command line credentials on it are visible across bots. So a bot's real reach is not what its charter mentions, it is everything currently signed in on that machine.

| Question | Where the answer is | Why it matters |
|---|---|---|
| What was it designed to touch? | The charter | Intent, not capability |
| What is signed in on the computer? | The computer itself | This is the real reach |
| What plugins are connected? | The bot's configuration | Structured access, usually the safer kind |
| What could it reach if it went wrong? | Everything in row two | The blast radius you inherited |

That last row is the one people skip, and it is the whole reason inheritance deserves half an hour. You have taken on a bot whose ability to cause trouble is defined by sessions somebody else left open.

## Distrust every number in the charter

Charters accumulate figures: a cadence, a threshold, a minimum sample, a limit. Each was chosen for a reason, at a moment, by someone who is no longer available to explain it.

Some of those reasons still hold. Some were for a launch that ended in March. You cannot tell which from the charter, because people record the number and not the reason.

So treat every number as unexplained until proven otherwise, and ask about each one:

1. **Does the reason still apply?** A five minute cadence set during a busy fortnight is expensive and pointless a quarter later.
2. **Was it ever reasoned, or is it a default?** Many numbers are the first thing someone typed.
3. **What breaks if it changes?** If you cannot say, the number is probably not load-bearing and can be relaxed.

Write the reason next to each number once you have decided. You are the previous owner for whoever inherits it next, and the two minutes you spend now is the thing you wish had been done for you.

## Watch a threshold outlive the situation that produced it

Ravi inherited a monitoring bot from a colleague who moved teams. It watched error rates and flagged anything above a threshold. It had been running for five months and had flagged three times, all genuine.

He left it alone for six weeks, on the entirely reasonable grounds that it was working.

The threshold had been set during a period when the service was noisy, deliberately high so the bot did not fire constantly. The noise had been fixed in June. The threshold stayed where it was, which meant the bot was now watching for a level of failure the service would never reach in normal operation, and a real degradation in September sat under it for four days.

Nothing malfunctioned. The bot did exactly what it was told, and what it was told had been correct in April.

The check that would have caught it takes one question per number: what was happening when this was chosen, and is that still happening? Ravi could not have answered it, which is precisely the answer. A number nobody can explain is a number to re-derive.

## Rewrite the charter in your own words before you rely on it

This is the step that feels like busywork and is not.

Read the charter, then write your own version from scratch describing what you think it does. Then compare. Every place they differ is either a misunderstanding on your part or an instruction the original author left implicit, and both are worth finding before you depend on the thing.

The rewrite is also where you discover the parts you cannot explain. If you get to a step and cannot say why it exists, you have found the bit to ask about while the previous owner is still reachable, which is a window that closes fast.

\`\`\`
Inheritance pass, run once, keep the output:

1. Boundary line. Quote it. If absent, write one now.
2. Every number in the charter, with what I think the reason is,
   marked confident or guessing.
3. Every source it reads, and whether I confirmed it still
   resolves today.
4. Everything currently signed in on the computer that this bot
   could reach. Not what it uses. What it could reach.
5. The last three outputs, read in full rather than skimmed.
6. Anything in the charter I cannot explain, listed as questions
   for the previous owner while they are still reachable.

Nothing runs unattended until 1, 3 and 6 are done.
\`\`\`

## Read three real outputs in full, not a summary

Skimming is how you inherit a bot that has been quietly degrading. Take the last three outputs and read them properly, the way the intended reader would.

You are looking for two things specifically. Whether the claims are actually supported by the sources cited, and whether the output has been getting thinner. Thinning is the common failure and it never announces itself: a source moves behind a login, the bot reports what it can still see, and the artefact keeps its shape while losing substance.

Comparing an output from this week against one from three months ago is the fastest way to see it, and it takes about four minutes.

## Ask what it was supposed to feed, not just what it does

A bot's value is defined by what happens downstream, and that context is what disappears in a handover.

Many inherited bots turn out to be feeding something that no longer exists: a meeting that stopped, a report nobody circulates, a decision that is now made differently. The bot is fine. The purpose evaporated and the bot had no way to know.

So the question is not is this bot working, it is who reads this and what do they do with it. If the answer is nobody, you have not inherited a bot, you have inherited a decision about whether to retire one. That is a much easier problem than maintaining something you do not understand.

| What you find | What you have inherited |
|---|---|
| A named person reads it and acts | A real bot, do the inheritance pass |
| It feeds a process that still exists | A real bot, confirm the process still needs it |
| It feeds something that stopped | A retirement decision, not a maintenance job |
| Nobody knows what it feeds | Pause it and see who complains |

## Pause anything you cannot explain, rather than trusting the handover

If the inheritance pass leaves you with a bot you do not understand, pause it. This is not caution for its own sake; it is the cheapest available experiment.

Three weeks of silence tells you it was not load-bearing. Somebody surfacing on day four tells you what it fed and who cares, which is exactly the information the handover failed to give you. Either outcome is better than running something unexplained on your account, with your logins, under your name.

Copy the charter out before pausing. Routines belong to the bot and die with it, so if the decision later becomes deletion, the charter is the only thing worth keeping and it is not recoverable afterwards.

## Take the ownership line seriously, because you are now it

The handover is the moment ownership is most likely to be lost, and it is lost by omission rather than refusal.

Bots are almost never on a handover checklist. Projects are, accounts are, documents are. A bot that quietly does something useful is exactly the kind of thing that transfers by assumption, with both parties believing the other has it. Two weeks later nobody is reading the output and nobody has noticed.

So write your name against it explicitly, with the date. And if you are not going to own it, say so out loud rather than leaving it running, because an unowned bot keeps consuming the shared allowance and keeps producing output that acquires credibility from arriving on schedule.

## Confirm every source still resolves, today

An inherited bot was configured against a world that has since moved, and sources are where that shows up first.

Pages move behind logins. Feeds get consolidated. An export that used to include a column stops including it. None of these produce an error, because from the bot's side a page that now returns a login screen is simply a page, and it will summarise the login screen quite competently if you let it.

| Source state | What the bot does | What you see |
|---|---|---|
| Still resolves, unchanged | Normal output | Nothing to notice |
| Moved behind a login | Reads the login page | Thinner output, same confidence |
| Consolidated elsewhere | Reads a redirect target | Plausible content, wrong subject |
| Returns nothing | Reports zero | A zero that reads as a real finding |

Open each source yourself, in a browser, today. It takes a few minutes for most bots and it is the single highest-yield check in the whole pass, because it catches the failure mode that produces confident wrong output rather than obvious breakage.

While you are there, add the instruction that prevents the silent version recurring: require the bot to list, in every output, which sources it read successfully and which it could not, and to print could-not-read rather than zero. That one line converts an invisible degradation into a visible one.

## Ask the previous owner the questions only they can answer

There is a short window where the person who built it is still reachable, and it closes faster than you expect. Spend it on the things that are genuinely not recoverable from the artefact.

Not how does it work: the charter tells you that, and asking wastes the window. Ask instead:

1. **What went wrong early on that you fixed?** Almost every charter contains a line that exists because of an incident, and the line survives while the story does not. Knowing which lines are scar tissue tells you which ones not to tidy away.
2. **What did you consider and reject?** Saves you re-deriving a decision they already made, and occasionally reveals that the rejection no longer applies.
3. **Who reads this and what do they do with it?** The downstream context is the first thing lost in a handover and the hardest to reconstruct.
4. **What would you change if you were staying?** People often know exactly what is wrong with something they built and have never had the reason to fix it.

Write the answers into the charter as comments rather than keeping them in your head. The next inheritance is coming, and the whole reason this pass is necessary is that nobody wrote these down last time.

## Decide the first week deliberately, then stop auditing

The pass has a natural end, and continuing past it is its own failure.

| Day | What you do |
|---|---|
| 1 | Boundary, sources, and what the computer has signed in |
| 1 | Read the last three outputs in full, and one from months ago |
| 2 | Rewrite the charter in your own words, list what you cannot explain |
| 2 | Ask the previous owner the four questions, while reachable |
| 3 to 7 | Let it run, watch each output as it arrives |
| 8 | Decide: keep as is, change something specific, or retire |

The reason to fix an end date is that an inherited bot you are perpetually half-auditing is worse than either owning it or retiring it. You get the cost of the bot plus the cost of your uncertainty, and the uncertainty never resolves because nothing forces the decision.

Day eight is the forcing function. By then you have read a week of live output, which is far more informative than any amount of charter reading, and you know enough. Decide, write your name against it, and go back to your actual work.

The one thing not to do is leave it running while telling yourself you will look properly later. That is how a bot becomes unowned without anyone deciding to abandon it, and it is the state this entire page exists to prevent.

## Answer the objection that this is a lot of ceremony for a working bot

The fair version: the bot works. It has worked for months without you. Spending half an hour auditing something that is not broken is process for its own sake, and you have real work.

Two responses, and the first concedes the point for most cases.

For a low-stakes bot that reads public sources and writes to a document you control, letting it run and checking in a month is genuinely fine. Not every inheritance needs the full pass, and applying it universally would be exactly the ceremony the objection describes.

The pass earns its half hour when the bot can do something you would not want done in your name: send anything, touch a customer record, change a setting, spend money, or read something confidential. There the relevant fact is not that it works, it is that it now works as you, on your account, with the blast radius of every session on that shared computer. The previous owner's judgment about what was safe was made in a context you cannot see and may no longer hold.

The practical rule: if the bot has a boundary line, do the pass, because the boundary is evidence that somebody thought it could go wrong. If it genuinely cannot act, skim it and move on.

## Stop using this page when the shape is different

This page is about inheriting a bot that somebody else built and still runs. It stops applying in three places.

If nobody owns it and nobody is handing it over, the problem is upstream and [the bot nobody owns](/blog/the-bot-nobody-owns) covers finding those before they need inheriting. If you are the one leaving rather than arriving, what you can actually hand over is narrower than people expect and [sharing a bot](/blog/share-a-grok-bot) has the mechanics. And if you have inherited several at once and the question is which to keep at all, that is [the quarterly cull](/blog/the-quarterly-roster-cull) rather than a maintenance pass.

Bots that help: [Chief of Staff Router](/bots/chief-of-staff-router) is where a roster and its owner lines belong, which is what makes a handover possible at all. [Bot Advisor](/bots/bot-advisor) reviews a roster and names what overlaps and what went silent. [Org Chart Keeper](/bots/org-chart-keeper) tracks ownership among people. And [Stuck Bot Foreman](/bots/stuck-bot-foreman) tells you whether an inherited bot is working or frozen, which is the first thing you want to know and the hardest to see from outside.

## Frequently Asked Questions

### What should I read first in an inherited bot?

The boundary line, before the job description or the steps. It tells you what the previous owner was worried about, which is the most compressed information available about how the bot can go wrong. A charter saying never send externally was written by somebody who could see a path to it sending externally, and that path still exists with only the instruction between it and happening. If there is no boundary line at all, that is itself the finding: nobody has yet asked what this bot must not do, and you are now the person who has to.

### How do I know what an inherited bot can actually reach?

Look at the computer, not the charter. The charter describes intent; capability is defined by what is currently signed in on the shared machine, because every bot on an account uses the same one and browser sessions, cookies and command line credentials there are visible across all of them. A bot's real blast radius is everything logged in on that computer, regardless of what its own instructions mention. That gap between designed reach and actual reach is the main thing you inherit, and it is invisible from the charter alone.

### Should I trust the numbers in the charter?

Treat every number as unexplained until you can explain it. Cadences, thresholds and limits were each chosen at a moment for a reason, and people record the number without the reason. Some still apply and some were set for a situation that ended months ago, and the charter cannot tell you which. Ask of each: what was happening when this was chosen, and is that still happening? If you cannot answer, re-derive it. Then write the reason beside the number, because you are the previous owner for whoever inherits it next.

### What if I inherit a bot nobody can explain?

Pause it, after copying the charter text somewhere outside the product. Pausing is the cheapest available experiment: three weeks of silence tells you it was not load-bearing, and somebody surfacing on day four tells you what it fed and who cares, which is exactly what the handover failed to give you. Either result beats running something unexplained on your account, under your name, with your logins. Copy the charter first because routines belong to the bot and die with it, so deletion later is unrecoverable.
`,
};
