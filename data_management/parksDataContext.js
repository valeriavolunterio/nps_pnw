import React, { useState, useEffect, createContext, useContext } from "react";
import {
  fetchParkData,
  fetchAlertData,
  fetchEventsData,
  fetchNewsData,
} from "./npsAPI_connections";

const ParkDataContext = createContext();

export const useParkData = () => useContext(ParkDataContext);

export const ParkDataProvider = ({ children }) => {
  const [parkData, setParkData] = useState([]);
  const [selectedParkData, setSelectedParkData] = useState(null);
  const [alertData, setAlertData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const parks = await fetchParkData();
      const alerts = await fetchAlertData();
      const events = await fetchEventsData();
      const news = await fetchNewsData();

      setParkData(parks);
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
        alertData,
        eventsData,
        newsData,
        selectedParkData,
        setSelectedParkData,
      }}
    >
      {children}
    </ParkDataContext.Provider>
  );
};
