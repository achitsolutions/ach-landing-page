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