import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DialectCard from "../../../components/DialectCard/DialectCard";
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dialect.subDialects.map((subDialect, index) => (
          <View key={index} style={styles.card}>
            <DialectCard subDialect={subDialect} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  card: {
    marginRight: 10,
    marginLeft: 10,
  },
});
