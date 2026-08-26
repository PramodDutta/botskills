import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Prompts That Actually Work: 20 Patterns With Examples',
  description:
    'Twenty Grok bot prompts that survive a real week unattended, each with a one-line use case and the exact text to paste: scope, output shape, boundaries, cadence.',
  date: '2026-08-25',
  category: 'Reference',
  content: `
# Grok Bot Prompts That Actually Work: 20 Patterns With Examples

A prompt that produces a great answer in a chat window will often produce
garbage on its fourth unattended run. Nothing broke. The prompt was written for
a situation where you were present to judge the result and ask again, and a
scheduled bot has neither of those things.

What follows is a reference, not an essay: twenty named patterns, grouped by
the job they do, each with a one-line "use when" and the literal text to paste.
They are the shapes that keep showing up in setups people run every day. Use
them as clauses, not as whole prompts, and combine four or five per bot.

## Write for a run you will not be watching

Three differences do all the damage.

You are not there. In chat, a vague instruction gets a vague answer and you
immediately refine it. On a schedule, a vague instruction gets a vague answer
that lands in your inbox at 07:00 looking exactly like a real one.

There is no conversation. Each scheduled run starts from the saved instruction
text, so anything you clarified in a thread yesterday does not exist today.
Corrections have to live in the charter or they evaporate.

The bot can act. A chat prompt produces text. A bot prompt can produce a sent
email, a merged pull request, or a cancelled subscription. That changes what a
missing clause costs from an awkward paragraph to an apology.

Every pattern below exists because one of those three differences bit someone.

## Scan all twenty before you write a line

| # | Pattern | Group | Use when |
|---|---|---|---|
| 1 | Single Sentence Scope | Scoping | The bot's job keeps quietly expanding |
| 2 | Named Role | Scoping | You cannot tell two bots apart |
| 3 | Explicit Non-Ownership | Scoping | Two bots touch the same tool |
| 4 | Bounded Universe | Scoping | The bot wanders into irrelevant sources |
| 5 | Numbered Section Contract | Output | Output shape changes between runs |
| 6 | Hard Ceiling | Output | Reports keep getting longer |
| 7 | Evidence Or Silence | Output | You cannot verify what it claims |
| 8 | Skip Ledger | Output | You suspect it is dropping hard cases |
| 9 | Empty Means Empty | Output | It pads thin days with filler |
| 10 | Irreversible Verb List | Boundary | The bot can reach something you cannot undo |
| 11 | Draft And Park | Boundary | You want output without exposure |
| 12 | Named Escalation Trigger | Boundary | Certain topics need a human, always |
| 13 | Human Wall | Boundary | Logins, 2FA, captchas, identity checks |
| 14 | Single Trigger | Cadence | One bot has grown two reasons to run |
| 15 | Quiet Hours | Cadence | Bots ping you at 3am |
| 16 | Loud Failure | Cadence | Silence might mean broken, not calm |
| 17 | Uncertainty Marker | Recovery | The bot fills gaps with invention |
| 18 | Charter Changelog | Recovery | The same correction keeps recurring |
| 19 | Dry Run Flag | Recovery | You are about to widen its authority |
| 20 | Rollback Note | Recovery | It performs reversible actions |

## Map each pattern to the failure it prevents

The table above tells you when to reach for a pattern. This one tells you what
its absence looks like from the outside, and how long you wait to find out. The
third column is the one that should change your priorities.

| # | Pattern | What you see when the clause is missing | When it shows up |
|---|---|---|---|
| 1 | Single Sentence Scope | Output covering two jobs, neither done well | Week 2 |
| 2 | Named Role | Two bots you cannot tell apart in a digest | Week 2 |
| 3 | Explicit Non-Ownership | Duplicate outreach and contradictory reports | The day you add a second bot |
| 4 | Bounded Universe | Half the digest is sources you never chose | Week 3 |
| 5 | Numbered Section Contract | A different layout every morning | Run 2 |
| 6 | Hard Ceiling | Reports that grow a paragraph a week | Week 2 |
| 7 | Evidence Or Silence | Confident claims you have no way to check | Run 1, if you look |
| 8 | Skip Ledger | Nothing at all. That is precisely the problem | Never, until something is missed |
| 9 | Empty Means Empty | Two paragraphs about a quiet Tuesday | The first quiet day |
| 10 | Irreversible Verb List | One sent email you did not write | Any run, and once is enough |
| 11 | Draft And Park | Output somewhere you did not expect it | Run 1 |
| 12 | Named Escalation Trigger | A confident answer about a refund | The first edge case |
| 13 | Human Wall | A stuck run, or worse, an attempted bypass | The first expired login |
| 14 | Single Trigger | Two output shapes you read as one stream | Week 1 |
| 15 | Quiet Hours | A notification at 03:12 | Night one |
| 16 | Loud Failure | Silence, which you read as calm | The first broken source |
| 17 | Uncertainty Marker | A plausible detail that is not true | Run 1, undetected |
| 18 | Charter Changelog | The same correction, made a fourth time | Week 3 |
| 19 | Dry Run Flag | An action you were not ready to authorise | The day you widen scope |
| 20 | Rollback Note | Forty filed messages and no way back | The first bulk action |

Most of that last column is reassuring. A missing section contract or ceiling
announces itself within two runs and you will fix it unprompted.

Three rows do not behave that way. Pattern 8 has no symptom at all, because a
silent omission looks identical to nothing having happened. Pattern 17 produces
output that reads better than the truth would have. Pattern 10 gives you no
warning period, because the first occurrence is the incident. Write those three
into your first charter and add the rest as symptoms appear.

## Name what the bot owns and what it does not (1 to 4)

**Single Sentence Scope** forces the job into one sentence beginning "Every
weekday, this bot". If you need "and also" to finish it, you have two bots
sharing a name, and when the output is wrong you will not know which half
produced it.

**Named Role** replaces "assistant" with a job title a human could hold. The
name is the scope test: if it would look strange on an org chart, the scope is
still undecided.

**Explicit Non-Ownership** is the pattern nobody writes until two bots collide.
Naming what a bot does not own is how you stop duplicate outreach and
contradictory reports.

**Bounded Universe** lists the sources by name and closes the set. Without it,
a research bot silently widens its inputs until half the digest is noise.

All four show up in one before and after. Here is the version most people write
first, which passes every test you can apply while reading it:

\`\`\`text
You are my sales research assistant. Find good prospects for us
each day and keep the CRM up to date.
\`\`\`

Nothing in those two sentences is wrong, and they are unbounded in three
directions: the role has no edge, the sources are the entire internet, and "keep
the CRM up to date" is a write permission granted by accident. The same job with
patterns 1 through 4 applied:

\`\`\`text
You are my Lead Scout. Every weekday, you find and rank new prospects.
You do not own outreach, sequencing, or the CRM fields other bots write.
Work only from these sources: our inbound form, the two job boards
listed below, and public company pages. If a fact is not in those
sources, write "not found" rather than inferring it.
\`\`\`

The [lead scout bot](/bots/lead-scout) in the catalog is exactly this shape,
and its boundary is the reason it is safe to run daily: it never contacts
anyone, so a bad ranking costs you a minute of reading and nothing else.

## Specify the report shape so you can check it at a glance (5 to 9)

**Numbered Section Contract** names the sections and their order. "Summarize"
is not a shape. Four numbered parts is a shape you can check at a glance.

**Hard Ceiling** puts a number on length. "Be concise" is unenforceable. "Under
250 words" is a rule both of you can verify.

**Evidence Or Silence** requires a link, path, or message ID behind every
claim. This single clause converts a bot that sounds confident into a bot you
can audit in thirty seconds.

**Skip Ledger** demands a list of what the bot deliberately left out and why.
It is the highest-value clause in this entire reference, because silent
omissions are the failure mode you cannot detect any other way.

**Empty Means Empty** kills padding. A quiet day should produce a short report,
not an invented one.

\`\`\`text
Report in exactly four numbered sections, in this order:
  1. ACTIONS TAKEN   2. NEEDS ME   3. CHANGED   4. SKIPPED
Under 250 words total. Every claim carries a link or message ID.
SKIPPED lists everything you looked at and left out, with the reason.
If a section has nothing, write "nothing" and move on. Do not pad.
\`\`\`

## Forbid the verbs, not the vibe (10 to 13)

Every listing on botskills.sh must declare a boundary: the one action the bot
never takes without a human. These four patterns are how that field gets
written in practice.

**Irreversible Verb List** names the verbs rather than the vibe. Send, post,
pay, delete, merge, cancel, book, publish. Find the ones your bot could
plausibly reach and forbid them by name.

**Draft And Park** gives you the output without the exposure: the bot writes
the thing and leaves it somewhere specific and unsent.

**Named Escalation Trigger** lists topics that stop the bot cold regardless of
how routine the request looks. Pricing, contracts, legal, refunds, anything
involving a commitment.

**Human Wall** covers logins, 2FA prompts, captchas, and identity checks. The
correct behaviour is always to hand you the screen, never to work around it.

\`\`\`text
// WHERE YOU STOP
Never send, post, publish, pay, cancel, merge, or delete anything.
Write replies as drafts in the folder "Bot Drafts" and leave them unsent.
If a message involves pricing, a contract, legal, or a refund, stop and
flag it for me without drafting a response.
At any login, 2FA prompt, captcha, or identity check, stop and hand me
the screen. Never attempt to get past one.
\`\`\`

The [pull request review sentinel](/bots/pr-review-sentinel) is the clearest
example of pattern 10 in the wild: it comments and nothing more, never merging,
approving, pushing, or requesting changes. The [email purger
bot](/bots/email-purger) shows pattern 11 applied to the most dangerous verb in
a mailbox, holding every deletion until you approve the whole list.

## Give each bot one reason to run and a loud way to fail (14 to 16)

**Single Trigger** keeps one bot to one reason to run. A bot with both a
schedule and an event trigger produces two kinds of output that you will read
as one stream, and you will misdiagnose every problem for a week.

**Quiet Hours** stops a technically correct bot from being intolerable. Runs
can happen overnight; notifications should not.

**Loud Failure** is the difference between a calm week and a broken bot. Retry
once, then report the failure with a timestamp and a reason. Silence must never
be a valid state.

\`\`\`text
// TRIGGER
Run once per weekday at 07:00 in my local timezone. One trigger only.
Never notify me between 21:00 and 07:00; hold output until the morning.
If a run fails or a source is unreachable, retry once after ten minutes.
If it fails again, message me one line: FAILED, timestamp, reason.
Never skip a run silently.
\`\`\`

## Make mistakes recoverable before you widen authority (17 to 20)

**Uncertainty Marker** licences the bot to say it does not know. Without an
explicit permission to report a gap, an instruction to produce a complete
report will be satisfied by inventing the missing piece.

**Charter Changelog** is a dated list at the bottom of the charter. Two weeks
in it becomes the most valuable part of the file, because it records exactly
where your judgment departs from the default.

**Dry Run Flag** is how you widen authority safely: the bot reports what it
would have done, without doing it, for a week before you let it act.

**Rollback Note** applies to anything reversible the bot does. If it filed
forty messages, the report should say how to put them back.

\`\`\`text
If you cannot verify something, write "unverified" and the reason.
Never fill a gap with a plausible guess.

// DRY RUN
For the next 7 days, do not perform any action. Instead report
"WOULD DO: <action>" for each one, with the exact target.

// ROLLBACK
For every reversible action you take, record the undo step in one line
so I can reverse the whole run without reconstructing it.

// CHANGELOG
2026-08-25  Added: never draft replies that quote a price.
\`\`\`

The [churn watch bot](/bots/churn-watch) is worth reading as an applied example
of patterns 7, 8, and 12 together: it reports risk signals with evidence,
sends nothing to the customer, and keeps every report in an internal channel.

## Watch one charter fail and get fixed, clause by clause

Patterns read as obvious in a list and are invisible while you are writing the
thing that needs them. So here is one real shape of failure, followed all the
way through, on a competitor watch bot that a lot of people build first.

The charter someone actually writes on day zero:

\`\`\`text
You are my competitor watch bot. Every morning, check what our
competitors are up to and tell me if anything important changes.
Use good judgment.
\`\`\`

Nothing about that looks broken. It ran for two weeks. Here is the log.

| Day | What arrived | The real cause | Pattern that fixes it |
|---|---|---|---|
| 1 | A polished summary of three rivals | Nothing yet. You were watching | None |
| 2 | Same three rivals, sections in a new order | No shape was ever specified | 5 |
| 4 | "Acme appears to be raising prices" | No evidence was required | 7 |
| 5 | Nine rivals, two you have never sold against | The source set was left open | 4 |
| 8 | 900 words on a day nothing happened | No ceiling, and no permission to be brief | 6 and 9 |
| 11 | Nothing at all, two days running | A page started refusing the request, the run failed quietly | 16 |
| 14 | No mention of the pricing page you needed | It was skipped, and nothing required saying so | 8 |

Read the cause column again. Not one of those is a model failure. Every line
arrived because a sentence was missing, and each missing sentence was invisible
until the day it mattered.

Day 11 and day 14 are the expensive pair. On day 11 the bot was broken and the
output was silence, which is indistinguishable from a quiet week. On day 14 the
bot was working perfectly and had decided the thing you cared about was not
worth mentioning. You would never have found the second without a skip ledger.

The rebuilt charter:

\`\`\`text
You are my Competitor Watch. Every weekday at 07:00 you report changes
on the public pages of exactly these four companies: <list them>.
You do not own outreach, pricing decisions, or our own site.

Report in four numbered sections: 1. CHANGED  2. UNCHANGED
3. UNREACHABLE  4. SKIPPED. Under 200 words total.
Every claim in CHANGED carries the URL and the date you saw it.
If nothing changed, section 1 says "nothing". Do not pad.
SKIPPED lists every page you looked at and left out, with the reason.

If a page is unreachable, retry once after ten minutes, then list it
under UNREACHABLE with the status you got. Never skip a run silently.
If you cannot verify something, write "unverified" and why. Never
fill a gap with a plausible guess.

// WHERE YOU STOP
Read only. Never fill a form, create an account, contact anyone, or
sign in to anything. At any login or captcha, stop and tell me.

// CHANGELOG
2026-08-25  Added SKIPPED after a pricing page went unreported for 6 days.
\`\`\`

That is seven patterns, and six of the seven were added in response to something
that had already gone wrong. This is the normal path.
[Competitor Pricing Watch](/bots/competitor-pricing-watch) and
[Competitor Website Watch](/bots/competitor-website-watch) in the catalog are
both built to this shape, and both carry the same boundary: they read public
pages, and they never fill a form or contact anyone.

## Pick your next three patterns from the symptom, not the list

Twenty patterns is a menu, and reading a menu top to bottom is how you end up
with a charter that contradicts itself. Work from what is actually annoying you
this week.

| The symptom you have | Add these | What changes tomorrow | What it costs you |
|---|---|---|---|
| Reports keep getting longer | 6, 9 | A fixed ceiling, and honest short days | Detail you rarely read |
| You do not trust what it claims | 7, 17 | Links behind claims, gaps marked as gaps | Slightly longer output, far faster review |
| You suspect it drops hard cases | 8 | A visible list of what was left out, and why | One extra section per report |
| Two bots contradict each other | 2, 3 | Each bot states what it does not own | An afternoon rewriting both charters |
| The bot frankly scares you | 10, 11, 12, 13 | Nothing leaves your accounts without you | You approve more, which is the point |
| Output shape wobbles run to run | 5, 14 | One layout, one reason to run | Flexibility, in exchange for comparability |
| You keep making the same correction | 18 | Corrections live in the file, not the chat | Two minutes each time |
| You are about to let it act | 19, 20 | A week of "would do", then an undo line | A week of waiting |

Add at most three at a time, and add them a week apart when you can. If you
change five clauses at once and the output improves, you have learned that
something worked, which is almost no information at all.

## Stack five or six patterns, never all twenty

A working charter is usually five or six of these, in a fixed order: Named Role
and Single Sentence Scope at the top, Bounded Universe next, then the output
contract, then the trigger, then the boundary block last so it is the final
thing the bot reads. Nine patterns is about the ceiling before the instruction
starts contradicting itself.

Pick by failure mode rather than by taste. If your bot is verbose, you need 6
and 9. If you do not trust it, you need 7 and 8. If it scares you, you need 10
through 13. The full walkthrough of assembling one from scratch is in
[how to create a Grok bot](/blog/how-to-create-a-grok-bot), and
[25 real setups](/blog/grok-bot-examples) shows the combinations that people
actually run.

## Delete these clauses on sight

A short list of clauses worth deleting on sight.

"Use good judgment." It gives the bot no way to be wrong, which means it gives
you no way to correct it.

"Be thorough but concise." Two instructions that resolve against each other, so
the bot picks one at random each run and your output shape wobbles.

"Ask me if you are unsure." Uncertainty is not something a bot reliably
notices. Name the specific topics that require you instead, which is pattern
12.

"Act as a world-class expert." Persona inflation changes tone and nothing else.
The output contract is what changes quality.

"Do whatever it takes." Written as motivation, read as permission. Combined
with tool access, this is how a bot ends up doing exactly what it takes.

Three more belong on the list, and all eight share one structure: an adjective
standing where a rule should be. The last column is what to write instead.

| The clause | What you meant | What it actually does | Write instead |
|---|---|---|---|
| "Use good judgment" | Handle edge cases sensibly | Leaves no way to be wrong, so no way to correct it | Named escalation triggers, pattern 12 |
| "Be thorough but concise" | Cover it, briefly | Two rules that resolve against each other, differently each run | A word count, pattern 6 |
| "Ask me if you are unsure" | Escalate the hard ones | Depends on the bot noticing uncertainty, which it does not do reliably | A topic list, pattern 12 |
| "Act as a world-class expert" | Raise the quality | Changes tone and nothing else | An output contract, pattern 5 |
| "Do whatever it takes" | Try hard | Reads as permission, and with tool access it is one | A forbidden verb list, pattern 10 |
| "Always double-check your work" | Reduce errors | A second pass with no criterion agrees with the first | Evidence behind each claim, pattern 7 |
| "Only escalate if it is important" | Do not spam me | Delegates the judgment you wanted to keep | Explicit escalation topics, pattern 12 |
| "Be proactive" | Notice things | Grants scope you did not intend to grant | Explicit non-ownership, pattern 3 |

Nothing in that list should be deleted without a substitute, and every
substitute is more boring and more specific than the phrase it replaces. That is
the trade this whole reference is making.

## Test a new clause against the run that made you write it

Adding a clause feels like fixing something, and often it is not. Two checks,
about ten minutes, and you will catch most of the misses.

Keep the bad output. When a run goes wrong, save the report and, if you can, the
input it worked from. This is the habit that makes everything else here
testable, and almost nobody does it, because the instinct is to fix the charter
and move on.

Then run the amended charter against that same input, not tomorrow's. Tomorrow
is different material and will tell you nothing. If the output on the original
input does not visibly change, the clause did not do what you think, and you
have added a line that will contradict something else later for no benefit.

The check that can fail comes second. Let the amended charter run a normal week
and read the good days. The classic outcome is a clause that fixes the bad case
and quietly damages the normal one: a ceiling that truncates useful detail on
busy days, or an escalation trigger so broad that half the report now needs you.
A clause surviving both is permanent. One that fails the second gets narrowed
rather than removed, because the failure it was written for is still real.

## Where these patterns stop being enough

Every pattern here is an instruction, and instructions govern what a bot intends
to do rather than what it is able to do. That gap matters in three places.

Isolation. If you planned to keep a sensitive account away from a bot by writing
"never touch the finance login" into a different bot's charter, that is a request
and not a control. All bots on an account share one persistent cloud computer,
and browser cookies, signed-in sessions, files, and command-line credentials are
shared across them
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). The
documentation says plainly not to use separate bots as a security boundary
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Write the charter anyway. Just do not mistake it for the thing keeping you safe,
a distinction spelled out in
[what Grok Bot actually isolates](/blog/grok-bot-shared-computer-security).

Reversal. Pattern 10 is prevention, not an undo. An approval governs the
proposed action and does not reverse work already completed, per the same
approvals page, so the clause has to sit in front of the irreversible step
rather than around it.

Memory. Pattern 18 is not a nicety. A routine belongs to a single bot, the app
keeps only a limited window of recent run records, and deleting a bot deletes
its routines with it
([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).
Your charter file, with its dated corrections, is the most durable record of
your own judgment in the setup. Keep it somewhere you control.

**Keep reading:** [Grok Bot for Designers](/blog/grok-bot-for-designers-figma-motion), [Grok Bot Permissions Explained](/blog/grok-bot-permissions-explained), [Grok Bot on Windows, Linux and iPad](/blog/grok-bot-supported-platforms).

This sits inside a wider guide: [Writing Bot Setups That Survive Contact](/blog/writing-bot-setups-complete-guide) covers the whole territory.

## Frequently Asked Questions

### How long should a Grok bot prompt be?

Long enough to be specific and short enough to stay consistent, which in
practice is 150 to 400 words for most bots. Below that you are relying on
defaults you have not inspected. Above roughly 600 words, clauses start
contradicting each other and the bot resolves the conflict differently on
different runs, which reads as unreliability. If your charter is growing past
that, it is usually a sign the bot owns two jobs and should be split into two
bots with narrower scopes and separate triggers.

### Why does my bot ignore part of its instructions?

Almost always because two clauses conflict and one has to lose. "Be thorough"
and "keep it under 200 words" cannot both hold, so the bot satisfies whichever
it weighted higher that run, and the behaviour looks random from outside. Read
your charter looking specifically for pairs that pull in opposite directions,
and replace adjectives with numbers wherever you find them. The second common
cause is a correction typed into chat rather than written into the charter,
which the next scheduled run never sees.

### What is the single most valuable clause to add?

The skip ledger: a requirement that the bot reports everything it looked at and
deliberately left out, with the reason. Wrong output is easy to notice because
it is in front of you. Missing output is invisible, and it is where a bot
quietly misunderstands your charter for weeks. Making omissions explicit turns
your review from proofreading into auditing, and the skipped items are usually
where you discover that a phrase you thought was obvious was read completely
differently.

### Do these patterns work on runtimes other than Grok Bot?

Yes, because they are instructions about a job rather than platform features.
Scope, output shape, boundaries, cadence, and recovery are all expressed in
plain language, so the same charter runs on a self-hosted runtime with a
different model behind it. What does not transfer is plumbing: connector names,
how a schedule is expressed, and where the run history lives. When a setup
genuinely only works in one place, it is usually depending on a named
integration rather than describing the outcome it needs.
`,
};
