import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../styles/Colors.js";
import { useNavigation } from "@react-navigation/native";

export const SettingsButton = () => {
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
        marginRight: 14,
      }}
      onPress={() => navigation.navigate("Settings")}
    >
      <Ionicons
        name="ellipsis-vertical"
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
