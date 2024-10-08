import React, { useContext, useState, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { HotelDetailsId } from "../context/ContextApi";
import useHotelDetail from "../Hooks/useHotelDetail";
import useHotelReview from "../Hooks/useHotelReview";
import { useDispatch, useSelector } from "react-redux";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { Divider, Rating } from "@mui/material";
import HotelRooms from "./HotelRooms";
import Testimonial from "./Testimonial";
import HotelLocation from "./HotelLocation";
import { Link, Element } from "react-scroll"; // Import from react-scroll
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs from "dayjs";
import SkeletonContainer from "./SkeletonContainer";
import NewSkeletonContainer from "./NewSkeletonContainer";
import { addToWishList } from "../store/wishListSlice";
import toast from "react-hot-toast";

const HotelDetails = () => {
  useHotelDetail();
  useHotelReview();
  const { id, setId } = useContext(HotelDetailsId);
  const { hotelId } = useParams();
  setId(hotelId);

  const { loading, error } = useHotelDetail();
  const hotelDetail = useSelector((store) => store.hotelDetail.hotelDetail);

  const [openOptions, setOpenOptions] = useState(true);
  const [options, setOptions] = useState({
    adult: 2,
    children: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
      };
    });
  };

  const [selectedDates, setSelectedDates] = useState([
    dayjs(),
    dayjs().add(1, "day"),
  ]);
  const [formattedDates, setFormattedDates] = useState([]);

  // Function to format the date from dayjs object
  const formatDateString = (date) => {
    return date.format("YYYY-MM-DD"); // Use dayjs to format
  };

  useEffect(() => {
    if (
      selectedDates.length === 2 &&
      selectedDates[0] !== null &&
      selectedDates[1] !== null
    ) {
      const formattedStartDate = formatDateString(selectedDates[0]);
      const formattedEndDate = formatDateString(selectedDates[1]);
      setFormattedDates([formattedStartDate, formattedEndDate]);
    }
  }, [selectedDates]);

  const handleDateChange = (newDates) => {
    // If only one date is selected, set the end date to the next day
    if (newDates.length === 1) {
      const startDate = newDates[0];
      const endDate = startDate.add(1, "day");
      setSelectedDates([startDate, endDate]);
    } else {
      setSelectedDates(newDates);
    }
  };
  // console.log("Current Formatted Dates:", formattedDates);

  const strongTagText = hotelDetail?.hotelDescription
    ? hotelDetail?.hotelDescription
        .match(/<strong>(.*?)<\/strong>/g)
        ?.map((tag) => tag.replace(/<\/?strong>/g, "")) || []
    : [];

  const dispatch = useDispatch();

  const handleWishlist = (item) => {
    dispatch(addToWishList(item));
    toast.success("Hotel Added To Wishlist");
  };

  if (loading) {
    return (
      <div className=" my-14 mx-32">
        <div className=" flex gap-3 my-5">
          <NewSkeletonContainer />
          <SkeletonContainer />
        </div>
        <div className=" flex gap-3 my-5">
          <NewSkeletonContainer />
          <SkeletonContainer />
        </div>
        <div className=" flex gap-3 my-5">
          <NewSkeletonContainer />
          <SkeletonContainer />
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-[#1D232A] text-white px-10 sm:px-28 md:px-14 lg:px-16 xl:px-28 2xl:px-28">
      <div className="centeralContainer mt-5  border-2 rounded-lg">
        <div className="imageDivBox flex flex-col lg:flex-row gap-3 lg:gap-1 bg-[#14181B] px-2 sm:px-4 md:px-4 lg:px-4 xl:px-4 py-4 rounded-lg w-full">
          {/* Left section with hotel images and details */}
          <div className="hotelImages w-full lg:w-[60%]">
            <div className="HotelName flex flex-col lg:flex-row gap-4 mb-2">
              <h1 className="text-lg text-white">
                {hotelDetail && hotelDetail.name}
              </h1>
              <Rating
                name="size-small"
                defaultValue={hotelDetail && hotelDetail?.starRating}
                readOnly
                className="text-yellow-300"
              />
            </div>

            <div className="images">
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="w-full lg:w-[490px] rounded-lg">
                  <img
                    src={hotelDetail?.main_photo}
                    alt=""
                    className="rounded-xl w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-full lg:w-[238px] rounded-lg">
                    <img
                      src={hotelDetail?.hotelImages[1]?.url}
                      alt=""
                      className="rounded-xl"
                    />
                  </div>
                  <div className="relative w-full lg:w-[238px] rounded-lg">
                    <img
                      src={hotelDetail?.hotelImages[5]?.url}
                      alt="Hotel"
                      className="rounded-xl w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
                      <RouterLink
                        to={"/MoreImages"}
                        style={{ textDecoration: "none" }}
                      >
                        <span className="text-white font-semibold">
                          MORE IMAGES
                        </span>
                      </RouterLink>
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
                <div className="text-white mt-4 line-clamp-3">
                  Amenities: Luxury hotels offer high-end amenities like
                  designer bathrobes, spa-quality toiletries, and plush bedding.
                  Some hotels also have in-room hot tubs, fireplaces, and
                  private balconies. Service: Luxury hotels go above and beyond
                  to anticipate guests' needs and create unforgettable
                  experiences. This includes stocking guests' favorite drinks in
                  the mini-bar, arranging surprise celebrations, and providing
                  personalized recommendations for local attractions.
                </div>
              )}
            </div>
          </div>

          {/* Right section with hotel info and reviews */}
          <div className="otherThings w-full lg:w-[40%] border-2 bg-[#1D232A] rounded-lg h-full">
            <div>
              <div className="mt-3">
                <h5 className="text-md text-center font-bold">
                  Hotel Important Information
                </h5>
                <p className="px-3">{hotelDetail?.hotelImportantInformation}</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-1 justify-between px-6 lg:px-14 py-2">
              <div className="flex flex-col gap-1 border-2 py-3 px-5 sm:px-2 md:px-2 lg:px-2 xl:px-2 rounded-lg sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                <div className="px-2">
                  <p className="rating bg-[#0077b6] w-[70px] px-4 py-3 text-center rounded-lg font-bold">
                    {hotelDetail?.rating}
                  </p>
                </div>
                <div className="rating px-2">
                  <div className="div1">
                    <Rating
                      name="size-small"
                      defaultValue={hotelDetail?.starRating}
                      readOnly
                      className="text-yellow-300"
                    />
                  </div>
                  <div className="div2">
                    <p className="font-semibold">
                      ({hotelDetail?.reviewCount}) Rating
                    </p>
                  </div>
                </div>
                <div className="review px-2 py-3 text-[#0077b6]">
                  <Link to="testimonial" smooth={true} duration={500}>
                    <p className="font-bold cursor-pointer">All Reviews</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-1 justify-between px-6 lg:px-14 py-2">
              <div className="flex gap-3 justify-center border-2 py-2 px-2 rounded-lg">
                <div className="py-1">
                  <img
                    src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/map-icon-dtls.png"
                    alt=""
                    className="w-24"
                  />
                </div>
                <div className="rating">
                  <div className="div1 py-0">
                    <h6>
                      {hotelDetail?.address}, {hotelDetail?.city}
                    </h6>
                    <Link to="hotelLocation" smooth={true} duration={500}>
                      <h6 className="text-[#0077b6] cursor-pointer">
                        View On Map
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="book flex justify-center mt-4 mb-5">
              <div className="bookdiv w-full lg:w-[50%] flex justify-center align-middle px-3">
                <button
                  className="text-white bg-red-600 border-2 border-red-600 py-2 px-3 font-semibold rounded-md w-full"
                  onClick={() => handleWishlist(hotelDetail)}
                >
                  Add To Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="calendarBox mt-5 flex justify-center align-middle w-full gap-1 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-5 flex-col sm:flex-row md:flex-row lg:flex-row px-2">
          <div className="calendar py-3 px-3 rounded-lg w-[100%] border-2">
            <div className="headerSearchItem border-2 py-3 rounded-lg bg-white px-10">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                sx={{ bgcolor: "white", color: "black" }}
              >
                <DemoContainer
                  components={["DateRangePicker"]}
                  sx={{ bgcolor: "white", color: "black" }}
                >
                  <DateRangePicker
                    localeText={{ start: "Check-in", end: "Check-out" }}
                    sx={{ bgcolor: "white", color: "black" }} // Set background and text color
                    value={selectedDates}
                    onChange={handleDateChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
          <div className="relative w-[100%] sm:w-[50%] md:w-[50%] border-0 sm:border-2 md:border-2 lg:border-2 xl:border-2 flex justify-center rounded-lg">
            {openOptions && (
              <div className="options mt-3 py-1 px-5">
                {/* Adult Option */}
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 2}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children Option */}
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/** bOOK Hotel Rooms */}
        <div className="hotelRoom pb-5">
          {hotelDetail &&
          hotelDetail?.rooms &&
          hotelDetail?.rooms.length > 0 ? (
            <>
              {hotelDetail?.rooms.map((item, index) => {
                return (
                  <HotelRooms
                    key={index}
                    item={item}
                    strongTagText={strongTagText} // Room-specific strong tag text
                  />
                );
              })}

              {/* Render HotelRooms with static props only once */}
              <HotelRooms
                formattedDates={formattedDates}
                hotelDetail={hotelDetail}
                options={options}
                // You can pass more static props if needed
              />
            </>
          ) : (
            <div>No rooms available</div>
          )}
        </div>
      </div>

      {/** Hotel Location Section */}
      <Element name="hotelLocation">
        <div className="mt-5">
          <HotelLocation />
        </div>
      </Element>

      {/** Testimonial Section */}
      <Element name="testimonial">
        <div className="my-5 hidden sm:block md:block lg:block xl:block">
          <Testimonial />
        </div>
      </Element>
    </div>
  );
};

export default HotelDetails;
