import React, { useEffect, useState, useRef } from "react";
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
  const prevCheckInDateRef = useRef(checkInDate);
  const prevCheckOutDateRef = useRef(checkOutDate);
  const prevOccupanciesRef = useRef(occupancies);
  const prevMemoizedCountryRef = useRef(memoizedCountry);
  const prevMemoizedLocationRef = useRef(memoizedLocation);
  const prevCityRef = useRef(city);

  const fetchData = async () => {
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
        occupancies: occupancies ? occupancies : [{ adults: 2, children: [1] }],
        currency: "USD",
        guestNationality: memoizedCountry?.guestNationality
          ? memoizedCountry?.guestNationality
          : "US",
        checkin: checkInDate,
        checkout: checkOutDate,
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
        // alert("Hotel Room Availabel")
        dispatch(addHotelRoom(data?.data)); // Dispatch action if data is available
      } else {
        dispatch(
          addHotelRoom({
            error: {
              code: 2001,
              message: "no availability found",
            },
          })
        );
        // alert("Data is not available");
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setIsFetchingData(false); // Reset fetching state
    }
  };

  useEffect(() => {
    if (
      checkInDate !== prevCheckInDateRef.current ||
      checkOutDate !== prevCheckOutDateRef.current ||
      occupancies !== prevOccupanciesRef.current ||
      memoizedCountry !== prevMemoizedCountryRef.current ||
      memoizedLocation !== prevMemoizedLocationRef.current ||
      city !== prevCityRef.current
    ) {
      fetchData();
      prevCheckInDateRef.current = checkInDate;
      prevCheckOutDateRef.current = checkOutDate;
      prevOccupanciesRef.current = occupancies;
      prevMemoizedCountryRef.current = memoizedCountry;
      prevMemoizedLocationRef.current = memoizedLocation;
      prevCityRef.current = city;
    }
  }, [checkInDate, checkOutDate, occupancies]);

  return <div></div>; // Replace with actual content
};

export default DummyComponent;
