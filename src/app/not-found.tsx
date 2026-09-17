import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[var(--olive)]">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl">Esa receta no está en el libro</h1>
      <p className="mt-4 text-[var(--ink-soft)]">
        Puede que el enlace esté mal o que aún no la hayamos escrito.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-[var(--ink)] px-5 py-3 text-sm text-[var(--paper)]"
      >
        Volver a las recetas
      </Link>
    </div>
  );
}
