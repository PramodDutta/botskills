import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot on Windows, Linux, Android and iPad: What Works (Sep 2026)',
  description:
    'Grok Bot supported platforms as of 4 September 2026: macOS, Windows and Linux desktop apps, iPhone and Android companion apps, iPad still unsupported. What runs where.',
  date: '2026-09-06',
  category: 'Reference',
  content: `
# Grok Bot on Windows, Linux, Android and iPad: What Works (Sep 2026)

This is the platform grid, rebuilt from the docs on 4 September 2026. An earlier version of this page said there was no Linux desktop app and no Android app, and that the iPhone app could only pause and resume. All three of those were true in August and none of them is true now, so the page was rewritten rather than patched.

Everything below comes from two pages: the [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq), which lists the supported platforms, and the [mobile page](https://docs.x.ai/grok-bot/mobile), which describes what the phone app can do and carries a last-updated date of 2 September 2026. Where those pages are silent, this one says so.

## Read the grid first, then the parts that are actually interesting

| Platform | Client | What it is for |
|---|---|---|
| macOS, Apple silicon and Intel | Desktop app | Everything: author, edit, test, read history, delete, teach by demonstration |
| Windows, x64 and Arm64 | Desktop app | Everything |
| Linux, x64 and Arm64 | Desktop app, as a .deb, an .rpm or an AppImage | Everything |
| iPhone, iOS 18 or later | Companion app | Message, create bots, approve, take over the computer, pause routines |
| Android, 9 or later | Companion app | Same as iPhone |
| iPad | None | Not supported, and the docs say designed for phones, not iPad |

Two things in that table are new since August. Linux has a real desktop client, in three package formats. And the phone column has an Android row and a far longer list of verbs than the old pause and resume.

The interesting parts are what the phone app still cannot do, why the Linux app changes less than Linux users expect, and how to plan a week around the split. Those take the rest of the page.

## Separate the three machines before you plan anything

Every platform question about Grok Bot gets easier once you hold three machines apart.

The desktop app is where you author. It runs on your Mac, your Windows PC, or now your Linux box, and it is the only place you can edit a routine, read its run history, test it, delete it, or record a demonstration.

The phone app is where you operate. It runs on iPhone or Android and it can start work, answer a bot, approve or deny a step, take over the shared computer for a password, and pause or resume a routine. It cannot change what a routine does.

The cloud computer is where the work happens. It is a persistent machine assigned to your account, not to any one bot, and it runs whether or not any of your devices is awake. Nothing runs on your laptop or phone. [One computer, many screens](/blog/grok-bot-one-computer-many-screens) covers what that computer shares between bots, which is everything: cookies, sessions, files and command-line credentials.

Most confusion on this topic is somebody treating one of those machines as another, and the platform list only makes sense once you know which of the three a given row is describing. A Linux engineer who hears that the cloud computer is Linux and expects to SSH in. A phone owner who expects to edit a schedule from the sofa. A founder who closes the laptop and expects the bot to stop.

## Windows is a first-class desktop on both architectures

Windows on x64 and Windows on Arm64 both appear on the supported list, and the desktop app does the same job on each. There is nothing Windows-specific to plan around beyond the install itself, which comes from x.ai/bot rather than from a store.

The mistake that still costs people a morning on Windows is not a platform mistake. It is confusing the installer with the gate. Grok Bot requires an eligible plan, and the mobile page lists them: SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, or Cursor Teams Standard or Premium. Cursor Pro and Cursor Hobby are not on the list. A clean Windows install on an ineligible account is a clean Windows install that will not let you in. [The cheapest way into Grok Bot](/blog/cheapest-way-into-grok-bot) is the arithmetic; Cursor Pro+ at $60 a month is the cheapest documented paid path.

## Linux got a desktop app, and here is what that does and does not change

The FAQ now lists Linux on x64 and Arm64, distributed as a .deb package, an .rpm package, or an AppImage. That covers the Debian and Ubuntu family, the Fedora and RHEL family, and everyone else through the AppImage.

What changes: a Linux-only engineer can author bots at their own desk. Before September that meant borrowing a Mac or a Windows machine, or running a supported client in a virtual machine, or giving up. That workaround chapter is over.

What does not change is more important than it sounds. The bots still do not run on your Linux workstation. They run on the cloud computer, which happens to also be a managed Linux machine where the bot process runs as a non-root user. Installing the Linux desktop app does not give you a shell on that computer, does not let you install your own tooling on it, and does not make your workstation part of the bot's environment. The desktop app is a client. [The Linux page](/blog/why-grok-bot-has-no-linux-app) walks through this at length because the naming collision, Linux client versus Linux computer, still catches people who arrived after the app shipped.

| What a Linux user might expect | What the docs describe |
|---|---|
| Install the app, bots run locally | Bots run on the account's cloud computer; the app is a client |
| SSH into the bot computer | Not documented; the computer is managed and the bot is non-root |
| Use my workstation's files directly | Files live on the cloud computer; put them in its workspace |
| Package manager install on any distro | .deb, .rpm or AppImage, per the FAQ |

The docs do not list specific distributions or versions, and this page will not invent them. If your distro can install one of those three formats, you are inside what the docs describe. If it cannot, the AppImage is the format designed to run without a package manager at all, and it is the one to try before concluding that your distribution is out.

## The phone app is far more than a stop button now

The old version of this page called the iPhone app a stop button. The mobile page now describes a companion app for iPhone and Android, and its list of capabilities is long enough to change how a week is planned.

From a conversation you can send text, dictate, take or attach a photo, choose an image or file, mention another bot or everyone in a group, reply in a thread and react. From the home screen you can create a new bot or a group, edit a bot's profile, manage group members, pin or hide a conversation, and delete a bot. From a conversation you can open the computer to watch browser or desktop work, take over for a password, a two-factor code or a CAPTCHA, inspect the screen, and hand control back. From a bot's profile you can see each routine's schedule, next run and instruction, and toggle it active or paused.

What you cannot do, in the docs' own words: editing the schedule or instruction, viewing run history, testing, and deleting a routine currently require the desktop app. Teach by demonstration and some advanced desktop controls are also desktop only.

| Job | Phone | Desktop |
|---|---|---|
| Start a piece of work by messaging a bot | Yes | Yes |
| Approve or deny a step | Yes | Yes |
| Take over the computer for a login or a code | Yes | Yes |
| Create or delete a bot | Yes | Yes |
| Pause or resume a routine | Yes | Yes |
| Edit what a routine does or when it runs | No | Yes |
| Read run history | No | Yes |
| Test a routine | No | Yes |
| Delete a routine | No | Yes |
| Teach by demonstration | No | Yes |

So the phone is an operator's console and not an author's desk. That is a good split, and it is worth being explicit about why it is good rather than merely tolerable. The jobs that decide whether a bot is trustworthy, editing and reading history, stay on the surface where you can see the whole picture. [Grok Bot on Android](/blog/grok-bot-android-status) and [Grok Bot on iPhone](/blog/grok-bot-iphone-app) walk through the same app from each side.

## Let the phone's limits decide what your bots are allowed to do

The practical consequence of the split is that any routine which might need editing in a hurry needs a desktop nearby, and any routine you operate from a phone should be one where pausing is enough.

Write that into the charter. A bot that can send, buy, publish or delete should require approval on those steps, so that the phone's approve button is the control and the phone's missing edit button does not matter. A bot that only reads and drafts can run all week with nobody at a desk, because the worst case is a draft you delete on Monday.

[Inbox Triage](/bots/inbox-triage) drafts and never sends, which is the phone-friendly shape. [Lead Scout](/bots/lead-scout) ranks and never contacts anyone, same shape. A bot that posts to a shared channel is not phone-friendly, because the fix for a bad post is an edit you cannot make from the sofa.

## iPad is still out, and the docs say so twice

The FAQ says iPad is not supported at initial launch. The mobile page says Grok Bot is currently designed for phones, not iPad. Neither page mentions Android tablets at all, which this site reads as undocumented rather than supported.

If you only own a tablet and a phone, use the phone for Grok Bot and treat the tablet as unrelated hardware. If somebody tells you the iPhone app runs on iPad in compatibility mode, that may or may not be true of the binary, but it is not what the docs describe and this page will not plan around it. [The iPad page](/blog/grok-bot-ipad-status) has the longer version.

## Solve an Android-only or Linux-only week the new way

Before September the answer for anyone without a Mac or Windows machine was to borrow one. That is no longer the shape of the problem.

A Linux-only engineer installs the desktop app from x.ai/bot in the package format their distro takes, and has the full authoring surface. An Android-only founder installs the companion app from Google Play, signs in with an eligible plan, creates bots and operates them from the phone, and still needs a desktop, any desktop, for the four routine jobs and for teach by demonstration. That desktop can be Linux now, which matters for the many Android owners whose only computer is a Linux laptop.

| You own | Author on | Operate on | What is still missing |
|---|---|---|---|
| Linux laptop only | The Linux desktop app | Same machine | Nothing |
| Android phone only | Nothing | The Android app | A desktop for editing, history, testing, deleting |
| Android phone and Linux laptop | The Linux desktop app | The Android app | Nothing |
| iPad only | Nothing | Nothing | Everything; iPad is not a client |
| iPhone and Mac | The Mac desktop app | The iPhone app | Nothing |

The one combination that still has no path is iPad only, and that is a documented no rather than a gap this site can route around. Everything else in the table has a documented client on both sides of the split, which was not true of any row a month ago.

## Confirm your machine against the list before you spend anything

The order of checks matters, because the expensive mistakes happen when somebody buys a plan or a machine to fix a problem that was somewhere else.

First, the plan. Confirm the invoice line matches one of the eligible plans. No platform fixes an ineligible account.

Second, the desktop. macOS on either chip, Windows on either architecture, or Linux in one of the three formats. If you have one of those, you can author.

Third, the phone. iPhone on iOS 18 or later, or Android 9 or later. If you have one of those, you can operate away from the desk. If you do not, you still have the desktop, and you design routines that wait for you rather than routines that need a pocket brake.

Fourth, the tablet. If that is all you have, stop here. The product is not for you this month.

## Answer the claim that the platform list matters less than it looks

A fair objection: the bots run in the cloud, the desktop app is a window onto them, and with a phone app that can approve and take over the computer, surely the platform of your desktop barely matters.

For daily operation that is largely right. A person who authored their bots on a borrowed machine in August and has operated them from a phone since then is using the product as documented, and the desktop platform they no longer touch is irrelevant to them.

Where it is wrong is the week a routine needs fixing. Editing and run history are desktop-only, and a roster nobody can audit from the devices they carry is a roster that gets audited less. The platform list matters exactly as much as your appetite for finding out, at a desk, what a bot has been doing. Which is the same argument [the fleet audit](/blog/grok-bot-fleet-audit) makes about frequency: you read the history because that is where the surprises live.

## Run five checks before you build a week around this

A check that cannot fail is a pep talk. These can fail.

Install the desktop app on the machine you actually use and sign in. If you are on Linux and the package installs but the app will not sign in, the plan is the problem, not the platform.

Create a throwaway bot from the phone, message it, and confirm the same bot appears in the desktop app. The docs say bots and conversations sync across signed-in devices, and this is the ten-second proof.

From the phone, open a routine's profile and toggle it paused, then try to edit its instruction. Pausing should work. Editing should not be offered. If you found an edit control on the phone, this page is stale and the mobile docs have moved again.

Set a bot to require approval on send, trigger a send from the desktop, and approve it from the phone. That round trip is the whole reason the phone app is useful.

Close every device and confirm a long read-only task still finishes. The mobile page says work continues in the cloud when the app is closed; the cloud computer does not care what you are holding.

## Write a charter for a stop-and-approve remote control

Kiran, who appears on the Android page as well, authors on a Linux laptop and operates from an Android phone. The charter below is the one that makes that split safe.

\`\`\`text
Name: Kiran desk bots
You run on the account's shared cloud computer, not on my laptop or phone.
I author you on a Linux desktop and operate you from an Android phone.
Before any send, purchase, publish or delete: stop, state the exact action
in one line, and wait for approval. Assume I am reading on a small screen.
Never contact a lead. Rank and brief only.
Inbox: classify and draft. Leave every draft unsent.
If a step needs a password, a two-factor code or a CAPTCHA, stop and wait
for me to take over the computer.
I can pause you from the phone but cannot edit you there. If an
instruction is unclear, do nothing and say so; I will fix it at the desk.
Do not treat sibling bots as isolation. Screens are not a security boundary.
Keep runs reconstructable from files I can open, because there is no audit
view of your actions yet.
\`\`\`

The approval lines are what make the phone an adequate console. The do-nothing-and-say-so line is what stops a bot improvising across the gap between a phone that can pause and a desk that can edit.

## Watch the lines most likely to move

Grok Bot is in beta, and this page was rewritten because the platform list moved inside ten days. The lines most likely to move again are the desktop-only list for routines, which the docs qualify with the word currently, the push notification rollout, and the iPad sentence, which is phrased as initial launch rather than as a decision.

Re-read the FAQ and the mobile page before you build a plan on any row above. If the page you are reading is newer than 2 September 2026, it wins, and this page is the one that needs updating.

## Frequently Asked Questions

### Does Grok Bot work on Linux now?

Yes. As of September 2026 the FAQ lists Linux on x64 and Arm64 as a supported desktop platform, distributed as a .deb package, an .rpm package, or an AppImage. It is a full desktop client, so a Linux user can author, edit, test and read history at their own desk. The bots still run on the account's cloud computer, not on the Linux workstation.

### Is there an Android app for Grok Bot?

Yes. The mobile page says to download Grok Bot from Google Play on Android 9 or later. It is the same companion app as on iPhone: message bots, create them, approve steps, take over the computer for a login or code, and pause or resume routines. Editing a routine, run history, testing and deleting a routine still need the desktop app.

### Can I use Grok Bot on an iPad?

No. The FAQ says iPad is not supported at initial launch and the mobile page says the app is designed for phones, not iPad. Android tablets are not mentioned at all. Use a phone for the companion app and a Mac, Windows or Linux desktop for authoring.

### What can the phone app not do?

In the docs' words, editing the schedule or instruction, viewing run history, testing, and deleting a routine currently require the desktop app, and teach by demonstration plus some advanced desktop controls are not available on mobile. Everything conversational, approvals, taking over the computer, creating or deleting bots, and pausing routines work on the phone.
`,
};
