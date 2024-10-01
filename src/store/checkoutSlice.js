import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutInfo: JSON.parse(localStorage.getItem("checkoutInfo")) || [],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCheckoutDetails: (state, action) => {
      state.checkoutInfo.push(action.payload);

      localStorage.setItem("checkoutInfo", JSON.stringify(state.checkoutInfo));
    },
  },
});

export const { addCheckoutDetails } = checkoutSlice.actions;
export default checkoutSlice.reducer;
