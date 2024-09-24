import React, { useEffect, useState, useMemo, useCallback } from "react";
import shallowCompare from "shallow-compare";

// Custom hook
const useHotelRates = (
  hotelIds,
  occupancies,
  checkin,
  checkout,
  countryCode,
  cityName,
  latitude,
  longitude,
  guestNationality
) => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHotelRates = useCallback(async () => {
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
        guestNationality: guestNationality,
        checkin: checkin, // Ensure checkin is a valid date string
        checkout: checkout, // Ensure checkout is a valid date string
        countryCode: countryCode, // Ensure this is a valid 2-letter code
        cityName: cityName,
        latitude: parseFloat(latitude), // Ensure latitude is a number
        longitude: parseFloat(longitude), // Ensure longitude is a number
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
  }, [
    hotelIds,
    occupancies,
    checkin,
    checkout,
    countryCode,
    cityName,
    latitude,
    longitude,
    guestNationality,
  ]);

  // Use shallow comparison to prevent unnecessary re-renders if only minor changes occur
  useEffect(
    (prevProps) => {
      if (
        shallowCompare(prevProps, {
          hotelIds,
          occupancies,
          checkin,
          checkout,
          countryCode,
          cityName,
          latitude,
          longitude,
          guestNationality,
        })
      ) {
        return; // No significant changes, skip re-fetch
      }
      fetchHotelRates();
    },
    [
      hotelIds,
      occupancies,
      checkin,
      checkout,
      countryCode,
      cityName,
      latitude,
      longitude,
      guestNationality,
      fetchHotelRates,
    ]
  );

  return { rates, loading, error };
};

export default useHotelRates;
