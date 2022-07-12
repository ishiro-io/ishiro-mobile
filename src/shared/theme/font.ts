import { createInterFont } from "@tamagui/font-inter";

export const headingFont = createInterFont({
  size: {
    6: 15
  },
  transform: {
    6: "uppercase",
    7: "none"
  },
  weight: {
    6: "400",
    7: "700"
  },
  color: {
    6: "$colorFocus",
    7: "$color"
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6
  }
});

export const bodyFont = createInterFont(
  {},
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10))
  }
);
