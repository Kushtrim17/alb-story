import React from "react";
import { StyleSheet, View } from "react-native";
import Margin from "../../../components/Margin/Margin";
import BodyText from "../../../components/Text/BodyText";
import Headline from "../../../components/Text/Headline";
import { Dialect } from "../../../domain/entities/Dialect/Dialect";
import SubDialectDetails from "./SubDialectDetails";

type Props = {
  dialect: Dialect;
};

export default function DialectDetails(props: Props) {
  const { dialect } = props;

  return (
    <View style={styles.container}>
      <Headline key={dialect.id}>{dialect.name}</Headline>
      <BodyText>{dialect.description}</BodyText>
      <Margin size={5} />
      {dialect.subDialects.map((subDialect, index) => (
        <SubDialectDetails key={index} subDialect={subDialect} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
