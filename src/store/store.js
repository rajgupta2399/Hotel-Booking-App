import { configureStore } from "@reduxjs/toolkit";
import countryHotelReducer from "./countrySlice";
import hotelFacilityReducer from "./facilitySlice";
import cityHotelReducer from "./cityHotelSlice";

const store = configureStore({
  reducer: {
    country: countryHotelReducer,
    facility: hotelFacilityReducer,
    cityHotel: cityHotelReducer,
  },
});

export default store;
