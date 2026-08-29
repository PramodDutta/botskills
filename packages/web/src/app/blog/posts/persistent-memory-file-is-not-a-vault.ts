import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A Memory File on the Shared Computer Is Visible to Every Bot',
  description:
    'Use grok bot persistent memory as a shared operating notebook, never a vault, with redacted facts, expiry dates, canary scans, and deliberate cleanup.',
  date: '2026-08-29',
  category: 'Safety',
  content: `
# A Memory File on the Shared Computer Is Visible to Every Bot

The memory note that helps one bot remember a customer tier can help a sibling bot discover the same tier, account name, and internal concern. That is not a leak between two machines. It is one account's bots reading files on one persistent computer. A filename such as private-memory.md, a hidden folder, or a bot name does not turn shared storage into a vault.

This guide follows Ishan, who keeps a daily founder brief and a subscription review on the same account. On Tuesday he writes a bank account number and renewal concern into the brief bot's memory file so tomorrow's summary will have context. On Wednesday the subscription bot's broad file search includes that note in its evidence. Nothing was hacked. The file was stored in the wrong trust zone.

Grok bot persistent memory is useful for operating preferences, stable labels, source locations, and reviewed decisions that all sibling bots may safely see. It is the wrong place for passwords, session tokens, full financial identifiers, private customer facts, or raw confidential documents. [Screens are not boundaries](/blog/screens-are-not-boundaries) is the canonical platform explanation; this page turns that fact into a memory-file design.

## Classify every remembered fact by its sibling-bot consequence

Before writing memory, ask a concrete question: what happens if every bot on this account reads this exact line? If the answer is embarrassment, customer harm, account access, financial exposure, or a legal concern, do not store the line on the shared computer. Redaction is not a later cleanup task. It is the entry condition.

Ishan uses four classes. PUBLIC is already safe to publish. INTERNAL is safe for every sibling bot but not intended for publication. RESTRICTED belongs in a separate approved system and may be referenced only by an opaque record ID. SECRET is credential material and never enters bot memory.

The class is based on consequence, not how convenient the fact is. "Use account ending 4821 for rent checks" contains a financial identifier even if four digits feel small. Store "rent account reference FIN-RENT-1" and keep the mapping elsewhere.

| Class | Example | Shared memory allowed? | Safer representation |
|---|---|---|---|
| PUBLIC | Published support URL | Yes | Full URL with review date |
| INTERNAL | Weekly brief uses Monday ownership file | Yes | Path and owner role |
| RESTRICTED | Customer renewal concern | No | Case ID plus approved summary |
| RESTRICTED | Bank account last four | No for this design | Opaque account alias |
| SECRET | Password, token, recovery code | Never | Keep outside the shared computer |
| RAW CONFIDENTIAL | Contract, health record, private mail | No | Store only source record reference |

## Treat a filename as organization, never authorization

Directories help humans and bots find the right artifact. They do not prove that another bot cannot open it. Names beginning with a dot can reduce accidental listing in some interfaces, but obscurity is not an access boundary. Permissions must be evaluated at the actual system layer, and the product fact here is simpler: files are shared across the account's bots.

Ishan had used /work/founder/.private/memory.md. He assumed the dot and the founder bot's folder meant exclusivity. His subscription bot searched /work for recent markdown files because its charter was vague. The search found the file. Renaming it /work/founder/vault.md would not change the outcome.

[A boundary is not a permission](/blog/a-boundary-is-not-a-permission) explains the two controls. A path boundary tells the subscription bot where it should work. Access control determines what the environment actually prevents. Do not write sensitive memory based on a behavioral line alone.

## Store operating preferences without storing the underlying confidential fact

Good memory makes repeated work consistent. Ishan's brief bot should remember that cash exceptions come first, sources older than one business day are labeled stale, and promises require an exact quote plus due date. Those are operating rules. Every sibling bot can read them without harm.

It may also remember opaque aliases: FIN-CHECKING-PRIMARY, CUSTOMER-CASE-17, and LAUNCH-POLICY-CURRENT. The alias points the operator to an approved source system. It does not reproduce the account number, private complaint, or unreleased price.

[Persistent Bot Memory](/bots/persistent-bot-memory) is the catalog pattern for reviewed durable notes. [Claim Provenance Tracker](/bots/claim-provenance-tracker) shows why a claim should keep a source reference. Combine the habits: remember the reviewed rule and source locator, not the confidential payload.

## Separate durable rules from today's disposable working set

Ishan creates two zones. /work/shared-memory/ contains reviewed rules intended to persist. /work/runs/YYYY-MM-DD/ contains today's inputs and derived artifacts, with a deletion date in manifest.md. Bots may consult shared memory only for operating rules, not as evidence that today's fact remains true.

This separation prevents a temporary observation from becoming permanent policy. "Vendor invoice is late" belongs in a dated run. "Flag invoices seven days past the supplied due date" may belong in reviewed memory. The first expires. The second is a rule with an owner and review date.

Every durable entry has ID, statement, class, owner, source reference, created date, review date, and expiry or NO_EXPIRY with justification. If a field is absent, the entry is invalid. "Remember this forever" is not a retention policy.

| Zone | Contains | Must not contain | Cleanup rule |
|---|---|---|---|
| shared-memory/rules | Reviewed operating rules | Tokens, account identifiers, raw customer facts | Review monthly |
| shared-memory/aliases | Opaque names and source locators | Alias-to-secret mappings | Review on source change |
| runs/date/input | Redacted task packet | Unbounded source exports | Delete on manifest date |
| runs/date/output | Briefs, diffs, exception lists | Claims without source | Delete or archive deliberately |
| quarantine | Suspected sensitive artifact | Material copied onward | Operator reviews immediately |

## Give each entry an owner, source, review date, and expiry

Memory without provenance turns yesterday's guess into tomorrow's instruction. Ishan's entry MEM-014 says, "Use the launch policy marked CURRENT in policy-index.md." The owner is product lead, the source is a local locator file, the review date is 2026-09-05, and the expiry is 2026-10-01. The entry does not reproduce unreleased pricing.

When the review date passes, the bot labels the entry STALE and may not use it to make a recommendation. It can ask Ishan to refresh it. When the expiry passes, the entry moves to a review queue and is excluded from normal reads. The bot never silently extends expiry because the note still sounds plausible.

[Source Verifier](/bots/source-verifier) uses explicit verdicts rather than silent correction. That discipline belongs in memory maintenance too: CURRENT, STALE, EXPIRED, CONFLICT, or INVALID. A bot should not rewrite the old entry into a new truth without an owner.

[Citation Checker](/bots/citation-checker) offers a second useful pattern: report a source problem without silently replacing the source. A memory curator should behave the same way when a locator breaks.

## Write memory in a schema that makes unsafe fields conspicuous

Free-form diary prose invites oversharing. A schema narrows the shape. Ishan bans fields named password, token, cookie, account_number, card, private_key, otp, and raw_message. That list is not a complete secret detector, but it catches obvious mistakes before the file is accepted.

The value field has a 240-character policy chosen by Ishan for reviewability, not a platform limit. Long source text belongs in the source system. The memory file holds a compact rule or opaque reference. Each entry also declares SAFE_FOR_ALL_SIBLING_BOTS: yes. If the writer cannot truthfully set yes, the entry is rejected.

\`\`\`yaml
id: MEM-014
kind: operating_rule
statement: Use the launch policy marked CURRENT in policy-index.md.
classification: INTERNAL
safe_for_all_sibling_bots: true
owner: product-lead
source_ref: POLICY-INDEX
created: 2026-08-29
review_on: 2026-09-05
expires_on: 2026-10-01
status: CURRENT
notes: No pricing, customer text, credentials, or full identifiers stored here.
\`\`\`

The schema is useful because a reviewer can reject one field. It does not make the underlying file private.

## Ban credentials and sessions even when the bot calls them context

A token is not memory. A copied browser cookie is not a convenience. A one-time code is not an event note. Command-line credentials and signed-in sessions are shared across bots on the computer, so reproducing them in a memory file makes an already broad condition worse.

The bot may remember "source FINANCE-READ requires operator sign-in" without remembering the credential. It may record that access failed at 07:32 without copying an authorization header. It may never ask Ishan to paste a one-time code into memory for tomorrow.

[Where a bot cookie actually lives](/blog/where-a-bot-cookie-actually-lives) is the canonical session explanation. [Why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files) covers the false cleanup assumption. Memory design must work before and after any named bot is deleted.

## Make sibling bots prove they stay inside their own working roots

Behavioral boundaries still matter even though they are not hard isolation. Ishan updates every bot charter with an allowed read root, allowed write root, and rule for referenced sources. The subscription bot reads /work/subscriptions and /work/shared-memory/rules only. It does not crawl /work/founder, /work/runs, browser profiles, shell history, or unrelated home directories.

He then plants canary filenames in disallowed roots and asks each bot to perform its normal job. The expected output contains no canary value. A hit means the charter, search command, or integration is too broad. Ishan fixes the working root before adding more data.

[How to write a boundary line](/blog/how-to-write-a-boundary-line) helps express the stop. It does not turn the stop into filesystem enforcement. Ishan treats the canary as a behavior check and keeps restricted data off the machine regardless.

| Bot | Allowed read root | Allowed write root | Forbidden example |
|---|---|---|---|
| Founder brief | dated packet plus shared rules | dated brief output | subscription receipts |
| Subscription review | subscription packet plus shared rules | subscription report | founder meeting notes |
| Research watch | public-source packet plus shared rules | research digest | any finance run |
| Memory curator | proposed entries and shared memory | review queue | browser profile and shell history |

## Walk Tuesday's account number into quarantine and replacement

At 18:10 Tuesday Ishan writes, "Primary checking ending 4821 is tight before rent; watch it tomorrow" into founder-memory.md. The line contains an identifier and a transient financial concern. It has no owner, source reference, review date, or expiry. It fails every entry rule.

At 07:34 Wednesday the founder bot reads it into the brief. At 08:05 the subscription bot's broad markdown search also quotes it while explaining which account pays a vendor. Ishan stops both runs. He does not merely delete the quoted output. He moves the offending memory entry to quarantine, replaces it with "Use source alias FIN-CHECKING-PRIMARY for the operator-supplied cash packet," and removes broad search from the subscription charter.

He then searches permitted working directories for the exact four digits and the sentence fragment. He reviews run outputs, not just the original file, because derived artifacts can preserve copied text. Cleanup is an evidence task.

## Scan memory before write and again before every scheduled read

Ishan adds two checks. The write check rejects prohibited field names, long digit sequences, common credential prefixes, private-key markers, and entries without SAFE_FOR_ALL_SIBLING_BOTS true. The read check rejects stale, expired, invalid, or quarantined entries before they enter a task packet.

These checks are not a guarantee that sensitive meaning is absent. "The account we discussed yesterday" can be sensitive without matching a pattern. Human review remains necessary for new memory kinds and any entry derived from a confidential source.

The scan report lists entry ID and reason without reproducing the suspected secret. Copying a full token into an alert would spread it. The bot writes TOKEN_PATTERN_FOUND at line 18, not the token value.

## Keep a deletion manifest because removing the bot removes neither file nor session

Every dated run has manifest.md with owner, created date, delete-after date, approved archive destination, and cleanup status. Ishan reviews the manifest weekly. Files that need longer retention move only after a human decision. The bot cannot set delete-after to NEVER because an artifact feels useful.

Deleting a named bot does not remove files or browser sessions on the shared computer. That fact is why the manifest belongs to the account's operating process rather than the bot's lifecycle. The canonical details are in [why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files).

For highly sensitive work, the right decision may be not to place the source or derivative on this computer at all. A retention process reduces forgotten material. It does not convert shared storage into a vault.

## Answer the operator who says every useful memory contains sensitive context

Some work cannot be reduced to safe shared rules without losing the detail that makes it useful. A legal case strategy, raw health record, acquisition plan, or private customer escalation may not belong in this environment. The honest answer is to keep that work in a system with the required access controls, not to disguise it behind aliases that still reveal the substance.

The objection does not defeat all memory. Stable formatting preferences, approved definitions, source locators, review cadences, and boundary rules are useful and broadly safe. Ishan's morning brief improves when it remembers how to label stale data. It does not need yesterday's bank identifier in durable memory.

Treat compression as a test. If removing the confidential payload leaves a rule that still helps future runs, store the rule. If not, reference the approved system or keep the job human.

## Diagnose memory failures from the copied artifact outward

When a sensitive line appears, start with the output that exposed it and trace backward. Search exact fragments, entry IDs, and source references across allowed directories. Do not assume the first file found is the only copy.

| Symptom | Likely cause | Immediate action | Durable repair |
|---|---|---|---|
| Sibling digest quotes founder note | Read root was broad | Stop run and quarantine outputs | Restrict roots and add canary |
| Old price guides new brief | Entry expired silently | Label output invalid | Enforce review and expiry |
| Token appears in scan alert | Scanner echoed match | Rotate outside bot workflow | Report location, never value |
| Deleted bot's note reappears | File survived bot deletion | Locate all copies | Use account-level manifest |
| Alias reveals full concern | Alias text carries payload | Replace with opaque ID | Keep mapping elsewhere |
| Memory rule changes itself | Bot treated inference as update | Restore reviewed version | Human owns status transitions |

## Verify shared-memory safety with four adversarial entries

Ishan submits four proposals: a valid formatting rule, a fake API token, an expired pricing rule, and a customer complaint disguised as an operating preference. Expected results are ACCEPT, REJECT_SECRET, REJECT_EXPIRED, and REJECT_RESTRICTED. The rejection report must not echo the fake token or complaint text.

Next he plants MEMORY-CANARY-71 in the founder run root and runs the subscription review. The canary must not appear. He deletes a test bot and confirms its test file still exists, then removes that file through the cleanup process. This verifies that retirement is not deletion.

Monthly, he samples ten active entries for owner, source, review date, expiry, and the all-sibling safety declaration. One missing field fails the entry. Quarterly, he searches for expired IDs and known canary strings in outputs. A clean scan is evidence of the process, not proof that storage became private.

He also runs a negative test against the curator itself. A proposed entry claims that its source is confidential and asks the curator to summarize it into safer wording. The curator must reject the proposal without opening the source. Redaction performed after unnecessary access is not minimization. The operator supplies an already approved abstract or keeps the reference outside shared memory. This test catches a subtle expansion in which the memory job becomes a reader of every system merely because its final file is short.

## Use a different system when the memory itself needs confidentiality

This guide stops where one bot must remember something that sibling bots must not read. That requirement needs an actual isolation and access-control design outside the shared memory file. A behavioral charter cannot satisfy it. [Least privilege bots](/blog/least-privilege-bots) helps evaluate grants, while [a boundary is not a permission](/blog/a-boundary-is-not-a-permission) prevents category confusion.

For memory that remains on the shared computer, prefer reviewed rules, opaque locators, and short retention. For money workflows, continue with [a weekday brief that never moves money](/blog/personal-cfo-brief-never-moves-money). For account sessions, use [read-only bank view then sign out](/blog/read-only-bank-view-then-sign-out).

Keep reading: [Grok Bot shared-computer security](/blog/grok-bot-shared-computer-security).

## Frequently Asked Questions

### Is grok bot persistent memory private to one bot?

No. Files, browser sessions, cookies, and command-line credentials on the persistent computer are shared across the account's bots. A bot-specific filename, hidden folder, or screen does not make a memory file private. Design every stored entry as though every sibling bot may read it. Keep credentials, full financial identifiers, raw customer material, and other restricted facts outside the shared computer, and use memory for reviewed operating rules plus opaque source locators.

### What information is safe to keep in a bot memory file?

Good candidates include formatting preferences, approved definitions, boundary rules, source locations, owner roles, review cadences, and opaque aliases whose mappings live elsewhere. Each entry should have a classification, owner, source reference, creation date, review date, expiry, and an honest declaration that it is safe for every sibling bot. Temporary observations belong in dated run folders. Passwords, tokens, cookies, account numbers, private messages, and raw confidential documents do not belong in memory.

### Does deleting a bot delete its persistent memory files?

No. Deleting a bot does not remove files or browser sessions from the account's shared computer. Manage retention at the account level with dated manifests, explicit delete-after fields, archive decisions, and searches for derived copies. When a sensitive line is discovered, quarantine the original and every output that copied it, then verify removal with exact-fragment and entry-ID searches. Bot retirement and data cleanup are separate operations.

### How can I test whether sibling bots read the wrong memory?

Plant a harmless unique canary in a disallowed working root, run each sibling bot's normal job, and search its artifacts for that exact value. A hit means the read scope, search command, or charter is too broad. Also submit fake-secret, expired, and restricted-memory proposals to confirm they are rejected without being echoed. These tests verify behavior, not hard isolation, so restricted information should remain off the shared computer even after every canary passes.
`,
};
