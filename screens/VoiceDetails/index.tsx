import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Audio } from "expo-av";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import CircleButton from "../../components/Button/CircleButton";
import HButton from "../../components/Button/HButton";
import { View as ThemedView } from "../../components/Themed";
import Layout from "../../constants/Layout";
import { VoiceArtifact } from "../../domain/entities/VoiceArtifact/VoiceArtifact";
import VoiceArtifactDetails from "./components/VoiceArtifactDetails";
import { getSubDialectColorIndicatorFromVariant } from "../../domain/application/application";

type ParamList = {
  VoiceDetails: {
    voiceArtifact: VoiceArtifact;
  };
};

export default function VoiceDetails() {
  const {
    params: { voiceArtifact },
  } = useRoute<RouteProp<ParamList, "VoiceDetails">>();
  const navigation = useNavigation();
  const [recording, setRecording] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const region = {
    latitude: voiceArtifact.coordinates[0],
    longitude: voiceArtifact.coordinates[1],
    latitudeDelta: 1.0922,
    longitudeDelta: 2.0421,
  };

  const handleListenToRecording = async () => {
    try {
      if (recording == null) {
        return;
      }

      if (!isPlaying) {
        setIsPlaying(true);
        return await recording.playAsync();
      }

      setIsPlaying(false);
      return await recording.stopAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const getColorIndicator = (voice: VoiceArtifact) => {
    return getSubDialectColorIndicatorFromVariant(voice.variant.id);
  };

  useEffect(() => {
    const handleNewRecording = async () => {
      const { sound } = await Audio.Sound.createAsync({ uri: voiceArtifact.artifactUrl }, { volume: 1 });
      setRecording(sound);
    };

    handleNewRecording();
  }, []);

  const handleGoBack = async () => {
    setIsPlaying(false);
    await recording?.stopAsync();

    navigation.goBack();
  };

  return (
    <View>
      <View style={styles.backButton}>
        <CircleButton name="chevron-back" onPress={handleGoBack} />
      </View>
      <ScrollView>
        <MapView style={styles.map} region={region} provider={PROVIDER_GOOGLE} userInterfaceStyle={"dark"}>
          <Marker
            pinColor={getColorIndicator(voiceArtifact)}
            coordinate={{ latitude: voiceArtifact.coordinates[0], longitude: voiceArtifact.coordinates[1] }}
          />
        </MapView>
        <VoiceArtifactDetails voiceArtifact={voiceArtifact} />
      </ScrollView>
      <ThemedView style={styles.listenButton}>
        <HButton label={isPlaying ? "Pause" : "Listen"} onPress={handleListenToRecording} />
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    top: 40,
    width: 200,
    left: 20,
    position: "absolute",
    zIndex: 100,
  },
  map: {
    height: 350,
    width: Layout.window.width,
  },
  listenButton: {
    position: "absolute",
    bottom: 0,
    width: Layout.window.width,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
});
