export function slugFromName(name: string): string {
  const base = name.replace(/\.[^.]+$/, "").trim();
  return base
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function titleFromSlug(slug: string): string {
  if (!slug) return "Receta";
  const text = slug.replace(/-/g, " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}
