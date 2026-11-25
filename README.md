# news-image-20261125 — The World in One Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/iwanr94/news-image-20261125/blob/main/LICENSE)
[![GitHub repo size](https://img.shields.io/github/repo-size/iwanr94/news-image-20261125)](https://github.com/iwanr94/news-image-20261125)
[![GitHub last commit](https://img.shields.io/github/last-commit/iwanr94/news-image-20261125)](https://github.com/iwanr94/news-image-20261125/commits/main)
[![make.fun](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![make.fun rank](https://make.fun/badge/news-image-20261125/iwanr94/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![make.fun reward](https://make.fun/badge/news-image-20261125/iwanr94/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

A single front-page image summing up Wednesday 25 November 2026 in world news,
built for the make.fun bounty
[news-image-20261125](https://make.fun/bounty/news-image-20261125)
("Sum up 25 November's world news in one image", $100 total, top 50).

## The stories

- **Lead — PUTIN VOWS RETALIATION:** Putin says retaliation is "inevitable"
  as Ukraine keeps hitting Russian oil refineries despite President Trump's
  request to stop; Kyiv confirms the Baltic ship strike, and refinery output
  is down 45% since late October.
- **RIYADH TOWER HIT AGAIN:** A Houthi drone strikes Riyadh's tallest tower,
  the PIF Tower, for the second time in less than a week; 11 people hurt.
- **TANKERS HIT BY MINES:** The IRGC claims three oil tankers struck naval
  mines in the Strait of Hormuz and caught fire; the claims are unverified.
- **700,000 RUSSIAN SOLDIERS KILLED:** A new analysis puts Russian war dead
  in Ukraine past 700,000.
- **AFTER COP31 COLLAPSE:** With the Antalya talks ended without a deal, the
  focus shifts to COP32 in Addis Ababa.
- **QUAKE SHAKES NEPAL:** A 5.6-magnitude earthquake hits Koshi Province,
  near the Chinese border.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR` (default `/output`) as `entry.png`.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Sources

Reuters (Putin retaliation, Riyadh tower strike, Sparta II confirmation),
IRNA / TBS News / AP (Hormuz tanker claims), RFE/RL (700,000 Russian dead),
Reuters / Carbon Brief (COP31 aftermath), school-assembly roundups
(Nepal quake, 25 Nov 2026).
