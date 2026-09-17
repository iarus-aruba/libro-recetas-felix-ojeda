# Días Mundiales Aruser@s

Calendario gastronómico con Félix Ojeda, para dos usos a la vez:

- **Web**: cada receta con texto, foto y vídeo de la explicación.
- **Libro impreso**: la misma receta, en A4, lista para guardar como PDF. La portada está en `public/images/portada.jpg`.

## Arrancar el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## De vídeo a receta (el método para todos)

No hace falta pasar cada vídeo por el chat. Todos se tratan igual:

1. Copia los vídeos a `public/videos/`.
2. Ponles el nombre de la receta, en minúsculas y con guiones: `lentejas-estofadas.mp4`.
3. Si hay foto, `public/images/lentejas-estofadas.jpg`.
4. Si el vídeo también está en YouTube, crea `public/videos/lentejas-estofadas.youtube.txt` con el enlace.

Luego, en la carpeta del proyecto:

```bash
npm run recetas:inventario
npm run recetas:vincular
npm run recetas:transcribir
```

- **vincular**: crea la ficha y deja el vídeo ya enlazado (sale en la web como borrador).
- **transcribir**: saca el texto hablado (hace falta Python, `faster-whisper` y ffmpeg, una sola vez).
- En el chat: «escribe las recetas de las transcripciones». El agente las pasa a lenguaje de recetario y quita el estado de borrador.

La primera instalación de transcripción:

```bash
py -3 -m pip install faster-whisper
```

ffmpeg tiene que estar en el PATH.

## Imprimir el libro

1. Entra en `/libro`.
2. Pulsa **Imprimir / guardar PDF**.
3. Elige tamaño **A4** y activa **gráficos de fondo**.

Los borradores (recetas aún sin texto) no salen en el PDF.
