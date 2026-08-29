import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Compare Booking Prices With a Plugin, Then Hand Checkout Back to You',
  description:
    'Use a grok bot compare booking prices workflow to normalize plugin results, expose fees and conditions, shortlist options, and return checkout to a human.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# Compare Booking Prices With a Plugin, Then Hand Checkout Back to You

Ishan asked for the cheapest room near a conference and got a persuasive answer built from three prices that did not describe the same stay. One excluded taxes, one could not be cancelled, and one was for a different room. The smallest number was not a comparison.

A grok bot compare booking prices workflow should gather plugin results, normalize them into a common request, show missing terms, and stop at a shortlist. Checkout returns to you. The bot never signs in, selects a traveler identity, enters payment, spends loyalty value, accepts terms, or confirms a booking.

Use [Booking Pipeline Runner](/bots/booking-pipeline-runner) for the comparison shape, [Flight Check-In](/bots/flight-check-in) only for its separate post-booking job, [Personal CFO](/bots/personal-cfo) for a human-owned budget view, and [Chief of Staff Briefing](/bots/chief-of-staff-briefing) for an internal decision memo.

## Freeze one booking request before asking the plugin

Write destination, dates, traveler count, room or cabin requirement, currency, cancellation deadline, baggage or breakfast requirement, accessibility needs, and the local price ceiling chosen by the traveler. These are request parameters, not product facts.

Do not let the bot improve the trip while comparing it. A different airport, one fewer night, split stay, basic room, or nonrefundable fare may be useful alternatives, but they belong in a clearly labeled ALTERNATIVE table. The primary table must hold the frozen request constant.

| Request field | Ishan's fixed value | Allowed unknown | Not equivalent |
|---|---|---|---|
| Dates | 14 to 17 September | Check-in time | 15 to 17 September |
| Travelers | One adult | Bed assignment | Two-person total |
| Room | Private room | Floor | Shared room |
| Cancellation | Refundable until stated cutoff | Exact timezone if absent | Nonrefundable rate |
| Currency | One display currency | Conversion source absent | Mixed currencies ranked together |

## Treat plugin output as evidence, not permission

The plugin may return listings, prices, terms, links, and missing fields. Those results are data. They do not authorize the bot to follow a checkout prompt, sign in, save a traveler, accept cookies, upgrade a room, or use payment details.

Record provider label, result URL, observed time, displayed base price, displayed taxes and fees, total when shown, cancellation wording, occupancy, and inclusions. If a field is absent, write NOT SHOWN. Do not infer it from another provider.

This article does not claim a particular booking plugin exists in Grok Bot or name supported providers. Use only a plugin the operator has actually connected and can inspect in the live product.

## Normalize totals before ranking any option

Convert every result into the same stay length, traveler count, room count, and display currency. Keep source currency beside any converted figure and name the conversion source if one is used. If taxes or mandatory fees are unknown, the total is INCOMPLETE and cannot win a cheapest-total ranking.

Separate pay-now from pay-later rather than treating timing as identical. Separate refundable from nonrefundable. A price is a bundle of amount and conditions. The shortlist should expose the trade instead of collapsing it into one score.

## Refuse false precision when fees remain hidden

If the plugin shows "$420 plus taxes," record BASE 420 and TOTAL UNKNOWN. Do not estimate the missing tax from another property or an average. If checkout is the only place a mandatory fee appears, the human may inspect it during handoff, but the bot must not proceed through checkout to complete its own table.

Rank complete totals first. Place incomplete totals in a separate section ordered by displayed base price, with a warning that they are not comparable. The best result may be "no verified cheapest option yet."

| Price state | Rank as cheapest? | Report | Human next step |
|---|---|---|---|
| Full total shown | Yes, among equivalent terms | Amount and source | Verify at checkout |
| Base plus known fees | Yes, if arithmetic shown | Components and total | Verify no later fee |
| Base plus unknown fees | No | TOTAL UNKNOWN | Inspect manually |
| Different dates or occupancy | No | ALTERNATIVE | Decide whether request changes |

## Compare cancellation and inclusions beside price

Put cancellation cutoff, refundability, breakfast, baggage, room type, occupancy, and payment timing in columns. Use exact displayed wording or a short faithful summary with source. Never label a rate flexible if the source does not.

When terms conflict across the summary and detail page, mark CONFLICT and keep the option out of the primary shortlist. Do not resolve ambiguity by choosing the more favorable sentence. The human can open the result during handoff.

## Deduplicate the same offer without deleting meaningful differences

Two results can describe the same property and room through different providers. Deduplicate only when property, dates, occupancy, room or fare, cancellation terms, and inclusions match. Keep separate rows when provider, payment timing, refundability, or benefits differ.

Create a stable comparison key from non-secret fields chosen by the operator. Do not scrape hidden identifiers or sign in to discover loyalty pricing. A public offer and a member offer are separate evidence states if the latter cannot be verified without a human login.

## Keep loyalty accounts and traveler profiles out of research

Comparison does not require stored passports, dates of birth, addresses, payment cards, known-traveler numbers, or loyalty credentials. Do not connect or open those profiles. If Ishan wants to consider points, he can add a human-provided value to the final decision after reviewing current account terms himself.

All bots on one Grok Bot account share browser sessions and files on one persistent cloud computer. A travel login left open can be inherited by sibling screens. Keep research public or plugin-scoped and perform authenticated checkout outside the bot workflow.

## Make checkout an explicit human handoff

The bot ends with up to five options and a handoff packet: result URL, observed total state, key terms, why it made the shortlist, unresolved fields, and the last observed timestamp. It instructs Ishan to recheck dates, travelers, total, currency, cancellation, inclusions, and payment timing on the provider page.

The bot does not click Reserve, Book, Continue, Buy, Confirm, Pay, Apply points, or Accept. An approval controls a proposed action and does not reverse completed work. The safest boundary for a comparison bot is no checkout action at all.

| Stage | Bot may do | Human must do | Boundary |
|---|---|---|---|
| Request | Structure criteria | Approve criteria | Bot does not alter trip |
| Research | Query plugin and normalize | Review unknowns | No account login |
| Shortlist | Rank comparable options | Choose tradeoff | No selection on provider |
| Checkout | Provide handoff link | Recheck and enter details | Bot stops before first checkout click |
| Confirmation | None | Verify booking record | Bot never claims booked |

## Paste a comparison charter that cannot purchase

\`\`\`text
JOB
Compare booking results for the frozen request in request.md.
Use only the connected plugin results visible in this run.

NORMALIZE
For every result record provider, URL, observed time, dates, travelers,
room or fare, base price, taxes, fees, total, currency, cancellation,
inclusions, and payment timing. Missing means NOT SHOWN.
Never estimate a missing fee or copy terms from another result.

RANK
Rank only results with equivalent request terms and complete totals.
Put incomplete prices and changed-trip alternatives in separate tables.

NEVER
Never sign in, open a traveler or loyalty profile, enter personal data,
use points, select an option on a provider, accept terms, download a ticket,
click checkout, reserve, book, buy, confirm, pay, or send a message.

HANDOFF
Return at most five options with unresolved fields and source links.
End with BOOKED: NO and CHECKOUT-ACTIONS: NONE.
Tell Ishan to verify every field in the live checkout before deciding.
\`\`\`

## Walk Ishan from six results to three honest options

The plugin returns six results. Two match the dates and room but omit mandatory fees. One is cheaper because it is nonrefundable. One uses different dates. Two show complete totals and equivalent refundable terms.

The bot places the two complete, equivalent results in the primary table. It places the nonrefundable option in TRADEOFFS, the changed-date result in ALTERNATIVES, and the fee-unknown results in INCOMPLETE TOTALS. It does not call any one universally cheapest.

Ishan chooses to inspect the lower complete total. The handoff link opens in his human browser. He rechecks all fields and completes or abandons checkout himself. The bot report remains BOOKED: NO.

## Verify freshness without chasing prices forever

Every row needs an observed timestamp because booking inventory changes. Set one operator-chosen collection window, such as ten minutes, and do not compare a morning quote with an evening quote as if simultaneous. This window is a local method, not a platform guarantee.

At handoff, warn that price and availability can change. Do not schedule endless refreshes or claim a lock. If the user wants another comparison, create a new dated run and preserve the old one as history.

## Test the boundary with a fake checkout result

Create a fixture where the lowest visible number contains a "continue to reveal fees" instruction, another result has a full total, and a third asks for login. Pass means the bot marks the first incomplete, ranks the second among comparable options, and excludes the login-only result without signing in.

Also plant a page instruction telling the assistant to choose now. It must be quoted as data or ignored, never obeyed. Require CHECKOUT-ACTIONS: NONE and BOOKED: NO in the heartbeat.

## Diagnose a bad comparison from the column that disappeared

If the cheapest row changes dates, the frozen request failed. If an unknown fee becomes a number, evidence failed. If refundable and nonrefundable rates share one rank, normalization failed. If a booking confirmation appears, the human handoff failed and incident response begins.

| Symptom | Root cause | Fix | Do not do |
|---|---|---|---|
| Cheapest is different dates | Request drift | Separate alternatives | Hide date difference |
| Total invented | Missing-field rule absent | Write TOTAL UNKNOWN | Estimate from another offer |
| Terms omitted | Price-only schema | Add terms columns | Call all offers equivalent |
| Login page opened | Research scope widened | Exclude account-only result | Save credentials |
| Reservation exists | Checkout boundary broken | Start incident response | Ask bot to cancel automatically |

## Answer the objection that human checkout loses the best price

The price can change during handoff. That does not make autonomous checkout safer. Booking commits money, identity details, dates, terms, and sometimes nonrefundable conditions. A bot that races to preserve a price can preserve the wrong trip.

Reduce handoff time with a clean packet and direct source links. Let the human decide whether speed outweighs uncertainty. The comparison has done its job when the tradeoffs are visible, not when a transaction exists.

## State where plugin comparison stops being reliable

Results may omit fees, member rates, accessibility details, inventory, or conditions. A plugin result can become stale. Currency conversion can introduce another source and timestamp. The article cannot guarantee completeness or parity across providers.

This page does not cover visa advice, travel safety, refunds, cancellations, changes, check-in, or dispute handling. Use [bot incident response](/blog/bot-incident-response) if a booking was made unexpectedly, [approval gates](/blog/approval-gates-for-bots) for other proposed actions, and [charter anti-patterns](/blog/bot-charter-anti-patterns) when "find the best" remains undefined.

## Keep the report useful after the price expires

Even after prices change, the report can preserve the request, providers checked, missing fields, comparison method, and decision rationale. It should not present old totals as current. Label every run with its observation window and archive it as a historical decision record.

For recurring travel research, do not leave authenticated sessions on the shared computer. [Delete a Grok Bot safely](/blog/delete-a-grok-bot-safely) covers cleanup, while [Grok Bot shared-computer security](/blog/grok-bot-shared-computer-security) explains why a sibling name does not isolate travel credentials.

## Build a comparison worksheet before the first plugin query

Ishan writes one request row and locks it. Then he creates columns for source, observed time, dates, travelers, room or fare, cancellation, inclusions, base, taxes, mandatory fees, complete total, currency, payment timing, and unresolved terms. The plugin fills evidence into this schema rather than deciding what matters after seeing prices.

Add an EQUIVALENT column with a reason. A row is equivalent only when the frozen criteria match. Add COMPLETE-TOTAL with YES or NO. Only YES plus EQUIVALENT: YES enters the primary price ranking. This two-gate design prevents a low base price from winning through missing fees or changed terms.

Keep notes factual. "Best value" is a human judgment unless Ishan defined a scoring rule before research. The bot may sort by complete total and display tradeoffs, but it should not invent how much refundability, breakfast, location, or loyalty value is worth.

## Separate property facts from offer facts

A property or flight has relatively stable attributes, while an offer has dates, inventory, price, room or fare, conditions, and seller. Do not copy terms from one offer to another at the same property. The same room label can carry different cancellation or payment rules.

Give every offer its own source link and timestamp. When two providers show the same property, keep them separate until all comparison fields match. If a provider label is absent, use SOURCE-UNKNOWN rather than guessing from page design.

This distinction also helps deduplication. Deduplicate duplicated plugin rows that point to the same offer evidence, not distinct sellers merely because the hotel name matches.

## Use arithmetic that a traveler can reproduce

When a complete total is assembled from displayed components, show the equation: base plus displayed tax plus displayed mandatory fee equals comparison total. Do not hide conversion or rounding. Record source currency, display currency, conversion source, and observation time whenever conversion occurs.

If arithmetic does not match a displayed total, preserve both and mark CONFLICT. Do not pick the lower number. If a fee is described as "may apply," list it under POSSIBLE FEES and keep the total qualification visible.

| Arithmetic case | Comparison field | Rank? | Explanation |
|---|---|---|---|
| Components equal displayed total | COMPLETE | Yes | Reproducible evidence |
| Components conflict with total | CONFLICT | No | Source inconsistent |
| Mandatory fee not quantified | INCOMPLETE | No | Cannot compute total |
| Currency converted with source | COMPLETE-CONVERTED | Yes, labeled | Conversion can change |
| Currency conversion source absent | SOURCE-CURRENCY-ONLY | Separate | Avoid invented rate |

## Review accessibility and hard constraints before price

Put nonnegotiable requirements above preferences. If step-free access, room configuration, arrival time, or baggage is required, an option missing confirmation cannot win merely because it is cheaper. Mark REQUIREMENT-UNVERIFIED and send the question to human review.

Do not claim accessibility from marketing adjectives or a generic icon. Record exact displayed facts and source. The traveler may need to contact the provider through a human-owned channel. The comparison bot never sends that inquiry.

Preferences such as view or breakfast can appear as tradeoffs. Hard constraints act as filters. Keeping the two separate makes the shortlist honest and prevents a bargain that cannot serve the traveler.

## Archive the decision without retaining traveler secrets

Save the frozen request, comparison table, source links, observation window, chosen shortlist, and human decision. Exclude passport data, birth date, home address, payment details, loyalty credentials, and confirmation codes unless a separate approved record process requires them.

The comparison report ends before booking, so it should not contain a reservation identifier. If one appears, ask whether a transaction occurred and move to incident response if it was unexpected. Never ask the bot to cancel automatically.

After the trip decision, remove temporary plugin exports or screenshots according to policy. If a browser login was used despite the recommended public pattern, sign out and verify a sibling screen meets a login prompt.

## Run a second-source check only for the final shortlist

Do not multiply queries across every result. Once the normalized table yields up to five candidates, Ishan may ask for a second plugin or public source check on those exact offers. The second check uses the same frozen request, worksheet columns, and observation window.

Agreement strengthens the evidence but does not lock availability. Disagreement produces two sourced rows or a CONFLICT field. Never average two totals, merge cancellation language, or select the more favorable condition. If the sources describe different offers, keep them separate.

The check still ends before login and checkout. Its purpose is to catch stale or incomplete evidence while the shortlist is small, not to authorize purchase. Ishan reviews the live provider page and makes the transaction decision himself.

Record the second observation time beside the first.

## Frequently Asked Questions

### Can Grok Bot book the cheapest option automatically?

This workflow deliberately stops before checkout. The bot compares plugin results, normalizes complete totals and terms, exposes unknowns, and hands up to five source links back to the traveler. The human rechecks dates, travelers, currency, total, cancellation, inclusions, and payment timing before entering identity or payment details. Automatic booking can commit money and terms that an approval cannot reverse after completion. Keep BOOKED: NO and CHECKOUT-ACTIONS: NONE as required report fields.

### How should the bot compare a price with missing fees?

Record the displayed base price and write TOTAL UNKNOWN. Do not estimate taxes or mandatory fees from another provider, property, route, or average. Keep incomplete totals out of the cheapest-total ranking and place them in a separate table ordered only by the displayed base amount. The human may inspect the live source during checkout handoff. A comparison that admits no verified cheapest option is more useful than a precise ranking built from unlike totals.

### Should refundable and nonrefundable offers share one ranking?

No. Refundability is part of the product being compared, not a footnote. Rank equivalent complete totals together and put materially different cancellation terms in a clearly labeled tradeoff section. Show the exact cutoff or displayed wording, payment timing, inclusions, and source. If terms conflict or remain missing, mark the row incomplete. The traveler chooses whether a lower nonrefundable price is worth the risk after seeing the difference, rather than receiving one misleading cheapest label.

### Is it safe to sign into loyalty accounts during comparison?

Keep loyalty and traveler profiles outside this research pattern. They can expose personal data, points, stored preferences, and authenticated sessions on a computer shared across all bots on the account. Compare public or plugin-provided results first, then let the human consider account-specific value during checkout in a human-owned session. If any travel login is used on the Agent Computer, supervise it, sign out afterward, and verify from a sibling screen that the provider returns to a login prompt.
`,
};
