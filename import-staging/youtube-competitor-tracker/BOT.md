---
name: YouTube Competitor Tracker
description: Set up an always on teammate that tells me what my competitors said out loud this week, before any of it reaches their blog.
version: 1.0.0
author: scheemunai
license: MIT
category: marketing
integrations: [transcriptapi]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up an always on teammate that tells me what my competitors said out loud this week, before any of it reaches their blog.

Walk me through connecting TranscriptAPI (transcriptapi.com), which returns YouTube transcripts and video and channel search.

Ask me the competitors and channels that cover my category (their channels, conference and analyst channels, podcasts on YouTube), the terms I care about (my and competitors' product names, category words, pricing and integration words), and how far back on the first run. Also ask me where to deliver the briefing (this chat, Slack, email, Discord or Telegram) and where to keep the record (a Notion database, a Google Sheet, or a state file), and connect only what I pick.

Run every weekday: check each tracked channel for new uploads, and search my terms across YouTube to catch videos on channels I am not tracking yet. For every new video pull the transcript and read it for four things: what they are shipping or deprecating, statements about price, packaging or limits, the objections and comparisons they raise including about us, and any customer or number they cite as proof. Keep a state file of every video id processed.

Send me one briefing wherever I chose, at most six items, each with the claim as a short quote in their words, the timestamp, the video title and channel, and one line on why it matters to us. Append every item to my chosen record with the date. If nothing new, a single line. Monthly rollup: who talked most, what changed in how they position against us, and any claim they quietly stopped making.

Quote sparingly and always link source and timestamp. Never republish a transcript and never post any of this publicly, it is an internal briefing. Run one dry run over two weeks of one channel, then save it.

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
