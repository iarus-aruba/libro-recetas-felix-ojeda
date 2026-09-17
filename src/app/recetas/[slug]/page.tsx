import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RecipeView } from "@/components/RecipeView";
import { getRecipe, getRecipes } from "@/data/recipes";

type RecipePageProps = PageProps<"/recetas/[slug]">;

export function generateStaticParams() {
  return getRecipes().map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return { title: "Receta" };
  return {
    title: recipe.title.replace(/\s+/g, " ").trim(),
    description: recipe.subtitle ?? recipe.story,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="no-print mb-8">
        <Link
          href="/"
          className="font-sans text-base text-[var(--ink-soft)] hover:text-[var(--terracotta)]"
        >
          ← Todas las recetas
        </Link>
      </p>
      <RecipeView recipe={recipe} />
    </div>
  );
}
