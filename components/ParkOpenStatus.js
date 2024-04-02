import React from "react";
import { View, Text } from "react-native";

const ParkOpenStatus = ({ hours }) => {
  const isOpen = () => {
    const currentDay = new Date()
      .toLocaleDateString("en-US", { weekday: "long" })
      .toLowerCase()
      .split(",")[0];
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Los_Angeles", // PST timezone
    });

    const standardHours = hours[currentDay];

    if (!standardHours) {
      return false;
    } else if (
      standardHours === "All Day" ||
      standardHours === "Sunrise to Sunset"
    ) {
      return true;
    } else if (standardHours.startsWith("Closes at")) {
      // Extract the closing time
      const closeTime = standardHours.split("Closes at ")[1];
      const [closeHour, closeMinute] = closeTime.split(":");
      const [currentHour, currentMinute] = currentTime.split(":");
      return (
        currentHour < closeHour ||
        (currentHour === closeHour && currentMinute < closeMinute)
      );
    } else if (standardHours.includes(" - ")) {
      const [start, end] = standardHours.split(" - ");
      const [startHour, startMinute] = start.split(":");
      const [endHour, endMinute] = end.split(":");
      const [currentHour, currentMinute] = currentTime.split(":");
      return (
        (currentHour > startHour ||
          (currentHour === startHour && currentMinute >= startMinute)) &&
        (currentHour < endHour ||
          (currentHour === endHour && currentMinute < endMinute))
      );
    } else {
      // Handle specific time range (e.g., "9:00AM - 5:00PM")
      const [start, end] = standardHours.split(" - ");
      const [startHour, startMinute] = start.split(":");
      const [endHour, endMinute] = end.split(":");
      const [currentHour, currentMinute] = currentTime.split(":");
      return (
        (currentHour > startHour ||
          (currentHour === startHour && currentMinute >= startMinute)) &&
        (currentHour < endHour ||
          (currentHour === endHour && currentMinute < endMinute))
      );
    }
  };

  return <Text style={{ color: "white" }}>{isOpen() ? "Open" : "Closed"}</Text>;
};

export default ParkOpenStatus;
