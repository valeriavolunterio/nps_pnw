import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Linking } from 'react-native';
import { Button, ButtonGroup } from "@rneui/themed";
// import { styles } from "../../App";

import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// Sample data for news articles
const newsData = [
  {
    id: '1',
    title: 'Mount Rainer National Park expands winter recreational access for the 2023/2024 season',
    date: '2023-11-08',
    park: 'Mount Rainer National Park',
    description: 'Mount Rainier National Park announced updates today to the winter 2023-24 recreation access schedule. Beginning Nov. 15, the park will expand winter public vehicle access to the Paradise area to five days per week on a Thursday through Monday schedule. ',
    link: 'https://www.nps.gov/mora/learn/news/mount-rainier-national-park-expands-winter-recreational-access-for-the-2023-2024-season.htm',
  },
  {
    id: '2',
    title: 'Be a Tourist in Your Own Hometowns',
    date: '2023-10-25',
    park: 'Lewis and Clark National Historic Park',
    description: 'Pacific and Clatsop Counties are known for their tourist attractions, but how long has it been since you visited these sites? As a “local tourist,” the Hometown Tourism Day on Saturday, November 11 (Veterans Day), might be just the ticket for you.',
    link: 'https://www.nps.gov/lewi/learn/news/be-a-tourist-in-your-own-hometowns.htm',
  },
  {
    id: '3',
    title: 'Olympic National Park seeks public input on Elwha Bridge replacement environmental assessment',
    date: '2023-10-19',
    park: 'Olympic National Park',
    description: 'Olympic National Park is seeking public input on an environmental assessment that proposes to construct 12 engineered log jams - structures designed to mimic natural river dynamics - to mitigate impacts from the construction of the U.S. 101 Elwha River Bridge.',
    link: 'https://www.nps.gov/olym/learn/news/olympic-national-park-seeks-public-input-on-elwha-bridge-replacement-environmental-assessment.htm',
  },
  {
    id: '4',
    title: 'Additional public meetings scheduled on options for restoring grizzly bears to the North Cascades',
    date: '2023-10-13',
    park: 'North Cascades National Park',
    description: 'Two additional meetings scheduled for the public to provide comment on recently released documents.',
    link: 'https://www.nps.gov/noca/learn/news/additional-public-meetings-scheduled-on-options-for-restoring-grizzly-bears-to-the-north-cascades.htm',
  },
  
];

const NewsScreen = () => {
  // Function to render each news card
  const renderNewsCard = ({ item }) => (
    <TouchableOpacity onPress={() => openLink(item.link)}>
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.park}>{item.park}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  // Function to open the link in a browser or handle navigation
  const openLink = (link) => {
    // Use Linking to open the URL
    Linking.openURL(link)
      .catch((error) => console.error('Error opening link:', error));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: 'gray',
    marginBottom: 5,
  },
  park: {
    color: 'green',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default NewsScreen;