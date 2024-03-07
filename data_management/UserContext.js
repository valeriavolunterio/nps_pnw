import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if there is user data stored in AsyncStorage when the app starts
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Error retrieving user data from AsyncStorage:", error);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    // Function to update user data and store it in AsyncStorage
    const updateUser = async (userData) => {
      try {
        await AsyncStorage.setItem("userData", JSON.stringify(userData));
      } catch (error) {
        console.error("Error saving user data to AsyncStorage:", error);
      }
    };

    if (user !== null) {
      updateUser(user);
    } else {
      // If user is null (logged out), remove user data from AsyncStorage
      AsyncStorage.removeItem("userData");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
