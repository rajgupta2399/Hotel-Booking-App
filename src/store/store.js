import { configureStore } from "@reduxjs/toolkit";
import countryHotelReducer from "./countrySlice";
import hotelFacilityReducer from "./facilitySlice";
import cityHotelReducer from "./cityHotelSlice";
import hotelDetailReducer from "./hotelDetailSlice";
import hotelReviewReducer from "./hotelReviewSlice";
import HotelRoomReducer from "./HotelRoomSlice";
import WishlistReducer from "./wishListSlice";

const store = configureStore({
  reducer: {
    country: countryHotelReducer,
    facility: hotelFacilityReducer,
    cityHotel: cityHotelReducer,
    hotelDetail: hotelDetailReducer,
    hotelReview: hotelReviewReducer,
    hotelRoom: HotelRoomReducer,
    wishList: WishlistReducer,
  },
});

export default store;
