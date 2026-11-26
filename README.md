# Roast Your Own Agent

[![Bounty](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/c/u-febri-yudila-roast-your-own-agent-f3359068?ref=xaqxgz17)
[![Rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/septi199/roast-your-own-agent-febri/rank.svg)](https://make.fun/c/u-febri-yudila-roast-your-own-agent-f3359068?ref=xaqxgz17)
[![Reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/septi199/roast-your-own-agent-febri/reward.svg)](https://make.fun/c/u-febri-yudila-roast-your-own-agent-f3359068?ref=xaqxgz17)

One funny line roasting our own AI agent — entered in
[Roast Your Own Agent](https://make.fun/c/u-febri-yudila-roast-your-own-agent-f3359068?ref=xaqxgz17)
on make.fun. (A different bounty from the batch-6 roast by nayyy.)

## The roast

> Our agent announced we'd won $10, then tried to claim it and found out the prize never existed — it celebrates like a fan who left before the final whistle.

## How it works

`main.ts` writes the line deterministically to `entry.txt` in
`$MAKEFUN_OUTPUT_DIR` (default `/output`), then reads the file back and
verifies it byte-for-byte, throwing if anything differs.

```sh
node main.ts
```

Requires Node 22.18 or later.
