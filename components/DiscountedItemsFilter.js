import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
  },
});

const DiscountedFilter = ({ discounted, setDiscounted }) => {
  const toggleDiscounted = () => {
    setDiscounted((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <CheckBox
        checked={discounted}
        onPress={toggleDiscounted}
        iconType="material-community"
        checkedIcon="checkbox-outline"
        uncheckedIcon={"checkbox-blank-outline"}
      />
      <Text style={styles.label}>Discounted Items Only</Text>
    </View>
  );
};

export default DiscountedFilter;
