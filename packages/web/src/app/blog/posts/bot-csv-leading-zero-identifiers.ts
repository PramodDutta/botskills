import type { BlogPost } from './index';

export const post: BlogPost = {
  title: "Preserve Leading Zeros Before a Bot Joins Customer Exports",
  description: "Fix bot CSV leading zero identifiers with a string-preserving import, exact joins, a runnable fixture, and a review report that blocks ambiguous customer matches.",
  date: "2026-09-05",
  category: "Tutorial",
  content: `
# Preserve Leading Zeros Before a Bot Joins Customer Exports

Your bot can match a customer to the wrong account before it writes a single sentence. The damage happens when an identifier such as \`00124\` becomes the number \`124\` during import. Both values look ordinary in a spreadsheet. They may refer to different customers, different branches, or different historical numbering schemes. A later instruction to be accurate cannot reconstruct the characters that disappeared.

This tutorial uses Nila, an invented operations analyst, and a fictional pair of customer exports. All identifiers, row counts, and review thresholds below are illustrative choices. The workflow reads local files, produces a proposed match report, and stops before changing a CRM. It is a data preparation procedure you can adapt to a bot charter, not a claim about any particular runtime automatically enforcing the rules.

## Treat Nila's customer code as a label before opening her export

Nila receives two files. The first contains account ownership. The second contains proposed meeting follow-ups. Both include a column called customer_id. Yesterday, someone opened the follow-up export, formatted the column as a number, and saved a new copy. Today, the bot reports that one account has two owners. The ownership file is correct; the follow-up copy has collapsed two distinct labels into one value.

Start by deciding what the column means. A quantity supports arithmetic: adding two item counts produces another meaningful count. An identifier supports equality: two references either name the same entity under an agreed rule or they do not. Adding customer codes has no business meaning. Their appearance as digits does not give permission to convert them to numbers.

For this example, the business owner confirms that \`00124\` and \`124\` are different customer records. Preserve them as separate strings. If your own source system defines those spellings as equivalent, record that definition and its authority before changing the matcher. The policy follows the source contract, not the visual appearance of the column. Ask the owner to provide one counterexample that would make an incorrect transformation obvious.

## Save the received bytes before creating a working copy

Keep the original download in a restricted input folder and make a separate working copy. Give both artifacts a batch identifier that does not contain customer names. Record the filename, receipt time, exporting system, export filters, and the person who supplied it. When someone later sends a corrected export, store it as a new input rather than replacing the original under the same name.

This record is useful because a screenshot cannot establish which characters were present in the file. A spreadsheet cell can display padded digits while holding an ordinary number. Conversely, a CSV file can contain the complete identifier even when a viewer displays it differently. Inspect a small synthetic example first, then inspect the actual source as text using a tool approved for that data.

You do not need to retain every customer export forever. Choose a retention period with the data owner and apply it to working copies, review reports, and temporary files as well as the input folder. The procedure in [bot data retention](/blog/bot-data-retention) covers that broader lifecycle. For the immediate investigation, preserve enough evidence to establish whether the change happened before receipt, during parsing, or during a later export.

## Write an explicit identifier contract for both sides of the join

An identifier contract should answer whether case, whitespace, prefixes, and leading zeros matter. Avoid a rule that merely says clean the IDs. That gives the bot an open-ended transformation problem and makes different runs difficult to compare. A short table is easier for the data owner to approve and for a reviewer to challenge.

| Property | Nila's chosen rule | What a violation does |
|---|---|---|
| Representation | Nonempty text | Hold the row |
| Leading zeros | Preserve exactly | Reject numeric conversion |
| Outer whitespace | Not allowed in this batch | Hold for source correction |
| Case and punctuation | Preserve exactly | Do not normalize |
| Customer identity | Unique in ownership export | Stop on duplicate keys |

The whitespace choice is deliberately conservative. Trimming may be appropriate for another system, but it should be a named transformation with retained raw values. A space can be a formatting accident, a meaningful character, or evidence that two exports use incompatible conventions. Automatically removing it before you understand the source can erase the clue that would have explained a bad match.

Apply the same contract to both files before joining them. If one side uses a branch prefix and the other omits it, the files are not ready for an equality join. Resolve that mismatch through an authoritative mapping table. Do not ask the bot to infer the branch from the customer's name, address, or nearby rows simply because those details seem plausible.

## Separate an observed identifier from a proposed repair

Create different fields for the received value and any suggested replacement. The received value should remain a literal observation. The suggestion should carry a reason, supporting source, review state, and decision owner. This distinction prevents a repair proposal from quietly becoming the next batch's source of truth.

Suppose the damaged export contains \`124\` and the ownership table contains both \`00124\` and \`124\`. Padding the damaged value to five characters chooses one customer without evidence. Leaving it unchanged chooses the other. Neither operation is a repair unless a trusted record establishes what the sender intended. Mark the row unresolved and request a fresh export or a source-system record identifier that survived the conversion.

| Received value | Proposed action | Evidence needed |
|---|---|---|
| \`00124\` | Match exact string | Same literal key on both sides |
| \`124\` after known conversion | Hold unresolved | Original unmodified source record |
| \` 00124\` | Suggest whitespace review | Written source formatting rule |
| Empty value | Hold missing identifier | Corrected export from owner |

Do not label an unresolved row low confidence and then include it in an actionable list. That invites a reader to overlook the qualifier. Use an output state that cannot be mistaken for a completed match, and keep unresolved rows out of the file intended for downstream use. The bot can explain what is missing without making the missing decision.

## Build a small fixture that exposes coercion immediately

Use fictional data before touching the real batch. The smallest useful fixture includes a zero-prefixed key, its unprefixed counterpart, a normal text key, and an unmatched key. A fixture containing only \`00124\` can miss the most serious problem: after conversion, the row may still match something, but it matches the wrong entity.

Give the two similar-looking customers visibly different owner labels. Nila uses Owner-A for \`00124\` and Owner-B for \`124\`. If a preview sends both follow-ups to Owner-B, the fixture fails in a way a reviewer can see immediately. If both owners were called Sales Team, the same corruption could remain hidden behind superficially correct output.

Keep fixture values separate from production values. Do not create dummy customers in a live CRM merely to test a CSV parser. The fixture is a local file or an in-memory string, and the expected report is written by a human before the test runs. Save that expectation beside the fixture. A bot evaluating its own newly invented expected answer provides little evidence that the join was correct.

Include an empty identifier and a duplicated ownership key in separate negative fixtures. Those inputs should stop the join, not produce a shorter successful report. Separate fixtures make it clear which rule rejected the input and avoid a first error masking every other defect you wanted to test.

## Use a string-preserving parser and make the join executable

Python's standard CSV reader returns strings by default; its documentation identifies the numeric conversion option that changes that behavior. It also recommends opening CSV files with an empty newline argument so the CSV parser handles line endings. Those two details support the implementation below. They do not establish what your customer identifiers mean; that remains the source owner's decision. [Python CSV documentation](https://docs.python.org/3/library/csv.html)

This example is intentionally a complete local fixture. It does not authenticate to a service, upload a report, or update a customer. The loader checks headers, row shape, blank identifiers, surrounding whitespace, and duplicate keys before returning a lookup. Duplicate header names must be rejected before constructing row dictionaries, because a dictionary cannot preserve two distinct columns under the same name.

\`\`\`python
import csv
import io


def load_customers(text):
    reader = csv.DictReader(io.StringIO(text, newline=""), strict=True)
    if reader.fieldnames != ["customer_id", "owner"]:
        raise ValueError("Expected customer_id,owner headers in that order")
    rows = {}
    for row in reader:
        if None in row or any(value is None for value in row.values()):
            raise ValueError("Unexpected number of columns")
        key = row["customer_id"]
        if not key or key != key.strip():
            raise ValueError("Missing identifier or surrounding whitespace")
        if key in rows:
            raise ValueError("Duplicate customer identifier")
        rows[key] = row["owner"]
    return rows


customers = load_customers(
    "customer_id,owner\\n00124,Owner-A\\n124,Owner-B\\nAC-9,Owner-C\\n"
)
requests = ["00124", "124", "AC-9", "00999"]
report = [
    {"customer_id": key, "owner": customers.get(key),
     "status": "matched" if key in customers else "unmatched"}
    for key in requests
]
assert [row["owner"] for row in report] == ["Owner-A", "Owner-B", "Owner-C", None]
assert list(customers) == ["00124", "124", "AC-9"]
print(report)
\`\`\`

For an actual file, replace the in-memory stream with a file opened using an explicit encoding and the same newline setting. Keep the identifier as text after parsing. The loader cannot protect a later step that converts its dictionary keys to integers, sorts by a numeric cast, or exports them through a numeric column. Carry the contract through every handoff.

## Reconcile match outcomes instead of accepting a plausible row count

Nila's fixture produces four requested rows: three matched and one unmatched. That arithmetic is an example-specific acceptance check. A report containing four rows is insufficient, because it could contain three copies of one customer and omit another. Check both outcome counts and the literal identifiers associated with each outcome.

Require every input request to appear exactly once in the review report, with a stable source row reference. If repeated requests are valid, their source references must differ even when their customer identifiers match. Customer identity and request identity solve different problems. Deduplicating requests on customer_id alone can erase two legitimate follow-ups for the same account.

| Check | Expected fixture result | Failure it detects |
|---|---|---|
| Request conservation | Four input requests, four outcomes | Silent dropped rows |
| Matched outcome count | Three | Accidental unmatched conversion |
| Unmatched outcome count | One | Invented identity resolution |
| Zero-prefixed ownership | \`00124\` belongs to Owner-A | Leading-zero collapse |
| Unprefixed ownership | \`124\` belongs to Owner-B | Automatic padding |

For real batches, publish the counts and the rule version with the report. Do not announce success merely because the matched percentage increased. An aggressive fuzzy matcher can increase that percentage while reducing correctness. The acceptance rule is that each completed match is supported by the identity contract; unresolved rows remain visible and recoverable.

## Keep the bot charter specific about matching and stopping

A charter is useful when it tells the bot which artifacts to inspect, how to represent uncertainty, and what output to produce. It is less useful when it asks the bot to be careful with customer data. The following charter delegates evidence collection and report preparation while leaving identity repair and CRM writes outside the task.

\`\`\`text
Task: Prepare a review report joining the supplied customer ownership export
with the supplied follow-up requests.

Use only the files named in this batch manifest. Treat customer_id as opaque
text. Preserve leading zeros, case, punctuation, and the received value.
Use exact equality only after checking the approved identifier contract.

Reject duplicate ownership keys, invalid headers, missing identifiers,
uneven rows, and surrounding identifier whitespace. Do not silently fix them.
Keep one outcome per source request: matched, unmatched, or blocked.
For every outcome include its source row reference and supporting key.

Produce a local review report, validation counts, and an exception list.
Stop if a rule cannot be checked or the source identity is ambiguous.
Boundary: Never infer a replacement customer identifier or write a CRM change.
\`\`\`

Adapt the [Prospecting Sheet Builder](/bots/prospecting-sheet-builder) when the join supports research preparation, or the [Org Chart Keeper](/bots/org-chart-keeper) when it supports account mapping. Both listings already separate proposed information from direct CRM changes. Preserve that distinction when adding a file-preparation stage. A bot that prepares a clear exception list has completed useful work even when the final join remains blocked.

## Trace the first damaged batch without rewriting its history

When Nila discovers the collapse, she stops using the proposed follow-up report and marks it superseded. She records the batch identifier and the observed mismatch, then compares the preserved input against the working copy. The original download contains \`00124\`; the edited copy contains \`124\`. That comparison locates the transformation without requiring speculation about what the bot was thinking.

Next, she identifies every derived artifact built from the damaged copy. The list may include a spreadsheet, a meeting-preparation brief, and a draft task list. Correcting only the CSV leaves those downstream artifacts carrying the wrong account association. Each should either be regenerated from the corrected input or clearly marked invalid, with a pointer to the replacement.

The recovery report should distinguish confirmed exposure from possible exposure. If the workflow was limited to local drafts, say which drafts were generated and whether anyone opened them. If someone already applied a CRM update, handle that as a separate authorized correction with the system owner. Do not let a data-preparation bot broaden its mandate to repairing live records because its earlier proposal was wrong.

Capture the prevention change as an executable fixture and a contract update. A note saying remember leading zeros will eventually be missed. The two-customer fixture can keep detecting the same class of regression after parser upgrades or workflow changes.

## Challenge the request to pad every identifier to five characters

The strongest argument for padding is that a documented source system might define customer codes as fixed-width digit strings. In that case, a controlled formatting operation can be correct. The mistake is assuming that one system's convention applies to every export, every historical record, and every partner dataset.

Ask for the actual rule and its scope. Does it cover imported legacy accounts? Can a code contain letters? Is the width fixed for all business units? Are longer codes rejected or truncated? What happens when an old export contains a blank? A repair rule that answers those questions can be reviewed and tested. A rule inferred from the first twenty rows cannot establish them.

For Nila's fictional dataset, padding is explicitly wrong because \`124\` and \`00124\` name different accounts. Her reviewer rejects the proposal before any data is changed. In another dataset, a trusted mapping might permit canonicalization. Keep the received identifier, canonical identifier, mapping version, and justification together so someone can reconstruct the decision later.

The same reasoning applies to removing punctuation and changing case. Normalization is a business transformation, even when it looks like cosmetic cleanup. It should have an owner, an input domain, and tests showing both values that become equivalent and values that must remain distinct.

## Inspect the exported report with an independent reader

A correct in-memory join can still produce a misleading handoff. The receiving tool may interpret the exported column as numeric data. Test the artifact as the next operator will actually consume it, using fictional identifiers. Reopen the exported file through the intended import path and compare the resulting identifiers with the originals.

Do not rely on adding quotation marks to CSV fields as a universal type declaration. CSV quoting describes field boundaries and escaping; a downstream application can still choose its own type inference. If the recipient needs typed columns, agree on an import procedure or a format that carries the required schema, then verify that particular handoff. This article does not prescribe a universal spreadsheet setting across products.

| Handoff result | Review decision | Follow-up |
|---|---|---|
| Literal keys preserved | Accept the tested path | Save the import instructions |
| Display padded, stored value changed | Reject | Recheck representation |
| Keys changed during reopen | Reject | Use an explicit text import path |
| Recipient cannot inspect stored value | Hold | Choose a verifiable handoff |

The independent check should read the delivered artifact, not the object that produced it. Otherwise, you are testing the same stage twice while leaving the export boundary unexamined. Record the receiving tool and procedure alongside the fixture result so a future workflow change triggers the appropriate check.

## Diagnose identity failures with evidence from the exact stage

A small failure table keeps the operator from treating every unmatched row as the same problem. The right response depends on whether the source omitted the identifier, a transformation changed it, or two systems use genuinely different namespaces. Gather the narrow evidence that distinguishes those cases before proposing any fix.

| Symptom | Evidence to inspect | Safe next action |
|---|---|---|
| Zeros disappear only in working copy | Original bytes and transformation log | Recreate from preserved input |
| Duplicate key appears after import | Raw values before coercion | Reject converted batch |
| Exact join leaves many unmatched rows | Export scope and namespace definitions | Ask for authoritative mapping |
| One request produces several owners | Duplicate keys in ownership input | Stop before report publication |
| Reopened report changes identifiers | Recipient import behavior | Repair the handoff procedure |

Do not make the exception list a second data leak. For operational logs, use batch references and reason counts. Keep customer identifiers in the restricted review artifact when the reviewer needs them. A chat notification can say that eight requests are blocked without pasting all eight customer codes into a channel with a different audience.

Use [bot output verification](/blog/bot-output-verification) for the broader review procedure and [bot failure modes](/blog/bot-failure-modes) when the defect extends beyond this identifier boundary. Preserve the exact failing fixture when moving to a larger investigation. A general incident label should not replace the concrete input that reproduced the error.

## Retire the manual workaround after proving the corrected path

On Nila's first day, the useful result is a blocked damaged batch, a corrected local report, and an explanation of which transform removed the zeros. After repeated successful fixture runs, the useful result changes: the documented import path becomes routine, while unusual inputs still produce visible exceptions. Those are different forms of progress, and neither requires a claim that the bot became infallible.

Remove obsolete instructions that tell operators to format identifiers as numbers or to pad all short codes. Otherwise the old workaround can reintroduce the defect even after the parser is fixed. Link the current contract from the batch checklist, and name the person responsible for approving its next revision.

This procedure stops applying when you need to resolve customer identity across systems with different identifiers, merge duplicate accounts, or repair already-applied CRM changes. Those are separate matching and authorization problems. An exact string join cannot decide them. Continue with the owning team and the evidence you collected, rather than expanding the bot's permissions to make the exception count look better.

## Frequently Asked Questions

### Should a customer identifier containing only digits be stored as a number?

Store it according to the source identity contract, not its appearance. If leading zeros distinguish customers, the identifier must remain text throughout import, matching, export, and review. In the fictional example, 00124 and 124 are separate customers, so numeric conversion destroys information. Ask the source owner whether whitespace, prefixes, and case also matter. Keep a fixture containing similar-looking but distinct identifiers so later workflow changes can be checked against a concrete expected result.

### Can a bot recover zeros after a CSV import has removed them?

A bot cannot establish the original identifier from the shortened value alone when several original strings could produce it. Request the preserved download, an authoritative source record, or a documented mapping that identifies the intended customer. Keep any suggested repair separate from the received value and require supporting evidence. Padding may be valid under a confirmed fixed-width contract, but applying it without that contract can move a row to a different customer instead of repairing it.

### Is putting quotation marks around CSV identifiers enough to protect them?

Quotation marks help a CSV parser recognize field boundaries, but they are not a universal instruction to every receiving application about column types. Test the actual import and export path with fictional identifiers that include leading zeros and similar unprefixed values. Inspect the delivered artifact after reopening it through the recipient's normal procedure. If that path changes the identifiers, use an explicit text import procedure or agree on a schema-carrying format and verify the new handoff.

### What should the bot do when one customer request has no exact match?

The bot should retain the source request, mark the outcome unmatched or blocked, and explain which evidence is missing. It should not select the closest-looking customer to improve the match rate. Keep the unresolved request outside any file intended to drive CRM changes. A reviewer can request a corrected export or an authoritative mapping, then rerun the same checks. Report input, matched, unmatched, and blocked counts so an unresolved row remains visible rather than disappearing from the batch.
`,
};
