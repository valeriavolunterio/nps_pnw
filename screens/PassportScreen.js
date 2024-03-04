import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Button,
  Pressable,
  Image,
} from "react-native";
import { Camera } from "expo-camera";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../styles/Colors.js";
import { Fonts } from "../styles/Fonts.js";
import ToggleButton from "../components/ToggleButtons.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingHorizontal: 20,
  },
  userCard: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: Colors.lightOffWhite,
    borderRadius: 5,
    elevation: 5, // Add elevation for drop shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  userImg: {
    width: "35%",
  },
  userInfo: {
    width: "60%",
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  badgeContainer: {
    width: "50%",
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
  },
  floatingButton: {
    position: "absolute",
    bottom: 0,
    right: 20,
    backgroundColor: Colors.green,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    elevation: -5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
});

const defaultUser = {
  name: "John Doe",
  date: "Jan 2023",
  photo: require("../assets/userPlaceholder.png"),
  facebook: "facebook",
  instagram: "instagram",
  tiktok: "tiktok",
  youtube: "youtube",
  scanned: [],
};

const badgesData = [
  {
    id: 1,
    name: "Olympic",
    scannedSource: require("../assets/badges/Scanned_Olympic.png"),
    unscannedSource: require("../assets/badges/Unscanned_Olympic.png"),
  },
  {
    id: 2,
    name: "Badge 1",
    scannedSource: require("../assets/badges/Unscanned_Vector2.png"),
    unscannedSource: require("../assets/badges/Unscanned_Vector2.png"),
  },
  {
    id: 3,
    name: "Badge 2",
    scannedSource: require("../assets/badges/Unscanned_Vector2.png"),
    unscannedSource: require("../assets/badges/Unscanned_Vector2.png"),
  },
  {
    id: 4,
    name: "Badge 3",
    scannedSource: require("../assets/badges/Unscanned_Vector2.png"),
    unscannedSource: require("../assets/badges/Unscanned_Vector2.png"),
  },
  {
    id: 5,
    name: "Badge 4",
    scannedSource: require("../assets/badges/Unscanned_Vector2.png"),
    unscannedSource: require("../assets/badges/Unscanned_Vector2.png"),
  },
  {
    id: 6,
    name: "Badge 5",
    scannedSource: require("../assets/badges/Unscanned_Vector2.png"),
    unscannedSource: require("../assets/badges/Unscanned_Vector2.png"),
  },
];

const Badge = ({ visited, sources }) => {
  const badgeSource = visited ? sources.scanned : sources.unscanned;

  return (
    <View style={styles.badgeContainer}>
      <Image
        source={badgeSource}
        style={{
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

const PassportScreen = ({ route, navigation }) => {
  const [user, setUser] = useState(defaultUser);
  const [scannedParks, setScannedParks] = useState([]);

  useEffect(() => {
    if (route.params?.updatedUser) {
      setUser(route.params.updatedUser);
    }
  }, [route.params?.updatedUser]);

  useEffect(() => {
    if (route.params?.updatedScannedParks) {
      setScannedParks(route.params.updatedScannedParks);
    }
  }, [route.params?.updatedScannedParks]);

  useEffect(() => {
    // Update user data when scanned parks change
    const updatedUser = {
      ...user,
      scanned: scannedParks,
    };
    setUser(updatedUser);
    console.log("User Parks updated:", user.scanned);
  }, [scannedParks]);

  const handleScannerPress = () => {
    navigation.navigate("Scanner", { scannedParks });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCard}>
        <View style={styles.userImg}>
          <Pressable
            style={{
              aspectRatio: 1,
            }}
            onPress={() =>
              navigation.navigate("PassportEdit", {
                user,
              })
            }
          >
            <Image
              source={user.photo}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
                borderColor: Colors.white,
                borderWidth: 6,
              }}
            />
          </Pressable>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          >
            <ToggleButton
              type="edit"
              color={Colors.darkGreen}
              buttonSize={42}
              toggleState={false}
              handlePress={() =>
                navigation.navigate("PassportEdit", {
                  user,
                })
              }
            />
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text>{user.name}</Text>
          <Text>Exploring National Parks since {user.date}</Text>
          <View style={{ flexDirection: "row" }}>
            {user.facebook && (
              <Ionicons
                name="logo-facebook"
                size={24}
                color={Colors.baseTeal}
                style={{ marginRight: 5 }}
              />
            )}
            {user.instagram && (
              <Ionicons
                name="logo-instagram"
                size={24}
                color={Colors.darkTeal}
                style={{ marginRight: 5 }}
              />
            )}
            {/* {user.tiktok && (
              // tiktok not recognized
              <Ionicons
                name="logo-tiktok"
                size={24}
                color={Colors.green}
                style={{ marginRight: 5 }}
              />
            )} */}
            {user.youtube && (
              <Ionicons
                name="logo-youtube"
                size={24}
                color={Colors.sepia}
                style={{ marginRight: 5 }}
              />
            )}
          </View>
        </View>
      </View>
      <Pressable style={styles.floatingButton}>
        <Text style={{ color: Colors.white }}>+</Text>
      </Pressable>
      <ScrollView contentContainerStyle={styles.badgesContainer}>
        {badgesData.map((badge) => {
          // Check if the park is scanned by the user
          const parkScanned = user.scanned.includes(badge.name);
          return (
            <Badge
              key={badge.id}
              visited={parkScanned}
              sources={{
                scanned: badge.scannedSource,
                unscanned: badge.unscannedSource,
              }}
            />
          );
        })}
      </ScrollView>
      {/* Floating Button Section */}
      <Pressable style={styles.floatingButton} onPress={handleScannerPress}>
        <Text style={{ color: Colors.white, ...Fonts.button }}>
          + Scan Park
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default PassportScreen;
