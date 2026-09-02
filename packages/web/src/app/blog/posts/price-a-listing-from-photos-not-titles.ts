import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Judge a Marketplace Listing by Its Photos, Not Its Title',
  description:
    'Learn to price a listing from photos by catching empty-case pricing, grading visible contents and condition, and refusing title-led comparisons before you offer.',
  date: '2026-08-31',
  category: 'Tutorial',
  content: `# Judge a Marketplace Listing by Its Photos, Not Its Title

A listing titled "complete cordless drill kit" can be a listing for a case, a charger, and six loose bits. The title names the object the seller wants you to imagine. The photos show the object you might actually receive.

That gap creates a specific failure: empty-case pricing. A watcher reads the title, finds completed listings for complete kits, compares the ask with those kits, and reports a bargain. It never establishes that the drill, battery, or other value-bearing parts appear in the seller's own photos. The arithmetic can be flawless while the item identity is wrong.

This tutorial gives you a photo-first method for marketplace research. You will turn every visible component, missing view, condition mark, and uncertainty into a structured evidence record before the bot selects a comparable. The result is not an appraisal and never a buy instruction. It is a review packet that lets you see why the listing was matched, rejected, or left unknown.

Use [Marketplace Listing Scout](/bots/marketplace-listing-scout) when you want a watcher shaped around public marketplace listings. Use [Bargain Scout](/bots/bargain-scout) when your starting point is a written specification and a maximum acceptable price. Both stop before contact or payment. This page supplies the missing visual test that prevents a polished title from choosing the wrong comparison set.

## Name empty-case pricing before you compare any listing

Empty-case pricing happens when the bot values the object named by the title even though the photos establish only packaging, accessories, fragments, or an incomplete bundle. The literal case is easy to picture: a closed molded case appears in the first photo, the title names the full tool kit, and the open-case photos show vacant shaped slots. The same failure appears with empty boxes, accessory-only electronics listings, furniture missing hardware, and sets photographed with fewer pieces than the title promises.

The failure is not simply “bad condition.” Condition asks how worn an identified item is. Empty-case pricing asks whether the value-bearing item is present at all. A scratched drill and an absent drill require different comparable sets. Calling both “used” destroys the distinction that matters.

Nor is this just a deceptive-seller problem. A seller may write a careless title, reuse a category suggestion, or assume the photographs make the missing part obvious. Your method should work without guessing intent. Record what the page claims. Record what the seller's own images show. If those records disagree, the photo-supported identity controls the comparison, and the disagreement remains visible for human review.

| Failure | What the shortcut does | What the photos establish | Correct result |
|---|---|---|---|
| Empty-case pricing | Prices the named complete kit | Case and accessories appear, core tool does not | Reject complete-kit comparables |
| Bundle inflation | Counts every item named in the title | Fewer pieces are visible than promised | Compare only the evidenced bundle |
| Condition laundering | Accepts “excellent” as the grade | Cracks, corrosion, stains, or repairs are visible | Grade from visible defects |
| Stock-photo substitution | Treats a catalog image as possession evidence | No seller-made view establishes the actual item | Mark identity and condition unknown |

Give the failure a name in the charter and in every rejected row. “Not a deal” is too vague to debug. “EMPTY-CASE: core item not visible in any seller-made photo” tells you exactly which rule fired and what evidence would change the result.

## Lock the item identity to seller-made visual evidence

Before finding a median or scanning comparable listings, decide what object the photos support. Start with seller-made images, meaning images that appear to show the specific item in a real setting. A clean catalog render can explain what a complete product looks like, but it cannot prove which pieces the seller owns or the condition of those pieces.

Use visible text carefully. A label, size stamp, part number, or count printed on the photographed object is stronger than a title because it is attached to the item. Transcribe it exactly. Do not repair blurry characters into the code you expected. If one character is unreadable, preserve the uncertainty with a question mark and block exact-variant comparisons.

The description is still useful. It can state that a battery is missing, that a repair was attempted, or that only the photographed pieces are included. Treat those statements as claims beside the visual record, not as a replacement for it. A claim and an image can agree, disagree, or cover different facts. Your output needs all three states.

| Evidence source | Use it for | Do not use it for | Confidence label |
|---|---|---|---|
| Seller-made close photo | Visible label, component presence, localized defect | Hidden side, operation, ownership history | OBSERVED |
| Seller-made wide photo | Bundle count, scale clues, overall form | Fine damage, exact text, unseen contents | OBSERVED |
| Listing description | Seller's stated inclusions, exclusions, and test result | Proof that the statement is true | CLAIMED |
| Listing title | Search lead and contradiction check | Final identity, completeness, or condition | CLAIMED |
| Catalog or stock image | Reference layout for expected slots or pieces | Evidence that the seller possesses those pieces | REFERENCE ONLY |

The ordering matters. If the title says “complete” and the open case has three vacant tool-shaped slots, the bot must not average those statements into “probably complete.” It records CLAIMED COMPLETE, OBSERVED VACANT SLOTS, then emits a conflict. The human can decide whether to ask a question later. The research bot cannot erase the conflict to make a cleaner row.

## Inventory every promised component as present, absent, or unknown

A bundle title hides multiple identity questions inside one phrase. “Complete kit” might mean a tool, batteries, charger, case, manual, guides, and attachments. Break the phrase into components before you judge value. Each component gets one of three states: PRESENT when a seller-made image clearly shows it, ABSENT when the image clearly shows its expected place empty or the description excludes it, and UNKNOWN when no view resolves the question.

Unknown is not present. This one rule prevents most title-led mistakes. If the closed case is the only image, the contents are unknown even when the title says complete. If an open case shows a battery-shaped recess empty, the battery is absent. If the battery might be installed inside the tool but no view shows the tool base, it stays unknown. Do not upgrade uncertainty because the asking price would make more sense with the part included.

Create the expected component list from the seller's claim and any reliable reference layout you already have. The reference tells you what to look for, not what exists in this listing. Then require one image reference for every PRESENT or ABSENT decision.

| Component | Seller claims | Photo reference | Visual state | Pricing effect |
|---|---|---|---|---|
| Core tool | Included in “complete kit” | No seller-made image shows it | UNKNOWN | Blocks complete-kit comparison |
| Battery | Included by title implication | Open case shows empty shaped recess | ABSENT | Exclude battery value and complete bundles |
| Charger | Description names one | Photo 3 shows charger and cable | PRESENT | Include only after identity is readable |
| Carry case | Visible in first and second photos | Photos 1 and 2 show same marked case | PRESENT | Compare as used case, not as proof of contents |
| Loose bits | Description says assortment | Photo 4 shows six, exact types unclear | PRESENT, COUNT OBSERVED | Use six-piece evidence, not title count |

Do not count a reflection, printed package photo, or thumbnail inside another screenshot as a component. Do not infer a pair from one visible item. Do not infer a charger from a cable end. The inventory should be boring enough that a second person can reproduce it without sharing your enthusiasm for the deal.

## Separate observable facts from tempting interpretations

Photo review goes wrong when an interpretation is written in the evidence column. “Barely used” is an interpretation. “Chuck teeth show no visible debris in photo 4” is an observation, and a limited one. “Works” is a claim unless a trustworthy test is shown, and even a short video proves only what happened during that recording.

Write observations with three parts: image number, region, and visible fact. For example: “Photo 2, lower right molded recess: empty.” Or: “Photo 5, cable near plug: outer jacket appears split.” This format forces the bot to point instead of narrate. It also lets a reviewer find the evidence quickly.

Then place any interpretation in a separate field with its basis. “Likely incomplete because three shaped recesses are empty” can be reviewed. “Incomplete kit” with no image pointer cannot. If the bot cannot point to pixels or seller text, the claim does not enter the price record.

Treat negative evidence with restraint. Not seeing a crack is not proof that no crack exists. Not seeing the drill across five photos becomes meaningful only if those photos collectively show every compartment where the drill could be. Photo coverage controls what an absence can establish. That is why identity, completeness, condition, and coverage need separate fields.

## Grade photo coverage before you grade item condition

A condition grade is only as strong as the views behind it. One flattering front view cannot support “excellent condition.” Require the relevant surfaces for the item type: front, back, top, bottom, connection points, labels, wear areas, and every bundle compartment. If the page omits a value-bearing view, use CONDITION UNKNOWN or PARTIAL COVERAGE instead of guessing.

Coverage is not a demand that every seller become a product photographer. It is a limit on what your bot may conclude. A listing can still be worth human attention with missing views. It just cannot receive a confident condition grade or an aggressive “underpriced” label from the automation.

Use a simple coverage matrix. Define the required views in your watch specification before the bot opens listings. That prevents the bot from lowering the standard for an exciting ask.

| View needed | Why it matters | Pass example | Fail response |
|---|---|---|---|
| Full bundle laid out | Establishes actual count and core-item presence | Every claimed piece appears without overlap | Mark missing pieces UNKNOWN |
| Identity label | Separates variants and compatible parts | Readable label on the photographed item | Block exact-variant comparables |
| Power or connector area | Reveals damage and included power parts | Clear close view of ports, contacts, or cord | Mark function and connector condition UNKNOWN |
| High-wear surfaces | Supports a condition band | Focused views of grips, feet, edges, or hinges | Use PARTIAL COVERAGE |
| Case compartments | Distinguishes a full set from an empty-case listing | Open case with all recesses visible | Trigger EMPTY-CASE review if core recess is empty |

Do not let image count stand in for coverage. Ten photos of the same angle still leave the underside unknown. A useful metric is required views resolved, not photos uploaded. Store both so a reviewer can spot repetition disguised as evidence.

## Build the comparison key only after the photo audit passes

Comparable selection should begin with a structured key derived from visual evidence. The key can include item class, readable identity text, visible components, excluded components, observed count, condition band, and coverage status. The title may contribute a search term, but it cannot overwrite any key field.

For the empty drill case, the key is not “complete cordless drill kit.” It is “used molded carry case, charger present, six loose bits visible, core tool unknown or absent, battery absent, exact compatibility unreadable.” Completed sales for full kits do not belong in that set. The correct comparison pool may be thin. A thin honest pool is better than a dense pool for the wrong object.

Use strict exclusion before broadening. First exclude different bundle states. Then exclude unresolved variants where compatibility changes value. Then exclude condition bands unsupported by your views. If too few comparables remain, report that the bot could not compute a defensible range. Do not silently relax all three filters.

You can store the comparison key beside the row so the human knows what was actually priced. If the key looks unlike the title, that is useful. It exposes the listing conflict instead of burying it behind a single score.

## Normalize bundle completeness before calculating any discount

Discount math belongs after identity and completeness. A low ask against a complete-kit median is meaningless when the listing lacks the core item. Do not solve this by subtracting guessed accessory values. That introduces new unsupported prices while preserving the wrong comparison frame.

Instead, compare like with like. If you can find evidenced sales for the same incomplete bundle, use them and show the source links and observation dates. If you cannot, return COULD-NOT-COMPUTE. The answer can still be helpful: it can state that the apparent discount exists only against a complete bundle the photos do not support.

Keep mandatory delivery cost separate from item price when the marketplace displays both. Copy the displayed values from the live listing rather than estimating. Never use an old screenshot as the current ask. Never invent a missing delivery charge. The bot should preserve the page URL and observation time beside every number it copies.

An arbitrary alert threshold can help triage, but label it as your rule, not market truth. The threshold never overrides evidence. A listing that clears the numerical rule but fails component identity remains rejected or unknown.

## Walk Asha through one empty-case failure from alert to rejection

Asha watches local listings for a workshop tool set. On Tuesday morning, her routine finds a page titled “Complete Cordless Drill Kit With Case.” The first image shows a closed molded case on a workbench. The asking price, copied from the live page, falls below Asha's review threshold. A title-first bot would select full-kit comparables and send a bargain alert.

The photo-first bot opens every image before searching sold listings. Photo 2 shows the case open. The largest shaped recess is empty. A second recess shaped for a battery is also empty. Photo 3 shows one charger, but its compatibility label is blurred. Photo 4 shows six loose bits and no core tool. The description says “what you see is what you get.” No image shows a drill outside the case.

The bot builds the inventory: case PRESENT, charger PRESENT but exact identity UNKNOWN, six loose bits PRESENT, battery ABSENT, core drill ABSENT based on complete compartment coverage. It records the title conflict as EMPTY-CASE. It refuses full-kit comparables and searches only for evidenced accessory bundles with a case, charger, and loose bits. The remaining results do not support a defensible range, so it returns COULD-NOT-COMPUTE rather than a bargain score.

| Time | Asha's run stage | Evidence found | Decision |
|---|---|---|---|
| Tuesday 08:05 | Listing discovered | Title claims complete kit; live ask copied | Hold all price judgment |
| Tuesday 08:06 | Photo set opened | Core recess and battery recess are empty | Trigger EMPTY-CASE |
| Tuesday 08:08 | Component inventory saved | Case, charger, six bits present; drill and battery absent | Exclude complete-kit comparables |
| Tuesday 08:12 | Comparable search narrowed | No defensible like-for-like range survives | Return COULD-NOT-COMPUTE |
| Tuesday 08:15 | Human review packet filed | URL, photo pointers, conflict, and unknown compatibility | Asha does not message or offer |

Asha follows the evidence pointers herself. She sees the vacant molded slots and closes the listing. No seller contact occurs. The specific break was caught before the pricing stage: the title described a bundle, while the images documented leftovers. That is the whole value of naming empty-case pricing. It moves the guardrail in front of the arithmetic.

If the core tool had appeared clearly in another image, the state would change from ABSENT to PRESENT and the bot would rebuild the key. It would still need a readable identity, bundle count, condition coverage, and like-for-like sources. One resolved component does not grant permission to skip the rest.

## Reject polished staging as proof of identity or condition

Clean backgrounds, retail boxes, and carefully arranged accessories influence people because they look complete. They do not prove completeness. A closed case hides absence especially well because the shape suggests a full set. A retail box can be photographed long after the item inside was sold separately.

Train the bot to distrust presentation without accusing the seller. “Retail box present” is an observation. “New” is not. “Accessories arranged in original tray” is an observation. “All original accessories included” requires an inventory. “Protective film visible on one surface” does not establish that every surface is unused.

Stock images deserve their own flag. If a listing mixes catalog images with seller-made images, use catalog images only to form the expected-view checklist. Never use them to fill a missing component, label, or condition view. If every image is a stock image, the bot has no visual basis to price the specific physical item. It can file the page as PHOTO-EVIDENCE-MISSING and stop.

This discipline may reduce the number of alerts. That is a feature. A marketplace watcher is not paid by excitement. Its job is to reduce the pile to listings whose identity and evidence survive inspection.

## Keep seller contact, offers, pickup, and payment behind one human boundary

The bot's boundary is simple: it may research public listings and file evidence, but it never messages a seller, makes an offer, books pickup, bids, buys, or pays. Those actions combine identity risk, money, location, and account reputation. A confident photo analysis does not make them reversible.

Suggested questions can appear in the review packet as drafts. “Please photograph the open case with every included piece laid beside it” is useful. The bot still does not send it. Asha decides whether the marketplace permits contact, which account to use, what personal information to reveal, and whether the listing merits any response.

Do not create a second bot for contact and call that isolation. On Grok Bot, all bots on an account share one persistent cloud computer. Their screens are separate work surfaces, not security boundaries, and separate bots do not isolate browser sessions, files, or command-line credentials. Keep the send line human instead of staffing a sibling closer.

The [guide to watching listings without bidding](/blog/watch-listings-without-bidding) covers changed listings and same-URL substitution. Pair that change detection with this photo-first identity gate. A listing that passed yesterday can fail today if the seller removes a component photo or edits the description.

## Paste a charter that forces photos to choose the comparable set

Paste the following charter into a bot you use only for marketplace research. Replace the bracketed paths and watch criteria with locations you control. Do not weaken the boundary when the first apparent bargain appears.

\`\`\`text
NAME: Photo-First Marketplace Listing Scout

JOB
Review public marketplace listings against my written watch specification.
Build an evidence packet from seller-made photos before selecting comparables.
Flag only listings whose identity, bundle, and condition have enough evidence.

INPUTS
- Watch specification: [PATH TO WATCH SPEC]
- Allowed marketplaces: [ALLOWLIST]
- Evidence output: [PATH TO REVIEW PACKETS]
- Seen-listing register: [PATH TO REGISTER]

BOUNDARY
Never message a seller. Never send a drafted question. Never make an offer.
Never bid, buy, pay, book pickup, reserve an item, or expose my location.
Never sign into another marketplace account. File evidence and wait for me.

PHOTO-FIRST RULE
Do not search comparables until the photo audit is complete.
Treat the title and description as seller claims, not visual proof.
Use catalog or stock images as reference only, never as possession evidence.
For each component, write PRESENT, ABSENT, or UNKNOWN and cite an image number.
UNKNOWN never means PRESENT.

EMPTY-CASE RULE
If the title names a complete item or bundle but seller-made photos show only
packaging, accessories, fragments, vacant fitted slots, or fewer pieces, write:
EMPTY-CASE: [CORE ITEM OR COMPONENT] NOT VISUALLY ESTABLISHED.
Exclude complete-item and complete-bundle comparables.

OBSERVATION FORMAT
Write each visual fact as: PHOTO [NUMBER], [REGION]: [VISIBLE FACT].
Keep OBSERVED, CLAIMED, INFERRED, and UNKNOWN in separate fields.
Do not describe unseen surfaces. Do not infer operation from appearance.

COVERAGE GATE
Require the views named in my watch specification.
If an identity label, core component, connector, compartment, or high-wear
surface is unresolved, mark PARTIAL COVERAGE and lower confidence.
If exact identity is unresolved, block exact-variant pricing.

COMPARABLE RULE
Build the comparison key from visually evidenced identity, visible components,
excluded components, observed count, condition band, and coverage status.
Copy live asking price and mandatory delivery cost with URL and observation time.
Never invent a missing price, delivery charge, component value, or sold result.
If like-for-like evidence is insufficient, write COULD-NOT-COMPUTE and explain why.

OUTPUT ONE REVIEW PACKET PER LISTING
1. URL and observation time
2. Seller title and description claims
3. Seller-made photo inventory
4. Component table with PRESENT, ABSENT, or UNKNOWN
5. Coverage gaps and visible condition facts
6. Title-to-photo conflicts, including EMPTY-CASE when triggered
7. Comparison key and excluded comparable classes
8. Source links for retained comparables
9. Result: FLAG, REJECT, or COULD-NOT-COMPUTE
10. SENT: NO, OFFERED: NO, BOUGHT: NO

STOP CONDITIONS
Stop on a login wall, CAPTCHA, unclear site permission, missing live ask,
stock-only photo set, unresolved core identity, or output-save failure.
Record the stop. Do not retry in a loop and do not work around access controls.
\`\`\`

The charter makes the comparison key an output, not invisible reasoning. That one artifact catches the empty-case failure during review. It also makes COULD-NOT-COMPUTE a valid result, which prevents the bot from inventing a valuation just to finish the row.

If you share this configured bot using a public share link, strip secrets and confidential details first. The link exposes the configuration and lets another person add a copy to their account. It copies configuration only. It does not transfer your computer, logins, or conversation history. The recipient must establish their own access and paths.

## Test the charter with listings designed to tempt the shortcut

Do not begin with a live bargain you already want. Run a small trial set built to trigger different outcomes. Include one complete bundle with adequate views, one literal empty case, one stock-only listing, one item with a blurred identity label, one title-photo condition conflict, and one sparse listing that must end unknown.

Score the saved packets, not the bot's chat tone. A pass requires the correct component states, image pointers, comparison exclusions, boundary footer, and a result justified by the evidence. A confident paragraph with no photo references is a fail.

| Trial case | Expected trigger | Required result | Automatic fail |
|---|---|---|---|
| Open case with core recess empty | EMPTY-CASE | Reject complete-bundle comparables | Full-kit bargain score |
| Catalog images only | PHOTO-EVIDENCE-MISSING | Identity and condition unknown | Treat catalog image as seller evidence |
| Readable core item, blurred variant label | IDENTITY-PARTIAL | Block exact-variant pricing | Repair label from title |
| Complete laid-out bundle with required views | Coverage pass | Build like-for-like key | Skip component inventory |
| Visible crack despite “excellent” title | CONDITION-CONFLICT | Grade from visible defect | Copy title condition |
| Missing underside and connector views | PARTIAL COVERAGE | Lower confidence or stop | Claim no damage found |

Run each case twice if you plan to schedule the watcher. Stable rules should produce the same evidence class even if the prose changes. Then use the [bot trial run method](/blog/bot-trial-run-method) to test boundary behavior and saved artifacts before adding a cadence.

Inspect the seen-listing register too. The same URL may change. A photo removed after the first run is a material change, not a duplicate to suppress. Preserve the old fingerprint and show the before and after fields. Never carry yesterday's evidence into today's listing without reopening the page.

## Answer the seller-description objection at its strongest

The strongest objection is reasonable: sellers use titles and descriptions to state what is included, while photographs are incomplete, badly lit, and sometimes arranged only to show condition. If you believe only photos, you can reject honest listings, miss parts that are inside a case, and waste time rebuilding information the seller already supplied.

That objection is correct about recall. A strict photo gate will produce more UNKNOWN results and fewer alerts. It is wrong about what should choose the comparable set automatically. A seller claim is useful enough to generate the component checklist and a draft question. It is not strong enough to convert an unseen component into a present component or support a condition grade on an unseen surface.

The method does not call the seller dishonest. It preserves both records: CLAIMED in text, NOT VISUALLY ESTABLISHED in photos. A human can contact the seller for better images. Once those images arrive, the evidence can change. Until then, refusing to price a complete bundle is not disbelief. It is the correct limit on unattended comparison.

## Review every flag as a claim packet, not a purchase recommendation

The final packet should let you reconstruct the bot's decision without reopening its hidden reasoning. You need the live URL, observation time, copied ask, mandatory delivery charge if displayed, title claim, description claim, photo inventory, component states, coverage gaps, condition observations, comparison key, source links, and result. You also need the boundary footer confirming that no contact or transaction occurred.

Read the conflict first. If EMPTY-CASE fired, look at the cited compartment images before looking at any price. If IDENTITY-PARTIAL fired, refuse exact-variant comps until you can read the label. If CONDITION-CONFLICT fired, inspect the defect and decide whether the condition band matches your own standard.

Then inspect the retained comparables. They must match the evidenced bundle, not the title. A source link that points to a full kit in an accessory-only packet is a failed run. Reject the packet and correct the rule before trusting another flag.

Do not turn the result into “buy” by adding a high score. FLAG means worth human review. REJECT means the evidence failed your written rule. COULD-NOT-COMPUTE means the bot could not support a comparison. None of those verbs authorizes contact, travel, or money.

## Stop using this method when photos cannot establish the thing being valued

This page stops applying when visual inspection cannot identify the asset or determine the value-bearing facts. Services, tickets, account transfers, warranties, digital licenses, sealed collectibles whose value depends on authentication, and regulated goods require different evidence and often specialist review. A photo-first marketplace bot should not pretend that a picture proves title, transferability, legality, authenticity, or safe operation.

It also stops at hands-on inspection. Photos cannot prove battery health, internal damage, contamination, fit, electrical safety, mechanical load behavior, or whether an item will continue working. If failure could injure someone or create a large loss, use a qualified human inspection process and the marketplace's current protections. Do not automate the decision from photos.

Use [when not to use a bot](/blog/when-not-to-use-a-bot) when the missing fact requires judgment, physical inspection, or authority the runtime should not have. Use this tutorial only for the narrower job: preventing the title from selecting a comparison class that the seller's own images do not support.

## Frequently Asked Questions

### Should a bot ignore the marketplace listing title completely?

No. The title is useful as a seller claim, a search lead, and a source for the expected component checklist. It should not control identity, completeness, or condition when seller-made photos disagree. Record the title exactly, then build the comparison key from visible labels, visible components, explicit exclusions, coverage, and condition evidence. If the title claims a complete kit while the open case lacks the core item, keep the conflict and exclude complete-kit comparables. The title helps you ask what to verify; it does not answer the verification.

### What does empty-case pricing mean in marketplace research?

Empty-case pricing is the error of valuing the complete item named in a listing title when the photos establish only its case, packaging, accessories, fragments, or an incomplete bundle. The bot then compares the ask with completed sales for full items and reports a false bargain. Prevent it by inventorying every value-bearing component as PRESENT, ABSENT, or UNKNOWN before searching comparables. If the core item is not visually established, reject the complete-item comparison class and return a narrower comparison or COULD-NOT-COMPUTE.

### Can a marketplace bot message the seller for missing photos?

It can draft a useful question in the private review packet, but it should not send the message. Seller contact exposes your account, intent, timing, and sometimes location, and it can create commitments the research step was not meant to make. Keep the boundary explicit: never message, offer, reserve, book pickup, bid, buy, or pay. A human reviews the evidence, checks the marketplace's current terms, edits the question, and chooses whether to send it from the appropriate account. Better photos can then support a fresh run.

### How do I price a listing from photos when a component is hidden?

Mark the hidden component UNKNOWN and do not price the listing as though it were present. Use the title and description to record what the seller claims, but keep that claim separate from visual evidence. If the hidden component determines the comparison class, block the valuation and request a human review or better seller-made photos. If a defensible market exists for the visibly evidenced partial bundle, compare only against that bundle and preserve source links. Otherwise return COULD-NOT-COMPUTE instead of subtracting an invented component value.
`,
};
