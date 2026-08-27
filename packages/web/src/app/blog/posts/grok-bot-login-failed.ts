import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Login Failed: Cursor Auth, Eligibility, and Privacy Mode',
  description:
    'Grok Bot login failed is usually Cursor auth, the wrong plan, or Legacy Privacy Mode. The installer is rarely the problem, so check the invoice first.',
  date: '2026-08-27',
  category: 'Reference',
  content: `
# Grok Bot Login Failed: Cursor Auth, Eligibility, and Privacy Mode

Cursor took the password, the Grok Bot window came back empty, and the next
hour went into reinstalling a Windows build that had already worked.

Grok Bot login failed is that sequence. The binary is fine. Sign-in runs
through Cursor, then the product checks whether that Cursor identity may use
Grok Bot at all
([official troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).
Three facts explain almost every refusal: you signed in with Cursor Hobby or
Cursor Pro at $20, Legacy Privacy Mode is on, or you completed a personal
login while the eligible seat lives on a team SSO identity.

This page is the login error only. Eligibility before you fetch the file is
[how to download Grok Bot](/blog/download-grok-bot). Which SKU to buy is
[the cheapest way in](/blog/cheapest-way-into-grok-bot). Why the prompt says
Cursor at all is
[the Cursor account explainer](/blog/grok-bot-cursor-account-explained).
Runtime failures after a roster exists belong on the troubleshooting hub,
not here.

## Read grok bot login failed as a Cursor identity check

Grok Bot uses Cursor authentication and Cursor account data settings
([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
The app is a client. The identity is a Cursor user. The entitlement is a
plan name on that user, or a team membership that user belongs to.

A healthy installer proves your OS is on the client list: macOS (Apple silicon
and Intel), Windows (x64 and Arm64), iPhone on iOS 18 or later
([FAQ](https://docs.x.ai/grok-bot/faq)). It does not prove access. Linux
desktop, Android, and iPad have no client. That is a platform miss, not grok
bot login failed. Read
[supported platforms](/blog/grok-bot-supported-platforms) if you have no
supported desktop. This article assumes the app launched and then refused
you.

The check is not "does this laptop belong to a company that pays Cursor." It
is whether the Cursor user who just signed in holds SuperGrok Plus, SuperGrok
Heavy, Cursor Pro+, Cursor Ultra, Cursor Teams Standard, Cursor Teams
Premium, or a one-time trial
([FAQ](https://docs.x.ai/grok-bot/faq),
[teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
Hobby, Pro at $20, and SuperGrok at $30 are not that list. Confirm live SKUs
on [Cursor pricing](https://cursor.com/pricing) and
[xAI pricing](https://x.ai/pricing) before you pay. Prices below are dated
25 August 2026.

SpaceX acquired xAI (announced 2 February 2026) and Anysphere, the company
behind Cursor (closed 14 August 2026). They are siblings under one parent,
which is why Grok Bot sign-in is a Cursor flow. Eligibility widened on
21 August 2026
([xAI announcement](https://x.ai/news/grok-bot-more-plans)). Launch-week
posts that still describe a Mac-only Ultra product are stale.

## Keep Grok Bot in the foreground while the browser finishes Cursor auth

Some refusals are a handshake that never closed. Official steps, in this
order ([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)): keep
Grok Bot open while authentication runs in the browser, confirm the browser
shows a successful Cursor sign-in, return to the app manually if it does not
regain focus, try Get started or Sign In with Cursor again, then confirm the
account has Grok Bot access.

If your organization uses SSO, complete the organization login rather than
signing in with a different personal account. Personal Google is not the
team identity.

Do not paste a password or a one-time code into ordinary chat if a later
screen asks for a site login. That is a website session on the shared
computer, not grok bot login failed. Take over the computer and sign that
site in yourself. This page stops before that handoff.

If the browser shows a successful Cursor session and the app still has no
roster, you have left the handshake. You are now in plan, privacy, or
membership. Reinstalling will not promote an identity. A second Windows
build from [x.ai/bot](https://x.ai/bot) will not attach you to a team seat.

## Match the invoice SKU to the FAQ list before you reinstall

Open the Cursor invoice, or the xAI invoice, and read the plan name. Compare
it to the FAQ list before you download a second architecture or file a ticket
that says Windows is broken.

| Invoice line (checked 25 Aug 2026) | On the Grok Bot FAQ list | What login will do |
|---|---|---|
| Cursor Hobby (free) | No | Sign-in can complete. Access will not. |
| Cursor Pro at $20 | No | Same. Most common paid miss. |
| Cursor Pro+ at $60 | Yes. Cheapest paid individual door | Succeeds if privacy and identity also match. |
| Cursor Ultra at $200 | Yes | Succeeds. Ultra is not required for the bot. |
| Cursor Teams Standard or Premium | Yes, both include | Succeeds only on the member identity that holds the seat. |
| SuperGrok at $30 | No | xAI chat is not Grok Bot. |
| SuperGrok Plus at $100 | Yes | Succeeds on that xAI entitlement through Cursor auth. |
| One-time trial | Yes, for individuals | Succeeds until the meter is gone. |

SuperGrok Heavy is on the FAQ list. Its price is not published on a primary
page. Do not invent one. Teams Standard is $40 per user per month and Teams
Premium is $120. Both include Grok Bot. Premium is not a better bot.

Cursor Pro at $20 is cause one. The name sounds like the main paid plan. It
does not include Grok Bot. The editor can work, the installer can finish,
Sign In with Cursor can use this morning's Google account, and the product
still refuses. The check is not "is this person a paying Cursor customer."
It is "is this person on the FAQ list."

Cursor Pro+ at $60 is the cheapest documented paid path for one person. The
$40 step from Pro to Pro+ is the documented individual increment. Do not
stack Hobby plus SuperGrok at $30 and expect Plus. Do not buy SuperGrok Plus
at $100 solely to unblock a Cursor Pro editor seat. If you are sampling,
start the one-time trial rather than buying Ultra to make login work
([free trial](/blog/grok-bot-free-trial),
[cheapest way in](/blog/cheapest-way-into-grok-bot)).

Holding both a Cursor subscription and a SuperGrok subscription does not
give you two computers. Grok Bot uses whichever entitlement has more usage
([FAQ](https://docs.x.ai/grok-bot/faq)). One persistent cloud computer is
assigned to the user, not to a bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). There is no Grok Bot-specific spend cap,
and no model picker
([cost](/blog/grok-bot-cost),
[spend cap](/blog/grok-bot-spend-cap-and-token-burn)). If the invoice already
says Pro+, Ultra, Teams, Plus, Heavy, or trial, jump to privacy and SSO.

## Treat Legacy Privacy Mode as a hard block no paid seat can buy through

Cause two is a setting, not a SKU. Grok Bot requires cloud data storage.
Legacy Privacy Mode is not supported
([FAQ](https://docs.x.ai/grok-bot/faq),
[get started](https://docs.x.ai/grok-bot/get-started)). Privacy Mode (Legacy)
blocks Grok Bot entirely
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

If that mode is on, members see "Privacy Mode (Legacy) blocks Grok Bot" and a
prompt to ask an admin. Standard privacy modes work. While a member is on a
team, the team's privacy mode governs. Members cannot weaken it. Buying Ultra
on a personal card does not override a team Legacy setting that still wraps
the identity you signed in with.

An error about Legacy Privacy Mode means the account is using a data mode
that does not permit Grok Bot's required storage. Update the Cursor account
data setting, or contact the organization administrator
([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)). Review the
setting from
[Cursor privacy controls](https://cursor.com/dashboard/settings?openPrivacy=true).
Confirm the current policy language on
[Cursor's privacy page](https://cursor.com/privacy) rather than treating this
article as a contract.

This is the refusal that wastes the most money. The invoice is eligible. The
product is still blocked. Check Team Settings for Privacy Mode (Legacy)
before the next cart. No Grok Bot plan buys through that toggle.

Turning Legacy off so Grok Bot can start does not isolate Gmail from a
research bot. All bots on an account share one persistent cloud computer.
Screens are not security boundaries. "Do not use separate Bots as a security
boundary"
([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Isolation, once you are in, is
[the shared computer note](/blog/grok-bot-shared-computer-security) and
[least privilege](/blog/least-privilege-bots). There is no audit view of Bot
actions yet. Do not wait for a log of the login failure inside Grok Bot.

## Finish the organization SSO path on the member account that holds the seat

Cause three is membership. Self-serve Cursor Teams Standard and Premium seats
include Grok Bot. Enterprise access is rolling out. Availability and
administrative controls can vary by organization. Contact the Cursor account
team for current enterprise access
([FAQ](https://docs.x.ai/grok-bot/faq)). This page will not invent an
enterprise SKU.

If the organization requires SSO, complete the normal organization sign-in
flow ([get started](https://docs.x.ai/grok-bot/get-started),
[troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)). Signing in
with a different personal account is the documented miss. The studio can pay
for Teams Standard for twenty people. You can still grok bot login failed if
the app used the Gmail you created in 2014, the one that holds Cursor Pro at
$20 for evening side projects.

Two Cursor users can share a laptop. They do not share an entitlement. The
cloud computer is assigned to the user that signed in, not to the Windows
device name, not to the company on the invoice.

A related trap: you signed in correctly as a member, and Legacy Privacy Mode
still blocks you. That is cause two riding on cause three. You cannot weaken
the team's privacy mode from a member seat. Personal Pro+ is a different
user. Do not debug plugins until a roster exists. Hosted MCP sign-in tokens
stay with Cursor's backend and are never stored on the computer. That is a
later connector concern.

## Trace Maya's Windows afternoon from a working installer to a $20 invoice

Maya is a product designer. She already pays Cursor Pro at $20 because the
editor sits next to her design tools. On 27 August 2026 she wants a bot that
pulls public competitor landing pages into a brief she will still art
direct herself.

She opens [x.ai/bot](https://x.ai/bot), downloads the Windows x64 build, and
installs it. Sign In with Cursor uses the Google account that already opens
the editor. The next screen is a refusal. She searches grok bot login failed
and fetches the installer again. Windows is not the problem. The invoice
still says Pro at $20.

| Clock | What Maya did | What that actually proved |
|---|---|---|
| 14:05 | Installed the official Windows x64 client | The OS is supported. Access is not. |
| 14:12 | Signed in with the Google account from the editor | Cursor auth can complete on a closed plan. |
| 14:31 | Opened the Cursor invoice | Plan name is Pro, $20, not on the FAQ list. |
| 14:40 | Started the one-time trial on that same identity | Login can succeed without buying Ultra. |
| Next Monday | Studio admin adds her to Cursor Teams with Legacy Privacy Mode still on | Login fails again. The error names Privacy Mode, not Windows. |
| That afternoon | Admin leaves Legacy. Maya signs in with org SSO, not the 2014 Gmail | Cause two and three clear. The $20 Pro side project is a different user. |

The Monday failure looks like a regression. The trial worked. Then the studio
added the work identity to a team that still uses Legacy Privacy Mode. Org
SSO now lands her on the blocked setting. The personal trial is not the
studio seat. She picks: personal identity with trial or Pro+, or work
identity after an admin leaves Legacy Privacy Mode.

She should not connect studio Figma, Gmail, or analytics to celebrate.
Cookies, sessions, files, and CLI credentials stay on the user computer
after a bot is deleted. The first job is a public-page brief, closer to
[Lead Scout](/bots/lead-scout) than to [Inbox Triage](/bots/inbox-triage).

## Split every refusal into plan, privacy, or membership before you touch files

Use the exact text on the screen. Guessing "maybe Windows" is how Maya lost
an hour.

| What you see | Which cause | What will not fix it |
|---|---|---|
| Sign-in returns you to an empty product, invoice says Hobby or Pro $20 | Cause one: closed plan | Reinstall, architecture swap, a GitHub zip |
| Exact text: Privacy Mode (Legacy) blocks Grok Bot | Cause two: Legacy Privacy Mode | Buying Ultra, buying Plus, a new laptop |
| Browser signed into personal Google, studio already pays Teams | Cause three: wrong Cursor user | Completing personal auth more thoroughly |
| Browser never returns, app still on Sign In with Cursor | Handshake, not a plan miss | Wiping AppData as the first move |
| Starting your computer, progress still changing | Setup, not login failed | Force-killing the app mid-image |
| Computer cannot be reached after a roster existed | Runtime. Leave this page | Another installer |

Initial setup can take several minutes. Keep the app open while Starting
your computer still changes
([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)). Recover and
Update Agent Computer preserve durable files and logins. Reset can lose
recent unsynced work. Do not reset to fix login. Exhausted usage is billing
after a successful login. There is still no Grok Bot-specific spend cap.

## Park the download guide and the troubleshooting hub until this screen clears

Search lumps four jobs onto one query. Keep them apart.

| Question in your head | Page that owns it | What this login page will not do |
|---|---|---|
| Which file do I fetch, and am I eligible before I fetch it? | [Download Grok Bot](/blog/download-grok-bot) | Walk the progress bar |
| Which SKU do I buy once I accept I am on Pro $20? | [Cheapest way in](/blog/cheapest-way-into-grok-bot) | Restate the full shopping order |
| Why does a bot ask for a code editor account? | [Cursor account explainer](/blog/grok-bot-cursor-account-explained) | Retell the acquisition chain |
| The bot is in, and a run is silent, duplicated, or stuck | Troubleshooting hub on this site | Fifteen runtime failures |

What a bot even is, once the roster appears, is
[the plain explanation](/blog/what-is-a-grok-bot). Whether a paid week is
worth it is [the worth-it page](/blog/is-grok-bot-worth-it). Those will not
unblock Sign In with Cursor.

Do not follow a community "Grok Bot for Linux" wrapper. There is no Linux
desktop app. The cloud computer is a managed Linux VM where the bot runs as
a non-root user. A wrapper that asks for your Cursor identity is a
credential hazard, not a fix.

## Write the first charter only after a roster exists

A charter pasted into a product that refused you is a note to yourself. Wait
until you can create a bot, then paste a stop line before you connect a
mailbox.

Maya's first bot after a successful login is a public-page brief. It never
sends, never publishes, never signs into Figma, Gmail, analytics, or a bank.
An approval does not reverse work already completed
([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Read
[approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility)
before you widen verbs.

\`\`\`text
Name: Landing Brief
Owner: Maya
Job: Once per weekday, open the five public competitor URLs in the list I
provide. For each URL, write: current headline, primary CTA label, visible
pricing if any, and a one-line change since the last saved snapshot. Save
the brief as a dated file I own. Quote the page. If a page is behind a
login, CAPTCHA, or geo wall, write BLOCKED and stop that row.

Boundary: Never send email, never post, never comment, never create accounts,
never sign into Figma, Gmail, analytics, ads, or banking. Never store
passwords. Never click through a login wall. Never treat another Bot as
isolation. All bots on this account share one computer.

Sources: Public pages only. No authenticated app.
Deliverable: A brief with URLs I can open. Fluency without a URL is a miss.
Review: I read it before any design change. The bot does not ship UI.
\`\`\`

That is close to [Lead Scout](/bots/lead-scout) and a read-only
[Chief of Staff Briefing](/bots/chief-of-staff-briefing).
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant),
[Inbox Triage](/bots/inbox-triage), [Churn Watch](/bots/churn-watch), and
[Standup Scribe](/bots/standup-scribe) wait until the Cursor user on this
computer is the one Maya will still want next quarter.

On iPhone you can pause and resume only. Editing, history, testing, and
deleting need desktop. Teach-by-demonstration is unavailable on iPhone.

## Fail the login on purpose if the Cursor email is not the one on the invoice

Verification has to be able to fail. A green window is not enough, because
Maya's editor login was green too.

Check one: the email after Sign In with Cursor matches the eligible invoice
or the team member list. If it is the 2014 Gmail and the invoice is the
studio domain, sign out and complete organization SSO.

Check two: the plan name on that user is on the FAQ list, or the trial is
active. Pro $20 fails. Start the trial or move to Pro+. Reinstalling is not
a check.

Check three: Team Settings do not show Privacy Mode (Legacy), or you are not
on a team. If members see "Privacy Mode (Legacy) blocks Grok Bot," an admin
changes the setting. A second seat does not skip that conversation.

Check four: you can create a bot and see a screen on the computer. If you
cannot, you are still in login or setup. Wait out Starting your computer
only while progress is changing. Then retry, restart, and check for an app
update. Update Agent Computer is for an unreachable computer after you were
already in, not for a closed plan.

Check five: you have not signed the shared browser into Gmail, the studio
design file host, or a bank. If you already did, every future bot on this
user can open that session. Revoke it in that site's account settings.
Deleting the bot will not.

If all five pass, grok bot login failed is done. Next is a bounded first
charter and [the safety checklist](/blog/grok-bot-safety-checklist) before
any inbox. Grok Build reading SKILL.md and CLAUDE.md is a different product
([Grok Bot versus Grok Build](/blog/grok-bot-vs-grok-build)). Do not debug a
missing CLAUDE.md as a login error.

## Answer the objection that a new binary or a new email is the real fix

The strongest case against this page is practical: wiping the app and making
a fresh Cursor user has unblocked people on forums, so the three causes look
like over-thinking.

Sometimes a second identity works. The one-time trial is documented per
individual. A brand new email can be a new individual who still has a trial.
That is not a documented second trial for the same person, and it is a bad
SSO workaround. Finance then pays Teams Standard for a member who never
signed in, while a personal Gmail holds the bot on a second computer with a
second cookie jar the company does not admin.

A new binary works when the old install was not the official client, or when
the handshake was stuck and a restart would have been enough. Official
desktop path: [x.ai/bot](https://x.ai/bot). Official phone path: iOS App
Store search for Grok Bot on iPhone, iOS 18 or later. A second copy of that
file will not change Hobby into Pro+. A new laptop works when the old
machine was Linux desktop, Android, or iPad. That was no client, not login
failed.

The objection wins in one narrow case: the browser completed Cursor auth for
user A, and you needed Sign In with Cursor as user B, the member seat. That
is cause three, reached with the official handshake, not a factory reset. If
the screen names Legacy Privacy Mode, a new email that later joins the same
team will hit the same block. Paying Ultra also looks like a fix when the
old plan was Pro $20 on the same user. Ultra is eligible. So is Pro+ at $60.
Check Pro+ first if the only goal is this login.

## Keep Gmail and studio logins off the computer until the identity is known

The dangerous minute is the first success, not the failure. People unblock
login and immediately connect mail so the bot feels real. Sessions live on
the account computer. Every bot you add later can open that mailbox. Screens
will look separate. They are not a boundary.

[Gmail guidance](/blog/grok-bot-gmail) is for after you intend to keep this
Cursor user. [Least privilege](/blog/least-privilege-bots) is the rule for
every connector. Hosted MCP tokens staying on Cursor's backend is the
documented exception, not a reason to treat the shared browser as empty.

Maya's studio will want the bot in Figma. Confirm current Figma rules on
Figma's own site. This page will not print a third-party feature list as
fact. She does not sign the studio design system into a computer she just
unlocked with a personal trial she might not keep. Sessions on the trial
identity do not migrate to the team identity. Sign out of anything she
opened just to test. Deleting the trial bots will not.

Static egress IPs mean some services flag datacenter addresses. That is not
grok bot login failed. Take over the screen. Do not paste a one-time code
into chat.

## End this diagnosis when the error is not a login at all

This page stops at the identity check. It does not own platform shopping
beyond "the app launched," SKU shopping beyond "Pro $20 is closed," or a
stuck checkout after you are in.

Enterprise access is rolling out. If org SSO succeeds, Legacy Privacy Mode
is off, the seat is Teams Standard or Premium, and it still refuses, that is
an account team conversation. Do not take a forum's unpublished Heavy price
as a workaround.

iPhone-only users can sign in and still cannot author the way the desktop
can. Pause and resume only. Missing edit controls after a successful phone
sign-in is the mobile surface, not a failed login.

Cursor auth is a product choice, not a crash.
[Grok Bot versus Claude Cowork](/blog/grok-bot-vs-claude-cowork) and
[Grok Bot versus ChatGPT Work](/blog/grok-bot-vs-chatgpt-work) will not flip
Legacy Privacy Mode.

If you contact support, collect Grok Bot version, operating system, the exact
error message, whether you are on Legacy Privacy Mode, the plan name on the
invoice, whether org SSO was used, and whether retry changed the result. Do
not include passwords, one-time codes, or secret values
([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)).

**Keep reading:** [How to Download Grok Bot and Confirm You Are Actually Eligible](/blog/download-grok-bot), [The Cheapest Way Into Grok Bot Without Restating Stale Prices](/blog/cheapest-way-into-grok-bot), [Why Grok Bot Needs a Cursor Account, and How To Get Access](/blog/grok-bot-cursor-account-explained).

## Frequently Asked Questions

### Why does grok bot login failed happen after a clean Windows install?

Because the installer never checks the FAQ list. Windows x64 and Arm64 are supported desktops, so a clean progress bar is the expected result on a closed plan. Sign In with Cursor then evaluates Hobby, Pro at $20, SuperGrok at $30, Legacy Privacy Mode, and whether you used organization SSO or a personal Google account. Reinstalling repeats a step that already succeeded. Open the invoice, read the exact error text, and compare the Cursor user to the member list before you fetch another build from x.ai/bot.

### Does upgrading to Cursor Ultra fix Legacy Privacy Mode by itself?

No. Privacy Mode (Legacy) blocks Grok Bot entirely, including on plans that are otherwise eligible. Members see a prompt to ask an admin, and they cannot weaken the team's setting. Ultra includes Grok Bot when privacy allows it. So do Pro+, Teams Standard, Teams Premium, SuperGrok Plus, SuperGrok Heavy, and the one-time trial. Change the Cursor data setting, or have an admin leave Legacy Privacy Mode, then sign in again. Confirm the live privacy language in the Cursor dashboard rather than treating a price as an override.

### I already use Google to open Cursor. Why is Grok Bot still refusing the same login?

Google on a personal Gmail is not the same as organization SSO onto the member identity that holds the Teams seat. Official troubleshooting says to complete the organization login rather than signing in with a different personal account. The laptop can be the studio's. The invoice can say Teams Standard. The app can still be looking at the Cursor Pro $20 user you created for evening work. Sign out, run the org SSO flow, then re-check Legacy Privacy Mode on that team. A second Google password prompt does not merge the two users.

### Should I create a new Cursor email when grok bot login failed will not clear?

Only if you are starting a genuine new individual identity and you still have a one-time trial, and you accept a second cloud computer with a second cookie jar. A new email is not a documented second trial for the same person, and it is a poor SSO workaround because finance then pays for a member who never signed in. Prefer the official handshake, the invoice SKU, and an admin change to Legacy Privacy Mode. Reinstall the official client only after those checks, and only from x.ai/bot or the iPhone App Store listing.
`,
};
