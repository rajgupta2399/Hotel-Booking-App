import React from "react";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addHotelFacility } from "../store/facilitySlice";
import { useEffect } from "react";

const useHotelFacility = () => {
  const dispatch = useDispatch();
  const fetchHotelFacility = async () => {
    const res = await fetch(
      `https://api.liteapi.travel/v3.0/data/facilities`,
      options
    );
    const data = await res.json();
    dispatch(addHotelFacility(data.data));
  };

  useEffect(() => {
    fetchHotelFacility();
  }, []);
};

export default useHotelFacility;
