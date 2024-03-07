import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";

import { styles } from "../../styles/PassportStyles.js";
import { Colors } from "../../styles/Colors.js";
import { Ionicons } from "@expo/vector-icons";
import RoundedButton from "../../components/RoundedButton.js";

import { db } from "../../data_management/firebaseConfig.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

const PassportSignUpScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: "",
    date: new Date().toLocaleString("default", {
      month: "short",
      year: "numeric",
    }),
    photo: null,
    email: "",
    password: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    scanned: [],
  });

  const handleDiscard = () => {
    navigation.goBack();
  };

  const handleSignUp = async () => {
    try {
      const usersQuery = collection(db, "users");
      const usersCollection = await getDocs(usersQuery);
      const usersData = usersCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        setError("Please enter a valid email address.");
        return console.log("Please enter a valid email address.");
      }

      // Check if the email already exists in the users array
      const existingUser = usersData.find((u) => u.email === user.email);
      if (existingUser) {
        // User with the same email already exists, handle accordingly
        return console.log("User with the same email already exists.");
      }

      await addDoc(usersQuery, { ...user });
      navigation.navigate("PassportStack");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    navigation.navigate("PassportStack");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCard}>
        <View style={{ ...styles.userImgContainer, aspectRatio: 1 }}>
          <Image
            source={require("../../assets/userPlaceholder.png")}
            style={{
              ...styles.userImg,
              position: "absolute",
              top: 0,
            }}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userTitle}>Welcome</Text>
          <Text style={styles.body}>
            Sign Up or Log In to the NPS Passport to start collecting badges!
          </Text>
        </View>
      </View>
      <View style={styles.inputCard}>
        <Text style={styles.inputTitle}>Log In To Account</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color={Colors.darkTeal} />
          <TextInput
            style={styles.formInput}
            placeholder="Name"
            value={user.name}
            onChangeText={(text) => setUser({ ...user, name: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color={Colors.darkTeal} />
          <TextInput
            style={styles.formInput}
            placeholder="Email"
            value={user.email}
            onChangeText={(text) => setUser({ ...user, email: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={24} color={Colors.darkTeal} />
          <TextInput
            style={styles.formInput}
            placeholder="Password"
            secureTextEntry={true}
            value={user.password}
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={24} color={Colors.darkTeal} />
          <TextInput
            style={styles.formInput}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
        </View> */}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 90,
        }}
      >
        <RoundedButton
          type="cancel"
          text="Cancel"
          onPress={handleDiscard}
          style={{ marginRight: 20 }}
        />
        <RoundedButton
          type="confirm"
          text="CreateAccount"
          onPress={handleSignUp}
          style={{ marginLeft: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PassportSignUpScreen;
