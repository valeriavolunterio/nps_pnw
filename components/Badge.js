import React from "react";
import { Pressable, View, Image, StyleSheet } from "react-native";

const Badge = ({ visited, onPress, unvisitedBadge, visitedBadge }) => {
  const getBadgeSource = () => {
    return visited ? visitedBadge : unvisitedBadge;
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.badgeContainer}>
        <Image style={{ width: "100%" }} source={getBadgeSource()} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    margin: 10,
    flex: 1 / 2,
  },
});

export default Badge;
