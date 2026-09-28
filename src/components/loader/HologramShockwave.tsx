import React from "react";
import { motion } from "framer-motion";

interface HologramShockwaveProps {
  active: boolean;
}

// RATIONALE: High-impact cinematic holographic shockwave and laser ripple animations.
// Emanates directly outward from the mouse activation point when the launch is triggered.
export const HologramShockwave: React.FC<HologramShockwaveProps> = ({ active }) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden flex items-center justify-center">
      {/* 1. Instantaneous Flash Burst */}
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="absolute inset-0 bg-white"
      />

      {/* 2. Expanding Concentric Shockwave Rings */}
      {[0, 0.1, 0.22, 0.35].map((delay, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.1, opacity: 0.9, borderWidth: "6px" }}
          animate={{ scale: 4.5, opacity: 0, borderWidth: "1px" }}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-[400px] h-[400px] rounded-full border border-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.8)]"
        />
      ))}

      {/* 3. Magenta Secondary Harmonic Ring */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0.8 }}
        animate={{ scale: 3.8, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        className="absolute w-[500px] h-[500px] rounded-full border-2 border-pink-500 shadow-[0_0_60px_rgba(236,72,153,0.8)]"
      />

      {/* 4. Radial Hologram Ray Beams */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: [0, 0.7, 0], rotate: 180, scale: [0.8, 2.5] }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/30 via-indigo-600/20 to-transparent blur-xl"
      />
    </div>
  );
};
