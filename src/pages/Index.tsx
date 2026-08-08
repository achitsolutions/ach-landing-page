import { lazy, Suspense, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getSectionIdForPath, scrollToSectionWhenReady } from "@/lib/sectionNav";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const TechStack = lazy(() => import("@/components/TechStack"));
const AISection = lazy(() => import("@/components/AISection"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => (
  <div className="py-24" aria-hidden="true" />
);

const Index = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const sectionId = getSectionIdForPath(pathname);
    const firstRender = isFirstRender.current;
    isFirstRender.current = false;

    if (!sectionId) {
      if (!firstRender) window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const behavior: ScrollBehavior = firstRender ? "auto" : "smooth";
    const cancel = scrollToSectionWhenReady(sectionId, behavior);

    // Lazy sections above the target can shift layout after mounting.
    const timers = firstRender
      ? [300, 900].map((delay) =>
          window.setTimeout(() => scrollToSectionWhenReady(sectionId, "auto"), delay),
        )
      : [];

    return () => {
      cancel();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AISection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
