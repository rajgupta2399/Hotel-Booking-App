import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addHotelRoom } from "../store/HotelRoomSlice";

const DummyComponent = ({
  hotelId,
  occupancies,
  memoizedCountry,
  memoizedLocation,
  checkInDate,
  checkOutDate,
  city,
}) => {
  const dispatch = useDispatch();
  const [isFetchingData, setIsFetchingData] = useState(false);

  const fetchData = async (
    currentCheckInDate,
    currentCheckOutDate,
    currentOccupancies
  ) => {
    if (isFetchingData) return; // Prevent unnecessary fetches
    setIsFetchingData(true); // Set fetching state

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-Key": process.env.REACT_APP_HOTEL_API_KEY,
      },
      body: JSON.stringify({
        hotelIds: hotelId ? [hotelId] : "lp1b578",
        occupancies: currentOccupancies
          ? currentOccupancies
          : [{ adults: 2, children: [1] }],
        currency: "USD",
        guestNationality: memoizedCountry?.guestNationality
          ? memoizedCountry?.guestNationality
          : "US",
        checkin: currentCheckInDate, // Use the current values passed to the function
        checkout: currentCheckOutDate, // Use the current values passed to the function
        countryCode: memoizedCountry?.countryCode
          ? memoizedCountry?.countryCode
          : "US",
        cityName: city ? city : "New York",
        latitude: memoizedLocation?.latitude
          ? memoizedLocation?.latitude
          : 34.052235,
        longitude: memoizedLocation?.longitude
          ? memoizedLocation?.longitude
          : -118.243683,
      }),
    };

    try {
      const response = await fetch(
        "https://api.liteapi.travel/v3.0/hotels/rates",
        options
      );
      const data = await response.json();

      if (data && data?.data) {
        alert("Data is available");
        dispatch(addHotelRoom(data?.data)); // Dispatch action if data is available
      } else {
        dispatch(
          addHotelRoom({
            error: {
              code: 2001,
              message:
                "No Hotel Room Available at this Date and Occupancies..!! Choose Another Date and Occupancies",
            },
          })
        );
        alert("Data is not available");
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setIsFetchingData(false); // Reset fetching state
    }
  };

  useEffect(() => {
    // Directly pass the current props to the fetchData function
    fetchData(checkInDate, checkOutDate, occupancies);
  }, [checkInDate, checkOutDate, occupancies]); // Only run this effect when these values change

  return <div></div>; // Replace with actual content
};

export default DummyComponent;
