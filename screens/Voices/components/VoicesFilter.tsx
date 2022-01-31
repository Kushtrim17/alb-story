import React from "react";
import { StyleSheet, View as TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ABottomSheet } from "../../../components-external/ABottomSheet/ABottomSheet";
import CircleButton from "../../../components/Button/CircleButton";
import BodyText from "../../../components/Text/BodyText";
import Headline from "../../../components/Text/Headline";
import HeadlineBold from "../../../components/Text/HeadlineBold";
import Colors from "../../../constants/Colors";
import { AlbanianDialects } from "../../../domain/data/languages/Albanian/albanian";
import { Subdialect } from "../../../domain/entities/SubDialect/SubDialect";
import { Variant } from "../../../domain/entities/Variant/Variant";
import useColorScheme from "../../../hooks/useColorScheme";

type Props = {
  shouldShow: boolean;
  extraStyles?: any;
  onClose: () => void;
};

export default function VoicesFilter(props: Props) {
  const theme = useColorScheme();

  const getSubDialects = () => {
    const variants: Subdialect[] = [];

    AlbanianDialects.map((d) => {
      variants.push(...d.subDialects);
    });

    return variants;
  };

  getSubDialects();

  return (
    <ABottomSheet shouldShow={props.shouldShow} onClose={props.onClose}>
      <View style={styles.header}>
        <HeadlineBold>Filters</HeadlineBold>
        <CircleButton name="close" onPress={props.onClose} />
      </View>
      <ScrollView horizontal={false} style={{ width: "100%" }}>
        <View style={styles.dialects}>
          <Headline>Dialects</Headline>
          <ScrollView style={styles.body} horizontal={true} showsHorizontalScrollIndicator={false}>
            {AlbanianDialects.map((dialect) => (
              <TouchableOpacity key={dialect.id} style={{ ...styles.option, backgroundColor: Colors[theme].input }}>
                <BodyText>{dialect.name}</BodyText>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.dialects}>
          <Headline>Sub-dialects</Headline>
          <View style={styles.subDialectsBody}>
            {getSubDialects().map((subDialect) => (
              <TouchableOpacity key={subDialect.id} style={{ ...styles.subDialectsBodyOption, backgroundColor: Colors[theme].input }}>
                <BodyText>{subDialect.name}</BodyText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </ABottomSheet>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dialects: {
    width: "100%",
    marginTop: 30,
  },
  body: {
    width: "100%",
    marginTop: 10,
  },
  option: {
    minWidth: 100,
    maxWidth: 200,
    marginRight: 10,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },
  subDialectsBody: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  subDialectsBodyOption: {
    minWidth: 100,
    maxWidth: 200,
    marginRight: 30,
    marginBottom: 10,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },
});
