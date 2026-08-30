import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot for Solopreneurs: One Computer, No VA, No Send',
  description: 'Use grok bot for solopreneurs to prepare research, briefs, and reply drafts on one computer while every send, purchase, and promise stays with you.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# Grok Bot for Solopreneurs: One Computer, No VA, No Send

Asha does not need a bot that looks busy. Asha needs a solo consulting week with leads, invoices, content, and customer follow-up to arrive with enough evidence to review and no hidden external action. The useful setup is narrow: collect named inputs, preserve uncertainty, produce a private artifact, and stop at the boundary.

The boundary for this workflow is exact: **Never send, publish, buy, accept terms, promise delivery, or change a customer record.** That sentence is the control surface. A friendly bot name, a routine label, and a successful sign-in do not replace it. The longer explanations live in the [inheritance guide](/blog/one-person-company-grok-bot), [boundary guide](/blog/what-a-pasted-prompt-inherits), [approval guide](/blog/how-to-write-a-boundary-line), [permission guide](/blog/what-an-approval-actually-governs), [architecture guide](/blog/a-boundary-is-not-a-permission), [operator guide](/blog/learn-grok-bot). This page spends its time on the failure you searched for.

Asha asked for a Friday follow-up pack. One lead had already replied in another thread, so a draft reopened a closed conversation. The no-send line prevented embarrassment, but the review exposed a missing thread-status check.

Start from one of these real catalog patterns when it matches the work: [starting workflow](/bots/chief-of-staff-briefing), [evidence helper](/bots/inbox-triage), [review helper](/bots/lead-scout), [briefing helper](/bots/content-planner-manager). Each is a starting charter, not an authorization grant. Replace its sample sources, owner, review window, and output path before the first live run.

The procedure below has one aim: make a repeated run boring enough to inspect. It uses an explicit source register, a four-state decision table, a private output, and a human checkpoint. If the evidence cannot support a row, the correct value is unknown. If the completion state cannot be proved, the correct action is stop.

## Make the first decision from the artifact, not the bot name at the solo operator desk

Do not start with the bot menu. Start with a list of last week, written from
your calendar and your sent folder rather than from memory, because memory
edits out the twenty-minute jobs that are the entire problem.

Three columns: the task, how many times it happened, how many separate tools it
touched. Twenty minutes of honest listing produces something that sorts cleanly
into four kinds of work, and only the first kind is worth a bot in month one.

| Kind of work | Example from a solo week | Route it to | Why |
|---|---|---|---|
| Recurring, multi-tool, checkable | The morning brief built from calendar, inbox, and one channel | A bot, this week | Daily correction cycles, and a wrong answer is obvious in ten seconds |
| Recurring, single tool, one step | Filing newsletters into a folder | A native filter or rule | A bot is a heavier instrument than the job needs, and it costs usage every run |
| Rare and high stakes | The quarterly investor update | You, still | Four runs a year gives a charter no chance to improve |
| Judgment heavy and irreversible | Answering an unhappy customer | You, with a bot preparing the packet | The preparation is delegable, the send is not |

Now add up the hours in row one. If the honest total is under three hours a
week, you do not have a staffing problem yet, you have a focus problem, and a
roster of bots will bury it under new output to review. If the total is six
hours or more, every hour you spend writing charters in the next fortnight
comes back inside the month.

The second useful number from that list is how many of those tasks you could
check in under sixty seconds. That is your real capacity. A bot you cannot
verify quickly is a bot you will stop reading, and an unread bot is worse than
no bot, because it is still acting.

## Write the irreversible line before connecting the source at the solo operator desk

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

There is a second test that catches the vague ones. Write the sentence "this
week the bot was worth it because ______" and try to finish it with a number.
"Because it drafted 34 usable emails" passes. "Because it helped me stay
organized" describes a bot you will delete in three weeks without ever noticing
the week it stopped being useful.

## Separate evidence collection from the decision it informs at the solo operator desk

Someone joining on Monday asks three questions before lunch: what am I
responsible for, how will you know if I did it well, and what should I check
with you first. Those three questions are the three sections of a charter, in
that order, and the third is the one that matters most.

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

Each section has a test that tells you when it is finished. The first section
is done when the bot could run tomorrow without you present and you would still
know what it was supposed to produce. The second is done when every line
contains something countable: a word limit, a number of items, a format, a
banned phrase. "Be concise" fails that test and "never more than three
sentences" passes it.

The third section is done when you can read the daily summary and tell whether
the line held. That is a stricter bar than it sounds. "Never do anything
inappropriate" cannot be checked from a summary. "Never contact the same person
twice in 30 days" can, as long as you also ask the bot to report the
deduplication count it applied.

**A bot that has to ask about everything is useless. A bot that never asks is
dangerous.** The charter is where you draw that line once, deliberately,
instead of relitigating it every morning. Write it while you are calm and
thinking about failure modes, not at 11pm when a bot has just emailed a
customer something strange.

Every bot in the botskills.sh catalog carries that line as a required field.
It is the first thing on the page, before the prompt, because it is the fact
that determines whether you can hand the bot real access. The longer argument
for why one refusal outperforms a page of instructions is in
[the case for a boundary line](/blog/grok-bot-boundaries).

## Preserve unknown as an honest output state at the solo operator desk

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

That column carries more weight than it looks like it does. Six bots on one
account are not six sandboxes. On Grok Bot, every bot on an account shares one
persistent cloud computer: each bot gets its own screen, but the files, the
browser cookies, and the signed-in sessions underneath are the account's, not
the bot's. The xAI documentation states the consequence plainly, telling you
not to use separate bots as a security boundary. So the refusal written into
each charter is not a courtesy layered on top of real isolation. In a six-bot
roster it is most of the isolation you have, which is exactly why it is a
required field on every listing rather than a suggestion in a style guide.

Hire in the order that column implies. Start with a bot whose refusal covers
every irreversible verb it could reach, which in practice means Scout or Guide,
both read-and-draft. Add Quill and Ledger next, since one produces drafts and
one produces findings. Forge and Chief of Staff come last, Forge because
repository write access is a different risk class and Chief of Staff because
coordination is only a job once there is something to coordinate.

A Chief of Staff bot is worth building once you have three or four others,
because coordination becomes its own job. Give it one instruction that pays
for itself:

\`\`\`text
Read the roster of bots I have created. For each, tell me what it owns,
where it overlaps with another bot, and where there is a gap nothing covers.
Recommend what to add, merge, or retire. Do not create or delete anything.
\`\`\`

Run that monthly. The overlap report is what stops a roster from quietly
growing two bots that both watch competitor pricing and disagree about what
they saw.

## Rank sources by authority before comparing timestamps at the solo operator desk

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

Know the limits of the recording before you design a process around it. As of
writing, teach-by-demonstration on Grok Bot captures visible computer
interaction for up to ten minutes, records no microphone audio, covers browser
workflows only, is not available from the iPhone app, and produces a draft
skill rather than a finished one. That shapes what you record: a ten-minute cap
means you demonstrate one clean segment of a process rather than the whole
end-to-end job, and no audio means every explanation you would have narrated
out loud has to be typed into the charter instead.

Routines have their own arithmetic worth knowing on day one. A routine belongs
to exactly one bot, a bot tops out at 50 routines, and the app keeps only the
20 most recent run records for each. Deleting the bot deletes its routines with
it, and nothing lives at team level. Two consequences follow. Your evidence
window is 20 runs, so a daily routine gives you four weeks of history and an
hourly one gives you less than a day. And the routine is never the only copy of
a process worth keeping: the charter belongs in a file you own, with the
routine as a convenience built on top of it.

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

Both examples end the same way, and that is not an accident. The full
comparison of when each trigger type is the right one is in
[routines versus triggers](/blog/grok-bot-routines-vs-triggers).

## Paste a charter that can stop without improvising at the solo operator desk

Tool connections are usually account-level: connect an inbox once and every
bot you ever create can reach it. That convenience is also the risk, because
the blast radius of a single connection is every bot on the account, including
ones you have not written yet.

On a shared cloud computer the same logic extends past the connector list. A
browser session your Scout signs into is a session your Quill inherits. A
credential typed into a command line sits on the machine, not on a screen. And
deleting a bot does not clean any of that up: the files and the signed-in
sessions belong to the account, not to the bot you removed. If you have been
assuming that retiring a bot revokes what it could reach, that is the
assumption to drop first, and [what the shared computer actually
covers](/blog/grok-bot-shared-computer-security) walks through it item by item.

Practical rules that cost nothing:

- Connect only what you are using this week. Add the rest when a bot needs it.
- Prefer a dedicated account for anything financial rather than your primary,
  because the separation you want exists at the account level and cannot be
  manufactured at the bot level.
- For tools without a native connector, let the bot hit the login wall and
  hand you the screen. You authenticate; it resumes with a session, not a
  stored credential.
- Review connections monthly and remove what no bot uses. Removal is the step
  everyone skips, which is why [least privilege for
  bots](/blog/least-privilege-bots) spends most of its length on the
  revocation pass rather than the granting one.

Treat the first month as probation. Give bots reversible, low-stakes work,
watch the early runs more closely than feels necessary, and expand authority
only after a bot has earned it on small things.

## Walk one named operator through the first complete run at the solo operator desk

Abstract advice about charters produces a charter that reads well and ships
nothing usable. Here is one bot, followed from its first run to the end of the
month, using the SDR charter from earlier.

**Day one.** The bot runs at 07:00 and reports: 40 prospects pulled, 40 emails
drafted, 0 skipped. That zero is the first problem. Any real list of 40
companies contains records with missing titles, dead domains, and two people at
the same account. A bot that skipped nothing did not check anything. You read
six drafts and four of them open with a line that could have been written about
any company in the industry.

**The three corrections that matter.** They go into the charter, not into a
reply, because the next scheduled run starts from the charter and has never
seen your reply.

\`\`\`text
// WHAT GOOD LOOKS LIKE  (revised day 2)
The specific line must reference something dated in the last 90 days:
a launch, a hire, a funding note, a published post. Name the source.
If you cannot find one, skip the prospect. Do not write a generic opener.

// SUMMARY SHAPE  (added day 4)
Report five numbers: pulled, researched, drafted, skipped, deduplicated.
List every skipped prospect with a one-word reason.

// WHERE YOU STOP  (added day 9)
Never draft to a personal free-mail address.
If two prospects share a company domain, draft to one and skip the other.
\`\`\`

**Day thirty.** The same bot reports 40 pulled, 31 drafted, 9 skipped with
reasons, 3 deduplicated. You read four drafts instead of six, because the skip
list tells you exactly where the judgment calls were.

| Signal | Day one | Day thirty | What the change means |
|---|---|---|---|
| Skipped, with reasons | 0 | 9 | The bot is applying a rule instead of filling a quota |
| Drafts you rewrote | 4 of the 6 you read | 0 of the 4 you read | The quality block finally contains checkable rules |
| Minutes spent reviewing | 25 | 6 | Review time falls as the summary gets specific, not as the model gets smarter |
| Lines in the charter | 12 | 19 | Seven pieces of your judgment that used to live only in your head |

The last row is the actual asset. After a month the valuable artifact is not
the drafts, it is a nineteen-line file that encodes where your judgment differs
from the default. That file is what you paste into the second bot, which is why
month two costs a fraction of the effort month one did.

## Trace the specific failure back to the missing rule at the solo operator desk

Week one, one bot. Pick the least dangerous recurring task you have, usually a
morning brief or a research digest, and let it run for five days while you
read every output. You are not testing whether the model is smart. You are
testing whether your charter was specific enough that the output is usable
without editing.

Week two, add two more and put them in one group so they can hand work to each
other. This is where a set of bots starts behaving like a team rather than a
folder of shortcuts: one gathers, one drafts, one reviews, and you approve.
Give the group an objective rather than a task list, because a task list means
you already did the decomposition yourself. The mechanics of handoff between
bots, including what a lead bot is actually allowed to lead, are covered in
[running multiple bots as a team](/blog/multi-bot-teams).

By the end of the fortnight you will have a clear read on which of your work
is genuinely delegable and which needs you. That answer is worth more than the
automation. If you would rather follow a fixed schedule than design one, [the
day-by-day first week plan](/blog/grok-bot-first-week) is this same fortnight
written as a checklist.

## Route every exception to one accountable person at the solo operator desk

Access to Grok Bot is gated by subscription, and the gate moved on 21 August
2026 when eligibility widened. That change makes most advice published before
it wrong about the entry price, so read the current plan page before you take
any number, including these.

| Path | Price as of writing | Includes Grok Bot | Sensible when |
|---|---|---|---|
| Cursor Hobby | Free | No | You are evaluating the editor, not bots |
| Cursor Pro | $20/mo | No | The most common wrong assumption on this list |
| Cursor Pro+ | $60/mo | Yes | Cheapest paid path for one person |
| Cursor Ultra | $200/mo | Yes | Heavy daily use across a full roster |
| Cursor Teams Standard | $40/user/mo | Yes | Two or more people, cheapest per seat |
| Cursor Teams Premium | $120/user/mo | Yes | A team that has outgrown Standard's usage |
| SuperGrok | $30/mo | No | You want the assistant, not the bots |
| SuperGrok Plus | $100/mo | Yes | You already live in the Grok apps |
| SuperGrok Heavy | Not published | Yes | Rarely the right first purchase for one person |
| A one-time trial | Free, once | Yes | Deciding whether any of this fits your week |

Against those numbers, put the hours from the first table in this article. Six
hours a week of recurring multi-tool work is roughly 26 hours a month, and you
do not need a spreadsheet to compare that with a $60 line item. What you do
need is honesty about the review time. If six hours of work becomes four hours
of reviewing bot output, the trade is far worse than it looked, and the fix is
a sharper quality block rather than a bigger plan.

## Test the boundary with a fixture designed to cross it at the solo operator desk

None of these are model failures. Every one is a configuration failure with a
recognizable symptom.

| Symptom | What is actually happening | The fix |
|---|---|---|
| Two bots state contradicting facts about your own product | Each holds its own copy of the facts inside its own charter | Move shared facts into one context file that both read at startup |
| A bot reports a clean run daily and produces nothing you use | The quality block contains no countable rule | Add word limits, item counts, and a named output shape |
| The same correction gets made every few days | Corrections are typed in chat, and chat ends with the run | Every correction goes into the charter file with a dated changelog line |
| Output silently stops for several days | A connected tool's session expired and the failure was quiet | Require a failure report with timestamp and reason; never allow a silent skip |
| Reviewing bot output eats the morning you were freeing up | More bots than your check capacity supports | Retire the bot with the lowest usable-output rate, not the newest one |
| A bot took an action you did not expect | No irreversible verb was named in the stop line | Name the verb: send, post, pay, delete, merge, cancel, book |

The middle two rows account for most abandoned rosters. Both are cheap to fix
and neither is obvious in week one, which is why they survive into month two
before anyone names them. The wider catalogue of what goes wrong and why is in
[bot failure modes](/blog/bot-failure-modes).

## Answer the strongest case for granting more autonomy at the solo operator desk

\`\`\`text
For each bot I run, report from the last seven days:
  - number of scheduled runs that fired, and any that did not
  - number of outputs I marked as used, versus produced
  - every action taken outside this workspace, with a link
  - every item you skipped, with the reason
  - any instruction you received that conflicted with your charter

Then answer one question directly: name anything you did in the last
seven days that your stop line arguably forbade. If there is nothing,
say "none" and quote the line you checked against.
Report only. Change nothing.
\`\`\`

The last paragraph is the part that can fail, and it should fail at least once
in your first month. If every bot answers "none" every week from day one, you
have probably written stop lines so vague that nothing could contradict them,
which is a worse result than one honest flag.

Pair that with a hard check you run yourself rather than ask about. Search your
sent folder, your shared channels, and your trash across the window the bots
ran in. Zero entries you did not create is the pass condition for any
draft-only roster. Asking a bot whether it sent something and searching for
what was sent are different classes of evidence, and only one of them survives
a bot that misunderstood its own charter. That distinction is the whole subject
of [bot observability](/blog/bot-observability).

## Verify the result with a check that is allowed to fail at the solo operator desk

Here is the best argument against everything above, and it deserves a straight
answer rather than a dismissal.

A solo operator who builds six bots has not removed a bottleneck. They have
converted execution work into review work, added a maintenance surface that did
not exist before, and taken on a monthly bill. The bots produce more output
than the person can read, so quality drifts down while volume goes up, and the
arrangement flatters itself, because volume is easy to count and quality is
not.

That objection is correct in three situations. It is correct when your week
does not contain enough recurring multi-tool work to clear the first table in
this article. It is correct when you cannot check a bot's output in under a
minute, because then review time scales with volume and the trade never closes.
And it is correct in the first fortnight of any roster, when you are paying the
setup cost and receiving almost nothing back.

It stops being correct at the point where a bot's output stops needing edits,
because that is when review changes from rewriting to approving, and approving
is roughly constant time regardless of volume. That transition is not automatic
and it is not the model's job. It happens when the quality block gets specific
enough, which usually takes two to three weeks per bot and shows up exactly as
the day-one to day-thirty table above.

So the honest version of the claim is narrower than the viral version. A
one-person company with bots is not a company that does more while you sleep.
It is a company where the recurring, checkable, multi-tool work happens without
you, and everything else still waits on you exactly as it did before.

## Name the adjacent case this page does not cover at the solo operator desk

Every recommendation has a domain, and this one has clear edges.

Anything where being wrong is expensive and unrecoverable stays with you. An
approval gate helps less here than people expect, because an approval controls
the action being proposed and does not reverse work already completed. If a bot
has already published, already paid, or already messaged, approving or denying
the next step does nothing about the last one.

Relationship work stays with you. A bot can assemble the context packet for a
difficult customer conversation, and that packet is genuinely valuable, but the
conversation itself is the product in that moment, so delegating it is a
category error rather than an efficiency.

Anything without a stable definition of good output stays with you until the
definition exists. Positioning, pricing, and hiring judgment fail the checkable
test on purpose, because you are still forming the opinion a charter would have
to encode.

## Keep the operating record after the immediate task ends at the solo operator desk

**Automating the wrong end first.** The temptation is to automate the thing
you hate most, which is usually also the thing with the least stable steps and
the highest stakes. Start with the boring recurring task instead. The
satisfying one becomes possible after you trust the setup.

**Charters written as wishes.** "Be helpful and use good judgment" is not a
charter. It gives the bot no way to be wrong, which means it gives you no way
to correct it. Specific outputs, specific limits. The reliable test is whether
a line contains a number, a named format, or a named verb.

**Skipping the stop line because it feels like paperwork.** It is the opposite
of paperwork. It is the clause that lets you leave the thing running, and on a
platform where every bot shares one computer, it is doing more of the safety
work than the platform is.

If you want to skip the blank page, every listing on botskills.sh is a
paste-ready setup with its boundary already written, ranked by how many people
have actually copied it. Take one, adapt the charter to your stack, and let it
run for a week before you give it anything that matters.

Two things worth reading next: [how to write a boundary that actually
constrains a bot](/blog/grok-bot-boundaries), which is the single line this
whole system rests on, and [a day-by-day plan for your first
week](/blog/grok-bot-first-week) if you would rather follow a schedule than
design one.

**Keep reading:** [The Chief of Staff Bot](/blog/grok-bot-chief-of-staff-setup), [Every Grok Bot Integration and What Each One Unlocks](/blog/grok-bot-integrations-list), [Give Every Bot One Source of Truth](/blog/grok-bot-obsidian-knowledge-base).

## Reconcile Asha's case with a four-state ledger before the next run at the solo operator desk

A retry is not a recovery plan. Recovery starts by writing down what is known for each unit of work. Give every candidate, deal, message, routine, or account one row. Do not let a clean final total erase a dirty intermediate state. The ledger should survive after the browser tab, plugin response, or recent-history row disappears.

| Observed state | Required action | Control result |
|---|---|---|
| Work produces a private draft | Let the bot prepare it | Proceed and retain evidence |
| Work changes an external system | Require Asha to perform the change | Stop automatic progress |
| Work creates a promise | Require Asha to approve the exact wording | Escalate with the gap named |
| Work needs a purchase or acceptance | Stop before the final control | Require explicit human handling |

For Asha, the first pass is intentionally manual. Number the units from 1 through 8, an arbitrary rehearsal size, and attach the source URL or record identifier to each row. Add observed-at time, output path, completion evidence, and reviewer. Eight is not a product limit. It is small enough to compare every row without sampling.

The walked failure matters because the tempting repair is the wrong repair. Asha asked for a Friday follow-up pack. One lead had already replied in another thread, so a draft reopened a closed conversation. The no-send line prevented embarrassment, but the review exposed a missing thread-status check. The bot should not smooth that gap into a confident sentence. It should state which step completed, which step did not, and which step has an unknown state. That output gives the reviewer something actionable without pretending the missing evidence exists.

Use this charter fragment as the fixed rule for the next rehearsal:

\`\`\`text
OBJECTIVE
Prepare a solo consulting week with leads, invoices, content, and customer follow-up.

SOURCES
Use only the identifiers and pages listed in the run manifest.
Record the source and observed-at time for every extracted fact.

OUTPUT
Write one private ledger row per unit.
Allowed states: complete, not-started, blocked, unknown.
Never convert unknown into complete or not-started.

BOUNDARY
Never send, publish, buy, accept terms, promise delivery, or change a customer record.

STOP CONDITIONS
Stop when a required source is absent, a completion receipt is missing,
or the requested action would cross the boundary.
Return the affected identifier, last proved step, missing evidence, and owner.
\`\`\`

Run the rehearsal twice. In run one, provide complete evidence for all eight units and confirm the output shape. In run two, remove one required field from unit 3, introduce a contradictory source for unit 5, and remove completion evidence from unit 7. A passing bot returns three different exceptions. A failing bot forces all three into the same successful state.

The review is also specific. Compare the eight input identifiers with the eight output rows. Open two cited sources at random, then inspect all three planted exceptions. Confirm that the bot did not create an extra row, hide a missing value, or cross the boundary. Record pass or fail beside each check. A sentence saying the run looked good is not evidence.

After the rehearsal, choose one of three outcomes. Promote the routine only if every planted exception stayed visible. Revise the charter if the wrong source won or the stop condition was vague. Retire the workflow if the human must reconstruct most rows anyway. That last answer is legitimate. Automation that moves the review burden into detective work has not removed work.

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
