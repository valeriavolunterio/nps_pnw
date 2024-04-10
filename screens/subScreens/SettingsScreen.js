import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
import { Fonts } from "../../styles/Fonts";
import { db } from "../../data_management/firebaseConfig";
import { collection, doc, deleteDoc } from "firebase/firestore";
import UserContext from "../../data_management/UserContext";

// Create a functional component for the settings screen
const SettingsScreen = () => {
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
        <Text style={styles.heading}>App</Text>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Audio Description and Tours")}
        >
          <Text style={styles.link}>Audio Description and Tours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            console.log("Navigate to Other Accessibility Features")
          }
        >
          <Text style={styles.link}>Other Accessibility Features</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Privacy Policy")}
        >
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Navigate to About the NPS")}
        >
          <Text style={styles.link}>About the NPS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Navigate to About this App")}
        >
          <Text style={styles.link}>About this App</Text>
        </TouchableOpacity>
      </View>

      {/* Passport section */}
      <View style={styles.section}>
        <Text style={styles.Text}>Passport</Text>
        <TouchableOpacity onPress={handleDeletePassport}>
          <Text style={styles.link}>Delete Passport</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    ...Fonts.header4,
  },
  link: {
    ...Fonts.button,
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
