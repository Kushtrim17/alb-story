import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../../components/Themed";

type Props = {
  children?: React.ReactNode;
  variant?: "light" | "dark";
};

export default function ScreenCaption(props: Props) {
  return (
    <Text style={styles.text} variant={props.variant}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontFamily: "SfProTextRegular",
    opacity: 0.8,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});
