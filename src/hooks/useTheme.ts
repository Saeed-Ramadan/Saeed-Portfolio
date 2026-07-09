import { useThemeStore } from "../store/themeStore";

// RATIONALE: Custom hook wrapper around Zustand to preserve the existing useTheme import signature across components.
export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return { theme, toggleTheme };
};
