import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xLarge+3,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium+2,
    color: COLORS.primary,
    marginTop: 2,
  },
  description: {
    fontSize: SIZES.small,
    marginTop: 3,
    color: COLORS.black,

  }
});

export default styles;
