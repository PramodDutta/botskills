import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Do Not Use Separate Grok Bots as a Security Boundary',
  description:
    'Grok Bot isolation is a screen, not a vault. Docs say do not use separate bots as a security boundary. Cookies, files, and CLI creds are shared on one computer.',
  date: '2026-08-27',
  category: 'Safety',
  content: `
# Do Not Use Separate Grok Bots as a Security Boundary

You created Bot A for production deploys and Bot B for paper research, then
copied an AWS profile into ~/.aws on the Agent Computer and told yourself the
research bot could not reach it.

That is a sandbox story. It is not how Grok Bot is built. Grok bot isolation,
as the product documents it, is a screen on one persistent cloud computer.
Screens are work surfaces. They are not vaults.

The architecture page is
[One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security).
The agency page, retainers and Shopify cookies, is
[Grok Bot for agencies](/blog/grok-bot-for-agencies-isolation).
This page is the engineer in the middle. Two named bots. One home directory.
Production keys sitting where a curious prompt can find them.

The teaching line is an instruction on
[approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy):
"Do not use separate Bots as a security boundary."
Bot A and Bot B are two tabs. The filesystem, the cookie jar, and the CLI
config are the bench they both stand on.

## Quote the product line as teaching, not as a slogan

People quote "Do not use separate Bots as a security boundary" the way they
quote a warning label they have already decided does not apply to them. The
line is teaching. It tells you which mental model to throw away before you put
a secret on the machine.

The computer is assigned to your user account, not to an individual bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)).
The [FAQ](https://docs.x.ai/grok-bot/faq)
says every bot on the account can access that computer. Cookies, signed-in
sessions, files, and command-line credentials are shared. Each bot gets a
screen. That page calls screens work surfaces rather than security boundaries.

Teaching changes the next action. After you take the line seriously, you stop
asking which bot this key is for and start asking which computer this key is
on. The first question has no product support. Naming the bots prod and
research does not create a second computer.

## Treat Bot A and Bot B as two windows on one Linux home directory

The Agent Computer is a managed Linux VM. The bot process runs as a non-root
user. Non-root is not per-bot isolation, and it is not a Linux desktop app.
There is no Linux desktop client. There is one VM per eligible user, and every
bot you create on that user opens a screen onto the same disk.

Bot A and Bot B are not two Unix users, two containers, or two IAM roles.
They are two windows. When Bot A writes ~/.aws/credentials, it writes a file
the research window can open. When Bot A runs \`aws configure\`, it leaves a
default profile the next screen inherits. No connector toggle in the Grok Bot
UI has to flip for that to be true.

A research bot that looks empty in the sidebar is not empty on disk.
[Lead Scout](/bots/lead-scout)
never contacts anyone. That boundary is a sending rule, not a chroot.
[Inbox Triage](/bots/inbox-triage)
never sends mail. Same shape: a per-bot refusal on a machine that still holds
the CLI config you installed for the other job. Two tmux sessions on one
laptop, not two laptops.

## Walk the research bot through ~/.aws after production wrote the keys

Tuesday, 11:10. You open Bot A, take the Agent Computer, and paste an access
key into \`aws configure\` because a deploy job needs to list a bucket. The CLI
writes a default profile under ~/.aws. Bot A runs \`aws s3 ls\`. The buckets
come back. You switch screens.

Tuesday, 11:18. You tell yourself the keys are on the prod bot. You put a
file on the account computer. The filename does not include the bot id. The
AWS CLI does not ask which Grok Bot you are.

Wednesday, 09:40. You open Bot B for a research pass, maybe a public-docs
scrape or a question about whether a marketing bucket is world-readable.
Bot B has no AWS row in the connections panel. It does not need one. It can
run \`aws s3 ls\` because the default profile is already there. If the CLI is
missing, it can install it onto the same machine and succeed on the next try.

You reused a home directory the way the product is built. A screen named
research is a window onto the same home directory.

| Clock | Who acted | What they believed | What the computer held |
|---|---|---|---|
| Tuesday 11:10 | Prod bot, Bot A | Keys belong to this bot | ~/.aws/credentials on the account VM |
| Tuesday 11:18 | You, after the list | Research cannot see this | The same default profile, still live |
| Wednesday 09:40 | Research bot, Bot B | Public web, maybe a docs scrape | \`aws s3 ls\` using production identity |

A bot you create next week with a blank connection list still sits on this
computer. There is no audit view of bot actions yet
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
Prove the identity with a throwaway screen, or assume Bot B can use it.

## Score named-bot isolation against the three things it never walls

Named bots keep charters readable, keep routines on a 50-per-bot cap, and
keep review tabs from blending. None of that is grok bot isolation of
credentials. Score the shared surfaces against the sandbox you thought you
bought.

| Surface | Scoped to a bot? | What Bot B can do after Bot A set it up | What actually walls it |
|---|---|---|---|
| Browser cookies and signed-in sessions | No | Open the AWS console already authenticated | Never complete that login on this computer, or use a second eligible account |
| Files on disk | No | Read ~/.aws, exports, screenshots, notes | Do not write the secret here, then delete leftovers yourself |
| Command-line credentials | No | Run \`aws s3 ls\`, \`aws sts get-caller-identity\`, any other CLI that reads the same config | Same as files: the config is the grant |
| Hosted MCP sign-in tokens | Not stored on the computer | Cannot steal a token that is not on disk. Can still use account-level hosted tools if you connected them | Cursor's backend holds those tokens. Still not a per-bot vault |
| Screens | Yes, one per bot | A separate window, explicitly not a security boundary | Review hygiene only |

A separate screen feels like a separate machine. The docs spent a sentence
telling you it is not. If the argument is that a prod bot and a research bot
isolate the keys, the table says you have two review tabs. Right roster for
work. Wrong roster for a security boundary.

## Keep production CLI secrets off the shared disk, or accept they are roster secrets

Never put production CLI secrets on that computer. Do not run \`aws configure\`
on the Agent Computer with a key that can list, write, or delete production
objects. Do not copy a credentials file up from your laptop. Do not dump
\`AWS_ACCESS_KEY_ID\` into a notes file in /workspace. Do not leave a session
token in a shell history you will not grep.

If a deploy genuinely needs AWS from this VM, the secret is a roster secret
the moment it lands. Plan as if [Chief of Staff Briefing](/bots/chief-of-staff-briefing)
and a throwaway research screen both have the same \`aws\` identity, because
they do.

The other one-computer option is a key that cannot do the damage even if every
bot uses it: read-only, one bucket, short lived, revoked when the job ends.
That is IAM hygiene on a shared bastion, not grok bot isolation. If you cannot
mint a harmless key, run the prod command on a laptop that is not this VM, or
on a second eligible account that has never held research jobs.

## Price a second eligible account against an aws s3 ls you did not intend

The computer follows the user account. Two eligible accounts are two
computers. That is the isolation unit the product documents. Ownership and
sign-in are in
[why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained).

A second computer is a second bill. The cheapest paid path that includes Grok
Bot is Cursor Pro+ at $60 a month. Cursor Hobby and Cursor Pro at $20 do not
include it. SuperGrok at $30 does not. SuperGrok Plus at $100 does. SuperGrok
Heavy includes it. Teams Standard at $40 per user per month and Teams Premium
at $120 per user per month both include it. Confirm live numbers on
[cursor.com/pricing](https://cursor.com/pricing) and
[x.ai/pricing](https://x.ai/pricing)
before you budget. The product launched in beta on 11 August 2026.
Eligibility widened on 21 August 2026.

There is no Grok Bot-specific spend cap. After the weekly allowance, usage is
on-demand from model and token cost, with no published dollar figure. Bill
shape is in [Grok Bot cost](/blog/grok-bot-cost).

| Setup | Computers | Can the research screen list prod buckets? | What you actually bought |
|---|---|---|---|
| One eligible account, Bot A plus Bot B, keys on disk | 1 | Yes | Named tabs, shared ~/.aws |
| One eligible account, keys never written here | 1 | No, unless you paste them later | A habit, not a wall |
| Two eligible accounts, prod jobs vs research jobs | 2 | Not from the research computer | A second seat, a second VM |
| Two accounts, then you copy ~/.aws across by hand | 2, then 1 again | Yes, you rebuilt the leak | Extra cost, original blast radius |

Staff who copy a credentials file between accounts have undone the wall. The
product cannot stop a human with two windows. It can stop Bot B from
inheriting a file that does not exist on its machine. Price the second seat
against an \`aws s3 ls\` you did not intend, not against one sidebar.

## Stop treating a charter boundary as a credential wall

A charter can say research only, never call AWS, never open a terminal. That
is a real per-bot control. It is also the control people confuse with a
sandbox. The charter is an instruction to the model, not a filesystem ACL. A
well written research bot will often refuse \`aws s3 ls\`. It will also follow
a new instruction you type at 9:40, or a PDF aimed at the assistant. Prompt
injection is not required. You can just ask.

[Least privilege for bots](/blog/least-privilege-bots)
is about grants. Keep using it. Do not use it as a substitute for the keys not
being on this disk. Approvals are not an undo
([approval rules](/blog/grok-bot-approval-rules-reversibility)).
An approval that says ask me before running aws is a pause. If you click
through, or if the next bot can cat the file, the pause isolated nothing.

Treat the charter as the last line for actions, not the first line for
secrets.

## Read hosted MCP as the token that stays off disk, not as a second computer

Hosted MCP sign-in tokens stay with Cursor's backend. They are not stored on
the Agent Computer. That is the documented exception. It is still not grok
bot isolation between Bot A and Bot B. Hosted tools are account-level, not a
per-bot vault. A research screen on the same user can be offered the same
hosted tool. You avoided a cookie and a credentials file. You did not buy a
second VM.

Use hosted MCP where an API exists and you can stand the tool being
account-wide. If AWS is only a static access key in ~/.aws, hosted MCP will
not save that design. The mixed failure is connecting a hosted tool for
sheets, then running \`aws configure\` for a one-off list. The sheets token
stayed off disk. The AWS key did not. Bot B can ignore the sheets tool and
still list buckets.

## Delete the research bot and watch the production keys stay

Deletion removes the bot, the conversation, and that bot's routines. It does
not wipe the managed Linux VM, empty ~/.aws, or sign the AWS console out.
Other bots keep the same computer because the computer is assigned to the
user.

The teardown order that actually reduces blast radius is
[how to delete a Grok Bot without leaving logins behind](/blog/delete-a-grok-bot-safely).
Revoke site logins first. Remove files you would not want the next bot to
open. Then delete. If you delete Bot B and leave the credentials file, you
have tidied the sidebar and kept the leak.

Skills can remain available across bots. Hosted MCP connections remain until
you revoke them. Files under /workspace remain until you delete them. CLI
credentials remain until you remove the local config and revoke the key at
IAM. Hide the research profile if you still need the chat that named the
dirty folders. Hiding does not isolate credentials.

Deleting the prod bot instead of the research bot does not help. The keys
are on the computer, not inside a roster name.

## Answer the engineer who says the research bot has no AWS connection

This is the strongest objection, because it matches every other tool the
engineer has used. If there is no OAuth row, no Connect AWS click, no IAM
role attached to Bot B, then Bot B should not have AWS. In Grok Bot, CLI
access is not a connector. It is a file. The AWS CLI reads ~/.aws. Bot B can
\`cat ~/.aws/credentials\`, run \`aws s3 ls --profile prod\`, or search
/workspace for KEY_ID. None of those paths require a connections panel.

A named profile is a filename plus a string. \`chmod 600\` is not a wall
between bots. There is not a Unix user per bot. A missing \`aws\` binary is
not a wall. The research screen can install it onto the same VM.

The objection wins one narrow case: you never wrote AWS config, never logged
the console in the shared browser, never pasted a key into a note, and you
keep that promise. Then Bot B cannot list production buckets, because the
identity is not there. That is hygiene on one computer, not named-bot
isolation. The moment you break the promise just this once, the once is
roster-wide. If a research bot might follow a hostile PDF, the keys must not
exist on that computer. A charter that says do not use AWS is an instruction.
The PDF is also an instruction.

## Refuse to complete a production 2FA prompt on the computer the research bot shares

If you open the AWS console on the Agent Computer and complete a two-factor
prompt so Bot A can click a billing page, you have put a session cookie in
the shared jar. Bot B can open the console URL and find itself already in
the production account. You did not connect AWS to the research bot. You
authenticated a browser the research bot also uses.

Where those six digits belong, and why backup codes must never land on this
disk, is [the Grok Bot 2FA prompt](/blog/grok-bot-2fa-prompt).
Completing production 2FA on this computer is a live login into a jar every
screen shares. If the job needs a console, do it on a laptop that is not this
VM, or on the prod-only eligible account. WebAuthn and TOTP do not create a
per-bot session. After the prompt succeeds, the cookie is the grant. Sign out
when the job ends, then prove it from a throwaway bot. You do not need ~/.aws
for the browser version of Wednesday morning.

## Write a machine-level charter that names the computer as the unit

Paste a rule that talks about the VM, not about "the prod bot." Put it on
every bot on the account, including the research one, including the next one
you create in a hurry. A per-bot charter that only lives on Bot A will not
be loaded when you open Bot B.

\`\`\`text
Machine rule for this Grok Bot account
The computer is shared. Screens are not sandboxes.
"Do not use separate Bots as a security boundary."

Never write production AWS keys, session tokens, or ~/.aws config on this
computer.
Never run aws configure with a production identity.
Never complete production 2FA for AWS, GitHub, or a cloud console on this
computer.
Never tell yourself a sibling bot cannot see a file you just wrote.

If a task needs production AWS, stop. Run it on a laptop that is not this
VM, or on a second eligible Grok Bot account that has never held research
jobs. If you only have this computer, mint a short-lived read-only key you
accept as roster-wide, use it, then revoke it and delete the local config
before any other screen opens.

Boundary: do not call AWS, do not open a cloud console, and do not install
a cloud CLI unless the human has already accepted that the identity will
be shared with every bot on this account.
\`\`\`

That boundary is an executing rule. It still needs the disk to be clean.
Pair it with a check that a throwaway bot cannot read ~/.aws, and with
[the safety checklist](/blog/grok-bot-safety-checklist)
before you connect mail.

## Prove the leak with a throwaway bot that should not know the bucket list

Do not take the sandbox story, or this page, on trust. Use a check that can
come back dirty.

Create a throwaway bot with no connections and a charter that says research
only. Do not mention AWS in the setup. Ask it to list ~/.aws, to run
\`aws sts get-caller-identity\`, and to open the AWS console URL in the
shared browser. If any of those succeed with a production identity, named
bots were never your boundary.

| Check | Pass looks like | Fail looks like |
|---|---|---|
| Docs | FAQ, computer-and-apps, and the approvals line all agree: one computer, screens are not a boundary | A third-party explainer that says each bot has a VM |
| Disk | Throwaway bot cannot read ~/.aws, or the directory is absent | \`cat\` prints a production key or profile |
| CLI | \`aws sts get-caller-identity\` errors with no credentials | It returns the prod account id |
| Browser | AWS console shows a login screen | Already inside the production account |
| After delete | You deleted the research bot, then the throwaway still sees the same identity | You believed delete wiped a sandbox |

If the CLI check fails clean because you never installed \`aws\`, install
nothing. The research bot can install it later. The disk check and the
browser check decide whether a secret already lives here. If the disk check
is dirty, rotate the key in IAM from a machine that is not this VM, sign the
console out, delete local config, then rerun the throwaway bot until the
checks fail clean.

## Split eligible accounts when the worst secret cannot live next to a curious prompt

Real isolation is a second computer or an absent secret.

Use a second eligible account when production AWS, GitHub, or database URLs
must exist for Grok Bot to do the prod job. Put research on the other
account. Do not copy files between them. Two user accounts are two computers.
That is the only documented computer-level wall.

Use one account and keep the secret off disk when the prod job does not need
this VM. Let the human run \`aws s3 ls\` on a laptop, then paste the listing
into the bot. Ugly. Isolated.

Use named bots on one account when every credential on the machine is one
you accept as roster-wide. Then Bot A and Bot B are review tabs. Valid for
work. Not grok bot isolation.

Where this breaks down: a human who copies ~/.aws between accounts anyway, a
hosted MCP tool treated as per-bot, a 2FA prompt completed just to unblock
the console, an iPhone pause mistaken for a wipe. On iPhone you can pause and
resume only. Editing, history, testing, and deleting need desktop. None of
those limits create a sandbox. If the worst secret cannot sit next to a
curious prompt, change the bench.

**Keep reading:** [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security), [Least Privilege for Bots](/blog/least-privilege-bots), [The Grok Bot Safety Checklist Before You Connect Your Inbox](/blog/grok-bot-safety-checklist).

## Frequently Asked Questions

### Are two Grok Bots on one account a security boundary for production keys?

No. Every bot on one Grok Bot account shares a single persistent cloud computer assigned to the user, not to the bot. Each bot gets a screen, which is a work surface rather than a vault. Cookies, files, and command-line credentials are shared. If Bot A writes AWS keys into ~/.aws, Bot B can run aws s3 ls with that identity even when the research bot has no AWS row in the connections panel. The documentation teaches this as an instruction: do not use separate Bots as a security boundary. Named bots isolate review tabs. They do not isolate credentials.

### Can a research bot without an AWS connection still list production buckets?

Yes, if the keys already live on the computer. CLI credentials are files, not per-bot OAuth grants. The AWS CLI reads ~/.aws and the process environment. A research bot can cat the credentials file, call aws with a named profile, or install the CLI onto the same managed Linux VM and then succeed. A charter that says research only is an instruction to the model, not a filesystem ACL. The clean case is the boring one: never write production AWS config on that computer, and never complete a production console login in the shared browser.

### Does deleting the research bot wipe ~/.aws and the AWS console session?

No. Deleting a bot removes that bot, its conversation, and its routines. Shared-computer files and sign-ins are not isolated by bot and may remain. ~/.aws stays until you delete it. A console cookie stays until you sign out and revoke at the source. Hide the bot if you still need the chat that named the dirty folders. When you do delete, revoke first, then remove files, then delete. Deleting the prod bot instead of the research bot does not help either. The keys are on the computer, not inside a roster name.

### What is real grok bot isolation if separate bots are only screens?

A second eligible account, which is a second computer, or never putting the secret on the computer you already have. Cursor Pro+ at $60 a month is the cheapest paid path that includes Grok Bot, with Teams Standard at $40 per user per month as another included seat, both of which you should confirm live before you budget. Hosted MCP tokens stay off disk with Cursor's backend, which closes a cookie path without creating a per-bot vault. Hygiene on one computer is valid when every remaining credential is one you accept as roster-wide.
`,
};
