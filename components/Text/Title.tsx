import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../../components/Themed";

type Props = {
  children: React.ReactNode;
};
export default function Title(props: Props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "SfProDisplay",
    fontWeight: "800",
    fontSize: 20,
    marginBottom: 5,
  },
});
