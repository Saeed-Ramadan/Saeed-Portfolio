import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LoaderPhase, UseInteractiveLoaderReturn } from "../types/loader";
import { audioSynth } from "../utils/audioSynth";
import avatarReadyImg from "../assets/avatar/saeed_avatar_ready.jpg";
import avatarClickImg from "../assets/avatar/saeed_avatar_click.jpg";

// RATIONALE: Decoupling complex animation timeline, image asset caching,
// and user interaction logic from UI presentation.
export const useInteractiveLoader = (onComplete: () => void): UseInteractiveLoaderReturn => {
  const { i18n, t } = useTranslation();
  const isAr = i18n.language === "ar";

  const [progress, setProgress] = useState<number>(0);
  const [phase, setPhase] = useState<LoaderPhase>("loading");
  const hasTriggeredRef = useRef<boolean>(false);

  // Preload avatar assets to guarantee instantaneous zero-flicker transitions
  useEffect(() => {
    const img1 = new Image();
    img1.src = avatarReadyImg;
    const img2 = new Image();
    img2.src = avatarClickImg;
  }, []);

  // Primary loader simulation curve
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Non-linear acceleration for natural loading feel
      const increment = current < 60 ? 3 : current < 85 ? 2 : 1;
      current += increment;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        setPhase("ready");
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, 28);

    return () => clearInterval(interval);
  }, []);

  // Launch action trigger (Avatar clicks mouse -> shockwave -> reveal homepage)
  const handleLaunchTrigger = useCallback(() => {
    if (hasTriggeredRef.current || phase === "clicking" || phase === "revealing") return;
    hasTriggeredRef.current = true;

    // 1. Play mechanical mouse click sound & set clicking state
    audioSynth.playMouseClick();
    setPhase("clicking");

    // 2. Trigger holographic shockwave & portal warp
    const warpTimer = setTimeout(() => {
      audioSynth.playWarpSurge();
      setPhase("revealing");
    }, 180);

    // 3. Complete and hand over to Homepage
    const finishTimer = setTimeout(() => {
      setPhase("completed");
      onComplete();
    }, 1250);

    return () => {
      clearTimeout(warpTimer);
      clearTimeout(finishTimer);
    };
  }, [phase, onComplete]);

  // Auto-launch safety fallback: if user doesn't click after 12s of reaching 100%, trigger automatically
  useEffect(() => {
    if (phase !== "ready") return;

    const autoTimer = setTimeout(() => {
      if (!hasTriggeredRef.current) {
        handleLaunchTrigger();
      }
    }, 12000);

    return () => clearTimeout(autoTimer);
  }, [phase, handleLaunchTrigger]);

  // Keyboard accessibility: Enter or Space triggers launch when ready
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (phase === "ready" && (e.code === "Space" || e.code === "Enter")) {
        e.preventDefault();
        handleLaunchTrigger();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase, handleLaunchTrigger]);

  // Contextual status text based on progress & phase
  const getStatusText = (): string => {
    if (phase === "clicking" || phase === "revealing") {
      return t("loader.entering");
    }
    if (phase === "ready") {
      return t("loader.readyPrompt");
    }
    if (progress < 40) {
      return t("loader.systemInitializing");
    }
    if (progress < 75) {
      return t("loader.compilingVite");
    }
    return t("loader.loadingModules");
  };

  return {
    progress,
    phase,
    handleLaunchTrigger,
    isReady: phase === "ready",
    isRevealing: phase === "revealing" || phase === "clicking",
    statusText: getStatusText(),
  };
};
