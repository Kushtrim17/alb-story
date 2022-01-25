import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import ListItemBlob from "../Svg/ListItemBlob";
import When from "../When/When";

type Props = {
  title: string;
  subTitle: string;
  itemOrder?: number;
  onPress?: () => void;
  onLongPress?: () => void;
  extraStyles?: any;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
};

export default function ListItem(props: Props) {
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
      style={{ ...styles.container, ...props.extraStyles, backgroundColor: Colors[theme].input, borderColor: Colors[theme].input }}
      onPress={handleOnPress}
      onLongPress={props.onLongPress}
    >
      <View style={styles.leftIcon}>
        <ListItemBlob />
        {props.itemOrder ? <Text style={styles.itemOrder}>{props.itemOrder}&nbsp;</Text> : null}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.subText}>{props.subTitle}</Text>
      </View>
      <When isTrue={props.onPress != null}>
        <Ionicons name={props.iconName || "chevron-forward"} size={24} color={Colors[theme].text} />
      </When>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 7,
    borderRadius: 20,
    opacity: 0.9,
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
    shadowOpacity: 0.4,
    shadowRadius: 0.1,
    elevation: 1,
  },
  textContainer: {
    flex: 3,
    marginLeft: -15,
    flexDirection: "column",
  },
  text: {
    fontSize: 15,
    fontFamily: "SfProTextRegular",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subText: {
    fontFamily: "SfProTextRegular",
    fontWeight: "normal",
    opacity: 0.8,
  },
  leftIcon: {
    height: 50,
    marginLeft: -20,
    marginTop: -2,
    flex: 1,
    alignItems: "center",
    color: "white",
  },
  itemOrder: {
    marginTop: -64,
    marginLeft: 2,
    // fontFamily: "SfProTextRegular",
    fontSize: 18,
    color: "white",
  },
});
