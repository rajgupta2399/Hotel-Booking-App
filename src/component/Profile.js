import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Logs form data when submitted
  };

  return (
    <div className="w-full h-[100vh] text-white">
      <div className=" flex justify-center align-middle">
        <div className=" mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* First Name */}
            <div className="">
              <input
                type="text"
                id="firstName"
                {...register("firstName")}
                className=" w-[250px] text-black"
                placeholder=" Your FirstName"
              />
              {errors.firstName && (
                <p className="text-red-600 font-semibold">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <input
                type="text"
                id="lastName"
                {...register("lastName")}
                className=" w-[250px] text-black"
                placeholder=" Your LastName"

              />
              {errors.lastName && (
                <p className="text-red-600 font-semibold">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="text"
                id="phoneNumber"
                {...register("phoneNumber")}
                className=" w-[250px] text-black"
                placeholder=" Your Phone Number"

              />
              {errors.phoneNumber && (
                <p className="text-red-600 font-semibold">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                id="email"
                {...register("email")}
                className=" w-[250px] text-black"
                placeholder=" Your Email"

              />
              {errors.email && (
                <p className="text-red-600 font-semibold">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
