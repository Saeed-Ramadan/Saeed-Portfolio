import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  accent: string;
  glow?: string;
  items: string[];
}

export interface Volunteering {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  accent: string;
  glow?: string;
}

interface ServiceCardProps {
  service: Service;
  idx: number;
  setActiveModal: (service: Service | null) => void;
  t: (key: string) => string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, idx, setActiveModal, t }) => {
  const indexStr = `0${idx + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="bg-white/80 border border-slate-200/60 dark:bg-[#090d15]/60 dark:border-white/5 p-8 rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-first/30 shadow-md group flex flex-col items-start"
    >
      {/* Glow Ambient behind card */}
      <div
        className={`absolute -right-20 -top-20 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none bg-linear-to-br ${service.color}`}
      />

      {/* Top Row: Floating Icon Container & Card Index */}
      <div className="flex justify-between items-start w-full mb-8">
        {/* Floating Icon Box */}
        <div
          className={`w-14 h-14 rounded-2xl ${service.accent} border border-first/20 flex items-center justify-center text-first text-2xl bg-first/5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
        >
          <i className={`bx ${service.icon}`} />
        </div>

        {/* Index Indicator */}
        <span className="text-[10px] font-black tracking-widest text-first bg-first/10 border border-first/20 px-2.5 py-1 rounded-xl">
          {indexStr}
        </span>
      </div>

      {/* Title & Description */}
      <div className="text-start mb-6">
        <h3 className="text-xl md:text-2xl font-black text-title mb-3">
          {service.title}
        </h3>
        <p className="text-xs md:text-sm text-textLight font-semibold leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* View More CTA */}
      <button
        onClick={() => setActiveModal(service)}
        className="flex items-center gap-3 text-[10px] font-black tracking-widest uppercase text-first hover:text-title transition-colors cursor-pointer group/btn mt-auto"
      >
        <span>{t("services.seeMore")}</span>
        <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center group-hover/btn:bg-first group-hover/btn:text-white transition-all duration-300">
          <i className="bx bx-right-arrow-alt text-base group-hover/btn:translate-x-0.5 rtl:rotate-180 rtl:group-hover/btn:-translate-x-0.5 transition-transform" />
        </div>
      </button>
    </motion.div>
  );
};

interface VolunteeringCardProps {
  v: Volunteering;
  idx: number;
}

const VolunteeringCard: React.FC<VolunteeringCardProps> = ({ v, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="bg-white/80 border border-slate-200/60 dark:bg-[#090d15]/60 dark:border-white/5 p-8 rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-first/30 shadow-md group flex flex-col items-center"
    >
      {/* Glow Ambient behind card */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 -top-20 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none bg-linear-to-br ${v.color}`}
      />

      {/* Floating Icon Box (Centered) */}
      <div
        className={`w-14 h-14 rounded-2xl ${v.accent} border border-first/20 flex items-center justify-center text-first text-2xl bg-first/5 group-hover:scale-110 transition-transform duration-300 shadow-sm mb-6`}
      >
        <i className={`bx ${v.icon}`} />
      </div>

      {/* People Group Icon */}
      <div className="flex items-center justify-center text-first mb-2">
        <i className="bx bx-group text-lg" />
      </div>

      {/* Title & Description */}
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-black text-title mb-2">
          {v.title}
        </h3>
        <p className="text-xs md:text-sm text-textLight font-semibold leading-relaxed">
          {v.description}
        </p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeModal, setActiveModal] = useState<Service | null>(null);
  const isAr = i18n.language === "ar";

  const services: Service[] = useMemo(
    () => [
      {
        id: 1,
        title: t("services.web"),
        description: t("services.web_desc"),
        icon: "bx-code-alt",
        color: "from-cyan-400 to-blue-600",
        accent: "text-cyan-500 dark:text-cyan-400",
        items: [
          t("services.web_i1"),
          t("services.web_i2"),
          t("services.web_i3"),
          t("services.web_i4"),
          t("services.web_i5"),
        ],
      },
      {
        id: 2,
        title: t("services.uiux"),
        description: t("services.uiux_desc"),
        icon: "bx-brush",
        color: "from-fuchsia-500 to-purple-700",
        accent: "text-fuchsia-500 dark:text-fuchsia-400",
        items: [
          t("services.uiux_i1"),
          t("services.uiux_i2"),
          t("services.uiux_i3"),
          t("services.uiux_i4"),
          t("services.uiux_i5"),
        ],
      },
      {
        id: 3,
        title: t("services.teaching"),
        description: t("services.teaching_desc"),
        icon: "bx-terminal",
        color: "from-orange-400 to-amber-600",
        accent: "text-orange-500 dark:text-orange-400",
        items: [
          t("services.teaching_i1"),
          t("services.teaching_i2"),
          t("services.teaching_i3"),
          t("services.teaching_i4"),
          t("services.teaching_i5"),
        ],
      },
    ],
    [t]
  );

  const volunteering: Volunteering[] = useMemo(
    () => [
      {
        id: 4,
        title: t("volunteering.v1_title"),
        description: t("volunteering.v1_desc"),
        icon: "bx-heart",
        color: "from-rose-500 to-pink-600",
        accent: "text-rose-500 dark:text-rose-400",
      },
      {
        id: 5,
        title: t("volunteering.v2_title"),
        description: t("volunteering.v2_desc"),
        icon: "bx-globe",
        color: "from-blue-500 to-indigo-700",
        accent: "text-blue-500 dark:text-blue-400",
      },
      {
        id: 6,
        title: t("volunteering.v3_title"),
        description: t("volunteering.v3_desc"),
        icon: "bx-atom",
        color: "from-teal-400 to-emerald-600",
        accent: "text-teal-500 dark:text-teal-400",
      },
    ],
    [t]
  );

  return (
    <section className="py-20 relative overflow-hidden bg-body" id="services">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-body">
        <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-first/5 rounded-full blur-[180px] opacity-30" />
        <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] bg-first/5 rounded-full blur-[160px] opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Services Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-first font-black tracking-widest uppercase text-xs mb-3 block">
            {t("services.subtitle")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-title leading-tight">
            {t("services.title")}
          </h2>
          <p className="text-xs md:text-sm text-textLight max-w-lg mx-auto mt-3 font-medium leading-relaxed">
            {t("services.desc")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              service={service}
              idx={idx}
              setActiveModal={setActiveModal}
              t={t}
            />
          ))}
        </div>

        {/* Volunteering Section */}
        <div id="Volunteering" className="pt-12">
          
          {/* Volunteering Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-first font-black tracking-widest uppercase text-xs mb-3 block">
              {t("volunteering.subtitle")}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-title leading-tight">
              {t("volunteering.title")}
            </h2>
            <p className="text-xs md:text-sm text-textLight max-w-lg mx-auto mt-3 font-medium leading-relaxed">
              {t("volunteering.desc")}
            </p>
          </motion.div>

          {/* Volunteering Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteering.map((v, idx) => (
              <VolunteeringCard
                key={idx}
                v={v}
                idx={idx}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Details Popup Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10002] backdrop-blur-md bg-body/80 grid place-items-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/95 dark:bg-[#0c1220]/95 border border-slate-200/80 dark:border-white/5 rounded-3xl max-w-[450px] w-full max-h-[85vh] overflow-y-auto shadow-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 rtl:right-auto rtl:left-6 w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center text-textLight hover:text-first transition-colors cursor-pointer"
                onClick={() => setActiveModal(null)}
              >
                <i className="bx bx-x text-xl" />
              </button>

              {/* Modal Header */}
              <div className="text-start mb-6 pr-8 rtl:pr-0 rtl:pl-8">
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#141b2b]/60 border border-slate-200 dark:border-white/10 flex items-center justify-center text-title text-2xl shrink-0"
                  >
                    <i className={`bx ${activeModal.icon}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-title leading-tight">
                    {activeModal.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-textLight font-semibold leading-relaxed">
                  {activeModal.description}
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-5">
                {activeModal.items?.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center gap-4 text-start group"
                  >
                    <div className="w-9 h-9 rounded-full border border-slate-300/80 dark:border-white/20 bg-transparent text-title flex items-center justify-center text-xs font-black shrink-0 transition-colors group-hover:border-first group-hover:text-first">
                      {idx + 1}
                    </div>
                    <p className="text-sm font-bold text-title">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
