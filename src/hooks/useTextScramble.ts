import { useState, useCallback, useRef, useEffect } from "react";

interface UseTextScrambleOptions {
  duration?: number;
  speed?: number;
  characters?: string;
}

const DEFAULT_CHARS = "!<>-_\\/[]{}—=+*^?#01";

// RATIONALE: Extracts cryptographic text scrambling logic into a reusable hook.
// Uses requestAnimationFrame for 60fps rendering without blocking the UI thread.
export const useTextScramble = (
  finalText: string,
  options: UseTextScrambleOptions = {}
) => {
  const { duration = 350, speed = 25, characters = DEFAULT_CHARS } = options;
  const [displayText, setDisplayText] = useState(finalText);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef<number | null>(null);

  // Sync displayed text if prop changes
  useEffect(() => {
    setDisplayText(finalText);
  }, [finalText]);

  const trigger = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    const startTime = performance.now();
    const length = finalText.length;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Number of characters resolved to their true value
      const resolvedCount = Math.floor(progress * length);

      let result = "";
      for (let i = 0; i < length; i++) {
        if (finalText[i] === " " || finalText[i] === "\n") {
          result += finalText[i];
        } else if (i < resolvedCount) {
          result += finalText[i];
        } else {
          result += characters[Math.floor(Math.random() * characters.length)];
        }
      }

      setDisplayText(result);

      if (progress < 1) {
        frameRef.current = setTimeout(() => {
          requestAnimationFrame(animate);
        }, speed) as unknown as number;
      } else {
        setDisplayText(finalText);
        setIsScrambling(false);
      }
    };

    requestAnimationFrame(animate);
  }, [finalText, duration, speed, characters, isScrambling]);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        clearTimeout(frameRef.current);
      }
    };
  }, []);

  return { displayText, trigger, isScrambling };
};
