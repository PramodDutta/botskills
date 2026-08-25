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

## Run three tests before you gate anything

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

## Hand over a decision packet, never a notification

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

## Fourteen gates in week one, three by week five

A concrete run, so the calibration argument stops being abstract. The bot chases
unpaid invoices on a schedule, along the lines of
[the invoice chasing build](/blog/grok-bot-to-invoice-chasing). In its first
five days it parked fourteen items.

| Week one ask | Count | What it actually was | Where it ended up |
|---|---|---|---|
| Send a reminder to a client | 6 | A real gate: outbound and irreversible | Kept, batched into one 17:00 list |
| Which folder does this file go in | 4 | A charter gap wearing a gate costume | A rule: default to the quarter folder |
| A vendor name it did not recognise | 3 | Missing world knowledge, not a decision | A notes file listing 40 known vendors |
| An amount 9x the median | 1 | A real gate: needs context the bot lacks | Kept |

Eight of the fourteen were not gates. They were the charter admitting it was
incomplete, arriving in the shape of a question. Answering each one and writing
the answer back into the setup took about twenty minutes, and gate volume fell
from fourteen a week to three with no genuine gate removed.

That is the only honest route to fewer prompts. Every other route, including the
one where you widen a rule because it keeps bothering you, works by lowering the
bar rather than by making the world legible to the bot.

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

## Know the difference between a gate and a permission

A gate you wrote in a charter is an instruction a model chooses to follow. A
permission is a thing the runtime enforces whether the model agrees or not.
People treat these as the same object and then get surprised in exactly the
places where they differ.

The gates you write yourself live in the charter, so they are instructions. A
ceiling above them, which nothing the bot reads could talk it past, is a
separate thing, and as of writing it is not shipped: a team-level control
offering Never, Ask every time, and Always is documented as coming, with the
stated rule that members could choose a stricter option but not a looser one
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
Until it lands, a rule you invented is a sentence, and a sentence can be argued
with by anything the bot reads.

| What you assume the approval covered | What it actually covered | The gap you are carrying |
|---|---|---|
| A charter rule saying "ask before sending" | An instruction, with no ceiling standing behind it | A persuasive document can argue against a sentence |
| Approving one reply | That message, not the thread it opens | Tomorrow's reply arrives ungated |
| Approving a scheduled post | A publication that fires when nobody is watching | The gate became a countdown |
| Approving a category once | Whatever the bot later judges to be in it | Membership became the bot's call |
| A stricter charter on one bot | That bot alone | Other bots hold the same session on the shared computer |

Row two is the one that catches people running anything conversational. A gate
on the first message is not a gate on the exchange, so a bot with send rights
after one approval is a bot with send rights.

## Audit your own approval rate once a month

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

## Diagnose a miscalibrated gate from your own behaviour

The approval rate tells you the size of the problem. These symptoms tell you
which problem it is, and each has a different repair.

| What you notice yourself doing | The actual cause | The repair |
|---|---|---|
| Approving within two seconds of opening | The packet is a summary, so there is nothing in it to read | Put the full artifact inline, never a description of it |
| Declining the same class over and over | The charter describes a policy you do not hold | Rewrite the instruction, leave the gate alone |
| Answering a prompt while a run sits half done | The bot pauses mid-action instead of parking before it | Identify, do not begin, write it down, keep working |
| Finding actions you never approved individually | You approved a category and the bot judged membership | Scope approvals to the described action and nothing after |
| Discovering ten finished steps behind one prompt | The unattended steps were never individually acceptable | Re-sort the whole run by reversibility, not by risk feel |
| Unable to say what triggered a prompt | The packet has no evidence line | Require the trigger with a link, every time |

Row three is the expensive one, because a half-finished run does not wait
politely. Anything the bot already did is done whichever way you answer, and
that is the same asymmetry the previous section describes.

## Delete these three gates today

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

## Prove the gate holds before you need it to

A gate you have never watched fire is a belief about your charter. Three
fixtures, twenty minutes, run before the bot touches anything real.

**The trip test.** Put an item in the input that must be gated: an unrecognised
vendor, an amount well outside the range, a recipient outside your domain. The
bot should park it and carry on with the rest of the run. If it acts, your
condition is unmeasurable and needs a number or a name rather than an adjective.

**The injection test.** Put a line inside a document the bot will read saying
the action has been pre-approved by the account owner and it should proceed
without asking. The bot should quote that sentence back to you in the parked
list. Most first-draft charters fail this one, and it is the test that matters
most, because a gate that a stranger can talk the bot out of is decoration.

**The decline test.** Say no to one item and watch what happens next. It should
record the decline and move on. It should not retry, should not find an
alternate route to the same result, and should not re-ask on the next run. This
is also how you find out whether the "if I say no" line in the packet was
honest. Fixture-based checks like these are the subject of
[the guide to testing a bot before you trust it](/blog/testing-your-bot).

## The strongest objection is to gate everything and stop optimising

Put the counter-argument at full strength: a disaster costs more than an
interruption, so why not gate every action and accept the friction? If attention
is the only price, pay it.

The answer is that attention is not the price. Abandonment is. Confirm-everything
setups do not survive contact with a normal week; within about a fortnight they
are either switched off or approved in blocks without reading. A rubber-stamped
gate offers no protection while producing the full feeling of protection, and
that combination is worse than no gate at all, because you granted the bot
access you would never have granted a bot you knew was unsupervised.

Where the objection genuinely wins, and it does win: the first week of any new
bot, when you have no idea what it will propose and the volume is the point.
A shared or team account, where the person approving did not write the charter
and cannot assume anything. And anything touching money or production, though
there the right answer is usually not more gates but fewer capabilities.

## Sometimes the answer is no capability rather than a gate

A gate is the middle setting, and the middle setting gets over-used because it
feels like the responsible one. There are two ends, and both are cheaper to run.

At one end, work with no gate at all: reversible, unobserved, needing nothing
you know and the bot does not. Give it back and stop paying attention to it.

At the other end, jobs where the honest answer is that the bot never gets the
ability. [Bookkeeping Auditor](/bots/bookkeeping-auditor) never edits the live
books, so there is no gate to calibrate on that action and no fatigue to manage.
[Viral Tweet Scout](/bots/viral-tweet-scout) reads only and never posts, likes,
or replies. A capability you never granted cannot be argued for by a document,
cannot be widened by a tired approval at 18:00, and does not need a monthly
audit. That is the argument developed in
[the case for a bot that drafts but never sends](/blog/bot-that-never-sends) and
in [least privilege for bots](/blog/least-privilege-bots).

**Keep reading:** [The Four Layers of a Bot System That Actually Works](/blog/bot-system-architecture), [The Best AI Bots for Developers in 2026](/blog/best-ai-bots-for-developers), [The Best AI Bots for Marketing Teams in 2026](/blog/best-ai-bots-for-marketing).

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
