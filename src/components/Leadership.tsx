import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "./common/SectionTitle";
import SpotlightCard from "./common/SpotlightCard";
import { leadershipData } from "../data/leadershipData";

// RATIONALE: Leadership component displays extracurricular, academic leadership, and competitive programming achievements from the CV.
const Leadership: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 relative overflow-hidden bg-body" id="leadership">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          badge={t("leadership.badge")}
          title={t("leadership.title")}
          subtitle={t("leadership.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl shadow-sm`}
                    >
                      <i className={`bx ${item.icon}`} />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-textLight border border-slate-200/60 dark:border-white/[0.06]">
                      {t(item.badgeKey)}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-title mb-1">
                    {t(item.roleKey)}
                  </h3>

                  <p className="text-xs font-semibold text-indigo-500 mb-2">
                    {t(item.orgKey)}
                  </p>

                  <p className="text-xs text-textLight leading-relaxed font-normal">
                    {t(item.descKey)}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center gap-1.5 text-[11px] text-textLight font-medium">
                  <i className="bx bx-calendar text-indigo-400" />
                  <span>{t(item.dateKey)}</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
