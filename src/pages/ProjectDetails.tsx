import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { getProjectById } from "../data/projectsData";
import { ProjectDetailHeader } from "../components/project-details/ProjectDetailHeader";
import { ProjectLightbox } from "../components/project-details/ProjectLightbox";
import { useProjectLightbox } from "../hooks/useProjectLightbox";
import { SpotlightCard } from "../components/common/SpotlightCard";

// RATIONALE: Redesigned generic ProjectDetails page supporting all dynamic project routes (SR-Gym, Pizza Co, Personal Site).
// Implements unified portfolio aesthetics (bg-body, SpotlightCard, ProjectDetailHeader, ProjectLightbox) with full i18n & RTL support.
const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const project = getProjectById(id);
  const { selectedImage, openLightbox, closeLightbox } = useProjectLightbox();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-body text-text p-6">
        <SpotlightCard className="p-8 sm:p-12 text-center max-w-md w-full">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center text-3xl mx-auto mb-4">
            <i className="bx bx-error-circle" />
          </div>
          <h2 className="text-2xl font-bold text-title mb-2">
            {isAr ? "المشروع غير موجود" : "Project Not Found"}
          </h2>
          <p className="text-xs sm:text-sm text-textLight mb-6">
            {isAr
              ? "تعذر العثور على بيانات هذا المشروع. ربما تم تغيير مساره أو إزالته."
              : "The requested project could not be found or may have been relocated."}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-sm"
          >
            <i className={`bx bx-left-arrow-alt text-base ${isAr ? "rotate-180" : ""}`} />
            <span>{t("nav.home")}</span>
          </Link>
        </SpotlightCard>
      </div>
    );
  }

  const theme = project.theme || {
    primary: "#6366f1",
    glow: "rgba(99, 102, 241, 0.35)",
    bgGlow: "rgba(99, 102, 241, 0.08)",
    label: project.category,
    icon: "bx-code-alt",
  };

  const accentColor = theme.primary;
  const features = project.details?.features || [];
  const images = project.details?.images || [];

  return (
    <div className="min-h-screen bg-body text-text font-sans transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute top-0 end-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ backgroundColor: accentColor }}
        />
        <div
          className="absolute top-1/2 start-10 w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none opacity-15"
          style={{ backgroundColor: accentColor }}
        />
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
        <section className="mb-16 pt-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Badges row: Category & Affiliation */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.04]">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: accentColor }}
                >
                  {theme.label || t(`portfolio.${project.category}`)}
                </span>
              </div>

              {project.affiliation && (
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                    project.affiliation.type === "company"
                      ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30"
                      : project.affiliation.type === "grad"
                      ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30"
                      : project.affiliation.type === "freelance"
                      ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30"
                      : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30"
                  }`}
                >
                  <i className={`bx ${project.affiliation.icon} text-sm`} />
                  <span>{t(project.affiliation.detailKey)}</span>
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-title leading-[1.15]">
              {t(project.titleKey) || project.titleFallback}
            </h1>

            {/* Overview */}
            <p
              className="text-base sm:text-lg text-textLight max-w-3xl leading-relaxed border-s-3 ps-4"
              style={{ borderColor: accentColor }}
            >
              {project.details?.overviewKey
                ? t(project.details.overviewKey)
                : t(project.descKey)}
            </p>
          </motion.div>

          {/* Hero Image Showcase inside Sleek Browser Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.1] bg-slate-900 shadow-2xl"
          >
            {/* Browser Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-white/[0.04] border-b border-slate-200/80 dark:border-white/[0.08] select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-md mx-3 px-3 py-1 rounded-lg bg-white/80 dark:bg-white/[0.06] border border-slate-200/60 dark:border-white/[0.08] text-[11px] font-mono text-textLight/70 flex items-center justify-between">
                <span className="truncate">{project.link}</span>
                <i className="bx bx-lock-alt text-xs text-emerald-500 shrink-0 ml-1" />
              </div>

              {/* Quick Launch CTA */}
              <div className="flex items-center gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-md text-[11px] font-bold text-white shadow-xs transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accentColor }}
                >
                  <span>{t("portfolio.projectDetails.liveDemo")}</span>
                  <i className="bx bx-link-external text-xs" />
                </a>
              </div>
            </div>

            {/* Viewport Frame */}
            <div
              className="relative group cursor-pointer overflow-hidden bg-slate-950"
              onClick={() => openLightbox(project.details?.heroImage || project.img)}
            >
              <img
                src={project.details?.heroImage || project.img}
                alt={t(project.titleKey) || project.titleFallback}
                className="w-full h-auto max-h-[580px] object-cover object-top transition-transform duration-700 ease-apple group-hover:scale-[1.01]"
              />

              {/* Hover inspect overlay (STRICTLY CONFINED INSIDE THIS RELATIVE CONTAINER) */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 border border-white/30 text-white text-xs font-bold shadow-lg">
                  <i className="bx bx-expand text-base" />
                  <span>{isAr ? "عرض لقطة الشاشة بالحجم الكامل" : "Click to View Full Size"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── CONTENT GRID: Features & Tech Stack ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          {/* Features Column */}
          <div className={`${features.length > 0 ? "lg:col-span-8" : "lg:col-span-7"} space-y-6`}>
            {features.length > 0 ? (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      backgroundColor: `${accentColor}15`,
                      color: accentColor,
                    }}
                  >
                    <i className="bx bx-star" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-title">
                    {t("portfolio.projectDetails.keyFeatures")}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feat, idx) => (
                    <SpotlightCard
                      key={idx}
                      className="p-5"
                      spotlightColor={`${accentColor}20`}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                        style={{
                          backgroundColor: `${accentColor}15`,
                          color: accentColor,
                        }}
                      >
                        <i className={`bx ${feat.icon}`} />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-title mb-1.5">
                        {t(feat.titleKey)}
                      </h3>
                      <p className="text-xs text-textLight leading-relaxed">
                        {t(feat.descKey)}
                      </p>
                    </SpotlightCard>
                  ))}
                </div>
              </div>
            ) : (
              <SpotlightCard className="p-6 sm:p-8" spotlightColor={`${accentColor}15`}>
                <h3 className="text-lg font-bold text-title mb-3">
                  {t("portfolio.projectDetails.overview")}
                </h3>
                <p className="text-sm text-textLight leading-relaxed">
                  {t(project.descKey)}
                </p>
              </SpotlightCard>
            )}
          </div>

          {/* Tech Stack Column */}
          <div className={`${features.length > 0 ? "lg:col-span-4" : "lg:col-span-5"}`}>
            <SpotlightCard className="p-6 sticky top-24" spotlightColor={`${accentColor}15`}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}
                >
                  <i className="bx bx-layer" />
                </div>
                <h3 className="text-lg font-bold text-title">
                  {t("portfolio.projectDetails.techStack")}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] text-xs font-semibold text-title"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* ── IMAGE GALLERY (If available) ── */}
        {images.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}
                >
                  <i className="bx bx-image-alt" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-title">
                    {t("portfolio.projectDetails.gallery")}
                  </h2>
                  <p className="text-xs text-textLight mt-0.5">
                    {isAr ? "اضغط على أي صورة لتكبيرها واستعراضها" : "Click any image to enlarge and preview"}
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
                    alt={`Project screen ${idx + 1}`}
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
        )}
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

export default ProjectDetails;
