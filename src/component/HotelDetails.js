import React from "react";
import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { hotelId } = useParams();
  return <div className=" bg-black text-white">{hotelId}</div>;
};

export default HotelDetails;
