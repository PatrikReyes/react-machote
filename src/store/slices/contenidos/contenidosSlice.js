import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const contenidosSlice = createSlice({
  name: "contenidos",
  initialState: {
    temasInicial: [],
    laminas: [],
    laminaSeleccionada: 0,
    puedeExamenFinal: false,
    actividadesFinalAlumno:[],
    loading: false,
  },
  reducers: {

    setLoading: (state, { payload }) => {
      state.loading = payload;
    },

    storeActividadesFinalAlumno: (state, { payload }) => {
      state.actividadesFinalAlumno = payload;
    },

    setPuedeExamenFinal: (state, { payload }) => {
      state.puedeExamenFinal = payload;
    },

    storeTemasInicial: (state, { payload }) => {
      state.temasInicial = payload;
    },
    storeLaminas: (state, { payload }) => {
      state.laminas = payload;
    },
    setLaminaSeleccionada: (state, { payload }) => {
      state.laminaSeleccionada = payload;
    },
  },
});

export const {
  setLoading,
  storeActividadesFinalAlumno,
  setPuedeExamenFinal,
  setLaminaSeleccionada,
  storeLaminas,
  storeTemasInicial,
} = contenidosSlice.actions;
