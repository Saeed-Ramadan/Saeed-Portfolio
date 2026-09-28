import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoaderPhase } from "../../types/loader";
import avatarReadyImg from "../../assets/avatar/saeed_avatar_ready.jpg";
import avatarClickImg from "../../assets/avatar/saeed_avatar_click.jpg";

interface AvatarStageProps {
  phase: LoaderPhase;
  isReady: boolean;
  onTrigger: () => void;
}

// RATIONALE: High-fidelity 3D Avatar viewport with interactive tactile targets.
// Smoothly crossfades between the ready pose and the shockwave click pose using Framer Motion.
export const AvatarStage: React.FC<AvatarStageProps> = ({ phase, isReady, onTrigger }) => {
  const isClickingOrRevealing = phase === "clicking" || phase === "revealing";

  return (
    <div className="relative group select-none">
      {/* Outer Ambient Glow Aura */}
      <motion.div
        animate={{
          scale: isClickingOrRevealing ? [1, 1.35, 1.2] : [1, 1.05, 1],
          opacity: isClickingOrRevealing ? 0.9 : isReady ? 0.6 : 0.25,
        }}
        transition={{ duration: isClickingOrRevealing ? 0.5 : 3, repeat: isClickingOrRevealing ? 0 : Infinity }}
        className="absolute -inset-4 sm:-inset-6 rounded-[2.5rem] bg-linear-to-r from-cyan-500/30 via-indigo-500/20 to-pink-500/30 blur-2xl pointer-events-none"
      />

      {/* Futuristic Frame Container */}
      <div
        onClick={isReady ? onTrigger : undefined}
        className={`relative w-[280px] sm:w-[340px] md:w-[390px] aspect-square rounded-3xl p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-transparent border ${
          isReady
            ? "border-cyan-400/60 shadow-[0_0_35px_rgba(6,182,212,0.35)] cursor-pointer"
            : "border-white/10"
        } backdrop-blur-2xl transition-all duration-500 overflow-hidden`}
      >
        {/* Corner Cyber Accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 z-30" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 z-30" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 z-30" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 z-30" />

        {/* Status Bar Header */}
        <div className="absolute top-3 left-4 right-4 z-30 flex items-center justify-between text-[10px] font-mono tracking-wider px-2 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-cyan-300">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isReady ? "bg-emerald-400 animate-ping" : "bg-cyan-400"}`} />
            <span className="font-semibold uppercase">
              {isClickingOrRevealing ? "TRANSMITTING" : isReady ? "STANDBY : READY" : "BOOTSTRAPPING"}
            </span>
          </div>
          <span className="text-white/60">DEV_NODE_01</span>
        </div>

        {/* 3D Avatar Stage Imagery */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
          <AnimatePresence mode="sync">
            {!isClickingOrRevealing ? (
              <motion.img
                key="avatar-ready"
                src={avatarReadyImg}
                alt="Saeed Ramadan 3D Avatar Ready"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <motion.img
                key="avatar-click"
                src={avatarClickImg}
                alt="Saeed Ramadan 3D Avatar Mouse Click"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full object-cover object-center"
              />
            )}
          </AnimatePresence>

          {/* Interactive Mouse Target Beacon (Over the mouse area on desk) */}
          {isReady && !isClickingOrRevealing && (
            <div className="absolute bottom-[10%] left-[28%] -translate-x-1/2 z-30 pointer-events-auto">
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.9, 0.3, 0.9] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full border-2 border-cyan-400 bg-cyan-400/20 blur-[1px] flex items-center justify-center cursor-pointer shadow-[0_0_20px_#06b6d4]"
              >
                <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_8px_#ffffff]" />
              </motion.div>
            </div>
          )}

          {/* Ambient Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 pointer-events-none opacity-60" />
        </div>
      </div>
    </div>
  );
};
