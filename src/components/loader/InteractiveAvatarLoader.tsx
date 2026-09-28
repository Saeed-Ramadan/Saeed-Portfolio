import React from "react";
import { motion } from "framer-motion";
import { useInteractiveLoader } from "../../hooks/useInteractiveLoader";
import { AvatarStage } from "./AvatarStage";
import { LoaderControls } from "./LoaderControls";
import { HologramShockwave } from "./HologramShockwave";

interface InteractiveAvatarLoaderProps {
  onComplete: () => void;
}

// RATIONALE: Master Interactive Avatar Preloader Container.
// Orchestrates the 3D avatar viewport, tactile mouse trigger, audio cues,
// and cinematic portal transition into the main application.
export const InteractiveAvatarLoader: React.FC<InteractiveAvatarLoaderProps> = ({ onComplete }) => {
  const {
    progress,
    phase,
    handleLaunchTrigger,
    isReady,
    isRevealing,
    statusText,
  } = useInteractiveLoader(onComplete);

  return (
    <motion.div
      exit={{
        opacity: 0,
        scale: 1.15,
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      }}
      onClick={isReady ? handleLaunchTrigger : undefined}
      className={`fixed inset-0 z-[25000] bg-slate-950 flex flex-col items-center justify-center overflow-hidden px-4 py-8 ${
        isReady ? "cursor-pointer" : ""
      }`}
    >
      {/* Background Matrix Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Atmospheric Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Shockwave Emitter Overlay */}
      <HologramShockwave active={isRevealing} />

      {/* Main Core Viewport */}
      <div className="relative z-20 flex flex-col items-center gap-6 sm:gap-8 my-auto">
        <AvatarStage
          phase={phase}
          isReady={isReady}
          onTrigger={handleLaunchTrigger}
        />

        <LoaderControls
          progress={progress}
          phase={phase}
          isReady={isReady}
          isRevealing={isRevealing}
          statusText={statusText}
          onLaunch={handleLaunchTrigger}
        />
      </div>

      {/* Architectural Telemetry Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[9px] font-mono tracking-widest text-slate-500 uppercase pointer-events-none hidden sm:flex">
        <span>SAEED RAMADAN // ARCHITECT AVATAR CORE</span>
        <span>REACT 19 + VITE + TAILWIND v4</span>
      </div>
    </motion.div>
  );
};

export default InteractiveAvatarLoader;
