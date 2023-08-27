import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import HLinearGradient from "../../components-external/HLinearGradient/HLinearGradient";
import CircleButton from "../../components/Button/CircleButton";
import VariantCard from "../../components/Card/VariantCard";
import ListItem from "../../components/ListItem/ListItem";
import Margin from "../../components/Margin/Margin";
import BodyText from "../../components/Text/BodyText";
import Headline from "../../components/Text/Headline";
import HeadlineBold from "../../components/Text/HeadlineBold";
import When from "../../components/When/When";
import { ColorPalette } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import {
  getDialectById,
  getNrOfRecordingsFromSubDialect,
  getSubDialectRecorings,
} from "../../domain/application/application";
import { Subdialect } from "../../domain/entities/SubDialect/SubDialect";
import { VoiceArtifact } from "../../domain/entities/VoiceArtifact/VoiceArtifact";

type ParamList = {
  Subdialect: {
    subDialect: Subdialect;
  };
};

export default function SubDialectDetailsScreen() {
  const {
    params: { subDialect },
  } = useRoute<RouteProp<ParamList, "Subdialect">>();
  const navigation = useNavigation();
  const colors = [subDialect.colorIndicator, ColorPalette.Highlight];
  const [recordings, setRecordings] = useState<VoiceArtifact[]>([]);
  const [enableBodyScroll, setEnableBodyScroll] = useState(false);
  const keyExtractor = (activity: any, index: number) => index.toString();

  const getHeaderMarginTop = () => {
    return Platform.OS === "ios" ? 0 : 5;
  };

  const handleHeaderScrollEnd = () => {
    if (Platform.OS === "ios") {
      setEnableBodyScroll(true);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const subDialectRecordings = getSubDialectRecorings(subDialect);
    setRecordings(subDialectRecordings);
  }, []);

  return (
    <>
      <StickyParallaxHeader
        headerType="DetailsHeader"
        backgroundColor={subDialect.colorIndicator}
        bounces={false}
        tag={getDialectById(subDialect.dialectId)?.name}
        title={subDialect.name}
        snapToEdge
        onMomentumScrollEnd={handleHeaderScrollEnd}
        contentIconNumber={getNrOfRecordingsFromSubDialect(subDialect)}
        leftTopIcon={() => (
          <View style={{ marginTop: getHeaderMarginTop() }}>
            <CircleButton name="chevron-back" small onPress={handleGoBack} />
          </View>
        )}
      >
        <View style={styles.body}>
          <When isTrue={Platform.OS === "android"}>
            {recordings.map((item) => (
              <ListItem
                key={item.id}
                title={item.speakerName}
                colorIndicator={item.dialect?.colorIndicator}
                subTitle={item.variant?.name || item.subDialect?.name || ""}
                onPress={() =>
                  navigation.navigate("VoiceDetails", { voiceArtifact: item })
                }
              />
            ))}
          </When>
          <When isTrue={Platform.OS === "ios"}>
            <FlatList
              style={styles.listContainer}
              keyExtractor={keyExtractor}
              data={recordings}
              renderItem={({ item }) => (
                <ListItem
                  key={item.id}
                  title={item.speakerName}
                  colorIndicator={item.dialect?.colorIndicator}
                  subTitle={item.variant?.name || item.subDialect?.name || ""}
                  onPress={() =>
                    navigation.navigate("VoiceDetails", { voiceArtifact: item })
                  }
                />
              )}
              scrollEnabled={enableBodyScroll}
              ListFooterComponent={<View style={{ height: 200 }} />}
            />
          </When>
        </View>
      </StickyParallaxHeader>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backButton: {
    top: 40,
    left: 20,
    position: "absolute",
    zIndex: 100,
  },
  body: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  listContainer: {
    height: Layout.window.height,
  },
});
