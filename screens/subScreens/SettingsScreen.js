import React, { useState, useEffect, useContext, version } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Dimensions,
  Linking,
} from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "../../styles/Fonts";
import { Colors } from "../../styles/Colors";
import { db } from "../../data_management/firebaseConfig";
import { collection, doc, deleteDoc } from "firebase/firestore";
import UserContext from "../../data_management/UserContext";
import { TealButton } from "../../components/TealButton";

const { width } = Dimensions.get("window");

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
        <Text style={styles.text}>App</Text>
        <View style={styles.horizontalRule} />
        <Pressable onPress={() => navigation.navigate("Accessibility")}>
          <View style={styles.iconContainer}>
            <Text style={styles.link}>Other Accessibility Features</Text>
            <Ionicons
              name="chevron-forward-outline"
              style={styles.icon}
            ></Ionicons>
          </View>
          <View style={styles.horizontalRule} />
        </Pressable>
        <Pressable
          onPress={() =>
            Linking.openURL(
              "https://www.nps.gov/aboutus/application-privacy.htm"
            )
          }
        >
          <View style={styles.iconContainer}>
            <Text style={styles.link}>Privacy Policy</Text>

            <Ionicons
              name="chevron-forward-outline"
              style={styles.icon}
            ></Ionicons>
          </View>

          <View style={styles.horizontalRule} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("About NPS")}>
          <View style={styles.iconContainer}>
            <Text style={styles.link}>About the NPS</Text>
            <Ionicons
              name="chevron-forward-outline"
              style={styles.icon}
            ></Ionicons>
          </View>
          <View style={styles.horizontalRule} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("About App")}>
          <View style={styles.iconContainer}>
            <Text style={styles.link}>About this App</Text>
            <Ionicons
              name="chevron-forward-outline"
              style={styles.icon}
            ></Ionicons>
          </View>
          <View style={styles.horizontalRule} />
        </Pressable>
      </View>
      <Text style={styles.version}>Version: 1.0</Text>

      {/* Passport section if user is logged in */}
      {user ? (
        <View style={styles.section}>
          <View>
            <Text style={[styles.text, { marginTop: 50 }]}>Passport</Text>
          </View>
          <View style={styles.horizontalRule} />
          <View style={styles.iconContainer}>
            <Pressable onPress={handleDeletePassport}>
              <Text style={[styles.link, { color: "red" }]}>
                Delete Passport
              </Text>
            </Pressable>
            <Ionicons
              name="chevron-forward-outline"
              style={styles.icon}
            ></Ionicons>
          </View>
          <View style={styles.horizontalRule} />
        </View>
      ) : null}

      {/* Onboarding button*/}
      <View style={styles.onboarding}>
        <TealButton.onboarding
          style={{ height: 500 }}
          onPress={() =>
            Linking
              .openURL
              // link to pdf here
              ()
          }
        />
      </View>
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
    marginTop: 10,
  },
  horizontalRule: {
    borderBottomColor: Colors.lightGray, // Change color as needed
    borderBottomWidth: 1,
    width: width - 40, // Adjust width as needed
    marginTop: 10,
  },
  icon: {
    fontSize: 20,
    color: Colors.darkGray,
    alignSelf: "flex-end",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  version: {
    ...Fonts.body,
    color: Colors.green,
    alignSelf: "center",
    fontSize: 16,
  },
  text: {
    ...Fonts.body,
    color: Colors.darkGray,
    fontSize: 16,
  },
  onboarding: {
    marginTop: 20,
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
