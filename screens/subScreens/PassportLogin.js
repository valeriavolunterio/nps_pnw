import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/PassportStyles.js";
import { Colors } from "../../styles/Colors.js";
import { Fonts } from "../../styles/Fonts.js";

import RoundedButton from "../../components/RoundedButton.js";

const PassportLogin = ({ handleLogin, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { width } = Dimensions.get("window");

  const handleSignUpPage = () => {
    navigation.navigate("PassportSignUp");
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
          onPress={() => handleLogin({ email, password })}
          style={{
            justifyContent: "flex-end",
            alignSelf: "flex-end",
            marginRight: "10%",
          }}
        />
      
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
          bottom: 0,
          right: 0,
          width: width,
          aspectRatio: 5.4 / 3.4,
          zIndex: -1,
          overflow: "hidden",
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
