import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'One Computer, Many Screens: What Isolation You Actually Have',
  description:
    'Grok Bot screens are a focus UI, not vaults. Isolation you actually have is one computer per eligible account. Docs: do not use separate bots as a security boundary.',
  date: '2026-08-27',
  category: 'Safety',
  content: `
# One Computer, Many Screens: What Isolation You Actually Have

You exported a Figma frame on one Grok Bot screen, switched to a research
screen, and treated the Figma cookie as if it had stayed behind in the first
window.

It had not. Grok Bot screens are a focus UI. They let you run two jobs at
once without drowning in tabs. They are not vaults. Isolation you actually
have is one persistent cloud computer per eligible account. The docs end
with an instruction: do not use separate Bots as a security boundary
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).

This page is the screen object: why it exists, what people wish it was, and
what happens when a designer names one bot for Figma and another for
research, then assigns the cookie to the name. Architecture for everyone is
[what Grok Bot actually isolates](/blog/grok-bot-shared-computer-security).
The engineer warning is
[do not use separate Grok Bots as a security boundary](/blog/grok-bot-not-a-sandbox).
The agency case is
[Grok Bot for agencies](/blog/grok-bot-for-agencies-isolation).
Stay here if your question is the window itself.

## Use grok bot screens to run two jobs at once, not to hide a Figma session

A screen is how you watch one bot without the other bot covering it. You open
Export Frames, you see the Figma tab, you export a PNG. You open Research, you
see competitor landing pages. Parallel work. Less tab chaos. That is a real
product job. It is also the whole job.

The computer under those windows is assigned to your user account, not to an
individual bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)).
The [FAQ](https://docs.x.ai/grok-bot/faq)
says every bot on the account can access that computer. Each bot gets a
screen. The same page describes that screen as a work surface, not as a
security boundary.

You did not buy a second machine when you typed a second name. You bought a
second work surface on the machine you already had. Ten named bots are ten
surfaces on one filesystem and one cookie jar.

If you came here from a generic explainer, start with
[what is a Grok bot](/blog/what-is-a-grok-bot)
for the product, then come back. The screen is the window. It is not the
computer.

## Credit the sidebar for less tab chaos, then stop assigning it tenancy

The sidebar looks like a set of rooms. Export Frames. Research. Maybe
[Lead Scout](/bots/lead-scout)
for public posts and a sheet. Maybe
[Inbox Triage](/bots/inbox-triage)
for a mailbox that never sends. Each row opens a different view. Your laptop
taught you that a named window can be a named profile. Browser profiles split
cookie jars because that is what a profile is for. Confirm that behaviour on
the vendor's page if you need the comparison. Grok Bot screens are not that
object.

Tab chaos is the problem screens actually solve. One bot is in Figma. One bot
is on a public pricing page. You are not reconstructing which tab belonged to
which job after lunch. Use that.

Tenancy is the problem people then assign to the same UI. They point at the
tidy list and say the Figma session lives in Export Frames. The list never
made that promise. A tidy sidebar is a window manager. It is not a tenant map.

The ownership chain is
[why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained).
Two bots on one eligible user share one computer. Two eligible users are two
computers. The sidebar cannot change that.

## Follow Mira from a Figma export into a competitor research tab

Mira is a product designer at a twelve-person company. Unreleased screens
live in a Figma file named Q4. She does not want a research bot wandering
that file, and she does not want Figma tabs mixed with competitor URLs. So
she does the thing the UI invites: Export Frames for PNG pulls, Research for
public pages. She never clicks a Figma connector on Research. She tells
herself the cookie is screen-local.

Tuesday 14:20. She opens Export Frames, takes the Agent Computer, and signs
into Figma so the bot can export three marketing frames. Maybe she passes a
two-factor prompt. The PNGs land. She switches screens.

Wednesday 09:05. She asks Research to collect public landing pages, and to
open Figma Community for structure. Research opens figma.com in the shared
browser. Q4 is already signed in. Unreleased frames are one click from a bot
whose charter says public pages only.

She did not get hacked. She reused a browser the way grok bot screens are
built. Confirm current Figma login behaviour on Figma's own page before you
brief anyone. A browser login on this computer is a roster login.

| Clock | Screen she watched | What she believed | What the computer held |
|---|---|---|---|
| Tuesday 14:20 | Export Frames | A Figma session that belongs to this bot | A design-file cookie in the account browser |
| Tuesday 14:40 | Her own laptop, after the PNG | The job is done, the session is "theirs" | The same cookie, still live |
| Wednesday 09:05 | Research | Public pages, maybe Community files | Q4, already authenticated |
| Next week | A new bot with an empty connector list | A clean room | The same jar, unless she signed out and revoked |

[Lead Scout](/bots/lead-scout)
is built to collect, not to contact. That is a sending rule. It does not
partition cookies. [Inbox Triage](/bots/inbox-triage)
is built to sort mail, not to send it. Same shape: a per-bot refusal sitting
on a machine that still holds the Figma session she installed for the other
job.

## Sort focus objects from computer objects before you sign into Figma

People collapse two lists into one word, bot. One list is what the named bot
owns. The other is what the computer owns. Grok Bot screens sit on the first
list. The Figma cookie sits on the second.

| Object | What people wish (screen-local) | What the docs describe | Who can reach it tomorrow |
|---|---|---|---|
| The window you watch | A private room | A work surface per bot | You, when you open that bot |
| Conversation on that bot | Locked to the name | Tied to the bot you typed in | That bot, until you delete it |
| Routines | Locked to the name (this part is true) | Assigned to one bot, max 50, app keeps 20 recent run records | That bot. Delete the bot and the routines go. The cookie does not. |
| Browser cookies | Figma stays in Export Frames | Shared across all bots | Every screen on the account |
| Signed-in sessions | Dead when you switch screens | Shared across all bots | Every screen on the account |
| Files on disk | PNGs live with the Figma bot | Shared across all bots | Every bot that can read a folder |
| Command-line credentials | Irrelevant to a designer, until someone pastes a token | Shared across all bots | Every bot that opens a terminal |
| Hosted MCP sign-in tokens | Per bot, or on the disk | Held by Cursor's backend, not on the computer | The exception: off the VM. Still not a second computer. |

Read the routines row twice. A routine belongs to one bot. Deleting that bot
deletes its routines. That is real, and it is irrelevant to Figma. The
session is not a routine. Deleting Export Frames does not sign the computer
out.

Hosted MCP is the other exception, and it is easy to over-read. Those tokens
stay with Cursor's backend
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
If a design tool offers a hosted MCP path, confirm it on the vendor's current
page. A sign-into-Figma-in-the-browser step is still the shared cookie.

## Read the docs as a screen definition, not as a footnote under a vault

The computer-and-apps page is a definition of the screen. Work surface. Not a
security boundary. The FAQ repeats the share from the other direction: all of
your bots share that one computer. Approvals, security and privacy turns the
definition into an instruction. Do not use separate Bots as a security
boundary.

People treat the instruction as a label that does not apply to designers.
Figma is not a bank. The file still holds unreleased product, client work,
and tokens in a hidden layer someone forgot to strip. A research bot that can
open that file is the computer doing what it was documented to do.

The Agent Computer is a managed Linux VM. The process runs as a non-root
user. That does not give each bot its own user, and it is not a Linux
desktop client. There is no Linux desktop, Android, or iPad app. Clients are
macOS (Apple silicon and Intel), Windows (x64 and Arm64), and iPhone on iOS
18+. iPhone can pause and resume only. Desktop is required to edit, inspect
history, test, or delete. None of that slices a Figma cookie by screen.

Beta launched 11 August 2026. Eligibility widened 21 August 2026. Screens did
not become vaults in that interval.

## Delete the Figma bot and still find the design file signed in

Mira panics on Wednesday afternoon and deletes Export Frames. The named bot
is gone, along with its conversation and its routines. The Q4 cookie is not
gone. Shared-computer files and sessions are not isolated by bot and may
remain. The PNG folder is still on disk. Research can still open figma.com
and land in the same file.

If you still need the transcript that named the export folder, hide the bot
instead of deleting it. When you do delete, revoke at Figma first, sign the
browser out, remove the export folder, then delete the bot. Deleting first is
theatre. There is no audit view of bot actions yet, so you will not get a
later list of which screen opened Q4
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

A bot she creates next Thursday with a blank connector list still sits on
this computer. Blank is a new window onto the same jar, not an empty room.

If
[Inbox Triage](/bots/inbox-triage)
is also on the account, the mail session is the same story. Deleting triage
does not close Gmail. Deleting Export Frames does not close Figma. The
computer is the unit. The screen is the view.

## Leave hosted MCP tokens with Cursor, and treat a Figma browser login as roster-wide

Two connection stories wear the same casual word. Connected Figma might mean
a browser login on the Agent Computer. It might mean a hosted MCP
integration whose sign-in token never lands on the disk. Those are not the
same risk.

Hosted MCP tokens stay with Cursor's backend. That is the documented
isolation win, and it is still not a per-bot vault. A charter that says
Research may not use Figma is a note to the model. It is not a lock on a
cookie that already exists.

If you can export from your own laptop and drop a PNG onto the computer, do
that. Files on the shared disk are still readable by every bot, so delete
the PNG when the run ends. A leftover export is residue. A leftover Figma
session is a live door.

Skip Figma 2FA on this VM if you would not hand the file to Research.
Finishing that prompt writes a live login into the jar. The research screen
does not need a Figma row in the connections panel. It needs the URL.

[Least privilege for bots](/blog/least-privilege-bots)
is the grant question. This page is the container question. A small grant on
a shared computer is still a grant every sibling screen can stand next to.

## Answer the designer who infers two rooms from two tidy screens

The strongest objection is not I thought each bot had its own VM. That
person has not read the docs. Mira's objection is harder: she knows there is
one computer, and she still treated screens as rooms because the UI looks
like rooms and because she needed parallel work to feel safe.

She will say she never thought they were vaults. Then she will point at
Research having no Figma connector, at signing in on Export Frames, and at
the two windows not sharing a tab strip. Those facts are true. They do not
move the cookie.

Looking like a room is not being a room. A window manager lets you see two
jobs. It can be good at that and useless at tenancy. Inferring the second
from the first is how Q4 ends up in front of a research prompt.

If the objection is that Figma is not production AWS, say the file contents
out loud. Unreleased UI. Customer names in a prototype. A token in a hidden
layer. If that list is empty, a roster-wide Figma session is a choice you
can accept. If it is not empty, the tidy sidebar is not your isolation. The
computer is.

## Open a throwaway research bot and load figma.com without connecting anything

Do this on an afternoon when nothing is wrong. Create a bot named Probe.
Give it no connectors. Open its screen. Ask it to visit figma.com and
tell you whether a team file is already signed in. If Q4 loads, the
screen was never the wall.

That is the check that can fail. If it fails, you learned the architecture
from your own roster. Sign out. Revoke. Move the export folder. Decide
whether Figma belongs on this computer at all.

Do not ask Probe to edit or export. You are proving a session, not adding
a third job. Remove Probe after you have the answer, and remember that
removal does not close Figma. You already closed Figma, or you did not.

[Chief of Staff Briefing](/bots/chief-of-staff-briefing)
on the same account is another window onto the same jar. A briefing bot
that never opens Figma in its charter can still open Figma in the browser.
Charters are instructions. Cookies are state.

There is still no model picker. There is still no Grok Bot-specific spend
cap. After the weekly allowance, usage is on-demand at model and token
cost. xAI has not published a dollar figure for that allowance, so do not
invent one. None of that creates a screen-sized cookie. Bill shape is in
[Grok Bot cost](/blog/grok-bot-cost).
This test costs one throwaway bot and a URL.

## Write a screen charter that forbids treating the tab list as a wall

Paste this into Export Frames. Change the file name. Keep the stop verbs.
The point is not that a charter creates isolation. The point is that the
bot is told the computer is shared, so it stops helping you pretend.

\`\`\`text
You are Mira's Figma Export bot for the file Q4.
You export PNG frames I name. You never edit the file.
You never treat your screen as a vault.

You run on one account computer. Every sibling bot can
open the same browser and the same disk. Do not tell me
a session is "ours" or "screen-local." It is not.

You may open Figma only when I am watching this screen
and I have just signed in for this run.
You may export only the frames I name.
You write the PNG to /workspace/exports/q4/ and you
delete that folder when I say the run is done.

You never comment, share, publish, or invite.
You never create, rename, or delete pages, frames, or
components.
You never copy tokens, hidden-layer text, or customer
names into chat, sheets, or another tab.
You never open a competitor URL. That is the research
bot's job, and that bot shares this computer, which
is why Figma must be signed out before anyone switches.

Stop and show me the proposed click if a prompt asks
you to open a second site while Figma is signed in.
Stop if you notice another bot's files in /workspace.
Stop if I am not at the desktop. iPhone pause is not
a sign-out.

After every run: sign out of Figma in the browser,
list the files you wrote, and wait for me to confirm
the folder is empty.
\`\`\`

A charter is not an ACL. Research can still ignore this text. The value is
that Export Frames will not assist the fantasy. Pair it with a real sign-out
and a real decision about whether Figma belongs on the machine.

## Pick one computer, two computers, or no Figma login, and name the cost

Isolation you actually have is the eligible account. Screens do not add a
second unit. A designer who wants parallel work then has three honest setups.

The cheapest paid path that includes Grok Bot is Cursor Pro+ at $60 a month.
Cursor Hobby and Cursor Pro at $20 do not include it. SuperGrok at $30 does
not. SuperGrok Plus at $100 does. SuperGrok Heavy does. Cursor Ultra does.
Teams Standard at $40 per user per month and Teams Premium at $120 per user
per month both include it, plus a one-time trial. Confirm live numbers on
[cursor.com/pricing](https://cursor.com/pricing)
and [x.ai/pricing](https://x.ai/pricing) before you budget a second seat.

| Setup | Eligible accounts | What grok bot screens still do | Where the Figma cookie lives | Use this when |
|---|---|---|---|---|
| One account, Export Frames plus Research | 1 | Parallel work, less tab chaos | The one computer, visible to both | Every remaining login is one you accept as roster-wide |
| Two eligible accounts, Figma on one, research on the other | 2 | The same, on two computers | Only on the Figma account's computer | Unreleased files cannot sit next to a public scrape bot |
| One account, never sign into Figma on the Agent Computer | 1 | Research screens stay useful | Nowhere on this VM | You can export from your laptop and drop a PNG, then delete it |

Two user accounts are two computers. A human who copies a PNG across those
accounts has rebuilt a file leak by hand. The product cannot stop that. It
can stop a research bot from inheriting a cookie that does not exist on its
machine.

A trial is not two isolated computers. One trial user is still one computer.
Naming the trial bot Figma and the paid bot Research on the same user does
not split the jar.

## Fail the check if the research screen can still open the design file

Verification is not a reread of this page. Verification is a check that
is allowed to fail.

| What you saw | What you assumed | What was true | Check that can fail |
|---|---|---|---|
| Two names in the sidebar | Two cookie jars | One jar, two windows | Probe bot, no connectors, open figma.com |
| Research has no Figma connector | Research cannot load Q4 | Connectors are not the cookie | Same visit, already signed in |
| You deleted Export Frames | Figma is signed out | Deletion does not clear sessions | Load figma.com after the delete |
| You signed out in Export Frames | All screens are signed out | Confirm on Research, not on memory | Open Research and load figma.com |
| A charter says public pages only | The model cannot see Q4 | Charters are not filesystem ACLs | Ask Research what file is open |
| iPhone pause | The session died | Pause is not a wipe | Resume on desktop, load figma.com |

If the first row fails, stop arguing with the sidebar. Sign out. Revoke at
Figma. Decide which of the three setups you are actually running.
[The Grok Bot safety checklist](/blog/grok-bot-safety-checklist)
is the pre-connect pass. This table is the post-connect pass for people who
already used grok bot screens as if they were profiles.

If you do not already have a Figma session on the computer, do not create
one just to admire the leak. Believe the docs and keep Figma off the VM.

## Send architecture, engineer, and agency readers to the page that matches their job

This page will get searched by people who needed a different page.

If you wanted the shared-computer model for everyone, mail bots, hostile
messages, offboarding order, that is
[one computer, many screens: what Grok Bot actually isolates](/blog/grok-bot-shared-computer-security).
Read it when the question is the machine, not the window.

If you are the engineer who pasted an AWS profile into a home directory and
assumed a research window could not read it, that is
[do not use separate Grok Bots as a security boundary](/blog/grok-bot-not-a-sandbox).
CLI credentials are files. Screens do not hide files.

If you run retainers and you parked Client A's Shopify admin on the same
computer Client B's research bot opens, that is
[Grok Bot for agencies](/blog/grok-bot-for-agencies-isolation).
Client names in the sidebar are not client computers.

Stay here when the object in your head is the screen: parallel work, less
tab chaos, a Figma cookie you assigned to a window.

## Stop treating parallel work as isolation the moment an unreleased file sits next to a public scrape

Parallel work is still worth doing. Isolation is a different purchase.

Keep using grok bot screens when the jobs can share a jar: public research
next to public research, a PNG drop you delete, a briefing that reads files
you already accepted as roster-wide. The focus UI is for that.

Stop using the same computer for Figma and research when Q4 cannot sit next
to a prompt that browses the public web. Buy the second eligible account, or
keep Figma on your laptop. Do not split the difference by renaming the
windows.

Edges that still look like a screen problem and are not: a human who copies
the file between accounts, a hosted MCP tool treated as per-bot isolation, a
2FA field finished just to unblock the export, an iPhone pause mistaken for
a sign-out. SpaceX acquired xAI (announced 2 February 2026) and acquired
Anysphere/Cursor (closed 14 August 2026). That did not turn screens into
vaults. xAI did not acquire Cursor. The computer is still one per eligible
user, with a focus UI on top.

**Keep reading:** [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security), [Do Not Use Separate Grok Bots as a Security Boundary](/blog/grok-bot-not-a-sandbox), [Grok Bot for Agencies: One Computer, Many Clients, One Leak Path](/blog/grok-bot-for-agencies-isolation).

## Frequently Asked Questions

### Are grok bot screens a security boundary for Figma cookies and files?

No. Grok Bot screens are a focus UI on one persistent cloud computer assigned to your eligible account, not to the bot. Each bot gets a work surface so you can run jobs in parallel with less tab chaos. Cookies, signed-in sessions, files, and command-line credentials are shared. The documentation is direct: do not use separate Bots as a security boundary. Naming one bot Export Frames and another Research isolates the window you watch. It does not isolate the Figma session. Isolation you actually have is the computer, which means the account.

### If I never connected Figma to the research bot, can it still open my team file?

Yes, if a Figma session already lives in the shared browser. Connectors are not the cookie jar. A research bot with a blank connection list can still open figma.com and land in the file you signed into on the export screen. Confirm current Figma login behaviour on Figma's own page. A charter that says public pages only is a note to the model, not a lock on the session. The safe version is dull: never sign into Figma on that computer, or put Figma on a second eligible account the research bot does not share.

### Does deleting the Figma bot sign the computer out of Figma?

No. Deleting a bot removes that bot, its conversation, and its routines. Shared-computer files and sign-ins are not isolated by bot and may remain. The Q4 cookie stays until you sign out and revoke at Figma. The PNG folder stays until you delete it. If you still need the transcript that named the export path, hide the bot instead of deleting it. When you do delete, revoke first, then remove files, then delete. Removing Research instead of Export Frames does not help either. The session lives on the VM, not under a roster label.

### What isolation do I actually have if grok bot screens are only a focus UI?

The unit is the eligible account, which is the computer. A second eligible account is a second computer. The other honest option is never signing into Figma on the Agent Computer, and exporting from your laptop instead. Cursor Pro+ at $60 a month is the cheapest paid path that includes Grok Bot. Teams Standard at $40 per user per month is another included seat. Confirm both live before you budget. Hosted MCP tokens stay with Cursor's backend, off the disk, which closes a browser-login path without turning a named screen into a vault. One-computer hygiene is valid when you would let every sibling bot open Q4.
`,
};
