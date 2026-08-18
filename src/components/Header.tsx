import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { useTheme } from "../hooks/useTheme";
import { useHeaderNav } from "../hooks/useHeaderNav";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  // RATIONALE: Custom hook manages header scroll status, sidebar open state, body scroll locking, and RTL detection.
  const { isScrolled, isMenuOpen, isRtl, toggleMenu, closeMenu } = useHeaderNav();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { to: "home", label: t("nav.home"), icon: "bx-home-alt" },
    { to: "about", label: t("nav.about"), icon: "bx-user" },
    {
      to: "qualification",
      label: t("nav.qualification"),
      icon: "bxs-graduation",
    },
    { to: "skills", label: t("nav.skills"), icon: "bx-book-alt" },
    { to: "Services", label: t("nav.services"), icon: "bx-check-shield" },
    { to: "work", label: t("nav.portfolio"), icon: "bx-briefcase-alt-2" },
    {
      to: "contact",
      label: t("nav.contact"),
      icon: "bx-message-square-detail",
    },
  ];

  const isDark = theme === "dark";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-400 ${
          isScrolled
            ? "bg-body/90 backdrop-blur-[20px] shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-5xl mx-4 lg:mx-auto flex justify-between items-center px-4 relative z-[10003]">
          <Link
            to="home"
            smooth={true}
            className="flex items-center cursor-pointer hover:opacity-90 transition-opacity"
          >
            <img
              src="/logo.png"
              alt="Saeed Logo"
              className="w-10 h-auto object-contain filter drop-shadow-[0_4px_12px_rgba(99,102,241,0.15)]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="text-first"
                    className="text-text font-medium cursor-pointer transition-colors hover:text-first"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-textLight/20 pl-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-4">
              <button
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="text-sm font-bold text-title hover:text-first transition-colors px-2 py-1 rounded border border-textLight/20 cursor-pointer"
              >
                {i18n.language === "en" ? "AR" : "EN"}
              </button>
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light theme"
                className="text-xl text-title hover:text-first transition-colors cursor-pointer"
              >
                <i
                  className={`bx ${isDark ? "bx-sun" : "bx-moon"}`}
                ></i>
              </button>
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="text-[10px] font-black text-title px-3 py-1.5 rounded-lg border border-title/10 bg-container/20 backdrop-blur-sm active:scale-95 transition-all cursor-pointer"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-container/20 border border-title/10 backdrop-blur-sm text-title active:scale-95 transition-all cursor-pointer"
            >
              <i className={`bx ${isDark ? "bx-sun" : "bx-moon"}`}></i>
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-first text-body shadow-lg shadow-first/20 cursor-pointer active:scale-95 transition-all border-0"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <i
                className={`bx ${isMenuOpen ? "bx-x" : "bx-grid-alt"} text-xl`}
              ></i>
            </button>
          </div>
        </nav>
      </header>

      {/* RATIONALE: Render Mobile Sidebar Drawer via React Portal directly to document.body.
          This detaches the drawer from <header>'s backdrop-filter stacking context, preventing any transparency leakage. */}
      {typeof document !== "undefined" &&
        createPortal(
          <>
            {/* Backdrop Overlay */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-black/80 z-[99998] md:hidden transition-opacity duration-300"
                onClick={closeMenu}
              ></div>
            )}

            {/* 100% Solid Opaque Sidebar Panel */}
            <div
              style={{
                backgroundColor: isDark ? "#0b0f17" : "#ffffff",
                color: isDark ? "#f3f4f6" : "#0f172a",
              }}
              className={`fixed top-0 bottom-0 h-full w-[290px] xs:w-[320px] max-w-[85vw] shadow-2xl z-[99999] md:hidden flex flex-col justify-between p-6 transition-transform duration-300 ease-out overflow-y-auto ${
                isRtl
                  ? `right-0 border-l border-title/10 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`
                  : `left-0 border-r border-title/10 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`
              }`}
            >
              {/* Sidebar Top Header */}
              <div className="flex items-center justify-between pb-5 border-b border-title/10">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="Saeed Logo"
                    className="w-9 h-auto object-contain filter drop-shadow-[0_4px_12px_rgba(99,102,241,0.15)]"
                  />
                  <span className="text-base font-black tracking-tight text-title">
                    {i18n.language === "ar" ? "سعيد رمضان" : "Saeed Ramadan"}
                  </span>
                </div>
                <button
                  onClick={closeMenu}
                  aria-label="Close sidebar navigation menu"
                  style={{
                    backgroundColor: isDark ? "#161f36" : "#e2e8f0",
                  }}
                  className="w-9 h-9 flex items-center justify-center rounded-xl text-title border border-title/10 active:scale-95 transition-all cursor-pointer hover:text-first"
                >
                  <i className="bx bx-x text-2xl"></i>
                </button>
              </div>

              {/* Sidebar Nav Links */}
              <div className="py-6 flex-1">
                <ul className="flex flex-col gap-2.5">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="!bg-linear-to-r !from-blue-600 !to-purple-600 !text-white !border-transparent shadow-md"
                        onClick={closeMenu}
                        style={{
                          backgroundColor: isDark ? "#131b2e" : "#f1f5f9",
                        }}
                        className={`flex items-center justify-between p-3.5 rounded-xl text-title text-sm font-bold cursor-pointer transition-all group active:scale-[0.98] border border-title/5 hover:border-first/30 ${
                          i18n.language === "en" ? "tracking-[0.5px]" : "font-arabic"
                        }`}
                      >
                        <span>{link.label}</span>
                        <div
                          style={{
                            backgroundColor: isDark ? "#0b0f17" : "#ffffff",
                          }}
                          className="w-9 h-9 shrink-0 border border-title/10 rounded-lg flex items-center justify-center text-lg shadow-xs transition-all group-[.active]:bg-white/20 group-[.active]:text-white group-[.active]:border-transparent"
                        >
                          <i className={`bx ${link.icon}`}></i>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar Footer */}
              <div className="pt-5 border-t border-title/10 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleLanguage}
                    style={{
                      backgroundColor: isDark ? "#131b2e" : "#f1f5f9",
                    }}
                    className="flex-1 py-3 px-4 rounded-xl border border-title/10 text-title font-bold text-xs flex items-center justify-center gap-2 hover:border-first transition-all cursor-pointer"
                  >
                    <i className="bx bx-globe text-base text-first"></i>
                    <span>{i18n.language === "en" ? "العربية (AR)" : "English (EN)"}</span>
                  </button>

                  <button
                    onClick={toggleTheme}
                    style={{
                      backgroundColor: isDark ? "#131b2e" : "#f1f5f9",
                    }}
                    className="w-12 h-11 rounded-xl border border-title/10 text-title flex items-center justify-center text-xl hover:border-first transition-all cursor-pointer"
                    aria-label="Toggle theme"
                  >
                    <i
                      className={`bx ${isDark ? "bx-sun text-amber-400" : "bx-moon text-purple-400"}`}
                    ></i>
                  </button>
                </div>

                <Link
                  to="contact"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="w-full py-3.5 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl text-xs font-black uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  <span>{t("hero.contactMe")}</span>
                  <i className="bx bx-paper-plane text-base"></i>
                </Link>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};

export default Header;
