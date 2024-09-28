import React from "react";
import WishList from "./WishList";
import { useSelector } from "react-redux";

const WishListPage = () => {
  const wishList = useSelector((Store) => Store.wishList.wishList);

  return (
    <div>
      <WishList wishList={wishList} />
    </div>
  );
};

export default WishListPage;
