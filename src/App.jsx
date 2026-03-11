import React, { useEffect, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

// Code splitting: هذه الصفحات تُحمَّل فقط عند الحاجة
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const HopeDetails = lazy(() => import("./pages/HopeDetails"));
const BynonaDetails = lazy(() => import("./pages/BynonaDetails"));
const PropixDetails = lazy(() => import("./pages/PropixDetails"));

function App() {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader key="loader" onComplete={() => setIsLoading(false)} />
          ) : (
            <div
              key="main-app"
              className={`bg-body text-text min-h-screen selection:bg-first selection:text-body transition-colors duration-300 relative ${
                i18n.language === "ar" ? "font-arabic" : ""
              }`}
            >
              {/* Cinematic Kinetic Atmosphere */}
              <div className="noise-overlay" />
              <div className="light-leak top-0 left-0" />
              <div className="light-leak bottom-0 right-0 opacity-40 blur-[150px]" />

              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/project/hope" element={<HopeDetails />} />
                  <Route path="/project/bymona" element={<BynonaDetails />} />
                  <Route path="/project/propix8" element={<PropixDetails />} />
                  <Route path="/project/:id" element={<ProjectDetails />} />
                </Routes>
              </Suspense>
            </div>
          )}
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;
