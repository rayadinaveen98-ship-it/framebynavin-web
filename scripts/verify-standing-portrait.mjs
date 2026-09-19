import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const expected = [
  [4000, "05e18e4d76cf914fe22b18bdb2399df9f2031e7c8c561214a48a04da1acb0f54"],
  [4000, "cd68057a56bd191047b8c526a96c8f1acb6cfc7efcff230fdd47a7fef60cdf8d"],
  [4000, "d435bf0cb4861ff1f5e2b3a44e3a34421a05e69f372186ab60f15460dfed2f5d"],
  [3836, "b6b2238802401c0109c92acce96b47d15d885e3ea3ad38a6e2e9bd41b96e6855"],
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

if (full.length !== 15836 || fullHash !== "24ffc317087ba20fc073bdb7450e7bc68ebc82f467e82910a8f650a406774c0e" || bytes.length !== 11876 || gitHash !== "48cf19a56b9d2841f1a73235230c341f576e68b6" || !bytes.subarray(0, 4).equals(Buffer.from("RIFF"))) {
  failed = true;
}

if (failed) process.exit(1);
