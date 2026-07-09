import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Skill {
  name: string;
  icon?: string;
  colorClass?: string;
  renderIcon?: () => React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillsData: SkillCategory[] = [
    {
      title: t("skills.frontend"),
      skills: [
        {
          name: "HTML5",
          icon: "bxl-html5",
          colorClass: "text-[#E34F26]",
        },
        {
          name: "CSS3",
          icon: "bxl-css3",
          colorClass: "text-[#1572B6]",
        },
        {
          name: "JavaScript",
          icon: "bxl-javascript",
          colorClass: "text-[#F7DF1E]",
        },
        {
          name: "Sass",
          icon: "bxl-sass",
          colorClass: "text-[#CC6699]",
        },
        {
          name: "Tailwind CSS",
          icon: "bxl-tailwind-css",
          colorClass: "text-[#06B6D4]",
        },
        {
          name: "Bootstrap",
          icon: "bxl-bootstrap",
          colorClass: "text-[#7952B3]",
        },
      ],
    },
    {
      title: t("skills.react"),
      skills: [
        {
          name: "React 19",
          icon: "bxl-react",
          colorClass: "text-[#61DAFB]",
        },
        {
          name: "Redux / Zustand",
          icon: "bxl-redux",
          colorClass: "text-[#764ABC]",
        },
        {
          name: "React Router",
          icon: "bx-link",
          colorClass: "text-[#CA4245]",
        },
        {
          name: "React Query",
          icon: "bx-refresh",
          colorClass: "text-[#FF4154]",
        },
        {
          name: "Framer Motion",
          icon: "bx-pulse",
          colorClass: "text-title",
        },
      ],
    },
    {
      title: t("skills.instructor"),
      skills: [
        {
          name: "Teaching",
          icon: "bx-chalkboard",
          colorClass: "text-first",
        },
        {
          name: "Curriculum",
          icon: "bx-book-content",
          colorClass: "text-first",
        },
        {
          name: "Mentoring",
          icon: "bx-user-voice",
          colorClass: "text-first",
        },
        {
          name: "Leadership",
          icon: "bx-group",
          colorClass: "text-first",
        },
      ],
    },
    {
      title: t("skills.tools"),
      skills: [
        {
          name: "VS Code",
          icon: "bxl-visual-studio",
          colorClass: "text-[#007ACC]",
        },
        {
          name: "Git",
          icon: "bxl-git",
          colorClass: "text-[#F05032]",
        },
        {
          name: "npm / yarn",
          renderIcon: () => (
            <svg viewBox="0 0 24 24" fill="#CB3837" className="w-8 h-8">
              <path d="M0 0v24h24V0H0zm20 18h-3V9h-3v9h-6V6h12v12z"/>
            </svg>
          ),
        },
        {
          name: "Vite",
          renderIcon: () => (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path d="M22.414 4.5a.75.75 0 0 0-1.282-.533L12 13.064 2.868 3.967a.75.75 0 0 0-1.282.533L11.36 21.03a.9.9 0 0 0 1.28 0l9.774-16.53z" fill="url(#vite-grad-skills)" />
              <path d="M19.78 3.22L12 11 4.22 3.22a.45.45 0 0 0-.77.32l8.13 14.52a.5.5 0 0 0 .84 0l8.13-14.52a.45.45 0 0 0-.77-.32z" fill="#FFD600" />
              <defs>
                <linearGradient id="vite-grad-skills" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BD34FE" />
                  <stop offset="100%" stopColor="#41D1FF" />
                </linearGradient>
              </defs>
            </svg>
          ),
        },
        {
          name: "Chrome DevTools",
          icon: "bxl-chrome",
          colorClass: "text-[#4285F4]",
        },
        {
          name: "Netlify",
          icon: "bxl-netlify",
          colorClass: "text-[#00C7B7]",
        },
        {
          name: "ESLint",
          icon: "bx-shield-quarter",
          colorClass: "text-[#4B32C3]",
        },
        {
          name: "Prettier",
          icon: "bx-brush",
          colorClass: "text-[#F7B93E]",
        },
        {
          name: "Vercel",
          renderIcon: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-black dark:text-white">
              <path d="M12 2L1 21h22L12 2z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden bg-body"
      id="skills"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-3/4 h-3/4 bg-joy-pink/5 rounded-full blur-[200px] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-joy-cyan/5 rounded-full blur-[200px] pointer-events-none translate-x-1/4 translate-y-1/4 opacity-30"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-black text-title">
            {t("skills.title")}
          </h2>
          <div className="flex items-center gap-1">
            <div className="w-12 h-[2px] bg-linear-to-r from-purple-500 to-indigo-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
          </div>
        </motion.div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="space-y-6"
            >
              {/* Category Subtitle */}
              <h3 className="text-sm font-black uppercase tracking-wider text-textLight opacity-70">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-white/80 border border-slate-200/60 dark:bg-[#090d15]/60 dark:border-white/5 p-5 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-first/30 hover:shadow-lg hover:shadow-first/5 group"
                  >
                    <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {skill.renderIcon ? (
                        skill.renderIcon()
                      ) : (
                        <i className={`bx ${skill.icon} text-4xl ${skill.colorClass}`}></i>
                      )}
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-textLight tracking-wide group-hover:text-title transition-colors text-center uppercase select-none">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
