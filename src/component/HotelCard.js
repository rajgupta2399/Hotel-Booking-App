import React, { useContext } from "react";
import { CountryCoordinates } from "../context/ContextApi";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const HotelCard = ({ item }) => {
  const { country, setCountry } = useContext(CountryCoordinates);
  const {
    id,
    city,
    address,
    name,
    main_photo,
    reviewCount,
    rating,
    stars,
    zip,
    latitude,
    longitude,
    currency,
    thumbnail,
    hotelDescription,
  } = item;

  console.log(item);
  
  

  //   const country = useSelector((store) => store.country.CountryHotelCode);
  //   console.log(country);
  return (
    <div>
      <div>
        <div className="mb-5 flex flex-wrap flex-row">
          <div className="py-2 w-[390px] bg-[#292f35] cursor-pointer border-4 border-white rounded-md h-[455px]">
            <div className="overflow-visible py-4 rounded-lg">
              <img
                alt={name}
                className="px-4 h-[200px] rounded-lg"
                src={
                    main_photo ? main_photo : "https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                }
                width="100%"
              />
            </div>
            <div className="px-4 flex-col">
              <p className="text-[20px] capitalize font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-[250px] text-white pt-2">
                {name}
              </p>

              <div className="flex flex-row gap-5">
                <div className="flex flex-row ">
                  <p className=" text-[15px] capitalize text-white font-semibold">
                    {country.name}, {city}
                  </p>
                </div>
                <div>
                  <p className="text-[14px] capitalize font-semibold text-white">
                    <Rating name="size-medium" defaultValue={stars} />
                  </p>
                </div>
              </div>

              <p className=" text-[15px] pb-1 text-ellipsis whitespace-nowrap overflow-hidden w-[240px] text-white">
                {rating} Rating
              </p>
              <p className=" text-[15px] text-white font-semibold">{address}{"-"}{zip}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
