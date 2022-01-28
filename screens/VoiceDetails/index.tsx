import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Audio } from "expo-av";
import MapView, { AnimatedRegion, Marker } from "react-native-maps";
import CircleButton from "../../components/Button/CircleButton";
import HButton from "../../components/Button/HButton";
import ListItemSimple from "../../components/ListItem/ListItemSimple";
import Margin from "../../components/Margin/Margin";
import BodyTextSmall from "../../components/Text/BodyTextSmall";
import HeadlineBold from "../../components/Text/HeadlineBold";
import Title from "../../components/Text/Title";
import { View as ThemedView } from "../../components/Themed";
import Layout from "../../constants/Layout";
import { VoiceArtifact } from "../../domain/entities/VoiceArtifact/VoiceArtifact";
import { AlbanianLanguage } from "../../domain/data/languages/Albanian/albanian";

const VoiceDetailsBody: React.FC<{ voiceArtifact: VoiceArtifact }> = ({ voiceArtifact }) => {
  const getDialect = () => {
    return "Tosk";
  };

  const getVariant = () => {
    return "Northern Tosk";
  };

  return (
    <View style={styles.details}>
      <HeadlineBold>{voiceArtifact?.variant?.name}</HeadlineBold>
      <BodyTextSmall>
        {getDialect()} - {getVariant()}
      </BodyTextSmall>
      {/* <BodyTextSmall>{voiceArtifact?.} - Northern Tosk</BodyTextSmall> */}
      <Margin size={10} />
      <Title>Country</Title>
      <ListItemSimple text={voiceArtifact.country?.name!!} hideRightIcon />
      <Margin size={10} />
      <Title>City</Title>
      <ListItemSimple text={voiceArtifact.city?.name!!} hideRightIcon />
      <Margin size={10} />
      <Title>Speaker</Title>
      <ListItemSimple text={voiceArtifact.speakerName} hideRightIcon />
      <Margin size={10} />
      <Title>Recorded by</Title>
      <ListItemSimple text={voiceArtifact.recordedBy.join(" & ")} hideRightIcon />
      <Margin size={10} />
      <Title>Duration</Title>
      <ListItemSimple text={`${voiceArtifact.duration.toString()} seconds`} hideRightIcon />
      <Margin size={50} />
    </View>
  );
};

type ParamList = {
  VoiceDetails: {
    voiceArtifact: VoiceArtifact;
  };
};

export default function VoiceDetails() {
  const LATITUDE = 37.78825;
  const LONGITUDE = -122.4324;

  const { params } = useRoute<RouteProp<ParamList, "VoiceDetails">>();
  const navigation = useNavigation();
  const [recording, setRecording] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const region = {
    latitude: params.voiceArtifact.coordinates[0],
    longitude: params.voiceArtifact.coordinates[1],
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

  useEffect(() => {
    const handleNewRecording = async () => {
      const { sound } = await Audio.Sound.createAsync({ uri: params.voiceArtifact.artifactUrl }, { volume: 1 });

      setRecording(sound);
    };

    handleNewRecording();

    return () => {
      recording?.stopAsync();
      setIsPlaying(false);
      setRecording(null);
    };
  }, []);

  return (
    <View>
      <View style={styles.backButton}>
        <CircleButton name="chevron-back" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>
        <MapView style={styles.map} region={region}>
          <Marker coordinate={{ latitude: params.voiceArtifact.coordinates[0], longitude: params.voiceArtifact.coordinates[1] }} />
        </MapView>
        <VoiceDetailsBody voiceArtifact={params.voiceArtifact} />
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
  details: {
    margin: 20,
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
