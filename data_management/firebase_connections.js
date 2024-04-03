import { db } from "../data_management/firebaseConfig.js";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { jsonData } from "./placesJSON.js";

const uploadJsonToFirestore = async (jsonData) => {
  try {
    const documentId = `${jsonData.parkCode}-${jsonData.placeName
      .replace(/\s+/g, "")
      .toLowerCase()}`;

    const docRef = doc(db, "places", documentId);
    await setDoc(docRef, jsonData);
    console.log("JSON data uploaded successfully!");
  } catch (error) {
    console.error("Error uploading JSON data:", error);
  }
};

export const fetchPlaceData = async () => {
  try {
    // // Iterate over each JSON object in jsonData and upload it to Firestore
    // jsonData.forEach(async (data) => {
    //   await uploadJsonToFirestore(data);
    // });

    const placesCollectionRef = collection(db, "places");
    const snapshot = await getDocs(placesCollectionRef);
    const placeData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return placeData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
