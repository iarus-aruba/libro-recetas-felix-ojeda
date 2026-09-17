import type { Metadata } from "next";
import Link from "next/link";
import { CoverImage } from "@/components/CoverImage";
import { PrintButton } from "@/components/PrintButton";
import { PrintRecipe } from "@/components/PrintRecipe";
import { getRecipes } from "@/data/recipes";

export const metadata: Metadata = {
  title: "El libro",
  description:
    "Vista de impresión en A4 de Días Mundiales Aruser@s, el calendario gastronómico de Félix Ojeda.",
};

export default function LibroPage() {
  const recipes = getRecipes({ includeDrafts: false });

  return (
    <div>
      <div className="no-print mx-auto max-w-4xl px-5 pt-12 sm:px-8">
        <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-[var(--line)] bg-[var(--paper-dark)]/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-2xl">Vista de impresión</p>
            <p className="mt-1 max-w-md text-sm leading-6 text-[var(--ink-soft)]">
              En el navegador: Imprimir → Guardar como PDF. Tamaño A4, márgenes
              predeterminados y fondos gráficos activados.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-4 py-2 text-sm"
            >
              Volver
            </Link>
            <PrintButton className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-medium text-[var(--paper)]" />
          </div>
        </div>
      </div>

      <section className="print-cover mx-auto mb-16 w-full max-w-[420px] overflow-hidden rounded-sm shadow-[0_24px_50px_-24px_rgba(20,48,82,0.45)] ring-1 ring-[var(--line)] print:mb-0">
        <CoverImage
          priority
          className="cover-photo h-auto w-full"
          sizes="(min-width: 768px) 420px, 90vw"
        />
      </section>

      <div className="mx-auto max-w-4xl px-5 pb-12 sm:px-8">
        <section className="print-index break-before-page">
          <h2 className="font-serif text-4xl">Índice</h2>
          <ol className="mt-8 divide-y divide-[var(--line)]">
            {recipes.map((recipe, index) => (
              <li
                key={recipe.slug}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <Link
                  href={`/recetas/${recipe.slug}`}
                  className="font-serif text-xl"
                >
                  <span className="mr-3 font-sans text-sm text-[var(--terracotta)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {recipe.title.replace(/\s+/g, " ")}
                </Link>
                <span className="hidden text-sm text-[var(--ink-soft)] sm:block">
                  {recipe.category}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {recipes.map((recipe, index) => (
          <PrintRecipe key={recipe.slug} recipe={recipe} index={index} />
        ))}
      </div>
    </div>
  );
}
