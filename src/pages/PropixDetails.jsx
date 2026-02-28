import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectById } from "../data/projectsData";

const PropixDetails = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const project = getProjectById("propix8");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;
  const theme = project.theme;

  const features = project.details?.features || [];
  const images = project.details?.images || [];

  return (
    <div className="min-h-screen relative bg-[#f8fafc] dark:bg-[#0b1120] z-10 pt-24 pb-20 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300">
      {/* Structural Blueprint Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Architectural Blueprints Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,white_20%,transparent_90%)]"></div>
        {/* Soft Blue Glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Clean Modern Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between py-6 border-b border-slate-200 dark:border-slate-800 mb-16"
        >
          <Link
            to="/"
            className="group flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase"
          >
            <i
              className={`bx bx-left-arrow-alt text-xl group-hover:-translate-x-1 transition-transform ${isAr ? "rotate-180 group-hover:translate-x-1" : ""}`}
            ></i>
            <span>{t("nav.home") || "Back to Index"}</span>
          </Link>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold tracking-wide transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
          >
            <span>
              {t("portfolio.projectDetails.liveDemo", "Explore Platform")}
            </span>
            <i className="bx bx-window-open text-lg"></i>
          </a>
        </motion.nav>

        {/* Hero Section - Architecture Style */}
        <div className="flex flex-col mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-blue-600"></span>
                <span className="text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase">
                  {theme.label || t(`portfolio.${project.category}`)}
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                {t(project.titleKey)}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                {t(project.details?.overviewKey)}
              </p>
            </div>

            {/* Tech Specs Block */}
            <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none min-w-[280px]">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Core Technology
              </h4>
              <ul className="space-y-3">
                {project.techs.map((tech) => (
                  <li key={tech} className="flex items-center gap-3">
                    <i className="bx bx-check text-blue-500"></i>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl relative group bg-slate-200 dark:bg-slate-800"
          >
            <img
              src={project.details?.heroImage || project.img}
              alt="Propix8 Platform"
              className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-[1.03]"
            />
            {/* Blueprint Overlay on image bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900/40 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-xs font-mono opacity-60 uppercase tracking-widest mb-1">
                  Architecture Overview
                </p>
                <p className="font-medium tracking-wide">
                  Premium Real Estate Solutions
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modular Features Grid */}
        <div className="mb-32">
          <div className="mb-12 flex flex-col items-center text-center">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {t("portfolio.projectDetails.keyFeatures", "System Modules")}
            </h3>
            <p className="text-slate-500 max-w-xl text-sm font-light">
              Built on a foundation of scalability, Propix8 aggregates complex
              real estate data into intuitive, high-performance interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <i className={`bx ${feature.icon} text-2xl`}></i>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {t(feature.titleKey)}
                </h4>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {t(feature.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Section - Architectural Photography Style */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Interface Gallery
            </h3>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 ml-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                className={`relative group rounded-xl overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-800 transform-gpu ${idx % 7 === 0 ? "col-span-2 md:col-span-2 aspect-video" : "aspect-square"}`}
                onClick={() => setSelectedImage(img)}
              >
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300 z-10"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                    <i className="bx bx-search-alt-2 text-white"></i>
                  </div>
                </div>
                <img
                  src={img}
                  alt={`Propix screen ${idx}`}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 md:p-8"
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <i className="bx bx-x"></i>
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              src={selectedImage}
              alt="Enlarged interface"
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropixDetails;
