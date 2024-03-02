// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABwX5Wog6cD-X1uy3zjy0m-GvRr9wrTsw",
  authDomain: "fb-database-4cc25.firebaseapp.com",
  projectId: "fb-database-4cc25",
  storageBucket: "fb-database-4cc25.appspot.com",
  messagingSenderId: "102511707539",
  appId: "1:102511707539:web:e27990139dd6008d4c5466",
  measurementId: "G-DKDSMPRDL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()