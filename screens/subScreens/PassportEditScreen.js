import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import { SVGIcons } from "../../components/SVGIcons.js";
import { Colors } from "../../styles/Colors.js";
import { styles } from "../../styles/PassportStyles.js";
import ToggleButton from "../../components/ToggleButtons.js";
import RoundedButton from "../../components/RoundedButton.js";

import { db } from "../../serverConnections/firebaseConfig.js";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import UserContext from "../../serverConnections/UserContext.js";

const PassportEditScreen = ({ route, navigation }) => {
  const { user } = useContext(UserContext);
  const [userEdits, setUserEdits] = useState({
    name: "",
    date: "",
    photo: null,
    email: "",
    password: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    scanned: [],
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDocRef = doc(collection(db, "users"), user.id);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = { id: userDocSnap.id, ...userDocSnap.data() };
          setUserEdits(userData);
        } else {
          console.log("User not found.");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [user.id]);

  const handleDiscard = () => {
    navigation.goBack();
  };

  const handleConfirm = async () => {
    try {
      const userDocRef = doc(collection(db, "users"), userEdits.id);
      await updateDoc(userDocRef, userEdits);
      console.log("Confirmed changes:", userEdits);
      navigation.navigate("PassportStack");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
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
              source={require("../../assets/adminPhoto.jpg")}
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
            value={userEdits.name}
            onChangeText={(text) => setUserEdits({ ...userEdits, name: text })}
          />
          <Text>Exploring National Parks since {userEdits.date}</Text>
          <View style={{ flexDirection: "row" }}>
            {userEdits.facebook && (
              <SVGIcons.socials.facebook
                size={24}
                color={Colors.darkTeal}
                style={{ marginRight: 5 }}
              />
            )}
            {userEdits.instagram && (
              <SVGIcons.socials.instagram
                size={24}
                color={Colors.green}
                style={{ marginRight: 5 }}
              />
            )}
            {userEdits.tiktok && (
              <SVGIcons.socials.tiktok
                size={24}
                color={Colors.baseTeal}
                style={{ marginRight: 5 }}
              />
            )}
            {userEdits.youtube && (
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
            value={userEdits.facebook}
            onChangeText={(text) =>
              setUserEdits({ ...userEdits, facebook: text })
            }
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
            value={userEdits.instagram}
            onChangeText={(text) =>
              setUserEdits({ ...userEdits, instagram: text })
            }
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
            value={userEdits.tiktok}
            onChangeText={(text) =>
              setUserEdits({ ...userEdits, tiktok: text })
            }
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
            value={userEdits.youtube}
            onChangeText={(text) =>
              setUserEdits({ ...userEdits, youtube: text })
            }
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
