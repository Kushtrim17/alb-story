import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

type Props = {
  size?: number;
  children?: React.ReactNode;
};

export default function Margin(props: Props) {
  return (
    <View testID="margin" style={styles(props?.size).container}>
      {props.children}
    </View>
  );
}

const styles = (size?: number) =>
  StyleSheet.create({
    container: {
      margin: size ? size : 20,
    },
  });
