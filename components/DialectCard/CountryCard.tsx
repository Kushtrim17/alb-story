import React from "react";
import { StyleSheet } from "react-native";
import HLinearGradient from "../../components-external/HLinearGradient/HLinearGradient";
import { Text, View } from "../../components/Themed";
import { ColorPalette } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { getNrOfRecordingsFromSubDialect } from "../../domain/application/application";
import { Country } from "../../domain/entities/Country/Country";
import { Dialect } from "../../domain/entities/Dialect/Dialect";
import { Subdialect } from "../../domain/entities/SubDialect/SubDialect";
import Margin from "../Margin/Margin";
import RecordingSvg from "../Svg/Recording";

type Props = {
  country: Country;
};

export default function CountryCard(props: Props) {
  const { country } = props;
  const colors = [ColorPalette.Primary, ColorPalette.Primary2];

  return (
    <HLinearGradient colors={colors} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} styles={styles.container}>
      <View style={styles.bottomContainer}>
        <Text style={styles.cardTitle}>{country?.name}</Text>
        {/* <Text style={styles.cardSubTitle}>{getNrOfRecordings()}</Text> */}
        <Margin />
      </View>
    </HLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: Layout.window.width - 150,
    maxWidth: 400,
    backgroundColor: "red",
    marginBottom: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    height: 125,
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
