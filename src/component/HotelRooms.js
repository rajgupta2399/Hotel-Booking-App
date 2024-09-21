import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HotelDetailsId } from "../context/ContextApi";
import useHotelDetail from "../Hooks/useHotelDetail";
import useHotelReview from "../Hooks/useHotelReview";
import { useSelector } from "react-redux";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { Divider, Rating } from "@mui/material";

const HotelRooms = () => {
  const { id, setId } = useContext(HotelDetailsId);
  const { hotelId } = useParams();
  setId(hotelId);
  useHotelDetail();
  useHotelReview();
  const hotelReview = useSelector((store) => store.hotelReview.hotelReview);
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);
  // console.log(hotelReview);
  // console.log(hotelDetail);

  return (
    <div className=" bg-[#1D232A] text-white px-24">
      <div className="centeralContainer mt-5  border-2 rounded-lg">
        {/** bOOK Hotel Rooms */}
      </div>
    </div>
  );
};

export default HotelRooms;
