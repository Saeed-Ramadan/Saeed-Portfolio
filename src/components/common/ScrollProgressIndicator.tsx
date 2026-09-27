import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useScrollProgress } from "../../hooks/useScrollProgress";

// RATIONALE: Modern micro scroll indicator with circular SVG gauge, active section label, and smooth scroll-to-top interaction.
// Responsively adapts between desktop and mobile with full theme token compatibility.
export const ScrollProgressIndicator: React.FC = () => {
  const { t } = useTranslation();
  const { progress, activeSection, isVisible, scrollToTop } = useScrollProgress();

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-6 rtl:left-auto rtl:right-6 z-[9990] select-none"
        >
          <button
            onClick={scrollToTop}
            title={t("hero.scrollDown")}
            className="group flex items-center gap-2.5 p-1.5 pr-3 rtl:pr-1.5 rtl:pl-3 rounded-full border border-slate-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-[#0c121e]/85 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-indigo-500/40 transition-all cursor-pointer"
          >
            {/* Circular Progress Gauge */}
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 40 40">
                {/* Background Ring */}
                <circle
                  cx="20"
                  cy="20"
                  r={radius}
                  className="stroke-slate-200 dark:stroke-white/10"
                  strokeWidth="3"
                  fill="transparent"
                />
                {/* Active Progress Ring */}
                <circle
                  cx="20"
                  cy="20"
                  r={radius}
                  className="stroke-indigo-500 transition-all duration-150"
                  strokeWidth="3"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              {/* Center Icon / Percentage */}
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-title font-code group-hover:hidden">
                {progress}%
              </span>
              <span className="absolute inset-0 hidden group-hover:flex items-center justify-center text-xs text-indigo-500">
                <i className="bx bx-chevron-up text-base font-bold" />
              </span>
            </div>

            {/* Current Section Label (Hidden on small mobile) */}
            <div className="hidden sm:flex flex-col text-start">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-textLight">
                {t(activeSection.nameKey)}
              </span>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgressIndicator;
