import { StyleSheet, Text, Pressable, PressableProps, View } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

export function Button({ text, ...props }: PressableProps & { text: string }) {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: Radius.r10,
    height: 58,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.f18,
  }
});