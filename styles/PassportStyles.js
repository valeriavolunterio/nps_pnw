import { Dimensions, StyleSheet, Platform } from "react-native";
import { Colors } from "../styles/Colors.js";
import { Fonts } from "../styles/Fonts.js";

const { height: deviceHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  passportView: {
    flex: 1,
  },
  // All passport styles
  container: {
    flex: 1,
    minHeight: deviceHeight,
    alignItems: "center",
    justifyContent: "top",
    position: "relative",
    paddingHorizontal: 20,
    backgroundColor: Colors.offWhite,
  },
  // User Card styles
  userCard: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: Colors.lightOffWhite,
    borderRadius: 5,
    elevation: 5, // Add elevation for drop shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  userImgContainer: {
    width: "35%",
  },
  userImg: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    borderColor: Colors.white,
    borderWidth: 6,
  },
  editButton: {
    aspectRatio: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  overlay: { opacity: 0.25, backgroundColor: "black" },
  userInfo: {
    width: "60%",
    marginLeft: 20,
  },
  userTitle: {
    ...Fonts.header2,
    color: Colors.green,
  },
  body: {
    ...Fonts.body,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  // Badge styles
  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  badgeContainer: {
    width: "50%",
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
  },
  // Input styles
  nameInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  inputCard: {
    width: "90%",
    padding: 20,
    backgroundColor: Colors.lightOffWhite,
    borderRadius: 5,
    elevation: 5, // Add elevation for drop shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 30,
    marginBottom: 30,
  },
  inputTitle: { ...Fonts.header3, marginBottom: 20 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  formInput: {
    backgroundColor: Colors.white,
    height: 40,
    flex: 1,
    marginLeft: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  floatingButton: {
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: -5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        height: 60,
        bottom: 170,
      },
      android: {
        elevation: 5, // Adjust elevation for Android
        height: 60,
        bottom: 100,
      },
    }),
  },
});
