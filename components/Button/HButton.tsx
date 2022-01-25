import React from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import * as Haptics from "expo-haptics";
import HLinearGradient from "../../components-external/HLinearGradient/HLinearGradient";
import { Text } from "../../components/Themed";
import Layout from "../../constants/Layout";

type Props = {
  label: string;
  onPress: () => void;
  variant?: "default" | "warning";
};

export default function HButton(props: Props) {
  const colors = props.variant === "warning" ? ["#9e2626", "#BA75FF"] : ["#3913B8", "#BA75FF"];

  const handleOnPress = () => {
    Haptics.selectionAsync();
    props.onPress();
  };

  return (
    <Pressable testID="hButton" onPress={handleOnPress}>
      <HLinearGradient colors={colors} start={{ x: 0.1, y: 0.2 }} end={{ x: 0.9, y: 4.9 }} styles={styles.button}>
        <Text style={styles.buttonText}>{props.label}</Text>
      </HLinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: Layout.window.width - 80,
    height: 50,
    borderRadius: 25,
    shadowColor: "#2FB8FF",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 20,
      height: 40,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "white",
    fontFamily: "SfProTextRegular",
    fontSize: 17,
    fontWeight: "600",
  },
});
