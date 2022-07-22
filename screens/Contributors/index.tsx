import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import ListItemSimple from "../../components/ListItem/ListItemSimple";
import { View } from "../../components/Themed";
import { getContributors } from "../../domain/application/application";

export default function ContributorsScreen() {
  const [contributors, setContributors] = useState<string[]>([]);

  useEffect(() => {
    const allContributors = getContributors();
    setContributors(allContributors);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {contributors.map((contributor) => (
          <ListItemSimple key={contributor} text={contributor} hideRightIcon />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
