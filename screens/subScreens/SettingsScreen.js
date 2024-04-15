import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, Text, StyleSheet, View, Pressable } from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
import { Fonts } from "../../styles/Fonts";
import { Colors } from "../../styles/Colors";
import { db } from "../../data_management/firebaseConfig";
import { collection, doc, deleteDoc } from "firebase/firestore";
import UserContext from "../../data_management/UserContext";

// Create a functional component for the settings screen
const SettingsScreen = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);

  // Function to handle the deletion of Passport
  const handleDeletePassport = async () => {
    try {
      const userDocRef = doc(collection(db, "users"), user.id);
      await deleteDoc(userDocRef);
      console.log("Deleted User with ID:", user.id);
      setUser(null);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* App section */}
      <View style={styles.section}>
        <Text style={styles.Text}>App</Text>
        <Pressable onPress={() => navigation.navigate("Accessibility")}>
          <Text style={styles.link}>Other Accessibility Features</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Privacy Policy")}>
          <Text style={styles.link}>Privacy Policy</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("About NPS")}>
          <Text style={styles.link}>About the NPS</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("About App")}>
          <Text style={styles.link}>About this App</Text>
        </Pressable>
      </View>

      {/* Passport section if user is logged in */}
      {user ? (
        <View style={styles.section}>
          <Text style={styles.Text}>Passport</Text>

          <Pressable onPress={handleDeletePassport}>
            <Text style={styles.link}>Delete Passport</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

// Define the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.offWhite,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    ...Fonts.header4,
  },
  link: {
    ...Fonts.button,
    marginBottom: 10,
    marginTop: 10,

    borderBottomColor: Colors.darkestGray,
  },
});

export default SettingsScreen;

/* const SettingsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  );
};
export default SettingsScreen;*/
