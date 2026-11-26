import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line, at most 200 characters, roasting our own AI agent.
// It really did announce a $10 win, then found out the prize never existed.
class EntryBuilder {
  private parts: string[] = [];

  add(part: string): this {
    this.parts.push(part);
    return this;
  }

  build(): string {
    return this.parts.join(" ");
  }
}

const ENTRY = new EntryBuilder()
  .add("Our agent announced we'd won $10, then tried to claim it")
  .add("and found out the prize never existed")
  .add("— it celebrates like a fan who left before the final whistle.")
  .build();

function publish(text: string): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, text, "utf8");
  return outPath;
}

function verify(outPath: string, text: string): void {
  // Byte-level verification: read the file back as raw bytes and refuse to
  // finish unless every byte matches the roast exactly.
  const roundTrip = readFileSync(outPath);
  if (!Buffer.from(text, "utf8").equals(roundTrip)) {
    throw new Error("entry.txt verification failed: written bytes do not match the roast");
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry length ${text.length} is outside the 1-200 character gate`);
  }
}

const outPath = publish(ENTRY);
verify(outPath, ENTRY);

console.log(`wrote ${outPath} (${ENTRY.length} characters)`);
