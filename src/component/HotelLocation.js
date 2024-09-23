import React from "react";
import { useSelector } from "react-redux";
import useHotelDetail from "../Hooks/useHotelDetail";

const HotelLocation = () => {
  useHotelDetail();
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);

  return (
    <div>
      <div className="border-2 rounded-lg py-5 px-24 ">
        <div className="location border-2 rounded-md py-3 flex gap-5 justify-center">
          <iframe
            src={`https://maps.google.com/maps?q=${hotelDetail?.location?.latitude},${hotelDetail?.location?.longitude}&h1=es;&output=embed`}
            height="400px"
            width="60%"
            title="Hotel Location"
            className=" rounded-lg"
          ></iframe>

          <div className=" flex justify-center flex-col">
            <div className="text py-3">
              <h5 className="font-bold text-center">
                {" "}
                {hotelDetail && hotelDetail.name}{" "}
              </h5>
              <p className="text-center">
                {hotelDetail && hotelDetail.address},{" "}
                {hotelDetail && hotelDetail.city}
              </p>
            </div>
            <div className="">
              <div className="w-full flex justify-center">
                <button className=" text-white bg-red-600 border-2 border-red-600 py-2 px-3 font-semibold rounded-md w-[100%]">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelLocation;
