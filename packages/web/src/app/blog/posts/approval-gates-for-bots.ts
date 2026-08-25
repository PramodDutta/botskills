import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Approval Gates: Designing Bots That Ask Before They Act',
  description:
    'AI approval gates fail in two directions, not one. What belongs behind a gate, how to batch asks so review takes seconds, and why a gate is never an undo.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Approval Gates: Designing Bots That Ask Before They Act

A bot that asks permission for everything is useless. A bot that never asks is
dangerous. Almost every piece of advice about agent safety addresses the second
problem and ignores the first, which is how people end up with setups that are
technically cautious and practically abandoned after nine days.

The interesting design work is calibration in both directions at once. Too few
gates and the bot reaches something you cannot take back. Too many gates and
you stop reading them, which produces the same outcome with extra steps and a
worse feeling. This is about placing gates so that the ones you get are few
enough to read and important enough to be worth reading.

## Two ways to get a gate wrong, and only one of them is obvious

Think of a gate as a classifier with two error types.

A false negative is the bot acting when it should have stopped. Everyone
already fears this one. It is why gates exist and why the advice column is full
of it.

A false positive is the bot stopping when it should have finished. This is
treated as harmless, a small tax on the way to safety, and that is the mistake.
It is not harmless. Every unnecessary prompt spends a fixed amount of your
attention and returns nothing, and the supply is small. Twelve prompts a day
does not produce twelve careful decisions. It produces eleven reflexive
approvals and one careful decision, and you do not get to choose which one gets
the care.

So the two errors are not independent. False positives cause false negatives.
A gate you approve without reading has already failed; it just fails silently
until the day the thing behind it matters. Any gate design that treats your
attention as free is optimising a number that does not exist.

The working target for most single-operator setups is a handful of asks a week,
each one arriving with enough context to decide in seconds. If your bot
generates more than about ten a day, you are not reviewing them, and the honest
fix is fewer gates rather than more discipline.

## What actually belongs behind a gate

Three tests, applied in order. An action needs a gate if any one of them is
true, and finishes unattended if all three are false.

**Can the world be put back?** This is the primary axis, and it is the subject
of a full argument in
[drawing the line on reversibility rather than task size](/blog/grok-bot-approval-rules-reversibility).
The short version: effort and risk are unrelated. Renaming four thousand files
is a large task and completely undoable. Sending one email is a small task and
permanent the moment it leaves.

**Did anyone outside your own head see it?** An action can be undone in the
system and remain permanent in the minds of the people who observed it. A
calendar invite that already emailed an external attendee is deletable and not
retractable.

**Does deciding require something the bot cannot know?** This is the test most
people skip, and it catches a category the other two miss. Some actions are
reversible, unobserved, and still need you, because the right answer depends on
information that was never written anywhere the bot can read. Whether this
customer is about to churn. Whether that vendor is a friend. Whether the
quarter is going badly enough that a routine renewal email is now a delicate
one. Whether you already handled it on a call yesterday.

That third test is a gate on information asymmetry rather than on damage. It is
why [Account Expert](/bots/account-expert) keeps its digests and answers
internal to you rather than messaging the customer, and why
[Personal CFO](/bots/personal-cfo) produces rebalance recommendations and never
trades. In both cases the bot has the data and you have the context, and the
gate exists exactly at the seam between them.

| Action | Reversible | Observed by others | Needs context the bot lacks | Verdict |
|---|---|---|---|---|
| Filing, labelling, archiving your own mail | Yes | No | No | No gate |
| Drafting a reply and leaving it unsent | Yes | No | No | No gate |
| Compiling a research digest for you | Yes | No | No | No gate |
| Booking a hold on your own calendar | Yes | No | No | No gate |
| Replying to a customer thread | No | Yes | Yes | Gate |
| Changing a price or quoting a number | No | Yes | Yes | Gate |
| Cancelling a subscription | Mostly no | No | Yes | Gate |
| Merging a pull request | Painful | Yes | Sometimes | Gate |
| Posting to a shared channel | Deletable, not unseen | Yes | Yes | Gate |
| Accepting terms or a consent dialog | No | No | Yes | Gate, always |
| Deleting from a named temp folder it created | Yes | No | No | No gate |
| Emptying trash or permanently deleting | No | No | Yes | Gate |

The rows with a "no gate" verdict are as important as the others. Handing back
the reversible work is what buys you the attention to read the rest.

## The decision packet, not the notification

Most approval prompts fail because of what they contain, not where they sit. A
prompt that says "Bot wants to send an email. Approve?" is not a gate, it is a
coin flip with extra clicks. You cannot evaluate it without opening three other
things, so you either open three other things (expensive) or approve it
(pointless).

A gate is only as good as the packet it hands you. Five elements, and the whole
point is that they let you decide without leaving the message.

The exact action, as a verb and a target. Not "send an email" but "reply to
Sarah Chen at Northwind, thread 'Renewal timing', with the text below".

The trigger. What did the bot see that produced this? One line, with a link.
This is where you catch a bot that has misread the situation entirely, and it
is the element most often missing.

The full artifact, not a summary of it. If it wants to send text, show the
text. A summary of a message you are approving is a second thing to verify.

The consequence of declining. What happens to this item if you say no? Is it
dropped, retried tomorrow, escalated, or left in a folder for you? Without
this, declining feels like it might break something, and people approve to
avoid finding out.

A recommendation with a reason. The bot did the analysis. Let it say what it
thinks and why, so you are checking work rather than starting it.

\`\`\`text
// HOW TO ASK
Never ask mid-action. Stop before you begin, park the item, and continue
with the rest of the run.

Every parked item is written in exactly this form:

  ACTION:      <verb> <exact target>
  BECAUSE:     <the one thing you saw, with a link>
  CONTENT:     <the full text or diff, never a summary of it>
  IF I SAY NO: <what you will do instead>
  YOU THINK:   <recommend or hold, and one line of why>

Deliver every parked item as one list at the end of the run.
Never send me approvals one at a time.
If a run produces more than 8 parked items, stop parking, report that
the run exceeded the approval budget, and wait.
\`\`\`

That last clause is a circuit breaker, and it is worth keeping. A run that
suddenly wants thirty approvals has usually misunderstood something structural,
and thirty items is exactly the volume at which a human starts approving in
blocks. Better for the bot to raise its hand about the volume itself.

## Batching is a safety feature, not a convenience

Six interruptions across an afternoon and one list of six items at 17:00 are
not the same review with different packaging. They produce different decisions.

Interruptions arrive while you are doing something else, so each one is judged
in isolation, against the cost of context switching back to your actual work.
That cost pushes toward approving. A list is read as a set, in one context,
where the items sit next to each other and the odd one stands out precisely
because the other five are routine. Anomaly detection needs a baseline in view,
and a baseline is what a batch supplies.

Batching has a structural requirement that people miss. For a bot to batch, it
must park before starting an action rather than pausing in the middle of one.
A bot that stops halfway through has already done the first half, and the first
half is now sitting in the world whatever you decide. So the instruction is not
"ask before the risky step". It is "identify the risky step, do not begin it,
write it down, keep working on everything else".

[Email Purger](/bots/email-purger) is the clearest working example: nothing is
deleted, unsubscribed, or sent until you approve the full list, which means the
review is a single pass over a complete proposal rather than forty separate
decisions. [Grocery Autopilot](/bots/grocery-autopilot) does the same for
orders, holding the whole basket instead of asking per item.

## A gate stops the next step, it does not rewind the last one

This is the mechanic that changes how you place gates, and it is documented
plainly in the Grok Bot approvals material: an approval controls the proposed
action, and it does not reverse work already completed.

Read it twice, because software has trained everyone to expect otherwise. An
approval prompt is not a checkpoint you can roll back to. It is a barrier
standing in front of the next step, with everything already done sitting behind
it, finished. Declining stops what comes next and touches nothing that came
before.

The design consequence is strict. If a bot performs ten actions and the
eleventh raises a prompt, saying no leaves you with ten completed actions and
no mechanism to undo them. Whatever safety you get comes entirely from those
first ten being individually acceptable, permanently, with no further decision
from you.

So the rule is not "gate the dangerous action". It is: every step the bot takes
without asking has to be one you would accept having taken forever. The gate
protects the future of the run, not its past.

Two related facts sharpen this. As of writing there is no audit view of bot
actions, so you cannot reconstruct those ten steps from a log afterwards. Your
record is whatever the bot chose to report, which is another argument for
demanding counts and a skip ledger in the output contract. And all bots on an
account share one persistent cloud computer, with browser cookies, signed-in
sessions, and command-line credentials shared across them, which the
documentation is explicit about: do not use separate bots as a security
boundary. A tight gate in one bot's charter does not constrain a second bot
holding the same logins.

## Reading your own approval rate as a signal

Here is a habit almost nobody has, and it costs one minute a week. Count what
you did with the gates you received.

If you approved every single item for a month, the gate is in the wrong place.
Either the action is genuinely safe and belongs on the unattended side, or you
have stopped reading. Both readings demand a change, and the fact that you
cannot tell which one applies is itself the finding.

If you declined more than roughly a third of them, the gate is fine and the
charter is wrong. The bot keeps proposing things you do not want, which means
its instructions do not describe your actual policy. Fix the instruction rather
than enjoying the sensation of catching it.

If you cannot remember approving something that turns out to have been
approved, you have hit approval fatigue, and the only real fix is volume. Cut
the number of gates until each one is an event again.

| What you observe over a month | What it means | What to change |
|---|---|---|
| 100 percent approved, you read them | Gate is misplaced on safe work | Move the action to unattended, keep a daily change log |
| 100 percent approved, you skimmed them | Rubber stamping has started | Cut gate volume until each one is rare |
| 60 to 90 percent approved | Healthy calibration | Nothing |
| Under 60 percent approved | Charter does not match your policy | Rewrite the instruction, not the gate |
| You do not recall a decision you made | Fatigue | Reduce volume, batch harder, widen the safe set |
| Zero gates all month | Either perfect scope or a broken trigger | Verify the bot ran at all |

The last row catches something people miss for weeks. Absence of prompts feels
like success and is indistinguishable from a bot that stopped running, unless
the setup requires a report even on an empty run. That is one of several
[failure modes worth naming in advance](/blog/bot-failure-modes).

## Gates you should delete today

Three patterns that look responsible and are not.

The confirm-everything mode, where the bot asks before each reversible step.
This is the fastest route to rubber stamping and it teaches you a habit that
transfers to the gates that matter.

The vague gate: "should I proceed?" with no packet. If you have to open the
source to answer, the gate is charging you the full cost of doing the task
yourself while pretending to save you time.

The standing approval, where you tell the bot that a class of action is fine
from now on. This quietly deletes the gate, because you approved a category and
the bot decides membership. Write approvals so that they cover the specific
described action and nothing after it, and put that sentence in the charter so
it survives a persuasive request.

The pairing that actually holds is a mechanical stop plus a written line: a
permission the runtime enforces, and
[a boundary sentence the bot rereads on every run](/blog/grok-bot-boundaries).
The setting survives a badly worded prompt. The line covers the risks that have
no setting, which includes every case where the danger is interpretation rather
than access.

## Frequently Asked Questions

### What are AI approval gates?

They are the points in an agent's run where it stops, describes an action it
intends to take, and waits for a human decision before proceeding. A gate is
useful only when it is rare enough to be read and rich enough to decide from,
which means it should carry the exact action, the evidence that triggered it,
the full content, and what happens if you decline. Gates placed on reversible
work make things worse rather than safer, because each unnecessary prompt
trains you to approve without reading the next one.

### How many approvals should a bot ask for?

Few enough that each one is an event. For a single-operator setup that usually
means a handful a week rather than several a day. Past roughly ten prompts a
day, people approve reflexively, and a reflexive approval offers no protection
at all. If your bot exceeds that, the fix is almost never more discipline: it
is moving reversible work to the unattended side, batching parked items into
one end-of-run list, and narrowing the bot's scope so it stops proposing things
you did not want.

### Does approving an action undo what the bot already did?

No. The documented behaviour is that an approval controls the proposed action
and does not reverse work already completed. A prompt is a barrier in front of
the next step, not a checkpoint you can roll back to, so declining stops what
comes next and leaves everything before it in place. Design accordingly: every
step the bot takes unattended must be one you would accept permanently. With no
audit view of bot actions available as of writing, your only record of those
earlier steps is whatever the bot reported.

### How do I stop rubber-stamping approvals?

Reduce the number of things you are asked about, then improve what each ask
contains. Move every reversible, unobserved action to the unattended side so
your attention is reserved for decisions that cannot be taken back. Require the
bot to batch parked items into one list at the end of a run rather than
interrupting you, because a set read together makes the odd item visible. Then
audit yourself monthly: if you approved everything for a month, either the gate
belongs somewhere else or you have already stopped reading it.
`,
};
