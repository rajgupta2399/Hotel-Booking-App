import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addCheckoutDetails } from "../store/checkoutSlice";

// Define Yup schema for validation
const schema = yup
  .object({
    email: yup
      .string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email format is invalid")
      .required("Email is required"),
    firstName: yup
      .string()
      .min(3, "First name must be at least 3 characters")
      .max(15, "First name must be at most 15 characters")
      .required("First name is required"),
    lastName: yup
      .string()
      .min(3, "Last name must be at least 3 characters")
      .max(15, "Last name must be at most 15 characters")
      .required("Last name is required"),
    phoneNumber: yup
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(12, "Phone number can be at most 12 digits")
      .required("Phone number is required"),
  })
  .required();

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);
  const location = useLocation();
  const { info } = location.state || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(
      addCheckoutDetails({
        userInfo: data,
        hotelDetail,
        roomInfo: info?.rates?.[0]?.name || "N/A",
        totalAmount: info?.offerRetailRate?.amount || "N/A",
      })
    );
    navigate("/MyBooking");
  };

  useEffect(() => {
    if (info) {
      console.log(info);
      console.log(hotelDetail);
    }
  }, [info, hotelDetail]);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* Hotel Image */}
            <img
              src={hotelDetail?.main_photo}
              alt={hotelDetail?.name}
              className="w-full lg:w-1/2 rounded-lg object-cover shadow-md"
            />

            {/* Hotel Info */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-3 text-white">
                {hotelDetail?.name}
              </h2>
              <p className="text-gray-400 mb-4">{hotelDetail?.address}</p>
              <div className="mt-5 space-y-2">
                <p>
                  <span className="font-semibold text-gray-200">
                    Check-In Time:{" "}
                  </span>
                  {hotelDetail?.checkinCheckoutTimes?.checkin}
                </p>
                <p>
                  <span className="font-semibold text-gray-200">
                    Check-In Start:{" "}
                  </span>
                  {hotelDetail?.checkinCheckoutTimes?.checkinStart}
                </p>
                <p>
                  <span className="font-semibold text-gray-200">
                    Check-In End:{" "}
                  </span>
                  {hotelDetail?.checkinCheckoutTimes?.checkinEnd}
                </p>
                <p>
                  <span className="font-semibold text-gray-200">
                    Check-Out Time:{" "}
                  </span>
                  {hotelDetail?.checkinCheckoutTimes?.checkout}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Room Booking Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
          <h3 className="text-xl font-bold mb-4 text-white">Booking Summary</h3>
          <p className="mb-2">
            <span className="font-semibold text-gray-200">Hotel: </span>
            {hotelDetail?.name}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-200">Room: </span>
            {info?.rates?.[0]?.name || "N/A"}
          </p>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-gray-200">Total Amount:</span>
            <span className="text-green-400 text-lg">
              ${info?.offerRetailRate?.amount || "N/A"}
            </span>
          </div>
        </div>

        {/* User Info Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Pre-Book Your Stay
            </h2>

            {/* First Name */}
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-300 font-semibold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                {...register("firstName")}
                className="w-full p-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-300 font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                {...register("lastName")}
                className="w-full p-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-300 font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                {...register("phoneNumber")}
                className="w-full p-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full p-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <input
                type="submit"
                value="Proceed to Pre-Book"
                className="bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 px-6 rounded-full font-semibold text-lg text-white shadow-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
