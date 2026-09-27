import React from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { appleFadeUp } from "../../utils/motion";

interface SectionTitleProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "center" | "start";
}

// RATIONALE: Standardizes typography with built-in interactive text scramble/decrypt and Apple-style orchestrated motion.
export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = "center",
}) => {
  const isStart = align === "start";

  return (
    <motion.div
      variants={appleFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`mb-12 md:mb-16 ${
        isStart ? "text-start" : "text-center max-w-2xl mx-auto"
      }`}
    >
      {/* Category Pill */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 ${
          isStart ? "" : "mx-auto"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        <span>{badge}</span>
      </div>

      {/* Main Title with Scramble Decrypt */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-title">
        <ScrambleText text={title} triggerOnHover />{" "}
        {titleHighlight && (
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            <ScrambleText text={titleHighlight} triggerOnHover />
          </span>
        )}
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-textLight leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
