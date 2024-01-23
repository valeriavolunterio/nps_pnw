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
// import Badge from "../components/Badge";
import UnscannedBadge1 from "../assets/SVG/badges/UnscannedBadge1.jsx";
import UnscannedOlympic from "../assets/SVG/badges/UnscannedOlympic.jsx";
import ScannedOlympic from "../assets/SVG/badges/ScannedOlympic.jsx";

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

const badgesData = [
  {
    id: 1,
    name: "Olympic",
    scannedSource: ScannedOlympic,
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

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to Passport Edit Screen"
        onPress={() => navigation.navigate("PassportEdit")}
      />
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
    </SafeAreaView>
  );
};
export default PassportScreen;
