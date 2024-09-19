import React, { useContext, useEffect, useState } from "react";
import { CityCoordinates, CountryCoordinates } from "../context/ContextApi";
import { options } from "../utils/Constant";
import HotelCard from "./HotelCard";
import { Sidebar } from "primereact/sidebar";
import MainHotelCard from "./MainHotelCard";

const HotelCityCard = () => {
  const [visible, setVisible] = useState(true);
  const [dummy, setDummy] = useState([]);
  const { country } = useContext(CountryCoordinates);
  const { city } = useContext(CityCoordinates);
  console.log(city.city);

  const fetchCityHotel = async () => {
    const res = await fetch(
      `https://api.liteapi.travel/v3.0/data/hotels?countryCode=${country.code}&cityName=${city.city}`,
      options
    );
    const data = await res.json();
    setDummy(data.data);
  };

  useEffect(() => {
    fetchCityHotel();
  }, [country, city]);

  return (
    <>
      <div className=" flex flex-row gap-10">
        <div className=" w-[450px] border-2 border-white h-[100vh]">
          <h1>Filter</h1>
        </div>
        <div className=" flex flex-col w-full h-[100vh] overflow-y-auto border border-gray-300 overscroll-auto scrollbar-hide px-10 py-5">
          {dummy.map((item, index) => (
            <MainHotelCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HotelCityCard;
