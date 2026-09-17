---
name: procesar-videos-recetas
description: Converts recipe videos into cookbook entries, transcribes files in public/videos, writes Spanish recipe JSON, and links each video to its recipe. Use when the user adds videos, asks to process recipe videos, transcribe cooking videos, or generate recetas from video.
---

# Procesar vídeos de recetas

Los vídeos viven en `public/videos/`. El nombre del archivo es la receta (`lentejas-estofadas.mp4`). No hace falta que el usuario adjunte cada vídeo al chat.

## Flujo

1. Inventario: `npm run recetas:inventario`
2. Vincular (crea ficha borrador con el vídeo ya enlazado): `npm run recetas:vincular`
3. Transcribir los que falten: `npm run recetas:transcribir`
4. Leer cada `content/transcripciones/{slug}.txt` y reescribir la receta en `src/data/recipes/{slug}.json` según [estilo-recetario.md](estilo-recetario.md)
5. Dejar `draft: false` cuando esté completa. El vídeo se enlaza por el mismo `slug`; no lo despegues.

Si Whisper no está instalado, instálalo una vez (`py -3 -m pip install faster-whisper`) y pide ffmpeg en el PATH. No transcribas a mano el vídeo en el chat.

## Enlace del vídeo

- Archivo local: `video.file` = ruta en `/videos/...` (el código también lo detecta solo si el slug coincide).
- YouTube opcional: `public/videos/{slug}.youtube.txt` con la URL, o `video.youtube` en el JSON.

## Foto

Si existe `public/images/{slug}.jpg` (png/webp), la ficha la usa sola.

## Varios vídeos

Procesa todos los pendientes del inventario, no uno a uno. Resume al final qué recetas se escribieron y cuáles siguen en borrador.
