# A sweep regex needs recall on the old text, not zero hits on the new

## The problem

"Plan 25 SEO articles and publish them after review." The same day, the Grok
Bot docs reversed several facts the site was built on (Cursor Pro included,
base SuperGrok and X Premium+ linkable, every self-serve Teams seat included,
an account On-demand monthly limit, the iOS app on iPad, phone run history
and routine deletion), so the facts pack and top pages were now wrong.

## The approach

1. **Ground truth first.** Fetched every docs page as raw text into a folder,
   then wrote a dated `VERIFIED-FACTS-2026-09-23.md` that supersedes the
   August files, which got a pointer at the top.
2. **Writers read the raw docs, not the summary.** The 25 new articles and
   every fixer agent were told the raw text wins over the facts file. That
   caught my own error: the summary said any team can switch Grok Bot off;
   the docs say that switch is Enterprise-only and self-serve Teams gets a
   status line. The facts file was corrected and no page carried the error.
3. **Rewrite pages whose thesis flipped** (Pro exclusion, Teams Premium,
   iPad): same slug, new title, a dated correction note at the top.
4. **Sweep the rest by inventory, mapping, residual**, as on 6 September:
   about 260 posts corrected sentence by sentence.
5. **Adversarial final review before deploy.** A broad detector (platform
   word plus negation, minus known-good contexts) read every hit by hand. It
   found a boilerplate paragraph in 7 posts ("Linux desktop, Android, and
   iPad have no Grok Bot client", "Editing needs macOS or Windows") and about
   25 more stale lines ("iPhone cannot delete", "Linux desktop remains no")
   that survived two earlier sweeps. Fixed 36 files with exact-match
   replacements that assert their counts, then gated everything.

## The judgment calls

- **Kept "Mac or Windows" where the docs scope it that way**: local
  execution and hardware security keys really are Mac and Windows only.
  A blanket replace would have introduced new errors.
- **Did not trust factsweep's silence.** It reported nothing for the
  boilerplate because its regex matched the old claim's wording ("no Linux
  app"), not its meaning. The new checks were tested against the pre-fix
  backups (14 hits) before being trusted on the fixed corpus (0 hits).
- **Did not retry the push or the IndexNow ping** when the auto-mode
  classifier blocked them. The deploy itself had gone out from a detached
  worktree at HEAD and was verified live; the rest waits for the user.

## The reusable rule

A detector that finds nothing proves nothing until it has found the known
bad text: test every sweep regex against the pre-fix copy for recall, and
make writers work from the raw source so one bad summary line cannot spread.
