import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Log a Competitor Price With a Source, Never Change Yours',
  description:
    'Build a grok bot competitor pricing log with stable fields, archived sources, currency controls, reversal checks, and no power to reprice your plans.',
  date: '2026-08-29',
  category: 'Tutorial',
  content: `
# Log a Competitor Price With a Source, Never Change Yours

Omar's Monday alert says a competitor doubled its price from $29 to $58. By lunch, the page shows $29 again. The first capture used monthly billing, the second used a per-seat annual equivalent, and neither preserved the selected toggle. The alert was numerically precise and operationally useless.

A grok bot competitor pricing workflow needs more discipline than a page diff. It must hold market, currency, billing period, tax treatment, and buyer state constant; extract named fields; archive the visible source; and distinguish a persistent change from dynamic presentation. Most importantly, it must never convert a competitor observation into a change on your own pricing page.

This tutorial uses [Competitor Pricing Watch](/bots/competitor-pricing-watch) as the collector and [Source Verifier](/bots/source-verifier) as a useful second-check pattern. It covers published competitor prices only. It does not cover quoting customers, negotiating discounts, or deciding your pricing strategy.

## Write the pricing question as a field-level decision

"Watch pricing" is too vague. Omar writes a sharper question: "Which published plan field changed, from what value to what value, under the same viewing conditions?" That question forces the output to preserve the old observation, new observation, and conditions required for a fair comparison.

The review decision is whether a change deserves investigation. It is not whether Omar's company should match it. Competitor movement is one input among customer research, unit economics, packaging strategy, and contractual commitments. An automatic repricing loop would let an external page control your commercial terms.

Name the fields before collection begins: plan name, price, billing period, billing unit, seat minimum, trial length, usage limits, overage rate, add-ons, and whether the page has changed to contact sales. A monitor that cannot place an observation into one of these fields should store the capture for review rather than improvise a category.

| Question | Collector can answer | Collector cannot answer | Owner |
|---|---|---|---|
| Did a published number change? | Yes, with matched conditions | Why it changed | Research owner |
| Did a feature move tiers? | Yes, if both pages show it | Whether customers value it | Product marketing |
| Should our price change? | No | Commercial recommendation by itself | Pricing committee |
| Should a customer quote change? | No | Contract and exception handling | Deal owner |

## Fix country, currency, tax, and billing period in the brief

Price pages often adapt to location, currency, browser state, or selected billing period. Omar records the test conditions beside every URL: country view, currency, monthly or annual selection, whether prices include tax, buyer type when publicly selectable, and the exact plan scope.

Do not compare a monthly price to an annual price divided by twelve unless the output explicitly identifies the conversion. Prefer the values as published. If the page says "$240 billed annually" and also "$20 per month," store both text fields. A normalized monthly equivalent may be a derived field, but it must never replace the source wording.

Hold the condition with the most legitimate, reproducible public path. Do not defeat location controls or impersonate a buyer. If the site offers a country selector, use it consistently. If a page changes based on an uncontrolled network location, report that limitation and preserve the observed region.

## Capture the page twice before calling a number changed

The catalog setup loads each page twice, 60 seconds apart. Sixty seconds is a declared workflow interval from that bot listing, not a claim that all experiments resolve in one minute. The second load catches rotating components, client-side failures, and unstable personalization before they enter the durable log.

Omar compares structured fields from both loads. If they disagree, the run is unstable. He archives both captures, records the differing field, and does not update the baseline. At the next scheduled run, the monitor tests again. A baseline should represent a reproducible observation rather than whichever render happened to arrive first.

| Load A | Load B | Baseline action | Alert action |
|---|---|---|---|
| Same value and conditions | Same value and conditions | Eligible to compare | Continue field diff |
| Different billing toggle | Different value | Do not update | Configuration failure |
| Same conditions | Different value | Do not update | Mark unstable presentation |
| Page loads | Page errors | Do not update | Mark unchecked |
| Both pages error | No observation | Keep old baseline | Report unchecked, never unchanged |

Two captures do not prove permanence. They prove only that a value survived one immediate repeat. The later reversal check handles longer experiments.

## Extract a plan table instead of comparing raw HTML

Raw HTML changes for cookie banners, tracking scripts, accessibility attributes, testimonials, and layout experiments. A pricing monitor should compare a stable schema that represents commercial meaning. Store the raw capture behind it, but diff the schema.

For each plan, extract the exact displayed name, published monetary strings, billing unit, minimum, numeric limits, overage language, trial, add-ons, and contact-sales state. Preserve qualifiers such as "starting at" or "up to." Removing those words can turn a conditional price into a false fixed offer.

Plan names are not reliable keys by themselves because names change. Omar uses a local plan identity with an alias history. If "Growth" becomes "Scale" and the contents remain similar, the output reports a rename rather than deleting one plan and adding another. A human confirms ambiguous mapping before the baseline changes.

## Store source text beside every normalized value

Normalization makes comparison possible, but source text makes it defensible. If Omar stores numeric 20 without "$20 per user per month, billed annually," later reviewers cannot tell whether the billing unit or period changed.

Each field record should carry the source string, normalized value when safe, page URL, capture time, viewing conditions, and a pointer to the archived page or screenshot. Derived calculations such as percent change belong in separate fields with their formula.

| Stored field | Source text | Normalized value | Important qualifier |
|---|---|---:|---|
| Monthly display | $24 per seat / month | 24 | Per seat |
| Annual total | $240 billed yearly | 240 | Total annual charge |
| Seat minimum | Minimum 5 seats | 5 | Minimum purchase |
| Trial | Try free for 14 days | 14 | Days, not billing grace |
| Overage | Contact us | None | No published numeric rate |

Never fill a missing field by carrying forward a value silently. "Not shown in this capture" is different from zero, removed, or unchanged. The [Claim Provenance Tracker](/bots/claim-provenance-tracker) offers a useful model for keeping a claim attached to its source.

## Separate page facts from your commercial interpretation

The fact block says: plan, field, old source string, new source string, matched conditions, URLs, and capture times. The interpretation block may say the move appears to simplify packaging or raise the entry point. It must be labeled interpretation and written so a reviewer can delete it without losing evidence.

Do not infer motive from one page. A plan could be an experiment, a regional offer, a correction, or a true packaging shift. Even a persistent field change does not reveal customer response. Omar bans sentences such as "the competitor is struggling" because no published price establishes that claim.

This fact-interpretation split also makes corrections painless. If the commercial story changes, the archived observation still stands.

## Make repricing impossible inside the monitoring path

The boundary is: "Never edit our pricing page, billing catalog, product entitlements, quote, discount, proposal, or customer record. Produce a sourced change log for human review only." That list names the surfaces where an apparently harmless recommendation can become a commitment.

Do not connect the monitor to Stripe, a CMS, a product flag system, or your quoting tool. A written boundary helps operators recognize an out-of-scope request, but it is not itself a permission control. Read [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) before treating any charter sentence as enforcement.

Paste and adapt this charter:

\`\`\`text
Role: published competitor pricing recorder

For each approved URL:
1. Apply the recorded country, currency, tax, and billing-period conditions.
2. Load twice, 60 seconds apart, and stop if structured fields disagree.
3. Extract plan name, monetary source strings, billing unit, seat minimum,
   numbered limits, overage text, trial, add-ons, and contact-sales state.
4. Compare fields to the last verified baseline.
5. Attach page URL, both capture times, conditions, archived evidence, old value,
   new value, and a separately labeled interpretation.
6. If a page fails, report unchecked. If a change reverses next run, label it a
   probable experiment and preserve the full history.

Boundary:
Never edit our prices, billing catalog, entitlements, quotes, discounts,
proposals, or customer records. Never sign up or fill a form to reveal a price.
\`\`\`

For the difference between approving an observation and approving an action, use [What an Approval Actually Governs](/blog/what-an-approval-actually-governs).

## Walk Omar from baseline to a verified plan change

On September 1, Omar configures three public pricing URLs in US dollars with annual billing selected. Three is his pilot choice. He captures each page twice and manually verifies 27 fields across six plans. One page alternates a testimonial but produces the same structured plan table, so the raw noise never enters the comparison.

On September 8, the monitor finds that the "Team" plan source string changed from "$24 per seat per month, billed annually" to "$30 per seat per month, billed annually." Both immediate captures agree. The seat minimum remains five, the annual selection remains active, and the archived pages show the same country and tax context.

The monitor calculates a 25 percent increase as a derived value: (30 minus 24) divided by 24. It labels the interpretation "published per-seat entry cost increased under matched annual conditions." It does not claim revenue strategy or recommend a matching increase.

On September 9, Omar reopens both archives, checks the visible strings, and approves the log entry. A pricing committee may later use it as one input. The monitoring workflow ends before that meeting and has no path into Omar's commercial systems.

## Treat a reversal as evidence, not embarrassment

On September 15, a different plan appears to fall from $49 to $39. The two immediate captures agree, so the monitor produces a provisional alert. Six hours later, the configured page returns to $49 under the same conditions.

Omar does not delete the alert. He relabels the sequence "probable pricing experiment or transient presentation" and retains all three captures. The evidence now says that public viewers could see two prices, not that the company completed and reversed a formal price cut.

This handling protects the history from hindsight. A monitor that overwrites the middle observation cannot explain screenshots another teammate may have seen. A monitor that calls the $39 value a settled change overstates it.

| Symptom | Likely cause | Correct response | Check that may disprove it |
|---|---|---|---|
| Price returns next run | Experiment or transient render | Relabel, preserve sequence | Repeat matched capture |
| Every plan changes | Billing toggle drift | Reject run | Confirm selected period |
| One region differs | Regional pricing | Split region baselines | Reopen each public selector |
| Feature appears missing | Collapsed section failed | Mark extraction incomplete | Inspect archived page |
| Error page yields empty table | Fetch failure | Report unchecked | Load source manually |

## Refuse to call an error page unchanged

The most expensive monitoring mistake is false reassurance. If the page times out, blocks the network, renders an empty shell, or changes beyond the extractor's schema, the state is unchecked. It is not unchanged.

Every run summary should list total configured pages, successfully compared pages, unstable pages, failed pages, and qualifying changes. The counts must reconcile. If six pages were configured, four compared, one unstable, and one failed, a "no changes across six" sentence is false. Say "no qualifying changes across four compared pages; two unchecked."

Static egress addresses from some hosted environments can be treated differently by websites. That possibility does not authorize bypassing controls. It makes transparent failure reporting more important. Keep the source-access problem separate from the pricing conclusion.

## Answer the founder who wants an automatic matching rule

The strongest case for automatic matching is speed. If a commodity competitor cuts price, waiting for a meeting may cost conversions. Yet matching a scraped page is still a weak control loop. The source can be regional, experimental, erroneous, or attached to a different billing unit. Your margins, contracts, positioning, and existing customer promises are not present in the competitor capture.

If the business truly needs rapid response, create a human-owned escalation with a deadline. The monitor can flag a verified field change and assemble evidence. A named commercial owner can decide whether to test messaging, revise a new-customer offer, or do nothing. That keeps urgency without letting an external webpage write into your billing catalog.

## Verify the detector with a planted pricing page

Build a small local fixture or document with two plans and a controllable billing toggle. Plant eight cases: tracking markup, a testimonial change, a monthly-to-annual toggle drift, a true price change, a seat-minimum change, a plan rename, a contact-sales transition, and a failed render. Eight is an arbitrary test set.

Write the expected result before running. Only the meaningful fields should alert. Toggle drift and render failure should prevent baseline updates. The rename should preserve plan identity pending human confirmation. Every alert must open an archive containing the source string and conditions.

Then change the true price back on the next run. The workflow should retain both captures and relabel the event rather than erase it. This is the failure-sensitive check: if the baseline silently becomes the reverted value with no history, the test fails.

The general verification method in [Bot Trial Run Method](/blog/bot-trial-run-method) can help you structure the pilot, while this fixture supplies pricing-specific cases.

## Keep the review packet compact enough to inspect

An alert should fit one screen before attachments: competitor, plan, field, old source, new source, conditions, percent change when mathematically valid, both timestamps, source URL, archive link, and interpretation. If several fields change together, group them under one plan event but keep individual rows.

Include a reviewer checkbox for currency, billing period, billing unit, seat minimum, and tax context. Those five comparisons take little space and catch the most consequential normalization mistakes in Omar's workflow. The checkbox is evidence of a performed review only when it carries a reviewer and time. An empty template proves nothing.

Omar limits the weekly review to field changes that passed stability checks. He can still search the archive for non-alerting observations. This prevents the digest from becoming a duplicate of the database.

Use a clear status vocabulary: verified baseline, provisional change, verified change, probable experiment, unstable, and unchecked. Do not use "confirmed" when only the bot has looked. Omar reserves verified change for a human-rechecked packet.

## Reconcile plan arithmetic before accepting a monetary change

Published price pages sometimes show several representations of the same offer: a monthly display, annual total, discount percentage, seat minimum, and estimated checkout total. Treat those values as a consistency check. If the page says $20 per seat per month billed annually with five seats minimum, the implied minimum annual subtotal is $1,200 before any tax or add-on: 20 multiplied by 5 multiplied by 12. That arithmetic is a derived check, not a substitute for the source strings.

When representations disagree, do not choose the one that makes the cleanest alert. Preserve all visible values and mark the record inconsistent. The cause may be a page defect, a toggle rendered late, tax treatment, or an extraction error. Omar asks a human to reopen the archive under recorded conditions.

Discount calculations also need a defined base. A page may compare annual billing with a published monthly plan, while the plan names or included units differ. Calculate a percentage only when old and new values share currency, unit, period, tax treatment, and plan scope. Otherwise report exact strings and say the percent is not comparable.

## Version the schema when a competitor changes packaging

A field schema that worked for per-seat plans may fail when a competitor introduces usage credits, platform fees, or bundled tiers. Do not force the new page into old columns and call missing values removals. Create a proposed schema version, map fields that remain equivalent, and send ambiguous mappings to human review.

Preserve the competitor's own unit names in source fields. A "credit," "run," "request," and "task" cannot be normalized into one unit unless the page defines an equivalence. If a plan bundles two units, store both limits and their overage language. The change event may then say packaging became non-comparable rather than pretending to calculate a percentage.

Omar keeps the last valid baseline immutable during migration. He runs old and new extraction side by side on the same archived page, then documents which fields are identical, transformed, split, merged, or newly unrepresentable. Only after the bridge passes does he compare the live page with history.

The [Citation Checker bot](/bots/citation-checker) can inspect whether the migration memo's claims match its archived sources. For pricing data, the crucial test is reconstruction: a reviewer should be able to recover every alerting field from the visible old and new pages without trusting the normalization code.

Archive migrations themselves. Record old schema version, new version, mapping author, review date, fixture results, and first live run. If the new extractor later proves wrong, Omar can rebuild history from raw captures rather than accepting a corrupted baseline. Keep corrected events linked to their superseded versions so an earlier internal brief does not remain silently authoritative.

## Stop this method before private quotes and strategy

This workflow applies to prices a normal public visitor can observe. It stops at login walls, sales forms, negotiated quotes, reseller portals, and customer-specific contracts. Record "contact sales" when that is the published state. Never fabricate the hidden price or start a trial to obtain it.

If you are collecting creative claims rather than plan fields, use [Clip Competitor Ads Into a Folder, Never Launch Yours](/blog/competitor-ad-watch-never-launches-ads). If the changing surface is a homepage, use [Diff a Competitor Homepage and Allow a Quiet Week](/blog/competitor-website-watch-could-not-compute). Those workflows need different noise filters and evidence schemas.

Pricing observation also does not answer whether a bot may hold a login. [What a Pasted Prompt Inherits](/blog/what-a-pasted-prompt-inherits) covers why instructions do not narrow credentials already available to the environment. Keep reading: [How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) turns the no-repricing rule into a testable sentence.

## Frequently Asked Questions

### Can Grok Bot monitor a price hidden behind a sales form?

Not in this workflow. The grok bot competitor pricing monitor is restricted to information available on published pages to a normal visitor. It should not submit a form, start a trial, create an account, impersonate a buyer, or infer a hidden number. Record the published state as "contact sales" with the URL and capture time. If your organization legitimately receives a private quote, handle it under the permissions and confidentiality rules for that document, not as public competitor monitoring.

### How should annual and monthly competitor prices be compared?

Preserve each value exactly as displayed, including billing period, billing unit, annual total, and qualifiers. A monthly equivalent can be calculated in a separate derived field when the source supplies enough information, but it must not replace the published strings. Compare like with like under the same toggle and viewing conditions. If one capture is monthly and another is annual, reject the diff as configuration drift. That discipline prevents a billing-period change from becoming a false price alert.

### When is a competitor price change verified?

Use staged language. Two immediate matching captures make a change eligible for a provisional alert, not permanently true. A later matched run helps detect reversals or experiments. Reserve "verified change" for an operator who reopens the archived old and new evidence, checks conditions, and approves the field mapping. Keep every reversal in history. This process cannot prove the competitor's motive or future price, but it can prove what your configured public view showed at specific times.

### Should a competitor price cut trigger an automatic cut to our price?

No. A competitor page does not contain your margins, contracts, positioning, customer research, or exception rules, and the observed value may be regional or experimental. The monitor should produce a sourced field-level packet and stop. A named commercial owner can review it on a defined deadline and decide whether to investigate, test, respond, or ignore it. Disconnecting the monitoring path from your CMS, billing catalog, quote tool, and entitlements makes that boundary practical rather than merely aspirational.
`,
};
