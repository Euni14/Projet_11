import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const endpointBackend = "http://localhost:3001/api/v1/";

export const updateUserName = createAsyncThunk(
  "user/profile",
  async ({ userName, userToken }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      };

      const { data } = await axios.put(
        `${endpointBackend}user/profile`,
        { userName },
        config
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
