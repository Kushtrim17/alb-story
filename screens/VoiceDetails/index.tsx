import { useNavigation } from "@react-navigation/native";
import React from "react";
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

const VoiceDetailsBody: React.FC = () => {
  return (
    <View style={styles.details}>
      <HeadlineBold>Cham Variant</HeadlineBold>
      <BodyTextSmall>Tosk - Northern Tosk</BodyTextSmall>
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

export default function VoiceDetails() {
  const LATITUDE = 37.78825;
  const LONGITUDE = -122.4324;
  const navigation = useNavigation();

  const handleListenToRecording = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(require("./../../assets/sounds/one-beep.wav"), { volume: 1 });

      await sound.playAsync();
      console.log("we have played it ..");
    } catch (error) {
      console.log("-----------------------");
      console.log(error);
      console.log("-----------------------");
    }
  };

  return (
    <View>
      <View style={styles.backButton}>
        <CircleButton name="chevron-back" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>
        <MapView style={styles.map} />
        <Marker coordinate={{ latitude: LATITUDE, longitude: LONGITUDE }} />
        <VoiceDetailsBody />
      </ScrollView>
      <ThemedView style={styles.listenButton}>
        <HButton label={"Listen"} onPress={handleListenToRecording} />
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
