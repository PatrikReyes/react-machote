import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    minutosSesion: Date.now(),
  },
  reducers: {
    resetMinutosSesion: (state) => {
      state.minutosSesion = Date.now();
    },
  },
});

export const { resetMinutosSesion } = sessionSlice.actions;
