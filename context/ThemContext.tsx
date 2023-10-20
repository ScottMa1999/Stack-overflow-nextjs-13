import React, { createContext, useContext, useState, useEffect } from "react";

// interface and types
interface ThemeContextTypes {
  mode: string;
  toggleTheme: (mode: string) => void;
}

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// new theme context
const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);

// theme context provider
export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  // states
  const [mode, setMode] = useState<string>("");

  // functions
  const toggleTheme = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };

  // effects
  useEffect(() => {
    toggleTheme();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }

  return themeContext;
};
