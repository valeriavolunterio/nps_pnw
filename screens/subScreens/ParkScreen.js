import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { Button, ButtonGroup } from "@rneui/themed";
// import { styles } from "../../App";

const ParkScreen = () => {
  // Example park data
  const parkData = {
    title: 'Example Park',
    information: 'This is a beautiful park with lots of amenities.',
    rotatingData: ['Event 1', 'Event 2', 'Event 3'], // Array of rotating data
  };

  const [rotatingIndex, setRotatingIndex] = useState(0);

  // Use useEffect to rotate data every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingIndex((prevIndex) =>
        prevIndex === parkData.rotatingData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [parkData.rotatingData]);

  return (
    <div>
      <h2>{parkData.title}</h2>
      <p>{parkData.information}</p>
      <p>Rotating Data: {parkData.rotatingData[rotatingIndex]}</p>
    </div>
  );
};

export default ParkScreen;




/* const ParkScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <Text>ParkScreen</Text>
    </SafeAreaView>
  );
};
export default ParkScreen; */
