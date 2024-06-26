import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  Pressable,
  ScrollView,
  View,
  Text,
  Image,
} from "react-native";

import { SVGIcons } from "../../components/SVGIcons.js";
import { styles } from "../../styles/PassportStyles.js";
import { Colors } from "../../styles/Colors.js";
import { Fonts } from "../../styles/Fonts.js";

import { db } from "../../data_management/firebaseConfig.js";
import { doc, onSnapshot } from "firebase/firestore";

import UserContext from "../../data_management/UserContext.js";

const badgesData = [
  {
    id: 1,
    name: "Olympic",
    scannedSource: require("../../assets/badges/olym.png"),
    unscannedSource: require("../../assets/badges/Unscanned.png"),
  },
  {
    id: 2,
    name: "Crater Lake",
    scannedSource: require("../../assets/badges/crla.png"),
    unscannedSource: require("../../assets/badges/Unscanned.png"),
  },
  {
    id: 3,
    name: "Glacier",
    scannedSource: require("../../assets/badges/glac.png"),
    unscannedSource: require("../../assets/badges/Unscanned.png"),
  },
  {
    id: 4,
    name: "North Cascades",
    scannedSource: require("../../assets/badges/noca.png"),
    unscannedSource: require("../../assets/badges/Unscanned.png"),
  },
  {
    id: 5,
    name: "Mount Rainier",
    scannedSource: require("../../assets/badges/mora.png"),
    unscannedSource: require("../../assets/badges/Unscanned.png"),
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

const PassportUser = ({ route, navigation }) => {
  const { user, setUser } = useContext(UserContext);
  const [scannedParks, setScannedParks] = useState([]);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    const userDocRef = doc(db, "users", currentUser.id);
    const unsubscribe = onSnapshot(userDocRef, (doc) => {
      if (doc.exists()) {
        setCurrentUser({ ...doc.data(), id: doc.id });
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [currentUser.id]);

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
    console.log("User Parks updated:", updatedUser.scanned);
  }, [scannedParks]);

  const handleScannerPress = () => {
    navigation.navigate("Scanner", { user: user });
  };

  const handleLogout = () => {
    // Clear the user data from context
    setUser(null);
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
                user: user,
              })
            }
          >
            <Image
              source={require("../../assets/adminPhoto.jpg")}
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
            <Pressable
              onPress={() =>
                navigation.navigate("PassportEdit", {
                  user: user,
                })
              }
              style={{
                ...styles.editButton,
                width: 42,
                height: 42,
                borderRadius: 21,
                backgroundColor: "white",
              }}
            >
              <SVGIcons.buttons.edit size={24} color={Colors.darkGreen} />
            </Pressable>
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
      <Pressable
        style={{
          ...styles.floatingButton,
          backgroundColor: Colors.sepia,
          left: 20,
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: Colors.white, ...Fonts.button }}>Log Out </Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.floatingButton,
          backgroundColor: Colors.green,
          right: 20,
        }}
        onPress={handleScannerPress}
      >
        <Text style={{ color: Colors.white, ...Fonts.button }}>
          + Scan Park
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PassportUser;
