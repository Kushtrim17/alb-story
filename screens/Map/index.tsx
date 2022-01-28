import React from "react";
import { StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Layout from "../../constants/Layout";
import { albanianVoices } from "../../domain/data/artifacts/voices/albanian";

export default function MapScreen() {
  const region = {
    latitude: 41.350106,
    longitude: 20.526966,
    latitudeDelta: 5.0922,
    longitudeDelta: 5.0421,
  };

  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: Layout.window.height,
    width: Layout.window.width,
  },
});
