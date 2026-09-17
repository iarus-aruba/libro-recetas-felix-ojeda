import type { Recipe } from "./types";

export const arrozConLeche: Recipe = {
  slug: "arroz-con-leche",
  title: "Arroz con leche",
  subtitle: "Despacio, con canela y piel de limón",
  category: "Postres",
  servings: 6,
  prepMinutes: 10,
  cookMinutes: 45,
  difficulty: "fácil",
  image: "/images/arroz-con-leche.jpg",
  imageAlt: "Cuencos de arroz con leche con canela",
  video: {
    youtube: "",
    caption: "Añade aquí el vídeo de la explicación.",
  },
  story:
    "No hay atajos: leche entera, fuego bajo y remover. El premio es esa textura cremosa que recuerda a las meriendas de casa.",
  ingredients: [
    "1 litro de leche entera",
    "120 g de arroz redondo",
    "100 g de azúcar",
    "1 rama de canela",
    "Piel de 1 limón (sin blanco)",
    "Canela en polvo, para servir",
  ],
  steps: [
    "Calienta la leche con la canela y la piel de limón. Cuando hierva, baja el fuego.",
    "Añade el arroz y cocina 35–40 minutos a fuego muy bajo, removiendo a menudo para que no se pegue.",
    "Incorpora el azúcar y cocina 5 minutos más, hasta que esté cremoso pero no seco: espesará al enfriar.",
    "Retira la canela y la piel. Reparte en cuencos.",
    "Sirve templado o frío, con canela en polvo. Mejor al día siguiente.",
  ],
  notes: "Si queda demasiado espeso, alínalo con un chorrito de leche fría al servir.",
  tags: ["postre", "leche", "canela"],
};
