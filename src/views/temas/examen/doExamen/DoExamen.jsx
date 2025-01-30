import { useState } from "react";
import Cron from "../../../../components/cron/Cron";
import { useGetTemaByID } from "../../../../hooks/useGetTemaByID";
import CardPage from "../../../../layout/CardPage";
import { DoExamenContent } from "./_DoExamenContent";
import useGetTiempoMaximo from "./useGetTiempoMaximo";
import { useNavigate } from "react-router-dom";

export const DoExamen = () => {
  const navigate = useNavigate();
  const { tiempoMaxMinutos } = useGetTiempoMaximo();
  const [terminado, setTeminado] = useState(false);
  const { temaNombre } = useGetTemaByID();

  const onFinish = () => setTeminado(true);

  
if(!tiempoMaxMinutos) navigate("/temas")

  return (
    <CardPage titulo={`Examen - ${temaNombre}`}>
      {!terminado && (
        <div className="Preguntas_Titulo">
          <Cron onFinish={onFinish} minutos={tiempoMaxMinutos} />
        </div>
      )}

      <DoExamenContent terminado={terminado} />
    </CardPage>
  );
};
