import { configureStore } from "@reduxjs/toolkit";
import countryHotelReducer from "./countrySlice";
import hotelFacilityReducer from "./facilitySlice";

const store = configureStore({
  reducer: {
    country: countryHotelReducer,
    facility: hotelFacilityReducer,
  },
});

export default store;
