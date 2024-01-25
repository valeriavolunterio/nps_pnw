import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";

const SlideSwitch = () => {
  const [active, setActive] = useState(false);
  let transformX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (active) {
      Animated.timing(transformX, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(transformX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [active]);

  const rotationX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [2, Dimensions.get("screen").width / 2],
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          height: 50,
          borderRadius: 10,
          backgroundColor: "#efebf0",
          marginHorizontal: 5,
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            height: 50 - 2 * 2,
            top: 2,
            bottom: 2,
            borderRadius: 10,
            width: Dimensions.get("screen").width / 2 - 2 - 5 * 2,
            transform: [
              {
                translateX: rotationX,
              },
            ],
            backgroundColor: "white",
          }}
        ></Animated.View>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setActive(false)}
        >
          <Text>Parks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setActive(true)}
        >
          <Text>Places</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default SlideSwitch;
