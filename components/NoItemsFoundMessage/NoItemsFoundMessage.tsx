import React from "react";
import { StyleSheet, View } from "react-native";
import Headline from "../Text/Headline";
import SubHeadline from "../Text/SubHeadline";

type Props = {
  text: string;
  small?: boolean;
  variant?: "light" | "dark";
};

export default function NoItemsFoundMessage(props: Props) {
  const Text = props.small ? SubHeadline : Headline;
  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
});
