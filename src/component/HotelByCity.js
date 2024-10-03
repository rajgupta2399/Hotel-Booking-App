import React, { useContext, useState } from "react";
import useCityHotel from "../Hooks/useCityHotel";
import { Divider } from "@mui/material";
import { CityCoordinates } from "../context/ContextApi";
import HotelCityCard from "./HotelCityCard";
import { useSelector } from "react-redux";
import store from "../store/store";

const HotelByCity = () => {
  const { city, setCity } = useContext(CityCoordinates); // Assuming this is coming from context
  const { cityCode } = useCityHotel(); // Assuming this hook fetches the city data
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCity, setFilteredCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null); // New state to store selected city

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = cityCode.filter((city) =>
      city.city.toLowerCase().includes(searchValue)
    );
    setFilteredCity(filtered);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city.city); // Set the selected city
    setFilteredCity([]); // Clear filtered cities
    setCity(city); // Update the context with the selected city
  };

  return (
    <div className="mt-5">
      <h6 className="text-lg capitalize font-semibold text-white text-center">
        Search Your Hotel By City
      </h6>
      <div className="flex justify-center my-8">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Enter Your City To Book Hotels"
            className="outline-none w-full px-4 h-[50px] rounded-md text-center"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {filteredCity.length > 0 && (
            <ul className="absolute z-10 w-full bg-[#1D232A] border border-gray-300 rounded-md max-h-60 overflow-y-auto">
              {filteredCity.map((item, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer text-white"
                  onClick={() => handleCitySelect(item)}
                >
                  {item.city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {selectedCity && (
        <div className="text-white text-center mt-4">
          <h6 className="text-lg capitalize font-semibold text-white">
            Top Hotels in {selectedCity}
          </h6>
        </div>
      )}
      <HotelCityCard />{" "}
      {/* Assuming this will show the hotels based on selectedCity */}
    </div>
  );
};

export default HotelByCity;
