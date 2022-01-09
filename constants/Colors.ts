export const ColorPalette = {
  Primary: "#8352FD",
  Primary2: "#3913B8",
  Secondary: "#00CFFD",
  Secondary2: "#2FB5FC",
  NaturalDark: "#1A2151",
  NaturalLight: "#E3E8FF",
  Black: "#000",
  White: "#FFFFFF",
};

export default {
  light: {
    text: ColorPalette.Black,
    background: ColorPalette.NaturalLight,
    tint: ColorPalette.Primary,
    tabIconDefault: ColorPalette.Black,
    tabIconSelected: ColorPalette.Primary,
    input: ColorPalette.White,
  },
  dark: {
    text: ColorPalette.White,
    background: ColorPalette.Black,
    tint: ColorPalette.Primary,
    tabIconDefault: ColorPalette.White,
    tabIconSelected: ColorPalette.Primary,
    input: "#211f26",
  },
};
