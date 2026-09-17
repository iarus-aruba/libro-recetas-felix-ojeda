import type { Recipe } from "./types";

export const tortillaDePatatas: Recipe = {
  slug: "tortilla-de-patatas",
  title: "Tortilla de patatas",
  subtitle: "La de siempre, jugosa por dentro",
  category: "Principales",
  servings: 4,
  prepMinutes: 15,
  cookMinutes: 30,
  difficulty: "media",
  image: "/images/tortilla-de-patatas.jpg",
  imageAlt: "Tortilla de patatas recién hecha, cortada en porciones",
  video: {
    youtube: "",
    caption: "Añade aquí el enlace de YouTube o un archivo en public/videos.",
  },
  story:
    "Si hay una receta que resume este libro, es esta. Paciencia con el aceite, huevos de verdad y el punto que a cada casa le gusta.",
  ingredients: [
    "6 huevos camperos",
    "4 patatas medianas",
    "1 cebolla (opcional)",
    "Aceite de oliva virgen extra",
    "Sal",
  ],
  steps: [
    "Pela las patatas y córtalas en láminas finas. Si usas cebolla, pícala en juliana.",
    "Cubre con aceite de oliva en una sartén amplia y pocha a fuego medio hasta que las patatas estén tiernas, sin que se doren demasiado.",
    "Escurre bien y mezcla con los huevos batidos y la sal. Deja reposar 5 minutos.",
    "Cuaja en sartén con un chorrito de aceite, 3 o 4 minutos por cada lado, cuajada por fuera y jugosa por dentro.",
    "Sirve templada. En este recetario, el punto es el que os guste en casa: más cuajada o más líquida.",
  ],
  notes: "Guarda el aceite de pochar las patatas: sirve para otras recetas.",
  tags: ["huevo", "patata", "clásico"],
};
