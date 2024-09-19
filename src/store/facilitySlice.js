import { createSlice } from "@reduxjs/toolkit";

const facilitySlice = createSlice({
  name: "facility",
  initialState: {
    hotelFacility: null,
  },
  reducers: {
    addHotelFacility: (state, action) => {
      state.hotelFacility = action.payload;
    },
  },
});

export const { addHotelFacility } = facilitySlice.actions;
export default facilitySlice.reducer;
