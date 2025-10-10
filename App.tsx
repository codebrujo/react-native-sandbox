import {
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Colors } from "./shared/tokens";
import { Button } from "./shared/altButton/altButton";
import { Header } from "./shared/altHeader/Header";

export default function App() {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/cup.png")}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View style={styles.content}>
        <Header text={"Одно из самых вкусных кофе в городе!"} />
        <Text style={styles.textSecondary}>
          Свежие зёрна, настоящая арабика и бережная обжарка
        </Text>
        <View style={styles.form}>
          <Button text="Начать" onPress={() => Alert.alert("Начать")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Sora",
    justifyContent: "center",
  },
  content: {
    gap: 45,
    paddingHorizontal: 55,
    paddingBottom: 55,
    backgroundColor: "black",
  },
  form: {
    alignSelf: "stretch",
    gap: 16,
  },
  image: {
    flex: 1,
  },
  textSecondary: {
    fontSize: 14,
    fontWeight: "regular",
    textAlign: "center",
    color: Colors.white,
  },
});