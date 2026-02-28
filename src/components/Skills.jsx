import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SkillStar = ({ skill, index, categoryIndex }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { i18n } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05 + categoryIndex * 0.1,
        type: "spring",
        damping: 12,
        stiffness: 100,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-none"
    >
      {/* Star Aura */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          boxShadow: isHovered
            ? `0 0 40px rgba(var(--color-joy-cyan), 0.4)`
            : "0 0 0px transparent",
        }}
        transition={{ duration: 0.4, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-0 rounded-2xl blur-xl opacity-20 pointer-events-none"
        style={{
          backgroundColor: `rgb(var(--color-${skill.color || "first"}))`,
        }}
      />

      <div className="relative glass-nebula p-4 md:p-5 rounded-2xl aspect-square flex flex-col items-center justify-center gap-2 md:gap-3 border border-white/5 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
        {/* Sparkle Engine */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full blur-[1.5px]"
          />
        )}

        <div
          className={`text-2xl md:text-3xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 ${skill.colorClass || "text-first"}`}
        >
          <i className={`bx ${skill.icon}`}></i>
        </div>

        <span
          className={`text-[9px] md:text-[11px] font-black uppercase tracking-[1px] md:tracking-[2px] text-text/60 group-hover:text-title transition-colors text-center ${i18n.language === "ar" ? "font-arabic" : ""}`}
        >
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

const SkillNebula = ({ category, idx }) => {
  const { i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative space-y-12"
    >
      <div className="flex items-center gap-6">
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          className="w-10 h-10 border-2 border-joy-pink/30 rounded-lg rotate-45 flex items-center justify-center overflow-hidden"
        >
          <div className="w-4 h-4 bg-joy-pink animate-pulse"></div>
        </motion.div>

        <h3
          className={`text-3xl font-black text-title italic tracking-tight ${i18n.language === "ar" ? "font-arabic" : ""}`}
        >
          {category.title}
        </h3>
        <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 relative">
        {/* Kinetic Energy Connection (Visual only for now) */}
        {isHovered && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              d="M0,50 Q150,0 300,50 T600,50"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          </svg>
        )}

        {category.skills.map((skill, sIdx) => (
          <SkillStar
            key={sIdx}
            skill={skill}
            index={sIdx}
            categoryIndex={idx}
            isParentHovered={isHovered}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { t, i18n } = useTranslation();

  const skillsData = [
    {
      title: t("skills.frontend"),
      skills: [
        {
          name: "HTML5",
          icon: "bxl-html5",
          colorClass: "text-[#E34F26]",
          color: "joy-pink",
        },
        {
          name: "CSS3",
          icon: "bxl-css3",
          colorClass: "text-[#1572B6]",
          color: "joy-cyan",
        },
        {
          name: "JavaScript",
          icon: "bxl-javascript",
          colorClass: "text-[#F7DF1E]",
          color: "joy-yellow",
        },
        {
          name: "Sass",
          icon: "bxl-sass",
          colorClass: "text-[#CC6699]",
          color: "joy-pink",
        },
        {
          name: "Tailwind",
          icon: "bxl-tailwind-css",
          colorClass: "text-[#06B6D4]",
          color: "joy-cyan",
        },
        {
          name: "Bootstrap",
          icon: "bxl-bootstrap",
          colorClass: "text-[#7952B3]",
          color: "joy-violet",
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
          color: "joy-cyan",
        },
        {
          name: "State",
          icon: "bxl-redux",
          colorClass: "text-[#764ABC]",
          color: "joy-violet",
        },
        {
          name: "Routes",
          icon: "bx-link",
          colorClass: "text-[#CA4245]",
          color: "joy-pink",
        },
        {
          name: "Query",
          icon: "bx-refresh",
          colorClass: "text-[#FF4154]",
          color: "joy-pink",
        },
        {
          name: "Motion",
          icon: "bx-pulse",
          colorClass: "text-title",
          color: "joy-yellow",
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
          color: "joy-cyan",
        },
        {
          name: "Curriculum",
          icon: "bx-book-content",
          colorClass: "text-first",
          color: "joy-pink",
        },
        {
          name: "Mentoring",
          icon: "bx-user-voice",
          colorClass: "text-first",
          color: "joy-yellow",
        },
        {
          name: "Leadership",
          icon: "bx-group",
          colorClass: "text-first",
          color: "joy-violet",
        },
      ],
    },
  ];

  return (
    <section
      className="py-32 md:py-48 relative overflow-hidden bg-body"
      id="skills"
    >
      {/* Background Micro-Nebulae */}
      <div className="absolute top-1/2 left-0 w-3/4 h-3/4 bg-joy-pink/5 rounded-full blur-[200px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-joy-cyan/5 rounded-full blur-[200px] pointer-events-none translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-310 mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-40"
        >
          <motion.span
            animate={{ letterSpacing: ["10px", "15px", "10px"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-first/60 font-black uppercase text-[10px] mb-8 block"
          >
            {t("skills.subtitle")}
          </motion.span>
          <h2 className="text-5xl md:text-8xl lg:text-[12rem] font-black text-title italic tracking-tighter leading-[0.8]">
            {t("skills.title")}
          </h2>
        </motion.div>

        <div className="space-y-32">
          {skillsData.map((category, idx) => (
            <SkillNebula key={idx} category={category} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
