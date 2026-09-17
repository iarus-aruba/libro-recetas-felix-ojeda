import { withLocalMedia } from "@/lib/media";
import { arrozConLeche } from "./arroz-con-leche";
import { gazpachoAndaluz } from "./gazpacho-andaluz";
import { loadGeneratedRecipes } from "./load-generated";
import { polloAlHorno } from "./pollo-al-horno";
import { tortillaDePatatas } from "./tortilla-de-patatas";
import type { Recipe } from "./types";

export type { Recipe, RecipeDifficulty, RecipeVideo } from "./types";

const handwritten: Recipe[] = [
  tortillaDePatatas,
  gazpachoAndaluz,
  polloAlHorno,
  arrozConLeche,
];

type RecipeListOptions = {
  includeDrafts?: boolean;
};

export function getRecipes(options: RecipeListOptions = {}): Recipe[] {
  const { includeDrafts = true } = options;
  const bySlug = new Map<string, Recipe>();

  for (const recipe of loadGeneratedRecipes()) {
    bySlug.set(recipe.slug, recipe);
  }
  for (const recipe of handwritten) {
    bySlug.set(recipe.slug, recipe);
  }

  return [...bySlug.values()]
    .filter((recipe) => includeDrafts || !recipe.draft)
    .sort(byWorldDay)
    .map(withLocalMedia);
}

function byWorldDay(a: Recipe, b: Recipe): number {
  const aDay = a.worldDay;
  const bDay = b.worldDay;
  if (aDay && bDay) {
    return aDay.month - bDay.month || aDay.day - bDay.day;
  }
  if (aDay) return -1;
  if (bDay) return 1;
  return 0;
}

export function getRecipe(slug: string): Recipe | undefined {
  return getRecipes().find((recipe) => recipe.slug === slug);
}

export function getCategories(): string[] {
  return [...new Set(getRecipes().map((recipe) => recipe.category))];
}
