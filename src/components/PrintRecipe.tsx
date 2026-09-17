import type { Recipe } from "@/data/recipes";
import { formatMinutes, formatServings, formatWorldDay, totalMinutes } from "@/lib/format";
import { RecipePhoto } from "./RecipePhoto";

export function PrintRecipe({
  recipe,
  index,
}: {
  recipe: Recipe;
  index: number;
}) {
  const total = totalMinutes(recipe.prepMinutes, recipe.cookMinutes);

  return (
    <article className="print-recipe break-before-page">
      {formatWorldDay(recipe.worldDay) ? (
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.24em] text-[var(--terracotta)]">
          {formatWorldDay(recipe.worldDay)}
        </p>
      ) : null}
      <p
        className={`font-sans text-sm font-semibold uppercase tracking-[0.24em] text-[var(--olive)] ${
          recipe.worldDay ? "mt-2" : ""
        }`}
      >
        Receta {String(index + 1).padStart(2, "0")} · {recipe.category}
      </p>
      <h2 className="mt-2 font-serif text-5xl leading-tight whitespace-pre-line text-[var(--terracotta)]">
        {recipe.title}
      </h2>
      {recipe.subtitle ? (
        <p className="mt-2 text-lg text-[var(--olive)]">{recipe.subtitle}</p>
      ) : null}

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_220px] print:grid-cols-[1fr_210px]">
        <div>
          {recipe.story ? (
            <p className="font-serif text-xl leading-8">{recipe.story}</p>
          ) : null}
          <p className="mt-4 font-sans text-sm uppercase tracking-[0.16em] text-[var(--olive)]">
            {formatServings(recipe.servings)} · {formatMinutes(total)} ·{" "}
            {recipe.difficulty}
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--line)]">
          <RecipePhoto recipe={recipe} sizes="220px" />
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[240px_1fr] print:grid-cols-[220px_1fr]">
        <section>
          <h3 className="font-serif text-2xl">Ingredientes</h3>
          <ul className="mt-3 space-y-2 text-base leading-7">
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="font-serif text-2xl">Elaboración</h3>
          <ol className="mt-3 space-y-3 text-lg leading-8">
            {recipe.steps.map((step, stepIndex) => (
              <li key={step}>
                <span className="font-semibold text-[var(--terracotta)]">
                  {stepIndex + 1}.
                </span>{" "}
                {step}
              </li>
            ))}
          </ol>
          {recipe.notes ? (
            <p className="mt-4 text-base italic text-[var(--ink-soft)]">
              {recipe.notes}
            </p>
          ) : null}
        </section>
      </div>
    </article>
  );
}
