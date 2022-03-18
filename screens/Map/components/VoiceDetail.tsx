import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ABottomSheet } from "../../../components-external/ABottomSheet/ABottomSheet";
import HButton from "../../../components/Button/HButton";
import ListItemSimple from "../../../components/ListItem/ListItemSimple";
import Margin from "../../../components/Margin/Margin";
import BodyTextSmall from "../../../components/Text/BodyTextSmall";
import HeadlineBold from "../../../components/Text/HeadlineBold";
import Title from "../../../components/Text/Title";
import { View as ThemedView } from "../../../components/Themed";
import Layout from "../../../constants/Layout";
import { getDialectAndSubdialectFromVariant } from "../../../domain/application/application";
import { VoiceArtifact } from "../../../domain/entities/VoiceArtifact/VoiceArtifact";
import VoiceArtifactDetails from "../../VoiceDetails/components/VoiceArtifactDetails";

type Props = {
  voiceArtifact?: VoiceArtifact;
  shouldShow: boolean;
  onClose: () => void;
};

export default function VoiceDetailsSheet(props: Props) {
  const { voiceArtifact, shouldShow, onClose } = props;
  const [recording, setRecording] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { dialect, subDialect } = getDialectAndSubdialectFromVariant(voiceArtifact?.variant?.id || "");

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
      if (props.voiceArtifact == null) {
        return;
      }

      const { sound } = await Audio.Sound.createAsync({ uri: props.voiceArtifact.artifactUrl }, { volume: 1 });
      setRecording(sound);
    };

    handleNewRecording();

    return () => {
      recording?.stopAsync();
      setIsPlaying(false);
      setRecording(null);
    };
  }, [props.voiceArtifact]);

  if (props.voiceArtifact == null) {
    return null;
  }

  return (
    <ABottomSheet shouldShow={props.shouldShow} onClose={props.onClose} snapPoints={[50, 85]}>
      <View style={styles.container}>
        <HeadlineBold>{props.voiceArtifact?.variant?.name}</HeadlineBold>
        <BodyTextSmall>
          {dialect.name} - {subDialect.name}
        </BodyTextSmall>
        <Margin size={10} />
        <Title>Country</Title>
        <ListItemSimple text={props.voiceArtifact.country?.name!!} hideRightIcon />
        <Margin size={10} />
        <Title>City</Title>
        <ListItemSimple text={props.voiceArtifact.city?.name!!} hideRightIcon />
        <Margin size={10} />
        <Title>Speaker</Title>
        <ListItemSimple text={props.voiceArtifact.speakerName} hideRightIcon />
        <Margin size={10} />
        <Title>Recorded by</Title>
        <ListItemSimple text={props.voiceArtifact.recordedBy.join(" & ")} hideRightIcon />
        <Margin size={10} />
        <View style={styles.listenButton}>
          <HButton label={isPlaying ? "Pause" : "Listen"} onPress={handleListenToRecording} />
        </View>
      </View>
    </ABottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  listenButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
