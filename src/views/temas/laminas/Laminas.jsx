import React from "react";
import CardPage from "../../../layout/CardPage";
import { LaminasContent } from "./_LaminasContent";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTemaByID } from "../../../hooks/useGetTemaByID";
import { useGetLaminas } from "./useGetLaminas";

export const Laminas = () => {
  const navigate = useNavigate();
  const { temaNombre } = useGetTemaByID();
  useGetLaminas();

  //
  return (
    <CardPage
      titulo={`Láminas - ${temaNombre}`}
      tituloBoton1="Regresar"
      accionBoton1={() => navigate("/temas")}
    >
      <LaminasContent />
    </CardPage>
  );
};
