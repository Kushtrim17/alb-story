import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "../Themed";
import * as Haptics from "expo-haptics";

type Props = {
  title: string;
  actionText?: string;
  onPress?: () => void;
  // can override the default
  variant?: "light" | "dark";
};

export default function SectionHeader(props: Props) {
  const handlePress = () => {
    Haptics.selectionAsync();
    if (props.onPress) {
      props.onPress();
    }
  };

  const Title: React.FC<{ className: "title" | "subTitle" }> = ({ children, className }) => (
    <Text style={{ ...styles[className] }} variant={props.variant}>
      {children}
    </Text>
  );

  return (
    <View style={styles.container}>
      <View>
        <Title className="title">{props.title}</Title>
      </View>
      <View>
        <Pressable onPress={handlePress}>
          <Title className="subTitle">{props.actionText}</Title>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {},
  title: {
    fontFamily: "SfProDisplayBold",
    fontWeight: "800",
    fontSize: 28,
  },
  subTitleContainer: {},
  subTitle: {
    fontFamily: "SfProTextHeavy",
    textDecorationLine: "underline",
    fontWeight: "800",
    fontSize: 17,
    paddingTop: 9,
  },
});
