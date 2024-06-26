import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView } from "react-native";

import { styles } from "../styles/PassportStyles.js";

import PassportUser from "./subScreens/PassportUser.js";
import PassportLogin from "./subScreens/PassportLogin.js";
import LoadingScreen from "./LoadingScreen.js";

import { db } from "../data_management/firebaseConfig.js";
import { collection, onSnapshot } from "firebase/firestore";
import UserContext from "../data_management/UserContext.js";

// users: [
//   {
//     name: "John Doe",
//     date: "Jan 2023",
//     photo: require("../assets/adminPhoto.jpg"),
//     email: "admin@nps.gov",
//     password: "password1",
//     facebook: "facebook",
//     instagram: "instagram",
//     tiktok: "tiktok",
//     youtube: "youtube",
//     scanned: ["Olympic"],
//   },
// ],

const PassportScreen = ({ route, navigation }) => {
  const { user, setUser } = useContext(UserContext);

  const [users, setUsers] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false); // Add loading state
  const [error, setError] = useState(null); 

  // Fetch Users Data and update real time
  useEffect(() => {
    try {
      const usersQuery = collection(db, "users");
      onSnapshot(usersQuery, (snapshot) => {
        let usersList = [];
        snapshot.docs.map((doc) =>
          usersList.push({ ...doc.data(), id: doc.id })
        );
        setUsers(usersList);
        setDataLoaded(true);
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  if (!dataLoaded) {
    return <LoadingScreen />;
  }

  console.log(user);

  const handleLogin = ({ email, password }) => {
    // Check if the email and password match any user in the default users data
    const loggedInUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (loggedInUser) {
      // setIsLoggedIn(true);
      setUser(loggedInUser);
      console.log("Logged in as:", loggedInUser);
    } else {
      // Handle invalid credentials
      setError("Invalid email or password.");
      console.log(`Email: ${email} and password: ${password} do not match.`);
    }
  };

  return (
    <SafeAreaView style={styles.passportView}>
      {user ? (
        // Render badge screen if logged in
        <PassportUser user={user} route={route} navigation={navigation} />
      ) : (
        // Render login screen if not logged in
        <PassportLogin handleLogin={handleLogin} navigation={navigation} users={users} setUser={setUser} />
      )}
    </SafeAreaView>
  );
};
export default PassportScreen;
