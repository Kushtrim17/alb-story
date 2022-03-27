import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ABottomSheet } from "../../components-external/ABottomSheet/ABottomSheet";
import { View } from "../../components/Themed";
import Layout from "../../constants/Layout";
import { AlbanianDialects } from "../../domain/data/languages/Albanian/albanian";
import CircleButton from "../Button/CircleButton";
import Margin from "../Margin/Margin";
import SelectableTag from "../SelectableTag/SelectableTag";
import Headline from "../Text/Headline";
import HeadlineBold from "../Text/HeadlineBold";

export type Filter = {
  id: string;
  isSelected: boolean;
};

type Props = {
  filters: Filter[];
  onFilter: (id: string) => void;
  shouldShow: boolean;
  onClose: () => void;
};

export default function VoiceArtifactsFilterSheet(props: Props) {
  const { filters, onFilter, shouldShow, onClose } = props;

  const isSelected = (id: string) => {
    return filters?.find((f) => f.id === id)?.isSelected || false;
  };

  return (
    <ABottomSheet shouldShow={shouldShow} onClose={onClose}>
      <View style={styles.container}>
        <View style={styles.header}>
          <HeadlineBold>Filter</HeadlineBold>
          <CircleButton name="close" onPress={onClose} />
        </View>
        <View style={styles.body}>
          <Headline>Dialects</Headline>
          <Margin size={10} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {AlbanianDialects.map((dialect) => (
              <SelectableTag
                key={dialect.id}
                label={dialect.name}
                onToggle={() => onFilter(dialect.id)}
                isSelected={isSelected(dialect.id)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </ABottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width - 40,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body: {
    marginTop: 15,
  },
  scrollableBody: {
    backgroundColor: "red",
  },
  subDialectsBody: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  option: {
    minWidth: 100,
    maxWidth: 200,
    marginRight: 10,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },
  subDialectsOption: {
    minWidth: 100,
    maxWidth: 200,
    marginRight: 30,
    marginBottom: 10,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },
});
