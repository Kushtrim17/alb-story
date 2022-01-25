import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

type Props = {
  children: React.ReactNode;
  variant?: "light" | "dark";
};

export default function ScreenCaptionHighlight(props: Props) {
  return (
    <Text style={styles.text} variant={props.variant}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "SfProDisplayBold",
  },
});
