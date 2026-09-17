import Link from "next/link";
import type { Recipe } from "@/data/recipes";
import {
  formatMinutes,
  formatServings,
  formatWorldDay,
  totalMinutes,
} from "@/lib/format";
import { hasWatchableVideo } from "@/lib/video";
import { RecipePhoto } from "./RecipePhoto";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const total = totalMinutes(recipe.prepMinutes, recipe.cookMinutes);

  return (
    <Link
      href={`/recetas/${recipe.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--paper)] shadow-[0_10px_30px_-18px_rgba(20,48,82,0.28)] transition hover:-translate-y-0.5 hover:border-[var(--gold)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <RecipePhoto
          recipe={recipe}
          className="transition duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[var(--paper)]/92 px-3 py-1 font-sans text-xs font-medium text-[var(--ink)]">
          {recipe.category}
        </span>
        {hasWatchableVideo(recipe.video) ? (
          <span className="absolute right-3 top-3 rounded-full bg-[var(--ink)]/85 px-3 py-1 font-sans text-xs font-medium text-[var(--paper)]">
            Vídeo
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-5">
        <div>
          {formatWorldDay(recipe.worldDay) ? (
            <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[var(--terracotta)]">
              {formatWorldDay(recipe.worldDay)}
            </p>
          ) : null}
          <h2 className="font-serif text-3xl leading-tight whitespace-pre-line text-[var(--ink)]">
            {recipe.title}
          </h2>
          {recipe.subtitle ? (
            <p className="mt-1 text-base text-[var(--ink-soft)]">
              {recipe.subtitle}
            </p>
          ) : null}
          {recipe.draft ? (
            <p className="mt-2 font-sans text-xs uppercase tracking-[0.14em] text-[var(--terracotta)]">
              Borrador · falta pasar el vídeo a texto
            </p>
          ) : null}
        </div>
        <p className="mt-auto font-sans text-sm uppercase tracking-[0.16em] text-[var(--olive)]">
          {formatServings(recipe.servings)} · {formatMinutes(total)} · {recipe.difficulty}
        </p>
      </div>
    </Link>
  );
}
