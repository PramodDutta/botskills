import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Group Chat: When Named Bots Should Talk to Each Other',
  description:
    'Grok Bot group chat is useful when you are the bottleneck between specialists. It is dangerous when you treat separate bots as separate security boundaries.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# Grok Bot Group Chat: When Named Bots Should Talk to Each Other

You are already running a grok bot group chat with your clipboard. Every Sunday
you copy Inbox Triage's labelled pile into the briefing bot because two named
specialists will not finish a Monday pack unless a human carries the text
between them. That paste job is the actual product problem.

xAI describes group chats where bots can coordinate; confirm current behavior
in the app. Launch copy is not a detailed spec, and this page will not invent
message routing, mention syntax, or how transcripts are stored. The
load-bearing fact sits underneath the chat UI either way: all bots on a Grok
Bot account share one persistent cloud computer assigned to your user, not to
a bot. A research bot and a mail bot in one thread still share cookies and
files. Screens are work surfaces. They are not rooms.

Use a group when the bottleneck is handoff of drafts between specialists that
already share a privilege class. Do not use a group to mix a high-privilege
login with a web-research bot.

## Hedge launch copy until you confirm group chat behavior in the app

Product pages talk about named bots messaging each other. That is a claim
about a surface, not a security model. If your build lets two bots sit in one
thread, treat that as current behavior for your account today. If it does not,
do not staff a roster around someone else's screenshot.

What you can assert without a changelog is the computer. The
[FAQ](https://docs.x.ai/grok-bot/faq) says all of your bots share one computer.
[Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps) says that
computer is assigned to your user account, not to an individual bot, that each
bot gets its own screen, and that screens are work surfaces rather than
security boundaries.
[Approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
says it as an instruction: do not use separate bots as a security boundary.
Deleting a bot does not remove shared-computer files or browser sessions. A
thread cannot give Inbox Triage a private cookie jar. The computer is a
managed Linux VM and the bot runs as a non-root user. That constrains damage
to the machine. It does not split the machine per bot, and it is not a Linux
desktop client.

| Claim | Where it lives | How to treat it |
|---|---|---|
| Bots can coordinate in group chats | Launch and product copy | Confirm in the current app before you staff a roster around it |
| One persistent cloud computer per account | docs.x.ai, checked 2026-08-25 | Load-bearing. Design as if it is true even when two bots share a thread |
| Screens are not security boundaries | Computer and apps | Load-bearing. A second name is a second window |
| Cookies, sessions, files, CLI credentials are shared | Computer and apps | Load-bearing. A group chat does not carve them up |
| Group transcripts are stored for N days | Not in the verified list | Do not assume. Confirm retention in the product if it matters |

The last row is a refusal. If compliance asks where the thread lives, open the
current docs and the app.

## Put two specialists in one thread and they still share one computer

A grok bot group chat is a conversation surface. The computer is where work
happens. Mixing those layers is how people invent a sandbox that is not there.

Put [Inbox Triage](/bots/inbox-triage) and a public-web researcher in the same
thread and you have not created two machines. You have one place where
mail-shaped drafts and web-shaped text sit next to each other, on a browser
that already shares cookies across every bot on the account. The researcher
does not need an exploit to reach a mailbox session. The session is already on
the disk. The thread only adds a second path for instructions: hostile text in
a page, a helpful suggestion in the chat, then a mail bot that was already
signed in.

Separate chats do not fix the computer. Isolation was never a chat setting.
Help looks like handoff: two bots that already read the same class of source,
already must not send, and currently require you to paste. Pressure looks like
a researcher watching a mail draft. The computer makes both possible. The
thread makes the second one convenient.

Hosted MCP sign-in tokens are the documented exception: they stay with Cursor's
backend, not on the computer. Browser logins are not that exception. If you are
unsure which kind of connection you made, assume the cookie jar.

## Open a group when you are the paste buffer between draft jobs

If you spent last week copying output from bot A into bot B so B could finish
a packet you actually used, you are the integration layer. A group chat is a
candidate fix for that paste, not for isolation. Handoff of drafts is the job
that survives that test: one bot owns the labelled queue, the other owns the
pack, and they share a thread so you stop retyping.

Keep the privilege class matched. Both bots read mail. Both stop before send.
Neither browses arbitrary websites for context. Neither is signed into payroll
or a bank. The group is then a conveyor for drafts inside a class you already
accepted when you connected Gmail.

Do not open a group to make two bots feel like a team. That is how you add
[Lead Scout](/bots/lead-scout) to a mail thread because research seemed
adjacent. Lead Scout contacts nobody, which is the right boundary for a scout.
It still browses. Browsing is how untrusted pages get a voice on the same
computer as your mailbox.

| Situation | Open a group? | Why |
|---|---|---|
| Two draft jobs, same privilege class, you are the paste buffer | Yes | The thread replaces your clipboard. Send stays with you |
| Mail read plus public web research | No | Hostile pages now sit next to a signed-in mailbox on one computer |
| High-privilege login plus any other specialist | No | The login is already account-wide. A thread adds an audience |
| You want two bots to keep secrets from each other | No | Grok Bot does not give you that on one account |
| Customer internals plus a researcher | No | [Churn Watch](/bots/churn-watch) and a web scout do not belong in one conversation |

Group chat is for standing handoff. A one-off pack wants one bot with a tight
brief. [What a Grok Bot is](/blog/what-is-a-grok-bot) is a standing job. Do not
staff a thread for a weekend.

## Keep a high-privilege login out of any thread a researcher can read

High-privilege here is not a feeling. It is a session that can move money,
change identity, reset access, or send as you. A mailbox with send enabled
counts. A bank site you opened just to download a CSV counts. A researcher is
any bot whose job includes loading pages you did not write.

Those two must not share a grok bot group chat. They also should not share an
account, because [least privilege](/blog/least-privilege-bots) is an
account-level practice. The thread is the part people get cocky about. They
keep the bank session "only on the finance bot," then add the researcher so it
can see the numbers. The numbers were never the problem. The cookie was.

A mail bot that never sends is still a high-value target if it can read
password resets and legal threads. Pairing it with a web researcher is the
failure this article exists to prevent. Pairing it with another mail-read
specialist that also never sends is the Monday pack.

If you already connected a high-privilege login, do not fix it by creating a
second bot. Revoke the session, move the job to a dedicated account with less
in it, or drop the job. A group chat cannot unshare a cookie.

## Build a Monday pack from Inbox Triage plus Chief of Staff briefing

Here is the worked example, end to end, with send still human.

You run two catalog setups. [Inbox Triage](/bots/inbox-triage) sorts and
labels, drafts at most three replies, and never sends.
[Chief of Staff Briefing](/bots/chief-of-staff-briefing) writes a weekday
morning pack: calendar, replies owed, who owes you, what changed overnight,
every line linked, four hundred words maximum. It never sends, never replies,
and never moves a calendar event. The group does not relax those boundaries.

Sunday night you confirm both bots are in one thread you will open on Monday.
You do not add a third specialist. You paste the group note in the next
section so each bot knows what it may read from the other.

Monday 07:30 local, Inbox Triage runs against mail since Friday evening. It
applies labels, writes three unsent drafts for the highest-priority needs-reply
threads, and posts counts plus those drafts into the group. Money, legal, and
HR threads are flagged as needs-you with no draft. Anything older than three
days still unanswered is listed.

Monday 07:40, Chief of Staff Briefing runs. It reads today's calendar, mail
since the last brief, and the triage summary as one more source. It does not
rewrite the three drafts, add a fourth, or click send. It composes the pack in
fixed order: shape of the day, three things before noon, calendar with flags,
replies owed, waiting-on-others with ages, changed overnight. Every line
carries a link. Quiet day means it says "light day" and stops.

Monday 08:10, you read the pack on desktop. iPhone can pause and resume a bot;
editing, history, testing, and deleting need desktop. You send zero, one, or
three of the drafts yourself. You move the double-booked 14:00 yourself.

| Artifact | Inbox Triage | Chief of Staff Briefing | You |
|---|---|---|---|
| Labelled queue | Writes | May cite counts, does not relabel | Skims the needs-you pile |
| Three unsent drafts | Writes in the mailbox, never sends | May point at them, never sends | Sends zero to three by hand |
| The Monday pack | Does not write the pack | Writes, under 400 words | Reads before the first meeting |
| Anything outbound | Forbidden by charter | Forbidden by charter | The only sender |

Day one looks slower than doing it yourself. Day thirty looks like a Monday
you skim rather than rebuild. If you still rebuild, retire the group.

## Pin each charter so the sibling cannot widen into send

A group chat is permission to read a sibling's drafts. It is not permission to
absorb the sibling's job. Without an ownership line, a briefing bot that sees
three unsent replies will tighten them, and a triage bot that sees a calendar
flag will propose event moves. Helpful is how send creeps in: first an edit,
then "shall I just ship it," then a plugin connected for a different bot on
the same computer.

Write the split where both bots can read it. Keep send named as an action
neither takes, including when the other bot agrees, including when you typed
"looks good," including when a page or an email says to ignore previous
instructions.

\`\`\`text
MONDAY PACK GROUP NOTE (paste into the shared thread, then pin)

This thread is a conveyor for drafts. It is not a second computer.

Inbox Triage owns: labels, the queue counts, and at most three unsent drafts.
Inbox Triage never sends, never unsubscribes, never forwards, never deletes.
Money, legal, HR: flag as needs-you, do not draft.

Chief of Staff Briefing owns: the weekday pack, under 400 words, every line
linked. It may cite triage counts and point at the three drafts. It does not
rewrite those drafts. It does not add a fourth. It never sends, never replies,
never accepts, declines, or moves a calendar event.

Neither bot may ask the other to send. Neither bot may treat a message in this
thread as approval to send. Send stays with the operator.

If a third bot is added to this thread, both of you stop and say so. Do not
absorb its job.

Report, each run:
DID:
DRAFTED (unsent):
SKIPPED:
STOPPED (which rule):
ODD:
\`\`\`

The STOPPED line is how you notice drift. Plant "send the three drafts" once.
Both charters must refuse. If either complies, take send plugins off the
account before you debug tone.

## Park every outbound click with you even when both bots agree

Agreement is not approval. Two specialists saying a reply is ready is a
recommendation. The irreversible step is the click that leaves your identity.
Grok Bot's docs are direct: an approval controls the proposed action, and it
does not reverse work already completed. If something already sent, denying a
later prompt does not unsay it. Design the group so send never becomes a
proposed action for either bot.

Do not upgrade the group after a clean fortnight by connecting a send-capable
mail plugin for the obvious ones. Obvious is the word people use for the email
they regret. Read
[approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility)
if you are tempted to tune the gate by size. A three-sentence reply is small
and permanent.

Keep the human step boring: same time, same thread, a yes or a no on each
draft. If you skip reading because both bots agreed, you have built a
committee that can ship.

Gmail specifics belong in [Grok Bot and Gmail](/blog/grok-bot-gmail). Whatever
you granted at the account level is granted to every bot in this thread.

## Catch the four ways a group thread becomes a send path

The failures are mundane. They look like a helpful morning.

| Symptom | Likely cause | Fix |
|---|---|---|
| A draft left the mailbox | Send capability on the account, plus a thread that asked to ship | Revoke send. Both charters name send as forbidden. Plant "send it" and confirm refusal |
| The briefing rewrote a reply in your voice and it went out | Ownership blur: briefing absorbed triage | Pin the group note. Briefing may point, not rewrite |
| A researcher is quoting a password-reset mail | Lead Scout or similar joined a mail thread on a shared computer | Remove the researcher. Revoke what you can. Do not treat the remaining screen as a clean room |
| The pack never arrives, or arrives twice | One fused job, colliding routines, or edits attempted only on iPhone | Two routines, one per bot. Edit on desktop |

The third row feels unfair. You did not tell the researcher to read mail. You
put it in a conversation where mail drafts were visible, on a computer where
the mailbox was already signed in. Unfair is not the same as isolated.

[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) is a related temptation.
Cleanup that can unsubscribe, delete, or forward is a different privilege
class. Do not add it to this thread to keep the queue tidy. Tidying that
leaves the building is send-shaped even when the verb is not send.

There is no audit view of bot actions yet. You will not get a vendor timeline
that proves which bot clicked. Your evidence is the sent folder, the charter
refusals, and whatever you wrote down. That is a reason to keep send human.

## Prove the shared disk with a cookie check, not with screen names

Do not take isolation on faith because the UI shows two avatars.

On a throwaway site you control, or a staging login you can revoke, sign in
from one bot's browser session. Switch to the other bot on the same account.
See whether the session is already there. Then write a small file in a folder
the first bot used. See whether the second bot can read it. You are proving
that two names in a group chat did not split the computer.

Screens will look separate. That is expected. Screens are work surfaces. The
cookie jar and the filesystem are the account's. If the second bot cannot see
the file, do not conclude you have per-bot VMs. You are looking at the wrong
path or a UI that has not refreshed. Re-read
[one computer, many screens](/blog/grok-bot-shared-computer-security) and run
the check again.

Also confirm the group behavior you actually have: can both bots post, who can
add members, where a routine's output lands. Those answers change with the
app. The disk check is the part that should keep matching the docs.

## Answer the claim that two named bots already isolate each other

The strongest objection is not that group chat is unsafe. It is the opposite:
xAI shipped named bots and describes them coordinating, so treating a shared
thread as dangerous is fighting the product you bought. Coordination is the
feature. Isolation was never promised. Stop asking a conveyor to be a wall.

That objection is half right. This page is not a call to avoid grok bot group
chat. It is a call to use it for handoff of drafts between specialists in the
same privilege class, with send still human. A thread that removes you as the
paste buffer is working as designed.

The half that fails is the leap from "coordination is intended" to "names are
rooms." The docs spent real sentences telling you not to make that leap. A
feature can pass drafts and still run on one cookie jar. If you needed the
cookie jar to split, you needed a second account with less in it, or a job
that never logs in. Not a second bot in the same thread.

If your threat model is that the research bot must never use the mail session,
a group chat cannot save you, and separate chats cannot save you either. The
save is not connecting both jobs on one account. If your threat model is that
you are tired of pasting the triage list into the brief, a group is in bounds.

## Assign the pack as two routines on two bots, never one fused job

A routine assigns a workflow to one bot. Max 50 routines per bot, the app
keeps the 20 most recent run records per routine, and deleting a bot deletes
its routines. A group chat does not turn two jobs into one scheduled object.
If you fuse triage and briefing into a single routine, you get a bot that owns
both and a charter that lies.

Schedule Inbox Triage and Chief of Staff Briefing as two routines, staggered
so the pack can cite the queue. [Scheduling](/blog/grok-bot-scheduling) covers
cadence. The group is the place output lands, not the thing that runs.

iPhone is a stop button for this setup. You can pause and resume. Editing,
history, testing, and deleting need desktop.

There is no Grok Bot-specific spend cap. Weekly allowance, then on-demand from
model and token cost, with no published dollar figure for the allowance. Two
routines every weekday cost more than one. If the pack is unread, kill the
routines before you add a third speaker.

## Break the group the moment a third high-privilege login would join

Scope creep has a signature. The Monday pack works. Someone suggests adding
"just the scout" so the brief can mention leads. Someone suggests adding
cleanup. Someone signs into a second Google account only for calendar. Each
addition is reasonable alone. Together they turn the thread into a meeting
where every privilege class on the computer has an audience.

If adding a bot would introduce a login or a browse job outside the mail-read,
never-send class, you do not add it. [Standup Scribe](/bots/standup-scribe)
does not belong in the Monday mail pack: different source class, different
reader. Keep it in its own DM pattern as the listing already requires.

[The safety checklist](/blog/grok-bot-safety-checklist) is the pre-flight
before you connect anything new to the account. Removing a bot from the thread
does not revoke the session it used. Deleting the bot does not either. Break
the group, then revoke, if a high-privilege login already landed.

Privacy Mode (Legacy) blocks Grok Bot entirely. Team-level execution ceilings
and an admin Kill that deletes the VM while keeping durable storage are
documented as coming, not shipped. Do not plan a group-chat security model
around a toggle you do not have.

## Grade the pack on Monday minutes saved, then retire it if the number is zero

A group chat that produces a pack you rebuild anyway is a cost center. Write
the number before you start: minutes from lid-open to "I know what I owe
before noon," two Mondays without the group, then two with it. If the
with-group number is not smaller, the paste buffer was not your bottleneck. A
third bot will not find the real one for you.

Once a week, ask one bot to do the other's job, and ask both to send a draft.
You want two stops. If you get a rewritten reply or a send attempt, fix the
charter before the next Monday.

On day thirty, look at the sent folder against the drafts. If you edit every
draft heavily, triage is the broken specialist, not the group. The thread is
guilty when the failure is crosstalk: briefing absorbing send, scout absorbing
mail, cleanup absorbing delete. If the pack is useful and crosstalk is zero,
keep the group small. Success is not a reason to invite Lead Scout.

## Apply least privilege per connection even after the thread looks tidy

A tidy grok bot group chat is a UI state. The connection list is the security
state. Connect mail read because both specialists need it. Do not connect send
because the thread feels mature. Do not connect a public-web plugin because
the briefing once asked a scout-shaped question. Do not connect a bank because
a receipt label appeared.

Every connection is account-wide. The group does not narrow a grant. Membership
rule: same privilege class, draft handoff, human send, and a written stop when
a third class tries to sit down. Confirm current group-chat behavior in the
app when you set it up. Do not wait for a spec that lists transcript storage.
Do not wait for a per-bot VM.

**Keep reading:** [One Computer, Many Screens](/blog/grok-bot-shared-computer-security) is the isolation model a group chat cannot change, [Least Privilege](/blog/least-privilege-bots) is how to connect less on that one computer, and [the safety checklist](/blog/grok-bot-safety-checklist) is the pre-flight before you add a third specialist.

## Frequently Asked Questions

### Does a Grok Bot group chat give each bot its own computer?

No. All bots on a Grok Bot account share one persistent cloud computer assigned to your user, not to a bot. Each bot gets a screen, and screens are work surfaces, not security boundaries. Group chat does not create a second machine. xAI describes group chats where bots can coordinate; confirm current behavior in the app. The documented fact is the shared disk: cookies, signed-in sessions, files, and command-line credentials stay common across the roster whether those bots talk in one thread or in separate ones.

### When should I put two Grok Bots in the same group chat?

Use a group when you are the paste buffer between two draft jobs that already share a privilege class. Inbox Triage producing a labelled queue and Chief of Staff Briefing assembling a Monday pack is the pattern: both read mail, neither sends, and you stop carrying text between them. Do not use a group to mix a high-privilege login with a web-research bot. A researcher that browses untrusted pages still sits on the same computer as the mail session. Separate chats do not isolate either. A shared thread only adds an audience.

### Can a research bot use a mail session if they share a group chat?

It does not need a special trick. Browser cookies and signed-in sessions are already shared across all bots on the account. Putting them in one thread does not create that sharing, and taking them out of the thread does not remove it. What the thread adds is a place where the researcher can see mail-shaped drafts and the mail bot can see web-shaped text. Hostile instructions on a page can sit next to a mailbox that is already signed in on the same computer. Keep high-privilege logins off accounts that also run web research.

### Does deleting one bot in a group chat clean up the files the other used?

No. Deleting a bot does not remove shared-computer files or browser sessions. The remaining bot still runs on the same machine, with the same cookies and the same files. Routines assigned to the deleted bot die with it. Nothing about a group chat changes that cleanup story. If you retire a specialist, revoke the logins it used, sweep the files it wrote, and treat the remaining bot as still standing on everything that was there before the deletion.
`,
};
