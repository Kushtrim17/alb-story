import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { Text } from "../../components/Themed";

export default function BuildInformation() {
  return (
    <View style={styles.container}>
      <Text>Version: {Constants.manifest?.version}</Text>
      <Text>Legacy of Robert Elsie</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
