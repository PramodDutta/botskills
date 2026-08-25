import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and GitHub: Setups, Permissions, and What to Automate First',
  description:
    'A Grok Bot GitHub setup for PR triage, labels, and release notes, with the permission families to grant and the two actions it must never take: merge and force push.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and GitHub: Setups, Permissions, and What to Automate First

A bot with write access to your default branch is not a more capable version
of a bot that leaves comments. It is a different category of thing, with a
different failure mode, and it should be evaluated as such.

Every other integration in this series fails loudly and locally. A bad Gmail
draft sits in a draft folder. A bad Slack post embarrasses you in front of
your team. A bad GitHub push runs CI, triggers a deploy, changes what
everyone else pulls tomorrow morning, and in the force push case removes
commits that nobody can retrieve unless they happen to have a local copy.

GitHub was in the first wave of Grok connectors as of writing. The
availability and the exact consent bundle change, so read the screen you are
shown when you connect. GitHub's permission model does not change much, and it
is unusually good if you use the modern half of it.

## Write access to main is a different risk class

Rank the actions a GitHub bot can take by how hard they are to undo, because
that ranking is the whole permissions decision:

1. **Comment on a PR or issue.** Delete it. Thirty seconds, no trace worth
   worrying about.
2. **Apply a label, assign a reviewer, open an issue.** Reverse it in the UI.
   Slightly annoying, visible in the timeline, harmless.
3. **Push a branch.** Delete the branch. Someone may have pulled it, but it is
   not anyone's base.
4. **Merge to the default branch.** Now CI ran, a deploy may have fired,
   downstream branches will pick it up, and reverting produces a second commit
   rather than an absence. The history says it happened.
5. **Force push to the default branch.** Commits that only existed on the
   remote are unreachable. If nobody has them locally, the work is gone.

Steps one through three are where a bot earns its keep. Step four is a human
decision even when the diff is trivial, because merging is not a statement
about the code, it is a statement that the team is ready for it. Step five is
not a thing a bot should be able to do at all, and the good news is that you
can enforce that outside the charter entirely.

## Repository scope versus organization scope

GitHub has two token models, and the difference between them is larger than
the naming suggests.

Classic personal access tokens are scoped by capability, not by repository.
The commonly used repository scope is effectively all-or-nothing: it grants
read and write across every repository your account can reach, including
private repositories belonging to organizations you are a member of. A bot
that only needed to read one open source repo ends up holding a key to your
employer's monorepo.

Fine-grained tokens select specific repositories and then set each permission
independently to no access, read, or read and write. This is the model to use.
One token per bot, the smallest repository set that works, and read where read
is enough.

| Permission family | What it grants | Worst realistic outcome |
|---|---|---|
| Metadata (read) | Repository names, topics, collaborator lists. Required alongside most others. | Your private repository names and structure leak, which is often enough to map a company's roadmap. |
| Contents (read) | Clone and read code, branches, and files. | Source code, and anything unwisely committed alongside it, becomes available to whatever the bot writes into next. |
| Contents (write) | Create branches, push commits, merge, delete branches, force push where allowed. | Unreviewed code on the default branch, or history destroyed by a force push. |
| Pull requests (read) | Read PRs, diffs, review threads. | Unreleased work and internal review discussion are readable. |
| Pull requests (write) | Comment, label, request reviewers, approve, request changes, and merge. | An approval that satisfies a review requirement, or a merge, without a human reading the diff. |
| Issues (read and write) | Read, open, comment, label, close issues. | Noise in the tracker, closed issues nobody triaged, notification fatigue for maintainers. |
| Actions | Read or re-run workflow runs. | A re-run of a workflow that deploys, using your production secrets. |
| Workflows (write) | Modify files under the CI workflow directory. | Arbitrary code execution in CI with access to repository secrets. This is the most dangerous permission on the list and the least dangerous sounding. |
| Administration | Repository settings, branch protection, collaborators, visibility. | The safety rails get edited by the thing they were protecting you from, or a private repository becomes public. |
| Organization-level | Members, teams, org settings across every repository. | An account-wide blast radius for a bot that was supposed to triage one project. |

Two rows carry most of the risk.

**Workflow write is code execution.** A CI workflow file is a program that
runs on GitHub's runners with whatever secrets the repository holds. Granting
write access to that directory is functionally the same as granting the
ability to run arbitrary code with your deploy credentials. It reads like a
documentation permission. It is not.

**Administration edits the backstop.** If a bot can change branch protection,
then branch protection is no longer protecting you from the bot.

## The two lines: merge and force push

Most GitHub bot charters are too long and miss the two clauses that matter.
Write these first, then add the rest.

**Never merge.** Not with an approval, not with a green build, not when the
diff is a typo fix. Merge is the moment when code stops being a proposal.
Everything upstream of merge is reversible with a delete or a close;
everything downstream involves other people's working copies. A bot that
comments on forty PRs a week and merges none of them is a great teammate. A
bot that merges the easy ones is a bot you now have to audit.

**Never force push, and never rewrite history.** Amend, rebase onto a shared
branch, squash a branch someone else is using: all of these replace commits
rather than adding them. The old commits become unreachable, and while
GitHub's internals may hold them briefly, there is no user-facing recovery
path you would want to depend on at 6pm.

There is a third clause worth adding for review bots specifically: never
approve and never request changes. Both are formal review states with
consequences. An approval can satisfy a required-reviews rule, which means the
bot has silently become the human in the loop. Requesting changes blocks the
PR and pins a red mark on somebody's work. Comments carry the same
information and none of the authority. The catalog's
[PR review sentinel](/bots/pr-review-sentinel) declares exactly that boundary:
it never merges, approves, pushes, or requests changes, and it comments only.

## PR triage that saves real time

Review is where the time goes, and most of that time is not spent reading
code. It is spent working out what a PR is, how risky it is, and whether it is
even ready. That preamble is mechanical, and it is the right thing to
automate.

A useful triage comment answers four questions before a human opens the diff:

- **What changed, in one sentence,** derived from the diff rather than the PR
  description, because descriptions are aspirational.
- **What is the risk surface:** does it touch migrations, authentication,
  payments, permissions, public API shapes, or infrastructure config.
- **What is missing:** changed behavior without changed tests, a new
  dependency, a modified config with no matching documentation, debug output
  left in.
- **What is out of scope:** unrelated formatting, an accidental lockfile
  update, a stray revert.

Here is a charter that produces that and stops there:

\`\`\`text
You are my PR Review Sentinel for [org/repo].

// WHAT YOU OWN
When a pull request opens or is updated, read the full diff, the PR
description, and the linked issue. Post ONE comment containing:
  SUMMARY   one sentence describing what the diff actually does
  RISK      any of: migration, auth, payments, permissions, public API,
            infra config, dependency change. Say "none detected" if none.
  MISSING   behavior changed without tests, new deps, config without docs,
            leftover debug or commented-out code
  SCOPE     changes unrelated to the stated purpose of this PR
  QUESTIONS at most three, each pointing at a specific file and line
Then apply labels from this list only:
  size/s size/m size/l risk/high needs-tests needs-docs

// WHAT GOOD LOOKS LIKE
Reference file paths and line numbers. Never say "some files".
If the diff is under 20 lines and touches no risk surface, say so in one
line and stop. Do not manufacture findings to look useful.
Never comment on style that the linter already enforces.

// WHERE YOU STOP
Never merge. Never approve. Never request changes. Never push or force push.
Never edit files, never open a PR, never modify anything under the
CI workflow directory.
Never close an issue or a PR.
Never comment more than once per commit on the same PR.
If the diff touches [payments, auth, migrations], say so and tag me
instead of analyzing further.
\`\`\`

For deeper standing checks against the codebase rather than a single diff, the
[codebase hardening auditor](/bots/codebase-hardening-auditor) works only
inside the repository and never touches production, which is the same idea
applied to a scheduled sweep instead of an event.

## Issue labeling and the backlog that grades itself

Issue triage is lower stakes than PR review and higher value than it looks,
because the cost of an untriaged backlog is not the untriaged issues, it is
that nobody trusts the tracker enough to look at it.

Give the bot a closed label vocabulary, exactly like the label taxonomy for a
mail bot, and an explicit escape hatch. Ten labels maximum: three for type
(bug, feature, question), three for area, two for severity, one for
needs-reproduction, one for unclear. That last one is the honest option, and
without it every ambiguous issue gets a confident wrong label.

Two things the bot should never do in the tracker:

- **Close issues.** Closing an issue is a decision about product scope wearing
  a housekeeping costume, and stale-bot closures are one of the most reliably
  resented behaviors in open source.
- **Comment at the reporter.** Asking a human for a reproduction is a message
  from your project to a person. Let the bot draft it and tell you; you send
  it, or you approve it.

If you are running several code bots at once, the
[engineering agent manager](/bots/engineering-agent-manager) exists for the
coordination layer, and its declared boundary is the same shape: it never
merges, posts publicly, or messages outside the team without approval.

## Release notes from the diff, not from memory

Release notes are the best-fitting GitHub bot task, and almost nobody sets
them up. The input is completely determined: the commit range between two
tags, the merged PR titles in that range, the linked issues, and the labels.
There is no judgment call about what happened, only about how to say it.

The rule that makes the output trustworthy is that every line traces to a
merged PR number. If the bot cannot point at a PR, the line does not go in.
That single constraint removes the failure where a plausible-sounding feature
that nobody built appears in your changelog.

Publish it as a draft. A draft release is not visible to the public, does not
notify watchers, and does not create the tag until somebody presses publish.
That is the same draft-before-send discipline that governs a mail bot, and the
general pattern is laid out in the
[one-person company guide](/blog/one-person-company-grok-bot).

## Review comments a human would actually read

The failure mode of an automated reviewer is not being wrong. It is being
voluminous. Twenty comments, four of them real, is worse than four comments,
because the reader now has to triage the review, and after a week they stop
reading it at all.

Constraints that keep a review bot welcome:

- One comment per PR per commit, not one per finding.
- A hard cap on questions. Three is plenty.
- Silence is an allowed output. "Small diff, no risk surface, nothing to
  flag" is a useful review.
- No style commentary that a formatter or linter already handles.
- Never re-raise a point the author already answered in the thread.

Measure it after two weeks with one number: how many of its comments led to a
change in the PR. If that is under a quarter, tighten the charter rather than
changing the model. Verbosity is a specification problem.

## Branch protection as the backstop your charter cannot be

Here is the part specific to GitHub that has no equivalent in the other
integrations, and it is why a code bot can be safer than a mail bot despite
the higher stakes.

A charter is a promise. Branch protection is a wall. The charter says the bot
will not merge; the protection rule means it cannot, regardless of what the
charter says, what the model decides, or what a cleverly worded issue comment
talks it into. Set both, and rely on the second.

On your default branch: require a pull request before merging, require at
least one approving review from a human, require status checks to pass, block
force pushes, and block branch deletion. Then the important part, the one
people miss: do not add the bot to the bypass list, and do not grant it the
administration permission that would let it edit these rules.

This also defends against a failure the charter cannot reach. A bot reading
issues, PR descriptions, and code comments is reading text written by people
outside your team. Text can contain instructions. If the only thing standing
between a hostile issue comment and your default branch is a paragraph in a
charter, you are relying on the wrong layer. Branch protection does not read
English.

## Frequently Asked Questions

### Should a Grok Bot GitHub setup be allowed to merge pull requests?

No, and this is the clearest line in the whole integration. Merging is the
point where code stops being a proposal and becomes everyone's problem: CI
runs, deploys may fire, and other people's branches inherit it. Everything
before merge is cheap to undo by deleting a branch or a comment. Have the bot
triage, summarize risk, label, and comment, then leave the merge to a person
even for trivial diffs. Enforce it with branch protection requiring a human
approving review rather than relying on the charter alone.

### What GitHub permissions should a review bot have?

Use a fine-grained token limited to the specific repositories involved, with
read access to contents and pull requests and write access only to pull
request comments and labels. Refuse write access to contents, refuse the
workflow permission, and refuse administration. The workflow permission is the
one to watch: write access to CI workflow files is effectively arbitrary code
execution with your repository secrets. Avoid classic tokens with the broad
repository scope, since that grants read and write across every repository
your account can reach, including private organization ones.

### Why is force push singled out as a boundary?

Because it is the only common GitHub action that destroys work rather than
adding to it. A normal push adds commits, a revert adds a commit, and a bad
merge can be undone with another commit, so the history stays intact and the
mistake stays visible. A force push replaces the branch pointer and leaves the
previous commits unreachable, so if no teammate has them in a local clone
there is no practical recovery path. Block force pushes on protected branches
at the repository level so the capability does not depend on a bot behaving
correctly.

### Can a bot write release notes I would actually publish?

Yes, and it is the best-fitting GitHub automation, because the input is fully
determined: a commit range, the merged pull request titles inside it, the
linked issues, and the labels. Require every line to cite the pull request
number it came from, which eliminates plausible-sounding entries for features
nobody built. Have the bot save the result as a draft release rather than
publishing, since a draft notifies nobody and does not create the tag until a
human presses the button. You edit the phrasing and publish, which takes a
couple of minutes instead of an hour.
`,
};
