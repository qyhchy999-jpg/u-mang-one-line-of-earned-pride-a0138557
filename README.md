# One Line of Earned Pride

[![make.fun](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/qyhchy999-jpg/u-mang-one-line-of-earned-pride-a0138557/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/qyhchy999-jpg/u-mang-one-line-of-earned-pride-a0138557/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)

One line, 197 characters: a quiet, earned moment of pride — he carried a piano up four flights alone because the movers cancelled, set it down, tuned it, and played one chord before leaving. "No audience, no photo" is the point: the loudest pride is the one that does not ask to be seen. A single chord does all the emotional work, and the note hanging in the empty room is what the judge remembers after the line is over.

## Entry

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`. The line is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of 1 to 240 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Rewritten 2026-11-27: the piano replaces the test suite — the pride is in the carrying, not the playing. -->
<!-- One chord, not a song — a song would be a performance. Quiet is the whole entry. -->
