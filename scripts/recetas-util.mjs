import { readdirSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
export const videosDir = path.join(root, "public", "videos");
export const imagesDir = path.join(root, "public", "images");
export const recipesDir = path.join(root, "src", "data", "recipes");
export const transcriptsDir = path.join(root, "content", "transcripciones");

export const VIDEO_EXTS = new Set([".mp4", ".webm", ".mov", ".m4v"]);

export function slugFromName(name) {
  const base = name.replace(/\.[^.]+$/, "").trim();
  return base
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function titleFromSlug(slug) {
  if (!slug) return "Receta";
  const text = slug.replace(/-/g, " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function listVideos() {
  if (!existsSync(videosDir)) return [];
  return readdirSync(videosDir)
    .filter((file) => VIDEO_EXTS.has(path.extname(file).toLowerCase()))
    .map((file) => ({
      file,
      slug: slugFromName(file),
      publicPath: `/videos/${file}`,
    }));
}

export function listRecipeSlugs() {
  if (!existsSync(recipesDir)) return new Set();
  const slugs = new Set();
  for (const file of readdirSync(recipesDir)) {
    if (file.startsWith("_")) continue;
    if (file.endsWith(".json")) {
      slugs.add(path.parse(file).name);
    }
    if (
      file.endsWith(".ts") &&
      !["index.ts", "types.ts", "load-generated.ts"].includes(file)
    ) {
      slugs.add(path.parse(file).name);
    }
  }
  return slugs;
}

export function listTranscripts() {
  if (!existsSync(transcriptsDir)) return new Set();
  return new Set(
    readdirSync(transcriptsDir)
      .filter((file) => file.endsWith(".txt"))
      .map((file) => path.parse(file).name),
  );
}

export function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

export function writeJson(filePath, data) {
  ensureDir(path.dirname(filePath));
  writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}
