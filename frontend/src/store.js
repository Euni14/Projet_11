import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../src/Features/Authentication/authenticationSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
