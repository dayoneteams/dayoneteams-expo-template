import React, { createContext, useContext, useState } from "react"

import { MD3LightTheme, MD3DarkTheme, PaperProvider } from "react-native-paper"

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#6200ee",
    background: "#ffffff",
    text: "#000000",
  },
}

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#bb86fc",
    background: "#121212",
    text: "#ffffff",
  },
}

// 🟢 Tạo Context để lưu trạng thái theme
const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
})

export const useAppTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => setIsDarkMode(prev => !prev)

  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  )
}
