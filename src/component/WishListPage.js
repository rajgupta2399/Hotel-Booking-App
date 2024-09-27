import React from "react";
import WishList from "./WishList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WishListPage = () => {
  const wishList = useSelector((Store) => Store.wishList.wishList);

  return (
    <div>
      <WishList wishList={wishList} />
    </div>
  );
};

export default WishListPage;
