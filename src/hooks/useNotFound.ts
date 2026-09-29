import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "./useTheme";

// RATIONALE: Separating routing, path extraction, and interactive control logic
// from the NotFound UI component. Ensures NotFound.tsx remains purely presentational (UI-only).
export const useNotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const isAr = i18n.language === "ar";
  const isDark = theme === "dark";
  const attemptedPath = location.pathname;

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLang);
  };

  const goHome = () => {
    navigate("/");
  };

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return {
    t,
    isAr,
    isDark,
    theme,
    toggleTheme,
    toggleLanguage,
    attemptedPath,
    goHome,
    goBack,
  };
};
