import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  ...chakraTheme.fonts,
  heading:
    "Georgia, 游明朝, Yu Mincho, YuMincho, Hiragino Mincho, ProN, HGS明朝E, メイリオ, Meiryo, serif",
  body: "Georgia, 游明朝, Yu Mincho, YuMincho, Hiragino Mincho, ProN, HGS明朝E, メイリオ, Meiryo, serif",
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
