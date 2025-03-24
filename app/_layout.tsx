import { QueryClientProvider } from "@tanstack/react-query"
import { Stack } from "expo-router"
import "../libs/common/utils/i18n"
import FlashMessage from "react-native-flash-message"

import { ThemeProvider } from "@/libs/common/design-system/theme"
import { queryClient } from "@/libs/common/utils/network"

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
        <FlashMessage position="top" />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
