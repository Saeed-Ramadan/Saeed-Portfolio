import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { getProjectById } from "../data/projectsData";
import { ProjectDetailHeader } from "../components/project-details/ProjectDetailHeader";
import { ProjectLightbox } from "../components/project-details/ProjectLightbox";
import { useProjectLightbox } from "../hooks/useProjectLightbox";
import { SpotlightCard } from "../components/common/SpotlightCard";

// RATIONALE: Dedicated CiHost Hospitality Cloud showcase page engineered for Modern Digital Solutions.
// Implements unified portfolio tokens (bg-body, text-title, SpotlightCard), deep bilingual localization (AR/EN),
// interactive module highlights, AI Assistant showcase, and 13 comprehensive production screenshots.
const CiHostDetails: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const project = getProjectById("cihost");
  const { selectedImage, openLightbox, closeLightbox } = useProjectLightbox();
  const [activeSection, setActiveSection] = useState<string>("cihost-overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  const accentColor = project.theme.primary || "#0284c7";
  const features = project.details?.features || [];
  const images = project.details?.images || [];

  const stats = [
    { num: "4+", label: isAr ? "قطاعات سياحية مغطاة" : "Hospitality Sectors" },
    { num: "100%", label: isAr ? "تزامن قنوات OTA لحظي" : "Zero Overbooking Sync" },
    { num: "24/7", label: isAr ? "مساعد ذكاء اصطناعي" : "AI Hospitality Assistant" },
    { num: "Cloud", label: isAr ? "نظام سحابي مرن وآمن" : "Native Cloud PMS" },
  ];

  const sections = [
    { id: "cihost-overview", label: isAr ? "نبذة" : "Overview", icon: "bx-info-circle" },
    { id: "cihost-features", label: isAr ? "المميزات" : "Features", icon: "bx-star" },
    { id: "cihost-sectors", label: isAr ? "القطاعات" : "Sectors", icon: "bx-buildings" },
    { id: "cihost-ai", label: isAr ? "المساعد الذكي" : "AI Assistant", icon: "bx-bot" },
    { id: "cihost-gallery", label: isAr ? "معرض الصور" : "Gallery", icon: "bx-image-alt" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sectors = [
    {
      titleAr: "الفنادق والمنتجعات السياحية",
      titleEn: "Hotels & Resorts",
      descAr: "إدارة متكاملة للغرف والأجنحة، وخدمات الغرف، والحجوزات المعقدة مع مصفوفة غرف حية.",
      descEn: "End-to-end room matrix, suite allocations, room service bills, and live multi-room dispatch.",
      icon: "bx-hotel",
    },
    {
      titleAr: "الشقق المفروشة والشاليهات",
      titleEn: "Furnished Apartments & Chalets",
      descAr: "عقود إيجار دورية، وحساب استهلاك المرافق، وجدولة صيانة دورية بين المستأجرين.",
      descEn: "Periodic leasing contracts, utility usage tracking, and automated turnover maintenance.",
      icon: "bx-home-heart",
    },
    {
      titleAr: "النزل وبيوت الضيافة (Hostels)",
      titleEn: "Hostels & Guesthouses",
      descAr: "إدارة مرنة للأسرة المشتركة، وتسجيل الوصول السريع، والأنشطة الاجتماعية للنزلاء.",
      descEn: "Flexible shared dorm beds allocation, rapid check-ins, and guest activities management.",
      icon: "bx-bed",
    },
    {
      titleAr: "الفنادق العائمة والرحلات النيلية",
      titleEn: "Floating Hotels & Nile Cruises",
      descAr: "إدارة كبائن السفن النيلية، وجداول الرحلات السياحية، ووجبات الإقامة الكاملة.",
      descEn: "Ship cabin dispatch, cruise itineraries scheduling, and full-board dining synchronization.",
      icon: "bx-anchor",
    },
  ];

  return (
    <div className="min-h-screen bg-body text-text font-sans transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic Ambient Background Glow - Azure & Cyan */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 end-1/4 w-[600px] h-[600px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 start-10 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />
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
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-xs font-bold text-sky-600 dark:text-sky-400">
                <i className="bx bx-hotel text-sm" />
                <span>Hospitality Cloud</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                <i className="bx bx-buildings text-sm" />
                <span>{t("portfolio.affiliation.modernDetail")}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <i className="bx bx-bot text-sm" />
                <span>{isAr ? "مساعد ذكي تفاعلي" : "AI Assistant"}</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-title leading-[1.15]">
              {t(project.titleKey)}
            </h1>

            {/* Overview */}
            <p className="text-base sm:text-lg text-textLight leading-relaxed border-s-3 border-sky-500 ps-4">
              {project.details?.overviewKey && t(project.details.overviewKey)}
            </p>

            {/* Tech Chips */}
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
                alt="CiHost Hospitality Cloud Showcase"
                className="w-full h-auto object-cover max-h-[460px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-11 h-11 rounded-full bg-white/20 border border-white/30 text-white flex items-center justify-center text-xl">
                  <i className="bx bx-expand" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── STATS ROW ── */}
        <section className="mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {stats.map((st, i) => (
              <SpotlightCard
                key={i}
                className="p-5 text-center"
                spotlightColor="rgba(2, 132, 199, 0.15)"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400 block mb-1">
                  {st.num}
                </span>
                <span className="text-[11px] font-semibold text-textLight uppercase tracking-wider">
                  {st.label}
                </span>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ── OVERVIEW & ARCHITECTURE ── */}
        <section id="cihost-overview" className="mb-20 scroll-mt-24">
          <SpotlightCard className="p-6 sm:p-10" spotlightColor="rgba(2, 132, 199, 0.12)">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 text-xl">
                <i className="bx bx-info-circle" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-title">
                {t("portfolio.projectDetails.overview")}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-textLight leading-relaxed mb-8">
              {isAr
                ? "تم بناء منصة CiHost بأحدث معايير هندسة الواجهات الأمامية (SPA Architecture) باستخدام React 19 و TypeScript و Tailwind CSS v4، مع تكامل كامل مع TanStack Query لإدارة حالة الخادم والتخزين المؤقت، و Zustand لإدارة الحالة اللحظية. يدعم النظام كامل تدفق العمليات الفندقية بدءاً من الحجز الإلكتروني عبر قنوات OTA العالمية وصولاً إلى تسجيل المغادرة وإصدار الفواتير الإلكترونية المتوافقة."
                : "CiHost is engineered as a high-performance modern SPA using React 19, TypeScript, and Tailwind CSS v4. It utilizes TanStack Query for resilient server-state caching and Zustand for fluid client stores. The architecture automates end-to-end hospitality operations from OTA reservation ingestion to dining POS settlement and regulatory tax invoicing."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-slate-200/80 dark:border-white/[0.06] bg-slate-50/50 dark:bg-white/[0.02]">
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold mb-2">
                  <i className="bx bx-globe text-xl" />
                  <span>{isAr ? "ثنائي اللغة بالكامل" : "Native Bilingual RTL/LTR"}</span>
                </div>
                <p className="text-xs text-textLight leading-relaxed">
                  {isAr
                    ? "دعم كامل للغتين العربية والإنجليزية مع محاذاة طباعية دقيقة تعكس أفضل تجارب الاستخدام."
                    : "Zero-layout shift bidirectional layout switching with optimized Arabic and Latin typography."}
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200/80 dark:border-white/[0.06] bg-slate-50/50 dark:bg-white/[0.02]">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold mb-2">
                  <i className="bx bx-cloud-upload text-xl" />
                  <span>{isAr ? "استضافة سحابية خفيفة" : "Pure Cloud SaaS"}</span>
                </div>
                <p className="text-xs text-textLight leading-relaxed">
                  {isAr
                    ? "تشغيل سحابي دون الحاجة لسيرفرات محلية باهظة التكلفة، مع أمان مشفر وتحديثات فورية."
                    : "No on-premise hardware required; instant cloud access with encrypted data transmission."}
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200/80 dark:border-white/[0.06] bg-slate-50/50 dark:bg-white/[0.02]">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                  <i className="bx bx-shield-quarter text-xl" />
                  <span>{isAr ? "درجة أمان واستقرار 99.9%" : "99.9% Uptime & SLA"}</span>
                </div>
                <p className="text-xs text-textLight leading-relaxed">
                  {isAr
                    ? "بنية تحتية مصممة للعمل في بيئات الضيافة الحرجة على مدار الساعة دون انقطاع."
                    : "Mission-critical hospitality infrastructure designed for round-the-clock uptime."}
                </p>
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* ── CORE SYSTEM MODULES & FEATURES ── */}
        <section id="cihost-features" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 text-xl">
              <i className="bx bx-star" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-title">
                {t("portfolio.projectDetails.keyFeatures")}
              </h2>
              <p className="text-xs text-textLight mt-0.5">
                {isAr ? "أهم وحدات المنصة التي تم تطويرها لأتمتة عمليات الفنادق" : "Core architectural units engineered to automate hospitality workflows"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, idx) => (
              <SpotlightCard
                key={idx}
                className="p-6 transition-all group flex flex-col justify-between"
                spotlightColor="rgba(2, 132, 199, 0.15)"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 text-2xl mb-4 group-hover:scale-105 transition-transform">
                    <i className={`bx ${feat.icon}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-title mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {t(feat.titleKey)}
                  </h3>
                  <p className="text-xs sm:text-sm text-textLight leading-relaxed">
                    {t(feat.descKey)}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ── HOSPITALITY SECTORS ── */}
        <section id="cihost-sectors" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 text-xl">
              <i className="bx bx-buildings" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-title">
                {isAr ? "القطاعات السياحية التي تغطيها المنصة" : "Target Hospitality Sectors"}
              </h2>
              <p className="text-xs text-textLight mt-0.5">
                {isAr ? "مرونة معمارية تتكيف مع المنشآت الفندقية بمختلف أنماطها" : "Architectural flexibility adapting to diverse lodging business models"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((sec, idx) => (
              <SpotlightCard
                key={idx}
                className="p-6 transition-all group flex flex-col justify-between"
                spotlightColor="rgba(6, 182, 212, 0.15)"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-2xl mb-4 group-hover:scale-105 transition-transform">
                    <i className={`bx ${sec.icon}`} />
                  </div>
                  <h3 className="text-base font-bold text-title mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {isAr ? sec.titleAr : sec.titleEn}
                  </h3>
                  <p className="text-xs text-textLight leading-relaxed">
                    {isAr ? sec.descAr : sec.descEn}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ── AI HOSPITALITY ASSISTANT HIGHLIGHT ── */}
        <section id="cihost-ai" className="mb-20 scroll-mt-24">
          <SpotlightCard className="p-6 sm:p-10 border-emerald-500/30" spotlightColor="rgba(16, 185, 129, 0.15)">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <i className="bx bx-bot text-sm" />
                  <span>{isAr ? "الذكاء الاصطناعي في خدمة الضيافة" : "Next-Gen AI Assistant"}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-title">
                  {isAr ? "مساعد CiHost الذكي التفاعلي" : "Interactive AI Hospitality Agent"}
                </h3>

                <p className="text-sm sm:text-base text-textLight leading-relaxed">
                  {isAr
                    ? "تم تزويد المنصة بويدجت محادثة ذكي تفاعلي يجيب على استفسارات النزلاء وإدارات الفنادق على مدار الساعة. يقدم المساعد توصيات فورية حول حالة الغرف، وأفضل أوقات الحجز، وحسابات الأسعار المتغيرة وفق نسب الإشغال ومواسم الذروة."
                    : "Equipped with an in-app conversational AI agent assisting hotel staff and guests 24/7. The agent provides real-time occupancy guidance, optimal booking windows, and dynamic rate calculation based on peak seasonal demand."}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-lg border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] text-xs font-semibold text-title">
                    {isAr ? "ردود ذكية فورية" : "Instant Inquiries"}
                  </span>
                  <span className="px-3 py-1 rounded-lg border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] text-xs font-semibold text-title">
                    {isAr ? "توصيات تسعير" : "Dynamic Pricing Advice"}
                  </span>
                  <span className="px-3 py-1 rounded-lg border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] text-xs font-semibold text-title">
                    {isAr ? "تكامل سياحي" : "Guest Advisory"}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                {images.slice(9, 11).map((img, i) => (
                  <div
                    key={i}
                    onClick={() => openLightbox(img)}
                    className="relative rounded-xl overflow-hidden border border-slate-200/80 dark:border-white/[0.08] group cursor-pointer shadow-md"
                  >
                    <img
                      src={img}
                      alt={`CiHost AI Screenshot ${i + 1}`}
                      className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 text-white flex items-center justify-center text-lg">
                        <i className="bx bx-expand" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* ── COMPREHENSIVE SCREENSHOTS GALLERY ── */}
        <section id="cihost-gallery" className="mb-16 scroll-mt-24">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 text-xl">
                <i className="bx bx-image-alt" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-title">
                  {t("portfolio.projectDetails.gallery")}
                </h2>
                <p className="text-xs text-textLight mt-0.5">
                  {isAr ? "استعرض لقطات الشاشة الحية لصفحات وأقسام منصة CiHost" : "Browse live production screenshots across all CiHost sections and modules"}
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
                  alt={`CiHost screen ${idx + 1}`}
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

export default CiHostDetails;
