import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot on iPad: The iOS App Runs There Now (Checked September 2026)',
  description:
    'Grok Bot on iPad works now: the iOS app runs on iPadOS 18 or later. What the iPad can do, what still needs a desktop, and a ten-minute check before you rely on it.',
  date: '2026-09-23',
  category: 'Reference',
  content: `
# Grok Bot on iPad: The iOS App Runs There Now (Checked September 2026)

> **Update, 23 September 2026.** From its first version in August until today, this page told iPad owners that Grok Bot had no iPad client, most recently in a correction dated 4 September, and advised treating the tablet as unrelated hardware. The docs no longer say that. The Grok Bot FAQ and the mobile page both now state that the iOS app also runs on iPad with iPadOS 18 or later. The old page also said that reading run history and deleting a routine needed a desktop; the mobile page now lists both as jobs the companion app can do. This page has been rewritten around the current docs.

Yes, Grok Bot runs on iPad. What runs there is the iOS companion app, the same app that runs on iPhone, and it needs iPadOS 18 or later. The iPad gets what the phone app can do and the same limits: you can message Bots, approve steps, take over the cloud computer, and check, pause or delete routines, but editing a routine and testing it still need a desktop app on macOS, Windows or Linux.

Everything here was checked on 23 September 2026 against the [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) and the [mobile page](https://docs.x.ai/grok-bot/mobile). Grok Bot is in beta. Where the docs say nothing about iPad specifically, this page says so instead of guessing.

## Check the iPadOS version before you install anything

The requirement is iPadOS 18 or later, the same floor as iOS 18 on iPhone. Look up the version in the iPad's own settings before you go looking for the app. An iPad that cannot move to iPadOS 18 is outside what the docs describe, and no setting inside Grok Bot changes that. If your school or employer manages the iPad, whether you may install apps on it is their decision; the Grok Bot docs say nothing about managed devices.

Install the app from the App Store. The mobile page gives one App Store link, written for iPhone, and says the same iOS app runs on iPad. It does not describe how the listing looks when you search from an iPad, so do not read anything into a label on the store page in either direction. The docs are the source for what is supported. The store is only where you download.

Then sign in the way the phone does. Choose Log In or Sign Up, complete Cursor authentication in the browser, and return to the app. If your access comes from a linked SuperGrok subscription, the access screen offers Link Grok Account and then Finished Linking? Refresh My Status. New users get the first-run tour, choose a first Bot and wait while the shared computer is set up. Existing users land straight on their synced list of Bots.

| What the docs say about iPad | Where it says it |
|---|---|
| The iOS app also runs on iPad, iPadOS 18 or later | FAQ, in the platform list |
| The same line again, under the mobile requirements | Mobile page |
| The mobile app runs on iPhone, iPad and Android | Overview page, platform answer |
| An iPad-specific layout, split view, keyboard shortcuts or Apple Pencil support | Nowhere; the docs are silent |

The last row matters as much as the first three. The docs describe one iOS app. They do not describe an iPad design, so this page does not describe one either, and a screenshot of one is not documentation.

## Treat the iPad as the phone app on a bigger screen, not as a desktop

The Grok Bot desktop apps are for macOS, Windows and Linux. The companion apps are for iOS and Android. The iPad sits on the companion side of that line. A keyboard case, a large screen and Stage Manager do not move it across, because the app on the tablet is the same iOS app with the same list of jobs.

That is less limiting than it sounds, because none of the apps is where the work happens. Bots run on a persistent cloud computer assigned to your user account, and the desktop and mobile apps are thin clients for chat, review and approvals. Closing the app, a laptop or a phone does not stop a background turn or a routine, and shutting the iPad's cover is the same kind of event. [What keeps running with the laptop closed](/blog/grok-bot-runs-with-laptop-closed) covers what that means for work you leave overnight.

What the iPad does not get is the authoring surface. Editing a routine's schedule or instruction, running a routine test, teaching a task by demonstration, and some advanced desktop controls all stay on the desktop apps.

## Use the iPad for the jobs the mobile page lists

The mobile page describes the companion app in detail, and all of it applies to the iPad because it is the same app. Here is the split in one table, with the desktop beside it for comparison.

| Job | iPad (iOS app) | Desktop app |
|---|---|---|
| Message a Bot, dictate, start a voice chat, play a voice memo | Yes | Yes |
| Take or attach a photo, choose an image or a file | Yes | Yes |
| Create a Bot or a group chat, edit a Bot profile, delete a Bot | Yes | Yes |
| Approve or deny a step | Yes: Allow, Deny, and Always allow when a rule is proposed | Yes: Allow once, Deny, Always allow |
| Send or discard an email or Slack draft card | Yes | Yes |
| Open the computer, watch it, take over for a password or a code | Yes | Yes |
| See a routine's schedule, next run, instruction and Run history | Yes | Yes |
| Pause or resume a routine with Active | Yes | Yes |
| Delete a routine | Yes | Yes |
| Edit a routine's schedule or instruction | No | Yes |
| Test a routine | No | Yes |
| Teach a task by demonstration | No | Yes, where rolled out |
| Change the Execution on Local Computer or Route egress through this desktop setting | Not described for mobile | Yes, set per desktop |

A few of these deserve a sentence each.

The approval sheet on mobile uses slightly different buttons from the desktop: Allow, Deny, and Always allow when a rule is proposed, while a card asking to run a local command offers Allow once and Deny. Either way, an approval controls the proposed action. It does not undo work that was already done.

Draft cards are the most useful thing to have on a tablet. When a Bot prepares an email or a Slack message, the conversation can show a New Email or New Slack Message card with Send Email or Send Message, and Discard. Reading a draft on a larger screen before you send it is a perfectly good reason to use the iPad at all.

The share sheet is a gap worth testing. The mobile page says that on iPhone you can share a photo, file, link or text into a Grok Bot chat from another app. It does not mention iPad. Try it on your iPad before you build a habit around it.

## Keep routine editing and testing at a desk, and see why that helps

The line between the iPad and the desktop falls in a sensible place. The jobs that decide whether a routine is trustworthy, changing what it does and testing it, stay on the surface with the full controls. The jobs that respond to a routine already running, checking its history and pausing it, travel with you.

Testing is the reason. A test run is not a simulation: it can open websites, change files and call connected tools for real. Running one should happen where you can watch the computer, read the result and fix the instruction in the same sitting, rather than in the four minutes between two meetings.

One gap in the docs is worth being precise about. The skills and routines page describes creating a routine by asking the owning Bot in conversation, and it does not say that step needs a desktop. It does say that editing a routine's schedule or instruction and testing it need the desktop app. A routine you cannot test or correct from the device in your hand is a poor thing to start from that device. Author and test routines at a desktop, then operate them from the iPad.

## Walk Nia through a school week with the iPad in the loop

Nia teaches two year groups. Her school issued her an iPad with a keyboard case; she checked it on Sunday and it runs iPadOS 18. At home she has a Mac. Her Cursor Pro plan includes Grok Bot, and her phone stays in her bag during lessons, so the iPad is the device actually in front of her during the day.

On Sunday evening, at the Mac, she builds two Bots and tests both. The first drafts replies to parent emails and never sends them; its brief follows the shape of [Inbox Triage](/bots/inbox-triage), which labels mail and drafts replies that wait for approval. The second turns her approved lesson outlines into first drafts of worksheets, shaped like [First Draft From Outline](/bots/first-draft-from-outline), which flags thin sections instead of inventing facts and never publishes. She makes both jobs routines, the email pass every weekday morning and the worksheet run on Wednesday mornings, and tests each once on the Mac with harmless input, reading the result before she switches it on.

On Monday at 07:40, before first period, she opens the iPad. The email routine ran, and Run history shows the pass. Three draft cards wait in the conversation. She discards one, sends one, and leaves one for after school.

On Tuesday at 12:15 the worksheet Bot needs last year's specification from the exam board's teacher site, and the site asks for a login. She opens the computer on the iPad, takes over, signs in herself, and hands control back. The password never goes into the chat, and the site holds no student data, which is why she was willing to leave that session on the shared computer.

On Wednesday at 10:05 the worksheet routine's run starts repeating one section. She cannot fix the instruction from the iPad, but she can stop the work: she sends a short Stop now message, then pauses the routine with Active so it does not run again before she gets home.

On Wednesday at 19:30, at the Mac, she edits the instruction, runs a test with a harmless outline, reads the output, and switches the routine back on.

| When | Device | What Nia did | Why that device |
|---|---|---|---|
| Sunday 20:00 | Mac | Built two Bots, tested both routines | Editing and testing need a desktop |
| Monday 07:40 | iPad | Read Run history, handled three draft cards | Operating jobs travel |
| Tuesday 12:15 | iPad | Took over the computer for a site login | Takeover works on mobile |
| Wednesday 10:05 | iPad | Sent Stop now, paused the routine with Active | Pausing is a mobile job; fixing is not |
| Wednesday 19:30 | Mac | Edited the instruction, tested, switched it back on | Back at the authoring surface |

What changed for Nia is not that the iPad became a laptop. It became a real companion. The device she carries between lessons can now read the history, clear the draft queue and pull the brake, which is most of what a school day asks of it.

## Pause from the iPad, and delete only on purpose

The iPad gives you two ways to stop a routine, and they are not equivalent.

Active is the reversible one. Turning it off pauses the routine; turning it on resumes it. Use it whenever something looks wrong and you are not at a desk.

Delete is not reversible. Deleting a routine takes effect immediately and has no undo. Deleting a Bot goes further: it removes the Bot's profile, conversation and routines, while files and logins on the shared computer may remain. If you might need a Bot's work later, hiding it is the documented alternative. On a touchscreen, where a stray tap is easy, make pausing your habit and deletion a decision you take at a calm moment.

Three more details matter when you stop things from a tablet. A Stop now message ends the current work but does not undo actions the Bot has already completed. A computer-use task already running on that Bot's screen may need to finish or be redirected before another can start, so a stuck Bot may not react to a new request at once. And if you leave routines running over a long holiday, Grok Bot may ask whether to keep them running after a long period away and pause them if you do not answer, so review paused routines when you come back.

## Take over the computer from the iPad for logins, and never type secrets into chat

Sensitive steps work the same way on the iPad as on the phone. When a Bot reaches a password, passkey, two-factor code, CAPTCHA or payment confirmation, it should hand you the computer. Open it from the conversation, take control, finish only the blocked step, return control, and tell the Bot to continue. Never send a password or a one-time code as an ordinary chat message.

For a supported connection, the Bot may show a secure secret request instead. The value is masked, kept out of the transcript and not shown to the model. When a web page needs you to type something like a checkout address or a phone number, the Bot can show a form in the chat, one form per step, and fill your answers into the page.

One desktop feature has no documented iPad equivalent. With Use hardware security keys switched on, the Bot's browser can use a key plugged into your desktop; the docs describe it as on by default for macOS and Windows and not yet supported on Linux. They say nothing about a key connected to an iPad or a phone. If your accounts require a hardware key, plan those sign-ins for a desk.

## Share one usage meter across the iPad, the phone and the desktop

The iPad does not come with its own allowance. Grok Bot usage is metered on your Cursor account, and the plans page says macOS and iOS share a single usage bucket tied to the signed-in account because both apps call the same backend. The iPad runs the iOS app, so a run started from the iPad draws on the same weekly usage as one started from the Mac. Plan eligibility does not depend on the device either; [Cursor Hobby vs Cursor Pro for Grok Bot](/blog/grok-bot-hobby-and-pro-exclusion) covers which plans include Grok Bot now that Pro does.

Mobile Settings shows usage and lets you manage an eligible App Store or Google Play subscription. If you subscribe inside the iOS app, two rules from the plans page follow you. On-demand for a mobile subscription is enabled on the web, not in the app. And Cursor cannot refund an App Store charge, so refunds go through Apple.

One trap is specific to the App Store. An introductory offer started in the iOS app is Apple's trial, not the Grok Bot usage-credit trial. It turns into a paid Apple subscription when it ends unless you cancel it first in Apple ID -> Subscriptions. The Grok Bot trial, by contrast, never becomes a paid plan. Know which of the two you started before the week is out.

## Set notifications so the iPad actually tells you something

A companion app earns its place by telling you when a Bot needs you. Two things must both allow it: the device's notification permission, which the app asks for during first run, and the Notifications preference in each Bot's settings. Group chats do not have the same per-Bot switch.

Push delivery is still rolling out and may not be enabled for every account yet. When it is not, the mobile page says the in-app attention states remain available, so conversations that are waiting on you are still marked inside the app. Notifications are also normally suppressed while Grok Bot is in focus, so a quiet iPad with the app open is not proof that nothing happened.

For Nia this means checking the attention states between lessons rather than waiting for a banner that may not be switched on for her account yet. It is a small habit, and it is the difference between a draft answered at 07:40 and one found at 16:00.

## Recover the computer from the iPad in the least destructive order

If the cloud computer cannot be reached, you do not need the desktop to recover it. Work from the least destructive step to the most destructive one, and stop as soon as something works.

| Step | Where on the iPad | What it keeps |
|---|---|---|
| Retry, or reopen the conversation | The error state in the conversation | Everything |
| Restart the app | The iPad itself | Everything |
| Recover computer | Offered only in the unreachable-computer error state | Durable files and logins |
| Update Computer | Settings -> Bot -> Bot Computer | Durable files and logins; installs the latest software |
| Wait for the replacement computer | Nothing to press | Whatever the previous step kept |
| Reset Computer, last resort | Settings -> Bot -> Bot Computer | Rebuilds from the last saved snapshot; recent or unsynced work can be lost |

Recovery is offered from the error state, not from Settings, so if you go looking for it in Settings you will not find it. Update and Reset sit together under Bot Computer and do very different things: Update keeps your files, and Reset restores the last snapshot. Read the label before you tap, and do not reach for Reset because it sounds more thorough.

## Keep student records off the shared computer, whatever device you hold

The shared computer is the same computer whichever app you open it from. All your Bots share it, including files, browser sessions and command-line credentials, and spreading work across several Bots walls nothing off. The iPad does not change that. It only changes where you are sitting when you approve something.

For a teacher, the boundary follows from that. The one action Nia's email Bot never takes without her is sending to a parent, and the one kind of data none of her Bots touches is a named student's record. If a workload truly needed its own credentials, the docs' answer would be a separate Cursor user, not a separate Bot. [Bots for educators](/blog/bots-for-teachers) covers where that line sits for school work, and [the safety checklist](/blog/grok-bot-safety-checklist) is the read before any real account is connected.

\`\`\`text
Name: Parent Mail Drafts
Job: Morning pass on the class inbox, drafts only

Every school day at 07:00, read mail that arrived since the last run.
Label each message: needs reply, information only, or needs me.
Draft replies only for "needs reply", in my voice, three sentences max.

Boundary: never send, forward or delete a message. Every draft waits
for me to press Send Email on a draft card. If a message mentions a
grade, a medical matter, a safeguarding concern or a named child's
record, do not draft: label it "needs me" and stop.

Access: never open the gradebook, the register or any student file.
Logins: if a site needs a password or a code, stop and ask me to take
over the computer. Never ask for a password in chat.

Device note: I read and approve from an iPad. I cannot edit or test
this routine from it, so if something breaks, stop and report. Do not
improvise a fix. I will change the instruction at a desk.
\`\`\`

The last paragraph is the iPad-specific part. It tells the Bot that the person approving it cannot rewrite its instructions in the middle of the day, so the right response to a surprise is to stop and report, not to try something new while nobody who can edit it is watching.

## Answer the reader who says an iPad with a keyboard should be a desktop

The objection, at its strongest: an iPad on iPadOS 18 with a keyboard and a trackpad is more capable than many laptops that run the desktop app, Stage Manager gives it windows, and holding back routine editing is an arbitrary line that forces people to own a second device for no reason.

Part of that is right. The hardware is capable, and where the line falls is a product decision, not a technical impossibility. If the docs move the line, this page should move with them.

The rest does not hold for planning today. The desktop apps in the docs are macOS, Windows and Linux builds; the iPad runs the iOS companion app, and the docs say editing and testing a routine need the desktop app. The docs describe no browser-based client either. So there is no documented way to author from the iPad, and building a routine you cannot test from the device you rely on is how an untested instruction ends up running every morning. The line is also in a defensible place. A test run does real work on real sites, and the surface that changes a routine should be the one with every control in reach.

If an iPad is all you have, you can still use Grok Bot for conversation work: give Bots tasks, read results, approve drafts, take over for logins. Borrow a desktop for the hour it takes to author and test anything that repeats.

## Run a ten-minute iPad check that can fail

Do this once, on the iPad you will actually carry, before you plan a week around it. Every row has a failing answer, and the failing answer tells you something specific.

| Check | Expected result | If it fails |
|---|---|---|
| iPadOS version in the iPad's settings | 18 or later | Below 18: the docs do not cover this iPad |
| Sign in with the Cursor account that holds your plan | Your synced Bots appear | Empty or refused: wrong account or no eligible plan |
| Send a message from the iPad, then open it on the desktop | The same conversation on both | Missing on one: check both are signed in to the same account |
| Open a routine from a Bot's profile | Schedule, next run, instruction and Run history | Missing: recheck the mobile page, which may have moved |
| Toggle Active off, then on | The routine pauses, then resumes | No toggle: recheck the mobile page |
| Look for a way to edit the routine's instruction | None offered | Offered: the docs have changed since this page was checked |
| Take over the computer on a harmless public page | You control the screen, then hand it back | Cannot reach the computer: follow the recovery order above |

The sixth row is the one that proves the boundary between the two devices. If editing appears on your iPad, the docs have moved past this page, and the mobile page is the place to read what changed.

## When this page stops applying

As of 23 September 2026, the FAQ and the mobile page say the iOS app runs on iPad with iPadOS 18 or later, and the mobile page says editing a routine's schedule or instruction and testing a routine need the desktop app. Grok Bot is in beta, and this page's own history shows how quickly platform facts move: this site rewrote its platform pages earlier this month when Linux and Android apps appeared, and iPad support arrived after that.

This page stops applying if the docs add an iPad-specific app or layout, if routine editing or testing comes to mobile, or if the iPadOS floor changes. It does not cover Android tablets, which the docs do not mention. Check [the mobile page](https://docs.x.ai/grok-bot/mobile) and [the FAQ](https://docs.x.ai/grok-bot/faq) before you plan a term around this.

## Frequently Asked Questions

### Does Grok Bot work on iPad?

Yes. As of 23 September 2026 the Grok Bot FAQ and mobile page both say the iOS app also runs on iPad with iPadOS 18 or later. It is the same companion app as on iPhone, so the iPad can message Bots, approve steps, take over the cloud computer, send or discard draft cards, read a routine's Run history, pause or resume a routine and delete one. Editing a routine's schedule or instruction and testing a routine still need the desktop app on macOS, Windows or Linux. Earlier versions of this page said iPad was unsupported.

### Which iPadOS version does Grok Bot need?

iPadOS 18 or later, according to the FAQ and the mobile page as of 23 September 2026. That matches the iOS 18 requirement for iPhone, because the iPad runs the same iOS app. The docs do not list specific iPad models, so check the iPadOS version in the iPad's settings rather than looking up the model. An iPad that cannot run iPadOS 18 falls outside what the docs describe, and nothing inside Grok Bot changes that. You also need an eligible plan, and eligibility does not depend on the device.

### Can I edit or test a routine from the iPad?

No. The mobile page says editing a routine's schedule or instruction and testing a routine currently require the desktop app, and the iPad runs the mobile app. From the iPad you can see a routine's schedule, next run, instruction and Run history, pause or resume it with the Active control, and delete it, which is immediate and cannot be undone. Author and test routines on macOS, Windows or Linux, then operate them from the iPad. If an edit control ever appears on your iPad, the docs have changed since this page was checked.

### Is there a separate iPad app or an iPad layout for Grok Bot?

The docs describe no separate iPad app. They say the iOS app also runs on iPad with iPadOS 18 or later, and the overview lists iPad alongside iPhone and Android as places the mobile app runs. They do not describe an iPad-specific layout, split view behaviour, keyboard shortcuts or Apple Pencil support, and the keyboard shortcuts they do document are for the desktop app. Treat the iPad as the phone app on a larger screen. If the docs later add an iPad design, this page stops applying and the mobile page is where to check.
`,
};
