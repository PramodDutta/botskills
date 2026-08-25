import os,re,json,subprocess,collections
D='packages/web/src/app/blog/posts'
posts={}
for f in sorted(os.listdir(D)):
    if not f.endswith('.ts') or f=='index.ts': continue
    src=open(f'{D}/{f}',encoding='utf-8').read()
    m=re.search(r'content: `([\s\S]*)`,\n\};',src)
    if not m: continue
    t=re.search(r"title:\s*\n?\s*'([^']*)'",src) or re.search(r'title:\s*\n?\s*"([^"]*)"',src)
    d=re.search(r"description:\s*\n?\s*'([^']*)'",src) or re.search(r'description:\s*\n?\s*"([^"]*)"',src)
    cat=re.search(r"category: '([^']*)'",src)
    raw=m.group(1)
    # headings inside fenced code blocks are not document headings
    nocode=re.sub(r'\\`\\`\\`[\s\S]*?\\`\\`\\`','',raw)
    posts[f[:-3]]={'title':t.group(1) if t else '','desc':d.group(1) if d else '',
                   'cat':cat.group(1) if cat else '','content':raw,'nocode':nocode}
issues=collections.defaultdict(list)

# duplicates
for field,label in [('title','duplicate title'),('desc','duplicate description')]:
    c=collections.Counter(p[field] for p in posts.values())
    for v,n in c.items():
        if n>1: issues[label].append(f'{n}x: "{v[:60]}"')

for s,p in posts.items():
    c=p['content']
    # title length (SERP truncates ~60)
    tl=len(p['title'])
    if tl>62: issues['title over 62 chars (SERP truncation)'].append(f'{s} ({tl})')
    if tl<25: issues['title under 25 chars'].append(f'{s} ({tl})')
    # description
    dl=len(p['desc'])
    if not (140<=dl<=170): issues['description outside 140-170'].append(f'{s} ({dl})')
    # h1
    h1=re.findall(r'^# (.+)$',p['nocode'],re.M)
    if len(h1)!=1: issues['h1 count != 1'].append(f'{s} ({len(h1)})')
    elif h1[0].strip()!=p['title'].strip(): issues['h1 != title'].append(s)
    # heading hierarchy: no h3 before first h2
    order=[len(m.group(1)) for m in re.finditer(r'^(#{1,4}) ',p['nocode'],re.M)]
    for i in range(1,len(order)):
        if order[i]-order[i-1]>1: issues['skipped heading level'].append(s); break
    # first paragraph should contain a keyword-ish token from title
    body=re.sub(r'^#[^\n]*\n','',c.strip())
    first=' '.join(body.split()[:150]).lower()
    toks=[w for w in re.sub(r'[^a-z ]','',p['title'].lower()).split() if len(w)>4]
    if toks and not any(t in first for t in toks):
        issues['no title term in first 150 words'].append(s)
    # word count
    w=len(re.sub(r'\\`\\`\\`[\s\S]*?\\`\\`\\`','',c).split())
    if w<1400: issues['under 1400 words'].append(f'{s} ({w})')
    # thin FAQ answers
    for q,a in re.findall(r'^### ([^\n]+\?)\n\n([\s\S]*?)(?=\n### |\n## |\Z)',p['nocode'],re.M):
        n=len(a.split())
        if n<55: issues['FAQ answer under 55 words'].append(f'{s}: {q[:40]} ({n})')
    # outbound internal links
    if len(set(re.findall(r'\]\(/blog/([a-z0-9-]+)\)',c)))<1: issues['no internal blog link'].append(s)
    # image alt
    for img in re.findall(r'!\[([^\]]*)\]',c):
        if not img.strip(): issues['image without alt'].append(s)

# inbound link graph -> orphans
inbound=collections.Counter()
for s,p in posts.items():
    for t in set(re.findall(r'\]\(/blog/([a-z0-9-]+)\)',p['content'])):
        if t!=s: inbound[t]+=1
orphans=[s for s in posts if inbound[s]==0]
weak=[f'{s} ({inbound[s]})' for s in posts if 0<inbound[s]<2]
if orphans: issues['ORPHAN: zero inbound internal links'].extend(orphans)
if weak: issues['only 1 inbound link'].extend(weak)

# broken internal blog links
allslugs=set(posts)
for s,p in posts.items():
    for t in set(re.findall(r'\]\(/blog/([a-z0-9-]+)\)',p['content'])):
        if t not in allslugs: issues['BROKEN internal blog link'].append(f'{s} -> /blog/{t}')

print(f'SEO AUDIT: {len(posts)} articles\n')
sev=lambda k: 0 if k.isupper() or 'BROKEN' in k or 'ORPHAN' in k else 1
for k in sorted(issues, key=lambda k:(sev(k),k)):
    v=issues[k]
    print(f'[{len(v):3}] {k}')
    for x in v[:6]: print(f'        {x}')
    if len(v)>6: print(f'        ... +{len(v)-6} more')
print()
tot=sum(len(v) for v in issues.values())
print(f'TOTAL ISSUES: {tot}')
print(f'inbound link distribution: min={min(inbound[s] for s in posts)} max={max(inbound[s] for s in posts)} median={sorted(inbound[s] for s in posts)[len(posts)//2]}')
