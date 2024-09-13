import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { options } from "../utils/Constant";

export default function Dashboard() {
  const [hotel, setHotel] = useState([]);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const fetchHotel = async () => {
    try {
      const res = await fetch(
        "https://api.liteapi.travel/v3.0/data/hotels?countryCode=IN",
        options
      );
      const data = await res.json();
      console.log(data);
      setHotel(data.data || []);
    } catch (err) {
      console.error("Error fetching hotels:", err);
      setError("Failed to fetch hotels");
    }
  };

  useEffect(() => {
    fetchHotel();
  }, []);

  return (
    <>
      <div>
        {/* Profile Section */}
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div style={{ width: "40%", maxWidth: "600px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email:</strong> {currentUser.email}
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              <Button variant="link" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </div>
        </div>

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
