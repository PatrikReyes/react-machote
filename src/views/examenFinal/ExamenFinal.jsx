import React from "react";
import CardPage from "../../layout/CardPage";
import { ExamenFinalContent } from "./_ExamenFinalContent";
import { useActualizaSesion } from "../../hooks/useActualizaSesion";

export const ExamenFinal = () => {
  useActualizaSesion()
  return (
    <CardPage titulo="Examen Final">
      <ExamenFinalContent />
    </CardPage>
  );
};
