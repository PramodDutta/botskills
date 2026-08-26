import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Memory: What It Remembers and How to Shape It',
  description:
    'Grok bot memory is not a hard drive. What actually survives between runs, how to build a context file your bot rereads, and when remembering turns into a liability.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Grok Bot Memory: What It Remembers and How to Shape It

Your bot quoted a price you stopped charging in March. Nothing broke, no alert
fired, and the draft read perfectly well until you looked at the number twice.

Memory is the part of a bot setup that surprises people in two directions. It
forgets something you are certain you told it, and then months later it
confidently repeats a fact you wish it had dropped. Both failures come from
the same misunderstanding: treating memory as a property the runtime has,
rather than something you design.

## Separate the three things people call memory

When someone says a bot "remembers," they usually mean one of three things,
and they behave nothing alike.

**Run context.** Everything loaded into the model during a single execution:
your charter, the page it just read, the last twenty emails it triaged. This
is working memory. It is gone when the run ends. Nothing you say to a bot mid
run survives on its own.

**The setup itself.** Your charter persists, not because it is remembered but
because it is reloaded at the top of every run. This is the only thing you can
be completely confident the bot sees every time.

**External state.** Files, a notes page, a sheet, a CRM record, a document in
whatever storage the bot can reach. This persists because it lives outside the
bot entirely. The bot rereads it the way a person rereads a handbook.

| | Run context | The charter | External state |
|---|---|---|---|
| Survives the run ending | No | Yes | Yes |
| Reloaded automatically | Not applicable | Yes, every run | Only if the charter says to |
| You can edit it | Only during the run | Yes, in one place | Yes, and so can the bot |
| Where corrections vanish | Here, always | Never | Only if nobody prunes it |
| Typical failure | "It forgot what I just told it" | Too long to maintain | Stale facts stated confidently |

Runtimes are moving fast on native memory features, and as of writing it is
not worth betting a working system on exactly how a vendor's memory toggle
will behave next quarter. The durable design is the one that does not care:
put facts that must survive somewhere you control, and instruct the bot to
read that place first.

The practical rule fits on one line. **If a fact is not in the charter or in a
file the bot is explicitly told to read, assume it is gone.**

## The bot did not forget, you never wrote it down

Most "my bot forgot" reports are not memory failures. They are unwritten
facts.

The classic version is the mid-run correction. The bot writes "Acme Corp," you
reply "it is Acme Co., not Corp," and it fixes the draft immediately. You saw
it learn. It did not learn. It updated its working context for the remainder
of that run, and that context ended when the run did.

The same thing happens with preferences you stated once during setup, details
you mentioned in a chat window before you saved the charter, and anything the
bot inferred correctly one time from a document that is no longer in front of
it.

Here is the habit that fixes it permanently: the second time you correct a bot
on the same thing, stop correcting and go edit a file. A correction you have
made twice is not feedback, it is a missing line of configuration. Treat the
repeat as the signal.

There is a useful diagnostic when you cannot tell which failure you are
looking at. Ask the bot where a fact came from. If it can name the file and the
line, the fact is durable. If it says it recalls it from an earlier
conversation, the fact is already gone and you are hearing a reconstruction.

## Memory is not a log, and a log is not memory

A log is an append-only record of what happened. Memory is a curated set of
facts that should influence what happens next. Collapsing the two is why
context files rot into something nobody can maintain.

If you let a bot append every run summary to the same file it reads at
startup, three things go wrong at once. The file grows without limit, so every
run pays to reread months of noise. The signal to noise ratio drops, so a
throwaway line from June competes for attention with a rule that actually
matters. And stale entries never get removed, because nothing in an
append-only file ever expires.

Keep them in separate places. The log can be as long as you like, because
nothing reads it by default. The memory file should stay short enough that you
can read it top to bottom in under two minutes, because you will need to do
exactly that during pruning.

There is a second reason to keep the log, unrelated to memory. There is no
audit view of bot actions as of writing, so an append-only log the bot writes
and never edits is the closest thing to a record you will have. It just should
not be the thing the bot reads at startup. [Making a bot's work
observable](/blog/bot-observability) covers the log side properly.

## Design the context file the bot rereads

A good context file is opinionated, sectioned, and dated. Here is a shape that
holds up:

\`\`\`text
# CONTEXT.md  (the bot reads this in full at the start of every run)

## Identity and voice
Company name: Acme Co. Never "Acme Corp", never "ACME".
Voice: plain sentences, no exclamation marks, no "delighted to".

## Current commercial facts (review monthly)
Only acme.co/pricing is authoritative for price. Never quote from here.
Active plans: Starter, Team.
The legacy "Pro" plan is retired. Never mention it to a new prospect.
Public support promise: next business day, weekdays only.

## People and routing
Dana owns billing. Anything invoice or refund shaped goes to her, not me.
Sam owns partnerships. Do not draft partnership replies without his notes.

## Never store here
No customer email addresses, no card details, no API keys, no passwords,
no personal data about anyone outside the company.

## Changelog
2026-08-11  removed Pro plan pricing (plan retired)
2026-07-02  added weekday-only wording to the support promise
\`\`\`

Four properties make that file work, and each is worth copying deliberately.

Sections are named after the decisions they inform, not after topics. "Current
commercial facts" tells a bot when to consult it; a section called "Notes"
does not. Every volatile section carries its own review cadence in the heading,
so the maintenance schedule lives in the file rather than in your intentions.
Facts that have an authoritative source point at the source instead of copying
its value, which is the single most important line in the whole example. And
the changelog at the bottom means a fact that disappeared left a trace, so when
a bot stops mentioning something you can tell whether that was a decision or an
accident.

## Point the charter at the file, because the pointer does more than the file

A perfect context file that nothing reads is a document. The charter block that
loads it is where the behaviour actually comes from:

\`\`\`text
Before doing anything else, read CONTEXT.md in full.

CONTEXT.md is more current than anything you recall from an earlier run.
If it contradicts what you think you know, CONTEXT.md wins, silently.

If a fact you need is missing from CONTEXT.md, do not guess and do not
substitute a similar fact. Complete what you can, then end your summary
with the exact line you would add to CONTEXT.md so I can approve it.

Never write secrets, credentials, or customer personal data into CONTEXT.md
or into any note you keep.
\`\`\`

Each paragraph is load-bearing. The first makes the read unconditional, so it
happens on a quiet Tuesday as well as on the day you remember to ask. The
second settles precedence in advance, because a bot that finds a conflict
without a precedence rule will pick one and not tell you.

The third paragraph is the part people leave out and then miss most. A bot that
reports its own gaps turns memory maintenance into a queue of one-line
approvals instead of an audit you keep postponing. The proposed line arriving
in the daily summary is what makes the file stay current, since you will
approve a sentence in five seconds and you will not schedule a review.

The fourth is a boundary, not a preference. The
[Persistent Bot Memory setup](/bots/persistent-bot-memory) is built around this
pattern, and its declared boundary is the one that belongs on any bot with a
memory file: it never stores secrets, tokens, passwords, or customer data.

## What to store, where, and how often to prune

Not every fact deserves the same home. Charter facts are stable and cheap to
reread. Context facts change on a schedule. Everything else belongs in a real
system of record that the bot queries rather than remembers.

| Fact type | Example | Where it lives | Prune or verify |
|---|---|---|---|
| Identity and voice rules | Company spelling, tone, banned phrases | Charter | Rarely, only on a rebrand |
| Hard limits and boundary | "Never send", "never quote price" | Charter | Never remove without a decision |
| Commercial facts | Active plans, SLA wording, positioning | Context file | Monthly |
| People and routing | Who owns billing, who approves what | Context file | Quarterly |
| Project state | Current launch, this quarter's goal | Context file, dated section | Every sprint or month |
| Prices and stock | Actual numbers | Nowhere. Read the live source each run | Every run |
| Customer records | Account status, contact history | CRM or helpdesk, queried live | Every run |
| Secrets and credentials | Keys, tokens, passwords, card numbers | Nowhere the bot writes | Never stored at all |
| Run history | What the bot did on Tuesday | Append-only log the bot does not read | Archive, never load |

The bottom half of that table is the interesting half. Anything that a system
of record already knows should be looked up, not remembered, because a lookup
is right and a memory is right-as-of-whenever.

The test for any new line you are tempted to add: name the date it becomes
wrong. If you can, it belongs in a dated section with a review cadence, or it
belongs at its source with a pointer here. If you cannot name a date, it is
probably an identity or voice rule and belongs in the charter instead.

## Follow one context file through its first month

Abstract advice about pruning produces files nobody prunes. Here is one file,
from the day it was created to its first monthly review.

**Day one.** The file is nine lines: company name, voice rules, the two active
plans with their prices typed in, and Dana's name next to billing. It works
immediately, and the improvement in draft quality is obvious enough that you
stop thinking about the file.

**Day nine.** A bot drafts a reply mentioning the Pro plan, which you retired
in June. The plan name was never in the file, so the bot filled the gap from
the website copy it read once. The fix is not to delete something, it is to add
an explicit negative:

\`\`\`text
## Current commercial facts (review monthly)
Active plans: Starter, Team.
The legacy "Pro" plan is retired. Never mention it to a new prospect.
\`\`\`

Negative facts are the ones nobody writes down, because a file full of what is
true feels complete. It is not. A bot fills silence with whatever it read.

**Day seventeen.** A bot proposes a line at the end of its summary: "Add: the
support promise is next business day, weekdays only." It hit the gap, did not
guess, and handed you a one-line approval. That is the third paragraph of the
charter pointer working exactly as designed, and it takes five seconds to
accept.

**Day twenty-three.** Someone changes the Team price. Nobody updates the file,
because nobody thinks about the file. Three drafts go out with the old number
before you notice, which is the exact failure the March price story at the top
of this article describes.

**Day thirty, the prune.** Ten minutes with the file open. You delete two lines
about a launch that shipped, replace both typed prices with a pointer to
acme.co/pricing, and add the changelog entries.

| | Day one | Day thirty | Why the change matters |
|---|---|---|---|
| Lines in the file | 9 | 14 | Five facts that used to be re-explained by hand |
| Prices stated as values | 2 | 0 | The class of error that caused day twenty-three is now impossible |
| Negative facts ("never mention") | 0 | 2 | Silence stopped being filled from stale website copy |
| Gaps the bot reported itself | 0 | 3 | Maintenance became a queue of approvals instead of an audit |
| Lines deleted at the prune | 0 | 2 | The file is being maintained rather than accumulated |

Row two is the whole lesson. The prune did not make the file shorter, it made
it less wrong, by converting two values into one pointer. A memory file that
stores the location of the truth cannot go stale in the way a file that stores
the truth can.

## A context file is account-wide, not bot-wide

There is an assumption baked into the phrase "my bot's memory" that current
platforms do not support.

On Grok Bot, every bot on an account shares one persistent cloud computer. Each
bot works on its own screen, but the files underneath belong to the account. A
CONTEXT.md written by your triage bot is a file your research bot can read and
write, and so can any setup you paste in from a stranger. xAI's documentation
is direct about the general principle and tells you not to use separate bots as
a security boundary.

Two consequences follow that change how you write the file. There is no such
thing as a private note for one bot, so anything you would not want every bot
on the account to act on does not belong in a file on that computer. And
deleting a bot does not delete the files it created: retiring the bot that
maintained a context file leaves the file behind, still readable, still stale,
with nothing scheduled to prune it any more.

That second one is the quiet version of this failure. A context file with no
owner is worse than no context file, because it keeps supplying confident facts
long after the person who curated them stopped looking. When you retire a bot,
retire or reassign its file in the same sitting. [What the shared computer
actually covers](/blog/grok-bot-shared-computer-security) works through the
rest of the shared surface.

## Every run pays to reread the file, so size it deliberately

Pruning is usually framed as tidiness. It is also a recurring cost, and the
arithmetic is unforgiving because it compounds with frequency rather than with
effort.

A context file the bot reads at the top of every run is loaded again on every
single run. A file that has quietly grown to five screens, on a bot that fires
hourly, is being reread hundreds of times a week to deliver the same handful of
rules that mattered. Subscriptions include a weekly usage allowance and work
beyond it bills on demand from actual model and token cost, and there is no
Grok Bot specific spend cap as of writing, so nothing stops a bloated file from
becoming a standing line item.

Three habits keep it bounded:

- Cap the file by reading time, not by line count. Two minutes top to bottom is
  the right ceiling, because it is also the pruning budget.
- Store pointers instead of payloads for anything long. A link to the pricing
  page costs one line; a pasted pricing page costs its full length on every run
  forever.
- Split by cadence, not by topic, if it genuinely will not fit. Rules that never
  change belong in the charter, and only volatile facts need rereading.

If you want the wider version of this argument, including which intervals cost
the most, [bot cost control](/blog/bot-cost-control) covers the levers you can
actually pull.

## Confidence is what makes a stale fact dangerous

A bot with memory is more confident, not more correct, and confidence is
exactly what makes a stale fact dangerous.

**The stale number.** Prices, discount rules, and inventory are the top of
this list because they change without ceremony and nobody thinks to update a
bot's notes. This is why a competitor tracker like
[Competitor Pricing Watch](/bots/competitor-pricing-watch) is written to read
the live public page on every run rather than trust what it recorded last
month. Design your own bots the same way: for any fact that has a source of
truth, the memory file stores the location of the truth, not the truth.

**The person who left.** A customer churned in May and asked not to be
contacted again. Your context file still describes them as an active account
with a renewal coming up. A month later a bot with drafting rights builds a
renewal nudge around them. Nothing about that failure looks like a bug, which
is why it survives review.

**Data you should never have kept.** The moment a bot writes customer details
into a file it controls, you have created a copy of personal data outside the
system that was supposed to govern it, with no retention policy and no
deletion path. That is a real problem long before it is a legal one.

The prune drill takes ten minutes and belongs on a monthly repeat. Open the
context file, read it as though a new hire wrote it, and delete every line you
cannot defend as currently true. Anything you hesitate on gets a source link
instead of a value. If the file has grown past two screens, the excess is
almost always log content that leaked in.

## Six memory failures and what each one actually is

Each of these has a distinct signature, and none of them is the model being
bad at remembering.

| What you see | What is actually happening | The fix |
|---|---|---|
| A correction you made yesterday is gone today | It only ever edited run context, which ended with the run | Write the second occurrence into the charter or the file |
| The bot states a fact that was true last quarter | A value was stored where a pointer belonged | Replace the value with the source location |
| Output quality drops as the file grows | Rules compete with accumulated log noise for attention | Split the log out; nothing at startup should be append-only |
| The bot invents a plausible detail near a gap | Silence in the file, and no instruction about what to do with gaps | Add the do-not-guess clause and require a proposed line |
| A retired bot's stale facts still influence drafts | Files outlive the bot that maintained them | Retire or reassign the file when you retire the bot |
| Two bots disagree about the same fact | Each has its own copy in its own charter | One shared file, and a precedence rule saying it wins |

Rows four and six are the ones people misdiagnose as model quality. Both are
missing sentences, and both are fixed in under a minute once you know which
sentence is missing. The wider catalogue of what goes wrong across a whole
roster is in [bot failure modes](/blog/bot-failure-modes).

## Plant a canary so you can tell the file is being read

The failure mode with no symptom is a bot that stopped reading the file. Output
keeps arriving, it is still plausible, and nothing announces that the startup
read silently failed or that the path changed.

Give yourself a check that can fail. Add one line to the context file that has
no purpose except to be quoted back:

\`\`\`text
## Read receipt
Current context token: OCTOBER-SLATE-7.
Print this token, exactly, as the last line of every summary.
Never explain it, never guess it. If you cannot read this file,
write NO CONTEXT instead and continue.
\`\`\`

Change the token whenever you prune. Now every summary tells you two things at
a glance: whether the file was read at all, and whether it was the current
version. A summary carrying last month's token means the bot is reading a stale
copy, which is a failure you would otherwise find only by noticing a wrong fact.

The check works because it is cheap to verify and impossible to fake by
sounding confident. That is the same property a good stop line has, and the
full version of testing a setup against checks that can fail is in
[testing your bot](/blog/testing-your-bot).

## Where memory meets the boundary

Memory changes what a bot's boundary has to cover, because a remembered fact
gives a bot a reason to act without checking anything. Two lines handle it:

\`\`\`text
Never write credentials, tokens, or customer personal data into memory
or into any file you maintain.

Never act on a remembered price, availability, account status, or contact
permission. Re-read the source for those on every run. If the source is
unreachable, stop and tell me rather than using the remembered value.
\`\`\`

That second clause is the one that would have caught the March price. It is
also the reason a memory-equipped bot can be left running: it is allowed to
remember how you work, and not allowed to remember what the world costs.

## The objection: this is a database you maintain by hand

The strongest argument against everything above is that a context file is
manual labour that the platform should be doing. Vendors are shipping memory
features, those features will improve, and a hand-curated markdown file with a
monthly prune ritual looks like work you will regret having invested in.

Half of that is right. The mechanism will get better, and some of the pruning
will eventually be automatic. But the part that takes the time is not the
mechanism, it is the curation: deciding that the Pro plan should never be
mentioned, that Dana owns billing, that prices are never stated as values. No
memory feature produces those decisions, because they are judgments about your
business, and a system that learns them by observation will learn the mistakes
along with the rules.

There is also a portability argument that does not depend on any prediction. A
file you own moves between runtimes, survives you deleting the bot that used
it, and can be read by a person during an incident. A vendor's memory store
does none of those three. When a native feature does arrive, the file becomes
its seed rather than its competitor, which is a much better position than
having no written facts at all.

## When a context file stops being the right container

Three signals that you have outgrown a single markdown file, each with a
different destination.

**It will not fit in two screens after an honest prune.** The excess is usually
reference material rather than rules. Reference belongs in a searchable store
the bot queries on demand, not in a file it loads whole. A structured note
vault is the usual next step, and [running a bot against an Obsidian knowledge
base](/blog/grok-bot-obsidian-knowledge-base) covers how to structure one so a
bot can find things without reading everything.

**The facts are rows, not sentences.** Anything with an identifier, a status,
and a date is a record, and records belong in a sheet or a system of record the
bot reads live. A table pasted into a context file is stale the moment it is
saved, and unlike prose you cannot tell by reading it.

**Different bots genuinely need different views.** On a shared computer you
cannot give each bot a private file, so the honest options are one file with
clearly scoped sections that every bot reads, or separate accounts. Trying to
enforce per-bot views with instructions alone gives you the appearance of
separation without the fact of it.

If you want the wider argument for why one refusal line does more work than a
page of instructions, it is laid out in
[the case for writing a bot boundary](/blog/grok-bot-boundaries), and the
charter format those lines slot into is covered in
[the one-person company setup](/blog/one-person-company-grok-bot).

**Keep reading:** [How to Build a Grok Bot That Can Follow Up With Prospects](/blog/grok-bot-to-sales-followup), [How to Build a Grok Bot That Can Write Your Standup](/blog/grok-bot-to-standup), [The Best AI Bots for Developers in 2026](/blog/best-ai-bots-for-developers).

This sits inside a wider guide: [Bot Security](/blog/bot-security-complete-guide) covers the whole territory.

## Frequently Asked Questions

### Does Grok Bot remember things between runs?

Some of it, and the part that is guaranteed is the part you wrote down. Your
charter is reloaded every run, so anything in it persists by construction.
Working context from a single execution does not survive the run ending, which
is why a correction you typed mid-task disappears. Native memory features
exist and keep changing, so the durable approach is to keep facts that must
survive in a file or system the bot is instructed to read at startup. Then
persistence is a property of your setup rather than of a vendor toggle.

### Why does my bot keep forgetting corrections I already made?

Because a correction made in conversation only edits working context, and
working context ends when the run does. The bot genuinely applied your fix and
genuinely lost it. The rule worth adopting is that the second time you correct
the same thing, you stop replying and go edit the charter or the context file
instead. A repeated correction is a missing configuration line, not feedback.
Writing it down once costs a minute and removes the problem permanently rather
than trading a minute a day for it forever.

### Should I put everything the bot might need in one memory file?

No, and the failure mode is specific. A file that grows without pruning makes
every run reread months of stale material, raises cost, and lets a throwaway
line from June compete with a rule that matters. Keep the memory file short
enough to read top to bottom in two minutes. Anything a real system already
knows, like account status or current pricing, should be queried live rather
than copied in. Store the location of the truth, not the truth itself, for
anything that changes.

### What should never go in a bot's memory?

Credentials of any kind, including API keys, tokens, and passwords. Payment
details. Customer personal data such as email addresses, phone numbers, or
notes about individuals. Anything under a retention policy, because a file the
bot maintains has no retention policy and no deletion path. Also avoid storing
volatile facts like prices, stock levels, and contact permissions, not for
privacy reasons but for accuracy: a remembered price is confidently wrong the
moment it changes, and the bot has no way to notice that it changed.
`,
};
