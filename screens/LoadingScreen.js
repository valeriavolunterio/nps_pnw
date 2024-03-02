import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Linking,
} from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
// import { styles } from "../../App";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Loading Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default LoadingScreen;
