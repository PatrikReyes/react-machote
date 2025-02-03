import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetMinutosSesion } from "../store/slices/session/sessionSlice";


export const useActualizaSesion = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    actualizar();
  }, []);

  const actualizar = () => dispatch(resetMinutosSesion());

  return { actualizar };
};
