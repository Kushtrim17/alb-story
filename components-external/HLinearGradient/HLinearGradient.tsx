import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

type Props = {
  colors: string[];
  start: { x: number; y: number };
  end: { x: number; y: number };
  styles?: object;
  children?: React.ReactNode;
};

export default function HLinearGradient(props: Props) {
  return (
    <LinearGradient colors={props.colors} start={props.start} end={props.end} style={props.styles}>
      {props.children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
