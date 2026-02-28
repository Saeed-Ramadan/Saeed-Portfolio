import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectById } from "../data/projectsData";

const BynonaDetails = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const project = getProjectById("bymona");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;
  const theme = project.theme;

  const features = project.details?.features || [];
  const images = project.details?.images || [];

  return (
    <div className="min-h-screen relative bg-[#0f0f13] z-10 pt-24 pb-20 font-sans text-white overflow-hidden">
      {/* Dynamic Ambient Background - E-commerce Vibe */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/20 via-[#0f0f13] to-[#0f0f13]">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-600/5 rounded-full blur-[150px] mix-blend-screen"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Navigation Top Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex items-center justify-between backdrop-blur-md bg-white/5 p-4 rounded-3xl border border-white/10"
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold uppercase tracking-widest text-white/70 hover:text-yellow-400 hover:bg-yellow-400/10 transition-colors"
          >
            <i
              className={`bx bx-left-arrow-alt text-xl ${isAr ? "rotate-180" : ""}`}
            ></i>
            <span>{t("nav.home") || "Back"}</span>
          </Link>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 px-6 py-2.5 bg-yellow-400 text-black rounded-2xl text-sm font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-105 transition-all"
          >
            <span>{t("portfolio.projectDetails.liveDemo", "Live Demo")}</span>
            <i className="bx bx-shopping-bag text-lg group-hover:-translate-y-1 transition-transform"></i>
          </a>
        </motion.div>

        {/* Hero Section - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: isAr ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span className="text-xs font-black tracking-widest text-yellow-500 uppercase">
                {theme.label || t(`portfolio.${project.category}`)}
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
              {t(project.titleKey)}
            </h1>

            <p className="text-lg text-white/60 leading-relaxed max-w-xl font-medium border-l-4 border-yellow-400 pl-6 space-y-4">
              {t(project.details?.overviewKey)}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold tracking-widest uppercase text-white/80 shrink-0"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="order-1 lg:order-2 perspective-1000"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-style-3d hover:rotate-y-[5deg] hover:rotate-x-[5deg] transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent mix-blend-overlay z-10"></div>
              <img
                src={project.details?.heroImage || project.img}
                alt="Bynona Hero"
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          </motion.div>
        </div>

        {/* Features - Horizontal Scrolling Style */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black mb-12 flex items-center gap-4"
          >
            <span className="w-12 h-1 bg-yellow-400 rounded-full"></span>
            {t("portfolio.projectDetails.keyFeatures", "Key Features")}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 overflow-hidden transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 group-hover:bg-yellow-400/20 transition-transform duration-700"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform">
                  <i className={`bx ${feature.icon} text-3xl text-black`}></i>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                  {t(feature.titleKey)}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed font-medium group-hover:text-white/70 transition-colors">
                  {t(feature.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Section - Full Screen Width Masonry-ish */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black mb-12 flex items-center gap-4"
          >
            <span className="w-12 h-1 bg-yellow-400 rounded-full"></span>
            E-Commerce Interface Gallery
          </motion.h3>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="relative group rounded-3xl overflow-hidden cursor-pointer border border-white/10 break-inside-avoid"
                onClick={() => setSelectedImage(img)}
              >
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/20 transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 z-10 flex items-center justify-center">
                  <i className="bx bx-expand text-4xl text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300"></i>
                </div>
                <img
                  src={img}
                  alt={`Bynona screen ${idx}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 ease-out"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12"
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-yellow-400 hover:text-black border border-white/20 rounded-full flex items-center justify-center text-2xl transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <i className="bx bx-x"></i>
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view"
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-2xl shadow-2xl ring-1 ring-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BynonaDetails;
