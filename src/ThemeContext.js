// Importing necessary modules from React
import React, { createContext, useState } from "react";

// Creating a context for managing the theme (light/dark mode)
export const ThemeContext = createContext();

// ThemeProvider component to manage and provide the theme state to the application
export const ThemeProvider = ({ children }) => {
  // useState hook to manage the current theme state ('light' by default)
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    console.log('Toggling theme...');
    // setTheme('dark');
    setTheme(t => t === 'light' ? 'dark' : 'light');
    
  };

  return (
    // Providing the theme state and toggleTheme function to all child components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Rendering child components */}
    </ThemeContext.Provider>
  );
};


