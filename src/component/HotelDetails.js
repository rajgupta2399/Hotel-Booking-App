import React from "react";
import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { hotelId } = useParams();
  return <div className=" bg-black text-white h-[100vh]">{hotelId}</div>;
};

export default HotelDetails;
