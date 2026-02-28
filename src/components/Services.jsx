import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ service, setActiveModal, t }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="bg-container/10 border border-white/5 backdrop-blur-3xl p-6 pb-6 rounded-[0.5rem] shadow-[0_50px_120px_rgba(0,0,0,0.6)] transition-all hover:bg-container/30 hover:border-first/40 relative overflow-hidden group perspective-1000 w-full"
    >
      {/* Holographic Shine Overlay */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.15) 0%, transparent 60%)`,
        }}
        className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Dynamic Interactive Spotlight */}
      <motion.div
        style={{
          left: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
          top: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
          background: `radial-gradient(circle, ${service.glow || "rgba(var(--color-first), 0.3)"} 0%, transparent 70%)`,
        }}
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none -z-10"
      />

      {/* Decorative Border Glow */}
      <div
        className={`absolute inset-0 border-2 border-transparent group-hover:border-first/20 rounded-[5rem] transition-all duration-700 pointer-events-none z-30`}
      ></div>

      <div
        className="relative z-10 h-full flex flex-col items-start text-start rtl:items-end rtl:text-end"
        style={{ transform: "translateZ(80px)" }}
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-28 h-28 bg-title/5 rounded-[0.5rem] flex items-center justify-center mb-14 group-hover:shadow-[0_0_50px_rgba(var(--color-first),0.3)] transition-all duration-700 border border-white/5 relative"
        >
          <div
            className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-[2.5rem] transition-opacity duration-700`}
          ></div>
          <i
            className={`bx ${service.icon} text-7xl ${service.accent} drop-shadow-[0_0_20px_rgba(var(--color-first),0.6)] group-hover:scale-110 transition-transform duration-500`}
          ></i>
        </motion.div>

        <h3 className="text-4xl md:text-5xl font-extrabold text-title mb-24 leading-[0.9] tracking-tighter italic lg:max-w-50 drop-shadow-2xl">
          {service.title}
        </h3>

        <div
          className="mt-auto w-full"
          style={{ transform: "translateZ(40px)" }}
        >
          <span
            className="text-first text-sm font-black flex items-center gap-6 cursor-pointer group/btn uppercase tracking-[6px] hover:text-title transition-colors"
            onClick={() => setActiveModal(service)}
          >
            {t("services.seeMore")}
            <motion.div
              whileHover={{ scale: 1.25, rotate: 10 }}
              className="w-16 h-16 rounded-[0.5rem] bg-title/10 flex items-center justify-center group-hover/btn:bg-first group-hover/btn:text-white transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5"
            >
              <i className="bx bx-right-arrow-alt text-4xl transition-transform group-hover/btn:translate-x-1 rtl:rotate-180 rtl:group-hover/btn:-translate-x-1"></i>
            </motion.div>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const VolunteeringCard = ({ v, t }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="bg-container/10 border border-white/5 backdrop-blur-3xl p-4 rounded-[0.5rem] text-center shadow-[0_60px_100px_rgba(0,0,0,0.5)] transition-all hover:bg-container/30 hover:border-first/30 relative overflow-hidden group perspective-1000"
    >
      {/* Animated Mesh Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-linear-to-tr ${v.color} opacity-0 group-hover:opacity-40 rounded-[0.5rem] blur-[140px] pointer-events-none`}
      ></motion.div>

      <div
        className="relative z-10 flex flex-col items-center"
        style={{ transform: "translateZ(60px)" }}
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-28 h-28 bg-title/10 rounded-[0.5rem] flex items-center justify-center mb-10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:bg-first/20 transition-all duration-700"
        >
          <i
            className={`bx ${v.icon} text-7xl ${v.accent} drop-shadow-[0_0_25px_rgba(var(--color-first),0.5)]`}
          ></i>
        </motion.div>

        <h3 className="text-4xl font-black text-title mb-12 group-hover:text-first transition-colors tracking-tighter italic leading-[0.9]">
          {v.title}
        </h3>

        <motion.div
          whileHover={{ scale: 1.1, translateY: -5 }}
          className="inline-block px-16 py-5 rounded-[0.5rem] bg-first/20 border border-first/30 shadow-2xl group-hover:bg-first group-hover:text-white transition-all duration-700 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <span className="text-[14px] font-black uppercase tracking-[8px] relative z-10 leading-none">
            {v.status}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      id: 1,
      title: t("services.web"),
      description: t("services.web_desc"),
      icon: "bx-code-alt",
      color: "from-cyan-400 to-blue-600",
      accent: "text-cyan-400",
      glow: "rgba(34, 211, 238, 0.4)",
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
      icon: "bx-paint",
      color: "from-fuchsia-500 to-purple-700",
      accent: "text-fuchsia-400",
      glow: "rgba(192, 38, 211, 0.4)",
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
      accent: "text-orange-400",
      glow: "rgba(251, 146, 60, 0.4)",
      items: [
        t("services.teaching_i1"),
        t("services.teaching_i2"),
        t("services.teaching_i3"),
        t("services.teaching_i4"),
        t("services.teaching_i5"),
      ],
    },
  ];

  const volunteering = [
    {
      id: 4,
      title: t("volunteering.v1_title"),
      status: t("volunteering.v1_status"),
      icon: "bx-heart",
      color: "from-rose-500 to-pink-600",
      accent: "text-rose-400",
    },
    {
      id: 5,
      title: t("volunteering.v2_title"),
      status: t("volunteering.v2_status"),
      icon: "bx-globe",
      color: "from-blue-500 to-indigo-700",
      accent: "text-blue-400",
    },
    {
      id: 6,
      title: t("volunteering.v3_title"),
      status: t("volunteering.v3_status"),
      icon: "bx-atom",
      color: "from-teal-400 to-emerald-600",
      accent: "text-teal-400",
    },
  ];

  return (
    <section className="py-10 md:py-16 relative overflow-hidden" id="services">
      {/* Advanced Mesh Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-body">
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-first/5 rounded-[0.5rem] blur-[180px]"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -70, 70, 0],
            y: [0, 70, -70, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] bg-first/10 rounded-[0.5rem] blur-[160px]"
        ></motion.div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-30 relative"
        >
          {/* Ghost Heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[15rem] font-black text-title/5 select-none pointer-events-none italic tracking-tighter opacity-10 whitespace-nowrap overflow-visible">
            {t("services.title")}
          </div>

          <span className="text-first font-black tracking-[12px] uppercase text-xs mb-2 block opacity-80 relative z-10">
            {t("services.subtitle")}
          </span>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 ">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              service={service}
              setActiveModal={setActiveModal}
              t={t}
            />
          ))}
        </div>

        <div id="Volunteering" className="mt-60">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-40 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-first/5 blur-[200px] -z-10"></div>

            {/* Ghost Heading for Volunteering */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[2rem] md:text-[8rem] font-black text-title/5 select-none pointer-events-none italic tracking-tighter opacity-10 whitespace-nowrap">
              {t("volunteering.title")}
            </div>

            <span className="text-first font-black tracking-[12px] uppercase text-xs mb-10 block opacity-70 relative z-10">
              {t("volunteering.subtitle")}
            </span>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-16">
            {volunteering.map((v, idx) => (
              <VolunteeringCard key={idx} v={v} t={t} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10002] backdrop-blur-3xl bg-body/90 grid place-items-center p-6"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative bg-container/95 border border-white/10 rounded-3xl md:rounded-[0.5rem] max-w-[700px] w-full max-h-[90vh] md:max-h-[unset] overflow-y-auto md:overflow-visible shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 md:h-3 bg-linear-to-r ${activeModal.color}`}
              />

              <button
                className="absolute top-4 right-4 md:top-12 md:right-12 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-[0.5rem] bg-title/10 hover:bg-first hover:text-white text-first flex items-center justify-center transition-all text-2xl md:text-3xl z-30 shadow-2xl border border-white/5"
                onClick={() => setActiveModal(null)}
              >
                <i className="bx bx-x" />
              </button>

              <div className="px-6 md:px-16 pt-12 md:pt-10 pb-4 border-b border-white/5 relative overflow-hidden">
                {/* Background Modal Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-60 h-60 md:w-80 md:h-80 bg-linear-to-br ${activeModal.color} opacity-20 blur-[80px] md:blur-[100px] pointer-events-none`}
                ></div>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8 md:mb-10 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className={`w-24 h-20 md:w-28 md:h-24 rounded-2xl md:rounded-[0.5rem] bg-linear-to-br ${activeModal.color} flex items-center justify-center shadow-2xl shrink-0 border border-white/20`}
                  >
                    <i
                      className={`bx ${activeModal.icon} text-4xl md:text-6xl text-white drop-shadow-lg`}
                    />
                  </motion.div>
                  <div className="text-center md:text-start rtl:md:text-end">
                    <h3 className="text-3xl md:text-5xl font-black text-title leading-tight md:leading-[0.9] italic tracking-tight mb-4 drop-shadow-2xl">
                      {activeModal.title}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start rtl:md:justify-end gap-3 md:gap-4">
                      <div className="w-8 md:w-12 h-[2px] md:h-[3px] bg-first rounded-full"></div>
                      <span className="text-[10px] md:text-sm text-first font-black uppercase tracking-[4px] md:tracking-[6px] opacity-90">
                        Top-Tier Solutions
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-base md:text-xl text-text leading-relaxed opacity-80 italic font-semibold text-center md:text-start rtl:md:text-end">
                  {activeModal.description}
                </p>
              </div>

              <div className="px-6 md:px-16 py-8 md:py-14 bg-title/5 relative">
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  {activeModal.items?.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.12 }}
                      className="flex items-center gap-5 md:gap-8 list-none group"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-first/20 text-first flex items-center justify-center text-sm md:text-base font-black shadow-xl group-hover:scale-125 group-hover:bg-first group-hover:text-white transition-all duration-500 border border-first/20 shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-base md:text-xl font-extrabold text-title tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                        {item}
                      </p>
                    </motion.li>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
