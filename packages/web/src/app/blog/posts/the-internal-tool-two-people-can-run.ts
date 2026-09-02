import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'The Internal Tool Only Two People Know How to Run',
  description:
    'Every team has one: a weekly process that lives in two heads and no document. Moving it to a Bot forces the write-up nobody ever got around to.',
  date: '2026-09-02',
  category: 'Migration',
  content: `
# The Internal Tool Only Two People Know How to Run

Every team past about fifteen people has one of these. A weekly process that produces something everybody depends on, that two named people know how to run, and that has never been written down anywhere a third person could follow.

It is usually not glamorous. A reconciliation between two systems that disagree. A report assembled from four exports. A queue somebody triages by hand every Monday because the rules are too fiddly to encode. It works. It has worked for two years. And when one of the two people is out, the other one does it, and when both are out, it does not happen and somebody notices on Wednesday.

This article is about moving that process into a Grok Bot, and about the thing that makes the move worth doing regardless of whether the Bot ends up running it: writing the charter forces you to say out loud what the process actually is.

## The reason a workflow diagram never fixed this

Somebody has probably already tried to document it. There may be a wiki page. There is often a diagram with boxes.

The diagram is not wrong. It is just not sufficient, and the gap is always the same: the diagram records the steps and omits the judgement. Step four says "check the exceptions." It does not say what makes something an exception, what you do with one, when you escalate instead of resolving, or which of the three plausible readings of an ambiguous row is the one this team has always used.

That judgement is the actual content of the process. It lives in the two people. A new hire handed the diagram will produce something that looks like the output and is wrong in ways nobody catches for a month.

A charter has to contain the judgement, because there is no second person to fill it in. That is the forcing function. You cannot write a working charter for a process you only half understand, and the failure is immediate and visible rather than deferred to whoever inherits the diagram.

## Start by watching a run, not by writing

The first instinct is to sit down with the two people and interview them. This produces a description of the process as they believe they perform it, which is reliably different from the process they actually perform.

Not because anyone is being careless. Expertise compresses. Somebody who has done a thing two hundred times stops noticing the small decisions, and the small decisions are what you need.

Watch one run instead. Sit with whoever is doing it this week and record every point where they make a call, including the ones they do not narrate. Ask about each one afterwards rather than interrupting, because the interruption itself changes what they do.

| What to record | Why it matters later |
|---|---|
| Every source they open | The charter needs the full list, not the main two |
| Every decision, including instant ones | Instant decisions are the most compressed and least documented |
| Anything they skip and why | Skips encode rules nobody wrote down |
| What they check before finishing | This becomes the bot's self-check |
| What they would escalate | This becomes the boundary |

One run is usually enough to get eighty percent. The remaining twenty shows up when the charter meets a week that does not look like the week you watched, which is why the first month of running is part of the migration rather than after it.

## Write down what the output is for

Before the steps, write the purpose. One paragraph, plainly: who reads this, what decision it feeds, and what would go wrong if it were late or wrong.

This sounds like padding and it is the most load-bearing part of the charter. Nearly every judgement call in the process resolves against it. Should an ambiguous row be included or flagged? Depends whether the reader is making a spending decision from the total or scanning for anomalies. Should a missing source block the whole output or produce a partial one? Depends whether a partial is useful or misleading to whoever gets it.

Without the purpose stated, the bot has no basis for those calls and will make them arbitrarily but confidently. With it stated, most of them answer themselves, and so do the ones you did not think to write rules for.

It also tells you something uncomfortable roughly one time in five: nobody can articulate what the output is for any more. It was for a decision that stopped being made a year ago, and it has been produced every week since out of momentum. That is a finding worth the whole exercise, and the correct next step is not a bot.

## What the bot gets and what stays with a person

Not all of it moves. The split is the design work.

The bot should get the parts that are mechanical, repeatable, and verifiable: collecting sources, normalising formats, computing the same aggregation every week, assembling the draft, flagging rows that meet a stated condition. These are the parts that consume most of the ninety minutes and require the least judgement.

A person should keep anything where being wrong is expensive and the rule is genuinely unstateable. If after honest effort you cannot write down what makes something an exception, that is not a failure of writing, it is a signal that the decision needs a person. Leave it with the person, and have the bot present them with the candidates instead of resolving them.

| Part of the process | Where it goes | Why |
|---|---|---|
| Pull four exports | Bot | Mechanical, same every week |
| Normalise and join | Bot | Rules are stateable |
| Compute the totals | Bot | Deterministic |
| Flag rows over threshold | Bot | Condition is explicit |
| Decide what an exception means | Person | Rule genuinely resists writing down |
| Send to finance | Person | Outbound, and it is the commitment point |

The output of this split is often that ninety minutes becomes twelve. Not zero, and the twelve are the part that was always the actual job.

Two catalogue entries are useful as starting shapes here rather than as answers. [expense-reconciler](/bots/expense-reconciler) is the reconciliation pattern: two systems that disagree, a stated rule for which one wins, and a flag rather than a fix when neither does. [support-queue-pass](/bots/support-queue-pass) is the triage pattern: a bot that sorts and annotates and hands the actual decisions to a person in a shorter list than it started with. Neither will match your process. Both show where the person is meant to sit, which is the part most first drafts get wrong by giving the bot the judgement and keeping the typing.

## Write the charter in the order somebody would need it

A charter that works reads like an operating manual for a competent stranger. Purpose first, then sources with enough detail to find them, then the sequence, then the judgement rules, then what to do when something is missing, then the boundary.

Be specific about sources in a way the wiki page never was. Not "the finance export" but which system, which report name, which filter, and what the file looks like when it is correct. Half the failures in a migrated process are the bot reading the right-looking wrong thing.

Be specific about the sequence where order matters and explicitly loose where it does not. If step three genuinely must follow step two because two produces the identifiers three needs, say that. If four and five are independent, say that too, so a run that fails on four still produces five.

## The rules you will discover you disagree about

Here is the part nobody plans for. You will get two people in a room to write down the judgement rules and they will disagree about what the rules are.

This is not a problem with the migration. It is the migration finding something real: the process has been running with two slightly different implementations depending on who did it that week, and nobody knew because both outputs looked plausible.

Resolve it explicitly. Pick one reading, write it down, and tell the readers of the output that the treatment of this case changed as of this date. A quiet change here is worse than a noisy one, because somebody comparing this quarter to last will find a discontinuity they cannot explain.

Occasionally the disagreement is large enough that you should not resolve it yourself and it needs whoever owns the decision the output feeds. Take it to them. It has been ambiguous for two years and this is the first time anyone has had to say it out loud.

## Give it a boundary before you give it a schedule

The process you are moving probably touches things that matter: financial systems, customer records, internal tooling with write access.

The boundary belongs in the charter, at the top, before the steps. Read these systems, write only to this document, never send anything outward, escalate rather than resolving anything above this threshold.

Two facts should shape how you write it. A Bot's boundary is a charter line, not an enforced sandbox: it constrains a system that follows instructions well rather than a system that cannot do otherwise, so it belongs in a charter and does not belong in place of an access control. And the shared computer is shared across your account, so signed-in sessions, files and command line credentials are shared with every Bot on that account. Do not use separate Bots as a security boundary. If this process needs access that other work should not have, that separation belongs at the account level, not the Bot level.

Practically, for an internal tool: give the Bot read access to what it needs, keep the write narrow, and keep the outbound step with a person for at least the first quarter.

## Run both for a month

Do not cut over. Run the bot and the person in parallel for four weeks and compare.

The comparison is the point. Week one will surface the obvious gaps. Weeks two and three surface the ones that only appear when the input is shaped differently than the week you watched. Week four is usually clean, and if it is not, the migration is not finished and the parallel run continues.

| Week | What you are looking for |
|---|---|
| 1 | Missing sources, wrong file, format surprises |
| 2 | Judgement calls the charter did not cover |
| 3 | Edge cases: month end, a holiday, a late input |
| 4 | Nothing. If week four differs, keep going |

Keep the differences in writing rather than fixing them silently. A list of twenty resolved differences is the best documentation this process has ever had, and it belongs next to the charter.

Do not skip the parallel run because week one went well. The failure mode of an internal tool migration is not a bad first week, it is a good first week followed by a quiet wrong answer in week six that nobody checks because week one went well.

## The bus factor was the point

Come back to why you did this.

The original problem was that two people knew how to run something and nobody else did. Notice that a working charter solves that problem whether or not the bot ends up running the process. The write-up exists now. A third person can read it and do the thing. The judgement is on paper.

That is worth saying because the migration sometimes ends with a decision not to automate: the judgement turns out to be too much of the work, or the volume does not justify it, or the parallel run shows the person catches things the bot cannot. Those are fine outcomes. You still fixed the bus factor, which was the expensive part.

The failure mode to avoid is treating the bot as the documentation. It is not. The charter is the documentation, and it should read well enough that a person could follow it with the bot switched off. If your charter only makes sense as instructions to a machine, you have moved the knowledge from two heads into one Bot, which is a smaller improvement than it looks.

## Write down what breaks and who hears about it

The undocumented process has an undocumented failure mode: when it goes wrong, the two people know, and they fix it before anybody else finds out. That recovery is invisible and it is part of the process.

Once a bot runs it, the quiet recovery stops happening by default. The bot does what the charter says, and if the charter says nothing about a missing input, it will either stop or improvise, and both are worse than the thing the person used to do.

So write the failure branches explicitly. For each source, what happens if it is absent, empty, or obviously wrong. For each rule, what happens if the input does not fit any branch. And for each of those, who hears about it and how.

| Failure | What the person used to do | What the charter should say |
|---|---|---|
| One export missing | Chase it, run late | Produce the rest, name the gap at the top, notify |
| A source looks wrong | Notice, investigate | Stop, report what looked wrong, do not guess |
| Row fits no rule | Use judgement | List it as unresolved for a person |
| Total moved a lot | Double check before sending | Flag the delta, do not suppress it |

The right-hand column is deliberately more conservative than the left. A person chasing a missing export is applying judgement about whether it is worth chasing today. A bot cannot, so it should surface rather than decide. You can loosen this later once you have watched it for a quarter, and almost nobody needs to.

The notification target matters as much as the rule. "Notify the team" is not a target. Name a person or a channel, and make sure whoever it is knows they are on the receiving end of it, because a flag nobody reads is the same as no flag with extra steps.

## Keep the charter where the process lives

A charter that lives only inside the Bot has recreated the original problem in a new place. It is now documentation that one system holds and no person maintains.

Keep a copy where your team keeps its other operating documents, next to whatever wiki page the old diagram was on, and treat the Bot's copy as the deployed version of it. When you change one, change both, in the same sitting, or you will spend a Tuesday next spring working out which one is real.

The related habit worth borrowing is [the weekly bot review](/blog/the-weekly-bot-review): a short recurring look at what the bot produced and whether the charter still describes reality. For a migrated internal process this matters more than for most bots, because the inputs are internal systems that other teams change without telling you.

## Answer the objection that this is over-engineering a ninety minute task

A reasonable person reads the parallel run and the watched run and the written rules and says: this is four weeks of effort to automate a ninety minute weekly task, and the arithmetic does not obviously work.

Take the objection seriously, because sometimes it is correct. If the process is genuinely stable, the two people are not going anywhere, and the output feeds a decision nobody makes urgently, the honest answer may be to leave it alone.

The arithmetic changes on three conditions. When the output feeds something time sensitive, so a week where both people are out is expensive rather than annoying. When the process is growing, so ninety minutes is trending toward three hours. And when one of the two people is leaving, which is the usual reason anyone finally does this and the worst time to start, because the knowledge walks out on a date.

The cheapest version, if none of those apply, is to do the watched run and write the charter and stop there. That is a day, not four weeks, and it captures most of the value. The automation is optional. The write-up is not.

## Common questions

### Should the two people write the charter, or should someone else?

Someone else should hold the pen, with the two people answering. An expert writing their own process skips the parts that feel obvious, and the parts that feel obvious are exactly the undocumented judgement you are trying to capture. A third person writing it has to ask, and the asking is the value.

### What if the two people disagree about how the process works?

That is a finding, not an obstacle. It means the process has been running two slightly different ways depending on who did it, and no output ever revealed the difference. Pick one reading deliberately, write it down, and tell whoever reads the output that the treatment changed on this date rather than letting the discontinuity appear silently.

### How long should the parallel run be?

Four weeks as a default, and longer if the process has a monthly or quarterly shape, because you want the bot to have met a month end before you trust it alone. Stop the parallel run when a week passes with no difference between the two outputs, not when you run out of patience.

### Does this work if the process needs access to sensitive systems?

It works, with the access decided at the account level rather than the Bot level. The shared computer is shared across the account, so signed in sessions, files and command line credentials are shared with every Bot on that account, and a separate Bot does not create a separate blast radius. Give the account the access the process needs and no more, and keep any outbound or irreversible step with a person.

## When this page stops applying

Grok Bot is in beta and the details move. The specific mechanics here, how routines are scheduled, what the computer can reach, how a charter is edited, are the ones current when this was written.

What is unlikely to move is the shape of the problem. Undocumented processes concentrate in a few heads, the concentration is invisible until somebody leaves, and the act of writing instructions precise enough for a machine is the same act as writing instructions precise enough for a stranger. That was true before any of this tooling existed and will outlast the current version of it.

If you take one thing: watch a run before you write anything. Everything useful in the charter comes from the twenty minutes where somebody made a decision they did not think was worth mentioning.
`,
};
