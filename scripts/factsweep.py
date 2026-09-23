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
 # Inverted on 2026-09-04: the docs now list a Linux desktop app and an Android
 # companion app. The stale claim is that they do NOT exist. iPad is still out.
 ('PLATFORM: linux/android said NOT to exist (stale since Sep 2026)',
  r'(no|not an?|without an?|lacks an?)\s+(documented\s+|official\s+|supported\s+)?(linux|android)[^.\n]{0,25}?(app|client|build)|(linux|android)[^.\n]{0,40}?(is absent|not (a )?(documented|supported)|does not exist|has no client)'),
 # Inverted again on 2026-09-23: the iOS app now runs on iPad, so the stale
 # claim is that iPad is unsupported. See docs/seo/VERIFIED-FACTS-2026-09-23.md.
 ('PLATFORM: ipad said NOT to work (stale since 2026-09-23)',
  r'ipad[^.\n]{0,30}?(not supported|unsupported|no client|not a client)|no ipad (app|client)'),
 ('PRICE: cursor pro said to exclude grok bot (stale since 2026-09-23)',
  r'cursor pro(?!\+)[^.\n]{0,40}?(does not|doesn.t|not) include|hobby and cursor pro'),
 ('PRICE: pro+ said to be the cheapest path (stale since 2026-09-23)',
  r'cheapest[^.\n]{0,60}?pro\+|pro\+[^.\n]{0,40}?cheapest'),
 ('PRICE: plain supergrok said to be excluded (stale since 2026-09-23)',
  r'supergrok (at )?\$?30[^.\n]{0,40}?(does not|not include)'),
 ('TEAMS: premium seat said to be required (stale since 2026-09-23)',
  r'premium seat[^.\n]{0,30}?(required|needed)|teams? (standard|premium)[^.\n]{0,30}?(only|required)'),
 ('SPEND: no cap at all (stale since 2026-09-23; an account on-demand monthly limit exists)',
  r'\bthere is no spend cap\b|\bno spend cap\b(?![^.\n]{0,40}(per[- ]bot|bot-specific|grok bot-specific))'),
 ('MOBILE: run history or deleting a routine said to need desktop (stale since 2026-09-23)',
  r'(run history|deleting a routine)[^.\n]{0,40}?(need|require)s? (a |the )?desktop'),
 ('PLATFORM: "no Grok Bot client" boilerplate (stale since Sep 2026)',
  r'(have|has) no grok bot client|linux desktop remains no|and the ipad no\b|there is no desktop app'),
 ('PLATFORM: desktop work said to need macOS or Windows only (Linux ships since Sep 2026)',
  r'(needs?|record|paste|edit\w*|author\w*|fix the charter|score|inspect\w*|stay)( it| this| the charter| later)?( on| at| from| into)?( a| the| supported)? (mac|macos) or windows(?! (machine|computer|box|pc|files|gui|desktop)s? in front)'),
 ('MOBILE: phone said unable to delete or read history (stale since 2026-09-23)',
  r'(iphone|phone) cannot delete|cannot (edit a routine, )?view run history|\| (view history|delete) \| not on iphone'),
 ('PRICE: stale exclusion list naming cursor pro or base supergrok (stale since 2026-09-23)',
  r'cursor hobby, cursor pro,|supergrok at the lower tier'),
 ('AUDIT: no audit view stated without the Enterprise exception (stale since 2026-09-23)',
  r'no audit view(?![^.\n]{0,60}(enterprise|individual))'),
 ('PLATFORM: iphone said to be pause and resume only (stale since Sep 2026)',
  r'pause and resume only'),
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
