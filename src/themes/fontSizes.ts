interface FontSizes extends Array<string> {
  extraSmall: string;
  small: string;
  medium: string;
  mediumLarge: string;
  large: string;
  extraLarge: string;
}
const fontSizes: FontSizes = Object.assign([
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
]);

fontSizes.extraSmall = fontSizes[0];
fontSizes.small = fontSizes[1];
fontSizes.medium = fontSizes[2];
fontSizes.mediumLarge = fontSizes[3];
fontSizes.large = fontSizes[4];
fontSizes.extraLarge = fontSizes[5];

export default fontSizes;
