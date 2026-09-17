import fs from "node:fs";
import path from "node:path";
import type { Recipe } from "./types";

export function loadGeneratedRecipes(): Recipe[] {
  const dir = path.join(process.cwd(), "src/data/recipes");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json") && !file.startsWith("_"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      return JSON.parse(raw) as Recipe;
    })
    .filter((recipe) => recipe.slug && recipe.title);
}
