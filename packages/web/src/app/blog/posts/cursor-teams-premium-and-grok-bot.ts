import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot on Cursor Teams: Every Seat Included, No Premium Needed',
  description:
    'Grok Bot on Cursor Teams needs no Premium seat and no admin request: every self-serve member has it. How seat usage, on-demand billing and one computer per person work.',
  date: '2026-09-23',
  category: 'Guide',
  content: `
# Grok Bot on Cursor Teams: Every Seat Included, No Premium Needed

> **What changed on 23 September 2026:** this page used to be a buying guide for Cursor Teams Premium. It treated Grok Bot on Teams as a seat-by-seat purchase built around the Premium seat, weighed Premium against Standard, and quoted per-seat prices from an August check. The Cursor plans page now answers the question that guide was built around: joining a self-serve Teams plan does not require a Premium seat for Grok Bot, every member has access, and nobody has to ask an admin. The page has been rewritten for admins whose job changed from buying access to governing it. It quotes no seat prices; Cursor's Team pricing page is the source for those.

If you run a self-serve Cursor Teams plan, every member already has Grok Bot on their own Cursor account. You did not assign it, you cannot switch it off for them, and on-demand usage is on by default for the plan. That combination is the real admin problem. It is a spending and governance problem, not a seat problem.

Checked on 23 September 2026 against the [Cursor plans page for Grok Bot](https://cursor.com/help/grok-bot/plans), the [teams and enterprises page](https://docs.x.ai/grok-bot/teams-and-enterprises) and the [Grok Bot security FAQ](https://docs.x.ai/grok-bot/security-faq). Grok Bot is in beta, and its plan rules for teams changed between the August and September checks.

## Read the plans page answer before you open a seat request

The plans page asks the exact question this page used to answer the long way: does joining a Cursor Teams plan require a Premium seat for Grok Bot? Its answer is no. On a self-serve Teams plan, every member gets Grok Bot on their Cursor account. Admins do not assign a Premium seat. Members do not request access. Grok Bot usage draws from the Teams allowance for that member's seat, and on-demand usage is enabled by default for the Teams plan.

The teams and enterprises page says the same thing from the admin side. On the Teams plan, Grok Bot is on by default and every member has access with no admin action. The Grok Bot card on the dashboard is a status line reading Grok Bot is enabled for your team, with no switch beside it. The Grok Bot FAQ adds that self-serve Teams Standard and Premium seats both include Grok Bot.

| Your plan | Grok Bot access | Who turns it on | Usage comes from |
|---|---|---|---|
| Self-serve Cursor Teams | Every member | Nobody; on by default | The member's seat allowance, then on-demand (on by default) |
| Cursor Enterprise | All members or chosen groups | An admin, after working with the Cursor account team | The Cursor contract |
| Teams on Privacy Mode (Legacy) | Off | Move off the legacy mode first | Not applicable |
| Legacy request-based Teams plan | Off | Stays off on that plan type | Not applicable |
| Individual Pro, Pro+ or Ultra | The account holder | Included with the plan | The plan's weekly tier |

If a member reports that Grok Bot is missing, the seat type is not the first suspect. The account they signed in with is, then the team's privacy mode, then whether the plan is a legacy request-based one.

## Treat the seat as a usage tier, never as an access key

Seats still matter for Grok Bot, just not for access. The plans page says that on a self-serve Teams plan Grok Bot follows the seat the member is on: a higher seat can raise weekly usage and a lower seat lowers it. For the seat allowances and the on-demand details it sends admins to Cursor's Team pricing page, and so does this page. The Grok Bot docs do not publish how much weekly usage any seat carries.

So the useful question is no longer which members need Premium to use Grok Bot. It is which members run out of weekly usage often enough that a higher seat would cost less than the on-demand usage they generate. That question has an answer only after members have used the product for a few weeks, which is the opposite order from the August buying guide, where the seat came first and the usage evidence came afterwards.

Three seat rules from the plans page are worth knowing before anyone asks.

Removing a member's seat ends their Teams grant. A SuperGrok or X Premium+ link already on that member's Cursor account does not grow to replace it and does not restore the Teams allowance.

A personal link adds nothing on top of a Teams seat. Linking SuperGrok, SuperGrok Plus, SuperGrok Heavy or X Premium+ while already on a self-serve Teams plan does not add usage, so members have no reason to link anything for work.

Request-based Teams plans and Enterprise seats do not take a personal SuperGrok link at all. Those plans keep Grok Bot on the Cursor contract.

## Walk Dev from a stalled Premium request to a closed ticket

Dev administers a self-serve Cursor Teams plan for a nine-person product team. In late August, working from that month's reading, he had drafted a request to move four people to Premium seats so they could use Grok Bot. Finance asked for a justification per seat, and the request sat in a queue.

On Monday morning Lina, a designer on the team, posted a screenshot in the team channel: a Grok Bot conversation in which her Bot had summarized a design review and listed the open decisions. She had not asked anyone for access. Dev assumed a mistake and opened the plans page to prove it. The page said every member of a self-serve Teams plan has Grok Bot, with no Premium seat and no admin request.

He withdrew the upgrade request before ten. Then he read the next line, which mattered more: on-demand usage is enabled by default for the Teams plan. Nine people could run Bots past their weekly allowance without asking anyone, and the Grok Bot card on the dashboard had no switch for turning the product off.

By Tuesday afternoon he had a different plan. He would not buy any seat until he had seen a few weeks of usage. He would review spending by product every Monday. And he would set the controls self-serve Teams actually has before anyone connected a company mailbox.

| When | What Dev did | What he found | What changed |
|---|---|---|---|
| Late August | Drafted a request to move four seats to Premium for Grok Bot | Finance wanted a per-seat case | The request stalled |
| Monday 09:40 | Saw Lina using Grok Bot on her own seat | She had requested nothing | Access was never the bottleneck |
| Monday 09:55 | Read the plans page | No Premium seat, no admin request | Withdrew the upgrade request |
| Monday 10:20 | Read the usage section | On-demand on by default for Teams | Spending became the real question |
| Tuesday 14:00 | Opened the Grok Bot page of the dashboard | A status line, no off switch, five controls | Wrote a rollout checklist |

Dev's mistake was reasonable in August. Keeping it after September would have cost money in two directions at once: seats bought for access that was already included, and on-demand usage that nobody was watching.

## Watch on-demand, because it is on before you look

For an individual, extra usage past the weekly grant happens only if on-demand is enabled, and an individual whose on-demand is off simply stops until the weekly reset. For self-serve Teams, the plans page says on-demand is enabled by default. That changes the failure mode. A Teams member whose seat allowance runs out keeps going, and the extra usage is billed through Cursor.

Three facts shape how you watch it. There is no separate Grok Bot spend cap; the teams and enterprises FAQ says account-level on-demand controls apply instead. The per-product split of spending is on the dashboard usage page at cursor.com/dashboard/usage, and the pricing page says admins can see usage and key metrics in the Admin Dashboard. And the monthly on-demand limit does not cut a run off halfway; a Bot in the middle of a task can finish past it.

The Teams-specific on-demand details are on Cursor's Team pricing page, and this page does not restate them. What you can decide without them is a review rhythm. Dev picked Monday mornings because the team plans its week then; the cadence is his choice, not a product rule. He looks at Grok Bot's share of spending, compares it with the week before, and asks the one or two heaviest users what ran. The first time he asked, the answer was one Bot re-reading a long product spec on a schedule nobody had looked at since it was set.

Members can see their own side. Usage & Billing in Grok Bot Settings shows weekly included usage and on-demand usage for eligible accounts, and if neither appears, the docs tell members to check the Cursor account page or ask their admin. Tell members which of those to expect, so a missing meter does not turn into a support thread. For the arithmetic of what drives usage, [Grok Bot cost](/blog/grok-bot-cost) walks through run frequency, page size and retries.

## Accept that self-serve Teams has no off switch

Some admins read enabled by default and go looking for the toggle. On self-serve Teams there is none. The organization-wide Enable Grok Bot switch, and Manage Group Access beside it, are Enterprise controls. On Teams, the same card says Grok Bot is enabled for your team and stops there.

The teams page lists two situations in which Grok Bot stays off on a team: the team uses Privacy Mode (Legacy), or the team is on a legacy request-based plan. Neither is a control. Legacy Privacy Mode blocks Grok Bot because Grok Bot needs cloud data storage, and choosing a team-wide data setting to block one product would change how the whole team's Cursor data is handled. Do not use either as a switch.

If your organization genuinely needs Grok Bot on for some groups and off for others, that is an Enterprise requirement, and the path runs through the Cursor account team. The FAQ says Enterprise access is rolling out and that availability and admin controls can vary by organization, so ask about your organization specifically rather than reading the docs as a promise.

## Use the five controls a self-serve Teams admin actually has

Self-serve Teams admins get a Grok Bot page on the Cursor dashboard at cursor.com/dashboard/bot. Members never see it. These are the controls that exist on Teams, not only on Enterprise.

| Control | Where it lives | Default on Teams | What Dev chose |
|---|---|---|---|
| Team Rules | Grok Bot page | None until added; rules scoped to Grok Bot are always required | Two short rules |
| Execution on Local Computer | Grok Bot page | Always allow, which leaves it to each member (whose own default asks every time) | Never allow |
| Cloud Agents | Grok Bot page | On, team-wide | Left on, because two engineers delegate coding tasks |
| Public template sharing | Grok Bot page | Allowed | Turned off |
| Connector policy | Plugins page of the dashboard (Team Marketplace) | Inherited from your Cursor policy | Reviewed before rollout |

Team Rules are guidance that every member's Bots follow, and members cannot turn off rules applied to Grok Bot. Keep them few and short. They guide a Bot; they do not create approval stops.

Execution on Local Computer caps what Bots may do on a member's own machine through the desktop app. The docs recommend Never allow unless Bots have a specific reason to work on member machines, and a member's own setting still applies when it is stricter than the team's.

Cloud Agents lets Bots hand coding tasks to Cursor Cloud Agents, which run on separate computers under your existing Cloud Agent controls. The switch covers the whole team, so it is on for everyone or off for everyone.

Public template sharing controls whether members can publish Bot templates outside the team. Cursor enforces it on its servers, including for templates that are already public.

The connector policy comes from your Cursor team's Marketplace settings; there is no separate Grok Bot connector list. A blocked connector shows as Disabled by team admin. Blocking a connector does not block the same service's website in the Bot's browser. Closing that path takes Network Controls, which is Enterprise only.

Admins on either plan also get Invite Team on the Grok Bot page. Existing Cursor users on your team receive an email with a download link; new people receive an invitation to your Cursor team that points them to Grok Bot.

## List what only Enterprise gets, so nobody promises it

Most of the admin controls on the teams and enterprises page are Enterprise only, and the quickest way to lose credibility in a security review is to promise one of them on a Teams plan.

| Control | Self-serve Teams | Enterprise |
|---|---|---|
| Enable Grok Bot switch and Manage Group Access | No; always on | Yes |
| SCIM provisioning and deprovisioning | No | Yes |
| Network Controls (destination allowlists) | No; teams without a policy allow all | Yes |
| Enforce Auto-review and team Auto-review rules | No | Yes |
| Audit logs, including Grok Bot control-plane events | No | Yes |
| Action Recording and OpenTelemetry Export | No | Yes; Action Recording starts off |
| Team Setup, Allow Local Egress, computer management | No | Yes |
| MCP allowlist | No | Yes |

The audit row matters most. Individuals and self-serve Teams have no audit view of Bot actions. Enterprise has audit logs covering admin, security and authentication events plus Grok Bot control-plane events such as Bot creation and routines, and a separate Action Recording setting that records Bot actions once an admin switches it on. On Teams, the record you have is spending by product on the usage page, and whatever your Bots are told to write down. The docs describe no admin view of members' conversations on self-serve Teams.

That is a real limit, and the honest response is to design for it: Bots that produce reviewable drafts instead of taking actions, and a line in every charter telling the Bot to end its output with a short log of what it did.

## Give every member their own computer, and stop looking for a team one

The old page's title ended with one computer per person, and that part was right. Each user gets a dedicated cloud computer, a Firecracker microVM with its own kernel, memory and virtual devices, and one user cannot reach another user's computer. There is no team computer. Lina's Bots cannot see Dev's files, and Dev's cannot see hers.

Inside one person's account the picture flips. All of that member's Bots share one computer, so files, browser sessions and command-line credentials are available to every Bot the member runs. Separate Bots are not a security boundary. When a workload needs its own computer and credential set, the docs' answer is to give it its own Cursor user, which on a Teams plan means its own seat.

Bots also act as the member. A Bot has no identity of its own, cannot hold more access than the signed-in member, and every action it takes is attributable to that named person. Team-managed connectors are the one exception the docs name, since they may use team or service-account credentials. For admins this is mostly good news, because there is no separate machine identity to provision or rotate outside your identity provider. It also means a Bot's mistake in a company system arrives under a colleague's name, which is the best argument for keeping consequential actions behind approval. [Why one member's Bots share everything](/blog/screens-are-not-boundaries) covers the inside-one-account half in detail.

## Share templates, never computers

Members will want to hand each other a Bot that works. The supported way is a template: Share menu, Create template, then Copy link, with a choice of Public link or Team-only. The recipient previews it on x.ai and adds a copy to their own account. They get the configuration, meaning the identity, description, skills and routines. They do not get the sender's computer, logins or conversation history.

On self-serve Teams the defaults point outward. The bots page says accounts outside Enterprise default to a public link, and the teams page says teams other than Enterprise start with public template sharing allowed. A member who shares in a hurry can therefore publish a Bot configuration that anyone holding the link can open. Strip API keys, internal URLs and customer data before sharing, and if nobody on your team has a reason to publish outside it, turn public template sharing off, as Dev did.

Adding a shared Bot also accepts the third-party bot terms, because shared Bots are made by other users. Tell members that before a stranger's template lands on a work account.

## Onboard each member with the right account on the first sign-in

Access follows the Cursor account a member signs in with, so signing in with the wrong one is the onboarding mistake to head off first. A developer with a personal Cursor Hobby account on the same laptop can sign in to Grok Bot as that account and find no team access, because the team seat lives on the work account.

Tell members three things on day one. Sign in with the Cursor account your team seat is on; the desktop account menu can hold a personal and a work account side by side, through Add account and then Switch account. If the team requires single sign-on, finish the organization login in the browser rather than a personal login. And while a member is on your team, the team's privacy mode governs their data, which is why a team still on Privacy Mode (Legacy) has to move off it before Grok Bot will start.

Two network items belong in the same message if your company has them. Grok Bot computers use shared static egress addresses, so a company service that allows only known source IPs may block Bots; the docs say current ranges come from your Cursor account team. And if member devices sit behind a TLS-inspecting proxy such as Zscaler, Cursor's domains, including the nested cursorvm.com hostnames, must be allowed and exempt from inspection before members connect, or computer setup hangs.

## Write Team Rules short enough to survive

Team Rules are the only team-wide guidance a self-serve admin can give Grok Bot, and they are always on. That makes them valuable and easy to overload. A rule members cannot switch off should be one they would never want to switch off. Dev wrote two, and put everything else into a member checklist and into each Bot's own description.

The botskills boundary idea works at two levels here. The team rule names the thing no Bot on the team ever does. Each Bot's description names the one action that Bot never takes without its owner. Neither replaces approval, and on Teams approval is set per member: each member's personal Auto-review rules are saved to their account and apply on every desktop they sign in to, and nothing on a self-serve plan lets an admin enforce them. Enforcement is an Enterprise control. [A boundary is not a permission](/blog/a-boundary-is-not-a-permission) explains why the sentence alone does not remove a session the computer is already signed in to.

\`\`\`text
TEAM RULES (Grok Bot page, scope: Grok Bot)
1. Never copy company data, files or credentials to a personal account,
   personal storage, or a public link.
2. Never send, publish, merge, delete, or change a production system
   unless the member approves that exact action in the conversation.

MEMBER CHECKLIST (send with the invite)
[ ] Sign in with the Cursor account the team seat is on, not a personal one.
[ ] Add Ask first rules in Settings -> General -> Bot -> Auto-review for
    sending email, publishing, deleting and purchasing.
[ ] Keep Execution on Local Computer at Never allow (the team cap is Never).
[ ] Put one boundary line in every Bot description: the action it never
    takes without you.
[ ] Share Bots with Team-only links. Strip keys and internal URLs first.
[ ] Take over the computer for passwords and 2FA. Never paste them in chat.
[ ] Ask each Bot to end its output with a short log of what it did.
[ ] Check Weekly usage on Fridays. Tell Dev if you ran into on-demand.
\`\`\`

The second rule overlaps the checklist on purpose: a rule members cannot switch off is the backstop for the week someone forgets the checklist. For product-team Bots in this shape, [PR Review Sentinel](/bots/pr-review-sentinel) comments on pull requests and never merges or approves, and [Engineering Agent Manager](/bots/engineering-agent-manager) reports what coding agents are working on and never pushes to the default branch. Both produce something a human reads before anything changes.

## Answer the manager who wants Premium seats to be safe

The strongest version of the objection goes like this. Nobody on the team should hit a limit in the middle of a launch. Premium seats cost more but remove the risk, and a finance request is easier to justify once than to revisit every month. Buy Premium for everyone and move on.

Part of that is right. If several members exhaust their weekly allowance every week, the plans page says a higher seat can raise weekly usage, and paying for it may be cheaper than the on-demand usage they would otherwise run. That is a decision to make with the Team pricing page and a few weeks of the usage page open side by side.

The rest does not follow. Premium seats are not an access requirement, so they change nothing for members who never hit a limit. On-demand is already on by default, so a member who runs out does not stop in the middle of a launch; they keep going on usage billed through Cursor. And the risks a cautious manager actually worries about, such as a Bot emailing a customer, a public template carrying an internal URL, or a session reaching a system it should not, are not seat problems. The Grok Bot docs describe the seat difference only as weekly usage. They do not say a Premium seat adds audit logs, network controls or enforced approval, and those are Enterprise features. Spending the budget on seats buys usage. It does not buy safety.

## Offboard a member without assuming seat removal cleaned up

Removing a member's seat ends their Teams grant. The Grok Bot docs do not describe what happens to a departed member's cloud computer on a self-serve Teams plan, and the computer management actions (Recreate and Terminate) are Enterprise controls. So do not assume removal wiped anything.

Work through what you can control. Ask the member, before they leave, to run the docs' own removal steps: pause or delete routines, sign out of company websites on the shared computer, uninstall connectors and revoke their authorization in the source services, remove sensitive files from the workspace, and hide or delete Bots that should no longer appear. Then, on your side, revoke their sessions in your identity provider, and revoke their connector authorizations at the source services you administer, because connector tokens sit on Cursor's backend and are cut off at the service. [Handover notes when the owner goes on PTO](/blog/bot-handover-documentation) covers the week before someone leaves, when a Bot's schedule and outputs still need an owner.

| Step | Who does it | Why it matters on Teams |
|---|---|---|
| Pause or delete the member's routines | Member, before leaving | Routines belong to that member's Bots, not to the team |
| Sign out of company sites on the computer | Member | Sessions live on their computer, shared by all their Bots |
| Revoke connector authorizations | Member, then admin at each service | Tokens are cut off at the source service |
| Remove the seat | Admin | Ends the Teams grant for Grok Bot |
| Revoke identity-provider sessions | Admin | Sign-in rides your identity provider |

## When this page stops applying

On the 23 September 2026 check, the plans page said every member of a self-serve Cursor Teams plan has Grok Bot with no Premium seat and no admin request, usage follows the seat's allowance, and on-demand is enabled by default for Teams. The teams page says self-serve Teams has no off switch and lists the Enterprise-only controls in the tables above.

Grok Bot is in beta. This page stops applying if the plans page brings back a seat requirement, if Teams gains an enable switch or any control currently marked Enterprise only, or if on-demand stops being on by default. It does not cover seat prices or seat allowances, which live on Cursor's Team pricing page, and it does not cover Enterprise contracts, which go through your Cursor account team. For one person choosing an individual plan, read [Cursor Hobby vs Cursor Pro for Grok Bot](/blog/grok-bot-hobby-and-pro-exclusion).

## Frequently Asked Questions

### Do I need a Cursor Teams Premium seat to use Grok Bot?

No. The Cursor plans page, checked on 23 September 2026, says that on a self-serve Cursor Teams plan every member gets Grok Bot on their own Cursor account. Admins do not assign a Premium seat and members do not request access. The Grok Bot FAQ lists both Teams Standard and Premium seats as including it. Seats still affect usage, because a higher seat can raise weekly usage, but they do not decide access. Seat allowances and prices are on Cursor's Team pricing page, which this answer deliberately does not quote.

### Does a Teams admin have to turn Grok Bot on or approve each member?

No. On a self-serve Teams plan Grok Bot is enabled by default and every member has access without any admin action. The Grok Bot card on the admin dashboard is a status line with no switch, so a Teams admin also cannot turn it off. The organization-wide enable switch and group-level access are Enterprise controls, where an admin turns Grok Bot on after working with the Cursor account team. Grok Bot stays off only for teams on Privacy Mode (Legacy) or on a legacy request-based plan.

### How do Grok Bot usage and on-demand billing work on a Teams seat?

Grok Bot draws first from the Teams allowance for the member's seat, which resets weekly. When that runs out, usage continues on on-demand, which the plans page says is enabled by default for Teams and which is billed through Cursor. There is no separate Grok Bot spend cap; account-level on-demand controls apply, and the dashboard usage page splits spending by product. A higher seat can raise weekly usage. Linking a personal SuperGrok or X Premium+ subscription on top of a Teams seat adds no usage at all.

### Do Teams members share one Grok Bot computer?

No. Each member gets a dedicated cloud computer, a Firecracker microVM with hardware-level separation, and one member cannot reach another member's computer. What is shared sits inside one person's account: all of that member's Bots use the same computer, including files, browser sessions and command-line credentials, so separate Bots are not a security boundary. If a workload needs its own computer and credentials, the docs say to give it its own Cursor user, which on a Teams plan means a seat of its own.
`,
};
