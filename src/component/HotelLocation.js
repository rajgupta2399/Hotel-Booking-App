import React from "react";
import { useSelector } from "react-redux";
import useHotelDetail from "../Hooks/useHotelDetail";

const HotelLocation = () => {
  useHotelDetail();
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);

  return (
    <div>
      <div className="border-2 rounded-lg py-5 px-5 sm:px-8 md:px-16 lg:px-24 mb-5">
        <div className="location rounded-md py-3 flex flex-col lg:flex-row gap-5 justify-center">
          <iframe
            src={`https://maps.google.com/maps?q=${hotelDetail?.location?.latitude},${hotelDetail?.location?.longitude}&h1=es;&output=embed`}
            height="400px"
            width="100%"
            title="Hotel Location"
            className="rounded-lg lg:w-[60%]"
          ></iframe>

          <div className="flex justify-center flex-col w-full lg:w-auto">
            <div className="text py-3">
              <h5 className="font-bold text-center text-lg lg:text-xl">
                {hotelDetail && hotelDetail.name}
              </h5>
              <p className="text-center text-sm lg:text-base">
                {hotelDetail && hotelDetail.address},{" "}
                {hotelDetail && hotelDetail.city}
              </p>
            </div>
            <div className="w-full flex justify-center">
              <button className="text-white bg-red-600 border-2 border-red-600 py-2 px-3 font-semibold rounded-md w-[100%] lg:w-[50%]">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelLocation;
