import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Admin Controls: The Switches to Set Before You Roll Out',
  description:
    'Every Grok Bot admin control on the Cursor dashboard in the order to set it, with its default and whether Teams or only Enterprise gets it, plus a baseline checklist.',
  date: '2026-09-23',
  category: 'Reference',
  content: `
# Grok Bot Admin Controls: The Switches to Set Before You Roll Out

The defaults on the Grok Bot admin page favor getting people started over passing a security review. Cloud Agent delegation starts on. Local execution is left to each member. On Enterprise, the actions Bots take are not recorded until you turn Action Recording on, and a team that never sets a network policy can reach any destination. On self-serve Teams the situation is starker still: every member has Grok Bot the moment the plan does, and there is no switch that turns it off.

This page lists every control an admin can set for Grok Bot, in the order to set them, with the default each one ships with and whether self-serve Teams gets it or only Enterprise does. It is built from the Grok Bot docs as of 23 September 2026, mainly the [teams and enterprises page](https://docs.x.ai/grok-bot/teams-and-enterprises) and the [security page](https://docs.x.ai/grok-bot/security). Where those pages are silent, this page says so instead of guessing.

## Check which version of the admin page you are looking at

Admins reach the controls on the Grok Bot page of the Cursor dashboard, at cursor.com/dashboard/bot. Members never see it. What the top card shows depends on your plan, and reading it correctly tells you whether you are planning a rollout or catching up with one that already happened.

| You are on | What the Grok Bot card shows | Can you turn Grok Bot off? | Who has access right now |
|---|---|---|---|
| Self-serve Teams | A status line saying Grok Bot is enabled for your team | No switch exists | Every member |
| Enterprise, never set up | Set Up Grok Bot, with an Open Docs link | Not on yet | Nobody |
| Enterprise, after setup | Enable Grok Bot for your team, with Manage Group Access beside it | Yes, through a Disable Grok Bot confirmation | All members, or the groups you chose |
| Any team on Privacy Mode (Legacy), or Teams on a legacy request-based plan | Grok Bot stays off | Not applicable | Nobody |

On self-serve Teams, Grok Bot arrives switched on and every member can use it without any admin action. The only things that keep it off are Privacy Mode (Legacy) and a legacy request-based plan. If neither applies, your members already have standing Bots, and the rest of this page is a list of what to tighten now rather than what to set first.

On Enterprise, the card for a team that has not been set up yet shows a Set Up Grok Bot prompt instead. There it opens a setup modal that walks through privacy mode, pricing and model availability. After setup the card becomes the organization-wide switch; turning it off asks for confirmation, then cuts off every member while leaving their computers in place. The FAQ also says Enterprise access is still rolling out, so a missing card on an Enterprise contract is an enablement question for your Cursor account team. [What the Grok Bot enterprise waitlist actually means](/blog/grok-bot-enterprise-waitlist) covers that conversation.

## Follow Marguerite from a Tuesday request to a Thursday pilot

Marguerite is the organization admin for a 260-person freight brokerage on Cursor Enterprise. At 9:40 on a Tuesday the chief operating officer asks her to give Grok Bot to the 14 people in carrier operations by Thursday morning. At 9:55 she opens the Grok Bot page and sees Set Up Grok Bot. The setup modal stops her almost immediately: the team is still on Privacy Mode (Legacy), which blocks Grok Bot entirely, and the docs say you are prompted to change it before you can enable anything.

She does not flip anything else that morning. She opens a rollout ticket and splits it into three days. Tuesday covers the four blockers that live outside the Grok Bot page. Wednesday covers the policies that bind the moment a member signs in: plugins, network, local execution, delegation, sharing, rules, review and recording. Thursday at 8:00 she enables Grok Bot for a single directory group and nothing else.

The one surprise arrives on Thursday at 8:40. Eleven of the fourteen are already chatting with their first Bots. Three, all working from home, report that the Bot answers messages but its computer never finishes setting up. The office Zscaler profile exempted the Cursor computer hostnames from inspection. The off-network profile did not. The security FAQ describes this exact failure: a TLS-inspecting gateway lets the API through, inspects the nested computer hostname, and the computer link fails whether or not chat keeps working. She adds both wildcard patterns to the off-network profile, exempts them from inspection, and the three computers come up before 9:30.

Everything else on the ticket went in on schedule, and the rest of this page is that ticket written out for any admin, with the Teams and Enterprise differences marked at every step.

## Clear the four blockers that sit outside the Grok Bot page

Four things block or break a rollout before any Grok Bot switch matters, and none of them is on the Grok Bot page. The docs list them under the heading about getting ready to roll out. Clear them first, because each one fails in a way that looks like a product bug to the member who hits it.

Privacy Mode (Legacy) is the hard stop. Grok Bot needs cloud data storage, so that setting blocks it outright, and it also forces Action Recording off. Check the privacy setting in Team Settings before anything else.

Shared egress is a planning item rather than a blocker. Hosted computers reach the internet through static egress addresses that are shared across Grok Bot customers, and dedicated addresses per customer are not available. If any of your services restrict access by source IP, allowlisting those ranges admits Grok Bot traffic in general, not your team alone. Your account team supplies the current ranges.

TLS-inspecting proxies break the computer link, as Marguerite found. Allow Cursor's domains, including \`*.cursorvm.com\` and the nested \`*.*.cursorvm.com\`, exempt them from inspection, and make the same change on every gateway profile, the off-network one included.

Identity is the last one, and it has two parts. Grok Bot uses the Cursor account and your existing Cursor SSO, so the fix is to widen assignment on the Cursor app you already have rather than creating a new one. The Bot's computer runs Linux without device-trust agents, so rules that demand a managed device fail inside its browser.

| Blocker | What breaks if you skip it | Where you fix it |
|---|---|---|
| Privacy Mode (Legacy) | Grok Bot cannot be enabled at all, and recording stays off | Team Settings, privacy setting |
| Source-IP restrictions on your services | Bots are refused by your own tools | Allowlist the shared ranges from your account team, or route traffic another way |
| TLS-inspecting gateway | Computer setup hangs, even when chat still answers | Allow and exempt the cursorvm.com patterns on every profile |
| Cursor app assigned only to engineering | Non-engineers see an error saying they are not assigned to the application | Widen assignment on your existing Cursor SSO app, and the SCIM app if you use one |
| Device-trust rules on company apps | The Bot's browser cannot sign in to apps behind managed-device policies | A higher-priority rule scoped to the group and the Linux platform |

The identity guide is specific about that last row. In Okta the computer matches the Other Desktop platform, and the rule should ask for a password and a second factor that can be completed from a remote browser. In Entra ID you add a policy for Linux that requires multifactor authentication and leave your compliant-device policies in place for laptops. Neither change affects Grok Bot sign-in itself or plugin sign-in, because plugin authentication never goes through the computer.

## Read the whole page in rollout order, with defaults and plans

The order below follows one rule. Anything that decides what a Bot can reach or do goes on before the first member signs in. Anything that records evidence goes on before the first real task. The enable switch goes last, because on Enterprise it is the only control that holds people back while you work.

| Step | Control | Where it lives | Default | Plan |
|---|---|---|---|---|
| 1 | SCIM provisioning | Your identity provider | Your SSO setup carries over | Enterprise only |
| 2 | Connector policy | Team Marketplace on the dashboard Plugins page | No default list is documented | Teams and Enterprise; MCP allowlist Enterprise only |
| 3 | Network Controls | Grok Bot page, Network section | No Policy (Allow All) | Enterprise only |
| 4 | Execution on Local Computer | Grok Bot page | Always allow, which defers to each member | Teams and Enterprise |
| 5 | Allow Local Egress | Grok Bot page | On | Enterprise only |
| 6 | Cloud Agents | Grok Bot page | On, team-wide | Teams and Enterprise |
| 7 | Public template sharing | Grok Bot page | Off on Enterprise, allowed on other teams | Teams and Enterprise |
| 8 | Team Rules | Grok Bot page | You add them | Teams and Enterprise |
| 9 | Enforce Auto-review | Grok Bot page | Off | Enterprise only |
| 10 | Team Auto-review rules | Grok Bot page, Configure Rules | You add them; they apply only while enforcement is on | Enterprise only |
| 11 | Team Setup | Grok Bot page | You add manifests | Enterprise only |
| 12 | Action Recording | Grok Bot page | Off | Enterprise only |
| 13 | OpenTelemetry Export | Team Settings | Not configured | Enterprise only |
| 14 | Audit logs | Audit Log page, or your SIEM | No switch is described | Enterprise only |
| 15 | Enable Grok Bot and Manage Group Access | Grok Bot page | Set Up Grok Bot until you enable | Enterprise only; on Teams it is always on |
| 16 | Invite Team | Grok Bot page | Not applicable | Teams and Enterprise |
| 17 | Grok Bot Computers | Grok Bot page | Not applicable | Enterprise, organization admins only |

The docs' own recommended baseline starts with Network Controls and tells you to audit the connector policy before enabling Grok Bot, so this order agrees with it and adds the pre-flight work in front. Part of the table can also be driven through the Cursor Admin API, which the docs say reaches the enable switch, group access, capabilities, network policy, Enforce Auto-review, team rules and setup scripts. The docs do not mark the Admin API itself by plan, and the settings it touches keep their own plan limits.

One control you might go looking for is not on this page at all. Model choice is Cursor's, so neither members nor admins get a picker. Enterprise has a team model allowlist, set through Cursor's model access controls, but the security page says enforcement is not guaranteed and that onboarding includes an acknowledgement that Grok Bot might not honor the list. Treat it as configuration you set and then verify, not as a control you can rely on.

## Close the plugin path and the website path as two separate jobs

Grok Bot has no connector list of its own. It inherits your team's Cursor connector policy, which you set from the Team Marketplace on the dashboard Plugins page rather than on the Grok Bot page. Connectors appear to members as plugins. Once a connector is permitted, every one of a member's Bots can use it, and a blocked connector appears in the member's app marked Disabled by team admin. You cannot push connectors to members as mandatory or default-on; the policy only allows or blocks. The MCP allowlist, a further list of permitted server URLs, is Enterprise only.

The connector path has one property worth telling your security reviewers about. The OAuth tokens behind connectors live on Cursor's connector backend, and Bots call the tools without the tokens ever being handed to them, so a connector credential never lands on the member's computer.

Now the catch. A blocked plugin leaves the same service's website reachable. A Bot with a browser can still open the vendor's web app and work through it with whatever session the member signed in with. The connector policy and the network policy are separate layers, and the security page is explicit that closing both paths takes both controls.

Network Controls is the second control, and it is Enterprise only. It appears on the Grok Bot page under Network as Grok Bot Network Access, with four modes: No Policy (Allow All), Allow All Network Access, Defaults + Team Allowlist, and Team Allowlist Only. Destinations can be web domains or IP ranges with ports, and the list has no size limit. Directory groups can carry their own policy, and a lock applies the team policy to everyone. Running computers pick up a change within about a minute and sleeping ones apply it when they wake, with no recreate needed.

Notice what the list of modes does not include: a blocklist. To keep a Bot off one website, you move to an allowlist mode and list every destination the team needs beyond Cursor's defaults. Marguerite chose Defaults + Team Allowlist and spent most of Wednesday afternoon building the list for carrier operations. Also note that restricting egress limits where data can go, but the docs say dedicated data loss prevention hooks are not available. Self-serve Teams cannot set destinations at all and stay on allow-all.

## Cap local execution and desktop egress before the first sign-in

Execution on Local Computer is the control most admins misread, because its team default sounds permissive and is not quite. The team options are Always allow, Ask every time and Never allow. The default, Always allow, means the team imposes nothing and leaves the choice to each member, whose own default is to ask before every task. Ask every time forces an approval on every local task for the whole team. Never allow turns local execution off for everyone. When a member's own setting is stricter than the team's, the member's setting wins.

Local execution is separate from anything that happens on the hosted computer. It lets a Bot run commands on the member's own machine, read files there, and move files between the cloud computer and that machine. Auto Review governs work inside the hosted computer and is a different control. The docs recommend Never allow unless Bots have a specific reason to act on member machines, and that is the setting Marguerite chose for carrier operations, whose work lives in web tools rather than on laptops.

Allow Local Egress is the Enterprise-only switch next to it, and it starts on. It lets members turn on Route egress through this desktop, which sends the Bot computer's web traffic through the member's own machine. Destinations then see that desktop's address, and the Bot can reach any network available from that device, which on a corporate laptop can mean internal systems. Switching it off ends active routes within five minutes, and switching it on again brings back whatever each member had chosen.

The docs do not say how the Grok Bot network policy treats traffic that leaves through a member's desktop. If your network policy is the control you are counting on, set Allow Local Egress deliberately rather than leaving it at its default, and give members who genuinely need private network access the Team Setup route instead, which is described further down.

## Switch off Cloud Agents and public sharing until a named person asks

The Cloud Agents switch decides whether Bots may pass coding tasks to Cursor Cloud Agents. It lives on the Grok Bot page, covers the whole team on both Teams and Enterprise, and starts on. Delegated work runs on separate computers under whatever Cloud Agent controls your team already has, and the security page notes that the Grok Bot network policy is separate from Cloud Agent network settings. The docs' baseline says to disable spawning if your team does not need delegation. For a carrier operations team that writes no code, Marguerite turned it off in one click.

If an engineering group does need it, leave it on for them and put a coordinator in front of the work rather than trusting the Bots to police themselves. [Engineering Agent Manager](/bots/engineering-agent-manager) is built for exactly that: it reports what every coding agent is doing, flags duplicated and stalled work, and its declared boundary is that it never merges, approves or pushes to the default branch. A human lands code.

Public template sharing decides whether members can publish Bot templates outside your team. Switching it off restricts sharing to your own team, and Cursor applies the rule server-side, so even templates that were public before stop being public. The starting position differs by plan: off for Enterprise, allowed for every other team. A shared template exposes a Bot's identity, description, skills and routines, and the docs tell members to strip API keys and internal URLs before sharing for good reason, so leave it off unless someone has a reason to publish outside the company.

## Write Team Rules as a handful of short sentences

Team Rules are the one place a self-serve Teams admin can put company-wide instructions in front of every member's Bots. You add them on the Grok Bot page, and each one gets a scope: Cursor, Grok Bot, or both. A rule that applies to Grok Bot is always required, so members cannot switch it off. Before you write new ones, read the rules you already have and check their scope, because the docs list Team Rules among the policies Grok Bot inherits.

The docs advise keeping them short and few, and give the example of a rule against moving company data to personal accounts. That advice is right for a reason worth spelling out. A Team Rule guides a Bot the way a line in its description does. It steers behavior; it does not stop an action. For approval behavior the docs point you to Auto-review rules, which are a separate control.

That distinction is the same one botskills builds into every listing. Each Bot on this site declares a boundary: the one action it never takes without a human. A Team Rule is the company-wide version of that sentence, and like any sentence in a prompt it shapes what the Bot proposes. The thing that actually halts the action is an approval, which on Enterprise you can make mandatory and on Teams you cannot. So write Team Rules as the four or five sentences you would want every Bot to read on its first day, and put the hard stops in the approval layer.

For carrier operations, Marguerite wrote four rules: keep company data out of personal accounts and personal storage; draft messages to carriers and shippers but never send them without the member's approval; never accept terms of service or sign up for a new vendor; and never change rates, loads or payments in the transport management system. The last three are also on her Auto-review list, because a rule and an approval gate are not the same thing.

## Enforce Auto-review first, then write the rules it will apply

On Enterprise, Enforce Auto-review stops members from turning Auto-review off. It is on the Grok Bot page and it starts off. With it on, every risky action gets checked before it runs, and the Bot stops to ask you whenever the check calls for it. Team Auto-review rules, which you add with Configure Rules on the same page, then layer onto the members' own rules for every one of their Bots, and edits save automatically.

The order between those two controls is the trap. The docs say that turning enforcement off stops the team rules from applying, and that members then fall back to their own rules only. So team rules written while enforcement is off do nothing. Turn enforcement on first, then write the rules, then open a member account and confirm that the team rules appear as locked rows under Settings > General > Auto-review, marked as required by the admin.

Members can add stricter personal rules on top, and when an Ask first rule and an Allow automatically rule both match, Ask first wins. The docs name production deployments, external email, payments and accepting legal terms as good candidates for Ask first, and say to keep automatic rules narrow. Write each rule around a known action and scope, the way the docs' own examples do, and avoid anything as broad as allowing everything in the browser.

Know the limits before you promise anything to a security reviewer. Auto Review looks at shell commands, plugin calls and computer use, at automation writes (edits to routines and event triggers), and at delegation, Cloud Agent launches included. Not every side effect passes through it; the docs name memory writes and most settings changes as examples it does not review. It is model-based, so the docs treat it as one layer beside explicit boundaries and least privilege, and beside controls that involve no model at all: approvals on each action, the network policy, and the isolation between users.

## Decide what evidence the first incident review will need

Someone will eventually ask what a Bot did. Decide now which question you want to be able to answer, because the answers live in different places and most of them are Enterprise only.

| Question you will be asked | Where the answer lives | Plan |
|---|---|---|
| Who created a Bot, who got access, which routines changed | Audit logs, on the Audit Log page or streamed to your SIEM | Enterprise only |
| Which commands, plugin calls and pages a Bot used | Action Recording, exported through OpenTelemetry | Enterprise only, off by default |
| What kind of work people hand to Bots | Conversation Insights, by Type of Work and Level of Automation | Enterprise, where it has rolled out |
| How much Grok Bot cost compared with other Cursor products | The dashboard usage page, split by product | Not marked by plan in the docs |
| What one member's Bot did last week on self-serve Teams | No admin log exists; the member's conversation is the record | Self-serve Teams |

Audit logs record the administrative, security and sign-in activity on your Cursor team, and for Grok Bot they add control-plane events: routines, Slack account links, MCP authentication, Team Setup manifests, changes to a member's access, and a Bot being created. Every row identifies the application that produced it, which is how you narrow the log to Grok Bot.

Action Recording is a separate pipeline, and its events never appear on the Audit Log page. When you turn it on, Cursor records connector tool calls, shell commands with secrets scrubbed, browser navigations kept as the scheme, host and path plus the page title with query strings and credentials stripped, and computer-use sessions as counts of actions and screenshots plus duration, without the screenshots, clicks or typed text. Cursor keeps those events in an internal store for 90 days. The only way to get them into your own tooling is OpenTelemetry Export, configured under Team Settings, which tags each event \`cursor.surface=grok_bot\`. Privacy Mode (Legacy) forces recording off.

The docs describe recording starting when a team turns it on and say nothing about capturing anything from before, so switch it on before the pilot rather than after the first awkward question. If a customer or auditor sends you a questionnaire about this, [how to answer security questionnaires without guessing](/blog/how-to-answer-security-questionnaires) walks through drafting from the evidence you actually have, which here means answering per plan and per pipeline rather than in one confident sentence.

## Flip the enable switch for one group, then send invites

On Enterprise, the organization-wide switch is Enable Grok Bot for your team, and Manage Group Access beside it lets you give access to every member or only to specific groups. Start with one group. Marguerite enabled carrier operations and nobody else, which meant the other 246 people could not stumble into a half-configured product while she watched the first week.

Invite Team works on both plans and covers two cases. People who already hold a Cursor seat on your team receive an email containing the download link. People new to Cursor receive an invitation to join the team, by email or through a link, and it directs them to Grok Bot as well. If SCIM manages your membership, only the first option appears. Members without access can ask for it from inside the app, and where an Enterprise team with pooled usage has not finished setup, members are shown a team-setup message in its place.

Turning Grok Bot off later is not destructive. The Disable Grok Bot confirmation blocks every member, and their computers are kept. That makes the switch a reasonable emergency brake for the whole organization, but it is not a way to remove one person. For that you remove the member from the team or from the enabled group and revoke their sessions in your identity provider.

## Keep Team Setup, Recreate and Terminate for after launch day

Team Setup is an Enterprise-only list of install-script manifests that Cursor runs on each team computer, which keeps tooling identical across the team. Members neither see nor manage it. Scripts run when a computer starts and again on a periodic refresh, which the private networks page puts at roughly daily. Keep secret values out of the scripts, since the docs say they are not a secret store. It is also the documented way to install a networking client such as Tailscale or Cloudflare Tunnel when Bots need private services, and that route is a steadier answer than desktop egress for a whole team.

Grok Bot Computers is the Enterprise control for recreating or terminating many members' computers in one operation. Only organization admins see it. Being a team admin is not sufficient, since a member's single computer serves all of the teams they belong to. Recreate rebuilds each selected computer on the newest image with your current Team Setup applied, and the member's Bots, files and logins survive it. Terminate stops whatever the member is running and keeps the durable disk, so a new computer comes up on that same disk the next time they start a session. Each team can run one operation at a time.

Neither action removes access, which is the point most worth writing into your offboarding runbook. Terminating a leaver's computer stops their running work and nothing else. Removing access takes two steps: take them off the team or switch Grok Bot off for their group, then revoke their sessions in your identity provider, which also ends the application sessions inside their computer.

## Paste the secure baseline into your rollout ticket

The docs close their admin page with a recommended configuration for security-sensitive deployments, split into admin steps and member habits. Here it is rewritten as a checklist you can paste into a ticket, with the plan marked on each admin line so a Teams admin knows which lines to skip.

\`\`\`text
GROK BOT ROLLOUT BASELINE  (checked against the docs 23 Sep 2026)

Admin, before anyone signs in
[ ] Set a Grok Bot network policy; no policy means allow-all   (Enterprise)
[ ] Review the connector policy in Team Marketplace; every
    permitted connector reaches every Bot a member runs         (Teams + Ent)
[ ] Turn on Enforce Auto-review BEFORE writing team rules       (Enterprise)
[ ] Set Execution on Local Computer to Never allow unless Bots
    must act on member machines; the default defers to members  (Teams + Ent)
[ ] Turn off Cloud Agents unless someone needs delegation       (Teams + Ent)
[ ] Keep public template sharing off unless members must
    publish templates outside the company                       (Teams + Ent)
[ ] Add team Ask first rules: production deploys, external
    email, payments, accepting legal terms. Keep automatic
    rules narrow                                                (Enterprise)
[ ] Require managed devices for sign-in in the identity
    provider; this gates sign-in, not the hosted computer       (SSO)

Tell every member
[ ] Never paste a credential into chat; use the masked secret
    request or take over the computer
[ ] Prefer Allow once over Always allow for anything touching
    accounts, money or shared resources
[ ] Sign the Bot's browser into accounts sized to the task and
    out of accounts it no longer needs
[ ] Start new Bots on read-only work and drafts; keep sending,
    publishing, buying, deleting and production changes behind
    approval
[ ] Review installed plugins and active routines regularly, and
    pause a routine when its source system changes
\`\`\`

The member half matters more than it looks on a self-serve Teams plan, where the admin cannot enforce any approval. There, the checklist is the approval layer, and each Bot's description is where its boundary gets written down.

## Answer the admin who says a pilot should run on defaults

Put at its best, the objection runs like this. A pilot exists to learn how people actually use the product. Lock it down and you learn how people use a locked-down product, which tells you nothing about the rollout you will eventually run. Fourteen people, one department, a few weeks: run it on defaults, watch what happens, then tighten.

The objection is right that a pilot should not be so restricted that nobody can do real work. It is wrong about which defaults are safe to revisit later, because several of them cannot be walked back after the fact. Action Recording captures events from the moment it is on, so a pilot run with it off leaves no action record to review when you tighten. Approvals control a proposed action, not work already completed, so an external email sent during the pilot stays sent. Browser sessions and files land on each member's durable disk and survive until someone signs them out and deletes them, whatever you change on the dashboard. And whatever a Bot did through a connector during the pilot is done; blocking the connector later only stops the next call.

The fix is not a restrictive pilot. It is a pilot where the controls that record and gate are on from the first hour, and the controls that shape reach are set to what you expect to keep. Marguerite's carrier operations group could open every tool it needed on day one. What it could not do was send, pay or accept terms without a person pressing a button, and Action Recording was capturing what the Bots did from the first hour.

## Hand self-serve Teams admins the shorter list

If you run a self-serve Teams plan, most of the table above is not yours. Here is what you do have, and what you do not.

| Control | Available on self-serve Teams |
|---|---|
| Connector policy in Team Marketplace | Yes, without the MCP allowlist |
| Execution on Local Computer team cap | Yes |
| Cloud Agents switch | Yes |
| Public template sharing | Yes |
| Team Rules | Yes |
| Invite Team | Yes |
| Enable switch and group access | No; Grok Bot is always on |
| Network Controls, Allow Local Egress, Team Setup | No |
| Enforce Auto-review and team Auto-review rules | No |
| Action Recording, audit logs, OpenTelemetry Export, SCIM | No |

Set the five that shape Bot behavior today, in this order: Never allow on local execution, Cloud Agents off unless someone codes with it, public template sharing off, a review of the connector policy, and three or four Team Rules. Then accept the gap honestly. You cannot restrict network destinations, you cannot force approvals, and you have no audit view of what Bots did. Spend is visible on the dashboard usage page by product, and there is no Grok Bot-specific spend cap; account-level on-demand controls apply, and the plans page says on-demand usage is enabled by default on Teams.

Without an admin log, the inventory of what each Bot may do has to live with the members. A roster Bot such as [Fleet Chief Of Staff](/bots/fleet-chief-of-staff) keeps a TEAM.md listing every Bot's lane and boundary and asks before anything that cannot be undone. On a Teams plan, that file is the nearest thing to an inventory you will get, so ask each member to keep one.

## Know when this page stops applying to your dashboard

Grok Bot is in beta, and parts of the admin story are still rolling out. Every default and plan marker above was checked against the docs as of 23 September 2026. The ones most likely to move are Enterprise access itself, Conversation Insights, the model allowlist's enforcement, and which controls reach self-serve Teams.

If the admin page you are looking at shows a control this page does not list, or a default that differs from the table, the dashboard wins and this page is stale. Re-read the [teams and enterprises page](https://docs.x.ai/grok-bot/teams-and-enterprises) and the [security page](https://docs.x.ai/grok-bot/security) before you copy the baseline into a ticket. For contract questions this page does not cover, such as written residency commitments, egress ranges and subprocessor limits, the docs send you to your Cursor account team, and so does this page.

## Frequently Asked Questions

### Can a self-serve Teams admin turn Grok Bot off?

No. A self-serve Cursor Teams plan turns Grok Bot on automatically, and every member can use it without an admin doing anything. The admin page shows a status line where Enterprise has a switch. Only two conditions keep it off: the team using Privacy Mode (Legacy), or a team still on legacy request-based pricing. The organization-wide Enable Grok Bot switch, with Manage Group Access for limiting it to groups, exists only on Enterprise, where turning it off blocks every member but keeps their computers.

### What is switched on by default on the Grok Bot admin page?

As of 23 September 2026, Cloud Agent delegation is on for the whole team, and Allow Local Egress is on for Enterprise teams. Public template sharing is allowed on self-serve Teams and off on Enterprise. Execution on Local Computer defaults to Always allow at team level, which simply defers to each member, whose own default asks every time. Enforce Auto-review and Action Recording are off, and a team with no network policy defaults to allowing every destination.

### Do team Auto-review rules apply when enforcement is off?

No. Team Auto-review rules are an Enterprise control, and the docs say that turning Enforce Auto-review off stops the team rules from applying, so members fall back to their own personal rules. That is why the order matters: turn enforcement on first, then add rules with Configure Rules on the Grok Bot page. Members then see the team rules as locked rows in their Auto-review settings, can add stricter rules of their own, and Ask first wins whenever rules conflict.

### Can an admin see what Bots did on the team?

On Enterprise, partly. Audit logs record control-plane events such as Bot creation, access changes and routines. Action Recording, which is off by default, records connector calls, scrubbed shell commands, page navigations and computer-use counts for 90 days, and OpenTelemetry Export is the only way to receive those events. Self-serve Teams and individuals get neither. Spend split by product is on the dashboard usage page, but that shows cost, not the individual actions Bots took.
`,
};
