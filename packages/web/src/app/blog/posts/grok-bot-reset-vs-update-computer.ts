import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Reset, Update or Recover: What Each Does to the Grok Bot Computer',
  description:
    'Grok Bot reset, update or recover: what each control does to the cloud computer, what it keeps, what Reset can lose, and the checklist to run before you press it.',
  date: '2026-09-23',
  category: 'Reference',
  content: `
# Reset, Update or Recover: What Each Does to the Grok Bot Computer

Settings -> Updates in Grok Bot holds four buttons that sound interchangeable and are not. Two of them change the desktop app. Two of them change the cloud computer your Bots work on, and one of those two can lose recent work. A fifth control, Recover computer, is not in Settings at all and only appears once something has already gone wrong.

This page is the reference for choosing between them: what each control touches, what it keeps, what it can cost, and where it lives on the desktop, on the phone and in the error state. If your computer is unreachable right now, the [step-by-step recovery walkthrough](/blog/grok-bot-cant-reach-computer) is the faster read. Come back here when you have time to decide rather than react. Every label below was checked against the Grok Bot docs as of 23 September 2026.

## Tell the four controls apart by what they touch

The first question for any of these buttons is not how drastic it sounds. It is which machine it acts on. The desktop app on your laptop and the cloud computer your Bots use are separate, and they update separately.

| Control | Acts on | What the docs say it does | What it keeps | What it can cost |
|---|---|---|---|---|
| Check for Updates, then Restart to Update | The desktop app | Installs a newer Grok Bot app on your Mac, PC or Linux machine | Everything on the cloud computer, which it does not touch | A restart of the app |
| Update, under Grok Bot's Computer | The cloud computer | Installs the latest software on the computer and keeps your files in place | Durable files and logins, per the troubleshooting page | Some in-computer sign-in sessions can drop; temporary folders and hand-installed packages are replaceable |
| Recover computer, from the error state | The cloud computer | Brings back a computer that cannot be reached | Durable files and logins | Anything kept in places the docs call replaceable |
| Reset, under Grok Bot's Computer | The cloud computer | Wipes it and rebuilds it from your last saved snapshot | Synced durable data | Recent or unsynced work since that snapshot |

Read the rows as a ladder of consequence. The app update is harmless to your Bots' work, because updating the desktop app does not reset the cloud computer. Update and Recover rebuild or repair the computer while carrying your durable files and logins across. Reset is the only control whose documented cost is work you did.

Reset also carries the most misleading name. People who press it tend to expect a factory reset, a blank machine with nothing on it. The docs describe something else: a rebuild from your last saved snapshot that keeps synced durable data. It is closer to rolling the computer back to a point in time you cannot see than to wiping it clean. The bad suggestion in the story below starts from exactly that misunderstanding, and several sections come back to it.

## Find each control on the surface you are holding

The same five controls appear in different places depending on which device you have in your hand, and one of them appears in only one place.

| Control | Desktop app | iPhone and Android app | Note |
|---|---|---|---|
| App update | Settings -> Updates, under Grok Bot Updates, which also shows the installed version | Not described in the Grok Bot docs | The account menu shows the installed version too, under About |
| Update the computer | Settings -> Updates, Update under Grok Bot's Computer | Settings -> Bot -> Bot Computer -> Update Computer | The docs' fallback when Recover computer is not offered |
| Reset the computer | Settings -> Updates, Reset under Grok Bot's Computer | Settings -> Bot -> Bot Computer -> Reset Computer | Sits right beside Update on both surfaces; read the label twice |
| Recover computer | The unreachable-computer error state; the dialog reads Recover Grok Bot's Computer | The docs do not say whether the phone's error state offers it | Not in Settings on any device |
| Recreate or terminate, for many members | Grok Bot Computers on the Grok Bot page of the Cursor dashboard | Not in the app | Enterprise organization admins only; members never see it |

Open Settings from the account menu, or with Cmd or Ctrl and the comma key on the desktop. The docs add a caution worth taking seriously: the settings dialog shows sections based on your account and rollout, and some options may not appear. If a control in this table is missing from your screen, that is not proof it does not exist for you. It may simply not have reached your account yet.

The phone column is the one to handle with care. Update Computer and Reset Computer sit next to each other under one heading, on a screen you may be reading while walking. The phone makes Reset exactly as easy to reach as Update, and the docs make it clear the two are nothing alike.

## Follow Hamid through a Friday with three buttons and one bad suggestion

Hamid is a freelance data analyst who builds weekly sales dashboards for two retail clients. His Bots are Extractor, which pulls weekly exports from client portals; Charts, which builds the Monday dashboard deck; and Ledger, which drafts invoices. His contract with the first client ended on Thursday. On Friday afternoon he wanted that client gone from his Bot computer before a new analyst account for the second client was set up on Monday. The desktop app was also showing that an update was ready.

At 15:40 a freelancer friend in a group chat gave him the fast answer: just press Reset, it wipes the machine and you start fresh. Hamid opened Settings -> Updates instead and went through the controls one by one.

| What Hamid wanted | What his friend suggested | What the docs point to | Why |
|---|---|---|---|
| The newest desktop app | Reset | Restart to Update | The app and the computer update separately |
| The first client's portal logins gone | Reset | Sign out of the site on the shared computer, then revoke in that service | Reset keeps synced durable data and is not described as signing anything out |
| The first client's files off the computer | Reset | Save what the contract requires, then remove the folder from the workspace | Reset rebuilds from a snapshot that may still contain those files |
| The first client's plugin disconnected | Reset | Uninstall the plugin and revoke its authorization in the source service | Connector tokens live on Cursor's backend, never on the computer |
| Current computer software before Monday's new account | Reset | Update under Grok Bot's Computer, once Charts is idle | Update keeps files in place; Reset could cost Charts' afternoon |
| A machine where the second client's work cannot reach the first client's | Reset | A separate Cursor user for any workload that needs its own credentials | One computer per user; separate Bots are not a security boundary |

At 15:50 he chose Restart to Update. The app restarted, and Charts carried on building the deck in the cloud the whole time, because closing the app does not stop cloud work. From 16:00 to 16:40 he ran the documented removal steps for the first client, which a later section lists in full. At 17:20 Charts posted the finished deck. At 17:30, with no Bot showing a working status and no routine due for hours, he ran Update under Grok Bot's Computer. The app showed Updating your computer for several minutes, the computer came back with every project file in place, and he had to sign in to the second client's portal once more because that session had not survived the rebuild. He never pressed Reset, and every job his friend had assigned to it got done by a control built for that job.

## Use Restart to Update for the app and expect the computer to stay put

The top half of Settings -> Updates is about the program on your own machine. Under Grok Bot Updates you can see the installed version, choose Check for Updates, and choose Restart to Update when one is ready. The docs say Grok Bot also checks for updates automatically, and Linux builds publish with every stable release.

This is the one control on the page you can use without thinking about your Bots. The docs are direct that updating the desktop app does not reset the cloud computer, and they are equally direct that closing the app or your laptop does not stop cloud work. A Bot halfway through a job keeps going while your app restarts. When the app comes back, it reconnects to the same computer, the same Bots and the same conversations.

The installed version shown here is also the first item on the docs' list of details to collect before contacting support, and the account menu shows it too, under About. Note it before and after an update, because "it broke after I updated" is only a useful sentence if you know which update.

What this control cannot do is fix anything on the cloud computer. If the complaint is that a Bot's tools are failing, a website session has expired, or the computer is unreachable, a new app version is at best a side step. The docs do include checking for an app update in the setup-stalled checklist, as a cheap early move, but the repairs that act on the computer are the next three sections.

## Schedule Update for planned maintenance after active work finishes

Update under Grok Bot's Computer is the control the docs point to for planned maintenance. It installs the latest software on the cloud computer and keeps your files in place. The troubleshooting page lists it alongside Recover computer as preserving durable files and logins, and the security page adds that image updates preserve member files when a computer on a stale image is recreated on a fresh one.

Treat it as a rebuild that carries your data across, and plan it like one. The docs ask you to wait for active work to finish before recovery when possible, and the same courtesy applies here. Before Hamid pressed it he checked two things: that no Bot in the sidebar showed a working or typing status, and that no routine was due to fire during the next hour. The second check is the easy one to forget. A routine's schedule, next run and Active toggle are visible on the phone as well as the desktop, so pausing anything due inside your maintenance window takes seconds, and you switch it back on afterwards.

Expect the rebuild to take a while. The docs say an image update can take several minutes and ask that the app stay open while Updating your computer is on screen. Do not read a slow update as a failed one, and do not reach for Reset to hurry it along.

Expect, too, to sign in to something again. The security FAQ notes that sign-in sessions inside the computer can drop when it is recreated, for example after an image update, and that sessions for company tools also follow your identity provider's policies. It happened to Hamid with one portal. It cost him a takeover and a password typed by his own hands into the site, not into chat, and nothing else.

## Reserve Recover computer for the error state, where it lives

Recover computer is the odd one out because you cannot choose to run it. The docs say it is offered only from the unreachable-computer error state, not in Settings. When the computer cannot be reached and the error state offers it, you choose Recover computer and confirm a dialog titled Recover Grok Bot's Computer.

Its place in the order is fixed. The troubleshooting page has you retry or reopen the conversation, then restart the app, then take Recover computer when it is offered, and only after that fall back to Update. Like Update, recovery is documented as preserving durable files and logins, and the docs tell you to treat temporary directories, manually installed packages and uncommitted application state as replaceable across both.

Two practical consequences follow. First, there is no preventive recovery. If your computer is reachable and merely misbehaving, Recover is not on offer and the choice is between Update and the tools inside the computer itself. Second, if you are looking for Recover in Settings during an outage, stop looking. Everything you will find in Settings -> Updates is either an app control or one of the two computer controls, and one of those two is Reset. The full sequence, with timings and the network check that comes before it, is in the unreachable-computer walkthrough linked at the top.

## Treat Reset as a rebuild from a snapshot you cannot see

Reset is described on several docs pages, and the wording is consistent. It wipes the computer and rebuilds it from your last saved snapshot. Very recent changes may be lost. Use it as a last resort. The security page adds the reassuring half: members can reset their own computer, and Reset keeps the synced durable data. The troubleshooting page adds the condition: use Reset only if recovery and update fail and you accept losing recent unsynced work.

What the docs do not say is when your last snapshot was saved. They do not publish how often snapshots are taken, and the security page states that a customer-managed point-in-time restore of an individual computer is not available. You cannot pick a snapshot, and you cannot see the timestamp of the one Reset will use. That is the heart of the decision. Every other control on this page has a cost you can estimate before pressing it. Reset's cost depends on a number you do not have.

The practical answer is to stop depending on that number. Anything that must survive a Reset should already exist somewhere that does not care when the snapshot was taken: attached to the conversation, which the docs name alongside the workspace as the place for important results; pushed to a private repository; or saved to your own machine from the file card in the conversation. If your important work already lives in one of those places, Reset becomes an inconvenience. If it lives only on the computer, Reset is a gamble whose odds you cannot see.

## Refuse Reset as an offboarding tool and run the removal list instead

Hamid's friend was reaching for Reset to solve an access problem, which is a job the docs never give it. When a client, a project or a login should no longer be available, the docs give a specific list, and Reset is not on it.

1. Pause or delete the routines tied to that work.
2. Sign out of the websites involved on the shared computer.
3. Uninstall the connectors, and revoke their authorization in the source service.
4. Remove the sensitive project files from the shared workspace.
5. Hide or delete the Bots that should no longer appear.
6. Use the account settings flow if the Cursor account itself should go.

Each step does something Reset cannot promise. Reset keeps synced durable data, so files and session state that had synced are kept through it, not removed. The docs never describe it as signing out of anything. Connector tokens are not on the computer in the first place, so no computer control can revoke a plugin's access; only uninstalling it and revoking in the source service does that. And deleting a Bot, the other tempting shortcut, removes its profile, conversation and routines while leaving shared-computer files and browser sessions where they were.

Hamid's version took forty minutes. He switched off and deleted Extractor's routine for the first client, took over the computer to sign out of that client's portal, uninstalled the client's file-sharing plugin and revoked it on the client's side, saved the deliverables his contract required from the conversation's file cards, and then removed the client's folder from the workspace. At the end he could say what was gone and why, which is more than a Reset would have let him say.

## Expect sign-ins and hand-installed packages to be the fragile parts

Across all three computer controls, the docs draw the same line between what is built to survive and what you should treat as replaceable. Knowing which side your work sits on is most of the decision.

| Item | Update | Recover computer | Reset |
|---|---|---|---|
| Project files in the shared workspace | Kept in place | Designed to survive | Kept if synced; recent unsynced changes can be lost |
| Browser sign-ins | Preserved, though some in-computer sessions can drop on an image update | Preserved | The docs do not say |
| Temporary folders, hand-installed packages, uncommitted app state | Treat as replaceable | Treat as replaceable | Treat as replaceable |
| Connector tokens | Never stored on the computer | Never stored on the computer | Never stored on the computer |
| Bots, conversations and routines | Not described as affected | Not described as affected | Not described as affected |
| A networking client installed by Team Setup (Enterprise) | May need authenticating again | Not described | May need authenticating again |

The packages row catches people who use their Bots for technical work. If a Bot installed a library or a tool by hand to get a job done, the docs tell you to treat that installation as replaceable across updates and recovery. The fix is cheap: keep a short setup script in the workspace listing what was installed and at which version, so that any rebuild ends with one command instead of an afternoon of rediscovery.

The networking row matters on Enterprise teams that reach private services through Team Setup. The private networks page lists a recreated computer, after an image update or a reset, as a reason a client session such as Tailscale did not survive, and the fix is to authenticate again. Team Setup scripts themselves run when a computer starts, so the tooling returns; the sign-in to it may not.

## Compare member controls with the Enterprise Recreate and Terminate

On Enterprise plans there are two more computer controls, and they are easy to confuse with Update and Reset. They live on the Grok Bot page of the Cursor dashboard under Grok Bot Computers, they act on many members at once, and only organization admins can use them. Team admin rights are not enough, because one computer spans every team a member belongs to. Members never see the control.

| Control | Who uses it | Scope | What members keep | What happens to running work |
|---|---|---|---|---|
| Update | The member | Their own computer | Files in place, durable files and logins | Wait for it to finish first |
| Reset | The member | Their own computer | Synced durable data | Recent unsynced work can be lost |
| Recreate | Enterprise organization admins | Many members at once | Synced Bots, files and logins | Bots are asked to pause at a safe point; if one cannot, that member's recreate fails and the computer is left as it was |
| Terminate | Enterprise organization admins | Many members at once | The durable disk, with synced Bots, files and logins | Running work stops and a running turn is lost |

Both admin actions remove apps and packages that members installed themselves, and anything the team's Team Setup manifests install comes back on the new computer. During a recreate, the member's desktop app shows Updating Grok Bot's Computer until the switch completes, and sign-in sessions inside the computer can drop. Neither action removes a member's access. If an operation fails twice for the same member, the computers page tells admins to contact support with that member's email and the time of the operation.

## Run the pre-reset checklist while the computer can still hear you

Sometimes Reset is the right answer: recovery was not offered or did not work, Update ran and failed, you waited, and the computer is still broken. When you get there, the order of the next ten minutes decides how much you lose. This is the checklist, written to be pasted into a note and filled in.

\`\`\`text
PRE-RESET CHECKLIST (run while the computer is still reachable)
Date, time and time zone: ____
Why Reset: Recover computer not offered or failed at ____
           Update under Grok Bot's Computer ran at ____ and failed at ____

1. Stop new work
   [ ] Switch Active off for every routine due in the next two hours
   [ ] Tell each Bot: finish the current step, write a checkpoint, then stop
   [ ] Confirm no Bot shows a working or typing status in the sidebar
2. Get what matters out of reach of the snapshot
   [ ] Ask each Bot to list every file it changed today under /workspace
   [ ] Copy anything kept in a temporary folder into /workspace
   [ ] Attach the results you cannot lose to the conversation, or push them
       to a private git remote (never .env files, cookies, keys or tokens)
3. Record what you will have to rebuild
   [ ] Packages installed by hand, with versions: ____
   [ ] Sites signed in on the shared computer: ____
   [ ] Networking clients that will need signing in again: ____
4. Write down the loss you accept
   [ ] Work since the last saved snapshot may be lost, including: ____
5. Only now: Settings -> Updates -> Reset under Grok Bot's Computer
   (phone: Settings -> Bot -> Bot Computer -> Reset Computer)
6. Afterwards: re-read checkpoints, sign in again, switch routines back on
\`\`\`

The two-hour window in step one is an arbitrary number; pick one that covers your longest routine. The order matters more than the numbers. Stopping new work first means nothing is being written while you copy. Copying before recording means the inventory describes a settled state. Writing down the accepted loss is the step that turns Reset from a panic button into a decision.

One line in step two deserves a warning. Moving a file from a temporary folder into the workspace protects it from Update and recovery, but Reset keeps synced durable data, and a file you moved a minute ago may not have synced yet. The docs do not say how quickly that happens. That is why the attach-or-push line is the one that carries the weight: a result attached to the conversation or pushed to a private remote does not depend on the snapshot at all.

If the computer is not reachable, you can only do steps three to six, and you build the inventory from the transcripts and the file cards in each conversation instead of from the computer. That is the strongest argument for doing step two continuously, as a habit, rather than on the day you need it.

## Answer the friend who says Reset gives you a clean machine

The friend's case deserves a fair hearing, because the instinct behind it is right. Two clients should not share a machine. A clean computer is the cleanest possible line between one engagement and the next. And Reset is a button that sounds as though it produces exactly that.

It does not, and the docs say why in their own words. Reset rebuilds from your last saved snapshot and keeps synced durable data. Whatever from the first client had synced is kept through it, while the most recent unsynced work, which might be the second client's, is the part at risk. Reset gives you an older version of the same computer, not a different one.

The clean machine the friend was describing does exist in the docs, just not behind that button. Each user gets a dedicated Firecracker microVM with its own kernel, memory and virtual devices, with hardware-level separation from other users. Within one user, every Bot shares one computer, and the docs say plainly not to use separate Bots as a security boundary. Their answer for a workload that needs its own computer and credential set is to give it its own Cursor user. If Hamid ever takes on two clients whose data must never meet on one machine, that is the move: a second Cursor user with its own Grok Bot access, not a Reset between engagements.

## Keep the durable copy off the computer with version control

The deepest fix for Reset anxiety is to make the snapshot irrelevant, and the simplest way to do that is version control. A file in a private remote repository does not care when the computer's last snapshot was taken. It survives Reset, Update, Recover and an admin terminate, because none of them touch it.

Two Bots in the catalog are built around that idea. [Persistent Bot Memory](/bots/persistent-bot-memory) keeps the durable context your other Bots reread in version control, one index file with a topic file per area, and refuses secrets, tokens, passwords and customer records outright. [VM Overwatch](/bots/vm-overwatch) backs an allowlisted folder tree up to a private git remote on a weekday cadence, excludes secrets by name and by pattern, and stops the backup and names the file if one slips into the staging area.

Look at their boundaries, because they are the argument. Persistent Bot Memory never deletes or edits a stored entry without first showing the exact text and the reason. VM Overwatch never deletes another Bot's working files without an archive step you approved. Both Bots handle durable data, and both are forbidden from the one destructive action in their domain unless a human has seen exactly what will be lost. Reset belongs in the same category. It is a destructive action on durable data, so it stays with a human who has read the checklist, and no Bot in the fleet should ever be told to run it or to suggest it.

## Recheck these labels before you press anything next quarter

This reference reflects the Grok Bot troubleshooting, settings, computer, security and computers pages as of 23 September 2026. The labels it relies on are Grok Bot Updates, Check for Updates, Restart to Update, Grok Bot's Computer, Update, Reset, Recover computer, Recover Grok Bot's Computer, Bot Computer, Update Computer and Reset Computer. The product is in beta, the settings dialog varies by account and rollout, and a renamed or moved button is exactly the kind of change that makes a reference like this one dangerous to trust. Before you press anything on this page, check the label against the current [settings documentation](https://docs.x.ai/grok-bot/settings-and-notifications).

It also stops applying when your question is not about these controls. If the computer is unreachable right now, use the recovery walkthrough linked at the top. If the question is why Bots on one computer can see each other's sessions, [one computer, many screens](/blog/grok-bot-one-computer-many-screens) covers the isolation model. If a Bot is failing for a reason that has nothing to do with the computer, start at the [fifteen-failure troubleshooting guide](/blog/grok-bot-troubleshooting). And if you administer an Enterprise team, the Grok Bot Computers controls on the dashboard have their own documentation and their own results table.

## Frequently Asked Questions

### What is the difference between Update and Reset on the Grok Bot computer?

Both sit under Grok Bot's Computer in Settings -> Updates, and both act on the cloud computer, but they differ in what they risk. Update installs the latest software on the computer and keeps your files in place, and the docs say it preserves durable files and logins, although some in-computer sign-in sessions can drop after an image update. Reset wipes the computer and rebuilds it from your last saved snapshot, so recent or unsynced work can be lost. Use Update for maintenance and keep Reset as the last resort.

### Does updating the Grok Bot app update the cloud computer?

No. The Grok Bot app and the cloud computer update separately. Check for Updates and Restart to Update, under Grok Bot Updates in Settings -> Updates, install a new version of the desktop app, and the docs say updating the desktop app does not reset the cloud computer. Your Bots keep working in the cloud while the app restarts. To rebuild the computer itself, you use Update under Grok Bot's Computer in the same section, which keeps your files in place.

### Does Reset sign the Grok Bot computer out of websites?

The docs do not describe Reset as signing anything out. Reset wipes the computer and rebuilds it from your last saved snapshot, and the security page says it keeps synced durable data, which is where browser sessions are kept. Do not rely on it to remove access. To end a site's access, take over the computer and sign out of the site, then revoke the session or change the password in that service. For plugins, uninstall them and revoke their authorization, since connector tokens never live on the computer.

### Can I choose which snapshot a Grok Bot Reset restores?

No. Reset rebuilds from your last saved snapshot, and the security page says a customer-managed point-in-time restore of an individual computer is not available. The docs also do not say how often snapshots are saved or show when the last one was taken, so treat Reset as a rollback of unknown depth. Before using it, move anything you cannot lose off the computer by attaching it to the conversation or pushing it to a private repository, and write down the work you accept losing.
`,
};
