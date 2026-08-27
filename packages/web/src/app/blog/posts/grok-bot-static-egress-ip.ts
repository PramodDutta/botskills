import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Static Egress IPs: Why Some Sites Flag the Login',
  description:
    'Grok Bot uses a grok bot datacenter ip as static egress. Some sites flag it. That is documented. Plan a fallback when a vendor blocks the computer.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# Grok Bot Static Egress IPs: Why Some Sites Flag the Login

The payroll portal asked for a new-device check at 07:14, you were still on
the train, and the Grok Bot run that was supposed to export yesterday's
ledger sat on a challenge page your laptop never shows.

That page is not a broken installer. It is not
[Grok Bot login failed](/blog/grok-bot-login-failed), which is Cursor auth,
the wrong plan, or Legacy Privacy Mode. It is a grok bot datacenter ip doing
what the docs said it would do. The cloud computer reaches the internet
through static egress IP addresses. Some services flag datacenter addresses.
The login you complete on your home network looks like you. The same login
from the account computer looks like a machine in a rack.

This page is that flag. Plan a human fallback before a vendor blocks the
computer. Complete 2FA when you intend the login, then sign out. Do not
publish IP ranges. Do not invent a VPN product. Typing rules:
[Grok Bot Hit a 2FA Prompt](/blog/grok-bot-2fa-prompt). Overnight
selectors:
[Grok Bot Browser Broke Overnight](/blog/grok-bot-browser-broke). Token
location:
[Where Grok Bot MCP Sign-In Tokens Actually Live](/blog/grok-bot-hosted-mcp-tokens).

## Treat a grok bot datacenter ip as documented static egress, not as your laptop

The [teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)
page, checked 25 August 2026, says computers reach the internet through
static egress IP addresses. The same page answers "Why do some websites
block the Bot?" in one sentence: some services flag datacenter IP
addresses.

Read that as a network identity, not as a bug report. Your laptop leaves
from the ISP you pay. The Grok Bot computer is a managed Linux VM. The bot
runs as a non-root user. Traffic still leaves from a small, stable set of
addresses that look like a datacenter because they are one. A grok bot
datacenter ip is that egress. It belongs to the computer, and the computer
belongs to your user account, not to a named bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)).

Static matters. The address does not wander with you from cafe to office.
Risk engines notice when a login that used to come from a residential
range now repeats from one rack. You did not spoof anything. You moved
the browser.

If your company restricts services by source IP, plan for the computer
egress addresses before rollout. That sentence is for destinations you
control. It is not a promise that a bank will love the range.

## Separate a site challenge from Cursor auth that never completed

People search "login failed" and land on two walls. Mix them and you will
reinstall a Windows build while the bank is the thing that is unhappy.

Grok Bot signs members in with a Cursor account
([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)). Plan names,
Legacy Privacy Mode, and the wrong Google user instead of organization SSO
belong on
[Grok Bot Login Failed: Cursor Auth, Eligibility, and Privacy Mode](/blog/grok-bot-login-failed).
Confirm live SKUs on [Cursor pricing](https://cursor.com/pricing) and
[xAI pricing](https://x.ai/pricing). None of that is a grok bot datacenter
ip. Cursor auth happens before you have a roster. A site challenge happens
after the app is in, on a page inside the computer browser. If the window
never populated, stop. If the app is running and a vendor is asking whether
this device is you, you are on this page.

Keep Grok Bot in the foreground while Cursor auth finishes. Passing that
handshake does not make a bank treat the computer as your laptop.

| What you see | Which problem it is | First move | Wrong move |
|---|---|---|---|
| Empty Grok Bot window after a Cursor password | Cursor identity, plan, or Legacy Privacy Mode | Invoice, SSO, privacy setting | Bank 2FA |
| Site on Agent Computer: we do not recognize this device | Datacenter egress flagged | Take over if you intend the login | Reinstall the desktop app |
| Six-digit field, no location copy | Live 2FA into the cookie jar | Type on the cloud desktop, never into chat | Paste digits in the transcript |
| Run green, numbers missing, URL still 200 | Selector or layout moved | Could-not-compute, then a connector | A leftover login as a patch |
| Hard block or 403 from a vendor you do not own | The vendor will not serve that address | Fallback you wrote yesterday | A retry loop on weekly allowance |

## Expect banks and SaaS tools to challenge the cloud computer before they trust the cookie

Consumer banks, card portals, payroll apps, and many SaaS billing consoles
run device graphs. New browser, new network, new datacenter ASN: the graph
asks for a second factor. Your laptop already lives in that graph. The
Agent Computer does not.

Confirm the live behavior on the site you actually use. The docs do not
publish a vendor list, and a blog is not that list either.

Dana runs finance at Harbor Studio, one eligible Grok Bot account. She wants last week's card spend from the business checking
portal, and a CSV of paid invoices from the payment processor's billing
console. Both sites load on her MacBook without drama. Both sites, on the
shared computer, show a location or device check before they show a
dashboard. That gap is the product. It is not Dana mistyping a password.

A challenge is still a login. Completing it writes a session onto one
persistent cloud computer. Cookies, sessions, files, and command-line
credentials are shared. Screens are not security boundaries. The security
page is blunt: "Do not use separate Bots as a security boundary"
([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Deleting a finance bot does not sign the bank out.

[Inbox Triage](/bots/inbox-triage) does not need the checking portal and
can still inherit the cookie. [Lead Scout](/bots/lead-scout) does not need
the billing console and can still open it. Treat the challenge as an
identity event for the whole roster, not as a speed bump for one job.

## Take over the Agent Computer for the challenge, then sign that session out

Work the Harbor morning all the way through. A routine assigned to the
finance bot starts the card export. A routine belongs to one bot, max
fifty per bot, twenty recent run records, deleted with the bot, nothing
team-level
([skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).
The checking portal then paints "we do not recognize this device."

Dana does not paste a one-time code into chat. For passwords, passkeys,
two-factor codes, CAPTCHAs, and payment confirmations she opens Agent
Computer, takes control, and completes the blocked step on the cloud
desktop
([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
[Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps) repeats
the chat ban. The 2FA article is the field-level rule. This article is why
the field appeared: a grok bot datacenter ip, not a forgotten password.
Hardware keys are forwarded to the desktop app. Windows support for that
forwarding is rolling out. Completing the key still leaves a signed-in
session on the shared computer.

Sign out is the last step of the job. If the job cannot survive a
sign-out, the job is a standing identity on the account computer. The
billing console gets the same loop the same afternoon. Two vendors, two
teardowns. Do not batch them into one session that lasts until Friday.

| Clock | What the computer shows | What Dana does | What she does not do |
|---|---|---|---|
| 07:00 | Routine starts the card export | Nothing yet | Assume yesterday's cookie still works |
| 07:14 | Bank: we do not recognize this device | Opens Agent Computer | Paste a code into chat |
| 07:18 | 2FA field | Types the code on the cloud desktop | Leave the tab signed in for tomorrow |
| 07:22 | CSV downloaded | Moves the file to a path she owns | Store backup codes on disk |
| 07:25 | Dashboard still open | Signs the bank out | Delete the finance bot and call that cleanup |
| 07:28 | Login form | Asks Inbox Triage to open the same URL | Trust a feeling |
| 07:40 | Billing console, same pattern | Repeat takeover, copy, sign out | Park both sessions because two teardowns felt slow |

On iPhone she can pause and resume only. A WebAuthn check or a careful
sign-out is a desktop morning.

## Ask the account team for ranges only when you own the destination

The Network section of
[teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)
says that if your company restricts services by source IP, you should ask
your account team for the current ranges. That is the allowlist path. It
applies to services you operate: an internal admin UI, a WAF in front of a
tool your staff built, an SSO portal you already run for humans.

This article will not print those ranges. They change. If you need the
list, ask the account team and date a private ticket. Do not paste CIDRs
into Slack for a vendor you do not control.

Dana cannot allowlist Grok Bot on the bank. She does not own the bank's
ACL. A payment processor allowlist exists only if that vendor sells it.
Confirm on their current page. Hedge. Do not copy a screenshot as a spec.

| Destination | Who owns the IP policy | Can you allowlist Grok Bot ranges? | Standing browser login on the VM | Better path |
|---|---|---|---|---|
| Internal admin UI you run | You | Yes, via account team, never from a blog | Only if policy requires a browser | Hosted MCP or a connector |
| Business bank or card portal | The bank | No | Never overnight | Human export on a laptop, then a file on the computer |
| SaaS billing console you do not own | The vendor | Only if they sell that control. Confirm on their page | No | Hosted MCP if an API exists |
| Public pricing page | The publisher | No | Never | Browser read, or could-not-compute if blocked |

Allowlisting your own services is hygiene. The fallback for destinations
you do not own is a human, a file, or a hosted token. It is not a public
CIDR paste.

## Route load-bearing reads through hosted MCP tokens instead of a parked browser login

A grok bot datacenter ip makes GUI logins worse. That pain is a reason to
leave the browser, not a reason to keep a session warm so the next 403 is
faster.

Sign-in tokens for hosted MCP servers stay with Cursor's backend, which
runs those tool calls on the computer's behalf. The computer never stores
those tokens
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
MCP authentication is shared across Cursor and Grok Bot. That is still not
a cookie in the shared jar.

If Dana can read invoice state through a hosted MCP server, the idle grant
is not a billing-console cookie. Sign the GUI out even when MCP works.

A vendor connector, where one exists, is the middle path: OAuth, breakage
as an auth error rather than as silence. Confirm the live catalogue in the
app. Do not print a plugin count as if it were a spec.

[Where Grok Bot MCP Sign-In Tokens Actually Live](/blog/grok-bot-hosted-mcp-tokens)
is the location page. This page is why the GUI path keeps failing after
you answered storage correctly. Public pages still leave from the same
static egress. A 403 from a CDN is not Cursor auth. Write
could-not-compute. Do not sign into a competitor to "fix" an IP flag. See
[Grok Bot Browser Broke Overnight](/blog/grok-bot-browser-broke) for a
vanished control.

## Keep every other bot on the account off a session you opened for one export

The computer is assigned to your user account, not to an individual bot.
[Inbox Triage](/bots/inbox-triage),
[Chief of Staff Briefing](/bots/chief-of-staff-briefing),
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant), and
[Churn Watch](/bots/churn-watch) share the disk with the finance screen.
A 2FA SMS in mail is a secret. Complete the field yourself. Do not ask
Inbox Triage to grab the code.

[One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security)
is the architecture. Isolation is the account, not the roster card named
Ledger Copy. There is no audit view of Bot actions yet. The dirty check
after sign out is the log. Approvals do not reverse a session already
written
([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).

If finance and research cannot share a cookie jar, they cannot share an
eligible account. A second eligible identity is a second computer. Paying
more on the same user does not split egress and does not split cookies.

## Write the fallback before the vendor blocks the computer, not after

Tuesday at 07:14 is a bad time to invent a plan. Write the fallback in the
charter while the site still loads. Keep a private host list on Dana's
laptop. Do not paste ranges next to those names.

The honest outputs are three. One: the export file, after a human takeover
and a sign-out. Two: could-not-compute, naming the host and the challenge
or block. Three: a file Dana produced on her laptop and placed on the
computer. Inventing last week's spend so
[Chief of Staff Briefing](/bots/chief-of-staff-briefing) looks staffed is
the failure. Retrying a hard block until weekly allowance turns into
on-demand is the expensive version of the same failure. There is no Grok
Bot-specific spend cap. Overflow bills from model and token cost. There is
no published dollar figure for the weekly allowance. Do not invent one
([FAQ](https://docs.x.ai/grok-bot/faq),
[teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

Paste a charter that already knows the address will be flagged.

\`\`\`text
name: harbor-ledger-fetch
job: Copy one named CSV from a finance host I list, then stop.
network: This computer uses static egress IPs. Some services flag
datacenter addresses. A challenge is expected. A hard block is a
fallback, not a retry.

human wall:
- Never type, guess, request, or store a password, passkey, TOTP,
  SMS code, backup code, or recovery code.
- If the page challenges the device, location, or IP, stop, name
  the host and the prompt, and hand me Agent Computer.
- Never ask me to paste a code into chat.
- After any login I complete, tell me to sign out before you
  continue to a second task. Do not continue until I confirm
  the host shows a login form.

you may:
- Open only the host I named for this run
- Download one CSV whose filename I gave
- Write that file to /workspace/exports/<date>-<host>.csv
- Write COULD-NOT-COMPUTE with the host and the reason if the
  vendor blocks the address or the page never shows the export

you may not:
- Retry a block, a 403, or a challenge more than once
- Open a second finance host in the same browser during this run
- Use a session you find already signed in unless I just finished
  a takeover for this run
- Install a VPN, a proxy extension, or a "residential" tool
- Print, guess, or request IP ranges
- Contact anyone, send mail, or move money
- Summarise balances into a research doc

fallback if blocked:
- Write COULD-NOT-COMPUTE
- Ask me for a laptop export dropped at /workspace/exports/inbox/
- Do not invent last week's spend
\`\`\`

The line that does the work is the fallback if blocked. Without it, a bot
that cannot pass a grok bot datacenter ip will either loop or lie.
[Least Privilege for Bots](/blog/least-privilege-bots) still applies. The
minimum here is often no live finance GUI at all.

## Diagnose the flag as the site risk engine, not as a broken Grok Bot install

A site that loads on the laptop and challenges the computer is working as
the vendor intended. Reinstalling Grok Bot does not mint a residential
address. Linux desktop, Android, and iPad have no client
([FAQ](https://docs.x.ai/grok-bot/faq)). The VM is Linux. That is not a
Linux desktop you can move to your house.

Sessions inside the computer can drop when the computer is recreated or
its network address changes. A reset can still look like a new device to a
bank. Kill deletes the running VM and keeps durable storage. None of those
controls turn egress into your home ISP. Grok Bot has no model picker.
Changing models will change nothing about IP reputation.

| Symptom | What it is | What you change | What you do not change |
|---|---|---|---|
| Laptop fine, computer challenged | Documented datacenter flag | Human takeover, then sign out, or leave the GUI | The installer |
| Computer challenged, then sibling bots see a dashboard | Cookie left in the jar | Sign out, dirty-check with another bot | The finance bot's name |
| Hard block on a vendor you do not own | Their risk engine won | Laptop export or hosted MCP | A retry loop |
| Cursor window never populated | Eligibility or privacy | The login-failed article | Bank 2FA |
| Challenge after a computer reset | New device plus same datacenter range | Expect 2FA again | A hope that Kill mints a home IP |

If you contact support, collect Grok Bot version, OS, the exact vendor
message, and whether the same URL loads on your laptop. Do not include
passwords, one-time codes, or secret values
([troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)). Do not
include IP ranges you were given in a private ticket.

## Refuse to park a third-party VPN hop in front of a product that does not ship one

Grok Bot does not sell a consumer VPN. This article will not invent one
or walk you through installing one on the VM. A residential proxy
extension is the same idea. It is not a documented control. It still
shares cookies across bots. Read the vendor's current terms, not here.

The teams page, checked 25 August 2026, offers two documented network
moves besides living with the flag. One: allowlist the Grok Bot egress
ranges on your own services. Two: have the member try the beta setting
that routes computer traffic through their own computer. Confirm that
sentence on the live page before you rely on it. The product ships weekly.
Beta language moves. Routing through the member computer is not a VPN SKU
you buy from a third party. Copy the current wording from docs, not from
this paragraph a month later.

If the beta setting is off, or it does not change the bank's mind, you are
back to takeover, sign-out, laptop file, or hosted MCP. Password-manager
policy and passkeys prove you are the member. They do not hide the ASN.

## Move money-moving clicks off the cloud computer entirely

The boundary on this job is not "ask first." It is: the bot never
completes a transfer, a payroll run, a card payment, or a vendor payout,
with or without an approval card. Approvals do not reverse money that
already moved. A grok bot datacenter ip makes those clicks more likely to
hit step-up auth. That is not a reason to automate through the prompt.
That is a reason the computer should never see the button.

Dana's export is a file. The file can feed a reconciling bot that never
opens the bank. [How to isolate credentials](/blog/how-to-isolate-grok-bot-credentials)
is the menu when even the file feels too close: a second eligible account,
hosted MCP, or a laptop-only console. Confirm ledger-product behavior on
the vendor page. Prefer a read path that never paints the register.

[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) may see a one-time
code in mail. That is a secret to quarantine, not an invitation to
continue the run. Connect mail after you intend to keep this computer
([Grok Bot Gmail](/blog/grok-bot-gmail)), not during the first flagged
login.

## Verify the next morning that the cookie is gone and the fallback still ran

A feeling is not a teardown. After the first Harbor export, Dana schedules
a check that can fail.

On desktop, she picks a bot that should never see finance. She asks it
only to open the bank URL and the billing URL, and to report login form
or dashboard for each. If either is a dashboard, she signs out again and
reruns. She searches the filesystem for stall artifacts: otp notes, host
names, authenticator screenshots. The CSV can stay. The codes cannot.

She also tells the finance bot the page was blocked, once, on purpose. The
required output is COULD-NOT-COMPUTE plus a request for a laptop file. If
the bot invents a spend number, the charter failed. If it retries, stop.
There is no Grok Bot-specific spend cap, so a retry is how weekly
allowance becomes on-demand
([spend cap and token burn](/blog/grok-bot-spend-cap-and-token-burn)).

Where this breaks down: a session that does not show as a login wall, a
passkey stored on the computer, iPhone-only teardown, or deleting Ledger
Copy and calling that cleanup. Deletion removes the profile and its
routines. It does not sign the bank out. It does not change egress. There
is no audit view to query later. You are the log.

## Answer the claim that allowlisting the range will unblock every bank

The strongest objection is reasonable if you only read the Network
heading. Computers use static egress. xAI will tell an account team the
current ranges. Therefore Dana should paste those ranges into the bank's
form and the 07:14 challenge will stop.

It will not, for destinations she does not own. Banks do not take a
customer's cloud-agent CIDR because a blog said the IPs are static. Many
SaaS tools have no customer allowlist, or reserve it for contracts whose
current terms you must read on their site. Publishing the ranges helps
people who want to fingerprint the product. It does not help Dana.

The objection wins in one case: she owns the destination. Internal admin,
company WAF, a tool her staff built. Then she asks the account team,
allowlists in private, and still treats a browser session on the shared
computer as roster-wide. Allowlisting proves the traffic is hers. It does
not isolate bots from each other.

The other form of the objection is "we will put a VPN on the VM." Grok
Bot does not ship that product. A third-party hop is not a documented
control. The documented beta that routes computer traffic through the
member computer is a different sentence. Copy it from the live docs. Do
not rebrand it as a VPN. If it is missing from the live page the week
you ship, it is missing.

"I will remember to sign out" is the third form. She will not. Standup
starts at 07:35. Put sign-out in the charter as a blocking last step.
Put the laptop-file fallback in the same charter. The address will still
be a grok bot datacenter ip tomorrow. Plan for that, or keep finance off
the computer.

**Keep reading:** [Grok Bot Hit a 2FA Prompt: What You Should Type, and What You Should Not](/blog/grok-bot-2fa-prompt), [Grok Bot Browser Broke Overnight: Selectors, Logins, and Fallbacks](/blog/grok-bot-browser-broke), [Where Grok Bot MCP Sign-In Tokens Actually Live](/blog/grok-bot-hosted-mcp-tokens).

## Frequently Asked Questions

### Why does a site challenge Grok Bot when the same login works on my laptop?

Because the cloud computer reaches the internet through static egress IP addresses, and some services flag datacenter addresses. That is documented on the teams and enterprises page, not a guess. Your laptop presents a residential or office identity the vendor already knows. The Agent Computer presents a stable datacenter identity the vendor's risk engine was built to step up. Take over the computer if you intend the login, complete 2FA on the desktop, then sign out. Do not reinstall Grok Bot to mint a home IP.

### Is a grok bot datacenter ip the same problem as grok bot login failed?

No. Grok Bot login failed is Cursor authentication: the handshake in the browser, the plan on the invoice, Legacy Privacy Mode, or the wrong Google user instead of organization SSO. A grok bot datacenter ip shows up later, on a website inside the Agent Computer, as a device, location, or automation check. Fix Cursor first if the app never populated. If the app is running and a bank or SaaS tool is challenging the session, you are on the network path. Mixing the two wastes an hour on the installer.

### Should I leave the bank signed in so tomorrow's export skips the datacenter challenge?

No. Completing 2FA writes a session onto the one persistent cloud computer assigned to your user, not to the finance bot. Inbox Triage, Lead Scout, and every other bot on the account can open that dashboard. Screens are not a security boundary. Deleting the finance bot does not sign the bank out, and there is no audit view of who used the cookie. Sign out after the file is copied. If a daily login is too expensive, export from your laptop and place the CSV on the computer, or use a hosted MCP path whose tokens stay with Cursor's backend.

### Can I publish Grok Bot IP ranges or buy a VPN so the computer looks like my house?

No. Ask the account team for current ranges only when you own the destination, and keep that list in a private ticket. Do not print CIDRs in a blog, a ticket the vendor can forward, or a Slack channel. Grok Bot does not ship a consumer VPN. A third-party hop on the VM is not a documented control and still shares cookies across bots. The documented options are allowlisting on services you run, and, if still present on the live teams page, the beta setting that routes computer traffic through your own computer. Confirm that wording the day you rely on it.
`,
};
