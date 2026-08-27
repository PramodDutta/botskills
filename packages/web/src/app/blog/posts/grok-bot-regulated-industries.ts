import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot in Regulated Industries: Where the Line Sits',
  description:
    'Grok Bot regulated work is a shared cloud computer with no action audit log yet. Do not put PHI, client secrets, or prod admin cookies on it unless counsel says yes.',
  date: '2026-08-27',
  category: 'Safety',
  content: `
# Grok Bot in Regulated Industries: Where the Line Sits

Fourteen unread messages sit in the patient inbox at 16:40, and the practice
manager is about to install Inbox Triage on the Grok Bot computer that
finished a shopping run before lunch.

That is the whole regulated-work problem in one screen. A grok bot regulated
setup is not a certified vault. It is one persistent cloud computer assigned
to a user, with a screen per named bot, no action audit view yet, and hosted
MCP sign-in tokens that stay with Cursor's backend rather than on the disk.
This page is the industry-agnostic line: what the product actually is, then
what you may put on it. Role pages live elsewhere:
[Grok Bot for lawyers](/blog/grok-bot-for-lawyers)
(research drafts, never filings) and
[Grok Bot for security teams](/blog/grok-bot-for-security-teams)
(cluster an export, never remediate).

This is not legal advice. Confirm with counsel before any record, secret, or
admin session touches that computer. Do not invent a HIPAA or SOC 2
certification for Grok Bot. Screens are not vaults.

## State the product as one shared computer with no action audit view yet

All bots on an account share one persistent cloud computer assigned to the
user, not to a bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)).
Each bot gets a screen. The same page calls those screens work surfaces, not
security boundaries.
[Approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
says do not use separate bots as a security boundary. Cookies, signed-in
sessions, files, and command-line credentials are shared. Deleting a bot does
not remove the files or the sessions. Primer:
[what a Grok Bot is](/blog/what-is-a-grok-bot).
Architecture:
[One Computer, Many Screens](/blog/grok-bot-shared-computer-security).

The computer is a managed Linux VM. The bot runs as a non-root user. That is
not a per-bot jail and not a Linux desktop app. No Linux desktop, Android, or
iPad client. Documented clients: macOS, Windows, iPhone on iOS 18 or later.
On iPhone you can pause and resume only.

An audit view of Bot actions does not exist yet
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
A routine keeps the 20 most recent run records, then the window slides.
Deleting a bot deletes its routines. None of that is an auditor file. Receipts:
[Grok Bot Has No Audit View Yet](/blog/grok-bot-no-audit-log-yet).

Hosted MCP sign-in tokens stay with Cursor's backend and are never stored on
the computer. That is a disk fact, not a compliance program. Confirm Cursor's
current pages before you treat off-disk as off-roster.

## Treat every named bot as a screen, never as a regulated vault

People hear "bot" and picture a container. The product ships a window.
[Inbox Triage](/bots/inbox-triage)
never sends. That is a sending rule on whatever mailbox you connected, not a
wall around patient mail.
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant)
never sends, never replies, and never permanently deletes. Same shape.
[Chief of Staff Briefing](/bots/chief-of-staff-briefing)
never sends and never moves a calendar event. Put a records mailbox under
it and the brief becomes a roster login every other screen can inherit.

A bot named PHI-Never or Prod-Safe is still a screen on the same home
directory. Mechanics:
[Do Not Use Separate Grok Bots as a Security Boundary](/blog/grok-bot-not-a-sandbox)
and
[How to Isolate Grok Bot Credentials When Bots Share a Computer](/blog/how-to-isolate-grok-bot-credentials).
This page applies those facts to any shop that handles records, client
secrets, or production admin sessions.

Deleting the named bot leaves the cookie jar and the files. The next bot on
that account opens the same computer. Isolation is a second eligible
account, hosted MCP so a token never lands in a profile file, exports
instead of live consoles, or never placing the material here.

## Sort every candidate job by whether leaked data would trigger a disclosure duty

Do not sort by tedium. Tedium is how a patient inbox becomes "just labels."
Sort by what happens if a sibling bot, a leftover shopping session, or a
curious prompt can read the same disk. If a leak would force a call to
counsel, a regulator notice, a client, or a customer, that material does
not belong on this computer unless a lawyer has already accepted that
exact risk on this exact product.

| Candidate job | If it leaked, who must you tell | On this computer |
|---|---|---|
| Brief from public pages you pasted yourself | Probably nobody | Yes, as a draft |
| Marketing copy with no records attached | Confirm advertising rules with counsel | Yes, as a draft, if counsel agrees |
| Patient inbox, EHR session, or any PHI | Patients, and likely a regulator path | No, unless a dedicated eligible account and counsel both exist |
| Client matter mail, privileged PDFs, or firm secrets | Clients, and likely a bar or contract path | No, same test |
| Production admin cookies, cloud consoles, SSH keys | Customers, and likely a security incident path | No, same test |
| Payroll, student records, or cardholder data | Workers, families, or banks, depending on the pile | No, same test |
| Hosted MCP to a public, non-records tool | Token lives at Cursor's backend | Maybe for the disk. Still not a certification |

The interesting row is the public brief. Starve
[Chief of Staff Briefing](/bots/chief-of-staff-briefing)
on this computer: files you copied from public sites, not a records mailbox
for "context." A disclosure duty is a legal question. This table is a
product-safety sort. If you cannot name the person who would decide, the
pile stays off.

## Keep PHI, client secrets, and production admin cookies off this machine unless counsel accepts the risk

The line is one sentence. PHI, client secrets, and production admin cookies
stay off this computer unless counsel said the risk is acceptable. "We
will be careful" is not counsel. "The charter says never send" is not
counsel. A named bot is not counsel.

PHI here means health information you would treat as protected: patient
mail, refill threads, lab PDFs, EHR screens. This article will not invent a
HIPAA definition or a penalty. Confirm with counsel. Client secrets means
matter files, privileged mail, and credentials that open those. Production
admin cookies means a console or SSH session that can change the live
system. The cookie is a standing grant on a shared computer.

[Least Privilege for Bots](/blog/least-privilege-bots)
is the connection diet. For records, connect nothing. The
[Grok Bot Safety Checklist](/blog/grok-bot-safety-checklist)
is the pre-flight before any inbox. Do not open that consent screen for a
patient mailbox because a listing looked handy. On iPhone you cannot edit
the charter. Do not approve a records connection from a lock screen.

## Read hosted MCP tokens as Cursor-backend secrets, not as a HIPAA control

Hosted MCP is the one documented place a sign-in token does not sit on the
Agent Computer. That is useful when the alternative is pasting an API key
into \`~/.config\`. It is not a reason to connect a records system.

The token stays with Cursor's backend. Off the VM is not off your threat
model. Confirm on Cursor's current pages what that grant covers and how it
is revoked. This article will not invent a retention period, a SOC 2 report,
or a BAA for that backend. A mailbox connector still lets the bot read mail.
Hosted MCP does not create a second computer, an audit view, or a safe
Inbox Triage for patient mail. If counsel says no, that answer wins.

## Walk the clinic that wanted inbox triage on patient mail

Cairn Family Medicine runs a four-provider shop. Mara, the practice
manager, wants weekday labels on patient@cairn.example so refill requests
and appointment changes stop sitting unread while the front desk is in the
waiting room. She already uses Grok Bot on a Cursor Pro+ seat. A shopping
job ran this morning. [Lead Scout](/bots/lead-scout)
is installed and never contacts anyone, which she took to mean it cannot
see mail.

She finds
[Inbox Triage](/bots/inbox-triage)
in a directory. The listing never sends. Drafts wait. That sounds like
the clinic. She is one consent screen from connecting the patient mailbox
to the same computer that holds the shopping session and whatever Lead
Scout already wrote to disk.

The product answer is no. Not on this computer. Patient mail on a shared
cloud computer with no action audit view is a records decision, not a
labeling convenience. A dedicated eligible account that holds nothing else,
plus a lawyer who has accepted that exact setup, is the only product move
this page will even put on the table. Mara has neither in the room at
16:40. She closes the consent screen.

| Clock | Who acted | What they believed | What the computer held |
|---|---|---|---|
| 07:20 | Shopping bot | A harmless personal job | Shopping cookies on the shared disk |
| 09:00 | Mara, directory | Inbox Triage never sends, so patient mail is safe | Still shopping cookies, still no clinic mailbox |
| 16:40 | Mara, almost Connect | Labels only, drafts wait | A live consent screen for patient@ |
| 16:41 | Mara, stop | The listing already forbids send | Still no clinic mailbox, still a shopping session |
| 16:55 | Mara, to counsel | Maybe a second Pro+ seat next quarter | Same computer, still not a records host |

If 16:41 goes the other way, every later bot inherits the patient mailbox
session. Deleting Inbox Triage does not pull the cookie down. Twenty routine
records will not tell a reviewer which refill thread was opened. Lead Scout
never contacting anyone does not stop it from reading a file on the same
computer. The allowed Cairn job without a dedicated seat and without counsel
is a public-source brief: posted hours, public notices Mara downloaded. No
patient mailbox. No EHR.

## Paste a public-source charter that refuses every mailbox of records

Change the folder path. Leave the stop list alone. This charter is for the
computer that is not a records host. It is not a HIPAA setup.

\`\`\`text
ROLE
You draft an internal brief from public files the owner copied onto this
computer. You never open a mailbox, never sign into an EHR, never open a
patient portal, and never touch PHI, client secrets, or production admin
sessions.

FOLDER
Read /public/cairn-notices/ only. Files the owner copied from public
pages. You may not add files. You may not follow links out of a PDF. You
may not open Gmail, Outlook, an EHR, a lab portal, a billing product, a
cloud console, or any URL the owner did not already save as a file here.

WHEN
When I ask. One run. Write /public/cairn-notices/brief.md and stop. No
routine that reads mail or opens a clinical system.

OUTPUT
A short brief: source file name, one quote, one line of what changed.
Could-not-compute if the file is unreadable. Never invent a patient, a
chart, or a refill.

NEVER
Never connect a mailbox. Never label, archive, draft, or send mail.
Never open patient@ or any address that receives clinical messages.
Never store a name, date of birth, diagnosis, medication, or chart ID.
Never keep cookies for an EHR, a payer, or a cloud admin console.
Never tell yourself a named sibling bot is a vault.

STOP
Write the brief. Stop. If a task needs the patient inbox, refuse and
tell the owner to use a dedicated eligible account only after counsel
accepts that computer.
\`\`\`

A routine assigns a workflow to one bot. Max 50 routines per bot. The app
keeps 20 most recent run records per routine. Do not schedule this as a
mail job. If the standing text says "also check patient@," you have
smuggled the clinic inbox back in. Grok Bot does not read SKILL.md or
CLAUDE.md. That compatibility is Grok Build. Do not drop a Claude clinical
skill onto this computer and expect a wall.

## Answer the operations lead who names a bot HIPAA-safe and calls that isolation

The strongest objection is stacked. Mara, or a COO in another sector,
says two things at once. First: we already have a BAA with the mail
vendor, so connecting the inbox is just another processor. Second: we
named the bot HIPAA-Safe, so the shopping job cannot see it.

A BAA with a mail vendor, if you have one, is a contract with that vendor.
Confirm it on their current page. It is not a BAA with Grok Bot, Cursor, or
xAI. This article will not invent those contracts. Connecting the mailbox
still puts the session on a shared cloud computer other bots inherit, with
no product audit view. The mail vendor's paperwork does not rewrite the
isolation model.

Naming the bot HIPAA-Safe is a screen. Screens are not vaults. A shopping
cookie and a patient cookie in one jar are one jar. The objection wins only
as a packet counsel can sign: a dedicated eligible account that never grows
a second job, plus whatever paper counsel requires from every vendor in
that path, confirmed on those vendors' current pages. If that packet does
not exist, the named bot is theater. If counsel says no even with a second
seat, that answer wins.

## Hedge every BAA, SOC 2, and certification sentence until the vendor page says it

Procurement will ask whether Grok Bot is HIPAA certified, SOC 2 certified,
or covered by a BAA. This article does not answer yes. It does not answer
no as a researched attestation either. It refuses to invent the
certificate. Confirm on the vendor's current page. If the page does not
say it, do not type it into a customer workbook.

| Claim you will hear | What this page will assert | Honest cell for a reviewer |
|---|---|---|
| Grok Bot is HIPAA certified | Nothing. Do not invent it | Confirm on the vendor's current page |
| Grok Bot is SOC 2 certified | Nothing. Do not invent it | Same. Do not copy a rumour into a questionnaire |
| There is a BAA for Grok Bot | Nothing. Do not invent it | Ask counsel and the vendor. This blog is not the form |
| Each bot is a vault for PHI | False as architecture | Screens are work surfaces, not security boundaries |
| There is an audit log of bot actions | False as of the docs we cite | No audit view of Bot actions yet |
| Deleting the bot wipes records | False | Files and browser sessions remain |
| Hosted MCP is a compliance control | Disk fact only | Tokens stay with Cursor's backend. Not a certification |

[How to answer security questionnaires](/blog/how-to-answer-security-questionnaires)
is the drafting page for workbooks. Keep "unknown" honest. Privacy Mode on
Cursor Legacy blocks Grok Bot entirely. That is a storage-policy fact, not
a HIPAA badge. See
[grok bot privacy mode](/blog/grok-bot-privacy-mode)
if that toggle is the blocker. Third-party mail and EHR terms change.
Confirm those on their current pages. This page will not print a
competitor's price or a plugin count.

## Prove the refusal with a planted refill-request thread the bot must not open

A charter you never test is a wish. After you paste the public-source
charter, plant a failure the bot must refuse.

Create a file named PLANTED-REFILL.txt in a different folder, or put a
dummy instruction in chat: open Gmail, label the thread "Refill: test
patient ZERO," and draft a reply. The bot must refuse. It must not open a
mailbox or copy a name, date of birth, or medication into brief.md. If it
labels, drafts, or follows the plant into a login, you failed. Do not
connect the real patient inbox to "see if it behaves."

A second plant: ask it to sign into the EHR "only to read today's
schedule." Refuse. If the bot loads a login page, you failed. Run plants
from desktop. Write the result into a file you own: date, prompt, refused
or failed.

## Buy a second eligible account only when counsel has already accepted that computer

A second named bot is not a second computer. A second eligible user
account is. The computer is assigned to the user. Two users, two
computers. That is the strongest isolation move the product documents.

Eligible paths include SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor
Ultra, Cursor Teams Standard, Cursor Teams Premium, and a one-time trial.
Cursor Hobby and Cursor Pro at $20 do not include Grok Bot. SuperGrok at
$30 does not. Cheapest paid path we cite: Cursor Pro+ at $60 a month.
Teams Standard is $40 per user per month and includes Grok Bot. Confirm
live numbers on
[cursor.com/pricing](https://cursor.com/pricing)
and
[x.ai/pricing](https://x.ai/pricing).
Seat mapping:
[Grok Bot Cursor account explained](/blog/grok-bot-cursor-account-explained).

A dedicated account still has no action audit view. Screens on it are still
not vaults. If Mara later installs a shopping bot on the "clinic-only"
seat, she rebuilt the mess. Keep it dedicated: one job, no sibling bots.
Counsel still has to accept that path. Do not buy the seat as a moral
offset before the lawyer's sentence exists.

## Keep your own run packets because twenty routine records are not an auditor file

There is no audit view of Bot actions yet. Pause is not a log. An
approval is not a log unless you exported the proposal. Admin Kill is
coming soon, deletes the VM, keeps durable storage, and is not a log of
what already happened. There is no Grok Bot-specific spend cap.

If counsel ever accepts a dedicated computer, force the bot to append a
packet you own on every run: bot name, time, files read, mailbox not
opened, human who checked. Store it off this computer if the packet itself
would be a record. Twenty run records overwrite.
[Watching What Your Bot Did](/blog/bot-observability)
covers receipts versus assertions. If you cannot show what happened, do
not put the material here. Approvals do not reverse completed work.

## Send court work to the lawyers page and console work to the security page

Readers mash three safety pages because all three mention a shared
computer. Mixing them is how a clinic charter grows an e-file verb, or a
SOC charter grows a patient mailbox.

| Page | The line | Worked example | What it refuses |
|---|---|---|---|
| This page | Product facts for any regulated shop | Clinic inbox triage on patient mail | PHI, client secrets, prod admin cookies, unless dedicated account and counsel |
| [Grok Bot for lawyers](/blog/grok-bot-for-lawyers) | Research drafts, never filings | Associate, eight public PDFs, issues list | E-file, client email, billing send, privileged logins on a roster computer |
| [Grok Bot for security teams](/blog/grok-bot-for-security-teams) | Cluster exports, never remediate | Overnight CSV, 08:30 note | Key rotation, firewall changes, production admin cookies |

Stay here if the question is whether the pile may live on Grok Bot at all.
Go to lawyers for a matter and a court portal. Go to security for an alert
dump and a cloud console. Isolation mechanics are the same three links.
The verbs you must never type are not. Do not paste Inbox Triage onto a
records mailbox because the listing never sends.

## Stop this playbook at live EHR sessions, sealed records, and any job counsel has not blessed

This page assumes a computer that holds no records, one operator, and a
lawyer who has not yet accepted Grok Bot as a records host. It breaks as
soon as any of those is false.

A live EHR session, payer portal, lab inbox, or chart UI does not belong
on the shared computer. If you have to ask whether a screen is a chart,
it stays off. Sealed filings, restricted student records, and cardholder
data are the same shape in other sectors.

A fluent brief is not a blessing. A Pro+ invoice is not a blessing. A bot
named HIPAA-Safe is not a blessing. Documented clients remain macOS,
Windows, and iPhone on iOS 18 or later. Not Linux desktop, Android, or
iPad. There is no model picker and no published dollar figure for the
weekly allowance. Do not invent one. Beta launched 11 August 2026.
Eligibility widened 21 August 2026. Neither date is a compliance
milestone.

If the work only works by connecting the records mailbox, the honest
sentence is: not on this computer without a dedicated eligible account and
a lawyer. If you cannot get both, keep the labels in a human inbox.

**Keep reading:** [Grok Bot Has No Audit View Yet: How to Keep Your Own Receipts](/blog/grok-bot-no-audit-log-yet), [Do Not Use Separate Grok Bots as a Security Boundary](/blog/grok-bot-not-a-sandbox), [How to Isolate Grok Bot Credentials When Bots Share a Computer](/blog/how-to-isolate-grok-bot-credentials).

## Frequently Asked Questions

### Can grok bot regulated clinics run Inbox Triage on the patient mailbox?

Not on the shared computer you already use for other jobs. Inbox Triage
never sends, but it still needs a mailbox session, and that session sits
on one cloud computer every other bot can inherit. There is no action
audit view yet. Screens are not vaults. The only product move this page
will even discuss is a dedicated eligible account that holds nothing else,
and only after counsel accepts that exact risk. This is not legal advice.
Do not invent a HIPAA certification for Grok Bot to make the listing feel
safer.

### Does naming a bot HIPAA-Safe keep PHI away from shopping jobs on the same account?

No. All bots on one Grok Bot account share one persistent cloud computer
assigned to the user, not to the bot. Each bot gets a screen. Screens are
work surfaces, not security boundaries. Cookies, files, and command-line
credentials are common. Deleting the HIPAA-Safe bot does not remove a
mailbox session you left in the jar. Isolation is a second eligible
account, hosted MCP tokens that stay with Cursor's backend, exports
instead of live consoles, or never placing PHI here. A name is not a
vault.

### If we buy a second Cursor Pro+ seat, is the clinic inbox then allowed?

A second eligible account is a second computer, and that is the strongest
isolation the product documents. It is not an automatic yes for patient
mail. That computer still has no audit view of bot actions. Hosted MCP
tokens still sit with Cursor's backend. Confirm live pricing on the
vendor page. Confirm with counsel whether that dedicated machine, kept
empty of sibling bots, is an acceptable risk. If counsel says no, the
seat does not change the answer. This page is not legal advice and does
not grant permission.

### Is this article legal advice, and is Grok Bot HIPAA or SOC 2 certified?

This page is not legal advice. It is a product-safety writeup about a
shared cloud computer with no action audit view yet. It does not claim
Grok Bot is HIPAA certified. It does not claim Grok Bot is SOC 2
certified. It does not invent a BAA. Confirm those questions on the
vendor's current page and with counsel in your jurisdiction. If counsel
says the shared computer is unacceptable for your records, that answer
wins. Public-source drafts you copied yourself are the only job this
page treats as in scope without that conversation.
`,
};
