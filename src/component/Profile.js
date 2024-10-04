import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addUserDetails } from "../store/userProfileSlice";
import { useDispatch, useSelector } from "react-redux";

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

const Profile = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const [isEditMode, setIsEditMode] = useState(false); // Toggle for edit mode
  const userDetails = useSelector((state) => state.profile.userDetails);

  const onSubmit = (data) => {
    // console.log(data); // Logs form data when submitted
    dispatch(addUserDetails(data));
  };

  return (
    <div className="w-full h-screen text-white flex items-center justify-center my-20 px-10 sm:my-0 md:my-0 lg:my-0 xl:my-0">
      <div className=" p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-bold mb-6">
          {isEditMode ? "Edit Profile" : "Profile Details"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div className="mb-4">
            <input
              type="text"
              {...register("firstName")}
              className={`w-full p-2 rounded-lg ${
                isEditMode ? "text-black" : "bg-gray-600 text-white"
              }`}
              placeholder="First Name"
              readOnly={!isEditMode} // Makes the input read-only when not in edit mode
            />
            {errors.firstName && (
              <p className="text-red-600 mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <input
              type="text"
              {...register("lastName")}
              className={`w-full p-2 rounded-lg ${
                isEditMode ? "text-black" : "bg-gray-600 text-white"
              }`}
              placeholder="Last Name"
              readOnly={!isEditMode}
            />
            {errors.lastName && (
              <p className="text-red-600 mt-1">{errors.lastName.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <input
              type="text"
              {...register("phoneNumber")}
              className={`w-full p-2 rounded-lg ${
                isEditMode ? "text-black" : "bg-gray-600 text-white"
              }`}
              placeholder="Phone Number"
              readOnly={!isEditMode}
            />
            {errors.phoneNumber && (
              <p className="text-red-600 mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              {...register("email")}
              className={`w-full p-2 rounded-lg ${
                isEditMode ? "text-black" : "bg-gray-600 text-white"
              }`}
              placeholder="Your Email"
              readOnly={!isEditMode}
            />
            {errors.email && (
              <p className="text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center">
            {isEditMode && (
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
                Save
              </button>
            )}
            {userDetails && (
              <button
                type="button"
                onClick={() => setIsEditMode(!isEditMode)}
                className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg"
              >
                {isEditMode ? "Cancel" : "Edit"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
