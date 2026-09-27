import { useRef, useState, useEffect, useCallback } from "react";
import { useMotionValue, useSpring } from "framer-motion";

interface UseMagneticOptions {
  strength?: number; // Attraction strength multiplier (default: 0.3)
}

// RATIONALE: Encapsulates pointer proximity physics and spring velocity for magnetic button effect.
// Automatically disables behavior on touch/mobile devices to prevent gesture conflicts.
export const useMagnetic = (options: UseMagneticOptions = {}) => {
  const { strength = 0.3 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(true);

  // Check if device supports true hover pointer (skips on mobile/tablets)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
      setCanHover(mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Calibrated spring physics for smooth, organic tactile feedback
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!canHover || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = (e.clientX - centerX) * strength;
      const distanceY = (e.clientY - centerY) * strength;

      rawX.set(distanceX);
      rawY.set(distanceY);
    },
    [canHover, strength, rawX, rawY]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { ref, x, y, handleMouseMove, handleMouseLeave, canHover };
};
