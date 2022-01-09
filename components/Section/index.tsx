import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Margin from "../Margin/Margin";
import SectionHeader from "./SectionHeader";

type Props = {
  title: string;
  actionText?: string;
  onPress?: () => void;
  children: React.ReactNode;
  // can override the default
  variant?: "light" | "dark";
  style?: any;
};

export default function Section(props: Props) {
  return (
    <View style={styles.container}>
      <SectionHeader title={props.title} actionText={props.actionText} variant={props.variant} onPress={props.onPress} />
      <Margin size={5} />
      <View style={props.style}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "column",
  },
});
