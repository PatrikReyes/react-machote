import { Navigate, Route, Routes } from "react-router-dom";

import { LayoutPage } from "../layout/LayoutPage";
import { Usuarios } from "../views/usuarios/Usuarios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startRefreshToken } from "../store/slices/auth/thunks";
import { Empleados } from "../views/empleados/Empleados";

export const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  // en caso de que desde back se quite el usuario
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(startRefreshToken());
    }, 30 * 60000); // 30 min

    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutPage>
      <Routes>
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/" element={<Navigate to="/compradores" />} />
      </Routes>
    </LayoutPage>
  );
};
