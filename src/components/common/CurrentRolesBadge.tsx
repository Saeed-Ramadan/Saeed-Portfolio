import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useCurrentRolesRotator } from "../../hooks/useCurrentRolesRotator";
import { APPLE_EASE } from "../../utils/motion";

interface CurrentRoleConfig {
  id: string;
  companyKey: string;
  roleKey: string;
  icon: string;
  colorClass: string;
  badgeBg: string;
}

const ACTIVE_ROLES: CurrentRoleConfig[] = [
  {
    id: "modernDigital",
    companyKey: "hero.activeRoles.modernDigital.company",
    roleKey: "hero.activeRoles.modernDigital.role",
    icon: "bx bx-code-alt",
    colorClass: "text-cyan-400",
    badgeBg: "bg-cyan-500/15 border-cyan-500/25",
  },
  {
    id: "pyramid",
    companyKey: "hero.activeRoles.pyramid.company",
    roleKey: "hero.activeRoles.pyramid.role",
    icon: "bx bx-buildings",
    colorClass: "text-indigo-400",
    badgeBg: "bg-indigo-500/15 border-indigo-500/25",
  },
  {
    id: "deci",
    companyKey: "hero.activeRoles.deci.company",
    roleKey: "hero.activeRoles.deci.role",
    icon: "bx bxs-institution",
    colorClass: "text-amber-400",
    badgeBg: "bg-amber-500/15 border-amber-500/25",
  },
];

// RATIONALE: Floating active roles rotator highlighting all currently ongoing positions ("حتى الآن / Present").
// Features smooth Apple spring physics, pause-on-hover, interactive dot pagination, and full bidirectional RTL/LTR support.
const CurrentRolesBadge: React.FC = () => {
  const { t } = useTranslation();
  const { currentIndex, next, goTo, setIsPaused } = useCurrentRolesRotator({
    total: ACTIVE_ROLES.length,
    intervalMs: 4200,
  });

  const currentRole = ACTIVE_ROLES[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={next}
      role="region"
      aria-label={t("hero.activeRoles.badge")}
      className="group relative p-3 rounded-2xl bg-slate-900/90 dark:bg-[#0d131f]/90 backdrop-blur-md border border-white/10 hover:border-indigo-500/30 shadow-xl transition-all duration-300 cursor-pointer select-none"
    >
      {/* Header Row: Status Indicator & Micro Pagination Dots */}
      <div className="flex items-center justify-between mb-2 px-0.5">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t("qualification.current")}</span>
        </span>

        {/* Micro Dots Pagination */}
        <div
          className="flex items-center gap-1"
          onClick={(e) => e.stopPropagation()}
        >
          {ACTIVE_ROLES.map((role, idx) => (
            <button
              key={role.id}
              onClick={() => goTo(idx)}
              aria-label={`Go to role ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? "w-4 h-1.5 bg-indigo-400"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Role Content Animated on Switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRole.id}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: APPLE_EASE }}
          className="flex items-center gap-3 text-start"
        >
          <div
            className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 text-xl transition-colors duration-300 ${currentRole.badgeBg} ${currentRole.colorClass}`}
          >
            <i className={`bx ${currentRole.icon}`} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11.5px] font-bold text-white truncate tracking-tight">
              {t(currentRole.companyKey)}
            </p>
            <p className="text-[10px] text-slate-300 dark:text-slate-400 truncate mt-0.5">
              {t(currentRole.roleKey)}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CurrentRolesBadge;
