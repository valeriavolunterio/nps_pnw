import React, { useState, useEffect } from "react";
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

import { Colors } from "../styles/Colors.js";
import ToggleButton from "../components/ToggleButtons.js";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
    width: "30%",
  },
  userInfo: {
    width: "65%",
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
});

const user = {
  name: "John Doe",
  date: "Jan 2023",
  photo: require("../assets/userPlaceholder.jpg"),
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

const Badge = ({ visited, onPress, Scanned, Unscanned }) => {
  const BadgeComponent = visited ? Scanned : Unscanned;

  return (
    <Pressable onPress={onPress}>
      <View style={styles.badgeContainer}>
        <Image
          source={BadgeComponent}
          style={{
            resizeMode: "contain",
          }}
        />
      </View>
    </Pressable>
  );
};

const PassportScreen = ({ route, navigation }) => {
  const [visitedBadges, setVisitedBadges] = useState([]);

  const toggleVisited = (badgeId) => {
    if (visitedBadges.includes(badgeId)) {
      setVisitedBadges(visitedBadges.filter((id) => id !== badgeId));
    } else {
      setVisitedBadges([...visitedBadges, badgeId]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCard}>
        <View style={styles.userImg}>
          <Pressable
            style={{
              aspectRatio: 1,
            }}
            onPress={() => navigation.navigate("PassportEdit")}
          >
            <Image
              source={require("../assets/userPlaceholder.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
                borderColor: Colors.white,
                borderWidth: 6,
              }}
            />
          </Pressable>
          <ToggleButton
            type="edit"
            color={Colors.darkGreen}
            buttonSize={42}
            toggleState={false}
            handlePress={() => navigation.navigate("PassportEdit")}
          />
        </View>
        <View style={styles.userInfo}>
          <Text>{user.name}</Text>
          <Text>Exploring National Parks since {user.date}</Text>
          {/* {Socials} */}
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.badgesContainer}>
        {badgesData.map((badge) => (
          <Badge
            key={badge.id}
            visited={visitedBadges.includes(badge.id)}
            onPress={() => toggleVisited(badge.id)}
            Unscanned={badge.unscannedSource}
            Scanned={badge.scannedSource}
          />
        ))}
      </ScrollView>
      <Pressable>
        <Text>Add Park</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default PassportScreen;
