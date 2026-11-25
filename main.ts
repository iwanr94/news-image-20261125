import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
const source = fileURLToPath(new URL("./entry.png", import.meta.url));
const target = join(outDir, "entry.png");
copyFileSync(source, target);
console.log(`wrote ${target} from ${here}`);
