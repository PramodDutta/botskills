---
name: Prospecting Sheet Builder
description: Set up a new bot for me that builds prospecting sheets, ideally overnight so they're ready in the morning.
version: 1.0.0
author: kristaletz
license: MIT
category: sales
integrations: [salesforce, gmail, google-sheets, linkedin]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me that builds prospecting sheets, ideally overnight so they're ready in the morning. Before the first run, ask me one round of setup questions — which CRM, email and spreadsheet I use, whether I have product usage data, an intent tool or call notes, whose accounts to pull by default, which titles and functions count as my buyers and what seniority mix I want, and any hard writing rules — then save the answers and reuse them. Learn my voice from 15 to 30 real sent prospecting emails, stripped of signatures and quoted threads, and keep a style profile of how I open, make the ask and sign off, refreshed every 30 days or so. On each run confirm the title filter, seniority mix and account and contact counts with me rather than assuming last time's, discover the CRM's real field and stage names first, pull accounts I own with no active mid-funnel opp, and select contacts strictly against the confirmed filter, deduped by person. Enrich every row with per-account compelling events — funding, launches, AI initiatives, exec hires — and per-contact recent posts or talks with citations, actually watching or transcribing a recent podcast for a grounded takeaway, and write "no verifiable recent posts found" rather than inventing anything; add usage and plan-limit hits and intent signals if I have them. Surface open opp stage, amount and last CRM activity on every row, and mark anyone I've emailed in the last 90 days as Skip Draft. Deliver a live spreadsheet link, never a CSV, then draft an email of a subject plus 3 or 4 sentences and a shorter LinkedIn note off the same hook for each contact not skipped — the LinkedIn note never mentions the email. Show me 2 or 3 pairs for approval before the full batch, drafts only, and after I send, reconcile the sheet against my sent mail so it never double-drafts. Run it once on a small batch with me watching, then save it.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@kristaletz](https://x.com/kristaletz) (source: https://x.com/kristaletz/status/2089103618121314689).
The boundary line and any edits are by botskills.sh, released under the same license.

```
MIT License

Copyright (c) 2026 Inbox Zero Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
