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

## Three different things people call memory

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

Then the charter has to point at it, and the pointing matters more than the
file does:

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

That third paragraph is the part people leave out and then miss most. A bot
that reports its own gaps turns memory maintenance into a queue of one-line
approvals instead of an audit you keep postponing. The
[Persistent Bot Memory setup](/bots/persistent-bot-memory) is built around
this pattern, and its declared boundary is the one that belongs on any bot
with a memory file: it never stores secrets, tokens, passwords, or customer
data.

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

## Memory as a liability

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

If you want the wider argument for why one refusal line does more work than a
page of instructions, it is laid out in
[the case for writing a bot boundary](/blog/grok-bot-boundaries), and the
charter format those lines slot into is covered in
[the one-person company setup](/blog/one-person-company-grok-bot).

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
