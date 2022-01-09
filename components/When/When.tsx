import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

type Props = {
  isTrue: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

export default function When(props: Props) {
  const { isTrue, fallback = null, children } = props;

  return <>{isTrue ? children : fallback}</>;
}

const styles = StyleSheet.create({});
