import React, { useEffect } from "react";

const DummyComponent = () => {
  useEffect(() => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-Key": "sand_3cb42e87-dee1-4083-9436-11f7cb4bc2f1",
      },
      body: JSON.stringify({
        hotelIds: ["lp1897"],
        occupancies: [{ adults: 2, children: [1] }],
        currency: "USD",
        guestNationality: "US",
        checkin: "2024-12-30",
        checkout: "2024-12-31",
        countryCode: "US",
        cityName: "New York",
        latitude: 34.052235,
        longitude: -118.243683,
      }),
    };

    // Fetch API call
    fetch("https://api.liteapi.travel/v3.0/hotels/rates", options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the response data
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Dummy Component</h1>
      <p>Check the console for the response data.</p>
    </div>
  );
};

export default DummyComponent;
