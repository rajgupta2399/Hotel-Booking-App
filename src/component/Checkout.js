import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);
  const location = useLocation();
  const { info } = location.state || {};

  useEffect(() => {
    if (info) {
      console.log(info);
      console.log(hotelDetail);
    }
  }, [info]);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      {/* Hotel Details */}
      <div className="container mx-auto px-5 lg:px-20">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* Hotel Image */}
            <img
              src={hotelDetail?.main_photo}
              alt={hotelDetail?.name}
              className="w-full lg:w-1/2 rounded-lg object-cover"
            />

            {/* Hotel Info */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-2">{hotelDetail?.name}</h2>
              <p className="text-gray-400">{hotelDetail?.address}</p>

              {/* Check-in/Check-out Timing */}
              <div className="mt-5">
                <p>
                  <span className="font-semibold">Check-In Time: </span>
                  {hotelDetail?.checkinCheckoutTimes?.checkin}
                </p>
                <p>
                  <span className="font-semibold">Check-In Start: </span>
                  {hotelDetail?.checkinCheckoutTimes?.checkinStart}
                </p>
                <p>
                  <span className="font-semibold">Check-In End: </span>
                  {hotelDetail?.checkinCheckoutTimes?.checkinEnd}
                </p>
                <p>
                  <span className="font-semibold">Check-Out Time: </span>
                  {hotelDetail?.checkinCheckoutTimes?.checkout}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Room Booking Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
          <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
          <p className="mb-2">
            <span className="font-semibold">Hotel: </span>
            {hotelDetail?.name}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Room: </span>
            {info?.rates?.[0]?.name || "N/A"}
          </p>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total Amount:</span>
            <span className="text-green-400 text-lg">
              ${info?.offerRetailRate?.amount || "N/A"}
            </span>
          </div>

          {/* Checkout Button */}
          <div className="text-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 px-6 rounded-full font-semibold text-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
