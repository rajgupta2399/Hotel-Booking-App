import React from "react";
import Rating from "@mui/material/Rating";

const WishList = ({ wishList }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <h6 className="text-lg font-semibold text-white mt-3">
          Your Wishlist Hotels
        </h6>
      </div>

      <div className="mt-4">
        {wishList.length > 0 ? (
          wishList.map((hotel) => (
            <div
              key={hotel.id}
              className="mb-5 bg-[#14181B] cursor-pointer border-4 border-white rounded-md p-4"
            >
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Hotel Image */}
                <div className="flex-shrink-0 w-full lg:w-1/3">
                  <img
                    src={
                      hotel?.main_photo
                        ? hotel?.main_photo
                        : "https://images.unsplash.com/photo-1723465308831-29da05e011f3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt={hotel?.name}
                    className="object-cover rounded-md w-full h-[200px] sm:h-[260px]"
                  />
                </div>

                {/* Hotel Details */}
                <div className="flex flex-col w-full lg:w-2/3">
                  <div className="flex justify-between items-center">
                    {/* Hotel Name & Rating */}
                    <div>
                      <p className="text-lg lg:text-xl capitalize font-semibold text-ellipsis whitespace-nowrap overflow-hidden text-white">
                        {hotel?.name}
                      </p>
                      <p className="text-sm lg:text-base capitalize font-semibold text-white">
                        <Rating
                          name="size-small"
                          defaultValue={hotel?.stars}
                          readOnly
                        />
                      </p>
                    </div>

                    {/* View on Map Link */}
                    <div>
                      <p className="text-sm text-green-500 font-semibold cursor-pointer">
                        View on Map
                      </p>
                    </div>
                  </div>

                  {/* Hotel Location */}
                  <div className="mt-2">
                    <p className="text-sm lg:text-base text-[#0077b6] font-semibold">
                      {hotel?.address}, {hotel?.city} - {hotel?.zip}
                    </p>
                    <p className="text-sm lg:text-base text-yellow-200 mt-1">
                      {hotel?.rating} ({hotel?.reviewCount}) Reviews
                    </p>
                  </div>

                  {/* Hotel Description */}
                  <div className="mt-4">
                    {hotel?.hotelDescription ? (
                      <div className="text-white line-clamp-3">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: hotel?.hotelDescription,
                          }}
                        />
                      </div>
                    ) : (
                      <div className="text-white line-clamp-3">
                        <p>
                          Amenities: Luxury hotels offer high-end amenities...
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No hotels in your wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
