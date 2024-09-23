import React, { useEffect, useState } from "react";

const useHotelRates = (
  hotelIds,
  occupancies,
  checkin,
  checkout,
  countryCode,
  cityName,
  latitude,
  longitude
) => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHotelRates = async () => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-Key": "sand_3cb42e87-dee1-4083-9436-11f7cb4bc2f1",
      },
      body: JSON.stringify({
        hotelIds: hotelIds,
        occupancies: occupancies,
        currency: "USD",
        guestNationality: "US",
        checkin: checkin,
        checkout: checkout,
        countryCode: countryCode,
        cityName: cityName,
        latitude: latitude,
        longitude: longitude,
      }),
    };

    try {
      const response = await fetch(
        "https://api.liteapi.travel/v3.0/hotels/rates",
        options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRates(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotelRates();
  }, [
    hotelIds,
    occupancies,
    checkin,
    checkout,
    countryCode,
    cityName,
    latitude,
    longitude,
  ]);

  return { rates, loading, error };
};

export default useHotelRates;
