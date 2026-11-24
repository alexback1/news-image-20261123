// MONDAY IN FULL, SECOND EDITION - entry program for news-image-20261123.
// Node 22, standard library only. The entry image is entry.png beside this
// file; the program checks the competition gates (PNG, at most 1 MiB, at most
// 1024 by 1024) and copies it unchanged to the grader's output directory, so
// the judge sees exactly the committed bytes.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, openSync, closeSync, readSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing next to main.ts");
}
const size = statSync(source).size;
if (size > 1024 * 1024) {
  throw new Error("entry.png is " + size + " bytes, over the 1 MiB gate");
}
const head = Buffer.alloc(33);
const fd = openSync(source, "r");
try {
  readSync(fd, head, 0, 33, 0);
} finally {
  closeSync(fd);
}
if (head.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") {
  throw new Error("entry.png is not a PNG file");
}
const width = head.readUInt32BE(16);
const height = head.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error("entry.png is " + width + "x" + height + ", over the 1024x1024 gate");
}
copyFileSync(source, target);
console.log("wrote " + target + " (" + width + "x" + height + ", " + size + " bytes)");
