import {
  listRecipeSlugs,
  listTranscripts,
  listVideos,
} from "./recetas-util.mjs";

const videos = listVideos();
const recipes = listRecipeSlugs();
const transcripts = listTranscripts();

if (videos.length === 0) {
  console.log("No hay vídeos en public/videos.");
  console.log("Copia los archivos .mp4 (u .webm, .mov) con el nombre de la receta.");
  process.exit(0);
}

console.log(`Vídeos: ${videos.length}`);
for (const video of videos) {
  const hasRecipe = recipes.has(video.slug);
  const hasTranscript = transcripts.has(video.slug);
  const recipeState = hasRecipe ? "receta" : "sin receta";
  const textState = hasTranscript ? "transcrito" : "sin transcribir";
  console.log(`- ${video.slug}  [${recipeState} · ${textState}]  ${video.file}`);
}

const pendingLink = videos.filter((video) => !recipes.has(video.slug));
const pendingText = videos.filter((video) => !transcripts.has(video.slug));

console.log("");
if (pendingLink.length) {
  console.log(`Sin ficha todavía: ${pendingLink.length}. Ejecuta: npm run recetas:vincular`);
}
if (pendingText.length) {
  console.log(`Sin transcribir: ${pendingText.length}. Ejecuta: npm run recetas:transcribir`);
}
if (!pendingLink.length && !pendingText.length) {
  console.log("Todos los vídeos tienen ficha y transcripción.");
}
