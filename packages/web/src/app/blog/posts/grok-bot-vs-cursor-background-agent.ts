import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot vs Cursor Background Agents: Two Products, One Account',
  description:
    'Grok Bot vs Cursor agent (Background Agents) share one Cursor login as two products: a named cloud teammate versus repo jobs. Confirm Cursor docs.',
  date: '2026-08-27',
  category: 'Comparison',
  content: `
# Grok Bot vs Cursor Background Agents: Two Products, One Account

A pull request waited for a comment that the mail bot was never going to write.

You signed into Grok Bot with a Cursor account. Later the same morning you started a Cursor Background Agent, or whatever the editor currently labels that repo job, from the same login. grok bot vs cursor agent looks like one SKU in the sign-in modal. It is two products. Grok Bot is a named cloud teammate. Cursor Background Agents are repo jobs. Cursor currently documents that surface as Cloud Agents. The naming history on that page says the old name was Background Agents. Confirm [Cursor's Cloud Agent overview](https://cursor.com/docs/cloud-agent) before you copy a feature list from a thread.

This page is not [Grok Bot vs Grok Build vs Grok 4.6](/blog/grok-bot-vs-grok-build). SKILL.md lives on Build. This page is not [why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained). That page is the door. Stay here for the overlap after you already have the door: the same Cursor identity can unlock Grok Bot and still be a code editor that runs background agents. They do not share a machine, a stop line, or a job.

Worked example below: an engineer who wants a pull request reviewed while a Grok Bot triages mail. Do not wait for the mail bot to comment on GitHub. Do not brief the repo job to clean Gmail. Do not paste a SKILL.md into a Grok Bot charter because you signed in with Cursor.

## Treat the Cursor login as a keyring that holds two products

A Cursor account is identity and billing plumbing. It is not a product. After SpaceX acquired xAI (announced 2 February 2026) and closed the Anysphere acquisition (14 August 2026), Grok Bot's sign-in and plan check run through that identity. [Cursor Pro+ and Grok Bot](/blog/grok-bot-cursor-pro-plus) is the sixty-dollar individual door. The editor remains a code editor. Cloud Agents and Bugbot remain editor surfaces. Sharing a password does not merge them into one runtime.

Grok Bot launched in beta on 11 August 2026. Eligibility widened on 21 August 2026. Cursor's Cloud Agent docs still carry a naming-history line that Background Agents were renamed. The help article for background agents currently points at Cloud Agents. That rename is why grok bot vs cursor agent search lands in two documentation trees. Read both. Do not flatten them because the login modal used one logo.

The account is a keyring. Grok Bot is one key. The repo job is another. Bugbot, if you use it, is a third Cursor surface. Confirm it on [Cursor's Bugbot page](https://cursor.com/docs/bugbot). This article will not freeze a Bugbot feature list.

## Staff Grok Bot as a named teammate on one shared cloud computer

Grok Bot is the product in [What is a Grok Bot](/blog/what-is-a-grok-bot). You name a bot, brief it, connect tools, and set a boundary. It runs on a managed Linux VM that xAI operates. The computer is assigned to your user account, not to an individual bot. Each bot gets a screen. Screens are work surfaces, not security boundaries. Cookies, signed-in sessions, files, and command-line credentials are shared. Deleting a bot does not remove those files or sessions. Do not use separate bots as a security boundary.

That computer keeps running when the laptop lid closes. [Inbox Triage](/bots/inbox-triage) can sort mail overnight. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) can draft a purge list and still not send. [Standup Scribe](/bots/standup-scribe) can turn notes into a digest. None of those jobs is clone this repo, run the test suite, open a pull request. If you needed that, you wanted the Cursor repo job, not a second Grok Bot.

Grok Bot has no model picker, for members or admins, and none is planned. There is no Grok Bot-specific spend cap. Subscriptions include a weekly usage allowance, then on-demand billing from model and token cost. No public dollar figure for that allowance exists. An audit view of Bot actions does not exist yet. Privacy Mode (Legacy) blocks Grok Bot. Platforms: macOS (Apple silicon and Intel), Windows (x64 and Arm64), iPhone on iOS 18+. Not Linux desktop, not Android, not iPad. The VM is Linux. That is not a Linux desktop client.

Routines attach to one bot, max fifty, with twenty recent run records, and they die when the bot is deleted. Hosted MCP sign-in tokens stay with Cursor's backend, not on the computer. That is not Cloud Agents.

## Call Cursor Background Agents repo jobs, then re-read the Cloud Agent page

Cursor currently files Background Agents under Cloud Agents. The overview says they use the same agent fundamentals as the editor agent, then run in isolated VMs with a development environment instead of on your laptop. It describes cloned repos, dependencies, secrets, and handoff through source control. Recheck [cursor.com/docs/cloud-agent](https://cursor.com/docs/cloud-agent) the morning you rely on a kickoff path. Cursor has already renamed this surface once.

This article will not freeze that list, a concurrency cap, a VM size, a required plan SKU, or a Cloud Agent dollar price. Cursor's troubleshooting page has said you need a paid plan and a source-control connection an admin authorised. Confirm those gates. Confirm billing on Cursor's pages.

Isolation is the contrast that matters, and even here you should hedge. Cursor currently describes an isolated VM per run, with setup via agent-led setup, a snapshot, or a Dockerfile in .cursor/environment.json. Grok Bot currently describes one persistent computer per user. Those are opposite stories. Do not import Cursor's isolation language onto Grok Bot. Do not import Grok Bot's shared-cookie language onto a Cloud Agent run unless [Cloud Agent security and network](https://cursor.com/docs/cloud-agent/security-network) says so the day you read it.

A repo job is for repo work. Write the test. Open the pull request. Then stop. That worker is not your mail teammate. If the Cloud Agent page has added capabilities since this article was filed, believe the page.

## Keep Bugbot on its own docs page so it does not swallow this comparison

Bugbot is a Cursor product for reviewing diffs. Cursor currently describes it as analyzing pull requests and leaving comments, with an autofix path that can spawn a Cloud Agent. That sentence is a pointer, not a spec. Confirm [cursor.com/docs/bugbot](https://cursor.com/docs/bugbot). Do not copy a review-speed claim or a per-run price from a roundup into your runbook.

The mix-up is mechanical. You wanted a PR reviewed. You already pay Cursor. You also installed Grok Bot. Three surfaces can claim the word review:

| Surface you actually opened | What it is for, hedged | What it is not |
|---|---|---|
| Grok Bot with a review brief | A named teammate you instructed to summarise a diff you showed it. See [how to build a Grok Bot that can review pull requests](/blog/grok-bot-to-pr-review). | Cursor Cloud Agents. Bugbot. Grok Build. |
| Cursor Background Agent / Cloud Agent | A repo job on a Cursor-operated environment, per current Cloud Agent docs | A standing mail teammate. A Grok Bot screen. |
| Bugbot | A Cursor review product. Confirm the current Bugbot page | Grok Bot. Do not assert Autofix behaviour from memory |

If your team says "the bot reviewed it," ask which noun. If they cannot answer, you have a brand collision, not a review process. Keep Bugbot out of the Grok Bot charter. Keep Grok Bot out of the Bugbot settings.

## Park Grok Build and grok.com so a third Grok object does not steal the split

Claude Code compatibility, SKILL.md, CLAUDE.md, AGENTS.md, and the grok CLI are Grok Build. The Bot docs never mention those files. Do not say Grok Bot reads SKILL.md. Do not say a Cursor login applies a repo skill file to the named teammate. If you needed that interface, you wanted [Grok Bot vs Grok Build](/blog/grok-bot-vs-grok-build).

grok.com and the Grok app are chat. Installing Grok Bot is not an upgrade to that window. [Grok Bot vs Grok the chatbot](/blog/grok-bot-vs-grok-the-chatbot) owns that split. This page will not rerun it. Leave those names alone while you separate Grok Bot from Cursor Background Agents.

A Cursor account can sit next to Grok Bot, Cloud Agents, Grok Build on a laptop, and a grok.com tab. That is a messy desk, not a unified agent. Write the object name in the first line of every runbook.

## Follow the engineer who wants a PR reviewed while mail still arrives

Kiran is a backend engineer on Cursor Pro+. At 09:10 she starts a Cursor Cloud Agent against payments-api because the coverage job is a repo job: add the missing test, run it, open a pull request. She uses whatever control the current Cloud Agent page shows. She does not treat this article as the installer. At 09:12 the Grok Bot named Inbox on the same Cursor account is already mid-routine on vendor mail. Same login. Two products. Two clocks.

At 10:40 she looks for a GitHub comment from "the bot." There is none from Inbox, because Inbox was never given git. The Cloud Agent opened a branch and a pull request, or it stalled in the Cloud Agents dashboard. Kiran files a Grok Bot outage because the login was Cursor and the word agent was in both UIs. That ticket is the failure this page exists to prevent.

The mail job belongs on Grok Bot. Paste [Inbox Triage](/bots/inbox-triage) or [Mail Cleanup Assistant](/bots/mail-cleanup-assistant). Boundary: never send. The PR job belongs on the Cursor repo surface, or on Bugbot if that is the review product you actually wanted, confirmed on Cursor's pages. If Kiran also wants a standing attention check on diffs without merging, she can brief a Grok Bot to summarise a pull request she shows it, with merge forbidden. That is still Grok Bot. It is not Cloud Agents. It is not SKILL.md.

By day thirty the shapes have diverged. Inbox keeps twenty recent routine records per routine, and those records die if she deletes the bot. Cloud Agent runs live in Cursor's agent UI. Confirm retention there. The Gmail session on the Grok Bot computer is shared with every other bot on her account. Mixing those blast radii in one incident channel is how a leaked mailbox cookie gets treated like a leftover branch.

Friday check: Did Inbox send? It must not have. Did anything merge without a human? It must not have. Did a SKILL.md in payments-api change Inbox's behaviour? It must not have. If any answer is wrong, she has the wrong product in the job, not a missing toggle on a unified agent.

## Score identity, machine, job, and stop line instead of dumping features

Feature dumps go stale on the Cursor side. Score the objects on four axes that survive a rename.

| Axis | Grok Bot (docs.x.ai, checked 2026-08-25) | Cursor Background Agent / Cloud Agent (confirm current Cursor docs) |
|---|---|---|
| Identity | Cursor or SuperGrok plan check. Same Cursor login can be the door | Same Cursor login can start editor and cloud repo jobs. Confirm plan gates |
| Machine | One persistent cloud computer per user. Screens are not isolation | Cursor currently describes isolated VMs per run. Recheck isolation language |
| Job | Named teammate, plugins, routines, standing work after the lid closes | Repo job: environment, branch, tests, handoff through source control |
| Stop line | Charter boundary plus product approvals. No audit view yet | Whatever stop, spend limit, and network policy Cursor currently exposes |

A fifth axis is tempting: model choice. Grok Bot has none, and none is planned. Recheck Cloud Agent model options on Cursor. Do not plan a Grok Bot rollout on a picker you saw in the editor.

## Pay the Grok Bot door from published plans, then confirm Cursor agent extras yourself

The door and the editor extras are not one meaning even when they print on one Cursor bill.

| Invoice line, checked 25 August 2026 | Grok Bot | Editor Background Agent / Cloud Agent extras |
|---|---|---|
| Cursor Hobby | Not included | Confirm Cursor. Do not assume cloud repo jobs on a free SKU |
| Cursor Pro at $20 | Not included | Paid editor SKU. Confirm whether Cloud Agents still require only a paid plan |
| Cursor Pro+ at $60 | Included. Cheapest documented paid individual door | Confirm what else that SKU currently bundles on cursor.com/pricing |
| Cursor Ultra at $200 | Included | Confirm extras on Cursor, not here |
| Cursor Teams Standard $40/user or Premium $120/user | Included | Team Cloud Agent and Bugbot settings are Cursor admin work. Confirm |
| SuperGrok Plus at $100 | Included | You may still hold a Cursor login for the editor. Do not merge the products |

The interesting row is Pro at $20. It is paid. It does not include Grok Bot. If Cursor still documents Cloud Agents as requiring a paid plan, you could have repo jobs without the teammate. Confirm both pages the morning you buy. SuperGrok Heavy is on the Grok Bot eligibility list. Its price is unpublished, so do not print one. Privacy Mode (Legacy) blocks Grok Bot. Cursor's Cloud Agent security page has also said Legacy privacy mode is not supported. Confirm that too. One toggle can shut two products for different reasons.

A one-time trial is an eligibility path for individuals on the Grok Bot side. It is not a Cloud Agent trial unless Cursor says so.

## Count Grok Bot blast radius in cookies and files, never in a cloned branch

Grok Bot blast radius is the shared computer. If Inbox is signed into Gmail, every other bot on the account can reach that session. Treat the computer as hostile. Limit plugins and approvals. [One computer, many screens](/blog/grok-bot-shared-computer-security) is the isolation article. [Least privilege for bots](/blog/least-privilege-bots) is the grant article. [The Grok Bot safety checklist](/blog/grok-bot-safety-checklist) is the sequence before a mailbox.

Cursor Cloud Agent blast radius is whatever that run's environment, secrets, and network policy allow, as currently documented. Cursor describes secret redaction, network allowlists, and credential management on the security pages. Recheck. Do not claim the Grok Bot VM is sandboxed like a Cloud Agent. Do not claim a Cloud Agent run shares Grok Bot cookies.

Deleting a Grok Bot does not wipe the computer. Deleting a Cloud Agent run does not delete the Grok Bot. Signing out of grok.com does not sign the Bot computer out of Gmail. Each logout is local to its object.

If Kiran connects GitHub in the Grok Bot browser, that session sits on the shared computer. That is not Cloud Agents cloning a repo into an isolated VM. Prefer the Cursor repo surface for git writes. Keep GitHub off the Bot computer unless the charter needs read-only browsing and you accept the share.

## Paste a mail charter that forbids git, and leave the PR on the Cursor surface

The boundary belongs in the brief, not in a file Grok Bot does not read. Inbox gets mail. The Cursor agent gets the branch. Kiran pastes this into the Grok Bot, not into .cursor and not into SKILL.md.

\`\`\`text
Name: Inbox Only, No Git
Job: Triage inbound mail for four hours of unread while a human handles
pull requests on Cursor Cloud Agents or Bugbot.

Scan unread mail. Bucket into action, wait, and noise. For action items
that already have a template, draft a reply and leave it unsent. For
noise, label and skip. For wait, note the date the thread should wake.

Boundary: Never send. Never open GitHub, GitLab, Bitbucket, or Azure
DevOps. Never comment on a pull request. Never clone, push, merge, or
approve. Never install or start a Cursor agent. If a mail asks for a
code review, write "human, this is a Cursor repo job" in the digest
and stop.

If you lack mailbox access, say so. Do not open extra tabs to look
helpful. Do not read SKILL.md, CLAUDE.md, or AGENTS.md. Those files
are not your interface.
\`\`\`

That charter is the product split in pasteable form. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) can sit on a second bot on the same computer, which means it shares sessions with Inbox. Do not use that second bot as a security wall. If the briefing bot must not see Gmail, do not sign Gmail in on that computer.

The PR side of Kiran's morning does not get a Grok Bot charter unless she wants an attention summary and accepts the shared computer. Isolated repo work stays on Cloud Agents. Automated PR comments stay on Bugbot. Confirm both on Cursor. One login. Still not one product.

## Trace the ticket that called a repo-job stall a Grok Bot outage

Most grok bot vs cursor agent failures are filing errors. The symptom is real. The noun is wrong.

| Symptom | Cause if you mixed the products | What to check first |
|---|---|---|
| No GitHub comment from Inbox | Inbox is a mail teammate. It was never the repo job | Cloud Agents dashboard, Bugbot on the PR, or a human reviewer |
| Cloud Agent asked about unread mail | You briefed a repo worker as if it were Grok Bot | Move mail to a named Grok Bot. Confirm plugins on docs.x.ai |
| Grok Bot ignored SKILL.md in the repo | Expected. Bot does not read that file | If you needed skill files, you wanted Grok Build, not Bot |
| Pro at $20 user cannot start Grok Bot | Pro does not include Grok Bot | Invoice spelling. Pro+ or another eligible plan. Trial |
| Privacy Mode (Legacy) blocks the teammate | Documented Grok Bot block | Cursor privacy settings. Cloud Agents may be blocked too. Confirm |
| Deleted Grok Bot, Gmail still signed in | Deleting a bot does not clean the computer | Sessions and files on the shared VM. Not Cursor agent history |

On iPhone, Grok Bot can pause and resume only. Editing, history, testing, and deleting need desktop. Confirm Cursor's current iOS story for Cloud Agents. Do not expect the Grok Bot iPhone client to be that dashboard.

When the ticket is wrong, the fix is a noun. Restarting Grok Bot will not unstick a Cloud Agent VM. Restarting a Cloud Agent will not unscrew a Grok Bot plugin.

## Concede that one invoice line can look like one product

The strongest objection is honest: Kiran already pays Cursor. Grok Bot asked her to sign in with Cursor. Cloud Agents live in Cursor. Bugbot lives in Cursor. Why pretend they are two products when finance sees one vendor?

Because the machines, jobs, and stop lines still diverge. SpaceX owns both stories. The Grok Bot FAQ still describes a computer shared across bots. Cursor still describes Cloud Agents as isolated repo VMs. Those paragraphs do not collapse because the parent is the same. If Cursor later documents that Grok Bot is an alias of Cloud Agents, believe Cursor. As of the Grok Bot docs checked 25 August 2026 and the Cloud Agent overview read for this article, they are not aliases.

The objection wins in one case. If Kiran only writes code and never wants a standing mailbox teammate, she can skip Grok Bot. Cursor Pro at $20 still will not include Grok Bot, which is fine if she is skipping it. If she only wants overnight mail and never wants a repo VM, she can skip Cloud Agents and still need an eligible Grok Bot plan. The invoice looking unified does not pick the job.

What the objection does not win: turning Cloud Agents off will not make Inbox comment on a pull request. Turning Grok Bot off will not move Gmail triage onto a Dockerfile in .cursor/environment.json. You can disable one. You cannot merge them by subtraction.

## Fail the checks that only pass when you opened the wrong Cursor surface

Verification has to be able to fail. If every check is that the login worked, you learned nothing.

Name a Grok Bot and confirm you see a screen. If you cannot, you do not have Grok Bot yet. Check the invoice against the [eligibility list](https://docs.x.ai/grok-bot/faq). Check Privacy Mode (Legacy). Check [supported platforms](/blog/grok-bot-supported-platforms). A Linux desktop or an Android phone is the wrong Grok Bot client even if Cloud Agents can start from a browser.

Open cursor.com/agents, or start a trivial Cloud Agent, and confirm you are on the repo surface Cursor currently documents. If that UI is missing, you do not have the Background Agent product under today's name. Do not call that a Grok Bot outage.

Drop a SKILL.md into payments-api that says the mail bot must send. Run Inbox. If Inbox sends because of that file, something is badly wrong and it is not documented Bot behaviour. If Inbox ignores the file, that is expected. Build reads skill files. Bot does not.

Ask Inbox to comment on the open pull request. It should refuse if the charter above is in force. If it opens GitHub and comments, the Grok Bot boundary failed. An approval controls a proposed action. It does not reverse work already completed.

Ask the Cloud Agent to archive a Gmail label. If it can, you handed a mail grant to a repo worker. Undo that. Mail belongs on Grok Bot.

## Keep the teammate and the repo job both running on the same afternoon

You do not have to pick. The useful setup for an engineer who still receives vendor mail is both products, named, with two briefs. Grok Bot holds standing work that is not a branch. Cursor Cloud Agents hold repo jobs you can close the laptop on, as currently documented. Bugbot, if you enable it, holds review comments. Grok Build holds local skill files. grok.com holds chat. One Cursor login can be involved in several of them. The login is still not the product.

When mail and a pull request land at 16:00, Inbox drafts and does not send. The Cloud Agent, or a human, owns the diff. Kiran does not wait for one worker to become the other. She does not paste Build files into Bot. She confirms Cursor docs whenever she repeats a Cloud Agent, Bugbot, or Background Agent detail, because those pages move.

**Keep reading:** [Grok Bot vs Grok Build vs Grok 4.6: Three Products, One Name](/blog/grok-bot-vs-grok-build), [Why Grok Bot Needs a Cursor Account, and How To Get Access](/blog/grok-bot-cursor-account-explained), [Cursor Pro+ and Grok Bot: What the $60 Door Actually Includes](/blog/grok-bot-cursor-pro-plus).

## Frequently Asked Questions

### Does one Cursor login make Grok Bot and Background Agents the same product?

No. The login is identity and plan plumbing. Grok Bot is a named teammate on a persistent cloud computer assigned to your user account, with shared screens, shared sessions, routines, and a charter boundary. Cursor Background Agents are repo jobs. Cursor currently documents them as Cloud Agents on isolated VMs with a development environment. Confirm that page, because Cursor already renamed the surface. Sharing a password does not merge stop lines, machines, or jobs. You can hold both on one account and still owe each product its own brief.

### Can Grok Bot review a pull request the way a Cursor Background Agent does?

Not as the same product. You can brief a Grok Bot to summarise a diff you showed it and forbid merge, which is attention work on the shared computer. That is not Cursor cloning a repo into a cloud environment and handing back a branch. For isolated repo work, use Cloud Agents and confirm current docs. For automated PR comments, confirm Bugbot separately. Do not wait for Inbox Triage to comment on GitHub. Do not expect Grok Bot to honour SKILL.md while it reads the diff.

### Does Grok Bot read SKILL.md because you signed in with Cursor?

No. Claude Code compatibility, SKILL.md, CLAUDE.md, and related local files are documented for Grok Build, the coding CLI, not for Grok Bot. The Bot docs do not mention those files. A Cursor login does not import a repo skill file onto the named teammate. If a tweet said Grok is compatible with Claude Code, that sentence belongs on the Build page. Paste a Bot charter in prose, with a boundary, and leave skill files on Build.

### Should you disable Background Agents if you already run a Grok Bot on Cursor Pro+?

Only if you do not want repo jobs. Pro+ is the cheapest documented paid individual door into Grok Bot as of 25 August 2026. It does not turn Cloud Agents into Grok Bot, and turning Cloud Agents off will not make the mail teammate open a pull request. If you write code and you still receive standing mail, keep both, named, with two briefs. Confirm Cloud Agent, Bugbot, and billing details on Cursor's current pages before you treat any extra as included or as forbidden.
`,
};
