import { useState } from "react";
import CardPage from "../../../layout/CardPage";
import Cron from "../../../components/cron/Cron";
import { DoExamenFinalContent } from "./_DoExamenFinalContent";

export const DoExamenFinal = () => {
  const [terminado, setTeminado] = useState(false);
  const onFinish = () => setTeminado(true);

  return (
    <CardPage titulo={`Examen Final`}>
      {!terminado && (
        <div className="Preguntas_Titulo">
          <Cron onFinish={onFinish} minutos={240} />
        </div>
      )}

      <DoExamenFinalContent terminado={terminado} />
    </CardPage>
  );
};
