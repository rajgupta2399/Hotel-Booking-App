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
import SkeletonContainer from "./SkeletonContainer";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

// import required modules
import HotelCard from "./HotelCard";
import Divider from "@mui/material/Divider";
import HotelByCity from "./HotelByCity";

export default function HotelSwiper() {
  useCountryCodeHotel();
  const Country = useSelector((store) => store.country.CountryHotelCode);

  return (
    <>
      <div className="">
        <div>
          <Swiper
            className=""
            spaceBetween={50}
            slidesPerView={3}
            cssMode={true}
            // pagination={true}
            loop={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Keyboard]}
          >
            {Country && Country.length > 0 ? (
              Country.slice(0, 15).map((item, index) => (
                <SwiperSlide key={index}>
                  <div key={item.id || index} className=" shadow-md">
                    <HotelCard item={item} key={index} />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div className=" flex flex-wrap gap-10 mb-6">
                <SkeletonContainer />
                <SkeletonContainer />
                <SkeletonContainer />
              </div>
            )}
          </Swiper>
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
