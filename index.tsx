import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Dimensions,
} from "react-native";

export default function App() {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text
          style={{ fontSize: 34, fontWeight: "semibold", textAlign: "center" }}
        >
          Одно из самых вкусных кофе в городе!
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "regular", textAlign: "center" }}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
        <View style={styles.form}>
          <Button title="Начать" onPress={() => Alert.alert("Начать")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 55,
    fontFamily: 'Sora'
  },
  content: {
    alignItems: "center",
    gap: 50,
  },
  form: {
    alignSelf: "stretch",
    gap: 16,
  },
});