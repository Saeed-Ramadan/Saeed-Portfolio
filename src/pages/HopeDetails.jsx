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

const HopeDetails = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const project = getProjectById("hope");
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const heroRef = useRef(null);

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

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const featureIcons = [
    "bx-user-plus",
    "bx-news",
    "bx-bot",
    "bx-bar-chart-alt-2",
  ];
  const featureGradients = [
    "from-teal-500/20 to-cyan-500/10",
    "from-indigo-500/20 to-blue-500/10",
    "from-violet-500/20 to-purple-500/10",
    "from-amber-500/20 to-orange-500/10",
  ];
  const featureBorderColors = [
    "group-hover:border-teal-500/50",
    "group-hover:border-indigo-500/50",
    "group-hover:border-violet-500/50",
    "group-hover:border-amber-500/50",
  ];
  const featureIconColors = [
    "group-hover:bg-teal-500",
    "group-hover:bg-indigo-500",
    "group-hover:bg-violet-500",
    "group-hover:bg-amber-500",
  ];

  return (
    <div
      className="min-h-screen relative bg-body overflow-x-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* ── Ambient Background ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-indigo-500/8 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* ── Sticky Nav ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-2xl bg-body/60 border-b border-white/5">
        <Link
          to="/"
          className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-teal-500/50 rounded-2xl text-[11px] font-black uppercase tracking-widest text-title hover:text-teal-400 transition-all"
        >
          <i
            className={`bx bx-left-arrow-alt text-lg transition-transform ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:-translate-x-1"}`}
          ></i>
          <span>{t("nav.home") || "Back"}</span>
        </Link>

        {/* Floating section pills */}
        <div className="hidden md:flex items-center gap-2 p-1 bg-white/5 border border-white/5 rounded-full">
          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveSection(i);
                scrollToSection(s.id);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                activeSection === i
                  ? "bg-teal-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                  : "text-text hover:text-teal-400"
              }`}
            >
              <i className={`bx ${s.icon}`}></i>
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-teal-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] hover:scale-105 transition-all"
        >
          <span>{t("portfolio.projectDetails.liveDemo", "Live Demo")}</span>
          <i className="bx bx-link-external"></i>
        </a>
      </div>

      {/* ── Cinematic Hero ── */}
      <div ref={heroRef} className="relative h-[100vh] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src={project.details?.heroImage || project.img}
            alt="HOPE"
            className="w-full h-full object-cover object-top brightness-50"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-body via-body/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-body/60 via-transparent to-transparent" />

        {/* Teal scanline glow */}
        <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-teal-500/30 to-transparent blur-sm" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col items-start justify-end px-8 md:px-20 pb-24 max-w-[1400px] mx-auto"
        >
          {/* Graduation badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-500/40 rounded-full backdrop-blur-xl">
              <i className="bx bx-medal text-teal-400 text-lg"></i>
              <span className="text-[10px] font-black uppercase tracking-[3px] text-teal-400">
                {isAr ? "مشروع التخرج" : "Graduation Project"}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
              <i className="bx bx-user-check text-title/60 text-lg"></i>
              <span className="text-[10px] font-black uppercase tracking-[3px] text-title/60">
                {isAr
                  ? "قائد المشروع ومطور Front End"
                  : "Project Leader & Front End Dev"}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[5rem] md:text-[10rem] font-black tracking-tighter italic leading-[0.85] text-white mb-8"
          >
            <span className="bg-linear-to-r from-teal-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              HOPE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="max-w-2xl text-white/60 font-bold italic text-lg leading-relaxed border-l-4 border-teal-500/50 pl-6"
          >
            {isAr
              ? "منصة اجتماعية تعمل بالذكاء الاصطناعي للمساعدة في العثور على الأشخاص المفقودين"
              : "An AI-powered social platform helping families find missing persons"}
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="w-[1px] h-16 bg-linear-to-b from-transparent via-teal-500 to-transparent animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[4px] text-teal-500/60">
              {isAr ? "اسكرول" : "Scroll"}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        {/* ── Stats Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-10 mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/3 border border-white/10 hover:border-teal-500/40 rounded-3xl p-6 text-center backdrop-blur-xl overflow-hidden transition-all hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-linear-to-b from-teal-500/0 group-hover:from-teal-500/10 to-transparent transition-all duration-500" />
              <div className="text-4xl md:text-5xl font-black text-teal-400 mb-2 italic relative z-10">
                {stat.num}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[2px] text-title/50 relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ── Left: Overview + Features ── */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <motion.div
              id="hope-overview"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white/3 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/8 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-teal-500/20 border border-teal-500/30 rounded-2xl flex items-center justify-center">
                    <i className="bx bx-info-circle text-teal-400 text-xl"></i>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-title italic">
                    {t("portfolio.projectDetails.overview", "Overview")}
                  </h2>
                </div>
                <p className="text-sm md:text-base text-text font-bold opacity-80 leading-relaxed border-l-2 border-teal-500/30 pl-6">
                  {t("portfolio.hope.details.overview")}
                </p>
              </div>
            </motion.div>

            {/* Key Features */}
            <div id="hope-features">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-black text-title italic mb-8 flex items-center gap-3 px-2"
              >
                <i className="bx bx-star text-teal-400"></i>
                {t("portfolio.projectDetails.keyFeatures", "Key Features")}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {(project.details?.features || []).map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group relative bg-linear-to-br ${featureGradients[idx]} bg-white/3 border border-white/10 ${featureBorderColors[idx]} rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                      <i
                        className={`bx ${featureIcons[idx]} text-[8rem] text-white`}
                      ></i>
                    </div>
                    <div
                      className={`w-12 h-12 bg-white/10 ${featureIconColors[idx]} rounded-2xl flex items-center justify-center mb-5 transition-colors relative z-10`}
                    >
                      <i
                        className={`bx ${feature.icon || featureIcons[idx]} text-2xl text-white`}
                      ></i>
                    </div>
                    <h4 className="text-lg font-black text-title mb-3 italic relative z-10">
                      {t(feature.titleKey)}
                    </h4>
                    <p className="text-sm text-text font-bold opacity-70 leading-relaxed relative z-10">
                      {t(feature.descKey)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Tech Stack (Sticky) ── */}
          <div id="hope-stack" className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-24 bg-white/3 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-teal-500/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-teal-500/20 border border-teal-500/30 rounded-2xl flex items-center justify-center">
                    <i className="bx bx-layer text-teal-400 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-black text-title italic">
                    {t("portfolio.projectDetails.techStack", "Tech Stack")}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.techs.map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="group px-4 py-2.5 bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10 rounded-xl transition-all cursor-default"
                    >
                      <span className="text-[11px] font-black uppercase tracking-tight text-title/80 group-hover:text-teal-300 transition-colors">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Project role card */}
                <div className="mt-8 p-5 bg-teal-500/10 border border-teal-500/20 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <i className="bx bx-crown text-teal-400 text-xl"></i>
                    <span className="text-[11px] font-black uppercase tracking-[2px] text-teal-400">
                      {isAr ? "دوري في المشروع" : "My Role"}
                    </span>
                  </div>
                  <p className="text-sm font-black text-title">
                    {isAr ? "قائد المشروع" : "Project Leader"}
                  </p>
                  <p className="text-xs text-text/60 font-bold mt-1">
                    {isAr
                      ? "مطور واجهة مستخدم (Front End)"
                      : "Frontend Developer"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Image Gallery ── */}
        {project.details?.images?.length > 0 && (
          <motion.div
            id="hope-gallery"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-4xl md:text-6xl font-black text-title italic tracking-tighter text-center mb-4">
              {t("portfolio.projectDetails.galleryPrefix", "Project")}{" "}
              <span className="text-teal-400">
                {t("portfolio.projectDetails.gallerySuffix", "Gallery")}
              </span>
            </h2>
            <p className="text-center text-text/50 font-bold text-sm mb-16">
              {isAr
                ? `${project.details.images.length} لقطة شاشة — اضغط لفتح`
                : `${project.details.images.length} screenshots — click to expand`}
            </p>

            {/* Masonry-style grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {project.details.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 6) * 0.08 }}
                  onClick={() => setSelectedImage(img)}
                  className="group relative break-inside-avoid rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/50 cursor-pointer shadow-xl transition-all hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)] hover:-translate-y-1"
                >
                  <img
                    src={img}
                    alt={`HOPE screenshot ${idx + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-teal-500/10 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/0 group-hover:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 border border-white/20">
                      <i className="bx bx-expand text-white text-xl"></i>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-body/95 backdrop-blur-xl p-4 md:p-8"
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 border border-white/20 hover:border-teal-500 hover:bg-teal-500 transition-all rounded-full flex items-center justify-center text-white text-xl"
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
