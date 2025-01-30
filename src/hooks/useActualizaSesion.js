import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetMinutosSesion } from "../store/slices/auth/userSlice";

export const useActualizaSesion = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    actualizar();
  }, []);

  const actualizar = () => dispatch(resetMinutosSesion());

  return { actualizar };
};
