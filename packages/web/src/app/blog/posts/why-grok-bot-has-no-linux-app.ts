import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot on Linux: There Is a Desktop App Now (Corrected)',
  description:
    'Correction: Grok Bot now ships a Linux desktop app for x64 and Arm64 as a .deb, an .rpm or an AppImage. What this page said before, what changed, and what to re-check.',
  date: '2026-09-06',
  category: 'Reference',
  content: `
# Grok Bot on Linux: There Is a Desktop App Now (Corrected)

This page used to be called "Why Grok Bot Has No Linux Desktop App (Even Though the Computer Is Linux)". The URL still says so, because links to it exist and a redirect is a separate decision. The claim in the old title is no longer true, and this is the corrected page.

As of 4 September 2026 the [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) lists Linux on x64 and Arm64 as a supported desktop platform, distributed as a .deb package, an .rpm package, or an AppImage. The same FAQ answers "Where do I talk to Grok Bot?" with the desktop app on macOS, Windows, or Linux, or the companion app on iOS or Android. In August, the same page listed macOS and Windows only and a separate docs page answered the Linux desktop question with a flat no.

What survives from the old page is the part that was never about the client: the cloud computer your bots run on is a managed Linux machine, and no amount of Linux on your own desk changes what you can do to it. That distinction confused people before the app shipped and it will confuse more people now that both sides of it say Linux.

## Hold the two Linuxes apart before you install anything

There are two Linux machines in this story and they have nothing to do with each other.

The first is the one on your desk: your Ubuntu laptop, your Fedora workstation, your Arch box. The Grok Bot desktop app now installs there, in one of the three formats the FAQ names. It is a client. It shows you your bots, lets you write and edit their routines, and lets you watch and take over the shared computer.

The second is the cloud computer: a persistent machine assigned to your account, not to any one bot, that the docs describe as a managed Linux VM on which the bot runs as a non-root user. That is where the work happens. Your desktop app talks to it. You do not log into it, install packages on it, or run your own services on it.

| | Your Linux desktop | The cloud computer |
|---|---|---|
| Who controls the OS | You | The vendor |
| What runs there | The Grok Bot client | The bots, their browser, their files |
| Can you get a shell | Yes, it is your machine | Not documented, and the bot itself is non-root |
| Where a bot's files live | Not here | In the cloud computer's workspace |
| What the September change affected | This column | Nothing |

Every workaround the old page catalogued, SSH tunnels, remote desktops onto a supported client, virtual machines running Windows, existed to get a Linux user to the first column. That column now has a native app. The second column has not moved, and it is the column that decides what a bot can actually reach, so it is the one worth understanding before you install anything.

## Install the app in the format your distribution takes

The FAQ names three formats and nothing else: a .deb package, an .rpm package, or an AppImage. It does not list distributions, minimum versions, desktop environments or dependencies, and this page will not invent any of those.

In practice the three formats cover the ground, which is more than most desktop software manages on its first Linux release. The .deb is the Debian and Ubuntu family. The .rpm is Fedora, RHEL and their derivatives. The AppImage is the format built to run on anything without a package manager, and it is the one to try if your distribution takes neither of the others. The official desktop path is x.ai/bot, the same place the Mac and Windows installers come from; [the download page](/blog/download-grok-bot) covers the eligibility check that has to come first.

Two things the install does not do, and both are worth saying before the first routine is written. It does not make your workstation the bot's computer, so nothing you have installed locally is available to a bot. And it does not sign you in: the client needs an account with an eligible plan, which the mobile page lists as SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, or Cursor Teams Standard or Premium.

## Reject the SSH story a second time

The old page spent a long section on Linux engineers who heard that the bot computer was Linux and assumed a shell was one support ticket away. The app shipping makes that assumption more tempting, not less, so it gets repeated here.

The docs describe the cloud computer as managed, and the bot process as non-root. They do not describe SSH access, a terminal into the VM, or any way to install your own software on it. The desktop app on your Linux box gives you what the desktop app on a Mac gives a Mac user: a window onto the bot's screen, with a take-over control for passwords, two-factor codes and CAPTCHAs, and the authoring surface for routines. It is not a remote shell and it does not become one because the client and the server now share a kernel family.

If your job genuinely needs a machine you control, where you choose the packages and the network and the model, that job is [self-hosting](/blog/self-hosting-ai-agents-guide), and Rakazo is the runtime this directory lists for it. That was true before the Linux app and it is true after.

## Walk a Linux-only engineer from the old workaround to the new install

Priya runs Fedora on a ThinkPad and has never owned a Mac. In August she followed the old version of this page: she borrowed a Windows laptop for an hour a week to author bots, and operated them from an iPhone that could only pause and resume.

In September she installs the .rpm from x.ai/bot on the ThinkPad, signs in with her Cursor Pro+ account, and finds every bot she authored on the borrowed machine already there, because bots and conversations sync across signed-in devices. She retires the borrowed laptop. She keeps the phone, which now does considerably more than pause.

| Week | What Priya did | What changed |
|---|---|---|
| August | Borrowed Windows for an hour a week | Authoring was rationed to that hour |
| First week of September | Installed the .rpm on Fedora | Authoring happens whenever she is at her desk |
| Same week | Opened run history on Fedora for the first time in a month | Found a routine that had been silently skipping a source |
| Ongoing | Phone for approvals and pauses, Fedora for edits | The same split every Mac user has |

The third row is the point. Rationed authoring means rationed auditing, and the routine that had drifted was invisible from a phone. [Bots that get quietly worse](/blog/the-bot-that-got-quietly-worse) is the long version of that failure.

## Keep the phone as the operator's console, on Linux as anywhere else

Nothing about the Linux app changes the phone side, and the phone side changed a lot in the same docs update.

The companion app for iPhone (iOS 18 or later) and Android (9 or later) can message bots, create them, approve or deny steps, take over the computer, and pause or resume routines. It cannot edit a routine's schedule or instruction, read run history, test, or delete a routine; those are desktop jobs, and the desktop can now be Linux.

For a Linux user with an Android phone, which describes a great many Linux users, this is the first time both halves of the product have run on hardware they already owned. [Grok Bot on Android](/blog/grok-bot-android-status) covers the phone half.

## Plan the install day around the account, not the package

The package is the easy part of a Linux install day and it is the part people prepare for. The parts that actually go wrong are on either side of it.

| Step | What to check | What goes wrong if you skip it |
|---|---|---|
| Before downloading | The invoice line names an eligible plan | A clean install that will not sign in |
| Choosing a format | Which of .deb, .rpm or AppImage your distribution takes | An hour on dependency errors for a package you did not need |
| Signing in | The account that holds the bots you already have | An empty bot list and a panic |
| First run | Wait for the shared computer to be set up | Treating the wait as a broken install |
| First edit | Open run history before touching anything | Editing a routine without knowing what it has been doing |

Do the last row on purpose. If you authored bots on a borrowed machine and have only ever operated them from a phone, this is the first time you have been able to read what they did. Read before you edit, because the routine you were about to tweak may not be the one that needs attention.

None of those rows is Linux-specific. That is the point of putting them here: the September change turned a Linux install into an ordinary install, with the ordinary failure modes, and those failure modes are almost never about the operating system.

## Decide who on a Linux team gets the desktop app

On a team where every engineer runs Linux, the question before September was who had to own the one supported machine. The question now is different and better: who should be authoring bots at all.

The desktop app is the authoring surface, and authoring is where a bot's boundaries get written. A team does not want every engineer editing charters any more than it wants every engineer editing the deploy pipeline. One or two people author and review; everyone else operates from a phone or from the desktop app in read-and-approve mode, which the app supports perfectly well on any platform.

So the Linux app being available to everyone is not an argument for everyone to use it as an editor. It is an argument for the authors on the team to stop borrowing hardware, and for the operators to keep the split this site keeps recommending: approvals and pauses from wherever you are, edits at a desk, by somebody whose job it is.

The shared computer makes this sharper than it would be for ordinary software. Every bot on an account shares that computer's cookies, sessions, files and credentials, and a charter edited carelessly by one person changes what every bot on the account can reach. Authoring rights are access rights. Give them out the way you give out production access, whatever operating system the desk runs.

## Paste a charter that treats the cloud computer as the only computer

The charter below is for a Linux engineer who is used to owning the machine and needs the bot to remind them that, this time, they do not.

\`\`\`text
Name: Priya desk bots
You run on the account's shared cloud computer, a managed machine I do not
administer. You do not run on my Fedora workstation and you cannot reach it.
Put every file you produce in the workspace on your computer, not anywhere
you imagine my desktop to be.
Never install software, change system settings or open a terminal unless a
routine I wrote explicitly says so, and never on a machine that is not yours.
Before any send, purchase, publish or delete: stop, state the exact action in
one line, and wait for approval.
If a step needs a password, a two-factor code or a CAPTCHA, stop and wait for
me to take over the computer from the desktop app or the phone.
Do not treat sibling bots as isolation. Every bot on this account shares your
cookies, sessions, files and credentials. Screens are not a security boundary.
Keep runs reconstructable from files I can open, because there is no audit
view of your actions yet.
\`\`\`

The second and third lines exist because Linux users are the group most likely to write a routine that assumes a local path. [Grok Bot cannot see your files](/blog/grok-bot-cannot-see-files) is the failure that produces.

## Answer the claim that a Linux client was always the easy part

The strongest objection to the old page was that an Electron build for Linux is cheap, the vendor would obviously ship one, and telling Linux users to borrow a Mac was overcautious.

The objection turned out to be right about the outcome and this site was right about the method. The old page refused to plan around an unannounced client, and said so: if the FAQ later lists Linux, that sentence becomes the source. The FAQ now lists Linux. A reader who followed the old advice lost nothing except an hour a week on a borrowed machine, for a few weeks. A reader who had waited for a client that might never have shipped would have lost the same weeks and had nothing at the end.

That is the general rule this site keeps applying to a product in beta. Plan on the documented list. Re-read the list often. When it moves, rewrite the page rather than defending it, and say at the top that it moved, because the readers who arrive from a search engine cache of the old title deserve to know which version they are holding.

## Run checks that can fail before you retire the workaround

Install the package for your distribution and sign in. If the package installs and sign-in fails, the problem is the plan on the account, not the platform.

Open a bot you authored elsewhere and confirm it is present. If it is not, you signed into a different account than the one that holds the bots.

Open a routine's run history on the Linux app. This is the job the phone cannot do and the borrowed machine rationed; if it works, the workaround is over.

Try to read a file the bot produced from your workstation's file manager. It should not be there, because it lives on the cloud computer. If you find yourself looking for it, re-read the two-Linuxes section.

Close the laptop and confirm a long read-only task still finishes. The bot runs on its computer, not yours, and that was true before the app existed.

## Match each remaining failure to the assumption behind it

| Symptom | Assumption | Fix |
|---|---|---|
| App installed, cannot sign in | The installer is the gate | The plan is the gate; confirm eligibility |
| Bot cannot find a file on my workstation | The bot runs where the app runs | Files live on the cloud computer's workspace |
| Wanted a shell on the bot machine | Linux client means Linux access | The computer is managed; the bot is non-root; not documented |
| Installed something from a forum during the gap | Unofficial equals official | Uninstall, rotate credentials, install from x.ai/bot |
| Phone still cannot edit a routine | The phone became a full client | Editing, history, testing and deleting stay on desktop |

The forum row deserves a second look. For most of August, "Grok Bot Linux" searches returned wrappers and scripts using the name. None of them became official when the real package shipped. If one of them holds a login of yours, that login needs rotating whether or not you keep using the product, and the rotation is worth doing before you sign the real client into the same accounts.

## Send the platform grid and the isolation model to the pages that own them

The full list of what runs where, for every platform, is [Grok Bot supported platforms](/blog/grok-bot-supported-platforms). What the cloud computer shares between bots, and why separate bots are not a security boundary, is [what the shared computer actually isolates](/blog/grok-bot-shared-computer-security). If you need your own machine rather than a client onto someone else's, [Rakazo](/blog/rakazo-vs-grok-bot) is the comparison.

Two bots in the catalogue are the right first installs for someone arriving from a Linux desk: [Inbox Triage](/bots/inbox-triage), which drafts and never sends, and [Lead Scout](/bots/lead-scout), which ranks and never contacts anyone. Both are safe to run from a phone while you get used to the desktop app.

## When this page stops applying

This page was rewritten against the FAQ and the mobile page on 4 September 2026, after the Linux client appeared in the FAQ's platform list. The lines most likely to move are the package formats, which the FAQ could extend, and any future documentation of what a Linux user can or cannot do that the current pages do not mention.

What is unlikely to move is the two-Linuxes distinction. The cloud computer being Linux was never a statement about your desktop, and your desktop running the client is not a statement about the cloud computer. If a future docs page describes shell access to the bot computer, that is a change to the second column of the table above, and this page will need rewriting again.

## Frequently Asked Questions

### Is there a Grok Bot desktop app for Linux?

Yes, as of September 2026. The FAQ lists Linux on x64 and Arm64, distributed as a .deb package, an .rpm package, or an AppImage, alongside macOS and Windows. It is a full desktop client: authoring, editing, testing, run history and teach by demonstration all work on it. Before September the FAQ listed macOS and Windows only, which is what the earlier version of this page reported.

### Do the bots run on my Linux machine once I install the app?

No. The bots run on a persistent cloud computer assigned to your account, which the docs describe as a managed Linux VM where the bot runs as a non-root user. The desktop app on your Linux box is a client onto that computer. Files a bot produces live in the cloud computer's workspace, not on your workstation.

### Can I SSH into the Grok Bot computer from Linux?

The docs do not describe SSH or any terminal access to the cloud computer, and they describe the bot process there as non-root on a managed machine. The Linux desktop app gives you the same surface a Mac user gets: the bot's screen, a take-over control for logins and codes, and the routine editor. If you need a machine you administer, that is a self-hosted runtime, not Grok Bot.

### Which Linux distributions are supported?

The FAQ names package formats, not distributions: .deb, .rpm and AppImage. Debian and Ubuntu take the .deb, Fedora and RHEL take the .rpm, and the AppImage runs without a package manager on most other distributions. The docs list no minimum versions or desktop environments, so treat anything beyond the three formats as untested rather than unsupported.
`,
};
