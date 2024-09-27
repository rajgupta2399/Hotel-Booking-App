import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: null,
  },
  reducers: {
    addToWishList: (state, action) => {
      state.wishList = action.payload;
    },
  },
});

export const { addToWishList } = WishlistSlice.actions;
export default WishlistSlice.reducer;
