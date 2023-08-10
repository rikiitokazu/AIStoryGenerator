import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  generatedImage: {
    width: 256,
    height: 256,
    borderWidth:3,
    borderColor: COLORS.black,
    borderRadius: 10,
  },
  generating: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    marginBottom: 10,
    textAlign: 'center'
  },
  pictureContainer: {
    flex:1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.black,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
  content: {
    marginBottom: SIZES.small,
  },
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  author: {
    flex:1,
    fontSize: SIZES.large-3,
    color: COLORS.black,
    fontFamily: FONT.medium,
    marginBottom:SIZES.small+3,
    marginTop:1, 
    textAlign: 'center',
  },
  difficulty: {
    fontSize: SIZES.small,
    color: COLORS.black,
    fontFamily: FONT.medium,
    marginBottom:SIZES.small+3,
  },
  estimatedTime: {
    fontSize: SIZES.small,
    color: COLORS.black,
    fontFamily: FONT.medium,
    marginBottom:SIZES.small+3, 
  },
  bookDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:20,
    borderBottomWidth:1,
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});

export default styles;
