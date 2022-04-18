import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import BuildInformation from "../../components/BuildInformation/BuildInformation";
import CountryCard from "../../components/DialectCard/CountryCard";
import Margin from "../../components/Margin/Margin";
import ScreenView from "../../components/Screen";
import BodyText from "../../components/Text/BodyText";
import Headline from "../../components/Text/Headline";
import HeadlineBold from "../../components/Text/HeadlineBold";
import { getCountries } from "../../domain/application/application";
import { AlbanianLanguage } from "../../domain/data/languages/Albanian/albanian";
import DialectDetails from "./components/DialectDetails";

export default function DashboardScreen() {
  return (
    <ScreenView>
      <Margin size={5} />
      <HeadlineBold>Albanian Language</HeadlineBold>
      <ScrollView>
        <BodyText>{AlbanianLanguage.description}</BodyText>
        <Margin size={10} />
        {AlbanianLanguage.dialects.map((dialect) => (
          <DialectDetails key={dialect.id} dialect={dialect} />
        ))}
        <Margin size={10} />
        <HeadlineBold>Spoken in Countries</HeadlineBold>
        <Margin size={10} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {getCountries().map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </ScrollView>
        <BuildInformation />
      </ScrollView>
    </ScreenView>
  );
}

const styles = StyleSheet.create({});
