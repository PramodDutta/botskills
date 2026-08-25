"""Broad sweep for claims that contradict the verified docs.

The first version of this used narrow phrase patterns and missed
"Each bot gets a persistent cloud computer", because an adjective sat between
"gets" and "computer". This version looks for the CONCEPTS near each other and
accepts false positives, which a human then reads.
"""
import os,re,sys
D='packages/web/src/app/blog/posts'
CHECKS=[
 ('ISOLATION: bot with its own machine',
  r'(each|every|per|a)\s+bot\s+(gets|has|runs on|owns|is given)\s+[^.\n]{0,40}?(computer|machine|vm|virtual machine|sandbox|container)'),
 ('ISOLATION: own/separate credentials or logins per bot',
  r'bot[^.\n]{0,60}?(its own|their own|separate|isolated)\s+(logins?|sessions?|credentials?|cookies)'),
 ('SPEND: a cap that can be set',
  r'(set|setting|configure|configuring|enable|enabling|your)\s+(a\s+)?(spend(ing)?|budget|usage)\s+(cap|limit|ceiling)'),
 ('SPEND: allowance given a number',
  r'(allowance|included usage)[^.\n]{0,30}?(\$|\d{2,})'),
 ('PLATFORM: linux/android/ipad said to work',
  r'(linux|android|ipad)[^.\n]{0,30}?(app|client|version|supported|available|works)'),
 ('MODEL: grok bot said to run a named model',
  r'grok bot[^.\n]{0,40}?(runs on|uses|powered by)[^.\n]{0,20}?grok-\d'),
 ('MODEL: a picker exists',
  r'(choose|select|pick|switch)[^.\n]{0,25}?model[^.\n]{0,25}?(in grok bot|for your bot)'),
 ('CLAUDE: grok BOT reading claude artifacts',
  r'grok bot[^.\n]{0,60}?(skill\.md|claude\.md|claude code)'),
 ('PRICE: unpublished superGrok heavy figure', r'\$300'),
 ('ACQUISITION: wrong acquirer', r'xai\s+(acquired|bought|purchased)\s+(cursor|anysphere)'),
 ('ROUTINES: team level', r'routines?[^.\n]{0,50}?(team[- ]level|across the team|shared across bots)'),
]
files=sorted(f for f in os.listdir(D) if f.endswith('.ts') and f!='index.ts')
total=0
for f in files:
    c=open(f'{D}/{f}',encoding='utf-8').read()
    body=re.search(r'content: `([\s\S]*)`,\n\};',c)
    if not body: continue
    t=re.sub(r'\s+',' ',body.group(1)).lower()
    for name,pat in CHECKS:
        for m in re.finditer(pat,t):
            s=t[max(0,m.start()-110):m.end()+110]
            print(f'[{name}]\n  {f[:-3]}: ...{s}...\n')
            total+=1
print(f'candidate hits (read each; negations and corrections are fine): {total}')
