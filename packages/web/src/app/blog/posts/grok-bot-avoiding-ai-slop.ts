import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How To Stop Your Bot Producing Slop',
  description:
    'AI slop prevention starts with a precise definition: fluent, plausible, generic, unfalsifiable. Attack each property, and grade every draft against a rubric that fails.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# How To Stop Your Bot Producing Slop

Your bot produced eight hundred words on customer retention. Every sentence is
grammatical. The structure is sound. There is an introduction, three points,
and a conclusion that ties back. You read it twice and you cannot say what is
wrong with it, only that you would be embarrassed to publish it.

That feeling is not fussiness and it is not a taste disagreement. There is
something specific wrong with the text, and until you can name it you cannot
instruct a bot to avoid it. "Make it less generic" is not an instruction. It is
a wish.

So the first job is a definition sharp enough to test against.

## Slop is four properties, not a vibe

Slop is output that is simultaneously fluent, plausible, generic, and
unfalsifiable.

All four have to be present. Take any one away and you get something else,
usually something better. Text that is fluent and plausible and generic but
falsifiable is a summary, and summaries are useful. Text that is fluent and
specific and checkable is just writing. It is the combination that produces the
particular deadness, because each property blocks a different way you would
normally catch a problem.

| Property | What it means | The test | What it blocks |
| --- | --- | --- | --- |
| Fluent | Reads smoothly, correct grammar and rhythm | Would a copy editor change anything? | Your ear, which is the alarm you rely on |
| Plausible | Nothing in it is obviously wrong | Does any sentence make you stop? | Skimming, which is how it gets approved |
| Generic | Could apply to almost any subject in the category | Swap the subject: does it still read fine? | Relevance, which nobody checks explicitly |
| Unfalsifiable | No claim in it could be shown to be false | Which sentence could I go and check? | Verification, because there is nothing to verify |

That table is the whole article in miniature. Each row is a separate attack
surface, and each one needs a different instruction. Telling a bot to "write
well" makes the fluency better, which makes the slop harder to catch.

## Fluency is the disguise, not the defect

It is worth being clear that fluency is not the problem. You want fluent
output. The trouble is that fluency is the one property these systems have in
abundance by default, and it is also the property humans use as a proxy for
quality.

That proxy was reasonable for most of history. Producing smooth prose required
effort and understanding, so smoothness correlated with both. The correlation
is broken now. Smoothness is free, and free signals carry no information.

The practical consequence for your review process: stop reading for whether it
reads well. It will read well. Read for the other three properties, which
require you to look at what the sentences claim rather than how they sound.

## Plausible is the property that defeats skimming

The reason slop gets published is not that people approve bad work. It is that
plausible text does not trigger the stop reflex.

When you skim something wrong, you snag. A weird number, a claim that
contradicts what you know, a sentence that does not parse. You slow down, you
look, you find the problem. Plausible output never snags. You get to the end
with a mild sense that it was fine, and mild sense that it was fine is
indistinguishable, from the inside, from having actually verified it.

This is why "I'll just read it before it goes out" is a weak control. You will
read it. Reading is not the thing that catches this. Testing is, which means
your review needs at least one step that is mechanical rather than impressionistic.

## Beat generic by grounding the bot in artefacts it cannot average

Generic output is what a model produces when the specification runs out. Asked
for something it has not been told enough about, it fills the gap with the
average of everything similar it has seen. The average of everything is,
definitionally, characteristic of nothing.

So the fix is not more instruction, it is more grounding. There is a real
difference between those two. Instruction tells the bot what to do. Grounding
gives it material that is specific to you and cannot be averaged.

The material that works:

Your own past work that you judged good, with a line on why each one worked.
Not "here is our blog", but four specific pieces and the reason each earned its
place.

Primary artefacts about the actual subject. Interview notes. Support tickets.
The actual numbers. A transcript. Anything where the specificity comes from
reality rather than from the bot.

A house facts file: what you sell, to whom, the words you use and the words you
refuse, positions you have taken publicly.

And the half everybody skips, an anti-example list. Work you rejected, with one
line on why. Aiming needs targets. Avoiding needs counterexamples, and
avoiding is most of what taste is.

\`\`\`text
ANTI-EXAMPLES  (read before writing anything)

- "In today's fast-paced business environment..."
  Rejected: opens with a fact about the world instead of the reader's problem.
- "Companies that leverage AI see significant improvements in efficiency."
  Rejected: unfalsifiable. Which companies, what improvement, measured how.
- "Retention is about building genuine relationships with your customers."
  Rejected: true of every business ever. Survives the substitution test, so it
  says nothing.
- "Our innovative platform empowers teams to unlock their full potential."
  Rejected: four abstract nouns, zero objects. Nothing here can be pictured.

If a draft resembles one of these, do not send it. Say which one it resembled
and what you replaced it with.
\`\`\`

The same technique carries over to visual work, where the failure is identical
and the material is different. That version is in
[the production and slop-control playbook for designers](/blog/grok-bot-for-designers-figma-motion).

## Grade your grounding material before you blame the model

When output is generic, the instinct is to rewrite the prompt. Look at the
material first, because a thin reference folder produces generic output no
matter how the instructions are phrased. Each kind of material blocks a
different failure, and each goes stale on its own schedule.

| Material | What it prevents | How much you need | When it goes stale |
| --- | --- | --- | --- |
| Four past pieces you judged good, each with the reason | Drift toward the category average | Four, not forty. Volume dilutes the signal | When your positioning changes |
| Primary artefacts for this specific piece | Invented specifics that sound plausible | Everything you have on this one subject | Immediately, since they are per-piece |
| A house facts file: what you sell, to whom, words you refuse | Wrong nouns and phrasing you have banned | One page, maintained | Quarterly, or whenever pricing moves |
| An anti-example list with one line of reasoning each | Repeating a pattern you already rejected | Grows by one line per rejection | Never, if you keep adding |
| Your public positions, as links | Contradicting something you argued last year | A list, not a summary | When you change your mind and forget to record it |

The row people underweight is the second one. General grounding fixes voice;
only per-piece artefacts fix content. A bot with four exemplary posts and no
tickets writes something that sounds exactly like you and says nothing you
learned this month.

## Run the substitution test before you read the draft twice

Here is the single most useful check in this entire article, and it takes
thirty seconds.

Take the draft. Replace every proper noun with a different one from the same
category. Your company becomes a competitor. Your product becomes theirs. Your
customer segment becomes an adjacent one. Now read it again.

If it still reads perfectly well, it was never about you. Every sentence that
survived the swap is a sentence that carries no information about your specific
situation, which is the operational definition of generic.

The test is powerful because it is mechanical. It does not require taste and it
cannot be argued with. A sentence either survives the substitution or it does
not, and you can ask a bot to run it on its own draft and report the percentage
of sentences that survived.

A well-grounded piece fails the substitution badly. Half its sentences become
false or absurd when you swap the subject, because they were making claims
about a particular thing. That is what you want. The failure is the signal.

## Require every claim to be sourced, observed, or owned as opinion

Unfalsifiable text is the most dangerous of the four properties, because it
looks the most like substance.

"Successful teams prioritise clear communication." "Personalisation drives
engagement." "The best onboarding experiences feel effortless." Each of these
reads like a claim. None of them can be wrong. There is no world in which you
would go and check one, find the opposite, and come back and say the sentence
was false.

The requirement that fixes it is blunt: every substantive sentence must either
carry a source or be a statement about something the reader can go and verify.
Not every sentence, since connective tissue exists. But every sentence that is
doing work.

There are three acceptable kinds of claim, and one label for everything else.

| Label | What qualifies | Example | Verdict |
| --- | --- | --- | --- |
| SOURCED | A link to a primary source, the thing itself rather than a summary of it | "Cursor Pro+ is 60 dollars a month, per the published pricing page" | Keep |
| OBSERVED | Drawn from an artefact you supplied, and named as such | "In the 42 support tickets from July, 11 mention export timeouts" | Keep |
| OPINION | Stated in the first person so the reader can weigh it | "I think a weekly cadence is too often for this report" | Keep |
| NONE | Reads like a claim, checks against nothing | "Personalisation drives engagement" | Cut, and report the cut |

The refusal that makes this stick is the interesting part. A bot told to source
its claims will source the ones it can and quietly keep the ones it cannot. The
instruction has to be that a claim with no available source gets deleted, and
that the deletion is reported. That converts a silent failure into a visible
one, which is the only kind you can act on. The argument for that rule in the
context of research bots is in
[why a claim without a source is a liability](/blog/bots-for-marketers).

## Set a density floor, then count it rather than feel it

The last property is the easiest to instruct and the easiest to fake, so it
needs a hard-edged version.

Soft version, which does not work: "be specific". The bot will produce
sentences that feel specific and contain no specifics.

Hard version, which does: require a minimum density of concrete nouns, numbers,
and named things, and require them to come from supplied material rather than
from the bot. Then check it. Count them if you have to. A paragraph with no
number, no name, no tool, no date, and no quoted phrase is almost certainly
empty regardless of how it reads.

A useful heuristic while reviewing: ask what you could picture. "Improving
onboarding efficiency" cannot be pictured. "Cutting the setup wizard from nine
screens to four" can be. The picturable version is not just better writing, it
is a claim, which means it can be wrong, which means it is worth reading.

For a bot that generates ideas rather than finished pieces, the same density
requirement applies to the ideas themselves. Our
[Content Idea Generator](/bots/content-idea-generator) listing is scoped to
ideas and outlines and never publishes, which is the right shape: an idea can
be cheap and wrong, and the cost of that is a deleted line rather than a
published one.

## Hand the mechanical review to a second bot with a numeric rubric

Everything above is testable, which means a second bot can grade a first bot's
output before you ever see it. This is the highest-leverage step in the whole
setup, because it moves the boring part of review off you.

The rubric has to produce a verdict, not a score out of ten. Scores get
rationalised. A verdict has to be defended.

\`\`\`text
SLOP RUBRIC  v1
Apply to every draft. Output the six checks with PASS or FAIL and the evidence.
Any FAIL means the draft does not ship. Do not rewrite it silently: report
the failure, then produce a revision, and show both.

1. SUBSTITUTION
   Replace every proper noun with a different one from the same category.
   Count sentences that still read as true and sensible.
   PASS if fewer than 40% survive. Report the percentage and quote three
   survivors verbatim.

2. CLAIM AUDIT
   List every substantive sentence and label it SOURCED / OBSERVED / OPINION /
   NONE. Quote the source or artefact for each SOURCED and OBSERVED.
   PASS only if zero sentences are labelled NONE.

3. DENSITY
   Count concrete nouns, numbers, proper names, dates, and quoted phrases,
   per 100 words. Report the count.
   PASS if 4 or more, and if they came from supplied material rather than
   from you. Name where each came from.

4. PICTURE TEST
   Find every sentence describing an outcome or benefit. For each, state what
   the reader would literally see if it were true.
   FAIL and quote any sentence where you cannot answer.

5. ANTI-EXAMPLES
   Compare against /refs/anti-examples.md.
   FAIL and name the match if the draft resembles any entry.

6. OPENING
   Quote the first sentence. FAIL if it is a statement about the world, the
   industry, or the era rather than about the reader's specific problem.

Then, separately: list every claim you WANTED to make and cut because you had
no source. That list is for me, not for the draft.
\`\`\`

Two design notes on that rubric. The thresholds are numbers rather than
adjectives, so two runs on the same draft give the same verdict. And check six
exists because the opening sentence is a reliable proxy for the whole piece:
drafts that open with a fact about the era almost always continue that way.

## Walk one draft through the rubric, check by check

Abstract rubrics are easy to agree with and hard to apply, so here is the
retention piece from the opening paragraph run through all six checks. The
draft was 800 words, written from a one-line brief and no artefacts.

| Check | What the reviewing bot reported | Verdict |
| --- | --- | --- |
| Substitution | 31 of 38 sentences survived, 82 percent. Survivors included "retention is cheaper than acquisition" | FAIL, badly |
| Claim audit | 4 SOURCED, 0 OBSERVED, 2 OPINION, 19 NONE | FAIL |
| Density | 1.4 per 100 words, and every name came from the model rather than from supplied material | FAIL |
| Picture test | Six benefit sentences, four of which it could not describe as something a reader would see | FAIL |
| Anti-examples | Matched entry two, the unfalsifiable improvement claim, twice | FAIL |
| Opening | "Customer retention has never been more important." A statement about the era | FAIL |

Six failures on a draft that read fine is the normal result, and it is the
point. The fix was not a better prompt. It was 11 support tickets, last
quarter's churn number, and two of our own posts with a line each on why they
worked. The rerun came back with substitution at 34 percent, zero NONE claims,
density at 5.1, and one remaining picture-test failure, which was a sentence
about "a smoother experience" that got cut rather than rewritten.

The interesting artefact was the cut list at the end: nine claims the bot wanted
to make and could not source. Three of them were things worth finding out. That
list is the most useful output of the whole process, and it only exists because
the rubric required the deletion to be reported rather than performed quietly.

## Calibrate the thresholds on writing you already judged good

A rubric nothing passes gets ignored inside a week, and a rubric everything
passes was never doing anything. Calibration is what puts it between those.

Run it on your own past writing before you point it at a bot. Include a piece
you were proud of and a piece you already know was weak. The good piece should
pass or fail on at most one check, and the weak one should fail on at least
three. If your best work fails four checks, your thresholds are wrong and you
will spend the next month arguing with a machine about sentences that were
fine.

The threshold most likely to need moving is the substitution percentage. Forty
percent works for opinion and analysis. Technical explanation runs higher,
because a sentence about how HTTP caching works is legitimately true of any
company using it, and there is nothing wrong with that. Set the number per
content type rather than per company, and write the number down so the next
argument is about evidence rather than taste. The same discipline applied to
bots generally is in [testing your bot](/blog/testing-your-bot).

## Diagnose the symptom rather than trusting the feeling

When output goes wrong, the useful move is to name which property slipped
rather than describing the disappointment. Each symptom below maps to a
different fix, and applying the wrong one makes things worse.

| Symptom | The property behind it | What to change |
| --- | --- | --- |
| You cannot say what is wrong, only that you would not publish it | All four at once | Stop re-reading and run the rubric; impressions do not resolve this |
| Every paragraph is true and none of it is about you | Generic | Add artefacts, not instructions. More rules will not help |
| It has numbers, but they are all round and unattributed | Unfalsifiable wearing density as a costume | Require the source of every number, and cut the ones that have none |
| It got better after you asked for a stronger tone | Fluency rising while the rest stayed flat | Stop grading tone. Grade claims |
| The reviewing bot passes everything you send it | Thresholds too loose, or one bot grading its own work | Calibrate on a piece you know is weak, and use a separate context |
| Everything reads short, dull, and stat-stuffed since you added the rubric | Writing aimed at the rubric | See the next section |

The most common misdiagnosis is treating a grounding problem as a prompt
problem. The tell is that each rewrite produces different generic text rather
than converging on anything, which is what happens when the specification is
short and the model is filling the gap from the average. More about how to
write instructions that actually bind is in
[bot prompt engineering](/blog/bot-prompt-engineering).

## Watch for the second failure, writing that is aimed at the rubric

The strongest objection to everything above is that a numeric rubric produces
rubric-shaped writing, and it is correct often enough to take seriously.

Optimise hard on density and you get prose stuffed with dates and figures that
nobody needed. Optimise hard on the substitution test and you get sentences
made artificially specific, naming your product where a general statement would
have been clearer and more honest. Optimise hard on sourcing and you get four
links in a paragraph that was making a simple point. All three are worse than
what you started with, and all three pass.

Three countermeasures, in order of how much they help. Cap density rather than
only flooring it: 4 to 9 named things per 100 words is a band, and above the
band is a failure too. Keep the anti-example list growing, because it is the
only part of the system that learns from what you rejected rather than from what
you specified. And read the piece yourself at the end, once, asking only
whether you would send it to a person you respect.

That last one is not a check and it does not scale. It is also the reason the
rubric works at all: it removes the mechanical part of review so your attention
lands on the part that was always yours.

## Stop the rubric at the question it cannot reach

Be honest about the limit. The rubric catches the mechanical properties of
slop, which is most of it by volume. It does not catch the things that actually
determine whether a piece is worth publishing.

It cannot tell you whether the argument is right. It cannot tell you whether
this was worth saying at all, which is the question that matters most and the
one no checklist reaches. It cannot tell you whether the piece contradicts a
position you took publicly last year. And it cannot judge whether the specifics
it counted are the interesting specifics or merely present.

That is where the boundary sits, and it is a genuine one:
**the bot drafts and grades, and a human decides whether the thing is worth
publishing at all.** Not because the bot might write something offensive, but
because relevance is a judgement about your situation, your audience, and what
you already said, and none of those are in the draft.

Which is why every content setup in our directory stops before publishing.
[Content Planner Manager](/bots/content-planner-manager) plans and edits and
never publishes; every draft waits for review. That is not caution for its own
sake. It is the recognition that the last question is not a text-quality
question at all.

## Know where generic writing is the correct answer

Slop control has a domain, and applying it everywhere makes you slower without
making anything better. Four cases where the generic version is the right one.

Reference documentation. A description of what a parameter does should read
exactly like every other description of that parameter, because a reader is
scanning rather than being persuaded, and novelty in reference text is a defect.

Transactional and operational messages. Password resets, receipts, and status
updates are supposed to be interchangeable. Nobody wants a distinctive voice in
a shipping notification.

Internal summaries with a known reader. If one person reads the digest and can
ask a follow-up question in the next message, the cost of a vague sentence is
one clarification rather than a published mistake, and the rubric costs more
than it saves.

First drafts nobody will see. Running six checks on a thinking-out-loud draft is
ceremony. Ground the material, skip the grading, and apply the rubric at the
point where the text acquires an audience.

The line is whether the text is doing persuasion or identification. Persuasion
needs claims that could be wrong. Identification needs to be boring on purpose.

## Paste the anti-slop clause block into any bot that writes

Drop this into any bot that writes. It is the four properties turned into
instructions.

\`\`\`text
WHAT GOOD LOOKS LIKE

Read /refs/good/ before writing. Those four pieces are the target.
Read /refs/anti-examples.md before writing. Those patterns are the floor.

EVERY CLAIM
Sourced with a link to a primary source, or drawn from an artefact I gave you
and named as such, or stated as my opinion in the first person.
If you cannot do one of those three, DELETE the sentence and list it under
"cut for lack of source" at the end. Never keep a claim by softening it.

NEVER
Never open with a statement about the industry, the era, or the pace of change.
Never use a sentence that would be equally true of any company in this market.
Never write an outcome you cannot describe as something the reader would see.
Never pad to reach a length. Short and specific beats long and smooth.

BEFORE YOU HAND ANYTHING OVER
Run the slop rubric on your own draft and include the six results with the
draft. If any check fails, revise once and show me both versions.
Then tell me the one thing in this draft you are least confident about.

WHERE YOU STOP
You never publish, schedule, or send. You produce drafts and their grades.
Whether a piece is worth publishing is my decision, not a rubric result.
\`\`\`

That final instruction, naming the thing it is least confident about, is worth
keeping even though it is soft and unverifiable. It costs one line, and it
surfaces the weak paragraph often enough to earn its place. It is the closest
thing you get to a bot telling you where to look.

**Keep reading:** [The Best AI Bots for Sales Teams in 2026](/blog/best-ai-bots-for-sales), [The Best AI Bots for Customer Support in 2026](/blog/best-ai-bots-for-support), [Where to Find Grok Bot Setups](/blog/botdirectory-alternatives).

This sits inside a wider guide: [Writing Bot Setups That Survive Contact](/blog/writing-bot-setups-complete-guide) covers the whole territory.

## Frequently Asked Questions

### What exactly is AI slop?

Output that is fluent, plausible, generic, and unfalsifiable at the same time.
All four matter. Fluency means your ear raises no alarm. Plausibility means
skimming finds no snag. Generic means it would read equally well about a
different company. Unfalsifiable means no sentence in it could be shown to be
wrong, so there is nothing to verify. Each property blocks a different way you
would normally catch a problem, which is why the combination feels impossible
to critique even when you are certain something is off.

### How do I test whether a draft is generic?

Use the substitution test. Replace every proper noun with a different one from
the same category, so your company becomes a competitor and your product
becomes theirs, then read it again. Every sentence that still reads perfectly
well carries no information about your specific situation. A well-grounded
piece fails this badly, because its claims stop making sense once the subject
changes. Aim for fewer than four in ten sentences surviving. The test is
mechanical, takes about thirty seconds, and cannot be argued with.

### Can a second bot review the first bot's output?

Yes, for the mechanical properties, and this is the highest-leverage step
available. A reviewing bot can run the substitution test, audit every claim for
a source, count concrete nouns and numbers, and compare against a list of
patterns you rejected before. Give it numeric thresholds rather than adjectives
so two runs agree. What it cannot judge is whether the argument is correct or
whether the piece was worth writing at all. Those stay with you, which is why
the drafting bot should never hold the publish button.

### Why does adding more instructions make output worse, not better?

Because generic output comes from a specification running out, and instructions
are not specification. When a model has not been told enough about your actual
situation, it fills the gap with the average of everything similar it has seen,
and that average is characteristic of nothing. More instructions about tone and
structure improve fluency, which makes the problem harder to spot rather than
smaller. What closes the gap is grounding: your own past work, real artefacts,
actual numbers, and a list of things you rejected.
`,
};
