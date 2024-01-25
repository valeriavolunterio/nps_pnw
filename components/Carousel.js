import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginTop: 20,
    marginBottom: 5,
    paddingBottom: 5,

  },
  item: {
    width: width - 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9, // Set border radius for rounded corners
    marginHorizontal: 20, // Adjust horizontal margin for spacing between cards
    elevation: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#ccc",
  },
  activeDot: {
    backgroundColor: "#2C505E", // Change color of active dot
  },
});

const CarouselItem = ({ title }) => (
  <View style={[styles.item, { backgroundColor: "#ccc" }]}>
    <Text>{title}</Text>
  </View>
);

const Dot = ({ active }) => (
  <View style={[styles.dot, active && styles.activeDot]} />
);

const SwipeCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    // Update activeIndex when the ScrollView scrolls
    // This effect runs on mount and whenever activeIndex changes
    const updateIndex = (event) => handleScroll(event);
    return () => {
      // Clean up event listener
    };
  }, [activeIndex]);

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Adjust scroll event throttle as needed
      >
        {data.map((item, index) => (
          <CarouselItem key={index} title={item.title} />
        ))}
      </ScrollView>
      <View style={styles.paginationContainer}>
        {data.map((item, index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </View>
    </View>
  );
};

export default SwipeCarousel;


