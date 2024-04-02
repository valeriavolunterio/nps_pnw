import React from "react";
import { View, Text } from "react-native";

const ParkOpenStatus = ({ hours, parkName }) => {
  // Accept parkName as a prop
  const isOpen = () => {
    try {
      const currentDay = new Date()
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLowerCase()
        .split(",")[0];
      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Los_Angeles", // Adjust timeZone as needed
      });

      const standardHours = hours[currentDay];

      if (!standardHours) {
        return false;
      } else if (
        standardHours === "All Day" ||
        standardHours === "Sunrise to Sunset"
      ) {
        return true;
      } else if (standardHours.includes("Closes at")) {
        // Assuming format "Closes at HH:MM"
        const closeTime = standardHours.split("Closes at ")[1];
        const [closeHour, closeMinute] = closeTime.split(":");
        const [currentHour, currentMinute] = currentTime.split(":");
        return (
          parseInt(currentHour) < parseInt(closeHour) ||
          (parseInt(currentHour) === parseInt(closeHour) &&
            parseInt(currentMinute) < parseInt(closeMinute))
        );
      } else if (standardHours.includes(" - ")) {
        const [start, end] = standardHours.split(" - ");
        const [startHour, startMinute] = start.split(":");
        const [endHour, endMinute] = end.split(":");
        const [currentHour, currentMinute] = currentTime.split(":");
        return (
          (parseInt(currentHour) > parseInt(startHour) ||
            (parseInt(currentHour) === parseInt(startHour) &&
              parseInt(currentMinute) >= parseInt(startMinute))) &&
          (parseInt(currentHour) < parseInt(endHour) ||
            (parseInt(currentHour) === parseInt(endHour) &&
              parseInt(currentMinute) < parseInt(endMinute)))
        );
      }
      // If none of the above conditions match, default to closed
      return false;
    } catch (error) {
      console.error(
        `Error in processing park open status for ${parkName}. Hours data: ${JSON.stringify(
          hours
        )}. Error: ${error}`
      );
      return false; // Return a default value in case of error
    }
  };

  return <Text style={{ color: "white" }}>{isOpen() ? "Open" : "Closed"}</Text>;
};

export default ParkOpenStatus;
