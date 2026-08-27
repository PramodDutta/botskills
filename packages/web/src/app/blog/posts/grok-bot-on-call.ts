import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Who Is On Call When a Grok Bot Misfires at 3am',
  description:
    'Grok Bot on call is a named human with a desktop, not iPhone edit. There is no audit log yet. Pause on iPhone. Diagnose at a desk. Name the owner first.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# Who Is On Call When a Grok Bot Misfires at 3am

Nobody in the product is on call. A grok bot on call is a person you wrote down, sitting near a Mac or a Windows desk, and at 03:12 the person who got pinged is in bed with an iPhone. Pause is the only useful verb that phone has. Editing, history, testing, and deleting need a desktop. There is no audit view of bot actions yet, so the app will not tell you whether the customer mail already left. Write the owner into the charter before that night, because Grok Bot will not name them for you.

This page is staffing. It is not a restart protocol. If the chat went silent with files half written, that is [Grok Bot stalled mid-job](/blog/grok-bot-stalled). If a 09:00 DM never arrived because the owner bot was deleted, that is [a routine that did not run](/blog/grok-bot-routine-did-not-run). Stay here when a send almost left, or did leave, and you need to know who gets paged, what they can do from a phone (pause only), and why delete is not the first move.

## Write the on-call human into the charter before the first overnight send

A grok bot on call line is a name, a desk, and a phone rule. It is not a Slack channel, a role, or "whoever is awake". Channels do not open the Agent Computer. Roles do not sit at a Mac. Awake is not a roster.

Write it where the bot can reread it. The charter is standing text. A pinned Slack message is a hope you will remember at 03:12. If the bot is allowed to draft mail to customers, the charter already contains a send rule. Put the human next to that rule, in the same file, before the first overnight run.

Name a person who can reach a supported desk. Clients are macOS, Windows, and iPhone on iOS 18 or later. There is no Linux desktop app, no Android app, and no iPad app. The cloud computer is a managed Linux VM, which is not a laptop you can SSH into from bed. A Linux-only engineer can pause from an iPhone if they have one, and they cannot diagnose until they borrow a Mac or a Windows machine.

On iPhone you can pause and resume only. Resume at 03:12, without files in front of you, is how a parked send becomes a sent mail. The charter should say pause, then wait for the named desk, never "fix it from your phone". [Grok Bot iPhone limits](/blog/grok-bot-iphone-cannot-edit) are the device facts. This page is who you point at those facts.

## Page the person who can sit at a Mac or Windows desk

Grok Bot does not page, escalate, or keep an on-call calendar. A routine can fire and a send can wait without ringing anyone unless you built the ring: a Slack DM, an SMS from a watchdog, a watch you already trust.

Page the person who can sit down. The incident is a proposed action on a shared cloud computer. The only honest view is the bot's screen plus the files under \`/workspace\`. A founder in a taxi with an iPhone can freeze the next attempt. They cannot read the proposed body the way a desk can, open history, or patch the charter.

Name one owner per bot even if two people share the account. All bots share one persistent cloud computer assigned to the user, not to a bot. Screens are not security boundaries. Cookies, sessions, files, and CLI credentials are shared. The person you page is walking into a house key. [What Grok Bot actually isolates](/blog/grok-bot-shared-computer-security) is that architecture. A page that cannot end in a desk session ends in a guess: approve, delete, or retype the job into chat.

| Candidate | Pause from iPhone | Diagnose the send at 3am | Put them on the charter |
|---|---|---|---|
| Named owner with a Mac or Windows laptop in the house | Yes, if they have iOS 18+ | Yes | Yes, if they agreed in writing |
| Linux-only engineer with an iPhone | Yes | No. There is no Linux desktop client | Pause-only. They borrow a supported desk before they deny or resume |
| Android-only contractor | No Grok Bot Android app | No | No |
| A Slack channel named #bots | No | No | Never. A channel is not a person |
| "Whoever has the Cursor login" | Maybe | Maybe, and that is the failure | Name one human. Shared logins make the page bounce |

## Treat the iPhone as a pause switch, never as an incident console

The 3am instinct is to tap through the app until the problem goes away. Documented mobile scope is pause and resume. Editing, history, testing, and deleting need a desktop. Teach by demonstration is unavailable on iPhone. You will not rewrite the discount, open the last twenty run records, fire a one-shot test, or delete the bot from the lock screen.

Pause so the job stops trying. A looping selector, a send sitting on ask, a routine that keeps drafting the same follow-up: all of those get worse while you hunt for a laptop. Pause is a freeze. It is not a diagnosis, a deny, or an undo for mail that already left.

Do not resume from the phone. At 03:12 you have not listed \`/workspace\`, opened Sent, or read the proposed body on the Agent Computer. Resuming from a pillow is the same class of error as typing "continue" into a stalled job. A blurry preview is not enough to approve. An approval controls the proposed action. It does not reverse work already done. [How to set Grok Bot approvals](/blog/how-to-set-grok-bot-approvals) is the daytime setup. Nighttime is pause, then wait for the desk.

iPhone on iOS 18+ is the companion. Android is not. iPad is not. If you have no supported phone, you have no remote freeze. Pause the send-capable bots before you sleep in a place with no Mac, no Windows machine, and no iPhone.

## Refuse delete as the opening 3am move

Delete feels like a kill switch. It is a roster action. Deleting a bot removes its profile, conversation, and routines. It does not retract a mail that left. It does not sign out of Gmail. It does not empty \`/workspace\`. It does not clear the browser cookie jar. Other bots on the account keep using the same computer, because the computer is assigned to your user account.

The 3am delete also destroys the evidence you need at 07:00. The twenty most recent run records per routine die with the routine. The routine dies with the bot. The draft file and the mailbox session remain. You wake up to a missing sidebar card, a customer who may already have the mail, and a fossil markdown file that looks like the job is still alive. iPhone cannot delete anyway. Deleting needs a desktop. [How to delete a Grok Bot without leaving logins behind](/blog/delete-a-grok-bot-safely) is teardown for a planned retirement. A misfire is not a retirement.

| Urge at 03:12 | What it actually does | Do this instead |
|---|---|---|
| Delete the bot | Drops the card, the chat, and the routines. Leaves files and sessions. Does not unsend | Pause. Inventory at a desk. Deny the send if it is still sitting |
| Approve so it stops pinging | The mail leaves if the ask was a send | Pause. Read the body at a desk. Deny unless you would send it yourself |
| Type "start over" in chat | A second job wearing the first job's name | Pause. Do not type until you have listed the folder |
| Resume so it "finishes" | Continues from a state you have not inspected | Leave it paused until the named desk is open |
| Create a second bot to "take over" | A second screen on the same computer, same cookies | One owner. One bot. One pause |

Hide the bot on a calm afternoon if you still need the work later. Hide is not a 3am tool. Pause is.

## Separate a misfire from a stall and from a missed routine

Searchers mix three nights. Staffing is only one of them. Run the wrong playbook and you either double a send or you page someone for a clock.

A misfire is an action that left, or almost left, that you did not intend: a customer mail, a published post, a payment, a production delete. The question is who stops the next one, and who checks the destination.

A stall is a silent sit with files that may already exist. Resume without doubling lives on [the stalled-job page](/blog/grok-bot-stalled). A missed routine never started: owner bot gone, over the 50-routine cap, history opened from a phone, or the twenty-record window already slid. That postmortem lives on [the routine-did-not-run page](/blog/grok-bot-routine-did-not-run).

| Night | What you can see | First human move | Wrong page |
|---|---|---|---|
| Misfire (this page) | A send on ask, a draft that looks sendable, or mail already in Sent | Pause. Page the named desk owner. Do not delete | Restarting the job from chat |
| Stall | Chat silent, preview frozen, files under \`/workspace\` | Open the screen at a desk. Inventory. Resume from the last checkpoint | Paging "on-call" to approve a send you have not read |
| Missed routine | Empty 09:00, or a bot named temp missing from the sidebar | Ask which bot owned the routine, from a desk that can open history | Treating it as a 3am send incident |

[Inbox Triage](/bots/inbox-triage) is built so a misfire is hard: it never sends, every draft waits. [Lead Scout](/bots/lead-scout) never contacts anyone. Those boundaries are staffing tools. If the bot cannot send, 3am is a draft you read in the morning, not a pager event.

## Walk one almost-sent customer draft from ping to parked send

Priya is grok bot on call for the sales follow-up bot. The charter says so in one line: "On-call: Priya Chen. Desk: Mac in the kitchen. Phone: pause only. Never approve a send from iOS." At 03:12 Slack lights up because a watchdog bot saw an approval sitting for more than twenty minutes. The proposed action is a follow-up to Maya at Acme. Renewal is next week. The draft offers a 40 percent discount Priya never approved.

Priya is in bed. She opens Grok Bot on iPhone, pauses, and does not tap anything that looks like approval. She goes back to sleep with the job frozen.

At 07:15 she sits at the Mac and opens the bot's screen. She matches the current desktop wording. She does not memorize a button name from this article. The 40 percent came from a competitor page fetched at 02:50. Acme's renewal note, in a file the bot was supposed to read, says standard terms, no discount.

She lists \`/workspace/acme-followup\`. \`DRAFT-maya.md\` exists. \`NOTES.md\` says "ready to send". There is no sent-message ID. Sent on the cloud computer, not her phone Gmail, is empty for Maya. She denies the approval. She writes three lines into \`ONCALL.md\`: time paused, time denied, reason (invented discount). She does not type "send it without the discount" into chat. She patches the charter at the desk so the bot never invents a percentage, and she leaves send on ask.

If Sent already held Maya's thread, the first move would still have been pause, not delete. You cannot unsend from Grok Bot. You write what left. You tell Maya. You copy the files before you retire the bot, and you treat the mailbox session as a separate daytime problem.

That is grok bot on call: freeze from the phone, decide from the desk, keep delete for later.

## Inventory what you can prove without an audit view

Grok Bot has no audit view of bot actions yet. Twenty run records per routine are a sliding window, not a ledger. Chat is a commentary track. The destination is the log that counts: Sent, the ticket, the CRM, the published URL, the bank. [Grok Bot has no audit view yet](/blog/grok-bot-no-audit-log-yet) is how you keep receipts on purpose. On-call is how you use them when the pager fires.

Prove three things, in this order. Did an irreversible verb already happen. Is a send still sitting on ask. What files are already on the shared computer.

Destination first: open Sent, search the customer. One thread means it left. Zero means you still have a choice if the approval is sitting. Two means someone doubled it. Files second: list \`/workspace\`. A draft without a sent ID is not proof of a send. A NOTES.md that claims "sent" is not proof either. Chat last. The last line can say sending while the mail already left, or say sent while the ask is still on screen.

You cannot finish this inventory from iPhone. History needs a desktop. Pause, then inventory at the named desk. A timeline from memory is how you apologize for mail that never left, or miss the one that did.

## Keep send parked so the pager still has a choice

On-call only works if the dangerous verb waits. If send, pay, delete, and publish run unattended, 03:12 is a customer conversation, not an approval prompt. Pause cannot retract. Delete cannot retract. The named human arrives to a world that already moved.

Park the four verbs that leave the building. Let drafts, labels, research notes, and files on your own disk finish. [Inbox Triage](/bots/inbox-triage) already ships that shape. [Churn Watch](/bots/churn-watch) never pings the customer. Copy those stop lines into anything that can see a mailbox. An approval is a gate in front of the next step, not an undo for the last one. If send is on ask, grok bot on call still has a job.

Do not park every draft. A queue full of "file this PDF" prompts hides the send, and muscle memory will clear both at 08:00. That failure is in [the approvals walkthrough](/blog/how-to-set-grok-bot-approvals). For staffing, the test is: at 3am, is there still a human-shaped decision, or did the mail already leave.

A routine does not change the park. Max 50 routines per bot. Twenty recent run records per routine. Those records will not tell you whether Maya got the 40 percent. Sent will. Deleting the bot deletes the routines and does not retract the mail.

## Staff the night as one named human, not as a rotation of bots

People try to staff with more bots. A watcher can nag. It must not restart, delete, or send. A second bot is not a second computer. It sits on the same persistent cloud computer, with the same cookies, and it can open the same Gmail session you were trying to contain.

One named human owns the pager. One bot owns the customer draft. A rotation of people is allowed if each person can reach a supported desk and each person is written down. "Priya Monday to Thursday, Jordan Friday to Sunday, both have the kitchen Mac." That is a roster. "The team" is not. Jordan on Android in an airport is not on-call for diagnosis.

Do not hand the Cursor login around as the on-call token. None of the SKUs that include Grok Bot ship a team on-call calendar for bots. You still write the name. Cursor Pro+ at $60 a month is the cheapest paid path that includes it. Cursor Hobby and Cursor Pro at $20 do not. SuperGrok at $30 does not. SuperGrok Plus at $100 does. Teams Standard and Premium both include it.

[Chief of Staff Briefing](/bots/chief-of-staff-briefing) never sends. It is a morning pack, not a night pager. Need for grok bot on call appears the moment a bot can mail a customer, post in public, pay, or delete.

## Paste an on-call block into every outbound charter

The block is short on purpose. Long on-call novels do not get read at 03:12. Put it at the top, next to the send rule, and keep the phone rule in one sentence.

\`\`\`text
# On-call (required before any overnight send)
Owner: Priya Chen
Desk: Mac in the kitchen (Windows laptop in the bag is the backup)
Pager: Slack DM from the watchdog, then SMS. Not a channel.
Phone: pause only. Do not resume. Do not approve. Do not delete.
First desk moves:
1. Open this bot's screen. Read the proposed action.
2. List /workspace/acme-followup. Copy names and times into ONCALL.md.
3. Check the destination (Sent, ticket, CRM). Write the ID or write "none".
4. If send is still sitting, deny unless I would send this exact body myself.
5. Patch the charter at the desk. Never from iPhone.
Never: send, pay, publish, delete this bot, type "start over", paste a 2FA code into chat.
Boundary: this bot never sends mail. Drafts wait. Approvals wait for the named desk.
\`\`\`

Change the folder name. Change the owner. Do not change the phone line or Never. Skip the pager on draft-only bots, but keep the block, because the next person who connects Gmail will assume someone is watching.

Put the same owner in a roster file the product does not keep. Nothing is team-level. Deleting a bot deletes its routines. The roster is how a future you sees that Priya still owns the Acme follow-up.

## Drill the roster with a check that can fail on purpose

A name in a charter is not a roster until you have failed the night on purpose. Run the drill on a staging address you control, not on Maya. Set send on ask. Page yourself away from the desk. From iPhone, prove pause works and prove you cannot edit. Do not resume. At the desk, deny the send. Confirm the staging inbox received nothing.

Then fail it the other way, once, on a throwaway bot and inbox: leave send unattended and confirm the mail leaves. That is the night you are staffing for. If you cannot make that mail leave in a drill, you do not yet know whether production send is actually parked.

| Check | Pass | Fail |
|---|---|---|
| Charter names a human and a desk | "Priya Chen, kitchen Mac" | "the team", blank, or a Slack channel |
| Phone drill | Pause works. Edit, history, test, and delete do not | You changed a line from iOS, or you resumed from bed |
| Staging send on ask | Approval sits. You deny. Staging inbox is empty | Mail leaves, or you approved without reading the body |
| Unattended send (throwaway only) | Mail leaves, and you admit the park was missing | You cannot tell, because you have no destination check |
| Delete temptation | Bot still in the sidebar. Files inventoried first | Bot gone, routines gone, Gmail session still in the shared browser |

If the phone drill lets you edit, stop and read [the iPhone limits page](/blog/grok-bot-iphone-cannot-edit) before you trust the night.

## Answer the founder who wants to approve the send from bed

The objection is honest. The founder is the named human. They have the iPhone. The approval is sitting. Tapping yes would clear the ping and let everyone sleep. Waiting until 07:15 feels like unpaid ceremony.

Approve-from-bed wins only when three things are true at once: you can read the full proposed body, you would send that exact body yourself, and you have already checked that the same mail is not already in Sent. The iPhone app is not built for that triple. You cannot open history. You cannot list \`/workspace\`. You cannot patch the charter if the body is wrong. You can pause. Pause is the honest pocket verb.

The cost of waiting until morning, if send is parked, is a delayed draft. The cost of a 3am yes on a 40 percent discount is a customer who now believes the number, plus a thread you cannot pull back. There is no audit view to reconstruct what you tapped. Your receipt is whatever you write down after.

If the founder travels without a Mac or a Windows machine, they are not on-call for diagnosis that week. Pause the send-capable bots before the flight, or take a supported laptop. Linux in a hotel is not a Grok Bot client. iPad is not. The [safety checklist](/blog/grok-bot-safety-checklist) is the pre-flight for connecting mail. This page is the pre-flight for sleeping while mail is connected. Write the pillow rule into the charter so 03:12 Priya, who is also the founder, does not renegotiate it half asleep.

## Name the nights this staffing model does not cover

A draft-only fleet does not need a pager. Keep the block. Skip the SMS. A missed routine does not need a 3am desk: history waits until morning. A stall with no irreversible verb in flight needs a daylight restart without doubling, not an on-call approve.

A Linux-only household cannot diagnose until someone borrows macOS or Windows. Staffing cannot invent a client. Docs answer Linux desktop with a flat no.

A send that already left is a customer conversation. Pause so a second copy does not follow. The named human writes to Maya. The bot does not send the apology unless you want two voices in the thread.

Companies that need a vendor audit log, a team on-call calendar, and a dedicated VM per bot are describing a product Grok Bot does not ship today. Separate bots are not a security boundary. An audit view of bot actions does not exist yet. Write the gap down. Do not staff as if it were filled.

**Keep reading:** [Grok Bot iPhone limits: pause and resume only](/blog/grok-bot-iphone-cannot-edit), [Grok Bot has no audit view yet](/blog/grok-bot-no-audit-log-yet), [How to set Grok Bot approvals so sends never slip through](/blog/how-to-set-grok-bot-approvals).

## Frequently Asked Questions

### Who is grok bot on call when you are a one-person company?

You are, if you wrote your name down, and you are not, if you left the line blank. Grok Bot does not page a rotation and does not assign an owner. All bots share one persistent cloud computer assigned to your user account, so the person who can open the Agent Computer is the person who can diagnose. Put your name, a Mac or Windows desk, and a pause-only phone rule into every outbound charter before the first overnight send. If you travel without a supported laptop, pause the send-capable bots before you sleep.

### Can I fix a misfire from iPhone at 3am?

You can pause. That is the documented pocket pair, with resume, and resume is the wrong 3am verb. Editing, history, testing, and deleting need a desktop. You will not rewrite a discount, open run records, or delete the bot from the lock screen. Pause so the job stops trying. Get to a Mac or a Windows desk. Read the proposed action. Check Sent. Deny the send if it is still sitting. There is no Linux desktop app and no Android app, so a phone-plus-Linux bag is still pause-only until you borrow a supported desk.

### Should I delete the bot when it almost sends at 3am?

No. Deleting the bot removes its profile, conversation, and routines. It does not unsend mail, sign out of Gmail, or erase files on the shared computer. It also destroys the twenty run records you may want in the morning. iPhone cannot delete anyway. Pause from the phone. Inventory at a desk. Deny the approval if the send is still sitting. Copy anything you need off the machine before you retire the bot on a calm afternoon, and revoke the mailbox session separately.

### How do I know the customer mail already left if there is no audit log?

Look at the destination, not the chat, and not a NOTES.md that claims success. Grok Bot has no audit view of bot actions yet. Open Sent, the ticket thread, or the CRM activity for that customer. One artifact means it left. Zero means you may still have a parked send to deny. Two means someone doubled it. You cannot finish that check from iPhone history, because history needs a desktop. Pause first, then inspect from the named desk, and write what you found into a file you own.
`,
};
