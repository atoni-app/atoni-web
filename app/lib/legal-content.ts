import { readFileSync } from "node:fs";
import path from "node:path";

export function readLegalDocument(fileName: string) {
  return readFileSync(path.join(process.cwd(), "content", fileName), "utf8");
}
