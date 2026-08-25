---
name: publish-seo-batch
description: Use when publishing or expanding SEO blog articles on botskills.sh, e.g. "publish today's articles", "write N articles", "expand the blog", "add a blog post", or any request that creates or edits files under packages/web/src/app/blog/posts.
---

# Publish SEO Batch (botskills.sh)

Pipeline: source topics -> dedup slugs -> write -> gate -> relink -> register ->
build -> commit -> deploy -> prove live -> IndexNow. A batch is not published
until step 9 passes. Adapted from the qaskills.sh pipeline, which is the proven
version of this.

## Step 0: State check

```bash
git -C /Users/promode/botskills status --short   # pre-existing WIP is not yours
date +%F                                          # today, used in every post
```

## Step 1: Source topics

`docs/seo/topics-100.json` holds the plan. Anything already written is a file in
`packages/web/src/app/blog/posts/`. Take the next unwritten topics from the plan,
or WebSearch for net-new demand. Topics mined from social posts go in the
`x-signal` cluster with a note that their facts are DISPUTED and need
verification.

## Step 2: Dedup every slug BEFORE writing

```bash
cd /Users/promode/botskills
for s in slug-one slug-two; do
  echo "$s: $(grep -rln "$s" packages/web/src/app/blog/posts/ | wc -l) hits"
done
```

Any hit means pick a different slug.

## Step 3: Write

File `packages/web/src/app/blog/posts/<slug>.ts`, shape per
`docs/seo/WRITER-SPEC.md`. Depth per `docs/seo/LONGFORM-SPEC.md`:
3000-4000 body words, 13-15 declarative verb-led H2 sections, 4+ tables,
exactly 4 FAQ questions as the last H2.

**Product facts come ONLY from `docs/seo/VERIFIED-FACTS-2026-08-25.md`.** Nothing
from its DO NOT ASSERT list, ever. Grok Bot ships weekly and the popular posts
about it contradict each other, so re-verify against docs.x.ai before asserting
anything new. Every docs.x.ai page has a raw markdown twin at `<path>.md`.

Cluster addenda for templated title frames live in `/tmp` during a run and
should be recreated per batch: jobs, integrations, roles, and comparisons each
have anti-template rules, because a templated body gets the whole cluster
filtered out of the index.

## Step 4: Gate every file

```bash
python3 /tmp/gate.py <slug>...        # words, H2, tables, FAQ, desc, links, em dashes
python3 /tmp/checkh2.py <slug>...     # H2 collisions against the whole corpus, must be 0
python3 /tmp/slop.py                  # banned phrases, opener uniqueness, prose duplication
python3 /tmp/seoaudit.py              # titles, descriptions, orphans, broken links
```

No H2 may be reused anywhere in the corpus. Zero em dashes. Zero invented bot
slugs.

## Step 5: Kill orphans

```bash
python3 /tmp/relink.py            # dry run: reports orphans and inbound distribution
python3 /tmp/relink.py --write    # appends a "Keep reading" line before each FAQ
```

Every article needs 3+ inbound internal links or it sits unindexed. This is the
failure that produced 137 orphan pages on qaskills.

## Step 6: Register in BOTH registries

```bash
python3 /tmp/register.py          # rewrites index.ts imports, posts map, postList
grep -c "'<slug>'" packages/web/src/app/blog/posts/index.ts   # must be exactly 2
```

Missing the `posts` map entry means a 404. Missing `postList` means invisible on
/blog and absent from the sitemap. Never hand-edit `sitemap.ts`; it derives from
`postList`.

## Step 7: Build

```bash
pnpm build
```

A failure inside a post file is almost always an unescaped backtick or `${`.

## Step 8: Commit and deploy

Stage explicit paths, never `git add -A`. Conventional commit, imperative, no
trailers, no footers, no em dash.

```bash
npx vercel --prod --yes
```

`vercel --prod` uploads the WORKING TREE, so commit first or deploy from a
throwaway worktree at HEAD.

## Step 9: Prove it live, then ping IndexNow

```bash
for s in <slugs>; do
  echo "$s $(curl -s -o /dev/null -w '%{http_code}' https://botskills.sh/blog/$s)"
done
curl -s https://botskills.sh/sitemap.xml | grep -c '<loc>'
node scripts/indexnow.mjs <slug>...      # Bing, Yandex, Naver, Seznam
```

Every slug must be 200 and in the sitemap. IndexNow 200/202 means accepted; 403
`SiteVerificationNotCompleted` means the key route is unreachable. Google does
not participate in IndexNow and finds posts through the sitemap.

## Red flags: stop and redo the step

- Writing a file before the step 2 dedup grep
- Asserting a price, model name, or platform fact not on the SAFE list
- Reporting done without step 9 output in hand
- `git add -A`
- Skipping the build because "it is just content"
