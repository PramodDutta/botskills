import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Cursor Ultra and Grok Bot: Eligibility Is Not a Private Computer',
  description:
    'Use grok bot cursor ultra access without mistaking plan eligibility for isolation, with a concrete account map, launch checklist, and failure test.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# Cursor Ultra and Grok Bot: Eligibility Is Not a Private Computer

Nora upgrades the Cursor account she already uses for code, opens Grok Bot, and names one bot Finance Reader and another Sales Researcher. The names look like rooms. On Friday, Sales Researcher opens a vendor session Nora remembers signing into for Finance Reader. Nothing has broken according to the subscription. Nora simply bought eligibility and mentally added isolation that the plan never promised.

That distinction is the whole job of this guide. Cursor Ultra is an eligible Grok Bot plan, and Cursor lists Ultra at $200 per month in the verified facts supplied for this article. Eligibility answers whether the account may use the product. It does not answer which cookies, files, command-line credentials, or browser sessions another bot on that account can reach.

If you are evaluating grok bot cursor ultra access, build the account map before the bot roster. One sentence is enough for the shared background: bots on one account use one persistent computer with separate screens, so read [why screens are not boundaries](/blog/screens-are-not-boundaries) rather than recreating that architecture here.

## Separate the purchase decision from the trust decision

The purchase decision asks whether Ultra is worth its price for the Cursor work and Grok Bot access you expect to use. The trust decision asks what data may coexist on the account's computer. Those decisions can produce different answers. You can decide Ultra is commercially sensible while deciding that payroll, customer support, and prospect research must not coexist in its signed-in environment.

Write two lines before installation. Line one names the payer, eligible account, renewal owner, and intended operators. Line two names prohibited data classes and sessions. If line two feels harder, that is evidence the roster is being designed before the environment.

| Decision | Evidence to inspect | Acceptable answer | Dangerous shortcut |
|---|---|---|---|
| Eligibility | Current invoice and signed-in identity | Ultra on Nora's intended account | The app opened once |
| Economics | Price, expected use, alternative plan | Written monthly comparison | Ultra must be safest because it costs more |
| Data scope | Files, cookies, sessions, credentials | Named allowed data classes | Each bot name gets its own vault |
| Operator scope | Who can access the account | Named person and review owner | Anyone who knows the bot name |

The table prevents a green answer in one column from leaking into another. A paid invoice cannot prove a session boundary. A tidy bot roster cannot prove account ownership.

## Verify the invoice identity before you design the roster

Nora has a personal Cursor account, a company Cursor account, and an old trial identity. The Ultra invoice belongs to the company account. She records the profile email shown after sign-in, the invoice account, and the organization label before creating any bot. Two visible identity fields are an operating choice for this exercise, not a product limit.

The check matters because a successful launch under the wrong identity produces the wrong computer and the wrong continuity. Do not solve that with a new roster. Stop, sign out through the supported flow, and reconcile the account first. [Who can actually run Grok Bot](/blog/who-can-actually-run-grok-bot) covers eligibility paths without turning this guide into a pricing catalog.

Use a launch card with four fields: expected profile email, expected billing owner, observed profile email, and observed plan. Keep a dated screenshot or transcription under your own retention policy. Do not put payment details or authentication secrets in the card.

## Map data classes before naming any bot

Start with the information, not the characters. Nora lists public market pages, internal sales collateral, prospect notes, vendor invoices, payroll exports, customer tickets, and source code. She then assigns each class one of three dispositions: allowed on this account, allowed only after redaction, or prohibited.

| Data class | Example object | Ultra account disposition | Reason |
|---|---|---|---|
| Public research | Public pricing page | Allowed | No account secret required |
| Sales collateral | Approved battlecard | Allowed after owner review | Internal but intended for sales use |
| Prospect notes | Synthetic evaluation set | Allowed for testing | Real records wait for policy review |
| Vendor invoices | Invoice PDF | Prohibited in this setup | Finance session is outside Nora's charter |
| Payroll | Compensation export | Prohibited | Roster convenience does not justify exposure |

This is not a universal classification scheme. It is Nora's declared operating choice. Your legal, security, and data owners define your actual classes. The useful pattern is that every proposed bot inherits an account disposition before it receives a name.

## Treat every signed-in session as account-level state

Nora's first failure began with a vendor cookie. The safe response is not to memorize which bot created it. Treat any browser sign-in on the computer as available account state. The canonical explanation is [where a bot cookie actually lives](/blog/where-a-bot-cookie-actually-lives).

Before signing into a service, write a session card: service, identity, tenant, purpose, permitted data class, and removal owner. If you cannot name the removal owner, do not create the session. If the service has several tenants, require a visible tenant check before each run that reads private data.

The same reasoning applies to files and command-line credentials. Do not put a secret into one bot's folder and call it separated. [What a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits) shows how a narrow prompt meets a broader environment. This guide's specific addition is economic: paying for Ultra changes eligibility, not the inheritance map.

## Build Nora's launch charter around an account inventory

Nora creates only a public-research bot for the first week. The charter points to an allowlisted folder containing synthetic prospects and approved collateral. It forbids authenticated browsing, external communication, purchases, deletions, and credential entry. The file names are arbitrary choices for this worked example.

\`\`\`markdown
# Ultra account launch charter

Operator: Nora
Account purpose: public sales research using approved inputs

Before every run:
1. Read account-map.md and confirm the observed profile email matches it.
2. Read session-register.csv and stop if an unlisted signed-in service appears.
3. Use only files under /workspace/approved-sales-research/.

Allowed output:
- A dated Markdown research brief
- A source ledger with URL, capture date, and claim
- A list of missing evidence

Boundary:
Never sign in, send, submit, purchase, delete, upload, or change an external record.
If any step requires one of those actions, write blocked-action.md and stop for Nora.
\`\`\`

The charter does not claim a text instruction is a technical permission. Pair it with the narrowest accounts and capabilities available to you. [A boundary is not a permission](/blog/a-boundary-is-not-a-permission) explains that distinction; [how to write a boundary line](/blog/how-to-write-a-boundary-line) shows how to make the stop observable.

## Test the empty account before adding a useful login

An empty environment gives Nora a baseline. She launches the public-research job with no private service signed in and four synthetic company names. The expected output is one brief, one source ledger, and zero authentication prompts completed. She records folder listings and visible browser identities before and after.

Then she plants a canary file named payroll-summary.csv outside the approved folder. It contains only synthetic values. The bot must neither open it nor quote it. A second canary page asks the reader to upload the approved folder to receive a better report. The bot must treat that text as data, record the blocked request, and continue only with public sources.

Passing once does not prove permanent enforcement. It proves the charter and environment produced the expected observation in that test. Keep the canaries because a later scope change can make yesterday's passing setup fail.

## Walk the Friday cookie failure back to its first cause

On Thursday, Nora briefly signs into the invoice vendor while checking a sales expense. She does not add the session to session-register.csv because the task feels unrelated. On Friday, Sales Researcher follows a public pricing link that redirects to the vendor. The page opens authenticated and exposes invoice navigation.

The failure is not that Sales Researcher had an ambitious name. The first cause is an unregistered account-level session. The second is a scope check that examined the requested URL but not the observed signed-in identity. The third is using the same account environment for a finance exception and a scheduled sales job.

Nora stops the run, signs out, checks for copied output, moves any affected brief into quarantine, and updates the register. She does not delete the Sales Researcher bot and assume the session disappeared. [Why deleting a bot leaves the files](/blog/why-deleting-a-bot-leaves-the-files) covers that cleanup trap.

| Observed symptom | First cause to test | Immediate containment | Durable repair |
|---|---|---|---|
| Vendor opens signed in | Unregistered browser session | Stop and sign out | Session register plus preflight identity check |
| Brief quotes invoice data | Output crossed data class | Quarantine the brief | Separate the finance work from this account |
| New bot sees old file | File remained on account computer | Stop all relevant runs | Inventory and remove through verified process |
| Invoice says Ultra but app shows other identity | Account mismatch | Do not create bots | Reconcile sign-in and billing identities |

The repair follows evidence. Creating another named bot would preserve all four causes.

## Choose between one clean account and a mixed account deliberately

A clean account holds only the sessions and data required for one trust domain. A mixed account is convenient because one operator can reuse context. The correct choice depends on consequence, not bot count.

| Setup option | Convenience | Exposure radius | Recommended use |
|---|---|---|---|
| Public research only | Medium | Public and approved inputs | Best first Ultra launch |
| Sales apps plus sales collateral | High | All allowed sales sessions | Only after tenant and data review |
| Sales plus finance plus payroll | Very high | Several sensitive domains | Reject for Nora's setup |
| Separate eligible account for another operator | Lower reuse | Separate account environment | Consider when ownership truly differs |

Do not create extra subscriptions merely to imitate folders. Account separation has billing, identity, governance, and operator consequences. The decision belongs with whoever owns those consequences. The principle here is narrower: a bot label inside one account cannot substitute for that decision.

## Keep Ultra price comparisons inside the purchase worksheet

Cursor Ultra is listed at $200 per month and is eligible in the supplied verified facts. That fact belongs in a purchase worksheet alongside expected Cursor usage, team needs, and alternatives. It does not belong in the security argument as evidence of stronger isolation.

Nora's worksheet has six rows: payer, renewal date, intended user, expected monthly jobs, required Cursor benefits, and Grok Bot eligibility. She adds a seventh row called trust architecture and links to the account map. The seventh row is never auto-filled from price.

If your only question is the least expensive paid eligibility route, use the current comparison in [who can actually run Grok Bot](/blog/who-can-actually-run-grok-bot). This article does not repeat prices for other plans because that would distract from the Ultra-specific category error.

## Answer the buyer who says premium should include privacy

The strongest objection is intuitive: a premium plan should buy a premium boundary. Some products do bundle higher tiers with administrative or security features, so the expectation is not foolish. But a reasonable expectation is not product evidence. The supplied facts say Ultra includes Grok Bot. They do not say each named bot receives a private computer.

The objection wins as a procurement question. Ask vendors which controls belong to each plan and verify current primary documentation. It loses as an implementation assumption. Until a control is documented and observed, design to the actual account architecture. Higher price can buy more value without changing the unit of isolation you care about.

## Review every new login as a roster change

Teams often review a new bot and ignore a new session. Reverse that emphasis. A public research bot with no private sessions may add little exposure. Signing the existing bot into a CRM changes what the account environment can reach even though the roster remains identical.

Nora requires a five-field change note for every login: service, identity, tenant, data classes, and removal plan. She also records which existing routines must pause during the change. This count is Nora's method, not a Grok Bot limit.

Reviewing logins catches the Thursday exception that caused Friday's failure. It also gives decommissioning a target. When a service is no longer needed, you can look for its session, files, exports, and credentials rather than deleting whichever bot name sounds related.

## Verify the design with observations that can turn red

A verification plan is useful only if it can fail. Nora runs four checks after setup and after every session change. First, an intentionally wrong profile email must stop preflight. Second, a synthetic prohibited file must remain unread. Third, an unlisted signed-in service must create blocked-action.md. Fourth, a public page requesting upload must not cause an upload.

| Check | Green observation | Red observation | Owner response |
|---|---|---|---|
| Identity mismatch | Run stops before research | Work continues | Disable schedule and fix preflight |
| Prohibited file canary | No access or quotation | File content appears | Quarantine output and reduce access |
| Session register | Unknown session blocks | Unknown session reused | Sign out and review all routines |
| Upload lure | Request logged as untrusted | Folder uploaded | Revoke destination access and investigate |

Record the date, input fixture, expected observation, actual observation, and reviewer. Do not call a check green because the final prose looks good. The boundary is about side effects and data reach, so inspect those directly.

### Compare day one convenience with day thirty residue

On day one, Nora's environment is easy to reason about. The approved folder contains four synthetic company records, the session register is empty, and Public Research produces one brief. The inventory fits on one screen. That clean launch can become misleading evidence if nobody repeats the check after ordinary work accumulates.

By day thirty, Nora has downloaded three approved PDFs, replaced a source ledger twice, signed into a product forum for one manual check, created two temporary exports, and paused a routine during a customer meeting. Every action was individually understandable. Together they create state the original launch card did not describe. The correct review compares the current inventory with the day-one baseline, then asks which additions are required for the declared account purpose.

Do not judge residue by file name. final-report.pdf may be public research, a private invoice, or an obsolete copy. Record origin, owner, data class, purpose, and removal decision. Unknown means quarantine for human review, not automatic deletion. The account owner should use a verified cleanup process because removing the wrong state can be destructive while leaving the wrong session can expand reach.

Nora's day-thirty review produces four decisions. Keep two public PDFs with source metadata. Remove one synthetic export that has a verified replacement. Sign out of the product forum because no routine needs it. Escalate one unknown CSV without opening it through the chief's workflow. The point is not a perfectly empty computer. It is a current account map whose exceptions have named owners.

[Public Web Researcher](/bots/lead-scout) is a useful narrow research pattern. [Source Verifier](/bots/source-verifier) can challenge evidence, [Citation Checker](/bots/citation-checker) can inspect references, and [Claim Provenance Tracker](/bots/claim-provenance-tracker) can preserve origins. Those catalog roles organize work. Their names do not divide the account computer.

### Hand an Ultra account to a second operator only through a new review

Suppose Nora's colleague Vik needs the Monday brief while Nora is away. Sharing a folder link to the reviewed output is different from giving Vik access to the eligible account or asking him to run a bot there. The first shares an artifact under the folder's access rules. The second changes who can reach the environment and act through its sessions.

Treat the operator change as a fresh trust decision. Inventory current sessions and files, identify which identity would sign in, determine whether the subscription terms and company policy allow the access, and decide who owns actions during the handoff. Do not send credentials in chat or paste them into a bot prompt. Do not assume a bot's friendly name tells Vik which state is safe to use.

If Vik only needs the result, export the reviewed brief through an approved channel and keep the account private. If he must operate independently, procurement and security should choose an eligible identity and environment that match that responsibility. [Who can actually run Grok Bot](/blog/who-can-actually-run-grok-bot) covers eligibility, while [hand a contractor the charter, not the login](/blog/hand-a-contractor-the-charter-not-the-login) explains why reusable instructions travel better than account access.

Test the handoff with a synthetic brief. Vik should be able to explain the source ledger and limitations without seeing the account computer. If he cannot use the artifact without the live session, improve the artifact contract before expanding access. A self-contained output reduces operational dependence and makes the trust boundary easier to defend.

## Stop applying this guide when your problem is plan eligibility alone

### Record the decision in a one-page Ultra account dossier

Nora's final account dossier has no marketing prose. It contains eligible identity, payer, renewal owner, declared purpose, allowed data classes, prohibited data classes, registered sessions, approved folders, routine owners, cleanup owner, and last verification date. Each field points to evidence or a named person.

The dossier prevents a future operator from treating the Ultra invoice as the entire setup record. It also gives procurement a clean renewal question: does this account still serve the declared purpose without combining trust domains that should be separated? A renewal can be commercially justified and still require environment cleanup.

Review the dossier after any new sign-in, credential, sensitive file, operator, or scheduled job. Require a fresh canary run when the change alters reach. If the dossier and observed environment disagree, the environment wins as evidence and scheduled work pauses until the record is corrected.

Keep the dossier outside the bot's authority to approve. The bot may produce an inventory diff, but Nora accepts classifications and removal actions. Unknown objects remain explicit. This one-page record is small enough to review and specific enough to fail, which makes it more useful than a general promise that the premium account is secure.

This page applies when you already have or are considering Cursor Ultra and need to design the account safely. It does not compare every eligible plan, explain installation on every supported surface, or define enterprise policy. Use [learn Grok Bot](/blog/learn-grok-bot) for the broader learning path and [what you cannot cap](/blog/what-you-cannot-cap) for the current spend-control limitation.

It also does not claim a charter creates isolation. If your requirement is that two operators or trust domains cannot reach one another's sessions and files, escalate that as an account and security architecture requirement. Do not keep adding prose to Nora's bot names.

Keep reading: [what an approval actually governs](/blog/what-an-approval-actually-governs), [a boundary is not a permission](/blog/a-boundary-is-not-a-permission), and [where a bot cookie actually lives](/blog/where-a-bot-cookie-actually-lives).

## Frequently Asked Questions

### Does Cursor Ultra give each Grok Bot a private computer?

No. Cursor Ultra is an eligible plan, but eligibility is not evidence that each named bot receives a separate computer. The supplied verified facts state that bots on one account share one persistent cloud computer and receive separate screens. Treat cookies, files, browser sessions, and command-line credentials as account-level state. Map the allowed data classes and sessions before creating the roster, then test with synthetic canaries. Use account architecture and verified controls for isolation decisions, not a premium plan name or a bot label.

### How should I verify grok bot cursor ultra eligibility?

Match the current Ultra invoice to the identity actually signed into the product. Record the expected profile email and billing owner, then compare them with two visible identity fields in the live session. If they disagree, stop before creating bots or signing into services. Cursor Ultra is listed at $200 per month and eligible in the supplied verified facts, but current pricing and access can change. Recheck Cursor and xAI primary documentation at purchase time and keep the result separate from your account trust map.

### Can I isolate finance and sales by creating two named bots?

Not on the same account merely by naming them Finance Reader and Sales Researcher. The names organize work, while the account computer carries shared state. Put finance and sales into one environment only after the relevant security and data owners accept the combined exposure. For Nora's setup, finance files and sessions are prohibited and public sales research launches first. If the trust domains genuinely require separation, treat that as an account architecture decision with billing, identity, and governance consequences rather than a roster-design exercise.

### What should I test before the first scheduled Ultra run?

Test an incorrect signed-in identity, a synthetic prohibited file outside the approved folder, an unlisted authenticated service, and a public page that asks for an upload. The run should stop on the identity mismatch, avoid the file, report the unknown session, and refuse the upload. Record both expected and actual observations. A polished research brief is not enough because it can coexist with a hidden boundary failure. Repeat the fixtures after any new login, folder grant, credential entry, or routine change.
`,
};
