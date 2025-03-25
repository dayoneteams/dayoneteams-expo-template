import { QueryClientProvider } from "@tanstack/react-query"
import { Stack } from "expo-router"
import "../libs/common/utils/i18n"
import FlashMessage from "react-native-flash-message"

import { Header } from "@/libs/common/design-system/components"
import { ThemeProvider } from "@/libs/common/design-system/theme"
import { queryClient } from "@/libs/common/utils/network"

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Stack
          screenOptions={() => ({
            header: props => <Header {...props} />,
            animation: "slide_from_right",
          })}>
          <Stack.Screen
            name="index"
            options={{ headerTitle: "Home", headerShown: false }}
          />
          <Stack.Screen
            name="not-found"
            options={{ headerTitle: "Not Found" }}
          />
        </Stack>
        <FlashMessage position="top" />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
