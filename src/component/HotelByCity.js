import React from "react";

const HotelByCity = () => {
  return (
    <>
      <div className=" bg-[#1D232A]">
        <div className="flex justify-center align-middle my-8 gap-5">
          <input
            type="text"
            placeholder="Search For Dishes And Restuarants"
            className="outline-none w-1/2 focus:outline-none dark:text-white block"
            name="input"
            id="input"
          />
          <button className="border-2 border-red-700 py-1 px-7 bg-[#d00000] hover:bg-transparent light:bg-white rounded-lg ">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default HotelByCity;
