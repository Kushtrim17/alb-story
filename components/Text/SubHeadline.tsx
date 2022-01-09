import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../../components/Themed";

type Props = {
  children: React.ReactNode;
};
export default function SubHeadline(props: Props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "SfProDisplayBold",
    fontWeight: "800",
    fontSize: 24,
    marginBottom: 5,
  },
});
