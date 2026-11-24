# news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/alexback1/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/alexback1/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

A broadsheet front page that sums up Monday 23 November 2026 in one image: 40 dated stories across 9 regions — NATO's emergency council after Russian missiles crossed into Polish airspace, the blame game after the COP31 collapse, and FIFA confirming the UK as host of the 2035 Women's World Cup — with three painterly panels painted for this entry, a UTC strip, a KPI strip, a 23-story index, a dotted world map with numbered pins, and a date check that leaves Saturday and Sunday's news out.

This is the second edition of the entry. The first round finished 311th of 7,226, and the diagnosed gap was the missing ninth region. This version adds South Asia (Nepal, Manipur, Mumbai) and two more stories, keeping the same front-page grammar.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the `entry.png` beside it to `$MAKEFUN_OUTPUT_DIR/entry.png`, after checking the PNG gate limits (at most 1 MiB, at most 1024 by 1024). It runs no network and reads no environment secret: the only environment value it touches is `MAKEFUN_OUTPUT_DIR`, used as a path.

## How the image is built

`compose.py` draws the whole page with Pillow and the three hero panels in the work directory root (painted for this entry, no text in them). `main.ts` is the only program the grader runs; it does not rebuild the image, it delivers it byte for byte.

## Contents

- `entry.png` — the entry image, 1024 by 1024, 494,937 bytes
- `main.ts` — the entry program
- `LICENSE` — MIT

---

Entered on [make.fun](https://make.fun/?ref=e9cnygr6&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards
