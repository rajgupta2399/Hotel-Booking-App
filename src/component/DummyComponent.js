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
  const fetchData = async () => {
    if (isFetchingData) return; // Prevent unnecessary fetches

    setIsFetchingData(true); // Set fetching state

    const today = new Date();
    const formattedCheckInDate = today.toISOString().split("T")[0];
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedCheckOutDate = tomorrow.toISOString().split("T")[0];

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-Key": "sand_3cb42e87-dee1-4083-9436-11f7cb4bc2f1",
      },
      body: JSON.stringify({
        hotelIds: hotelId ? [hotelId] : "lp1b578",
        occupancies: occupancies ? occupancies : [{ adults: 2, children: [1] }],
        currency: "USD",
        guestNationality: memoizedCountry?.guestNationality
          ? memoizedCountry?.guestNationality
          : "US",
        checkin: checkInDate ? checkInDate : formattedCheckInDate,
        checkout: checkOutDate ? checkOutDate : formattedCheckOutDate,
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
        console.log(data?.data);
        alert("Data is available");
        dispatch(addHotelRoom(data?.data)); // Dispatch action if data is available
      } else {
        console.log({
          error: {
            code: 2001,
            message: "no availability found",
          },
        });
        alert("Data is not available");
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setIsFetchingData(false); // Reset fetching state
    }
  };
  useEffect(() => {
    // Only perform fetch when dependencies change
    fetchData();
  }, [occupancies, checkInDate, checkOutDate]);

  return <div></div>; // Replace with actual content
};

export default DummyComponent;
