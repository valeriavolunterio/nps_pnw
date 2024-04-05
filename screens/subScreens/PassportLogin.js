import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/PassportStyles.js";
import { Colors } from "../../styles/Colors.js";
import { Fonts } from "../../styles/Fonts.js";

import RoundedButton from "../../components/RoundedButton.js";
import { ScrollView } from "react-native-gesture-handler";

const PassportLogin = ({ handleLogin, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { width } = Dimensions.get("window");

  const handleSignUpPage = () => {
    navigation.navigate("PassportSignUp");
  };
  const handleLoginPress = () => {
    if (!email || !password) {
      setError("Invalid Email or password.");
      return;
    }
    setError(null); // Clear error before attempting login
    handleLogin({ email, password });
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 10}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
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
                Sign Up or Log In to the NPS Passport to start collecting
                badges!
              </Text>
            </View>
          </View>
          <View style={styles.inputCard}>
            <Text style={styles.inputTitle}>Log In To Account</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="mail" size={24} color={Colors.darkTeal} />
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {error && <Text style={{ ...styles.errorText }}>{error}</Text>}
            </View>
          </View>

          {/* <RoundedButton
          type="create"
          text="Create Account"
          onPress={() => handleLogin({ email, password })}
          style={{
            justifyContent: "flex-end",
            alignSelf: "flex-end",
            marginRight: "10%",
          }}
        /> */}
          <RoundedButton
            type="confirm"
            text="Sign In"
            onPress={() => handleLoginPress({ email, password })}
            style={{
              justifyContent: "flex-end",
              alignSelf: "flex-end",
              marginRight: "10%",
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <Pressable
        style={{
          ...styles.floatingButton,
          backgroundColor: Colors.sepia,
          left: 40,
        }}
        onPress={handleSignUpPage}
      >
        <Text style={{ color: Colors.white, ...Fonts.button }}>
          + Create Account
        </Text>
      </Pressable>

      <View
        style={{
          position: "absolute",
          right: 0,
          width: width,
          aspectRatio: 5.4 / 3.4,
          zIndex: -1,
          overflow: "hidden",
          ...Platform.select({
            ios: {
              bottom: 90,
            },
            android: {
              elevation: 5,
              bottom: 30,
            },
          }),
        }}
      >
        <Image
          source={require("../../assets/mountainBG.png")}
          style={{
            flex: 1,
            width: "100%",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PassportLogin;
