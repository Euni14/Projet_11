import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const endpointBackend = "http://localhost:3001/api/v1/";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    endpointBackend,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authentication.userToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      } else if (localStorage.getItem("userToken")) {
        headers.set(
          "authorization",
          `Bearer ${localStorage.getItem("userToken")}`
        );
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    userProfile: build.mutation({
      query: () => ({
        url: "http://localhost:3001/api/v1/user/profile",
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const { useUserProfileMutation } = userApi;
