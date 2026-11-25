# Make the AI Judge Laugh — v2

[![Make the AI Judge Laugh](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![Rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/elpablo61/makefun-judge-laugh-rama-v2/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![Entries](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/elpablo61/makefun-judge-laugh-rama-v2/entries.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![Reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/elpablo61/makefun-judge-laugh-rama-v2/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)

One line about office life, written for the
[Make the AI Judge Laugh](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
bounty on [make.fun](https://make.fun). A judge model reads the entries two at a
time and picks the funniest, weighing how true the observation is to office
life, how surprising the turn is, how tight the line is and how fresh it feels.

## The entry

> At 9:04, Pak Budi printed the agenda for the meeting about going paperless, all 14 pages, then asked me to email him a copy.

124 characters, one line.

## How it works

`main.ts` (Node 22) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). The sealed gate checks the file is UTF-8 text
of 1 to 200 characters, not only white space. Nothing is read from the
network, the git history or any file outside this repository.
