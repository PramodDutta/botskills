import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot vs Copilot Studio: Named Teammate vs Tenant Agent',
  description: 'Compare grok bot vs copilot studio by operating model: a named teammate doing computer work versus a tenant agent built around governed business systems.',
  date: '2026-08-29',
  category: 'Comparison',
  content: `
# Grok Bot vs Copilot Studio: Named Teammate vs Tenant Agent

Dev does not need a bot that looks busy. Dev needs an account-renewal assistant for a Microsoft-centered revenue team to arrive with enough evidence to review and no hidden external action. The useful setup is narrow: collect named inputs, preserve uncertainty, produce a private artifact, and stop at the boundary.

The boundary for this workflow is exact: **Never choose by brand or demo polish. Choose by the system that owns the record and the governance the team must operate.** That sentence is the control surface. A friendly bot name, a routine label, and a successful sign-in do not replace it. The longer explanations live in the [inheritance guide](/blog/grok-bot-vs-microsoft-copilot), [boundary guide](/blog/screens-are-not-boundaries), [approval guide](/blog/what-a-pasted-prompt-inherits), [permission guide](/blog/what-an-approval-actually-governs), [architecture guide](/blog/a-boundary-is-not-a-permission), [operator guide](/blog/learn-grok-bot). This page spends its time on the failure you searched for.

Dev prototyped browser work in Grok Bot while the approved customer state already lived behind tenant controls. The demo moved fast, but production review rejected the duplicated access path and missing ownership model.

Start from one of these real catalog patterns when it matches the work: [starting workflow](/bots/account-health-ranker), [evidence helper](/bots/chief-of-staff-briefing), [review helper](/bots/inbox-triage), [briefing helper](/bots/lead-scout). Each is a starting charter, not an authorization grant. Replace its sample sources, owner, review window, and output path before the first live run.

The procedure below has one aim: make a repeated run boring enough to inspect. It uses an explicit source register, a four-state decision table, a private output, and a human checkpoint. If the evidence cannot support a row, the correct value is unknown. If the completion state cannot be proved, the correct action is stop.

## Make the first decision from the artifact, not the bot name for the tenant-agent choice

If someone says they already have Copilot, ask which object they mean before you
compare anything to Grok Bot. The family name is the trap.

Copilot in Microsoft 365 sits inside Outlook, Teams, Word, Excel, PowerPoint,
and related surfaces Microsoft currently lists, described as help grounded in
the Microsoft Graph. Confirm apps, license, and grounding on Microsoft's current
Microsoft 365 Copilot pages.

Copilot Studio is a builder for agents you publish inside Microsoft's ecosystem,
often into Teams. Confirm connectors, grounding, publishing targets, and any
browser or computer-use claims on Microsoft's current Copilot Studio pages. A
builder in a tenancy is not a named roster on an xAI cloud computer.

GitHub Copilot is a coding assistant in supported editors. Confirm plans and
IDEs on GitHub's current Copilot pages. Autocomplete in VS Code is not overnight
portal research, and it is not a standing [Lead Scout](/bots/lead-scout).

Windows Copilot, or Copilot in Windows, is OS-level help on a Windows PC.
Microsoft has moved this name more than once. Confirm the live Windows
experience on Microsoft's current Windows pages. Help on this desktop is not a
cloud teammate that keeps working after the lid closes.

| Copilot object | Confirm on Microsoft's current pages | What it is not |
|---|---|---|
| Copilot in Microsoft 365 | Apps, license, Graph grounding | Named bots on an xAI cloud computer |
| Copilot Studio | Builder, connectors, publish targets, any browser claims | A private VM per agent |
| GitHub Copilot | Editor support and plan | Overnight portal research |
| Windows Copilot / Copilot in Windows | Live Windows experience and device access | A cloud machine that outlasts the lid |
| Other Copilot SKUs (Sales, Security, consumer chat, whatever launched this week) | That product's own page | Proof Copilot is one grid column |

If the person cannot point at one row, they have a brand, not a comparable Copilot.

## Write the irreversible line before connecting the source for the tenant-agent choice

Each bot gets its own screen. The screen is a work surface. xAI's docs tell you
not to use separate bots as a security boundary. Browser cookies, signed-in
sessions, files, and command-line credentials are shared. Deleting a bot deletes
that bot and its routines. It does not remove shared-computer files or browser
sessions. Hosted MCP sign-in tokens stay with Cursor's backend, not on the
computer.

## Separate evidence collection from the decision it informs for the tenant-agent choice

Feature checklists go stale when Microsoft renames a surface. The question that
survives is where the work has to live for the job to finish.

If the artefact already sits in a Microsoft tenant (mail in Outlook, files in
SharePoint, meetings in Teams), the matching help is the Copilot object allowed
to read that graph, assuming your tenant actually has it. Confirm the SKU on
Microsoft's pages before you assume the graph is in play.

If the artefact sits behind a login on a site with no API, and the job has to
continue after the laptop closes, the matching help is a persistent cloud
computer with a browser. That is Grok Bot's shape, and its blast radius: every
other bot on the account can see the same session.

| Where the work already lives | Matching object | Why this is the axis |
|---|---|---|
| Outlook, Teams, Word, Excel, SharePoint in a Microsoft tenant | Copilot in Microsoft 365, if the license is real | Workplace graph. Confirm on Microsoft. |
| Custom agent published into Teams with Graph grounding | Copilot Studio, confirm live | Builder inside the tenancy, not an xAI roster |
| Code in a supported editor | GitHub Copilot, confirm live | Editor product. Wrong comparison for a teammate. |
| Help on this Windows PC | Windows Copilot, confirm live | Local OS help is not a cloud computer |
| Overnight research on a site with no API, laptop shut | Grok Bot | Persistent cloud computer that outlasts the lid |
| Two workers who must not share an Outlook session | Not two Grok Bots on one account | Screens are not isolation. Split accounts, or stay in the tenant. |

Naming a second Grok Bot does not create a second tenancy. This is also not the
Claude Cowork comparison. Cowork, as public writeups describe it, is a desktop
operator on local files. Copilot in Microsoft 365 is help inside a workplace
graph. Different opponent, different machine:
[Grok Bot vs Claude Cowork](/blog/grok-bot-vs-claude-cowork).

## Preserve unknown as an honest output state for the tenant-agent choice

Take a sales lead at a company that already runs Microsoft 365. Calendar in
Outlook, deal chatter in Teams, pipeline notes in a Microsoft file. Tuesday's
job is: leave the meeting, draft a follow-up, and not drop an overnight thread.

If that tenant has Copilot in Microsoft 365, the matching help is inside the
apps the lead already has open. Draft in Outlook. Recap in Teams. Pull context
from the Graph Microsoft currently exposes to that license. Confirm those verbs
on Microsoft's current pages for your SKU.

Grok Bot can still touch that world, but as a second computer. You sign Outlook
into the shared cloud browser, or you connect whatever hosted MCP path is
available that week. Hosted MCP tokens stay with Cursor's backend. A browser
login does not. Once Outlook is a cookie on the Grok Bot computer, every bot on
the account can use that session. A research bot you add on Thursday can open
Friday's mailbox.

Grok Bot wins for this sales lead only if a job the Graph cannot see has to keep
running after the lid closes: a customer portal with no Microsoft connector, a
pricing page that needs a login, a sheet that has to land before 07:00 while the
laptop is in a bag. If the job is "draft the follow-up in the mailbox we already
use," evaluate Copilot in Microsoft 365 first. Staffing
[inbox triage](/bots/inbox-triage) on Grok Bot adds a named bot and a shared
cookie jar outside the tenant. Write never-send before you paste the login.
GitHub Copilot is not this paragraph. Windows Copilot is not this paragraph
unless the question was help on the PC in front of them.

## Rank sources by authority before comparing timestamps for the tenant-agent choice

Now take a founder whose bottleneck is a site with a login and no API: a partner
directory, a grant portal, a supplier catalog. The useful run takes forty
minutes. The laptop closes at 23:00. The research still has to exist at 07:30.

Copilot in Microsoft 365 does not become a persistent cloud browser because the
founder also has a Microsoft account. Confirm on Microsoft's pages whether your
license can sign into an arbitrary site overnight and write a ranked file while
the device is off. Do not assume it can. Do not assume Copilot Studio can
either, unless Microsoft's current Studio pages say so for the runtime you would
actually use.

GitHub Copilot and Windows Copilot will not run that portal overnight. For a
ChatGPT task surface, see
[Grok Bot vs ChatGPT Work](/blog/grok-bot-vs-chatgpt-work).

Grok Bot is the matching shape: a named [lead scout](/bots/lead-scout) that
researches and ranks, never contacts anyone, never creates an account, and never
uses an Outlook session already in the same browser. Day one is a messy sheet.
Day thirty is dated files and a second bot that can see the portal login if you
added one.

| Moment | Sales lead in Outlook and Teams | Founder on a site with no API |
|---|---|---|
| Where the artefact lives | Microsoft tenant: mail, calendar, Teams | A logged-in site with no Microsoft connector |
| Laptop closed at 23:00 | Tenant apps still exist. Confirm Copilot in M365 live. | PC is asleep. Only a cloud computer keeps clicking. |
| What Grok Bot would add | A second computer and a shared Outlook cookie | A named scout that writes files overnight |
| First object to evaluate | Copilot in Microsoft 365 on Microsoft's pages | Grok Bot, with the shared-computer warning |
| Day 30 failure | A research bot on the same account opens the mailbox | A second bot uses the scout's portal session |

If you are both people, you can keep both stacks. Do not sign Outlook into the
same Grok Bot computer that holds the portal session unless you accept one blast
radius.

## Paste a charter that can stop without improvising for the tenant-agent choice

Microsoft moves Copilot names, SKUs, and surfaces. Treat every Microsoft
sentence on this page as a pointer. Before you budget, copy plan names, app
lists, and any computer-use or Studio runtime claims from Microsoft's current
pages for the object you named. If a competitor prints a Copilot price next to
Cursor Pro+ at $60 a month, discard the Copilot number and keep the Grok Bot
number only if you re-check
[the Grok Bot FAQ](https://docs.x.ai/grok-bot/faq).

Grok Bot facts here were checked on 2026-08-25 against
[the Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) and
[computer and apps](https://docs.x.ai/grok-bot/computer-and-apps). SpaceX
acquired xAI (announced 2 February 2026). SpaceX acquired Anysphere, the company
that makes Cursor (closed 14 August 2026). Do not invert that chain. See
[why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained).

## Walk one named operator through the first complete run for the tenant-agent choice

The expensive mistake in grok bot vs copilot is staffing three Grok Bots,
believing you bought three computers, then signing Outlook into one of them.
Cookies, sessions, files, and CLI credentials are common. A
[mail cleanup assistant](/bots/mail-cleanup-assistant) that may only propose
deletions still sits on the same machine as a [churn watch](/bots/churn-watch)
bot that can open the same browser. Deleting Churn Watch does not sign Mail
Cleanup out.

## Trace the specific failure back to the missing rule for the tenant-agent choice

| Path | Grok Bot included? | Copilot family |
|---|---|---|
| Cursor Hobby (free); Cursor Pro ($20/mo); SuperGrok ($30/mo) | No | Not Copilot SKUs |
| Cursor Pro+ ($60/mo) | Yes. Cheapest paid Grok Bot path. | Still not a Copilot license |
| Cursor Ultra; SuperGrok Plus ($100/mo); SuperGrok Heavy; one-time trial | Yes. Confirm live Cursor and SuperGrok rates. Do not copy an unpublished Heavy price. | Confirm Microsoft separately |
| Cursor Teams Standard ($40/user/mo); Teams Premium ($120/user/mo) | Yes | Confirm Microsoft 365 Copilot on Microsoft's pages |
| Copilot in Microsoft 365, Copilot Studio, GitHub Copilot, Windows Copilot | Not Grok Bot | Confirm every price and SKU on Microsoft's or GitHub's current pages |

A company can pay for GitHub Copilot and Microsoft 365 Copilot and still lack
Grok Bot, or pay for Cursor Pro+ and still lack Copilot in Outlook. Those are
different bills. A grok bot vs copilot grid with one Copilot column is already
wrong: "can it read mail?" is Graph access in a tenant, or a cookie on a shared
Grok Bot computer. Both can be yes. They are not the same yes.

## Route every exception to one accountable person for the tenant-agent choice

Stay in Microsoft when the work is already in the workplace graph and the
compliance story has to stay in the tenant: the sales lead whose mail and Teams
threads are the product, the team that cannot put customer mail on a vendor VM,
the shop whose admins will not approve a second cloud computer with no audit
view, the engineer who actually needed GitHub Copilot in the editor, the person
whose files must not leave this Windows PC.

## Test the boundary with a fixture designed to cross it for the tenant-agent choice

Buy Grok Bot when the job is a standing named role on a computer that stays
awake, and the door is a site or a workflow Microsoft's current Copilot objects
do not cover for you.

That is the founder on the portal with no API. It is a Monday ranking of inbound
leads from public pages plus a CRM tab that is not in Microsoft Graph. It is a
briefing bot that diffs last week's file. It is a routine that fires while you
are on a train, with pause and resume on iPhone (iOS 18+). It is not GitHub
Copilot, and it is not Windows help on a sleeping PC.

Staff few bots. Connect few accounts. Put
[inbox triage](/bots/inbox-triage) and [lead scout](/bots/lead-scout) on the same
account only if they may share sessions. Inbox triage never sends. Lead scout
never contacts. Routines belong to one bot and die with it. See
[Grok Bot scheduling](/blog/grok-bot-scheduling),
[is Grok Bot worth it](/blog/is-grok-bot-worth-it), and
[Grok Bot and Gmail](/blog/grok-bot-gmail). Do not assume a Gmail pattern
transfers to a Microsoft shared mailbox.

## Answer the strongest case for granting more autonomy for the tenant-agent choice

The strongest case against this page is simple: Copilot Studio already lets you
build an agent, ground it on Microsoft Graph, and publish it into Teams, so a
named Grok Bot is a second runtime you do not need.

That case wins when the work is the tenant: the agent must stay inside
Microsoft's compliance boundary, talk to the same SharePoint corpus, and appear
where the company already works. Confirm builder limits, licensing, and
publishing on Microsoft's current Copilot Studio pages. This page will not print
a Studio price or a connector count. It also wins when the buyer wanted GitHub
Copilot and searched grok bot vs copilot by accident. Buy the editor product.

It loses when the job is a login Microsoft does not connectorize and a clock
that continues after the lid closes. A Studio agent is not, by default, a
persistent xAI cloud computer with a shared browser. If Microsoft currently
ships a Studio runtime that drives arbitrary logged-in sites overnight, that
will be on Microsoft's pages. Check. If it is there for your license, Studio may
cover the founder case too. If it is not, the founder still needs the cloud
computer.

It also loses when you needed a roster of named stop lines on one desk, and you
accept that the desk is one security domain. If Studio wins, it should win
because of tenancy, not because you thought each Grok Bot had a VM.

Windows Copilot does not become Studio. GitHub Copilot does not become a portal
scout. Copilot in Microsoft 365 does not become a computer that clicks a site
with no API unless Microsoft's current pages say that for your SKU.

## Verify the result with a check that is allowed to fail for the tenant-agent choice

A charter that pretends the scout has a private machine will use whatever login
is already in the jar, including Outlook if you signed it in for the sales job.
Paste this for the founder case, then replace the brackets. Do not connect a
portal until the stop list is true.

\`\`\`text
IDENTITY
You are Night Portal Scout for [COMPANY]. You research [SITE URL], which has
no public API. You are one named bot on a shared cloud computer assigned to
the user account, not to you. Other bots on this account can see the same
browser cookies, signed-in sessions, files, and CLI credentials. Your screen
is a work surface. It is not isolation. Do not use an Outlook, Teams, or
mailbox session even if one is already signed in.

WHAT YOU OWN
Each night by 07:00 [TIMEZONE], write a ranked research file at
[PATH ON THE SHARED COMPUTER] with:
  Targets reviewed: count
  Changes since yesterday: quoted, with the URL
  Ranked opportunities: [N] rows, each with source URL, one-line stake,
    and a recommended next action for a human
  Blocked: any login wall, captcha, paywall, or missing page, quoted

You do not own: email, LinkedIn, CRM writes, form submits that create an
account, purchases, or outreach of any kind.

WHERE YOU STOP
Never contact a person or a company.
Never send mail, Slack, or a form that notifies anyone.
Never use another bot's mailbox or CRM session.
Never export files off this computer.
Never treat a separate bot as a security boundary.
If a step needs a session you did not need yesterday, stop and ask.
An approval, if one appears, controls a proposed action. It does not undo
work already done.

WHEN UNSURE
If the page could be a login trap, a purchase, or a legal filing, quote it
and stop. If two bots on this account could collide on this site, stop and
name the collision.

OUTPUT
Write only to [PATH]. Do not mail the file. The human copies what they need.
\`\`\`

The boundary is what makes it safe to leave running overnight. Research only.
No outreach. No borrowing the sales lead's Outlook cookie. Put the same
shared-computer paragraph in any mail bot on this account. For a human-facing
pass, use the [Grok Bot safety checklist](/blog/grok-bot-safety-checklist).

## Name the adjacent case this page does not cover for the tenant-agent choice

Do not take a grok bot vs copilot article on trust if you are about to paste an
Outlook login or a portal password.

On the Microsoft side, name the Copilot object in one sentence you could show an
admin: "Copilot in Microsoft 365 on tenant X, license Y, apps Z." Open
Microsoft's current page. If you cannot find the license and the app list, you
do not have a Copilot you can compare. For Studio, publish a harmless agent to a
test Team and confirm it cannot see a SharePoint library you did not grant.

On the Grok Bot side, create two bots. Write a unique file or throwaway login on
bot A's screen, then ask bot B to read it. If bot B can see it, you have one
computer. Delete bot A. If the file and login remain, deletion is not cleanup.
Remove both yourself. Then shut the laptop on the founder job and, separately,
try the sales follow-up inside Outlook with Copilot in Microsoft 365 (confirm
live) and no Grok Bot.

| Symptom | Likely cause | Fix that matches |
|---|---|---|
| You bought GitHub Copilot and still have no overnight scout | Wrong Copilot object | Keep GitHub Copilot for code. Evaluate Grok Bot for the portal. |
| A Grok research bot opened Outlook | Shared cookies on one computer | Do not sign Outlook into that computer, or split accounts |
| Files remain after you deleted a Grok Bot | Deletion is not cleanup | Delete files and sign out yourself |
| Studio agent cannot click the portal with no API | Studio is not Grok Bot's computer unless Microsoft currently says otherwise | Confirm Studio on Microsoft. Otherwise use Grok Bot. |

Add a second Grok Bot only after you can name what it can reach that the first
bot can reach. If the answer is everything, you added a name, not a lock.

**Keep reading:** [What Is a Grok Bot?](/blog/what-is-a-grok-bot), [One Computer, Many Screens](/blog/grok-bot-shared-computer-security), [Grok Bot vs ChatGPT Work](/blog/grok-bot-vs-chatgpt-work).

## Reconcile Dev's case with a four-state ledger before the next run for the tenant-agent choice

A retry is not a recovery plan. Recovery starts by writing down what is known for each unit of work. Give every candidate, deal, message, routine, or account one row. Do not let a clean final total erase a dirty intermediate state. The ledger should survive after the browser tab, plugin response, or recent-history row disappears.

| Observed state | Required action | Control result |
|---|---|---|
| Work centers on governed tenant records | Start the Copilot Studio evaluation | Proceed and retain evidence |
| Work needs a named computer operator | Start the Grok Bot evaluation | Stop automatic progress |
| A team must own lifecycle and channels | Prefer the tenant-agent operating model | Escalate with the gap named |
| A single operator needs private preparation | Prefer the named-teammate operating model | Require explicit human handling |

For Dev, the first pass is intentionally manual. Number the units from 1 through 8, an arbitrary rehearsal size, and attach the source URL or record identifier to each row. Add observed-at time, output path, completion evidence, and reviewer. Eight is not a product limit. It is small enough to compare every row without sampling.

The walked failure matters because the tempting repair is the wrong repair. Dev prototyped browser work in Grok Bot while the approved customer state already lived behind tenant controls. The demo moved fast, but production review rejected the duplicated access path and missing ownership model. The bot should not smooth that gap into a confident sentence. It should state which step completed, which step did not, and which step has an unknown state. That output gives the reviewer something actionable without pretending the missing evidence exists.

Use this charter fragment as the fixed rule for the next rehearsal:

\`\`\`text
OBJECTIVE
Prepare an account-renewal assistant for a Microsoft-centered revenue team.

SOURCES
Use only the identifiers and pages listed in the run manifest.
Record the source and observed-at time for every extracted fact.

OUTPUT
Write one private ledger row per unit.
Allowed states: complete, not-started, blocked, unknown.
Never convert unknown into complete or not-started.

BOUNDARY
Never choose by brand or demo polish. Choose by the system that owns the record and the governance the team must operate.

STOP CONDITIONS
Stop when a required source is absent, a completion receipt is missing,
or the requested action would cross the boundary.
Return the affected identifier, last proved step, missing evidence, and owner.
\`\`\`

Run the rehearsal twice. In run one, provide complete evidence for all eight units and confirm the output shape. In run two, remove one required field from unit 3, introduce a contradictory source for unit 5, and remove completion evidence from unit 7. A passing bot returns three different exceptions. A failing bot forces all three into the same successful state.

The review is also specific. Compare the eight input identifiers with the eight output rows. Open two cited sources at random, then inspect all three planted exceptions. Confirm that the bot did not create an extra row, hide a missing value, or cross the boundary. Record pass or fail beside each check. A sentence saying the run looked good is not evidence.

After the rehearsal, choose one of three outcomes. Promote the routine only if every planted exception stayed visible. Revise the charter if the wrong source won or the stop condition was vague. Retire the workflow if the human must reconstruct most rows anyway. That last answer is legitimate. Automation that moves the review burden into detective work has not removed work.

## Frequently Asked Questions

### Is Microsoft Copilot one product I can line up against Grok Bot?

No. Copilot is a family name. Copilot in Microsoft 365, Copilot Studio, GitHub
Copilot, and Windows Copilot are different objects, and Microsoft may list more
on the day you read this. Confirm the specific product, plan, and capabilities
on Microsoft's current pages before you compare anything to Grok Bot. Grok Bot
is one object: named bots on one persistent cloud computer assigned to your
user account. A grok bot vs copilot grid with a single Copilot column is already
the wrong shape, even if every cell looks tidy.

### Does each Grok Bot get its own cloud computer or VM?

No. Every bot on the account shares one persistent cloud computer assigned to
the user, not to a bot. Each bot gets a screen on that machine. Screens are
work surfaces, not security boundaries. Browser cookies, signed-in sessions,
files, and command-line credentials are shared. Deleting a bot removes the bot
and its routines, not the files or browser sessions. xAI's docs tell you not to
use separate bots as a security boundary. Roundups that describe a private VM
per bot are describing a product that is not this one.

### Should a sales team that lives in Outlook and Teams switch to Grok Bot?

Evaluate Copilot in Microsoft 365 first if the mail, calendar, and Teams threads
already live in the tenant. Confirm the license and the apps on Microsoft's
current pages. Grok Bot is a second computer outside that tenancy, with a shared
cookie jar for every bot on the account. Switch, or add Grok Bot, only when a
job the Graph cannot see has to keep running after the laptop closes, such as
research on a site with no API. Write a never-send boundary before any mailbox
login. Do not treat GitHub Copilot or Windows Copilot as the Outlook answer.

### Can GitHub Copilot or Copilot Studio replace Grok Bot for overnight portal research?

GitHub Copilot is a coding assistant in supported editors. Confirm it on
GitHub's current pages. It does not replace a named bot that clicks a site with
no API while the laptop is shut. Copilot Studio is a builder inside Microsoft's
ecosystem. Confirm on Microsoft's current Studio pages whether your license
includes a runtime that can sign into arbitrary sites overnight. If it does not,
the matching object for that founder job is Grok Bot on one shared cloud
computer, with a charter that forbids outreach and forbids borrowing other bots'
sessions.
`,
};
