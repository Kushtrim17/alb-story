import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import ListItem from "../../components/ListItem/ListItem";
import Margin from "../../components/Margin/Margin";
import ScreenView from "../../components/Screen";
import ScreenCaption from "../../components/Screen/ScreenCaption";
import ScreenCaptionHighlight from "../../components/Screen/ScreenCaptionHighlight";
import Section from "../../components/Section";
import BodyText from "../../components/Text/BodyText";
import HeadlineBold from "../../components/Text/HeadlineBold";
import Layout from "../../constants/Layout";
import { albanianVoices } from "../../domain/data/artifacts/voices/albanian";
import VoicesFilter from "./components/VoicesFilter";

const ScreenHeader: React.FC<{ numberOfRecordings: number }> = ({ numberOfRecordings }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <View>
        <ScreenCaption>Total {numberOfRecordings}</ScreenCaption>
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
  const [showFilters, setShowFilters] = useState(false);

  const handleShowFilters = () => {
    setShowFilters(true);
  };

  return (
    <ScreenView>
      <Margin size={5} />
      <ScreenHeader numberOfRecordings={albanianVoices.length} />
      <Section title="Voices" actionText="Filters" onPress={handleShowFilters}>
        <FlatList
          style={styles.listContainer}
          keyExtractor={keyExtractor}
          data={albanianVoices}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              title={item.speakerName}
              subTitle={item.variant?.name || item.subDialect?.name || ""}
              onPress={() => navigation.navigate("VoiceDetails", { voiceArtifact: item })}
            />
          )}
          scrollEnabled={true}
          ListFooterComponent={<View style={{ height: 60 }} />}
          // ListEmptyComponent={<NoItemsFoundMessage text="No activities match your search" />}
        />
      </Section>
      <VoicesFilter shouldShow={showFilters} onClose={() => setShowFilters(false)} />
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
