import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);

  const location = useLocation();
  const { info } = location.state || {};

  useEffect(() => {
    if (info) {
      console.log(info);
      console.log(hotelDetail);

      // Log the offerId
    }
  }, [info]);

  return (
    <>
      <div className=" w-full h-[100vh]">Checkout</div>
    </>
  );
};

export default Checkout;
