import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../styles/Colors.js";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import { SVGIcons } from "./SVGIcons.js";

const styles = StyleSheet.create({
  button: {
    alignItems: "stretch",
    alignSelf: "center",
    backgroundColor: Colors.baseTeal,
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    width: 312,
    height: 65,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "ButtonFont",
  },
});

const CustomButtonComponent = ({ icon, title, onPress }) => {
  const [fontsLoaded] = useFonts({
    ButtonFont: require("../assets/fonts/MPLUS1p-Bold.ttf"),
  });
  // Check if fonts are loaded before rendering the component
  if (!fontsLoaded) {
    return null; //return a loading indicator here
  }

  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export const CustomButtons = {
  safetyGuide: (
    <CustomButtonComponent
      icon={SVGIcons.buttons.safetyGuide}
      title="Pacific Northwest Safety Guide"
    />
  ),
  alerts: (
    <CustomButtonComponent icon={SVGIcons.buttons.alerts} title="Alerts" />
  ),
  knowBefore: (
    <CustomButtonComponent
      icon={SVGIcons.buttons.knowBefore}
      title="Know Before"
    />
  ),
  place: <CustomButtonComponent icon={SVGIcons.buttons.place} title="Place" />,
  parkInfo: (
    <CustomButtonComponent icon={SVGIcons.buttons.parkInfo} title="Park Info" />
  ),
};
