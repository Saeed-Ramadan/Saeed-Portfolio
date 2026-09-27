import { useEffect, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";

// Code splitting: Lazy load project detail pages for optimization
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const HopeDetails = lazy(() => import("./pages/HopeDetails"));
const BynonaDetails = lazy(() => import("./pages/BynonaDetails"));
const PropixDetails = lazy(() => import("./pages/PropixDetails"));
const CiHostDetails = lazy(() => import("./pages/CiHostDetails"));

function App() {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <div
            key="main-app"
            className={`bg-body text-text min-h-screen selection:bg-indigo-500/20 selection:text-indigo-400 transition-colors duration-300 relative ${
              i18n.language === "ar" ? "font-arabic" : ""
            }`}
          >
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/hope" element={<HopeDetails />} />
                <Route path="/project/bymona" element={<BynonaDetails />} />
                <Route path="/project/propix8" element={<PropixDetails />} />
                <Route path="/project/cihost" element={<CiHostDetails />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
              </Routes>
            </Suspense>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
