import { useGetTemas } from "../../hooks/useGetTemas";
import CardPage from "../../layout/CardPage";
import { TemasContent } from "./_TemasContent";


export const Temas = () => {
  useGetTemas();

  return (
    <CardPage titulo="Temas de Estudio">
      <TemasContent />
    </CardPage>
  );
};
