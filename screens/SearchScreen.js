import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#FFF9F5",
    justifyContent: undefined,
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
  title: {
    textAlign: "center",
  },
});

const SearchScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to Park Screen"
        onPress={() => navigation.navigate("Park")}
      />
    </SafeAreaView>
  );
};
export default SearchScreen;
