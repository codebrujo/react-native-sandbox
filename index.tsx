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
        <Text
          style={{
            fontSize: 34,
            fontWeight: "semibold",
            textAlign: "center",
            color: Colors.white,
          }}
        >
          Одно из самых вкусных кофе в городе!
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "regular",
            textAlign: "center",
            color: Colors.white,
          }}
        >
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
    backgroundColor: 'black',
  },
  form: {
    alignSelf: "stretch",
    gap: 16,
  },
  image: {
    flex: 1,
  },
});