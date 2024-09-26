import React from "react";
import { useLocation } from "react-router-dom";

const PreBookHotelRoom = () => {
  const location = useLocation();
  const { item } = location.state;

  console.log(item);

  return (
    <div>
      <div className="flex">
        <h1> You Book {item}, page is under construction </h1>
      </div>
    </div>
  );
};

export default PreBookHotelRoom;
