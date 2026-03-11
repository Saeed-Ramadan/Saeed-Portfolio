import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // تقسيم الـ bundle لملفات منفصلة لكل مكتبة — أسرع تحميل وأفضل cache
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-i18n": [
            "i18next",
            "react-i18next",
            "i18next-browser-languagedetector",
          ],
          "vendor-router": ["react-router-dom"],
          "vendor-ui": ["swiper", "lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
