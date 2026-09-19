import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const expected = [
  [4000, "0275283c97db4bd552100127d63161d727fd610e9b98ae4b0c661f263c3936b7"],
  [4000, "982a9813ef94eb11855952da1b12b1be37420f35c777b41cb39eb2851865e0fd"],
  [4000, "e6c3a8331844ae6d2d961896ca67a2aab3c994ec7738ea0e80e4de60fb273e7d"],
  [3728, "45d2e34b2f67eb9d7089d4ed7e7ccb2c99199cb325793625d85d3d742609d441"],
];

function extract(path, name) {
  const source = readFileSync(path, "utf8");
  const match = source.match(new RegExp(`export const ${name} = \"([^\"]+)\";`));
  if (!match) throw new Error(`Could not parse ${path}`);
  return match[1];
}

const parts = [1, 2, 3, 4].map((number) => extract(`src/content/navin-standing-${number}.ts`, `standingPart${number}`));
let failed = false;

for (let i = 0; i < parts.length; i += 1) {
  const hash = createHash("sha256").update(parts[i]).digest("hex");
  const [expectedLength, expectedHash] = expected[i];
  const ok = parts[i].length === expectedLength && hash === expectedHash;
  console.log(`part${i + 1}: length=${parts[i].length} sha256=${hash} expected=${expectedHash} ${ok ? "OK" : "MISMATCH"}`);
  if (!ok) failed = true;
}

const full = parts.join("");
const fullHash = createHash("sha256").update(full).digest("hex");
const bytes = Buffer.from(full, "base64");
const gitHash = createHash("sha1").update(`blob ${bytes.length}\0`).update(bytes).digest("hex");
console.log(`full: length=${full.length} sha256=${fullHash} bytes=${bytes.length} git=${gitHash}`);
console.log(`magic=${bytes.subarray(0, 12).toString("ascii")}`);

if (full.length !== 15728 || fullHash !== "3acdc793f69d21de134a117d717c46f39f2b9aaf5abb7d84a0692bf44d2d8f45" || bytes.length !== 11794 || gitHash !== "62ff7c7b1573325aae1ac9a9b2368011c099da73" || !bytes.subarray(0, 4).equals(Buffer.from("RIFF"))) {
  failed = true;
}

if (failed) process.exit(1);
