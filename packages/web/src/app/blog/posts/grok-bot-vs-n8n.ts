import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot vs n8n: Self-Hosted Automation Compared',
  description:
    'Grok bot vs n8n on the axes that decide it: data residency, cost at volume, and what fair-code licensing really permits before you self-host anything.',
  date: '2026-08-25',
  category: 'Comparison',
  content: `
# Grok Bot vs n8n: Self-Hosted Automation Compared

If your legal team has a view about where customer data physically sits, this
comparison is already over and n8n wins. Everything else is a distant second
consideration, so start there rather than with feature lists.

n8n prices, licence terms and features below were read on n8n's own pages and
repository on **2026-08-25**. Check
[n8n.io/pricing](https://n8n.io/pricing/), the
[LICENSE.md in the n8n repository](https://github.com/n8n-io/n8n/blob/master/LICENSE.md)
and [docs.n8n.io](https://docs.n8n.io/) before you make a licensing or budget
decision, because both change. Grok Bot facts come from
[docs.x.ai](https://docs.x.ai/grok-bot/faq).

Our position, stated so you can discount it: botskills.sh is a directory of bot
setups, not a runtime. We do not host anything for you and we do not sell an
automation platform, so we have no reason to talk you out of self-hosting.

## Where the software runs is the whole comparison

n8n can run entirely on infrastructure you control. Its repository describes it
as "Self-Hostable: Deploy anywhere", and the Community edition is free and
covers, in n8n's words, "almost the complete feature set of n8n". That means the
workflow engine, the credentials, the execution data and the logs can all live
inside your own network, on your own disks, under your own backup policy.

Grok Bot cannot. It runs on a managed Linux VM operated for you, and that
placement is not configurable. The Grok Bot documentation is explicit that the
computer "is assigned to your user account, not an individual Bot", that all
your Bots share it, and that browser cookies, signed-in sessions, files and
command-line credentials are shared across them. It also notes static egress IPs
and that some services flag datacenter IP addresses. There is no Linux desktop
client at all: the docs answer "Is there a Linux desktop app? No."

So if your requirement is a sentence like "this data does not leave our VPC" or
"the automation host must sit in the EU under our own contract", n8n is the
answer and no amount of agent capability changes that. Say it once, plainly, and
move on to the cases where the comparison is actually interesting.

## n8n is fair-code, and that is not open source

This is the single most commonly misstated fact about n8n, and it can cost you a
contract if you get it wrong.

n8n's README describes the project as "fair-code distributed under the
Sustainable Use License" and the "n8n Enterprise License". It lists "Source
Available: Always visible source code" as an attribute. The phrase "open source"
does not appear in the README body, and that is deliberate rather than an
oversight.

Source available is not the same as open source in the OSI sense. Being able to
read the code, run it, and modify it for yourself is not the same as being free
to do anything you like with it commercially. The distinction only matters when
your plans involve other people's use of the software, which is exactly when
someone notices.

## Read the three clauses that decide whether you may resell it

The licence text is short enough to read yourself, and you should. The
[LICENSE.md](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) names it the
Sustainable Use License, Version 1.0, and the limitations section contains these
clauses verbatim:

- "You may use or modify the software only for your own internal business purposes or for non-commercial or personal use."
- "You may distribute the software or provide it to others only if you do so free of charge for non-commercial purposes."
- "You may not alter, remove, or obscure any licensing, copyright, or other notices of the licensor in the software."

Translated into decisions you might actually be making: running n8n internally to
automate your own company's work is squarely permitted, and that covers the
overwhelming majority of readers. Reselling access to your n8n instance, running
it as a service for clients, or white-labelling it into your own product is not
what that first clause describes, and you should get legal advice rather than an
article's opinion before you build a business on it.

Two more details from the same file that people miss. Files with ".ee." in the
filename or ".ee" in the directory name are explicitly not licensed under the
Sustainable Use License and require a valid n8n Enterprise License. And branches
other than master "are not licensed", so pulling from a feature branch is not
covered. There is also a termination clause with a 30 day cure window.

None of this makes n8n a worse choice. It makes it a choice with a shape, and
knowing the shape before you commit is the difference between a good decision
and an awkward conversation eighteen months in.

## Count executions, not steps, when you model the bill

n8n's cloud pricing is metered on whole workflow runs. The pricing page states
"Pricing based on monthly workflow executions, regardless of complexity" and
frames it as "Pay for full executions, not for each step", defining an execution
as a single run of your entire workflow.

The plans listed on 2026-08-25 were Starter at 20 euros a month billed annually
with 2.5K executions, Pro at 50 euros a month billed annually with 10K
executions, a Business tier at 667 euros a month billed annually with 40K
executions and a self-hosted option, and Enterprise on request. All tiers are
described as including unlimited users, unlimited workflows and every
integration, with a monthly and annual toggle advertising a saving on annual.

That meter is the interesting part. A twenty-node workflow and a two-node
workflow cost the same per run, which is the opposite of a per-action model and
it changes how you design. Long, elaborate workflows are not penalised, so you
consolidate rather than split. It also means the self-hosted Community edition
has a genuinely different economic profile, since your cost becomes the server
and your time rather than a per-run charge at all.

The Community edition trade is real and worth naming. Per
[n8n's community edition documentation](https://docs.n8n.io/deploy/host-n8n/community-edition-features/),
the free self-hosted build omits Custom Variables, Environments, External
secrets, external storage for binary data, Log streaming, Multi-main mode,
Projects, SSO via SAML or LDAP, and Git-based version control, and states that
"Only the instance owner and the user who creates them can access workflows and
credentials". Registering an email unlocks a free licence key adding Folders,
Debug in editor and Custom execution data. Business and Enterprise self-hosting
require a paid licence key that, per the pricing page, "must ping our license
server daily to stay active", which is a detail worth knowing if your network is
genuinely air-gapped.

## Do the arithmetic on the published tiers before you argue about features

An execution meter is easy to compare badly, because the headline price and the
included volume do not move together. Every figure below was read on
[n8n.io/pricing](https://n8n.io/pricing/) on 2026-08-25 at annual billing, and
the per-thousand column is those two numbers divided.

| Plan | Price, billed annually | Executions | Cost per 1,000 | Concurrent runs | Where it runs |
|---|---|---|---|---|---|
| Starter | 20 euros a month | 2.5K | about 8 euros | 5 | n8n cloud |
| Pro | 50 euros a month | 10K | about 5 euros | 20 | n8n cloud |
| Business | 667 euros a month | 40K | about 16.70 euros | scaling options | self-hosted |
| Enterprise | on request | custom | not published | 200 or more | either |
| Community | no licence fee | your hardware's limit | a server plus your time | your hardware | your own infrastructure |

The fourth column is the one worth staring at. Pro is the cheapest per execution
on the list, and Business costs more than three times as much per execution as
Pro does. That is not a pricing mistake, it is a signal about what Business is
for: the same page lists it with SSO via SAML and LDAP, environments, Git
version control and six shared projects. You buy it for governance and
self-hosting, not for volume. Overage is sold separately and quoted on that page
as 4,000 euros for extra buckets of 300,000 executions, which lands cheaper per
execution than the Business headline and still dearer than Pro.

Two smaller numbers decide more than they look like they should. Log retention
is 7 days on Starter and 30 on Pro, so at the bottom of the range your incident
history is shorter than your billing cycle. And concurrency, 5 on Starter and 20
on Pro, decides whether a burst of webhook traffic queues or fails, which is a
different question from whether you can afford the executions.

## Grok Bot's computer is not yours and cannot be moved

The honest counterpart section. Grok Bot's hosting model is fixed and its
documented properties are these.

All your Bots share one persistent cloud computer, a managed Linux VM on which
the Bot runs as a non-root user. Each Bot gets its own screen on that shared
machine, and the documentation is unusually direct about what that does and does
not mean: "The screens are separate work surfaces, not separate security
boundaries", and "Do not use separate Bots as a security boundary." Deleting a
Bot does not remove shared-computer files or browser sessions.

Two further constraints that a self-hosting reader will care about. An audit
view of Bot actions does not exist yet, which is a meaningful gap if you are
used to reading n8n's execution history. And there is no Grok Bot specific spend
cap yet, so the runtime imposes no ceiling of its own. A team-level ceiling on
local execution with Never, Ask every time and Always settings is documented as
coming, described so that "members can choose a stricter option, but not a
looser one", along with an admin Kill that deletes the VM while keeping durable
storage. Neither has shipped, so plan as though they do not exist.

What you get in exchange is reach that no self-hosted workflow engine has: a
real desktop with a browser and a shell, on macOS, Windows and iPhone running
iOS 18 or later, able to operate any tool a person can operate. There is no
Android or iPad client. Our writeup on
[what sharing one computer actually means](/blog/grok-bot-shared-computer-security)
covers how to design around the shared-credential model rather than against it.

## Match a self-hosting symptom to the constraint that caused it

Most self-hosting regret is not a bug, it is a documented edition limit meeting
a month-four requirement. These are the ones that actually arrive.

| Symptom | The constraint behind it | What to do about it |
|---|---|---|
| A colleague cannot open the workflow you built | Per n8n's community edition docs, sharing is withheld and "Only the instance owner and the user who creates them can access workflows and credentials" | Accept one operator per instance, or pay for the tier that adds sharing and projects |
| Everyone signs in separately and nobody can revoke centrally | SSO via SAML and LDAP sits on self-hosted Business and Enterprise | Budget for Business, or keep the instance behind access you already control |
| A workflow promoted from staging points at the wrong credential | Environments are not in the Community edition | Promote by export and hand edit, deliberately and slowly, or pay for environments |
| You cannot diff a workflow or roll one back | Git version control is a paid feature | Export the workflow JSON into your own repository on a schedule and diff it there |
| Paid features stopped working on an isolated network | Business and Enterprise keys "must ping our license server daily to stay active" | Allow that one egress path, or drop back to Community and design around it |
| The quota drained faster than one instance explains | A key may be applied to unlimited instances, and combined usage from all of them counts toward the quota | Track which instances carry the key before you buy more capacity |
| You cannot reconstruct what a Grok Bot did last Tuesday | An audit view of Bot actions does not exist yet | Make the bot write its own run log, and keep the boundary tight enough that the log suffices |
| A routine's history is thinner than you planned around | The app keeps the 20 most recent run records per routine, and deleting a Bot deletes its routines | Export what you need on a schedule, and never treat the app as the archive |

The first row ends honeymoons, so it gets its own section.

## The second person on the team is where the Community edition bites

Run through the shape of it, because it is predictable and it always arrives at
the same moment. You self-host, everything works, and the instance is genuinely
yours. Month four, somebody else needs to touch a workflow.

Per [n8n's community edition documentation](https://docs.n8n.io/deploy/host-n8n/community-edition-features/),
sharing of workflows and credentials is one of the withheld capabilities, and
the page states that only the instance owner and the user who creates them can
access workflows and credentials. So your second person has three options: share
one login, which recreates exactly the shared-identity problem that self-hosting
was supposed to fix, build in a silo nobody else can maintain, or you pay.
Registering an email unlocks a free licence key that adds Folders, Debug in
editor and Custom execution data, which is useful and is not sharing.

Grok Bot has the same shape from the other end. Routines live on a single Bot,
nothing is team-level, and deleting a Bot deletes its routines. Both products
are one-operator by default, and neither says so on the front page. Decide which
kind of second-person problem you would rather have before you commit, because
the migration out of either one lands in the same quarter as your first real
handover.

## Compare the two across ten axes that actually decide it

| Criterion | n8n | Grok Bot |
|---|---|---|
| Where the software runs | Your servers, or n8n's cloud, your choice | A managed VM you cannot relocate |
| Data residency | Fully under your control when self-hosted | Not configurable |
| Licence | Sustainable Use License, fair-code, source available | Proprietary, bundled with a subscription |
| Commercial resale | Not permitted under the Sustainable Use License | Not applicable, it is a hosted product |
| Cost shape | Executions on cloud, server plus time when self-hosted | Weekly allowance, then on-demand overflow |
| Cost ceiling | Your plan, or your hardware | "There is no Grok Bot-specific spend cap yet" |
| Who authors the path | You, as nodes on a canvas | The bot, per run |
| Tools with no API | Only reachable if you write a node | Driveable through the browser like a person |
| Run history | Full execution log per run | 20 most recent run records per routine |
| Extensibility | Custom nodes, JavaScript and Python in-workflow | Charters, teach-by-demonstration drafts |

The extensibility row is where a self-hosting reader usually lands. n8n lets you
write a node, run arbitrary code inside a workflow, and version the whole thing
in Git on the paid tiers. That is a different kind of control from writing a
better charter, and if your team can write code, it is a strong argument.

## n8n has agent nodes, so the axis is not agent versus no agent

Treating n8n as the purely deterministic option would be out of date. Its
repository headline positions it as "The Platform for AI Agents and Workflow
Automation".

The [AI Agent node documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)
says "The AI Agent node lets you build an AI agent in n8n" and describes the
setup as: "Connect a chat model and one or more tools, and the agent decides
which tools to call to complete a task." At least one tool sub-node is required.
The node identifier is n8n-nodes-langchain.agent, and n8n notes that the agent
type setting is deprecated from version 1.82.0 with all agents now behaving as a
Tools Agent, and the older v1 node is slated for removal in n8n 3.0.

That gives n8n something Grok Bot does not have: a deciding node sitting inside a
graph you drew, with deterministic nodes before and after it, and a model you
choose. n8n's README explicitly advertises connecting to different providers and
swapping them without rearchitecting. Grok Bot is the opposite by design. Its
documentation states, verbatim, "Grok Bot has no model picker, for members or
admins. We do not plan to allow admin or user choice", with a fixed model set per
surface and automatic failover. If model portability is part of your risk
register, that is a decisive line.

Where Grok Bot still differs is the environment. An n8n agent node calls tools
you wired up. A Grok Bot has a whole computer, which is why it can log into a
supplier portal that has no API and click through it.

## The pattern that uses both: n8n owns the data, the bot owns the UI

The composition here is the cleanest of the three, because the split follows the
residency line exactly.

Keep everything that touches regulated data inside your self-hosted n8n
instance. Let n8n do the fetching, the joining, the writing and the storing. Send
the bot only the narrow slice that needs a real browser or a real judgment, with
identifiers redacted, and take back a fixed structure. n8n's
[Webhook node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)
handles both directions: it "can receive data from apps and services when an
event occurs" and supports responding via the Respond to Webhook node, so the
round trip is a normal part of the workflow rather than a bolt-on.

Concretely, for a compliance evidence check: n8n pulls the control list from your
internal system, and for each control that requires a screenshot from a vendor
console with no API, it calls the bot. The bot logs in, navigates, captures the
evidence, and returns a verdict plus a file reference. n8n stores the artefact on
your own storage and updates your own register. Customer data never leaves your
instance, because the bot was only ever sent a control ID and a vendor name.

\`\`\`text
// GROK BOT CHARTER
You are Evidence Collector.

// WHAT YOU OWN
When the n8n workflow sends you a control ID and a vendor console name,
sign in to that console, find the setting named in the request, and
capture what it currently shows. One control per request.

// WHAT YOU RETURN
Exactly one JSON object and nothing else:
{"control_id":"...","state":"pass|fail|not_found",
 "observed":"what the screen literally said",
 "screenshot":"path on the shared computer"}
Report what the screen says, never what it should say. "not_found" is a
valid and useful answer. Do not infer a pass from a related setting.

// WHERE YOU STOP
Never change a setting, toggle, permission or policy in any console.
You are read-only in every tool, without exception.
Never receive, request or write customer records. You get an ID and a
vendor name, nothing more.
If a login has expired or MFA is required, stop and say so. Never try to
work around an authentication step.
\`\`\`

That read-only boundary is doing the real work. Every listing in our directory
declares one action the bot never takes without a human, and read-only is the
strongest version of it. [Codebase Hardening Auditor](/bots/codebase-hardening-auditor)
works only in the repository and never touches production.
[PR Review Sentinel](/bots/pr-review-sentinel) comments and never merges,
approves or pushes. [Persistent Bot Memory](/bots/persistent-bot-memory) never
stores secrets, tokens, passwords or customer data at all. Given that Grok Bot
approvals gate a proposed action and cannot reverse completed work, and that
credentials are shared across your Bots on one machine, a boundary written
before the first run is the only control that actually holds.

One thing I could not verify and therefore left out: I looked for a documented
list of n8n Cloud data residency regions and did not find one at the URL I
expected. If cloud region matters to you, ask n8n directly rather than trusting
any third-party page, including this one.

## The strongest objection is that self-hosting makes you the ops team

The honest case against everything the residency argument implies: self-host and
you own a service. Upgrades, certificates, backups of the credential store and
the execution data, disk for the history, and the restore test that proves the
backup was real. On a paid self-hosted key you also
own an egress path for the licence ping that n8n's pricing page says must happen
daily for the key to stay active. And you are the person paged when a webhook
stops arriving at 02:00.

The objection is right about the cost and wrong about the choice. Where a policy
says customer data does not leave infrastructure you control, the ops work is
not a trade-off, it is the price of the requirement, and the comparison never
gets as far as features.

Where it wins outright is the case nobody enjoys admitting to: one operator, no
residency requirement, modest volume. There a cloud tier or a hosted bot costs
less than your own weekend, and self-hosting is a preference wearing a policy's
clothes. Our writeup on
[open source bot runtimes](/blog/open-source-bot-runtimes) works through the
same trade for the runtimes themselves, and
[the Rakazo self-hosting guide](/blog/rakazo-self-hosting-guide) covers what
running one actually asks of you.

## Choose on residency, volume, and who runs the box

Read this as a ladder rather than a scorecard, and stop at the first row that
applies to you.

| Ask this, in order | If yes | If no |
|---|---|---|
| Must the data stay on infrastructure you control | Self-hosted n8n, and everything else here is detail | Continue |
| Does the work need a tool with no API and no node, driven the way a person drives it | Grok Bot, or the two composed | n8n alone |
| Will somebody own upgrades, backups and restore tests next quarter | Self-hosting is a real option | n8n cloud, or Grok Bot |
| Is your volume past what a cloud tier covers comfortably | Self-host, and convert a variable bill into a server | Either, on price alone |

Choose n8n when data residency is a requirement rather than a preference, when
you want the execution history and the credentials on hardware you control, and
when someone on the team is comfortable running a service. Choose it when your
volume is high enough that a per-run or per-action meter starts to hurt, because
self-hosting converts a variable bill into a fixed one. Choose it when you want
to pick your own model, or write a custom node, or put the whole thing in Git.

Choose Grok Bot when the work requires operating tools that have no API and no
node, when the input is unstructured enough that a graph is the wrong shape, and
when you have nobody to run a server and no appetite to acquire one. Accept in
exchange that the machine is not yours, the model is not yours to pick, the
audit view is not there yet, and the spend has no product-level ceiling.

Choose both when your data must stay put but the work reaches outside it, which
is a very common shape and the one the pattern above is built for. And note the
entry cost before you plan: n8n's Community edition is free forever on your own
hardware, while Grok Bot needs an eligible subscription, currently Cursor Pro+ at
$60 a month as the cheapest paid route per
[cursor.com/pricing](https://cursor.com/pricing). If you are weighing this as a
solo operator, our
[one person company writeup](/blog/one-person-company-grok-bot) works through the
same trade with real jobs attached.

**Keep reading:** [Where to Find Grok Bot Setups](/blog/botdirectory-alternatives), [Grok Bot vs Make](/blog/grok-bot-vs-make), [Grok Bot Alternatives Compared](/blog/grok-bot-vs-openclaw-vs-hermes-vs-buzz).

This sits inside a wider guide: [The Complete Guide to AI Bots That Do Real Work](/blog/ai-bots-complete-guide) covers the whole territory.

This sits inside a wider guide: [Every AI Agent Platform Compared](/blog/ai-agent-platforms-compared) covers the whole territory.

This sits inside a wider guide: [Self-Hosting AI Agents](/blog/self-hosting-ai-agents-guide) covers the whole territory.

## Frequently Asked Questions

### Is n8n open source?

No, and n8n does not claim to be. Its README describes the project as fair-code
distributed under the Sustainable Use License and the n8n Enterprise License, and
lists Source Available as an attribute. The phrase open source does not appear
in the README body. The practical difference is that you can read, run and
modify the code, but the licence limits use to your own internal business
purposes or non-commercial and personal use, and permits distribution to others
only free of charge for non-commercial purposes.

### Can I self-host Grok Bot for data residency?

No. Grok Bot runs on a managed Linux VM operated for you, and the location is not
configurable. The documentation states the computer is assigned to your user
account rather than to an individual Bot, that all your Bots share it along with
browser cookies and signed-in sessions, and that there is no Linux desktop
client. If a policy requires that data stays inside infrastructure you control,
self-hosted n8n meets that requirement and Grok Bot cannot, regardless of how the
rest of the comparison looks on capability.

### Does n8n have AI agents like Grok Bot?

It has agent nodes, which is related but not identical. n8n's AI Agent node lets
you connect a chat model and one or more tool sub-nodes, and the agent decides
which tools to call to complete a task, sitting inside a workflow you drew. You
pick the model, and n8n advertises swapping providers without rearchitecting.
Grok Bot has no model picker for members or admins, per its documentation, but it
operates a whole computer rather than a wired set of tools, so it can drive
interfaces that have no node at all.

### Which costs less at high volume, n8n or Grok Bot?

Self-hosted n8n almost certainly, because self-hosting converts a per-run bill
into the fixed cost of a server plus your time, and the Community edition carries
no licence fee. n8n's cloud plans meter whole workflow executions regardless of
step count, which also favours consolidated workflows at scale. Grok Bot bundles
a weekly allowance with an eligible subscription and bills overflow on demand,
and its documentation states there is no product-level spend cap yet, so the
ceiling at volume is one you have to impose yourself.
`,
};
