import { useState, useEffect, useCallback } from "react";

interface UseCurrentRolesRotatorOptions {
  total: number;
  intervalMs?: number;
}

// RATIONALE: Custom hook extracting carousel / rotator logic for Saeed's active commercial and mentoring roles.
// Follows Spec-Driven Development: separates timer & index state from UI presentation,
// with pause-on-hover support for optimal accessibility and seamless user control.
export const useCurrentRolesRotator = ({
  total,
  intervalMs = 4000,
}: UseCurrentRolesRotatorOptions) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused || total <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isPaused, total, intervalMs]);

  return {
    currentIndex,
    next,
    prev,
    goTo,
    isPaused,
    setIsPaused,
  };
};
