import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Cannot Reach Your Computer: Recover It Without Losing Files',
  description:
    'When Grok Bot cannot reach your computer, climb the six documented recovery steps in order, keep your files and logins, and hold Reset back until nothing else works.',
  date: '2026-09-23',
  category: 'Tutorial',
  content: `
# Grok Bot Cannot Reach Your Computer: Recover It Without Losing Files

An error saying Grok Bot cannot reach its computer is frightening mostly because of what lives on that computer: every file your Bots saved, every site they are signed in to, and whatever they were halfway through when it went dark. The docs treat it as a recoverable state with a fixed order of repairs, running from the one that changes nothing to the one that can lose recent work. This page walks that order through one bookkeeper's month-end morning, with the time each step took and what it kept, so the button you press at 07:00 with a coffee in one hand is the right one.

The six steps, in the order the troubleshooting docs give them: Retry or reopen the conversation; restart the app; choose Recover computer from the error state; run Update under Grok Bot's Computer; wait for the replacement computer; and only then, if you accept losing recent unsynced work, Reset. Everything here was checked against the Grok Bot docs as of 23 September 2026.

## Confirm it is the unreachable state and not setup still running

Three situations look alike at a glance, and only one of them is the subject of this page. Before you climb anything, work out which one you are in.

| What you see | Which state it is | First move |
|---|---|---|
| Starting your computer or Updating your computer, with progress still changing | First-time setup or an image update in progress | Keep the app open and wait; the docs say this can take several minutes |
| The same setup label, but frozen or failed | Setup has stalled | Retry from the error state, restart the app, check for an app update, then Update under Grok Bot's Computer |
| An error saying the computer cannot be reached | The unreachable state | Start the ladder below at the first step |
| Chat still works, the computer never connects, and only on one network | Your network may be blocking the computer's address | Test on a phone hotspot before you touch the computer |

The first row is not a fault. Initial setup and image updates take time, and the docs ask you to keep the app open until the label completes. If progress is still changing, the right action is patience. Only when it stops changing or fails does the setup case join the recovery path, and even then it joins at the gentle end.

The last row is the one that wastes the most mornings, and it has its own section below. The short version: recovery controls act on the cloud computer. None of them can fix a network that refuses to let your desktop talk to it.

It also helps to separate the app from the computer. The docs say a Bot's cloud work can continue even when the desktop or mobile app is disconnected, and that Bot profiles and saved conversations are not necessarily lost when the computer is temporarily unreachable. An unreachable computer is a problem with one machine in the cloud. It is not evidence that your Bots, their conversations or their routines are gone.

## Climb six rungs in the documented order and stop at the first that works

The order exists because each rung costs more than the one before it, and the cost is measured in what you might lose rather than in effort. Stop climbing the moment the computer answers.

| Rung | Action | Stop climbing when | What skipping ahead risks |
|---|---|---|---|
| 1 | Retry, or reopen the conversation | The Bot's screen or progress comes back | Nothing yet; this rung is free |
| 2 | Quit and reopen the Grok Bot app | The error clears after the restart | Nothing; a restart does not touch the cloud computer |
| 3 | Recover computer, from the error state only | The computer becomes reachable | Recovery is designed to keep durable files and logins |
| 4 | Update under Grok Bot's Computer | The rebuilt computer comes up | Update keeps files in place; some sign-in sessions may need renewing |
| 5 | Wait for the replacement computer | It becomes available | Pressing Reset out of impatience turns a safe wait into a lossy one |
| 6 | Reset, with the loss accepted | Nothing else worked | Recent or unsynced work since the last saved snapshot |

Rungs one to five share a property that rung six does not. Their worst case is lost time, plus anything you had left in places the docs already call replaceable, such as temporary folders. Recover computer and Update are documented as preserving durable files and logins, and a retry or a restart changes nothing on the computer at all. Reset is the only rung whose worst case is lost work, which is why it is last and why the rest of this page keeps coming back to it.

## Walk Folake's month-end morning from 06:55 to a recovered computer

Folake is an independent bookkeeper with four small-business clients. Her Bot called Month-End reconciles each client's bank export against the ledger and builds a month-end workbook; a second Bot, Receipts, matches receipts from a forwarding inbox. On the last working day of the month she left Month-End running overnight across all four clients, with a charter that told it to write a checkpoint line after each one.

| Time | Rung | What Folake did | What she saw |
|---|---|---|---|
| 06:55 | none | Opened Month-End on her phone, on mobile data | The unreachable-computer error instead of progress |
| 06:56 | 1 | Reopened the conversation | The same error |
| 06:58 | 2 | Closed the phone app completely and opened it again | The same error |
| 07:00 | none | Opened Settings -> Bot -> Bot Computer on the phone | Update Computer and Reset Computer; she pressed neither |
| 07:35 | 1 again | At her desk on home Wi-Fi, chose Retry in the desktop app | The same error, now with Recover computer on offer |
| 07:36 | 3 | Chose Recover computer and confirmed Recover Grok Bot's Computer | Recovery started |
| 07:49 | waiting | Pressed nothing else for thirteen minutes | The computer was reachable and Month-End's screen was back |
| 07:52 | verify | Checked the workspace, the ledger sign-in and the checkpoint | Three of four clients done; a scratch file in a temporary folder gone |
| 07:55 | resume | Told Month-End to start at client four and not repeat one to three | The workbook finished at 08:31 |

The decision that mattered was at 07:00. Reset Computer sat one tap away on her phone, and she was halfway through the school run with a morning of client calls ahead. She did not press it because she could not answer a simple question: had the overnight workbook been saved somewhere that a Reset would bring back? The docs say Reset rebuilds from the last saved snapshot and that recent or unsynced work can be lost. She had no way to see when that snapshot was taken, so she could not price the loss, and she waited thirty-five minutes for her desk.

Two small details did real work. The error first appeared on mobile data and then again on her home Wi-Fi, two different networks, which made a network block on her side unlikely and let her skip the hotspot test. And the scratch file that vanished was in a temporary folder, which the docs tell you to treat as replaceable. The workbook itself, the checkpoint file, and the ledger sign-in all came through recovery untouched, which is what the docs say Recover computer is designed to do. Thirteen minutes is her number from that morning, not a figure the docs publish.

## Press Retry or reopen the conversation before anything else

The first rung costs nothing, so take it every time, even when you are sure it will not help. The error may be transient, and a retry is the only step that cannot make anything worse. On the desktop the error state offers Retry. On the phone, backing out of the conversation and opening it again does the same job.

What you should not do at this rung matters more than what you should. Do not message the Bot asking it to fix itself; it works on the very computer that cannot be reached. Do not delete the Bot, because deleting removes its profile, its conversation and its routines, and none of those are the broken part. And do not build a fresh Bot to see whether it can connect. Every Bot on your account uses the same cloud computer, assigned to your user rather than to any one Bot, so a brand new Bot would be looking at exactly the same unreachable machine.

If you run several Bots, glance at one other Bot's conversation while you are here. If it shows the same error, you have confirmed what the docs already imply: this is a problem with the one shared computer, and you fix it once for the whole roster, not Bot by Bot.

## Quit and reopen the app on the device showing the error

The second rung is a full restart of the Grok Bot app. Quit it rather than just closing the window, then open it again and go back to the conversation. On a phone, close the app from the app switcher and reopen it. A restart clears whatever state the app itself was holding and asks for a fresh connection.

While you are in the desktop app, the setup-stalled checklist in the docs adds a related step: check for a Grok Bot app update. Open Settings -> Updates and choose Check for Updates, and if one is ready, Restart to Update. Grok Bot also checks for updates on its own, so there may be nothing waiting.

Be clear about what that button does and does not touch. The Grok Bot app and the cloud computer update separately. Updating the desktop app does not reset or rebuild the computer, and it cannot lose anything your Bots saved. It is safe to do at any point, which is exactly why it belongs this early. The controls that act on the computer itself live lower down in the same Settings section, under the heading Grok Bot's Computer, and they are rungs four and six.

## Rule out a corporate gateway when chat works and the computer never does

If you are on a managed network, a work laptop, or anything with a security client running, stop here before rung three. The proxy page in the docs describes a failure that looks exactly like an unreachable computer and has nothing to do with the computer at all.

The desktop app talks to two places. Chat, sign-in and approvals go to Cursor's API under \`*.cursor.sh\`. The computer's setup, screen and shell go to a hostname nested two levels under cursorvm.com. Gateways that inspect TLS traffic, with Zscaler named as the common example, often let the first through and break the second. The result is an app where chat keeps working while the computer never connects, or where computer setup hangs.

The tells are specific. It works on a phone hotspot or a personal device and fails on the corporate network. Or it works in the office and fails at home on the same laptop, because the gateway client applies a different off-network profile that never got the exceptions. The test is equally specific: tether to a hotspot and try again. If the computer connects on the hotspot, no recovery control will help you, because Recover, Update and Reset all act on the computer and none of them changes your network. Worse, if you climb to Reset while the gateway is the real cause, you risk losing recent work and the error comes straight back.

The fix belongs to whoever runs the gateway. The docs ask IT to allow both \`*.cursorvm.com\` and \`*.*.cursorvm.com\`, since a single-level wildcard matches only one label and leaves the nested hostname blocked, to exempt those domains from TLS inspection and response buffering, and to apply the change to every profile, including off-network ones. Folake skipped this section because her error had already appeared on two unrelated networks. On a managed laptop, it should be the first thing you rule out.

## Take Recover computer from the error state when it appears

Recover computer is the first rung that acts on the cloud computer, and it has one unusual property: it is offered only from the unreachable-computer error state. It is not in Settings. If you go looking for it in Settings -> Updates you will not find it, and you may press something else instead. When it appears, choose it, and confirm the dialog, which the docs say is titled Recover Grok Bot's Computer.

Recovery is designed to preserve durable files and logins. The docs describe files, browser state and supported sign-ins as built to survive normal updates and recovery, while temporary directories, manually installed packages and uncommitted application state should be treated as replaceable. That split is what Folake saw at 07:52: the workbook and the ledger session survived, the scratch file in a temporary folder did not.

The docs also ask you to let active work finish before recovery when possible. In an unreachable state you may not be able to see what the Bots were doing, so use the transcript instead. Note the last thing each Bot reported before the error, because that is your baseline when you verify afterwards.

On the phone, the docs name two computer controls under Settings -> Bot -> Bot Computer, Update Computer and Reset Computer. They describe Recover computer as belonging to the error state and do not say whether the phone's error state offers it. Folake chose not to experiment from the pavement and waited for her desk, which cost thirty-five minutes and nothing else. If you cannot reach a desktop and the phone offers only Update and Reset, Update Computer is the next rung. Reset Computer is not.

## Run Update under Grok Bot's Computer when recovery is not offered

If the error state never offers Recover computer, or recovery ran and the computer is still unreachable, the fourth rung is Update. On the desktop, open Settings -> Updates and choose Update under Grok Bot's Computer. On iPhone and Android it is Update Computer under Settings -> Bot -> Bot Computer.

Update installs the latest software on the cloud computer and keeps your files in place, and the troubleshooting docs list it alongside Recover computer as preserving durable files and logins. Treat it as a rebuild that carries your data across, not as a patch.

One caveat is worth knowing before you press it. The security FAQ notes that sign-in sessions inside the computer can drop when the computer is recreated, for example after an image update, and that sessions for company tools also follow your identity provider's policies. For a personal account that may mean signing in to a site again. For a company tool behind single sign-on it may mean going through the organization login again. Neither loses files, but plan for a takeover or two after the update finishes.

Do not confuse this button with the app update two headings above it. Check for Updates and Restart to Update change the desktop app. Update under Grok Bot's Computer rebuilds the machine your Bots work on. Same Settings section, different target.

## Wait out the replacement without pressing anything else

The fifth rung is the hardest one to follow: wait for the replacement computer to become available. The docs say an image update can take several minutes and ask you to keep the app open while the setup label, such as Updating your computer, is still changing. They do not give a number, and this page will not invent one.

The characteristic mistake at this rung is pressing Reset because the update feels slow. That turns an operation designed to keep your files into one that can lose recent work, in exchange for nothing, since Reset also has to rebuild a computer and takes its own time. If you need a rule to stop yourself, write one down before you start. Folake's is thirty minutes of unchanged progress before she considers rung six. The number is her own and arbitrary; the point is deciding it while calm rather than inventing it while anxious.

While you wait, do something useful. Read back through each Bot's transcript and list what it finished and what it was doing when the error began. That list is the inventory you will need if you do end up at rung six, and it is the baseline for the checks after recovery if you do not.

## Leave Reset for last and only with the loss accepted in writing

Reset is the sixth rung, and the docs use unusually direct language about it: use it only if recovery and update fail and you accept losing recent unsynced work. On the desktop it is Reset under Grok Bot's Computer in Settings -> Updates. On the phone it is Reset Computer under Settings -> Bot -> Bot Computer. It rebuilds the computer from your last saved snapshot, and the docs do not say how often snapshots are taken.

"Accepted in writing" is meant literally. Before you press it, write down what you expect to lose, using the inventory from rung five: which Bot was mid-task, which files it had just created, which results appear in the conversation as file cards. An unreachable computer cannot be copied from, so this list is the only pre-reset preparation available to you at this point. Results the Bots already attached to the conversation are your safety net: the docs name the conversation, alongside the workspace, as the place to keep important results, and Reset is described as acting on the computer.

This walkthrough deliberately stops short of the full comparison. What each control keeps, what it can lose, where every button lives on each surface, and the checklist to run while the computer is still reachable are all in the [decision reference for Reset, Update and Recover](/blog/grok-bot-reset-vs-update-computer). Read it before the next outage rather than during this one.

## Verify files, sign-ins and the checkpoint before resuming work

A computer that answers again is not the same as work that is safe to resume. Folake spent three minutes on these checks before she let Month-End continue, and they are the three minutes that stop a recovery turning into duplicated work.

| Check | How to do it | If it fails |
|---|---|---|
| Durable project files | Open Agent Computer, or ask the Bot to list its folder in the shared workspace | Stop; compare against the file cards in the conversation before anything is rebuilt |
| Temporary and scratch files | Look for anything a Bot kept outside the workspace | Treat it as gone; the docs call temporary folders replaceable |
| Browser sign-ins | Open each site the Bots rely on and look at the signed-in state | Take over the computer and sign in yourself; never paste the password into chat |
| Routines that were due during the outage | Open each routine's Run history | Decide by hand whether the missed run should happen now, and never let two runs overlap |
| The Bot's last checkpoint | Read the final checkpoint line | Resume from it, and never restart a job that includes a send |

Connector tokens never live on the computer; the docs say they stay on Cursor's backend, so recovery should leave plugins alone. If a plugin does fail afterwards, reopen it under Marketplace -> Your plugins and authenticate again.

The routine check deserves a second look. A scheduled run that fell inside the outage may have failed, and the app keeps the 20 most recent run records per routine, so a failed run should show up there. What you must not do is rerun it blindly while the Bot is also resuming its interrupted job, or the two will fight over the same files.

## Stop debugging Bots one at a time when the shared computer is the problem

An unreachable computer takes your whole roster with it, because the docs assign one persistent cloud computer to each user and every Bot on that account works on it. The Bots have separate screens and separate conversations, but one machine underneath. That changes how you should read a bad morning: when two or three Bots report trouble at once, the first suspect is the shared computer, not three separate Bot problems.

It also changes what a watchdog can do for you. [Stuck Bot Foreman](/bots/stuck-bot-foreman) scans sibling Bots for stalled runs and pages you only when a human has to step in, and its charter says outright that sibling Bots share one computer, so a stuck sibling may be waiting on the same session, disk or login. A foreman works through the same shared computer as the Bots it watches, so do not count on it to report an outage of that machine. Where it earns its keep is the hour after recovery, when it can tell you which siblings resumed and which are still frozen.

Its boundary is the right model for this whole page. The foreman never restarts, deletes or rewrites another Bot. No Bot in your fleet should hold that kind of power over the machine, and no Bot should ever be the one that decides to Reset it.

## Answer the operator who says Reset first would have saved time

Here is the objection at full strength. Recovery is a ladder of six rungs and some of them involve waiting; Reset is one button. On plenty of mornings, pressing Reset at 07:00 would have produced a working computer faster than Folake's route did. Why climb when you could jump?

Because the two routes have different worst cases, and you do not get to choose which morning you are having. Rungs one to five can cost you time and anything left in folders the docs already call replaceable, and that is the most they can cost. Reset can cost you the work done since a snapshot whose timing the docs do not publish, which means you cannot price the loss before you press. Folake's thirteen minutes of waiting protected a night's reconciliation across three clients. If Reset had rolled her back past even one of them, she would have paid for her saved minutes several times over.

And there is a class of morning where Reset does not work at all. If the cause is a network gateway, every computer control fails the same way, and Reset is simply the version that also deletes something. Climbing the ladder costs minutes. Jumping to the last rung can cost the work and still leave you unreachable.

## Write checkpoints to the workspace so the next outage costs nothing

The reason Folake's recovery was boring is that Month-End's charter had prepared for it. The docs tell you to keep durable project files in the shared workspace, in clear project folders, and to copy important results there or attach them to the conversation. A checkpoint file turns that advice into a mechanical resume. This is the block from Month-End's description, with her client details replaced by placeholders.

\`\`\`text
Name: Month-End
Job: reconcile each client's bank export against the ledger and build the
month-end workbook in /workspace/month-end/<YYYY-MM>/.

Checkpoints:
  After each client, append one line to /workspace/month-end/<YYYY-MM>/CHECKPOINT.md
  <time and time zone> | client <n> of <total> | <file written> | done
  Never keep anything you need only in a temporary folder.

After any outage, recovery or update:
  Read CHECKPOINT.md first. Resume at the first client not marked done.
  Never redo a client marked done. Never re-send anything.

If the computer cannot be reached, stop and report the last checkpoint line.
Never ask me to Reset the computer, and never suggest it as a fix.
Never email a client. Draft the cover note and wait for my Send.
\`\`\`

The checkpoint lines are why 07:55 took one sentence. The workspace path is why the workbook survived. And the last three lines are the boundary: the Bot never decides that a Reset is warranted, never sends anything to a client on its own, and never repeats finished work after an interruption. Reset stays a human decision, made with the expected loss written down.

For a copy that survives even a Reset, get the files off the computer. [VM Overwatch](/bots/vm-overwatch) backs an allowlisted folder tree up to a private git remote on a weekday cadence, excludes secrets by name and pattern, and stops the backup if it finds one. Its boundary rules out the two ways a backup Bot could hurt you: it will not remove files another Bot is working on, and it will not commit a secret. With that in place, the worst case of rung six shrinks from lost work to a pull from a repository.

## Drop this walkthrough once the computer answers but the work is wrong

This page ends where the computer becomes reachable. If it answers and a Bot is still silent, the problem has moved to that Bot's conversation, and the page on [why a Grok Bot stops responding](/blog/grok-bot-not-responding) picks up from there. If a job was half finished when the outage hit and you need to resume it without doubling anything, [the stalled-job guide](/blog/grok-bot-stalled) covers that, and the [troubleshooting guide to fifteen common failures](/blog/grok-bot-troubleshooting) maps the rest. If the app shows an error notice with Copy request ID, take the whole ID before dismissing anything and use the [report checklist for Grok Bot support](/blog/grok-bot-support-request-id).

It also stops applying at the organization level. On Enterprise, organization admins can recreate or terminate members' computers in bulk from Grok Bot Computers on the Cursor dashboard, which is a different set of controls with its own results table. For how a single shared computer affects credentials and isolation more broadly, see [what Grok Bot actually isolates](/blog/grok-bot-shared-computer-security).

The six-step order, the control names and the phone path above are as the Grok Bot troubleshooting, settings and computer pages described them as of 23 September 2026. Because Grok Bot is still a beta product, labels and steps can move. If a label on your screen differs from this page, or the docs reorder the steps, follow the [current troubleshooting page](https://docs.x.ai/grok-bot/troubleshooting) and treat this walkthrough as out of date.

## Frequently Asked Questions

### What should I do first when Grok Bot cannot reach my computer?

Choose Retry in the error state, or close and reopen the conversation, then quit and restart the Grok Bot app. Both steps are free and change nothing on the cloud computer. If the error persists, take Recover computer when the error state offers it, and if it does not, open Settings -> Updates and run Update for Grok Bot's Computer. Wait for the replacement computer to come up. Reset comes last, only if recovery and update both fail and you accept losing recent work that has not synced.

### Will recovering the Grok Bot computer delete my files?

Recover computer is designed to keep durable files and logins, and the docs say the same of Update under Grok Bot's Computer. Files in your project folders in the shared workspace, browser state and supported sign-ins are built to survive both. Temporary folders, manually installed packages and uncommitted application state should be treated as replaceable. Reset is different: it rebuilds the computer from your last saved snapshot, so recent or unsynced work can be lost, which is why the docs place it last.

### Can I recover the Grok Bot computer from my phone?

The iPhone and Android apps put two computer controls under Settings -> Bot -> Bot Computer: Update Computer and Reset Computer. Recover computer is described as an option of the unreachable-computer error state, and the docs do not say whether the phone's error state offers it. From a phone you can still retry, reopen the conversation, restart the app and run Update Computer. Avoid Reset Computer unless recovery and update have both failed, because it can lose recent unsynced work.

### Why does chat work while the Grok Bot computer never connects?

The desktop app uses two connections. Chat, sign-in and approvals go to Cursor's API, while the computer's setup, screen and shell use a separate hostname nested under cursorvm.com. A TLS-inspecting network gateway can allow the first and break the second, so chat keeps working while the computer never connects. Test on a phone hotspot. If it works there, the fix is on the network, where IT must allow and exempt both cursorvm.com wildcard patterns, and no computer control will help.
`,
};
