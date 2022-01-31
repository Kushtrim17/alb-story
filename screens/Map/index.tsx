import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import CircleButton from "../../components/Button/CircleButton";
import ScreenView from "../../components/Screen";
import Layout from "../../constants/Layout";
import { albanianVoices } from "../../domain/data/artifacts/voices/albanian";
import VoicesFilter from "../Voices/components/VoicesFilter";

export default function MapScreen() {
  const [showFilters, setShowFilters] = useState(false);

  const region = {
    latitude: 41.350106,
    longitude: 20.526966,
    latitudeDelta: 5.0922,
    longitudeDelta: 5.0421,
  };

  const handleShowFilters = () => {
    setShowFilters(true);
  };

  return (
    <View>
      <View style={styles.backButton}>
        <CircleButton name="filter-outline" onPress={handleShowFilters} />
      </View>
      <MapView style={styles.map} region={region}>
        {albanianVoices.map((voice, index) => (
          <Marker
            key={index}
            title={voice.speakerName}
            description={voice.speakerDescription}
            coordinate={{ latitude: voice.coordinates[0], longitude: voice.coordinates[1] }}
          />
        ))}
      </MapView>
      <VoicesFilter shouldShow={showFilters} onClose={() => setShowFilters(false)} />
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
