import React, { useContext, useEffect, useState } from "react";
import { CityCoordinates, CountryCoordinates } from "../context/ContextApi";
import { options } from "../utils/Constant";
import HotelCard from "./HotelCard";
import { Sidebar } from "primereact/sidebar";
import MainHotelCard from "./MainHotelCard";
import SkeletonContainer from "./SkeletonContainer";
import NewSkeletonContainer from "./NewSkeletonContainer";

const HotelCityCard = () => {
  const [visible, setVisible] = useState(true);
  const [dummy, setDummy] = useState([]);
  const { country } = useContext(CountryCoordinates);
  const { city } = useContext(CityCoordinates);

  const fetchCityHotel = async () => {
    const res = await fetch(
      `https://api.liteapi.travel/v3.0/data/hotels?countryCode=${country.code}&cityName=${city.city}`,
      options
    );
    const data = await res.json();
    console.log(data.data);
    
    setDummy(data.data);
  };

  useEffect(() => {
    fetchCityHotel();
  }, [country, city]);

  return (
    <>
      <div className=" flex flex-row gap-10 bg-[#1a1e21]">
        <div className=" w-[450px] border-2 border-white h-[100vh]">
          <h1>Filter</h1>
          <button
          className="px-3 py-2 bg-red-500 rounded-xl"
          onClick={() => {
            const filterLogic = dummy.filter((res) => {
              return res.rating > 9;
            });

            setDummy(filterLogic);
          }}
        >
          Top Rated Hotel Stays
        </button>
        </div>
        <div className=" flex flex-col w-full h-[100vh] overflow-y-auto border border-gray-300 overscroll-auto scrollbar-hide px-10 py-5 rounded-lg">
          {dummy && dummy.length > 0 ? (
            <div className="flex flex-wrap gap-5">
              {dummy.map((item, index) => (
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
