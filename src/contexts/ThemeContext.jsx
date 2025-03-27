import React, { createContext } from "react";
import { darkTheme, lightTheme } from "../styles/Themes";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useLocalStorage("themeMode", "dark");

  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };