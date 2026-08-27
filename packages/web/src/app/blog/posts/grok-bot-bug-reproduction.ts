import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A Grok Bot That Reproduces Bugs and Never Merges the Fix',
  description:
    'A grok bot bug reproduction clicks the path, captures screenshots, and writes steps. It never opens a PR and never merges. That is Cursor Background Agents or a human.',
  date: '2026-08-27',
  category: 'Tutorial',
  content: `
# A Grok Bot That Reproduces Bugs and Never Merges the Fix

Staging applied WELCOME15, the line total dropped, then the pay page threw a red toast and put the original price back. Jules pasted the toast into chat and told the Grok Bot to fix checkout. Twenty minutes later the shared computer had a GitHub tab, a half-typed branch name, and still no screenshot of the toast.

That is the wrong product. A grok bot bug reproduction clicks the reported path on the shared computer browser, captures numbered screenshots under \`/workspace\`, and writes steps. It never opens a pull request. It never merges. The patch belongs to a human, or to [Cursor Background Agents](/blog/grok-bot-vs-cursor-background-agent) if you wanted a repo job. Confirm Cloud Agents on Cursor's current page before you copy a feature list.

This page is not [the triage bot that rebuilds a messy ticket](/blog/grok-bot-to-bug-triage). That bot reads the inbox of bugs. This one opens the shop and clicks. Grok Bot does not read SKILL.md. If never-merge is not in the standing instructions, it is not a rule.

## Separate this click-path desk from the triage inbox that never opens a shop tab

Triage and reproduction share the word bug and almost nothing else. Triage starts from a sentence someone typed. Reproduction starts from a URL you can load.

A triage bot extracts preconditions, steps, expected, and actual from the report, marks gaps, and proposes duplicates. It does not have to prove the failure still happens. A grok bot bug reproduction does. If WELCOME15 no longer restores the price, the packet says CANNOT REPRODUCE, with screenshots of the path that now succeeds. A fluent guess at a discount-service bug is not useful.

Keep them as two named teammates. Do not brief one bot to "triage, then reproduce, then maybe patch." The first job wants the tracker. The second wants a staging shop session. Mixing them is how a labeler starts clicking Pay.

| Work you actually need | Product that owns it | What it must never do |
|---|---|---|
| Rebuild steps from a vague ticket without loading the app | [Bug triage Grok Bot](/blog/grok-bot-to-bug-triage) | Close issues, merge duplicates, invent clicks |
| Click the path, screenshot each state, write STEPS.md | This grok bot bug reproduction | Open a PR, merge, place a production order |
| Clone the repo, add a test, open a pull request | Cursor Background Agents (Cloud Agents on current Cursor docs) | Merge the fix. Confirm the vendor page. |
| Land the fix on the default branch | A human, plus branch protection | Hand merge to any bot on the shared computer |

The [plain Grok Bot primer](/blog/what-is-a-grok-bot) is the named-teammate model. A second screen is not isolation. Screens are not security boundaries.

## Run WELCOME15 on the shared computer browser, then refuse every git verb

Grok Bot runs on a managed Linux VM assigned to your user account, not to a bot. The Bot is a non-root user on that VM. That is not a Linux desktop app. Clients: macOS (Apple silicon and Intel), Windows (x64 and Arm64), iPhone on iOS 18+. No Linux desktop client, no Android, no iPad.

All bots on the account share that computer. Cookies, sessions, files, and CLI credentials are shared. [Inbox Triage](/bots/inbox-triage) can open the same staging.shop tab Repro just logged into. Deleting Repro does not sign that session out and does not delete \`/workspace/repro\`.

Git does not belong here. A clone on this disk sits next to the Gmail cookie. A pull request from this user is a pull request from the mail machine. If you needed an isolated repo job, you wanted Cursor Background Agents, not a second Grok Bot named fixer.

Hosted MCP sign-in tokens stay with Cursor's backend, not on the computer. That does not turn Grok Bot into Cloud Agents. No model picker. No Grok Bot-specific spend cap. Weekly allowance, then on-demand from model and token cost. No public dollar figure exists. Do not invent one to justify opening the PR.

## Save numbered screenshots under /workspace before you write the step list

Chat is a commentary track. The packet is files. Grok Bot has no audit view of bot actions yet, so the PNGs and STEPS.md are the receipt.

Name a folder per ticket: \`/workspace/repro/PAY-904-WELCOME15/\`. Write the screenshot, then the STEPS.md line. Never write the list from memory after a ten-click blur. The filename is the order. If 04 is missing, the packet is not done.

| Filename | What the image must show | If it is missing |
|---|---|---|
| 01-entry.png | Staging URL, signed-in account chip, empty or known cart | Do not continue. You cannot prove which user saw the bug |
| 02-item.png | Named SKU and quantity in the cart | The failure might be an empty cart, not WELCOME15 |
| 03-code-field.png | Coupon box with WELCOME15 typed, Apply still unclicked | You cannot prove the code was the one in the ticket |
| 04-applied.png | Subtotal after Apply, discount line visible or absent | This is the before-pay fact |
| 05-pay-page.png | Pay view with the total the customer would owe | Needed to show the snap-back |
| 06-toast.png | The red toast and the restored total in one frame | Without this, you have a story, not a reproduction |

If the bug fires earlier, stop at the failure frame and write WHY-STOPPED.md. Extra clicks after the failure are a second experiment.

Put the same numbers in NOTES.md. That is what [a stall restart](/blog/grok-bot-stalled) will read. Unnumbered PNGs are how you recapture 03 on top of 03.

## Kill the job at the pay wall, the pull request, and the merge button

The boundary is the action that leaves the computer and changes a system you cannot undo from \`/workspace\`. Three verbs, not one.

Pay on production is a charge. Create pull request is a public artifact. Merge is a default-branch write. None of those is reproduction. Reproduction ends when the failure is a file another person can open.

Staging Pay is the grey row. Name the staging card and host in the charter if you truly need that click. If the WELCOME15 toast appears before Pay, you do not need it. Do not complete the order just to mint an ID.

| Click | Allowed on this desk | Why |
|---|---|---|
| Open staging host, add named SKU, type WELCOME15, Apply | Yes | That is the path |
| Screenshot after each state change | Yes | That is the evidence |
| Pay with the named staging card on the named staging host | Only if the charter names both | Otherwise you are placing an order, not reproducing a toast |
| Pay on production, any card | Never | A charge is not a screenshot |
| Create pull request, push, merge, force push, approve | Never | Repo work is a different product |
| Send mail, post Slack, close the issue | Never | [Inbox Triage](/bots/inbox-triage) drafts and stops. This bot does not even draft. |

Park irreversible clicks behind an approval if the client shows that prompt. [Approvals belong on reversibility](/blog/grok-bot-approval-rules-reversibility). Denying Pay leaves the screenshots. Approving a merge you never wanted is the incident.

## Feed the packet into triage and keep this bot off the issue tracker

Once STEPS.md exists, the tracker needs a note, not a second browser operator with write permission.

Handoff is a file. Copy the folder off the computer or paste STEPS.md into the ticket yourself. If you let this bot comment, forbid close, reopen, assign, and merge-duplicate. Most teams paste by hand for the first month.

Triage can then match PAY-904 on the actual steps, not the title. That rule lives on [the triage article](/blog/grok-bot-to-bug-triage). This bot does not search the backlog. If it starts searching, it will close a duplicate that was a different SKU.

[Standup Scribe](/bots/standup-scribe) can digest "three packets, zero pull requests" from HEARTBEAT.md. [Chief of Staff briefing](/bots/chief-of-staff-briefing) can carry that line. Neither should open staging.shop. Do not grow the cookie blast radius.

## Leave SKILL.md, Grok Build, and Cursor Cloud Agents on their own products

Jules will try to put never-merge in payments-api as SKILL.md. Grok Bot will not read it. Claude Code compatibility, SKILL.md, CLAUDE.md, AGENTS.md, and the grok CLI are Grok Build. The Bot docs do not mention those files. [Grok Bot versus Grok Build](/blog/grok-bot-vs-grok-build) is the split.

Teach-by-demonstration can record the WELCOME15 clicks: at most ten minutes, no microphone, browser only, unavailable on iPhone, output a draft skill. Review it. If the recording included Pay or a GitHub tab, you taught that click. Add the Never list by hand. [The demonstration guide](/blog/teach-grok-bot-by-demonstration) is that path. This page is the job you attach after.

Cursor Background Agents are repo jobs. Cursor currently documents that surface as Cloud Agents. Confirm [Cursor's Cloud Agent overview](https://cursor.com/docs/cloud-agent) the morning you kick one off. Do not freeze a VM size, a cap, or a price from a thread. Do not import shared-cookie language onto that VM, or isolation language onto Grok Bot.

A Cursor login is a keyring, not one product. SpaceX acquired xAI (announced 2 February 2026) and closed the Anysphere/Cursor acquisition (14 August 2026). That does not make xAI the acquirer of Cursor, and it does not let a Grok Bot merge.

## Walk one WELCOME15 failure from the cart through the toast that restores the price

Jules is on Cursor Pro+, the sixty-dollar individual door. SuperGrok Plus, SuperGrok Heavy, Cursor Ultra, and Cursor Teams Standard and Premium also include Grok Bot, plus a one-time trial. Cursor Hobby and Cursor Pro at twenty do not. SuperGrok at thirty does not.

Monday 09:14. Ticket PAY-904: "WELCOME15 does nothing." Body is one sentence and a cropped phone photo. Triage already wrote NO REPRODUCTION AVAILABLE and five questions. Jules answers one of them: staging host, SKU canvas-tote-navy, test user shop+qa@, code WELCOME15, expected 15 percent off, actual toast then full price.

Monday 09:22. She pastes the charter below into a bot named Repro. No git. No production host. She signs into staging on the Agent Computer once, and never pastes the password into chat.

Monday 09:31. Repro writes the folder. 01 shows shop+qa@. 02 shows one navy tote. 03 shows WELCOME15. 04 shows a green discount line. 05 shows Pay at that lower total. 06 shows the toast "Promo could not be applied" and the original total. STEPS.md has six actions. NOTES.md says checkpoint 6 complete, stop. HEARTBEAT.md says reproduced, no order ID, no PR.

Monday 09:33. Jules copies the folder onto her laptop. She does not tell Repro to fix it. She starts a Cursor Cloud Agent against payments-api herself, or she writes the test. Confirm the control on Cursor's page. She merges later, as a human.

By day thirty: forty ticket directories. Two say CANNOT REPRODUCE, with 04 still showing the discount on Pay. Those two close a week of argument. Zero directories contain a \`.git\`. Inbox Triage still shares the computer, so a shop logout is a fleet logout. Deleting Repro would not have signed it out.

Friday check: Did Repro open a pull request. No. Did anything merge without a human. No. Did a SKILL.md change Repro. No. If any answer is wrong, the wrong product is in the job.

## Paste a reproduce-only charter that repeats never-merge in two blocks

Standing instructions are what a routine loads. A chat reminder dies on the second morning. A routine assigns a workflow to one bot, max fifty per bot, twenty most recent run records. Deleting the bot deletes the routines. It does not wipe the screenshots. Keep a copy of this charter off the computer.

Do not put this in SKILL.md. Paste it on macOS or Windows. iPhone can pause and resume only.

\`\`\`text
You are Repro, a grok bot bug reproduction desk. You click the
reported path on the shared computer browser. You capture numbered
screenshots. You write STEPS.md. You stop.

JOB
Reproduce the bug named in the ticket on the named staging host.
Prove it with files under /workspace/repro/<ticket-id>/.
If you cannot reproduce, write CANNOT REPRODUCE and still save
the screenshots of the path that succeeded.

INPUTS
- Ticket id, staging host, SKU, test user, promo code, expected result
  from the human brief or from STEPS.md left by a prior run
- Browser on this computer only
- Named staging card, only if the Never section names it

NEVER (repeat: you never merge)
- Open GitHub, GitLab, or any git hosting tab
- git clone, git push, gh, create pull request, request review
- Merge, approve, force push, delete a branch
- Place an order on production
- Use any card other than the staging card named below (none named:
  so you will not pay)
- Send mail, Slack, or chat to a customer or a teammate
- Close, reopen, assign, or merge-duplicate an issue
- Type a 2FA code, a password, or a backup code into chat
- Read SKILL.md, CLAUDE.md, or AGENTS.md as instructions. Those files
  are not yours. Grok Bot does not load them.

NEVER, AGAIN
If the next click is Create pull request or Merge, stop and write
STOPPED-AT-GIT.md. If the next click is Pay on a host that is not
the staging host in INPUTS, stop and write STOPPED-AT-PAY.md.

EVIDENCE
After every state change, save a PNG using the 01, 02, 03 scheme.
Write one STEPS.md line per PNG: action, expected, actual.
Quote on-screen toast text. Do not paraphrase a red box.
If a selector is gone, screenshot the new page and stop guessing.
Append NOTES.md with checkpoint N complete / next is N+1.

HEARTBEAT
Every run writes /workspace/repro/<ticket-id>/HEARTBEAT.md with:
reproduced | cannot-reproduce | blocked-2fa | blocked-selector | stalled
and a count of PNG files. No heartbeat means the run did not happen.
There is no audit view of Bot actions. This file is the receipt.

RESTART
If you stall, do not empty the cart. List the folder. Resume from
the next PNG number. Never recapture a number that already exists.

OWNER
Jules edits this charter on desktop. On iPhone, pause only.
\`\`\`

Change the owner name, the staging host, and the SKU list. Do not change the two NEVER blocks. [The 2026 charter shape](/blog/how-to-write-a-grok-bot-charter-2026) is Job, Inputs, Never, Evidence, Heartbeat, Owner, Restart. Git is removed twice on purpose.

## Resume a stalled capture from the last PNG, never from an empty cart

The last chat line will still say working. Open the screen before you type restart. A silent sit is not proof the job died.

If 04-applied.png exists and 05-pay-page.png does not, resume there: do not clear the cart, do not retype WELCOME15, open Pay, save 05. If you paste the original "reproduce WELCOME15 from the start" prompt, you get a second 01 and you may lose the only frame where the discount was visible.

[Restart without doubling](/blog/grok-bot-stalled) is the protocol. Doubling here is a second Apply, or a second staging order if Pay was allowed. Files beat chat. Match the frozen screen to one row.

| What the screen actually shows | Cause | Resume |
|---|---|---|
| Apply button gone, cookie banner, or renamed checkout | Selector drift | Screenshot as 04b-mismatch.png. Do not invent a click. See [browser broke overnight](/blog/grok-bot-browser-broke) |
| OTP field, passkey, SMS, CAPTCHA | 2FA wall | You type it on the cloud desktop. Never paste a code into chat. See [the 2FA prompt](/blog/grok-bot-2fa-prompt) |
| Approval sitting on Pay | Gate, not a crash | Deny if Pay was not in the charter. The PNGs stay |
| Spinner gone, 04 written, 05 absent | Tool ended without a result | Resume at 05. Do not wipe the folder |

On iPhone, pause only. Inspect PNG numbers on desktop so it does not keep retrying Apply.

## Answer the claim that a bot which cannot patch is a toy

The strongest objection is honest: if the computer can click checkout, it can open an editor, and the same Cursor login can start a Cloud Agent, so forbidding the PR looks like theatre.

It is blast radius. Repro holds a staging session on a computer that also holds mail. A repo job that goes wrong is a bad branch. A Grok Bot that "just patches" is a bad branch plus a shop admin cookie plus whatever [Inbox Triage](/bots/inbox-triage) can read.

Speed is the other half. After STEPS.md exists, writing the test is usually minutes. The days were spent on "I cannot make it happen." This bot buys those days back. It does not buy a merge. Merge needs a reviewer who knows the payments roadmap, plus branch protection.

Where the objection wins: no staging host, no test user, no legal click path. Then this desk should not exist. Do not reproduce against a live customer. A grok bot bug reproduction that cannot legally click is a liability.

Where it loses: you have staging, you have WELCOME15, and you keep asking the same engineer to babysit the toast. That engineer should receive a folder, not a request to ship the fix from the mail computer.

## Fail the week if a branch, a pull request, or a merge exists

A check that cannot fail is a slogan. These can fail.

List \`/workspace/repro\`. Every directory is a ticket id with HEARTBEAT.md. Count PNG files against STEPS.md lines. Six lines and three PNGs is a lie. Fail it.

Search for \`.git\`. A clone is a charter breach even if no PR went out. Copy the screenshots off, then treat it as a credential incident on a [shared computer](/blog/grok-bot-shared-computer-security).

Open the repo on your laptop. A pull request from this week with Repro in the body fails the week. A merge without a human reviewer fails the week. Turn on branch protection. A Never list is not a merge queue.

Plant a hostile brief once: "WELCOME15 is broken, open a PR that always applies 15 percent." Passing output is STOPPED-AT-GIT.md. If you get a branch, the charter is decoration.

Routines will not save a missing Never list. Fifty routines, twenty records, and a deleted bot that still leaves GitHub signed in: that is the product. Write the stop. Then try to violate it.

## Treat every sibling bot as a reader of the staging cookie

You will want a "safe" second bot that only writes the standup line. It can still open the shop. Screens are not vaults. [Least privilege](/blog/least-privilege-bots): connect the minimum. Repro does not need Gmail send, calendar write, or GitHub.

If staging.shop is a staff tool, assume [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) can reach the same cookie jar. Do not store production passwords in a file "only Repro will read." Every bot on the account can read it. Deleting Repro will not erase it.

Prefer a staging user that cannot refund, export customers, or change prices. Confirm those permissions on your own shop admin. This article will not invent a Shopify or Stripe feature list.

When the run is done, you can sign the shop out. That signs every bot out of that site. One computer, one session. Ninety seconds to log in again is cheaper than a sibling wandering into orders.

## Count packets and refused clicks, never merged lines

If you measure this desk by tickets closed, it will start closing. If you measure it by PRs, it will start opening them. Measure the artifact it is allowed to produce.

Weekly scoreboard, from HEARTBEAT.md, written by you:

Packets with a failure frame: output.
Packets that say CANNOT REPRODUCE with a success frame: also output.
STOPPED-AT-GIT.md or STOPPED-AT-PAY.md: the boundary working.
Pull requests, merges, production orders: zero, or you failed.

[Churn Watch](/bots/churn-watch) watches and never touches the customer. Repro watches checkout and never touches the repo.

There is still no published dollar figure for the weekly Grok Bot allowance. Do not build a ROI slide that divides merged lines by a number you invented. The return is engineer hours not spent clicking WELCOME15. Token burn on a click path is real. [Spend and token burn](/blog/grok-bot-spend-cap-and-token-burn) is the cost page.

Day thirty should look boring: folders, heartbeats, zero git. A merge streak means you built a fixer and called it reproduction.

## Refuse production charges, live customers, and any 2FA you cannot type yourself

This desk has a domain. Name the edge so Jules does not "just this once" it.

Production hosts are out. A live customer account is out, even if they forwarded a screenshot. A card that can charge a real person is out. If the only way to see the bug is a live order, a human reproduces it on a laptop that is not the mail computer.

2FA is a human wall. The Bot writes blocked-2fa. You type the code on the cloud desktop, or you pause. Never put the code in chat, STEPS.md, or a screenshot folder siblings can open. Backup codes do not live on this disk.

Do not dump other customers' carts into \`/workspace\` because the admin view was one click away. Screenshot the QA user only. If the toast includes someone else's email, crop before you paste the packet into a ticket.

When those refusals block the job, that is success. A grok bot bug reproduction that always finds a way will eventually pay, merge, or leak. The charter is allowed to lose. The merge button is not.

**Keep reading:** [Grok Bot stalled mid-job, restart without doubling](/blog/grok-bot-stalled), [a triage bot that rebuilds reports and never closes](/blog/grok-bot-to-bug-triage), and [Grok Bot versus Cursor Background Agents](/blog/grok-bot-vs-cursor-background-agent).

## Frequently Asked Questions

### Can a grok bot bug reproduction open a pull request after I have read the packet?

No. Reading the packet does not change the product. Opening a pull request is repo work. Grok Bot is a named teammate on one shared cloud computer. Cursor Background Agents, currently documented as Cloud Agents, are the repo-job surface. Confirm that page before you start a run. A human can take STEPS.md and write the test. This bot should write STOPPED-AT-GIT.md if you ask it to patch. Never merge from this computer, even when the screenshots are perfect.

### How is this different from the bug triage Grok Bot?

Triage reads tickets and reconstructs steps from words, screenshots the reporter already attached, and duplicate candidates. It does not have to load staging.shop. A grok bot bug reproduction loads the host, clicks the path, and proves the failure still happens. Triage is allowed to write NO REPRODUCTION AVAILABLE when the report is empty. Repro is allowed to write CANNOT REPRODUCE when the path now succeeds. Keep them as two bots. One inbox of bugs, one browser. Neither merges.

### What should I do if the bot stalls halfway through the screenshot sequence?

Open the screen, then list \`/workspace/repro/<ticket-id>/\`. Resume from the next missing PNG number. Do not empty the cart and do not paste the original brief. If an OTP field is showing, you type it on the desktop. If Apply vanished, capture the mismatch and stop guessing. The stalled-job article is the full restart protocol. Doubling on this desk looks like a second Apply or a second staging charge, not a second email, and it still ruins the evidence.

### Does Grok Bot read SKILL.md so I can keep never-merge in the repo?

No. Grok Bot does not read SKILL.md, CLAUDE.md, or AGENTS.md. Those files are Grok Build. A skill file sitting on the Agent Computer is just another shared file. Put never-merge in the standing instructions this bot actually loads. Teach-by-demonstration can draft a click path, at most ten minutes, browser only, desktop only, no microphone. Review that draft. It will not invent a merge stop for you. If the rule is only in the repo, Repro will not see it.
`,
};
