import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import ListItem from "../../components/ListItem/ListItem";
import ListItemSimple from "../../components/ListItem/ListItemSimple";
import Margin from "../../components/Margin/Margin";
import ScreenView from "../../components/Screen";
import ScreenCaption from "../../components/Screen/ScreenCaption";
import ScreenCaptionHighlight from "../../components/Screen/ScreenCaptionHighlight";
import Section from "../../components/Section";
import BodyText from "../../components/Text/BodyText";
import HeadlineBold from "../../components/Text/HeadlineBold";
import Layout from "../../constants/Layout";
import { albanianVoices } from "../../domain/data/artifacts/voices/albanian";

const ScreenHeader: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <View>
        <ScreenCaption>Total 150</ScreenCaption>
        <ScreenCaptionHighlight>Recordings</ScreenCaptionHighlight>
      </View>
      <View style={styles.feedbackContainer}>
        <ScreenCaption />
        <TouchableOpacity onPress={() => console.log("test")}>
          <ScreenCaptionHighlight>Feedback</ScreenCaptionHighlight>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function VoicesScreen() {
  const navigation = useNavigation();
  const keyExtractor = (activity: any, index: number) => index.toString();

  return (
    <ScreenView>
      <Margin size={5} />
      <ScreenHeader />
      <Section title="Voices" actionText="Filters">
        <FlatList
          style={styles.listContainer}
          keyExtractor={keyExtractor}
          data={albanianVoices}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              title={item.speakerName}
              subTitle={item.variant?.name || item.subDialect?.name || ""}
              onPress={() => navigation.navigate("VoiceDetails")}
            />
          )}
          scrollEnabled={true}
          ListFooterComponent={<View style={{ height: 60 }} />}
          // ListEmptyComponent={<NoItemsFoundMessage text="No activities match your search" />}
        />
      </Section>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    height: Layout.window.height - 300,
  },
  loadingView: {
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  screenContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  feedbackContainer: {
    display: "flex",
    alignItems: "baseline",
  },
});
