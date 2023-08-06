import { createSlice } from "@reduxjs/toolkit";
import { updateUserName } from "./userActions";

const initialState = {
  email: null,
  firstName: null,
  lastName: null,
  userName: null,
  id: null,
  error: null,
  success: false,
  isEditMode: false,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.email = action.payload.body.email;
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.userName = action.payload.body.userName;
    },
    setUserName: (state, action) => {
      state.userName = action.payload.userName;
    },
    setIsEditMode: (state, action) => {
      console.log(action);
      state.isEditMode = action.payload;
    },
    initUserProfile: (state, action) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.userName = null;
      state.isEditMode = false;
    },
  },
  extraReducers: {
    [updateUserName.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateUserName.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [updateUserName.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setUserProfile, setUserName, setIsEditMode, initUserProfile } =
  userSlice.actions;

export default userSlice.reducer;
