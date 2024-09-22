import React, { useContext, useEffect } from "react";
import { HotelDetailsId } from "../context/ContextApi";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/Constant";
import { addHotelReview } from "../store/hotelReviewSlice";

const useHotelReview = () => {
  const { id, setId } = useContext(HotelDetailsId);
  const dispatch = useDispatch();
  const fetchHotelReview = async () => {
    const res = await fetch(
      `https://api.liteapi.travel/v3.0/data/reviews?hotelId=${id}&limit=1000&timeout=4`,
      options
    );
    const data = await res.json();
    console.log(data.data);
    dispatch(addHotelReview(data.data));
  };

  useEffect(() => {
    fetchHotelReview();
  }, [id]);
};

export default useHotelReview;
