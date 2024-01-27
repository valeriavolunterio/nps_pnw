import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import CustomButton from "../../components/Buttons";
import { Colors } from "../../styles/Colors";
import { Ionicons } from "@expo/vector-icons";

// import { styles } from "../../App";

const ParkScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CustomButton
          onPress={() => navigation.navigate("Alerts")}
          title="Active Alerts"
        />
      </View>
      <View>
        <CustomButton
          onPress={() => navigation.navigate("Park")}
          title="Know Before You Go"
        />
      </View>
      <View>
        <CustomButton
          onPress={() => navigation.navigate("Park")}
          title="Places to See"
        />
      </View>
      <View>
        <CustomButton
          onPress={() => navigation.navigate("Park")}
          title="Park Information"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF9F5",
    flex: 2,
  },
  contentContainer: {
    flex: 1,
  },
});

export default ParkScreen;
