import path from "node:path";
import {
  listRecipeSlugs,
  listVideos,
  recipesDir,
  titleFromSlug,
  writeJson,
} from "./recetas-util.mjs";

const existing = listRecipeSlugs();
const created = [];

for (const video of listVideos()) {
  if (existing.has(video.slug)) continue;

  const recipe = {
    slug: video.slug,
    title: titleFromSlug(video.slug),
    subtitle: "Borrador a partir del vídeo",
    category: "Por clasificar",
    servings: 4,
    prepMinutes: 0,
    cookMinutes: 0,
    difficulty: "fácil",
    image: `/images/${video.slug}.jpg`,
    imageAlt: titleFromSlug(video.slug),
    video: {
      file: video.publicPath,
      caption: "Explicación de la receta",
    },
    story:
      "El vídeo ya está enlazado. Falta pasar la explicación a texto de recetario.",
    ingredients: ["Pendiente de transcribir el vídeo."],
    steps: [
      "Abre el vídeo de esta ficha.",
      "Cuando esté la transcripción, esta receta se reescribe con ingredientes, tiempos y pasos.",
    ],
    notes: "",
    tags: ["borrador"],
    draft: true,
  };

  writeJson(path.join(recipesDir, `${video.slug}.json`), recipe);
  created.push(video.slug);
}

if (created.length === 0) {
  console.log("No había vídeos nuevos que vincular.");
} else {
  console.log(`Fichas creadas y vídeo enlazado (${created.length}):`);
  for (const slug of created) console.log(`- ${slug}`);
}
