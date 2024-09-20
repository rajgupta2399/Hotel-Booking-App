import { createSlice } from "@reduxjs/toolkit";

const hotelDetailSlice = createSlice({
  name: "hotelDetail",
  initialState: {
    hotelDetail: null,
  },
  reducers: {
    addHotelDetail: (state, action) => {
      state.hotelDetail = action.payload;
    },
  },
});

export const { addHotelDetail } = hotelDetailSlice.actions;
export default hotelDetailSlice.reducer;
