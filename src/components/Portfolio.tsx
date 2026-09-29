import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionTitle from "./common/SectionTitle";
import SpotlightCard from "./common/SpotlightCard";
import { usePortfolioFilter } from "../hooks/usePortfolioFilter";
import { ProjectCategory } from "../types/portfolio";
import { APPLE_EASE } from "../utils/motion";

// RATIONALE: Portfolio component is UI-only. All filtering logic is encapsulated within usePortfolioFilter hook.
// Motion uses Apple-style spring easing for fluid, calm card transitions.
const Portfolio: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const { activeFilter, setFilter, filteredProjects } = usePortfolioFilter();

  const filterTabs: { labelKey: string; value: ProjectCategory }[] = [
    { labelKey: "portfolio.all", value: "all" },
    { labelKey: "portfolio.professional", value: "professional" },
    { labelKey: "portfolio.grad", value: "grad" },
    { labelKey: "portfolio.personal", value: "personal" },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-body" id="work">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          badge={t("portfolio.badge")}
          title={t("portfolio.title")}
          subtitle={t("portfolio.subtitle")}
        />

        {/* Filter Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ease-apple cursor-pointer ${
                  activeFilter === tab.value
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-textLight hover:text-title"
                }`}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 26, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                transition={{ duration: 0.75, ease: APPLE_EASE, delay: idx * 0.05 }}
                className="flex h-full"
              >
                <SpotlightCard
                  className="w-full h-full overflow-hidden group flex flex-col"
                  innerClassName="flex flex-col justify-between h-full"
                >
                  <div className="flex-1 flex flex-col">
                    {/* Project Image Banner */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-200/80 dark:border-white/[0.08] shrink-0">
                      <img
                        src={project.details.heroImage || project.img}
                        alt={t(project.titleKey)}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-apple group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                      {/* Top Chips: Category & Affiliation */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-white border border-white/10">
                          {project.theme.label}
                        </span>

                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold backdrop-blur-md border ${
                            project.affiliation.type === "company"
                              ? "bg-indigo-950/85 text-indigo-300 border-indigo-500/30"
                              : project.affiliation.type === "grad"
                              ? "bg-teal-950/85 text-teal-300 border-teal-500/30"
                              : project.affiliation.type === "freelance"
                              ? "bg-purple-950/85 text-purple-300 border-purple-500/30"
                              : "bg-slate-900/85 text-amber-300 border-amber-500/30"
                          }`}
                        >
                          <i className={`bx ${project.affiliation.icon} text-xs`} />
                          <span>{t(project.affiliation.badgeKey)}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Affiliation Badge Tag */}
                        <div className="flex items-center gap-1.5 mb-2">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                              project.affiliation.type === "company"
                                ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                                : project.affiliation.type === "grad"
                                ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20"
                                : project.affiliation.type === "freelance"
                                ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                                : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                            }`}
                          >
                            <i className={`bx ${project.affiliation.icon} text-xs`} />
                            <span>{t(project.affiliation.badgeKey)}</span>
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-title mb-2 group-hover:text-indigo-400 transition-colors duration-300 ease-apple">
                          {t(project.titleKey)}
                        </h3>

                        <p className="text-xs text-textLight leading-relaxed line-clamp-3 mb-4 font-normal">
                          {t(project.descKey)}
                        </p>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                        {project.techs.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-textLight border border-slate-200/60 dark:border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techs.length > 4 && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-textLight">
                            +{project.techs.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Footer (Pinned to bottom at equal level across all cards) */}
                  <div className="p-5 pt-4 mt-auto border-t border-slate-200/60 dark:border-white/[0.06] flex items-center justify-between gap-3 shrink-0">
                    {/* Live Demo */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all duration-300 ease-apple shadow-xs active:scale-[0.98]"
                    >
                      <span>{t("portfolio.viewDemo")}</span>
                      <i className="bx bx-link-external text-sm" />
                    </a>

                    {/* Details Link */}
                    <Link
                      to={
                        project.id === "cihost"
                          ? "/project/cihost"
                          : project.id === "bymona"
                          ? "/project/bymona"
                          : project.id === "propix8"
                          ? "/project/propix8"
                          : project.id === "hope"
                          ? "/project/hope"
                          : `/project/${project.id}`
                      }
                      className="inline-flex items-center justify-center gap-1 px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 text-textLight hover:text-title text-xs font-bold transition-all duration-300 ease-apple active:scale-[0.98]"
                    >
                      <span>{t("portfolio.viewDetails")}</span>
                      <i className={`bx ${isAr ? "bx-chevron-left" : "bx-chevron-right"} text-base`} />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
