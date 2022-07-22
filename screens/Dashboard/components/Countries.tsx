import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CountryCard from "../../../components/Card/CountryCard";
import Margin from "../../../components/Margin/Margin";
import HeadlineBold from "../../../components/Text/HeadlineBold";
import { Text, View } from "../../../components/Themed";
import { getCountries } from "../../../domain/application/application";

export default function Countries() {
  return (
    <>
      <HeadlineBold>Spoken in Countries</HeadlineBold>
      <Margin size={10} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {getCountries().map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
