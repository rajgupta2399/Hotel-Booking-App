import React from "react";
import { useSelector } from "react-redux";

const Bookings = () => {
  // Access the checkout information from the Redux store
  const bookings = useSelector((state) => state.checkout.checkoutInfo);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5 lg:px-20">
        <h2 className="text-3xl font-bold mb-5">Your Bookings</h2>

        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-5 flex flex-col lg:flex-row"
            >
              {/* Hotel Image */}
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <img
                  src={booking.hotelDetail?.main_photo}
                  alt={booking.hotelDetail?.name}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>

              {/* Booking Details */}
              <div className="lg:w-2/3 lg:pl-6">
                <h3 className="text-2xl font-bold mb-2">
                  Hotel: {booking.hotelDetail?.name}
                </h3>
                <p className="text-gray-400 mb-2">
                  Address: {booking.hotelDetail?.address}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Room: </span>
                  {booking.roomInfo || "N/A"}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Total Amount: </span>$
                  {booking.totalAmount || "N/A"}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Check-In Time: </span>
                  {booking.hotelDetail?.checkinCheckoutTimes?.checkin}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Check-Out Time: </span>
                  {booking.hotelDetail?.checkinCheckoutTimes?.checkout}
                </p>

                {/* User Info */}
                <p className="text-gray-400">
                  <span className="font-semibold">First Name: </span>
                  {booking.userInfo?.firstName}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Last Name: </span>
                  {booking.userInfo?.lastName}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Email: </span>
                  {booking.userInfo?.email}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Phone Number: </span>
                  {booking.userInfo?.phoneNumber}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
