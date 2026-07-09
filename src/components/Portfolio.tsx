import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { projectsData, Project } from "../data/projectsData";

const Portfolio: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState<string>("all");
  const isAr = i18n.language === "ar";

  const projects: Project[] = projectsData;

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 relative overflow-hidden bg-body" id="work">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-first/5 rounded-full blur-[140px] pointer-events-none opacity-30"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-first/5 rounded-full blur-[140px] pointer-events-none opacity-30"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between gap-4 mb-12"
        >
          {/* Left side: title + line + dot */}
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-black text-title">
              {t("portfolio.title")}
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-12 h-[2px] bg-linear-to-r from-purple-500 to-indigo-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
            </div>
          </div>

          {/* Right side: View all projects */}
          <a
            href="https://github.com/Saeed-Ramadan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs md:text-sm font-black text-first hover:text-first/80 transition-colors"
          >
            <span>{t("portfolio.viewAll")}</span>
            <i className={`bx ${isAr ? "bx-chevron-left" : "bx-chevron-right"} text-lg`}></i>
          </a>
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-12 px-4 overflow-x-auto no-scrollbar pb-3">
          <div className="flex items-center gap-1.5 p-1 bg-white/80 border border-slate-200/60 dark:bg-[#090d15]/80 dark:border-white/5 rounded-full backdrop-blur-md shadow-lg">
            {[
              { label: t("portfolio.all"), value: "all" },
              { label: t("portfolio.professional"), value: "professional" },
              { label: t("portfolio.personal"), value: "personal" },
              { label: t("portfolio.grad"), value: "grad" },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`px-6 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === item.value
                    ? "bg-first text-body shadow-md"
                    : "text-textLight hover:text-title hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, idx: number) => {
              const theme = project.theme || {
                primary: "var(--first-color)",
                glow: "rgba(var(--first-color-rgb),0.35)",
                label: project.category,
              };

              return (
                <motion.div
                  key={project.id || project.titleKey}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white/80 border border-slate-200/60 dark:bg-[#090d15]/60 dark:border-white/5 rounded-3xl p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-first/30 hover:shadow-lg hover:shadow-first/5 group relative h-full"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden mb-4 bg-body select-none">
                    <img
                      src={project.img}
                      alt={t(project.titleKey) || project.titleFallback}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-body/40 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Category Label Overlaid on Bottom-Right */}
                    <div
                      style={{
                        backgroundColor: `${theme.primary}25`,
                        borderColor: `${theme.primary}40`,
                        color: theme.primary,
                      }}
                      className="absolute bottom-3 right-3 z-10 px-4 py-1.5 border rounded-xl text-[9px] font-black uppercase tracking-wider backdrop-blur-md"
                    >
                      {theme.label || t(`portfolio.${project.category}`)}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-col flex-1 px-1">
                    <h3 className="text-lg font-bold text-title mb-2 text-center md:text-start line-clamp-1">
                      {t(project.titleKey) || project.titleFallback}
                    </h3>
                    <p className="text-textLight text-xs mb-6 text-center md:text-start line-clamp-2 leading-relaxed min-h-[2.5rem]">
                      {t(project.descKey)}
                    </p>

                    {/* Footer Row */}
                    <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-white/5">
                      {/* Tech Stack Tags (First 3 tags for perfect fit) */}
                      <div className="flex flex-wrap gap-1.5">
                        {(project.techs || []).slice(0, 3).map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="text-[9px] font-black uppercase tracking-wide px-2.5 py-1 border border-slate-200/60 dark:border-white/5 rounded-lg text-textLight select-none"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Icon Links */}
                      <div className="flex items-center gap-1.5">
                        {/* Details Page Link */}
                        <Link
                          to={`/project/${project.id}`}
                          className="w-9 h-9 rounded-xl border border-slate-200/60 dark:border-white/5 flex items-center justify-center text-textLight hover:text-first hover:bg-first/10 hover:border-first/20 dark:hover:text-white dark:hover:bg-first/20 dark:hover:border-first/30 transition-all cursor-pointer"
                          title={t("portfolio.details")}
                        >
                          <i className="bx bx-info-circle text-lg"></i>
                        </Link>

                        {/* Live Demo Link */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-xl border border-slate-200/60 dark:border-white/5 flex items-center justify-center text-textLight hover:text-first hover:bg-first/10 hover:border-first/20 dark:hover:text-white dark:hover:bg-first/20 dark:hover:border-first/30 transition-all cursor-pointer"
                          title={t("portfolio.demo")}
                        >
                          <i className="bx bx-link-external text-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
