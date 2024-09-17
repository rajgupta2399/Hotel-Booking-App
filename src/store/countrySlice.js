import { createSlice } from "@reduxjs/toolkit";

const countryHotelSlice = createSlice({
  name: "country",
  initialState: {
    CountryHotelCode: null,
  },
  reducers: {
    addCountryHotelCode: (state, action) => {
      state.CountryHotelCode = action.payload;
    },
  },
});

export const { addCountryHotelCode } = countryHotelSlice.actions;
export default countryHotelSlice.reducer;
