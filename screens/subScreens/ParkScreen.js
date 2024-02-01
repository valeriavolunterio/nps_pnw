import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { TealButton } from "../../components/TealButton";
import { Colors } from "../../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import RoundedButton from "../../components/RoundedButton";
import ToggleButton from "../../components/ToggleButtons";
import { Fonts } from "../../styles/Fonts";

const { width } = Dimensions.get("window");

const parkScreenData = [
  {
    miniTitle: "See Something New",
    title: "Olympic National Park",
    img: "https://www.nps.gov/npgallery/GetAsset/41e9450b-1dd8-b71b-0b41-ae6ab257056e/proxy/hires?",
    about:
      "Olympic National Park, a natural wonder on Washington's Olympic Peninsula, enchants with its diverse landscapes. From ancient rainforests adorned with moss-draped trees to rugged coastlines graced by tide pools and pristine lakes nestled amid majestic mountains, this park offers a breathtaking tapestry of wilderness and outdoor adventure.",
    places: [
      "Hoh Rain Forest",
      "Hurricane Ridge",
      "Kaloch and Ruby Beach",
      "Sol Duc Valley",
    ],
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
      <View style={styles.actionBtnContainer}>
        <View style={styles.actionBtns}>
          <View style={{ paddingHorizontal: 10 }}>
            <ToggleButton
              type="favorite"
              color={Colors.sepia}
              buttonSize={48}
              toggleState={true}
            />
          </View>
          <View>
            <ToggleButton
              type="bookmark"
              color={Colors.baseTeal}
              buttonSize={48}
              toggleState={true}
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <ToggleButton
              type="share"
              color={Colors.green}
              buttonSize={48}
              toggleState={false}
            />
          </View>
        </View>
      </View>
      <View style={styles.parkStatus}>
        <View style={styles.showInMapBtn}>
          <RoundedButton
            type="map"
            text="Show in Map"
            onPress={() => navigation.navigate("Map")}
          />
          <Text style={{ color: Colors.green, fontSize: 18 }}>Open Today:</Text>
          <Text style={{ color: Colors.black, fontSize: 18 }}>24 Hours</Text>
        </View>
        <View>
          <Text
            style={{
              color: Colors.darkGray,
              fontSize: 12,
              textAlign: "right",
              paddingRight: 20,
            }}
          >
            Entrance Pass Required
          </Text>
        </View>
      </View>

      {/* Park Events Section*/}

      <View style={styles.parkEvents}>
        <View style={styles.parkEventsDate}>
          <Text style={{ color: Colors.green, fontSize: 18 }}>MAR</Text>
          <Text style={{ color: Colors.green, fontSize: 18, paddingLeft: 5 }}>
            24
          </Text>
        </View>
        <View style={styles.parkEventsText}>
          <Text
            style={{ color: Colors.black, fontSize: 14, fontWeight: "bold" }}
          >
            Hurricane Ridge "It's Your Moon!" Telescope Program
          </Text>
          <Text style={{ color: Colors.black, fontSize: 14, paddingTop: 5 }}>
            7:30 PM - 8:30 PM
          </Text>
        </View>
      </View>

      {parkScreenData.map((item, index) => (
        <View key={index} style={styles.aboutPark}>
          <Text
            style={[Fonts.header3, { color: Colors.sepia, paddingBottom: 10 }]}
          >
            About This Park
          </Text>
          <Text>{item.about}</Text>
        </View>
      ))}
      <TealButton.alerts onPress={() => navigation.navigate("Alerts")} />
      <TealButton.knowBefore
        onPress={() => navigation.navigate("SafetyGuide")}
      />
      <TealButton.places
        onPress={() => navigation.navigate("Places")}
        title="Places to See"
      />
      <TealButton.parkInfo
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
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    zIndex: 99,
  },
  parkImage: {
    width: "100%",
    height: 200,
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
  actionBtnContainer: {
    position: "absolute",
    top: 180,
    right: 10,
    zIndex: 99,
  },
  actionBtns: {
    zIndex: 99,
    flexDirection: "row",
  },
  parkStatus: {
    backgroundColor: "#FBF3EE",
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  parkEvents: {
    backgroundColor: "#FBF3EE",
    flexDirection: "row", // Change to row direction
    height: 100,
    width: width - 50,
    justifyContent: "space-between", // Distribute items along the main axis
    alignSelf: "center",
    marginVertical: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    borderRadius: 10,
  },
  parkEventsDate: {
    paddingLeft: 20,
    alignItems: "center",
    marginVertical: 30,
    paddingRight: 30,
  },
  parkEventsText: {
    alignItems: "flex-start",
    marginVertical: 30,
    paddingRight: 90,
  },

  aboutPark: {
    backgroundColor: "#FBF3EE",
    height: 200,
    width: width - 50,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    borderRadius: 10,
    padding: 20,
  },
  aboutParkText: {
    fontFamily: "Body",
  },
  showInMapBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 35,
    width: "100%",
  },
});

export default ParkScreen;
