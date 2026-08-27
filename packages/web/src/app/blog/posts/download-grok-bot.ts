import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Download Grok Bot and Confirm You Are Actually Eligible',
  description:
    'Download Grok Bot for Mac, Windows, or iPhone only after you confirm eligibility. Linux, Android, and iPad have no client. The installer is not the hard part.',
  date: '2026-08-27',
  category: 'Tutorial',
  content: `
# How to Download Grok Bot and Confirm You Are Actually Eligible

The Windows installer ran cleanly on Arm64, you signed in with the Cursor
account you already pay for, and Grok Bot still looks like it never shipped.

That sequence is the normal failure. Search intent for download grok bot
is transactional: a file, a store listing, a progress bar. The product
fails one screen later, when the Cursor login that opens the editor
refuses the bot because the plan is Hobby, Pro at $20, or SuperGrok at
$30.

This page is the download path with the eligibility gate in front of it.
It is not the [supported platforms](/blog/grok-bot-supported-platforms)
reference list. It is not the argument for
[why there is no Linux desktop app](/blog/why-grok-bot-has-no-linux-app)
even though the cloud computer is Linux. Read those when you need the grid
or the VM mix-up. Read this when you are about to click Get, and you need
to know whether Get will open a product or an empty room.

Official desktop path: [x.ai/bot](https://x.ai/bot). Official phone path:
the iOS App Store search for Grok Bot, on an iPhone running iOS 18 or
later. Do not follow a GitHub release, a Telegram zip, or a "Grok Bot for
Linux" wrapper. Those are other software wearing this name.

## Confirm the plan before you download grok bot, not after sign-in

The installer does not check whether you may use the product. It checks
whether the binary can land on the disk. Sign-in is the real gate, and it
runs against a Cursor identity, not against a clever download mirror.

Eligible plans, from the [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq):
SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, and Cursor
Teams Standard and Premium, plus a one-time trial
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
Eligibility widened on 21 August 2026
([xAI announcement](https://x.ai/news/grok-bot-more-plans)). Launch-week
posts that still describe a Mac-only Ultra product are stale.

Closed doors with similar names: Cursor Hobby, Cursor Pro at $20 a month,
SuperGrok at $30. SuperGrok Plus at $100 includes Grok Bot. Cursor Pro+
at $60 is the cheapest documented paid path for one person
([Cursor pricing](https://cursor.com/pricing), checked 25 August 2026).
Do not print a SuperGrok Heavy dollar figure. Holding Hobby plus $30
SuperGrok does not add up to an eligible identity.

| What you do first | What you learn | What you still do not know |
|---|---|---|
| Download, then sign in | Whether the binary launches | Whether the empty screen is a bug |
| Open the invoice, then download | Whether this identity is on the list | How the first bot should be bounded |
| Start a trial, then download | Whether you have a sampler | How large the credit is (unpublished) |
| Upgrade to Pro+, then download | That the paid door is open | That you still have no spend cap |

The right first move is the invoice. Two minutes with the plan name beats
forty minutes of reinstalling an Arm64 build that already worked.

## Open x.ai/bot for desktop, or search Grok Bot on the iPhone App Store

There are two official clients, and they are not interchangeable.

Desktop: go to [x.ai/bot](https://x.ai/bot) and take the macOS or Windows
build. macOS covers Apple silicon and Intel. Windows covers x64 and
Arm64. Arm64 is first-class, not a stub
([Grok Bot FAQ](https://docs.x.ai/grok-bot/faq)).

iPhone: App Store search for Grok Bot, iOS 18 or later. Pause and resume
only. Editing, history, testing, and deleting need a desktop
([mobile](https://docs.x.ai/grok-bot/mobile)). A browser tab is not a
third client. If a phone is your only device, you can download grok bot
in the store sense and still be unable to author anything.

| Surface | Official door | After a healthy install you can | After a healthy install you still cannot |
|---|---|---|---|
| macOS (Apple silicon or Intel) | x.ai/bot | Create, edit, test, schedule, read history, delete | Pick a model, set a Grok Bot spend cap, see an audit view |
| Windows x64 | x.ai/bot | The same desktop jobs as macOS | The same missing controls |
| Windows Arm64 | x.ai/bot | The same desktop jobs as x64 | Prove eligibility. The binary does not do that |
| iPhone, iOS 18+ | App Store search for Grok Bot | Pause and resume | Edit, history, test, delete, teach by demonstration |

If the vendor page and the App Store disagree with a screenshot you saw
on X, trust the vendor page. The product launched in beta on 11 August
2026 and the access list moved ten days later. Screenshots age faster
than binaries.

## Refuse unofficial builds even when search ranks them above the vendor

"Download grok bot" is a query unofficial pages love. They offer a zip,
an Electron shell, a "Linux client", a mirror hosted on a file box, or a
repo that asks you to paste a Cursor session into a community wrapper.

This site will not name those projects. Naming them is a link. A star
count is not a substitute for [docs.x.ai](https://docs.x.ai/grok-bot/faq).
If the file did not come from x.ai/bot or from the iOS App Store listing
for Grok Bot, it is not the product this article is about.

Sign-in is a Cursor identity. A wrapper that captures that login has the
account the cloud computer is assigned to. Do not debug a missing Linux
package by handing that identity to a third party.

Grok Build went open source on 16 July 2026. An "open Grok" repo is a
developer product. If the tree talks about SKILL.md or CLAUDE.md, you
are not looking at Grok Bot. See
[Grok Bot vs Grok Build](/blog/grok-bot-vs-grok-build).

## Match the plan name on your invoice to the eligibility list

Open the billing page you already pay. Read the product name, not the
dollar amount you remember. Adjacent SKUs are designed to be confused.

| Name on the invoice | After you download and sign in | What to do instead of reinstalling |
|---|---|---|
| Cursor Hobby | The client can launch. Grok Bot is not included | Start the one-time trial, or move to an eligible paid plan |
| Cursor Pro, $20/mo | Same: editor access is not bot access | Pro+ at $60 is the cheapest documented individual paid door |
| SuperGrok, $30/mo | Chat-side SuperGrok is not Plus | Plus at $100 includes Grok Bot. Confirm on x.ai/pricing |
| Cursor Pro+, $60/mo | This identity should be eligible | If it is not, you are on the wrong account or Privacy Mode (Legacy) is on |
| Cursor Ultra, $200/mo | Eligible | Do not buy Ultra only to get a "better bot." There is no model picker |
| Cursor Teams Standard, $40/user/mo | Eligible for seats on that team plan | Confirm you signed into the team identity, not a leftover Hobby login |
| Cursor Teams Premium, $120/user/mo | Eligible | Same identity check as Standard |
| SuperGrok Plus, $100/mo | Eligible | Sign in with the identity that holds Plus, not a second Cursor Hobby |
| SuperGrok Heavy | Eligible, on the FAQ list | Confirm current price on the vendor page. Do not trust a roundup |
| One-time trial | Eligible as a sampler, limited usage | A lab, not a week of unrestricted agents |

Prices checked 25 August 2026 against
[cursor.com/pricing](https://cursor.com/pricing),
[Cursor team pricing](https://cursor.com/docs/account/pricing), and
[x.ai/pricing](https://x.ai/pricing). The live page wins.

Identity traps: a leftover Hobby Google login next to a Teams work
login, or Privacy Mode (Legacy), which blocks Grok Bot on every plan
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
No installer repairs that setting. The
[Cursor account explainer](/blog/grok-bot-cursor-account-explained)
covers the ownership chain.

## Follow Priya from a Windows Arm64 installer to a blank product

Priya is product ops. Her machine is a Surface Laptop 7, Windows on
Arm64. She already has Cursor Hobby because the editor is a decent notes
app and she does not ship code. Thursday she searches download grok bot,
opens [x.ai/bot](https://x.ai/bot), and the installer runs without a
complaint. Arm64 is listed. She reads that as "so I am in."

She signs in with the same Google SSO she uses for Hobby. The client
opens onto an empty state that looks like a failed sync, or a line that
this plan does not include Grok Bot. Arm Windows has burned her before:
other apps shipped x64 and looked empty. She uninstalls, bookmarks a
forum "ARM download," reinstalls the official build, and messages a
teammate on Cursor Pro+ and Windows x64: "Grok Bot is broken on
Snapdragon." He sends a working roster screenshot. Neither of them
opens billing.

Friday morning the invoice still says Hobby. Hobby is not on the FAQ
list. The Arm64 installer was never the defect. The identity was never
entitled.

| Clock | What Priya does | Story she tells | What is true |
|---|---|---|---|
| Thu 18:05 | Installs from x.ai/bot on Arm64 | If the installer runs, I have the product | The installer only proves the OS is supported |
| Thu 18:12 | Signs in with Hobby Google SSO | Cursor already knows me, so bots should appear | Cursor knows a Hobby user. Hobby excludes Grok Bot |
| Thu 18:40 | Hunts an Arm-specific unofficial build | Official Arm support must be a stub | Official Arm64 is first class. She does not need a stub |
| Thu 19:10 | Compares with a Pro+ teammate on x64 | Snapdragon is the split | The split is the invoice, not the chip |
| Fri 09:20 | Reads Hobby on the bill, then the FAQ | I wasted an evening on a broken app | She wasted an evening on an ineligible identity |

The fix is boring: start the trial, or move the identity to Pro+, Plus,
Teams, Ultra, or Heavy. She does not need a different Windows build.
[Inbox Triage](/bots/inbox-triage) and
[Standup Scribe](/bots/standup-scribe) are still drafts after the door
opens.

## Tell an empty home screen from a failed download

People collapse four failures into "the download did not work." Only
one of them is a download.

| What you see | Likely cause | What would actually change it | What will not |
|---|---|---|---|
| Installer will not run | Wrong OS: Linux desktop, Android, iPad, or an old iPhone | A supported machine, or wait | A community wrapper |
| Installer runs, app will not launch | Local block: OS policy, broken package, store region | Retry from x.ai/bot or the App Store, check OS version | Changing Cursor plans |
| App launches, sign-in works, no Grok Bot | Ineligible plan or Privacy Mode (Legacy) | Trial or eligible plan, or turn that mode off | A second installer |
| App launches, roster exists, jobs fail later | Charter, connections, or usage, not the binary | A bounded first bot and a read of the run | Re-downloading the client |

Priya was row three wearing row one's costume. Arm64 support exists so
that row one is not her problem. The costume is convincing because the
empty state has no invoice number on it.

If the app will not launch, stay on the official file. If it launches
and the product is missing, stop touching the binary: billing, then the
FAQ list, then Privacy Mode (Legacy), then the wrong Cursor user. A
failed download is a file problem. An empty product is an entitlement
problem. Mixing them is how unofficial builds get a customer.

## Skip Linux, Android, and iPad after one documented no

There is no Linux desktop app. There is no Android app. There is no
iPad app. The FAQ says so. The teams page answers "Is there a Linux
desktop app?" with no
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

Do not spend the download session proving those sentences false. The
cloud computer is a managed Linux VM. The bot runs as a non-root user.
That is the worker, not a .deb. The argument lives on
[why Grok Bot has no Linux app](/blog/why-grok-bot-has-no-linux-app).
The grid lives on
[supported platforms](/blog/grok-bot-supported-platforms). If your
only machine is Ubuntu, Pixel, or iPad, you cannot finish a download that
lets you author work. A borrowed Mac can be a control surface. Wine
and a Windows VM, if they ever open, are still Windows clients with
extra steps, not a Linux download. Android is not a promised phone
client. iPad is not a large iPhone app. Until the docs replace the no,
unofficial software is not a plan.

## Install the iPhone client as a remote pause, never as a workshop

An App Store install is a real download grok bot action. It is also
the easiest way to think you have a pocket desktop.

On iPhone you can pause and resume only. Editing, history, testing, and
deleting need desktop
([mobile](https://docs.x.ai/grok-bot/mobile)). Teach by demonstration
is unavailable on iPhone
([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Download the iPhone app if a macOS or Windows client already exists, or
will exist, somewhere you may use. As your only client it is a pause
control for routines you cannot create. Approvals do not reverse work
already completed
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
A late pause does not un-send mail. Do not connect Gmail on download
day because the phone "will be the kill switch." Read
[least privilege for bots](/blog/least-privilege-bots) first.

## Write the first bot on paper before the installer finishes

The download is about to give you a create button. The create button
is how people attach Gmail, Slack, and a bank in the same sitting,
because the empty roster feels like unfinished setup.

Write the job before the binary is done hashing. One role. One
deliverable. A boundary that forbids send, pay, and publish. Paste it
after eligibility is real, not as a reward for the installer.

\`\`\`text
Name: Download Day Clerk
Job: One public-source brief, then stop

You answer one question I name, using public pages only. Every
material claim has a URL. If you cannot open a source, write
blocked and stop. Do not continue browsing after the brief exists.

You run on the account computer, not on this laptop. Other bots
on this account can see files and browser sessions you create.
Never store tokens in files. Never sign into mail, chat, banks,
or admin consoles. Never create accounts.

Boundary: never send email, never post, never purchase, never
delete, never change IAM. If a task needs one of those, fail the
task and write the reason. Pause is not undo.

If I have not confirmed this identity is on SuperGrok Plus,
SuperGrok Heavy, Cursor Pro+, Cursor Ultra, Cursor Teams, or the
one-time trial, do not start. Say ineligible and wait.
\`\`\`

Change the question. Keep the refusals. Catalog shapes that already
have the stop line:
[Inbox Triage](/bots/inbox-triage),
[Chief of Staff Briefing](/bots/chief-of-staff-briefing),
[Lead Scout](/bots/lead-scout).
None of them require you to connect a mailbox on the evening you
fetched the client.

A routine belongs to one bot (max 50, 20 recent run records, deleted
with the bot). Nothing is team-level. Keep the charter in a file you
own.

## Keep Gmail and payments off the computer on download day

All bots on the account share one persistent cloud computer assigned
to the user, not to a bot. Each bot gets a screen. Screens are not
security boundaries. Cookies, sessions, files, and CLI credentials
are shared. Deleting a bot does not remove those leftovers
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps),
[approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).

Download day is when people "just connect Gmail to see if it works."
That login lands in the shared browser. Every future bot can use it.
A trial you abandon still leaves the session unless you revoke it.
See [Grok Bot and Gmail](/blog/grok-bot-gmail) and the
[safety checklist](/blog/grok-bot-safety-checklist). The installer
succeeding is not a reason to hand the VM your mail.

There is no audit view of bot actions yet. Do not connect a payment
surface to "test plugins," and do not print a plugin count from a
news post. Connect nothing until the Clerk brief finishes without a
login wall. Hosted MCP tokens stay with Cursor's backend. Files on
the computer do not.

## Prove the download with checks that can fail

A check that cannot fail is a pep talk. Run these until one of them
hurts.

| Check | How you run it | What failure means |
|---|---|---|
| Official file only | The desktop binary came from x.ai/bot, or the phone app from an App Store search for Grok Bot | You are about to sign into other software. Stop |
| Invoice name is on the FAQ list | Hobby, Pro $20, SuperGrok $30 are treated as no | Fix billing or start the trial before another install |
| Privacy Mode (Legacy) is off | Workspace setting, not the download UI | No client on any OS will help until that mode changes |
| The client OS is actually supported | macOS, Windows x64 or Arm64, iPhone iOS 18+ | Linux, Android, and iPad are not a persistence issue. They are a no |
| After sign-in, you can create a bot on desktop | One named Clerk, no connections | If you cannot, this is entitlement or identity, not Arm64 |
| A sibling bot can see a file the Clerk wrote | Create a note from bot A, list it from bot B | You were about to treat screens as isolation. Do not |

The sibling-file check belongs before Gmail, not after. See it while
the file is a sentence, not a session cookie. The isolation model is
on [one computer, many screens](/blog/grok-bot-shared-computer-security).

If every row passes, the download worked. You still have no model
picker, no Grok Bot-specific spend cap, and a weekly allowance with
no published dollar figure. Do not invent the allowance. Do not
schedule a fleet because an icon appeared.

## Answer the objection that downloading first is the cheap experiment

The strongest objection to this page is speed. The objector says the
installer is free, the App Store listing is free, and you will know
in four minutes whether Grok Bot "works on this machine." Checking
plans first is ceremony. Priya should have installed, seen the empty
state, and learned.

Parts of that are true. Confirming Arm64 support by running the
official Windows build is a real test. Confirming that x.ai/bot
serves a file is a real test. For someone already on Pro+, Plus, or
Teams, download first is harmless.

The objection fails for the people who type the query. They are often
on Hobby, on $20 Pro, or on $30 SuperGrok, because those are the
plans they already bought for the editor or for chat. For them, a
successful installer plus a failed entitlement looks like a broken
product. Broken-product stories send people to unofficial builds,
to Arm-specific mirrors, to Linux wrappers. The cheap experiment
externalizes its cost onto the account.

Two minutes on the invoice beats an evening of architecture theories.
The [free trial](/blog/grok-bot-free-trial) is the sampler if you are
not ready for Pro+. Use that door on purpose. Do not discover you
needed it after you blamed Snapdragon.

If you are already eligible, skip the lecture. Official door, the
identity that holds the plan, a bounded Clerk, Gmail on another day.

## Name the cases where a clean install still cannot help you

A perfect download cannot buy missing product. Linux, Android, or iPad
only: no client. Borrow a supported screen, wait, or change runtimes.
Privacy Mode (Legacy): the binary is decoration. Per-bot credential
isolation: one computer per account, screens are not a boundary. Audit
view of bot actions: not shipped. Model picker: none, for members or
admins. Grok Bot-specific spend cap: none. Weekly allowance, then
on-demand, with no published dollar figure
([cost](/blog/grok-bot-cost),
[spend cap](/blog/grok-bot-spend-cap-and-token-burn)). SKILL.md and
CLAUDE.md: Grok Build, not this download.

If those are deal-breakers, a successful installer is still a failed
purchase. Decide before the progress bar, while you can walk away
without a shared-computer login on the account.

## Send platform lookup and the Linux-computer confusion to the articles that own them

If you came here to see whether Windows Arm64 is real, or whether
iPad will run the iPhone build: the grid is
[Grok Bot on Windows, Linux and iPad](/blog/grok-bot-supported-platforms).

If you came here because the docs say Linux and your laptop is
Linux: the split between client and cloud computer is
[why Grok Bot has no Linux desktop app](/blog/why-grok-bot-has-no-linux-app).

If you came here because Cursor asked you to sign in and you do not
write code: the ownership chain is
[why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained).

This article's job is narrower. Download grok bot from x.ai/bot or
the iOS App Store search. Confirm trial, Pro+, Plus, Teams, Ultra, or
Heavy first. A clean Arm64 install is not proof of access. Put a
boundary on the first bot before create feels like setup. See
[what a Grok Bot is](/blog/what-is-a-grok-bot) and
[is Grok Bot worth it](/blog/is-grok-bot-worth-it).

**Keep reading:** [Grok Bot on Windows, Linux and iPad: What Actually Works](/blog/grok-bot-supported-platforms), [Why Grok Bot Has No Linux Desktop App (Even Though the Computer Is Linux)](/blog/why-grok-bot-has-no-linux-app), [Why Grok Bot Needs a Cursor Account, and How To Get Access](/blog/grok-bot-cursor-account-explained).

## Frequently Asked Questions

### Can I download Grok Bot if I am on Cursor Hobby or Cursor Pro at twenty dollars?

You can fetch the official desktop binary and you can sign in. That is not the same as being eligible. Cursor Hobby and Cursor Pro at $20 do not include Grok Bot. SuperGrok at $30 does not either. The FAQ list is SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, and Cursor Teams Standard and Premium, plus a one-time trial for individuals. If the app opens and the product still looks empty, read the invoice before you hunt an Arm64 mirror. The installer already did its job.

### Where is the official download, and are GitHub or mirror builds safe to use?

Desktop clients come from x.ai/bot. The phone client comes from an iOS App Store search for Grok Bot on iPhone, iOS 18 or later. GitHub trees, Telegram zips, and "Grok Bot for Linux" wrappers are other software. This page will not name them and will not treat a star count as a substitute for docs.x.ai. Sign-in is a Cursor identity. Do not paste that identity into a community client because search ranked it above the vendor. Grok Build being open source does not make a random repo into Grok Bot.

### Why did the Windows Arm64 installer work if I still cannot use Grok Bot?

Because Windows Arm64 is a supported desktop. The binary launching means your OS is on the list, not that your plan is. People on Cursor Hobby hit this constantly: the Surface install looks professional, Google SSO works, the roster never appears, and Snapdragon gets the blame. Compare the plan name to the FAQ. Start the trial or move to Pro+, Plus, Teams, Ultra, or Heavy. Reinstalling will not promote Hobby. Unofficial Arm builds are how that confusion gets expensive.

### Can the iPhone App Store listing replace a Mac or Windows download?

No. The iPhone app pauses and resumes routines. Editing, history, testing, and deleting need a desktop client. Teach by demonstration is unavailable on iPhone. If a phone is your only device, you can complete a store install and still be unable to create the routines you would pause. Use the App Store listing as a remote stop button after a macOS or Windows client exists. A late pause also does not undo a send that already happened, so do not treat the phone as the reason it was safe to connect Gmail on download day.
`,
};
