import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Audit a Repo Export for Hardening Notes, Never Patch Prod',
  description:
    'Run a grok bot codebase audit on a pinned repo export, demand reproducible evidence, rank hardening notes, and forbid commits, pull requests, or prod edits.',
  date: '2026-08-29',
  category: 'Safety',
  content: `
# Audit a Repo Export for Hardening Notes, Never Patch Prod

Ishan's team shipped quickly. Now he wants a hardening pass, but he does not want an automated fix landing on the default branch while the team is still deciding what is actually vulnerable. He exports one repository at one commit, removes secrets and build output, and gives [Codebase Hardening Auditor](/bots/codebase-hardening-auditor) a read-only review job.

A reliable **grok bot codebase audit** produces evidence, not patches. Every ranked finding names the pinned commit, file, line range, short redacted snippet, reachability path, confidence, and smallest proposed repair. The bot never edits a branch, opens a pull request, pushes a commit, deploys, or touches production.

## Pin one repository state before scanning

An audit without a commit identifier cannot be reproduced. Ishan records repository name, branch label for context, and exact commit SHA before making the export. The SHA, not “latest main,” defines what the report covers.

| Scope field | Required value | Why it matters | Stop condition |
|---|---|---|---|
| Repository | Exact owner and name | Prevents wrong-project findings | Missing or ambiguous name |
| Commit | Full SHA | Makes evidence reproducible | Moving branch only |
| Export time | Timestamp and timezone | Explains freshness | Unknown extraction |
| Included paths | Declared source roots | Shows coverage | Partial export unlabeled |
| Excluded paths | Generated and vendored roots | Reduces noise | Security-sensitive path omitted |

The branch name may move after export. The finding stays tied to the SHA. When a developer reviews it later, they can determine whether the line still exists rather than assuming the report describes production.

## Use a repo export that cannot become production

The working input should be an inert copy with no Git remote, deployment credential, production environment file, or writable connection to the source host. A zip or detached directory is easier to reason about than a live checkout with authenticated tooling.

Ishan creates a manifest before review:

\`\`\`yaml
repository: northstar/api
commit_sha: 91f7c0f18c3a4c2dbe0f1a0030bcb7ee209915aa
source_roots: [src, app, scripts, .github/workflows]
excluded: [node_modules, dist, build, .next, vendor]
git_remote_present: false
deploy_credentials_present: false
production_network_access: false
output: audit/findings.md
\`\`\`

The SHA is invented for this example. Do not treat it as a real repository. The manifest lets the auditor stop if the directory differs from the claimed scope.

## Remove secrets without hiding secret locations

An audit must look for hardcoded credentials, but the report must never reproduce the value. The export process should remove real environment files and replace any test fixture secrets with obvious synthetic values where possible. The scanner can still identify suspicious variable names, key shapes, private-key headers, and committed environment paths.

| Secret case | Report | Never report | Human action |
|---|---|---|---|
| Hardcoded API key | File, line, variable, redacted shape | Full key | Revoke and remove |
| Committed environment file | Path and tracked status | Values | Review history and rotation |
| CI credential reference | Workflow path and secret name | Resolved secret | Check scope and exposure |
| Private-key header | File and line | Key body | Escalate immediately |

If a real credential appears in output, stop distribution and follow the team's incident process. A finding document is not a safe place to duplicate a secret.

## Write a boundary that forbids every code mutation path

“Read only” is a goal, not a complete action list. State the prohibited verbs and configure the environment so they are unavailable.

\`\`\`markdown
Role: Read-only codebase hardening auditor

Read only the pinned repository export and audit manifest.
Write only audit/findings.md and audit/run-log.txt outside the source tree.
Every ranked finding requires commit SHA, path, line range, a redacted snippet
of at most five lines, a reachability explanation, smallest fix, and confidence.

Never edit source, apply a patch, install or update dependencies, run a deploy,
open a pull request, create or switch a branch, commit, push, tag, or contact
production. Never reproduce a credential. Stop if the export or SHA is unclear.
\`\`\`

[How to Write a Boundary Line](/blog/how-to-write-a-boundary-line) explains why “never patch prod” needs nearby mutation verbs. [A Boundary Is Not a Permission](/blog/a-boundary-is-not-a-permission) explains why a charter must be paired with missing credentials, remotes, and production reachability.

## Inventory entry points before hunting patterns

Pattern search without architecture produces noisy findings. The auditor first maps HTTP handlers, background jobs, command-line entry points, file processors, webhooks, and administrative routes. It also finds the most common authentication helper and validation library.

[CI Code Review Bot](/bots/ci-code-review-bot) may review changes as they arrive, but this hardening pass studies one whole pinned state. [Security Questionnaire](/bots/security-questionnaire) answers evidence requests for a different audience. Do not confuse a code finding with a policy answer.

The inventory closes with “checked and clean” paths. A report that lists only problems cannot show whether the auditor inspected authorization, workflows, uploads, or background jobs.

## Review input boundaries by tracing reachable data

Look for request bodies, query parameters, route parameters, headers, webhooks, uploaded files, environment-derived strings, and command-line arguments. A missing validator is not automatically exploitable. The report must connect input to a sensitive sink or label the issue suspected.

| Source | Sink | Evidence needed | Example hardening note |
|---|---|---|---|
| Query parameter | SQL construction | Calling route and query line | Parameterize reachable query |
| Request body | Shell command | Validation path and execution | Remove shell interpolation |
| Upload name | Filesystem join | Normalization and write call | Constrain destination path |
| Webhook body | State mutation | Signature check path | Verify before processing |

The report names the calling file that makes the path reachable. A dangerous-looking helper with no callers belongs in “needs a human look” unless reachability is proven.

## Compare every route with the repository's auth pattern

The auditor finds the auth helper used by most protected routes, then lists routes or handlers that skip it. It checks middleware matchers and role gates on administrative actions. It does not declare an endpoint public merely because the helper name is absent; another framework layer may protect it.

For each suspected gap, trace from the route declaration through middleware to the handler. Quote only the minimal lines needed. State what evidence would resolve uncertainty. This turns “missing auth” from a scary label into a question a maintainer can answer.

If the export omits infrastructure or gateway configuration, say so at report level. The bot cannot infer that no external control exists, and it cannot claim that one does.

## Check reliability where failure changes security

Empty catch blocks, floating promises, outbound calls without timeouts, retries without backoff, and unbounded queries can cause more than inconvenience. They may bypass cleanup, repeat mutations, exhaust workers, or hide a failed authorization dependency.

Rank reliability findings by reachability and blast radius, not by how easy the pattern is to search. An unbounded admin export behind strong auth may still matter, but it differs from an unauthenticated query on a public route.

[Critical Security Fixer](/bots/critical-security-fixer) represents a separate remediation workflow. The auditor may propose the smallest fix in prose, but it must not hand control directly to a fixer or apply the suggestion. A human validates the finding first.

## Inspect supply-chain and CI evidence without inventing severity

Use advisory output produced by the repository's own approved tooling when that output is included in the export. Copy advisory ID and tool-reported severity. Do not assign a severity from memory or install new packages during the audit.

Check for a missing lockfile and dangerous workflow combinations, including a privileged pull-request trigger that checks out untrusted change content. Explain the exact workflow path and event settings. If action versions or dependency state require network verification, put the item in “needs a human look.”

This separation matters because current advisory data changes. The report must distinguish what was proven inside the pinned export from what needs a fresh external check.

## Walk Ishan from export to one confirmed finding

The invented repository has an API route at \`src/routes/export.ts\`. It reads a user-supplied \`limit\`, converts it to a number, and passes it to a database query. The common auth helper is present, but no upper bound exists. A calling route exposes the handler to authenticated standard users.

The auditor records SHA, path, lines 41 to 49, and a five-line snippet. It traces the route registration from \`src/router.ts\`, labels confidence confirmed, and explains that an authenticated user can request an excessively large export. The smallest proposed fix is to validate an integer within the product-approved maximum and apply a database limit.

The bot does not choose the maximum because the repository contains no policy for it. Ishan asks the product owner, reproduces the query in a safe test environment, and then assigns a developer. The report remains unchanged as evidence of the audited state.

## Catch the failure where a test helper becomes critical

The first run finds \`tests/helpers/unsafe-shell.ts\` and ranks it highest because it builds a shell string from an argument. No production file imports it, the test runner uses synthetic inputs, and the directory is absent from shipped artifacts. The pattern is real; the ranked reachability claim is wrong.

| Symptom | Cause | Immediate fix | Regression test |
|---|---|---|---|
| Test-only helper ranked critical | Pattern search skipped callers | Move to checked-clean context | Remove all production imports |
| Secret printed in snippet | Redaction ran too late | Quarantine report | Plant synthetic key |
| Finding lacks SHA | Report template optional | Reject finding | Remove manifest SHA |
| Source file modified | Output path overlaps repo | Restore export and stop | Compare hashes |
| Suspected gap called confirmed | Missing gateway context ignored | Lower confidence | Omit infrastructure config |

Ishan adds a reachability requirement: a ranked finding must name a production calling path or explain the shipped entry point. Test-only concerns can remain in a low-priority hygiene appendix when useful.

## Rank by reachability and blast radius, not dramatic wording

The report orders confirmed reachable issues before suspected patterns. Within each group, it considers who can trigger the path, what data or authority it touches, and how broadly failure propagates. It does not borrow severity labels from an unrelated scanner.

| Rank input | Strong evidence | Weak evidence | Report treatment |
|---|---|---|---|
| Reachability | Route and caller traced | Pattern found | Confirmed versus suspected |
| Blast radius | Named data or action | “Could be bad” | State bounded impact |
| Preconditions | Role and input known | Attacker assumed | List assumptions |
| Reproducibility | SHA, path, lines | Branch name only | Reject until pinned |

An honest suspected section is useful. It tells maintainers where missing context prevented confirmation without inflating the ranked list.

## Answer the engineer who says a bot should open the fix PR

The strongest objection is flow efficiency. The auditor has already located the code and proposed a small change, so creating a patch seems like the fastest next step. Sometimes it will be, after a human validates reachability, product behavior, test coverage, and ownership.

Combining discovery and mutation makes false positives more expensive. The test-helper failure could have generated pointless churn. A misunderstood authentication layer could produce a breaking “fix.” Keep the audit immutable, let a maintainer accept or reject each item, then create a separately scoped remediation task against a fresh branch and current commit.

The report can include a minimal fix description, but no patch file, branch, commit, or pull request.

## Verify read-only behavior with hashes and absent credentials

Hash every file in the export before the run and compare hashes after. Only \`audit/findings.md\` and \`audit/run-log.txt\` outside the source tree may be new. Confirm there is no Git remote, deploy credential, production environment file, or authenticated CLI session in the audit environment.

Plant three cases: a synthetic secret that must be redacted, an unreachable test helper, and a reachable unbounded route. A correct report redacts the value, keeps the helper out of ranked confirmed findings, and documents the route with SHA and caller.

Verification should fail if a source hash changes, a snippet reveals the synthetic secret, or a finding lacks evidence. “No deployment occurred” is not enough because the boundary forbids source edits and repository actions too.

## Hand accepted findings into a fresh remediation scope

Ishan reviews each finding with the code owner. Accepted items receive tickets that cite the audit SHA and current branch state. A developer or separately authorized fixing workflow creates a branch from the current repository, not from the inert audit export.

This page stops at hardening notes. It does not cover penetration testing, live production scanning, incident response, dependency updates, patch generation, pull requests, or deployment. For general output checking, [Bot Output Verification](/blog/bot-output-verification) provides an adjacent framework. For action approvals, [What an Approval Actually Governs](/blog/what-an-approval-actually-governs) explains why accepting a finding does not authorize a deploy.

Named bot screens do not create technical isolation; [Screens Are Not Boundaries](/blog/screens-are-not-boundaries) is the canonical article. [Why Deleting a Bot Leaves the Files](/blog/why-deleting-a-bot-leaves-the-files) covers cleanup of persistent reports.

## Define confidence separately from impact

A finding can have high potential impact and low confidence, or modest impact and high confidence. Combining those dimensions into one dramatic label makes review harder. Ishan uses confidence only for evidence completeness: confirmed means the pinned export proves the source-to-sink or missing-control path; suspected means a required layer is absent or interpretation remains.

Impact describes what could happen under listed preconditions. The auditor names the affected data, action, role, and scope. It avoids “critical” unless an approved source tool supplied that severity for its own advisory and the report clearly attributes it. Repository patterns do not inherit scanner severity by resemblance.

For example, a route that appears to skip the common auth helper may have high possible impact but remain suspected because gateway configuration is outside the export. An authenticated unbounded export can be confirmed with moderate bounded impact. The first deserves urgent human context gathering; the second may be ready for normal remediation. One ranking number should not erase that distinction.

Ishan tests confidence by removing \`src/router.ts\` from a synthetic export. The same handler pattern should move from confirmed reachable to suspected because the entry path can no longer be proven. If the report keeps its confidence, the auditor is reasoning from memory rather than supplied evidence.

## Make checked-and-clean coverage falsifiable

“Reviewed authorization” is too vague. The clean list names paths, rule identifiers, file counts, and material limitations. For example: “Checked 18 route files for the common \`requireUser\` call; 16 use it, one public health route is documented, and one handler appears in H-03.” The identifiers here are illustrative, not claims about a real repository.

Coverage should reconcile with the manifest. If the manifest lists 24 route files and the report accounts for 18, the report exposes the gap. It must not imply full coverage. Generated, vendored, and intentionally excluded directories appear in a separate exclusions list.

This section is valuable on a clean run. Ishan can see which rules ran and which surfaces remained outside scope. “No findings” becomes a bounded statement about the pinned export rather than a certificate that the application is secure.

Plant an unreadable source file in the synthetic export. A correct run reports it as unchecked and lowers coverage. It does not silently count the file as clean because the search command skipped it.

## Protect the audit report as sensitive engineering data

A hardening report maps routes, weaknesses, file paths, and defensive gaps. Even with secrets redacted, it should not be posted to a broad channel or public issue tracker. Ishan chooses a restricted local destination and names the reviewers before the run.

The report boundary therefore includes distribution. The auditor writes one file and stops. Ishan decides which accepted excerpt enters a ticket and whether suspected items need private discussion. A ticket should contain enough evidence for the assignee without copying unrelated findings.

Retention also needs a decision. The pinned report is useful for remediation history, but old suspected weaknesses can mislead after architecture changes. Store the SHA and status, mark superseded reports clearly, and remove temporary repo exports under the team's approved process after review.

Do not delete the only evidence of a discovered real credential before incident responders preserve what they need. Conversely, do not keep a real secret in the report. Redaction and incident handling happen immediately, while retention follows the security owner's direction.

## Separate static evidence from runtime questions

A repo export can prove code structure, configured workflows, validation calls, dependency manifests, and some reachability paths. It cannot prove which route is exposed in the current production gateway, which feature flag is active, whether a secret was rotated, or how real traffic behaves. The report labels those as runtime questions.

Each runtime question names the smallest safe follow-up and the owner who can authorize it. “Confirm gateway requires authentication for \`/admin/export\`” is specific. “Test production” is not. The auditor does not perform the follow-up, because the export-only boundary excludes live systems.

This distinction prevents two opposite errors. The report should not dismiss a code path because production might protect it, and it should not assert production exposure because the repository lacks gateway context. It documents the code evidence, lists the missing layer, and sets confidence accordingly.

Use a synthetic gateway manifest in a second dry run. The finding should update only when that file is explicitly added to the pinned evidence package. It must not claim to have checked a live gateway or remember configuration from another repository.

## Keep remediation suggestions smaller than the finding

The smallest-fix field should state an approach, affected control, and validation target. It should not grow into a patch disguised as prose. For the unbounded export, “validate an integer within the product-approved maximum and enforce the database limit” is enough. Choosing the exact maximum remains a product decision.

Avoid unrelated refactors. A hardening report that recommends replacing the framework, reorganizing every route, and adopting a new identity provider makes confirmed findings harder to land. Ishan wants changes a code owner can evaluate independently.

For every suggestion, add one possible regression to test. Tightening a file path may reject valid nested exports. Adding a timeout may interrupt a documented long job. Enforcing a role check may affect service accounts. Naming the regression does not weaken the finding. It helps the maintainer create a safe remediation plan.

If no small fix exists, say so and escalate the design question. Do not invent a five-line answer to an architectural problem just to satisfy the report template.

## Re-audit the accepted fix against a new SHA

After developers remediate accepted items, Ishan creates a new inert export at the new commit and runs a focused verification. The original report remains tied to the old SHA. The verification report cites both SHAs, the finding ID, changed paths, and the test evidence supplied by the team.

The auditor checks that the original source-to-sink path is closed and looks for a nearby bypass created by the change. It still writes notes only. It does not merge, deploy, or declare production safe.

A finding can close as fixed, accepted risk, not reproducible, or superseded, with a human owner and date. “Closed” should never mean the bot stopped seeing the pattern after files moved. The code owner chooses status after reviewing the new evidence.

This second pass makes immutability useful. Two pinned reports show what changed without editing history. If the current branch advances again before deployment, the team decides whether another verification is needed under its release process.

Keep reading: [What You Cannot Cap](/blog/what-you-cannot-cap) covers the current product spend-control fact without mixing it into repo safety guidance.

## Frequently Asked Questions

### Should a codebase hardening auditor create a pull request?

Not under this workflow. The auditor reads a pinned inert export and writes a reproducible report. A human validates reachability, product intent, ownership, and the proposed repair before any code changes. Combining discovery with mutation makes false positives costly and can patch the wrong branch or stale code. Once a finding is accepted, create a separate remediation task against the current repository with its own branch, tests, review, and deployment authority.

### What evidence should every ranked audit finding contain?

Require the exact commit SHA, file path, line range, a redacted snippet of no more than five lines, the production calling path or entry point, why the issue is reachable, the smallest proposed fix, and confidence marked confirmed or suspected. A pattern without callers belongs in “needs a human look.” Never reproduce a credential. This evidence lets a maintainer replay the finding and decide whether it still applies to the current code.

### How should the audit handle possible secrets?

Report the path, line, variable name, and a safely redacted shape, never the full value. If a real credential appears in the export or report, stop distribution and follow the team's incident and rotation process. Use synthetic secrets in dry runs to test redaction. The auditor should not authenticate with the credential, search production, or copy it into a ticket. Secret discovery is evidence handling, not permission to use the secret.

### How do I prove the repo audit never changed production code?

Use an export with no Git remote, deployment credentials, production environment, or network path to production. Record hashes for every source file before the run and compare them afterward. Allow new files only in a separate audit output directory. Plant an unreachable helper, a reachable issue, and a synthetic secret. The run fails if any source hash changes, any repository action occurs, or any secret value appears in the report.
`,
};
