import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Margin from "../../components/Margin/Margin";
import ScreenView from "../../components/Screen";
import BodyText from "../../components/Text/BodyText";
import Headline from "../../components/Text/Headline";
import HeadlineBold from "../../components/Text/HeadlineBold";
import { AlbanianLanguage } from "../../domain/data/albanian";

export default function DashboardScreen() {
  return (
    <ScreenView>
      <HeadlineBold>Albanian Dialects</HeadlineBold>
      <ScrollView>
        <BodyText>{AlbanianLanguage.description}</BodyText>
        <Margin size={10} />
        {AlbanianLanguage.dialects.map((dialect) => (
          <Headline key={dialect.id}>{dialect.name}</Headline>
        ))}
      </ScrollView>
    </ScreenView>
  );
}

const styles = StyleSheet.create({});
