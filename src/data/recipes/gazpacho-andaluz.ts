import type { Recipe } from "./types";

export const gazpachoAndaluz: Recipe = {
  slug: "gazpacho-andaluz",
  title: "Gazpacho andaluz",
  subtitle: "Frío, vivo y de tomate bien maduro",
  category: "Entrantes",
  servings: 6,
  prepMinutes: 20,
  cookMinutes: 0,
  difficulty: "fácil",
  image: "/images/gazpacho-andaluz.jpg",
  imageAlt: "Bol de gazpacho andaluz con un chorrito de aceite",
  video: {
    youtube: "",
    caption: "Añade aquí el vídeo de la explicación.",
  },
  story:
    "El gazpacho pide tomates de temporada. Fuera de temporada, mejor otra receta: este plato vive del producto.",
  ingredients: [
    "1 kg de tomates maduros",
    "1 pepino pequeño",
    "1 pimiento verde italiano",
    "1 diente de ajo",
    "80 g de pan del día anterior",
    "80 ml de aceite de oliva virgen extra",
    "2 cucharadas de vinagre de Jerez",
    "Sal",
    "Agua muy fría, si hace falta",
  ],
  steps: [
    "Lava las verduras. Trocea tomate, pepino y pimiento. Pon a remojo el pan.",
    "Tritura con el ajo, el pan, el vinagre y la sal.",
    "Añade el aceite en hilo, con la batidora en marcha, hasta emulsionar.",
    "Pasa por un colador fino si quieres textura seda. Rectifica sal y vinagre.",
    "Enfría al menos 2 horas. Sirve muy frío, con un hilo de aceite.",
  ],
  notes: "Si está demasiado espeso, aligera con un poco de agua muy fría, no con más tomate.",
  tags: ["frío", "verano", "tomate"],
};
