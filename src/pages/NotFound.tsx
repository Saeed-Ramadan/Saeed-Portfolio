import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SpotlightCard } from "../components/common/SpotlightCard";
import { useNotFound } from "../hooks/useNotFound";
import { appleFadeUp, appleScaleReveal } from "../utils/motion";

// RATIONALE: High-fidelity 404 Not Found page adhering to Saeed Ramadan's portfolio design language.
// Displays route context, terminal error inspection, bilingual toggle, theme switching, and quick recovery navigation.
const NotFound: React.FC = () => {
  const {
    t,
    isAr,
    isDark,
    toggleTheme,
    toggleLanguage,
    attemptedPath,
    goBack,
  } = useNotFound();

  return (
    <div className="min-h-screen bg-body text-text flex flex-col justify-between relative overflow-hidden selection:bg-indigo-500/20 selection:text-indigo-400">
      {/* Ambient Radial Lighting */}
      <div className="ambient-glow-top" />
      <div className="ambient-glow-bottom" />

      {/* Top Floating Utility Header */}
      <header className="relative z-20 max-w-6xl mx-auto w-full px-6 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <img
            src="/logo.png"
            alt="Saeed Ramadan"
            className="w-8 h-8 object-contain"
          />
          <span className="font-extrabold text-sm tracking-tight text-title font-code">
            saeed.dev
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="text-xs font-bold text-title hover:text-indigo-500 transition-colors px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] cursor-pointer"
          >
            {isAr ? "EN" : "العربية"}
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-title hover:text-indigo-500 bg-slate-100 dark:bg-white/[0.04] transition-colors cursor-pointer text-base"
          >
            <i className={`bx ${isDark ? "bx-sun" : "bx-moon"}`} />
          </button>
        </div>
      </header>

      {/* Main Showcase Hero */}
      <main className="max-w-3xl mx-auto px-6 py-8 flex-1 flex flex-col justify-center items-center w-full relative z-10">
        <motion.div
          variants={appleScaleReveal}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <SpotlightCard className="p-7 sm:p-12 text-center w-full shadow-2xl relative">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-rose-500/25 bg-rose-500/10 text-rose-500 dark:text-rose-400 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              <span>{t("notFound.badge")}</span>
            </div>

            {/* Glowing 404 Headline */}
            <div className="mb-4 select-none">
              <h1 className="text-7xl sm:text-9xl font-black font-code tracking-tighter bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent leading-none">
                404
              </h1>
            </div>

            {/* Title & Description */}
            <motion.div
              variants={appleFadeUp}
              initial="hidden"
              animate="visible"
              className="space-y-3 mb-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-title tracking-tight">
                {t("notFound.title")}
              </h2>
              <p className="text-xs sm:text-sm text-textLight max-w-lg mx-auto leading-relaxed">
                {t("notFound.desc")}
              </p>
            </motion.div>

            {/* Terminal Route Inspector Box */}
            <div className="my-6 p-4 rounded-xl bg-slate-900/90 dark:bg-black/60 border border-slate-700/50 dark:border-white/10 text-start font-code text-xs space-y-1.5 shadow-inner overflow-x-auto">
              <div className="flex items-center gap-2 text-slate-400 border-b border-white/10 pb-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="text-[11px] text-slate-400 font-bold ml-1">
                  Router Diagnostic Console
                </span>
              </div>
              <p className="text-slate-300">
                <span className="text-indigo-400 font-bold">$</span> GET{" "}
                <span className="text-amber-300 font-semibold">{attemptedPath}</span>
              </p>
              <p className="text-rose-400 font-semibold">
                <span className="text-slate-500">&gt;</span> {t("notFound.systemStatus")}
              </p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                <span className="text-slate-500">&gt;</span> {t("notFound.developerNote")}
              </p>
            </div>

            {/* Navigation Recovery Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <Link
                to="/"
                className="w-full sm:w-auto px-6 h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <i className="bx bx-home-alt text-base" />
                <span>{t("notFound.backHome")}</span>
              </Link>

              <button
                type="button"
                onClick={goBack}
                className="w-full sm:w-auto px-5 h-12 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 bg-slate-100 dark:bg-white/[0.04] text-title rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <i className={`bx ${isAr ? "bx-right-arrow-alt" : "bx-left-arrow-alt"} text-base`} />
                <span>{isAr ? "الرجوع للصفحة السابقة" : "Go Back"}</span>
              </button>

              <a
                href="https://wa.me/201126488442"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 h-12 border border-emerald-500/30 hover:border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <i className="bx bxl-whatsapp text-lg" />
                <span>{t("notFound.contactMe")}</span>
              </a>
            </div>

            {/* Helpful Shortcuts */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-textLight">
              <span className="text-[11px] font-bold text-title">
                {t("notFound.quickNavigation")}:
              </span>
              <Link
                to="/"
                className="hover:text-indigo-500 transition-colors flex items-center gap-1"
              >
                <i className="bx bx-briefcase-alt-2" />
                <span>{t("nav.portfolio")}</span>
              </Link>
              <span className="text-slate-300 dark:text-white/20">•</span>
              <Link
                to="/"
                className="hover:text-indigo-500 transition-colors flex items-center gap-1"
              >
                <i className="bx bx-user" />
                <span>{t("nav.about")}</span>
              </Link>
              <span className="text-slate-300 dark:text-white/20">•</span>
              <Link
                to="/"
                className="hover:text-indigo-500 transition-colors flex items-center gap-1"
              >
                <i className="bx bx-envelope" />
                <span>{t("nav.contact")}</span>
              </Link>
            </div>
          </SpotlightCard>
        </motion.div>
      </main>

      {/* Minimal Footer Note */}
      <footer className="relative z-10 py-6 text-center text-xs text-textLight">
        <p>© {new Date().getFullYear()} Saeed Ramadan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotFound;
