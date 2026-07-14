// Prefixes an internal path with Astro's configured `base`, so links keep
// working when the site is deployed under a subpath (e.g. GitHub Pages
// project sites like johnandresmedina.github.io/blog).
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${trimmedBase}${normalizedPath}`;
}
