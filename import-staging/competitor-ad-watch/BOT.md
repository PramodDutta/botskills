---
name: Competitor Ad Watch
description: Set up a new bot that watches my competitors' ads.
version: 1.0.0
author: daniel-ddtech
license: MIT
category: marketing
integrations: [adlicio, slack]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot that watches my competitors' ads. Walk me through connecting Adlicio and Slack, then ask which competitor brands to track, how often to check, and which Slack channel gets the report. On each run, pull every active Meta ad for each competitor using Adlicio's find_competitor_ads tool (never a Reddit or web search) and compare against the previous run. Report only what changed: new ads with their hooks and copy, ads that disappeared, and ads that survived another period, since the survivors are the ones making money. Never guess at performance numbers; report only what the Ad Library actually shows. Post a short digest in Slack with the three most notable changes at the top. Test it on one competitor first and show me that report before saving it.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@daniel-ddtech](https://x.com/daniel-ddtech).
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
