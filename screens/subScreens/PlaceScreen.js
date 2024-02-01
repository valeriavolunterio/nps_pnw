import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import CustomButton from "../../components/Buttons";
import { Colors } from "../../styles/Colors";
import { Ionicons } from "@expo/vector-icons";

const placeScreenData = [
  {
    miniTitle: "See Something New",
    title: "Hoh Rain Forest",
  },
];

const PlaceScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
      {placeScreenData.map((item, index) => (
          <Text>{item.title}</Text>
        ))}
      
      </View>
      {placeScreenData.map((item, index) => (
        <View key={index} style={styles.imageContainer}>
          <View style={styles.overlay}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF9F5",
    flex: 1,
  },
  imageContainer: {
    marginBottom: 20,
    position: "relative",
  },
  parkImage: {
    width: "100%",
    height: 225,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 25,
    width: "100%",
  },
  title: {
    fontFamily: "Stoke-Regular",
    color: "#fff",
    textAlign: "left",
    fontSize: 22,
  },
});

export default PlaceScreen;

