import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetActividadesFinalAlumno } from "../../store/slices/contenidos/actividadesThunks";

export const useGetActividadesAlumno = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetActividadesFinalAlumno());
  }, [dispatch]);
};
