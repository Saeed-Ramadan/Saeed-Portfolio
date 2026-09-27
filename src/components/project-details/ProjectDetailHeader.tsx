import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";

export interface NavSectionItem {
  id: string;
  label: string;
  icon?: string;
}

interface ProjectDetailHeaderProps {
  liveLink?: string;
  liveLabelKey?: string;
  accentColor?: string;
  sections?: NavSectionItem[];
  activeSection?: string;
  onSectionClick?: (sectionId: string) => void;
}

// RATIONALE: Unified navigation header for all project detail views.
// Ensures consistent UX, bilingual switching (AR/EN), theme toggle, and RTL-safe layout.
export const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({
  liveLink,
  liveLabelKey = "portfolio.projectDetails.liveDemo",
  accentColor = "#6366f1",
  sections,
  activeSection,
  onSectionClick,
}) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const isAr = i18n.language === "ar";

  const toggleLanguage = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(nextLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-body/85 border-b border-slate-200/80 dark:border-white/[0.08] transition-colors duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Back Link */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.04] text-xs font-bold text-title hover:border-indigo-500/40 hover:text-indigo-500 transition-all cursor-pointer shrink-0"
          title={isAr ? "العودة للرئيسية" : "Back to Home"}
        >
          <i
            className={`bx bx-left-arrow-alt text-base transition-transform group-hover:-translate-x-1 ${
              isAr ? "rotate-180 group-hover:translate-x-1" : ""
            }`}
          />
          <span className="hidden xs:inline">{t("nav.home")}</span>
        </Link>

        {/* Optional Section Pills (Desktop only) */}
        {sections && sections.length > 0 && (
          <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-full border border-slate-200/80 dark:border-white/[0.08] bg-slate-100/60 dark:bg-white/[0.03]">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => onSectionClick?.(sec.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-title text-body shadow-xs font-bold"
                      : "text-textLight hover:text-title hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {sec.icon && <i className={`bx ${sec.icon} text-xs`} />}
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Action Controls: Language, Theme, Live Link */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.04] text-xs font-bold text-title hover:text-indigo-500 hover:border-indigo-500/40 transition-all cursor-pointer"
          >
            {i18n.language === "ar" ? "EN" : "العربية"}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-8 h-8 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.04] text-title hover:text-indigo-500 hover:border-indigo-500/40 flex items-center justify-center text-sm transition-all cursor-pointer"
          >
            <i className={`bx ${isDark ? "bx-sun text-amber-400" : "bx-moon text-indigo-500"}`} />
          </button>

          {/* Live Link Button */}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white shadow-sm hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 4px 14px ${accentColor}40`,
              }}
            >
              <span>{t(liveLabelKey, isAr ? "زيارة الموقع" : "Live App")}</span>
              <i className="bx bx-link-external text-xs" />
            </a>
          )}
        </div>
      </div>
    </header>
  );
};
