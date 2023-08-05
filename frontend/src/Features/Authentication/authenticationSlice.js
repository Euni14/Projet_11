import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authenticationActions";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  userToken,
  error: null,
  success: false,
  callApiLoading: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.userToken = localStorage.getItem("userToken");
      state.error = null;
      state.success = true;
      state.callApiLoading = false;
    },
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.userToken = null;
      state.error = null;
      state.success = true;
      state.callApiLoading = false;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userToken = payload.body.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
