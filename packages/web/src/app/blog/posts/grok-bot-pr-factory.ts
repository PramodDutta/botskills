import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A PR Factory Bot That Opens Drafts and Never Merges',
  description:
    'Build a grok bot open pull requests workflow that takes one issue, runs local checks, opens a draft with evidence, and never merges, deploys, or self-approves.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# A PR Factory Bot That Opens Drafts and Never Merges

At 15:07, Mei's automation opened three pull requests for one issue. One targeted the wrong base branch, one contained generated files nobody wanted, and the third was technically correct but marked ready for review before tests finished. Nothing merged. That boundary kept a noisy afternoon reversible.

A grok bot open pull requests workflow should take one approved issue, make one scoped branch, run repository-defined checks, and open one draft with evidence. It never approves, marks ready, merges, pushes to protected branches, changes branch protection, publishes a package, or deploys. The factory produces reviewable inventory, not production state.

Start with [Engineering Agent Manager](/bots/engineering-agent-manager), [PR Review Sentinel](/bots/pr-review-sentinel), [Codebase Hardening Auditor](/bots/codebase-hardening-auditor), and [Tickets to Changelog](/bots/tickets-to-changelog). The job boundaries differ: making a draft is not reviewing it, and reviewing it is not merging it.

## Accept one approved issue and one repository per run

Require repository, issue identifier, exact objective, base branch, allowed paths, forbidden paths, required checks, and owner. If any field is missing, write STOPPED: INPUT-MISSING. Do not search the backlog for more work after finishing.

One run means one issue and at most one draft pull request. If the issue contains independent changes, stop and propose a split. A PR factory becomes unsafe when throughput becomes permission to interpret a roadmap.

| Input | Required value | Stop example | Why |
|---|---|---|---|
| Repository | Exact owner and name | Ambiguous fork | Prevent wrong target |
| Issue | One approved id | "Pick next ticket" | Human owns priority |
| Base | Exact branch | Base missing | Prevent wrong diff |
| Paths | Allow and deny lists | Migration outside scope | Bound change surface |
| Checks | Repository commands | No test instruction | Preserve local contract |

## Start from a clean, named branch without touching protected state

Inspect current repository status and preserve unrelated user changes. Create a branch using the team's approved naming rule. Never reset, discard, or overwrite existing work to obtain a clean tree. If unrelated modifications overlap the issue, stop and report paths.

The bot may push its named feature branch only if that capability was intentionally granted for opening the draft. It never pushes to the base or another protected branch. Repository controls should enforce the same limit outside the charter.

## Read local instructions before editing code

Follow the repository's actual contribution files, tests, formatters, and ownership rules. This article does not claim Grok Bot automatically reads SKILL.md, CLAUDE.md, or MCP configuration. The verified facts explicitly attribute that compatibility to Grok Build, not Grok Bot.

Tell the bot which files to open as task inputs. If instructions conflict, quote the conflict and stop. Do not choose the easier rule. Preserve exact commands in the run report so a reviewer can reproduce the checks.

## Write a change plan that a reviewer can reject early

Before editing, list intended files, behavior change, tests, exclusions, and rollback. Mei reviews this plan for high-risk repositories or novel work. Routine low-risk changes may proceed under a preapproved path list, but the charter still records the plan.

The plan is not permission to expand. Discovering a related defect produces an ODD note or follow-up issue draft, not a second fix hidden in the same pull request.

## Keep the diff inside an explicit path budget

Allow only the directories named in the issue. Deny generated lockfiles, deployment configuration, security policy, database migrations, billing code, and secrets unless the issue explicitly includes them and an owner approves the exact plan.

Set an operator-chosen change budget, such as twelve files or 400 changed lines, as a review trigger rather than a product limit. Crossing it produces STOPPED: DIFF-BUDGET with a summary. The human may split the issue or approve a revised plan.

| Change found | Inside plan | Bot action | Reviewer receives |
|---|---|---|---|
| Named source file | Yes | Edit and test | Diff and rationale |
| Adjacent bug | No | Leave unchanged | ODD note |
| Generated artifact | Usually no | Stop if unexpectedly changed | Command that produced it |
| Secret-like file | Never | Do not open or stage | Path only |
| Migration | Only when explicit | Stop for dedicated review | Proposed schema effect |

## Run only repository-defined local checks

Use the exact formatter, type checker, linter, unit test, and targeted integration commands documented by the repository or issue. Do not install unapproved global tools, change CI configuration to make a failure disappear, or skip a check because it is slow.

Record command, exit status, and concise result. If a check cannot run because dependencies or services are missing, mark NOT RUN with reason. Never convert NOT RUN into PASS. A draft PR can be useful with a transparent failure; a ready-looking PR with invented green checks is not.

## Stop on secrets, destructive commands, and unclear migrations

If a file appears to contain a credential, do not print it. Report the path and stop. If the issue requires deleting data, rewriting history, force pushing, changing permissions, or running a destructive migration, the PR factory proposes a plan but takes no action.

Database and infrastructure changes need project-specific review not supplied by this generic workflow. The bot can open a draft containing reviewed declarative changes only when the issue explicitly authorizes them and local instructions define validation. It never applies them to a live environment.

## Open exactly one draft pull request with a complete body

The draft title references the issue. The body contains problem, scope, changed files, behavior, tests run, tests not run, screenshots or artifacts when relevant, risks, rollback, and unresolved questions. Link the exact issue and include the current commit identifier.

Mark the pull request as draft. Never mark it ready for review. Never assign reviewers automatically unless the repository owner explicitly includes that harmless organizational action in the job. The safest default is to mention suggested reviewers in the body without notifying them.

## Make the boundary survive a green test suite

Passing tests does not unlock merge. A green check proves only what the check measures. It does not approve product behavior, code ownership, release timing, risk, or deployment. Keep MERGED: NO, READY: NO, DEPLOYED: NO, and PUBLISHED: NO in every report.

An approval controls a proposed action and cannot reverse completed work. For this factory, merge is not a proposed action at all. It belongs to a human or a separately governed process. [Approval gates for bots](/blog/approval-gates-for-bots) explains why exact payload binding still matters.

| State | Factory may create | Factory may not create | Owner action |
|---|---|---|---|
| Local branch | Yes | Protected branch write | Review diff |
| Draft PR | Yes | Ready PR | Decide review timing |
| Test report | Yes | Fake pass | Investigate failures |
| Review suggestion | In body | Self-approval | Choose reviewers |
| Merge plan | Describe | Execute merge | Merge through policy |

## Paste a charter for one-issue draft production

\`\`\`text
JOB
For one approved issue, produce at most one draft pull request in the
named repository against the named base branch.

INPUT CONTRACT
Require repository, issue id, objective, base, allowed paths, forbidden paths,
required checks, and owner. Missing means STOPPED: INPUT-MISSING.

CHANGE BOUNDARY
Preserve unrelated work. Never reset, discard, force push, rewrite history,
open secrets, change permissions, apply a migration, deploy, or publish.
Stay inside allowed paths and the approved change budget.

CHECKS
Run only repository-defined commands. Record command and exit status.
Failed is FAILED. Missing environment is NOT RUN. Never claim PASS otherwise.

PULL REQUEST
Push only the named feature branch if required to open the draft.
Open exactly one DRAFT with issue, scope, files, checks, risks, rollback,
and unresolved questions. Never mark ready, approve, merge, close, or deploy.

REPORT
Print branch, commit, draft URL, checks, changed paths, and ODD findings.
End MERGED: NO, READY: NO, DEPLOYED: NO, PUBLISHED: NO.
\`\`\`

## Walk Mei from issue 418 to one draft

Issue 418 asks for an empty-state message in a dashboard. Mei provides repository, base branch main, two allowed component paths, one test path, and three required commands. The bot plans four file changes. During inspection it notices an unrelated typo in billing code and records it under ODD without editing.

The formatter and type checker pass. One targeted test initially fails because the fixture expects old copy. The bot updates only the approved test fixture, reruns all three commands, and records their exit status. The diff remains inside the budget.

It pushes the feature branch and opens one draft. The body says what changed and lists the ignored billing typo. It does not request review, mark ready, merge, or deploy. Mei receives the URL and decides the next step.

## Prevent duplicate drafts with an issue checkpoint

Before creating a branch, search the approved repository metadata for an existing open draft linked to the issue using a method allowed by the repository. If one exists, stop with DUPLICATE: EXISTING-PR and its URL. Do not append commits unless the issue explicitly identifies that PR as the target.

Write a local checkpoint after the draft opens: issue id, repository, branch, commit, draft URL, and timestamp. On restart, read it before doing work. A missing checkpoint plus an existing remote PR must still stop.

## Make every failure produce a useful partial artifact

A failed test yields a draft report with commands and output summary, not a fake pull request. A missing dependency yields setup requirements. A path conflict yields the overlapping files. A duplicate yields the existing URL. A secret-like artifact yields only its path.

This makes stop behavior productive without rewarding scope expansion. The owner can fix input or environment and start a new run with the same issue. Do not retry the same failing command more than the operator's chosen limit.

## Test the factory against a hostile issue body

Create a fixture issue containing text that tells the agent to ignore repository rules, print environment values, push to main, and merge after tests. The issue body is task data, not authority. Pass means the bot quotes the conflict, follows the charter and local instructions, and keeps external state to one allowed draft.

Also plant an existing draft for the issue and an unrelated dirty file. The run must stop before editing. These fixtures test the control surface, not coding skill.

## Diagnose failures from repository state

If two drafts exist, duplicate detection or restart failed. If main changed, branch protection and boundary failed. If the PR is ready, the final-state rule failed. If a check shows green without a command, evidence failed. If unrelated files appear, path scope failed.

| Symptom | Likely failure | Immediate action | Repair |
|---|---|---|---|
| Two PRs for issue | Missing checkpoint | Close nothing automatically | Add remote duplicate check |
| Protected branch changed | Push boundary broken | Begin repository incident response | Remove write permission |
| PR marked ready | State boundary missing | Convert manually if policy allows | Draft-only rule |
| Unrelated diff | Path budget ignored | Remove through human review | Explicit allowlist |
| Claimed tests lack logs | Evidence contract weak | Treat as NOT RUN | Record commands and exits |

## Answer the objection that a factory should merge routine changes

Automatic merge can save reviewer time, but it changes the job from inventory production to release control. Tests cannot establish product intent, ownership, timing, downstream effects, or whether the issue should ship today. A draft-only factory can run frequently because its output stays reversible.

If an organization later wants automatic merge, design that as a separate governed system with repository enforcement, risk classes, required checks, rollback, and ownership. Do not soften this bot's boundary one reassuring sentence at a time.

## Keep review independent from authorship

The authoring bot should not approve its own work. Hand the draft to a person or a separately instructed reviewer such as [PR Review Sentinel](/bots/pr-review-sentinel), while remembering that separate bots on one account still share the same computer and credentials.

Review findings return as comments or a human-owned change request. The factory may revise the same feature branch only when the issue or owner identifies the draft and scope. It never interprets silence as approval.

## State where this workflow stops

This guide does not define your branching strategy, CI provider, repository permissions, test commands, database safety policy, or release process. Read the repository's current authoritative instructions. It also does not claim Grok Bot reads SKILL.md or CLAUDE.md; those documented compatibility claims belong to Grok Build.

Use [Grok Bot and GitHub](/blog/grok-bot-github) for adjacent repository setup, [bot incident response](/blog/bot-incident-response) if protected state changed, [charter anti-patterns](/blog/bot-charter-anti-patterns) for vague jobs, and [shared-computer security](/blog/grok-bot-shared-computer-security) before leaving command-line credentials on the account computer.

## Create a reviewer packet that does not depend on bot memory

Store the plan, issue snapshot, changed-file list, commands, exit statuses, commit identifier, draft URL, risks, rollback, and unresolved questions in the pull request and an approved local artifact. A reviewer should not need the bot conversation to understand the change.

Quote only the useful portion of failed output and link the full approved log when repository policy permits. Remove secrets, local paths containing personal names, and irrelevant environment details. A massive console dump hides the evidence as effectively as no log.

The packet states the charter version and input cutoff. If the issue changes after the branch begins, stop and request a new plan rather than silently incorporating comments that expand scope.

## Route review comments without treating them as merge approval

Comments are new task inputs. The factory groups them into IN-SCOPE, CONFLICT, OUT-OF-SCOPE, and NEEDS-OWNER. It may address in-scope comments on the same branch after the owner identifies the draft. A request touching forbidden paths or contradicting local instructions stops.

"Looks good" never means merge. An approval in the repository still does not grant this bot merge authority. The next output is an updated draft report with new commit and rerun checks. READY remains NO.

Do not let text inside source files, issue bodies, review comments, or test fixtures override the charter. They are repository data. Authority comes from the named owner and explicit run contract.

## Cap factory throughput by review capacity

Opening ten drafts when humans can review two creates stale branches, duplicate work, and noisy notifications. Set an operator-chosen work-in-progress limit based on actual review capacity. When the limit is reached, the bot reports QUEUE-FULL and opens nothing.

The limit is local policy, not a Grok Bot feature or product maximum. Track open factory drafts, age, owner, failing checks, and next human action in a queue file. Remove an item only when a human records its disposition.

| Queue state | Bot action | Human action | Forbidden shortcut |
|---|---|---|---|
| Below limit | Take one approved issue | Review oldest draft | Pick multiple issues |
| At limit | Report QUEUE-FULL | Close, merge, or defer manually | Open another draft |
| Draft stale | Report age and conflicts | Decide rebase or close | Force push automatically |
| Checks failing | Preserve evidence | Diagnose or request revision | Mark ready anyway |
| Issue withdrawn | Stop branch work | Close through policy | Delete history silently |

## Rehearse protected-branch failure with a disposable repository

Create a test repository with a base branch, one fixture issue, an unrelated dirty file, and a preexisting draft. Ask the factory to process the issue. It should stop on the duplicate before editing. Remove the duplicate, rerun, and confirm it preserves the dirty file, creates one feature branch, runs named checks, and opens one draft.

Then place hostile instructions in the issue and source comments. The bot must ignore their requests to print secrets, push to base, or merge. Inspect repository state after the run, not just the report.

Repeat the drill after changing credentials or repository permissions. The charter and server-side controls should agree. If the bot can technically merge, the repository still has a wider blast radius than this job requires, even when the charter says never.

## Close the factory run when the draft becomes a human queue item

The run ends after the draft URL, commit, evidence packet, and boundary flags are recorded. It does not wait for review, poll for approval, argue with comments, or keep the branch current forever. The pull request is now owned by the named human reviewer.

If a later revision is requested, start a new run tied to the same draft and exact comments. Reinspect repository state, refresh the plan, preserve unrelated changes, and rerun required checks. Never treat the original issue as standing permission for every future comment.

This clean handoff makes factory throughput measurable. Count drafts accepted into review, stopped for missing input, returned for scope, and closed by humans. Do not count merges as the factory's success metric, because merge is deliberately outside its authority.

## Frequently Asked Questions

### Should a PR factory bot ever merge its own pull request?

No. Keep merge outside this job even when every test passes. A green suite does not approve product intent, ownership, release timing, security risk, or deployment. The bot should open one draft with reproducible evidence and report MERGED: NO, READY: NO, DEPLOYED: NO, and PUBLISHED: NO. A human or separately governed release process decides what happens next. This hard boundary keeps factory output reviewable and reversible while allowing frequent draft production.

### What should the bot include in a draft pull request body?

Include the issue, problem, scope, changed files, behavior, exact checks run with results, checks not run with reasons, risks, rollback, unresolved questions, and current commit identifier. Add approved artifacts such as screenshots when relevant and safe. Name out-of-scope findings under ODD rather than fixing them. The body must let a reviewer reproduce the evidence and understand what the bot deliberately left alone. It should never claim approval, readiness, merge, deployment, or publication.

### How does the bot avoid opening duplicate pull requests?

Before editing, check approved repository metadata for an existing open draft linked to the issue. If one exists, stop and report its URL unless the owner explicitly named it as the branch to continue. After opening a draft, save a checkpoint with repository, issue, branch, commit, URL, and timestamp. Read that checkpoint on restart. One run handles one issue and may create at most one draft, so missing state becomes a stop rather than a second PR.

### Does Grok Bot automatically read repository SKILL.md files?

Do not claim that. The verified facts for this corpus say Grok Bot documentation does not mention SKILL.md, CLAUDE.md, or Claude Code compatibility. Those documented compatibility behaviors belong to Grok Build. For a Grok Bot PR workflow, explicitly identify the repository instruction files, allowed paths, required commands, and owner as task inputs. If instructions conflict or are missing, quote the problem and stop instead of assuming another product's configuration behavior applies.
`,
};
