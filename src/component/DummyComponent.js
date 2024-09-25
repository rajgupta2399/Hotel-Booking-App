import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addHotelRoom } from "../store/HotelRoomSlice";
import { debounce } from "lodash"; // You can use lodash for debouncing the API call

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
  const [canFetch, setCanFetch] = useState(true); // Control to manage API call

  useEffect(() => {
    if (!canFetch) return; // Prevent the API call if canFetch is false

    // Get the current date for check-in
    const today = new Date();
    const formattedCheckInDate = today.toISOString().split("T")[0];

    // Get the next day for check-out
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedCheckOutDate = tomorrow.toISOString().split("T")[0];

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-Key": process.env.REACT_APP_HOTEL_API_KEY,
      },
      body: JSON.stringify({
        hotelIds: [hotelId] ? [hotelId] : "lp1b578",
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

    const fetchData = debounce(() => {
      fetch("https://api.liteapi.travel/v3.0/hotels/rates", options)
        .then((response) => response.json())
        .then((data) => {
          if (data && data?.data) {
            dispatch(addHotelRoom(data.data));
          } else {
            dispatch(
              addHotelRoom({
                error: {
                  code: 2001,
                  message: "no availability found",
                },
              })
            );
          }
        })
        .catch((err) => {
          console.error("Fetch error:", err);
        });
    }, 1000); // Debounce by 1 second

    fetchData();

    return () => {
      fetchData.cancel(); // Clean up the debounce call if the component unmounts or updates
    };
  }, [occupancies, checkInDate, checkOutDate, dispatch, canFetch]);

  // Simulate a button or event to toggle canFetch and control the useEffect trigger
  const handleFetchToggle = () => {
    setCanFetch((prev) => !prev); // This will prevent the useEffect from running continuously
  };

  return (
    <div>
      <button onClick={handleFetchToggle}>
        {canFetch ? "Pause Fetch" : "Resume Fetch"}
      </button>
    </div>
  );
};

export default DummyComponent;
