import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectById } from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const project = getProjectById(id);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center relative bg-body z-10 p-6">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-1/4 -left-20 w-150 h-150 bg-first/5 rounded-full blur-[160px] animate-pulse"></div>
        </div>
        <div className="text-center p-8 bg-container/30 border border-title/10 rounded-[2.5rem] backdrop-blur-3xl shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
          <h2 className="text-4xl font-black text-title mb-4">
            Project Not Found
          </h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-first text-body rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
          >
            <i className="bx bx-left-arrow-alt text-xl rtl:rotate-180"></i>
            {t("nav.home")}
          </Link>
        </div>
      </div>
    );
  }

  const hasDetails = !!project?.details;
  const theme = project?.theme || {
    primary: "var(--first-color)",
    glow: "rgba(var(--first-color-rgb), 0.35)",
    bgGlow: "rgba(var(--first-color-rgb), 0.05)",
    label: project?.category,
  };

  return (
    <div className="min-h-screen relative bg-body z-10 pt-24 pb-20">
      {/* Zenith Ambient Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div
          className="absolute top-1/4 -left-20 w-150 h-150 rounded-full blur-[160px] animate-pulse"
          style={{ backgroundColor: theme.bgGlow }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-20 w-120 h-120 rounded-full blur-[140px] animate-bounce-slow"
          style={{ backgroundColor: theme.bgGlow }}
        ></div>
      </div>

      <div className="max-w-300 mx-auto px-6 relative z-10">
        {/* Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex items-center justify-between"
        >
          <Link
            to="/"
            className="group flex items-center gap-2 px-6 py-3 bg-container/30 border border-title/10 rounded-2xl text-[12px] font-black uppercase tracking-widest text-title overflow-hidden hover:text-body transition-all active:scale-95 backdrop-blur-3xl"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.primary;
              e.currentTarget.style.borderColor = theme.primary;
              e.currentTarget.style.boxShadow = `0 10px 30px ${theme.glow}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <i className="bx bx-left-arrow-alt text-lg group-hover:-translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:translate-x-1"></i>
            <span>{t("nav.home") || "Back"}</span>
          </Link>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-body rounded-2xl text-[12px] font-black uppercase tracking-widest transition-all"
            style={{
              backgroundColor: theme.primary,
              boxShadow: `0 0 30px ${theme.glow}`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <span>{t("portfolio.projectDetails.liveDemo", "Live Demo")}</span>
            <i className="bx bx-link-external text-lg"></i>
          </a>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full h-[40vh] md:h-[60vh] rounded-[2.5rem] overflow-hidden mb-16 shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-title/10"
        >
          <img
            src={project.details?.heroImage || project.img}
            alt={t(project.titleKey) || project.titleFallback}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-body via-body/40 to-transparent"></div>

          <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start">
            <div
              className="px-5 py-2 backdrop-blur-2xl border rounded-2xl flex items-center gap-2 mb-4"
              style={{
                backgroundColor: theme.bgGlow,
                borderColor: theme.primary + "40",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: theme.primary,
                  boxShadow: `0 0 10px ${theme.primary}`,
                }}
              ></span>
              <span
                className="text-[10px] font-black uppercase tracking-[3px]"
                style={{ color: theme.primary }}
              >
                {theme.label || t(`portfolio.${project.category}`)}
              </span>
            </div>
            <h1
              className="text-5xl md:text-8xl font-black tracking-tighter italic leading-[1.1] pb-2 text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to bottom, #ffffff, ${theme.primary})`,
              }}
            >
              {t(project.titleKey) || project.titleFallback}
            </h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (Overview & Features) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-container/30 border border-title/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-3xl hover:bg-container/40 transition-colors"
            >
              <h3 className="text-2xl md:text-3xl font-black text-title mb-6 flex items-center gap-3 italic">
                <i
                  className="bx bx-info-circle"
                  style={{ color: theme.primary }}
                ></i>
                {t("portfolio.projectDetails.overview", "Overview")}
              </h3>
              <p
                className="text-sm md:text-base text-text font-bold opacity-80 leading-relaxed border-l-2 pl-6"
                style={{ borderColor: theme.primary + "60" }}
              >
                {hasDetails
                  ? t(project.details.overviewKey)
                  : t(project.descKey) || "Project overview goes here."}
              </p>
            </motion.div>

            {/* Features (if available) */}
            {hasDetails && project.details.features && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-black text-title mb-8 flex items-center gap-3 italic px-2">
                  <i
                    className="bx bx-star"
                    style={{ color: theme.primary }}
                  ></i>
                  {t("portfolio.projectDetails.keyFeatures", "Key Features")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.details.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group bg-container/20 border border-title/5 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          theme.primary + "60";
                        e.currentTarget.style.backgroundColor = theme.bgGlow;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "";
                        e.currentTarget.style.backgroundColor = "";
                      }}
                    >
                      <div className="relative z-10 flex flex-col h-full">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors"
                          style={{
                            backgroundColor: theme.bgGlow,
                            color: theme.primary,
                          }}
                        >
                          <i className={`bx ${feature.icon} text-2xl`}></i>
                        </div>
                        <h4 className="text-lg font-black text-title mb-3 italic tracking-tight">
                          {t(feature.titleKey)}
                        </h4>
                        <p className="text-sm text-text font-bold opacity-70 leading-relaxed">
                          {t(feature.descKey)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar (Tech Stack) */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-container/30 border border-title/10 rounded-[2.5rem] p-8 backdrop-blur-3xl sticky top-24"
            >
              <h3 className="text-xl md:text-2xl font-black text-title mb-8 flex items-center gap-3 italic">
                <i className="bx bx-layer" style={{ color: theme.primary }}></i>
                {t("portfolio.projectDetails.techStack", "Tech Stack")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techs.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-title/5 border border-title/5 rounded-xl transition-all cursor-default"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.bgGlow;
                      e.currentTarget.style.borderColor = theme.primary + "60";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "";
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    <span className="text-[11px] font-black uppercase tracking-tight text-title opacity-80">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Gallery */}
        {hasDetails &&
          project.details.images &&
          project.details.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 md:mt-24"
            >
              <h3 className="text-3xl md:text-5xl font-black text-title mb-12 text-center italic tracking-tighter">
                {t("portfolio.projectDetails.galleryPrefix", "Project")}{" "}
                <span style={{ color: theme.primary }}>
                  {t("portfolio.projectDetails.gallerySuffix", "Gallery")}
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.details.images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    onClick={() => setSelectedImage(img)}
                    className="rounded-[2rem] overflow-hidden border border-title/10 shadow-2xl relative group h-64 md:h-80 cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Gallery image ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-title/0 group-hover:bg-title/20 transition-colors duration-500"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-body/90 backdrop-blur-md p-4 md:p-8"
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-container/50 border border-title/10 hover:border-first hover:bg-first hover:text-body transition-colors rounded-full flex items-center justify-center text-xl md:text-2xl z-10"
              onClick={() => setSelectedImage(null)}
            >
              <i className="bx bx-x"></i>
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view"
              className="w-[90vw] md:w-auto md:max-w-5xl h-auto max-h-[85vh] object-contain rounded-xl md:rounded-2xl shadow-2xl border border-title/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;
