import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "profile",
  initialState: {
    userDetails: [],
  },
  reducers: {
    addUserDetails: (state, action) => {
      state.userDetails.push(action.payload);
    },

    editUserDetails: (state, action) => {
      state.userDetails = { ...state.userDetails, ...action.payload };
    },
  },
});

export const { addUserDetails, editUserDetails } = userProfileSlice.actions;
export default userProfileSlice.reducer;
