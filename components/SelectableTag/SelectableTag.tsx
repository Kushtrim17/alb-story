import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import BodyText from "../Text/BodyText";

type Props = {
  label: string;
  isSelected: boolean;
  onToggle: () => void;
};

export default function SelectableTag(props: Props) {
  const theme = useColorScheme();

  const handleOnPress = () => {
    Haptics.selectionAsync();
    props.onToggle();
  };

  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: props.isSelected ? Colors[theme].tagSelected : Colors[theme].tag }}
      onPress={handleOnPress}
    >
      <BodyText>{props.label}</BodyText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    maxWidth: 200,
    marginRight: 10,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },
});
