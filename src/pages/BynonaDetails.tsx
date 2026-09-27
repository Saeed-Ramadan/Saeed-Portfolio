import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { getProjectById } from "../data/projectsData";
import { ProjectDetailHeader } from "../components/project-details/ProjectDetailHeader";
import { ProjectLightbox } from "../components/project-details/ProjectLightbox";
import { useProjectLightbox } from "../hooks/useProjectLightbox";
import { SpotlightCard } from "../components/common/SpotlightCard";

// RATIONALE: Redesigned Bynona Details page adhering to the unified portfolio design tokens (bg-body, text-title, SpotlightCard).
// Preserves e-commerce specifications, tiered pricing architecture, state management docs, and the complete 20+ interface screenshot gallery.
const BynonaDetails: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const project = getProjectById("bymona");
  const { selectedImage, openLightbox, closeLightbox } = useProjectLightbox();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  const accentColor = project.theme.primary || "#eab308";
  const features = project.details?.features || [];
  const images = project.details?.images || [];

  return (
    <div className="min-h-screen bg-body text-text font-sans transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic Ambient Background Glow - Warm Gold */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 end-1/4 w-[500px] h-[500px] bg-yellow-500/10 dark:bg-yellow-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 start-10 w-[450px] h-[450px] bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-[130px] pointer-events-none" />
      </div>

      {/* Unified Sticky Header */}
      <ProjectDetailHeader
        liveLink={project.link}
        liveLabelKey="portfolio.projectDetails.liveDemo"
        accentColor={accentColor}
      />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 relative z-10">
        {/* ── HERO BANNER ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Badges row: Category & Company Affiliation */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-xs text-xs font-bold tracking-wider text-yellow-600 dark:text-yellow-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <span>{project.theme.label || t(`portfolio.${project.category}`)}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                <i className="bx bx-buildings text-sm" />
                <span>{t("portfolio.affiliation.pyramidDetail")}</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-title leading-[1.15]">
              {t(project.titleKey)}
            </h1>

            {/* Overview Paragraph */}
            <p className="text-base sm:text-lg text-textLight leading-relaxed border-s-3 border-yellow-500 ps-4">
              {project.details?.overviewKey && t(project.details.overviewKey)}
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] text-xs font-semibold text-title shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div
              onClick={() => openLightbox(project.details?.heroImage || project.img)}
              className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.02] shadow-xl group cursor-pointer"
            >
              <img
                src={project.details?.heroImage || project.img}
                alt="Bynona E-Commerce Showcase"
                className="w-full h-auto object-cover max-h-[460px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-11 h-11 rounded-full bg-white/20 border border-white/30 text-white flex items-center justify-center text-xl">
                  <i className="bx bx-expand" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── KEY ARCHITECTURE & FEATURES ── */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 text-xl">
              <i className="bx bx-star" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-title">
              {t("portfolio.projectDetails.keyFeatures")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature, idx) => (
              <SpotlightCard
                key={idx}
                className="p-6 transition-all group"
                spotlightColor="rgba(234, 179, 8, 0.15)"
              >
                <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 text-2xl mb-4 group-hover:scale-105 transition-transform">
                  <i className={`bx ${feature.icon}`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-title mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-xs sm:text-sm text-textLight leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 text-xl">
                <i className="bx bx-image-alt" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-title">
                  {t("portfolio.projectDetails.gallery")}
                </h2>
                <p className="text-xs text-textLight mt-0.5">
                  {isAr ? "استعرض لقطات الشاشة المتنوعة للتطبيق بأنماطه المختلفة" : "Browse comprehensive interface screenshots across different modes"}
                </p>
              </div>
            </div>
            <span className="text-xs font-code font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] text-textLight">
              {images.length} {isAr ? "صورة" : "Screens"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                onClick={() => openLightbox(img)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200/80 dark:border-white/[0.08] bg-white/40 dark:bg-white/[0.02] shadow-xs"
              >
                <img
                  src={img}
                  alt={`Bynona screen ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 text-white flex items-center justify-center text-xl">
                    <i className="bx bx-expand" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Reusable Lightbox */}
      <ProjectLightbox
        imageSrc={selectedImage}
        onClose={closeLightbox}
        accentColor={accentColor}
      />
    </div>
  );
};

export default BynonaDetails;
