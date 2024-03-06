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

const PassportSignUpScreen = ({ handleSignUp, navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDiscard = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    // Basic email validation
    if (handleSignUp({ name, email, password })) {
      navigation.navigate("PassportStack");
    } else {
      return;
    }
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
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color={Colors.darkTeal} />
          <TextInput
            style={styles.formInput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={24} color={Colors.darkTeal} />
          <TextInput
            style={styles.formInput}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
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
          onPress={handleConfirm}
          style={{ marginLeft: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PassportSignUpScreen;
