import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Cannot See Your Files? It Reads the Cloud Computer',
  description:
    'Grok Bot cannot see files on your laptop. It sees its shared cloud computer, so put files in /workspace, not your Desktop. Screens hide nothing from other bots.',
  date: '2026-08-27',
  category: 'Reference',
  content: `
# Grok Bot Cannot See Your Files? It Reads the Cloud Computer

You dropped the PDF onto Finder Desktop, told Grok Bot to open it, and watched
it search \`/workspace\` until it said the file was missing. That miss is grok
bot cannot see files as a path problem, not a broken model and not a sandbox
doing its job. The bot is looking at a managed Linux VM in the cloud. Finder
Desktop is a folder on your Mac. Those are two disks.

This page is the missing-file page, not the object model of computer,
screen, and routine
([how Grok bots actually work](/blog/how-bots-on-grok-actually-work)),
not production keys next to a research window
([do not use separate bots as a security boundary](/blog/grok-bot-not-a-sandbox)),
and not the restart protocol for a silent sit
([Grok Bot stalled mid-job](/blog/grok-bot-stalled)).
The symptom is "I dropped the PDF on my Mac." The computer that runs the bot
is cloud Linux. The second half of the same mistake is the file you did put
on that Linux disk: every other bot on the account can open it. Screens do
not hide it.

The product line that governs both halves is on
[computer and apps](https://docs.x.ai/grok-bot/computer-and-apps):
the computer has a shared workspace at \`/workspace\`, files are visible to
every bot, and your local computer is a separate capability.

## Treat a missing-file chat as the bot looking at the wrong computer

The chat said "I cannot find leads.csv." People hear "the bot is blind" or
"the bot is sandboxed away from my laptop." Both readings waste the next
twenty minutes. The bot found the computer it was assigned. That computer
does not contain Finder Desktop.

Grok Bot works from a persistent cloud computer assigned to your user
account, not to one bot. It can use a browser, a command line, files, and
connected tools without your laptop remaining open. The bot runs as a
non-root user on a managed Linux VM. That is the hosted worker, not a Linux
desktop app. There is no Linux desktop client
([FAQ](https://docs.x.ai/grok-bot/faq)).

A missing-file line is a location report. If the listing is \`/workspace\`
and you never copied the PDF there, the report is correct. Rewriting the
charter to "try harder" does not move bytes from Finder onto Linux. The
[plain definition of a Grok Bot](/blog/what-is-a-grok-bot)
already separates the window you type into from the job that keeps a
desktop. This page names that desktop.

## Split Finder Desktop from the Agent Computer desktop before you paste the path

Three surfaces get collapsed into the word desktop. Split them before you
paste a path into chat. Finder Desktop (or the Windows Desktop folder) is a
local save on the laptop. Grok Bot does not mirror it. Closing the app,
closing the laptop, or switching bots does not copy it. The Agent Computer
desktop is the GUI of the hosted Linux VM. A file on that GUI is on the
cloud computer. A file in Finder is not. \`/workspace\` is the documented
shared project folder. Keep durable files there. Temporary directories are
replaceable. Copy important results into the shared workspace or attach
them to the conversation.

| Place | What it actually is | Default bot listing | What you do |
|---|---|---|---|
| Finder Desktop or Windows Desktop | A folder on the Mac or Windows box in front of you | The bot does not list this disk | Copy, attach, or recreate the file on the cloud computer |
| Agent Computer GUI | The hosted Linux desktop you preview in the app | Yes, if the bytes are on that VM | Still move durable work into \`/workspace\` |
| \`/workspace\` | Shared project folder on the account computer | Yes | Name that path in the next message |
| A connector or hosted tool | Account-wide service access, not a Finder folder | The tool's own objects, not Desktop.app | Confirm the file lives in that service, not on your laptop |

iPhone does not add a fourth disk: pause and resume only. Editing, history,
testing, and deleting need a macOS or Windows desk. There is no Android
client and no iPad client. A PDF on the phone is still not on the Agent
Computer. If the path starts with \`/Users/\` or \`C:\\\`, you named the laptop.
If it starts with \`/workspace\`, you named the worker.

## Keep durable drops under /workspace on the managed Linux VM

The computer-and-apps page is blunt: the computer has a shared workspace at
\`/workspace\`. That is not a style tip. It is the path the next bot, the next
routine, and a recover step are designed to keep.

Files, browser state, and supported sign-ins are designed to survive
updates and recovery. Temporary directories and uncommitted application
state are replaceable. If the CSV matters tomorrow, it belongs under
\`/workspace/leads/\`, not as a loose icon and not in \`/tmp\`. Update and
Recover preserve durable state. Reset can discard recent unsaved work. A
Finder file never entered that snapshot.

Do not treat \`/workspace\` as a vault. Files are visible to every bot.
Durable means it survives a rebuild. Private means it should not be on this
computer at all. [Inbox Triage](/bots/inbox-triage)
writes a queue file on the cloud computer, not in Downloads.
[Lead Scout](/bots/lead-scout)
is the same shape for a sheet of accounts.

## Walk a Tuesday leads.csv from Mac Desktop into an empty cloud listing

Here is the worked example this page is for. One CSV. Two computers. One
false story about isolation.

Tuesday 09:12 you export 40 rows to Finder as \`leads.csv\` on Desktop. At
09:14 you open Lead Scout and type: "Rank the leads in the CSV I just
dropped on Desktop. Do not contact anyone." The boundary is right. The path
is wrong. At 09:16 the bot lists \`/workspace\`, finds nothing named
\`leads.csv\`, and reports the file missing. You read that as grok bot cannot
see files because the product isolated the bot from your laptop.

What is actually true: Finder Desktop is on the Mac. The bot is a non-root
process on the account's Linux VM. The sheet never arrived. Isolation did
not hide it. At 09:25 you attach the file, or write it under
\`/workspace/leads/inbox.csv\` on Agent Computer, or (only if local execution
is on, the laptop is awake, and you approve) copy from the Mac path. Then
you name the cloud path. At 09:40 Lead Scout finds 40 rows. At 09:41 Inbox
Triage can \`cat\` the same file. Screens are not folders with locks.

| Clock | Your action | What you think you have | What the account actually has |
|---|---|---|---|
| 09:12 | Export \`leads.csv\` to Finder Desktop | A file the bot can open because you can see the icon | A file on the Mac only |
| 09:14 | Tell Lead Scout to rank "the CSV on Desktop" | A path both of you share | A nickname for a disk the bot does not list by default |
| 09:16 | Bot reports missing file | Isolation, or a broken bot | A correct listing of an empty \`/workspace\` |
| 09:25 | Attach or copy onto \`/workspace/leads/inbox.csv\` | You finally "gave the bot access" | You moved bytes onto the account computer |
| 09:41 | Inbox Triage can \`cat\` the same path | A leak, or a second bug | Documented sharing: files are visible to every bot |

The false story at 09:16 is the one this page exists to kill. Grok bot cannot
see files on Desktop.app because Desktop.app is not the computer. The true
story at 09:41: the fix puts the sheet on a disk every sibling can read.

## Place the file on the shared computer, then name the path in the next message

Moving the bytes is a separate step from asking for a rank. Do the move.
Then name the path. A prompt that says "the CSV I just dropped" names a
gesture the Linux VM did not observe.

Attach it to the conversation, then tell the bot to write a durable copy
under \`/workspace/project/\`. There is no audit view of bot actions yet, so
the file on disk is the record. Or create it on Agent Computer: paste,
download from a URL the cloud computer can reach, or write the rows. That
is the Linux desktop, not Finder.

Copy from the laptop only when local execution is enabled and you approve
it ([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Settings, then General, then Agent, then Execution on Local Computer:
Ask every time (the default), always allowed, or never allowed. Use Never
allowed unless a bot has a specific reason to work on local files. Those
settings do not stop cloud work.

Then name the path: "\`/workspace/leads/inbox.csv\` is the input. Rank. Do
not send." Do not invent an auto-sync from Finder. If you did not attach,
create, or copy, assume the cloud folder is still empty.

## Assume every other bot on the account can open what you just copied

The missing-file complaint has a twin. You finally put \`leads.csv\` on the
computer. Then a second bot named research-safe or temp reads it without
being asked. That is not a bypass. That is the architecture.

Every bot on the account uses the same computer. Files are visible to every
bot. One bot can continue from work another bot saved. Do not place a file
on it if another bot should not use it. Do not use separate bots as a
security boundary. A second screen named "no files" does not create a
second \`/workspace\`. Deleting the copier bot does not remove the CSV. The
card vanishes. The sheet stays. Delete the file first if the sheet should
die with the job.

The [sandbox page](/blog/grok-bot-not-a-sandbox)
walks \`~/.aws\` after a production configure. This page does not need the
AWS plot. If Inbox Triage can \`cat\` the leads sheet, the sheet is an
account file, not a Lead Scout secret.

| Object you placed | Where it sits idle | Survives deleting the copier bot? | What a sibling bot can do |
|---|---|---|---|
| \`/workspace/leads/inbox.csv\` | Shared filesystem | Yes, until you delete the file | Read, copy, or feed it into another job |
| A browser download left on the Agent Computer GUI | Shared filesystem | Yes, until you remove it | Open it from a second screen |
| Finder Desktop \`leads.csv\` | Your laptop | Irrelevant to delete-bot | Nothing, until you copy it onto the cloud computer |
| Hosted MCP sign-in token | Cursor's backend, not the computer | The token was never a file on disk | Call the same hosted tools on the account |

The Finder row is the miss. The \`/workspace\` row is the leak people call a
miss. Train yourself to see both.

## Throw away the idea that a second screen hides the CSV

People add a second bot the way they add a second user on a laptop. Grok
Bot does not sell that. What you buy is a named job with its own screen on
a computer you already have. Ten bots are ten screens and one filesystem.

A charter that says "you may not read \`/workspace/leads/\`" is an instruction
to the model, not a Unix permission. A curious prompt can still \`cat\` the
path. If the sheet cannot sit next to a mail-sorting prompt, it cannot sit
on this computer. Isolation is another eligible account or never placing
the file, not a second tile in the sidebar.

[Chief of Staff Briefing](/bots/chief-of-staff-briefing)
is a useful adjacent job: an internal brief that never sends. If that
briefing bot and Lead Scout share an account, they share \`/workspace\`. A
brief that quotes the leads sheet is reading account files, not stealing
from a sandbox. Write the roster as if every named bot has a key to the
cabinet. Because it does.

A public share link copies configuration. It does not share your computer.
Still do not put customer rows in a bot you share. The disk is how a CSV
leaks on a private account.

## Sort a miss into Finder drop, local-ask wait, or a truly empty folder

Three failures produce the same chat line. Mixing them is how people "fix"
a local-computer approval by rewriting the charter, or "fix" an empty
\`/workspace\` by enabling Always allowed on the laptop.

| Symptom | What is actually true | First move | What not to do |
|---|---|---|---|
| Bot lists \`/workspace\` and the CSV is absent | You never placed the file on the cloud computer | Attach, create, or copy onto \`/workspace\`, then name the path | Create a second bot for "disk access" |
| Bot proposes a command on \`/Users/...\` or \`C:\\\` and sits | Local execution is Ask every time, or Never allowed, or the laptop is asleep | Open the approval, or copy the file onto the cloud disk instead | Type "just read Desktop" until it bypasses the policy |
| \`/workspace/leads/\` has files, but not the name you used | Wrong filename, wrong folder, or last week's sheet | List the directory. Open the file that exists | Tell it to search the Mac |
| Chat is silent, preview looks frozen, files already exist | A stall, not a miss | Inventory, then resume from the last checkpoint | Start the whole job over |
| File was there yesterday, gone after a reset | Reset can discard recent unsaved work outside durable state | Keep copies under \`/workspace\` project folders | Assume Finder Desktop was in the snapshot |

If NOTES.md and screenshots are already under \`/workspace\`, you have a
stall, not a miss. Use
[the stall restart](/blog/grok-bot-stalled).
Do not copy the CSV a second time. The local-ask row is a wait: laptop
awake, approval if Ask every time, and Never allowed will never open
Desktop.app. Put the artifact in \`/workspace\`. On iPhone, pause a looping
routine and debug the folder from a Mac or Windows desk.

## Grant that local execution exists, then still refuse Desktop.app as the default

The strongest objection to this page is honest: Grok Bot can run commands
on the Mac or Windows computer in front of you. So why not leave
\`leads.csv\` on Desktop.app and approve the read?

Because local execution is a bolt-on, not the worker. The shared Grok Bot
computer runs in the cloud. Access to the laptop is a separate capability.
The default is Ask every time. Always allowed turns your Desktop into a
second filesystem the bot can touch whenever a prompt wanders. Never
allowed still lets the bot use the cloud computer. For almost every standing
job, Never allowed plus a file already in \`/workspace\` is the setup that
survives a closed lid.

A closed lid is the practical failure. Cloud work continues after you close
the app, the laptop, or the iPhone. A command on Mac files stops when the
machine sleeps, and it still needs a local-computer approval. If the rank
should finish at 02:00, Desktop.app is a wait, not a location.
[Closed-laptop behavior](/blog/grok-bot-runs-with-laptop-closed)
is that split. This page is the daytime version: even at 09:14, the default
search is \`/workspace\`.

Organization administrators can restrict local-computer execution. Confirm
on the current admin surface. A team-level Never / Ask / Always ceiling is
documented as not fully shipped. Do not design around a control you have
not seen. Even a successful local read is not a durable store: if the bot
then writes \`/workspace/leads/inbox.csv\`, sibling bots can open that copy.
You duplicated the sheet onto the account disk. Rank a laptop-only sheet
yourself, or copy a redacted extract onto \`/workspace\`.

## Fail a visibility check that lists /workspace before you rewrite the charter

A missing-file report is not evidence that the charter is wrong. Prove the
path first. The check has to be allowed to fail.

Open Agent Computer. List \`/workspace\` and the project folder. If
\`leads.csv\` is not in the list, the file is not there. Then list the same
folder from a second bot. If both can see the file, screens are not hiding
it. That sibling check should fail your isolation story. Confirm Finder
Desktop separately: Mac yes and \`/workspace\` no means copy. Mac no and
\`/workspace\` no means you never had the file. Both yes means debug the
rank, not the path.

There is no audit view of bot actions yet. The two listings are the log.
Keep them in a note you own. If the charter still needs a change, change
the path line, not the personality.

## Keep Grok Build skill files and laptop repos out of this Grok Bot miss

A second false diagnosis shows up among people who already keep project
files in git: they point Grok Bot at a SKILL.md, a CLAUDE.md, or a repo on
the Mac and expect the Bot runtime to read it the way Grok Build would.

Claude Code compatibility, SKILL.md, CLAUDE.md, marketplaces, hooks, and
the AGENTS.md family are Grok Build facts. Grok Bot docs do not describe
Bot reading those files. Pasting a SKILL.md into a Bot charter because
"Grok is compatible" is a category error
([Grok Bot vs Grok Build](/blog/grok-bot-vs-grok-build)).
A missing-file report on Grok Bot is not Build failing to load a skill. It
is Bot listing \`/workspace\` on the account computer.

Your laptop git tree is a local-computer path, same approval story as
Desktop.app, and still not the durable Grok Bot store. A weekday ranking
job belongs under \`/workspace/leads/\`, briefed in ordinary language.

Teach-by-demonstration will not copy Finder. It records up to ten minutes
of a browser workflow, no microphone, desktop only, and produces a draft
skill. A click path is not a file copy from Desktop.app.

## Hold send and share behind a human even when the task is only reading a sheet

A file-read job still needs a boundary. The moment the sheet is on the
cloud computer, every bot on the account can open it, and a prompt can talk
a mail-connected bot into attaching it. Reading is not the end of the blast
radius. Leaving is.

[Least privilege](/blog/least-privilege-bots)
still applies: connect only what the workflow needs, keep sending,
publishing, purchasing, deletion, and production changes behind approval.
An approval controls the proposed action. It does not reverse work already
completed. If a bot already mailed the CSV, deny will not unsend it.

Write the never-line into the file-reading charter. Lead Scout never
contacts anyone. Inbox Triage never sends. Chief of Staff Briefing never
sends. Those are instructions plus approval rules, not filesystem ACLs.
They matter more once the sheet exists on a disk the mail bot can see. Do
not paste customer rows into chat. Attach or copy, then point at
\`/workspace\`. If the sheet cannot sit next to a mailbox cookie, it cannot
sit on this computer. Cursor Pro+ at $60 a month is the cheapest paid path
that includes Grok Bot, with Teams Standard at $40 per user per month as
another included seat. Confirm live prices before you budget a second
seat. The
[shared-computer security page](/blog/grok-bot-shared-computer-security)
is the blast-radius map.

## Write overnight jobs against cloud paths so a closed lid cannot hide the CSV

Routines make the Finder drop worse. A routine assigns a workflow to one
bot. The ceiling is 50 routines on that bot. The app keeps the 20 most
recent run records per routine. Deleting the bot deletes its routines.
Nothing is team-level. If the 07:00 job says "rank the CSV on Desktop,"
07:00 is a local-computer wait on a laptop that is probably asleep.

Put the input on the worker before you sleep. The 07:00 text should name
\`/workspace/leads/inbox.csv\`, not Desktop.app. Closing the laptop does not
stop cloud work. It does stop local-computer commands. Mixing those two
sentences is how a standing research job becomes a silent sit.

If you must refresh the sheet from a Mac export, copy onto \`/workspace\` at
the desk, then let the routine read only the cloud path. iPhone pause can
stop a looping routine. It cannot list folders or attach a CSV. A
background turn keeps going on the cloud computer after you quit the app.
Start it on \`/workspace\` or do not start it.

## End this path lesson at work that never needed a file from Finder

This page stops where the job never needed a laptop file. A connector-only
mail sort does not need Desktop.app. A file that must stay on an encrypted
laptop disk is not a Grok Bot overnight job: copy a redacted extract onto
\`/workspace\`, or keep the work local. Always allowed plus a closed lid
fails at 02:00.

A second eligible account is the move when the sheet cannot share a
computer with a mailbox. A second bot is not that move. Desks are macOS
(Apple silicon and Intel) and Windows (x64 and Arm64), plus iPhone on iOS
18 or later for pause and resume. Linux desktop, Android, and iPad are not
clients. The worker is still Linux.

The claim is narrow. Grok bot cannot see files on your laptop. It sees the
shared cloud computer. Put the file in \`/workspace\` (or another path that
already exists on that Linux disk). Screens do not hide it from other bots.
Paste a charter that names the disk, the path, and the stop. Then list the
folder once before you trust the first rank.

\`\`\`text
You are Lead Scout for a ranking pass. You run on the Grok Bot cloud computer.

Input
Read only /workspace/leads/inbox.csv. If that path is missing, write
MISSING:/workspace/leads/inbox.csv into /workspace/leads/NOTES.md and stop.
Do not search Finder, Desktop.app, /Users, or any local Mac or Windows path.
Do not ask to enable local execution.

Job
Rank the rows. Write /workspace/leads/YYYY-MM-DD/ranked.md. Quote the
filename you actually opened.

Machines
Never run a command on the local computer. Durable files live under
/workspace/leads/ only.

Boundary
You never contact a prospect. You never send mail. You never attach
inbox.csv to a message. You never copy the sheet outside /workspace/leads/.
A human sends. You rank.

If a sibling bot already wrote a file in this folder, leave it. Do not
overwrite ranked.md from an earlier pass. Append a new dated file.
\`\`\`

**Keep reading:** [Do Not Use Separate Grok Bots as a Security Boundary](/blog/grok-bot-not-a-sandbox), [How Grok Bots Actually Work, Without the Dedicated-Computer Myth](/blog/how-bots-on-grok-actually-work), [Grok Bot Stalled Mid-Job: How to Restart Without Doubling the Work](/blog/grok-bot-stalled).

## Frequently Asked Questions

### Why can Grok Bot not see a file I dropped on my Mac?

Grok Bot cannot see files on your laptop by default because it works from a persistent cloud computer assigned to your user account, a managed Linux VM, not Finder. Finder Desktop lives on the Mac or Windows box in front of you. The bot lists /workspace on that cloud machine. A PDF you dragged onto Desktop.app never arrived on the Linux disk. Local-computer execution is a separate setting that needs the laptop awake and an approval under your local-computer policy. Put durable files under /workspace, then tell the bot that path.

### If I put the CSV in /workspace, can other bots on my account read it?

Yes. Files on the shared computer are visible to every bot. Screens are work surfaces, not folders with locks. The documentation says not to place a file on the computer if another bot on the account should not use it, and not to use separate bots as a security boundary. Deleting the bot that copied the CSV does not remove the file. If the sheet should stay private, keep it off that computer, or use a second eligible account with its own machine.

### Does a local-computer approval let Grok Bot read Desktop.app files?

Only if local execution is enabled, you approve the command, and the Mac or Windows box is awake. The default is Ask every time. Never allowed still lets the bot use the cloud computer. A Finder Desktop path is not /workspace. After a successful local read, if the bot copies the sheet onto the cloud disk, sibling bots can open that copy. Confirm the current setting under Settings, General, Agent, Execution on Local Computer, and treat /workspace as the durable drop anyway.

### Is a missing-file report the same as a stalled job?

No. A missing-file report usually means the bot searched the cloud path and found nothing, often because the file is still on Finder Desktop. A stall is a silent sit with work possibly already on disk. Open the screen, list /workspace, then decide. If the folder is empty, copy the file onto the computer and name the path. If notes and screenshots already exist, resume from the last checkpoint instead of starting over. Do not treat both failures as one rewrite of the charter.
`,
};
