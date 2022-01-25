import React from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import When from "../When/When";

type Props = {
  text: string;
  onPress?: () => void;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
  iconColor?: string;
  hideRightIcon?: boolean;
};

export default function ListItemSimple(props: Props) {
  const theme = useColorScheme();

  const handleOnPress = () => {
    if (!props.onPress) {
      return;
    }

    Haptics.selectionAsync();
    props.onPress();
  };

  return (
    <Pressable
      style={{ ...styles.container, backgroundColor: Colors[theme].input, borderColor: Colors[theme].input }}
      onPress={handleOnPress}
    >
      <Text style={styles.text}>{props.text}</Text>
      <When isTrue={!props.hideRightIcon}>
        <Ionicons name={props?.iconName || "chevron-forward"} size={24} color={props.iconColor || Colors[theme].text} />
      </When>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 7,
    borderRadius: 20,
    opacity: 0.85,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: "#5c6799",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.1,
    elevation: 1,
    backgroundColor: "red",
  },
  text: {
    fontSize: 15,
    fontFamily: "SfProTextRegular",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
