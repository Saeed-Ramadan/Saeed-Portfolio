import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { getProjectById } from "../data/projectsData";
import { useTheme } from "../hooks/useTheme";

const HopeDetails: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isAr = i18n.language === "ar";
  const project = getProjectById("hope");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<number>(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  const stats = [
    { num: "23+", label: isAr ? "ميزة وظيفية" : "Core Features" },
    { num: "5+", label: isAr ? "خوارزميات ذكاء اصطناعي" : "AI Algorithms" },
    { num: "1st", label: isAr ? "مشروع التخرج" : "Graduation Project" },
    { num: "⭐", label: isAr ? "قائد المشروع" : "Project Lead" },
  ];

  const sections = [
    {
      icon: "bx-info-circle",
      label: isAr ? "نبذة" : "Overview",
      id: "hope-overview",
    },
    {
      icon: "bx-star",
      label: isAr ? "المميزات" : "Features",
      id: "hope-features",
    },
    { icon: "bx-layer", label: isAr ? "التقنيات" : "Stack", id: "hope-stack" },
    {
      icon: "bx-image-alt",
      label: isAr ? "معرض الصور" : "Gallery",
      id: "hope-gallery",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";

  return (
    <div className="min-h-screen relative bg-slate-50 dark:bg-[#090d16] z-10 pt-24 pb-20 font-sans text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      {/* ── Dynamic Ambient Background ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-indigo-500/8 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* ── Sticky Nav ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-2xl bg-white/80 dark:bg-body/60 border-b border-slate-200 dark:border-white/5 shadow-sm">
        <Link
          to="/"
          className="group flex items-center gap-2 px-5 py-2.5 bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-teal-500/50 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-800 dark:text-title hover:text-teal-500 transition-all cursor-pointer"
        >
          <i
            className={`bx bx-left-arrow-alt text-lg transition-transform ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:-translate-x-1"}`}
          ></i>
          <span>{t("nav.home") || "Back"}</span>
        </Link>

        {/* Floating section pills */}
        <div className="hidden md:flex items-center gap-2 p-1 bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/5 rounded-full">
          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveSection(i);
                scrollToSection(s.id);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeSection === i
                  ? "bg-teal-500 text-black shadow-lg shadow-teal-500/20"
                  : "text-slate-700 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <i className={`bx ${s.icon} text-sm`} />
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-200/60 dark:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-amber-400 hover:scale-105 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            <i className={`bx ${isDark ? "bx-sun" : "bx-moon"} text-xl`}></i>
          </button>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-teal-500 to-cyan-500 text-black font-black text-[11px] uppercase tracking-widest rounded-2xl shadow-lg shadow-teal-500/20 hover:scale-105 transition-all cursor-pointer"
          >
            <span>{isAr ? "زيارة الموقع" : "Live App"}</span>
            <i className="bx bx-link-external" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-12 relative z-10">
        {/* ── HERO BANNER ── */}
        <div ref={heroRef} className="relative mb-20 pt-8">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="space-y-6">
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-400 text-xs font-black uppercase tracking-widest">
                🎓 {isAr ? "مشروع التخرج" : "Graduation Project"}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-black uppercase tracking-widest">
                ⭐ {isAr ? "درجة ممتاز" : "Excellent Grade"}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">
                🤖 {isAr ? "منصة ذكاء اصطناعي" : "AI Platform"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              HOPE{" "}
              <span className="bg-linear-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent italic font-serif font-normal">
                Platform
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base md:text-xl text-slate-700 dark:text-white/70 max-w-3xl font-medium leading-relaxed">
              {isAr
                ? "منصة تعليمية متكاملة مدعومة بالذكاء الاصطناعي لتطوير مهارات البرمجة والأطفال ذوي الاحتياجات الخاصة."
                : "An all-in-one AI-powered educational ecosystem combining learning management, interactive coding, and specialized support for children."}
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((st, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center shadow-xs"
                >
                  <span className="text-2xl md:text-3xl font-black text-teal-600 dark:text-teal-400 block mb-0.5">
                    {st.num}
                  </span>
                  <span className="text-[11px] font-bold text-slate-600 dark:text-white/50 uppercase tracking-wider">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── OVERVIEW SECTION ── */}
        <div id="hope-overview" className="mb-24 scroll-mt-28">
          <div className="p-8 md:p-12 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <i className="bx bx-info-circle text-teal-600 dark:text-teal-400 text-2xl" />
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {isAr ? "عن المشروع" : "About the Project"}
              </h2>
            </div>
            <p className="text-sm md:text-base text-slate-700 dark:text-white/70 leading-relaxed font-medium mb-8">
              {project.details?.overviewKey && t(project.details.overviewKey)}
            </p>

            {/* Sub-projects list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold mb-2">
                  <i className="bx bx-code-alt text-xl" />
                  <span>HOPE Academy</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-medium">
                  {isAr
                    ? "منصة تعليم برمجة تفاعلية للأطفال والشباب مع محرر كود لايف وتقييم بالذكاء الاصطناعي."
                    : "Interactive coding learning platform for youth with live code runner and AI grading."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold mb-2">
                  <i className="bx bx-heart text-xl" />
                  <span>HOPE Special Care</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-medium">
                  {isAr
                    ? "وحدة خاصة لدعم وتأهيل الأطفال ذوي الاحتياجات من خلال ألعاب وتدريبات تفاعلية."
                    : "Specialized module supporting children with special needs via targeted interactive games."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── FEATURES SECTION ── */}
        <div id="hope-features" className="mb-24 scroll-mt-28">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <i className="bx bx-star text-teal-500" />
            <span>{isAr ? "المميزات الرئيسية" : "Key Features"}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(project.details?.features || []).map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-teal-500/40 shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
                  <i className={`bx ${feat.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-500 transition-colors">
                  {t(feat.titleKey)}
                </h3>
                <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-medium">
                  {t(feat.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── TECH STACK ── */}
        <div id="hope-stack" className="mb-24 scroll-mt-28">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <i className="bx bx-layer text-teal-500" />
            <span>{isAr ? "التقنيات المستخدمة" : "Tech Stack"}</span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.techs.map((tech, i) => (
              <span
                key={i}
                className="px-5 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white/80 shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── GALLERY ── */}
        <div id="hope-gallery" className="mb-24 scroll-mt-28">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <i className="bx bx-image-alt text-teal-500" />
            <span>{isAr ? "معرض الصور" : "Screenshots Gallery"}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(project.details?.images || []).map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(img)}
                className="relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200 dark:border-white/10 group shadow-sm"
              >
                <img
                  src={img}
                  alt={`HOPE Screen ${i + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <i className="bx bx-expand text-white text-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[10002] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 border border-white/20 hover:border-teal-500 hover:bg-teal-500 transition-all rounded-full flex items-center justify-center text-white text-xl cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <i className="bx bx-x"></i>
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              src={selectedImage}
              alt="Expanded HOPE screenshot"
              className="max-w-[90vw] max-h-[88vh] object-contain rounded-2xl shadow-[0_0_80px_rgba(20,184,166,0.2)] border border-teal-500/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HopeDetails;
