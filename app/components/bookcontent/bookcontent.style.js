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
    width: 300,
    height: 420,
    borderWidth:2,
    borderColor: COLORS.black,
    borderRadius: 10,
    marginVertical: 25, 
  },
  generating: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    marginBottom: 10,
    textAlign: 'center'
  },
  pictureContainer: {
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
});

export default styles;
