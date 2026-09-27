import { Transition, Variants } from "framer-motion";

// RATIONALE: The signature Apple easing curve used across iOS and macOS user interfaces.
// Provides rapid, natural acceleration with a damped, luxurious deceleration and settling.
export const APPLE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// RATIONALE: Factory function generating standardized Apple-style spring transitions.
export const appleTransition = (
  duration: number = 0.85,
  delay: number = 0
): Transition => ({
  duration,
  delay,
  ease: APPLE_EASE,
});

// Staggered parent container variant coordinating calm child emergence
export const staggerContainer = (
  staggerChildren: number = 0.08,
  delayChildren: number = 0.05
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
      ease: APPLE_EASE,
    },
  },
});

// Soft upward emergence with optical micro-blur settling
export const appleFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: APPLE_EASE,
    },
  },
};

// Subtle scale emergence for cards and media vessels
export const appleScaleReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: APPLE_EASE,
    },
  },
};

// Horizontal slide-in with Apple curve for bi-directional text
export const appleSlideIn = (direction: "left" | "right" = "left"): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -24 : 24,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: APPLE_EASE,
    },
  },
});
