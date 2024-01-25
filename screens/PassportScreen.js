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

import UnscannedBadge1 from "../assets/SVG/badges/UnscannedBadge1.jsx";
import UnscannedOlympic from "../assets/SVG/badges/UnscannedOlympic.jsx";
import ScannedOlympic from "../assets/SVG/badges/ScannedOlympic.jsx";
import { Colors } from "../styles/Colors.js";
import ToggleButton from "../components/ToggleButtons.js";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
    width: "48%",
    backgroundColor: "#eee",
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
    scannedSource: UnscannedBadge1,
    unscannedSource: UnscannedOlympic,
  },
  {
    id: 2,
    name: "Badge 1",
    scannedSource: UnscannedBadge1,
    unscannedSource: UnscannedBadge1,
  },
  {
    id: 3,
    name: "Badge 2",
    scannedSource: UnscannedBadge1,
    unscannedSource: UnscannedBadge1,
  },
  {
    id: 4,
    name: "Badge 3",
    scannedSource: UnscannedBadge1,
    unscannedSource: UnscannedBadge1,
  },
  {
    id: 5,
    name: "Badge 4",
    scannedSource: UnscannedBadge1,
    unscannedSource: UnscannedBadge1,
  },
  {
    id: 6,
    name: "Badge 5",
    scannedSource: UnscannedBadge1,
    unscannedSource: UnscannedBadge1,
  },
];

const Badge = ({ visited, onPress, Scanned, Unscanned }) => {
  const BadgeComponent = visited ? Scanned : Unscanned;
  return (
    <Pressable onPress={onPress}>
      <View style={styles.badgeContainer}>
        <BadgeComponent />
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
  console.log(user.photo);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Pressable onPress={() => navigation.navigate("PassportEdit")}>
            <Image
              source={require("../assets/userPlaceholder.jpg")}
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
                borderColor: Colors.white,
                borderWidth: 6,
              }}
            />
            <ToggleButton
              type="edit"
              color={Colors.darkGreen}
              buttonSize={42}
            />
          </Pressable>
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
