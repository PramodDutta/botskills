import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Gmail: Setups, Permissions, and What to Automate First',
  description:
    'A Grok Bot Gmail setup that triages, labels, and drafts but never sends: the scope families to grant, a label taxonomy you can grade, and the week-one order.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Gmail: Setups, Permissions, and What to Automate First

Your inbox is not one queue. It is four queues braided together: messages that
need a reply from you, messages where you are waiting on somebody else,
messages you only need to be aware of, and receipts. The expensive part is not
reading them. The expensive part is that untangling those four queues is a
decision per message, several hundred times a week, made in the worst possible
order, newest first, on a phone, between other things.

That is the job worth handing to a bot. Not writing your email. Sorting it,
so that when you sit down you are deciding instead of triaging.

Gmail was in the first wave of Grok connectors as of writing, and it is also
the connector with the widest blast radius, because a mailbox contains your
password resets, your contracts, your bank statements, and every conversation
you have ever had with a customer. Availability and the exact consent bundle
change; check what your account actually offers at connect time. What follows
is the part that does not change: which permissions to grant, in what order,
and what the bot must never be allowed to do.

## The inbox problem a bot can actually solve

Sorting is a good bot task for three reasons. It recurs daily, the input is
structured (sender, subject, thread, labels, timestamps), and a mistake is
cheap to reverse if you set it up so that it is.

Reply drafting is a good bot task for one reason: reviewing a draft takes
about eight seconds and writing the same message from scratch takes three
minutes. That ratio is the whole business case, and it holds only while the
review step exists.

Sending is not a bot task in week one, and for most people it is not a bot
task in month six either. More on that below, because it is the single
decision that determines whether the rest of this setup is safe.

## Gmail scope families and what each one really grants

When you connect a mailbox, the consent screen lists specific scopes. The
exact strings differ by product and change over time, so read the screen you
are actually shown rather than the one in any tutorial, including this one.
The families below are stable, and knowing them tells you what you are
looking at.

| Scope family | What the bot can do | Worst realistic outcome |
|---|---|---|
| Metadata only | Read headers: sender, recipients, subject, labels, timestamps. No message bodies. | Your contact graph leaks: who you talk to, how often, and about what, inferred from subjects alone. |
| Read-only | Read every message and attachment in the mailbox, including archived mail from years ago. | Anything in your mail history can end up in a summary the bot writes somewhere less protected. |
| Compose and drafts | Create, edit, and delete drafts. Nothing is delivered. | A half-finished draft sits in a thread you share with a colleague, or an approved draft is edited before you send it. |
| Send | Deliver mail as you, to anyone. | An irreversible message to a customer, attributed to you. The Undo Send delay is a client setting, so an API send is gone the moment it is accepted. |
| Modify | Apply and remove labels, archive, mark read, move messages to trash. | A week of mail archived out of sight, or several hundred messages sitting in trash that self-purge after 30 days if you do not notice. |
| Full mailbox access | Everything above, plus permanent deletion. | Mail destroyed past recovery. There is no undo and no support path that brings it back. |
| Settings | Filters, forwarding addresses, vacation responder, signatures. | A forwarding rule that keeps copying your mail to an address you did not choose, and that survives you deleting the bot. |

Two rows deserve more than a table cell.

**Settings is the one nobody expects.** Every other permission acts on
messages. Settings acts on the mailbox itself, and its effects outlive the
bot. A filter that forwards anything matching "invoice" to an outside address
does not stop when you revoke the connection, because the rule now belongs to
Gmail, not to the bot. If a connector asks for settings access for an inbox
assistant, that is a reason to stop and read carefully, not a checkbox.

**Modify is not as safe as it sounds.** Trash is not deletion, which is why
modify is the reasonable middle tier, but Gmail empties trash on a 30 day
timer. A bot that quietly trashes a category of mail for four weeks while you
are not paying attention produces the same outcome as deletion, just slower.

The practical grant order: read plus compose in week one, add modify in week
two once you have seen a week of correct labeling decisions, and treat send
and full access as things you argue yourself into rather than things you turn
on because the consent screen offered them.

## A label taxonomy the bot can be graded against

Most inbox bots fail at the classification step, not the writing step, and
they fail because nobody defined the categories. "Sort my inbox" is not a
specification. Five labels are.

Namespace every label the bot touches so its work is separable from yours:

\`\`\`text
Bot/Reply-Needed     You owe a human a response. Nothing else qualifies.
Bot/Waiting-On       You already replied; the ball is with them.
Bot/FYI              Read at your convenience. No action, ever.
Bot/Receipts         Orders, invoices, statements, confirmations.
Bot/Unsure           The bot could not decide. This label is required.
\`\`\`

The namespace is not cosmetic. It gives you a one-query undo: search
\`label:Bot/Reply-Needed\` (or the parent, depending on how your client handles
nested labels), select all, remove label. Before you grant modify scope, run
that undo once by hand so you know it works. A permission you cannot reverse
in under a minute is a permission you have not really evaluated.

\`Bot/Unsure\` is the label that makes the whole taxonomy honest. Without an
escape hatch, a classifier forced to choose will always choose, and it will
choose confidently on exactly the messages where it should have hesitated.
Give it somewhere to put doubt and then read that folder first each morning,
because it is a live report on where your charter is ambiguous.

Grade the bot on the taxonomy the way you would grade a new hire. After five
days, count how many messages you re-labeled. Under five percent, widen its
authority. Over twenty percent, the categories are wrong, not the model.

## The draft-only inbox charter

Here is a charter you can paste and adapt. It assumes read, compose, and
modify. It does not assume send, and it will not work if you delete the last
section.

\`\`\`text
You are my Inbox Triage bot for [address].

// WHAT YOU OWN
Every weekday at 07:30 and 16:00, process mail received since your last run.
For each message:
  1. Read the ENTIRE thread, not just the newest message.
  2. Apply exactly one label: Bot/Reply-Needed, Bot/Waiting-On, Bot/FYI,
     Bot/Receipts, or Bot/Unsure.
  3. For Bot/Reply-Needed only, save a draft reply in the thread.
Then send me one summary: counts per label, the three items you think are
most urgent and why, and everything you put in Bot/Unsure.

// WHAT GOOD LOOKS LIKE
Drafts are under 120 words, match how I have replied in that same thread
before, and answer the actual question asked.
If a message contains a number, date, price, or commitment, quote it back
rather than paraphrasing it.
Never invent a fact about our product, pricing, availability, or timeline.
If the answer requires a fact you do not have, draft the reply with
[NEEDS: <the missing fact>] inline and label it Bot/Unsure.

// WHERE YOU STOP
Never send. Not a reply, not a forward, not a receipt confirmation.
Never delete a message and never empty trash.
Never touch filters, forwarding, signatures, or the vacation responder.
Never label a thread that already has one of my own labels on it.
If a thread has more than 6 messages or more than 2 external participants,
do not draft. Summarize it and ask me.
Anything from [legal, bank, payroll domains] gets Bot/Unsure and no draft.
\`\`\`

The last block is the reason the first two are safe to run unattended. Every
listing on botskills.sh carries that line as a required field, and for mail
bots it is almost always the same word. The pre-built
[inbox triage bot](/bots/inbox-triage) states it plainly: it never sends an
email, and every draft waits for explicit approval. That constraint is what
lets you connect a real mailbox instead of a test one.

## Why thread context is the quiet failure mode

The most common bad draft is not rude or wrong in tone. It is a reply that
contradicts something you already said four messages earlier in the same
thread, because the bot read the newest message and answered that.

You will not catch this by reading the draft, because the draft looks
perfectly reasonable in isolation. You catch it by reading the draft in the
thread, which is exactly why saving to Gmail drafts beats having the bot mail
you suggested text. The draft renders under the conversation it belongs to.

Three rules that fix most of it:

1. Instruct the bot to read the full thread before drafting, explicitly. It
   is not implied.
2. Cap it. Past roughly six messages or two external participants, threads
   develop side agreements and half-retracted offers that a summary flattens.
   Above the cap, the bot summarizes and asks rather than drafting.
3. Require quoting. If the reply commits to a date, a price, or a number,
   the bot must quote the message it took that from. A quote is checkable in
   two seconds. A paraphrase is not.

Forwarded chains and mailing lists break the same way, in a worse form: the
bot answers a message that was never addressed to you.

## Unsubscribe sweeps without the deletion risk

Somewhere between forty and seventy percent of most personal inboxes is
machine-generated mail nobody chose twice. It is the obvious cleanup target,
and it is also where mail bots do their worst damage, because "unsubscribe
from things I do not read" and "delete things I have not opened" are one
sentence apart and very far apart in consequence.

Split the job in two, and keep the halves separate:

- **Proposal.** The bot groups the last 90 days by sender, counts messages
  received against messages you opened or replied to, and produces a ranked
  list: sender, volume, engagement, and a recommendation. Nothing acts.
- **Execution.** You approve the list, line by line or in bulk. Only then
  does anything unsubscribe, filter, or move.

Two catalog bots are built exactly on that split. The
[email purger](/bots/email-purger) never deletes, unsubscribes, or sends
anything before you approve the full list, and the
[mail cleanup assistant](/bots/mail-cleanup-assistant) holds every unsubscribe
and filing action until you sign off. If you are sorting paid subscriptions
rather than newsletters, the
[subscription pruner](/bots/subscription-pruner) works on the same principle:
it cancels nothing you have not individually approved.

One more warning that is specific to unsubscribing: clicking an unsubscribe
link is a fetch of an unknown URL with your session and, for some senders, a
confirmation that a human is behind the address. Prefer the list-unsubscribe
header where it exists, prefer a filter over a click where it does not, and
never let a bot follow unsubscribe links unattended in a mailbox that also
receives password resets.

## What to automate in week one, and in what order

Do not connect a mailbox and ask for everything. Four steps, one week apart,
and each one only starts if the previous week was boring.

**Week one: read and report.** Read plus compose scope. The bot labels
nothing and drafts nothing. It sends you one summary twice a day. You are not
testing intelligence here, you are testing whether its idea of "needs a
reply" matches yours. It usually does not, and the summary is a cheap place
to find that out.

**Week two: label.** Add modify. Now it applies the five labels. Read the
\`Bot/Unsure\` bucket first every morning, correct the charter rather than the
individual message, and track your re-label rate.

**Week three: draft.** Drafts for \`Bot/Reply-Needed\` only. Count how many you
would have sent unchanged. Under half means the charter is missing context
about your product, your tone, or your commitments, and that is fixable by
writing it down once.

**Week four: decide about send, deliberately.** By now you have real numbers.
If you widen authority at all, widen it into a narrow, boring pocket:
receipt-style acknowledgements to internal addresses, or a single templated
reply to a single repeated question, with an explicit list of recipients it is
allowed to mail. Never widen it to "replies you are confident about."
Confidence is the thing being measured, not the thing that grants permission.

The general version of this progression, applied across every bot you run
rather than just mail, is laid out in the
[one-person company guide](/blog/one-person-company-grok-bot). The pattern
survives the specific tool: read before write, draft before send, and one
irreversible action that stays yours.

## Frequently Asked Questions

### Can a Grok Bot Gmail setup send email on my behalf?

Only if you grant a send scope, and you should not grant it in the first
weeks. Sending is the one Gmail action with no undo: the Undo Send delay is a
setting in the Gmail client, so mail dispatched through an API connection is
delivered as soon as it is accepted. Drafting costs you almost nothing by
comparison, because a draft saved into the thread takes seconds to review in
context and can be edited or discarded. Grant read and compose first, watch a
month of drafts you would have sent unchanged, then decide about send as an
informed choice.

### What Gmail permissions should a bot actually get?

Start with read access and draft creation, which covers triage, summarizing,
and reply preparation without any irreversible action. Add label and archive
permission (usually called modify) in week two, once you have verified you can
strip the bot's labels with a single search-and-remove. Avoid full mailbox
access, which includes permanent deletion, and treat settings access as a stop
sign: it controls filters, forwarding, and auto-responders, and those changes
outlive the bot itself. Read the consent screen you are shown at connect time
rather than assuming a scope bundle.

### How do I stop the bot from replying with the wrong context?

Require it to read the entire thread before drafting, set a hard cap, and make
it quote. Bad drafts usually come from answering the newest message while
ignoring what you already committed to earlier in the same conversation. A cap
of roughly six messages or two external participants sends long threads to a
summarize-and-ask path instead of a draft path. Requiring the bot to quote the
exact line it based any date, price, or commitment on turns a two-minute
verification into a two-second one, because you check a quote rather than
reconstructing the thread.

### Is it safe to let a bot unsubscribe me from newsletters?

Safe if you split proposal from execution, and risky if you do not. Have the
bot produce a ranked list of senders with volume and engagement counts, then
approve the list yourself before anything acts. The failure worth guarding
against is not a wrong unsubscribe, it is the neighboring action: bulk
deletion or archiving of mail you needed. Also avoid letting a bot click
unsubscribe links unattended, since each click is a request to an unknown URL
and, for some senders, a signal that the address is live and worth mailing
more.
`,
};
