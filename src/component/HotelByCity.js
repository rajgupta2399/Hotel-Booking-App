import React, { useContext, useState } from "react";
import useCityHotel from "../Hooks/useCityHotel";
import { Divider } from "@mui/material";
import { CityCoordinates } from "../context/ContextApi";

const HotelByCity = () => {
  const { city, setCity } = useContext(CityCoordinates);
  const { cityCode } = useCityHotel();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCity, setFilteredCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const CityCode = cityCode;
  console.log(CityCode);

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
  const handleCitySelect = (city) => {
    setSearchTerm(city);
    setFilteredCity([]);
    setSelectedCity(city);
    setCity(city);
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
                      onClick={() => handleCitySelect(item.city)}
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
            Selected City: {selectedCity}
          </div>
        )}
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad
        alias facere, porro nostrum voluptate itaque harum architecto soluta
        sapiente iusto expedita quos aspernatur veritatis ea ex doloribus
        molestiae nam fugit rerum sint molestias. Magni recusandae laboriosam
        quod, asperiores illum distinctio culpa voluptatibus, adipisci aut
        eligendi quidem! Ab pariatur nisi iure velit repellendus, distinctio
        facereequuntur facilis! Totam possimus illo consequatur maxime vel,
        eligendi excepturi praesentium dolore et numquam nostrum iste alias
        itaque vitae harum soluta accusamus, enim dolor molestiae quasi
        officiis! Nostrum laudantium sequi ab dolorem reiciendis exercitationem
        assumenda architecto repudiandae totam eveniet repellat excepturi, ea
        perferendis eaque similique ipsa! Repudiandae eaque rem nulla nisi!
        Consequuntur labore beatae nam ad iusto dicta reprehenderit voluptas
        quae perspiciatis explicabo porro, molestiae animi. Iste maxime odit
        vel?
      </p>
    </>
  );
};

export default HotelByCity;
