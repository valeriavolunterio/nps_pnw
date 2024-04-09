import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../styles/Colors.js";
import { useNavigation } from "@react-navigation/native";

export const BackButton = () => {
  // Corrected props usage
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 100,
        padding: 5,
        aspectRatio: 1,
        alignContent: "center",
        justifyContent: "center",
        marginLeft: 14,
      }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons
        name="arrow-back"
        size={20}
        color={Colors.white}
        style={{
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </Pressable>
  );
};
