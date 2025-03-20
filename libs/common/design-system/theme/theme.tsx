import { useColorScheme } from "react-native"
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

export const useAppTheme = () => {
  const scheme = useColorScheme()
  return scheme === "dark" ? darkTheme : lightTheme
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppTheme()
  return <PaperProvider theme={theme}>{children}</PaperProvider>
}
