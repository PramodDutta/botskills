import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'When Grok Bot Hands Coding to Cursor Cloud Agents',
  description:
    'Grok Bot can hand coding tasks to Cursor Cloud Agents on separate computers. What the docs confirm, where they stop, the admin switch, and when to turn it off.',
  date: '2026-09-23',
  category: 'Guide',
  content: `
# When Grok Bot Hands Coding to Cursor Cloud Agents

Somewhere on your team's Grok Bot admin page is a switch you have probably never touched. It lets every member's Bots hand coding tasks to Cursor Cloud Agents, it applies to the whole team at once, and it starts on. The Grok Bot docs give it a handful of sentences and then move on.

This page collects those sentences, marks exactly where they stop, and gives you a way to decide whether to leave the switch on, turn it off, or turn it on with conditions. Everything here was read from the Grok Bot docs as of 23 September 2026, chiefly the [teams and enterprises page](https://docs.x.ai/grok-bot/teams-and-enterprises), the [security page](https://docs.x.ai/grok-bot/security) and the [private networks page](https://docs.x.ai/grok-bot/private-networks). It does not describe how Cloud Agents themselves work; that is a separate Cursor product with its own documentation at [cursor.com/docs/cloud-agent](https://cursor.com/docs/cloud-agent).

## Collect every sentence the docs give you in one place

Before you decide anything, read what is actually documented. It fits in one table.

| What the Grok Bot docs say | Where it appears |
|---|---|
| Bots can delegate coding tasks to Cursor Cloud Agents | Teams and enterprises, under the Cloud Agents control |
| Delegated work runs on separate computers, under the Cloud Agent controls your team already has | Teams and enterprises, in two places |
| The switch is on the Grok Bot page of the Cursor dashboard, applies to the whole team, and is on by default | Teams and enterprises |
| Team admins on both Teams and Enterprise can set it | Teams and enterprises; security FAQ |
| The recommended baseline says to disable spawning if you do not need delegation | Teams and enterprises, recommended configuration |
| Auto Review evaluates delegation, including Cloud Agent launches, and can let it proceed, require approval, or deny it | Security; security FAQ |
| The Grok Bot network policy is separate from Cloud Agent network settings, and delegated agents run under those settings | Security; private networks |

That is the whole of it: seven facts spread across four pages. There is one more fact from outside the Grok Bot docs worth knowing. Cursor's pricing page lists Cloud agents among the features of its Pro, Pro+ and Ultra plans, each of which also includes Grok Bot.

Everything else you may have read about this handoff, such as how a Bot decides to delegate, what the agent receives, where the result lands and what it costs, is not in the Grok Bot docs. Some of it may be in Cursor's own Cloud Agent documentation, which describes a different product surface. The rest is somebody's guess. This page will not add to the guesses, and it lists the open questions in a table further down so you can see the gaps at a glance.

## Find the switch on the dashboard, and notice it has no group scope

The control is called Cloud Agents and it sits on the Grok Bot page of the Cursor dashboard, which only admins can see. It allows or blocks every member's Bots from delegating coding tasks. On both self-serve Teams and Enterprise it applies to the whole team, and it is on until someone turns it off.

The detail that matters most is the one the docs mention in passing. When the security FAQ answers whether admin controls apply per group, the directory-group scope it describes sits inside Network Controls, which is Enterprise only, and it lists Cloud Agents with Team Rules and public template sharing as controls that apply to the whole team. There is no documented way to allow delegation for engineering and block it for sales. On Enterprise the nearest group-level lever is Manage Group Access, which decides who has Grok Bot at all.

So the switch is all or nothing. If your engineers' Bots can hand coding work to a Cloud Agent, so can the Bots belonging to your support lead, your finance manager and the intern who joined last week. That is not an argument for turning it off. It is an argument for deciding deliberately, because the default decided for you.

The Cursor Admin API is documented as managing Grok Bot capabilities among other settings, but the docs do not list which capabilities that covers, so do not assume this switch is among them until you have checked. The docs also do not say what a Bot does when a member asks for a code change while the switch is off. Find out what yours does before you tell the team.

## Follow Rhys through the Monday he found the switch already on

Rhys is the engineering lead at a 25-person B2B software company, and he is also the admin on its self-serve Cursor Teams plan. Eight of the 25 are engineers. When Grok Bot arrived, every member got it automatically, because on self-serve Teams it is on by default with no switch to turn it off. For a month nobody on the team looked at the Grok Bot admin page.

At 09:10 on a Monday, Rhys opens it for the first time. The Cloud Agents switch is on. He never set it. At 09:20 he reads the teams and enterprises page and stops at the sentence about where the work runs: separate computers, under the Cloud Agent controls the team already has. Those controls were set up a year earlier for the eight engineers' own use of Cursor's agents. Nobody had considered that a salesperson's Bot might one day work under them.

At 09:35 he tries to find out whether any Bot has delegated anything. On a self-serve Teams plan there is no admin log of what Bots did. On Enterprise, the docs list the events that audit logs and Action Recording capture, and delegation is not named on either list. So he asks in the team channel. Two engineers say they asked their Bots to pass a small fix to a Cloud Agent. Nobody else can say for certain what their Bots have done.

At 10:00 he turns the switch off for the whole team, because he cannot scope it to engineering and cannot make review mandatory on a Teams plan. Then he spends Tuesday putting conditions in place. At 11:00 he adds a Team Rule scoped to both Cursor and Grok Bot: code changes go through a pull request that a person reviews, and nothing is merged or pushed to the default branch by an agent. At 11:30 the eight engineers each add a personal Ask first rule for Cloud Agent launches. At 12:00 he adds a second Team Rule telling Bots to delegate coding work only when the member has asked for a code change in so many words.

At 14:00 he turns the switch back on and runs one delegation himself, a one-line change to a README in a sandbox repository. He writes down what the conversation showed and where the result appeared, and posts it to the team wiki, because the docs describe neither.

## Count what the separate computer keeps off the shared one

The strongest reason to like this feature is one the docs imply rather than state, and it comes from the way Grok Bot computers work.

Every Bot on a Cursor account shares one cloud computer. The browser's signed-in sessions are shared, the files are visible to every Bot, and command-line credentials are shared too. Bots have a shell and a browser on that computer. So a Bot that did coding work on its own computer would need repository access there, as a signed-in session in the shared browser or a credential in the shared command line. Every other Bot on that account could then use it, including the one triaging your inbox and the one reading unfamiliar websites for a research brief.

Delegation moves the coding work somewhere else. The docs say the delegated task runs on separate computers, under your existing Cloud Agent controls. They do not say what, if anything, passes between the Bot's computer and the Cloud Agent, so do not assume nothing does. What you can say is that the documented design runs the coding work on separate computers, under the controls your team set up for Cloud Agents, instead of on the one computer that holds every Bot's logins.

| Kind of work | Where it runs | What governs it |
|---|---|---|
| Browsing, files and shell commands a Bot runs itself | The member's Grok Bot computer, shared by all their Bots | Auto Review, Team Rules, the member's sign-ins, and the Grok Bot network policy on Enterprise |
| Coding tasks a Bot delegates | Separate computers | Your team's existing Cloud Agent controls and Cloud Agent network settings |
| Commands on the member's own laptop | The member's machine | Execution on Local Computer, per member with a team cap |
| Connector calls | Through Cursor's connector backend, which keeps the tokens off the computer | The connector policy in Team Marketplace |

The table explains the admin work. Each row is governed by a different control, and a team that has tuned the first row carefully may never have looked at the second. The same shared-computer problem sits behind the docs' advice to give any workload that needs separate credentials a Cursor user of its own. Delegation is a narrower answer to the same problem, for one kind of work: code.

## Send network questions to the Cloud Agent settings, not the Grok Bot policy

If you run Enterprise and you built a careful Grok Bot network policy, this is the section to read twice. The security page says the Grok Bot network policy is separate from Cloud Agent network settings. The private networks page adds that a Cloud Agent receiving delegated work follows the Cloud Agent network settings, not the networking client you installed on team computers through Team Setup.

The practical consequence is that your Team Allowlist Only policy does not follow the work into delegation. A destination blocked for every Grok Bot computer is not thereby blocked for a Cloud Agent that a Bot launched. Whatever your Cloud Agent network settings allow is what the delegated work can reach.

The same page points to Cursor's own Cloud Agent recipes for Tailscale and Cloudflare Tunnel, and says they are specific to Cloud Agent machines, with Tailscale there needing userspace networking and proxy variables. That is a small detail with a large implication: private network access for delegated work is configured on the Cloud Agent side, separately from anything you did for Grok Bot computers.

On self-serve Teams the point is simpler, because there is no Grok Bot network policy at all. Cloud Agent network settings are the network control the docs point to for delegated work, so they are the ones to review before you leave the switch on.

## Put a review step in front of every launch

Auto Review is the layer that can stop a delegation before it happens. The security docs say it evaluates risky Bot actions before they run, and the list explicitly includes delegation such as Cloud Agent launches. For each one it can let the action proceed, require your approval, or deny it.

How you make that review dependable depends on your plan. On Enterprise, turn on Enforce Auto-review so members cannot switch Auto-review off, then add a team Ask first rule for Cloud Agent launches with Configure Rules on the Grok Bot page. Members see it as a locked rule they cannot edit or delete. Turn enforcement on first, because the docs say team rules stop applying when enforcement is off.

On self-serve Teams and on individual plans, nobody can enforce Auto-review. The best available step is for each member who uses delegation to add a personal Ask first rule under Settings > General > Bot > Auto-review. Personal rules are saved to the account and apply on every desktop the member signs in to. Rhys asked his engineers to do exactly that, and he checked each one on a call rather than trusting a thumbs-up in the channel.

Write the rule narrowly around the action, the way the docs' own examples are written. Asking first before launching any Cloud Agent is clear. A rule that tries to describe which repositories are safe is likely to be harder for a model-based reviewer to apply consistently. And remember what the docs say about the reviewer itself: it is model-based, it does not review every side effect, and it works best alongside explicit boundaries and least privilege. When the approval card appears, prefer Allow once over Always allow, which is the docs' own advice for actions that touch shared resources. A repository is a shared resource.

## Scope the coding rules to both Cursor and Grok Bot

Team Rules are guidance every member's Bots follow, and they are available on Teams as well as Enterprise. Each rule is scoped to Cursor, to Grok Bot, or to both, and a rule that applies to Grok Bot is always required, so members cannot turn it off.

The docs do not say which scope governs a Cloud Agent run that a Bot started. It might follow the Cursor scope because the agent is a Cursor agent, or the Grok Bot scope because a Bot launched it, or both, or neither. Rather than guess, scope every coding rule you care about to both. That is why Rhys set both scopes on Tuesday morning.

Keep the rules short and few, as the docs advise. Three is plenty for most teams: code changes go through a reviewed pull request, nothing is merged or pushed to the default branch by an agent, and no secrets or customer data go into a task description. Remember too what a Team Rule is. It guides what a Bot or agent proposes. It does not stop an action the way an Ask first rule does, so the rules and the review step from the previous section belong together.

## Keep the merge with a human, whatever the agent returns

The docs do not describe what a delegated task produces or where it lands. Whatever it is, one line should not move: an agent does not merge its own work. That is the botskills boundary idea applied to code. Every listing on this site declares the one action its Bot never takes without a human, and for anything that touches a repository, the merge is that action.

Two listings already encode it. [Engineering Agent Manager](/bots/engineering-agent-manager) tracks what every coding agent on a team is doing, flags duplicated and stalled work, and its boundary rules out merging, approving, or pushing to the default branch; it reports and proposes, and a human lands code. [PR Review Sentinel](/bots/pr-review-sentinel) gives each new pull request a first-pass review with findings ordered by severity, and it only comments. It never merges, approves, pushes or requests changes. Put one or both next to a team that delegates, and the output of every Cloud Agent run has a reporter and a reviewer before a person decides.

The docs' own use cases suggest where a Bot is most useful in this chain, and it is upstream of the code. The Bug Reproduction example turns a report into a reproduction pack in staging, with exact steps, expected and actual behavior and screenshots, and its standing instruction is to keep production customer data out. That pack is exactly what a coding agent, or an engineer, needs to start. Let the Bot do the evidence, let the agent do the change, and let a person do the merge. [The delegation playbook](/blog/bot-delegation-playbook) makes the general case for drawing that line by reversibility rather than by task size.

## Paste a delegation charter into the Bot description

The Bot description is where the docs say lasting rules belong. For any Bot that might hand off coding work, paste this and adjust the names.

\`\`\`text
CODING HANDOFF RULES (keep in the Bot description)

1. Do not write, commit or push code on this computer. Never sign
   this computer's browser into a git host, and never store a
   repository token or key here. Other Bots share this computer.
2. Delegate a coding task to a Cursor Cloud Agent only when I have
   asked for a code change in this conversation, in so many words.
3. Before you delegate, tell me in one message: the repository, the
   change, the files you expect it to touch, and how I will review
   the result. Then wait for my approval.
4. Give the agent evidence, not conclusions: repro steps, expected
   and actual behavior, logs, links. Never put customer data,
   secrets or credentials in the task.
5. When the agent finishes, tell me where the result is and what
   changed. Never merge, approve or push to the default branch,
   and never ask another Bot to do it for you.
6. Keep a line in /workspace/handoffs.md for every delegation:
   date, repository, task, where the result landed.
7. If delegation is switched off for the team, say so and stop.
   Do not do the coding work yourself instead.
\`\`\`

Rule 1 is the one that protects the shared computer, and rule 7 is the one that protects rule 1. Without it, a Bot told that delegation is unavailable may try to be helpful by doing the work where it stands. Rule 6 exists because, as the next section shows, no log the docs describe records these handoffs for you.

## List the questions the docs leave open, and answer none of them by guessing

This table is the honest part of the page. Each row is something a careful admin will want to know, what the Grok Bot docs say about it as of 23 September 2026, and what to do until they say more.

| Open question | What the Grok Bot docs say | What to do meanwhile |
|---|---|---|
| How a Bot decides to delegate, or how you ask it to | Nothing | Put when-to-delegate rules in the description and watch the first run |
| What the Cloud Agent receives from the Bot | Nothing | Tell the Bot to pass evidence only, never secrets |
| Which repositories and credentials the agent can use | Only that your existing Cloud Agent controls apply | Read Cursor's Cloud Agent docs and review those controls |
| What comes back, and where it lands | Nothing | Record what your first run shows, and keep merges human |
| Which usage meter pays for delegated work | Nothing specific | Check the per-product split on the dashboard usage page |
| Whether individuals without a team can delegate, and where they switch it off | Nothing | Add a personal Ask first rule for launches |
| Whether audit logs or Action Recording capture delegation | Neither documented list names it | Have the Bot keep its own handoff log |
| What happens to delegated work already running when you turn the switch off | Nothing | Assume it continues until you have confirmed otherwise |

None of these gaps is unusual for a product in beta, and several may close quickly. The mistake is filling them from memory of how some other agent product works, then writing a security answer or a rollout plan on top of the guess. If a reviewer asks one of these questions, "the Grok Bot docs do not say, and here is what we do instead" is a complete and defensible answer.

## Turn the switch off when any of these is true

The docs' baseline is short: if nobody needs delegation, switch spawning off. The table below turns that into cases.

| Situation | Switch | Why |
|---|---|---|
| Nobody on the team writes code | Off | The baseline says to disable it when delegation is not needed |
| Your Cloud Agent controls were set up for a few engineers and never reviewed with Bots in mind | Off until reviewed | Delegated work runs under exactly those controls |
| Self-serve Teams, and members who delegate have not added an Ask first rule | Off until they have | You cannot make review mandatory on Teams |
| An auditor needs a record of every code handoff | Off, or on with a handoff log you keep yourself | Neither log the docs describe names delegation |
| An engineering group relies on it, with the charter, the rules and a review step in place | On | Coding on separate computers beats coding on the shared one |
| Enterprise, with Enforce Auto-review on and a team Ask first rule for launches | On if needed | Every launch stops for a person |

One warning applies whichever way you set it. If you turn the switch off, some engineer will eventually want a Bot to fix something anyway, and the tempting shortcut is to let it do the work on its own computer. The charter's rule 7 exists to block that shortcut. Off should mean a person or a person-started Cursor agent does the coding, not the Bot on the shared machine.

## Answer the engineer who wants the Bot to write the code itself

The objection deserves its strongest form. The Bot already has a terminal and a browser. It could clone the repository, make the change, run the tests and open a pull request without a second system, a second set of controls, or a handoff the docs barely describe. Delegation adds a hop and a pile of unknowns, and the simplest design is usually the safest.

The simplest design is not the safest one here, because of where the Bot's terminal lives. To code on its own computer, the Bot needs repository access on the one machine every other Bot on the account shares. The git host session in the browser becomes available to the research Bot that reads arbitrary web pages. The token in the command line becomes available to the inbox Bot. The docs warn against placing any credential on the computer that another Bot should not use, and a repository token is that credential.

Delegation is the documented path that keeps code execution off the shared computer, on separate machines, under controls your team already set up for code. Its unknowns are real, and this page lists them. But they are unknowns about a design that points in the right direction. The alternative is a known problem. If you need the two products kept straight in your head, [Grok Bot versus Cursor's own agents](/blog/grok-bot-vs-cursor-background-agent) draws the line between the named teammate and the repository job.

## Tell individual subscribers what the docs cover and what they do not

If you are on Cursor Pro at $20 a month, Pro+ at $60 or Ultra at $200, you have Grok Bot, and Cursor's pricing page lists Cloud agents among your plan's features. What the Grok Bot docs do not do is describe delegation for individuals at all. The switch is documented only as a team admin control, and nothing in the individual-facing pages says whether an individual's Bots can delegate or where an individual would turn it off.

So an individual should set things up as if delegation might happen and verify rather than assume. Put the coding charter in the description of any Bot that touches technical work. Add a personal Ask first rule for Cloud Agent launches under Settings > General > Bot > Auto-review. If a Bot ever proposes a delegation, the approval card is your first evidence that the feature reaches your plan, and your chance to see what the handoff looks like before anything runs.

Individuals also have no audit view of Bot actions; the docs reserve audit logs and Action Recording for Enterprise. The handoff log in the charter's rule 6 is the only record you will have, which is reason enough to keep it.

## Check the usage split after the first delegation

The docs do not say which usage a delegated coding task draws on. Grok Bot usage is metered on the Cursor account, and Cloud Agents are a Cursor feature in their own right, so the run could plausibly count against either, and this page will not guess which.

What the docs do give you is a place to look. The per-product split of spend and usage is on the dashboard usage page, which the teams and enterprises FAQ points to when it explains that there is no separate Grok Bot spend cap. After your first delegation, open that page, find the day, and see which product line moved. Rhys did this on Tuesday afternoon and added the answer to the same wiki page as his notes on the handoff itself.

Whatever the answer, the spending control is the same one. No spend cap exists for Grok Bot specifically; the on-demand controls on the account are what you have, and Teams plans start with on-demand usage switched on. Set the On-demand monthly limit to a number you would be comfortable explaining before a few Bots start delegating work in parallel, and know what it does: the plans page says it is not a hard stop mid-run, so a Bot already working can finish past it before on-demand stops.

## Recheck the docs, because this page stops applying the day they grow

This is one of the least documented features in a product that is still in beta, and much of this page is a list of gaps, each one confirmed against the docs as of 23 September 2026. Gaps close. When the docs describe how a Bot hands off a task, what the agent receives, where the result appears, how the handoff is logged, or whether the switch can be scoped to groups, the matching parts of this page are out of date and the docs win.

Two parts should outlast any of those changes. The documented design runs coding work on separate computers under Cloud Agent controls, which is the right direction for anyone worried about a shared computer full of logins. And whatever the handoff comes to look like, the merge stays with a person. Re-read the [teams and enterprises page](https://docs.x.ai/grok-bot/teams-and-enterprises) before you change the switch, and Cursor's Cloud Agent documentation before you change the controls the delegated work runs under.

## Frequently Asked Questions

### Can Grok Bot delegate coding work to Cursor Cloud Agents?

Yes. As of 23 September 2026 the Grok Bot docs say Bots can delegate coding tasks to Cursor Cloud Agents, and that the delegated work runs on separate computers under the Cloud Agent controls your team already has. The docs do not describe how a Bot decides to delegate, what the agent receives, or where the result lands. Treat those as open questions, keep a person responsible for every merge, and read Cursor's own Cloud Agent documentation for the agent side.

### Where is the Grok Bot Cloud Agents switch, and is it on by default?

It is the Cloud Agents control on the Grok Bot page of the Cursor dashboard, which only admins can see. It is on by default, it applies to the whole team, and team admins on both self-serve Teams and Enterprise can change it. The docs describe no way to scope it to one group. Their recommended baseline says to disable Cloud Agent spawning if your team does not need delegation, and the docs describe no equivalent switch for individual plans.

### Does the Grok Bot network policy apply to delegated Cloud Agent work?

No. The security page says the Grok Bot network policy is separate from Cloud Agent network settings, and the private networks page says delegated agents run under Cloud Agent network settings rather than the networking client installed on Grok Bot computers through Team Setup. An allowlist you built for Grok Bot computers therefore does not restrict what a delegated Cloud Agent can reach. Review the Cloud Agent network settings separately before you leave delegation switched on.

### Should I turn off Cloud Agent delegation for my team?

Turn it off if nobody on the team writes code, or if your Cloud Agent controls were never reviewed with Bot-initiated work in mind. The docs' baseline says to disable it when delegation is not needed. If engineers do rely on it, leave it on with conditions: a Team Rule scoped to both Cursor and Grok Bot, an Ask first rule for launches, and a charter that keeps coding off the Bot's shared computer and every merge with a person.
`,
};
