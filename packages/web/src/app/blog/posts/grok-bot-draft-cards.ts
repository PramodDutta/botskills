import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Draft Cards: Review the Email Before It Leaves',
  description:
    'A Grok Bot New Email or New Slack Message card is your last look before a send. What to check on it, how it differs from an approval, and the rule that backs it.',
  date: '2026-09-23',
  category: 'Tutorial',
  content: `
# Grok Bot Draft Cards: Review the Email Before It Leaves

When a Bot prepares an email or a Slack message for you, Grok Bot can put the draft in the conversation as a card with a send button and a discard button. That card is the last moment anyone reads the message before a client, a colleague or a whole channel does. A skimmed card is how a Bot's small mistake becomes your public one.

This page is about using that moment well: what the card shows on desktop and on the phone, what to check on it and in what order, how a card differs from an approval request, and how to pair it with an Ask first rule so that no path to sending can skip your review. It follows one account director through a Wednesday afternoon and a Thursday commute. The card behavior described here comes from three Grok Bot pages, each read as of 23 September 2026: [message and collaborate](https://docs.x.ai/grok-bot/chat-and-collaboration), [mobile](https://docs.x.ai/grok-bot/mobile) and [approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy).

## Read the card as the message itself, not a preview of it

The message and collaborate page has a short section on reviewing a draft before it is sent. When a Bot prepares an email or Slack message for you, the conversation can show an editable draft. You review the recipients and the body, then choose Send email or Send message, or Discard. The mobile page describes the same thing on iPhone and Android as a New Email or New Slack Message card, with Send Email or Send Message, and Discard.

| | Desktop app | iPhone and Android |
|---|---|---|
| What appears | An editable draft in the conversation | A New Email or New Slack Message card |
| Send control | Send email, or Send message for Slack | Send Email, or Send Message for Slack |
| Throw it away | Discard | Discard |
| Edit in place | Yes, the docs call it an editable draft | Not stated explicitly |
| What the docs tell you to review | The recipients and the body | The same, recipients and body |

Two words in that description deserve attention. The first is "can": the docs say the conversation can show a draft, not that every email a Bot works on will arrive as one. The second is "editable", which the docs use for the desktop version. The message and collaborate page calls the phone versions "the same cards", which may mean they are editable too, but the mobile page itself mentions only the buttons. Until the docs say so plainly, plan as if the phone card is send-or-discard only.

Treat the card as the message itself. What is on it is what the recipient will read, and pressing Send is you sending it, not you approving someone else's send. That framing changes how carefully people read.

## Watch Bettina catch the wrong Marco at 16:48

Bettina is an account director at a small design studio. She runs a Bot built from the [Call Follow-Up Drafter](/bots/call-follow-up-drafter) listing, which turns a call transcript into a follow-up email and a CRM note and leaves both in draft. Its boundary is that it never sends the email and never writes to the CRM record.

On a Wednesday at 16:30 she finished a discovery call with the marketing lead at a regional furniture retailer. The transcript arrived a few minutes later, and at 16:44 the draft appeared in her conversation with the Bot. It read well. It thanked the prospect for a specific detail from the call, summarized what she had heard in three bullets, and proposed two times for a second meeting.

At 16:48 she caught two problems. On the call, the prospect had said to loop in Marco from procurement, and the draft carried a Cc to a Marco. It was the wrong one: a Marco at a different company, from an unrelated thread in her own mailbox. The name matched and the domain did not. And the body promised "the revised proposal by Friday", when she had actually said the revised scope by Friday and the full proposal the following Wednesday. Two commitments had been folded into one, and the one that survived was the harder one to keep.

She removed the Cc, rewrote the sentence with both dates, and added a line asking the prospect for Marco's address. At 16:52 she pressed Send email. Eight minutes, two errors caught, and neither of them would have been caught by a quick glance at the first paragraph.

## Check the recipients before you read a word of the body

The docs name two things to review on a draft: the recipients and the body. Bettina's order is the right one. Recipients first, because a wrong recipient is the error you cannot take back with a follow-up email. A wrong date can be corrected in a second message. A client's pricing sent to a stranger cannot.

| On the card | What to check | The failure it catches |
|---|---|---|
| Every recipient | The full address, especially the domain, not just the display name | Right name, wrong person, like Bettina's Marco |
| Anyone on Cc | Whether the source actually asked for them | Recipients the Bot inferred from an old thread |
| The Slack destination | Channel or direct message, and which workspace | A client-facing post landing in a public channel |
| Dates and deadlines in the body | Each one against the transcript or thread | Two commitments folded into one |
| Figures and prices | Each one against its source | A number carried over from a different deal |
| Promises | Anything you would owe the recipient | Commitments you never made |
| Links in the body | Where each one actually goes | A link to an internal document sent outside |

Only the core idea of that table, checking the recipients and the body, comes from the docs. The rows are this site's checklist for doing that review properly. The docs do not say whether a card shows attachments, so if the email is meant to carry a file, ask the Bot to name the attachment before you send, rather than assuming.

Display names deserve a special warning. Mail clients and Bots both show you names first, and a name is exactly what the Bot matched on when it picked the wrong Marco. Read the part after the @.

## Check every date, figure and promise against the source

The Call Follow-Up Drafter listing already contains the rule Bettina's draft broke: nothing enters either draft that is not in the transcript, and no dates are invented. Her date was not invented. It was compressed. "Scope by Friday, proposal next Wednesday" became "proposal by Friday", and each word in the new sentence was individually in the transcript.

That is a characteristic way for a good drafting Bot to go wrong, and it is why reading the body against the source beats reading it for tone. A draft can be fluent, polite, well structured and specific, and still promise something you never said. The listing's instruction for this case is useful to know: anything fuzzy becomes a question in the email, never a stated fact, and if the next step was never spoken aloud, the draft should say so rather than invent one.

Bettina's habit after that Wednesday was simple. For every date or number in a follow-up, she found it in the transcript before pressing Send. Most drafts had two or three. It added about a minute.

The docs' general guidance on reviewable results points the same way. For consequential work, the files page suggests asking a Bot to separate facts found in source systems from assumptions, and actions completed from actions waiting for approval. A draft email is consequential work.

## Edit on the desktop, and send corrections as messages on the phone

On desktop the draft is editable, so the fastest fix is to change it in place, the way Bettina did. Remove the wrong recipient, rewrite the sentence, send.

On the phone, the mobile page describes Send Email and Discard and says nothing about editing. On Thursday at 07:50, on the train, Bettina got a New Email card on her iPhone: a reply to a supplier confirming a print run. The quantity was right and the delivery week was wrong. She did not press Send Email and hope to fix it later, and she did not try to find an edit control the docs do not describe. She replied in the conversation instead: change the delivery week to the one in the supplier's last message and keep everything else. A few minutes later a corrected card arrived, she checked the one line she had asked to change, and she sent it.

That pattern follows the files page's advice to ask a Bot to revise the existing artifact rather than making disconnected copies. It also keeps a record in the conversation of what you changed and why, which an in-place edit does not.

If a phone card needs more than one or two corrections, Discard it and handle the message at a desk. A card you have to squint at is a card you will eventually misread.

## Tell a draft card apart from an approval request

Grok Bot has two different things that can stop before an action, and they look similar enough in a busy conversation to be confused.

| | Draft card | Approval request |
|---|---|---|
| What it shows | The prepared message: recipients and body | The proposed operation and its inputs, with the target and scope |
| Desktop buttons | Send email or Send message, and Discard | Allow once, Deny, and Always allow |
| Phone buttons | Send Email or Send Message, and Discard | Allow, Deny, and Always allow when a rule is proposed |
| What pressing yes does | Sends the message you are looking at | Lets the Bot carry out that one proposed action |
| Can it create a standing rule | The docs do not describe one | Always allow can save a matching rule |
| Where it comes from | A Bot preparing an email or Slack message for you | Auto Review, an Ask first rule, or an action that needs your approval |

The approvals page gives the rules for the right-hand column. Review the target, scope and values before approving. Do not approve an action whose target or effect you cannot identify; ask the Bot to explain it in plain language, or to produce a draft first. That last suggestion is the bridge between the two columns: when an approval request to send something is unclear, asking for a draft turns it into a card you can read line by line.

Both columns share one property. Neither can be taken back. An approval controls the proposed action and does not reverse work already done, and the docs describe no undo for a sent message either. The review has to happen before the button, because there is nothing after it.

## Never answer a send with Always allow or a thumbs-up

Two shortcuts turn a careful setup into a careless one, and both are documented.

The first is Always allow. On desktop, an approval request offers Always allow, which can save a matching rule. On a send, that is exactly the wrong rule to save, because an allow rule for sending means the next matching send may go ahead without stopping for you, with only the automated review in its way. The teams page's advice to members says it more generally: prefer Allow once over Always allow for actions that touch accounts, money or shared resources. An email to a client touches all three. It is also one more argument for the Ask first rule in the next section, because when an Ask first rule and an allow rule both match an action, the docs say Ask first wins.

The second is a reaction. Grok Bot lets you react to messages, and the message and collaborate page is explicit that reactions are for lightweight acknowledgement and that a reaction alone should not carry a safety-critical decision. A thumbs-up on a Bot's "ready to send?" is not a send decision. Press the card's button, or write a reply that says what you want.

Bettina now has one rule for her own thumbs: they never touch a Send or Allow control while she is walking. Cards that arrive on the move get read, and anything that needs thought waits for a desk.

## Back the card with an Ask first rule so no send path skips review

A card only protects you when the Bot produces one. The docs say the conversation can show a draft; they do not promise that every path to sending goes through a card. Depending on what you have connected, a Bot might reach a send through a mail connector's tool, or through a web mail tab in the shared computer's browser. Either would be an action, not a card.

Auto Review is the layer that looks at actions. With it turned on, Grok Bot evaluates tool calls and computer actions before they run, and you add rules under Settings -> General -> Bot -> Auto-review. An Ask first rule always stops matching actions for you. An Allow automatically rule lets matching actions proceed only when the automated review finds no other reason to stop. When both match, Ask first wins.

The approvals page's own first example of a narrow rule is the one to add: ask first before sending any external email. For Slack, add the equivalent for posting to channels. Keep both narrow and specific; the docs warn against broad rules such as allowing everything in the browser, because websites and tool behavior change. Your personal rules are saved to your account and apply on every desktop you sign in to and on your Grok Bot computer. On Enterprise, admins can also enforce Auto Review and add team rules, and the teams page lists external email among its suggested Ask first examples.

Be honest about what the rule is. Auto Review is model-based, and the docs say it should complement, not replace, least privilege and explicit approval boundaries. It is the second lock, not the only one.

## Write the boundary into the Bot, not just the settings

The first lock is the Bot's own description. The docs recommend putting standing boundaries in each Bot's description and using narrow Ask first rules for actions such as sending. Here is the pair Bettina uses for both of her mail Bots, the description block first and the rules second.

\`\`\`text
Description, boundary block
You prepare emails and Slack messages. You never send them.
When a message is ready, show it to me as a draft in this conversation
and stop. I press Send, or I tell you what to change.
Never send from a web mail or Slack tab in the browser, and never
schedule a message to go out later.
Every recipient must come from the source: the transcript, the thread,
or my message. Never choose an address by matching a name alone. If a
person is mentioned without an address, leave them off and ask me.
Every date, figure and promise in a draft must appear in the source.
If the source is ambiguous, write it as a question to the recipient.

Auto-review rules (Settings -> General -> Bot -> Auto-review)
Ask first: before sending any external email.
Ask first: before posting a message to any Slack channel or DM.
\`\`\`

The recipient lines are the Marco rule, written after Wednesday. The browser line closes the path a card cannot see. The scheduling line exists because a scheduled send is still a send, and it happens at a time when you are not looking.

This is the boundary idea that runs through every listing on this site: the one action the Bot never takes without a human. For a mail Bot, that action is sending, and everything in the block above exists to make sure the only way a message leaves is your hand on the button.

## Use Discard freely, and know what it does not tell you

Discard is the cheapest button on the card. It costs you a draft, and the Bot can always prepare another. Bettina's rule of thumb became: if a card needs more than two fixes, discard it and ask for a new one with the corrections stated, because a heavily edited card is where the one missed error hides.

The docs name the Discard button and say nothing more about what it does. In particular, they do not say whether a copy of the draft also exists somewhere else, such as a drafts folder in your mail account, or whether Discard removes it there. If your Bot also writes drafts into your mailbox, check that folder rather than assuming it is clean.

Discarding is also not stopping. If the Bot is partway through a larger task, discarding one card does not end the task. To end work, the message and collaborate page says to send a direct "Stop now" message, and it adds that stopping does not undo actions the Bot has already completed.

## Diagnose "failed to send" before you press Send again

A search for "grok bot failed to send" can describe several different situations. The first move in almost all of them is the same: find out whether the message actually left before you try again, because a duplicate client email is its own small incident.

| What you see | What the docs point to | First move |
|---|---|---|
| An error notice above the composer after pressing Send | Errors appear under Notifications; some include Copy request ID | Copy the full request ID, then check the Sent folder or the channel |
| The Bot says it will not or cannot send | A boundary or a missing permission doing its job | Read the charter; a blocked send is often the design working |
| A plugin error, or a plugin shown as Disabled by team admin | Plugin authentication, or your team's connector policy | Marketplace -> Your plugins, reauthenticate, or ask your admin |
| An approval that will not complete | The "approval is blocked" steps | Reject or cancel it, send a replacement instruction, ask the Bot to regenerate |
| You cleared the error and are unsure what happened | Clearing a notice does not undo the action underneath | Check the source system before pressing anything |

The fourth row comes straight from the troubleshooting page, which also says that if an action keeps asking for approval, check Auto-review for a matching Ask first rule, including team rules your admin requires. That is worth knowing because the rule in the earlier section will, correctly, stop every matching send the Bot attempts.

For the longer version of the second row, where a send fails because of the charter, the connector's permissions or an expired session, [why Grok Bot cannot send email](/blog/grok-bot-cannot-send-email) walks through each gate. If you need to contact support, the troubleshooting page lists what to collect: the version, your operating system, the exact error message, the Bot name, the time and time zone, and the full request ID.

## Run Inbox Triage and the follow-up drafter with send left to you

Bettina's two mail Bots have different jobs and the same boundary. Her [Inbox Triage](/bots/inbox-triage) Bot runs each weekday morning, labels the inbox, and drafts replies for the three threads that most need her. Its boundary is that it never sends an email and every draft waits for explicit approval. It also refuses to draft at all on threads involving money, legal or HR, and flags them for her instead.

Her Call Follow-Up Drafter runs after external calls and produces the follow-up and the CRM note, sending neither. Between them they prepare most of her outgoing mail, and she presses every Send herself.

The daily shape is simple. Inbox Triage's drafts get read over coffee, on a desktop, with the recipients-first checklist. Follow-up drafts get read right after the call, while the conversation is fresh enough to catch a compressed date. Phone cards get read on the move, and anything that needs more than a one-line correction waits.

What she does not do is widen either Bot's permissions to save the clicks. The clicks are the product. A mail Bot that drafts well and never sends is one she can run every day without watching it, and the eight minutes she spent on Wednesday's card were the reason the prospect got a correct email instead of an awkward correction. For the approval side of the same design, [how to set approvals so sends never slip through](/blog/how-to-set-grok-bot-approvals) goes deeper into rule wording.

## Answer the reader who says the card makes the rule redundant

The objection at full strength: the card already forces a human click before anything leaves. Adding an Ask first rule on top means two prompts for one email, which trains people to click through prompts, which is worse than one careful prompt.

The part about fatigue is real, and it is why the rule should be narrow: external email and Slack posts, nothing broader. But the redundancy argument assumes the card is the only way a message can leave, and the docs do not say that. They say the conversation can show a draft. A connector send, a browser send from a signed-in web mail tab, or a routine running at 03:00 while you sleep are all paths the rule sees and a card may not.

The two layers also fail differently. The card fails when a human skims it. The rule fails when the model-based review misjudges an action. A setup that needs both to fail at once before a bad email goes out is much stronger than either alone. The docs do not say whether pressing Send on a card also trips an Ask first rule. If it does in your setup, the cost is one extra click on a message you have already read, and the benefit is a stop on every send path the card never sees.

## Stop using this page when the card labels or send rules change

Grok Bot is in beta, and small interface details like button labels are among the first things to move. The labels and behaviors above match the docs as they stood on 23 September 2026. If the docs start describing phone cards as editable, the section on phone corrections gets simpler. If the docs promise that every send goes through a card, the argument for the Ask first rule gets weaker, though the rule still costs little.

This page does not cover connecting Gmail or Slack in the first place, or which permissions to grant a mail connector; start with the connector's own flow in Marketplace for that. It also does not cover sending on a schedule, which this page advises against for any Bot whose job is drafting.

## Frequently Asked Questions

### What is a New Email card in Grok Bot?

It is how Grok Bot shows a message a Bot has prepared for you before anything is sent. On iPhone and Android the docs call it a New Email or New Slack Message card, with Send Email or Send Message and Discard. On desktop the conversation shows an editable draft with Send email or Send message and Discard. The docs say to review the recipients and the body before sending. Pressing the send button sends the message, and the docs describe no way to undo a send.

### Why did Grok Bot fail to send my email?

The causes to check first are a boundary in the Bot's description that forbids sending, an Ask first rule stopping the action for approval, a mail plugin that needs reauthentication, or a team connector policy that shows the plugin as Disabled by team admin. Grok Bot shows errors in the Notifications area above the composer, sometimes with a Copy request ID button for support. Before pressing Send again, check your Sent folder or the Slack channel, because clearing an error notice does not undo whatever already happened, and a duplicate email is easy to cause.

### Is a draft card the same as an approval?

No. A draft card shows the prepared message itself, recipients and body, and its button sends that message. An approval request shows a proposed action and its inputs, with Allow once, Deny and Always allow on desktop, and Always allow can save a matching rule for future actions. Use the card to review wording and recipients, and add a narrow Ask first rule such as asking first before sending any external email, so that a send that does not arrive as a card still stops for you.

### Can Grok Bot send Slack messages?

Yes, with Slack connected. When a Bot prepares a Slack message for you, the conversation can show a draft; on iPhone and Android it is a New Slack Message card with Send Message and Discard, and on desktop the draft offers Send message and Discard. Check the destination channel or direct message and the workspace before sending. For a Bot whose job is drafting, add an Ask first rule for posting to Slack, and keep the choice to send with you rather than the Bot.
`,
};
