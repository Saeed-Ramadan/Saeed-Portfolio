import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DiagnosticLog = ({ progress }) => {
  const logs = useMemo(
    () => [
      "Initializing React 19 Fiber Engine...",
      "Mounting V8 Memory Snapshots...",
      "Optimizing Tailwind JIT Runtime...",
      "Injecting Framer Motion Physics...",
      "Parsing Celestial Geometry...",
      "Establishing Neural Socket Connection...",
      "Loading Portfolio State Machine...",
      "Compiling Shader Prototypes...",
      "Synchronizing Chroma-Vibe Channels...",
      "Deploying Global Architecture...",
      "Ready for Supernova Reveal.",
    ],
    [],
  );

  const visibleLogs = logs.slice(
    0,
    Math.floor((progress / 100) * logs.length) + 1,
  );

  return (
    <div className="absolute left-6 bottom-6 flex flex-col gap-1 font-mono text-[9px] uppercase tracking-widest text-title/40">
      <AnimatePresence>
        {visibleLogs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-joy-cyan">{">"}</span> {log}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const WireframeCore = () => (
  <div className="relative w-48 h-48 [perspective:1000px]">
    <motion.div
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 180],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="w-full h-full relative [transform-style:preserve-3d]"
    >
      {/* Cube Wireframe */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 border-[0.5px] border-title/20 bg-title/5 backdrop-blur-[2px]"
          style={{
            transform: `rotate${i < 4 ? "Y" : "X"}(${(i % 4) * 90}deg) translateZ(6rem)`,
          }}
        />
      ))}

      {/* Internal Singularity Sphere */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-12 bg-radial-gradient from-joy-pink to-transparent rounded-full blur-xl"
      />
    </motion.div>
  </div>
);

const VirtualBrowser = ({ progress }) => {
  const designTags = [
    "gap: 20px",
    "display: flex",
    "blur: 40px",
    "animate: spring",
    "aspect: 16/9",
  ];
  const currentTagIndex = Math.floor((progress / 20) % designTags.length);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 10 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] w-[320px] md:w-[480px] h-64 bg-container/40 border border-white/10 rounded-xl backdrop-blur-3xl shadow-2xl overflow-hidden [transform-style:preserve-3d] hidden md:block"
    >
      {/* Browser Header */}
      <div className="flex items-center gap-4 px-4 py-2 border-b border-white/5 bg-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-joy-pink/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-joy-yellow/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-joy-cyan/50" />
        </div>
        <div className="flex-1 bg-body/40 rounded-md py-1 px-3 flex items-center justify-between">
          <span className="text-[7px] font-mono text-title/30 truncate">
            saeed-portfolio.frontenddeveloper
          </span>
          <i className="bx bx-lock text-[8px] text-joy-cyan/40"></i>
        </div>
      </div>

      {/* Browser Content (Canvas) */}
      <div className="p-4 relative h-full">
        {/* Skeleton Layout Construction */}
        <div className="grid grid-cols-12 gap-3 h-full">
          {/* Side Nav */}
          <motion.div
            animate={{ opacity: progress > 10 ? 1 : 0 }}
            className="col-span-1 bg-white/5 rounded-lg border border-white/5"
          />

          <div className="col-span-11 space-y-3">
            {/* Nav Header */}
            <motion.div
              animate={{
                opacity: progress > 20 ? 1 : 0,
                x: progress > 20 ? 0 : -20,
              }}
              className="h-6 bg-white/5 rounded-lg border border-white/5"
            />
            {/* Hero Block */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                animate={{
                  opacity: progress > 40 ? 1 : 0,
                  scale: progress > 40 ? 1 : 0.8,
                  y: progress > 40 ? 0 : 20,
                }}
                className="h-20 bg-linear-to-br from-joy-pink/10 to-transparent rounded-2xl border border-joy-pink/20"
              />
              <motion.div
                animate={{
                  opacity: progress > 50 ? 1 : 0,
                  x: progress > 50 ? 0 : 30,
                }}
                className="h-20 bg-white/5 border border-white/10 rounded-2xl"
              />
            </div>
            {/* Grid Items */}
            <div className="grid grid-cols-3 gap-3">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: progress > 60 + i * 10 ? 1 : 0,
                    scale: progress > 60 + i * 10 ? 1 : 0.5,
                  }}
                  className="h-12 bg-white/5 border border-white/5 rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Ghost Cursor Construction */}
        <motion.div
          animate={{
            x: [50, 200, 100, 300, 150],
            y: [50, 100, 30, 80, 50],
            scale: [1, 0.8, 1.2, 1, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-50 pointer-events-none"
        >
          <i className="bx bx-pointer text-xl text-joy-cyan drop-shadow-[0_0_10px_rgba(var(--color-joy-cyan),1)]"></i>

          {/* Design Property Tag */}
          <motion.div
            key={currentTagIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 25 }}
            className="absolute top-0 left-0 bg-joy-cyan/20 border border-joy-cyan/40 px-2 py-0.5 rounded text-[6px] text-joy-cyan font-mono whitespace-nowrap backdrop-blur-md"
          >
            {designTags[currentTagIndex]}
          </motion.div>

          {/* Action indicator */}
          <motion.div
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute -top-1 -left-1 w-4 h-4 rounded-full border border-joy-cyan bg-joy-cyan/20 blur-[2px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + 1;
      });
    }, 45); // Slightly slower for construction detail
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{
        opacity: 0,
        scale: 1.5,
        filter: "hue-rotate(90deg) blur(20px)",
        transition: { duration: 1, ease: "circIn" },
      }}
      className="fixed inset-0 z-[25000] bg-body flex items-center justify-center overflow-hidden"
    >
      {/* Digital Architect Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <VirtualBrowser progress={progress} />

      {/* Floating Meta-Rings */}
      <motion.div
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[800px] h-[800px] border border-title/10 rounded-full"
      />

      <div className="relative z-10 flex flex-col items-center gap-12 mt-32 md:mt-48">
        <WireframeCore />

        <div className="flex flex-col items-center gap-2">
          <motion.div className="flex items-end gap-1 font-mono text-4xl font-black italic tracking-tighter text-title">
            <span>{progress}</span>
            <span className="text-xs text-joy-cyan mb-2 tracking-widest">
              %
            </span>
          </motion.div>

          <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute inset-y-0 left-0 bg-linear-to-r from-joy-pink to-joy-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <motion.span
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-mono text-[8px] tracking-[0.5em] text-title/50 uppercase"
        >
          Architect Singularity x Browser Engine v6.1
        </motion.span>
      </div>

      <DiagnosticLog progress={progress} />

      {/* Scanline Effect */}
      <motion.div
        animate={{ translateY: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[20vh] bg-linear-to-b from-transparent via-white/5 to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

export default Loader;
