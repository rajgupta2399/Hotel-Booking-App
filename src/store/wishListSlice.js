import { createSlice } from "@reduxjs/toolkit";

const loadWishListFromLocalStorage = () => {
  const storedWishList = localStorage.getItem("wishList");
  return storedWishList ? JSON.parse(storedWishList) : [];
};

const WishlistSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: loadWishListFromLocalStorage(),
  },
  reducers: {
    addToWishList: (state, action) => {
      const itemExists = state.wishList.find(
        (item) => item.id === action.payload.id
      ); // Check for duplicates

      if (!itemExists) {
        state.wishList.push(action.payload); // Only add if it doesn't exist
        localStorage.setItem("wishList", JSON.stringify(state.wishList)); // Update local storage
      }
    },
    removeFromWishList: (state, action) => {
      const updatedWishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishList = updatedWishList;
      localStorage.setItem("wishList", JSON.stringify(updatedWishList)); // Update local storage
    },
    clearWishList: (state) => {
      state.wishList = [];
      localStorage.removeItem("wishList"); // Clear local storage
    },
  },
});

export const { addToWishList, removeFromWishList, clearWishList } =
  WishlistSlice.actions;
export default WishlistSlice.reducer;
