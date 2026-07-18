import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of ["index.html", "styles.css", "script.js"]) {
  await cp(join(root, file), join(dist, file));
}
await cp(join(root, "assets"), join(dist, "assets"), { recursive: true });
await writeFile(join(dist, ".nojekyll"), "");
console.log("Production site built in dist/");
