import React from "react";
import DummyComponent from "./DummyComponent";

const PreBookHotelRoomCard = ({ filteredRoom, item }) => {
  // maxOccupancy
  return (
    <div className="">
      <div className="">
        <div className="border-2 border-gray-700 p-4 rounded-lg bg-[#1D232A] mb-4 shadow-lg w-[399px] h-[350px]">
          <div className="text-center">
            {/* Room Name */}
            <p className="text-lg font-semibold text-white mb-2">
              {filteredRoom?.rates?.[0]?.name || "No Name Available"}
            </p>

            {/* Room Price */}
            <p className="text-2xl font-bold text-green-400 mb-4">
              ₹
              {filteredRoom?.rates?.[0]?.retailRate?.total?.[0]?.amount ||
                "N/A"}
            </p>

            {/* Max Occupancy */}
            <p className="text-gray-400 mb-4">
              Max Occupancy: {filteredRoom?.rates?.[0]?.maxOccupancy || "N/A"}
            </p>

            {/* Cancellation Policy */}
            <p className="text-red-500 text-sm">
              Cancel Before:{" "}
              {filteredRoom?.rates?.[0]?.cancellationPolicies
                ?.cancelPolicyInfos?.[0]?.cancelTime
                ? new Date(
                    filteredRoom?.rates?.[0]?.cancellationPolicies?.cancelPolicyInfos?.[0]?.cancelTime
                  ).toLocaleString()
                : "N/A"}
            </p>
            <p className="text-red-500 text-sm">
              The amount will not be refundable.
            </p>
          </div>

          {/* Pre-Book Button */}
          <div className="mt-4 text-center">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
              Pre-Book Now
            </button>
          </div>
        </div>
      </div>

      <DummyComponent />
    </div>
  );
};

export default PreBookHotelRoomCard;
