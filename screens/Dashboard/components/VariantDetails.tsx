import React from "react";
import { StyleSheet, View } from "react-native";
import Margin from "../../../components/Margin/Margin";
import BodyText from "../../../components/Text/BodyText";
import Title from "../../../components/Text/Title";
import { Variant } from "../../../domain/entities/Variant/Variant";

type Props = {
  variant: Variant;
};

export default function VariantDetails(props: Props) {
  const { variant } = props;

  return (
    <View style={styles.container}>
      <Title>{variant.name}</Title>
      <Margin size={5} />
      <BodyText>{variant.description}</BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
});
