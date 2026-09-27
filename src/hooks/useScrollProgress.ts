import { useState, useEffect, useCallback } from "react";

interface SectionInfo {
  id: string;
  nameKey: string;
}

const SECTIONS: SectionInfo[] = [
  { id: "home", nameKey: "nav.home" },
  { id: "about", nameKey: "nav.about" },
  { id: "qualification", nameKey: "nav.qualification" },
  { id: "skills", nameKey: "nav.skills" },
  { id: "work", nameKey: "nav.portfolio" },
  { id: "leadership", nameKey: "nav.leadership" },
  { id: "education", nameKey: "nav.qualification" },
  { id: "contact", nameKey: "nav.contact" },
];

// RATIONALE: Hook tracking document scroll percentage and currently visible section.
// Extracts window event listeners and intersection calculation away from UI components.
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionInfo>(SECTIONS[0]);
  const [isVisible, setIsVisible] = useState(false);

  const calculateScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    setProgress(Math.min(100, Math.max(0, Math.round(scrolled))));
    setIsVisible(scrollTop > 200);

    // Identify which section is currently centered on the viewport
    const viewportMiddle = scrollTop + window.innerHeight / 3;

    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTIONS[i].id);
      if (el) {
        const top = el.offsetTop;
        if (viewportMiddle >= top) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    calculateScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [calculateScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { progress, activeSection, isVisible, scrollToTop };
};
