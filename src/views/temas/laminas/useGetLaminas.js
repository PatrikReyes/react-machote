import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetLaminas } from "../../../store/slices/contenidos/thunks";
import { useParams } from "react-router-dom";

export const useGetLaminas = () => {
  const dispatch = useDispatch();
const { temaID } = useParams();

  useEffect(() => {
    dispatch(startGetLaminas(temaID));
  }, [dispatch]);
};
