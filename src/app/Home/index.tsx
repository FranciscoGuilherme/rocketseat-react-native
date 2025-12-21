import { View, Image } from "react-native"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { styles } from "./styles"

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>

      </View>
    </View>
  )
}
