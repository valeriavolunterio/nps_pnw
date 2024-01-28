import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ToggleButton = ({
  type,
  color,
  buttonSize,
  toggleState,
  handlePress,
}) => {
  const [isToggled, setIsToggled] = useState(toggleState);

  const handleToggle = () => {
    toggleState ? setIsToggled(!isToggled) : null;
    handlePress();
  };

  const iconType = (type) => {
    switch (type) {
      case "favorite":
        return isToggled ? "star" : "star-outline";
      case "bookmark":
        return isToggled ? "bookmark" : "bookmark-outline";
      case "share":
        return "share-social";
      case "edit":
        return "pencil";
      default:
        return "ios-close";
    }
  };

  return (
    <Pressable
      // onPress={handleToggle}
      style={[
        styles.button,
        { width: buttonSize, backgroundColor: isToggled ? color : "white" },
      ]}
    >
      <Ionicons
        name={iconType(type)}
        size={24}
        color={isToggled ? "white" : color}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    aspectRatio: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default ToggleButton;
