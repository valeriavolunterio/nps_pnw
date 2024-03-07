import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Camera } from "expo-camera";

import { db } from "../../src/config/firebase.js";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

const ScannerScreen = ({ route, navigation }) => {
  const { user } = route.params;
  const [scannedParks, setScannedParks] = useState(user.scannedParks);

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDocRef = doc(collection(db, "users"), user.id);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userScannedData = userDocSnap.data();
          setScannedParks(userScannedData.scanned || []);
        } else {
          console.log("User not found.");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [user.id]);

  const handleBarCodeScanned = async ({ type, data }) => {
    if (data === "Olympic" || data === "Crater Lake" || data === "Glacier") {
      console.log(
        `Bar code with type ${type} and data ${data} has been scanned!`
      );
      setScanned(true);

      if (!scannedParks.includes(data)) {
        try {
          const userDocRef = doc(collection(db, "users"), user.id);
          const updatedParks = [...scannedParks, data];
          await updateDoc(userDocRef, { scanned: updatedParks });
          setScannedParks(updatedParks);
          console.log("Confirmed changes:", updatedParks);
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      }
    } else {
      console.log(`${data} National Park has already been scanned.`);
    }
    navigation.navigate("PassportStack");
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!scanned && (
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.back}
          onBarCodeScanned={handleBarCodeScanned}
          ratio="16:9"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").width * 16) / 9, // Set the height based on the desired aspect ratio
  },
});

export default ScannerScreen;
