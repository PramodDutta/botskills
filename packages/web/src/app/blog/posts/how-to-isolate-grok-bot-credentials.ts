import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Isolate Grok Bot Credentials When Bots Share a Computer',
  description:
    'Isolate grok bot credentials by using a second eligible account, hosted MCP tokens, or never pasting keys onto the shared computer. Named bots are screens, not vaults.',
  date: '2026-08-27',
  category: 'Safety',
  content: `
# How to Isolate Grok Bot Credentials When Bots Share a Computer

Paste a staging AWS profile onto the Grok Bot computer that already holds
Gmail cookies, and you have not isolated anything. [Mail Cleanup
Assistant](/bots/mail-cleanup-assistant) and [Inbox Triage](/bots/inbox-triage)
did not grow a vault. They grew a second window on the same Linux home
directory.

This page is the how-to menu. It is not the warning. The warning lives on
[Do Not Use Separate Grok Bots as a Security Boundary](/blog/grok-bot-not-a-sandbox).
It is not the connection diet. That lives on
[Least Privilege for Bots](/blog/least-privilege-bots). Here you pick a move
that actually isolates grok bot credentials: a second eligible account (a
second computer), hosted MCP so the token stays with Cursor's backend, CSV
and mailbox exports instead of admin consoles, or a sign-out after a 2FA job
you intended. Named bots are screens. Screens are not vaults.

Staging IAM keys must not live on the mail-bot computer. If they already
do, this page is the afternoon that moves them.

## Treat the eligible account as the computer, and the named bot as a screen

Isolation starts with the unit the product actually assigns. All bots on one
Grok Bot account share one persistent cloud computer. That computer is
assigned to your user account, not to a bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). Each bot
gets a screen. The same page says those screens are separate work surfaces,
not separate security boundaries.

Read that as an operating instruction. A roster named Mail, Staging, and
Research is three desks in one room. Browser cookies, signed-in sessions,
files, and command-line credentials are common property of that room
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
The sentence you should keep in the charter is the one the docs already
wrote: do not use separate bots as a security boundary.

The computer is a managed Linux VM. The bot runs as a non-root user. That
does not wall Mail Cleanup off from \`~/.aws\`. There is no Linux desktop,
Android, or iPad app. iPhone can pause and resume only. None of that is a
second disk. The architecture tour is
[One Computer, Many Screens](/blog/grok-bot-shared-computer-security). This
page assumes you already believe the computer is shared.

## Pick from the four isolation moves in descending strength, then stop shopping for a fifth

People invent a fifth move because the first four cost money or time. The
fifth move is almost always a renamed bot. Rank in the table is strength,
not convenience.

| Isolation move | What it actually walls | What still leaks | Use it when |
|---|---|---|---|
| Second eligible account | A second computer: files, cookies, CLI, home directory | Whatever you copy between accounts anyway | Staging AWS cannot share a disk with Gmail |
| Hosted MCP sign-in | The token stays with Cursor's backend, not on disk | Account-wide tool calls, and any write verb you granted | The job is an API you can bound and inspect |
| CSV or mailbox export on a laptop | The admin identity never enters the shared browser | The numbers in the file, which every bot can read | You need a report, not a live console |
| Sign out after a 2FA job | The session ends when you end it | Keys you already wrote to disk, and any cookie you forgot | You completed one login you intend, then you leave |

There is no row for a bot named Staging AWS, for "the mail bot has no AWS
connector," or for [deleting a bot](/blog/delete-a-grok-bot-safely). Deletion
removes a profile, its chat, and its routines. Files and sessions can remain.
Delete-bot is not isolation. Mixing the four rows is fine. Substituting a
nickname for a row is how staging keys end up next to inbox cookies.

## Open a second eligible account when staging AWS cannot share a disk with inbox cookies

Two user accounts are two computers. That is the only documented
computer-level wall. If staging IAM keys must exist for a bot to call AWS,
those keys belong on an eligible account that does not hold the mailbox
session.

Eligible plans, per the [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq), are
SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, and Cursor Teams
on Standard and Premium, plus a one-time trial for individuals
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
Cursor Hobby, Cursor Pro at $20, and SuperGrok at $30 do not include Grok
Bot. Confirm the live SKU before you treat any dollar figure as an order.

A second computer is a second eligible identity, not a second bot card.
Adding Staging AWS next to Mail Cleanup on the same login gives you two
screens and one \`~/.aws\`. A distinct user on Cursor Pro+ or Teams Standard
gets another computer. A colleague's Teams seat is their computer, not a
partition inside yours.

Do not copy files, rsync \`~/.aws\`, or forward cookies. A zip in Slack is
you tearing the wall down by hand. The mail account keeps mailbox work.
The staging account keeps AWS work. [Lead Scout](/bots/lead-scout) can live
on either, if every credential on that computer is one you accept as
roster-wide. Public pages on the mail computer are fine. Staging keys are
not.

## Hold API tokens in hosted MCP so they never land in a profile file

Hosted MCP sign-in tokens stay with Cursor's backend and are never stored on
the computer
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
That is the documented exception to "everything lives on the shared disk."
Use it when the job is an API, not a console.

This is not a second computer. Other bots on the same account can still call
the same hosted tools. The win is narrow and real: the token is not sitting
in \`~/.aws\`, in a \`.env\`, or in a cookie that
[Inbox Triage](/bots/inbox-triage) can open by wandering into a tab.

Token location does not delete verbs. A hosted server that can change IAM or
stop instances is still that power, held off disk. Read the tool list. Safer
storage plus a wide tool list is a wide tool list with a nicer vault. Confirm
the current path on the product docs and the vendor page. Server names move.
The split does not. The fork, including the browser fallback that puts the
admin identity back in the jar, is
[Grok Bot and MCP](/blog/grok-bot-mcp-servers).

If there is no hosted MCP you will grant for staging AWS, do not approximate
it by pasting keys into a file. Skip to a second account, or run \`aws\` on a
laptop that never syncs that profile onto the mail-bot computer.

## Fetch CSV and mailbox exports rather than leaving an admin console signed in

A lot of jobs that look like "the bot needs AWS" are actually "the bot needs
last week's numbers." Those jobs do not need a console cookie.

Export the billing CSV, the CloudWatch dump, or the mailbox report on a
laptop you control. Upload the file, or paste the rows. The bot works from
data. It does not inherit an admin identity. Every bot on the account can
still read that file, so do not drop a CSV that contains live access keys.
A usage table is data. A credentials.csv is a key you left on the desk.

This move is weaker than a second computer and weaker than hosted MCP. It is
stronger than signing into the AWS console "for a minute" on Agent Computer.
A minute is how console cookies get born. There is no audit view of Bot
actions yet. Use the live console only on a computer whose entire roster is
allowed to be that identity. On the mail account, that identity is Gmail,
not IAM. A 403 from a datacenter egress IP is a reason to keep the AWS
login off this machine, not a reason to complete a harder login here.

## Sign out of every 2FA session before another bot on that computer loads a page

Sometimes you will complete a 2FA prompt anyway. The job is blocked. The
code is on your phone. The fastest unstick is to type the digits.

Treat that as a live login into the cookie jar, not as a captcha the bot
needs you to solve in chat. For passwords, passkeys, two-factor codes,
CAPTCHAs, and payment confirmations, take control of Agent Computer, finish
only the blocked step, and return control
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Do not paste the code into ordinary chat.

If the login you just completed is Gmail on the mail-bot computer, you
intended that session. Leave it. If the login is staging AWS, you just put
IAM in the same jar as inbox work. Finish the single export. Sign the
console out. Revoke the session at the source if the vendor offers that.
Then let Mail Cleanup open a tab.

Signing out does not delete \`~/.aws\`. If you also ran \`aws configure\`, you
still have a file problem. The 2FA sign-out is for the cookie. The file
needs its own delete and a key rotation. Hardware keys are forwarded to the
desktop app so you can touch them. The session that follows is still shared
across the roster. What to type, and what never to type, is
[Grok Bot Hit a 2FA Prompt](/blog/grok-bot-2fa-prompt). Do not treat an
iPhone pause as a sign-out. Teardown needs desktop.

## Move staging AWS off the mail-bot computer in one afternoon, in this order

Here is the worked example. You already run inbox jobs on
one eligible account. Someone asks for a bot that lists staging buckets and
pulls a CloudWatch slice. The keys sit in your password manager. The
temptation is to paste them into \`~/.aws\` "just on the Staging screen."

Do not paste. Walk this order.

| Step | Do this | Do not do this |
|---|---|---|
| 1. Inventory | Write down every mailbox and SaaS session already on the computer | Assume Mail Cleanup cannot see files it was not granted |
| 2. Classify | Mark staging AWS as a secret that cannot share this disk | Mark it as "temporary" so it can sit next to Gmail |
| 3. Choose | Second eligible account, hosted MCP with a tight tool list, laptop \`aws\`, or a CSV the human already exported | A new bot named Staging AWS on the same login |
| 4. Relocate | Open the second account or run the CLI on the laptop | Copy \`~/.aws\` between accounts to "keep them in sync" |
| 5. Scrub if dirty | Rotate the IAM keys, delete local AWS config, sign the console out | Delete the Staging bot and call the disk clean |
| 6. Prove | Create a throwaway bot on the mail account that must fail to read AWS | Trust a charter clause with no failing check |

If the keys never landed, steps 1 through 4 are the whole afternoon. If they
already landed, step 5 is the real work. Rotate first. A deleted file with
live keys still in IAM is a gift to whoever copies the old profile out of a
backup folder. Then delete \`~/.aws\`, any \`.env\` that named the same keys, and
any screenshot of the console. Then sign out.

The mail-bot computer keeps [Mail Cleanup Assistant](/bots/mail-cleanup-assistant)
and [Inbox Triage](/bots/inbox-triage). The staging computer, if you bought
one, keeps AWS and nothing that looks like a mailbox. [Standup
Scribe](/bots/standup-scribe) can sit on the mail computer if its only
secrets are the ones you already accepted as roster-wide. It cannot sit
there as a cover story for IAM.

Ugly and isolated beats elegant and shared. A human running \`aws s3 ls\` on a
laptop and pasting the listing into chat is valid isolation. A beautiful
Staging bot on the mail account is not.

## Refuse to call bot deletion an isolation step

Deleting a bot feels like pulling a plug. It is not. Deleting a bot deletes
that bot, its conversation, and its routines. Max 50 routines per bot, 20
most recent run records per routine, all gone with the name. Shared-computer
files and browser sessions are not isolated by bot and may remain
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).

If you created Staging AWS, pasted keys, panicked, and deleted Staging AWS,
the keys are still on the computer Mail Cleanup uses. Hide the bot if you
still need the chat that named the dirty folders. When you do delete, revoke
at the source, remove the files, sign the console out, then delete. The
teardown order is
[how to delete a Grok Bot safely](/blog/delete-a-grok-bot-safely). That page
is offboarding. This page is isolation.

Admin Kill, documented as coming rather than shipped, would delete the VM
while durable storage is kept. Do not plan this week's keys around it.
Privacy Mode (Legacy) blocks Grok Bot entirely, which is a policy decision,
not a per-bot vault. iPhone cannot delete. A pause on a phone is not a wipe.

## Write the mail-bot computer charter so ~/.aws is a fire, not a convenience

Charters do not create filesystem ACLs. Write one anyway, because the
afternoon you are tired is the afternoon you will paste a profile "just to
unblock." The charter is the sentence you want in front of you before Agent
Computer gets a key.

This charter is for the computer, not for one roster name. Every bot on the
mail account inherits the same disk.

\`\`\`text
# Computer charter: mail-bot Grok Bot account
# Isolation unit: this eligible account's computer. Screens are not vaults.

You share this Linux home directory with every bot on the account,
including Inbox Triage, Mail Cleanup Assistant, Standup Scribe, and
any throwaway research screen created later.

boundary: never write AWS credentials, AWS console sessions, or
staging environment files onto this computer. Never complete an AWS
2FA prompt on Agent Computer. Never store IAM keys in chat, in
/workspace, or in ~/.aws.

Allowed: mailbox sessions required for inbox triage and cleanup.
CSV and exported reports a human already downloaded, with no live
keys in the file. Hosted MCP tools that cannot mutate IAM, billing,
or compute.

Forbidden: aws configure, pasting IAM keys, signing into the AWS
console, copying ~/.aws from a laptop, treating bot deletion as a
wipe of credentials.

If a task needs staging AWS, stop. That work belongs on a second
eligible account, on hosted MCP with a read-only tool list you have
inspected, or on a human laptop that never syncs files here.
\`\`\`

Paste that into the mail bots, not only into a bot you named Security. The
boundary belongs on Inbox Triage too, because Inbox Triage is the process
that can \`cat\` the file. A boundary that lives only on the Staging card is a
boundary the mail bot never reads.

Least privilege still applies to mailbox connections. Connect the minimum
for mail. That is a different page. This charter exists so the minimum for
mail does not quietly become the maximum for AWS.

## Answer the budget argument that a renamed Staging bot is cheaper than a second seat

The strongest objection to this menu is price. Cursor Pro+ at $60 a month is
the cheapest paid path that includes Grok Bot, checked against Cursor
pricing as of 25 August 2026. Teams Standard at $40 per user per month also
includes it. SuperGrok Plus at $100 includes Grok Bot access. A renamed bot
is free. Free looks like isolation if you have not watched a throwaway
screen list buckets.

It is not cheaper. It is unpaid leakage. Staging IAM next to Gmail is one
confused prompt, one hostile forward, or one "just look at the file"
research task away from a credential incident. The renamed bot does not
wall \`~/.aws\`. It does not wall the console cookie. It does not survive a
sibling that was never granted AWS in the connections panel.

A second eligible account is a real invoice. It is also a real computer.
If the staging job is rare, skip the seat and run \`aws\` on a laptop, or
export the CSV. Isolation can be "the secret never lands," which costs
zero dollars and some friction. Isolation cannot be "I renamed a screen."

Hosted MCP is the middle invoice. You may already pay the eligible plan.
The extra cost is using the API path instead of the console. That is cheaper
than a second seat and stronger than a nickname, if you read the tool list.

If two credential sets must not meet, this runtime cannot meet them on one
account. Pay for the second computer, or keep the second secret off the
first computer. Those are the honest budget lines.

## Fail a throwaway sibling if it can still list staging buckets

After you relocate staging AWS, prove the mail-bot computer is clean with a
bot that should know nothing.

Create a throwaway bot on the mail account. Give it no AWS story. Ask it to
read \`~/.aws\`, to run \`aws sts get-caller-identity\`, or to open the AWS
console. The only passing result is failure.

| What the throwaway bot can still do | What that means | Fix |
|---|---|---|
| Reads ~/.aws or reports an AWS caller identity | Keys still on disk | Rotate IAM, delete local profiles, rerun until it fails |
| Loads the AWS console | Cookie still in the jar | Sign out, revoke the session at the source |
| Calls a hosted MCP write | Tool list is too wide | Drop the write tools. Token location is not a verb filter |
| No profile, no session, no identity | Isolation held today | Keep it that way. The check goes stale if you paste keys later |

There is no audit view of Bot actions yet. The throwaway bot is the
dashboard you can run this afternoon, on desktop. iPhone will not let you
build and delete that probe. Isolation is a property of the disk today, not
of a bot you named last month.

## Confirm the second seat on the live pricing page before you treat sixty dollars as a wall

Prices move. Eligibility widened on 21 August 2026
([xAI announcement](https://x.ai/news/grok-bot-more-plans)). Roundups from
the first week of the beta still quote floors that are no longer the
cheapest door. Confirm before you budget a second computer.

| Path people try | Isolation you actually get | What to confirm live |
|---|---|---|
| Rename a bot Staging AWS | A screen on the mail computer | Nothing. This is not a seat. |
| Second Cursor Pro+ user | A second computer | [cursor.com/pricing](https://cursor.com/pricing), $60/mo as of 25 August 2026 |
| Extra Teams Standard identity | A second computer for that user | $40 per user per month, both Standard and Premium include Grok Bot |
| SuperGrok Plus second identity | A second computer | [x.ai/pricing](https://x.ai/pricing), $100/mo includes Grok Bot access |
| One-time trial as a standing vault | A meter, once | Trial is not a second computer you keep |
| Cursor Pro at $20, or SuperGrok at $30 | No Grok Bot | Those SKUs do not include it |

Cursor Ultra at $200 includes Grok Bot. It is not the cheapest second
computer. SuperGrok Heavy is eligible. Do not invent a dollar figure for
Heavy. Shopping for the first door is
[the cheapest way into Grok Bot](/blog/cheapest-way-into-grok-bot). Sign-in
is [why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained).
There is no Grok Bot-specific spend cap. Do not treat a cap as an isolation
control. It is not shipped as one.

## Send sandbox warning readers and least-privilege readers to those pages, then stay on the menu

Three adjacent pages steal this one if you let them.

[Do Not Use Separate Grok Bots as a Security Boundary](/blog/grok-bot-not-a-sandbox)
is the warning. Production keys, a research bot, \`aws s3 ls\` you did not
intend. If a reader still thinks named bots are vaults, send them there.
Do not retell that warning here as if it were a procedure.

[Least Privilege for Bots](/blog/least-privilege-bots)
is connect the minimum. Read before write. Money on its own account.
Revoke on a cadence. If the reader is staring at a connections panel full
of tools, send them there. Connecting less shrinks blast radius. It does
not partition one computer into two.

[Grok Bot and MCP](/blog/grok-bot-mcp-servers) and
[Grok Bot Hit a 2FA Prompt](/blog/grok-bot-2fa-prompt)
are two rows of this menu, written as full incidents. Stay on this page when
the question is which move isolates staging AWS from the mail-bot computer.
[The Grok Bot safety checklist](/blog/grok-bot-safety-checklist) will not
move IAM keys for you. Pick the wall, then perform it.

## Hand the job back to a person when none of the four moves can hold the secret

The menu fails in named cases. Name them so you stop forcing a bot to hold
what the runtime cannot wall.

If you must click around a staging AWS console with the same identity that
can change IAM, and you will not buy a second eligible account, a person
does that job on a laptop. The bot drafts the checklist. The person
holds the session.

If hosted MCP for that API exposes writes you will not grant, do not
"just connect it read-mostly." Absent tool beats a token with a destroy
verb.

If the only export the vendor offers still contains live keys, do not
upload that file to the mail-bot computer. Redact on the laptop, or skip
the bot.

If someone will copy \`~/.aws\` between accounts "so both computers can
help," you do not have two computers. You have one secret in two homes.
Stop copying, or accept that isolation is gone.

If the worst secret cannot sit next to a curious prompt, change the bench.
Do not rename the screen. Do not delete the bot and call it a wipe. Do not
wait for an audit view that does not exist yet. Do not wait for admin Kill.
The four moves are the product you have. Staging AWS keys on the mail-bot
computer are the product refusing those moves.

**Keep reading:** [Do Not Use Separate Grok Bots as a Security Boundary](/blog/grok-bot-not-a-sandbox), [Grok Bot and MCP: Hosted Tokens, Browser Fallbacks, and Blast Radius](/blog/grok-bot-mcp-servers), [Grok Bot Hit a 2FA Prompt: What You Should Type, and What You Should Not](/blog/grok-bot-2fa-prompt).

## Frequently Asked Questions

### Does a bot named Staging AWS isolate grok bot credentials from Mail Cleanup?

No. A name is a screen on one persistent cloud computer assigned to your
user account, not to that bot. Cookies, files, and command-line credentials
are shared. If you write staging keys into ~/.aws so the Staging screen can
call AWS, Mail Cleanup can read the same files even when its connections
panel never listed AWS. The docs tell you not to use separate bots as a
security boundary. Isolate grok bot credentials with a second eligible
account, with hosted MCP tokens that never hit disk, or by refusing to put
the keys on the mail-bot computer at all.

### If I delete Mail Cleanup, are the staging AWS keys gone from the computer?

No. Deleting a bot removes that bot, its conversation, and its routines.
Shared-computer files and browser sessions are not isolated by bot and may
remain. Staging keys in ~/.aws stay until you delete the files and rotate
the IAM credentials. A console cookie stays until you sign out and revoke
at the source. Hide the bot if you still need the chat that named the dirty
paths. When you do delete, revoke first, remove files, then delete. Deleting
the mail bot instead of the staging bot does not isolate grok bot
credentials either. The keys live on the computer, not inside a roster name.

### Do hosted MCP tokens isolate grok bot credentials per bot or per account?

Per account, with a storage win. Hosted MCP sign-in tokens stay with
Cursor's backend and are never stored on the computer, so Mail Cleanup
cannot cat them from disk or steal them from a cookie. Other bots on the
same account can still call the same hosted tools, because the roster shares
the account. Read the tool list. A token that never hits disk is not a
per-bot vault, and it does not remove write verbs you granted. Confirm the
current wording on the teams and enterprises docs before you brief a
reviewer. The product ships weekly.

### Is a second Cursor Pro+ account the only way to isolate grok bot credentials from inbox work?

No. A second eligible account is the only second computer, and Cursor Pro+
at $60 a month is the cheapest paid individual door as of 25 August 2026,
which you should confirm live. Teams Standard at $40 per user per month is
another included identity. You can also keep staging AWS off the mail-bot
computer entirely: hosted MCP with a tight tool list, a CSV a human already
exported, or aws on a laptop that never syncs ~/.aws here. The free option
that fails is renaming a bot Staging AWS and pasting the keys beside Gmail.
`,
};
