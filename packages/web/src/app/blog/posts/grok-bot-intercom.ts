import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Intercom: Permissions and What to Automate',
  description:
    'A Grok Bot Intercom setup where the bot never messages a customer: notes versus replies, conversation state your team reads, scope families, and a safe charter.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Intercom: Permissions and What to Automate

In Intercom, the internal note and the customer reply are written in the same
box. You switch between them with a tab, and the only durable difference on
screen is a colour. Everything else is identical: you type, you press send, and
the text lands in the thread.

That is reasonable design for a human looking at the screen and a terrible
property for a bot, because the difference between "logged a note for my
colleague" and "spoke to a customer in the company's voice" becomes a single
mode flag on an otherwise identical operation. No other tool in this series
puts a fully internal action and a fully external one behind the same verb, in
the same place, with the same shape.

So Intercom gets the hardest boundary in the whole cluster. Every write in a
support inbox is potentially a message to a stranger, and a message to a
stranger cannot be recalled, corrected in place, or explained away.

Whether a first-party connector is offered to your account changes over time,
so check the app rather than any article including this one. Without one, the
options are a hosted MCP server speaking to the Intercom API or the bot driving
the web app in a browser after you sign in. The browser route has an extra
hazard: an agent working the inbox visually has your whole conversation history
on screen, including whatever customers paste into chat, which is wider
exposure than a scoped token.

## The note and the reply share one composer

Name the operations that put text into a conversation individually, because
they are one operation wearing different labels.

An internal note is visible to teammates only. It appears inline in the thread,
it can mention colleagues and notify them, and the customer never sees it. It
is the only text operation safe for a bot. A reply goes to the customer on
whatever channel the conversation is on, Messenger, email, SMS, WhatsApp or
social, with no meaningful recall. A macro feels like a template rather than a
send. It is a send.

The API makes that literal rather than visual. In
[Intercom's published API description](https://github.com/intercom/Intercom-OpenAPI)
one endpoint replies to a conversation, and the admin payload carries a
required \`message_type\` field whose permitted values are exactly \`comment\`
and \`note\`. Same URL, same body field, same attachment handling, one word
apart. Whatever writes to Intercom for you sits one string away from the wrong
side of the line.

Two further behaviours confuse people. Opening a conversation can mark it seen
by your team, and typing in the composer on a live Messenger conversation can
show a typing indicator to the customer. A bot "just looking at" an open chat
is not always invisible from the customer's side.

The catalog's [account expert](/bots/account-expert) sets its boundary at the
useful place for this: it never messages the customer, and every digest stays
internal. That is the right default for anything touching a support inbox.

## Sort every Intercom write into allowed, approved, or never

Make the sort once, in writing, while nothing is on fire. Writes differ on two
axes: who sees the result, and what is left to do about it.

| Write | Who sees the result | What undo looks like | Verdict |
|---|---|---|---|
| Internal note | Teammates with inbox access | Redact the part, or correct it below | Allowed. This is the job |
| Reply, on any channel | The customer, wherever the conversation lives | Edits the record, not the delivered copy | Never |
| Macro or saved reply | The customer | Identical to any reply | Never. The template is not the safeguard |
| Admin-initiated message | The recipient, with no conversation until they answer | None, and you may not notice | Never |
| Close or assign with a body | Teammates and the customer | Reopen it, but the text was delivered | Never. The one people miss |
| Snooze, reopen, priority | Teammates, through the queue | Seconds to reverse, but not the waiting | Never. State reads as ownership |
| Tag | Teammates, and every report built on tags | Remove the tag | Allowed, fixed list, capped |
| Contact or company attribute | Teammates, plus any outbound rule keyed on it | Rewrite it, if you notice | Never, see the next section |

Six rows say never, and only two are obviously about talking to a customer.
That is the shape of a correct support-bot grant: the dangerous writes do not
look dangerous.

## Outbound messages reach everyone at once, not one person

Inbox mistakes affect one customer. Outbound mistakes affect a segment.

Intercom's outbound side includes proactive chats, in-app messages, banners,
tours, emails, and news items, aimed at audiences defined by rules rather than
at individuals. Some send on a schedule, some fire on a behavioural trigger,
and audience membership recalculates as customer attributes change.

So a bot that changes a customer attribute may have enrolled that customer into
a campaign without going near the outbound section. If your Intercom has
behaviour-triggered messages, attribute writes are send-adjacent, exactly as a
lifecycle stage change is in a CRM.

One outbound path does not look like a campaign at all. The API can create a
message initiated by an admin, in-app or email, to one contact, and Intercom's
description of that endpoint notes that no conversation exists for it until the
contact replies. Such a message is not sitting in your inbox waiting to be
spotted. You find out when someone answers, if they answer.

A banner is the highest-blast-radius object in the product. It appears to
everyone matching its audience the moment it goes live, at the top of your app,
and a wrong one is seen by your whole user base within minutes.

Keep the entire outbound surface outside the bot's authority. Not draft, not
schedule, not edit, not adjust an audience rule. No version of this makes a
bot's judgment about a segment worth the downside.

## Conversation state is a signal your teammates are reading

The second class of write has no customer impact at all and still causes real
damage, because your team treats conversation state as communication.

Assigning moves a conversation into a person's queue and usually notifies them.
Reassigning takes it out of somebody's queue, which is how work gets silently
dropped: the person handling it stops seeing it, and the person who now owns it
may not realise they do.

Closing removes it from the open queue and, in many setups, triggers a customer
satisfaction request, which is a customer-facing consequence hiding inside an
operation that reads as filing. Snoozing hides a conversation until a chosen
time, so a bot snoozing something urgent until next week has made it invisible
without anybody deciding that. Priority flags change queue ordering, so a bot
marking things priority generously makes the signal meaningless in a fortnight.

Two of these can also speak to the customer, which nobody expects. In the API,
closing and assigning go through one conversation-parts endpoint and both
payloads accept an optional body: the close body leaves a message for the user
as well as teammates, the assign body sends a response in the conversation.
Snoozing takes a timestamp and no body. Half the filing verbs are send verbs
wearing a filing verb's name, and a charter that only forbids replies has not
closed them.

None of these are recoverable in the sense that matters. You can reopen a
closed conversation, but you cannot un-send the satisfaction survey or give
back the four hours a customer waited while their ticket sat snoozed.

One test before granting any of it: if the bot did this to fifty conversations
at three in the morning, would you find out before your customers did? If not,
it does not go in the charter.

## Tags are the reporting layer, and a bot can poison it quietly

Tags look like the safest write in Intercom, and among the writes they are.
They are also the foundation of every report you build about why people contact
you, so their value comes entirely from being applied consistently.

Three failures show up in practice. Proliferation, where the bot creates
near-duplicates like "billing", "billing-issue" and "billing question", and one
report line becomes three that each look small. Over-tagging, where every
conversation gets four tags and no tag means anything. And silent redefinition,
where an existing tag starts landing on a slightly different kind of
conversation, so a trend line moves for a reason unrelated to your customers.

Proliferation is the default rather than an accident. The API call that creates
or updates a tag takes a name and creates the tag when none by that name is
found, comparing case insensitively. So "Billing" will not spawn a twin of
"billing", but "billing-issue" will, on first use, silently, from a bot that
was only trying to be precise.

The fix is the closed-list discipline that works everywhere else. Write the
allowed tags into the charter, forbid creating new ones, cap how many the bot
may apply per conversation, and require it to report anything it could not
classify rather than reaching for the nearest tag. That unclassified list is
more useful than the tagging itself, because it tells you where your taxonomy
is failing.

## Grant the three reading rows and take every writing row to a meeting

Grants bundle differently depending on whether the bot acts through an app, a
token, or a teammate seat, and the wording changes as the product evolves. Read
the screen you are actually shown.

| Grant family | What it gives the bot | Worst realistic outcome |
|---|---|---|
| Read conversations | Full message history across every channel | Every candid thing a customer ever typed, including accidental pastes |
| Read contacts and companies | Attributes, segments, event history | A complete customer list with behavioural data attached |
| Write internal notes | Add notes and mention teammates | Thread noise, and notification fatigue for colleagues |
| Reply to conversations | Send to the customer on any channel | Your company's voice, to a real person, unrecallable |
| Conversation management | Assign, close, snooze, prioritise, reopen | Work dropped from a queue, or a survey on a ticket nobody resolved |
| Tags and attributes | Apply tags, write custom attributes | Reporting corrupted, and customers moved into outbound audiences |
| Outbound messaging | Create or send campaigns, banners, tours, news | One action seen by your entire user base within minutes |
| Automation and Inbox rules | Create or edit rules, workflows, bots | Every future conversation routed by rules you did not write |
| Teammates and settings | Manage seats, roles, channels, office hours | Access sprawl, or inbox routing changed underneath the team |
| Billing | Plan and seat management | Spend you did not authorise |

Grant the first three rows. Everything from "reply" downward is a decision to
make deliberately, in a meeting, not by accepting a default bundle.

Two Grok Bot realities belong in that decision. There is no audit view of bot
actions yet, so if a customer reports an odd message, the reconstruction runs
on Intercom's history rather than anything the bot kept. And approvals gate a
proposed action without reversing completed work, the right control for a send
precisely because it is the only moment that exists. The
[permissions walkthrough](/blog/grok-bot-permissions-explained) goes through
how those two facts shape a grant list generally.

## Assume the note will become a reply, and plan the ten minutes after

Every control above aims at one event. Rehearse the response now rather than at
the time.

| How a note becomes a reply | Why it happens | What prevents it |
|---|---|---|
| One field set from context | Note and reply are one call, one word apart | The bot never holds a grant permitting the reply value |
| The composer was left on the reply tab | Browser automation clicks a position, not a meaning | Do not drive the inbox through a session a human shares |
| A macro is inserted to save typing | Macro insertion is a send path, not a text path | Forbid macros and saved replies by name in the charter |
| A close or assign call carries a body | It reads as filing and delivers as messaging | Withhold conversation management, not just replies |

The order afterwards is fixed: read what went out, decide whether the customer
now needs a real message from a real person, then argue about the charter.
Intercom does provide a redaction call for a conversation part, so the record
can be edited. That is useful and it is not an undo. Redaction reaches the
thread, not the email already in somebody's mail client.

Then find out whether it was the first one. Grok Bot has no audit view of its
own actions yet, so the only complete list of what your bot sent lives in
Intercom, filtered to the admin account you handed over. Run that filter the
day you set up the bot, so you know where to look before you need it.

## The hardest line in this series, and why it holds here

Elsewhere in this cluster the boundary is about damage: do not touch schema,
do not fulfil an order. In Intercom it is about voice.

The API has a mechanical version of this. An admin reply requires an
\`admin_id\`, the account it is attributed to, so a bot reply does not arrive
looking like a bot. It arrives as whichever admin account you gave it. Hand
over your own seat and every message it sends is signed by you.

A support reply is your company speaking. It carries commitments, it can
create obligations, and it is quoted back to you. A bot that is ninety-eight
percent right is not ninety-eight percent fine, because the two percent
includes the conversation where the customer was already angry, the one where
a refund was implied, and the one where the customer was a journalist.

No partial version of this line survives contact with reality. "Only reply to
simple questions" fails because classifying a question as simple is the hard
part, and the misclassification is exactly where the reply is wrong. "Only
reply outside business hours" fails because that is when nobody is watching.
"Only reply with approved macros" fails because the wrong macro on the right
conversation is still the wrong message.

So the line is absolute: the bot never sends to a customer. Not a reply, not a
macro, not an outbound message, not a proactive chat, not an SMS, not a
satisfaction survey. It writes internal notes, and a human sends everything
that leaves the building. The [churn watch](/bots/churn-watch) listing holds
the same position from the retention side, and the
[inbox triage](/bots/inbox-triage) bot does it for email.

## Where the time actually goes in a support queue

Refusing the send does not cost you the value, because writing the reply was
never the expensive part.

The expensive part is context reconstruction. Before answering anything a
person has to read the thread, work out what was already promised, check the
customer's plan and history, find whether this has been reported before, and
decide who should handle it. Several minutes per conversation, almost entirely
reading, producing no artefact anyone keeps.

That whole job can be a note, with a suggested reply inside it marked plainly
as a draft. The value survives and the send stays with someone accountable.

If you want the bot to learn your real triage flow rather than a described one,
teach-by-demonstration records visible browser interaction for up to ten
minutes and produces a draft skill from it. One caveat matters here more than
anywhere: the recording captures whatever is on your screen, and in a support
inbox that is customer data. Work through a test conversation, not a real one.

## Paste the note-only charter and change only the tag list

Paste this, replace the tag list with yours, and change nothing in the stop
section.

\`\`\`text
You are my Support Context Bot for Intercom. You write internal notes.
You never speak to a customer.

// WHAT YOU OWN
1. For every conversation that arrives in [inbox], within 5 minutes,
   add ONE internal note containing:
   - what the customer wants, in two lines
   - what has already been promised in this thread, quoted
   - plan, signup date, and last four conversations with links
   - any conversation in the last 90 days on the same subject, linked
   - suggested tag from the list below
   - a suggested reply, prefixed exactly: "DRAFT, NOT SENT:"

2. Apply at most TWO tags per conversation, only from this list:
   billing, bug, how-to, feature-request, cancellation, outage,
   account-access, other.
   If nothing fits, apply "other" and list it in the daily report.

3. Daily at 17:00, report: volume by tag, conversations open more than
   24 hours, anything you tagged "other", and any thread where the
   customer has written twice with no reply.

// HOW YOU WRITE NOTES
Quote the customer rather than paraphrasing when it matters.
Never state a policy as fact unless you can link where it is written.
If you are unsure, write "unsure" rather than guessing confidently.
Log every note you wrote and every tag you applied, with timestamps.

// WHERE YOU STOP
Never send a reply to a customer, on any channel, at any time.
Never use a macro, saved reply, or template to respond.
Never create, edit, schedule, or send an outbound message, banner,
tour, email, push, news item, or proactive chat.
Never assign, reassign, close, reopen, snooze, or prioritise a
conversation. State changes are read by my teammates and are theirs.
Never create a new tag. Never edit or delete an existing tag.
Never edit a contact record, a company record, or a custom attribute,
because attribute changes can move a customer into an outbound audience.
Never create or edit an Inbox rule, workflow, or automation.
Never change teammates, seats, roles, channels, office hours, or billing.
If a task appears to require any of the above, stop, describe in one
paragraph what you would have done, and wait for me.
\`\`\`

The "DRAFT, NOT SENT:" prefix is not decoration: if a note ends up somewhere it
should not, the first three words tell the reader what they are looking at.

One structural note for teams. Grok Bot routines belong to a single bot rather
than to your organisation, and deleting the bot deletes its routines. If your
support cover depends on that five-minute note, write down what it does outside
the bot, and make sure someone else knows it exists.

## Take one double-charge complaint from arrival to a sent reply

At 02:11 an email lands in the support inbox: charged twice, angry, wants it
fixed today. Nobody is awake.

At 02:12 the bot adds one note and one tag. It sends nothing and assigns
nothing, so the conversation stays in the open queue where it belongs.

\`\`\`text
CONTEXT NOTE (bot, 02:12)
Wants: refund of the second charge dated 24 Aug, today.
Promised in this thread so far: nothing, this is the first message.
Account: Team plan, customer since Mar 2025, 3 prior conversations.
Prior: 14 Aug "invoice looks wrong", resolved, tagged billing.
Same subject in 90 days: 2 other conversations mention a duplicate
  charge dated 24 Aug. Both still open. [links]
Tag applied: billing
DRAFT, NOT SENT: "You were charged twice on 24 Aug and we are
  refunding the second charge today. I am sorry..."
\`\`\`

At 09:00 a teammate opens the queue. The line that changes their morning is not
the draft. It is the one saying two other people reported the same duplicate
charge on the same date. One is a refund. Three is an incident, and the next
action is a message to engineering.

At 09:04 they reply in their own words, having decided something the bot was
never asked to decide. The bot read. The human decided and spoke.

On day one the notes are wordy and half the linked conversations are
irrelevant. By day thirty the note is shorter, because the charter learned
which lines your team reads, and the 17:00 report has replaced the Monday
meeting about the weekend. The boundary never moved.

| Line in the note | Where it comes from | What its absence costs |
|---|---|---|
| What the customer wants, in two lines | The newest message, quoted | Your teammate re-reads the thread, the cost you were removing |
| What has already been promised | Every earlier message in the thread | A second reply contradicting the first, to a customer holding both |
| Plan, tenure, recent conversations | Contact and company records | A refund decided without the context that would have changed it |
| Same subject in the last 90 days | Conversation search | One incident answered as three unrelated questions |
| Suggested tag from the fixed list | The charter, never the bot's judgment | Reporting drifts a category at a time, unnoticed for a quarter |
| The draft, prefixed DRAFT, NOT SENT | Everything above | A note that reads like finished text, which is how boundaries bend |

## Shadow fifty conversations before you widen anything

Run the bot for a fortnight in note-only mode and grade it against
conversations your team handled anyway.

Take fifty. Compare each note to what actually happened and sort the result
into four buckets: accurate and saved time, accurate but told you nothing new,
missed something material such as an earlier promise, or asserted something
untrue.

Only the fourth bucket matters at first, and it should be zero or close. A
confidently wrong note is worse than no note, because your teammate reads it
first and builds their reply on top of it, which is how a bot's error reaches a
customer through a human without anyone breaking a rule.

Then check the tag distribution against your sense of the week. If "other" is
above roughly one conversation in ten, your tag list is wrong rather than the
bot, and fixing the list improves every future report.

Widen only toward more context and better notes, never toward the customer. The
[safety checklist](/blog/grok-bot-safety-checklist) covers the periodic review
that keeps a boundary like this standing after the novelty wears off.

## Take the deflection argument seriously, then price it

The honest objection is that support automation is bought for one number and
this setup scores zero on it. Deflection, the share of conversations resolved
without a human, is the metric, and a bot writing notes deflects nothing.

True, and it is an argument about which product you are buying rather than
where the boundary sits. A system that answers customers is a different thing
from a general-purpose bot holding a teammate seat: answers you maintain, an
escalation path somebody tested, a record of what it said. Giving reply rights
to a bot that also holds your browser session is not the cheap version of that
product, it is a different risk wearing the same word.

Then price the two errors. A wrong note costs one teammate two minutes. A wrong
reply costs a customer relationship, sometimes a commitment you now have to
honour, in writing, in your company's name, at an hour when nobody was
watching.

Where the objection wins: one question, asked constantly by strangers, with one
answer that does not vary and is already published somewhere you maintain.
Opening hours, where invoices live, how to reset a password. That is a lookup,
not a judgment, and holding a lookup behind review is theatre. Even there,
prefer fixed text you wrote over text composed fresh each time, and read
[approval gates for bots](/blog/approval-gates-for-bots) first. You can add
sending in month three. You cannot un-send the fortnight that earned it.

## Name the support queues where a note-only bot is the wrong shape

This design assumes a queue where a human reads every conversation and the
expensive part is context. Three shapes break that assumption.

A queue that already lives in a ticketing tool does not want notes in Intercom.
It wants the annotation to travel with the ticket, where routing and ordering
happen, which is the different build covered in the
[support triage version](/blog/grok-bot-to-support-triage).

A queue with more conversations than one person can read is not helped by one
note each, because four hundred notes nobody opens is four hundred notes. There
the bot's job is ordering, and the number to watch is time to first human read.

A two-person team where both read everything gets less from the note and more
from the daily report. Start with the report.

One case changes what a note even is. Under retention rules or legal hold, the
note your bot wrote is a record with the same standing as the correspondence
around it, so write notes the way you would write anything discoverable. The
[Outlook setup](/blog/grok-bot-outlook) makes that argument about drafts in a
shared mailbox. And when a conversation does leave the bot's hands,
[handing work to a human](/blog/bot-handoff-to-human) covers what to pass
across.

**Keep reading:** [How to Build a Grok Bot That Can Monitor Competitors](/blog/grok-bot-to-competitor-monitoring), [How to Build a Grok Bot That Can Run a Content Calendar](/blog/grok-bot-to-content-calendar), [How to Build a Grok Bot That Can Onboard New Customers](/blog/grok-bot-to-customer-onboarding).

## Frequently Asked Questions

### Can Grok Bot reply to customers in Intercom?

Technically yes, if you grant it the ability to reply, and that is the one
grant to refuse permanently. A reply is your company speaking to a real
person, on whatever channel the conversation is on, with no meaningful recall.
The failure cases are not the average conversation, they are the angry one,
the one where a refund was implied, and the one where the customer works for a
publication. Partial rules like "only simple questions" fail because
classifying a question as simple is the hard part, and misclassification is
exactly where the reply goes wrong.

### What is the difference between a note and a reply for an Intercom bot?

An internal note is visible only to your teammates, appears inline in the
conversation, and can mention colleagues. A reply is delivered to the
customer. They are written in the same composer, separated by a mode tab, and
otherwise identical in shape, which is precisely why a bot's charter must name
them as different operations rather than referring generally to messaging.
Give a bot note-writing ability and withhold replies, macros, and saved
responses. Prefixing every suggested response with something like "DRAFT, NOT
SENT" makes a mistake obvious to whoever reads it.

### Why should a bot not close or snooze Intercom conversations?

Because conversation state is how your team communicates about work, and in
many setups it reaches customers too. Closing a ticket often triggers a
satisfaction request, so a filing action becomes a customer-facing one.
Snoozing hides a conversation until a chosen time, which can bury something
urgent without anyone deciding to. Reassigning removes a thread from one
person's queue before the new owner notices they have it. Reopening a
conversation is possible, but you cannot recall the survey or return the hours
a customer spent waiting.

### What should an Intercom bot automate first?

Context notes. For every incoming conversation, have it write one internal
note summarising what the customer wants, quoting anything already promised in
the thread, listing the customer's plan and recent conversations with links,
and suggesting a tag from a fixed list. Reading and reconstructing context is
the genuinely expensive part of support work, not typing the answer, so this
captures most of the available time saving while every outgoing word still
comes from a person who is accountable for it.
`,
};
