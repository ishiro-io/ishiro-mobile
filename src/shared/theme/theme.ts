import { Theme } from "react-native-elements";
import {
  moderateScale,
  moderateVerticalScale
} from "react-native-size-matters";

const theme: Theme = {
  Button: {
    buttonStyle: {
      width: moderateScale(310),
      borderRadius: moderateScale(1000),
      height: moderateVerticalScale(44)
    },
    titleStyle: {
      fontSize: moderateScale(13, 0.25),
      fontFamily: "Poppins_600SemiBold",
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: 1
    }
  },
  Input: {
    inputStyle: {
      color: "#fff",
      fontFamily: "Poppins_400Regular",
      fontSize: moderateScale(12, 0.25)
    },
    inputContainerStyle: {
      height: moderateVerticalScale(40),
      backgroundColor: "#2f2f2f",
      borderRadius: moderateScale(8),
      borderBottomWidth: 0,
      paddingLeft: moderateScale(8)
    },
    labelStyle: {
      fontFamily: "Poppins_500Medium",
      fontSize: moderateScale(16, 0.25),
      color: "#fff",
      marginBottom: moderateVerticalScale(8)
    },
    errorStyle: { fontSize: moderateScale(10, 0.25) }
  },
  Text: { style: { color: "#fff", fontFamily: "Poppins_400Regular" } },
  colors: {
    primary: "#CE1126",
    primaryLighter: "#E14649",
    white: "#FFF",
    black: "#131313",
    grey0: "##ededed",
    grey1: "#e1e1e1",
    grey2: "#d3d3d3",
    grey3: "#c4c4c4",
    grey4: "#b3b3b3",
    grey5: "#a0a0a0",
    grey6: "#898989",
    grey7: "#6c6c6c",
    grey8: "#3f3f3f",
    grey9: "#2f2f2f",
    success: "#62AD13",
    error: "#D32643",
    warning: "#C17005",
    info: "#0087C6"
  },
  spacing: {
    xs: moderateVerticalScale(4),
    s: moderateVerticalScale(8),
    m: moderateVerticalScale(16),
    l: moderateVerticalScale(24),
    xl: moderateVerticalScale(40),
    xxl: moderateVerticalScale(64),
    "3xl": moderateVerticalScale(100)
  },
  borderRadii: {
    xs: moderateScale(5),
    s: moderateScale(8),
    m: moderateScale(14),
    l: moderateScale(24),
    xl: moderateScale(30),
    xxl: moderateScale(40)
  },
  textSize: {
    xs: moderateScale(8.5, 0.25),
    s: moderateScale(12, 0.25),
    m: moderateScale(16, 0.25),
    l: moderateScale(24, 0.25),
    xl: moderateScale(32, 0.25),
    xxl: moderateScale(64, 0.25)
  }
};

export default theme;
