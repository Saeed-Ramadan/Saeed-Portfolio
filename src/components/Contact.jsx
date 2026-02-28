import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contactCards = [
    {
      icon: "bx-mail-send",
      title: t("contact.mail_title", "Email"),
      data: "saeedramadan82@gmail.com",
      link: "mailto:saeedramadan82@gmail.com",
      color: "#3b82f6",
      label: "Direct Line",
    },
    {
      icon: "bxl-whatsapp",
      title: "Whatsapp",
      data: "+201126488442",
      link: "https://wa.me/201126488442",
      color: "#10b981",
      label: "Instant Chat",
    },
    {
      icon: "bxl-messenger",
      title: "Messenger",
      data: "Saeed Ramadan",
      link: "https://m.me/said.aboshanab.92",
      color: "#8b5cf6",
      label: "Social Connect",
    },
  ];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden" id="contact">
      {/* Zenith Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-125 h-125 bg-first/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-first/3 rounded-full blur-[80px] pointer-events-none" />
      </div>

      <div className="max-w-275 mx-auto px-6 relative z-10">
        {/* Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-first font-black tracking-[5px] uppercase text-xs mb-4 block">
            {t("contact.subtitle")}
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-title tracking-tighter bg-linear-to-b from-title to-first bg-clip-text italic leading-[1.1] pb-2 mb-6">
            {t("contact.title")}
          </h2>
          <p className="max-w-160 mx-auto text-[13px] text-text font-bold italic opacity-60">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">
          {/* Magnetic Contact Cards Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-black text-title italic tracking-tighter mb-4 flex items-center gap-4">
              <span className="w-12 h-1px bg-first/30"></span>
              {t("contact.talk")}
            </h3>

            {contactCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.8,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="group relative perspective-1000"
              >
                <div className="relative bg-container/30 border border-title/10 backdrop-blur-3xl p-6 rounded-4xl flex items-center gap-5 transition-all duration-700 hover:bg-container/40 hover:border-first/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] hover:-translate-y-2 group">
                  {/* Magnetic Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-4xl overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-radial from-first/10 to-transparent blur-3xl"></div>
                  </div>

                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-2xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110"
                    style={{
                      backgroundColor: `${card.color}15`,
                      color: card.color,
                    }}
                  >
                    <i className={`bx ${card.icon}`}></i>
                  </div>

                  <div className="flex-1">
                    <span className="text-[8px] font-black uppercase tracking-[3px] text-first opacity-60 mb-1 block">
                      {card.label}
                    </span>
                    <h4 className="text-xl font-black text-title mb-1 italic tracking-tight">
                      {card.title}
                    </h4>
                    <p className="text-xs text-text font-bold opacity-50 mb-4">
                      {card.data}
                    </p>

                    <a
                      href={card.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-title hover:text-first transition-colors group/link"
                    >
                      {t("contact.write")}
                      <i className="bx bx-right-arrow-alt text-xl transition-transform group-hover/link:translate-x-2 rtl:rotate-180 rtl:group-hover/link:-translate-x-2"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Neural Glass Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-container/20 p-8 md:p-12 rounded-5xl border border-title/10 shadow-2xl backdrop-blur-3xl overflow-hidden group"
          >
            {/* Animated Form Background Light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-first/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>

            <h3 className="text-3xl font-black text-title italic tracking-tighter mb-12 flex items-center gap-4">
              {t("contact.write")}
              <span className="w-12 h-1px bg-first/30"></span>
            </h3>

            <form className="grid gap-10">
              <div className="relative group/input">
                <input
                  type="text"
                  required
                  placeholder=" "
                  className="peer w-full bg-title/5 border-b-2 border-title/10 py-4 px-6 rounded-t-xl outline-none focus:border-first transition-all text-[13px] font-black text-title placeholder:opacity-0 focus:bg-title/[0.08]"
                />
                <label className="absolute left-6 top-4 text-[9px] text-text font-black uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-4 peer-focus:left-2 peer-focus:text-first peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-first">
                  {t("contact.name")}
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-first transition-all duration-500 peer-focus:w-full"></div>
              </div>

              <div className="relative group/input">
                <input
                  type="email"
                  required
                  placeholder=" "
                  className="peer w-full bg-title/5 border-b-2 border-title/10 py-4 px-6 rounded-t-xl outline-none focus:border-first transition-all text-[13px] font-black text-title placeholder:opacity-0 focus:bg-title/[0.08]"
                />
                <label className="absolute left-6 top-4 text-[9px] text-text font-black uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-4 peer-focus:left-2 peer-focus:text-first peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-first">
                  {t("contact.mail")}
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-first transition-all duration-500 peer-focus:w-full"></div>
              </div>

              <div className="relative group/input">
                <textarea
                  required
                  placeholder=" "
                  className="peer w-full h-40 bg-title/5 border-b-2 border-title/10 py-4 px-6 rounded-t-xl outline-none focus:border-first transition-all text-[13px] font-black text-title placeholder:opacity-0 focus:bg-title/[0.08] resize-none"
                ></textarea>
                <label className="absolute left-6 top-4 text-[9px] text-text font-black uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-4 peer-focus:left-2 peer-focus:text-first peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-first">
                  {t("contact.project")}
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-first transition-all duration-500 peer-focus:w-full"></div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group/btn relative w-full lg:w-fit px-12 py-5 bg-first text-body rounded-4xl font-black text-[10px] uppercase tracking-[4px] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(var(--first-color-rgb),0.5)] active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    {t("contact.send")}
                    <i className="bx bxs-paper-plane text-xl transition-transform group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 rtl:rotate-180"></i>
                  </span>

                  {/* Liquid Fill Background */}
                  <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out"></div>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
