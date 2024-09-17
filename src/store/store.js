import { configureStore } from "@reduxjs/toolkit";
import countryHotelReducer from "./countrySlice";

const store = configureStore({
  reducer: {
    country: countryHotelReducer,
  },
});

export default store;
