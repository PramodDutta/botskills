#!/usr/bin/env python3
"""Rewrite the dual registry in blog/posts/index.ts.

Only registers posts that PASS scripts/gate.py. A post that fails is left
unregistered on purpose: an unregistered file is invisible, which is recoverable,
whereas a short or malformed article in the sitemap is a published mistake.
"""
import os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
D = os.path.normpath(os.path.join(HERE, '..', 'packages/web/src/app/blog/posts'))
P = os.path.join(D, 'index.ts')

all_slugs = sorted(f[:-3] for f in os.listdir(D) if f.endswith('.ts') and f != 'index.ts')

# Ask the gate which ones are publishable.
res = subprocess.run([sys.executable, os.path.join(HERE, 'gate.py'), *all_slugs],
                     capture_output=True, text=True)
failed = {ln.split(':')[0].strip().removeprefix('FAIL').strip()
          for ln in res.stdout.splitlines() if ln.strip().startswith('FAIL')}
ok = [s for s in all_slugs if s not in failed]

def camel(s):
    p = s.split('-')
    return p[0] + ''.join(w.capitalize() for w in p[1:])

head = ['introducing-botskills', 'one-person-company-grok-bot']
order = [s for s in head if s in ok] + [s for s in ok if s not in head]

src = open(P, encoding='utf-8').read()
imports = '\n'.join(f"import {{ post as {camel(s)} }} from './{s}';" for s in order)
pmap = '\n'.join(f"  '{s}': {camel(s)}," for s in order)
plist = '\n'.join(f"  {{ slug: '{s}', ...{camel(s)} }}," for s in order)

src = re.sub(r"(?m)^import \{ post as .*?$\n", '', src)
src = src.replace('export interface BlogPost', imports + '\n\nexport interface BlogPost', 1)
src = re.sub(r'export const posts: Record<string, BlogPost> = \{[\s\S]*?\n\};',
             'export const posts: Record<string, BlogPost> = {\n' + pmap + '\n};', src, 1)
src = re.sub(r'export const postList: Array<\{ slug: string \} & BlogPost> = \[[\s\S]*?\n\];',
             'export const postList: Array<{ slug: string } & BlogPost> = [\n' + plist + '\n];', src, 1)
open(P, 'w', encoding='utf-8').write(src)

bad = [s for s in order if src.count(f"'{s}'") != 2]
print(f'registered {len(order)} posts | held back {len(failed)}: {sorted(failed) or "none"}')
print(f'slugs not appearing exactly twice: {bad or "none"}')
