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
import { SVGIcons } from "../../components/SVGIcons.js";
import { Colors } from "../../styles/Colors.js";
import { styles } from "../../styles/PassportStyles.js";
import ToggleButton from "../../components/ToggleButtons.js";
import RoundedButton from "../../components/RoundedButton.js";

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

    navigation.navigate("PassportStack", { updatedUser });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCard}>
        <View style={styles.userImgContainer}>
          <Pressable
            style={{
              aspectRatio: 1,
            }}
          >
            <Image
              source={route.params.user.photo}
              style={{
                ...styles.userImg,
                position: "absolute",
                top: 0,
              }}
            />
            <View
              style={{
                ...styles.userImg,
                ...styles.overlay,
              }}
            />
          </Pressable>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          >
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
            style={styles.nameInput}
            placeholder="Enter Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text>Exploring National Parks since {route.params.user.date}</Text>
          <View style={{ flexDirection: "row" }}>
            {facebook && (
              <SVGIcons.socials.facebook
                size={24}
                color={Colors.darkTeal}
                style={{ marginRight: 5 }}
              />
            )}
            {instagram && (
              <SVGIcons.socials.instagram
                size={24}
                color={Colors.green}
                style={{ marginRight: 5 }}
              />
            )}
            {tiktok && (
              <SVGIcons.socials.tiktok
                size={24}
                color={Colors.baseTeal}
                style={{ marginRight: 5 }}
              />
            )}
            {youtube && (
              <SVGIcons.socials.youtube
                size={24}
                color={Colors.sepia}
                style={{ marginRight: 5 }}
              />
            )}
          </View>
        </View>
      </View>
      <View style={styles.inputCard}>
        <Text style={styles.inputTitle}>Socials</Text>
        <View style={styles.inputContainer}>
          <SVGIcons.socials.facebook
            size={24}
            color={Colors.darkTeal}
            style={{ marginRight: 5 }}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Enter Facebook Handle"
            value={facebook}
            onChangeText={(text) => setFacebook(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <SVGIcons.socials.instagram
            size={24}
            color={Colors.green}
            style={{ marginRight: 5 }}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Enter Instagram Handle"
            value={instagram}
            onChangeText={(text) => setInstagram(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <SVGIcons.socials.tiktok
            size={24}
            color={Colors.baseTeal}
            style={{ marginRight: 5 }}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Enter TikTok Handle"
            value={tiktok}
            onChangeText={(text) => setTiktok(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <SVGIcons.socials.youtube
            size={24}
            color={Colors.sepia}
            style={{ marginRight: 5 }}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Enter YouTube Handle"
            value={youtube}
            onChangeText={(text) => setYoutube(text)}
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
          text="Discard"
          onPress={handleDiscard}
          style={{ marginRight: 20 }}
        />
        <RoundedButton
          type="confirm"
          text="Confirm Changes"
          onPress={handleConfirm}
          style={{ marginLeft: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PassportEditScreen;
