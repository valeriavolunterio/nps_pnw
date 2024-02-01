import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import { TealButton } from "../../components/TealButton";
import { Colors } from "../../styles/Colors";
import { Ionicons } from "@expo/vector-icons";

const parkScreenData = [
  {
    miniTitle: "See Something New",
    title: "Olympic National Park",
    img: "https://www.nps.gov/npgallery/GetAsset/41e9450b-1dd8-b71b-0b41-ae6ab257056e/proxy/hires?",
  },
];

const ParkScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {parkScreenData.map((item, index) => (
        <View key={index} style={styles.imageContainer}>
          {item.img && (
            <Image
              source={{ uri: item.img }}
              style={styles.parkImage}
              resizeMode="cover"
            />
          )}
          <View style={styles.overlay}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      ))}
      <TealButton.alerts onPress={() => navigation.navigate("Alerts")} />
      <TealButton.knowBefore
        onPress={() => navigation.navigate("SafetyGuide")}
      />
      <TealButton.places onPress={() => navigation.navigate("Place")} />
      <TealButton.parkInfo onPress={() => navigation.navigate("SafetyGuide")} />
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
    color: "#fff", // Title text color
    textAlign: "left", // Align title text to the right
    fontSize: 22,
  },
});

export default ParkScreen;
