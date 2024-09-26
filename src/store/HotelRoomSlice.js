import { createSlice } from "@reduxjs/toolkit";

const HotleRoomSlice = createSlice({
  name: "hotelRoom",
  initialState: {
    hotelRoom: null,
  },
  reducers: {
    addHotelRoom: (state, action) => {
      state.hotelRoom = action.payload;
      // console.log(action.payload);
    },
  },
});

export const { addHotelRoom } = HotleRoomSlice.actions;
export default HotleRoomSlice.reducer;
