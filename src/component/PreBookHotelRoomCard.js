import React from "react";
import { Link } from "react-router-dom";

const PreBookHotelRoomCard = ({ filteredRoom, item }) => {
  const info = filteredRoom; // Access the first room type

  return (
    <div className="flex justify-center">
      <div className="border-2 border-gray-700 p-4 rounded-lg bg-[#1D232A] mb-4 shadow-lg w-full max-w-[399px] h-[390px]">
        <div className="text-center">
          {/* Room Name */}
          <p className="text-md sm:text-lg font-semibold text-white mb-2">
            {filteredRoom?.rates?.[0]?.name || "No Name Available"}
          </p>

          {/* Room Price */}
          <p className="text-xl sm:text-2xl font-bold text-green-400 mb-4">
            ${filteredRoom?.rates?.[0]?.retailRate?.total?.[0]?.amount || "N/A"}
          </p>

          {/* Max Occupancy */}
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            Max Occupancy: {filteredRoom?.rates?.[0]?.maxOccupancy || "N/A"}
          </p>

          {/* Cancellation Policy */}
          <p className="text-xs sm:text-sm text-red-500">
            Cancel Before:{" "}
            {filteredRoom?.rates?.[0]?.cancellationPolicies
              ?.cancelPolicyInfos?.[0]?.cancelTime
              ? new Date(
                  filteredRoom?.rates?.[0]?.cancellationPolicies?.cancelPolicyInfos?.[0]?.cancelTime
                ).toLocaleString()
              : "N/A"}
          </p>
          <p className="text-xs sm:text-sm text-red-500">
            The amount will not be refundable.
          </p>
        </div>

        {/* Pre-Book Button */}
        <div className="mt-4 text-center">
          <Link to="/Checkout" state={{ info }}>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
              Pre-Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreBookHotelRoomCard;
