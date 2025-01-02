import { useState } from "react";
import Cron from "../../../../components/cron/Cron";
import { useGetTemaByID } from "../../../../hooks/useGetTemaByID";
import CardPage from "../../../../layout/CardPage";
import { DoExamenContent } from "./_DoExamenContent";

export const DoExamen = () => {
  const [terminado, setTeminado] = useState(false);
  const { temaNombre } = useGetTemaByID();

  const onFinish = () => setTeminado(true);

  return (
    <CardPage titulo={`Examen - ${temaNombre}`}>
      {!terminado && (
        <div className="Preguntas_Titulo">
          <Cron onFinish={onFinish} minutos={40} />
        </div>
      )}

      <DoExamenContent terminado={terminado} />
    </CardPage>
  );
};
