import { createContext, PropsWithChildren, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  useEffect(() => {
    const theme = localStorage.getItem("theme") ?? "light";
    setCurrentTheme(theme as Theme);
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);

    document.documentElement.className = "";
    document.documentElement.classList.add(currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  }

  const value = useMemo(
    () => ({
      theme: currentTheme,
      toggleTheme,
    }),
    [currentTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
