import React, { useContext, useEffect, useState } from "react";
import useCountryCodeHotel from "../Hooks/useCountryCodeHotel";
import { useSelector } from "react-redux";
import { CityCoordinates, CountryCoordinates } from "../context/ContextApi";
import HotelSwiper from "./HotelSwiper";
import { Divider } from "@mui/material";
import HotelByCity from "./HotelByCity";
import useCityHotel from "../Hooks/useCityHotel";
import useHotelFacility from "../Hooks/useHotelFacility";
import BottomFooter from "./Footer";
import Testimonial from "./Testimonial";

export default function Dashboard() {
  useCountryCodeHotel();
  useCityHotel();
  useHotelFacility();
  const Country = useSelector((store) => store.country.CountryHotelCode);
  const fac = useSelector((store) => store.facility.hotelFacility);
  const { country, setCountry } = useContext(CountryCoordinates);
  const { city, setCity } = useContext(CityCoordinates);


  return (
    <>
      <div className=" bg-[#1D232A] px-28">
        <div className=" mt-3">
          <h5 className=" text-white font-semibold text-md py-3">
            Here Are Some Top Rated Hotels In {country.name}
          </h5>
        </div>
        <HotelSwiper />
        <div className="">
          <Divider className=" bg-white" />
        </div>

        <div>
          <div>
            <HotelByCity />
          </div>
          <div className="my-5">
            <Divider className=" bg-white" />
          </div>
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
