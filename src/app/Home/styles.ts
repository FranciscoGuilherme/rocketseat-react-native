import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D0D2D8",
    paddingTop: 62,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  logo: {
    height: 48,
    width: 134,
    marginBottom: 24,
    resizeMode: "contain",
  },
  form: {
    width: "100%",
    paddingHorizontal: 16,
    gap: 7,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    marginTop: 24,
  },
})
