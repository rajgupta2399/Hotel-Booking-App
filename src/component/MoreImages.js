import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { HotelDetailsId } from "../context/ContextApi";
import useHotelDetail from "../Hooks/useHotelDetail";
import useHotelReview from "../Hooks/useHotelReview";
import { useSelector } from "react-redux";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { Divider, Rating } from "@mui/material";
import HotelRooms from "./HotelRooms";

const MoreImages = () => {
  const { id, setId } = useContext(HotelDetailsId);
  const { hotelId } = useParams();
  setId(hotelId);
  useHotelDetail();
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);

  return (
    <div className=" bg-[#1D232A] text-white px-24">
      <div className="centeralContainer mt-5 border-2 rounded-lg flex flex-row flex-wrap py-2">
        {hotelDetail &&
          hotelDetail?.hotelImages.map((item, index) => (
            <div>
              <div className=" w-[330px] h-[200px] py-3 px-3">
                <img src={item?.urlHd} alt="" className=" object-cover w-full h-full rounded-lg" />
              </div>
              <h6 className=" text-center font-semibold capitalize">{item?.caption}</h6>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoreImages;
