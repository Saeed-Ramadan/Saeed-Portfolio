import { useState, useEffect, useCallback } from "react";

// RATIONALE: Separates lightbox presentation from state & keyboard event lifecycle (Single Responsibility Principle).
// Listens for 'Escape' key globally to dismiss the modal, adhering to web accessibility (a11y) standards.
export const useProjectLightbox = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = useCallback((imageSrc: string) => {
    setSelectedImage(imageSrc);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeLightbox]);

  return {
    selectedImage,
    openLightbox,
    closeLightbox,
    isOpen: !!selectedImage,
  };
};
