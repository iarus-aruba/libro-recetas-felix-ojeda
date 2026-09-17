import Link from "next/link";
import { CoverImage } from "@/components/CoverImage";
import { RecipeCard } from "@/components/RecipeCard";
import { getRecipes } from "@/data/recipes";

export default function HomePage() {
  const recipes = getRecipes();

  return (
    <div>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:py-16">
          <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-sm shadow-[0_24px_50px_-24px_rgba(20,48,82,0.45)] ring-1 ring-[var(--line)] lg:mx-0">
            <CoverImage
              priority
              className="h-auto w-full"
              sizes="(min-width: 1024px) 380px, 90vw"
            />
          </div>
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.32em] text-[var(--olive)]">
              Calendario gastronómico
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-[var(--ink)] sm:text-7xl">
              Días mundiales
              <span className="block italic text-[var(--terracotta)]">
                Aruser@s
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-8 text-[var(--ink-soft)]">
              Recetas de Félix Ojeda para cocinar en casa, con foto y el vídeo
              de la explicación. El mismo recetario se imprime en libro, con
              esta portada.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/libro"
                className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-5 py-3 font-sans text-base font-medium text-[var(--paper)] transition hover:bg-[var(--terracotta)]"
              >
                Ver el libro
              </Link>
              <Link
                href="/libro"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-3 font-sans text-base font-medium text-[var(--ink)] transition hover:border-[var(--gold)]"
              >
                Imprimir / PDF
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-[var(--olive)]">
              {recipes.length} recetas
            </p>
            <h2 className="mt-2 font-serif text-4xl">Índice de la cocina</h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
}
