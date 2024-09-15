import React, { useEffect, useState } from "react";
import { options } from "../utils/Constant";

export default function Dashboard() {
  const [hotel, setHotel] = useState([]);

  const fetchHotel = async () => {
    try {
      const res = await fetch(
        "https://api.liteapi.travel/v3.0/data/hotels?countryCode=RU",
        options
      );
      const data = await res.json();
      console.log(data);
      setHotel(data.data || []);
    } catch (err) {
      console.error("Error fetching hotels:", err);
    }
  };

  useEffect(() => {
    fetchHotel();
  }, []);

  return (
    <>
      <div>
        {/* Hotels Section */}
        <div
          className="d-flex flex-wrap justify-content-center mt-4"
          style={{ gap: "20px" }} // Add space between items
        >
          {hotel.length > 0 ? (
            hotel.map((item, index) => (
              <div
                key={item.id || index}
                className="hotel-item"
                style={{
                  width: "200px",
                  flexGrow: 1,
                }}
              >
                {item.main_photo ? (
                  <>
                    <img
                      src={item.main_photo}
                      alt={item.name || "Hotel Image"}
                      className=" w-48 h-52"
                    />
                    <p>{item.name}</p>
                    <p className=" text-red-700">{item.address}</p>
                  </>
                ) : (
                  <>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                      alt={item.name || "Hotel Image"}
                      className=" w-48 h-52"
                    />
                    <p>{item.name}</p>
                    <p className=" text-red-700">{item.address}</p>
                  </>
                )}
              </div>
            ))
          ) : (
            <p>No hotels available.</p>
          )}
        </div>
      </div>
    </>
  );
}
