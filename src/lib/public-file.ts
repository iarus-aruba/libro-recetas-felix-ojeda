import fs from "node:fs";
import path from "node:path";

export function publicFileExists(publicPath?: string): boolean {
  if (!publicPath?.startsWith("/")) return false;
  const full = path.join(process.cwd(), "public", publicPath.slice(1));
  return fs.existsSync(full);
}
