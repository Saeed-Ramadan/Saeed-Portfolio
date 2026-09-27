import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectLightboxProps {
  imageSrc: string | null;
  onClose: () => void;
  accentColor?: string;
}

// RATIONALE: Reusable accessible image lightbox modal with spring-based zoom animation and backdrop dismissal.
export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  imageSrc,
  onClose,
  accentColor = "#6366f1",
}) => {
  return (
    <AnimatePresence>
      {imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/85 dark:bg-[#05070d]/90 backdrop-blur-xl p-4 md:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close image preview"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center text-2xl transition-all cursor-pointer hover:scale-105 active:scale-95 z-10"
          >
            <i className="bx bx-x" />
          </button>

          {/* Modal Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative max-w-[94vw] max-h-[88vh] overflow-hidden rounded-2xl shadow-2xl border border-white/10"
            style={{
              boxShadow: `0 25px 60px -15px ${accentColor}30`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt="Project preview enlarged"
              className="w-auto h-auto max-w-full max-h-[88vh] object-contain rounded-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
