import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
// import { styles } from "../../App";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
    <Image source={require("../assets/logos/nps_pnw_logo.png")} style={styles.image}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    //padding: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
});

export default LoadingScreen;
