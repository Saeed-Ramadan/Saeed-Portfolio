import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "./common/SectionTitle";
import SpotlightCard from "./common/SpotlightCard";

// RATIONALE: Education component presents formal Computer Science and AI degree from Sohag University with verified academic metrics.
const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 relative overflow-hidden bg-body" id="education">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionTitle
          badge={t("education.badge")}
          title={t("education.title")}
          subtitle={t("education.subtitle")}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SpotlightCard className="p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column (lg:col-span-8): Academic Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-500 text-xs font-semibold">
                  <i className="bx bxs-graduation text-base" />
                  <span>2020 — 2024</span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-title">
                    {t("education.degree")}
                  </h3>
                  <p className="text-sm md:text-base font-semibold text-indigo-500 mt-1">
                    {t("education.university")} • {t("education.major")}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-textLight leading-relaxed">
                  {t("education.keyStudies")}
                </p>

                {/* Academic Highlights Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    {t("education.gpa")}
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    {t("education.gradProject")} • {t("education.projectGrade")}
                  </span>
                </div>
              </div>

              {/* Right Column (lg:col-span-4): Verified Credential Box */}
              <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06]">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-500 text-3xl mb-3 shadow-sm">
                  <i className="bx bx-award" />
                </div>
                <h4 className="text-sm font-bold text-title">
                  Bachelor of Computer Science
                </h4>
                <p className="text-xs text-textLight mt-1">
                  Accredited by Supreme Council of Universities
                </p>
                <span className="mt-3 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  Graduated with Honors
                </span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
