import React from "react";
import { ScrollView, StyleSheet, View as DefaultView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "../../components/Themed";
import Layout from "../../constants/Layout";
import When from "../When/When";

type Props = {
  withSafeArea?: boolean;
  scrollable?: boolean;
  withoutMargins?: boolean;
  BackgroundHeader?: React.ReactNode;
  children: React.ReactNode;
};

export default function ScreenView(props: Props) {
  const noMargins = props?.withoutMargins || false;

  return (
    <>
      <When isTrue={props.withSafeArea === true}>
        <SafeAreaView testID="screenView" style={styles(noMargins).container}>
          <When isTrue={props?.scrollable === true}>
            <ScrollView style={styles(noMargins).scrollableView}>
              {props.BackgroundHeader}
              <DefaultView style={styles(noMargins).scrollableViewBody}>{props.children}</DefaultView>
            </ScrollView>
          </When>
          <When isTrue={props?.scrollable == undefined}>
            {props.BackgroundHeader}
            <DefaultView style={styles(noMargins).body}>{props.children}</DefaultView>
          </When>
        </SafeAreaView>
      </When>
      <When isTrue={props.withSafeArea == undefined}>
        <View testID="screenView" style={styles(noMargins).container}>
          <When isTrue={props?.scrollable === true}>
            <ScrollView style={styles(noMargins).scrollableView}>
              {props.BackgroundHeader}
              <DefaultView style={styles(noMargins).scrollableViewBody}>{props.children}</DefaultView>
            </ScrollView>
          </When>
          <When isTrue={props?.scrollable == undefined}>
            {props.BackgroundHeader}
            <DefaultView style={styles(noMargins).body}>{props.children}</DefaultView>
          </When>
        </View>
      </When>
    </>
  );
}

const styles = (noMargins: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    body: {
      position: "absolute",
      top: 20,
      margin: noMargins ? undefined : 20,
      width: noMargins ? Layout.window.width : Layout.window.width - 40,
      height: "94.5%",
    },
    scrollableView: {
      height: Layout.window.height - 10,
    },
    scrollableViewBody: {
      // offset the header cover height
      marginTop: -500,
      marginLeft: 20,
      marginRight: 20,
    },
  });
