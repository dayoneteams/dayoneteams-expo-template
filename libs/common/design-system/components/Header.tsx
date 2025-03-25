import { useNavigation } from "expo-router"
import { StyleSheet } from "react-native"
import { Appbar } from "react-native-paper"

type HeaderProps = {
  mode?: "small" | "medium" | "large" | "center-aligned"
  back?: { title?: string; href?: string }
}

export const Header = ({ mode = "small", back }: HeaderProps) => {
  const navigation = useNavigation()

  const title = navigation.getState()?.routes.at(-1)?.name ?? "Mặc định"

  const _goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }

  return (
    <Appbar.Header mode={mode}>
      {back && <Appbar.BackAction onPress={_goBack} />}
      <Appbar.Content title={title} titleStyle={styles.title} />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
})
