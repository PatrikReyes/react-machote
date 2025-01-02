import React from "react";
import CardPage from "../../../layout/CardPage";
import { ExamenContent } from "./_ExamenContent";
import { useNavigate } from "react-router-dom";
import { useGetTemaByID } from "../../../hooks/useGetTemaByID";

export const Examen = () => {
  const navigate = useNavigate();
  const { temaNombre } = useGetTemaByID();


  return (
    <CardPage
      titulo={`Examen del Tema - ${temaNombre}`}
      tituloBoton1="Regresar"
      accionBoton1={() => navigate("/temas")}
    >
      <ExamenContent />
    </CardPage>
  );
};
