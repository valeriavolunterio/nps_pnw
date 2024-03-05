import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SVGIcons } from "./SVGIcons.js";

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
      default:
        return "ios-close";
    }
  };

  return (
    <Pressable
      // onPress={handleToggle}
      style={[
        styles.button,
        {
          width: buttonSize,
          height: buttonSize,
          borderRadius: buttonSize / 2,
          backgroundColor: isToggled ? color : "white",
        },
      ]}
    >
      {type !== "edit" ? (
        <Ionicons
          name={iconType(type)}
          size={24}
          color={isToggled ? "white" : color}
        />
      ) : (
        <SVGIcons.buttons.edit size={24} color={isToggled ? "white" : color} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    aspectRatio: 1,
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
