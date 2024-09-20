import { createSlice } from "@reduxjs/toolkit";

const hotelReviewSlice = createSlice({
  name: "hotelReview",
  initialState: {
    hotelReview: null,
  },
  reducers: {
    addHotelReview: (state, action) => {
      state.hotelReview = action.payload;
    },
  },
});

export const { addHotelReview } = hotelReviewSlice.actions;
export default hotelReviewSlice.reducer;
