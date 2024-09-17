import React, { useContext, useEffect, useState } from "react";
import { options } from "../utils/Constant";
import useCountryCodeHotel from "../Hooks/useCountryCodeHotel";
import { useSelector } from "react-redux";
import { CountryCoordinates } from "../context/ContextApi";

export default function Dashboard() {
  useCountryCodeHotel();
  const { country } = useContext(CountryCoordinates);
  const code = country.code;

  // const Country = useSelector((store) => store.country);
  // const Hotel = Country.CountryHotelCode

  const [hotel, setHotel] = useState([]);

  const fetchHotel = async () => {
    try {
      const res = await fetch(
        `https://api.liteapi.travel/v3.0/data/hotels?countryCode=${code}`,
        options
      );
      const data = await res.json();
      console.log(data.data);
      setHotel(data.data || []);
    } catch (err) {
      console.error("Error fetching hotels:", err);
    }
  };

  useEffect(() => {
    fetchHotel();
  }, [country]);


  return (
    <>
      <div>
        {/* Hotels Section */}
        <div
          className="d-flex flex-wrap justify-content-center mt-4 px-28 bg-[#1D232A]"
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
                    <p className=" text-white">{item.name}</p>
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
