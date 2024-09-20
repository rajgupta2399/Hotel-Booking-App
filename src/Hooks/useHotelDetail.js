import React, { useContext } from "react";
import { HotelDetailsId } from "../context/ContextApi";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addHotelDetail } from "../store/hotelDetailSlice";
import { useEffect } from "react";

const useHotelDetail = () => {
  const { id, setId } = useContext(HotelDetailsId);
  const dispatch = useDispatch();
  const fetchHotelDetails = async () => {
    const res = await fetch(
      `https://api.liteapi.travel/v3.0/data/hotel?hotelId=${id}&timeout=4`,
      options
    );
    const data = await res.json();
    console.log(data.data);
    dispatch(addHotelDetail(data.data));
  };

  useEffect(() => {
    fetchHotelDetails();
  }, [id]);
};

export default useHotelDetail;
