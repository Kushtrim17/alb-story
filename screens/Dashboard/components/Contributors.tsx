import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HLinearGradient from "../../../components-external/HLinearGradient/HLinearGradient";
import Margin from "../../../components/Margin/Margin";
import BodyText from "../../../components/Text/BodyText";
import Headline from "../../../components/Text/Headline";
import HeadlineBold from "../../../components/Text/HeadlineBold";
import { Text, View } from "../../../components/Themed";
import { ColorPalette } from "../../../constants/Colors";
import { getContributors } from "../../../domain/application/application";

export default function Contributors() {
  const navigation = useNavigation();
  const colors = [ColorPalette.Primary, ColorPalette.Highlight];
  const [contributors, setContributors] = useState<string[]>([]);
  const [nrOfContributors, setNrOfContributors] = useState(0);

  const getInitials = (fullName: string) => {
    const [firstName, lastName] = fullName.split(" ");
    const initials = `${firstName[0]}${lastName[0]}`;

    return initials.toUpperCase();
  };

  const handleGoToContributors = () => {
    navigation.navigate("Contributors");
  };

  useEffect(() => {
    const all = getContributors();
    setNrOfContributors(all.length);
    setContributors(all.splice(0, 5));
  }, []);

  return (
    <>
      <View style={styles.header}>
        <HeadlineBold>Contributors</HeadlineBold>
        <TouchableOpacity onPress={handleGoToContributors}>
          <BodyText>View All ({nrOfContributors})</BodyText>
        </TouchableOpacity>
      </View>
      <Margin size={10} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {contributors.map((contributor) => (
          <HLinearGradient key={contributor} colors={colors} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} styles={styles.avatar}>
            <Headline>{getInitials(contributor)}</Headline>
          </HLinearGradient>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 5,
    backgroundColor: ColorPalette.Primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
