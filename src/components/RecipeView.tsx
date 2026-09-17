import type { Recipe } from "@/data/recipes";
import { formatMinutes, formatWorldDay, totalMinutes } from "@/lib/format";
import { RecipePhoto } from "./RecipePhoto";
import { RecipeVideo } from "./RecipeVideo";

export function RecipeView({ recipe }: { recipe: Recipe }) {
  const total = totalMinutes(recipe.prepMinutes, recipe.cookMinutes);
  const worldDay = formatWorldDay(recipe.worldDay);

  return (
    <article>
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          {worldDay ? (
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-[var(--terracotta)]">
              {worldDay}
            </p>
          ) : null}
          <p
            className={`font-sans text-sm font-semibold uppercase tracking-[0.22em] text-[var(--olive)] ${
              recipe.worldDay ? "mt-2" : ""
            }`}
          >
            {recipe.category}
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-tight whitespace-pre-line text-[var(--terracotta)] sm:text-6xl">
            {recipe.title}
          </h1>
          {recipe.subtitle ? (
            <p className="mt-3 max-w-xl text-xl text-[var(--olive)]">
              {recipe.subtitle}
            </p>
          ) : null}
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-sans text-base">
            <Meta label="Raciones" value={`${recipe.servings}`} />
            <Meta label="Preparación" value={formatMinutes(recipe.prepMinutes)} />
            <Meta label="Cocción" value={formatMinutes(recipe.cookMinutes)} />
            <Meta label="Total" value={formatMinutes(total)} />
            <Meta label="Dificultad" value={recipe.difficulty} />
          </dl>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[var(--line)]">
          <RecipePhoto recipe={recipe} priority />
        </div>
      </div>

      {recipe.story ? (
        <p className="mx-auto mt-12 max-w-3xl font-serif text-2xl leading-10 text-[var(--ink)]">
          {recipe.story}
        </p>
      ) : null}

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr]">
        <section className="rounded-3xl bg-[var(--paper-dark)] px-6 py-7">
          <h2 className="font-serif text-3xl text-[var(--ink)]">Ingredientes</h2>
          <ul className="mt-5 space-y-3 text-[var(--ink)]">
            {recipe.ingredients.map((item) => (
              <li key={item} className="flex gap-3 text-lg leading-7">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--terracotta)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-[var(--ink)]">Elaboración</h2>
          <ol className="mt-5 space-y-6">
            {recipe.steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="w-11 shrink-0 font-sans text-xl font-semibold tabular-nums text-[var(--terracotta)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-0.5 text-xl leading-9 text-[var(--ink)]">{step}</p>
              </li>
            ))}
          </ol>
          {recipe.notes ? (
            <p className="mt-8 border-l-2 border-[var(--gold)] pl-4 text-lg leading-8 text-[var(--ink-soft)]">
              {recipe.notes}
            </p>
          ) : null}
        </section>
      </div>

      <div className="no-print mt-14">
        <RecipeVideo video={recipe.video} />
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.18em] text-[var(--terracotta)]">
        {label}
      </dt>
      <dd className="mt-1 text-lg font-medium capitalize text-[var(--olive)]">{value}</dd>
    </div>
  );
}
