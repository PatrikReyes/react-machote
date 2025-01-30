import { useActualizaSesion } from "../../hooks/useActualizaSesion";
import { useGetTemas } from "../../hooks/useGetTemas";
import CardPage from "../../layout/CardPage";
import { TemasContent } from "./_TemasContent";


export const Temas = () => {
  useGetTemas();
  useActualizaSesion()

  return (
    <CardPage titulo="Temas de Estudio">
      <TemasContent />
    </CardPage>
  );
};
