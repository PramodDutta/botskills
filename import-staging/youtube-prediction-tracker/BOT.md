---
name: YouTube Prediction Tracker
description: Set up an always on teammate that keeps score on the people I listen to.
version: 1.0.0
author: scheemunai
license: MIT
category: personal
integrations: [transcriptapi]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up an always on teammate that keeps score on the people I listen to.

Walk me through connecting TranscriptAPI (transcriptapi.com), which returns YouTube transcripts and video and channel search.

Ask me which channels to follow (institutional such as @TED, @NASA or @natgeo, or the shows and analysts I watch), which subjects to score, and how confidently a statement must be made to count as a call. Also ask me where to send the weekly scoreboard (this chat, Slack, email, Discord or Telegram) and where to keep the scoreboard itself (a Notion database, a Google Sheet, or a state file), and connect only what I pick.

Run weekly: check each channel for new uploads, pull the transcript, and extract every falsifiable prediction (a claim about the future with something checkable and, where stated, a date). Log each: who said it, the channel, the video, the timestamp, the claim in their own words, the resolve date, and how confidently it was said. Skip opinions, jokes and hedges. Keep a state file of every video read.

Every week, take the calls whose resolve date passed, check what happened, and mark each correct, wrong or unresolvable with a one line note and a source. Send me one update a week wherever I chose: new calls logged, calls that just resolved, and the running scoreboard (each voice's hit rate, call count, most confident wrong call, least likely right one). Add one line I would enjoy, for example the voice whose confidence and accuracy are furthest apart. If nothing moved, a single line.

Keep it fair: quote accurately, link video and timestamp, do not score sarcasm, do not post publicly. Run one dry run over one channel's last month, then save it.

TranscriptAPI is an independent service and is not affiliated with YouTube or Google.

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
