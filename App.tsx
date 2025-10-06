import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Alert, Dimensions } from "react-native";

export default function App() {
  const width = Dimensions.get('window').width
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Hey!</Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "yellow",
          alignItems: "center",
          justifyContent: "space-around",
          height: '70%',
          gap: 10,
        }}
      >
        <View
          style={{ backgroundColor: "tomato", flexBasis: 100, flexGrow: 1, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "blue", flexBasis: 100, flexGrow: 1, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "green", width: (width / 2) - 5, height: 100 }}
        ></View>
      </View>
      <Text style={styles.textStyle}>
        Open up App.tsx to start working on your app!
      </Text>
      <TextInput defaultValue="input" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flexDirection: "row",
    width: "100%",
    textAlignVertical: "center",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textStyle: { color: "blue", fontSize: 20 },
});
