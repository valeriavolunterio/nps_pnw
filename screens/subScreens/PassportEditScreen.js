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
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../styles/Colors.js";
import ToggleButton from "../../components/ToggleButtons.js";
import RoundedButton from "../../components/RoundedButton.js";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  userCard: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: Colors.lightOffWhite,
    borderRadius: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  userImg: {
    width: "35%",
    position: "relative",
  },
  userInfo: {
    width: "60%",
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  badgeContainer: {
    width: "50%",
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
  },
});

const PassportEditScreen = ({ route, navigation }) => {
  const [name, setName] = useState(route.params.user.name);
  const [facebook, setFacebook] = useState(route.params.user.facebook || "");
  const [instagram, setInstagram] = useState(route.params.user.instagram || "");
  const [tiktok, setTiktok] = useState(route.params.user.tiktok || "");
  const [youtube, setYoutube] = useState(route.params.user.youtube || "");

  useEffect(() => {
    // Set initial values for text inputs
    setFacebook(route.params.user.facebook);
    setInstagram(route.params.user.instagram);
    setTiktok(route.params.user.tiktok);
    setYoutube(route.params.user.youtube);
  }, [route.params.user]);

  const handleDiscard = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    const updatedUser = {
      ...route.params.user,
      name: name !== null ? name.trim() : null,
      facebook: facebook !== null ? facebook.trim() : null,
      instagram: instagram !== null ? instagram.trim() : null,
      tiktok: tiktok !== null ? tiktok.trim() : null,
      youtube: youtube !== null ? youtube.trim() : null,
    };

    route.params.onUpdateUser(updatedUser);
    navigation.navigate("PassportStack", { updatedUser });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCard}>
        <View style={styles.userImg}>
          <Pressable
            style={{
              aspectRatio: 1,
            }}
          >
            <Image
              source={route.params.user.photo}
              style={{
                ...styles.overlay,
                width: "100%",
                height: "100%",
                borderRadius: 100,
                borderColor: Colors.white,
                borderWidth: 6,
              }}
            />
          </Pressable>
          <View style={styles.editButton}>
            <ToggleButton
              type="edit"
              color={Colors.darkGreen}
              buttonSize={42}
              toggleState={true}
              handlePress={() => console.log("Upload new photo")}
            />
          </View>
        </View>
        <View style={styles.userInfo}>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text>Exploring National Parks since {route.params.user.date}</Text>
          <View style={{ flexDirection: "row" }}>
            {facebook && (
              <Ionicons
                name="logo-facebook"
                size={24}
                color={Colors.baseTeal}
                style={{ marginRight: 5 }}
              />
            )}
            {instagram && (
              <Ionicons
                name="logo-instagram"
                size={24}
                color={Colors.darkTeal}
                style={{ marginRight: 5 }}
              />
            )}
            {/* tiktok not recognized */}
            {youtube && (
              <Ionicons
                name="logo-youtube"
                size={24}
                color={Colors.sepia}
                style={{ marginRight: 5 }}
              />
            )}
          </View>
        </View>
      </View>
      <View style={styles.userInfo}>
        <TextInput
          style={styles.input}
          placeholder="Enter Facebook Handle"
          value={facebook}
          onChangeText={(text) => setFacebook(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Instagram Handle"
          value={instagram}
          onChangeText={(text) => setInstagram(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter TikTok Handle"
          value={tiktok}
          onChangeText={(text) => setTiktok(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter YouTube Handle"
          value={youtube}
          onChangeText={(text) => setYoutube(text)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <RoundedButton
          type="confirm"
          text="Confirm Changes"
          onPress={handleConfirm}
          style={{ marginRight: 10 }}
        />
        <RoundedButton
          type="cancel"
          text="Discard"
          onPress={handleDiscard}
          style={{ marginLeft: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PassportEditScreen;
