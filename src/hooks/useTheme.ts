import { useContext } from "react";

import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext";

const useThemeContext = (): ThemeContextType => {
  const themeContext = useContext(ThemeContext);
  if (themeContext === null) {
    throw new Error("Theme context not found. Try wrapping a parent component with <ThemeContext.Provider>.");
  }
  return themeContext;
};

export default useThemeContext;
