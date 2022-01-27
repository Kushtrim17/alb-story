import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Audio } from "expo-av";
import MapView, { Marker } from "react-native-maps";
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

const VoiceDetailsBody: React.FC<{ voiceArtifact: VoiceArtifact }> = ({ voiceArtifact }) => {
  return (
    <View style={styles.details}>
      <HeadlineBold>{voiceArtifact?.variant?.name}</HeadlineBold>
      <BodyTextSmall>Tosk - Northern Tosk</BodyTextSmall>
      {/* <BodyTextSmall>{voiceArtifact?.} - Northern Tosk</BodyTextSmall> */}
      <Margin size={10} />
      <Title>Country</Title>
      <ListItemSimple text={"Albania"} hideRightIcon />
      <Margin size={10} />
      <Title>City</Title>
      <ListItemSimple text={"Saranda"} hideRightIcon />
      <Margin size={10} />
      <Title>Speaker</Title>
      <ListItemSimple text={"Hisni Xhemaili"} hideRightIcon />
      <Margin size={10} />
      <Title>Recorded by</Title>
      <ListItemSimple text={"Robert Elsie & Artur Metani"} hideRightIcon />
      <Margin size={10} />
      <Title>Duration</Title>
      <ListItemSimple text={"50 seconds"} hideRightIcon />
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

  const handleListenToRecording = async () => {
    try {
      console.log("we have played it ..");
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
        <MapView style={styles.map} />
        <Marker coordinate={{ latitude: LATITUDE, longitude: LONGITUDE }} />
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
    borderBottomLeftRadius: 30,
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
