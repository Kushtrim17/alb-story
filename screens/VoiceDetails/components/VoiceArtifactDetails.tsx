import React from "react";
import { StyleSheet, View } from "react-native";
import ListItemSimple from "../../../components/ListItem/ListItemSimple";
import Margin from "../../../components/Margin/Margin";
import BodyTextSmall from "../../../components/Text/BodyTextSmall";
import HeadlineBold from "../../../components/Text/HeadlineBold";
import Title from "../../../components/Text/Title";
import { getDialectAndSubdialectFromVariant } from "../../../domain/application/application";
import { VoiceArtifact } from "../../../domain/entities/VoiceArtifact/VoiceArtifact";

type Props = {
  voiceArtifact: VoiceArtifact;
};

export default function VoiceArtifactDetails(props: Props) {
  const { voiceArtifact } = props;
  const { dialect, subDialect } = getDialectAndSubdialectFromVariant(voiceArtifact.variant.id);

  return (
    <View style={styles.details}>
      <HeadlineBold>{voiceArtifact?.variant?.name}</HeadlineBold>
      <BodyTextSmall>
        {dialect.name} - {subDialect.name}
      </BodyTextSmall>
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
}

const styles = StyleSheet.create({
  details: {
    margin: 20,
  },
});
