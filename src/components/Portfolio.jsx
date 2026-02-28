import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const Portfolio = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const projects = projectsData;

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const getTechIcon = (tech) => {
    const iconMap = {
      React: "bxl-react",
      "React.js": "bxl-react",
      "React 19": "bxl-react",
      "React Native": "bxl-react",
      Node: "bxl-nodejs",
      MongoDB: "bxl-mongodb",
      Firebase: "bxl-firebase",
      JavaScript: "bxl-javascript",
      Tailwind: "bxl-tailwind-css",
      "Tailwind 4": "bxl-tailwind-css",
      "Tailwind CSS": "bxl-tailwind-css",
      HTML5: "bxl-html5",
      CSS3: "bxl-css3",
      Sass: "bxl-sass",
      Redux: "bxl-redux",
      TypeScript: "bxl-typescript",
      GitHub: "bxl-github",
      Python: "bxl-python",
      Vite: "bx-bolt",
      "Vite 7": "bx-bolt",
      Axios: "bx-transfer",
      Zustand: "bx-brain",
      "React Query": "bx-cloud-download",
      "Framer Motion": "bx-move",
      "Laravel API": "bxl-php",
      "Material UI": "bxl-google-cloud",
      "Chart.js": "bx-bar-chart-alt-2",
      "Context API": "bx-git-merge",
      "React Router": "bx-navigation",
    };
    return (
      iconMap[tech] ||
      iconMap[Object.keys(iconMap).find((key) => tech.includes(key))] ||
      "bx-code-alt"
    );
  };

  return (
    <section className="py-16 md:py-20 overflow-hidden relative" id="work">
      {/* Zenith Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-20 w-150 h-150 bg-first/5 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-120 h-120 bg-firstAlt/5 rounded-full blur-[140px] animate-bounce-slow"></div>
      </div>

      <div className="max-w-275 mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-first font-black tracking-[5px] uppercase text-[10px] md:text-xs mb-4 block">
            {t("portfolio.subtitle")}
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-title tracking-tighter bg-linear-to-b from-title to-first bg-clip-text italic leading-[1.1] pb-2">
            {t("portfolio.title")}
          </h2>
          <p className="max-w-160 mx-auto text-[13px] md:text-sm text-text font-bold italic opacity-60 px-4 md:px-0">
            {t("portfolio.desc")}
          </p>
        </motion.div>

        {/* Zenith Filter Navigation */}
        <div className="flex justify-center mb-16 md:mb-24 px-4 overflow-x-auto no-scrollbar pb-6">
          <div className="flex items-center gap-2 p-1.5 bg-container/10 border border-title/5 rounded-[2.5rem] backdrop-blur-[40px] shadow-2xl relative overflow-hidden">
            {[
              { label: t("portfolio.all"), value: "all", icon: "bx-grid-alt" },
              {
                label: t("portfolio.professional"),
                value: "professional",
                icon: "bx-diamond",
              },
              {
                label: t("portfolio.personal"),
                value: "personal",
                icon: "bx-rocket",
              },
              { label: t("portfolio.grad"), value: "grad", icon: "bx-award" },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 relative z-10 ${
                  filter === item.value
                    ? "bg-first text-body shadow-[0_15px_40px_rgba(var(--first-color-rgb),0.3)] scale-105"
                    : "text-text hover:text-first hover:bg-first/5"
                }`}
              >
                <i className={`bx ${item.icon} text-xl`}></i>
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Zenith Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const theme = project.theme || {
                primary: "var(--first-color)",
                glow: "rgba(var(--first-color-rgb),0.35)",
                bgGlow: "rgba(var(--first-color-rgb),0.08)",
                gradient: "none",
                label: project.category,
                icon: "bx-code-alt",
              };

              return (
                <motion.div
                  key={project.id || project.titleKey}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.05,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="group relative h-full flex flex-col"
                >
                  {/* Magnetic Glow Effect */}
                  <div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem] blur-[60px]"
                    style={{ background: theme.bgGlow }}
                  />

                  {/* Zenith Card Frame */}
                  <div
                    className="relative flex flex-col h-full bg-container/30 border border-white/8 rounded-[2.5rem] isolate transition-all duration-700 hover:bg-container/40 backdrop-blur-3xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                    style={{ background: theme.gradient }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = theme.primary + "60";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    {/* Compact Image Section */}
                    <div className="relative h-44 lg:h-48 overflow-hidden">
                      <img
                        src={project.img}
                        alt={t(project.titleKey) || project.titleFallback}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:blur-[2px] group-hover:brightness-50"
                      />

                      {/* Holographic Overlays */}
                      <div className="absolute inset-0 bg-linear-to-tr from-body/60 via-transparent to-transparent opacity-40"></div>
                      <div className="absolute top-4 right-4 animate-pulse">
                        <i
                          className={`bx ${theme.icon} text-3xl opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`}
                          style={{ color: theme.primary }}
                        ></i>
                      </div>

                      {/* Floating Category Tag */}
                      <div className="absolute top-6 left-6 z-20">
                        <div className="px-5 py-2 bg-body/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-xl flex items-center gap-2 group-hover:-translate-y-1 transition-transform">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: theme.primary,
                              boxShadow: `0 0 8px ${theme.primary}`,
                            }}
                          ></span>
                          <span className="text-[10px] font-black uppercase tracking-[3px] text-title">
                            {theme.label || t(`portfolio.${project.category}`)}
                          </span>
                        </div>
                      </div>

                      {/* Center Action Link */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 z-30 translate-y-8 group-hover:translate-y-0">
                        <motion.a
                          whileHover={{ scale: 1.15, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl text-white shadow-2xl"
                          style={{
                            backgroundColor: theme.primary,
                            boxShadow: `0 0 30px ${theme.glow}`,
                          }}
                        >
                          <i className="bx bx-link-external"></i>
                        </motion.a>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
                      <h3
                        className="text-xl md:text-2xl font-black text-title mb-3 transition-colors duration-500 italic tracking-tighter leading-none line-clamp-1"
                        style={{ "--hover-color": theme.primary }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = theme.primary)
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                      >
                        {t(project.titleKey) || project.titleFallback}
                      </h3>

                      <p
                        className="text-[12px] md:text-[13px] text-text font-bold italic opacity-70 mb-6 md:mb-8 line-clamp-3 md:line-clamp-2 min-h-[3.5rem] md:min-h-[2.75rem] leading-relaxed border-l-2 pl-4 transition-colors"
                        style={{ borderColor: theme.primary + "40" }}
                      >
                        {t(project.descKey) ||
                          "A masterpiece of modern digital engineering."}
                      </p>

                      {/* Holographic Tech Bubbles */}
                      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                        {(project.techs || ["React", "Motion"]).map((tech) => (
                          <div key={tech} className="relative group/tech">
                            <div className="relative flex items-center gap-2 px-3 py-1.5 bg-title/5 border border-title/5 rounded-xl hover:bg-white/8 transition-all cursor-default overflow-hidden">
                              <i
                                className={`bx ${getTechIcon(tech)} text-lg`}
                                style={{ color: theme.primary }}
                              ></i>
                              <span className="text-[10px] font-black uppercase tracking-tight text-title opacity-60 group-hover/tech:opacity-100">
                                {tech}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Zenith Project Footer */}
                      <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
                            <i
                              className="bx bx-scatter-chart text-xl"
                              style={{ color: theme.primary }}
                            ></i>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[6px] text-text font-black uppercase tracking-[2px] opacity-40">
                              System Status
                            </span>
                            <span className="text-[8px] text-title font-black uppercase tracking-tight">
                              Active Production
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 relative z-50">
                          <Link
                            to={`/project/${project.id || "not-found"}`}
                            className="relative z-50 pointer-events-auto px-3 py-2 bg-white/5 border border-white/10 rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest text-title hover:-translate-y-1 transition-all active:scale-95 flex items-center shrink-0 whitespace-nowrap gap-1"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                theme.primary;
                              e.currentTarget.style.color = "white";
                              e.currentTarget.style.boxShadow = `0 10px 30px ${theme.glow}`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "";
                              e.currentTarget.style.color = "";
                              e.currentTarget.style.boxShadow = "";
                            }}
                          >
                            <span className="relative z-10 flex items-center gap-1">
                              {t("portfolio.details", "Details")}
                              <i className="bx bx-info-circle text-lg"></i>
                            </span>
                          </Link>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="relative z-50 pointer-events-auto px-3 py-2 border rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:-translate-y-1 transition-all active:scale-95 flex items-center shrink-0 whitespace-nowrap gap-1"
                            style={{
                              color: theme.primary,
                              borderColor: theme.primary + "40",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                theme.primary;
                              e.currentTarget.style.color = "white";
                              e.currentTarget.style.boxShadow = `0 10px 30px ${theme.glow}`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "";
                              e.currentTarget.style.color = theme.primary;
                              e.currentTarget.style.boxShadow = "";
                            }}
                          >
                            <span className="relative z-10 flex items-center gap-1">
                              {t("portfolio.demo", "Demo")}
                              <i className="bx bx-link-external text-lg"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .animate-shimmer { animation: shimmer 2.5s infinite linear; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .perspective-2000 { perspective: 2000px; }
        .translate-z-20 { transform: translateZ(20px); }
      `,
        }}
      />
    </section>
  );
};

export default Portfolio;
