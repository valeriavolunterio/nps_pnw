import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#FFF9F5",
  },
  itemContainer: {
    flex: 1 / 2,
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
});

const HomeScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to Park Screen"
        onPress={() => navigation.navigate("Park")}
      />
      <Button
        title="Go to Safety Guide Screen"
        onPress={() => navigation.navigate("SafetyGuide")}
      />
      <Button
        // Favorites, Bookmarks, Recents
        title="Go to Saves Screen"
        onPress={() => navigation.navigate("Saves")}
      />
      <Button
        title="Go to Alerts Screen"
        onPress={() => navigation.navigate("Alerts")}
      />
      <Button
        title="Go to News Screen"
        onPress={() => navigation.navigate("News")}
      />
      <Button
        title="Go to Events Screen"
        onPress={() => navigation.navigate("Events")}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
