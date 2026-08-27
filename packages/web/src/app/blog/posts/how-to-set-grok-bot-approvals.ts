import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Set Grok Bot Approvals So Sends Never Slip Through',
  description:
    'Grok Bot approvals setup belongs on irreversible actions: send, pay, delete, publish. Reversible drafts should not wait in a queue you will ignore.',
  date: '2026-08-27',
  category: 'Tutorial',
  content: `
# How to Set Grok Bot Approvals So Sends Never Slip Through

A grok bot approvals setup fails in the afternoon, not at install: the send
prompt looks identical to the draft prompts you stopped reading, and it is
waiting on a desktop you are not sitting at.

This is the walkthrough, not the principle. Which actions require you. Where
the prompt appears. What to do after you approved a login every other bot can
now open.

[Draw the approval line on reversibility](/blog/grok-bot-approval-rules-reversibility)
is why send is not a bulk rename. [Restart a stalled job without doubling the
work](/blog/grok-bot-stalled) is what you do when you missed the prompt. Here
you park send, pay, delete, and publish; let drafts finish; review on a Mac
or Windows desk; treat a mailbox login as a house key.

Do not memorize button names from this page. Match the current desktop
wording to the rule.

## Park only send, pay, delete, and publish, then let every reversible draft finish

Four verbs leave the building. Send, pay, delete, and publish wait. Drafts,
labels, research notes, and files on your own disk finish without you.

If you park the drafts too, you will ignore the queue. The send you cared
about will sit next to "file this PDF," and muscle memory will clear both.

[Inbox Triage](/bots/inbox-triage) sorts and drafts and never sends.
[Lead Scout](/bots/lead-scout) scores public signals and never contacts
anyone. Make those lines true in the runtime, not only in the charter.

| Action | Can you put the world back | Requires you | Finishes alone |
|---|---|---|---|
| Send mail, a DM, a form, or a public reply | No | Yes | Never |
| Pay, subscribe, or name a price to a counterparty | No. There is no Grok Bot spend cap | Yes | Never |
| Delete mail, files, rows, or branches that are not named junk | No | Yes | Never |
| Publish a post, page, or release with a public URL | No | Yes | Never |
| Draft a reply or a first-touch note to disk | Yes, it never left | No | Yes |
| Label, file, or sort inside your own tools | Usually yes | No | Yes |
| Research a public page and write notes | Yes | No | Yes |
| Sign into a mailbox or a payment tool | Session is shared across bots | Yes, then treat it as house-wide | Never as a private grant |

The last row is the trap. A login feels like a one-bot event because you
clicked it on one screen. It is not. Accepting terms belongs with the four
verbs when a dialog asks you to agree as yourself. For the observation
questions, use the reversibility article.

## Watch the prompt on the desktop computer, because iPhone is not an edit surface

Grok Bot runs on a persistent cloud computer assigned to your user account,
not to a bot. Phone and laptop are remotes.

Supported clients: macOS (Apple silicon and Intel), Windows (x64 and Arm64),
and iPhone on iOS 18 or later. There is no Linux desktop app, no Android app,
and no iPad app. On iPhone you can pause and resume only. Editing, history,
testing, and deleting need desktop. Teach by demonstration is unavailable on
iPhone.

A send prompt is a decision about a proposed action. Read it, compare it to
the draft on disk, and approve or deny that one step on the Mac or Windows
client. iPhone is not a reliable edit surface.

[Grok Bot on iPhone](/blog/grok-bot-iphone-app) is the companion split.
[The supported platforms list](/blog/grok-bot-supported-platforms) is the
machine list. Do not build a grok bot approvals setup you can only operate
from a commute.

| Surface | What you can do with an approval | What you cannot do |
|---|---|---|
| Mac (Apple silicon or Intel) | Read the proposed action, approve or deny, change which verbs wait | Nothing this job needs |
| Windows (x64 or Arm64) | The same as Mac | The same |
| iPhone, iOS 18+ | Pause and resume a routine | Edit the rule, open history, test, delete, teach by demonstration |
| Chat transcript | Read commentary the bot chose to write | Treat chat as the prompt. The ask sits on the screen |
| Linux desktop, Android, or iPad | Not a Grok Bot client | Do not plan to review sends here |

Closing the laptop does not pause the cloud computer. A send sitting on ask
stays unsent. The failure is assuming the job died, typing start over from
the phone, and getting a second send. That restart belongs on the stalled
page. Review happens at a desk. If you cannot reach one and a send is
sitting, pause. Pause is not rewrite.

## Match today's desktop copy instead of memorizing last week's button names

I am not going to name a toggle that might already have been relabelled. A
setup article that invents UI copy becomes a lie the next time the desktop
ships. The rule is stable even when the labels move.

Require you before send, pay, delete, or publish. Do not require you before
draft, label, research, or writing to your own disk. An approval controls
the proposed action. It does not reverse work already completed. It does not
mean the bot may do that class of thing forever.

Open the current desktop client. Find the controls that decide whether a
class of action waits. Match those controls to the four verbs. If you cannot
find a control for a verb, write the verb into the charter as a hard stop,
and keep the connection narrow enough that the verb is hard to reach. A
charter is interpreted. A missing connection cannot be misused. Use both.

Require-style rules should beat allow-style rules wherever the product
offers both. Verify that on your own account. A team-level ceiling on local
execution is announced, not shipped. Set the account you have.

When the prompt appears, read the proposed action. Approve one described
step. Deny if the description is vague. Make the bot write the recipient,
the subject, and the exact body, then ask again.

## Empty the queue of labels and file moves so the send ask stays visible

If overnight labelling generates forty asks, you will clear them in a block.
The forty-first will be a send. You will clear that too. The grok bot
approvals setup failed because you asked a human to classify junk at the
same rate as a human decides whether a stranger gets mail.

Do not park reversible work "to be safe." Safe is the opposite.
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) holds unsubscribe and
filing lists because those verbs are not labelling. Labelling can finish.
Unsubscribe waits.

Batch the irreversible parks. One list at the end of a run, with recipient,
artifact, and why it parked, gets read. Six interruptions across two hours
get a yes. Write that batching into the charter below. Make the runtime
prompt fire rarely, and only for the four verbs.

[Chief of Staff Briefing](/bots/chief-of-staff-briefing) should produce a
packet you read, not a stream of fetch asks.
[Standup Scribe](/bots/standup-scribe) writes an internal draft. If either
bot is prompting you about file moves, you over-gated.

## Build the sales draft bot and the research bot as two jobs, then assume they share logins

xAI's sales outbound example is a review list: research, prioritize, draft,
stop. The catalog version is
[a sales outbound bot that never sends the first message](/blog/grok-bot-sales-outbound).
A second bot that only researches is a good split of attention. It is a
terrible split of credentials.

All bots on the account share one persistent cloud computer. Each bot gets
its own screen. Do not use separate bots as a security boundary. Screens are
work surfaces, not security boundaries. Cookies, sessions, files, and
command-line credentials are shared. Deleting a bot does not remove those
files or sessions.

So: sales draft bot, send requires approval. Research bot still must not
inherit a sent-mail session you did not intend. Naming them differently does
not sign the research bot out of Gmail.

[What one shared computer means](/blog/grok-bot-shared-computer-security) is
the architecture. [Least privilege for bots](/blog/least-privilege-bots) is
the connection discipline. After you approve a login, you have approved it
for the house.

Hosted MCP sign-in tokens stay with Cursor's backend and are not stored on
the computer. Browser logins you completed on the cloud desktop are on the
computer. Plan for the browser path.

[The safety checklist](/blog/grok-bot-safety-checklist) is the pre-flight
before production mail. [Grok Bot and Gmail](/blog/grok-bot-gmail) is the
scope order: read and draft before anything that can send.

## Follow Dana from a sourced pack to a send that still needs her

Dana sells a scheduling tool to clinic ops leads. She wants overnight
research and a morning of drafts she can send. She creates two bots.

Account Research reads public clinic pages, writes a sourced sheet, and
stops. Outbound Draft takes ten names, writes one first-touch draft each,
and stops before send. She copies the never-send shape from the sales
outbound article and from [Lead Scout](/bots/lead-scout). She also connects
Gmail to Outbound Draft for tone. The desktop asks her to complete a login.
She approves it. The session now exists on the shared computer.

| Time | Who is acting | What should happen | What must not happen |
|---|---|---|---|
| 07:10 | Account Research | Score public pages into a sourced sheet | Open Gmail, send, or reuse a mail tab |
| 07:40 | Outbound Draft | Write six sourced drafts to disk | Send, enroll, or treat yesterday's yes as standing permission |
| 08:05 | Dana at a Mac | Read two drafts, edit one, approve one described send | Approve from the train without opening the bot screen |
| 08:20 | Shared computer | Gmail cookie still present | Account Research mailing to "confirm a fact" |
| 11:00 | Dana notices a Gmail tab on the research screen | Sign out. Park send on every bot that can see mail | Assume the other screen was a vault |

At 08:05 the setup is working if the only ask is that one send, with a
recipient, subject, and body Dana can compare to the file on disk. Twelve
asks about saving drafts will train her to stop reading.

At 11:00 it is failing even if send is still parked on Outbound Draft.
Account Research can see a mailbox she did not mean it to hold. A parked
send on one bot is not a parked send on a sibling that inherited the cookie.

Sign Gmail out on the cloud desktop. Confirm Account Research cannot load a
thread without a login she will refuse. Keep send parked on Outbound Draft.
If she still wants tone from sent mail, export a corpus to a folder. Do not
delete Account Research to "clear the login." Deleting a bot does not remove
sessions.

## Treat a login you already approved as a house key sitting on the shared computer

People talk about approvals as if they only cover sends. Logins are
approvals too. You allowed a proposed action: complete this sign-in. That
action completed. The cookie remains. Signing out is a new action you take
on purpose.

Other bots inherit whatever the browser on that computer now holds: cookies,
a logged-in Gmail, a CRM, a CLI token. They also inherit files.
[Churn Watch](/bots/churn-watch) reading a revenue export you left in a
folder is a file problem. Opening Gmail because you logged it in for
Outbound Draft is a session problem. Both happen on the same computer.

There is no audit view of bot actions yet. You will not get "Bot B used Bot
A's cookie at 11:04." You will get whatever the bot writes, plus the screen
and sent mail.

If you approved a login you now regret: sign out on the cloud desktop,
revoke the session on the vendor's security page if it lists devices, and
narrow or disconnect the plugin. Then ask the research bot to email a clinic
to confirm hours, and confirm it cannot send and cannot open the mailbox.

Do not paste a 2FA code into chat. Type it on the cloud desktop, or deny the
step.

## Close the mailbox session the research bot should never have inherited

Signing out is the control that actually shrinks the house key. Charter text
that says "Account Research never opens mail" is necessary and insufficient.

Sit at desktop. Open the research bot's screen. If Gmail is already a tab,
that is your proof. Sign out until no bot can load the inbox without a fresh
challenge. Then confirm Outbound Draft can still draft to disk without
sending. If drafting required the live session, replace it with files: a
tone folder, a redacted export, a style note Dana wrote herself.

If the vendor lets you grant read and draft without send, prefer that grant
on the sales bot too. The inherited session is still a privacy leak.
[The plain definition of a Grok Bot](/blog/what-is-a-grok-bot) separates the
chat you type from the computer that keeps the cookies.

A dedicated mailbox for bots is better than signing personal Gmail into the
house. Confirm current options on the vendor's page. The session is
account-wide, so the mailbox should be one you are willing to share with
every bot you will ever create here.

If you cannot get a dedicated mailbox yet, do not log production mail in.
Draft from files. Send yourself, from your own client, after you read the
draft.

## Duplicate the stop in the charter so a skipped prompt is not the only control

Runtime parks fail open when you cannot find the control, when copy
changed, or when you approved from muscle memory. The charter is the second
stop. It is weaker (it is interpreted) and still required.

Write the four parks as missing verbs. "Be careful with customers" is not a
stop. "You never send, reply, forward, or enroll. You never pay. You never
delete mail or CRM rows. You never publish. You write drafts to disk and
you stop" is a stop.

Write what an approval covers: this proposed action, this run, not the
class, not tomorrow, not the sibling bot.

Write the shared computer in. "A mailbox login on this account is a login
every bot can open. After a mail login, sign out if the next job is
research. Never claim a second bot is a security boundary."

Write the batching line. "Do not ask about drafts, labels, or notes. Ask
once, at the end, with a list, and only for send, pay, delete, or publish."

Keep the connection aligned. A charter that forbids send plus a Gmail grant
that includes send is a debate the model will lose. No send scope is a wall.

## Paste this sales-desk approval block and swap only the names

This block is for Outbound Draft. Account Research gets a shorter sibling
block with mail forbidden at the verb and at the session. Change the
bracketed names. Keep the parks.

\`\`\`text
You are Outbound Draft, a first-touch desk for [Dana].

// JOB
Take the account list I paste. For each name, write one sourced
draft to /workspace/outbound/drafts/. Every claim has a source
line. If you cannot source it, write not found and skip. Stop
before anyone outside the company can read a word.

// REQUIRE ME
Never send, reply, forward, CC, BCC, or enroll. Never pay or
name a price to a counterparty. Never delete mail, files, or
CRM rows. Never publish. Never accept terms. Drafts, labels
inside [named scratch label], and notes to disk finish without
asking.

Match the current desktop copy to those verbs. If a control asks
whether a class of action may proceed, send, pay, delete, and
publish wait for me. Reversible drafting does not wait.

// WHAT AN APPROVAL COVERS
One proposed action, described with recipient, subject, and exact
body, this run only. Not the class. Not tomorrow. Not Account
Research. If you cannot describe the artifact, do not ask, and
do not send.

// SHARED COMPUTER
This account has one cloud computer. A mailbox login I approve
for you is a login every other bot can open. After a mail login,
sign out when the next job is research. Never tell me that a
second bot is a security boundary. Screens are work surfaces.

// SIBLING
Account Research reads public pages only. It never opens mail.
If you see its sheet, you may draft from sourced rows. You still
do not send.

// HOW TO PARK
If a send, pay, delete, or publish is next, stop before starting.
Write the target, the exact artifact, why it parked, and what you
will do if I say no. Batch parks into one list at the end of the
run. Continue the reversible work without waiting.
\`\`\`

Paste a second charter into Account Research that repeats the never-open-mail
line. If you add "just check sent mail for tone" to the research bot, you
are rebuilding the house key. Put tone in a folder instead.

## Reconstruct a slipped send from the session and the disk, because there is no audit view

When a send has already slipped, stop rewriting the charter. Find out
whether the mail left, and whether a sibling used the session. There is no
audit view. Chat is not a log. The disk, the bot screen, and sent mail are
the record.

| Symptom | What likely happened | First move |
|---|---|---|
| A recipient has mail you do not remember sending | A send prompt was approved, or send was never parked | Search sent mail. Do not restart the job |
| The draft file is gone and the queue is empty | It sent, or it was moved | Check sent, drafts, and the folder before you retype |
| Research bot says it emailed them to confirm a fact | Inherited session plus a charter that did not hold | Sign out. Read sent. Deny any open ask |
| You approved something on a phone and cannot recall what | Phone is not the review surface | Open desktop. Inspect the screen. Treat the action as possibly done |
| Chat says waiting and nothing is in sent | The prompt is sitting. This is a stall, not a send | Do not type start over. Open the screen. Use the stalled restart |

If the mail left, you cannot unsend it with a deny. Deny stops what is next.
Fix the relationship in person if it matters. Then park send, empty the
reversible queue, and sign out the inherited session.

If the mail did not leave, still run the verification checks. Luck is not a
grok bot approvals setup.

[When a job sits silent](/blog/grok-bot-stalled) is the restart protocol:
inventory files, name the last checkpoint, resume the next step, never
re-run a send.

## Answer the operator who says two bots already isolate send from research

The strongest objection is not "approvals are slow." It is "I already split
the jobs, so the research bot cannot send." It sounds like engineering. It
is the wrong model for this product.

Separate bots are not a security boundary. The computer is assigned to the
user. The research bot sits on the same machine, with the same cookies. A
sales draft bot with send parked is a parked send on that bot's current
step. It is not a parked send on a sibling that inherited Gmail and decided
a "quick confirmation" was research.

If your isolation story needs a second computer, you do not have one. On
the account you have, isolation is: narrow connections, sign out of sessions
the other jobs must not hold, park the four verbs on every bot that can
reach them, and keep research off mail entirely.

The objection wins one narrow case. If the research bot has no browser, no
mail plugin, no sendable draft on disk, and you never logged mail into the
house, then yes, it cannot send. That is least privilege, not two names.
The moment you approve a Gmail login for the sales bot, that case is over
until you sign out.

Two bots remain a good idea for attention. Dana should not mash research and
outreach into one charter. She should mash them even less into one session.

## Fail a live send on purpose so you know the gate still fires

An untested park is a paragraph you liked. On the day you install the grok
bot approvals setup, fail a send on purpose. Use a recipient you control.

| Check | Pass | Fail |
|---|---|---|
| Test send to yourself | Parks with recipient, subject, and exact body | Mail arrives, or the ask is a bare yes or no |
| Research bot told to ping them | Refuses or parks. No mail tab | Opens Gmail, drafts, or sends |
| After you sign out of mail | Cannot read a thread without a new login you refuse | Inbox still loads as you |
| Overnight reversible work | Drafts and labels finished with zero asks | Morning queue is junk prompts hiding a send |
| iPhone during a parked send | Pause works. You do not edit the rule from the phone | You change who may send on a surface that cannot edit |

Run the fail case once. If you cannot make it fail when you ask it to send,
you do not yet know whether it will park when you are not watching.

Routines do not change the parks. A routine assigns a workflow to one bot.
Max 50 routines per bot. The app keeps 20 most recent run records per
routine. Deleting the bot deletes the routines and does not retract the
mail.

## Pause the run from iPhone, then change the approval rule only at a desk

iPhone: pause or resume. That is the documented pair. If a send is sitting
and you cannot see the bot screen properly, pause. Get to a Mac or Windows
desk. Open the screen. Read the proposed action. Approve or deny that one
step. Change which verbs wait on desktop too.

Teach by demonstration is unavailable on iPhone. Approvals are the four
parks, the session hygiene, and the charter block, not a recorded click
path.

If Linux is your only machine, you do not have a Grok Bot desktop client.
The FAQ answers that with a flat no. Borrow a supported desk, or wait.
Reviewing sends is not an iPad job either.

Once the parks are in, a real ask should be obvious when you sit down.
That is the point of a grok bot approvals setup that belongs on
irreversible actions and nowhere else.

**Keep reading:** [Draw the approval line on reversibility, not task size](/blog/grok-bot-approval-rules-reversibility), [restart a stalled job without doubling the work](/blog/grok-bot-stalled), and [a sales outbound bot that never sends the first message](/blog/grok-bot-sales-outbound).

## Frequently Asked Questions

### Does requiring approval on send stop other bots from using the same mailbox?

No. All bots on an account share one persistent cloud computer assigned to
the user, not to a bot. Each bot gets its own screen, and screens are not
security boundaries. Cookies, sessions, files, and command-line credentials
are shared. If you approved a mailbox login for the sales draft bot, the
research bot can open that session. Deleting a bot does not remove it. Sign
out on the shared computer, park send on every bot that can see mail, and
keep research off the mailbox. Two names are labels, not walls.

### Can I finish Grok Bot approvals setup from iPhone during a commute?

On iPhone you can pause and resume only. Editing, history, testing, and
deleting need a Mac or Windows desktop. An approval for a send is a decision
about a proposed action, and the copy you must match lives on that desktop.
If a send is sitting and you cannot reach a desk, pause so the run does not
keep trying a click you have not read. Do not treat pause as a rewrite of
the rule. Change which verbs require you when you are at a supported desk,
then fail a test send on purpose to prove the park still fires.

### What should I do after I already approved a Gmail login I did not mean to share?

Treat the session as account-wide the moment it exists. Open the cloud
desktop and sign out of that mailbox in the browser. Confirm the research
bot cannot load a thread without a fresh login you refuse. Keep send parked
on the sales draft bot. If you still want tone from sent mail, copy a small
corpus into a folder instead of leaving a live inbox on the house computer.
Revoke the vendor session if the security page lists it. Deleting the
research bot will not clean the login.

### If I ignore an approval, does the send go out later by itself?

An approval controls the proposed action. It does not reverse work already
done, and it does not complete the action without you. A send sitting on ask
stays unsent until you approve, deny, or stop the run. The failure is not a
delayed auto-send. The failure is missing the prompt, assuming the job died,
and restarting in a way that sends twice, or approving from muscle memory
because drafts filled the queue. Open the screen before you type start over,
and read the stalled restart page before you replay the original prompt.
`,
};
