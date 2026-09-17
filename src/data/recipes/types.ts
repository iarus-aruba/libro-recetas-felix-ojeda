export type RecipeDifficulty = "fácil" | "media" | "elaborada";

export type RecipeVideo = {
  youtube?: string;
  file?: string;
  caption?: string;
};

export type Recipe = {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  difficulty: RecipeDifficulty;
  image?: string;
  imageAlt?: string;
  video?: RecipeVideo;
  story?: string;
  ingredients: string[];
  steps: string[];
  notes?: string;
  tags?: string[];
  worldDay?: {
    name: string;
    day: number;
    month: number;
  };
  /** Si es true, se ve en la web (con el vídeo) pero aún no entra en el libro impreso. */
  draft?: boolean;
};
