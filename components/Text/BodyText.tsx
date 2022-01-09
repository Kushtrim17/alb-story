import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../../components/Themed";

type Props = {
  children: React.ReactNode;
};
export default function BodyText(props: Props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "SfProTextRegular",
    fontSize: 17,
    marginBottom: 5,
    lineHeight: 25,
  },
});
