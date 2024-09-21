import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HotelDetailsId } from "../context/ContextApi";
import useHotelDetail from "../Hooks/useHotelDetail";
import useHotelReview from "../Hooks/useHotelReview";
import { useSelector } from "react-redux";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const HotelRooms = ({ item, strongTagText }) => {
  const { id, setId } = useContext(HotelDetailsId);
  const { hotelId } = useParams();
  setId(hotelId);
  useHotelDetail();
  useHotelReview();
  const hotelReview = useSelector((store) => store.hotelReview.hotelReview);
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);

  const {
    roomName,
    photos,
    description,
    maxAdults,
    maxChildren,
    roomAmenities,
  } = item;

  const handleClick = (item) => {
    console.log(item.id);
  };

  return (
    <div className=" text-white px-24">
      <div className="centeralContainer mt-5  border-2 rounded-lg bg-[#14181B] ">
        {/** bOOK Hotel Rooms */}
        <div className="imageBox">
          <div className="images flex w-full">
            <div className="flex gap-2 flex-row border-2 px-4 py-3 my-2 mx-2 rounded-lg w-[70%]">
              <div className=" w-[490px] rounded-lg ">
                <img
                  src={photos?.[0]?.url}
                  alt=""
                  className="rounded-xl object-cover"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <div className=" w-[238px] rounded-lg h-[160px]">
                  <img
                    src={
                      photos?.[1]?.url
                        ? photos?.[1]?.url
                        : "https://images.unsplash.com/photo-1667125095636-dce94dcbdd96?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt=""
                    className=" rounded-xl object-cover w-full h-full"
                  />
                </div>
                <div className="relative w-[238px] h-[160px] rounded-lg">
                  <img
                    src={
                      photos?.[2]?.url
                        ? photos?.[2]?.url
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
            <div className=" w-[30%] border-2 py-3 my-2 mr-2 rounded-lg">
              <div className="hotelDetails  h-full">
                <div className="hotelName">
                  <h6 className=" text-[18px] text-center py-2 px-3">
                    {roomName}
                  </h6>
                </div>
                <div className="hotelStrongText text-white mb-4">
                  <h6 className="text-sm text-center px-3">{description}</h6>
                </div>

                <div className="text-white px-1">
                  {strongTagText.length > 0 ? (
                    strongTagText.slice(0, 3).map((text, index) => (
                      <div className="">
                        <p key={index} className="font-semibold mt-[-7px]">
                          <FiberManualRecordIcon className=" px-1 text-green-500 mb-1" />
                          {text}
                        </p>
                      </div>
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

                <div className="cap px-4">
                  <div>
                    <h6 className="text-sm text-white">
                      MaxAdults : {maxAdults}
                    </h6>
                    <h6 className="text-sm text-white">
                      MaxChildren : {maxChildren}
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
                Room Ameneities
              </h6>
            </div>
            <div className="marquee-content">
              <ul className=" text-white flex justify-between flex-wrap gap-3 px-7">
                {roomAmenities.slice(0, 30).map((amenity, index) => (
                  <li key={amenity.amenitiesId} className=" font-semibold">
                    <FiberManualRecordIcon className=" px-1 text-green-500 mb-1" />

                    {amenity.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className=" mt-3 mb-4">
          <div className="w-[100%] flex justify-center">
            <button
              className="text-white bg-red-600 border-2 border-red-600 py-2 px-3 font-semibold rounded-md w-[30%]"
              onClick={() => handleClick(item)}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRooms;
