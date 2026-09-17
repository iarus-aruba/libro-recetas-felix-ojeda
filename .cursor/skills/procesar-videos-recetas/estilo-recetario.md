# Guía para pasar un vídeo a receta de libro

Escribe una ficha de recetario, no una transcripción. El lector tiene que poder cocinar sin ver el vídeo.

## Tono

- Español de recetario, claro y cercano.
- Frases cortas. Un paso = una acción.
- Incluye cantidades siempre que el vídeo las diga. Si no salen, estima con sentido común y déjalo en notes.
- No copies muletillas ("bueno", "entonces", "como os decía").
- Un párrafo de story: por qué está en el calendario o cuándo se cocina.

## JSON de salida

Guarda el archivo en `src/data/recipes/{slug}.json` y deja `draft` en false cuando la receta esté completa.

```json
{
  "slug": "igual-que-el-archivo-del-video",
  "title": "Nombre de la receta",
  "subtitle": "Una línea que invite a cocinarla",
  "category": "Entrantes | Principales | Postres | Acompañamientos",
  "servings": 4,
  "prepMinutes": 15,
  "cookMinutes": 30,
  "difficulty": "fácil",
  "image": "/images/slug.jpg",
  "imageAlt": "Descripción de la foto",
  "video": {
    "file": "/videos/archivo.mp4",
    "caption": "Explicación de la receta"
  },
  "story": "Dos o tres frases.",
  "ingredients": ["cantidad + ingrediente"],
  "steps": ["Paso concreto."],
  "notes": "Consejo, variación o conservación.",
  "tags": [],
  "draft": false
}
```

Si hay URL de YouTube, añádela en `video.youtube` y mantén también `video.file` cuando exista el archivo local.
