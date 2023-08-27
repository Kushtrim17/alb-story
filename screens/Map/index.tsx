import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import CircleButton from "../../components/Button/CircleButton";
import VoiceArtifactsFilterSheet, {
  Filter,
} from "../../components/VoiceArtifactsFilterSheet/VoiceArtifactsFilterSheet";
import Layout from "../../constants/Layout";
import {
  getDialectVariantIds,
  getSubDialectColorIndicatorFromVariant,
} from "../../domain/application/application";
import { albanianVoices } from "../../domain/data/artifacts/voices/albanian";
import { AlbanianDialects } from "../../domain/data/languages/Albanian/albanian";
import { VoiceArtifact } from "../../domain/entities/VoiceArtifact/VoiceArtifact";
import VoiceDetailsSheet from "./components/VoiceDetail";

export default function MapScreen() {
  const [artefactFilters, setArtefactFilters] = useState<Filter[]>(
    AlbanianDialects.map((d) => ({ id: d.id, isSelected: true }))
  );
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVoiceArtifact, setSelectedVoiceArtifact] =
    useState<VoiceArtifact>();
  const [filteredVoiceArtefacts, setFilteredVoiceArtefacts] =
    useState(albanianVoices);
  const [shouldShowVoiceArtifactDetails, setShouldShowVoiceArtifactDetails] =
    useState(true);
  const region = {
    latitude: 41.350106,
    longitude: 20.526966,
    latitudeDelta: 5.0922,
    longitudeDelta: 5.0421,
  };
  const isSelected = (id: number) => {
    return selectedVoiceArtifact?.id === id;
  };
  const handleShowFilters = () => {
    setShowFilters(true);
  };
  const handleOnFilter = (id: string) => {
    const filter = artefactFilters.find((f) => f.id === id);
    const updatedFilters: Filter[] = [
      ...artefactFilters.filter((f) => f.id != id),
      { id, isSelected: !filter?.isSelected },
    ];
    setArtefactFilters(updatedFilters);
  };
  const handleMarkerClicked = (voiceArtifact: VoiceArtifact) => {
    setSelectedVoiceArtifact(voiceArtifact);
    setShouldShowVoiceArtifactDetails(true);
  };
  const handleVoiceArtifactDetailsClosed = () => {
    setSelectedVoiceArtifact(undefined);
    setShouldShowVoiceArtifactDetails(false);
  };
  useEffect(() => {
    const allSelectedDialectIds = artefactFilters
      .filter((f) => f.isSelected === true)
      .map((f) => f.id);
    const variantIds = getDialectVariantIds(allSelectedDialectIds);
    const filteredVoices = albanianVoices.filter((av) =>
      variantIds.includes(av?.variant?.id)
    );
    setFilteredVoiceArtefacts(filteredVoices);
  }, [artefactFilters]);
  const getColorIndicator = (voice: VoiceArtifact) => {
    return getSubDialectColorIndicatorFromVariant(voice?.variant?.id);
  };
  return (
    <View>
      <View style={styles.backButton}>
        <CircleButton name="filter-outline" onPress={handleShowFilters} />
      </View>
      <MapView
        style={styles.map}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
      >
        {filteredVoiceArtefacts.map((voice) => (
          <Marker
            key={voice.id}
            identifier={voice.id.toString()}
            // description={voice.id.toString()}
            // get a better color to indicate that pin is selected
            pinColor={isSelected(voice.id) ? "red" : getColorIndicator(voice)}
            onSelect={(index) => console.log(`this is it ${index}`)}
            coordinate={{
              latitude: voice.coordinates[0],
              longitude: voice.coordinates[1],
            }}
            onPress={() => handleMarkerClicked(voice)}
          />
        ))}
      </MapView>
      <VoiceArtifactsFilterSheet
        shouldShow={showFilters}
        onClose={() => setShowFilters(false)}
        filters={artefactFilters}
        onFilter={handleOnFilter}
      />
      <VoiceDetailsSheet
        voiceArtifact={selectedVoiceArtifact}
        shouldShow={shouldShowVoiceArtifactDetails}
        onClose={handleVoiceArtifactDetailsClosed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    top: 40,
    right: 20,
    position: "absolute",
    zIndex: 100,
  },
  map: {
    height: Layout.window.height,
    width: Layout.window.width,
  },
  filterView: {
    margin: 20,
    width: "100%",
    height: "100%",
  },
});
