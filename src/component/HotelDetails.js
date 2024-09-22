import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { HotelDetailsId } from "../context/ContextApi";
import useHotelDetail from "../Hooks/useHotelDetail";
import useHotelReview from "../Hooks/useHotelReview";
import { useSelector } from "react-redux";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { Divider, Rating } from "@mui/material";
import HotelRooms from "./HotelRooms";
import Testimonial from "./Testimonial";
import HotelLocation from "./HotelLocation";

const HotelDetails = () => {
  const { id, setId } = useContext(HotelDetailsId);
  const { hotelId } = useParams();
  setId(hotelId);
  useHotelDetail();
  useHotelReview();
  const hotelReview = useSelector((store) => store.hotelReview.hotelReview);
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);
  // console.log(hotelReview);
  // console.log(hotelDetail);

  const strongTagText =
    hotelDetail?.hotelDescription
      .match(/<strong>(.*?)<\/strong>/g)
      ?.map((tag) => tag.replace(/<\/?strong>/g, "")) || [];

  return (
    <div className=" bg-[#1D232A] text-white px-24">
      <div className="centeralContainer mt-5  border-2 rounded-lg">
        <div className="imageDivBox flex gap-1 bg-[#14181B] px-4 py-4 rounded-lg w-[100%]">
          <div className="hotelImages w-full">
            <div className="HotelName flex gap-4 mb-2">
              <h1 className=" text-lg text-white">
                {hotelDetail && hotelDetail.name}
              </h1>
              <Rating
                name="size-small"
                defaultValue={hotelDetail && hotelDetail?.starRating}
                readOnly
                className=" text-yello-300"
              />
            </div>

            <div className="images">
              <div className="flex gap-2 flex-row ">
                <div className=" w-[490px] rounded-lg">
                  <img
                    src={hotelDetail?.main_photo}
                    alt=""
                    className=" rounded-xl"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <div className=" w-[238px] rounded-lg">
                    <img
                      src={hotelDetail?.hotelImages[1]?.url}
                      alt=""
                      className=" rounded-xl"
                    />
                  </div>
                  <div className="relative w-[238px] rounded-lg">
                    <img
                      src={hotelDetail?.hotelImages[5]?.url}
                      alt="Hotel"
                      className="rounded-xl w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
                      <Link
                        to={"/MoreImages"}
                        style={{ textDecoration: "none" }}
                      >
                        <span className="text-white font-semibold">
                          MORE IMAGES
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text">
              {hotelDetail?.hotelDescription ? (
                <div className="hotelDescription text-white mt-4">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: hotelDetail?.hotelDescription,
                    }}
                  />
                </div>
              ) : (
                <>
                  <div className="text-white mt-4 line-clamp-3">
                    Amenities: Luxury hotels offer high-end amenities like
                    designer bathrobes, spa-quality toiletries, and plush
                    bedding. Some hotels also have in-room hot tubs, fireplaces,
                    and private balconies. Service: Luxury hotels go above and
                    beyond to anticipate guests' needs and create unforgettable
                    experiences. This includes stocking guests' favorite drinks
                    in the mini-bar, arranging surprise celebrations, and
                    providing personalized recommendations for local attractions
                  </div>
                </>
              )}
            </div>

            <div className=" w-[50%]"></div>
          </div>
          <div className="otherThings w-[60%] border-2 bg-[#1D232A] rounded-lg h-full">
            <div>
              <div className=" mt-3">
                <h5 className=" text-md text-center font-bold">
                  Hotel Important Information
                </h5>
                <p className=" px-3">
                  {hotelDetail?.hotelImportantInformation}
                </p>
              </div>
            </div>

            <div className=" flex gap-1 justify-between px-14 py-2 w-[470px]">
              <div className="flex gap-1 border-2 py-3 px-2  rounded-lg">
                <div className=" px-2">
                  <p className="rating bg-[#0077b6] w-[70px] px-4 py-3 text-center rounded-lg font-bold">
                    {hotelDetail?.rating}
                  </p>
                </div>
                <div className="rating px-2">
                  <div className="div1">
                    <Rating
                      name="size-small"
                      defaultValue={hotelDetail && hotelDetail?.starRating}
                      readOnly
                      className=" text-yellow-300"
                    />
                  </div>
                  <div className="div2">
                    <p className=" font-semibold">
                      ({hotelDetail?.reviewCount}) Rating
                    </p>
                  </div>
                </div>
                <div className="review px-2 py-3 text-[#0077b6]">
                  <link>
                    <p className=" font-bold">All Reviews</p>
                  </link>
                </div>
              </div>
            </div>

            <div className=" flex gap-1 justify-between px-14 py-2 w-[465px]">
              <div className="flex gap-3 justify-center border-2 py-2 px-2  rounded-lg">
                <div className=" py-1">
                  <img
                    src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/map-icon-dtls.png"
                    alt=""
                    className=" w-24"
                  />
                </div>
                <div className="rating">
                  <div className="div1 py-0">
                    <h6>
                      {hotelDetail && hotelDetail?.address}, {hotelDetail?.city}
                    </h6>
                    <link>
                      <h6 className=" text-[#0077b6]">View On Map</h6>
                    </link>
                  </div>
                </div>
              </div>
            </div>

            <div className="book flex justify-center mt-4 mb-5">
              <div className="bookdiv w-[50%] flex justify-center align-middle">
                <button className=" text-white bg-red-600 border-2 border-red-600 py-2 px-3 font-semibold rounded-md w-full">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/** bOOK Hotel Rooms */}
        <div className="hotelRoom py-5">
          {hotelDetail &&
            hotelDetail?.rooms.map((item, index) => {
              return (
                <HotelRooms
                  key={index}
                  item={item}
                  strongTagText={strongTagText}
                />
              );
            })}
        </div>
      </div>

      <div className=" mt-5">
        <HotelLocation />
      </div>

      <div className=" my-5">
        <Testimonial />
      </div>
    </div>
  );
};

export default HotelDetails;
