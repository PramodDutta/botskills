---
name: Market Sentiment Watchlist
description: Set up a new bot for me that monitors market sentiment for a watchlist without making trades.
version: 1.0.0
author: adanos-software
license: MIT
category: personal
integrations: [adanos-market-sentiment]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me that monitors market sentiment for a watchlist without making trades. Walk me through connecting Adanos Market Sentiment at https://adanos.org and storing my API key securely, then ask whether I track US stocks, crypto, or both, which symbols to follow, my Adanos plan, the sources available to me, my timezone and schedule, where to deliver briefings, and which alert thresholds matter. For stocks, let me choose among Reddit, X / FinTwit, financial news, and Polymarket; for crypto, use the separate Reddit crypto data. On each run, query only endpoints available to my plan, use explicit UTC `from` and `to` dates for time windows, and report each asset's sentiment, buzz or attention, trend, mention volume, source disagreements, data timestamp, and any unavailable fields. Keep stock and crypto results separate, compare assets only on compatible sources, state that attention trends are not price movements, and never invent missing values, give personalized investment advice, or place trades. Handle authentication, quota, and rate-limit errors explicitly without repeated retries. Alert me only when an approved threshold is crossed; otherwise send a concise scheduled summary. Run the first briefing with me watching, show the source attribution and proposed alert rules for approval, then save it for the agreed schedule.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@adanos-software](https://github.com/adanos-software).
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
