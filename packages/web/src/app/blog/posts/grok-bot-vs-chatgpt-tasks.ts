import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot vs ChatGPT Tasks: Which Runs Your Recurring Work',
  description:
    'Grok Bot vs ChatGPT Tasks on triggers, tool access, memory, approvals and cost shape, so you can tell in ten minutes which one your recurring work needs.',
  date: '2026-08-25',
  category: 'Comparison',
  content: `
# Grok Bot vs ChatGPT Tasks: Which Runs Your Recurring Work

Both products answer the same complaint: you keep opening a chat window to
redo the thing you did yesterday. ChatGPT Tasks and Grok Bot both make that
job fire without you typing anything. They arrive at it from opposite
directions, and the direction is what decides which one belongs in your week.

The honest short version: if your recurring work happens inside one tool and
ends in a message to yourself, ChatGPT Tasks is the smaller, calmer answer and
you can stop reading here. The comparison only stops being close at a specific
moment, when the work crosses two tools and someone has to approve the last
step.

## One is a scheduler, the other is a machine that persists

ChatGPT Tasks is a scheduler attached to a chat product. You describe a job
once, pick a time, and at that time ChatGPT opens a fresh conversation with
your instruction, runs it with whatever tools and connectors your account has,
and notifies you with the result. The mental model is a cron entry that
produces a message.

Grok Bot, which xAI put into beta on 11 August 2026, is a different shape. Your
account gets one persistent cloud computer: a browser, a file system, a
terminal, and signed-in sessions that survive between runs. Each bot you create
works on its own screen of that shared machine. It can drive an application
that has no API by operating the interface the way a person does, and it can
stop mid-task waiting on you, then resume from where it paused. The mental
model is a contractor with a desk.

That word "shared" is load-bearing, and it is the most misreported fact about
the product. The computer is assigned to your user account, not to an
individual bot. Cookies, signed-in sessions, files, and command-line
credentials are common to every bot you run, and the documentation is plain
that the screens are separate work surfaces, not separate security boundaries,
and that you should not use separate bots as a security boundary. One desk with
several monitors, not several offices.

That single architectural difference, a fresh conversation versus a machine
that persists, produces nearly every practical difference below.

## Compare the shapes before you compare the features

Read this as a comparison of shapes, not a scorecard. Both products ship fast
and both have already changed their limits since launch, so confirm the
current numbers in each app before you commit a workflow to one of them. The
Grok Bot column is documented; the ChatGPT column is what the product does as
of writing and is the side more likely to have moved by the time you read this.

| Criterion | ChatGPT Tasks | Grok Bot |
|---|---|---|
| Triggers | Clock schedule, with some event style triggers depending on plan | Clock schedule, event triggers, and manual runs |
| Minimum interval | A documented floor, no more often than hourly as of writing | Set per routine, check current options in the app |
| How many at once | Capped by plan tier, and the cap has already been revised once | Max 50 routines per bot, and a routine belongs to one bot |
| Tool access | Whatever connectors your account exposes | Connectors plus computer use, so tools with no API are still reachable |
| State between runs | Fresh conversation every time, by design | Persistent files and signed-in sessions on the shared account machine |
| Isolation between your own automations | Each task is its own conversation, sharing nothing | None by design. One computer per account, one screen per bot, credentials common to all |
| Multi-step work | Strongest when the job is one pass | Built for jobs that take many steps and may stall |
| Approval model | You read the result afterwards | Explicit approval prompts, with auto-review rules you configure |
| Model choice | Depends on your plan and the app's current options | None. No model picker for members or admins, and none planned |
| Failure visibility | You notice a notification that never arrived | The 20 most recent run records per routine, plus the machine itself to inspect |
| Audit trail across automations | Your own message history is the trail | No audit view of bot actions exists yet |
| Teaching it a workflow | You describe it in words | Words, or record up to ten minutes of on-screen browser work into a draft skill |
| Where it runs | Wherever you have the app | macOS, Windows, and iPhone on iOS 18 or later. No Linux desktop, Android, or iPad |
| Deleting one | The task stops and that is the end of it | Routines die with the bot, but shared files and browser sessions survive |
| Cost shape | Flat subscription | Weekly allowance, then on-demand billing from model and token cost |
| Best fit | Single-source digests, reminders with judgement | Cross-tool work that produces drafts and needs a stop line |

Two rows in that table decide more purchases than the rest combined. Tool
access decides whether the job is possible at all. Approval model decides
whether it is safe to let run.

## Where ChatGPT Tasks genuinely wins

Three cases, and together they cover more of ordinary life than bot
enthusiasts like to admit.

The first is the digest that reads one source. "Every weekday at 07:00, tell
me what is on my calendar today and which meetings have no agenda" is a
single-tool, single-pass job. A persistent cloud machine adds nothing to it
except surface area you now have to think about.

The second is the reminder that needs a sentence of judgement rather than a
lookup. A calendar alert can tell you a renewal is due. A task can tell you
the renewal is due, that you used the product twice last quarter, and that you
should probably cancel it. That is a small amount of reasoning on a schedule,
which is exactly what a scheduler with a model behind it is for.

The third is the low-stakes read of a public page. Checking whether a
competitor changed a price, or whether a job board posted anything new, is
read-only work with no meaningful blast radius.

There is a fourth advantage that is not a use case at all: friction. A task
you can create in fifteen seconds, from the same box where you ask questions,
actually gets created. A bot you have to name, brief, connect, and schedule is
a ten-minute commitment, and ten-minute commitments get postponed. For a
surprising amount of recurring work, the thing that runs beats the thing that
would have been better.

## Five jobs that should stay on a scheduler permanently

The failure mode of a comparison article is that it talks you into the bigger
product. These five jobs are ones where the scheduler is not the starter
option, it is the right permanent answer, and moving them costs you something
real.

| The job | Why the scheduler wins | What moving it to a bot costs you |
|---|---|---|
| Morning calendar brief with agenda gaps | One source, one pass, no state to carry | A charter, a connection, and an allowance draw for output a message already gives you |
| Renewal reminders that include a recommendation | The reasoning is the whole job and it fits in one pass | Nothing gained, and now the reminder can fail in more ways |
| Watching one public page for a change | Read-only, no login, no blast radius | A shared browser session you did not need, on a machine with static egress IPs that some services flag |
| A weekly prompt to yourself that unblocks a decision | The value is the interruption, not the output | Setup time on something whose entire point was fifteen seconds |
| A digest of one feed or one channel that has an API | One source with one shape, and the connector already exists | A second system to review, for output identical to what you had |

The third row has a specific consequence worth knowing. The bot's computer
uses static egress IPs, and some services flag datacenter IP addresses. A page
you read from your laptop without incident can present a challenge to a bot
reading the same page, which turns a zero-maintenance scheduler job into one
that stalls on verification. That is a real cost, paid for no benefit, on a job
that was working.

The rule that follows is unglamorous: do not migrate a working automation
because you bought a better tool. Migrate the ones that are failing, and let
the ones that are fine stay where they are.

## Where Grok Bot wins, and it is not close

Three properties flip the decision, and each one is a hard capability rather
than a preference.

Tools without connectors. Any serious operator has at least one system that
matters and has no integration: an ageing invoicing tool, a supplier portal, a
council website, an internal admin panel behind SSO. A scheduler can only
reach what its connector list reaches. A bot with a browser and a saved login
can reach anything you can reach, which is a different category of coverage.

Work that stalls. Real cross-tool jobs pause. A form needs a code from your
phone, a page needs a second approval, an export takes four minutes to
generate. A fresh conversation that ends when the model stops talking cannot
wait through that. A persistent machine can hold the half-filled form, wait,
and continue.

An approval line that is part of the runtime. This is the one that matters
most, and it deserves its own section.

## The approval line is the real dividing line

Here is the moment people hit in week two. Your digest is good. You start
thinking about the obvious next step: not just telling you that three
customers went quiet, but drafting the follow-up. Then sending it.

With a scheduler, "draft it" and "send it" are the same instruction with a
different verb, and the only thing standing between them is your wording. If
the model misreads the room at 07:00 on a Tuesday, you find out from a reply.

A bot runtime treats the send as a distinct event that can require approval,
independently of what the instruction says. You can set a rule that a whole
class of action always stops and asks, and that rule outranks anything you or
the bot later decides is reasonable. That is a structural guarantee rather
than a hopeful sentence in a prompt.

One limit on that guarantee is documented and worth internalising before you
lean on it: an approval controls the proposed action, and it does not reverse
work already completed. The gate stops something from happening. It is not an
undo, so the design question is never "will I catch it" but "was the
irreversible step ever proposed in the first place".

This is why every listing on botskills.sh carries a required boundary field:
the one action the bot never takes without a human. The
[Inbox Triage bot](/bots/inbox-triage) sorts and drafts but never sends an
email. The [Lead Scout bot](/bots/lead-scout) researches and ranks prospects
but never contacts anyone. The
[Bookkeeping Auditor bot](/bots/bookkeeping-auditor) flags every discrepancy
it finds but never edits the live books.

Those lines are not decoration. They are what makes it rational to hand a bot
your inbox at all. The same principle runs through
[the one-person company system](/blog/one-person-company-grok-bot): a bot that
has to ask about everything is useless, and a bot that never asks is
dangerous, so you draw the line once, deliberately, in writing.

## The same job, written for each product

Here is a weekly revenue check expressed both ways, so the difference in
thinking is visible rather than theoretical.

\`\`\`text
// CHATGPT TASK
Every Monday at 08:00, read my Stripe dashboard summary for the last
7 days. Report: gross revenue, new subscriptions, cancellations, and
any failed payment over 100 dollars. Four bullet points, no preamble.
Notify me. Do nothing else.

// GROK BOT ROUTINE
You are my Revenue Check.

// WHAT YOU OWN
Every Monday at 08:00 Europe/London, pull last week's numbers from
Stripe, the bank feed, and the invoicing tool. Reconcile them against
each other. Write one short brief: gross revenue, net after refunds,
cancellations with the account name, failed payments over 100 dollars,
and any invoice more than 14 days overdue.
Save the brief to /reports/revenue/ and post the summary to me.

// WHAT GOOD LOOKS LIKE
Numbers agree across all three sources, or you say exactly where they
disagree and by how much. Never round to hide a gap.

// WHERE YOU STOP
Never send a payment, refund, or dunning email.
Never edit an invoice.
If a source will not load or a login has expired, say so and stop.
Do not guess a number from a stale cache.
\`\`\`

The first one is fine, and if that is all your week needs, buy the cheaper
thing. The second one exists because reconciliation crosses three systems,
touches money, and has a step that must never fire unattended.

## What Monday at 08:00 actually looks like in each

Charters are easy to compare and easy to be wrong about. Here is the same
Monday morning, step by step, in a business whose invoicing tool has no
connector, which is the situation that decides this comparison for most people.

| Step at 08:00 Monday | ChatGPT Task | Grok Bot |
|---|---|---|
| Read the Stripe summary | Connector call, a few seconds | Connector or browser, a few seconds |
| Read the bank feed | Only if a connector exists. Otherwise this step quietly does not happen | Browser, using the signed-in session already on the machine |
| Read the invoicing tool with no API | Cannot reach it. The job is now a Stripe report wearing a reconciliation label | Opens the interface and reads the overdue list the way you would |
| A login expired halfway through | The conversation ends with a partial result, or nothing | Parks on the login screen and hands it to you, then continues |
| Two sources disagree by 240 | Reports both figures if you told it to. Nothing to compare against last week | Writes the brief to a file, so next week's run can diff against this one |
| The dunning email | One verb away in the same instruction | A distinct action a rule can force to stop and ask |
| The run failed entirely | You notice the message never arrived, usually on Wednesday | Visible as a failed run in the routine's history |

The third row is where the comparison actually resolves. If your invoicing tool
has an API and a connector, rows two and three collapse and the scheduler
version is genuinely fine, cheaper, and less to maintain. If it does not, the
scheduler is not a worse way to do the job, it is unable to do the job, and no
amount of prompt work changes that.

The last row has a number attached. A routine keeps its 20 most recent run
records, so on a weekly schedule you are holding roughly five months of
history, and on a twice-daily schedule about two working weeks. That window is
what you can investigate after the fact, and it is the only automatic record
you get, because there is no audit view of bot actions yet.

## Cost shape, not price

Comparing monthly prices is the wrong exercise, because the two products bill
against different things and both have repriced since launch. Compare shapes
instead.

A scheduler is roughly flat. You pay a subscription, you get a capped number
of active tasks, and a task that runs for two seconds costs the same as one
that runs for twenty. Your bill is predictable and your ceiling is the task
cap.

A bot runtime is closer to metered labour. A subscription includes a weekly
usage allowance, and work beyond that allowance is billed on demand from the
model and token cost of what actually ran. A bot that spends eleven minutes
driving a browser through a supplier portal consumes real compute, and your
bill moves with how much work you delegated.

Here is the part people get wrong, and it is the most important sentence in
this section: there is no Grok Bot specific spend cap yet. The allowance is not
a ceiling, it is the point at which the meter starts. Nothing in the product
stops a badly scoped bot from running past it, and model choice is not a lever
either, since there is no model picker for members or admins.

So the cost control has to live in the charter, on day one, before you set
anything else. A scope ceiling ("read at most 50 items, then stop and tell me
what you skipped"), a ban on the bot re-running itself, and a cheap-failure
rule ("stop after one retry and report") are budgeting instruments rather than
style preferences. A bot stuck retrying a broken login is the most common way
to be surprised by an invoice, and the
[cost breakdown](/blog/grok-bot-cost) covers how the usage accumulates.

## Deciding in ten minutes

Take your actual recurring task, not a hypothetical one, and answer four
questions.

1. How many distinct tools does it touch? One means a scheduler is enough. Two
   or more starts to favour a bot, and three is decisive.
2. Does every tool have a connector? If any step lives behind an interface
   with no integration, a scheduler cannot do the job at all.
3. Does the job end in something irreversible, such as a send, a payment, a
   post, or a delete? If yes, you want a runtime that can hold that step for
   approval as a rule rather than as a request.
4. Can the job stall waiting on a human or a slow export? If yes, you need
   something that survives the wait.

Two or more yes answers on questions two through four and the scheduler is the
wrong tool, however much cheaper it looks. Zero or one, and the bot runtime is
overhead you will resent.

## The switching cost nobody prices in

Both directions of migration cost more than the comparison tables suggest, and
the costs are asymmetric.

Going from a scheduler to a bot, what transfers is the thinking rather than the
configuration. Your definition of good output, your boundary verb, and your
evidence rule all carry over intact, and they are the valuable part. What does
not carry over is every connector, every schedule, and the history, which means
you rebuild the plumbing and lose the record of what the job used to do.

Going the other way costs something more specific. Deleting a bot deletes its
routines, but it does not clean up after itself: shared-computer files and
browser sessions survive the deletion. Leaving is therefore a revocation
exercise at each provider, in their own list of third-party apps with access,
not a delete inside the product. Plan the exit as work, not as a button.

Two structural limits belong in the same calculation. A routine assigns a
workflow to one bot, with a maximum of 50 routines per bot, and nothing is
team-level, so a colleague cannot inherit what you built. If the work has to
outlive your account, know that before you start.
[Routines versus triggers](/blog/grok-bot-routines-vs-triggers) covers how
those units actually behave.

## How to tell after two weeks that you chose wrong

Choosing is cheap. Noticing you chose wrong is what people skip, so give it a
date and a check that can fail.

| What you observe in week two | What it actually means | What to do about it |
|---|---|---|
| You edit every output before using it | The instruction is vague. This is not a product problem | Rewrite the definition of good output before you switch anything |
| The job silently stopped days ago | No heartbeat, in either product | Ask for a message even on an empty run, so silence becomes a signal |
| You keep wishing it could open a second tool | A genuine capability gap, not preference | Move it. This is the case the runtime exists for |
| Your bot's job never crosses a second tool | You bought overhead | Move it back to a scheduler and keep the charter as notes |
| The bill moved and you cannot attribute it | No spend cap, and no audit view to attribute it with | Add a scope ceiling to the charter. There is no setting that does this |
| It stalled on a verification prompt and stayed stalled | Nobody read the run history | Put a weekly two-minute check in your calendar, alongside the sweep |

The fourth row is the one people refuse to act on, because moving back feels
like admitting a mistake. It is cheaper than the alternative, which is paying
metered rates for work a flat subscription already did.

## What most comparisons get wrong

They compare the models. Which model reasons better is close to irrelevant
here, because both products are running frontier models and the failures you
will actually experience are not reasoning failures. They are an expired
connector, a routine that fired in the wrong timezone, a run that overlapped
with the previous one, and an instruction so vague that the output was
technically correct and completely useless.

Those are configuration problems, and they are worth more of your attention
than the benchmark. Get the trigger, the boundary, and the definition of good
output right, and either product will serve you. Get them wrong and the better
model just produces a more articulate mess, faster, on a schedule.

## Where this comparison stops applying

Four caveats, and the last one costs people money.

Both products ship fast. Grok Bot entered beta on 11 August 2026 and its
eligibility list changed ten days later. Every limit in the table above is a
snapshot, and the honest instruction is to confirm the two or three that your
decision actually depends on rather than trusting any article, this one
included.

Your platform may remove one side entirely. Grok Bot supports macOS on Apple
silicon and Intel, Windows on x64 and Arm64, and iPhone on iOS 18 or later.
There is no Linux desktop app, no Android app, and no iPad app. If you work on
a Linux desktop, this is not a comparison, it is a single option. The
[supported platforms reference](/blog/grok-bot-supported-platforms) has the
current list.

Your organisation may have removed it for you. Privacy Mode (Legacy) blocks
Grok Bot entirely, and that is a setting rather than a plan, so no upgrade
changes it.

And do not confuse Grok Bot with Grok Build. They are different surfaces and
the internet mixes them constantly. Grok Build is the coding surface, and it is
the one documented as fully compatible with Claude Code with zero configuration
needed, reading marketplaces, plugins, skills, MCP servers, agents, hooks, and
CLAUDE.md. The Grok Bot documentation never mentions Claude Code, SKILL.md, or
CLAUDE.md at all. If you are choosing a product because you read that it reads
your existing agent config, you are reading about the other one, and
[the compatibility breakdown](/blog/grok-bot-claude-code-skills-compatibility)
separates them properly.

**Keep reading:** [Grok Bot for Designers](/blog/grok-bot-for-designers-figma-motion), [Grok Bot Prompts That Actually Work](/blog/grok-bot-prompts-that-work), [Grok Bot Scheduling](/blog/grok-bot-scheduling).

## Frequently Asked Questions

### Can ChatGPT Tasks do everything Grok Bot does if I write a better prompt?

No, and the gap is architectural rather than a matter of prompt quality. A
scheduled task runs as a fresh conversation with whatever connectors your
account exposes, so it cannot reach a tool that has no integration, cannot
hold state between runs, and cannot pause for four minutes waiting on a slow
export or a two-factor prompt. A bot runtime with a persistent machine and a
real browser can do all three. If your recurring work never needs any of those
things, the prompt is indeed the only variable, and the simpler product wins.

### Which one should a solo founder start with?

Start with a scheduled task for one week, on your least dangerous recurring
job, usually a morning brief. It costs almost nothing to try and it teaches
you the real lesson quickly, which is whether your instructions are specific
enough to produce output you can use without editing. If after that week you
find yourself wishing the task could open a second tool, save a file, or hold
a draft for your approval, you have discovered a genuine need for a bot
runtime rather than an imagined one. Upgrade then.

### Is a persistent cloud computer a security risk?

It is a real consideration and worth naming plainly. A persistent machine
holds live sessions to whatever you signed it into, so anything that can
instruct the bot can potentially use those sessions. The mitigations are
unglamorous and effective: connect the minimum number of tools rather than
everything, prefer read-only access where the job only reads, use a dedicated
account for anything financial, use whatever account-level billing controls
your plan offers rather than assuming a per-product cap exists, and write an
explicit
boundary that names the actions the bot must never take unattended. Review
what is connected once a month and disconnect what nothing uses.

### What happens when a scheduled run fails in each product?

In a scheduler the usual symptom is silence: the notification simply never
arrives, and you find out days later when you notice you stopped receiving the
brief. A bot runtime typically records a run history per routine, so a failed
run is visible as a failed run, and you can open the machine to see whether it
is parked on a login screen, an approval prompt, or a page that never loaded.
Either way, put a heartbeat in your instruction. Ask for a message even when
there is nothing to report, so absence becomes a signal.
`,
};
