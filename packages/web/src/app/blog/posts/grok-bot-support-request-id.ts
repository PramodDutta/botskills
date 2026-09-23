import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Before You Contact Grok Bot Support: The Request ID and Six More Details',
  description:
    'Contact Grok Bot support with the request ID, version, error text and four more details, using a template you can paste, and leave out every secret it never needs.',
  date: '2026-09-23',
  category: 'Tutorial',
  content: `
# Before You Contact Grok Bot Support: The Request ID and Six More Details

The Grok Bot troubleshooting docs end with a list of seven things to collect before you contact support, and a message that says only "it is not working" contains none of them. This page takes the seven in turn: where each one lives in the app, what to paste, and the mistake that loses it. It finishes with a template you can fill in and a short list of things that must never go into a support message at all.

The detail that matters most is the request ID, because it identifies the exact request that failed instead of describing it. It is also the easiest one to destroy by accident, for example while tidying up. The seven details and every label below match the Grok Bot docs and Cursor's help pages as of 23 September 2026.

## Copy the request ID before you clear a single notice

The request ID is the sixth item on the docs' list, and it comes first here because it is the one that disappears. Errors in Grok Bot appear above the composer, under Notifications. The settings docs say some notices include a Copy request ID control, and they ask you to copy and share the complete ID with support. Not every notice carries one, so when yours does, treat it as the most valuable thing on the screen.

The same notices can be dismissed one at a time, or the whole list can be cleared. The docs are clear about what clearing does: it removes the notification, not the underlying external action and not the Bot's history. What they do not describe is anywhere else to find a request ID once its notice is gone. So the order is fixed. Copy first, clear later.

Three habits protect the ID. Use the Copy request ID control rather than retyping the ID from the screen or from a screenshot, because a single wrong character makes it useless and a cropped screenshot can cut it short. Paste it straight into a note with the time you saw the notice, before you do anything else. And if the error happens more than once, copy every ID, not just the first, because a set of IDs for the same failure is stronger evidence than one.

If a notice has no Copy request ID control, say so in your report. The docs also accept a conversation ID where one is shown, but they do not say where in the app a conversation ID appears, so do not spend twenty minutes hunting for one. Give the Bot's name and the exact time instead, and the reader can work from those.

## Follow Dario from a cleared notice to a report that could be answered

Dario produces a weekly podcast. His Bot, Show Notes, owns a routine he calls Monday transcript pull: every Monday at 05:30, Lisbon time, it fetches the new episode's transcript through the hosting platform's plugin and drafts the show notes. It never publishes anything; the draft waits for him. One Monday the draft was not there.

| Time, Lisbon | What Dario did | What happened | What it cost or saved |
|---|---|---|---|
| 05:30 | Nothing, asleep | The routine ran and failed | Nothing yet |
| 08:15 | Opened the desktop app | An error notice above the composer, with Copy request ID | The ID was one click away |
| 08:16 | Cleared the whole notification list before a call | The notice and its request ID were gone | The single most useful detail |
| 08:20 | Drafted "Grok Bot is not working, my show notes bot keeps failing, please fix" | Nothing in it anyone could look up | He had not pressed send yet |
| 08:25 | Read the troubleshooting page's list of seven details | Realised the draft had none of them | Nothing |
| 08:40 | Asked Show Notes to retry the transcript fetch | It failed again at 08:43; he copied the full request ID first | The ID, recovered |
| 08:50 | Quit and restarted the app, then retried | It failed again at 08:56; he copied that ID too | Evidence that a restart changed nothing |
| 09:00 | Reauthenticated the plugin from Marketplace -> Your plugins | It failed again at 09:04 | Evidence that re-authentication changed nothing |
| 09:10 | Wrote the second report with all seven details | Sent it through Contact Support | A report someone could act on |

The expensive moment was 08:16, and it was not carelessness. Clearing notices before a call is a tidy habit. It just happens to delete the one identifier that ties a report to a specific failed request. Dario only got it back because the failure was repeatable. For a one-off error that never recurs, a cleared notice can mean a report that says when and what, but never exactly which.

The second-best moment was 08:25, when he stopped before pressing send. His first draft was not rude and it was not wrong. It simply contained nothing to look up: no request, no version, no machine, no wording, no time. Anyone reading it would have had to write back and ask for each of those, and every one of those questions is a round trip that happens after the problem has already cost you a morning.

## Compare the two drafts line by line

Seen side by side, the difference between the two messages is not length or tone. It is whether each line gives the reader something they can check.

| What a reader needs to know | Draft one | Draft two |
|---|---|---|
| Which request failed | Not stated | The full request IDs from 08:43, 08:56 and 09:04 |
| Which build of the app | Not stated | The version from the account menu, under About |
| Which machine | Not stated | Ubuntu 24.04 LTS on x64, the .deb build |
| What the screen said | "keeps failing" | The notice text, pasted word for word |
| Which Bot and routine | "my show notes bot" | Bot Show Notes, routine Monday transcript pull |
| When | Not stated | Scheduled 05:30; failures 08:43, 08:56 and 09:04, Europe/Lisbon, UTC+1 |
| What was already tried | Not stated | Retry, app restart and plugin re-authentication: no change. Computer update: not tried, with the reason |

Draft two took Dario ten minutes, most of them spent reproducing the failure he had erased at 08:16. Written in the right order, with the ID copied first, it takes about five. The sections that follow take each row in turn.

## Pull the version from the account menu, not from memory

The first item on the docs' list is the Grok Bot version. There are two places to read it. The account menu shows About with the installed Grok Bot version, and Settings -> Updates shows it under Grok Bot Updates. Copy it from either; do not write the version you think you have.

Memory is unreliable here for a documented reason: Grok Bot checks for updates automatically, and Restart to Update installs a new version whenever you accept one. The build you had last week may not be the build you have today. If you updated during the incident, report both versions and the time you switched, because "it started after the update" is only useful when both sides of the update are named.

The version tells a reader which build of the desktop app produced the error. It does not describe the cloud computer, which updates separately under Grok Bot's Computer, so if you also updated the computer during the incident, record that under the seventh item rather than here.

If the error appeared on the phone, say so and give the phone app's details as best you can. The docs used for this page do not say where the mobile app displays its version, so this page will not pretend to know. Naming the device and its operating system version is the part you can always supply.

## Write the operating system with its version and architecture

The second item is the operating system and its version. The desktop app ships separate builds for different hardware, Apple silicon or Intel on macOS, x64 or Arm64 on Windows and Linux, so the architecture belongs in the same line as the version.

The get-started docs show where to read it. On a Mac, open Apple menu -> About This Mac; a Chip field means Apple silicon and a Processor field means Intel, and the macOS version is on the same screen. On Windows, open Settings -> System -> About, where System type gives the architecture. On Linux, \`uname -m\` prints x86_64 for x64 and aarch64 for Arm64, and your distribution's release file, usually read with \`cat /etc/os-release\`, gives the name and version. On Linux, add which package you installed, the .deb, the .rpm or the AppImage, because they are distributed separately.

If the failure appeared on a phone, give the phone's operating system and version instead. Grok Bot's phone apps need iOS 18 or later on iPhone and Android 9 or later, so a device below those versions is itself a finding worth stating.

Dario's line read: Ubuntu 24.04 LTS, x64, installed from the .deb package. It took him thirty seconds, and it answers a question nobody would otherwise have been able to answer without writing back to him.

## Paste the error text exactly, including the parts that look like noise

The third item is the exact error message. Exact means the wording the notice showed, not your summary of it. "It said something about the plugin" and "it timed out, I think" are paraphrases, and paraphrases lose precisely the words a reader would search for.

Copy the whole notice, including any part that looks like a code or a fragment of technical jargon. Those are often the most specific words on the screen. If you cannot select the text, type it out word for word, and attach a screenshot alongside for context. Do not rely on the screenshot to carry the request ID; use the Copy request ID control for that.

If there was no error notice at all, say that explicitly, because it changes the whole report. "No error was shown; the sidebar said Needs attention" describes a Bot waiting on you, which is a different problem from a failure, and the page on [why a Grok Bot stops responding](/blog/grok-bot-not-responding) may fix it before any support message is needed. "No error was shown; the conversation said the computer could not be reached" belongs to [the guide to recovering an unreachable computer](/blog/grok-bot-cant-reach-computer), which you should work through first. A report that names the state you saw is far more useful than "nothing happened".

## Name the Bot and the routine the way the sidebar spells them

The fourth item is the Bot or routine name. Use the names exactly as the app shows them. A Bot's name is set in its profile and appears in the sidebar; a routine's name is visible when you open the Bot, choose View conversation details, and open Routines.

Say which kind of work failed, because the same Bot can fail in different ways. A scheduled routine run, a Test run started from the desktop, and a message you typed into the conversation are three different paths. If it happened in a group chat, name the group and the Bot inside it. If you renamed the Bot recently, give the old name as well, because your earlier conversation may still carry it.

For a routine, the Run history on the Bot's profile is worth a glance before you write. The app keeps the 20 most recent run records per routine, so you can usually see when it last succeeded. "It worked last Monday at 05:30 and failed this Monday" is a far stronger sentence than "it keeps failing", because it tells the reader that something changed in between.

## Give the time with a time zone and say which clock you used

The fifth item is the approximate time and time zone. Give times in 24-hour form with a named time zone or a UTC offset, and give every time that matters: when the routine was scheduled, when you first saw the notice, and when each retry failed.

The time zone needs more care than it seems. Routines follow the Timezone setting under Settings -> General -> Bot, which may not match the clock on the laptop you happen to be holding, particularly if you travel. If you scheduled a routine for 05:30 in one zone and you are reading the notice in another, say both. Dario wrote his in Europe/Lisbon, UTC+1 in September, and noted that his routine timezone setting matched.

Precision beats roundness here. "About 9" is an hour-wide window on a busy service. "08:43 and 08:56, Europe/Lisbon" gives a reader two narrow windows that line up with the request IDs sitting beside them.

## Say which of retry, restart and computer update you tried

The seventh item on the docs' list asks whether retrying, restarting the app, or updating Grok Bot's computer changed the result. Report each one with a time and an outcome, and treat "not tried" as a legitimate answer as long as it comes with a reason.

Dario's read: retry at 08:40, failed again at 08:43; app restart at 08:50, failed again at 08:56; update under Grok Bot's Computer not tried, because the computer was reachable, his other Bot was working normally, and the failure was in a plugin call rather than on the computer. He added a step from the docs' plugin checklist: reauthenticated from Marketplace -> Your plugins at 09:00, failed again at 09:04.

Do not run heavier fixes just to fill the field. Updating the computer rebuilds it, and Reset rebuilds it from your last saved snapshot and can lose recent unsynced work. Neither belongs in a support report as something you did to have something to say. Tried, untried and why is exactly what the reader needs; a Reset done out of impatience is a new problem, not evidence.

## Leave out passwords, codes, keys and secret values every time

The docs end their support list with a prohibition: do not include passwords, one-time codes, private keys or secret values. Each of those can slip into a report in a predictable way, which makes them easy to catch if you know where to look.

| Never include | How it slips in | What to write instead |
|---|---|---|
| Passwords | Explaining that the failure happens at a login step | "The site asked for a login; I completed it by taking over the computer at 08:58" |
| One-time codes | Visible in the same screenshot as the error | Retake or crop the screenshot so the code is not in it |
| Private keys | Pasting a whole configuration file to show the setup | Name the setting and where it lives; never the key |
| Secret values such as API keys and tokens | A plugin error that mentions a key, or a config line in a screenshot | "The plugin was reauthenticated at 09:00"; never the value itself |

Grok Bot goes out of its way to keep these values out of conversations. For supported connections, a secure secret request masks the value, keeps it out of the transcript and away from the model, and the docs tell you never to type passwords or codes into ordinary chat. A support message that pastes the same value undoes all of that in one paragraph.

Two extra rules are this page's advice rather than the docs'. First, customer data from your own work, such as listener emails in Dario's case, does not belong in a report unless the failure genuinely cannot be described without it, and your own data policy decides that. Second, since the docs tell you to leave these values out, treat any request for a password or a code as a reason to stop and confirm who is asking before you reply.

## Route the report to the right desk before you send it

Not every Grok Bot problem goes to the same place, and the docs name different details for different desks. Sending a store refund to Cursor, or an in-app error to your app store, costs a round trip before anyone has even read the problem.

| Problem | Where the docs point you | Details they name |
|---|---|---|
| An in-app error or a run that failed with an error | Cursor support, through Contact Support on Cursor's help pages; the plans page points failed runs to its Report a bug article | The seven details on this page |
| Weekly usage still shows the old tier more than 24 hours after a SuperGrok upgrade | Cursor support | The Cursor account email, the Grok account email, and a screenshot of Weekly usage |
| Cancel Trial missing, or not taking effect, on a free plan | Cursor support | The plans page names no extra details |
| An App Store or Google Play charge | Apple or Google, since Cursor cannot refund store charges | Whatever Apple's or Google's own process asks for |
| A SuperGrok or X Premium+ bill | xAI or X, which bill those subscriptions | The plans page names no extra details |
| An Enterprise computer recreate or terminate that failed twice | Cursor support, raised by the organization admin | The member's email and the time of the operation |
| Enterprise access, residency, egress ranges or security review | Your Cursor account team | Your contract and admin details |

The first row is the one this page is built for. Cursor's help pages, including the Grok Bot plans and billing page, carry a Contact Support link at the bottom, next to Check system status, and the Grok Bot computers page links its contact-support step to cursor.com/help/grok-bot/get-help. If you suspect the whole service rather than your own account, run the scope checks in [is Grok Bot down or just slow](/blog/is-grok-bot-down) before you write, because they turn "everything is broken" into a sentence support can use.

## Answer the reader who says support can look it up from the account email

The objection is a fair one. Support has your account. Presumably they can see your Bots, your usage, perhaps your errors. Why should you spend ten minutes collecting details they could look up themselves?

This page does not know what Cursor's support tools can see, and neither do you. What is known is that the docs ask for these seven details anyway, and they do not say the account email is enough. When the plans page tells you how to report a SuperGrok tier that has not updated, it asks for two account emails and a screenshot, not just one email. The pattern is consistent: the docs ask for the identifiers that narrow a problem to one thing.

Some of the seven are also only on your side. The operating system and its version, what you already tried, the exact wording you saw, and the time zone of the clock you read it on exist on your machine and in your memory, nowhere else. An account can hold many Bots, many routines and many runs in a day. A request ID and a time turn that haystack into one needle. Five minutes of collecting beats a round of follow-up questions, and on the day it turns out support could have found everything alone, you have lost five minutes.

## Paste this template and fill it in under five minutes

This is the report Dario sent, with his details replaced by placeholders. Fill it in top to bottom; the order follows the order in which details disappear, so the request ID comes first.

\`\`\`text
Subject: Grok Bot error on <Bot or routine name>, <date>, <time zone>

1. Request ID(s), full, from Copy request ID: <paste>
   Conversation ID, if shown: <paste, or "none shown">
2. Exact error message: "<paste word for word>"
3. Bot: <name as shown in the sidebar>
   Routine: <name> scheduled <HH:MM>   (or: Test run / a message I sent)
4. When: <HH:MM>, <HH:MM>, <time zone and UTC offset>
   Routine Timezone setting (Settings -> General -> Bot): <zone>
5. Grok Bot version (account menu -> About): <paste>
6. Operating system and version: <name, version, x64 or Arm64>
   Package, if Linux: .deb / .rpm / AppImage
   Device where it appeared: desktop / iPhone / Android
7. What changed the result:
   Retry at <HH:MM>: <no change / fixed>
   App restart at <HH:MM>: <no change / fixed>
   Update under Grok Bot's Computer at <HH:MM>: <no change / fixed /
   not tried, because ...>
   Anything else tried: <for example, plugin reauthenticated at HH:MM>

Expected: <one sentence>
Happened instead: <one sentence>
Last good run (Run history): <date and HH:MM, or "never worked">
Reproduced: <n> of <n> attempts

Left out on purpose: passwords, one-time codes, private keys, secret values.
\`\`\`

The last line is not decoration. It tells the reader you know what not to send, and it reminds you to check the attachments one last time before you press send.

## Borrow the repro discipline from a Bot built to write evidence

A good support report and a good bug reproduction are the same document written for different readers, and two Bots in the catalog are built around that discipline.

[Bug Repro Pack Builder](/bots/bug-repro-pack-builder) turns a vague report into something an engineer can reproduce in one attempt. It separates what the report states from what it assumes, records the environment precisely, and reports the outcome in one of three honest forms: reproduced with these steps, not reproduced after these attempts, or reproduced intermittently at a stated rate. Dario's report carries the same habit: the failure reproduced on all three of his retries after the scheduled run, and he said so with the count attached rather than as an impression. Its boundary is that it never uses production customer data and never runs against production, which is the same instinct as keeping secrets out of your support message: the evidence has to be shareable without harm. The article on [a Grok Bot that reproduces bugs and never merges the fix](/blog/grok-bot-bug-reproduction) walks through that workflow end to end.

[Tickets To Changelog](/bots/tickets-to-changelog) works the other side of the counter. It matches the week's shipped fixes to the tickets that asked for them by searching for the same error string, the same feature name, or a direct link, and it attaches the ticket IDs as evidence to every entry. Its boundary is that it never publishes the changelog and never replies to a ticket; the draft waits for a human. The lesson for your report is in how it matches: exact error strings and IDs are what let anyone connect a report to a fix. A paraphrased error and a missing request ID are exactly what makes that match impossible.

## Skip this template when the fault is a store charge or a SuperGrok bill

This template is built for errors inside Grok Bot. It stops applying in several places. Charges made through the App Store or Google Play go to Apple or Google, and SuperGrok or X Premium+ billing goes to xAI or X; the routing table above covers who handles what. Enterprise contract questions, including residency commitments and egress ranges, go to your account team. A Bot that is only quiet, with no error at all, may be waiting on you rather than failing, and a computer that cannot be reached has its own recovery order to work through before any report. For the broader map of failures and which ones are worth reporting, the [troubleshooting map of fifteen failures](/blog/grok-bot-troubleshooting) is the index.

The seven details, the Copy request ID control, the Contact Support and Check system status links, and the routing above are as the Grok Bot troubleshooting and settings pages, the computers page, and Cursor's plans page described them as of 23 September 2026. It is a beta product, and support processes change faster than documentation. If the [current troubleshooting page](https://docs.x.ai/grok-bot/troubleshooting) lists different details, send what it asks for, not what this page remembers.

## Frequently Asked Questions

### Where do I find the request ID in Grok Bot?

Some error notices in Grok Bot include a Copy request ID control. Errors appear above the composer under Notifications, and choosing Copy request ID copies the complete ID for you to paste into your report. Copy it before you dismiss the notice or clear the list, because clearing removes the notification, and the docs do not describe another place to find the ID afterwards. Not every notice has one. If none is shown, say so in your report and give the Bot name and exact time instead.

### How do I contact Grok Bot support?

Cursor's help pages carry a Contact Support link at the bottom, next to Check system status, and the Grok Bot computers page links its contact-support step to cursor.com/help/grok-bot/get-help. Before writing, collect the seven details the troubleshooting docs list: Grok Bot version, operating system and version, exact error message, Bot or routine name, time and time zone, the full request ID or conversation ID, and what retry, restart or a computer update changed. Enterprise customers also have a Cursor account team for access, residency and security questions.

### What should a Grok Bot bug report include?

The troubleshooting docs list seven details: the Grok Bot version, your operating system and its version, the exact error message, the Bot or routine name, the approximate time with its time zone, the full request ID or conversation ID if one is shown, and whether retrying, restarting the app or updating Grok Bot's computer changed the result. Add one sentence on what you expected and one on what happened instead, say whether it ever worked, and state how many attempts reproduced it.

### What should I never send to Grok Bot support?

Never include passwords, one-time codes, private keys or secret values; the troubleshooting docs name all four. That covers API keys and tokens hiding in a pasted config file or visible in a screenshot. If a step needed a login, say that you completed it by taking over the computer and when, instead of describing the credential. Grok Bot's secure secret request keeps values masked and out of the transcript for supported connections, so do not undo that protection by pasting a secret into a support message.
`,
};
