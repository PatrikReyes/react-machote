import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetTemasInicial } from "../store/slices/contenidos/thunks";

export const useGetTemas = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetTemasInicial());
  }, [dispatch]);
};
