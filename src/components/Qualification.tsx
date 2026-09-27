import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "./common/SectionTitle";
import SpotlightCard from "./common/SpotlightCard";
import { APPLE_EASE } from "../utils/motion";

interface ExperienceItem {
  id: string;
  category: "work" | "teaching";
  titleKey: string;
  companyKey: string;
  dateKey: string;
  locationKey: string;
  bullets: string[];
  techTags: string[];
  isCurrent?: boolean;
  highlightBadgeKey?: string;
}

// RATIONALE: Qualification component highlighting real commercial experience (The 4th Pyramid: Bynona & Propix8) and academic training roles.
// Uses Apple-style spring curves for calm and elegant timeline item transitions.
const Qualification: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"all" | "work" | "teaching">("all");

  const experiences: ExperienceItem[] = [
    {
      id: "modernDigital",
      category: "work",
      titleKey: "qualification.roles.modernDigital.title",
      companyKey: "qualification.roles.modernDigital.company",
      dateKey: "qualification.roles.modernDigital.date",
      locationKey: "qualification.roles.modernDigital.location",
      bullets: [
        t("qualification.roles.modernDigital.bullet1"),
        t("qualification.roles.modernDigital.bullet2"),
        t("qualification.roles.modernDigital.bullet3"),
        t("qualification.roles.modernDigital.bullet4"),
      ],
      techTags: [
        "Next.js",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Zustand v5",
        "TanStack Query v5",
        "Zod",
        "RTL / LTR",
        "CiHost Platform",
        "Tafaul Platform",
      ],
      isCurrent: true,
    },
    {
      id: "pyramid",
      category: "work",
      titleKey: "qualification.roles.pyramid.title",
      companyKey: "qualification.roles.pyramid.company",
      dateKey: "qualification.roles.pyramid.date",
      locationKey: "qualification.roles.pyramid.location",
      bullets: [
        t("qualification.roles.pyramid.bullet1"),
        t("qualification.roles.pyramid.bullet2"),
        t("qualification.roles.pyramid.bullet3"),
        t("qualification.roles.pyramid.bullet4"),
      ],
      techTags: [
        "React 19",
        "Zustand",
        "React Query v5",
        "Tailwind CSS v4",
        "Firebase FCM",
        "Laravel Echo",
        "Google Maps",
        "Axios",
      ],
      isCurrent: true,
    },
    {
      id: "ahdaf",
      category: "work",
      titleKey: "qualification.roles.ahdaf.title",
      companyKey: "qualification.roles.ahdaf.company",
      dateKey: "qualification.roles.ahdaf.date",
      locationKey: "qualification.roles.ahdaf.location",
      bullets: [
        t("qualification.roles.ahdaf.bullet1"),
        t("qualification.roles.ahdaf.bullet2"),
        t("qualification.roles.ahdaf.bullet3"),
      ],
      techTags: [
        "React 19",
        "Tailwind CSS v4",
        "Pollinations AI",
        "AI Design Studio",
        "E-Commerce",
        "Social Auth",
        "REST APIs",
      ],
      isCurrent: false,
    },
    {
      id: "deci",
      category: "teaching",
      titleKey: "qualification.roles.deci.title",
      companyKey: "qualification.roles.deci.company",
      dateKey: "qualification.roles.deci.date",
      locationKey: "qualification.roles.deci.location",
      highlightBadgeKey: "qualification.govInitiative",
      bullets: [
        t("qualification.roles.deci.bullet1"),
        t("qualification.roles.deci.bullet2"),
        t("qualification.roles.deci.bullet3"),
      ],
      techTags: [
        "Egyptian MCIT Initiative",
        "DECI (أشبال مصر)",
        "E-Youth",
        "CS Fundamentals",
        "Problem Solving",
        "Programming Logic",
        "100+ Students",
        "Mentorship",
      ],
      isCurrent: true,
    },
    {
      id: "coody",
      category: "teaching",
      titleKey: "qualification.roles.coody.title",
      companyKey: "qualification.roles.coody.company",
      dateKey: "qualification.roles.coody.date",
      locationKey: "qualification.roles.coody.location",
      bullets: [
        t("qualification.roles.coody.bullet1"),
        t("qualification.roles.coody.bullet2"),
        t("qualification.roles.coody.bullet3"),
        t("qualification.roles.coody.bullet4"),
      ],
      techTags: [
        "React 19",
        "Virtual DOM",
        "Component Architecture",
        "Hooks",
        "State Management",
        "REST APIs",
        "Git & GitHub",
        "Vercel",
      ],
      isCurrent: false,
    },
    {
      id: "tariq",
      category: "teaching",
      titleKey: "qualification.roles.tariq.title",
      companyKey: "qualification.roles.tariq.company",
      dateKey: "qualification.roles.tariq.date",
      locationKey: "qualification.roles.tariq.location",
      bullets: [
        t("qualification.roles.tariq.bullet1"),
        t("qualification.roles.tariq.bullet2"),
      ],
      techTags: ["HTML5", "CSS3", "JavaScript", "React", "Python", "50+ Students"],
      isCurrent: false,
    },
    {
      id: "alphaprog",
      category: "teaching",
      titleKey: "qualification.roles.alphaprog.title",
      companyKey: "qualification.roles.alphaprog.company",
      dateKey: "qualification.roles.alphaprog.date",
      locationKey: "qualification.roles.alphaprog.location",
      bullets: [
        t("qualification.roles.alphaprog.bullet1"),
        t("qualification.roles.alphaprog.bullet2"),
      ],
      techTags: ["Web Fundamentals", "Scratch Logic", "Real-Time Debugging"],
      isCurrent: false,
    },
  ];

  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : experiences.filter((e) => e.category === activeTab);

  return (
    <section className="py-20 relative overflow-hidden bg-body" id="qualification">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionTitle
          badge={t("qualification.badge")}
          title={t("qualification.title")}
          subtitle={t("qualification.subtitle")}
        />

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ease-apple cursor-pointer ${
                activeTab === "all"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-textLight hover:text-title"
              }`}
            >
              {t("portfolio.all")}
            </button>
            <button
              onClick={() => setActiveTab("work")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ease-apple cursor-pointer ${
                activeTab === "work"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-textLight hover:text-title"
              }`}
            >
              {t("qualification.tabWork")}
            </button>
            <button
              onClick={() => setActiveTab("teaching")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ease-apple cursor-pointer ${
                activeTab === "teaching"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-textLight hover:text-title"
              }`}
            >
              {t("qualification.tabTeaching")}
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.75, ease: APPLE_EASE, delay: idx * 0.06 }}
              >
                <SpotlightCard className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                          {exp.category === "work"
                            ? t("qualification.tabWork")
                            : t("qualification.tabTeaching")}
                        </span>
                        {exp.highlightBadgeKey && (
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1.5">
                            <i className="bx bxs-institution text-xs" />
                            {t(exp.highlightBadgeKey)}
                          </span>
                        )}
                        {exp.isCurrent && (
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {t("qualification.current")}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-title">
                        {t(exp.titleKey)}
                      </h3>
                      <p className="text-sm font-medium text-indigo-500 mt-0.5">
                        {t(exp.companyKey)}
                      </p>
                    </div>

                    <div className="text-start md:text-end shrink-0">
                      <span className="inline-block text-xs font-medium text-textLight px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                        {t(exp.dateKey)}
                      </span>
                      <p className="text-xs text-textLight mt-1 font-medium">
                        {t(exp.locationKey)}
                      </p>
                    </div>
                  </div>

                  {/* Bullet points from CV */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-xs md:text-sm text-text flex items-start gap-2.5 leading-relaxed"
                      >
                        <i className="bx bx-check text-indigo-500 text-base shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
                    {exp.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] text-textLight border border-slate-200/60 dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
