import { useTranslation } from "react-i18next"
import { StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"

import { LoginForm } from "@/libs/auth/components"
import { SwitchLanguage } from "@/libs/common/design-system/components"
import { useAppTheme } from "@/libs/common/design-system/theme"
import { useAppStore } from "@/libs/common/store"
import {
  errorHandling,
  successHandling,
} from "@/libs/common/utils/notification"

export default function Index() {
  const { t } = useTranslation("common")

  const { count, increase, decrease, reset } = useAppStore()

  const { toggleTheme, theme } = useAppTheme()

  const handleSuccess = () => {
    successHandling("Success", "RootLayout")
  }

  const handleError = () => {
    errorHandling("Error", "RootLayout")
  }

  return (
    <View
      style={[
        styles.mainContainer,
        { backgroundColor: theme.colors.background },
      ]}>
      <Text>{t("appName.full")}</Text>
      <SwitchLanguage />
      <LoginForm />
      <Button mode="contained" onPress={handleSuccess}>
        {"Success"}
      </Button>
      <Button mode="contained" onPress={handleError}>
        {"Error"}
      </Button>
      <Text style={styles.text}>Count: {count}</Text>
      <Button mode="contained" onPress={increase}>
        {"Increase"}
      </Button>
      <Button mode="contained" onPress={decrease}>
        {"Decrease"}
      </Button>
      <Button mode="contained" onPress={reset}>
        {"Reset"}
      </Button>
      <Button mode="contained" onPress={toggleTheme}>
        {"Toggle Theme"}
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 30,
  },
})
