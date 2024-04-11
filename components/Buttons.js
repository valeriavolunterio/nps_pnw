import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../styles/Colors.js";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "../styles/Fonts";
import {SVGIcons} from "./SVGIcons.js";

const CustomButton = ({ onPress, title, icons }) => {
  const [fontsLoaded] = useFonts({
    ButtonFont: require("../assets/fonts/MPLUS1p-Bold.ttf"),
  });
  // Check if fonts are loaded before rendering the component
  if (!fontsLoaded) {
    return null; //return a loading indicator here
  }

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <SVGIcons.experiences.camping 
      size={32}
      colo={Colors.white}/>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

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

export default CustomButton;

