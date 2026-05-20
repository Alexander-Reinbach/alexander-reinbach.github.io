/**
 * Prefix a public asset path with the configured basePath.
 *
 * Next.js auto-prefixes <Link href> and next/image src, but raw <a href>
 * and direct DOM links need explicit handling. Use this for /cv.pdf etc.
 *
 * NEXT_PUBLIC_BASE_PATH is inlined at build time by Next.js, so this works
 * in both server and client components without runtime config.
 */
export function withBase(p: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base) return p;
  if (!p.startsWith("/")) return `${base}/${p}`;
  return `${base}${p}`;
}
