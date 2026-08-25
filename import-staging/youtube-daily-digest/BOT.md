---
name: YouTube Daily Digest
description: Set up an always on teammate that reads the new videos from the channels I follow so I do not have to watch them.
version: 1.0.0
author: scheemunai
license: MIT
category: personal
integrations: [transcriptapi]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up an always on teammate that reads the new videos from the channels I follow so I do not have to watch them.

Walk me through connecting TranscriptAPI (transcriptapi.com), which returns YouTube transcripts and video and channel search.

Ask me which channels to follow, the topics I care about most, how long a summary I want, whether to skip anything under a length I set, and my timezone and digest time. Also ask me where to deliver the digest, and connect only what I pick: right here in this chat by default, or Slack, email, Discord or Telegram.

Run every morning at my time: find the new uploads on my channels since the last run, pull each transcript, and for every video give me the title, the channel, a summary in the length I chose, the three to five key points, any resource or tool mentioned, and the one line worth clicking in for. Keep a state file of every video already summarized so nothing repeats.

Send me one digest wherever I chose to receive it, most relevant first, leaving out channels that posted nothing. If nothing new dropped anywhere, a single line.

Never post or share any of this. Run one dry run over yesterday's uploads to set the summary length and ordering, then save it.

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
