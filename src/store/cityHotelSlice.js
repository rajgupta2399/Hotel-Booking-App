import { createSlice } from "@reduxjs/toolkit";

const cityHotelSlice = createSlice({
  name: "cityHotel",
  initialState: {
    cityHotel: null,
  },
  reducers: {
    addCityHotel: (state, action) => {
      state.cityHotel = action.payload;
    },
  },
});

export const { addCityHotel } = cityHotelSlice.actions;
export default cityHotelSlice.reducer;
