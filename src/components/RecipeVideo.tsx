import type { RecipeVideo } from "@/data/recipes";
import { hasWatchableVideo, youtubeIdFromUrl } from "@/lib/video";

export function RecipeVideo({ video }: { video?: RecipeVideo }) {
  if (!hasWatchableVideo(video)) {
    return (
      <aside className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--paper-dark)]/50 px-5 py-6">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-[var(--olive)]">
          Vídeo de la receta
        </p>
        <p className="mt-2 font-serif text-2xl text-[var(--ink)]">
          Aún no hay vídeo
        </p>
        <p className="mt-2 max-w-xl text-base leading-7 text-[var(--ink-soft)]">
          {video?.caption ??
            "Cuando tengas la explicación grabada, pega un enlace de YouTube o un archivo en public/videos."}
        </p>
      </aside>
    );
  }

  const youtubeId = youtubeIdFromUrl(video?.youtube);
  const file = video?.file?.trim();

  return (
    <section>
      <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-[var(--olive)]">
        Vídeo de la explicación
      </p>
      <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--line)] bg-black">
        {file ? (
          <video className="aspect-video w-full" controls preload="metadata">
            <source src={encodeURI(file)} />
            Tu navegador no puede reproducir este vídeo.
          </video>
        ) : youtubeId ? (
          <iframe
            title="Vídeo de la receta"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
            className="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}
      </div>
      {video?.caption ? (
        <p className="mt-3 text-base text-[var(--ink-soft)]">{video.caption}</p>
      ) : null}
    </section>
  );
}
