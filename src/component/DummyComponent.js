import React, { useEffect } from "react";

const DummyComponent = ({
  hotelId,
  occupancies,
  memoizedCountry,
  memoizedLocation,
  checkInDate,
  checkOutDate,
  city,
}) => {
  // useEffect(() => {
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       accept: "application/json",
  //       "content-type": "application/json",
  //       "X-API-Key": "sand_3cb42e87-dee1-4083-9436-11f7cb4bc2f1",
  //     },
  //     body: JSON.stringify({
  //       hotelIds: [hotelId] ? [hotelId] : "lp1b578",
  //       occupancies: occupancies ? occupancies : [{ adults: 2, children: [1] }],
  //       currency: "USD",
  //       guestNationality: memoizedCountry?.guestNationality
  //         ? memoizedCountry?.guestNationality
  //         : "US",
  //       checkin: checkInDate ? checkInDate : "2024-12-30",
  //       checkout: checkOutDate ? checkOutDate : "2024-12-31",
  //       countryCode: memoizedCountry?.countryCode
  //         ? memoizedCountry?.countryCode
  //         : "US",
  //       cityName: city ? city : "New York",
  //       latitude: memoizedLocation?.latitude
  //         ? memoizedLocation?.latitude
  //         : 34.052235,
  //       longitude: memoizedLocation?.longitude
  //         ? memoizedLocation?.longitude
  //         : -118.243683,
  //     }),
  //   };

  //   // Fetch API call
  //   fetch("https://api.liteapi.travel/v3.0/hotels/rates", options)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data && data?.data) {
  //         // If data is available, log it
  //         console.log("Available data:", data?.data);
  //         // If data is available, show an alert
  //         alert("Data is available");
  //       } else {
  //         // If no data is available, log an error message
  //         console.log({
  //           error: {
  //             code: 2001,
  //             message: "no availability found",
  //           },
  //         });

  //         alert("Data is not available");
  //       }
  //     })
  //     .catch((err) => {
  //       // Log any fetch errors
  //       console.error("Fetch error:", err);
  //     });
  // }, [occupancies, checkInDate, checkOutDate]);

  return (
    <div>
      <h1>Dummy Component</h1>
      <p>Check the console for the response data.</p>
    </div>
  );
};

export default DummyComponent;
