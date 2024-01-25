import React, { useState } from "react";
import { View, Switch, Text, StyleSheet } from "react-native";

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.label}>Toggle Switch</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>
          {isEnabled ? "Enabled" : "Disabled"}
        </Text>
        <Text>Parks/Place</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
        {isEnabled ? (
          <Text>Placeholder Screen2</Text>
        ) : (
          <Text>Placeholder Screen1</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchLabel: {
    marginRight: 10,
  },
});

export default ToggleSwitch;
