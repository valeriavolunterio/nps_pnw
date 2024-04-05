import React, { useState, useEffect, createContext, useContext } from "react";
import {
  fetchParkData,
  fetchVisitorCenterData,
  fetchAlertData,
  fetchEventsData,
  fetchNewsData,
} from "./npsAPI_connections";

import { fetchPlaceData } from "./firebase_connections";

const ParkDataContext = createContext();

export const useParkData = () => useContext(ParkDataContext);

export const ParkDataProvider = ({ children }) => {
  const [parkData, setParkData] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [visitorCenterData, setVisitorCenterData] = useState([]);
  const [alertData, setAlertData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const parks = await fetchParkData();
      const places = await fetchPlaceData();
      const visitorCenters = await fetchVisitorCenterData();
      const alerts = await fetchAlertData();
      const events = await fetchEventsData();
      const news = await fetchNewsData();

      setParkData(parks);
      setPlaceData(places);
      setVisitorCenterData(visitorCenters);
      setAlertData(alerts);
      setEventsData(events);
      setNewsData(news);
    };

    fetchData();
  }, []);

  return (
    <ParkDataContext.Provider
      value={{
        parkData,
        placeData,
        visitorCenterData,
        alertData,
        eventsData,
        newsData,
      }}
    >
      {children}
    </ParkDataContext.Provider>
  );
};
