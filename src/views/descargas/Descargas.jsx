import React from "react";
import CardPage from "../../layout/CardPage";
import { DescargasContent } from "./_DescargasContent";
import { useActualizaSesion } from "../../hooks/useActualizaSesion";

export const Descargas = () => {
  useActualizaSesion()
  
  return (
    <CardPage titulo="Descargas">
      <DescargasContent />
    </CardPage>
  );
};
