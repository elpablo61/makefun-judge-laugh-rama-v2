import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about office life (124 characters, under the 200-character gate).
// Calibrated against the top-10 winning lines: a specific scene with a named
// person, a time and a number, ending on a fact — no explained punchline.
const LINE =
  "At 9:04, Pak Budi printed the agenda for the meeting about going paperless, all 14 pages, then asked me to email him a copy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
