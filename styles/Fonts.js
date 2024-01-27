import { useFonts } from "expo-font";

export const Fonts = {
  // headings
  header1: {
    fontFamily: "Stoke-Regular",
    fontSize: 22,
    fontStyle: "normal",
  },
  header2: {
    fontFamily: "Stoke-Regular",
    fontSize: 20,
    fontStyle: "normal",
  },
  header3: {
    fontFamily: "MPLUS1-Regular",
    fontSize: 18,
    fontStyle: "normal",
  },
  header4: {
    fontFamily: "Open-Sans-SemiBold",
    fontSize: 16,
    fontStyle: "normal",
  },

  // sub, button, and body
  subheading: {
    fontFamily: "Open-Sans-SemiBold",
    fontSize: 16,
    fontStyle: "normal",
  },
  button: {
    fontFamily: "MPLUS1p-Bold",
    fontSize: 16,
    fontStyle: "normal",
  },
  body: {
    fontFamily: "OpenSans-Regular",
    fontSize: 14,
    fontStyle: "normal",
  },

  // utility
};

export const loadFonts = async () => {
  await useFonts({
    "Stoke-Regular": require("../assets/fonts/Stoke-Regular.ttf"),
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    "MPLUS1-Regular": require("../assets/fonts/MPLUS1-Regular.ttf"),
    "MPLUS1p-Bold": require("../assets/fonts/MPLUS1p-Bold.ttf"),
  });
};
