import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'The Four Layers of a Bot System That Actually Works',
  description:
    'An AI bot system architecture has four layers: shared context, specialist bots, an eval loop, and a human gate. Skip one and the output goes quietly incoherent.',
  date: '2026-08-25',
  category: 'Playbook',
  content: `
# The Four Layers of a Bot System That Actually Works

You built six bots. Each one demos fine on its own. Then you read a week of
their output side by side and it reads like six contractors who have never met:
two different names for the same plan, three different opinions about who you
sell to, one bot describing a feature you shipped last quarter and another
describing the version before it.

Nothing is broken. Every bot did the job written on its charter.

The problem is that you built a roster and expected a system. A roster is a list
of capabilities. A system has a shape: something that holds what is true,
something that produces work, something that checks the work, and a place where
a person decides. Single Grain published a map of a Grok Bot marketing setup
laid out in four layers, and the shape they described is the right one, which is
why it is worth arguing about properly rather than admiring in passing. What
follows is our version of that argument, in our own words, with our own
examples: what each layer owns, what happens when you skip one, and which layer
almost everyone skips.

## A roster is not a system

Six capable people with no shared brief and no editor produce work that is
individually plausible and collectively incoherent. That sentence describes a
newsroom without a style guide, an agency with six account leads and no
strategist, and your bot setup. The failure mode does not come from any
individual being weak. It comes from there being nothing above them.

Bots make this worse than people do, in one specific way. A person who writes
something that contradicts a colleague will usually find out, because somebody
mentions it in a meeting or a customer asks a confused question and it gets
traced back. A bot never finds out. It has no view of the other bots, no memory
of last Tuesday's output, and no way to notice that its version of your pricing
disagrees with the version another bot used this morning. The contradiction sits
there until you personally trip over it.

So the four layers are not an organisational nicety. They are the parts of the
job that a roster of bots structurally cannot do for itself.

| Layer | What it owns | What it prevents | Symptom when it is missing |
|---|---|---|---|
| 1. Shared context | The durable facts: offers, buyer, voice rules, procedures, past campaigns, examples of work you approved | Every bot inventing its own version of your company | Outputs that disagree about basic facts, and corrections that never stick |
| 2. Specialist bots | One job each, with a defined artifact handed to the next bot | Generalists that blur, duplicate, and re-decide | Two reports about the same thing and no way to tell which is right |
| 3. Eval loop | The automatic check against written criteria, run before a human sees anything | Fluent, plausible, wrong output reaching you unverified | You are proofreading, daily, at volume |
| 4. Human gate | Every irreversible action: send, publish, spend | Mistakes with no undo | A quiet incident you learn about from someone else |

Here is the flow the four layers make when they are all present.

\`\`\`mermaid
flowchart TD
  L1["Layer 1: shared context file"]
  R["Layer 2: radar bot"]
  D["Layer 2: drafting bot"]
  RP["Layer 2: repurposing bot"]
  EV{"Layer 3: eval against written criteria"}
  HG["Layer 4: human gate"]
  ACT["Irreversible action: send, publish, spend"]
  L1 --> R
  L1 --> D
  L1 --> RP
  R -->|ranked opportunity| D
  D -->|structured draft| EV
  RP -->|channel variants| EV
  EV -->|fail: retry once| D
  EV -->|pass| HG
  HG -->|approved| ACT
  HG -->|rejected| D
  ACT -->|result written back| L1
\`\`\`

Read the arrows rather than the boxes. Every bot reads layer 1 before it starts.
Nothing reaches a human without passing layer 3. Nothing irreversible happens
without layer 4. And the result of the action goes back into layer 1, which is
the only reason the system gets better instead of just getting older.

## Layer 1: the file that says what the company is

One place holding what your company actually is. Every bot reads it at the start
of every run, before it does anything else.

What belongs in it is narrower than people assume. The offers, with prices and
what each one includes. The buyer, described as a role with a triggering event,
plus the lookalike buyer you decline and the tell that distinguishes them. Voice
rules written as things you do and things you never do. The standing procedures:
where things get published, in what order, who approves. The last handful of
campaigns with the one number that mattered for each. And examples of work you
judged good, which get their own section below because they do more work than
everything else on this list combined.

What does not belong is equally specific. Nothing that changes weekly and can be
fetched at run time, because a stale copy of a live number is worse than no copy.
No credentials, tokens, or keys. No customer names, emails, or account records.
No opinion without an owner and a date, because an undated opinion becomes a
fact after about six weeks.

That last exclusion has a hard technical reason behind it on Grok Bot. Every bot
on an account shares one persistent cloud computer, and files, browser cookies,
signed-in sessions and command-line credentials are shared across all of them.
The documentation says plainly that separate bots are not a security boundary
and that the separate screens each bot gets are work surfaces rather than
isolation. Deleting a bot does not remove the files it left behind.

Two consequences follow, and they pull in opposite directions. A shared context
file is trivially easy to build, because you write it once on the shared machine
and every bot can read it without any plumbing. It also has no readership
control at all. Anything you put in that file is readable by every bot on the
account, including the one you wired to a public web page this morning. Treat it
as a noticeboard for your roster, never as a safe. The full picture of what the
shared machine does and does not separate is in
[the shared computer security guide](/blog/grok-bot-shared-computer-security),
and [Persistent Bot Memory](/bots/persistent-bot-memory) is a catalog listing
built to that constraint: it never stores secrets, tokens, passwords, or
customer data.

Here is the skeleton. It is deliberately boring.

\`\`\`text
// /context/company.md   Read at the start of every run, before anything else.
// One writer: me. Bots read this file. No bot edits it.

## WHAT WE SELL
Product:          [name]. One sentence a customer would recognise.
Plans:            [name, price, what it includes]. One line each.
Not for sale:     [what people ask for that we decline to do]

## WHO WE SELL TO
Buyer:            [role, company size, the event that makes them start looking]
Not our buyer:    [the lookalike we decline, and the tell]
Words they use:   [3 phrases from real calls, verbatim, not paraphrased]

## HOW WE SOUND
We do:            [3 rules, each naming something observable in a sentence]
We never:         [3 rules, each naming something observable in a sentence]
Approved:         /context/examples/approved-01.md through approved-03.md
Rejected:         /context/examples/rejected-01.md through rejected-02.md
                  Each rejected file ends with one line: why it was rejected.

## HOW WE WORK
Publishing:       [where things go, in what order, who approves each step]
Claims policy:    [what needs a source link, what we never claim at all]
Escalate to me:   [the exact conditions, no "when it seems important"]

## WHAT WE ALREADY DID
Last 6 campaigns: [name, date, what it was, the one number that mattered]

## NOT IN THIS FILE
No credentials, tokens, or API keys. No customer names, emails, or account
records. Nothing that changes weekly and can be fetched at run time.
Every bot on this account can read this file. Write it accordingly.

// Reviewed: [date]
// Review again on any price change, any positioning change, or when an
// approved example is more than two quarters old.
\`\`\`

## Examples beat adjectives, every time

"Write in our brand voice" is the single most useless instruction in circulation,
and it is in almost every setup prompt I have read.

An adjective is a compressed judgment you have not explained. Punchy.
Authoritative. Friendly but not cute. Every model already has a prior for each of
those words, assembled from the entire internet, and that prior is not you. When
you write "authoritative" you get the median of a million authoritative-sounding
articles, which is exactly the texture people mean when they say something reads
as machine-written.

Three approved pieces do something an adjective cannot. They carry the actual
distribution: how long your sentences run, whether you open with a claim or a
scene, whether you use numbers, how you handle something you cannot prove,
whether you allow yourself a joke. None of that is stated. All of it is present,
and a model reading three samples will pick up more of it than it will from a
page of description.

Then do the part almost nobody does: include rejections. One rejected piece with
a single line saying why it was rejected teaches more than two more approvals,
because approvals show what is inside the set and only rejections show where the
edge is. "Rejected: opened with a rhetorical question and used two adjectives
where a number would do." That one sentence is checkable, transferable, and
impossible to write as an adjective. Three approvals and two rejections is a good
starting ratio.

This has to be a durable file rather than something you tell a bot once and trust
it to remember. Model memory is per-bot, opaque, and unreviewable: you cannot
diff it, you cannot see what it silently dropped, you cannot hand it to a second
bot, and it dies when the bot does. A file can be read, edited, diffed, reviewed
in five minutes, and pointed at by every bot on the roster at once. The
distinction matters most when something goes wrong, because a file lets you
answer "what did the bot think our pricing was" and memory does not.

Context files rot, and they rot invisibly. Prices change, positioning moves, an
approved example from two quarters ago starts pulling your voice backwards. Give
the file an owner (if you are solo, that is you) and a trigger rather than a
schedule: it gets reviewed on any price change, any positioning change, and any
time an example ages past two quarters. Pruning matters as much as adding.
A context file that only ever grows becomes a document nobody reads in full,
including the bots, which quietly start skimming the parts that matter.

Connectors feed this file, they do not replace it. A drive connection, a CRM, an
analytics property, a chat workspace: each of those is a source you draw from
when you write or refresh the file. Pointing a bot at all four and hoping it
assembles a coherent picture of your company on every run is expensive, slow,
and different every time. Fetch live numbers live. Keep durable facts durable.

## Layer 2: specialists that hand each other artifacts

Not one generalist that does marketing. Six bots, each owning a job nobody else
owns, each handing a defined thing to the next one.

A marketing pipeline is the clearest worked example because the stages are
genuinely different kinds of work, not slices of the same work.

| Bot | Reads | Produces | Hands to |
|---|---|---|---|
| Radar | Public sources, your niche, the context file | A ranked opportunity list, each item with a reason it matters this week | You choose one, then the drafter |
| Drafter | One chosen opportunity plus the context file | A structured draft, editor-ready, with sources attached | The eval, then you |
| Repurposer | One approved asset plus the context file | Channel-specific variants that share a claim but not a shape | The eval, then you |
| Signal | Analytics, on a schedule | A flagged movement with its window, magnitude, and what it is measured against | The analyst |
| Analyst | The flagged movement plus campaign history | Ranked hypotheses, each with the evidence for and against it | You |
| Outreach | An approved target list | Researched draft messages, unsent, one per target | You, always |

Catalog listings map onto these slots almost exactly, which is a decent sign the
decomposition is natural rather than invented. [Viral Tweet Scout](/bots/viral-tweet-scout)
and [Content Idea Generator](/bots/content-idea-generator) are radar bots, and
both declare that they never post or publish anything, which is the correct
boundary for a bot whose failure mode is starting to interact with the thing it
was supposed to be watching. [Content Planner Manager](/bots/content-planner-manager)
is a drafter that never publishes. [Evergreen Content Flywheel](/bots/evergreen-content-flywheel)
is a repurposer where every recycled post needs your approval.
[Lead Scout](/bots/lead-scout) is the outreach research half with the sending
half removed entirely: it contacts nobody.

The reason to split this way rather than building one capable marketing bot is
not that six small models beat one big one. It is that a generalist has one
blended failure mode and nothing you can tune. When the output is wrong you have
no idea which part of the job went wrong, so your only available fix is to add
another paragraph to an already long prompt and hope. Six specialists give you
six places to look and six small charters to fix. The ownership rules that keep
those six from colliding, including the one about exactly one writer per
destination, are worked out in
[the guide to running a team of bots](/blog/multi-bot-teams).

## Define the artifact, not the conversation

Now the part that decides whether the pipeline holds together, and the part
almost every setup leaves implicit.

Bots do not talk to each other. They leave things where the next one will find
them. That means the interface between two bots is not a conversation, it is a
file format, and if you do not specify it, one gets improvised on every run.

Watch what happens without a schema. The radar bot writes something like "this
competitor pricing change looks significant." The drafting bot reads that and has
to decide what significant meant, who it matters to, what claim to build on it,
and how confident to sound. That is a second act of judgment nobody asked for,
performed with less information than the first one had. The draft comes out
plausible. It is also about a slightly different thing than the radar bot found,
and you will never know, because both bots reported success.

Two acts of judgment in sequence with no schema between them is how a pipeline
degrades without ever failing. Nothing errors. The output just drifts a few
degrees at each handoff until the thing you publish is not the thing you spotted.

A defined artifact needs three properties. Required fields, so the receiver knows
what it is entitled to expect. A stated meaning per field, so "confidence" means
the same thing to both bots. And a failure value, which is the one people skip:
what does a field say when the bot could not determine it? If there is no
UNKNOWN, the bot fills the gap, because a blank looks like an error and a
plausible guess looks like success.

\`\`\`text
// ARTIFACT: ranked-opportunity
// Written by: radar bot.  Read by: drafting bot.  One writer, many readers.
// File: /state/opportunities/YYYY-MM-DD.md, one block per item.

id:            OPP-2026-08-25-03      # stable, never reused
title:         [8 words maximum]
why_now:       [one sentence naming the event and its date]
evidence:      [URL] plus the exact line from that page supporting why_now
audience:      [which buyer from /context/company.md, named, not described]
angle:         [the claim we would be making]
confidence:    high | medium | low
unknowns:      [what you could not determine. Never leave this blank.]
success_line:  [the one sentence the finished asset must be able to answer]
expires:       [date after which this item is stale]

// RULES FOR THIS ARTIFACT
// Any field you cannot fill says UNKNOWN and names what would resolve it.
// Never omit a field. A missing field and an unknown field look identical
// to the next bot, and only one of them is honest.
// Never write evidence you did not fetch this run. An item with no URL is
// confidence: low, without exception.
// The drafting bot treats success_line as its brief. If success_line is
// missing or hedged, the drafting bot stops and reports. It does not guess.
\`\`\`

The last rule is the one that makes the schema load-bearing rather than
decorative. A receiving bot that stops on a malformed input turns a silent drift
into a visible failure, and a visible failure is the cheapest kind you can buy.

## Layer 3: the check that runs before you see anything

Between the moment a bot finishes and the moment you read the output, there
should be a step where the bot checks its own work against criteria that were
written into the brief before the work started.

Is every claim backed by evidence it actually fetched. Does it satisfy the stated
voice rules. Does it match the required output schema. Does it answer the success
line from the brief. Pass goes forward to the human. Fail either retries once
with the failure reason attached, or stops and reports what it could not satisfy.

This is the layer almost nobody builds, and it is the entire difference between a
demo and a system. Here is the argument, stated as strongly as I can make it.

A human gate with no eval loop in front of it does not save you work. It converts
your work into proofreading and increases the volume. You wanted to stop writing
five drafts a week. You now read five drafts a week, in full, with attention,
hunting for the one fabricated statistic and the two sentences that break a rule
you wrote down. That is not delegation. That is the least pleasant part of the
job, arriving on a schedule, and it is worse than what you had before because
you no longer have the context that comes from writing the thing yourself.

There is a second effect that makes this sharper than it looks. Review effort
does not scale with how wrong the output is. It scales with how plausible the
error is. Obviously bad output is cheap to reject, you spot it in ten seconds.
Fluent output with one invented number costs you a full careful read plus a
verification pass, and if you are tired you skip the verification. Language
models are extremely good at producing the expensive kind. That is the actual
review bill you are signing up for when you route unchecked output at a human.

Three design details separate an eval that works from one that pretends to.

**It cannot be a second opinion on the same question.** Asking a model "is this
good?" immediately after it wrote the thing returns yes, reliably, because you
have asked it to evaluate its own judgment using its own judgment. The eval has
to be a mechanical walk down a list of specific conditions, each answered
separately, each answered with something other than a verdict.

**The retry budget is capped and the cap is small.** One retry, with the failing
criterion quoted at the top of the second attempt. Uncapped retry is the classic
runaway: a bot that keeps trying a thing it structurally cannot do, burning
against your weekly usage allowance with overflow billed on demand, until you
notice. [The failure modes guide](/blog/bot-failure-modes) covers that loop and
six of its cousins.

**A fail must be allowed to be terminal.** The bot has to be permitted to stop
and hand you nothing but a report. If the only acceptable outcome is an output,
you have taught it that marking a check as passed is the way to get unblocked,
and you now have an eval that always passes.

## An eval you cannot fail is not an eval

Every criterion has to be a thing that can be false. This is the same test as the
one for boundaries in [the guide to writing a bot boundary](/blog/grok-bot-boundaries),
applied to quality instead of safety, and it fails in the same way for the same
reason: people write attitudes and believe they wrote rules.

"Is it good" is not an eval. "Every statistic has a source link, and the line
supporting it is pasted below the link" is.

| What people write | Why it always passes | What to check instead |
|---|---|---|
| "Is the draft high quality?" | Quality is the writer's own judgment, and the writer already made it | "Every H2 is followed within two sentences by a number, a name, or a date" |
| "Is it on brand?" | Brand is an adjective with no observable violation | "No sentence breaks any rule under 'We never' in the context file. Name each rule and the sentence you checked" |
| "Is it accurate?" | The bot believed it was accurate when it wrote it | "Every statistic, date, and named claim has a URL fetched this run, with the supporting line quoted" |
| "Is it useful to the reader?" | No reader exists to disagree | "The draft answers success_line within the first 100 words. Quote the sentence that does it" |
| "Does it match our examples?" | A comparison with no metric resolves to yes | "No paragraph exceeds five sentences and no sentence exceeds 35 words" |
| "Is it complete?" | Complete against nothing in particular | "Every required field of the output artifact is present and non-empty. Unknowns say UNKNOWN" |

Notice what the right column has in common. Each one names a thing you could
check yourself in under a minute without knowing anything about the topic, and
each one produces evidence as a side effect of being checked. That second
property matters more than it looks: a criterion whose check leaves a trace is a
criterion you can audit later, and one that resolves to a bare yes is not.

\`\`\`text
// EVAL: run this against your own output before anything reaches me.
// Print the checklist with PASS or FAIL beside every line, at the top of
// the output. One FAIL means the output does not move forward.

1. SOURCES   Every number, date, and named claim has a URL fetched this run.
             Paste the URL and the exact line from it. Do not write
             "verified" or "checked". Show the line or mark it FAIL.
2. BRIEF     The draft answers success_line from the handoff artifact within
             the first 100 words. Quote the sentence that answers it.
3. SCHEMA    Every required field of the output artifact is present and
             non-empty. Unknowns say UNKNOWN. Nothing is omitted.
4. VOICE     No sentence breaks a rule under "We never" in
             /context/company.md. List each rule and the sentence you
             tested it against.
5. SCOPE     Nothing here requires an action I have not already approved.
             If it does, name the action and stop.

// ON FAIL
Retry ONCE, with the failing line quoted at the top of the retry.
If the retry fails, stop and report: which check failed, what you changed,
and what you would need in order to pass it.
Do not pass a partial result forward. Do not mark a check PASS to get
unblocked. Stopping with a clear report is a correct outcome here.

// WHAT YOU MAY NOT SELF-CERTIFY
Check 1 is evidence, not assertion. If you cannot paste the supporting line
from the source, the check is FAIL. There is no third state.
\`\`\`

## The minimum viable eval for people who will not build a test rig

Be honest about the cost, because pretending it is free is how this advice gets
ignored. A full evaluation setup means a golden set of inputs where you already
know the right answer, a scorer, somewhere to store results over time, and the
discipline to actually look at those results in month three. Most solo operators
will not build that, and I am not going to pretend otherwise.

So here is the version that fits in an afternoon and captures most of the value.

Write five checkable lines at the bottom of the brief. Add one instruction
telling the bot to print those five lines with PASS or FAIL beside each, at the
top of every output, before the output itself. Add one rule saying a FAIL means
the work does not move forward. That is the whole thing.

It works better than it has any right to for a reason that has nothing to do with
machinery. Most of the value of an eval is in the writing of the criteria, not in
the running of them. The act of converting "make it good" into five conditions
that could be false forces you to discover that you did not actually know what
good meant, and that discovery improves the brief, which improves the output
before any check runs at all. The checklist at the top of each output then does a
second thing: it tells you where to look first, so your read starts at the
weakest point instead of at the beginning.

Its limits, stated plainly, because a self-report is not a verification. A bot
that invented a statistic can also mark "every statistic has a source" as PASS,
and it will, occasionally, especially under a retry. The defence is to make the
checks that touch external truth produce evidence rather than a verdict: paste
the URL and the quoted line, not the word yes. Anything the bot can satisfy by
asserting, it eventually will. Anything that requires it to produce an artifact
is much harder to fake. That principle, applied to run logs rather than evals, is
the subject of [the observability guide](/blog/bot-observability).

The upgrade path from here is short and you take it one step at a time. First,
ten inputs where you already know the right answer, run whenever you change the
brief. Then a separate reviewing bot that reads the output cold, without seeing
the reasoning that produced it, which catches the class of error where the bot
talked itself into something. [How to test a bot setup before you trust it](/blog/testing-your-bot)
walks that ladder properly.

## Layer 4: the gate where reversibility ends

Everything reversible, the bot finishes alone. Everything irreversible waits for
you. The line follows what can be taken back, not how large or important the task
feels, and that argument is made in full in
[the piece on drawing the approval line on reversibility](/blog/grok-bot-approval-rules-reversibility).

The gate is a smaller thing than people assume, and one documented detail is the
reason. In Grok Bot, an approval controls the proposed action and does not
reverse work already completed. So an approval prompt is a stop sign in front of
the next step, never an undo for the last one.

That has a structural consequence for where you place it. If a workflow does five
things and the third one sends an email, an approval prompt at the end of the run
is theatre. The email left three steps ago. The gate belongs immediately before
the irreversible action, which means you have to know which step that is, which
means you have to have sorted the steps into reversible and irreversible before
you wrote the charter. Most people do this after their first surprise.

The catalog is full of listings that put the gate in the right place.
[Ad Creative Generator](/bots/ad-creative-generator) never spends credits or
launches anything without an explicit go, which is the gate sitting in front of
the spend rather than after it. [Lead Scout](/bots/lead-scout) contacts nobody at
all, which is the stricter version: the irreversible action is not gated, it is
absent from the bot entirely, and that is usually the better design when you can
afford it.

There is a failure mode inside layer 4 worth naming, because it is what people
actually experience. Gate everything and you get approval fatigue: forty prompts
a week, most of them fine, and by Thursday you are clicking approve without
reading. A gate you always approve is not a control, it is a delay you have
imposed on yourself. This is the strongest practical argument for layer 3 and it
is worth stating in the reverse direction: the eval loop exists so that the
things arriving at your gate are mostly things that should arrive there. Fewer
prompts, each of which deserves a look, beats forty prompts you rubber-stamp.

## What breaks when you only build layers 2 and 4

Layers 2 and 4 are what most people have, because those two are the ones the
product hands you. You create bots and the runtime asks you to approve things.
Neither layer 1 nor layer 3 appears unless you build it deliberately.

Here is what that setup produces, in the order you notice it.

**Output that is individually plausible and collectively incoherent.** Read any
single artifact and it is fine. Read five together and your product has two
names, your buyer has three descriptions, and one bot is confidently pricing a
plan you retired. Each bot invented the missing context at run time, and each
invention was reasonable, and none of them agree.

**More review work than you had before automating.** Every draft arrives needing
a full careful read, because nothing was checked and the errors are the plausible
kind. You are the eval loop. You are also the only eval loop, running at human
speed on a machine-speed input queue.

**Drift you cannot date.** Something changed about how the bots describe your
offer, and you cannot say when or why, because the description lives in six
separate prompts you have each edited a few times. With no layer 1, there is no
version of the truth to diff against.

**Corrections that do not stick.** You tell a bot in chat that the plan is called
Standard, not Starter. It fixes it that run. Three weeks later it is Starter
again, on a different bot, because your correction landed in one bot's context
window and nowhere durable. This one is the quiet killer: it teaches you that the
system does not learn, which is true, but the reason is fixable.

**Duplicated cost with no duplicated value.** No shared summary exists, so two
bots each read the same forty-page report in full. Nothing warns you. On a
runtime where subscriptions include a weekly usage allowance and overflow is
billed on demand from model and token cost, this arrives as a number on a bill
rather than as anything resembling a bug.

| Layers you have | What it feels like day to day | What is actually missing |
|---|---|---|
| 2 only | Great demos, nothing you rely on unattended | Context, checks, and a gate |
| 2 and 4 | Constant approval prompts on work you have to fix before approving | Context and eval |
| 1, 2 and 4 | Consistent voice and facts, but you still proofread every draft | Eval |
| 2, 3 and 4 | Well-checked output that contradicts itself about your company | Context |
| All four | Output you skim, spot-check, and approve | Nothing, except the upkeep |

The two-row middle of that table is where most working setups live, and both rows
describe someone doing more work than they expected while telling people their
bots are saving them time.

## Which layer people skip, and why the trade is wrong

Layer 3. It is not close, and the reasons people skip it are all understandable.

The eval loop is the only layer with no visible output. Layer 1 is a file you can
open. Layer 2 is a list of bots with names. Layer 4 is a button that appears on
your phone. Layer 3 is a thing that happens invisibly and, when it is working
well, produces nothing at all except output that was already fine. There is no
moment where it feels like progress.

It also costs tokens on runs that would have succeeded anyway, which feels like
paying for insurance against a risk you have not personally experienced yet. And
it requires you to write down what good means, in falsifiable terms, which is
genuinely difficult and feels like an afternoon not spent shipping.

The trade is still wrong, for two reasons.

The cost you are avoiding is a token cost on a weekly allowance. The cost you are
accepting is your attention, permanently, on a recurring schedule. An eval pass
over a 900-word draft is a small fraction of the run that produced it. Reading
that draft carefully enough to catch an invented number costs you eight minutes,
five times a week, indefinitely. Token costs fall with every model release.
Your attention does not, and it is the resource the whole exercise was supposed
to protect.

The second reason is the one that compounds. Without pass and fail signals, the
system cannot be improved, because you have no record of what went wrong or how
often. Every eval failure is a data point about your brief: a criterion that
fails repeatedly is telling you the brief is ambiguous, not that the model is
weak. Teams with a working layer 3 spend their time fixing briefs, which is a
job that converges. Teams without one spend their time rewriting prompts based on
whatever they happened to notice last week, which does not.

There is a tempting counter-argument that layer 1 is the more common omission.
I do not think that survives contact with reality. Layer 1 usually gets built by
accident, in fragments: a pinned message with the pricing, a doc with the
positioning, three paragraphs pasted into every prompt. It is a bad version of
layer 1, but it exists, and consolidating fragments into a file is an afternoon's
work. Nothing builds layer 3 by accident. No fragment of it appears unless
somebody decides it should.

## Building the four layers in order

The sequence matters, and it is not 1, 2, 3, 4.

**Build layer 1 first, at half the size you think it needs.** One file. The
offers, the buyer, five voice rules, three approved examples, two rejected ones.
It takes an afternoon and everything downstream reads it, so every hour here
pays into every bot you build later.

**Set layer 4 before you build a single bot.** Decide now which actions are
irreversible in your operation, write them down, and start every bot with those
actions unavailable. This is a free decision made in advance and an expensive one
made later, because taking a capability back from a running bot means overriding
your own past reasoning about why it was fine. Starting restricted and widening
on evidence is the sequence argued in
[the starter roster playbook](/blog/grok-bot-starter-roster).

**Build layer 2 one bot at a time, with a week between each.** Overlap and drift
are only visible in output, and a week of output is what makes them visible.
Define the handoff artifact before you write the second bot, not after they start
disagreeing. If you are staffing a roster from scratch,
[the one-person company guide](/blog/one-person-company-grok-bot) has the charter
format all of these inherit.

**Add layer 3 to the bot whose output you review most, then work outward.**
You do not need it everywhere on day one. Put it on the one that costs you the
most reading time, measure whether your review gets faster, then move to the next.

One more thing, because a system has upkeep and a roster does not. Three
recurring jobs keep the four layers standing: prune the context file when a price
or position changes, verify that what your bots actually emit still matches the
handoff schemas you wrote, and read the eval failures rather than only the
successes. That last one is where the real information is. A bot that passes
every check every time is not proof the system works. Far more often it is proof
that your criteria cannot be failed, which puts you back where this article
started, holding a roster and calling it a system.

**Keep reading:** [The Best AI Bots for Developers in 2026](/blog/best-ai-bots-for-developers), [The Best AI Bots for Founders in 2026](/blog/best-ai-bots-for-founders), [The Best AI Bots for Marketing Teams in 2026](/blog/best-ai-bots-for-marketing).

## Frequently Asked Questions

### What is an AI bot system architecture?

It is the structure around your bots rather than the bots themselves, and it has
four parts. A shared context layer holds the durable facts about your company so
every bot works from the same picture. A specialist layer gives each bot one job
and one defined artifact it hands to the next. An eval layer checks output
against written criteria before any human sees it. A human gate layer holds every
irreversible action, meaning send, publish, and spend. Skip any one and the
system still runs, which is the problem: the failures are quiet rather than loud.

### What goes into a shared context file for bots?

The things that stay true for months: your offers with prices, the buyer you sell
to and the lookalike you decline, voice rules written as observable do and never
statements, your standing procedures, the last few campaigns with the one number
that mattered, and three to five examples of work you approved or rejected with a
line explaining each. Keep out anything that changes weekly and can be fetched
live, and keep out credentials and customer data entirely, since on a shared
cloud computer every bot on the account can read whatever you put there.

### Do I still need an eval loop if a human approves everything?

Yes, and the human gate is the reason. A gate with nothing in front of it turns
you into a proofreader working at machine-speed volume, hunting for the one
fabricated number in fluent text that reads as correct. Review effort scales with
how plausible an error is, not how serious it is, and language models produce the
plausible kind reliably. The eval reduces what reaches your gate to things that
deserve a decision, which also prevents approval fatigue, the state where you
click approve forty times a week without reading.

### Which of the four layers should I build first?

Build the shared context file first, at half the size you think it needs, because
every bot reads it and every hour spent there pays into all of them. Decide your
irreversible actions before you create a single bot, since starting a bot
restricted is free and taking a capability back later is not. Then add bots one
at a time with a week between each, defining the handoff artifact before the
second one exists. Add the eval loop last, starting with whichever bot currently
costs you the most reading time.
`,
};
