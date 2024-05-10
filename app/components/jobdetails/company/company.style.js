<<<<<<< HEAD:app/components/jobdetails/company/company.style.js
import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

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
    width: "80%",
    height: "80%",
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
=======
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
>>>>>>> 2eb1148f844d053d2c830dec6878fd8efd7fd71c:app/components/bookcontent/bookcontent.style.js
