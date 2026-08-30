import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'The Critic: The Bot Role Everyone Skips and Then Needs',
  description:
    'A critic bot checks another bot output against a written standard and sends it back. Why teams skip the role, what it costs to add, and how it fails quietly.',
  date: '2026-08-30',
  category: 'Playbook',
  content: `
# The Critic: The Bot Role Everyone Skips and Then Needs

Every roster you will read about has a researcher, a writer, and something that files the output somewhere. Almost none of them have a bot whose only job is to decide the work is not good enough yet.

That role is the difference between a team that produces a lot and a team that produces things you would put your name on. It is also the first role cut, because it is the only one that makes the pipeline slower and produces nothing you can point at.

## Understand what a critic checks, which is never taste

A critic bot does not decide whether something is good. It decides whether something meets a standard you wrote down. Those are different jobs and only the second one can be delegated.

If the standard is "make it compelling", you have not built a critic, you have built a second opinion, and a second opinion from a model is worth roughly what it cost you. If the standard is "every claim carries a dated source, the format matches the template, and no section is under two paragraphs", you have built something that catches real defects on the fiftieth run as reliably as the first.

| Standard you write | Can a critic check it? | Why |
|---|---|---|
| Every claim has a dated source link | Yes | Presence, checkable |
| No section shorter than two paragraphs | Yes | Countable |
| Matches the output template exactly | Yes | Structural |
| Contains no claim absent from the research doc | Yes | Set comparison |
| Reads well | No | Not a property of the artefact |
| Sounds like us | Only against a style guide | The guide is the standard, not the vibe |
| Is this the right strategy | No | That is your job and always will be |

The rule of thumb: if you cannot describe how you would check it with a highlighter and twenty minutes, a bot cannot check it either.

## Give the critic the power to reject and nothing else

The single most important design decision here, and the one most people get backwards: a critic must not be able to fix what it finds.

The instinct is efficiency. It found the problem, it knows the fix, let it apply the fix. What you get instead is a bot that quietly rewrites the specialist's work, and now nobody can tell which parts came from the researcher and which the critic invented. Worse, a critic that edits has an incentive to find things to edit, because that is what producing output looks like for it.

\`\`\`
You are Critic. You check work against the standard below and you
send it back. You never edit, never rewrite, never fix.

The standard, in order:
1. Every factual claim traces to a source in the research document.
   A claim not present there is a fail, even if it is true.
2. Every source link resolves and is dated within 12 months.
3. The output matches the template: summary, findings, evidence,
   open questions. A missing section is a fail.
4. No section under two paragraphs.

Your output is exactly one of two things:
  PASS, plus the one line reason it passes.
  RETURN, plus a numbered list of specific failures, each quoting
  the offending text and naming the rule it broke.

You never suggest replacement wording. You never say "consider
rephrasing". You name what failed and hand it back.

If the standard does not cover something that looks wrong to you,
say so in a section called UNRULED, marked clearly as opinion, and
keep it to three lines. Do not fail work on an unruled objection.
\`\`\`

That last block matters more than it looks. It gives the critic somewhere to put the thing it noticed without letting that thing block work, and it tells you where your standard has a gap.

## Watch a team of three produce confident nonsense for a fortnight

Marcus ran a research and drafting pair for two weeks. A researcher gathered sources into a document, a writer turned them into a weekly competitive brief. The briefs looked excellent: well structured, confident, specific.

In week three someone in a sales call quoted a pricing figure from one of them. The figure was wrong. It had never appeared in the research document at all. The writer had produced a plausible number in a sentence that needed one, and every subsequent brief had carried it forward because the writer read the previous brief for continuity.

Nothing in the pipeline had a job that included checking. The researcher's job ended at the document. The writer's job started there and was measured on producing a brief. Marcus reviewed the briefs, but he reviewed them the way you review something that has always been fine, which is to say he read the summary.

The fix was one bot with one rule: no claim may appear in the brief that is not in the research document. That rule would have caught it on day one, and it is checkable without any judgment at all.

## Measure the critic by what it returns, not by what it passes

A critic that never rejects anything is not a strict critic that got lucky. It is a broken critic, and it is the most common failure mode because it looks like success.

Track the return rate. In the first fortnight of a new pipeline a healthy critic returns something like a third to a half of what it sees, because the specialists have not yet learned the standard. That rate should fall as the specialists adapt, and then flatten somewhere well above zero.

| Return rate | What it usually means | What to do |
|---|---|---|
| 0 percent, week one | The critic is not actually checking | Feed it known-bad work and see if it catches it |
| 40 percent, falling | Working as designed | Nothing, this is the shape you want |
| 0 percent, week six | Either genuinely good, or drift | Feed it known-bad work again |
| 90 percent, not falling | The standard is wrong or impossible | Fix the standard, not the specialists |
| Rises suddenly | Something upstream changed | Look at the specialist, not the critic |

The known-bad test is the whole discipline here. Once a month, hand the critic a document you have deliberately broken in three ways, and confirm it catches all three. A critic nobody tests becomes a rubber stamp within a quarter and gives no signal when it does.

## Keep the critic blind to who produced the work

If your roster has two specialists producing similar output, do not tell the critic which one wrote what. Not because a bot holds grudges, but because the moment the author is in the prompt, the author becomes available as context, and context leaks into judgment in ways you cannot audit.

This matters more when you are using the critic to decide between two approaches rather than to check one. A critic that knows option A came from the expensive specialist and option B from the cheap one is no longer comparing the options.

## Choose between a strict critic and a fast one, deliberately

The same role can be tuned two ways and they suit different pipelines. Decide which you are building before you write the standard, because the tuning shows up in how you word the rules rather than in a setting somewhere.

| | Strict critic | Fast critic |
|---|---|---|
| Rule wording | Fails on ambiguity | Passes on ambiguity, flags it |
| Return rate | Higher, stays higher | Lower, falls quickly |
| Suits | Anything a customer or a regulator sees | Internal drafts, high volume |
| Failure mode | Specialists learn to write for the rules | Defects reach a human occasionally |
| Cost | A cycle more often | Cheaper, weaker guarantee |

A strict critic treats anything it cannot verify as a failure. A fast critic passes it and marks it for your attention. Neither is correct in general and picking one by accident is how you end up with a pipeline nobody trusts and nobody can explain.

The tell that you chose wrong: with a strict critic, specialists start writing shorter and vaguer, because vague claims are easier to source. With a fast critic, you find yourself reading the flags anyway, which means you built a slower path to your own review.

## Give the critic the input, not just the output

A critic handed only the finished artefact can check structure, formatting, and whether links resolve. It cannot check the thing that matters most, which is whether the output says anything the input did not support.

So the handoff carries both: the research document and the draft written from it. That single change moves the critic from a formatting checker to something that catches fabrication, and fabrication is the failure that actually costs you.

This has a cost worth naming. Two documents through the critic is more work per pass than one, and on a long research document it is meaningfully more. If your allowance is tight, this is the place to spend it rather than on a second specialist, because a second specialist doubles the volume of unchecked work while this checks the volume you already have.

There is a cheaper version if the full comparison is too expensive: have the specialist produce a claims list alongside the draft, one line per factual assertion with its source, and have the critic check the list against the sources and the draft against the list. Two small comparisons instead of one large one, and the claims list is useful to a human reader on its own.

## Decide what happens on the third return

A draft that comes back twice is normal. A draft that comes back three times means something is wrong that another cycle will not fix, and without a rule the pipeline will just keep cycling.

Write the escalation into the charter. On the third return, the work stops and comes to you with the draft, the returns, and the specialist's own account of why it could not satisfy the rule. Almost always the answer is one of three things: the standard is wrong, the source material genuinely does not support what was asked for, or the task was underspecified from the start.

All three are your problem rather than the bot's, and all three are cheap to fix once you can see them. Without the escalation rule you never see them, because the loop is quiet and it looks like work is in progress.

## Answer the objection that a critic doubles your cost for nothing

Stated at its strongest: you have added a step that produces no deliverable, consumes the same shared weekly allowance as everything else, and slows every job by a full cycle. On a small team the person reviewing at the end was already the critic, so you have paid twice for one function.

Three answers, and the first one concedes a lot.

If you genuinely read every output carefully before it goes anywhere, you do not need this and should not build it. The critic replaces a review that is happening, not one that is supposed to be happening.

But most people do not read carefully by week three. They read the first output carefully, the fifth quickly, and the twentieth not at all, because twenty good outputs in a row is exactly the training signal that teaches you to stop looking. The critic does not get bored, which is not a small property, it is the entire property.

And the cost is asymmetric in a way that favours the critic. A returned draft costs one cycle. A wrong number quoted on a sales call costs a relationship, and you find out weeks later with no way to trace how it got there.

Where the objection wins outright: one-off work. A critic earns its slot on a repeating pipeline, where the standard is stable and the volume is high enough that attention decays. For a job you will run twice, write the thing and read it.

## Put the critic last, never in the middle

A critic between two specialists creates a queue and a blame problem. Put it at the end, checking the artefact that is about to reach a human, because that is the only point where a defect actually costs something.

| Position | What it catches | What it costs |
|---|---|---|
| After the researcher | Bad sources, early | A cycle on work that may be discarded anyway |
| Between specialists | Handoff defects | Two queues, and unclear ownership |
| At the end, before you | Everything that would have reached a person | One cycle, on the artefact that matters |
| After you | Nothing useful | You already read it |

The exception is a pipeline where a defect early makes all downstream work worthless. Research feeding a long document is the classic case: if the sources are bad, the writing time is wasted. There, a cheap source check straight after the researcher pays for itself, and the real critic still sits at the end.

## Write the standard where the specialists can read it

Keep the standard in one file on the shared computer, and have both the specialists and the critic read it from there. Not two copies. Not a paraphrase in each charter.

Two copies drift, and the way you discover they drifted is a fortnight of returns that everybody thinks are unfair. When the specialist's copy says twelve months and the critic's says six, the specialist is producing correct work by its own rules and being rejected by rules it cannot see.

This is worth stating plainly because the shared computer makes it easy: every bot on the account reads the same disk. One file, one standard, both roles pointed at it.

## Expect the critic to be the first thing you switch off, and plan for that

When a deadline arrives, the critic is what gets bypassed. Someone takes the draft straight from the writer because there is no time for another cycle.

That is going to happen and it is sometimes the right call. What you should not do is bypass it silently. Make the bypass visible: if a draft skipped the critic, the document says so at the top, in the artefact itself rather than in a Slack message that scrolls away.

Otherwise you get the worst version of this, which is a pipeline that has a critic in the diagram and rarely in the path, and a team that trusts outputs because they know a critic exists somewhere.

## Do not let the critic become a second author through the back door

Watch for a specific drift. The critic returns work with increasingly specific objections, the writer starts pre-empting them, and within a month the writer is writing for the critic rather than the reader. The output passes cleanly and gets worse.

The signal is easy to spot once you look for it: outputs that satisfy every rule and land badly with the person who reads them. When that happens the standard has become the goal, which means the standard needs changing rather than the writer.

Re-read the standard against the last month's outputs quarterly. Any rule that has never once fired should be deleted. Any rule that fires on almost everything is either badly written or describing a real problem you should fix upstream instead.

## Start with one rule, not with a rubric

The failure of ambition here is writing a twenty-point standard on day one. Nobody can tell whether a twenty-point critic is working, because you cannot hold twenty rules in your head while reading its output.

Start with the single rule whose violation would embarrass you most. For most research pipelines that is: no claim in the output that is not in the sources. Run that alone for a fortnight. Add the second rule only when the first has stopped firing.

A one-rule critic that you trust is worth more than a comprehensive one you cannot evaluate.

## Stop using this page when the shape is different

This page is about a bot that checks another bot's output on a repeating pipeline. It stops applying in three places.

If your problem is that reviewing bot output has itself become the job, adding another reviewer makes it worse, and [review fatigue](/blog/grok-bot-review-fatigue) is the better starting point. If you have not yet decided who owns what, the critic is premature and [running a team of bots](/blog/multi-bot-teams) covers the roles first. And if your roster is already at the ceiling, remember a critic costs a slot like anything else: [six bots to a channel](/blog/six-bots-to-a-channel) has the trade.

Nearby bots: [Citation Checker](/bots/citation-checker) is a critic scoped to one rule, links and quotes, which makes it a good first one to run. [PR Review Sentinel](/bots/pr-review-sentinel) does the same job on pull requests. [Source Verifier](/bots/source-verifier) checks claims against primary sources and returns verdicts rather than edits. And [Style Guide Enforcer](/bots/style-guide-enforcer) checks a draft against a written guide and never rewrites it, which is the pattern this whole page describes.

## Frequently Asked Questions

### What should a critic bot actually check?

Only things you could check yourself with a highlighter and twenty minutes. Presence of sources, resolution of links, structural completeness against a template, minimum lengths, and whether every claim in the output also appears in the input document. What it cannot check is quality, tone, or strategy, because those are not properties of the artefact you can state as a rule. If your standard contains the word compelling or the phrase reads well, you have written a second opinion rather than a critic, and a second opinion from a model is worth what it cost you.

### Why should the critic not fix the problems it finds?

Because a critic that edits destroys the provenance of the work. Once it rewrites, nobody can tell which sentences came from the specialist that gathered the evidence and which the critic produced to satisfy its own rule. It also creates a bad incentive: producing output is what a bot does, so a critic able to edit will find things to edit. Keep it to two outputs, PASS with a reason or RETURN with numbered specific failures quoting the offending text, and let the specialist do the fixing.

### How do I know the critic is working rather than rubber-stamping?

Track the return rate and test it deliberately. A healthy new critic returns roughly a third to a half of what it sees in the first fortnight, and that rate falls as specialists learn the standard, then flattens above zero. A zero percent rate in week one means it is not really checking. Once a month, hand it a document you have broken in three specific ways and confirm it catches all three. A critic nobody tests drifts into a rubber stamp within a quarter and produces no signal at all when it does.

### Is a critic worth a slot when my roster is small?

Only on repeating work. On a pipeline you run weekly, yes, because the thing it replaces is your own careful review, and your careful review reliably decays after about twenty good outputs in a row. The bot does not get bored, which is the entire value. For one-off work it is not worth it: write the thing and read it. If you genuinely still read every output closely before it goes anywhere, you do not need a critic and should spend the slot on something that produces.
`,
};
