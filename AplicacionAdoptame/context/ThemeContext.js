import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native";

// Definimos nuestros posibles temas 
const lightTheme = {
  background: "#ffffff",
  textColor: "#000000",
  buttonBackground: "#007bff",
  buttonText: "#ffffff",
};

const darkTheme = {
  background: "#121212",
  textColor: "#ffffff",
  buttonBackground: "#444",
  buttonText: "#ffffff",
};

// Creamos un contexto
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme
  );

  useEffect(() => {
    const listener = ({ colorScheme }) => {
      setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
    };
    const subscription = Appearance.addChangeListener(listener);
    
    return () => subscription.remove();
  }, []);

  // Función para cambiar el tema manualmente
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Usamos el contexto
export const useTheme = () => {
  return useContext(ThemeContext);
};
