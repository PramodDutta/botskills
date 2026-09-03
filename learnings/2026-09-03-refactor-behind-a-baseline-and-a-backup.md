# Refactor behind a baseline and a backup

## The problem

"Refactor the code, check everything works, deploy, keep a backup branch" on a
solo-founder site that is live and SEO-dependent, with no eslint and a test
suite that only covered three features.

## The approach

1. **Backup first, pushed.** `git branch backup/pre-refactor-<date>` at the
   production commit, pushed to origin before touching a file. Revert is then
   `git reset --hard backup/...` plus a redeploy, and it survives a lost laptop.
2. **Baseline every gate before editing.** shared build, `tsc --noEmit`, the
   full Playwright suite (27 passed), and the bots validator. A gate that was
   already red tells you nothing after the refactor.
3. **Enumerate duplication with grep, not memory.** `neon(` (9 sites),
   `createHash` (2), the JSON fetch options (5), the email regex (2), the
   honeypot input (2), the sponsor tag markup (3), the seed path (2), the
   contact address (6). Each grep became one helper and one commit.
4. **Extract, then swap call sites one file group at a time.** New helpers
   first (nothing imports them, so the running e2e suite is unaffected), then
   routes, lib, sponsor surfaces, client components, pages. Python heredocs
   with asserted `str.replace` so a drifted anchor fails loudly instead of
   silently editing nothing.
5. **Widen the tests to what you touched.** New specs pin the API contracts,
   every top-level page, the sitemap, the derived counts and FAQ schema under
   both heading spellings: 27 more cases, 54 total.
6. **Gate order matters:** tsc, then e2e, then `next build`, never e2e and
   build together, because Playwright's dev server and `next build` share
   `.next/`.
7. **Deploy from a detached worktree at HEAD, verify live, then push.** Origin
   main only moves once production is proven.

## The judgment calls

- **Did not touch drizzle.** `db/index.ts` has one consumer (copy telemetry)
  and works. Ripping it out for symmetry is a second refactor, not this one.
- **Did not delete the `mailError` diagnostic** in the contact response. It is
  still the only signal for the open Resend key problem.
- **Did not rewrite the seven "Common questions" headings** to the canonical
  one. The gate checks the four questions, not the heading, so the extractor
  is what needed to be tolerant; renaming content would have hidden the class.
- **Did not trust `ReturnType<typeof neon>`.** It widens to the generic client
  and loses `rows.length`; the explicit `NeonQueryFunction<false, false>` is
  what `neon(url)` actually returns.
- **Did not trust a raw-HTML grep for a React text expression.** SSR inserts
  `<!-- -->` between adjacent text nodes, so "There are 118 bot listings" does
  not appear verbatim in `curl` output. Strip the markers before grepping.
- **Did not trust Playwright to send a string body verbatim.** With a JSON
  content type it encodes the string, so "malformed JSON" arrives as valid
  JSON. Send no body to test the parse-failure branch.

## The reusable rule

Before a refactor: push a backup branch, record every gate green, and grep the
duplication into a list. Then each helper is one grep, one commit, and one
re-run of the same gates, and the deploy is a verification step rather than a
leap.
