import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  Pressable,
  ScrollView,
  View,
  Text,
  Image,
} from "react-native";

import { SVGIcons } from "./SVGIcons.js";
import { styles } from "../styles/PassportStyles.js";
import { Colors } from "../styles/Colors.js";
import { Fonts } from "../styles/Fonts.js";
import ToggleButton from "./ToggleButtons.js";

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

const PassportUser = ({ user, route, navigation }) => {
  const [scannedParks, setScannedParks] = useState([]);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    if (route.params?.updatedUser) {
      setCurrentUser((prevUser) => ({
        ...prevUser,
        ...route.params.updatedUser,
      }));
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
      ...currentUser,
      scanned: scannedParks,
    };
    setCurrentUser(updatedUser);
    console.log("User Parks updated:", currentUser.scanned);
  }, [scannedParks]);

  const handleScannerPress = () => {
    navigation.navigate("Scanner", { scannedParks });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCard}>
        <View style={styles.userImgContainer}>
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
              source={currentUser.photo}
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
          <Text style={styles.userTitle}>{currentUser.name}</Text>
          <Text style={styles.body}>
            Exploring National Parks since {currentUser.date}
          </Text>
          <View style={{ flexDirection: "row" }}>
            {currentUser.facebook && (
              <SVGIcons.socials.facebook
                size={24}
                color={Colors.darkTeal}
                style={{ marginRight: 5 }}
              />
            )}
            {currentUser.instagram && (
              <SVGIcons.socials.instagram
                size={24}
                color={Colors.green}
                style={{ marginRight: 5 }}
              />
            )}
            {currentUser.tiktok && (
              <SVGIcons.socials.tiktok
                size={24}
                color={Colors.baseTeal}
                style={{ marginRight: 5 }}
              />
            )}
            {currentUser.youtube && (
              <SVGIcons.socials.youtube
                size={24}
                color={Colors.sepia}
                style={{ marginRight: 5 }}
              />
            )}
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.badgesContainer}>
        {badgesData.map((badge) => {
          // Check if the park is scanned by the user
          const parkScanned = currentUser.scanned.includes(badge.name);
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
      <Pressable style={styles.floatingButton} onPress={handleScannerPress}>
        <Text style={{ color: Colors.white, ...Fonts.button }}>
          + Scan Park
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PassportUser;
