import React, { useContext } from "react";
import { CountryCoordinates } from "../context/ContextApi";
import Rating from "@mui/material/Rating";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";

const MainHotelCard = ({ item }) => {
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
    hotelDescription,
  } = item;

  const strongTagText =
    hotelDescription
      .match(/<strong>(.*?)<\/strong>/g)
      ?.map((tag) => tag.replace(/<\/?strong>/g, "")) || [];

  return (
    <div className=" mb-0 sm:mb-5 md:mb-5 lg:mb-5 xl:mb-5 flex flex-col">
      <div className="py-1 sm:py-5 md:py-3 lg:py-5 w-full bg-[#14181B] border-2 border-white rounded-lg shadow-lg cursor-pointer">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              src={
                main_photo
                  ? main_photo
                  : "https://images.unsplash.com/photo-1723465308831-29da05e011f3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={name}
              className="object-cover rounded-t-lg w-full h-48 md:h-64 px-2 sm:py-0 py-2" // Adjusted height for mobile
            />
          </div>
          <div className="p-4 md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-2">
                <img
                  src="https://promos.makemytrip.com/Hotels_product/Value_Stays/v2/logo/ValueStays-3.png"
                  alt=""
                  className="w-28"
                />
                <Rating
                  name="size-small"
                  defaultValue={stars}
                  readOnly
                  className="ml-2"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="text-sm text-[#0077b6]">
                {address}, {city} - {zip}
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-yellow-200">
                  {rating} ({reviewCount}) Reviews
                </p>
                <p className="text-green-500 font-semibold">View on Map</p>
              </div>
            </div>
            <div className="hotelStrongText text-white mt-2">
              {strongTagText.length > 0 ? (
                strongTagText.slice(0, 3).map((text, index) => (
                  <p key={index} className="flex items-center mt-1">
                    <CheckSharpIcon className="px-1 text-green-500" />
                    {text}
                  </p>
                ))
              ) : (
                <>
                  <p className="flex items-center mt-1">
                    <CheckSharpIcon className="px-1 text-green-500" />
                    Free Cancellation
                  </p>
                  <p className="flex items-center mt-1">
                    <CheckSharpIcon className="px-1 text-green-500" />
                    Book with ₹0 Payment
                  </p>
                  <p className="flex items-center mt-1">
                    <CheckSharpIcon className="px-1 text-green-500" />
                    Free Wifi
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="p-4">
          {hotelDescription ? (
            <div
              className="text-white line-clamp-3"
              dangerouslySetInnerHTML={{ __html: hotelDescription }}
            />
          ) : (
            <div className="text-white line-clamp-3">
              Amenities: Luxury hotels offer high-end amenities like designer
              bathrobes, spa-quality toiletries, and plush bedding. Some hotels
              also have in-room hot tubs, fireplaces, and private balconies.
              Service: Luxury hotels go above and beyond to anticipate guests'
              needs and create unforgettable experiences. This includes stocking
              guests' favorite drinks in the mini-bar, arranging surprise
              celebrations, and providing personalized recommendations for local
              attractions.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHotelCard;
