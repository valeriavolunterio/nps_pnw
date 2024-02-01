import React from "react";
import { Pressable, Text, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../styles/Colors.js";
import { Fonts } from "../styles/Fonts.js";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import { SVGIcons } from "./SVGIcons.js";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: Colors.baseTeal,
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    width: width - 50,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    ...Fonts.button,
    color: "white",
    marginLeft: 2,
  },
});

const CustomButtonComponent = ({ icon, title, onPress, isSafetyGuide }) => {
  const [fontsLoaded] = useFonts({
    ButtonFont: require("../assets/fonts/MPLUS1p-Bold.ttf"),
  });
  // Check if fonts are loaded before rendering the component
  if (!fontsLoaded) {
    return null; //return a loading indicator here
  }

  return (
    <Pressable
      style={[styles.button, isSafetyGuide ? { height: "70" } : { height: 60 }]}
      onPress={onPress}
    >
      {icon}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export const TealButton = {
  safetyGuide: (props) => (
    <CustomButtonComponent
      icon={<SVGIcons.buttons.safetyGuide size={42} color={Colors.darkTeal} />}
      title="Pacific Northwest Safety Guide"
      isSafetyGuide={true}
      {...props}
    />
  ),
  alerts: (props) => (
    <CustomButtonComponent
      icon={<SVGIcons.buttons.alerts size={42} color={Colors.darkTeal} />}
      title="Alerts"
      {...props}
    />
  ),
  knowBefore: (props) => (
    <CustomButtonComponent
      icon={<SVGIcons.buttons.knowBefore size={42} color={Colors.darkTeal} />}
      title="Know Before"
      {...props}
    />
  ),
  places: (props) => (
    <CustomButtonComponent
      icon={<SVGIcons.buttons.place size={42} color={Colors.darkTeal} />}
      title="Place"
      {...props}
    />
  ),
  parkInfo: (props) => (
    <CustomButtonComponent
      icon={<SVGIcons.buttons.parkInfo size={42} color={Colors.darkTeal} />}
      title="Park Info"
      {...props}
    />
  ),
};
