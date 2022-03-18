import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import Colors, { ColorPalette } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

type Props = {
  snapPoints?: number[];
  shouldShow: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

export const ABottomSheet: React.FC<Props> = (props: Props) => {
  const theme = useColorScheme();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const defaultSnapPoints = ["50%", "60%", "70%"];

  const snapPoints = useMemo(() => (props?.snapPoints ? props.snapPoints.map((s) => `${s}%`) : defaultSnapPoints), []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderBackdrop = useCallback((props) => <BottomSheetBackdrop {...props} appearsOnIndex={2} opacity={0.4} />, []);

  if (!props.shouldShow) {
    return null;
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      style={styles(theme).bottomSheet}
      handleStyle={styles(theme).handleStyle}
      handleIndicatorStyle={styles(theme).indicatorStyle}
      enablePanDownToClose
      onClose={props.onClose}
      backdropComponent={renderBackdrop}
    >
      <View style={styles(theme).container}>{props?.children}</View>
    </BottomSheet>
  );
};

const styles = (theme: "light" | "dark") =>
  StyleSheet.create({
    handleStyle: {
      backgroundColor: Colors[theme].background,
    },
    indicatorStyle: {
      backgroundColor: Colors[theme].text,
    },
    bottomSheet: {
      backgroundColor: Colors[theme].background,
      shadowColor: ColorPalette.Primary,

      shadowOffset: {
        width: 20,
        height: 28,
      },
      shadowOpacity: 0.96,
      shadowRadius: 51.14,

      elevation: 24,
    },
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: Colors[theme].background,
    },
  });
