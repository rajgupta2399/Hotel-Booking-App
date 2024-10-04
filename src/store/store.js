import { configureStore } from "@reduxjs/toolkit";
import countryHotelReducer from "./countrySlice";
import hotelFacilityReducer from "./facilitySlice";
import cityHotelReducer from "./cityHotelSlice";
import hotelDetailReducer from "./hotelDetailSlice";
import hotelReviewReducer from "./hotelReviewSlice";
import HotelRoomReducer from "./HotelRoomSlice";
import WishlistReducer from "./wishListSlice";
import checkoutReducer from "./checkoutSlice";
import userProfileReducer from "./userProfileSlice";

const store = configureStore({
  reducer: {
    country: countryHotelReducer,
    facility: hotelFacilityReducer,
    cityHotel: cityHotelReducer,
    hotelDetail: hotelDetailReducer,
    hotelReview: hotelReviewReducer,
    hotelRoom: HotelRoomReducer,
    wishList: WishlistReducer,
    checkout: checkoutReducer,
    profile: userProfileReducer,
  },
});

export default store;
