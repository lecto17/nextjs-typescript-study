import colors from "@/themes/colors";
import fontSizes from "@/themes/fontSizes";
import letterSpacings from "@/themes/letterSpacings";
import lineHeights from "@/themes/lineHeights";
import space from "@/themes/space";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  space,
  fontSizes,
  letterSpacings,
  lineHeights,
  colors,
} as const;
