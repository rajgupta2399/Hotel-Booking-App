import React, { useContext, useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addCountryHotelCode } from "../store/countrySlice";
import { CountryCoordinates } from "../context/ContextApi";
import store from "../store/store";

const useCountryCodeHotel = () => {
  const { country } = useContext(CountryCoordinates);
  const code = country.code;
  // const Country = useSelector((store) => store.country.CountryHotelCode);

  const dispatch = useDispatch();
  const fetchCountryHotel = async () => {
    const res = await fetch(
      `https://api.liteapi.travel/v3.0/data/hotels?countryCode=${code}`,
      options
    );
    const data = await res.json();
    dispatch(addCountryHotelCode(data.data));
  };

  useEffect(() => {
    fetchCountryHotel();
  }, [country]);
};

export default useCountryCodeHotel;
