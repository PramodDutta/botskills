#!/bin/bash
# Wait for codex quota to return, then keep dispatching batches until the plan
# is empty or quota dies again. Each batch: generate brief (ledger-reconciled),
# write, gate, register only what passes, commit with the registry, push.
cd /Users/promode/botskills || exit 1
P=packages/web/src/app/blog/posts

probe() { timeout 120 codex exec -s workspace-write "Reply with only: OK" < /dev/null 2>&1 | grep -qx OK; }

# wait for quota (up to 5h, checking every 10 min)
for i in $(seq 1 30); do
  if probe; then echo "[$(date +%H:%M)] codex available"; break; fi
  echo "[$(date +%H:%M)] still rate limited, waiting"
  sleep 600
done
probe || { echo "codex never came back, giving up"; exit 1; }

for round in 1 2 3 4 5 6; do
  python3 scripts/mkbrief.py 8 /tmp/auto.md || { echo "plan empty"; break; }
  echo "[$(date +%H:%M)] round $round dispatching"
  timeout 3300 codex exec -s workspace-write "$(cat /tmp/auto.md)" < /dev/null 2>&1 | tail -5

  NEW=$(git ls-files --others --exclude-standard -- "$P" | xargs -n1 basename 2>/dev/null | sed 's/\.ts$//')
  [ -z "$NEW" ] && { echo "[$(date +%H:%M)] round $round produced nothing, stopping"; break; }

  python3 scripts/register.py > /tmp/reg.txt 2>&1; tail -1 /tmp/reg.txt
  # commit index.ts plus exactly the files it now references, never a superset
  git add -- "$P/index.ts"
  python3 - <<'PY'
import re,os,subprocess,glob
P='packages/web/src/app/blog/posts'
reg=set(re.findall(r"slug: '([a-z0-9-]+)'", open(f'{P}/index.ts',encoding='utf-8').read()))
unt={os.path.basename(x)[:-3] for x in subprocess.run(
     ['git','ls-files','--others','--exclude-standard','--',P],
     capture_output=True,text=True).stdout.split()}
for s in sorted(reg & unt):
    subprocess.run(['git','add','--',f'{P}/{s}.ts'])
print(f'staged {len(reg & unt)} new articles')
PY
  N=$(git diff --cached --name-only | wc -l | tr -d ' ')
  [ "$N" -le 1 ] && { echo "nothing to commit, stopping"; break; }
  git commit -q -m "feat(blog): batch of $((N-1)) articles from the reviewed plan

Written against the 265-topic reviewed plan, gate clean, registered only after
passing. Word target 3400 for headroom over the 3000 floor, shared background
linked to the teaching lessons rather than restated."
  timeout 200 git push origin main 2>&1 | tail -1
  echo "[$(date +%H:%M)] round $round shipped $((N-1)) articles"
done
echo "[$(date +%H:%M)] autowrite finished. total live: $(grep -c "slug: '" $P/index.ts)"
