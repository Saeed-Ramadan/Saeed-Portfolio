import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { getProjectById } from "../data/projectsData";
import { ProjectDetailHeader } from "../components/project-details/ProjectDetailHeader";
import { ProjectLightbox } from "../components/project-details/ProjectLightbox";
import { useProjectLightbox } from "../hooks/useProjectLightbox";
import { SpotlightCard } from "../components/common/SpotlightCard";

// RATIONALE: Redesigned HOPE Platform details page adhering to unified design tokens (bg-body, text-title, SpotlightCard).
// Preserves all graduation project achievements, sub-modules (Academy & Special Care), metrics, and screenshot gallery.
const HopeDetails: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const project = getProjectById("hope");
  const { selectedImage, openLightbox, closeLightbox } = useProjectLightbox();
  const [activeSection, setActiveSection] = useState<string>("hope-overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  const accentColor = project.theme.primary || "#14b8a6";

  const stats = [
    { num: "23+", label: isAr ? "ميزة وظيفية" : "Core Features" },
    { num: "5+", label: isAr ? "خوارزميات ذكاء اصطناعي" : "AI Algorithms" },
    { num: "1st", label: isAr ? "مشروع التخرج" : "Graduation Project" },
    { num: "⭐", label: isAr ? "قائد المشروع" : "Project Lead" },
  ];

  const sections = [
    { id: "hope-overview", label: isAr ? "نبذة" : "Overview", icon: "bx-info-circle" },
    { id: "hope-features", label: isAr ? "المميزات" : "Features", icon: "bx-star" },
    { id: "hope-stack", label: isAr ? "التقنيات" : "Stack", icon: "bx-layer" },
    { id: "hope-gallery", label: isAr ? "معرض الصور" : "Gallery", icon: "bx-image-alt" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-body text-text font-sans transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 start-1/4 w-[600px] h-[600px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 end-10 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />
      </div>

      {/* Unified Sticky Header */}
      <ProjectDetailHeader
        liveLink={project.link}
        liveLabelKey="portfolio.projectDetails.liveDemo"
        accentColor={accentColor}
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 relative z-10">
        {/* ── HERO BANNER ── */}
        <section className="mb-16 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
                <i className="bx bx-graduation text-sm" />
                <span>{t("portfolio.affiliation.gradDetail")}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                ⭐ {isAr ? "تقدير ممتاز مع مرتبة الشرف (A+)" : "Grade A+ with Honours"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                🤖 {isAr ? "منصة ذكاء اصطناعي وخدمة مجتمعية" : "AI & Community Service"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-title leading-[1.15]">
              HOPE{" "}
              <span className="bg-linear-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-textLight max-w-3xl leading-relaxed">
              {isAr
                ? "منصة خدمة اجتماعية متكاملة مدعومة بالذكاء الاصطناعي لإيجاد المفقودين عبر تقنية التعرف على الوجوه، إدارة البلاغات المجتمعية، وتوفير بيئة تعليمية وتأهيلية."
                : "An all-in-one AI-powered social ecosystem combining facial recognition search for missing persons, real-time community reporting, interactive coding, and specialized support."}
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              {stats.map((st, i) => (
                <SpotlightCard
                  key={i}
                  className="p-4 sm:p-5 text-center"
                  spotlightColor="rgba(20, 184, 166, 0.15)"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400 block mb-1">
                    {st.num}
                  </span>
                  <span className="text-[11px] font-semibold text-textLight uppercase tracking-wider">
                    {st.label}
                  </span>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── OVERVIEW SECTION ── */}
        <section id="hope-overview" className="mb-20 scroll-mt-24">
          <SpotlightCard
            className="p-6 sm:p-10"
            spotlightColor="rgba(20, 184, 166, 0.12)"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 text-xl">
                <i className="bx bx-info-circle" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-title">
                {t("portfolio.projectDetails.overview")}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-textLight leading-relaxed mb-8">
              {project.details?.overviewKey && t(project.details.overviewKey)}
            </p>

            {/* Sub-projects list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-200/80 dark:border-white/[0.06] bg-slate-50/50 dark:bg-white/[0.02]">
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold mb-2">
                  <i className="bx bx-code-alt text-xl" />
                  <span>HOPE Academy</span>
                </div>
                <p className="text-xs text-textLight leading-relaxed">
                  {isAr
                    ? "منصة تعليم برمجة تفاعلية للأطفال والشباب مع محرر كود لايف وتقييم بالذكاء الاصطناعي."
                    : "Interactive coding learning platform for youth with live code runner and AI grading."}
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200/80 dark:border-white/[0.06] bg-slate-50/50 dark:bg-white/[0.02]">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold mb-2">
                  <i className="bx bx-heart text-xl" />
                  <span>HOPE Special Care</span>
                </div>
                <p className="text-xs text-textLight leading-relaxed">
                  {isAr
                    ? "وحدة خاصة لدعم وتأهيل الأطفال ذوي الاحتياجات من خلال ألعاب وتدريبات تفاعلية."
                    : "Specialized module supporting children with special needs via targeted interactive games."}
                </p>
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* ── FEATURES SECTION ── */}
        <section id="hope-features" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 text-xl">
              <i className="bx bx-star" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-title">
              {t("portfolio.projectDetails.keyFeatures")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(project.details?.features || []).map((feat, idx) => (
              <SpotlightCard
                key={idx}
                className="p-6 transition-all group"
                spotlightColor="rgba(20, 184, 166, 0.15)"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 text-2xl mb-4 group-hover:scale-105 transition-transform">
                  <i className={`bx ${feat.icon}`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-title mb-2 group-hover:text-teal-500 transition-colors">
                  {t(feat.titleKey)}
                </h3>
                <p className="text-xs sm:text-sm text-textLight leading-relaxed">
                  {t(feat.descKey)}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section id="hope-stack" className="mb-20 scroll-mt-24">
          <SpotlightCard className="p-6 sm:p-8" spotlightColor="rgba(20, 184, 166, 0.12)">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 text-xl">
                <i className="bx bx-layer" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-title">
                {t("portfolio.projectDetails.techStack")}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] text-xs font-semibold text-title shadow-2xs hover:border-teal-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </section>

        {/* ── GALLERY ── */}
        <section id="hope-gallery" className="mb-16 scroll-mt-24">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 text-xl">
                <i className="bx bx-image-alt" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-title">
                  {t("portfolio.projectDetails.gallery")}
                </h2>
                <p className="text-xs text-textLight mt-0.5">
                  {isAr ? "اضغط على أي صورة لتكبيرها واستعراضها بدقة عالية" : "Click any screenshot to inspect in full resolution"}
                </p>
              </div>
            </div>
            <span className="text-xs font-code font-bold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] text-textLight">
              {project.details?.images?.length || 0} {isAr ? "صورة" : "Screens"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(project.details?.images || []).map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                onClick={() => openLightbox(img)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200/80 dark:border-white/[0.08] bg-white/40 dark:bg-white/[0.02] shadow-xs"
              >
                <img
                  src={img}
                  alt={`HOPE Screenshot ${i + 1}`}
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

export default HopeDetails;
