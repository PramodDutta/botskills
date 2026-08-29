import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Cursor Teams Premium: $120 Seat, Still One Computer Per Person',
  description:
    'Evaluate grok bot teams premium at $120 per user monthly with a seat roster, account ownership map, workload pilot, access review, and exit test.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# Cursor Teams Premium: $120 Seat, Still One Computer Per Person

Dev's procurement sheet has one row labeled "Grok Bot workspace, $120." That row hides the unit that matters. Cursor Teams Premium is $120 per user per month and includes Grok Bot. The computer is assigned to a user account, not to a team bot name or shared department queue.

A grok bot teams premium purchase therefore needs a person-by-person roster. For each seat, decide who owns the account, which workflows may share that person's computer, what sources it may reach, who covers absence, how use is reviewed, and what happens when the person leaves. This guide evaluates that operating shape. It does not repeat the cheaper individual paths or the Teams Standard guide.

## Price the roster by user instead of by bot

Dev starts with four proposed users, so the published seat price produces $480 per month before taxes or other account-specific charges: four multiplied by $120. Four users are his scenario choice. The arithmetic is not a quote from Cursor, and the source price should be rechecked before purchase.

Do not multiply by bot count. One seated user may create several workflows, while a second person needs their own user seat for their account. The number of named bots is an operational capacity question, not the billing unit stated in the verified facts.

| Roster idea | Seats counted | Monthly scenario arithmetic | Problem to resolve |
|---|---:|---:|---|
| 1 operator, 4 bots | 1 | $120 | All workflows share that user's computer |
| 4 operators, 1 bot each | 4 | $480 | Four account owners and handoffs |
| Shared department login | Do not model as person | Misleading | Ownership and account policy |
| 2 users after pilot | 2 | $240 | Which workloads justify seats |

The title's "one computer per person" is shorthand for the documented user-account assignment. It does not promise a device for every employee who merely receives a report.

## Confirm eligibility without turning it into architecture

The verified facts list Cursor Teams Premium among the plans eligible for Grok Bot. Eligibility means the plan can provide access. It does not mean every proposed workflow is approved, isolated, useful, or compliant.

Dev keeps two decisions separate. Procurement confirms plan, seat price, account ownership, and access. The workflow owner confirms data, source permissions, output boundary, review, and value. A successful login does not close the second decision.

For the broad eligibility menu, use [Who Can Actually Run Grok Bot](/blog/who-can-actually-run-grok-bot). For the $40 per-user Teams Standard alternative, use [Grok Bot Teams Standard](/blog/grok-bot-teams-standard). This page focuses on what the Premium seat changes in roster economics and what it does not change in account design.

## Assign every seat to a named accountable operator

Each proposed seat row names the person, manager, business purpose, approved data classes, expected workflows, source owners, backup reviewer, start date, review date, and offboarding owner. "Marketing" cannot own a browser session or answer an access-review question.

The operator is not required to perform every downstream task. They are the accountable account user who understands what lives on that computer and who can coordinate cleanup. If company account policy forbids generic credentials, do not create one for convenience.

| Seat field | Example | Why it matters | Reject when |
|---|---|---|---|
| Named user | Dev | Maps computer to accountable account | Only department name exists |
| Workflow purpose | Weekly sourced launch brief | Bounds expected activity | "Use AI" is the purpose |
| Source owner | Product operations | Grants and revokes access | No owner can approve source |
| Backup reviewer | Lina | Covers report review | Backup needs shared login |
| Exit owner | Identity operations | Coordinates suspension and cleanup | Offboarding is unspecified |

## Group workloads by what may share one computer

All bots on a user's account share one persistent cloud computer, with separate screens that are not security boundaries. That one sentence is the architecture fact needed here; [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) contains the detailed treatment.

Dev groups candidate workflows by data and credential compatibility. A public competitor monitor and a private customer-renewal workflow should not be combined merely because one user wants both. The decision asks whether the same account computer may hold both source sessions, files, and command-line credentials.

Named bot count is a usability choice inside that account, not an isolation scheme. If two workloads require a real security boundary, move one to an appropriately separated account arrangement or reject the combination under your organization's architecture policy.

## Compare Premium with Standard on your actual requirement

The verified facts say both Cursor Teams Standard at $40 per user per month and Premium at $120 per user per month include Grok Bot. The Premium delta is $80 per user monthly using those published figures. This article does not invent a Grok Bot-specific Premium entitlement to justify that difference.

Dev lists the team requirements he has independently verified in current Cursor materials and procurement documents, then asks which plan satisfies them. Grok Bot access alone cannot distinguish the two because both are eligible. If no Premium-specific need survives review, Standard deserves consideration.

| Decision factor | Teams Standard | Teams Premium | Evidence needed |
|---|---:|---:|---|
| Published user price | $40/month | $120/month | Current Cursor pricing source |
| Grok Bot eligibility | Included | Included | Current Grok Bot eligibility source |
| Scenario for 4 users | $160/month | $480/month | Roster count and arithmetic |
| Premium-specific requirement | Must be checked | Must be checked | Current primary plan comparison |

Do not fill the last row from memory. The binding facts for these articles establish price and Grok Bot inclusion, not a complete feature comparison.

## Refuse to justify Premium with an invented Bot feature

A purchase proposal often tries to make the preferred plan sound inevitable. That is where unsupported claims appear: a special model, a separate computer per bot, a particular allowance, or an administrative control not established by the evidence.

Do not do that. The supplied evidence establishes no Premium-specific Grok Bot model or published allowance quantity. Neither claim belongs in a seat proposal. Ask current plan questions through approved primary sources and leave unresolved differences in the open-question column.

Write the proposal with two columns: verified plan requirement and open vendor question. An unknown can be resolved before signature. A fabricated differentiator can survive into budget, architecture, and training materials.

## Budget the seat separately from variable use

The $120 figure is the published monthly per-user plan price. It is not an all-in guarantee for every possible use pattern. The verified facts say subscriptions include a weekly usage allowance and overflow is billed on demand under documented usage pricing, but they publish no allowance amount in the supplied evidence.

Dev therefore creates a fixed-seat line and a separate observed-use line. He does not assume zero overflow or invent credits. The workload pilot records account-visible evidence and useful outputs. [What You Cannot Cap](/blog/what-you-cannot-cap) owns the budgeting procedure, so this guide does not repeat stop rules and variance design.

| Cost record | Source | Fixed or observed | Decision use |
|---|---|---|---|
| $120 user seat | Published Teams Premium price | Fixed plan line | Roster budget |
| Taxes or local charges | Actual quote or invoice | Account-specific | Procurement total |
| Usage evidence | Account record | Observed | Pilot review |
| Operator review time | Internal time record | Observed | Total workflow cost |
| Useful accepted output | Pilot review | Observed outcome | Seat justification |

## Pilot one decision-bearing workflow per proposed seat

Do not give each new user a folder of ten bots and ask whether Premium feels useful. Dev chooses one workflow whose output supports a real recurring decision. For a marketer, that may be the [Competitor Ad Watch bot](/bots/competitor-ad-watch). For operations, it may be the [Chief of Staff Briefing bot](/bots/chief-of-staff-briefing). For research, it may be [Source Verifier](/bots/source-verifier).

The pilot names input, output schema, source permissions, boundary, reviewer, cadence, and success criteria. Dev runs four review cycles because four fits his monthly decision, not because the product mandates it. He records accepted outputs, rejected outputs, correction time, source failures, and any credential or file cleanup.

One workflow per seat keeps the purchase question legible. Expansion comes only after the user proves they can own the first computer and review its work.

## Write a boundary for each workload, not one for Premium

The plan does not supply a universal workflow boundary. A competitor collector may never launch ads. A source verifier may never edit the document. An inbox triage workflow may never send. Each boundary names the action and object that its output must stop before.

Dev also checks tools and source permissions because [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission). A sentence does not remove a logged-in session already available to the computer. Keep unnecessary write capability out of the seat design where the source system allows it.

\`\`\`text
Role: Teams Premium seat pilot owner

Seat record:
- named user and manager
- one pilot workflow and business decision
- approved source, data classification, and source owner
- expected output, reviewer, cadence, and four-cycle review date
- account-computer compatibility statement for every additional workflow

For each cycle:
1. Record source status, proposed output, reviewer decision, correction time,
   useful outcome, and open access or cleanup issue.
2. Stop the cycle if source conditions or account ownership differ from the record.
3. Add no workflow until the user reviews computer-sharing compatibility.

Boundary:
The pilot never performs the workload's externally visible or destructive action.
That action is named in the workload charter and remains human-owned.
\`\`\`

The charter is an operating template, not a product setting. [How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) supplies the test for the final workload sentence.

## Walk Dev through a four-seat proposal

Dev initially proposes four Premium seats: marketing, product operations, research, and finance. At $120 per user monthly, the scenario is $480 per month. He replaces department labels with four named users and reviews their pilot workflows.

Marketing chooses public competitor creative monitoring. Research chooses claim verification. Product operations proposes a launch brief that reads approved project documents. Finance proposes a workflow needing banking access, but the source owner and boundary are unresolved. Dev parks the finance seat rather than treating plan eligibility as approval.

He then compares Premium with Standard for the remaining three users. Grok Bot access exists on both. Two users have current Premium requirements supported by the team's procurement evidence; the marketing user does not. The final proposal is two Premium seats and one Standard seat, with current published seat arithmetic of $280 monthly: two times $120 plus one times $40.

This mixed result is more useful than defending the original $480. It maps plans to verified needs and defers the high-risk workflow until its architecture is ready.

## Trace a missing file to the wrong account assumption

During the pilot, Lina cannot find Dev's research output on her own account computer. The team had assumed a named bot was a team-shared workspace. The documented assignment is to the user account, so Lina's seat does not automatically inherit Dev's computer files or sessions.

The team repairs the workflow by choosing an approved handoff destination. Dev's bot writes the reviewed artifact to a team-controlled repository only after the human review step. Lina reads it there under her own identity. They do not share Dev's account login.

| Symptom | Wrong assumption | Repair | Verification that can fail |
|---|---|---|---|
| Colleague cannot see bot files | Bot name implied team workspace | Use approved handoff destination | Recipient opens final artifact |
| Two users share one login | Seat treated as department pool | Assign individual accounts | Roster matches identity records |
| Premium bought for access alone | Standard eligibility overlooked | Compare verified requirements | Proposal names Premium need |
| Ten bots appear on day one | Bot count treated as value | Pilot one workflow | Four-cycle review completes |
| Offboarded user leaves artifacts | Seat cancellation treated as cleanup | Run account-computer exit plan | Sessions and files verified |

The failure is not solved by adding another bot. It is solved by designing the human-to-human handoff explicitly.

## Design absence coverage without credential sharing

If Dev is away, a colleague may need the reviewed output, schedule status, or source failure report. They do not need Dev's login. Define a backup reviewer and an approved shared destination for final artifacts. Keep drafts and account-computer state under the owning user's process.

A routine belongs to one Bot, and deleting that Bot deletes its routines according to the verified facts. Absence coverage should therefore record which schedules depend on the person's account and who may pause or replace them through approved administration. Do not assume the routine became team-level because the subscription is a Teams plan.

For operational handoff design, read [Bot Handover Documentation](/blog/bot-handover-documentation). Keep personal account credentials out of the handoff packet.

## Answer the manager who wants one shared automation seat

The strongest objection is cost: one shared login appears cheaper and makes the output available to everyone. It also obscures who owns the account computer, who approved a session, who reviews access, and what happens when team membership changes. It may conflict with account terms or company identity policy, which must be checked through approved sources.

Use named seats and deliberate output sharing. If the business needs a service-owned automation identity, evaluate whether the product and your policies support that exact arrangement rather than improvising a person-shaped shared account. The published per-user price should be modeled as such.

Cost pressure is a reason to narrow the roster and choose Standard where it meets verified needs, not a reason to erase accountability.

## Verify the seat with access, output, and exit tests

Before approving renewal, run three tests. Access test: the named user can reach only approved sources and a planted forbidden source remains unavailable. Output test: a reviewer can trace an accepted artifact to its sources and reject a planted bad claim. Exit test: pause routines, revoke source sessions, locate working files, preserve or delete them under policy, and confirm the handoff artifact remains available to its owner.

The exit test can be performed with synthetic data during the pilot. Do not wait for an actual departure to discover that nobody owns the files. [Credential Hygiene: Rotate What the Computer Touched](/blog/credential-hygiene-for-bots) contains the touched-surface method.

Record a pass or fail with evidence. A meeting where everyone agrees the seat seems fine is not the same as testing the old path after revocation.

## Review the roster when a workflow crosses account ownership

A workflow may begin with one person's sources and later serve another team's process. That change is not merely a new bot title. Reopen account ownership, data compatibility, reviewer, artifact destination, backup coverage, and exit responsibility.

Dev adds a trigger to the seat register: any new source owner, data classification, externally visible action, or recipient starts a compatibility review before the workflow moves. The trigger is local governance, not a Teams Premium feature. It protects the roster from gradual scope growth.

If the workflow should belong to a different person, design a handoff using approved artifacts and fresh source authorization. Do not copy browser state or command-line credentials to make the move convenient. The receiving user's account computer starts from its own reviewed access.

Close the old owner's workflow only after the handoff artifact is accepted and old source access is removed. Record both events. A successful handoff proves continuity, while the access test proves the former path no longer remains available.

## Calculate renewal from accepted work instead of bot count

At renewal, Dev totals seat cost, observed usage evidence, operator review time, accepted outputs, rejected outputs, correction time, incidents, and decisions improved. He does not count created bots as value. Ten bot names can support no useful decision, while one reliable weekly brief can justify a seat.

For each user, ask whether the workflow still matters, whether Standard satisfies verified plan needs, whether sources remain approved, and whether computer-sharing assumptions changed. A Premium seat can be downgraded, retained, or removed based on current evidence. The original proposal is not a permanent entitlement.

| Renewal signal | Keep Premium may be justified | Change may be justified | Evidence |
|---|---|---|---|
| Premium requirement | Still current and used | No longer applies | Current primary plan evidence |
| Workflow value | Repeated accepted decision support | Outputs unused or costly to correct | Review records |
| Account compatibility | Sources remain compatible | New sensitive domain added | Seat register |
| Operator ownership | Named user actively owns cleanup | Ownership unclear or changed | Roster review |

Do not convert this table into an automatic cancellation rule. It prepares a named manager and procurement owner to decide.

Archive the renewal snapshot with the price source date and roster version. If the published plan changes later, Dev can distinguish the basis of the earlier decision from the current offer instead of rewriting history.

## Keep final artifacts team-owned without making sessions team-shared

The user-account computer can produce an artifact needed by a group. Define a reviewed export step into an approved team repository, with source references, owner, and retention. Only accepted output crosses that handoff. Working files and authenticated sessions remain subject to the owning account's controls.

The [Chief of Staff bot](/bots/chief-of-staff) is one example where a private working brief may later yield a reviewed team artifact. The distinction is between sharing a result deliberately and sharing account credentials. It also lets offboarding preserve necessary business records without preserving personal sessions.

Test the repository permission separately. A successful upload does not prove recipients have the intended access or that unintended recipients do not. Use a planted harmless artifact during the pilot and verify both allowed and denied readers.

## Stop this guide before plan claims the evidence does not support

This guide establishes the verified $120 per-user monthly Premium price, Grok Bot inclusion, user-account computer assignment, and the roster implications. It does not invent a Premium-only Bot model, a usage quantity, a per-bot computer, or an unverified administrative feature.

Recheck current primary pricing and documentation before purchase because products change. Use procurement documents for taxes, billing terms, and organization-specific commitments. Use your security and compliance process for data decisions.

For the faster product tutorial, use [Learn Grok Bot](/blog/learn-grok-bot). For retained files during account changes, use [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files). Keep reading: [Where a Bot Cookie Actually Lives](/blog/where-a-bot-cookie-actually-lives) covers the session question without bloating this seat guide.

## Frequently Asked Questions

### Does Cursor Teams Premium include Grok Bot?

Yes. The verified product facts checked for this site on August 25, 2026 list Cursor Teams Premium as eligible for Grok Bot and list its price as $120 per user per month. Recheck current primary Cursor and Grok Bot documentation before purchasing because pricing and eligibility can change. Inclusion answers the access question, not whether a proposed workflow is approved. You still need a named account owner, compatible data and credentials, a workload boundary, a reviewer, and an exit procedure for each seat.

### Is the $120 price per bot or per user?

It is the published monthly price per user for Cursor Teams Premium, not per named bot. Model the roster by seated people. A user may operate several bot workflows on the computer assigned to that user account, but those bot names are not separate security boundaries. Four Premium users produce simple scenario arithmetic of $480 monthly before account-specific items. Four bots under one user do not produce four Premium seats solely because four bot names exist.

### Does each Teams Premium bot get a separate computer?

No. The documented computer is assigned to the user account, not an individual Bot. Bots on that account have separate screens on one persistent computer, and those screens are not security boundaries. Plan workflows according to what data, files, browser sessions, and credentials may share that user's computer. If two workloads require real separation, do not rely on bot names. Use an account and architecture arrangement approved for that boundary or keep one workload out of the proposed seat.

### Should I choose Premium over Teams Standard just for Grok Bot?

Not on Grok Bot eligibility alone. The verified facts list both Teams Standard at $40 per user per month and Teams Premium at $120 per user per month as including Grok Bot. Identify a current, primary-source-backed Premium requirement beyond access, then compare it with your roster and pilot evidence. If no Premium-specific requirement survives, Standard deserves consideration. Do not justify the difference with an invented model, usage quantity, computer boundary, or administrative feature that the evidence does not establish.
`,
};
