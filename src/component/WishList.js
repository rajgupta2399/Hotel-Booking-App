import React from "react";
import Rating from "@mui/material/Rating";

const WishList = ({ wishList }) => {
  return (
    <div>
      <div className="flex justify-center">
        <h6 className="text-lg font-semibold text-white mt-3">
          {" "}
          Your Wishlist Hotels
        </h6>
      </div>

      <div className=" px-28">
        <div className=" mt-2">
          {wishList.length > 0 ? (
            wishList.map((hotel) => (
              <div key={hotel.id} className="mb-5">
                <div className="py-10 w-[100%] bg-[#14181B] cursor-pointer border-4 border-white rounded-md h-[455px] px-4">
                  <div className="hotelImgBox px-2 flex flex-row gap-4">
                    <div className="image">
                      <img
                        src={
                          hotel?.main_photo
                            ? hotel?.main_photo
                            : "https://images.unsplash.com/photo-1723465308831-29da05e011f3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        alt={hotel?.name}
                        className="object-cover rounded-md w-[350px] h-[260px]"
                      />
                    </div>
                    <div className="hotelTextBox">
                      <div className="imagebox py-2">
                        <img
                          src="https://promos.makemytrip.com/Hotels_product/Value_Stays/v2/logo/ValueStays-3.png"
                          alt="Hotel Logo"
                          className="w-[150px]"
                        />
                      </div>
                      <div className="text flex gap-2">
                        <p className="text-[19px] capitalize font-semibold text-ellipsis whitespace-nowrap overflow-hidden text-white">
                          {hotel?.name}
                        </p>
                        <p className="text-[14px] capitalize font-semibold text-white">
                          <Rating
                            name="size-small"
                            defaultValue={hotel?.stars}
                            readOnly
                          />
                        </p>
                      </div>
                      <div className="text">
                        <p className="text-[15px] text-[#0077b6] font-semibold mt-[-10px]">
                          {hotel?.address} {hotel?.city}
                          {" - "}
                          {hotel?.zip}
                        </p>
                        <div className="rating flex gap-10">
                          <p className="text-[15px] pb-1 text-ellipsis whitespace-nowrap overflow-hidden text-yellow-200 mt-[-7px]">
                            {hotel?.rating} ({hotel?.reviewCount}) Reviews
                          </p>
                          <p className="text-[15px] pb-1 text-ellipsis whitespace-nowrap overflow-hidden text-green-500 mt-[-7px] font-semibold">
                            View on Map
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hotelPriceBox px-2">
                    {hotel?.hotelDescription ? (
                      <div className="hotelDescription text-white mt-4 line-clamp-3">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: hotel?.hotelDescription,
                          }}
                        />
                      </div>
                    ) : (
                      <div className="text-white mt-4 line-clamp-3">
                        <p>
                          Amenities: Luxury hotels offer high-end amenities...
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No hotels in your wishlist.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
