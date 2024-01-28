// Inside your component file or a separate file (e.g., RoundedButton.js)
import React from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../styles/Colors";

const RoundedButton = ({ type, text, onPress }) => {
  const styles = {
    buttonBackground: {
      backgroundColor: Colors.white,
      borderRadius: 50,
      padding: 10,
      paddingHorizontal: 15,
      flexDirection: "row",
      alignItems: "center",
      elevation: 2,
      shadowColor: Colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 2,
      marginLeft: 10,
    },
  };

  const iconStyles = {
    confirm: {
      name: "checkmark-circle-outline",
      color: Colors.green,
    },
    cancel: {
      name: "close-circle-outline",
      color: Colors.sepia,
    },
    // Add more types as needed
  };

  return (
    <Pressable style={styles.buttonBackground} onPress={onPress}>
      <Ionicons
        name={iconStyles[type].name}
        size={24}
        color={iconStyles[type].color}
        style={{ marginRight: 5 }}
      />
      <Text>{text}</Text>
    </Pressable>
  );
};

export default RoundedButton;
