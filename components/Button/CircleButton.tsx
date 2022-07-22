import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ColorPalette } from "../../constants/Colors";

type Props = {
  onPress: () => void;
  name: React.ComponentProps<typeof Ionicons>["name"];
  size?: number;
  extraSmall?: number;
  small?: boolean;
};

export default function CircleButton(props: Props) {
  const isSmall = props.small || false;
  const isExtraSmall = props.extraSmall || false;

  return (
    <Pressable style={styles(isSmall).container} onPress={props.onPress}>
      <Ionicons name={props.name} size={isSmall ? 24 : 30} style={styles(isSmall).icon} />
    </Pressable>
  );
}

const styles = (isSmall: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: ColorPalette.White,
      height: isSmall ? 40 : 50,
      width: isSmall ? 40 : 50,
      borderRadius: isSmall ? 20 : 25,
      alignItems: "center",
      justifyContent: "center",
      elevation: 1,
    },
    icon: {},
  });
