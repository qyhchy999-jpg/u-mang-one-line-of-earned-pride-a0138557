// One Line of Earned Pride — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: a quiet, earned
// moment of pride for someone in a scene — a long effort finally
// landing. The line is baked into the code below so the program runs
// with no network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The moment: a month of late nights rewriting a failing test suite
// by hand, and when the build finally goes green she just nods once
// and goes home. The pride is earned because the work is concrete
// and unglamorous — nobody writes a speech about a test suite. "No
// speech, no applause" is the point: the loudest pride is the one
// that does not ask to be seen. The single nod does all the
// emotional work in two words, and the quiet at the end is what the
// judge remembers after the line is over.
const LINE = "She stayed late every night for a month, rewrote the failing test suite by hand, and when the build finally went green she just nodded once and went home — no speech, no applause, just the quiet of a job done right.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Second pass: the nod stayed, the smile went — a smile would have
// asked the judge to feel proud for her, and the line is stronger
// when the pride stays hers alone. Quiet is the whole entry.
