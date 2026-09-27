import { SkillCategory } from "../types/portfolio";

export const skillsCategories: SkillCategory[] = [
  {
    titleKey: "skills.categories.react.title",
    subtitleKey: "skills.categories.react.subtitle",
    skills: [
      { name: "Next.js (App Router)", icon: "bx-layer", colorClass: "text-slate-100" },
      { name: "React 19 / 18", icon: "bxl-react", colorClass: "text-[#61DAFB]" },
      { name: "Component Architecture", icon: "bx-layer", colorClass: "text-indigo-400" },
      { name: "Hooks & Custom Logic", icon: "bx-code-curly", colorClass: "text-purple-400" },
      { name: "React Router", icon: "bx-navigation", colorClass: "text-red-400" },
      { name: "SPA Architecture", icon: "bx-devices", colorClass: "text-cyan-400" },
    ],
  },
  {
    titleKey: "skills.categories.state.title",
    subtitleKey: "skills.categories.state.subtitle",
    skills: [
      { name: "Zustand", icon: "bx-box", colorClass: "text-amber-500" },
      { name: "TanStack Query (v5)", icon: "bx-sync", colorClass: "text-[#FF4154]" },
      { name: "Redux Toolkit", icon: "bxl-redux", colorClass: "text-[#764ABC]" },
      { name: "Context API", icon: "bx-share-alt", colorClass: "text-blue-400" },
    ],
  },
  {
    titleKey: "skills.categories.ui.title",
    subtitleKey: "skills.categories.ui.subtitle",
    skills: [
      { name: "Tailwind CSS v4", icon: "bxl-tailwind-css", colorClass: "text-[#06B6D4]" },
      { name: "Framer Motion", icon: "bx-pulse", colorClass: "text-pink-400" },
      { name: "RTL / LTR Bi-directional", icon: "bx-transfer", colorClass: "text-emerald-400" },
      { name: "Material UI", icon: "bxs-component", colorClass: "text-[#007FFF]" },
      { name: "Responsive & Mobile-First", icon: "bx-mobile-alt", colorClass: "text-violet-400" },
    ],
  },
  {
    titleKey: "skills.categories.apis.title",
    subtitleKey: "skills.categories.apis.subtitle",
    skills: [
      { name: "Axios & REST APIs", icon: "bx-network-chart", colorClass: "text-sky-400" },
      { name: "Firebase FCM", icon: "bxl-firebase", colorClass: "text-[#FFA000]" },
      { name: "Laravel Echo / Pusher", icon: "bx-bell", colorClass: "text-rose-400" },
      { name: "Socket.io", icon: "bx-broadcast", colorClass: "text-emerald-500" },
    ],
  },
  {
    titleKey: "skills.categories.engineering.title",
    subtitleKey: "skills.categories.engineering.subtitle",
    skills: [
      { name: "Vite 7", icon: "bx-bolt-circle", colorClass: "text-yellow-400" },
      { name: "TypeScript", icon: "bxl-typescript", colorClass: "text-[#3178C6]" },
      { name: "Zod Schema Validation", icon: "bx-check-shield", colorClass: "text-blue-500" },
      { name: "Google Lighthouse (90+)", icon: "bx-tachometer", colorClass: "text-green-500" },
      { name: "Figma UI Collaboration", icon: "bxl-figma", colorClass: "text-[#F24E1E]" },
    ],
  },
];
