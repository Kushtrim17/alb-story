import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ColorPalette } from '../../constants/Colors';

type Props = {
  onPress: () => void;
  name: React.ComponentProps<typeof Ionicons>["name"];
  size?: number;
  small?: boolean;
};

export default function CircleButton(props: Props) {
  const isSmall = props.small || false;

  return (
    <Pressable style={styles(isSmall).container} onPress={props.onPress}>
      <Ionicons name={props.name} size={isSmall ? 24 : 30} style={styles(isSmall).icon} />
    </Pressable>
  );
}

const styles = (isSmall: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: ColorPalette.White,
      height: isSmall ? 35 : 40,
      width: isSmall ? 35 : 40,
      borderRadius: isSmall ? 17 : 20,
      alignItems: "center",

      shadowColor: "black",
      shadowOffset: {
        width: 7,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 1,
    },
    icon: {
      paddingTop: 5,
    },
  });
