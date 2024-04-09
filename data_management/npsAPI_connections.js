const parkCodes =
  "ciro,crla,crmo,ebla,fova,glac,grko,hafo,joda,klsa,laro,lewi,miin,miin,mora,noca,nepe,olym,orca,sajh,whmi";

export const fetchParkData = async () => {
  try {
    const parksResponse = await fetch(
      `https://developer.nps.gov/api/v1/parks?parkCode=${parkCodes}`,
      {
        headers: {
          "X-Api-Key": "khwZtjloZ1uc84rQkAVtJu2ZdcnCJaUI2QIDR9WH",
        },
      }
    );
    const parksData = await parksResponse.json();

    return parksData.data;
  } catch (error) {
    console.error("Error fetching park data:", error);
    return [];
  }
};

export const fetchVisitorCenterData = async () => {
  try {
    const newsResponse = await fetch(
      `https://developer.nps.gov/api/v1/visitorcenters?parkCode=${parkCodes}`,
      {
        headers: {
          "X-Api-Key": "khwZtjloZ1uc84rQkAVtJu2ZdcnCJaUI2QIDR9WH",
        },
      }
    );
    const visitorCenterData = await newsResponse.json();

    return visitorCenterData.data;
  } catch (error) {
    console.error("Error fetching visitor center data:", error);
    return [];
  }
};

export const fetchAlertData = async () => {
  try {
    const alertsResponse = await fetch(
      `https://developer.nps.gov/api/v1/alerts?parkCode=${parkCodes}`,
      {
        headers: {
          "X-Api-Key": "khwZtjloZ1uc84rQkAVtJu2ZdcnCJaUI2QIDR9WH",
        },
      }
    );
    const alertsData = await alertsResponse.json();

    return alertsData.data;
  } catch (error) {
    console.error("Error fetching alert data:", error);
    return [];
  }
};

export const fetchEventsData = async () => {
  try {
    const eventsResponse = await fetch(
      `https://developer.nps.gov/api/v1/events?siteCode=${parkCodes}`,
      {
        headers: {
          "X-Api-Key": "khwZtjloZ1uc84rQkAVtJu2ZdcnCJaUI2QIDR9WH",
        },
      }
    );
    const eventsData = await eventsResponse.json();

    return eventsData.data;
  } catch (error) {
    console.error("Error fetching events data:", error);
    return [];
  }
};

export const fetchNewsData = async () => {
  try {
    const newsResponse = await fetch(
      `https://developer.nps.gov/api/v1/newsreleases?parkCode=${parkCodes}`,
      {
        headers: {
          "X-Api-Key": "khwZtjloZ1uc84rQkAVtJu2ZdcnCJaUI2QIDR9WH",
        },
      }
    );
    const newsData = await newsResponse.json();

    return newsData.data;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return [];
  }
};
