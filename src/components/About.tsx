import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // Stat items data
  const stats = [
    {
      value: "+2",
      label: t("about.yearsOfExp", "Years of Experience"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: "20+",
      label: t("about.completedProjects", "Projects Completed"),
      color: "from-purple-500 to-pink-500",
    },
    {
      value: "100%",
      label: t("about.clientSatisfaction", "Client Satisfaction"),
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden bg-body"
      id="about"
    >
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30 h-full">
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            background: [
              "radial-gradient(circle at center,rgba(168,85,247,0.05),transparent 70%)",
              "radial-gradient(circle at center,rgba(59,130,246,0.05),transparent 70%)",
              "radial-gradient(circle at center,rgba(168,85,247,0.05),transparent 70%)",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] blur-[130px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* --- LEFT: INFO & STATS --- */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-center md:text-start"
          >
            {/* Header Title with Dot */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-first shadow-[0_0_10px_rgba(var(--color-first),0.5)]"></span>
              <h2 className="text-sm font-black uppercase tracking-widest text-textLight">
                {t("about.subtitle")}
              </h2>
            </div>

            {/* Subheading Role */}
            <h3 className="text-3xl md:text-4xl font-black text-title mb-6 leading-tight">
              {t("about.role")}
            </h3>

            {/* Description Paragraph */}
            <p className="text-text/80 text-sm md:text-base leading-relaxed mb-10 font-medium">
              {t("about.description")}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center md:text-start">
                  <span
                    className={`block text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent italic mb-2`}
                    dir="ltr"
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-textLight leading-tight block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start">
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="flex items-center justify-center gap-2 px-8 h-14 border border-title/20 hover:border-first bg-transparent hover:bg-title/5 text-title rounded-2xl text-xs font-black uppercase tracking-wider transition-all hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                <span>{t("about.learnMore")}</span>
                <i className="bx bx-right-arrow-alt text-lg rtl:rotate-180"></i>
              </Link>
            </div>
          </motion.div>

          {/* --- RIGHT: CODE IDE WINDOW --- */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            {/* Window Container */}
            <div className="w-full rounded-2xl bg-[#090d16] border border-white/10 dark:border-white/5 shadow-2xl overflow-hidden font-mono text-[11px] sm:text-xs md:text-sm text-slate-300 relative" dir="ltr">
              {/* Glowing Ambient Border */}
              <div className="absolute inset-0 border border-transparent rounded-2xl pointer-events-none bg-gradient-to-tr from-purple-500/20 via-blue-500/10 to-pink-500/20 z-10 opacity-70"></div>
              
              {/* Top Window Bar */}
              <div className="flex items-center justify-between px-5 py-3 bg-[#0d1321] border-b border-white/5 relative z-20">
                {/* Mac Controls */}
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                {/* File Title */}
                <span className="text-[10px] text-textLight font-semibold opacity-60">
                  saeed_developer.js
                </span>
                <div className="w-12"></div> {/* Spacer */}
              </div>

              {/* Code Workspace */}
              <div className="p-6 overflow-x-auto bg-[#070b12] min-h-[260px] flex gap-4 leading-relaxed relative z-20 text-left">
                {/* Line Numbers */}
                <div className="text-title/25 select-none text-right flex flex-col pr-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <span>11</span>
                  <span>12</span>
                </div>

                {/* Highlighted Code */}
                <div className="flex-1 whitespace-pre select-text text-[#82aaff]">
                  {/* Line 1 */}
                  <div>
                    <span className="text-[#c792ea]">const </span>
                    <span className="text-[#ffcb6b]">developer </span>
                    <span className="text-[#89ddff]">= </span>
                    <span className="text-[#89ddff]">&#123;</span>
                  </div>

                  {/* Line 2 */}
                  <div>
                    <span>  name</span>
                    <span className="text-[#89ddff]">: </span>
                    <span className="text-[#c3e88d]">"Saeed Ramadan"</span>
                    <span className="text-[#89ddff]">,</span>
                  </div>

                  {/* Line 3 */}
                  <div>
                    <span>  role</span>
                    <span className="text-[#89ddff]">: </span>
                    <span className="text-[#c3e88d]">"Frontend Developer"</span>
                    <span className="text-[#89ddff]">,</span>
                  </div>

                  {/* Line 4 */}
                  <div>
                    <span>  skills</span>
                    <span className="text-[#89ddff]">: </span>
                    <span className="text-[#89ddff]">[</span>
                    <span className="text-[#c3e88d]">"HTML"</span>
                    <span className="text-[#89ddff]">, </span>
                    <span className="text-[#c3e88d]">"CSS"</span>
                    <span className="text-[#89ddff]">, </span>
                    <span className="text-[#c3e88d]">"JavaScript"</span>
                    <span className="text-[#89ddff]">, </span>
                    <span className="text-[#c3e88d]">"React"</span>
                    <span className="text-[#89ddff]">]</span>
                    <span className="text-[#89ddff]">,</span>
                  </div>

                  {/* Line 5 */}
                  <div>
                    <span>  focus</span>
                    <span className="text-[#89ddff]">: </span>
                    <span className="text-[#c3e88d]">"Building exceptional web experiences"</span>
                    <span className="text-[#89ddff]">,</span>
                  </div>

                  {/* Line 6 */}
                  <div>
                    <span>  passion</span>
                    <span className="text-[#89ddff]">: </span>
                    <span className="text-[#c3e88d]">"Clean Code & UI/UX"</span>
                  </div>

                  {/* Line 7 */}
                  <div>
                    <span className="text-[#89ddff]">&#125;</span>
                    <span className="text-[#89ddff]">;</span>
                  </div>

                  {/* Line 8 */}
                  <div className="h-4"></div>

                  {/* Line 9 */}
                  <div>
                    <span className="text-[#c792ea]">function </span>
                    <span className="text-[#82aaff] font-bold">buildAmazingThings</span>
                    <span className="text-[#89ddff]">() &#123;</span>
                  </div>

                  {/* Line 10 */}
                  <div>
                    <span className="text-[#c792ea]">  return </span>
                    <span className="text-[#c3e88d]">"Let's build something great together!"</span>
                    <span className="text-[#89ddff]">;</span>
                  </div>

                  {/* Line 11 */}
                  <div>
                    <span className="text-[#89ddff]">&#125;</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
