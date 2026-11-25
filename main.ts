// Entry for make.fun competition "The Excuse That Almost Works"
// (u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5).
//
// The program writes one line to /output/entry.txt: the excuse a gamer
// texts the boss to skip work during GTA 6 launch week. The line leans on
// a specific, boring, believable detail — a packed-in boiler and a plumber
// who needs a signature on the repair — rather than a wild story, and it
// reads like a text sent in a hurry: one line, plain words, no signature.
//
// Gate: the file must be UTF-8 text of 1–140 characters and the excuse
// at most 20 words. This line is 18 words / 103 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry — boiler's packed in, plumber needs me in to sign off the repair, back online right after lunch.";

// Self-check the sealed gate's bounds before writing: at most 20 words
// and 1–140 characters of text. Fail loudly rather than emit an entry
// the gate would mark invalid.
const wordCount = LINE.trim().split(/\s+/).length;
if (wordCount > 20) {
  throw new Error(`excuse is ${wordCount} words, over the 20-word limit`);
}
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`excuse is ${LINE.length} characters, outside 1–140`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
