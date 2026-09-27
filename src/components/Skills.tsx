import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "./common/SectionTitle";
import SpotlightCard from "./common/SpotlightCard";
import { skillsCategories } from "../data/skillsData";

// RATIONALE: Categorized skills grid highlighting modern React ecosystem, state management, and real-time tooling.
const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <section className="py-20 relative overflow-hidden bg-body" id="skills">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          badge={t("skills.badge")}
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillsCategories.map((category, idx) => (
            <button
              key={category.titleKey}
              onClick={() => setSelectedCategory(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === idx
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-slate-100 dark:bg-white/[0.04] text-textLight hover:text-title hover:bg-slate-200 dark:hover:bg-white/[0.08]"
              }`}
            >
              {t(category.titleKey)}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-title">
                {t(skillsCategories[selectedCategory].titleKey)}
              </h3>
              <p className="text-xs md:text-sm text-textLight mt-1">
                {t(skillsCategories[selectedCategory].subtitleKey)}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skillsCategories[selectedCategory].skills.map((skill, sIdx) => (
                <SpotlightCard
                  key={skill.name}
                  className="p-5 flex flex-col items-center justify-center text-center group cursor-default"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] flex items-center justify-center text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 ${
                      skill.colorClass || "text-title"
                    }`}
                  >
                    <i className={`bx ${skill.icon || "bx-code-alt"}`} />
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-title mb-1">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] text-textLight uppercase tracking-wider font-mono">
                    Production Grade
                  </span>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global Competency Grid Showcase */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.06] text-center">
            <span className="text-xl md:text-2xl font-black text-indigo-500 block mb-1">
              React 19 & 18
            </span>
            <span className="text-xs text-textLight">Component Architecture</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.06] text-center">
            <span className="text-xl md:text-2xl font-black text-amber-500 block mb-1">
              Zustand + Query
            </span>
            <span className="text-xs text-textLight">Resilient State Flow</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.06] text-center">
            <span className="text-xl md:text-2xl font-black text-cyan-500 block mb-1">
              Tailwind v4
            </span>
            <span className="text-xs text-textLight">RTL / LTR Design Systems</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.06] text-center">
            <span className="text-xl md:text-2xl font-black text-emerald-500 block mb-1">
              TypeScript & Zod
            </span>
            <span className="text-xs text-textLight">Strict Validation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
