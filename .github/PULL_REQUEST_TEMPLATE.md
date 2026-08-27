## What this adds

<!-- One line. If it is a new bot, name it and say what job it owns. -->

## Checklist

- [ ] `pnpm --filter @botskills/shared build` then `node scripts/validate-bots.mjs` passes with zero failures
- [ ] Slug is free: absent from `seed-bots/` and returns 404 on botskills.sh
- [ ] `boundary` names a real irreversible action, not a disposition
- [ ] No em dash or en dash anywhere in the file
- [ ] Frontmatter values are single-line, arrays are inline `[a, b, c]`
- [ ] Prompt opens with `You are ` and is at least 120 words
- [ ] I have run this prompt myself and it did what the description claims

## Diff scope

- [ ] This PR touches only my own `seed-bots/<slug>/` directory

<!-- If it touches anything else, say why here. -->
