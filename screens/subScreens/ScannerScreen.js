// ScannerScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Camera } from "expo-camera";

const ScannerScreen = ({ route, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
    setScanned(true);
    if (!route.params.scannedParks.includes(data)) {
      const updatedScannedParks = [...route.params.scannedParks, data];
      navigation.navigate("PassportStack", { updatedScannedParks });
    } else {
      console.log(`${data} National Park has already been scanned.`);
      navigation.navigate("PassportStack");
    }
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
