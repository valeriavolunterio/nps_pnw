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
  const [users, setUsers] = useState(defaultUsers.users);

  // useEffect(() => {
  //   // Check if a new user is passed as a parameter from the SignInScreen
  //   if (route.params?.newUser) {
  //     // Update the users array with the new user
  //     setUsers([...users, route.params.newUser]);
  //   }
  //   console.log(users);
  // }, [route.params?.newUser]);

  const handleLogin = ({ email, password }) => {
    // Check if the email and password match any user in the default users data
    const loggedInUser = users.find(
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

  // can probably be moved to sign up screen when connections are implemented
  const handleSignUp = ({ name, email, password }) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    // Check if the email already exists in the users array
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      // User with the same email already exists, handle accordingly
      console.log("User with the same email already exists.");
      return false;
    }

    const generatedDate = new Date().toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    const newUser = {
      name: name,
      date: `${generatedDate}`,
      photo: require("../assets/userPlaceholder.png"),
      email: email,
      password: password,
      facebook: null,
      instagram: null,
      tiktok: null,
      youtube: null,
      scanned: [],
    };

    setUsers([...users, newUser]);
    console.log(users);
    return true;
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
        <PassportLogin
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          navigation={navigation}
        />
      )}
    </SafeAreaView>
  );
};
export default PassportScreen;
