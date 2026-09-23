import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Who Can Actually Run Grok Bot, a Decision Tree',
  description:
    'Follow a sourced decision tree for Grok Bot eligibility, compare individual and team paths, and finish with a concrete access-check worksheet.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# Who Can Actually Run Grok Bot, a Decision Tree

Nila hears that a colleague can run Grok Bot, opens her own paid account, and assumes the same button should appear. It does not. The missing piece is not a secret invitation. Her plan name is different.

**Eligibility** means that an account meets the documented subscription or trial condition for access. It does not mean a particular task is safe, a feature is configured, or an account has remaining usage.

The Access section of VERIFIED-FACTS-2026-09-23 lists the eligible paths as every paid individual Cursor plan (Pro, Pro+, Ultra), Cursor Teams, a linked individual SuperGrok, SuperGrok Plus, SuperGrok Heavy, or X Premium+ subscription, and a one-time trial for individuals. This article turns only those sourced facts into a decision tree. By the end, you can classify one account as eligible, ineligible, or unresolved without guessing from price or brand.

## Start the decision tree with the account owner

First ask who holds the subscription: an individual or a team-managed seat. This split matters because the Access section of VERIFIED-FACTS documents both individual plans and Cursor Teams plans. Do not begin with "paid or free." Several paid plans have different outcomes.

For an individual, write down the exact plan label visible in account billing. For a team member, ask the administrator for the exact team tier and confirm that the seat is assigned to the person checking access. The plan label, not a colleague's memory, is the decision-tree input.

| First observation | Next branch | Do not infer | Evidence to keep |
|---|---|---|---|
| Individual account | Check exact individual plan | Paid means eligible | Billing plan label |
| Team-managed seat | Check exact Teams tier | Company account means eligible | Team tier and seat identity |
| No plan label visible | Mark unresolved | Missing button means ineligible | Screenshot or support response |
| Trial prompt offered | Check one-time trial branch | Trial is reusable | Trial eligibility text |

This opening prevents a common category error: comparing an individual plan to a team tier as if they were the same product row.

## Send SuperGrok accounts down the named-plan branch

According to the Access section of VERIFIED-FACTS, an individual SuperGrok, SuperGrok Plus, or SuperGrok Heavy subscription can be linked to grant Grok Bot usage, while SuperGrok Lite is not included and SuperGrok Team or Enterprise cannot link. The same section does not publish a Heavy price. Therefore, never decide by seeing the word SuperGrok alone, and never invent a Heavy price.

Nila should transcribe the full name. If it says SuperGrok, SuperGrok Plus, or SuperGrok Heavy on an individual account, the eligibility branch returns yes once linked. If it says SuperGrok Lite, or a Team or Enterprise SuperGrok, the branch returns no under the supplied facts. For Heavy, the yes comes without attaching an unsupported dollar figure.

This decision is about documented eligibility only. It does not say which model serves a request or how much usage remains. Those are different questions handled later in the curriculum.

## Send Cursor individuals down the exact-tier branch

The Access section of VERIFIED-FACTS says every paid individual Cursor plan includes Grok Bot: Cursor Pro at $20 per month, Cursor Pro+ at $60 per month, and Cursor Ultra at $200 per month. Cursor Hobby, which is free, does not include it.

The plus sign no longer changes the leaf. "Pro" and "Pro+" both lead to eligible in this tree; they differ in weekly usage, not access. Still ask Nila to copy the exact plan name rather than paraphrase it, because the word that now decides the leaf is Hobby. If the label is Ultra, the eligible result follows from the same verified section.

The Access section also records an India-only Cursor Start plan at Rs 649 per month, but it does not list that plan among eligible Grok Bot paths. The correct result for Start is unresolved from this source, not yes and not a fabricated no. Check current primary documentation for that exact tier.

## Route Cursor team seats by self-serve or Enterprise

According to the Access section of VERIFIED-FACTS, every member of a self-serve Cursor Teams plan has Grok Bot, with no Premium seat and no admin request. On Enterprise, access comes through the account team and is managed by the admin. A team member should still verify which account is signed in.

The word Teams is not enough if a billing screen or internal note omits the plan. Record "unresolved" until self-serve Teams or Enterprise is confirmed. This is evidence discipline: an eligible plan in general does not prove that Nila's current identity is a member of it.

| Exact Cursor label | Price recorded in Access section | Eligibility result | Reason |
|---|---:|---|---|
| Hobby | Free | No | Free plan; only paid plans are included |
| Pro | $20 monthly | Yes | Explicitly included |
| Pro+ | $60 monthly | Yes | Explicitly included |
| Ultra | $200 monthly | Yes | Explicitly included |
| Teams (self-serve) | Not recorded here | Yes | Every member, no Premium seat |
| Enterprise | Not recorded here | Yes, once enabled | Through the account team and admin |
| Start in India | Rs 649 monthly | Unresolved here | Not listed as an eligible path |

The table is a transcription of the supplied Access section, not a live pricing promise. Recheck primary sources when acting on it.

## Treat the individual trial as its own leaf

The Access section of VERIFIED-FACTS states that a one-time trial is an eligibility path for individuals. "One-time" means the tree should ask whether the account is being offered that path now, not assume every individual can repeat it.

If the account shows a trial offer, save the displayed terms and follow the offered flow if Nila chooses. If no offer appears, do not claim the account is entitled to one based solely on this article. The verified fact establishes the path, while the interface establishes whether that account can use it at that moment.

[Grok Bot free trial](/blog/grok-bot-free-trial) is the canonical next page for trial details. This article keeps the trial explanation to one branch so comparison pages do not reproduce the same background.

## Resolve two subscriptions with the documented priority rule

Nila has both a Cursor subscription and a SuperGrok subscription. According to the Access section of VERIFIED-FACTS, Grok Bot uses whichever subscription has more usage when both are present. That is a routing fact, not a reason to add the prices together or assume a user chooses manually for each run.

First evaluate each subscription independently for eligibility. If neither is eligible, the combination does not create a documented path. If at least one is eligible, record the eligible plan or plans. Then note the verified "more usage" rule without inventing an allowance quantity.

[Grok Bot with both subscriptions](/blog/grok-bot-both-subscriptions) is the canonical explanation of that case. Use it rather than repeating shared subscription background in every access comparison.

## Mark unknown labels unresolved instead of forcing a yes or no

A decision tree is useful only if it has an unresolved leaf. New plans, regional variants, stale screenshots, and abbreviated internal names can fail to match the supplied list. "Unresolved" means the evidence is insufficient, not that access is impossible.

| Observed label | Tree output | Why | Next evidence |
|---|---|---|---|
| SuperGrok Plus | Eligible once linked | Named in Access section | Confirm current account identity |
| Cursor Pro | Eligible | Named in Access section | Confirm current account identity |
| Cursor Start | Unresolved from source | Price listed, eligibility not listed | Current primary plan documentation |
| "Company Cursor" | Unresolved | Tier omitted | Admin confirmation of tier and seat |
| Screenshot with no date | Unresolved | Could be stale | Current billing page |

This branch protects the article from turning silence into a product claim. It also gives Nila a precise question to ask support: "Is this exact plan label currently eligible?"

## Walk Nila through a wrong Pro assumption

On August 29, 2026, Nila writes "paid Cursor plan" in her worksheet and chooses eligible. The button is absent. She initially diagnoses a rollout bug. Then she opens billing and sees Cursor Pro, not Pro+.

On that date, the Access section of VERIFIED-FACTS said Cursor Pro at $20 per month did not include Grok Bot, while Cursor Pro+ at $60 per month did. By 23 September 2026 it says every paid Cursor plan includes Grok Bot, Pro included, so the same row would now return eligible. The failed run came from collapsing two names into one nickname, and that lesson survives the change.

Nila repairs the process. She adds a plan-label field, copies "Cursor Pro," and reaches the ineligible leaf. She can now compare documented eligible paths without treating an interface absence as a mystery.

| Failure symptom | Weak inference | Evidence-based diagnosis | Repair |
|---|---|---|---|
| Button absent | Product is broken | Plan is Cursor Pro | Record exact tier first |
| Colleague has access | All paid users qualify | Colleague may hold another tier | Compare plan labels |
| Heavy mentioned online | It costs a remembered amount | Price is not in verified source | Omit unsupported price |
| Start plan appears | Regional paid plan must qualify | Eligibility not listed | Mark unresolved and verify |

The concrete lesson is to debug the tree input before debugging the product.

## Separate eligibility from platform and configuration

An eligible subscription answers only one gate. It does not prove the current device, application version, account identity, organization policy, or service state will expose a working surface. Those questions require their own current sources.

This article intentionally does not repeat platform background because the requested claim source is the Access section. [Download Grok Bot](/blog/download-grok-bot) covers supported installation surfaces. [First Grok Bot in an hour](/blog/first-grok-bot-in-an-hour) covers initial setup. Use those canonical pages after the eligibility leaf says yes.

Likewise, an ineligible result does not mean every account under the same email domain is ineligible. It means the exact observed subscription path is not on the verified list.

## Answer the buyer who asks for the cheapest path

The strongest objection is that a decision tree is overkill because the buyer only wants the lowest published price. The Access section of VERIFIED-FACTS identifies Cursor Pro at $20 per month as the cheapest paid path and also identifies a one-time individual trial path.

That answer is useful, but it cannot replace eligibility classification. A team may need a team-managed seat. An individual may already hold an eligible SuperGrok plan. A trial may or may not be offered to the account. The cheapest published paid row does not automatically fit identity, ownership, or procurement needs.

Use [the cheapest way into Grok Bot](/blog/cheapest-way-into-grok-bot) for the price comparison. Here, record cost only after the tree identifies applicable branches.

## Verify the result without purchasing from memory

Before changing a subscription, capture four fields: account identity, exact plan label, owner type, and source date. Compare the label with current primary pricing and FAQ pages. If a team is involved, confirm the assigned seat with its administrator.

Do not purchase because an old article quotes a path. The Access section itself notes that eligibility widened on August 21, 2026 to SuperGrok Plus, Cursor Pro+, and all Cursor Teams plans, and by 23 September 2026 it lists every paid Cursor plan. Those dated changes demonstrate why current verification belongs in the workflow.

The supplied facts say the expansion was announced on August 21, 2026. They do not promise that future changes will follow the same pattern. Preserve the source URL or screenshot used for the decision.

## Use catalog jobs only after access is resolved

Eligibility should lead to a small teaching task, not immediate authority over consequential systems. [Bot Advisor](/bots/bot-advisor) can help a learner inspect role fit, [Inbox Triage](/bots/inbox-triage) illustrates classification, [Source Verifier](/bots/source-verifier) illustrates evidence checking, and [Content Planner Manager](/bots/content-planner-manager) illustrates planning work.

These catalog links are examples of jobs, not proof of Grok Bot eligibility or inclusion. The access decision comes only from the verified plan facts. After access is confirmed, choose a synthetic input and a read-only outcome for the first learning run.

[The five questions before your first bot](/blog/the-five-questions-before-your-first-bot) covers that next curriculum step once this new article exists. It does not change the subscription leaf.

## Stop this tree at eligibility

This tree does not identify Grok Bot's serving model, allowance amount, spend cap, isolation boundary, or application support. Those subjects have different verified sections and different evidence. It also does not publish a SuperGrok Heavy price because the supplied Access facts do not provide one.

If the question is model selection, use [why the model behind Grok Bot is not published](/blog/why-the-model-behind-grok-bot-is-unpublished). If the question is spending behavior, use [what you cannot cap](/blog/what-you-cannot-cap). Keeping those mechanisms separate prevents one comparison page from becoming an inaccurate product encyclopedia.

An eligibility worksheet should end with one of three words: eligible, ineligible, or unresolved. It should not drift into a claim that the user can safely run a particular workflow.

## Complete the access worksheet in five minutes

Write the exact account identity and whether it is individual or team-managed. Copy the complete plan label. Match it to a named leaf in the current primary sources. Record the result and the verification date. If the label does not match, write unresolved and the exact question you need answered.

For Nila, the finished row reads: individual, Cursor Pro, ineligible under the supplied Access section, verified August 29, 2026. She no longer needs to diagnose an absent control. She needs to decide whether to remain on Pro, use an offered one-time trial, or compare an applicable eligible path. Rechecked on 23 September 2026, the same row reads eligible, because the Access section now includes Pro.

You can now do one concrete thing: classify a real account's documented Grok Bot eligibility without guessing from the words paid, Pro, or team.

Add a second worksheet tab for evidence quality. Give each plan observation a source type: live billing label, current primary pricing page, administrator confirmation, support response, or secondary recollection. A live plan label proves what the account calls itself, while a pricing page proves what the provider currently says about that tier. Neither alone proves the other. Pair identity evidence with eligibility evidence before returning a final yes.

Practice the tree with four cards. Card one says Cursor Hobby. Card two says Cursor Pro. Card three says SuperGrok Heavy with no price. Card four says "company Cursor" with no tier. The correct leaves are ineligible, eligible, eligible once linked without a published price in the supplied facts, and unresolved. This small exercise exposes three common mistakes: trusting an August answer about Pro, inventing price, and treating an organization nickname as a tier.

Now add freshness. Record when the plan label was observed and when the eligibility source was checked. The Access section records an August 21, 2026 expansion, so a worksheet without dates can preserve a decision made before a material change. Do not set an arbitrary expiration and call it a product rule. Instead, recheck at the moment a purchase, renewal, or access diagnosis depends on the result.

For a team seat, separate three identities: the person, the organization, and the account currently signed into the application. Ask the administrator to confirm the exact tier and that the named person holds an active seat. The supplied facts document that every self-serve Teams member has access, not the internal seat-assignment process of every company. Your worksheet should show which part is verified by product documentation and which part is verified by the organization.

Handle a missing control with a two-stage diagnosis. Stage one asks whether the exact plan is eligible. Stage two, used only after a sourced yes, checks current setup documentation and account state. This order prevents Nila from reinstalling software to solve a subscription mismatch. It also prevents the reverse error of buying a plan when the observed issue belongs to setup. Preserve the result of each stage so a support request begins with evidence.

If a current source changes one leaf, update only that leaf and its date. Do not rewrite neighboring paths by analogy. A new regional plan may become eligible without changing Pro. A trial term may change without changing Teams Standard. Decision trees remain reliable when every edge has its own evidence, not when one announcement is stretched across the whole brand.

End with a purchase pause. The worksheet may identify an eligible path, but it does not authorize a subscription change. List the current plan, candidate plan, verified inclusion, published price if available, owner, and renewal consequence. Have the account owner decide. This keeps factual classification separate from procurement, which is the concrete discipline the decision tree is meant to teach.

Run a punctuation audit on copied plan names. Pro+ contains a character that can disappear in speech, notes, filenames, and spreadsheet formulas. Since September the plus sign changes weekly usage, not access, but a dropped word such as Lite still flips the leaf. Preserve both a verbatim plan-label field and a normalized comparison field. The verbatim field is evidence. The normalized field helps matching. If normalization removes a character that changes eligibility, the process must flag the row rather than silently match it to Pro.

Create an unresolved queue instead of resolving unknowns in conversation. Each row should contain the exact label, region, owner type, question, source checked, and next reviewer. A regional Start label and an abbreviated company label belong there for different reasons. The queue prevents the same unsupported assumption from being made by three people on three separate days.

When a colleague says access works, ask for facts without requesting sensitive account details. The useful evidence is the exact plan tier, owner type, observation date, and whether a trial was involved. A screenshot should redact personal and billing identifiers. The goal is to improve the decision-tree branch, not copy another person's credentials or infer that their identity proves your result.

Audit negative results too. "Ineligible" should point to an explicit exclusion in the sourced list, as SuperGrok Lite and SuperGrok Team do. If no explicit inclusion or exclusion exists, the result is unresolved. This asymmetric rule matters because the absence of a label in a dated fact sheet can reflect an unrecorded new plan rather than a permanent product decision.

Finish by reading the worksheet aloud as a claim: "This exact account, on this exact tier, matched this eligibility source on this date." If any "this" lacks a recorded value, the result is not ready. The sentence forces identity, tier, evidence, and time into one audit-friendly unit without expanding into unrelated model or platform facts.

Archive replaced decisions rather than overwriting them. When Nila's Pro row flips from ineligible in August to eligible in September, keep the earlier ineligible row with its observation date and add a new eligible row. The history explains why a control was absent before and present later without calling either observation a bug. It also stops a current tier from being projected backward onto an older incident.

Use the final tree result as the first line of a support request. Include exact plan, account owner type, source checked, result, and observed problem. Exclude passwords, payment details, and unrelated product speculation. A narrowly evidenced request is easier to answer than "Why does Grok not work?" because it shows that eligibility and setup have already been separated.

Keep reading: [the cheapest way into Grok Bot](/blog/cheapest-way-into-grok-bot), [Grok Bot free trial](/blog/grok-bot-free-trial), and [Grok Bot with both subscriptions](/blog/grok-bot-both-subscriptions).

## Frequently Asked Questions

### Does Cursor Pro include Grok Bot?

Yes, according to the Access section of VERIFIED-FACTS-2026-09-23. Cursor Pro at $20 per month is listed as including Grok Bot, as are Cursor Pro+ at $60 and Cursor Ultra at $200; the tiers differ in weekly usage. The August version of the section said the opposite, so copy the complete billing label and the date you checked. Recheck current primary pricing before changing a plan.

### Can an individual use a trial instead of a paid plan?

The Access section of VERIFIED-FACTS states that a one-time trial is an eligibility path for individuals. That does not prove a particular account is currently being offered the trial or that it can repeat one. Check the live account interface and current primary terms. Record the observed offer as evidence rather than assuming every individual receives it.

### Do all Cursor Teams plans include Grok Bot?

The supplied Access section says every member of a self-serve Cursor Teams plan has Grok Bot, with no Premium seat and no admin request, and that Enterprise access comes through the account team. Confirm the plan and that the member is on it. Do not infer eligibility from an internal label such as "company Cursor" when the documented plan is missing.

### What should I do when my plan is not in the tree?

Mark the result unresolved. Do not convert absence from the supplied list into either eligibility or ineligibility. Capture the exact plan name, region, account owner, and date, then check current primary documentation or ask support about that specific label. This is especially important for regional or newly introduced tiers whose price may be documented without Grok Bot eligibility being stated.
`,
};
