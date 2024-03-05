import React, { useState, useEffect, useRef } from "react";
import { View, Text, SafeAreaView, Pressable, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SVGIcons } from "../components/SVGIcons.js";
import { styles } from "../styles/PassportStyles.js";
import { Colors } from "../styles/Colors.js";
import { Fonts } from "../styles/Fonts.js";

import PassportUser from "../components/PassportUser.js";
import PassportLogin from "../components/PassportLogin.js";
import ToggleButton from "../components/ToggleButtons.js";

const defaultUsers = {
  users: [
    {
      name: "John Doe",
      date: "Jan 2023",
      photo: require("../assets/adminPhoto.jpg"),
      email: "admin@nps.gov",
      password: "password1",
      facebook: "facebook",
      instagram: "instagram",
      tiktok: "tiktok",
      youtube: "youtube",
      scanned: [],
    },
  ],
};

const PassportScreen = ({ route, navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = ({ email, password }) => {
    // Check if the email and password match any user in the default users data
    const loggedInUser = defaultUsers.users.find(
      (u) => u.email === email && u.password === password
    );

    if (loggedInUser) {
      setIsLoggedIn(true);
      setUser(loggedInUser);
      console.log("Logged in as:", loggedInUser.name);
    } else {
      // Handle invalid credentials
      console.log("Invalid Credentials");
    }
  };

  return (
    <SafeAreaView style={styles.passportView}>
      {/* <Pressable style={styles.floatingButton}>
        <Text style={{ color: Colors.white }}>+</Text>
      </Pressable> */}
      {isLoggedIn && user ? (
        // Render badge screen if logged in
        <PassportUser user={user} route={route} navigation={navigation} />
      ) : (
        // Render login screen if not logged in
        <PassportLogin handleLogin={handleLogin} />
      )}
    </SafeAreaView>
  );
};
export default PassportScreen;
