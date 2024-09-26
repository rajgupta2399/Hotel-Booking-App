import React, { useContext, useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { HotelDetailsId } from "../context/ContextApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SkeletonContainer from "./SkeletonContainer";
import DummyComponent from "./DummyComponent";
import NewSkeletonContainer from "./NewSkeletonContainer";
import { useNavigate } from "react-router-dom";

const HotelRooms = ({ strongTagText, options, formattedDates }) => {
  const { id, setId } = useContext(HotelDetailsId);
  const { hotelId } = useParams();
  setId(hotelId);
  const navigate = useNavigate();

  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);
  const hotelReview = useSelector((store) => store.hotelReview.hotelReview);

  const hotelRoom = useSelector((store) => store.hotelRoom.hotelRoom);

  // if (hotelRoom?.error) {
  //   console.log("Error Message:", hotelRoom.error.message);
  // }

  // if (hotelRoom[0]?.roomTypes) {
  //   console.log("Room Types:", hotelRoom[0].roomTypes);
  // } else {
  //   console.log("Room Not Available");
  // }

  if (!options || !formattedDates) {
    return null; // Prevent rendering until the data is available
  }

  const location = hotelDetail?.location;
  const city = hotelDetail?.city;
  const country = hotelDetail?.country;

  const occupancies = [
    {
      adults: options.adult,
      children: [options.children > 0 ? options.children : 1],
    },
  ];

  const checkInDate = formattedDates[0];
  const checkOutDate = formattedDates[1];

  const memoizedLocation = {
    latitude: location?.latitude,
    longitude: location?.longitude,
  };

  const memoizedCountry = {
    guestNationality: country?.toUpperCase(),
    countryCode: country?.toUpperCase(),
  };

  // console.log(checkInDate);
  // console.log(checkOutDate);
  // console.log(occupancies);

  const handleClick = (item) => {
    navigate("/PreBookHotelRoom", { state: { item } });
  };

  return (
    <>
      {hotelRoom && hotelRoom[0]?.roomTypes?.length > 0 ? ( // Added checks for hotelRoom
        <div className="text-white px-24">
          {hotelDetail && hotelDetail.rooms.length > 0 ? (
            hotelDetail.rooms.map((item, index) => (
              <div
                className="centeralContainer mt-5 border-2 rounded-lg bg-[#14181B]"
                key={index}
              >
                {/** Book Hotel Rooms */}
                <div className="imageBox">
                  <div className="images flex w-full">
                    <div className="flex gap-2 flex-row border-2 px-4 py-3 my-2 mx-2 rounded-lg w-[70%]">
                      <div className="w-[490px] rounded-lg">
                        <img
                          src={item?.photos?.[0]?.url}
                          alt=""
                          className="rounded-xl object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="w-[238px] rounded-lg h-[160px]">
                          <img
                            src={
                              item?.photos?.[1]?.url
                                ? item?.photos?.[1]?.url
                                : "https://images.unsplash.com/photo-1667125095636-dce94dcbdd96?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            alt=""
                            className="rounded-xl object-cover w-full h-full"
                          />
                        </div>
                        <div className="relative w-[238px] h-[160px] rounded-lg">
                          <img
                            src={
                              item?.photos?.[2]?.url
                                ? item?.photos?.[2]?.url
                                : "https://images.unsplash.com/photo-1660731513683-4cb0c9ac09b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            alt="Hotel"
                            className="rounded-xl object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
                            <Link
                              to={"/MoreImages"}
                              style={{ textDecoration: "none" }}
                            >
                              <span className="text-white font-semibold">
                                MORE IMAGES
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[30%] border-2 py-3 my-2 mr-2 rounded-lg">
                      <div className="hotelDetails h-full">
                        <div className="hotelName">
                          <h6 className="text-[18px] text-center py-2 px-3">
                            {item?.roomName}
                          </h6>
                        </div>
                        <div className="hotelStrongText text-white mb-4">
                          <h6 className="text-sm text-center px-3">
                            {item?.description}
                          </h6>
                        </div>
                        <div className="cap px-4">
                          <div>
                            <h6 className="text-sm text-white">
                              Max Adults: {item?.maxAdults}
                            </h6>
                            <h6 className="text-sm text-white">
                              Max Children: {item?.maxChildren}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="marquee">
                    <div className="text px-2 py-2">
                      <h6 className="text-[#0077b6] text-md px-4 text-[18px]">
                        Room Amenities
                      </h6>
                    </div>
                    <div className="marquee-content">
                      <ul className="text-white flex justify-between flex-wrap gap-3 px-7">
                        {item?.roomAmenities.slice(0, 30).map((amenity) => (
                          <li
                            key={amenity.amenitiesId}
                            className="font-semibold"
                          >
                            <FiberManualRecordIcon className="px-1 text-green-500 mb-1" />
                            {amenity.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-3 mb-4">
                  <div className="w-[100%] flex justify-center">
                    <button
                      className="text-white bg-red-600 border-2 border-red-600 py-2 px-3 font-semibold rounded-md w-[30%]"
                      onClick={() => handleClick(item.roomName)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-10">
              <div className="skeleton">
                <SkeletonContainer />
                <SkeletonContainer />
                <SkeletonContainer />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text text-center">
          <h1 className=" mt-5">Hotel Room Not Available</h1>
          <div className=" my-10 mx-10">
            <div className=" flex gap-3 my-5 justify-center">
              <NewSkeletonContainer />
              <SkeletonContainer />
            </div>
            <div className=" flex gap-3 my-5 justify-center">
              <NewSkeletonContainer />
              <SkeletonContainer />
            </div>
            <div className=" flex gap-3 my-5 justify-center">
              <NewSkeletonContainer />
              <SkeletonContainer />
            </div>
          </div>
        </div>
      )}

      {hotelDetail && hotelDetail.rooms.length > 0 ? (
        <DummyComponent
          hotelId={hotelId}
          occupancies={occupancies}
          memoizedCountry={memoizedCountry}
          memoizedLocation={memoizedLocation}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          city={city}
        />
      ) : (
        <div className="text-center mt-10">
          <div className="skeleton">
            <SkeletonContainer />
            <SkeletonContainer />
            <SkeletonContainer />
          </div>
        </div>
      )}
    </>
  );
};

export default HotelRooms;
