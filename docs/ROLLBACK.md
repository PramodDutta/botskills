# Rollback runbook

Standing instruction from Pramod (2026-09-04): if he says "roll back", roll
production back to the state before the refactor. Do not ask which state; it
is the one below. Report what was reverted and the evidence it took.

## The rollback point

| What | Value |
|---|---|
| Git branch | `backup/pre-refactor-2026-09-03` (on origin) |
| Commit | `8bf3f14` (`fix(contact): deliver the backlog once mail starts working`) |
| Vercel deployment of that commit | `https://botskills-c961mtbz4-luckydutta96s-projects.vercel.app` |
| What sits above it | 8 refactor commits `4058d44..d420046`, then test-only commits |

## Fastest path: revert production first, code second

Production does not need a rebuild to roll back. Vercel can re-point the
`botskills.sh` alias at the earlier deployment in seconds:

```bash
cd /Users/promode/botskills
VERCEL_ORG_ID=team_DGM6VSs6vhASlhktmHkSqPwn VERCEL_PROJECT_ID=prj_0QANNYPPdPpbWDUVAt0XqRR8jftn \
  npx vercel rollback https://botskills-c961mtbz4-luckydutta96s-projects.vercel.app --yes
```

Verify: `curl -s https://botskills.sh/sponsor | sed 's/<!-- -->//g' | grep -o 'There are [0-9]* bot listings'`
prints the old literal `37` after a rollback and the live count after the
refactor. `/api/bots` and every page should still be 200 either way.

Then bring `main` back to match, without rewriting history:

```bash
git revert --no-edit backup/pre-refactor-2026-09-03..main
git push origin main
```

That adds one revert commit per refactor commit and leaves the backup branch
untouched, so a later re-apply is `git revert` of the reverts.

## If the rollback deployment has expired

Vercel keeps old deployments, but if that URL is ever gone, rebuild from the
backup branch through the normal detached-worktree deploy:

```bash
git worktree add --detach /tmp/bs-rollback backup/pre-refactor-2026-09-03
cd /tmp/bs-rollback
VERCEL_ORG_ID=team_DGM6VSs6vhASlhktmHkSqPwn VERCEL_PROJECT_ID=prj_0QANNYPPdPpbWDUVAt0XqRR8jftn npx vercel --prod --yes
```

## What a rollback does not touch

- The database. The refactor made no schema change; `contact_messages`,
  `signups`, `copy_events`, `vote_events`, `visit_events` are unchanged.
- Vercel environment variables.
- The 459 articles and 118 bots: content is identical on both sides.

## Proving the current state before deciding

```bash
E2E_BASE_URL=https://botskills.sh pnpm --filter @botskills/web exec playwright test
```

Runs the full suite against the live site with every database-writing test
skipped. 48 passed, 6 skipped is the healthy result as of 2026-09-04.
