import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for your reducer
const initialState = {
  message: "Hello, World!",
};

// Create a slice using createSlice
const helloWorldSlice = createSlice({
  name: "helloWorld",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

// Export the action creator
export const { setMessage } = helloWorldSlice.actions;

// Export the reducer
export default helloWorldSlice.reducer;
