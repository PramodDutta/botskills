---
name: Motivated Seller Finder
description: Set up an always on teammate that finds the motivated sellers in my market before the rest of my market notices them.
version: 1.0.0
author: scheemunai
license: MIT
category: sales
integrations: [zillapi]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up an always on teammate that finds the motivated sellers in my market before the rest of my market notices them.

Walk me through connecting Zillapi (zillapi.com), which returns Zillow property data for any US address.

Ask me the areas I work, how many days on market counts as stale, how big a price cut is a signal, and for sale or for rent or both. Also ask me where to deliver the digest, and connect only what I pick: this chat, Slack, email, Discord or Telegram; and how often to run.

Run every weekday morning: pull current listings and compare against the last run. Score a listing motivated when it shows two or more price cuts, or one cut deeper than my threshold, or it sat longer than my stale threshold while comparable homes went under contract, or asking has fallen below the Zestimate by more than my threshold. Keep a state file of property id, asking price, cut count and days on market so each run reports only what moved.

Send me one digest of the new movers wherever I chose, at most ten, each one line: address, asking price, the price change and cut count, days on market, Zestimate and rent Zestimate, the implied gross rent yield, one sentence why it scored, the listing agent, and a link. Rank by reason strength, not price. If nothing moved, a single line.

Never contact an agent or owner and never submit an offer. Draft outreach only if I ask, and hold it for approval. Run one dry run on a single area, then save it.

Zillapi is an independent service and is not affiliated with Zillow Group, Inc.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@scheemunai](https://x.com/scheemunai).
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
