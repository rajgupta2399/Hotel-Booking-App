import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HotelDetailsId } from "../context/ContextApi";
import useHotelDetail from "../Hooks/useHotelDetail";
import useHotelReview from "../Hooks/useHotelReview";
import { useSelector } from "react-redux";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { Divider, Rating } from "@mui/material";

const HotelRooms = ({ item }) => {
  const { id, setId } = useContext(HotelDetailsId);
  const { hotelId } = useParams();
  setId(hotelId);
  useHotelDetail();
  useHotelReview();
  const hotelReview = useSelector((store) => store.hotelReview.hotelReview);
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);
  // console.log(hotelReview);
  // console.log(hotelDetail);

  const { roomName, photos } = item;

  const handleClick = (item) => {
    console.log(item.id);
  };

  return (
    <div className=" bg-[#1D232A] text-white px-24">
      <div className="centeralContainer mt-5  border-2 rounded-lg">
        {/** bOOK Hotel Rooms */}
        <div className="imageBox">
          <div className="images  flex">
            <div className="flex gap-2 flex-row border-2 px-2 py-2 my-2 mx-2 rounded-lg">
              <div className=" w-[490px] rounded-lg ">
                <img src={photos?.[0]?.url} alt="" className="rounded-xl object-cover" />
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
                    <span className="text-white font-semibold">
                      MORE IMAGES
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h1>{roomName}</h1>
          </div>
        </div>
        <div>
          <button
            className="text-white bg-red-600 border-2 border-red-600 py-2 px-3 font-semibold rounded-md"
            onClick={() => handleClick(item)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelRooms;
