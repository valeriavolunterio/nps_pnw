import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
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

const MapScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to Park Screen"
        onPress={() => navigation.navigate("Park")}
      />
    </SafeAreaView>
  );
};
export default MapScreen;