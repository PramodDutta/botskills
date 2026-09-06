# Landing someone else's WIP, and sweeping a fact through 150 articles

## The problem

"Refactor the full code, test it, commit and push the whole, keep a branch,
keep a rollback file, and sweep the 90 articles." On arrival the tree held
20 modified and 12 new files from another agent, idle for 22 hours, and
production was on a deployment nobody in this session had made.

## The approach

1. **Backup branch and ledger before anything.** `backup/pre-refactor-<date>`
   at HEAD, pushed; `rollback.empty` with the commit, branch, Vercel URL and a
   curl that distinguishes each state. Recorded the mystery deployment as an
   entry too, marked as unverified until it was.
2. **Treat idle WIP as a candidate, not as noise or as truth.** Dated it by
   mtime, confirmed nothing was still writing, read every diff, ran its own
   tests, then gated it with everything else. It landed as its own commit
   with a message saying where it came from. The alternative, stashing it or
   absorbing it silently, would have either lost work or shipped unread code.
3. **Sweep by inventory, then by mapping, then by residual.** Dump every
   sentence and table row that matches the stale claim, count the repeats,
   write whitespace-tolerant rules for the top shapes (57 copies of one
   sentence, 29 of another), apply, re-inventory, hand-map what is left,
   repeat with a wider idiom detector ("Mac or Windows desk", "flat no").
   Three passes: 306, 108, and ~30 replacements. Pages whose whole argument
   was the old fact were rewritten, not patched.
4. **Protect the sentences that must not change.** A sentence about a
   different product ("Computer Use on your Mac or Windows desktop") was
   masked before the generic rule ran and restored after. Historical
   statements in correction callouts were excluded from the detector.
5. **Gate by the gate, then by production.** Full article gate, dupecheck,
   slop, tsc, lint, format, unit, local e2e, build, deploy from a clean
   worktree, e2e against production, then push. Two production failures
   were a locator matching Next's route announcer, not the site.

## The judgment calls

- **Did not stash, reset or clean the WIP**, even though the rules say
  pre-existing changes are someone's. "Push the whole" plus a 22-hour idle
  tree is the case where reviewing and landing it is the careful reading.
- **Did not regex the two thesis pages.** Flipping sentences inside an
  argument for the old fact produces a self-contradicting page; those two
  were rewritten from the docs and the third got a dated callout because
  its thesis (editing needs desktop) is still true.
- **Did not run Prettier across article bodies**, only non-article source,
  and committed that single formatting pass separately so the diff is
  readable as "style" and nothing else.
- **Did not keep the Google Fonts stylesheet.** The lint warning pointed at a
  real cost (a render-blocking request); next/font self-hosts and the
  production check confirmed two preloaded woff2 files.
- **Did not assume `vercel env ls` "created" meant "unchanged"**, and did
  not assume a mystery deployment was the WIP: curl for a WIP-only URL
  proved it was the earlier growth deploy.

## The reusable rule

When a fact changes under a corpus, do not grep-and-replace: inventory the
exact sentences, map the repeated shapes, hand-fix the residual, and rewrite
any page whose argument was the fact. And when the tree already holds work
you did not write, date it, read it, gate it, and land it under its own
name, or park it on a branch; never let it ride silently into a deploy.
