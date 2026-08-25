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

## Why bot prompts fail where chat prompts succeed

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

## The 20 patterns at a glance

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

## Scoping patterns: 1 to 4

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

## Output-shape patterns: 5 to 9

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

## Boundary patterns: 10 to 13

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

## Cadence and trigger patterns: 14 to 16

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

## Recovery patterns: 17 to 20

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

## Assembling patterns into one charter

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

## Patterns that read well and fail in practice

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
