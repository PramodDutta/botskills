import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Cannot Send Email: Boundary, Scope, or a Broken Session',
  description:
    'Grok Bot cannot send email until you grant send, the session is alive, and the charter allows it. Day-one setups fail closed. A blocked send is often the product working.',
  date: '2026-08-27',
  category: 'Reference',
  content: `
# Grok Bot Cannot Send Email: Boundary, Scope, or a Broken Session

You asked Grok Bot to send the quote, Sent is empty, and the draft is sitting in a label you created on purpose. That is usually grok bot cannot send email as a working product, not as a crash. Three gates sit between a draft and a message that left: a charter that says never send, a consent screen that never granted send, and a Gmail session that is no longer alive. Day-one setups should fail closed.

This page is the failure decode, not [the click path that connects Gmail and refuses send](/blog/how-to-connect-gmail-to-grok-bot). If you have not connected yet, open that tutorial. If you already connected and nothing left, stay. Name the closed gate before you press Allow again.

## Blame three closed gates before you rewrite the prompt

"I cannot send email" is not a model failure or a reason to paste a longer instruction. It is a closed gate. Name it, then decide whether opening it is even the job.

Gate one is the charter. If standing instructions forbid send, reply, reply-all, and forward, the bot that refuses is doing the job you hired. [Inbox Triage](/bots/inbox-triage) sorts and drafts and never sends. Rewriting the prompt to "just send the obvious ones" is how you delete the product.

Gate two is the consent screen. Read, draft, and send are different intents. A screen that granted read and create-draft did not grant send. Asking the bot to send against that grant looks identical to gate one from Slack. Leave send off, or re-read the screen you actually Allowed.

Gate three is the session. All bots on a Grok Bot account share one persistent cloud computer assigned to you, not to a bot. Cookies, sessions, files, and CLI credentials live there. If Google invalidated the cookie after a password change, a 2FA reset, or a revoke, the bot cannot reach Gmail. That is a dead login, not a send problem.

A fourth picture looks the same from your phone and is not one of the three: the bot can send, and it is parked on an approval you did not see. That decode belongs in [how to set approvals so sends never slip](/blog/how-to-set-grok-bot-approvals) and in [the stall restart](/blog/grok-bot-stalled). Do not grant a wider Gmail bundle to clear an approval you have not opened.

There is no audit view of Bot actions yet. Open Sent, Drafts, and the label search on the desktop before you change a grant.

## Treat a never-send charter as the working product, not a defect

Most first mail bots are pasted from a catalog line that already forbids send. The [mail cleanup assistant](/bots/mail-cleanup-assistant) never sends, replies, or permanently deletes. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) never sends a message. If you pasted one of those boundaries, then asked the bot to mail a customer, you discovered the boundary, not a bug.

"Be careful with customers" is not a stop. "Never send, reply, reply-all, or forward. Drafts live in Gmail. A human hits Send" is a stop. The first version will send when a later prompt or an inbound message that looks like instructions asks it to. The second version still can, if Google already granted send. The charter is not enough on its own. It is enough to explain this morning's refusal.

If Drafts is growing and Sent is empty, the charter is the lead suspect. Do not delete the never-send paragraph. Grade the drafts. If they are wrong, tighten the job sentence. If they are right, you already captured the blank page. The send click is cheap, and it cannot be taken back.

A charter stop is the right day-one default even when you plan to widen later. [Least privilege for bots](/blog/least-privilege-bots) is the same idea: the minimum grant stays until a written rule and a month of grades say otherwise. Two unchanged drafts mean the text was good. They do not mean send should move.

If the charter is silent on send, you do not have a never-send bot. Paste a stop before you diagnose the connector.

## Read a missing send line on the Allow screen as a successful grant of the rest

The second cause is mechanical. You Allowed a bundle that had no send, or you refused a bundle that mixed create-draft with send and later Allowed a narrower screen. Google never handed the verb. The bot that now says it cannot send is reporting the grant.

Do not reprint OAuth scope strings from memory. Those names change. Read the screen in front of you, or the third-party access list Google shows this morning. If send is absent, the decode is finished.

| Intent on the grant | Mail can leave? | Day-one posture | What "cannot send" means |
|---|---|---|---|
| Read mail | No | Alias only | Can see. Must not deliver |
| Change labels or metadata | No | Only Bot/ labels you created | Filing worked. Delivery was never granted |
| Create drafts | No | After a never-send charter | Drafts are the product. Sent stays empty |
| Send, reply, reply-all, forward | Yes | Never on day one | If this row is missing, a refusal is correct |
| Filters, forwarding, vacation, trash, delete | Yes, by another door | Never | Treat as send. Do not add it to unblock a draft |

If create-draft and send arrived as one Allow, and you took it anyway, you granted send. A later refusal is then the charter or an approval park, not a missing scope. Do not go back and take a mixed bundle because this morning felt idle.

Hosted MCP sign-in tokens stay with Cursor's backend. A browser Gmail session lives on the computer. Assume the session is on the shared computer. That fact does not open send.

[Grok Bot and Gmail permissions](/blog/grok-bot-gmail) is the catalogue after you know the grant. This page only asks whether send is in it.

## Inspect the shared computer for a Gmail session that quietly died

The third cause is a login that used to work. Last week the bot labeled mail and left drafts. This week it asks you to sign in, or reports that it cannot send when it cannot open the mailbox. Password change, revoked third-party access, expired cookie, 2FA wall: none of those is a reason to add send.

Open the bot's screen on a Mac (Apple silicon or Intel) or on Windows (x64 or Arm64). The iPhone app (iOS 18+) can pause and resume. Editing, history, testing, and deleting still need desktop. Diagnosing from the couch is how you type a password into chat. There is no Linux desktop client, no Android app, and no iPad app. The agent runs on a managed Linux VM as a non-root user. That is not a Linux desktop you sit at.

A Google login wall or a 2FA field is gate three. Type the code on the cloud desktop, never into the transcript. A Gmail inbox that loads, with drafts present, is not gate three. Reconnect only after you have named a dead session, and only to the same read-and-draft grant. A reconnect that "just Accepts" the current bundle is how send arrives as a side effect.

Deleting the mail bot will not fix this. Each bot gets its own screen. Screens are not security boundaries. Do not use separate Bots as a security boundary. Deleting a bot deletes that bot's routines and screen, not cookies, sessions, or files. Re-auth or revoke at Google. [Shared-computer security](/blog/grok-bot-shared-computer-security) is the longer version.

[Lead Scout](/bots/lead-scout) on the same account can open a browser and find a mailbox it was never connected to. A dead session is an account fact. Re-auth is an account act.

## Use this page to decode a block, not to walk the first Gmail connect

The connect tutorial sits you at a desktop, points the first click at a dedicated alias, creates three empty Bot labels, reads the consent screen, pastes a never-send charter, plants mail, and stops when one labeled draft exists. It refuses send on purpose. If you follow it, grok bot cannot send email is the pass condition.

This page starts after that pass, or after a messy connect you already did. You have a mailbox in play. Something did not leave. Opening the connect tutorial now will walk you through labels you may already have. Opening this page during a first connect will skip the paper sheet.

The [pre-flight checklist](/blog/grok-bot-preflight-checklist) is the paper you fill before any Allow: whose inbox, what the bot may read, what it may never send, how you will know a run failed. If that sheet is blank, the next click is the sheet, not a wider grant.

Checklist first, connect second, decode when a send fails to leave. Approvals park send after you have granted it. If you have not granted it, there is nothing to park.

## Follow Mira from an angry Slack to a labeled draft that never left

Mira Chen runs Oakline, a three-person bookkeeping shop for agencies. Priya is the other founder. Mira connected clerk@oakline.studio on Tuesday, pasted the Inbox Triage never-send boundary, and told Priya the bot would "handle inbound." Thursday, Priya is on Slack: the bot does nothing. Harbor Media asked for a fee letter yesterday. Nobody sent one.

Mira types send the fee letter to Harbor Media. The bot refuses. She is about to Accept whatever Google shows, because Accept feels like unblocking.

She opens Gmail as clerk@ instead. Sent is empty of bot-authored mail. Drafts has fourteen items. label:Bot/Reply-Needed holds Harbor, with a fee letter that quotes last year's rate. Content miss, not send miss. Gate one: the charter. Gate two: Tuesday's Allow was read plus create-draft. Gate three is open: Gmail loaded. She edits the rate, hits Send, and leaves send closed.

Friday a Workspace password reset kills the cookie. The bot says it cannot send and cannot list labels. She opens the screen, names gate three, signs in on the cloud desktop, refuses any send line in the new prompt, and recovers drafts. Still no send.

| When | What Mira believes | What is true | What she does |
|---|---|---|---|
| Thu 09:12 | The bot does nothing | Fourteen drafts sit in Bot/Reply-Needed | Opens Gmail, not Connect |
| Thu 09:18 | A refusal means the product is broken | Charter plus missing send grant | Leaves both closed. Edits Harbor. Hits Send |
| Thu 09:40 | Send would have saved the account | Harbor got a wrong rate the bot invented | Tightens the rate rule. Still no send |
| Fri 10:05 | It cannot send again | Workspace reset killed the cookie | Re-auths read and draft only |
| Fri 10:20 | A second bot would isolate mail | Screens are not a security boundary | Does not create a sender bot |

The angry founder is usually looking at a working fail-closed setup. The dead session is the morning that is actually broken. Repair is a login, not a wider scope.

## Match each silent morning to the gate that actually closed it

Decode from the mailbox and the screen, not from the chat tone.

| What you see | Closed gate | What not to do | First move |
|---|---|---|---|
| Drafts growing, Sent empty, charter names never send | Charter | Delete the stop so it "finally works" | Grade drafts. Leave send closed |
| Drafts growing, Sent empty, charter silent, Allow had no send | Consent | Re-Allow a bundle that mixes send with draft | Keep the grant. Paste a stop |
| Login wall, 2FA, or empty Gmail on the preview | Session | Create a second bot for isolation | Re-auth the same intents. Type 2FA on the desktop |
| Drafts empty, labels empty, Gmail open | Job or labels | Grant send to deliver work that was never filed | Fix the job sentence and the Bot/ labels |
| Chat refusal, preview shows an ask to send | Approvals (lookalike) | Click Allow on a new Gmail screen | Open the approval. Deny send unless you meant it |
| Sent has a message you did not send | Grant already included send | Tighten only the prompt | Revoke the same hour. Read [the safety checklist](/blog/grok-bot-safety-checklist) |

Wrong labels are a charter problem. Unexpected send is a grant problem. A login wall is a session problem. Mixing those three will make you grant send while fourteen drafts already exist.

If the connector vanished overnight, re-read the consent screen. Bundles change. Confirm current behavior on the vendor's page that morning. Claude Code, SKILL.md, and CLAUDE.md compatibility is Grok Build, never Grok Bot.

## Paste a three-gate decode into standing instructions before you grant anything

If the bot cannot explain which gate is closed, you will open the wrong one. Paste this before you change Google. Change only the bracketed names.

\`\`\`text
You are Oakline's inbound clerk for [clerk@oakline.studio].

WHOSE INBOX
This alias only. Owner: Mira. Who else: Priya (Workspace admin).
You do not search, open, or mention hello@oakline.studio or anyone's personal Gmail.

DECODE BEFORE YOU ACT
If a human asks why you cannot send, answer with exactly one closed gate:
CHARTER: this file forbids send, reply, reply-all, and forward.
SCOPE: the mailbox grant does not include send. Say so and stop.
SESSION: Gmail is not signed in, or a login wall is up. Say SESSION dead and stop.
Do not ask for a wider grant. Do not suggest a second bot. Do not claim send is broken.

JOB
Apply Bot/Reply-Needed, Bot/File, or Bot/Unsure to INBOX mail since the last run.
Create a draft only for Bot/Reply-Needed.

NEVER SEND
Verbs you never perform: send, reply, reply-all, forward, create filters, add forwarding
addresses, change signatures, set vacation responder, trash, permanently delete.
Recipients you never contact: any address, including Priya's clients, Harbor Media, journalists.

DRAFTS
Drafts live in Gmail on this alias. A human opens Gmail and hits Send, or they do not.
You never hit Send. You never ask for standing approval to send later.

COOKIE FACT
This Gmail session lives on the account's one shared computer. Other bots can open it.
You do not sign into any second Google account.

FAILURE
After each run write /workspace/mail-grade.md with: time, messages seen, labels applied,
draft ids created, which gate you would report if asked why mail did not leave.
If you cannot write that file, the run failed.

BOUNDARY
Never send. Stop instead.
\`\`\`

Delivery never happens without a human. [Approvals and reversibility](/blog/grok-bot-approval-rules-reversibility) is the rule for anything that cannot be taken back. A send cannot. Pasting this decode does not grant send.

Do not schedule a routine until weekday mornings pass a planted score. A routine assigns a workflow to one Bot. Maximum 50 routines per Bot. The app keeps 20 most recent run records per routine. Deleting a Bot deletes its routines. Nothing is team-level.

## Answer the demand that a bot which will not send has automated nothing

The strongest objection is Priya's Slack: if it cannot send, it has automated nothing. Reviewing drafts is extra work. The whole point was to get Harbor the letter without Mira in the loop.

Writing the fee letter from a blank page takes Mira eight to twelve minutes, plus the rate lookup she still got wrong. Reading the draft takes forty seconds. The send click takes one. Fail closed keeps the writing and gives back the click. That is almost all of the work. It is not all of the feeling of work, because Priya cannot see a Sent row.

The cases where the objection wins are narrower than they sound. Transactional mail that must leave without a human (password resets, receipts, dunning) does not belong on this computer. There is no audit view. All bots share the machine. Use the mail system that already sends those messages.

"I will grant send and never use it" is the same grant. A later routine, a group chat, or an inbound message that looks like a command can use the right you took because Thursday felt idle.

"We will park it on approval" can be the right later design, after grades, on a written rule, with [approvals set so sends never slip](/blog/how-to-set-grok-bot-approvals). It is the wrong Thursday move when fourteen drafts already exist. An approval queue you will ignore is how send slips. Fail closed first. Park later, if ever.

If Oakline cannot exist for a week without automated send from hello@, Grok Bot is the wrong first control. Hire a person, or keep sending yourself.

## Plant one outbound test that must remain unsent after you ask it to go

Verification is allowed to fail. If you cannot name a check that would turn red, you are trusting chat.

Plant a message to the alias from an address you control. Let the bot label it Reply-Needed and create a draft. Then ask it to send that draft. The pass is a refusal or a no-op. The fail is a new row in Sent. Do this on the alias, on a desktop, never on hello@.

| Check | Pass | Fail | What the fail names |
|---|---|---|---|
| Ask the bot to send the planted id | Refusal or no-op. Sent unchanged | New Sent row from the alias | Send was granted, or the charter stop is theatre |
| Open label:Bot/Reply-Needed | Planted id in exactly one Bot/ label | Unlabeled, or two labels | Job sentence, not send |
| Open Drafts | A draft exists for Reply-Needed plants | Drafts empty, labels full | Draft grant or charter, still not send |
| Open the bot screen | Gmail inbox or a named login wall | Spinner with no URL | Stall or tool miss. Not this decode |
| Ask "which gate is closed" | CHARTER, SCOPE, or SESSION | A plan to grant send | Standing instructions are missing the decode block |

If the send ask produces a new Sent row, revoke at Google the same hour. Disconnect inside Grok Bot is not signed-out at Google. Do both. Search for Google's current third-party access page.

If the send ask produces an approval prompt, you already have send. Deny it. Then decide whether send should exist at all.

## Route the next hour to connect, preflight, or approvals by which gate failed

Once you have named the gate, the next click is a different document.

| Closed gate | Open this next | Leave closed |
|---|---|---|
| Charter never-send, and you still want that | Stay here, then [the draft-only tutorial](/blog/bot-that-never-sends) | A second Allow with send |
| No Gmail connect yet, or the alias was never set up | [Connect Gmail without handing over send](/blog/how-to-connect-gmail-to-grok-bot) | This decode, used as a how-to |
| Paper sheet blank (whose inbox, never-send verbs, failure signal) | [The pre-flight checklist](/blog/grok-bot-preflight-checklist) | Any Connect button |
| Send already granted, prompt sitting unseen | [Set approvals so sends never slip](/blog/how-to-set-grok-bot-approvals) | A wider Google bundle |
| Session dead after password, revoke, or 2FA | Re-auth read and draft. [Shared-computer security](/blog/grok-bot-shared-computer-security) | A new bot you hope will isolate the cookie |
| You thought you granted nothing, Sent already has bot mail | Revoke. [Safety checklist](/blog/grok-bot-safety-checklist) | Prompt-only "never do that again" |

[Churn Watch](/bots/churn-watch) never pings the customer. If that bot shares this account, it can open the Gmail cookie you just repaired. List every bot before you reconnect. A reconnect is an account event.

Teach-by-demonstration records up to ten minutes of a browser workflow, with no microphone audio, produces a draft skill, and is unavailable on iPhone. Do not demonstrate sending mail.

## Keep day-one mail fail-closed after you finish the decode

Naming the gate is not a reason to open it. The decode exists so you do not open send because you were angry.

Fail closed means: charter forbids send, Allow omitted send, session can die without mail leaving. That setup feels like grok bot cannot send email. It is supposed to.

Widen only on a written rule, after weekday grades you would defend to a cofounder, and only if the business needs unattended delivery. [Week-one mistakes](/blog/grok-bot-week-one-mistakes) already keep send off the first verb list. This page is what you read when someone treats that list as a defect.

Unchanged drafts mean a human agreed with the text. They do not mean send should move. Do not add Calendar, Drive, or a second Gmail to make send feel complete. Do not create a second Grok Bot named sender while this one stays drafter. That is two screens on the same machine.

If you do widen, duplicate the stop in approvals. Park send, pay, delete, and publish. Let drafts finish. An approval does not unsend.

When the job is over, revoke Google first, clear the Gmail session, remove leftover files, then delete the profile if you are retiring the bot. [Delete a Grok Bot without leaving logins behind](/blog/delete-a-grok-bot-safely) is the teardown order.

## Name the inboxes where a blocked send is the wrong first diagnosis

This decode assumes inbound triage and reply drafting on an alias. It breaks in a few named places. Use a different page, or do not use Grok Bot, instead of prying send open.

If unlabeled mail is piling and Drafts is empty, you do not have a send failure. You have a job failure, a missing label, or a session that cannot read. Granting send will not file.

If hello@ is the first mailbox you connected, the angry morning may be a blast-radius problem. hello@ that three people have used since incorporation holds password resets, payroll PDFs, and investor threads. A refusal to send is still good. The next click is an alias and the pre-flight sheet, not send.

If the business is receipting, dunning, or password mail that must leave unattended, fail closed on Grok Bot is the right local answer and the wrong global architecture. Keep that mail in the system that already sends it. Point [the draft-only bot](/blog/bot-that-never-sends) at threads that need judgment.

If the preview is a still photo mid-job, you may have a stall, not a closed send gate. [Restart without doubling the work](/blog/grok-bot-stalled) is the protocol. Do not retype "send it" as a restart.

If two founders share the Grok Bot account, they share the computer. Priya can open Mira's Gmail cookie. A blocked send does not block Priya's browser. Isolation is a second account, or no Gmail on this computer, never a second bot.

**Keep reading:** [How to connect Gmail without handing over send](/blog/how-to-connect-gmail-to-grok-bot) is the click path this decode is not, [the pre-flight checklist](/blog/grok-bot-preflight-checklist) is the paper you fill before any Allow, and [how to set approvals](/blog/how-to-set-grok-bot-approvals) is what you park if send already exists.

## Frequently Asked Questions

### Why does Grok Bot refuse to send after I already connected Gmail?

Connecting Gmail is not granting send. A day-one connect is supposed to hand over read and draft, paste a never-send charter, and leave Sent empty. If drafts are piling under a Bot/ label, the refusal is usually that charter, or a consent screen that never included send. Open Gmail on the desktop and look at Sent, Drafts, and the label search before you press Allow again. A login wall is a different failure: the session died, and the repair is re-auth of the same intents, not a wider bundle.

### How do I tell a never-send charter from a dead Gmail session?

Open the bot screen on a Mac or Windows machine. If Gmail loads and Drafts contains work, the session is alive. Read the standing instructions. If they forbid send, reply, reply-all, and forward, you are looking at the charter. If the preview is a Google login, a 2FA field, or an empty mailbox the bot used to reach, the session is dead. Type any code on the cloud desktop, never into chat. Reconnect only to read and draft. A second bot will not isolate the cookie, because every bot on the account shares one computer.

### Should I grant send so the bot finally does something?

No on day one, and usually not later either. Fourteen drafts in Bot/Reply-Needed are the bot doing the expensive part. Granting send because a cofounder cannot see a Sent row trades a reversible paragraph for mail that cannot be taken back. There is no audit view of Bot actions yet. If create-draft arrives bundled with send, refuse the bundle rather than take send as a convenience. Transactional mail that must leave unattended belongs in the system that already sends it, not on this shared computer.

### Does deleting the mail bot stop Grok Bot from sending later?

Deleting the bot deletes that bot's routines and its screen. It does not revoke Google, and it does not clear cookies, sessions, or files on the shared computer. If send was never granted, deletion does not change much except the roster. If send was granted, revoke at Google first, clear the Gmail session, remove leftover files, then delete the profile. A new bot on the same account can open a leftover mailbox login. Screens are not a security boundary. Fail closed by grant and by charter, not by hoping delete will mop up.
`,
};
