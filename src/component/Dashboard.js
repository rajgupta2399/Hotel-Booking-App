import React, { useContext, useEffect, useState } from "react";
import { options } from "../utils/Constant";
import useCountryCodeHotel from "../Hooks/useCountryCodeHotel";
import { useSelector } from "react-redux";
import { CountryCoordinates } from "../context/ContextApi";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";
import HotelCard from "./HotelCard";
import HotelSwiper from "./HotelSwiper";
import { Divider } from "@mui/material";
import HotelByCity from "./HotelByCity";
import useCityHotel from "../Hooks/useCityHotel";

export default function Dashboard() {
  useCountryCodeHotel();
  useCityHotel();
  const Country = useSelector((store) => store.country.CountryHotelCode);
  const { country, setCountry } = useContext(CountryCoordinates);

  return (
    <>
      <div className=" bg-[#1D232A] px-28">
        <div className=" mt-3">
          <h5 className=" text-white px-24 font-semibold text-md py-3">
            Here Are Some Top Rated Hotels In {country.name}
          </h5>
        </div>
        <HotelSwiper />
        <div className=" px-24">
          <Divider className=" bg-white" />
        </div>

        <div>
          <HotelByCity />
        </div>
      </div>
      {/**
               
      <div className="px-24">
        {Country && Country.length > 0 ? (
          <div className="flex flex-wrap gap-5">
            {Country.map((item, index) => (
              <div key={item.id || index}>
                <HotelCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <p>No hotels available to display in the list.</p>
        )}
      </div>
      */}
    </>
  );
}
