import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RecentParksContext = createContext();

const FavoriteParksContext = createContext();

const BookmarkedParksContext = createContext();

export const RecentParksProvider = ({ children }) => {
  const [recentParks, setRecentParks] = useState([]);

  useEffect(() => {
    const getRecentParks = async () => {
      try {
        const recentParksData = await AsyncStorage.getItem("recentParks");
        if (recentParksData) {
          setRecentParks(JSON.parse(recentParksData));
        }
      } catch (error) {
        console.error(
          "Error retrieving recent parks from AsyncStorage:",
          error
        );
      }
    };

    getRecentParks();
  }, []);

  useEffect(() => {
    const updateRecentParks = async (recentParksData) => {
      try {
        await AsyncStorage.setItem(
          "recentParks",
          JSON.stringify(recentParksData)
        );
      } catch (error) {
        console.error("Error saving recent parks to AsyncStorage:", error);
      }
    };

    if (recentParks !== null) {
      updateRecentParks(recentParks);
    } else {
      AsyncStorage.removeItem("recentParks");
    }
  }, [recentParks]);

  return (
    <RecentParksContext.Provider value={{ recentParks, setRecentParks }}>
      {children}
    </RecentParksContext.Provider>
  );
};

export const FavoriteParksProvider = ({ children }) => {
  const [favoriteParks, setFavoriteParks] = useState([]);

  useEffect(() => {
    const getFavoriteParks = async () => {
      try {
        const favoriteParksData = await AsyncStorage.getItem("favoriteParks");
        if (favoriteParksData) {
          setFavoriteParks(JSON.parse(favoriteParksData));
        }
      } catch (error) {
        console.error(
          "Error retrieving favorite parks from AsyncStorage:",
          error
        );
      }
    };

    getFavoriteParks();
  }, []);

  useEffect(() => {
    const updateFavoriteParks = async (favoriteParksData) => {
      try {
        await AsyncStorage.setItem(
          "favoriteParks",
          JSON.stringify(favoriteParksData)
        );
      } catch (error) {
        console.error("Error saving favorite parks to AsyncStorage:", error);
      }
    };

    if (favoriteParks !== null) {
      updateFavoriteParks(favoriteParks);
    } else {
      AsyncStorage.removeItem("favoriteParks");
    }
  }, [favoriteParks]);

  return (
    <FavoriteParksContext.Provider value={{ favoriteParks, setFavoriteParks }}>
      {children}
    </FavoriteParksContext.Provider>
  );
};

export const BookmarkedParksProvider = ({ children }) => {
  const [bookmarkedParks, setBookmarkedParks] = useState([]);

  useEffect(() => {
    const getBookmarkedParks = async () => {
      try {
        const bookmarkedParksData = await AsyncStorage.getItem(
          "bookmarkedParks"
        );
        if (bookmarkedParksData) {
          setBookmarkedParks(JSON.parse(bookmarkedParksData));
        }
      } catch (error) {
        console.error(
          "Error retrieving bookmarked parks from AsyncStorage:",
          error
        );
      }
    };

    getBookmarkedParks();
  }, []);

  useEffect(() => {
    const updateBookmarkedParks = async (bookmarkedParksData) => {
      try {
        await AsyncStorage.setItem(
          "bookmarkedParks",
          JSON.stringify(bookmarkedParksData)
        );
      } catch (error) {
        console.error("Error saving bookmarked parks to AsyncStorage:", error);
      }
    };

    if (bookmarkedParks !== null) {
      updateBookmarkedParks(bookmarkedParks);
    } else {
      AsyncStorage.removeItem("bookmarkedParks");
    }
  }, [bookmarkedParks]);

  return (
    <BookmarkedParksContext.Provider
      value={{ bookmarkedParks, setBookmarkedParks }}
    >
      {children}
    </BookmarkedParksContext.Provider>
  );
};

export { RecentParksContext, FavoriteParksContext, BookmarkedParksContext };
