import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import HLinearGradient from "../../components-external/HLinearGradient/HLinearGradient";
import { Text, View } from "../Themed";
import { ColorPalette } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import Margin from "../Margin/Margin";
import { Variant } from "../../domain/entities/Variant/Variant";

type Props = {
  variant: Variant;
  color: string;
  onPress?: (variant: Variant) => void;
};

export default function VariantCard(props: Props) {
  const { variant, onPress, color } = props;
  const colors = [color, ColorPalette.Highlight];

  const handleOnPress = (variant: Variant) => {
    if (!onPress) return;

    onPress(variant);
  };

  if (variant?.name == "") {
    return null;
  }

  return (
    <HLinearGradient colors={colors} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} styles={styles.container}>
      <View style={styles.bottomContainer}>
        <Text style={styles.cardTitle}>{variant?.name.replace("Variant", "")}</Text>
        <Margin />
      </View>
    </HLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: Layout.window.width - 200,
    maxWidth: 150,
    backgroundColor: "red",
    marginBottom: 20,
    marginRight: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    height: 70,
    bottom: 0,
    backgroundColor: ColorPalette.Black,
    width: "100%",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    opacity: 0.65,
    paddingTop: 17,
    alignItems: "center",
  },
  cardTitle: {
    fontFamily: "SfProDisplayBold",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 29,
    color: "white",
  },
  cardSubTitle: {
    fontFamily: "SfProTextRegular",
    fontWeight: "400",
    fontSize: 15,
    marginTop: 5,
    color: ColorPalette.Secondary,
  },
  cardAction: {
    width: 200,
  },
});
