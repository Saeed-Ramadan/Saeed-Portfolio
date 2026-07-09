import { create } from "zustand";

// RATIONALE: Using Zustand to manage the global theme state instead of React Context to prevent unnecessary re-renders in deep child components.
export type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set) => {
  // Sync the theme with DOM immediately on store initialization
  const initialTheme = (localStorage.getItem("selected-theme") as Theme) || "light";

  const applyTheme = (theme: Theme) => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light-theme");
      root.classList.remove("dark");
    } else {
      root.classList.remove("light-theme");
      root.classList.add("dark");
    }
    localStorage.setItem("selected-theme", theme);
  };

  applyTheme(initialTheme);

  return {
    theme: initialTheme,
    toggleTheme: () =>
      set((state) => {
        const nextTheme = state.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        return { theme: nextTheme };
      }),
    setTheme: (theme) => {
      applyTheme(theme);
      set({ theme });
    },
  };
});
