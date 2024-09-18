import React, { useContext, useEffect, useState } from "react";
import { CountryCoordinates } from "../context/ContextApi";
import { options } from "../utils/Constant";

const useCityHotel = () => {
  const [cityCode, setCityCode] = useState(null);
  const { country } = useContext(CountryCoordinates);

  const fetchCity = async () => {
    const res = await fetch(
      `https://api.liteapi.travel/v3.0/data/cities?countryCode=${country.code}&timeout=4`,
      options
    );
    const data = await res.json();
    setCityCode(data.data);
  };

  useEffect(() => {
    fetchCity();
  }, [country]);

  return { cityCode };
};

export default useCityHotel;
