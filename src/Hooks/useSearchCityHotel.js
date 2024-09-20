import React, { useContext, useEffect, useState } from "react";
import { CityCoordinates, CountryCoordinates } from "../context/ContextApi";
import { useDispatch } from "react-redux";
import { addCityHotel } from "../store/cityHotelSlice";
import { options } from "../utils/Constant";

const useSearchCityHotel = () => {
  const dispatch = useDispatch();
  const { country } = useContext(CountryCoordinates);
  const { city } = useContext(CityCoordinates);

  const fetchCityHotel = async () => {
    const res = await fetch(
      `https://api.liteapi.travel/v3.0/data/hotels?countryCode=${country.code}&cityName=${city.city}`,
      options
    );
    const data = await res.json();
    dispatch(addCityHotel(data.data));
  };

  useEffect(() => {
    fetchCityHotel();
  }, [country, city]);
};

export default useSearchCityHotel;
