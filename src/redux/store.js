import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Import your root reducer here

const store = configureStore({
  reducer: rootReducer, // Provide your root reducer here
  // You can also configure other store options here if needed
});

export default store;
