import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LoaderPhase } from "../../types/loader";

interface LoaderControlsProps {
  progress: number;
  phase: LoaderPhase;
  isReady: boolean;
  isRevealing: boolean;
  statusText: string;
  onLaunch: () => void;
}

// RATIONALE: Presentation-only controls component handling progress indicators,
// bilingual telemetry display, and interactive launch call-to-action button.
export const LoaderControls: React.FC<LoaderControlsProps> = ({
  progress,
  isReady,
  isRevealing,
  statusText,
  onLaunch,
}) => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className="w-full max-w-md px-6 flex flex-col items-center gap-5 text-center z-30 select-none">
      {/* Progress Counter & Status Text */}
      <div className="flex flex-col items-center gap-1.5 w-full">
        <div className="flex items-baseline justify-center gap-1 font-mono text-3xl sm:text-4xl font-black tracking-tight text-white">
          <motion.span
            key={progress}
            initial={{ opacity: 0.7, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-linear-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent"
          >
            {progress}
          </motion.span>
          <span className="text-xs font-semibold text-cyan-400 font-mono tracking-widest">%</span>
        </div>

        <motion.p
          key={statusText}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-xs sm:text-sm text-slate-300/80 font-medium ${isAr ? "font-arabic" : ""}`}
        >
          {statusText}
        </motion.p>
      </div>

      {/* High-Tech Progress Bar */}
      <div className="w-full h-2 bg-slate-900/90 rounded-full border border-white/10 p-[1px] overflow-hidden relative shadow-inner">
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-cyan-500 via-indigo-500 to-pink-500 relative"
          style={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        >
          {/* Moving Glow Head */}
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] rounded-full" />
        </motion.div>
      </div>

      {/* Interactive Launch Button (Revealed at 100% Ready) */}
      <div className="h-14 flex items-center justify-center w-full">
        {isReady && !isRevealing && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={onLaunch}
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-cyan-300/50 cursor-pointer overflow-hidden transition-all duration-300"
          >
            {/* Shimmer sweep effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
            />

            <span className="relative z-10 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>

            <i className="bx bx-mouse text-lg group-hover:animate-bounce relative z-10" />

            <span className={`relative z-10 tracking-wide ${isAr ? "font-arabic" : "font-mono tracking-wider"}`}>
              {t("loader.clickAction")}
            </span>
          </motion.button>
        )}

        {isRevealing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest"
          >
            <i className="bx bx-loader-alt animate-spin text-base" />
            <span>{t("loader.entering")}</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};
