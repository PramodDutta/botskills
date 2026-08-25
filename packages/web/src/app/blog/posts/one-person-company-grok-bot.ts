import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Build a One-Person Company With Grok Bot',
  description:
    'Run a company alone with Grok Bot: the six roles worth hiring first, the charter that makes a bot safe to leave running, and the one line that decides it.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# How to Build a One-Person Company With Grok Bot

A one-person company has one bottleneck, and it is not skill. It is that every
task waits for the same person. You find the leads, write the outreach, answer
the replies, chase the invoice, and count the week. Nothing moves while you
sleep.

Bot runtimes change that arithmetic, and the change is not that you get faster
at those tasks. It is that some of them stop routing through you at all. The
practical question is which ones, and how you hand them over without spending
every morning cleaning up what happened overnight.

This is the system: six roles worth staffing first, the charter format that
makes a bot safe to leave unattended, and the single line in that charter that
does most of the work.

## Stop writing prompts, start writing roles

The mistake almost everyone makes in week one is treating a bot like a chat
window that remembers things. You type a request, read the answer, close the
tab, and conclude the whole category is overhyped.

A prompt is a request. A bot is a role. The difference shows up in how you
write the setup:

| Prompt thinking | Role thinking |
|---|---|
| "Summarize my inbox" | "You own inbox triage every weekday at 07:30" |
| One output, then done | A standing job with a schedule |
| You decide when it runs | It decides, within limits you set |
| Quality is whatever you got | Quality is defined up front |
| No stated limits | An explicit line it never crosses |

Name the bot after a job a human could hold. Inbox Manager. Outbound SDR.
Bookkeeping Auditor. Talent Scout. If the name would look strange on an org
chart, the scope is probably wrong: either too vague to run unattended, or so
narrow it may as well be a single prompt.

## The charter, in three sections

Brief a bot the way you would brief someone on their first day. Three
sections, in this order, and the third is the one that matters most.

\`\`\`text
You are my Outbound SDR.

// WHAT YOU OWN
Run daily outbound without asking me.
Pull 40 prospects matching [industry, size, title, region].
Research each. Write a 3-line email: one specific line about them,
one line on the outcome we deliver, one soft ask for 15 minutes.
Log everything in [CRM]. Send me a 5-line summary each morning.

// WHAT GOOD LOOKS LIKE
Emails sound human. Never more than three sentences.
One specific detail per email, never a template with a name swapped in.

// WHERE YOU STOP
Never contact the same person twice in 30 days.
Never buy or import a purchased list.
If a reply mentions legal, pricing terms, or a contract, stop and ask me.
\`\`\`

Sections one and two are the job description. Section three is what lets you
close your laptop.

**A bot that has to ask about everything is useless. A bot that never asks is
dangerous.** The charter is where you draw that line once, deliberately,
instead of relitigating it every morning. Write it while you are calm and
thinking about failure modes, not at 11pm when a bot has just emailed a
customer something strange.

Every bot in the botskills.sh catalog carries that line as a required field.
It is the first thing on the page, before the prompt, because it is the fact
that determines whether you can hand the bot real access.

## The six roles worth staffing first

Do not hire twelve bots in a weekend. Six roles cover the surface area of a
solo operation, and each one maps to work that is recurring, multi-tool, and
stable enough to define.

| Role | Owns | Where it stops | Start from |
|---|---|---|---|
| Chief of Staff | Coordination, priorities, the nightly review | Escalates conflicts, spending, external messages | [Chief of Staff](/bots/chief-of-staff) |
| Scout | Inbound research, signals, competitor moves | Never contacts anyone | [Lead Scout](/bots/lead-scout) |
| Quill | Content drafts from research | Never publishes | [Content Idea Generator](/bots/content-idea-generator) |
| Forge | Code, automation, deploys | Never merges or ships without review | [PR Review Sentinel](/bots/pr-review-sentinel) |
| Guide | Customers, follow-up, context packets | Customer email stays a draft | [Inbox Triage](/bots/inbox-triage) |
| Ledger | Reconciliation, anomalies, receipts | Never moves money | [Bookkeeping Auditor](/bots/bookkeeping-auditor) |

Notice the right column. Every role is defined as much by its refusal as by
its job, and the refusals are what make the set safe to run in parallel. Scout
gathers but never reaches out. Quill writes but never posts. Ledger counts but
never pays.

A Chief of Staff bot is worth building once you have three or four others,
because coordination becomes its own job. Give it one instruction that pays
for itself:

\`\`\`text
Read the roster of bots I have created. For each, tell me what it owns,
where it overlaps with another bot, and where there is a gap nothing covers.
Recommend what to add, merge, or retire. Do not create or delete anything.
\`\`\`

## Teach once, then schedule

The step that converts a tool into an employee is demonstration. Walk through
a task one time while the bot records the flow, and it saves a reusable
routine rather than a one-off answer.

Pick your first candidate with three filters:

1. **Recurring.** You do it at least weekly.
2. **Multi-tool.** It crosses at least two applications.
3. **Stable.** The steps rarely change month to month.

Anything that passes all three is a routine waiting to be lifted off your
plate. Anything that fails one is a bad first choice, not because a bot cannot
do it, but because you will not be able to tell whether it did it correctly.

Then give the routine a reason to fire. Two trigger types cover nearly
everything:

\`\`\`text
// SCHEDULE
Every weekday at 07:00, check my calendar, inbox, and #launches.
Write one short brief: what is on today, what needs a reply,
what changed overnight. Do not send anything. Prepare and report.

// EVENT
Whenever an email arrives from a domain not in my contacts and it
mentions pricing, draft a reply from my template and park it for review.
Never send.
\`\`\`

Both examples end the same way, and that is not an accident.

## Connect the minimum, not the maximum

Tool connections are usually account-level: connect an inbox once and every
bot you ever create can reach it. That convenience is also the risk, because
the blast radius of a single connection is every bot on the account, including
ones you have not written yet.

Practical rules that cost nothing:

- Connect only what you are using this week. Add the rest when a bot needs it.
- Prefer a dedicated account for anything financial rather than your primary.
- For tools without a native connector, let the bot hit the login wall and
  hand you the screen. You authenticate; it resumes with a session, not a
  stored credential.
- Review connections monthly and remove what no bot uses.

Treat the first month as probation. Give bots reversible, low-stakes work,
watch the early runs more closely than feels necessary, and expand authority
only after a bot has earned it on small things.

## A realistic first fortnight

Week one, one bot. Pick the least dangerous recurring task you have, usually a
morning brief or a research digest, and let it run for five days while you
read every output. You are not testing whether the model is smart. You are
testing whether your charter was specific enough that the output is usable
without editing.

Week two, add two more and put them in one group so they can hand work to each
other. This is where a set of bots starts behaving like a team rather than a
folder of shortcuts: one gathers, one drafts, one reviews, and you approve.
Give the group an objective rather than a task list, because a task list means
you already did the decomposition yourself.

By the end of the fortnight you will have a clear read on which of your work
is genuinely delegable and which needs you. That answer is worth more than the
automation.

## What people get wrong

**Automating the wrong end first.** The temptation is to automate the thing
you hate most, which is usually also the thing with the least stable steps and
the highest stakes. Start with the boring recurring task instead. The
satisfying one becomes possible after you trust the setup.

**Charters written as wishes.** "Be helpful and use good judgment" is not a
charter. It gives the bot no way to be wrong, which means it gives you no way
to correct it. Specific outputs, specific limits.

**Skipping the stop line because it feels like paperwork.** It is the opposite
of paperwork. It is the clause that lets you leave the thing running.

If you want to skip the blank page, every listing on botskills.sh is a
paste-ready setup with its boundary already written, ranked by how many people
have actually copied it. Take one, adapt the charter to your stack, and let it
run for a week before you give it anything that matters.

Two things worth reading next: [how to write a boundary that actually
constrains a bot](/blog/grok-bot-boundaries), which is the single line this
whole system rests on, and [a day-by-day plan for your first
week](/blog/grok-bot-first-week) if you would rather follow a schedule than
design one.

## Frequently Asked Questions

### How many bots should one person actually run?

Fewer than the platforms encourage. Six roles cover most solo operations, and
most people are better served by three that work reliably than a dozen that
each half-work. The constraint is not what the runtime supports, it is how
many outputs you can meaningfully review each morning. Add a bot when you can
name the recurring job it owns, the definition of good output, and the line it
must not cross. If you cannot write those three things, you do not yet have a
role, you have a task, and a task belongs in an existing bot's charter.

### What should the first bot never be allowed to do?

Send. Almost every serious early mistake involves a bot sending something
irreversible: an email to a customer, a message in a shared channel, a
purchase, a payment. Draft-only is the correct default for week one, and it
costs you very little, because reviewing a good draft takes seconds while
unwinding a bad send takes a day and some credibility. Once a bot has produced
a month of drafts you would have sent unchanged, widening its authority is an
informed decision rather than a hopeful one.

### Is this only worth it for expensive plans?

The economics depend entirely on how much recurring, multi-tool work you
personally do. If your week contains several hours of repetitive cross-tool
tasks with stable steps, the arithmetic works quickly. If you are still
learning to get consistent output from a normal chat assistant, that is the
better place to build skill first, because a bot with tool access amplifies
whatever clarity you bring to the charter. Vague instructions do not become
sharper by being given a browser and your inbox.

### How do I know a bot is doing what I think it is doing?

Insist on evidence in the charter itself. Require a short daily summary, ask
for links or file paths rather than assertions, and have the bot report what
it skipped as well as what it did. A bot that says "handled 40 prospects" is
much less useful than one that says "40 researched, 34 drafted, 6 skipped for
missing titles, list attached." Then spot-check the skipped items, because
that is where silent misunderstandings of your charter show up first.
`,
};
