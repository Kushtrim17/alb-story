import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { Alert, FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import ListItem from "../../components/ListItem/ListItem";
import Margin from "../../components/Margin/Margin";
import NoItemsFoundMessage from "../../components/NoItemsFoundMessage/NoItemsFoundMessage";
import ScreenView from "../../components/Screen";
import ScreenCaption from "../../components/Screen/ScreenCaption";
import ScreenCaptionHighlight from "../../components/Screen/ScreenCaptionHighlight";
import Section from "../../components/Section";
import VoiceArtifactsFilterSheet, { Filter } from "../../components/VoiceArtifactsFilterSheet/VoiceArtifactsFilterSheet";
import Layout from "../../constants/Layout";
import { getDialectVariantIds, getSubDialectColorIndicatorFromVariant } from "../../domain/application/application";
import { albanianVoices } from "../../domain/data/artifacts/voices/albanian";
import { AlbanianDialects } from "../../domain/data/languages/Albanian/albanian";
import { VoiceArtifact } from "../../domain/entities/VoiceArtifact/VoiceArtifact";

const ScreenHeader: React.FC<{ numberOfRecordings: number }> = ({ numberOfRecordings }) => {
  const navigation = useNavigation();

  const handleFeedback = async () => {
    try {
      return await Linking.openURL("twitter://user?screen_name=kushtrimabdiu");
    } catch (error) {
      Alert.alert("Could not open Twitter", "My twitter handle @kushtrimabdiu");
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View>
        <ScreenCaption>Total {numberOfRecordings}</ScreenCaption>
        <ScreenCaptionHighlight>Recordings</ScreenCaptionHighlight>
      </View>
      <View style={styles.feedbackContainer}>
        <ScreenCaption />
        <TouchableOpacity onPress={handleFeedback}>
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
  const [artefactFilters, setArtefactFilters] = useState<Filter[]>(AlbanianDialects.map((d) => ({ id: d.id, isSelected: true })));
  const [filteredVoiceArtefacts, setFilteredVoiceArtefacts] = useState(albanianVoices);

  const handleShowFilters = () => {
    setShowFilters(true);
  };

  const handleOnFilter = (id: string) => {
    const filter = artefactFilters.find((f) => f.id === id);
    const updatedFilters: Filter[] = [...artefactFilters.filter((f) => f.id != id), { id, isSelected: !filter?.isSelected }];
    setArtefactFilters(updatedFilters);
  };

  useEffect(() => {
    const allSelectedDialectIds = artefactFilters.filter((f) => f.isSelected === true).map((f) => f.id);
    const variantIds = getDialectVariantIds(allSelectedDialectIds);
    const filteredVoices = albanianVoices.filter((av) => variantIds.includes(av.variant.id));

    setFilteredVoiceArtefacts(filteredVoices);
  }, [artefactFilters]);

  const getColorIndicator = (voice: VoiceArtifact) => {
    return getSubDialectColorIndicatorFromVariant(voice.variant.id);
  };

  return (
    <>
      <ScreenView>
        <Margin size={5} />
        <ScreenHeader numberOfRecordings={albanianVoices.length} />
        <Section title="Voices" actionText="Filters" onPress={handleShowFilters}>
          <FlatList
            style={styles.listContainer}
            keyExtractor={keyExtractor}
            data={filteredVoiceArtefacts}
            renderItem={({ item }) => (
              <ListItem
                key={item.id}
                title={item.speakerName}
                colorIndicator={getColorIndicator(item)}
                subTitle={item.variant?.name || item.subDialect?.name || ""}
                onPress={() => navigation.navigate("VoiceDetails", { voiceArtifact: item })}
              />
            )}
            scrollEnabled={true}
            ListFooterComponent={<View style={{ height: 220 }} />}
            ListEmptyComponent={<NoItemsFoundMessage text="No voice artefacts match your search" />}
          />
        </Section>
      </ScreenView>
      <VoiceArtifactsFilterSheet
        shouldShow={showFilters}
        onClose={() => setShowFilters(false)}
        filters={artefactFilters}
        onFilter={handleOnFilter}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    height: Layout.window.height - 30,
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
  },
  feedbackContainer: {
    display: "flex",
    alignItems: "baseline",
  },
});
