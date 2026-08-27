import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Hit a 2FA Prompt: What You Should Type, and What You Should Not',
  description:
    'When grok bot 2fa appears, type the code for a login you intend. Never store backup codes on the shared computer, and never let a research bot inherit that session.',
  date: '2026-08-27',
  category: 'Safety',
  content: `
# Grok Bot Hit a 2FA Prompt: What You Should Type, and What You Should Not

The six-digit code is sitting on your phone, the Grok Bot run is paused on a
login page, and the fastest way to unstick it looks like pasting that code into
chat. That instinct is the incident. The digits are a live login into the
account computer's cookie jar, not a riddle the bot is waiting for you to
solve together.

For passwords, passkeys, two-factor codes, CAPTCHAs, and payment
confirmations, the bot should hand you the computer. You open Agent Computer,
take control, complete only the blocked step, return control, and tell it to
continue. You do not send a password or a one-time code in ordinary chat
([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
[Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps) repeats the
chat ban.

Completing grok bot 2fa for a login you intend writes a session onto one
persistent cloud computer assigned to your user account, not to that bot.
Hardware keys are forwarded to your desktop app so you can touch them. The
code is still you, in the moment. The session that follows is available to
every bot on the roster. This page is that incident.

## Treat the 2FA field as a live login into the cookie jar

A 2FA prompt is not a Grok Bot permission card. It is the site asking the
browser on the cloud computer to prove you are the account holder. When you
type the code, you are signing that browser in.

That browser is shared. All bots on the account use one persistent cloud
computer. Cookies, sessions, files, and command-line credentials travel with
it. Screens are work surfaces, not security boundaries
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)).
The [FAQ](https://docs.x.ai/grok-bot/faq) says every bot can access that
computer.

The question at the prompt is whether you intend this identity to exist on
the account computer until you sign it out. If the answer is no, you do not
type the code. If the answer is yes for this job only, you type it, finish
the export, and sign out before any other bot opens a tab.

| Prompt on the page | What you are actually granting | Who inherits it |
|---|---|---|
| Six-digit authenticator code | A signed-in session in the shared browser | Every bot on the account |
| SMS one-time passcode | The same session, plus a code that may also sit in mail | Every bot, and any mail bot that can read the thread |
| Hardware key / WebAuthn | You proved presence on the desktop app. The session still lands in the cloud browser | Every bot |
| Backup or recovery codes | A reusable second factor if you save them on the computer | Every bot that can open the file |

People think they granted "download last month's CSV." They granted "be me at
this bank until the cookie dies or I kill it."

## Type the six digits on the Agent Computer, never into chat

The documented path is four steps: open Agent Computer, take control, complete
the sensitive step on the cloud desktop, then return control and tell the bot
to continue. The code goes into the site's field. Ordinary chat is a
transcript.

A supported connection can present a secure secret request instead. Enter the
value there if you see one. It is not a general-purpose password manager. The
value is masked, excluded from the transcript, and not shown to the model.
That path is still you typing in the moment.

The failure mode is politeness. The bot asks you to send the code. You paste
six digits. Those digits are now in a conversation that lives with the
account, and the session may already be in the cookie jar as well.

Do not read an SMS code out loud to the bot either. If the vendor sent it to
mail, [Inbox Triage](/bots/inbox-triage) may already see the thread. Complete
the field yourself, then treat that mail as a secret. The
[Gmail permissions article](/blog/grok-bot-gmail) is the connection side.

| You are tempted to | Do this instead | What you avoid |
|---|---|---|
| Paste the code into chat | Take control, type it in the site field, return control | A one-time code in the transcript |
| Tell the bot "the code is 482193" | Say "I finished the prompt, continue from the signed-in page" | Teaching the bot that digits in chat are credentials |
| Forward the SMS to the conversation | Type on the desktop, then pull that thread out of any bot-visible label | A mail bot holding a live second factor |
| Save backup codes in \`/workspace\` so next month is easier | Keep backup codes off this machine entirely | A standing bypass for every bot |

After a good 2FA you do not narrate the secret. You narrate that the stall is
over.

## Forward WebAuthn to the member desktop app, then touch the key yourself

Hardware keys are the case people use to argue the bot can "do 2FA now." The
docs say something narrower. WebAuthn prompts in the computer browser are
forwarded to the member's desktop app and their physical key
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
That is a presence check on the Mac or Windows box in front of you. The cloud
computer is a managed Linux VM. The bot runs there as a non-root user. Your
key is not plugged into that VM.

Windows support for that forwarding is rolling out. Confirm on your own
machine. There is no Linux desktop app, even though the computer is Linux, and
no Android or iPad app. macOS and Windows desktop apps receive the forwarded
prompt ([FAQ](https://docs.x.ai/grok-bot/faq)). iPhone on iOS 18+ is a
companion. It does not replace that desk.

Touching the key does not change who owns the session that follows.
[Lead Scout](/bots/lead-scout) does not need the key. It needs the cookie.
Passkeys in the computer's password manager make re-signing in fast after a
session drop. Fast for you is fast for every bot. Do not enroll a bank passkey
on that machine unless the whole roster may hold that identity. The
[least-privilege rule](/blog/least-privilege-bots) applies to passkeys the
same way it applies to OAuth.

| Method | Where the proof happens | What the cloud computer stores afterwards | Bot isolation |
|---|---|---|---|
| TOTP from your phone app | You, typing on Agent Computer | Session cookie | None. Screens do not isolate |
| Hardware key via forwarded WebAuthn | You, touching the key on the member desktop app | Session cookie | None. The key stayed with you. The session did not |
| Passkey in the computer's password manager | The computer can re-assert later | Session plus a stored passkey | None, and next month is easier for every bot |
| Hosted MCP sign-in | Cursor's backend, not the computer | Not a browser cookie on the VM | Better. Those tokens stay off the computer |

The last row is the genuine exception, and it does not help a bank with no
connector. If the job is a CSV behind a 2FA wall, you are in the browser.

## Keep TOTP as you in the moment even after the hardware prompt works

People hear "WebAuthn is forwarded" and stop reading. They conclude the product
now handles second factors, so the old rule about not typing codes is
obsolete. It is not.

Forwarding covers a hardware prompt in the computer browser. It does not type
your authenticator digits. It does not read your SMS. It does not pull backup
codes out of a drawer. Those remain a human step on a takeover.

"You in the moment" means the code is valid for this login, this minute, this
intent. Next month's export is a new 2FA. That inconvenience is the control.

If the site offers to trust this browser for thirty days, decline unless you
accept a standing bank session in the jar. The docs tell you to ask the bot to
pause and notify you rather than attempting to bypass the check.

A [Chief of Staff Briefing](/bots/chief-of-staff-briefing) should not complete
a 2FA wall it finds in a vendor thread. A code in an email is an item to flag,
not a field to fill.

## Leave backup codes off the shared disk, the transcript, and the screenshot folder

Backup codes are worse than TOTP. TOTP rotates. Backup codes are reusable
until you mark them used. A file named \`bank-backup-codes.txt\` on the account
computer is a standing second factor for every bot that can open a file.
Deleting the finance bot does not delete that file. Deleting a bot does not
remove shared-computer files or browser sessions
([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).

Do not photograph the printed codes onto the Agent Computer. Do not paste them
into the charter. Do not drop them in the same folder as the CSV. The export
is data you wanted. The codes are a key.

If you generated backup codes during the stall because the authenticator app
was on a dead phone, finish the login, copy the export, sign out, and move
those codes off this VM. Then delete the copy on the computer yourself. There
is no audit view of bot actions yet
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

A password-manager "save this" prompt is the quiet version of the same
incident. The CSV can stay if the job needs it. Backup codes cannot. A "trust
this browser" token is a standing grant to every bot that opens the host.

## Walk Tuesday's bank export from the 2FA field to Lead Scout's next tab

Here is the incident as a morning, not as a principle.

Tuesday 09:10. You need last month's card CSV from the business bank. The bank
has no connector. A finance-shaped bot opens the bank, fills the saved
username, and stops on a 2FA field. Correct. It hands you the computer.

Tuesday 09:12. You take control, type the authenticator code for a login you
intend, return control, and say continue. The bot downloads \`march-card.csv\`.
You close the preview because standup started. You do not sign out.

Tuesday 21:40. [Lead Scout](/bots/lead-scout) runs its overnight public-signal
pass. It never contacts anyone. It opens the shared browser to collect public
pages. The bank cookie is still there. Lead Scout does not need a second 2FA.
You already did that at 09:12. The cookie is the grant.

Wednesday 08:00. You still have no audit view. Lead Scout's report looks like
research. Capability does not annotate itself.

| Clock | Actor | Action | What is now true on the account computer |
|---|---|---|---|
| 09:10 | Finance-shaped bot | Opens the bank, hits 2FA, stops | No session yet. Stall is correct |
| 09:12 | You | Type TOTP on Agent Computer for a login you intend | Live bank session in the shared cookie jar |
| 09:18 | Finance-shaped bot | Saves \`march-card.csv\`, you close the preview | File on the shared disk, session still live |
| 09:19 | You | Go to standup without signing out | Every other bot can inherit the bank |
| 21:40 | Lead Scout | Opens the shared browser for public pages | Research job plus your bank identity, one jar |

The 2FA was successful. The incident is the inheritance. Sign out after the
job is what turns "I logged in for an export" back into "the research bot
cannot open the bank."

A [Churn Watch](/bots/churn-watch) bot that reads billing internally is the
same shape if you 2FA into a payments dashboard instead of using a connector.

## Sign the bank out before any other screen on that computer opens a tab

After the export, stay on the desktop long enough to do four things. Confirm
the file you wanted is on a path you will actually use. Sign out of the bank
in the shared browser (closing the tab is not sign-out). Delete backup-code
notes, authenticator screenshots, and any temp-password file from this stall.
Tell the bot the host is out of bounds until you say otherwise.

The docs already say it: sign out of a service when it should no longer be
available, and remove sensitive temporary files after the work is complete.
They also tell you not to use separate bots as a security boundary. Signing
out is the move that matches those two sentences.

If you needed the session for a second export the same afternoon, finish both,
then sign out once. Do not leave it overnight. Overnight is when the research
bot runs.

On iPhone you can pause and resume only. A forwarded hardware-key prompt needs
the member desktop app. If grok bot 2fa hits while you have only the phone,
pause. Finish at the desk, then sign out at the desk.

The inheritance check is a bot that should not be at the bank. Asking the
finance bot to "make sure it's signed out" is not a check. Ask Lead Scout to
open the URL and report a login form versus a dashboard.

## Separate the 2FA incident from the shared-computer principle

[One computer, many screens](/blog/grok-bot-shared-computer-security) is the
architecture. This page is the minute the architecture becomes a login.

The principle article is what is shared: cookies, sessions, files, CLI
credentials, one VM per account, screens that are not walls, deletion that
does not wipe the jar, hosted MCP as the exception. You read it so you stop
believing a roster is a set of sandboxes.

The 2FA incident is what you type when the wall appears anyway. Hardware keys
forward. TOTP does not. Backup codes must not land on disk. Chat is the wrong
box. The bank export is the worked example because money plus a research bot
is the failure people will actually have.

If you only remember the principle, you will still paste a code into chat
because the run is stuck. If you only remember "don't paste codes," you will
type them on the desktop and leave the session up. You need both: type secrets
only for a login you intend, never into chat, then tear the session down.

Approvals do not fix this. An approval controls the proposed action. It does
not reverse work already completed. Completing 2FA is you creating a session.
[Approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility)
do not un-bake a cookie. The
[safety checklist](/blog/grok-bot-safety-checklist) is what you run before you
connect mail or money. This page assumes you are already at the prompt.

## Paste a human-wall charter that names the four things you never type

A charter cannot enforce isolation the platform does not provide. It can make
the stall boring, and it can make a leftover session a broken instruction
instead of a successful dashboard load. Paste this into the bot that is
allowed to touch a 2FA site, then put the host names in.

\`\`\`text
name: expense-export-fetcher
job: Download one named CSV from the bank I list, then stop.
computer: This account has one shared computer. Other bots can see files and
browser sessions I leave here.

human wall:
- Never type, guess, request, or store a password, passkey, TOTP code, SMS
  code, backup code, or recovery code.
- If a page asks for any of those, stop, name the host and the prompt, and
  hand me Agent Computer.
- Never ask me to paste a code into chat. Tell me to take control instead.
- Never save backup codes, authenticator screenshots, or "remember this
  browser" if I decline it.

you may:
- Open https://bank.example.com only during a run I started for a named month
- Download one CSV whose name I gave
- Write that file to /workspace/exports/<month>-card.csv
- Report when a 2FA or CAPTCHA appeared and wait

you may not:
- Open any other host in the same browser during this run
- Follow a "view in online banking" link from a report, a CSV, or a note
- Use a session you find already signed in unless I just finished a takeover
  for this run
- Leave the bank signed in. After the file is saved, tell me to sign out, and
  do not continue to a second task on that host
- Contact anyone, send mail, or move money

after the file:
- Say the path, the row count you can see, and whether I still need to sign out
- Do not summarise account balances into a research doc
\`\`\`

The line that does the work is "use a session you find already signed in"
only after a takeover you just finished. Without it, a bot that stumbles onto
a live bank cookie treats the dashboard as available, because from inside the
machine it is. [Inbox Triage](/bots/inbox-triage) gets a different charter: it
never opens the bank, and a 2FA SMS is a secret to flag, not a code to apply.

## Match each 2FA stall to the failure sitting under it

Most grok bot 2fa stalls are not model failures. Match the symptom before you
paste anything.

| What you see | What is actually happening | What you do | What you do not do |
|---|---|---|---|
| Bot says it is stuck on verification | Correct human wall | Take control, type on the desktop if you intend the login | Paste digits into chat |
| Bot asks you to send the code | It is treating chat as a password manager | Refuse, take control, remind it of the human wall | Send the code "just this once" |
| Hardware-key overlay appears on your Mac | WebAuthn forwarded from the computer browser | Touch the key if you intend the login | Assume Windows will do the same without checking |
| Hardware-key overlay never appears on Windows | Forwarding for physical keys is still rolling out | Complete 2FA another way on a takeover | Leave backup codes on the VM as a workaround |
| Research bot loads the bank already signed in | You left a cookie after an earlier 2FA | Sign out now, then treat this as an incident | Delete the research bot and assume the session died |

There is no Grok Bot-specific spend cap. A retry loop on a 2FA wall spends
weekly allowance, then on-demand, and still cannot type the code. Stop it. See
[spend and token burn](/blog/grok-bot-spend-cap-and-token-burn). Some services
flag datacenter addresses. That pain is a reason to get a connector, not a
reason to store backup codes.

## Answer the claim that a dedicated finance bot keeps the bank session private

The strongest objection is reasonable on its face. You created a bot whose
only job is expenses. You never asked Lead Scout to open the bank. You wrote
"do not use banking sites" in the research charter. Therefore the 2FA you
completed at 09:12 is private to the finance bot.

It is not. The computer is assigned to your user account, not to an individual
bot. Separate bots are not a security boundary. The research charter is an
instruction. The cookie is a capability. On this runtime, capability wins
unless you sign out.

The objection wins in one case only: you never complete 2FA in the shared
browser at all. You use a hosted connector whose tokens stay with Cursor's
backend, or you download the CSV on your own laptop and put a redacted file
on the computer. Those paths never write a bank identity into the jar. A
dedicated bot name does not create those paths. It creates a screen.

"I will remember to sign out" is the other form of the objection. You will
not. Standup starts at 09:18. Put sign-out in the charter as a blocking last
step. If a job cannot survive a sign-out after each export, the job is a
standing identity on the account computer. Decide whether Lead Scout should
exist on the same account.

Team-level ceilings on local execution, and admin Kill that deletes the VM
while keeping durable storage, are documented as not shipped. Plan around
their absence.

## Prove the session is gone with a check that can come back dirty

A feeling is not a teardown. After you sign out, run a check that can fail.

On desktop, pick a bot that should never see finance. Ask it only to open the
bank URL and report whether it sees a login form or a dashboard. If it sees a
dashboard, the cookie is still there. Sign out again, clear the site cookies
in that browser if you know how on the Agent Computer, and rerun the check.
If it sees a login form, the inheritance path is closed until the next time
you type a code.

Also search the filesystem for stall artifacts: backup codes, authenticator
screenshots, otp notes, the bank host name. Delete what you would not want a
research bot to open. The CSV can stay if the job needs it. The codes cannot.

Do this on a day when nothing is on fire. It is the only proof you have,
because there is no audit view to query later.

Where this breaks down: a session that does not show as a login wall, asking
the finance bot to check, iPhone-only (pause and resume cannot finish WebAuthn
or a teardown), a passkey stored on the computer, or deleting the finance bot
and calling that cleanup. Deletion removes the profile and its routines (max
fifty per bot, twenty recent run records each). It does not sign the bank out.

Paying more does not isolate cookies.
[Supported platforms](/blog/grok-bot-supported-platforms) is the door list.

## Retire a surviving cookie instead of treating next month's export as free

The last bad bargain is efficiency. April's export was painful. The bank is
still signed in. May's export will be one click. Leave it.

That standing session is the research bot's standing session. Anyone who can
induce a bot to open a URL inherits it: a note, a CSV comment, a calendar
location. You do not need a clever attacker. You need a helpful bot and a
leftover cookie.

Retire it. Next month you complete 2FA again, for a login you intend, then
sign out again. If that price is too high, export from your own laptop and put
the CSV on the computer. Let the bot reconcile a file instead of a session.
That matches [least privilege](/blog/least-privilege-bots) better than a
remembered device on a VM every bot can see.

Routines will not save you. A routine assigns a workflow to one bot, max
fifty per bot, twenty recent run records, deleted with the bot. Nothing is
team-level. A scheduled export that expects a living bank cookie is a
scheduled inheritance. Choose the wait.

**Keep reading:** [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security), [The Grok Bot Safety Checklist Before You Connect Your Inbox](/blog/grok-bot-safety-checklist), [Least Privilege for Bots](/blog/least-privilege-bots).

## Frequently Asked Questions

### Can I paste a Grok Bot 2FA code into chat so the run continues?

No. xAI tells you to take control of the Agent Computer and complete passwords, passkeys, two-factor codes, CAPTCHAs, and payment confirmations yourself. A code pasted into ordinary chat lands in the transcript. It is not excluded from the model the way a supported secure secret request is. The bot does not need the digits. It needs you to finish the field on the cloud desktop, return control, and tell it to continue. If a supported connection presents a masked secret request, use that request instead of chat. That path is still you typing in the moment.

### If I complete 2FA for one bot, can a research bot use that bank session?

Yes. All bots on the account share one persistent cloud computer assigned to the user, not to a bot. Browser cookies and signed-in sessions are shared across the roster. Completing two-factor for an expense export writes a live bank session into that jar. A research bot on the next screen can open the same site as you. Screens are work surfaces, not security boundaries. Deleting the finance bot does not sign the bank out. Sign out when the export is done, and treat the cookie as the grant, not the bot's name.

### Do hardware security keys work on the Grok Bot computer?

Yes, with a documented split. WebAuthn prompts in the computer browser are forwarded to the member desktop app and the physical key. That is you touching hardware on the Mac or Windows box in front of you, not the bot inventing a passkey. Windows support for that forwarding is rolling out, so confirm on your own machine. Completing the key still leaves a signed-in session on the shared computer. The key does not isolate bots from each other, and it does not replace signing out after the job.

### After a 2FA login on the shared computer, what should I do before other bots run?

Copy the file you needed onto a path you own, then sign the service out in the shared browser. Remove any backup-code screenshot or notes file you created during the stall. Tell the bot the job is over and that it must not reopen that host. Then, as a check that can fail, ask a different bot that should not have finance access to open the same URL. If it loads as you, the session is still there. Stay on desktop for that teardown. On iPhone you can pause and resume only.
`,
};
