import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PreBookHotelRoomCard from "./PreBookHotelRoomCard";

const PreBookHotelRoom = () => {
  const hotelRoom = useSelector((store) => store.hotelRoom.hotelRoom);
  const location = useLocation();
  const { item } = location.state;
  const [matchedRoom, setMatchedRoom] = useState(null);

  // Split the item.roomName into individual words
  const roomNameWords = item?.roomName?.toLowerCase().split(" ");

  // Check for room matches and update the state
  useEffect(() => {
    if (hotelRoom && hotelRoom.length > 0) {
      const foundRoom = hotelRoom[0]?.roomTypes?.find((roomType) =>
        roomNameWords?.some((word) =>
          roomType?.rates?.[0]?.name?.toLowerCase().includes(word)
        )
      );
      setMatchedRoom(foundRoom); // Update the matched room if found
    }
  }, [hotelRoom, item, roomNameWords]);

  return (
    <div>
      {matchedRoom ? (
        // Show this block if a matching room is found
        <div className="text-center my-5 px-2">
          <h5 className="text-white text-md pb-3 font-bold">
            Book Your {item?.roomName}
          </h5>
          {/* Display the first available photo */}
          <div className="image w-full flex justify-center px-2">
            <div className="w-full md:w-[50%] lg:w-[22%] border-2 py-3 rounded-lg">
              {item?.photos?.[0]?.url ||
              item?.photos?.[1]?.url ||
              item?.photos?.[2]?.url ? (
                <img
                  src={
                    item?.photos?.[0]?.url ||
                    item?.photos?.[1]?.url ||
                    item?.photos?.[2]?.url
                  }
                  alt="Hotel Room"
                  className="mx-auto w-[90%] h-[200px] md:h-[250px] object-cover rounded-lg"
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        // Show this message if no matching room is found
        <div className="text-center my-5">
          <h5 className="text-red-500 text-md pb-3 font-bold">
            Sorry, no rooms match "{item?.roomName}".
          </h5>
        </div>
      )}

      <div className="hotelRoomsdiv">
        {hotelRoom && hotelRoom[0]?.roomTypes.length > 0 ? (
          <div className="rooms px-5 sm:px-10 md:px-20 lg:px-28 flex flex-wrap gap-5 justify-center mb-5">
            {/* Use a Set to track unique room names */}
            {Array.from(
              new Set(
                hotelRoom[0]?.roomTypes
                  .filter((roomType) =>
                    roomNameWords?.some((word) =>
                      roomType?.rates?.[0]?.name?.toLowerCase().includes(word)
                    )
                  )
                  .map((roomType) => roomType.rates[0]?.name?.toLowerCase()) // Get unique room names
              )
            ).map((uniqueRoomName, index) => {
              const filteredRoom = hotelRoom[0]?.roomTypes.find(
                (roomType) =>
                  roomType.rates[0]?.name?.toLowerCase() === uniqueRoomName
              );
              return (
                <div
                  key={filteredRoom.roomTypeId}
                  className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
                >
                  <PreBookHotelRoomCard
                    filteredRoom={filteredRoom}
                    item={item}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PreBookHotelRoom;
