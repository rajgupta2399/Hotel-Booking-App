import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HotelDetailsId } from "../context/ContextApi";
import useHotelDetail from "../Hooks/useHotelDetail";
import useHotelReview from "../Hooks/useHotelReview";
import { useSelector } from "react-redux";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { Rating } from "@mui/material";

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
      <div className="centeralContainer mt-5">
        <div className="imageDivBox flex gap-5 border-2 bg-[#14181B] px-4 py-4 rounded-lg">
          <div className="hotelImages">
            <div className="HotelName flex gap-4 mb-2">
              <h1 className=" text-lg text-white">
                {hotelDetail && hotelDetail.name}
              </h1>
              <Rating
                name="size-small"
                defaultValue={hotelDetail?.starRating}
                readOnly
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
                      <span className="text-white font-semibold">
                        MORE IMAGES
                      </span>
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
          <div className="otherThings">
            <div className="">
              <p>{hotelDetail?.hotelImportantInformation}</p>
            </div>
          </div>
        </div>
        <div className="PriceDivBox"></div>
      </div>
    </div>
  );
};

export default HotelDetails;
