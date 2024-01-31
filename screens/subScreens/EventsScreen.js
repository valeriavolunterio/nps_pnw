import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Linking } from 'react-native';
import { Button, ButtonGroup } from "@rneui/themed";
// import { styles } from "../../App";

// Sample data for news articles
const eventsData = [
  {
    id: '1',
    title: 'Victoria Overlook Ranger Talk',
    date: '2023-08-06',
    park: 'Olympic National Park',
    time: '10:15 AM - 10:45 PM',
    link: 'https://www.nps.gov/mora/learn/news/mount-rainier-national-park-expands-winter-recreational-access-for-the-2023-2024-season.htm',
  },
  {
    id: '2',
    title: 'Reading with a Ranger at Hunters Public Library',
    date: '2023-08-027',
    park: 'Whitman Mission National Historic Site',
    time: '10:30 AM - 11:30 AM',
    link: 'https://www.nps.gov/mora/learn/news/mount-rainier-national-park-expands-winter-recreational-access-for-the-2023-2024-season.htm',
  },
  {
    id: '3',
    title: 'Ranger Program',
    date: '2023-09-03',
    park: 'Whitman Mission National Historic Site',
    time: '10:30 AM - 11:30 AM, 1:30 PM - 2:30 PM',
    link: 'https://www.nps.gov/mora/learn/news/mount-rainier-national-park-expands-winter-recreational-access-for-the-2023-2024-season.htm',
  },
  {
    id: '4',
    title: 'Hurrican Ridge "It\'s your Moon!" Telescope Program',
    date: '2023-09-24',
    park: 'Olympic National Park',
    time: '7:30 PM - 8:30 PM',
    link: 'https://www.nps.gov/mora/learn/news/mount-rainier-national-park-expands-winter-recreational-access-for-the-2023-2024-season.htm',
  },
  {
    id: '5',
    title: 'Paradise Ranger Pop-Up Programs',
    date: '2023-09-30',
    park: 'Mount Rainer National Park',
    time: '9:30 AM - 5:30 PM',
    link: 'https://www.nps.gov/mora/learn/news/mount-rainier-national-park-expands-winter-recreational-access-for-the-2023-2024-season.htm',
  },
  
];

const EventsScreen = () => {
  // Function to render each news card
  const renderEventsCard = ({ item }) => (
    <TouchableOpacity onPress={() => openLink(item.link)}>
      <View style={styles.card}>
      <Text style={styles.park}>{item.park}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.time}>{item.time}</Text>
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
        data={eventsData}
        keyExtractor={(item) => item.id}
        renderItem={renderEventsCard}
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

export default EventsScreen;
