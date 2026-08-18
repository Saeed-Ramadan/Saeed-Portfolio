import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// RATIONALE: Extracting header navigation state & side-effects (scroll detection, mobile body lock, and RTL detection)
// into a custom hook isolates business logic from UI components per front-end architecture guidelines.
export const useHeaderNav = () => {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isRtl = i18n.language === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // RATIONALE: Locking document body scroll when mobile sidebar drawer is open prevents background content scrolling.
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return {
    isScrolled,
    isMenuOpen,
    isRtl,
    toggleMenu,
    closeMenu,
  };
};
