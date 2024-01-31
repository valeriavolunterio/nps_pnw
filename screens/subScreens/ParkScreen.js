import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import CustomButton from "../../components/Buttons";
import { Colors } from "../../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const parkScreenData = [
  {
    miniTitle: "See Something New",
    title: "Olympic National Park",
    img: "https://www.nps.gov/npgallery/GetAsset/41e9450b-1dd8-b71b-0b41-ae6ab257056e/proxy/hires?",
  },
];

const ParkScreen = ({ route, navigation }) => {
  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.parkEventContainer}>

          </View>
      <CustomButton
        onPress={() => navigation.navigate("Alerts")}
        title="Active Alerts"
      />
      <CustomButton
        onPress={() => navigation.navigate("Park")}
        title="Know Before You Go"
      />
      <CustomButton
        onPress={() => navigation.navigate("Park")}
        title="Places to See"
      />
      <CustomButton
        onPress={() => navigation.navigate("Park")}
        title="Park Information"
      />
    </ScrollView>
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
  parkEventContainer: {
    backgroundColor: "#FBF3EE",
    height: 150,
    marginBottom: 50,
  }
});

export default ParkScreen;

