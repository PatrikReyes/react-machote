import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/auth/userSlice";

export const store = configureStore({
    reducer: {
      userReducer: userSlice.reducer,
    },
  });
  