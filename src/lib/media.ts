import fs from "node:fs";
import path from "node:path";
import type { Recipe } from "@/data/recipes/types";
import { publicFileExists } from "@/lib/public-file";
import { slugFromName } from "@/lib/slug";

const VIDEO_EXTS = new Set([".mp4", ".webm", ".mov", ".m4v"]);
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function publicDir(folder: string): string {
  return path.join(process.cwd(), "public", folder);
}

function findBySlug(
  folder: string,
  slug: string,
  extensions: Set<string>,
): string | undefined {
  const dir = publicDir(folder);
  if (!fs.existsSync(dir)) return undefined;

  const files = fs.readdirSync(dir);
  const exact = files.find((file) => {
    const ext = path.extname(file).toLowerCase();
    return extensions.has(ext) && path.parse(file).name === slug;
  });
  if (exact) return `/${folder}/${exact}`;

  const fuzzy = files.find((file) => {
    const ext = path.extname(file).toLowerCase();
    return extensions.has(ext) && slugFromName(file) === slug;
  });
  return fuzzy ? `/${folder}/${fuzzy}` : undefined;
}

export function findVideoForSlug(slug: string): string | undefined {
  return findBySlug("videos", slug, VIDEO_EXTS);
}

export function findImageForSlug(slug: string): string | undefined {
  return findBySlug("images", slug, IMAGE_EXTS);
}

export function findYoutubeForSlug(slug: string): string | undefined {
  const candidates = [
    `/videos/${slug}.youtube.txt`,
    `/videos/${slug}.url`,
  ];
  for (const candidate of candidates) {
    if (!publicFileExists(candidate)) continue;
    const full = path.join(process.cwd(), "public", candidate.slice(1));
    const value = fs.readFileSync(full, "utf8").trim();
    if (value) return value;
  }
  return undefined;
}

export function withLocalMedia(recipe: Recipe): Recipe {
  const file = recipe.video?.file || findVideoForSlug(recipe.slug);
  const youtube = recipe.video?.youtube || findYoutubeForSlug(recipe.slug);
  const image = recipe.image || findImageForSlug(recipe.slug);

  return {
    ...recipe,
    image,
    video: {
      ...recipe.video,
      file,
      youtube,
    },
  };
}
