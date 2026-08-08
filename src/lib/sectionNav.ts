export const SECTION_ROUTES: Record<string, string> = {
  "/servicos": "servicos",
  "/sobre": "sobre",
  "/tecnologias": "tecnologias",
  "/ia": "ia",
  "/contato": "contato",
};

export const SECTION_PATHS = Object.keys(SECTION_ROUTES);

export const getSectionIdForPath = (pathname: string): string | null =>
  SECTION_ROUTES[pathname.replace(/\/+$/, "") || "/"] ?? null;

const getHeaderOffset = () =>
  document.querySelector("header")?.getBoundingClientRect().height ?? 72;

/** Scrolls to a section, compensating for the fixed header height. */
export const scrollToSection = (
  id: string,
  behavior: ScrollBehavior = "smooth",
) => {
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top: Math.max(top, 0), behavior });
  return true;
};

/**
 * Waits for a lazily-mounted section to exist before scrolling to it.
 * Returns a cleanup function that cancels any pending attempt.
 */
export const scrollToSectionWhenReady = (
  id: string,
  behavior: ScrollBehavior = "smooth",
  timeoutMs = 4000,
) => {
  const start = performance.now();
  let frame = 0;
  let cancelled = false;

  const attempt = () => {
    if (cancelled) return;
    if (scrollToSection(id, behavior)) return;
    if (performance.now() - start > timeoutMs) return;
    frame = requestAnimationFrame(attempt);
  };

  frame = requestAnimationFrame(attempt);

  return () => {
    cancelled = true;
    cancelAnimationFrame(frame);
  };
};
/* ---------- Localized section routes ---------- */

export type SectionLang = "pt" | "en";

export const SECTION_PATHS_BY_LANG: Record<SectionLang, Record<string, string>> = {
  pt: {
    servicos: "/servicos",
    sobre: "/sobre",
    tecnologias: "/tecnologias",
    ia: "/ia",
    contato: "/contato",
  },
  en: {
    servicos: "/services",
    sobre: "/about",
    tecnologias: "/tech",
    ia: "/ai",
    contato: "/contact",
  },
};

/** All section paths (both languages), mapped to their section id. */
export const ALL_SECTION_ROUTES: Record<string, string> = Object.values(
  SECTION_PATHS_BY_LANG,
).reduce<Record<string, string>>((acc, map) => {
  Object.entries(map).forEach(([id, path]) => {
    acc[path] = id;
  });
  return acc;
}, {});

export const ALL_SECTION_PATHS = Object.keys(ALL_SECTION_ROUTES);

const normalize = (pathname: string) => pathname.replace(/\/+$/, "") || "/";

/** Section id for any localized section path. */
export const getSectionIdForAnyPath = (pathname: string): string | null =>
  ALL_SECTION_ROUTES[normalize(pathname)] ?? null;

/** Language implied by a section path, or null for non-section paths. */
export const getLanguageForPath = (pathname: string): SectionLang | null => {
  const path = normalize(pathname);
  if (Object.values(SECTION_PATHS_BY_LANG.pt).includes(path)) return "pt";
  if (Object.values(SECTION_PATHS_BY_LANG.en).includes(path)) return "en";
  return null;
};

/** Path for a section id in the given language. */
export const getSectionPath = (sectionId: string, lang: SectionLang): string =>
  SECTION_PATHS_BY_LANG[lang][sectionId] ?? "/";

/** Same section, other language. Returns null when path isn't a section route. */
export const getEquivalentPath = (
  pathname: string,
  lang: SectionLang,
): string | null => {
  const sectionId = getSectionIdForAnyPath(pathname);
  return sectionId ? getSectionPath(sectionId, lang) : null;
};
