import React, { useContext, useState } from "react";
import useCityHotel from "../Hooks/useCityHotel";
import { Divider } from "@mui/material";
import { CityCoordinates } from "../context/ContextApi";
import HotelCityCard from "./HotelCityCard";

const HotelByCity = () => {
  const { city, setCity } = useContext(CityCoordinates);
  const { cityCode } = useCityHotel();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCity, setFilteredCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const CityCode = cityCode;

  // Handle search input change
  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = CityCode.filter((city) =>
      city.city.toLowerCase().includes(searchValue)
    );
    setFilteredCity(filtered);
  };

  // Handle city selection
  const handleCitySelect = (item) => {
    setSearchTerm(item.city);
    setFilteredCity([]);
    setSelectedCity(item.city);
    setCity(item);
  };

  return (
    <>
      <div className="mt-5">
        <h6 className="text-lg capitalize font-semibold text-white text-center">
          Search Your Hotel By entering the city name
        </h6>
        <div className="flex justify-center align-middle my-8 gap-5">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="     Enter Your City To Book Hotels"
              className="outline-none w-full focus:outline-none text-black block rounded-md h-[50px] text-center"
              value={searchTerm}
              onChange={handleSearchChange} // Update on input change
            />

            {/* City list dropdown below input */}
            {filteredCity.length > 0 && (
              <ul className="absolute z-10 w-full bg-[#1D232A] border border-gray-300 rounded-md max-h-60 overflow-y-auto scrollbar-hide">
                {filteredCity.map((item, index) => (
                  <div key={index}>
                    <li
                      key={index}
                      className="p-2 cursor-pointer text-white"
                      onClick={() => handleCitySelect(item)}
                    >
                      {item.city}
                    </li>
                    <Divider className="bg-white mb-2 mt-2" />
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Display selected city */}
        {selectedCity && (
          <div className="text-white text-center mt-4">
            <h6 className="text-lg capitalize font-semibold text-white text-center mb-5">
              Top Hotels Found in {selectedCity} City
            </h6>
          </div>
        )}
      </div>

      <HotelCityCard />
    </>
  );
};

export default HotelByCity;
