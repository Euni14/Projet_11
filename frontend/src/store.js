import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../src/Features/Authentication/authenticationSlice";
import userReducer from "../src/Features/User/userSlice";
import { userApi } from "../src/services/user/userService";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
