import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Why the Model Behind Grok Bot Is Not Published',
  description:
    'Learn why Grok Bot model identity cannot be named from current documentation, how failover changes the question, and how to report evidence honestly.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# Why the Model Behind Grok Bot Is Not Published

Omar sees Grok 4.6 on an xAI model page and writes it into a Grok Bot evaluation sheet. The name is real, current, and still unsupported for that sentence. He has connected a documented model on one surface to a bot whose serving set is not named.

A **serving model** is the model that actually handles a request. A model family can exist without being documented as the serving model for every product surface. This distinction is the center of the lesson.

According to the Models section of VERIFIED-FACTS-2026-08-25, Grok Bot has no model picker, uses a fixed model set with automatic failover, and bills according to the model that actually serves. The same section documents Grok 4.6 as powering Grok Build, not Grok Bot. By the end, you can write an accurate model field without inventing an identity.

## Ask which surface the evidence names

A **surface** is the product context through which a model is used, such as Grok Bot or Grok Build. Model evidence attaches to a surface. A model page, settings label, release note, and invoice can each answer different questions.

Omar's first check is simple: underline the subject of the source sentence. If it says Grok Build, it supports a Grok Build claim. It cannot silently become a Grok Bot claim because both names begin with Grok.

| Evidence sentence names | Claim it can support | Claim it cannot support | Correct note |
|---|---|---|---|
| Grok Build | Model used by Grok Build | Model used by Grok Bot | Keep surface label |
| Grok Bot no picker | Choice is unavailable | Exact serving identity | Record no user choice |
| Fixed model set | More than a guessed singleton may serve | Published set membership | Record set is unnamed |
| Actual serving model billing | Billing follows service event | User selected that model | Separate billing from choice |

This discipline prevents a true sentence from becoming false when its subject is dropped.

## Distinguish no picker from no model

The Models section of VERIFIED-FACTS quotes the product documentation: Grok Bot has no model picker for members or admins, and user or admin choice is not planned. A **model picker** is an interface control that lets a person select which model handles a request.

No picker does not mean no model exists. Every served request necessarily uses some serving system. It means the user-facing choice is unavailable. It also does not reveal the hidden set.

Omar therefore replaces "Model: Grok 4.6" with two fields: "User-selectable model: no" and "Serving model identity: not published in the supplied Models facts." The new entry communicates what is known without pretending absence of choice is evidence of identity.

## Read fixed set as routing architecture, not a name

According to the Models section of VERIFIED-FACTS, Grok Bot uses a fixed model set per surface with automatic failover. A **fixed model set** is a provider-controlled group available to that surface. **Failover** is automatic routing to another serving option when the preferred path cannot serve.

The fact supports an architectural statement: requests need not be tied to one user-selected model. It does not publish the members of the set, the normal routing order, or the conditions for switching.

| Phrase in the source | Safe interpretation | Unsupported extension |
|---|---|---|
| Fixed model set | Provider controls a bounded set | The set has a particular named member |
| Per surface | Different product contexts may differ | All surfaces share one model |
| Automatic failover | Serving can route automatically | Failover follows a known public sequence |
| No choice | User and admin cannot select | Identity can be inferred from defaults |

The careful report preserves the unknowns instead of filling them with the most familiar model name.

## Keep Grok 4.6 attached to Grok Build

The Models section of VERIFIED-FACTS says Grok 4.6 is real and current, has a February 1, 2026 knowledge cutoff, and powers Grok Build. Every part of that sentence belongs to Grok Build evidence.

It does not say Grok 4.6 powers Grok Bot. Writing "Grok Bot runs Grok 4.6" would be an unsupported transfer, even though the model and company are real. The correct comparison row is "Grok Build: Grok 4.6 documented" and "Grok Bot: serving set not named in supplied facts."

[Which surface reads SKILL.md](/blog/which-surface-reads-skill-md) examines another place where Build and Bot are often conflated. Keep the shared warning short: a capability documented for Build does not automatically belong to Bot.

## Interpret billing without turning it into a picker

According to the Models section of VERIFIED-FACTS, billing follows the actual serving model. That tells Omar that service-side routing can affect accounting. It does not give him a control for selecting that model.

An invoice or usage record might identify a billing category, but this article does not claim that it exposes a model name to the user. The verified source only supports the rule about actual serving. If Omar observes a label, he should preserve the label, timestamp, and source rather than generalize beyond the event.

The useful separation is choice, routing, and billing. Choice asks who selects. Routing asks what serves. Billing asks how the served event is charged. One answer cannot be copied into the other columns.

## Treat the settings inconsistency as an inconsistency

The Models section of VERIFIED-FACTS records a documented inconsistency: a settings page lists "Default Model, when model selection is available," while the teams documentation says Grok Bot has no picker. The correct response is not to choose the sentence you prefer.

The phrase "when model selection is available" may describe a broader settings system or a conditional state. That is an inference, not a verified resolution. Label the conflict and keep the stronger scope visible: the no-picker statement explicitly names Grok Bot members and admins.

| Source fragment | Scope visible in supplied facts | Tension | Reporting choice |
|---|---|---|---|
| No model picker | Grok Bot members and admins | Conflicts with loose settings label | State no picker |
| Default Model setting | When selection is available | Availability not established here | Note inconsistency |
| Fixed set and failover | Per surface | Does not name default | Do not infer a model |
| Billing follows serving model | Served event | Does not establish selection | Keep separate column |

An honest contradiction note is more useful than a confident synthesis unsupported by the text.

## Walk Omar from a wrong label to an evidence matrix

Omar's evaluation begins with one row: "Grok Bot, Grok 4.6, fixed." His cited page actually names Grok Build. A reviewer challenges the row. Omar first tries to defend it by saying both products are from xAI. That is company-level association, not surface-level evidence.

He rebuilds the row as a matrix. The Grok Bot choice cell says no picker, sourced to the Models section. The routing cell says fixed set with automatic failover. The identity cell says unpublished in supplied facts. The Grok Build identity cell says Grok 4.6.

Thirty days later, a new serving observation would not retroactively validate his original claim. It would be new dated evidence with its own scope. The matrix makes updates local instead of rewriting history.

## Diagnose model claims by their evidence failure

Most bad model claims are not invented from nothing. They are produced by a recognizable evidence error.

| Symptom in a draft | Root error | Repair | Verification question |
|---|---|---|---|
| Bot named as Grok 4.6 | Surface transfer | Restore Build label | Which product does source name? |
| "Default" treated as chosen | Settings overread | Note conditional wording | Is selection available to Bot? |
| One observed result defines all runs | Sample overreach | Scope to dated event | Does source claim stable identity? |
| Billing label treated as picker | Category collapse | Split billing and choice | Who selected the serving route? |
| No picker treated as random | Unsupported mechanism | Say provider-controlled fixed set | What does source actually state? |

Each repair removes a conclusion. That is progress because the remaining statement is defensible.

## Answer the evaluator who needs a comparison row

The strongest objection is practical: procurement tables demand a model name. "Unpublished" feels unhelpful beside competitors that name theirs. But a guessed name creates a false precision that can drive the wrong benchmark or contract question.

Use four columns instead: picker availability, routing description, published identity, and source date. Grok Bot can then be compared as "no picker," "fixed set with automatic failover," "identity not published in supplied facts," and "verified August 25, 2026."

This is more informative than forcing a model name. It tells a buyer which aspects are provider-controlled and which evidence is missing. If named identity is a hard requirement, the row exposes that gap directly.

## Design tests around outcomes you can observe

If model identity is unpublished, evaluate the workflow outcome rather than pretending a model label explains it. Choose a synthetic task, fixed input, expected output shape, and scoring rubric. A **rubric** is a set of explicit criteria used to judge a result.

Omar selects eight synthetic source notes, asks for a claim table, and scores citation presence, unsupported claims, omissions, and format errors. Eight is his declared exercise size, not a product limit. He records date and surface with every run.

[Source Verifier](/bots/source-verifier), [Claim Provenance Tracker](/bots/claim-provenance-tracker), [Citation Checker](/bots/citation-checker), and [Literature Scan](/bots/literature-scan) provide catalog jobs that inspire evidence-focused test shapes. They do not reveal the model behind Grok Bot.

## Avoid model folklore in incident reports

When an output changes, teams often say "the model must have changed." The verified Models facts permit automatic failover, but they do not prove that failover caused a particular variation. Prompt content, available context, external state, and evaluation noise can also change an outcome.

Write the observation first: "The August 29 run omitted two required source rows." Then record input, surface, time, and visible service information. List model routing as one hypothesis only when supported. Do not turn the architecture fact into a diagnosis of an individual incident.

[What a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits) covers context inheritance. [Bot failure modes](/blog/bot-failure-modes) covers broader diagnosis. Those mechanisms deserve their own evidence instead of being renamed as model changes.

## Verify a future model announcement at the right scope

If new documentation names a model, capture the exact subject, date, qualifier, and URL. Ask whether it describes Grok Bot, Grok Build, an API, or a broad Grok family. Ask whether it says always, default, available, or powered by. Those verbs are not interchangeable.

Then update only the supported field. A newly published default would not necessarily erase failover. A newly available model would not necessarily create a picker. A named billing model for one event would not necessarily describe every event.

The Models section is dated August 25, 2026. Product documentation changes, so the safe claim includes its verification date. This article explains how to reason from evidence, not how to freeze a model identity forever.

## Keep shared Bot background on canonical pages

Model identity is not improved by repeating subscription, computer, cookie, deletion, or approval facts. For those subjects, use [who can actually run Grok Bot](/blog/who-can-actually-run-grok-bot), [screens are not boundaries](/blog/screens-are-not-boundaries), [where a bot cookie actually lives](/blog/where-a-bot-cookie-actually-lives), and [what an approval actually governs](/blog/what-an-approval-actually-governs).

This page makes one model-specific argument: documented Build identity cannot fill an unpublished Bot identity. Keeping that scope narrow prevents comparison articles from becoming a thin cluster that repeats the same product biography.

The same discipline applies to [Bot Advisor](/bots/bot-advisor): a catalog description can help choose a job, but it cannot establish hidden serving architecture.

## Write the model field without guessing

Open your evaluation sheet and replace a single "model" column with four fields: surface, user choice, routing, and published serving identity. For Grok Bot, enter: Grok Bot; no member or admin picker; provider-controlled fixed set with automatic failover; set members not published in the supplied Models facts.

Add a source date and a contradiction note for the conditional Default Model setting. Put Grok 4.6 only in a Grok Build row, where the supplied Models section supports it. If a stakeholder demands a Bot model name, show the evidence gap rather than borrowing the Build value.

You can now do one concrete thing: complete a Grok Bot model entry that distinguishes known routing behavior from an unknown model name.

Build an evidence ledger beside the matrix. Each row should include the exact claim, product surface, source page, source wording paraphrased in your own words, verification date, and unsupported alternatives rejected. For the identity row, write that the set members are not named in the supplied Models facts. In the rejected-alternatives field, record that Grok 4.6 is attached to Grok Build. This makes the absence a researched result rather than an empty cell.

Run a subject-swap review on every sentence. Replace "Grok Bot" with "Grok Build" and ask whether the citation becomes a better fit. If it does, the original likely transferred evidence across surfaces. Then inspect the verb. "Powers," "available," "default," "selected," and "served" describe different relationships. Preserve the source's relationship instead of choosing the strongest-sounding verb.

Add confidence labels based on evidence type, not personal certainty. Use documented for a direct primary statement, observed for a dated interface or run, inferred for a conclusion drawn from multiple facts, and unknown for a missing fact. Omar's no-picker field is documented. A specific run's output is observed. A guess that failover caused a change is inferred at best. The serving identity remains unknown from the supplied facts.

Test the comparison table with a skeptical reader. Ask them to answer four questions without additional explanation: Can a member choose? Can an admin choose? Is routing fixed to a single named model? Is Grok 4.6 documented for Bot? The sourced answers are no, no, not according to the fixed-set and failover description, and no. If the table encourages a different answer, revise its labels.

When recording benchmark results, freeze the task text and input files, then version the rubric. A changed score without controlled inputs proves only that two runs differed. It does not identify a model change. Record visible errors by class, such as unsupported claim, omitted row, or schema failure. These categories remain useful even when serving identity stays unpublished.

Write an incident note that resists folklore: "On August 29, the Grok Bot run omitted two of eight required rows. The surface and inputs were unchanged from the prior saved test. The supplied documentation permits automatic failover, but no event evidence identifies routing as the cause." This sentence distinguishes architecture from diagnosis and gives the next investigator real observations.

Finally, decide whether unpublished identity is a blocker. If a named model is required for policy, evaluation reproducibility, or a customer commitment, mark the requirement unmet. Do not replace a missing fact with a benchmark guess. If outcome testing is sufficient, proceed with the dated rubric and disclose provider-controlled routing. The matrix helps stakeholders choose consciously rather than arguing over an invented model label.

Add a provenance check to slide decks and copied spreadsheets. Model claims often lose their source when moved from a research note into a comparison table. Require the cell comment or adjacent column to carry the surface and source date. A naked "4.6" cell is not self-explanatory. The provenance field should say that Grok 4.6 belongs to the documented Build row, not the Bot row.

Review screenshots as observations rather than documentation. A settings control captured on one date may show a label, but it does not automatically resolve the documented inconsistency or establish availability to all users. Record the account context and exact visible text. Then compare it with the primary statement scoped to Grok Bot members and admins. If they conflict, preserve the conflict for escalation.

Avoid reverse-engineering identity from writing style. Similar phrasing, latency, or formatting across two surfaces is not model provenance. Different routes can produce similar outputs, and one route can produce varied outputs. Behavioral resemblance may inspire a test, but it cannot fill the identity field. Keep the evaluator focused on requirements that can be observed and scored.

Create a change protocol for future announcements. One person captures the primary source, another checks its surface and verbs, and a third updates the matrix only after both agree. Three reviewers are an arbitrary internal design, not a product requirement. The separation is useful because excitement around a named model makes subject-transfer errors especially easy.

Teach the unknown explicitly to stakeholders. Say, "The provider documents control and failover behavior but does not name the Grok Bot serving set in our supplied facts." That sentence is not evasive. It distinguishes a provider-controlled architecture from a user-controlled selector and gives procurement a precise follow-up question.

If benchmarking continues, keep a baseline pack of fixed synthetic inputs and expected properties. Re-run after a dated product change, but compare error classes rather than claiming the cause. A better score may reflect routing, service updates, or ordinary variation. The evidence matrix tells you what changed in documentation; the benchmark tells you what changed in observed outcomes. Neither should impersonate the other.

Before publication, search the draft for every named model. For each occurrence, demand a surface in the same sentence or immediate context. Search also for "default," "uses," and "runs." These verbs often hide an unsupported identity. Rewrite them into the narrower sourced facts: no picker, fixed set, automatic failover, or Build-specific Grok 4.6.

Give procurement an explicit requirement test. If the requirement says "administrator must lock every member to model X," the supplied Models facts show no member or admin picker, so the requested choice mechanism is not available. If the requirement says "provider-controlled routing is acceptable when outcomes pass our rubric," the team can evaluate that condition without naming the set. Turning model curiosity into a requirement reveals whether the unknown matters.

Separate knowledge cutoff from current-world accuracy. The supplied Models facts give Grok 4.6 a February 1, 2026 cutoff in the Build context. They do not give Grok Bot that identity or cutoff. Even for Build, a cutoff does not prove every answer before that date is correct. Evidence-based tasks still need source checks against the supplied material.

When a vendor response arrives, store the question beside the answer. "Which model is used?" may produce a broad family name, while "Which models can serve Grok Bot under automatic failover on this date?" asks for the set relevant to the matrix. The exact question prevents a vague answer from being expanded after the fact.

End every model comparison with a disclosure sentence that survives copying: "Grok Bot's serving model set is not named in the sources verified for this entry; Grok 4.6 is documented for Grok Build." A reader who sees only that row still receives the surface distinction and cannot reasonably mistake the Build fact for a Bot claim.

Keep reading: [which surface reads SKILL.md](/blog/which-surface-reads-skill-md), [what a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits), and [bot failure modes](/blog/bot-failure-modes).

## Frequently Asked Questions

### Does Grok Bot run Grok 4.6?

The supplied Models section does not support that claim. It says Grok 4.6 powers Grok Build. For Grok Bot, it documents no picker, a fixed model set per surface, and automatic failover without naming the set. Keep Grok 4.6 attached to Build unless a current primary source explicitly names Grok Bot.

### Can a member or administrator choose the Grok Bot model?

No, according to the Models section of VERIFIED-FACTS-2026-08-25. The documented statement says there is no model picker for members or admins and that user or admin choice is not planned. This answers who chooses, not which unnamed model serves a particular request. Record choice and identity in separate fields.

### What does automatic failover mean for a benchmark?

It means the verified routing architecture can serve through a provider-controlled fixed set rather than a user-selected singleton. The source does not publish set members or failover conditions. Record the surface, time, fixed input, rubric, and observed outcome for each run. Do not attribute a changed score to failover without event-level evidence.

### How should I report the Default Model setting?

Report it as a documented inconsistency. The supplied Models section notes a settings label saying "Default Model, when model selection is available," alongside explicit no-picker language for Grok Bot members and admins. Do not use the conditional settings text to invent current Bot selection. Preserve both statements, their scope, and the verification date.
`,
};
