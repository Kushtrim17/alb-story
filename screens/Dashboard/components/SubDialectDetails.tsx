import React from "react";
import { StyleSheet, View } from "react-native";
import Margin from "../../../components/Margin/Margin";
import BodyText from "../../../components/Text/BodyText";
import SubHeadline from "../../../components/Text/SubHeadline";
import { Text } from "../../../components/Themed";
import { Subdialect } from "../../../domain/entities/SubDialect/SubDialect";
import VariantDetails from "./VariantDetails";

type Props = {
  subDialect: Subdialect;
};

export default function SubDialectDetails(props: Props) {
  const { subDialect } = props;

  return (
    <View style={styles.container}>
      <SubHeadline>{subDialect.name}</SubHeadline>
      <BodyText>{subDialect.description}</BodyText>
      <Margin size={5} />
      {subDialect.variants.map((variant, index) => (
        <VariantDetails key={index} variant={variant} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
});
