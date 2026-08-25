import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Draw the Approval Line on Reversibility, Not Task Size',
  description:
    'Bot approval rules should hinge on whether an action can be taken back, not on how big it is. The five categories that always park, plus the ambiguous middle.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Draw the Approval Line on Reversibility, Not Task Size

Most people tune their bot approval rules by size. Small stuff runs on its own,
big stuff waits for a human. It feels responsible, it matches how you delegate
to people, and it produces the wrong answer often enough to hurt.

Renaming 4,000 files is a big task and completely reversible. Sending one email
to one customer is a small task and permanent the second it leaves. Size is a
proxy for effort. It is not a proxy for risk, and the approval prompt is not
asking you about effort.

The axis that works is reversibility. Can the bot put the world back the way it
found it? If yes, it finishes alone. If no, it parks and waits. Everything else
in this piece is a consequence of that one line, including the part nobody has
written down yet: the actions that are technically undoable but socially not.

## An approval is a gate, not an undo button

Before the rules, the mechanic that makes them necessary. The Grok Bot
documentation is unusually direct about what an approval does: an approval
controls the proposed action, and it does not reverse work already completed.

Read that twice, because it inverts the intuition most people bring from
software. An approval prompt is not a checkpoint you can roll back to. It is a
gate standing in front of the next step, with everything already done sitting
behind it, done. When you deny an approval you are stopping what comes next,
not unwinding what came before.

That has a direct design consequence. If a bot has already made ten changes and
the eleventh triggers a prompt, denying it leaves you with ten changes and no
mechanism to reverse them. Whatever safety you get has to come from the actions
before the gate being individually harmless. There is also, as of writing, no
audit view of bot actions, so you cannot reconstruct the ten afterwards from a
log. Your record of what happened is whatever the bot chose to tell you.

So the rule is not "gate the risky step." It is: every step the bot takes
without asking must be one you would be fine having taken, on its own, with no
chance to reverse it. That is reversibility as a gate on the whole run, not as
a judgment call on the final action.

## Everything reversible, the bot finishes alone

The corollary matters as much as the restriction, and people skip it because
restriction feels safer.

If an action is genuinely reversible, the bot should complete it without
asking. Not "ask on the first few runs." Not "ask if it looks unusual."
Complete it. An approval prompt on a reversible action is pure cost: it burns
your attention, it teaches you to approve without reading, and approval fatigue
is precisely how a genuinely dangerous prompt gets waved through at 4pm on a
Friday.

Every unnecessary prompt makes the necessary ones less effective. Treat your
own attention as the scarce resource it is, and spend it only where the world
cannot be put back.

That means drafting, labelling, sorting, researching, reading, summarising,
renaming, moving files inside your own storage, and writing to scratch space
should all run unattended. [Inbox Triage](/bots/inbox-triage) is a good shape
for this: it sorts and drafts freely and never sends an email, so the entire
unattended surface is made of things you can undo with a click.

## The five that always park

Five categories are irreversible often enough that the rule should be flat, no
per-case reasoning, no exceptions written into the charter.

**Sending anything to anyone outside the company.** Email, DM, form submission,
reply, comment on someone else's thread. Recall features are a courtesy, not a
guarantee, and they do nothing about the notification that already fired on a
phone.

**Spending money or committing to a price.** Purchases, subscriptions, ad
budgets, refunds, quotes, anything that names a number to a counterparty. Note
that there is no Grok Bot specific spend cap available as of writing, so the
charter and the absence of a stored payment method are the whole control.
[Grocery Autopilot](/bots/grocery-autopilot) holds every order until you
explicitly lift the hold, which is the right default even for small baskets.

**Publishing publicly.** Posts, pages, releases, anything with a URL a stranger
can open. Deleting a post does not delete the screenshot.

**Deleting anything that is not obvious junk.** Files, emails, records, rows,
branches. The exception is narrow and should be named explicitly in the
charter: a quarantine folder, a known spam label, a temp directory the bot
itself created. Everything else parks.
[Subscription Pruner](/bots/subscription-pruner) is built this way and cancels
nothing you have not individually approved.

**Accepting terms.** Cookie banners, EULAs, API terms, consent dialogs,
anything with an "I agree" button. This one surprises people because it feels
like clicking through furniture. It is a bot agreeing to a contract using your
identity, and it is not undoable by unchecking a box afterwards.

## The ambiguous middle

Here is where the reversibility test gets interesting, and where every version
of this advice I have seen stops.

Plenty of actions are undoable by the system and not undoable by the people.
The database can be restored. The impression cannot. Four examples, all common,
all mishandled by a size-based rule:

**A draft saved into a shared document.** You can delete it in three seconds.
But a collaborator may already have opened the doc, the revision history
records that the text existed and who added it, and the change may have fired
a notification. The bytes are reversible. The fact that your co-founder read a
half-formed pricing idea is not.

**A calendar hold that notified an external attendee.** Deleting the event is
one click and leaves the invite email sitting in someone else's inbox, followed
by a cancellation. From the outside that reads as disorganisation at best and
as a meeting you cancelled at worst. This is why
[Marketing Calendar Sync](/bots/marketing-calendar-sync) touches only your own
local calendar and never the shared source: the boundary is drawn exactly at
the point where other people can observe the change.

**A CRM field overwritten with no field history.** This one is not even
technically reversible, though it feels trivially small. The previous value is
gone, and the only copy of it was in a system that just replaced it. Small
task, permanent effect, and it will surface three weeks later when someone asks
why the renewal date moved.

**An edited message that leaves an "(edited)" marker.** The current text is
correct and the record permanently shows a correction happened. Anyone reading
now knows the first version was wrong, and anyone who saw the notification
already read it.

The pattern across all four is one question, and it is a better test than
"can this be undone."

**Did anyone outside your own head observe the state, and would putting it back
require an explanation?**

If yes, treat the action as irreversible regardless of what the undo button
says. Social irreversibility is the real constraint, because the thing you are
protecting is not the data. It is your credibility with the people who saw it.

There is a systems version of the same point worth knowing. A strict boundary
on one bot does not restrict another bot on the same account. All bots share
one persistent cloud computer, and browser cookies, signed-in sessions, and
command-line credentials are shared across them, which is why the documentation
says plainly not to use separate bots as a security boundary. Parking an action
in one charter while a second bot holds the same logins and no such rule means
you have written a preference, not a control.

## The decision table

| Action | Technically reversible | Socially reversible | Verdict |
|---|---|---|---|
| Renaming or moving files in your own storage | Yes | Yes, nobody observed it | Finish alone |
| Labelling, sorting, archiving mail | Yes | Yes | Finish alone |
| Draft saved in your own drafts folder | Yes | Yes | Finish alone |
| Draft saved into a shared doc | Yes | No, history and notifications persist | Park |
| Calendar hold, you are the only attendee | Yes | Yes | Finish alone |
| Calendar hold that emailed an external attendee | Yes | No, the invite already landed | Park |
| CRM field overwritten, no field history | No, old value is gone | No | Park |
| CRM field overwritten, history retained | Yes | Partly, the trail is visible | Allow with a daily change log |
| Editing a message you already sent | Yes | No, "(edited)" is permanent | Park |
| Deleting from a known spam or quarantine folder | Roughly | Yes | Finish alone, name the folder |
| Emptying trash or permanent delete | No | Yes | Park, technically irreversible |
| Comment posted on someone else's pull request | Yes, you can delete it | No, the author was notified | Park unless the bot is scoped to comment |
| Commit to a scratch branch nobody watches | Yes | Yes | Finish alone |
| Merge to main | Painful | No, CI and teammates saw it | Park |
| Accepting terms or a consent dialog | No | No | Park, always |

Two rows deserve a note. The pull request row is why
[PR Review Sentinel](/bots/pr-review-sentinel) is scoped the way it is: it
comments only and never merges, approves, pushes, or requests changes, which
makes commenting a deliberate, declared job rather than an accident. And the
CRM row shows that the same action lands in different columns depending on
whether the system keeps history, which is a question about your tools rather
than about your bot.

## The rule, written into a charter

Prose does not enforce anything. Put it in the setup.

\`\`\`text
// APPROVAL RULE
Judge every action by whether the world can be put back, not by how
big the task is. Two questions, in this order:

1. If this goes wrong, can I restore the previous state myself in one
   step, with no help from anyone else?
2. Would anyone outside this conversation have observed the change,
   or would putting it back require me to explain something?

If the answer to 1 is yes and to 2 is no, do it. Do not ask.
Otherwise, stop and park it.

// ALWAYS PARK, NO EXCEPTIONS
- Sending anything to anyone outside the company
- Spending money or naming a price to a counterparty
- Publishing anything with a public URL
- Deleting anything outside [named temp folder] and [named spam label]
- Accepting terms, agreements, or consent dialogs

// HOW TO PARK
Do not ask permission mid-action. Stop before starting, and write:
what you were about to do, the exact target, the reason, and what you
will do instead if I say no. Then continue with the rest of the run.
Batch every parked item into one list at the end. Never send me
approvals one at a time.

// WHAT AN APPROVAL IS NOT
My approval covers the specific action described and nothing after it.
It never means "you may do this class of thing from now on."
Assume nothing you have already done can be undone by asking me later,
so only take steps unattended that you would be comfortable having
taken permanently.
\`\`\`

The batching instruction in the third block is doing quiet work. One list of
six parked items at the end of a run gets read carefully. Six interruptions
spread across two hours gets approved reflexively, which returns you to the
approval fatigue that the whole scheme exists to avoid.

## Moving the line later

The line should move, just not because prompts are annoying.

Widen one specific action, for one specific case, after you have a run of
evidence. Thirty days of a bot proposing calendar holds you approved unchanged
is a reason to let it hold your own calendar unattended, while still parking
anything that notifies an external attendee. That is one row of the table
moving, not a mode change.

Narrow the line the moment a parked item turns out to have been a surprise. If
you read a proposed action and thought "I did not know it could do that," the
charter was less specific than you believed, and the fix goes in the charter
rather than in your memory.

Worth watching: a team-level ceiling on local execution with Never, Ask every
time, and Always options has been described as coming, with members able to
choose a stricter option but not a looser one. That is not shipped as of
writing, so today the ceiling is whatever your charter says. If you want the
full pre-flight version of this for anything touching a mailbox, the
[safety checklist before connecting an inbox](/blog/grok-bot-safety-checklist)
covers the connection side, and
[the guide to writing a boundary line](/blog/grok-bot-boundaries) covers how to
phrase the limit so it cannot be argued with.

## Frequently Asked Questions

### What should bot approval rules be based on?

Reversibility, not task size. The useful question is whether the bot can put
the world back the way it found it, because effort and risk are unrelated.
Renaming thousands of files is large and fully undoable, while sending one
short email is small and permanent. Let the bot finish anything reversible on
its own, without prompting, and park anything that leaves your systems, spends
money, publishes, deletes, or accepts terms. Sizing rules produce prompts on
harmless bulk work and silence on the actions that actually matter.

### Does approving an action let me undo what the bot already did?

No, and the documentation is explicit that an approval controls the proposed
action and does not reverse work already completed. An approval prompt is a
gate in front of the next step, with everything before it already finished.
Denying a prompt stops what comes next and leaves earlier changes in place,
and with no audit view of bot actions available as of writing, your only record
is what the bot reports. Design so that every unattended step before a gate is
one you would accept permanently.

### How do I handle actions that are technically reversible but still risky?

Apply a second test after the undo question: did anyone outside your own head
observe the change, and would reversing it require an explanation? A draft
saved into a shared document, a calendar invite that already emailed an
external attendee, and an edited message carrying an "(edited)" marker are all
undoable in the system and not undoable in the minds of the people who saw
them. Treat social irreversibility as binding. What you are protecting is
credibility with those people, not the underlying data.

### Should the bot ask before every small change?

No, and doing so actively reduces safety. Each unnecessary prompt trains you to
approve without reading, so by the time a genuinely dangerous one appears you
are clicking through it. Let reversible work run silently, and batch parked
items into a single list at the end of the run rather than interrupting you one
at a time. A list of six proposals gets real attention, while six interruptions
across an afternoon become reflex. Attention is the scarce resource the whole
scheme is built to protect.
`,
};
