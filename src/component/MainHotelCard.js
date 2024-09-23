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
    latitude,
    longitude,
    currency,
    thumbnail,
    hotelDescription,
  } = item;

  //   const country = useSelector((store) => store.country.CountryHotelCode);
  const strongTagText =
    hotelDescription
      .match(/<strong>(.*?)<\/strong>/g)
      ?.map((tag) => tag.replace(/<\/?strong>/g, "")) || [];
  return (
    <div>
      <div>
        <div className="mb-5 flex flex-col">
          <div className=" py-10 w-[100%] bg-[#14181B] cursor-pointer border-4 border-white rounded-md h-[455px] px-4">
            <div className="hotelImgBox px-2 flex flex-row gap-4">
              <div className="image">
                <img
                  src={
                    main_photo
                      ? main_photo
                      : "https://images.unsplash.com/photo-1723465308831-29da05e011f3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={name}
                  className=" object-cover rounded-md  w-[350px] h-[260px]"
                />
              </div>
              <div className="hotelTextBox">
                <div className="imagebox py-2">
                  <img
                    src="https://promos.makemytrip.com/Hotels_product/Value_Stays/v2/logo/ValueStays-3.png"
                    alt=""
                    className=" w-[150px]"
                  />
                </div>
                <div className="text flex gap-2">
                  <p className="text-[19px] capitalize font-semibold text-ellipsis whitespace-nowrap overflow-hidden text-white">
                    {name}
                  </p>
                  <p className="text-[14px] capitalize font-semibold text-white">
                    <Rating name="size-small" defaultValue={stars} readOnly />
                  </p>
                </div>
                <div className="text">
                  <p className=" text-[15px] text-[#0077b6] font-semibold mt-[-10px]">
                    {address} {city}
                    {"-"}
                    {zip}
                  </p>
                  <div className="rating flex gap-10">
                    <p className=" text-[15px] pb-1 text-ellipsis whitespace-nowrap overflow-hidden  text-yellow-200 mt-[-7px]">
                      {rating} ({reviewCount}) ReviewCount
                    </p>
                    <p className="text-[15px] pb-1 text-ellipsis whitespace-nowrap overflow-hidden  text-green-500 mt-[-7px] font-semibold">view on Map</p>
                  </div>
                </div>
                <div className="hotelStrongText text-white">
                  {strongTagText.length > 0 ? (
                    strongTagText.slice(0, 3).map((text, index) => (
                      <p key={index} className="font-semibold mt-[-5px]">
                        <CheckSharpIcon className=" px-1 text-green-500" />
                        {text}
                      </p>
                    ))
                  ) : (
                    <>
                      <p className="font-semibold mt-[-5px]">
                        <CheckSharpIcon className=" px-1 text-green-500" />
                        Free Cancellation
                      </p>
                      <p className="font-semibold mt-[-5px]">
                        <CheckSharpIcon className=" px-1 text-green-500" />
                        Book with ₹0 Payment
                      </p>
                      <p className="font-semibold mt-[-5px]">
                        <CheckSharpIcon className=" px-1 text-green-500" />
                        Free Wifi
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="hotelPriceBox px-2">
              {hotelDescription ? (
                <div className="hotelDescription text-white mt-4 line-clamp-3">
                  <div dangerouslySetInnerHTML={{ __html: hotelDescription }} />
                </div>
              ) : (
                <>
                  <div className="text-white mt-4 line-clamp-3">
                    Amenities: Luxury hotels offer high-end amenities like
                    designer bathrobes, spa-quality toiletries, and plush
                    bedding. Some hotels also have in-room hot tubs, fireplaces,
                    and private balconies. Service: Luxury hotels go above and
                    beyond to anticipate guests' needs and create unforgettable
                    experiences. This includes stocking guests' favorite drinks
                    in the mini-bar, arranging surprise celebrations, and
                    providing personalized recommendations for local attractions
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHotelCard;
