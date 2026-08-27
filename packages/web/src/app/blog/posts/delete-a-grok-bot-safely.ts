import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Delete a Grok Bot Without Leaving Logins Behind',
  description:
    'Delete grok bot work and the profile is gone. Shared-computer files and browser sessions can remain. Here is the teardown order that actually reduces blast radius.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# How to Delete a Grok Bot Without Leaving Logins Behind

The client's HubSpot session is still in the shared browser after you fire the
contractor bot, and every remaining bot on the account can open it. Deleting
the bot removed the name, the chat, and the weekday routine. It did not sign
anyone out. It did not pick up the CSV exports. It did not tell HubSpot that
the engagement is over.

That is the documented behaviour, not a rumour. Deleting a Bot removes its
active profile, conversation, and routines from Grok Bot. Shared computer files
and sign-ins are not isolated by Bot and may remain on the computer. If you
may need the work later, hide the Bot instead. This page is the teardown
order that actually reduces blast radius: revoke site logins in the shared
browser, remove files you would not want the next bot to see, then delete.

## Treat deletion as a profile cut, not a machine wipe

The delete control is a roster action. It takes the bot off the sidebar, drops
the conversation, and removes the routines that belonged to that bot. It does
not wipe the managed Linux VM your account is assigned. It does not empty
\`/workspace\`. It does not clear the browser cookie jar. Other bots keep
using the same computer, because the computer is assigned to your user
account, not to an individual bot.

The security page says it in one line: "Do not use separate Bots as a security
boundary." Screens are work surfaces. Cookies, signed-in sessions, files, and
command-line credentials are shared across the roster. A delete grok bot click
does not rewrite that.

| Asset | Removed by deleting the bot | Still on the shared computer | How you actually close it |
|---|---|---|---|
| Active profile and name | Yes | No | The delete control |
| Conversation with that bot | Yes | No | The delete control |
| Routines owned by that bot | Yes, including the 20 stored run records per routine | No | Copy anything you still need, then delete |
| Skills you saved during the work | No. Skills are available across bots | Yes, in the skill list | Disable or delete the skill if it should not travel |
| Browser sessions it signed into | No | Yes, in the shared cookie jar | Sign out on the computer, then revoke at the site |
| Files it wrote under /workspace | No | Yes | Delete or move them yourself |
| Command-line credentials it set up | No | Yes | Revoke the token at the source, then remove the local config |
| Hosted MCP sign-in tokens | Not stored on the computer | Held by Cursor's backend | Revoke the connection in settings |

What you lose on delete is often the part you wanted to keep: the routine
wording, the last twenty run records, the chat that named the dirty folders.
What you keep is often the login, the export, and the CLI token. Plan around
that inversion. The wider map of the shared machine is in
[One Computer, Many Screens](/blog/grok-bot-shared-computer-security).

## Hide the bot when you still need the work later

Hide is not a polite form of delete. Pin keeps active bots at the top of the
sidebar. Hide from sidebar removes a bot from the main list without deleting
its work. Open Show hidden chats, then Unhide, to put it back.

Hiding does not pause the bot or its routines. If you hide a contractor bot
because the engagement paused for two weeks, the weekday HubSpot pull can
still fire. You have only tidied the sidebar.

Use hide when the job might resume. Use pause on each routine when the job
should stop. Use delete only after logins and files are closed, and you
accept that the profile, the chat, and the routines will not come back.

| Situation | Action | What keeps running | What you still have |
|---|---|---|---|
| Engagement paused, likely to restart | Hide the bot, and pause its routines | Nothing, if you paused | Profile, chat, routines, files, sessions |
| You hid it and forgot to pause | Hide only | Routines, on their schedule | Everything, including a live login |
| You need the slot, not the history | Delete, after teardown | Other bots on the same computer | Files and sessions you did not remove |
| You need the method on a different client | Duplicate first, then teardown the original | The copy's routines once you enable them | A copy without conversation history or learned memory |

Duplicate copies profile, settings, skills, routines, and avatar. It does not
copy conversation history, learned memory, or attachments, and it does not
isolate the HubSpot cookie. Both bots still stand on the same machine. An
account can hold up to 50 bots and group chats combined. Deleting frees a
slot. It does not vacuum the disk.

## Pause every routine before you remove the roster name

A routine assigns a workflow to one bot. A bot can own up to 50 routines. The
app keeps the 20 most recent run records per routine. Deleting a routine is
immediate and has no undo. Deleting a bot also removes the routines that bot
owned. Nothing about routines is team-level.

Pause comes first because the list still exists. Open View conversation
details, then Routines, and read the schedule, the skill, and the recent
success and failure history. After delete, that list is gone.

Pause related routines before you sign out of sites. If you sign out of
HubSpot at 17:40 and leave the 08:00 pull enabled, the next morning the bot
may prompt for a login, write a failure, or use some other session still
sitting in the shared browser.

Copy the routine instructions into a file you own before you destroy them.
Twenty run records is a thin history even while the bot is alive. After
delete, it is zero. There is no audit view of Bot actions yet, so the routine
panel and whatever files you made the bot append are the record. How
schedules fire is in [Grok Bot Scheduling](/blog/grok-bot-scheduling). This
teardown only needs: stop the clock before you pull the credentials.

## Revoke site logins in the shared browser first

The shared computer has one browser for the roster. A session you created
while looking at the contractor bot's screen is a session every other bot can
load. Signing out is not optional cleanup. It is the step that actually
reduces blast radius.

Do this on the computer, not in a tab on your laptop. Open Agent Computer,
take control if you need to, and sign out of each site the bot used. Then
open the site's own security or connected-apps page (confirm the current
labels on the vendor's site, they move) and revoke from that side too. Local
sign-out without a source revoke leaves a token the site still considers
valid. Source revoke without a local sign-out leaves a cookie that may still
work until it expires.

If passwords or one-time codes went into ordinary chat, rotate them on this
pass. Hosted MCP sign-in tokens stay with Cursor's backend and are not stored
on the computer. A browser HubSpot login and a hosted connector are different
objects. Revoke each where it actually lives.

A mail bot teardown is the same shape. An
[inbox triage](/bots/inbox-triage) setup and a
[mail cleanup assistant](/bots/mail-cleanup-assistant) both leave mailbox
sessions in that jar. The Gmail consent picture is in
[Grok Bot and Gmail](/blog/grok-bot-gmail). Sign out on the computer, revoke
at the source, then delete.

## Pull connectors at the source service, not from the bot card

Uninstalling a connector inside Grok Bot is not the same as telling HubSpot,
Google, or GitHub that the grant is dead. Do both. The docs order is: pause or
delete related routines, sign out of websites on the shared computer,
uninstall connectors and revoke their authorization in the source service,
remove sensitive project files from \`/workspace\`, then hide or delete the
bots that should no longer appear.

Revoke at the source first when you can. A HubSpot connected-app revoke
(confirm the current page) ends the grant. A Google third-party access page
ends a Gmail grant. A GitHub settings page ends a PAT or an OAuth app. None
of those pages care that a bot named "Acme HubSpot cleaner" is still in a
sidebar.

Then uninstall on the Grok Bot side so the next bot does not inherit a
connector you thought was gone. Every connection is an account-wide grant.
The longer version is
[Least Privilege for Bots](/blog/least-privilege-bots).

If the contractor used a client-owned seat, ask the client to disable that
seat. You cannot finish someone else's identity-provider offboarding from
your Cursor account.

## Remove files you would not want the next bot to open

Files survive deletion because they were never the bot's private disk. They
were account files on a shared filesystem. The next bot you hire, including
one with a completely different job, can read them. A
[lead scout](/bots/lead-scout) that is only supposed to rank public posts can
open \`/workspace/acme-hubspot/contacts-export.csv\` if you left it there. A
[chief of staff briefing](/bots/chief-of-staff-briefing) bot that prepares
your Monday note can cite a client's lifecycle stages if the file is still in
the tree.

Delete or move anything you would not want the next bot to see. Exports,
screenshots, invoices, \`.env\` files, cookie dumps, CLI configs, and notes
with customer names are the usual leftovers. If you need an archive, put it
somewhere the shared computer cannot reach, then delete the copy here.

Do not hand this step to a janitor bot with silent delete rights. Make a
housekeeper list candidates and wait. Today's pass is a named list, not an
autonomous sweep.

| Leftover | Why it is still there after delete | Risk if the next bot opens it | Close it how |
|---|---|---|---|
| CRM or mailbox CSV in /workspace | Files are not isolated by bot | Customer records leak into the next job | Delete the folder, then confirm the path is gone |
| Screenshot of a client dashboard | Same | Visuals of live metrics, sometimes PII | Delete the images |
| .env or token file | CLI credentials are shared | The next bot can call the API as you | Revoke the token, then delete the file |
| Browser profile / cookies | Sessions are shared | The next bot loads the site already signed in | Sign out, then revoke at the source |
| Skill saved from the engagement | Skills are available across bots | Another bot reruns the client method | Disable or delete the skill |

A path that "looks empty" on one bot's screen is not proof. Screens are not
security boundaries. Confirm from a directory listing on the computer.

## Walk a contractor HubSpot login all the way off the machine

Priya is a contractor. For six weeks she ran a Grok Bot whose only job was to
pull a client's HubSpot lifecycle-stage changes into a daily note. She signed
into the client's HubSpot in the shared browser. She exported a contacts CSV
to \`/workspace/northwind-hubspot/\`. She saved the method as a skill. She
scheduled a weekday 08:00 routine. She assumed firing the bot was offboarding.

Friday the engagement ends. The client writes: take our data out of your
tools. Priya deletes the bot from the sidebar as soon as she sits down,
without opening Agent Computer, and replies "done."

Monday she creates a new bot to triage her own mail. HubSpot is still signed
in as the client's ops user. The CSV is still in
\`/workspace/northwind-hubspot/\`. The skill still appears in the \`/\` menu.
Her mail bot did not ask for any of that.

The teardown she owed, on desktop, in order:

1. While the bot still exists, write down every site, connector, skill,
   routine, and folder it names. After delete you will not get that list back.
2. Pause the 08:00 routine. Copy the last twenty run records if she needs
   them for her own records.
3. On the shared computer, sign out of HubSpot. Confirm a login prompt, not
   the client's portal.
4. On HubSpot's current security or connected-apps page (confirm the labels
   there), revoke the session or the app grant. If she used a client-owned
   seat, ask the client to disable that seat.
5. Uninstall any HubSpot-related connector on the Grok Bot side.
6. Delete \`/workspace/northwind-hubspot/\` and any other Northwind export or
   screenshot. Confirm the path is gone.
7. Disable or delete the saved skill so the next bot cannot rerun the method.
8. Hide only if she might need the conversation next month. Otherwise delete
   the bot, last.

Firing the bot is step eight. Steps three through seven are the offboarding.
If she had used a hosted MCP connection instead of a browser login, step four
would also revoke that grant in Cursor's settings. Same outcome, different
drawer. Substitute Salesforce, Linear, a client Gmail, or a Shopify admin and
the order does not change. The product pages will. Read those on the day you
teardown.

## Copy the routine text out before deletion takes it with it

People delete first because the sidebar delete is the visible control. The
invisible cost is the work product that lived only on the bot: the routine
instructions you tuned for six weeks, the edge cases you added after the
second failure, the twenty run records that showed it actually fired.

Copy that text into a file you own, off the shared computer if it contains
client names. You are preserving the method, not the login. The login should
already be dead.

This is not an audit log. There is no audit view of Bot actions yet. Twenty
rows per routine is not a compliance record. If a client later asks what the
bot touched, you will answer from files you kept and the source system's
logs. Make the bot append each run to a file you own while it still exists,
or accept that you cannot reconstruct it. Deleting a routine by itself is
also immediate and has no undo. Copy first there too.

## Finish the teardown on desktop, because iPhone cannot delete

On iPhone you can pause and resume only. Editing, history, testing, and
deleting need desktop. Supported clients are macOS on Apple silicon and
Intel, Windows on x64 and Arm64, and iPhone on iOS 18 or later. There is no
Linux desktop app, no Android app, and no iPad app. The bots run on a managed
Linux VM. The desk you drive it from cannot be a Linux desktop, and it cannot
be your phone if the job is delete.

Trying the same teardown from a phone is a second failure, not a shortcut.
If you are away from a Mac or Windows machine, pause the routines and wait.

## Stop treating a replacement bot as a new sandbox

The instinct after a contractor bot is to make a fresh one with a new name
and tell yourself the old login died with the old name. It did not. The new
bot gets a new screen on the same computer. Screens are not security
boundaries. The HubSpot cookie, the CSV, and the skill are still there.

This is the same error as "I will put the dangerous work on its own bot."
The docs forbid that reading. Separate bots are not a security boundary. A
replacement bot is not a factory reset. Isolation means separate accounts
and fewer grants, not a second row in the sidebar.

A Grok Bot is a durable profile with a conversation and routines, not a
virtual machine. Deleting the profile does not delete the machine. The plain
definition is in [What Is a Grok Bot?](/blog/what-is-a-grok-bot).

## Answer the claim that isolation will mop up leftover sessions

The strongest objection to this checklist is: just delete. Isolation will
handle it. The next bot cannot see the old login because it is a different
bot. The VM is theirs. The screen is theirs.

The docs contradict that on three independent pages. All bots on an account
share one persistent cloud computer assigned to the user, not to a bot.
Browser cookies, signed-in sessions, files, and command-line credentials are
available across the roster. Do not use separate Bots as a security boundary.
Deleting a Bot does not remove shared-computer files or browser sessions.
Hide if you may need the work later, which is only sensible if delete is
destructive to the profile and not to the machine.

If isolation handled leftover sessions, the security page would not tell you
to sign out of a service when it should no longer be available, to remove
sensitive temporary files after the work is complete, and to revoke
authorization in the source service. Those sentences exist because the
delete control does not do that work.

Where the objection wins is narrow. If the bot never left the computer (no
browser login, no file, no CLI token, no connector, no saved skill), delete
is a roster tidy. Most bots people bother to delete exist because they signed
into something. That something is what teardown is for. "Just delete" is
what the UI makes easy. It is not what the security page tells you to do.

## Verify leftover sessions with a check that can come back dirty

A teardown you do not test is a story you told yourself. Run checks that are
allowed to fail. If they cannot fail, they cannot pass either.

From a different bot on the same account, the one you did not just retire,
open Agent Computer and try the things the retired bot used to do. You are
not trying to work. You are trying to see whether the door is still open.

| Check | Pass | Fail |
|---|---|---|
| Open the client's HubSpot URL in the shared browser | Login prompt, no portal | Portal loads as the client |
| List /workspace for the client folder | Path does not exist | Folder or CSV still there |
| Open the / skill menu | Client skill absent or disabled | Skill still offered |
| Open Routines on a remaining bot | No schedule still pointing at the client | A leftover routine still enabled |
| Trigger a harmless read against the old connector | Authorisation error | Data comes back |
| Ask the new bot to open the old export | File not found | It summarises the client's contacts |

The fail column is the point. If HubSpot still loads, you are not finished.
If the CSV still lists, you are not finished. If the skill still runs, you
are not finished. Do this from a second bot on purpose. The retired bot's
own screen can still see its leftovers while it exists. The security question
is whether the rest of the roster can.

If you connect mail after teardown, run the same shape of check against Gmail
or Outlook. The pre-flight list before you connect a mailbox is
[the safety checklist](/blog/grok-bot-safety-checklist). Teardown is that
list in reverse, plus delete at the end.

## Leave admin Kill on the coming-soon list, not in this week's plan

Teams documentation describes an administrator Kill action that deletes the
VM while keeping durable storage. That control is coming soon, not shipped.
Do not wait for it. Even when it ships, durable storage is kept. Killing the
VM is not a wipe of the files you care about. You would still owe a file
pass.

A related coming-soon control is a team-level ceiling on local execution
(Never / Ask every time / Always), where members can choose a stricter option
but not a looser one. That is about the Mac or Windows machine in front of
you, not leftover HubSpot cookies on the cloud computer. It does not replace
this checklist.

Deleting the Cursor account is a different flow, via account settings, and it
follows Cursor's terms for backend retention. This page is a bot-retirement
guide, not an account-deletion guide.

## Write the revoke-before-delete line into the bot's own charter

The boundary that makes a contractor bot safe to run is not only "never send,
never purchase, never change production." Those still matter. The boundary
this page adds is: never treat disappearance from the sidebar as offboarding.
Put the teardown in the bot's description so the next operator, including
future you, does not have to rediscover the order from a security page at
17:40 on a Friday.

Paste this block, then fill the bracketed names.

\`\`\`text
Role: contractor bot for [client], [system, e.g. HubSpot read].
You read [objects]. You write files only under /workspace/[client]-[system]/.
You never send, never purchase, never change [system] records, never
message the client. Drafts stay in this conversation.

Offboarding is a human checklist. You never claim a delete from the
sidebar finished it.

When I say teardown:
1. List every site, connector, skill, routine, and folder you used.
2. Pause your routines. Copy routine text and the last run records
   into /workspace/[client]-[system]/TEARDOWN.md. Wait for me.
3. I sign out of [system] on this computer and revoke at the source.
4. I uninstall connectors. You do not reopen [system] to "help."
5. After I confirm sign-out, delete /workspace/[client]-[system]/
   except TEARDOWN.md if I still need it, then stop.
6. I hide or delete you last. You do not volunteer "I am gone so
   the login is gone." That sentence is false on this runtime.

Boundary: you never sign into a second client on this computer, and
you never tell me that isolation across bots will close a session.
\`\`\`

Three lines in that charter do the real work. Files go in a named folder so
teardown has a path. The bot is forbidden from describing delete as
offboarding. The bot is forbidden from treating another bot as a sandbox.

Do not share a public bot link that contains client URLs, seat names, or
anything you would not put in a public document. A share link copies
configuration, not your computer, but the configuration can still leak.

**Keep reading:** [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security), [The Grok Bot Safety Checklist Before You Connect Your Inbox](/blog/grok-bot-safety-checklist), [Least Privilege for Bots: Connect the Minimum, Not the Maximum](/blog/least-privilege-bots).

## Frequently Asked Questions

### Does deleting a Grok Bot wipe the shared computer?

No. Deleting a Bot removes its active profile, conversation, and routines.
Shared computer files and sign-ins are not isolated by Bot and may remain.
The computer is a managed Linux VM assigned to your user account, not to
that Bot, so every remaining bot keeps using the same disk and the same
browser. If you need the leftover HubSpot tab gone, you sign out and revoke
it. Admin Kill, which deletes the VM while keeping durable storage, is
coming soon, not shipped, and even that is not a wipe of the files you care
about.

### Should I hide a Grok Bot instead of deleting it?

Yes, if you may need the work later. Hide from sidebar removes the bot from
the main list without deleting its work, and you can unhide it from Show
hidden chats. Hiding does not pause the bot or its routines, so a weekday
pull can still fire while the name is out of sight. Pause the routines if
the job should stop. Delete only after you have signed out of sites, revoked
connectors at the source, and removed files you would not want the next bot
to open.

### Can I delete a Grok Bot from my iPhone?

You cannot finish a real teardown from iPhone. On iPhone you can pause and
resume only. Editing, history, testing, and deleting need desktop, meaning
macOS or Windows. There is no Linux desktop app, no Android app, and no
iPad app. Pause routines from the phone if you are away from a desk, then
run sign-out, file removal, and delete on a supported desktop. A mobile tap
that only tidies a list is how leftover CRM sessions survive a "deleted"
bot.

### If I delete the bot, are its HubSpot and Gmail sessions gone?

No. Browser sessions live in the shared cookie jar and may remain after you
delete grok bot profiles. Sign out on the shared computer, then revoke the
grant on HubSpot, Gmail, or whichever vendor page is current for connected
apps. Hosted MCP tokens are separate: they stay with Cursor's backend, so
you revoke those in settings rather than in the browser. Files the bot wrote
under /workspace stay too. Session leftover is the default, not the edge
case.
`,
};
