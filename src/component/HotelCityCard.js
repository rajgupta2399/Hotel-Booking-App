import React, { useContext, useEffect, useState } from "react";
import { CityCoordinates, CountryCoordinates } from "../context/ContextApi";
import { options } from "../utils/Constant";
import MainHotelCard from "./MainHotelCard";
import NewSkeletonContainer from "./NewSkeletonContainer";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/store";
import useHotelFacility from "../Hooks/useHotelFacility";
import useSearchCityHotel from "../Hooks/useSearchCityHotel";
import { addCityHotel } from "../store/cityHotelSlice";

const HotelCityCard = () => {
  useHotelFacility();
  useSearchCityHotel();
  const dispatch = useDispatch();
  const facility = useSelector((store) => store.facility.hotelFacility);
  const cityHotel = useSelector((store) => store.cityHotel.cityHotel);

  const handleFilterTopRated = () => {
    const filteredHotels = cityHotel.filter((hotel) => hotel.rating > 9);
    dispatch(addCityHotel(filteredHotels));
  };

  return (
    <>
      <div className=" flex flex-row gap-10 bg-[#1a1e21]">
        <div className=" w-[450px] border-2 border-white h-[100vh] overflow-y-auto">
          <button
            className="px-3 py-2 bg-red-500 rounded-xl"
            onClick={handleFilterTopRated}
          >
            Top Rated Hotel Stays
          </button>
        </div>
        <div className=" flex flex-col w-full h-[100vh] overflow-y-auto border border-gray-300 overscroll-auto scrollbar-hide px-10 py-5 rounded-lg">
          {cityHotel && cityHotel.length > 0 ? (
            <div className="flex flex-wrap gap-5">
              {cityHotel.map((item, index) => (
                <div key={item.id || index}>
                  <MainHotelCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className=" flex flex-wrap gap-10 mb-6 flex-col">
              <NewSkeletonContainer />
              <NewSkeletonContainer />
              <NewSkeletonContainer />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HotelCityCard;
