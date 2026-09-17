import Link from "next/link";

const links = [
  { href: "/", label: "Recetas" },
  { href: "/libro", label: "El libro" },
];

export function SiteHeader() {
  return (
    <header className="no-print border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="group">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-[var(--olive)]">
            Días mundiales
          </p>
          <p className="font-serif text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
            Aruser@s
          </p>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 font-sans text-base text-[var(--ink-soft)] transition hover:bg-[var(--paper-dark)] hover:text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
