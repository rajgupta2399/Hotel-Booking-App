import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HotelDetailsId } from "../context/ContextApi";
import useHotelDetail from "../Hooks/useHotelDetail";

const HotelDetails = () => {
  useHotelDetail();
  const { id, setId } = useContext(HotelDetailsId);
  const { hotelId } = useParams();
  setId(hotelId);
  return <div className=" bg-black text-white h-[100vh]">{hotelId}</div>;
};

export default HotelDetails;
