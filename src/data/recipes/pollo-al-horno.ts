import type { Recipe } from "./types";

export const polloAlHorno: Recipe = {
  slug: "pollo-al-horno",
  title: "Pollo al horno con limón y romero",
  subtitle: "Bandeja única, para un domingo",
  category: "Principales",
  servings: 4,
  prepMinutes: 15,
  cookMinutes: 60,
  difficulty: "fácil",
  image: "/images/pollo-al-horno.jpg",
  imageAlt: "Pollo asado con limón, romero y patatas",
  video: {
    youtube: "",
    caption: "Añade aquí el vídeo de la explicación.",
  },
  story:
    "Una bandeja, un horno y casi nada que vigilar. El truco está en secar bien la piel y no escatimar en el limón.",
  ingredients: [
    "1 pollo entero (1,6 kg aprox.) o 8 muslos",
    "800 g de patatas",
    "2 limones",
    "4 dientes de ajo",
    "2 ramitas de romero",
    "Aceite de oliva virgen extra",
    "Sal y pimienta",
  ],
  steps: [
    "Precalienta el horno a 200 °C. Seca el pollo con papel de cocina y sazónalo por dentro y por fuera.",
    "Corta las patatas en gajos y los limones en cuartos. Colócalos en una bandeja con ajo, romero y un buen chorro de aceite.",
    "Pon el pollo encima, pechuga hacia arriba. Exprímeles medio limón por encima.",
    "Asa 55–65 minutos, hasta que la piel esté dorada y el jugo salga claro. Si se dora de más, cubre con papel de aluminio los últimos minutos.",
    "Reposar 10 minutos antes de trinchar. Sirve con el jugo de la bandeja.",
  ],
  notes: "Si usas muslos, baja 10 minutos el tiempo y comprueba que estén jugosos.",
  tags: ["horno", "pollo", "domingo"],
};
