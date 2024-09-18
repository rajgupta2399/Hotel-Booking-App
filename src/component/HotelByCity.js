import React, { useState } from "react";
import useCityHotel from "../Hooks/useCityHotel";

const HotelByCity = () => {
  const { cityCode } = useCityHotel();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchText, setSearchText] = useState([]);
  const [filteredCity, setFilteredCity] = useState([]);
  const CityCode = cityCode;

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Only filter if CityCode is an array
    if (Array.isArray(CityCode)) {
      const filtered = CityCode.filter((city) =>
        city.city.toLowerCase().includes(searchValue)
      );
      setFilteredCity(filtered);
    }
  };

  return (
    <>
      <div className=" mt-5">
        <h6 className=" text-lg capitalize font-semibold text-white text-center">
          Search Your Hotel By entering the city name
        </h6>
        <div className="flex justify-center align-middle my-8 gap-5">
          <input
            type="text"
            placeholder="      Enter Your City To Book Hotels"
            className="outline-none w-1/2 focus:outline-none text-black block rounded-md"
            name="input"
            id="input"
            onChange={handleSearchChange}
          />
          <button className="border-2 border-[#ED3237] py-2.5 px-10 bg-[#ED3237] rounded-lg text-white ">
            Search
          </button>
        </div>

        <div className="flex justify-center align-middle my-5 mx-4">
          <ul className="max-h-[65vh] overflow-y-scroll scrollbar-hide">
            {filteredCity.length > 0
              ? filteredCity.map((item, index) => (
                  <div className="flex" key={index}>
                    <div>
                      <i className="fa-solid fa-location-dot mr-2 mt-[20px] text-white text-lg"></i>
                    </div>
                    <div>
                      <li
                        className="my-6 cursor-pointer hover:text-red-600 transition-all delay-100 text-white"
                        onClick={() => {}}
                      >
                        {item.city}
                      </li>
                    </div>
                  </div>
                ))
              : ""}
          </ul>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          nesciunt. Vero corrupti voluptas id ex voluptatum fugit eveniet
          reprehenderit minima. Odio enim rerum error molestias vitae similique
          maiores beatae sit!
        </p>
      </div>
    </>
  );
};

export default HotelByCity;
