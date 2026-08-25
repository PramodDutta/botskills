---
name: Industry Intel Digest
description: Set up an always on teammate that keeps me on top of everything moving in my domain on YouTube, so I hear about a launch, a tool or a shift in the conversation before my competitors do.
version: 1.0.0
author: scheemunai
license: MIT
category: marketing
integrations: [transcriptapi]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up an always on teammate that keeps me on top of everything moving in my domain on YouTube, so I hear about a launch, a tool or a shift in the conversation before my competitors do.

Walk me through connecting TranscriptAPI (transcriptapi.com), which returns YouTube transcripts and video and channel search.

Ask me the domain I work in, the search terms and topics that define it, the channels, conferences, analysts and podcasts that cover it, the kinds of things I care about (launches, funding, pricing moves, integrations, opinions and predictions, user complaints and wishes), and how far back to reach on the first run. Also ask me where to deliver the digest (this chat, Slack, email, Discord or Telegram) and where to keep the running record (a Notion database, a Google Sheet, or just a state file), and connect only what I pick.

Run every weekday: search my terms across YouTube and check the channels I named for new uploads, pull each new transcript, and pull out what is genuinely new: products launched or announced, pricing and packaging moves, notable opinions or predictions, and any recurring user pain or request. Keep a state file of every video id processed so nothing repeats.

Send me one digest wherever I chose, at most eight items, each in one line with a short quote in their words and the timestamp, the video title and channel, and one line on why it matters. Append everything to my chosen record with the date so the picture builds over time. Once a week add a trend line. If nothing new, a single line.

Quote sparingly and always link the source and timestamp. Never republish a transcript and never post any of this publicly. Run one dry run over the last two weeks of my terms, then save it.

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
