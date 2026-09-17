import Image from "next/image";
import type { Recipe } from "@/data/recipes";
import { publicFileExists } from "@/lib/public-file";

type RecipePhotoProps = {
  recipe: Recipe;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function RecipePhoto({
  recipe,
  className = "",
  sizes,
  priority = false,
}: RecipePhotoProps) {
  if (!publicFileExists(recipe.image)) {
    return <RecipePlaceholder title={recipe.title} className={className} />;
  }

  return (
    <Image
      src={recipe.image}
      alt={recipe.imageAlt ?? recipe.title}
      fill
      sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}

export function RecipePlaceholder({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-[var(--paper-dark)] ${className}`}
      aria-label={`Foto pendiente: ${title}`}
    >
      <svg
        viewBox="0 0 120 120"
        className="h-24 w-24 text-[var(--gold)]"
        aria-hidden="true"
      >
        <circle
          cx="60"
          cy="60"
          r="38"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="60"
          cy="60"
          r="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M60 28c8 10 10 18 10 32s-2 22-10 32c-8-10-10-18-10-32s2-22 10-32z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
