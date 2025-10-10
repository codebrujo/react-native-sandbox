import { useEffect, useRef } from "react";
import { HeaderProps } from "./Header.props";
import { Text, StyleSheet, Animated } from "react-native";
import { Colors, Fonts } from "../tokens";

export function Header({ text }: HeaderProps) {
  const animatedValue = useRef(new Animated.Value(-100)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();
  }, [])

  return (
    <Animated.View 
    style={{
      transform: [{translateY: animatedValue}],
      opacity: opacityValue
    }}
    >
      <Text style={styles.headerText}>{text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: Fonts.f34,
    fontWeight: "semibold",
    textAlign: "center",
    color: Colors.white,
  },
})